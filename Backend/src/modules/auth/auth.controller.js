const authService = require('./auth.service');

class AuthController {

     * @desc    Register a new user
     * @route   POST /api/auth/register
     * @access  Public
     */
    async register(req, res, next) {
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
            res.status(error.statusCode || 400).json({
                success: false,
                message: error.message || 'Registration Failed'
            });
        }
    }

    /**
     * @desc    Login a user
     * @route   POST /api/auth/login
     * @access  Public
     */
    async login(req, res, next) {
        try {
            const { email, password } = req.body;
            
            if (!email || !password) {
                return res.status(400).json({
                    success: false,
                    message: 'Please provide email and password'
                });
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
            res.status(error.statusCode || 401).json({
                success: false,
                message: error.message || 'Login Failed'
            });
        }
    }

    /**
     * @desc    Get current logged in user
     * @route   GET /api/auth/me
     * @access  Private
     */
    async getMe(req, res, next) {
        try {
            // req.user should be populated by the auth middleware
            if (!req.user || !req.user.id) {
                return res.status(401).json({
                    success: false,
                    message: 'Not authorized'
                });
            }

            const user = await authService.getUserById(req.user.id);
            
            res.status(200).json({
                success: true,
                data: {
                    user
                }
            });
        } catch (error) {
            res.status(error.statusCode || 500).json({
                success: false,
                message: error.message || 'Server Error'
            });
        }
    }

    /**
     * @desc    Logout user
     * @route   POST /api/auth/logout
     * @access  Public
     */
    async logout(req, res, next) {
        try {
            res.status(200).json({
                success: true,
                message: 'Logged out successfully'
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Server Error'
            });
        }
    }
}

module.exports = new AuthController();
