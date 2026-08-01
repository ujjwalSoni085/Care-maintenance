const jwt = require('jsonwebtoken');
const User = require('../../models/User');

/**
 * Middleware to protect routes and verify JWT token
 */
const protect = async (req, res, next) => {
    try {
        let token;

        // Check if auth header exists and starts with Bearer
        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            token = req.headers.authorization.split(' ')[1];
        }

        // Check if token exists
        if (!token) {
            return res.status(401).json({
                success: false,
                message: 'Not authorized to access this route'
            });
        }

        // Verify token
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret_key');
            
            // Set user in request object
            const user = await User.findById(decoded.id);
            if (!user) {
                return res.status(401).json({
                    success: false,
                    message: 'User no longer exists'
                });
            }
            req.user = user;
            
            next();
        } catch (error) {
            return res.status(401).json({
                success: false,
                message: 'Not authorized to access this route, token failed'
            });
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Server error in auth middleware'
        });
    }
};

/**
 * Middleware to authorize specific roles
 * @param {...String} roles - Array of roles
 */
const authorize = (...roles) => {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(403).json({
                success: false,
                message: 'User role undefined is not authorized to access this route'
            });
        }
        const userRole = (req.user.role || '').toLowerCase();
        const allowedRoles = roles.map(r => r.toLowerCase());
        if (!allowedRoles.includes(userRole)) {
            return res.status(403).json({
                success: false,
                message: `User role ${req.user.role} is not authorized to access this route`
            });
        }
        next();
    };
};

module.exports = {
    protect,
    authorize
};
