const mongoose = require('mongoose');
const path = require('path');
require(path.join(__dirname, '..', 'node_modules', 'dotenv')).config({ path: path.join(__dirname, '..', '.env') });

const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://caremaintanceU:Carems3241@caremaintance.zcwdinj.mongodb.net/?appName=caremaintance';

async function cleanup() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB for cleanup...');

    const User = require('../src/models/User');
    const Blog = require('../src/models/Blog');
    const Notification = require('../src/models/Notification');
    const OTP = require('../src/models/OTP');
    const ServiceRequest = require('../src/models/ServiceRequest');
    const Feedback = require('../src/models/feedback.model');

    // 1. Delete all Feedbacks, Notifications, OTPs, Blogs, and Service Requests
    const feedbackDelete = await Feedback.deleteMany({});
    console.log(`Deleted ${feedbackDelete.deletedCount} feedbacks.`);

    const notificationDelete = await Notification.deleteMany({});
    console.log(`Deleted ${notificationDelete.deletedCount} notifications.`);

    const otpDelete = await OTP.deleteMany({});
    console.log(`Deleted ${otpDelete.deletedCount} OTPs.`);

    const blogDelete = await Blog.deleteMany({});
    console.log(`Deleted ${blogDelete.deletedCount} blogs.`);

    const serviceRequestDelete = await ServiceRequest.deleteMany({});
    console.log(`Deleted ${serviceRequestDelete.deletedCount} service requests.`);

    // 2. Delete Demo Users
    // Real emails to keep:
    const realEmails = [
      'lokesh954000@gmail.com',
      'ujjwalsoni@gmail.com',
      'carems07@gmail.com',
      'ujjwal96soni@gmail.com',
      'dushyantpandey@carems.in'
    ];

    // Delete any users whose emails are NOT in the real list, OR who are Test/Demo users.
    // We will delete users where:
    // - name contains "Test" or "John Doe" or "example"
    // - OR email matches test emails
    // - OR email is not in the real list (and not empty for technicians)
    // Wait, let's just delete users that are not in our real list!
    // But wait, what if a technician doesn't have an email? (They have a phone number instead).
    // Let's delete users who have:
    // - name containing "Test" (case insensitive)
    // - OR name containing "John Doe" (case insensitive)
    // - OR name containing "example" (case insensitive)
    // - OR email containing "example.com" or "test.com" or "tech2@carems.in" or "tech@carems.in" or "admin@carems.in" or "admin2@carems.in" or "Test3@gmail.com"
    // - OR role is technician and phone starts with 9 (since all generated test phone numbers start with 9 and have names like "Test Technician")
    
    const userDelete = await User.deleteMany({
      $or: [
        { name: { $regex: /test|john doe|example/i } },
        { email: { $regex: /example\.com|test\.com|tech2@carems\.in|tech@carems\.in|admin@carems\.in|admin2@carems\.in|Test3@gmail\.com/i } },
        { email: { $nin: realEmails }, role: { $ne: 'technician' } }, // Delete non-technician users that are not in our list
        { role: 'technician', name: { $regex: /Test/i } } // Delete all technicians whose name has Test
      ]
    });
    console.log(`Deleted ${userDelete.deletedCount} demo/test users.`);

    // List remaining users to verify
    const remainingUsers = await User.find({});
    console.log('\n--- Remaining Users in DB ---');
    remainingUsers.forEach(u => {
      console.log(`- ${u.role} | Name: ${u.name} | Email: ${u.email} | Phone: ${u.phone}`);
    });

    console.log('\nCleanup completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Cleanup failed:', error);
    process.exit(1);
  }
}

cleanup();
