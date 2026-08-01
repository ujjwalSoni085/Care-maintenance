const mongoose = require('mongoose');
const {
    REQUEST_STATUS,
    REQUEST_PRIORITY,
    SERVICE_CATEGORIES
} = require('../modules/request/request.constants');

const serviceRequestSchema = new mongoose.Schema(
    {
        // Client Information
        clientName: {
            type: String,
            required: [true, 'Please provide client name'],
            trim: true
        },
        clientPhone: {
            type: String,
            required: [true, 'Please provide client phone number'],
            trim: true
        },
        clientAddress: {
            type: String,
            required: [true, 'Please provide client address'],
            trim: true
        },

        // Service Information
        serviceCategory: {
            type: String,
            required: [true, 'Please provide a service category'],
            enum: Object.values(SERVICE_CATEGORIES),
            trim: true
        },
        problemDescription: {
            type: String,
            required: [true, 'Please provide a problem description'],
            trim: true
        },
        priority: {
            type: String,
            enum: Object.values(REQUEST_PRIORITY),
            default: REQUEST_PRIORITY.MEDIUM
        },

        // Job Information
        status: {
            type: String,
            enum: Object.values(REQUEST_STATUS),
            default: REQUEST_STATUS.PENDING
        },
        assignedTo: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: [true, 'Please provide the creator user ID']
        },

        // OTP Reference
        otp: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'OTP'
        },

        // Timeline
        assignedAt: {
            type: Date
        },
        startedAt: {
            type: Date
        },
        completedAt: {
            type: Date
        }
    },
    {
        timestamps: true // Automatically adds createdAt and updatedAt
    }
);

const ServiceRequest = mongoose.model('ServiceRequest', serviceRequestSchema);

module.exports = ServiceRequest;
