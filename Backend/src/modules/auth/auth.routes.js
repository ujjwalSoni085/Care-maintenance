const express = require('express');
const router = express.Router();
const authController = require('./auth.controller');
const { protect } = require('./auth.middleware');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/refresh-token', authController.refreshToken);
router.post('/logout', authController.logout);

router.get('/me', protect, authController.getMe);

module.exports = router;
