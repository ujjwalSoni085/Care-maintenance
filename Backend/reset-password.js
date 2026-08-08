const path = require('path');
require(path.join(__dirname, 'node_modules', 'dotenv')).config({ path: path.join(__dirname, '.env') });
const mongoose = require(path.join(__dirname, 'node_modules', 'mongoose'));
const User = require(path.join(__dirname, 'src', 'models', 'User'));

async function resetAndList() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB...');

        // 1. Find all technicians
        const technicians = await User.find({ role: 'technician' });
        console.log('\n--- Existing Technicians ---');
        technicians.forEach(t => {
            console.log(`Name: ${t.name} | Email: ${t.email} | Role: ${t.role} | Available: ${t.availability}`);
        });

        // 2. Find Test3@gmail.com (case insensitive)
        const targetEmail = 'Test3@gmail.com';
        let user = await User.findOne({ email: { $regex: new RegExp(`^${targetEmail}$`, 'i') } });

        if (user) {
            user.password = 'password123';
            user.isVerified = true;
            await user.save();
            console.log(`\n✅ Successfully reset password for ${user.email} to: password123`);
        } else {
            // Create Test3@gmail.com if not found
            user = new User({
                name: 'Test Technician 3',
                email: targetEmail,
                password: 'password123',
                role: 'technician',
                availability: 'Available',
                specialization: 'Electrician',
                isVerified: true
            });
            await user.save();
            console.log(`\n✅ User ${targetEmail} did not exist, so created it with password: password123`);
        }

        process.exit(0);
    } catch (err) {
        console.error('Error:', err);
        process.exit(1);
    }
}

resetAndList();
