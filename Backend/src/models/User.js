const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please provide a name'],
            trim: true
        },
        email: {
            type: String,
            required: [true, 'Please provide an email'],
            unique: true,
            match: [
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                'Please provide a valid email'
            ]
        },
        password: {
            type: String,
            required: function() {
                return this.authProvider === 'local';
            },
            minlength: 6,
            select: false // Exclude password from query results by default
        },
        authProvider: {
            type: String,
            enum: ['local', 'google'],
            default: 'local'
        },
        role: {
            type: String,
            enum: ['customer', 'professional', 'admin'],
            default: 'customer'
        },
        phone: {
            type: String,
            trim: true
        },
        address: {
            type: String
        }
    },
    {
        timestamps: true
    }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
