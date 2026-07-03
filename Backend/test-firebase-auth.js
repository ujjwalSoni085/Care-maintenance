const admin = require('firebase-admin');
const { getAuth } = require('firebase-admin/auth');
const serviceAccount = require('./serviceAccountKey.json');

try {
  admin.initializeApp({
    credential: admin.cert(serviceAccount)
  });
  
  getAuth().listUsers(1)
    .then(() => {
      console.log('Firebase credentials are valid!');
      process.exit(0);
    })
    .catch((error) => {
      console.error('Error connecting to Firebase:', error.message);
      process.exit(1);
    });
} catch (error) {
  console.error('Error initializing Firebase:', error.message);
  process.exit(1);
}

