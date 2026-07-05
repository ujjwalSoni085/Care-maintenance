const authService = require('./auth.service');
const asyncHandler = require('express-async-handler');

class AuthController {
    /**
     * @desc    Register a new user
     * @route   POST /api/auth/register
     * @access  Public
     */
    register = asyncHandler(async (req, res, next) => {
        try {
            const { user, token } = await authService.registerLocal(req.body);
            
            res.status(201).json({
                success: true,
                message: 'Registration successful',
                data: {
                    user,
                    token
                }
            });
        } catch (error) {
            console.error('Registration Error:', error);
            res.status(error.statusCode || 400);
            throw new Error(error.message || 'Registration Failed');
        }
    });

    /**
     * @desc    Login a user
     * @route   POST /api/auth/login
     * @access  Public
     */
    login = asyncHandler(async (req, res, next) => {
        try {
            const { email, password } = req.body;
            
            if (!email || !password) {
                res.status(400);
                throw new Error('Please provide email and password');
            }

            const { user, token } = await authService.loginLocal(email, password);
            
            res.status(200).json({
                success: true,
                message: 'Login successful',
                data: {
                    user,
                    token
                }
            });
        } catch (error) {
            console.error('Login Error:', error);
            res.status(error.statusCode || 401);
            throw new Error(error.message || 'Login Failed');
        }
    });

    /**
     * @desc    Get current logged in user
     * @route   GET /api/auth/me
     * @access  Private
     */
    getMe = asyncHandler(async (req, res, next) => {
        // req.user should be populated by the auth middleware
        if (!req.user || !req.user.id) {
            res.status(401);
            throw new Error('Not authorized');
        }

        const user = await authService.getUserById(req.user.id);
        
        res.status(200).json({
            success: true,
            data: {
                user
            }
        });
    });

    /**
     * @desc    Logout user
     * @route   POST /api/auth/logout
     * @access  Public
     */
    logout = asyncHandler(async (req, res, next) => {
        res.status(200).json({
            success: true,
            message: 'Logged out successfully'
        });
    });
}

module.exports = new AuthController();
