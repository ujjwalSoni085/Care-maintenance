const Joi = require('joi');

const registerValidation = {
    body: Joi.object().keys({
        name: Joi.string().required().trim(),
        email: Joi.string().email().required().trim(),
        password: Joi.string().min(4).required(),
        role: Joi.string().valid('customer', 'professional', 'admin').default('customer'),
        phone: Joi.string().trim(),
        address: Joi.string()
    })
};

const loginValidation = {
    body: Joi.object().keys({
        email: Joi.string().email().required().trim(),
        password: Joi.string().required()
    })
};

module.exports = {
    registerValidation,
    loginValidation
};
