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

        // Convert allowed roles and user role to lowercase for a case-insensitive check
        const userRole = (req.user.role || '').toLowerCase();
        const allowedRoles = roles.map(r => r.toLowerCase());

        // Check if the user's role is included in the allowed roles
        if (!allowedRoles.includes(userRole)) {
            return res.status(403).json({
                success: false,
                message: `User role '${req.user.role}' is not authorized to access this route`
            });
        }
        
        next();
    };
};

module.exports = authorize;
