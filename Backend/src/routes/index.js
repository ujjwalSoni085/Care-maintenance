const express = require('express');
const router = express.Router();

// Import individual route modules
const authRoutes = require('../modules/auth/auth.routes');
const userRoutes = require('../modules/user/user.routes');

// Mount routes
router.use('/auth', authRoutes);
router.use('/users', userRoutes);

module.exports = router;
