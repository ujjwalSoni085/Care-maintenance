const authService = require('./auth.service');

class AuthController {
    /**
     * @desc    Register a new user
     * @route   POST /api/auth/register
     * @access  Public
     */
    async register(req, res, next) {
        try {
            const { user, token } = await authService.registerUser(req.body);
            
            res.status(201).json({
                success: true,
                message: 'User registered successfully',
                data: {
                    user,
                    token
                }
            });
        } catch (error) {
            // Forward the error to the error handling middleware
            res.status(error.statusCode || 500).json({
                success: false,
                message: error.message || 'Server Error'
            });
        }
    }

    /**
     * @desc    Login user
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

            const { user, token } = await authService.loginUser(email, password);
            
            res.status(200).json({
                success: true,
                message: 'Login successful',
                data: {
                    user,
                    token
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
     * @desc    Refresh user token
     * @route   POST /api/auth/refresh-token
     * @access  Public
     */
    async refreshToken(req, res, next) {
        try {
            const { token } = req.body;
            if (!token) {
                return res.status(400).json({
                    success: false,
                    message: 'Token is required'
                });
            }

            const jwt = require('jsonwebtoken');
            const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret_key', { ignoreExpiration: true });
            
            const newToken = authService.generateToken(decoded.id);
            
            res.status(200).json({
                success: true,
                message: 'Token refreshed successfully',
                data: {
                    token: newToken
                }
            });
        } catch (error) {
            res.status(401).json({
                success: false,
                message: 'Invalid token'
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
            // Since we are using stateless JWT, logout is primarily handled client-side.
            // We just return a success message here.
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
