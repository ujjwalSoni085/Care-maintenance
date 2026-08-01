const express = require('express');
const router = express.Router();
const authController = require('./auth.controller');
const { protect: authenticate } = require('./auth.middleware');

router.post('/register', authController.register);
router.post('/login', authController.login);

router.post('/logout', authController.logout);

router.post('/forgot-password', authController.forgotPassword);
router.post('/verify-otp', authController.verifyOTP);
router.post('/reset-password', authController.resetPassword);

router.get('/me', authenticate, authController.getCurrentUser);

module.exports = router;
