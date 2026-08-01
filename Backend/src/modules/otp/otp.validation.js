const Joi = require('joi');

const objectId = (value, helpers) => {
    if (!value.match(/^[0-9a-fA-F]{24}$/)) {
        return helpers.message('"{{#label}}" must be a valid Mongo ID');
    }
    return value;
};

const generateOtpValidation = {
    body: Joi.object().keys({
        requestId: Joi.string().custom(objectId).required().messages({
            'any.required': 'Service Request ID is required'
        })
    })
};

const verifyOtpValidation = {
    body: Joi.object().keys({
        requestId: Joi.string().custom(objectId).required().messages({
            'any.required': 'Service Request ID is required'
        }),
        otp: Joi.string().pattern(/^\d{6}$/).required().messages({
            'string.pattern.base': 'OTP must be exactly 6 digits and numeric only',
            'any.required': 'OTP is required'
        })
    })
};

const resendOtpValidation = {
    body: Joi.object().keys({
        requestId: Joi.string().custom(objectId).required().messages({
            'any.required': 'Service Request ID is required'
        })
    })
};

module.exports = {
    objectId,
    generateOtpValidation,
    verifyOtpValidation,
    resendOtpValidation
};
