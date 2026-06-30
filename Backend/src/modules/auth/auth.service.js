const authRepository = require('./auth.repository');
const jwt = require('jsonwebtoken');
const { getAuth } = require('firebase-admin/auth');
const app = require('../../config/firebase-admin');

class AuthService {
    /**
     * Verify Firebase Token and Login/Register User
     * @param {String} idToken 
     * @returns {Promise<Object>} Object containing user and token
     */
    async verifyFirebaseAuth(idToken) {
        // Verify Firebase token
        const decodedToken = await getAuth(app).verifyIdToken(idToken);
        const { email, name, uid } = decodedToken;

        // Check if user exists
        let user = await authRepository.findUserByEmail(email);

        if (!user) {
            // Create a new user with Firebase details
            user = await authRepository.createUser({
                email,
                name: name || email.split('@')[0],
                authProvider: 'firebase'
            });
        }

        // Generate local token
        const token = this.generateToken(user._id);

        // Return user info and token
        const userResponse = user.toObject();
        if (userResponse.password) delete userResponse.password;

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
