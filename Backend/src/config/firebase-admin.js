const admin = require('firebase-admin');
const path = require('path');
const fs = require('fs');

// Path to the service account key
const serviceAccountPath = path.join(__dirname, '../../serviceAccountKey.json');

try {
    let credential;
    
    // Check if the service account file exists
    if (fs.existsSync(serviceAccountPath)) {
        const serviceAccount = require(serviceAccountPath);
        credential = admin.credential.cert(serviceAccount);
    } else {
        // Fallback to default credentials (might fail in production without env variables)
        credential = admin.credential.applicationDefault();
        console.warn('⚠️ serviceAccountKey.json not found. Falling back to applicationDefault()');
    }

    admin.initializeApp({
        credential
    });
    
    console.log('Firebase Admin initialized successfully');
} catch (error) {
    if (!/already exists/.test(error.message)) {
        console.error('Firebase Admin initialization error:', error.stack);
    }
}

module.exports = admin;

module.exports = admin;
