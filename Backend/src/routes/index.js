const express = require('express');
const router = express.Router();

// Import individual route modules
const authRoutes = require('../modules/auth/auth.routes');
const userRoutes = require('../modules/user/user.routes');
const contactRoutes = require('./contact.routes');
const feedbackRoutes = require('./feedback.routes');
const paymentRoutes = require('../modules/payment/payment.routes');

// Mount routes
router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/contact', contactRoutes);
router.use('/feedback', feedbackRoutes);
router.use('/payment', paymentRoutes);

module.exports = router;
