const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { normalizePhone } = require('../utils/phone.utils');

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please provide a name'],
            trim: true
        },
        email: {
            type: String,
            required: function() {
                return this.role !== 'technician';
            },
            unique: true,
            sparse: true,
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
            minlength: 4,
            select: false // Exclude password from query results by default
        },
        authProvider: {
            type: String,
            enum: ['local', 'google', 'firebase'],
            default: 'local'
        },
        role: {
            type: String,
            enum: ['customer', 'technician', 'admin'],
            default: 'customer'
        },
        phone: {
            type: String,
            trim: true,
            unique: true,
            sparse: true
        },
        address: {
            type: String
        },
        specialization: {
            type: String,
            trim: true
        },
        availability: {
            type: String,
            enum: ['Available', 'Busy', 'Offline'],
            default: 'Offline'
        },
        profileImage: {
            type: String
        },
        experience: {
            type: String
        },
        technicianId: {
            type: Number,
            unique: true,
            sparse: true
        },
        cityState: {
            type: String,
            trim: true
        },
        aadhaarOrEmployeeId: {
            type: String,
            trim: true
        },
        status: {
            type: String,
            enum: ['Active', 'Inactive'],
            default: 'Active'
        },
        isVerified: {
            type: Boolean,
            default: false
        },
        resetPasswordOTP: {
            type: String
        },
        resetPasswordOTPExpires: {
            type: Date
        }
    },
    {
        timestamps: true
    }
);

userSchema.pre('validate', function() {
    if (this.email === '' || this.email === null) {
        this.email = undefined;
    }
    if (this.phone) {
        this.phone = normalizePhone(this.phone);
    }
});

userSchema.pre('save', async function() {
    if (!this.isModified('password') || !this.password) return;
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.comparePassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
