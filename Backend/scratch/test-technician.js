const axios = require('axios');

async function runTest() {
  try {
    // Let's login as admin first. We saw "admin2@carems.in" is an admin user.
    const loginRes = await axios.post('http://localhost:5000/api/auth/login', {
      email: 'admin2@carems.in',
      password: 'password123'
    });

    const token = loginRes.data.token;
    console.log('Logged in as admin successfully. Token:', token);

    // Now try to create a new technician
    // We generate a unique phone number so it doesn't fail on duplicate phone validation.
    const uniquePhone = '9' + Math.floor(100000000 + Math.random() * 900000000);
    const uniqueEmail = 'tech_' + Date.now() + '@carems.in';

    const createRes = await axios.post('http://localhost:5000/api/technicians', {
      name: 'Test Technician Service ' + uniquePhone,
      phone: uniquePhone,
      email: uniqueEmail,
      password: 'password123',
      specialization: 'Plumbing Services, AC Maintenance',
      experience: '2 Years',
      aadhaarOrEmployeeId: '123456789012',
      cityState: 'Delhi',
      address: 'Test Address 123'
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    console.log('Technician creation response:', createRes.data);
  } catch (error) {
    console.error('Error occurred:');
    if (error.response) {
      console.error('Status:', error.response.status);
      console.error('Data:', JSON.stringify(error.response.data, null, 2));
    } else {
      console.error(error.message);
    }
  }
}

runTest();
