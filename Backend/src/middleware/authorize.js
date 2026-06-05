/**
 * Middleware to authorize requests based on user roles
 * @param {...String} roles - Roles allowed to access the route
 * @returns {Function} Express middleware function
 */
const authorize = (...roles) => {
    return (req, res, next) => {
        // Ensure the user object exists (should be populated by authenticate middleware)
        if (!req.user) {
            return res.status(401).json({
                success: false,
                message: 'Not authorized to access this route'
            });
        }

        // Check if the user's role is included in the allowed roles
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({
                success: false,
                message: `User role '${req.user.role}' is not authorized to access this route`
            });
        }
        
        next();
    };
};

module.exports = authorize;
