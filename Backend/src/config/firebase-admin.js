const { initializeApp, cert, applicationDefault } = require('firebase-admin/app');
const path = require('path');
const fs = require('fs');

// Path to the service account key
const serviceAccountPath = path.join(__dirname, '../../serviceAccountKey.json');
let app;

try {
    let credential;
    
    // Check if the service account JSON is provided in environment variables (for Render/production)
    if (process.env.FIREBASE_SERVICE_ACCOUNT) {
        const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
        
        // Fix for common Render env var issue where \n in private key is escaped to \\n
        if (serviceAccount.private_key) {
            serviceAccount.private_key = serviceAccount.private_key.replace(/\\n/g, '\n');
        }
        
        credential = cert(serviceAccount);
    } 
    // Otherwise, check if the local file exists (for local development)
    else if (fs.existsSync(serviceAccountPath)) {
        const serviceAccount = require(serviceAccountPath);
        credential = cert(serviceAccount);
    } else {
        // Fallback to default credentials
        credential = applicationDefault();
        console.warn('⚠️ serviceAccountKey.json or FIREBASE_SERVICE_ACCOUNT env var not found. Falling back to applicationDefault()');
    }

    app = initializeApp({
        credential
    });
    
    console.log('Firebase Admin initialized successfully');
} catch (error) {
    if (!/already exists/.test(error.message)) {
        console.error('Firebase Admin initialization error:', error.stack || error.message);
    }
}

module.exports = app;
