const Razorpay = require('razorpay');

// Initialize Razorpay instance
// Note: RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET must be set in your .env file
const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID || 'rzp_live_Szrl4wNQhe7POg', // Fallback to provided key
    key_secret: process.env.RAZORPAY_KEY_SECRET || 'ggg2moz65s0yi1UHX23Me0EL' // TODO: Set this in .env
});

exports.createOrder = async (req, res, next) => {
    try {
        const { amount, currency } = req.body;

        if (!amount) {
            return res.status(400).json({ success: false, message: 'Amount is required' });
        }

        const options = {
            amount: amount, // amount in the smallest currency unit (paise)
            currency: currency || "INR",
            receipt: `receipt_order_${Math.floor(Math.random() * 1000000)}`
        };

        const order = await razorpay.orders.create(options);

        if (!order) {
            return res.status(500).json({ success: false, message: 'Failed to create order' });
        }

        res.status(200).json({
            success: true,
            orderId: order.id,
            amount: order.amount,
            currency: order.currency
        });
    } catch (error) {
        console.error('Razorpay Error:', error);
        res.status(500).json({ success: false, message: 'Server error while creating order' });
    }
};
