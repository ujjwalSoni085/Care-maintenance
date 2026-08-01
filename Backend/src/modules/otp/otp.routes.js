const express = require('express');
const router = express.Router();
const otpController = require('./otp.controller');
const authenticate = require('../../middleware/authenticate');
const authorize = require('../../middleware/authorize');
const validate = require('../../middleware/validate');
const {
    generateOtpValidation,
    verifyOtpValidation,
    resendOtpValidation
} = require('./otp.validation');

// Apply authentication middleware to all OTP routes
router.use(authenticate);

router.post('/generate', validate(generateOtpValidation), otpController.generateOtp);
router.post('/verify', authorize('technician'), validate(verifyOtpValidation), otpController.verifyOtp);
router.post('/resend', validate(resendOtpValidation), otpController.resendOtp);

module.exports = router;
