const mongoose = require('mongoose');
const path = require('path');
const bcrypt = require('bcryptjs');
require(path.join(__dirname, '..', 'node_modules', 'dotenv')).config({ path: path.join(__dirname, '..', '.env') });

const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://caremaintanceU:Carems3241@caremaintance.zcwdinj.mongodb.net/?appName=caremaintance';
const DEFAULT_PASSWORD = 'Password123!';

async function resetPasswords() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB for password reset...');

    const User = require('../src/models/User');
    
    // Find all users
    const users = await User.find({});
    console.log(`Found ${users.length} users to update.`);

    // Generate salt and hash the default password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(DEFAULT_PASSWORD, salt);

    let updatedCount = 0;

    for (const user of users) {
      // By using User.updateOne, we can directly update the database bypassing the Mongoose save hooks if needed, 
      // but since it's just the password, we can also use user.password = DEFAULT_PASSWORD; await user.save();
      // Let's use user.save() so the pre-save hook in User.js does the hashing for us automatically.
      user.password = DEFAULT_PASSWORD;
      await user.save();
      console.log(`- Updated password for ${user.email || user.phone} (${user.role})`);
      updatedCount++;
    }

    console.log(`\nSuccessfully reset ${updatedCount} passwords to: ${DEFAULT_PASSWORD}`);
    process.exit(0);
  } catch (error) {
    console.error('Password reset failed:', error);
    process.exit(1);
  }
}

resetPasswords();
