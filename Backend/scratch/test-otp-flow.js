const mongoose = require('mongoose');
const axios = require('axios');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

const MONGO_URI = process.env.MONGO_URI;
const API_URL = 'http://localhost:5000/api';

async function runTest() {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB');

    const User = require('../src/models/User');
    const ServiceRequest = require('../src/models/ServiceRequest');
    const OTP = require('../src/models/OTP');

    // 1. Find or create a technician user
    let technician = await User.findOne({ role: 'technician', phone: '+919999999999' });
    if (!technician) {
      technician = await User.create({
        name: 'Test Technician OTP Flow',
        phone: '+919999999999',
        password: 'password123',
        role: 'technician',
        availability: 'Available',
        status: 'Active',
        isVerified: true
      });
      console.log('Created new test technician');
    } else {
      // Ensure password is correct and status is active
      technician.password = 'password123';
      technician.status = 'Active';
      technician.isVerified = true;
      await technician.save();
      console.log('Found existing test technician');
    }

    // 2. Find or create a customer user
    let customer = await User.findOne({ role: 'customer' });
    if (!customer) {
      customer = await User.create({
        name: 'Test Customer',
        phone: '+918888888888',
        email: 'customer@carems.in',
        role: 'customer'
      });
      console.log('Created new test customer');
    }

    // 3. Login as technician to get JWT token
    console.log('Logging in as technician...');
    const loginRes = await axios.post(`${API_URL}/auth/login`, {
      phone: '+919999999999',
      password: 'password123'
    });
    const token = loginRes.data.token;
    console.log('Technician logged in successfully. Token length:', token.length);

    // 4. Create a service request assigned to this technician
    console.log('Creating a service request...');
    const request = await ServiceRequest.create({
      clientName: 'Test Customer',
      clientPhone: '+918888888888',
      clientAddress: '123 Test Street, New Delhi',
      serviceCategory: 'Electrician',
      problemDescription: 'Test issue with lights',
      status: 'Assigned',
      createdBy: customer._id,
      assignedTo: technician._id,
      assignedAt: new Date()
    });
    console.log('Service request created. ID:', request._id);

    const headers = {
      Authorization: `Bearer ${token}`
    };

    // 5. Transition: Assigned -> OnTheWay
    console.log('Transitioning: Assigned -> OnTheWay...');
    let res = await axios.put(`${API_URL}/requests/${request._id}/status`, { status: 'OnTheWay' }, { headers });
    console.log('Transition to OnTheWay success:', res.data.success, 'New Status:', res.data.data.status);

    // 6. Transition: OnTheWay -> Working
    console.log('Transitioning: OnTheWay -> Working...');
    res = await axios.put(`${API_URL}/requests/${request._id}/status`, { status: 'Working' }, { headers });
    console.log('Transition to Working success:', res.data.success, 'New Status:', res.data.data.status);

    // 7. Transition: Working -> WaitingOTP (triggers OTP generation)
    console.log('Transitioning: Working -> WaitingOTP...');
    res = await axios.put(`${API_URL}/requests/${request._id}/status`, { status: 'WaitingOTP' }, { headers });
    console.log('Transition to WaitingOTP success:', res.data.success, 'New Status:', res.data.data.status);

    // 8. Retrieve generated OTP directly from database
    console.log('Retrieving OTP from database...');
    const otpRecord = await OTP.findOne({ requestId: request._id }).sort({ createdAt: -1 });
    if (!otpRecord) {
      throw new Error('OTP was not generated in the database!');
    }
    console.log('Found OTP record. Code:', otpRecord.otp);

    // 9. Verify OTP
    console.log('Verifying OTP...');
    res = await axios.post(`${API_URL}/otp/verify`, {
      requestId: request._id,
      otp: otpRecord.otp
    }, { headers });
    console.log('OTP verification success:', res.data.success);
    console.log('Response Message:', res.data.message);

    // 10. Check final request status
    const finalRequest = await ServiceRequest.findById(request._id);
    console.log('Final Job Status:', finalRequest.status);
    if (finalRequest.status === 'Completed') {
      console.log('TEST PASSED SUCCESSFULLY!');
    } else {
      console.log('TEST FAILED: Status is not Completed!');
    }

    // Clean up test request and OTP
    await ServiceRequest.findByIdAndDelete(request._id);
    await OTP.findByIdAndDelete(otpRecord._id);
    console.log('Cleaned up test request and OTP record.');

  } catch (error) {
    console.error('Test Flow Failed:');
    if (error.response) {
      console.error('Status:', error.response.status);
      console.error('Data:', JSON.stringify(error.response.data, null, 2));
    } else {
      console.error(error);
    }
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB.');
  }
}

runTest();
