const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema(
    {
        requestId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'ServiceRequest',
            required: [true, 'Service Request ID is required']
        },
        otp: {
            type: String,
            required: [true, 'OTP is required']
        },
        expiresAt: {
            type: Date,
            required: [true, 'Expiration time is required']
        },
        verified: {
            type: Boolean,
            default: false
        },
        verifiedAt: {
            type: Date
        }
    },
    {
        timestamps: true // Automatically adds createdAt and updatedAt
    }
);

const OTP = mongoose.model('OTP', otpSchema);

module.exports = OTP;
