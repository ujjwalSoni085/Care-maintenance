const express = require('express');
const router = express.Router();
const authController = require('./auth.controller');
const { protect } = require('./auth.middleware');

router.post('/firebase-auth', authController.firebaseAuth);
router.post('/logout', authController.logout);

router.get('/me', protect, authController.getMe);

module.exports = router;
