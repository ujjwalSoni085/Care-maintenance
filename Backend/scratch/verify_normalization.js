require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../src/models/User');
const authRepository = require('../src/modules/auth/auth.repository');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/carems';

async function testNormalization() {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clean up
    await User.deleteMany({ name: /TestNormalize/ });

    // Test cases for creation
    const tests = [
        { name: 'TestNormalize1', phone: '9999911111', password: 'password', role: 'technician' },
        { name: 'TestNormalize2', phone: '+919999922222', password: 'password', role: 'technician' },
        { name: 'TestNormalize3', phone: '09999933333', password: 'password', role: 'technician' },
        { name: 'TestNormalize4', phone: '919999944444', password: 'password', role: 'technician' },
        { name: 'TestNormalize5', phone: '+91 99999 55555', password: 'password', role: 'technician' }
    ];

    for (const t of tests) {
        const u = await User.create(t);
        console.log(`Created ${t.name} with input: "${t.phone}" -> DB phone: "${u.phone}"`);
    }

    // Test query findUserByPhone with various inputs
    const queryTests = [
        { query: '9999911111', expectedName: 'TestNormalize1' },
        { query: '+91 99999 11111', expectedName: 'TestNormalize1' },
        { query: '+919999922222', expectedName: 'TestNormalize2' },
        { query: '9999922222', expectedName: 'TestNormalize2' },
        { query: '+919999933333', expectedName: 'TestNormalize3' },
        { query: '919999944444', expectedName: 'TestNormalize4' },
        { query: '+919999944444', expectedName: 'TestNormalize4' },
        { query: '9999955555', expectedName: 'TestNormalize5' }
    ];

    console.log('\nTesting query normalization:');
    for (const q of queryTests) {
        const user = await authRepository.findUserByPhone(q.query);
        if (user && user.name === q.expectedName) {
            console.log(`✓ Succeeded querying "${q.query}" -> Found "${user.name}"`);
        } else {
            console.log(`✗ Failed querying "${q.query}" -> Found "${user ? user.name : 'null'}" (Expected: "${q.expectedName}")`);
        }
    }

    // Clean up again
    await User.deleteMany({ name: /TestNormalize/ });
    await mongoose.disconnect();
    console.log('Disconnected');
}

testNormalization().catch(console.error);
