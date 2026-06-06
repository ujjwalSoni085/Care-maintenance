const express = require('express');
const router = express.Router();
const authController = require('./auth.controller');
const { protect } = require('./auth.middleware');
const validate = require('../../middleware/validate');
const authValidation = require('./auth.validation');

router.post('/register', validate(authValidation.registerValidation), authController.register);
router.post('/login', validate(authValidation.loginValidation), authController.login);
router.post('/refresh-token', authController.refreshToken);
router.post('/logout', authController.logout);

router.get('/me', protect, authController.getMe);

module.exports = router;
