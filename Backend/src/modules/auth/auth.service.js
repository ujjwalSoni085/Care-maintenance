const authRepository = require('./auth.repository');
const jwt = require('jsonwebtoken');
class AuthService {
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

    /**
     * Register a new user locally
     * @param {Object} userData
     * @returns {Promise<Object>} Object containing user and token
     */
    async registerLocal(userData) {
        const { email, phone, name, password } = userData;
        
        // Check if email exists
        const emailExists = await authRepository.checkEmailExists(email);
        if (emailExists) {
            const error = new Error('An account with this email already exists. Please log in instead.');
            error.statusCode = 409;
            throw error;
        }

        // Check if phone exists
        if (phone) {
            const phoneExists = await authRepository.checkPhoneExists(phone);
            if (phoneExists) {
                const error = new Error('This phone number is already registered. Please log in instead.');
                error.statusCode = 409;
                throw error;
            }
        }

        const user = await authRepository.createUser({
            email,
            phone,
            name,
            password,
            authProvider: 'local'
        });

        const token = this.generateToken(user._id);

        const userResponse = user.toObject();
        delete userResponse.password;

        return { user: userResponse, token };
    }

    /**
     * Login user locally
     * @param {String} email
     * @param {String} password
     * @returns {Promise<Object>} Object containing user and token
     */
    async loginLocal(email, password) {
        const user = await authRepository.findUserByEmail(email);
        
        if (!user) {
            const error = new Error('Invalid email or password');
            error.statusCode = 401;
            throw error;
        }

        // Only allow local users to login via password
        if (user.authProvider !== 'local') {
            const error = new Error('Please register manually or reset your password. Third-party login is no longer supported.');
            error.statusCode = 401;
            throw error;
        }

        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            const error = new Error('Invalid email or password');
            error.statusCode = 401;
            throw error;
        }

        const token = this.generateToken(user._id);

        const userResponse = user.toObject();
        delete userResponse.password;

        return { user: userResponse, token };
    }
}

module.exports = new AuthService();
