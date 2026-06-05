const authRepository = require('./auth.repository');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

class AuthService {
    /**
     * Register a new user
     * @param {Object} userData 
     * @returns {Promise<Object>} Object containing user and token
     */
    async registerUser(userData) {
        // Check if email exists
        const emailExists = await authRepository.checkEmailExists(userData.email);
        if (emailExists) {
            const error = new Error('Email is already registered');
            error.statusCode = 400;
            throw error;
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(userData.password, salt);

        // Create user
        const newUserData = {
            ...userData,
            password: hashedPassword
        };
        const user = await authRepository.createUser(newUserData);

        // Generate token
        const token = this.generateToken(user._id);

        // Remove password from response
        const userResponse = user.toObject();
        delete userResponse.password;

        return { user: userResponse, token };
    }

    /**
     * Login user
     * @param {String} email 
     * @param {String} password 
     * @returns {Promise<Object>} Object containing user and token
     */
    async loginUser(email, password) {
        // Find user by email
        const user = await authRepository.findUserByEmail(email);
        if (!user) {
            const error = new Error('Invalid email or password');
            error.statusCode = 401;
            throw error;
        }

        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            const error = new Error('Invalid email or password');
            error.statusCode = 401;
            throw error;
        }

        // Generate token
        const token = this.generateToken(user._id);

        // Remove password from response
        const userResponse = user.toObject();
        delete userResponse.password;

        return { user: userResponse, token };
    }

    /**
     * Get user by ID
     * @param {String} userId 
     * @returns {Promise<Object>}
     */
    async getUserById(userId) {
        const user = await authRepository.findUserById(userId);
        if (!user) {
            const error = new Error('User not found');
            error.statusCode = 404;
            throw error;
        }
        return user;
    }

    /**
     * Generate JWT Token
     * @param {String} id 
     * @returns {String} token
     */
    generateToken(id) {
        return jwt.sign({ id }, process.env.JWT_SECRET || 'secret_key', {
            expiresIn: process.env.JWT_EXPIRE || '30d'
        });
    }
}

module.exports = new AuthService();
