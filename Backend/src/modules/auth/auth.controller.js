const authService = require('./auth.service');

class AuthController {
    /**
     * @desc    Authenticate with Firebase Token
     * @route   POST /api/auth/firebase-auth
     * @access  Public
     */
    async firebaseAuth(req, res, next) {
        try {
            const { idToken } = req.body;
            
            if (!idToken) {
                return res.status(400).json({
                    success: false,
                    message: 'Please provide Firebase idToken'
                });
            }

            const { user, token } = await authService.verifyFirebaseAuth(idToken);
            
            res.status(200).json({
                success: true,
                message: 'Authentication successful',
                data: {
                    user,
                    token
                }
            });
        } catch (error) {
            console.error('Firebase Auth Error:', error);
            // Forward the error to the error handling middleware
            res.status(error.statusCode || 401).json({
                success: false,
                message: error.message || 'Authentication Failed'
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
