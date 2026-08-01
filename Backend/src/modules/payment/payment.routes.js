const express = require('express');
const router = express.Router();
const { createOrder } = require('./payment.controller');
const authenticate = require('../../middleware/authenticate');

router.use(authenticate);

// Route: POST /api/payment/create-order
router.post('/create-order', createOrder);

module.exports = router;
