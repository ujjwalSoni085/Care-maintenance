const jwt = require('jsonwebtoken');

/**
 * Middleware to authenticate requests using JWT
 */
const authenticate = (req, res, next) => {
    try {
        let token;
        
        // Check for token in Authorization header
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

        // Verify token using JWT_SECRET from environment variables
        const secret = process.env.JWT_SECRET || 'secret';
        const decoded = jwt.verify(token, secret);

        // Attach user info to request object
        req.user = decoded;
        
        next();
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: 'Not authorized, token failed'
        });
    }
};

module.exports = authenticate;
