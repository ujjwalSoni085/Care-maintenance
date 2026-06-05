const User = require('../../models/User');

class UserController {
    /**
     * @desc    Get all users
     * @route   GET /api/users
     * @access  Private/Admin
     */
    async getAllUsers(req, res, next) {
        try {
            const users = await User.find({});
            
            res.status(200).json({
                success: true,
                count: users.length,
                data: {
                    users
                }
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message || 'Server Error'
            });
        }
    }
}

module.exports = new UserController();
