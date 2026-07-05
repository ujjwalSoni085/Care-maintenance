const User = require('../../models/User');
const asyncHandler = require('express-async-handler');

class UserController {
    /**
     * @desc    Get all users
     * @route   GET /api/users
     * @access  Private/Admin
     */
    getAllUsers = asyncHandler(async (req, res, next) => {
        const users = await User.find({});
        
        res.status(200).json({
            success: true,
            count: users.length,
            data: {
                users
            }
        });
    });
}

module.exports = new UserController();
