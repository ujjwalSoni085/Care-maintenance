const Joi = require('joi');

const validate = (schema) => (req, res, next) => {
    const keys = ['params', 'query', 'body'];
    
    for (let key of keys) {
        if (schema[key]) {
            const { error, value } = schema[key].validate(req[key], { abortEarly: false });
            
            if (error) {
                const errorMessage = error.details.map((details) => details.message).join(', ');
                return res.status(400).json({
                    success: false,
                    message: errorMessage
                });
            }
            
            // Assign validated value back to req (this handles Joi default values and type casting)
            req[key] = value;
        }
    }
    
    next();
};

module.exports = validate;
