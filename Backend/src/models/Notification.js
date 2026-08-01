const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: [true, 'User ID is required']
        },
        title: {
            type: String,
            required: [true, 'Notification title is required'],
            trim: true
        },
        message: {
            type: String,
            required: [true, 'Notification message is required'],
            trim: true
        },
        type: {
            type: String,
            enum: ['Assignment', 'OTP', 'Completed', 'Cancelled', 'Reminder'],
            required: [true, 'Notification type is required']
        },
        requestId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'ServiceRequest'
        },
        isRead: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true // Automatically adds createdAt and updatedAt
    }
);

const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;
