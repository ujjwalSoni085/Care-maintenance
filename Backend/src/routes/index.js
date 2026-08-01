const express = require('express');
const router = express.Router();

// Import individual route modules
const authRoutes = require('../modules/auth/auth.routes');
const userRoutes = require('../modules/user/user.routes');
const contactRoutes = require('./contact.routes');
const feedbackRoutes = require('./feedback.routes');
const paymentRoutes = require('../modules/payment/payment.routes');

const blogRoutes = require('./blog.routes');
const uploadRoutes = require('./upload.routes');
const requestRoutes = require('../modules/request/request.routes');
const otpRoutes = require('../modules/otp/otp.routes');
const technicianRoutes = require('../modules/technician/technician.routes');
const notificationRoutes = require('../modules/notification/notification.routes');

// Mount routes
router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/contact', contactRoutes);
router.use('/feedback', feedbackRoutes);
router.use('/payment', paymentRoutes);
router.use('/blogs', blogRoutes);
router.use('/upload', uploadRoutes);
router.use('/requests', requestRoutes);
router.use('/technicians', technicianRoutes);
router.use('/otp', otpRoutes);
router.use('/notifications', notificationRoutes);

module.exports = router;
