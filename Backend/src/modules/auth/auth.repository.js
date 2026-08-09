const User = require('../../models/User');
const { normalizePhone } = require('../../utils/phone.utils');

class AuthRepository {
    /**
     * Create a new user in the database
     * @param {Object} userData 
     * @returns {Promise<Object>} The saved user document
     */
    async createUser(userData) {
        const user = new User(userData);
        return await user.save();
    }

    /**
     * Find a user by their email address
     * @param {String} email 
     * @returns {Promise<Object|null>} The user document including password
     */
    async findUserByEmail(email) {
        // Select password explicitly since it's excluded by default in the User model
        return await User.findOne({ email }).select('+password');
    }

    /**
     * Find a user by their ID
     * @param {String} userId 
     * @returns {Promise<Object|null>} The user document
     */
    async findUserById(userId) {
        return await User.findById(userId);
    }

    /**
     * Check if a user with the given email exists
     * @param {String} email 
     * @returns {Promise<Boolean>}
     */
    async checkEmailExists(email) {
        const count = await User.countDocuments({ email });
        return count > 0;
    }

    /**
     * Check if a user with the given phone exists
     * @param {String} phone 
     * @returns {Promise<Boolean>}
     */
    async checkPhoneExists(phone) {
        const normalized = normalizePhone(phone);
        const count = await User.countDocuments({ phone: normalized });
        return count > 0;
    }

    /**
     * Find a user by their phone number
     * @param {String} phone 
     * @returns {Promise<Object|null>} The user document including password
     */
    async findUserByPhone(phone) {
        const normalized = normalizePhone(phone);
        return await User.findOne({ phone: normalized }).select('+password');
    }
}

module.exports = new AuthRepository();
