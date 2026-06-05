const express = require('express');
const router = express.Router();
const userController = require('./user.controller');
const { protect, authorize } = require('../auth/auth.middleware');

// Route to get all users, restricted to admin only
router.get('/', protect, authorize('admin'), userController.getAllUsers);

module.exports = router;
