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
                token,
                user
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
                token,
                user
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
    getCurrentUser = asyncHandler(async (req, res, next) => {
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

    /**
     * @desc    Forgot Password - Send OTP
     * @route   POST /api/auth/forgot-password
     * @access  Public
     */
    forgotPassword = asyncHandler(async (req, res, next) => {
        const { email } = req.body;
        if (!email) {
            res.status(400);
            throw new Error('Please provide an email');
        }

        await authService.forgotPassword(email);

        res.status(200).json({
            success: true,
            message: 'OTP sent to email successfully'
        });
    });

    /**
     * @desc    Verify OTP
     * @route   POST /api/auth/verify-otp
     * @access  Public
     */
    verifyOTP = asyncHandler(async (req, res, next) => {
        const { email, otp } = req.body;
        if (!email || !otp) {
            res.status(400);
            throw new Error('Please provide email and OTP');
        }

        await authService.verifyOTP(email, otp);

        res.status(200).json({
            success: true,
            message: 'OTP verified successfully'
        });
    });

    /**
     * @desc    Reset Password
     * @route   POST /api/auth/reset-password
     * @access  Public
     */
    resetPassword = asyncHandler(async (req, res, next) => {
        const { email, otp, newPassword } = req.body;
        if (!email || !otp || !newPassword) {
            res.status(400);
            throw new Error('Please provide email, OTP, and new password');
        }

        await authService.resetPassword(email, otp, newPassword);

        res.status(200).json({
            success: true,
            message: 'Password reset successfully'
        });
    });
}

module.exports = new AuthController();
