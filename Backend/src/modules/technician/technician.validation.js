const Joi = require('joi');

const objectId = (value, helpers) => {
    if (!value.match(/^[0-9a-fA-F]{24}$/)) {
        return helpers.message('"{{#label}}" must be a valid Mongo ID');
    }
    return value;
};

// Phone regex validation (10 to 20 digits, optional +, dashes, brackets, spaces)
const phoneRegex = /^\+?[0-9\s\-()]{10,20}$/;

const getTechnicianByIdValidation = {
    params: Joi.object().keys({
        id: Joi.string().custom(objectId).required(),
    }),
};

const deleteTechnicianValidation = {
    params: Joi.object().keys({
        id: Joi.string().custom(objectId).required(),
    }),
};

const createTechnicianValidation = {
    body: Joi.object().keys({
        technicianId: Joi.number().integer().min(100000).max(999999).optional(),
        name: Joi.string().required().trim(),
        email: Joi.string().email().optional().allow(null, '').trim(),
        password: Joi.string().min(4).required(),
        phone: Joi.string().trim().pattern(phoneRegex).messages({
            'string.pattern.base': 'Phone number must be a valid format (10-20 digits, optionally including +, -, spaces, or parentheses)'
        }).required(),
        specialization: Joi.string().required().trim(),
        availability: Joi.string().valid('Available', 'Busy', 'Offline').default('Offline'),
        experience: Joi.string().optional().trim(),
        profileImage: Joi.string().optional().trim(),
        cityState: Joi.string().optional().trim(),
        aadhaarOrEmployeeId: Joi.string().optional().trim(),
        status: Joi.string().valid('Active', 'Inactive').default('Active'),
        address: Joi.string().optional().allow(null, '').trim(),
        role: Joi.string().optional().trim()
    })
    .rename('citystate', 'cityState', { override: true, ignoreUndefined: true })
    .rename('aadhaaroremployeeid', 'aadhaarOrEmployeeId', { override: true, ignoreUndefined: true }),
};

// Profile updates validation
const updateTechnicianValidation = {
    params: Joi.object().keys({
        id: Joi.string().custom(objectId).optional(),
    }),
    body: Joi.object().keys({
        technicianId: Joi.number().integer().min(100000).max(999999).optional(),
        name: Joi.string().optional().trim(),
        email: Joi.string().email().optional().trim(),
        phone: Joi.string().trim().pattern(phoneRegex).messages({
            'string.pattern.base': 'Phone number must be a valid format (10-20 digits, optionally including +, -, spaces, or parentheses)'
        }).optional(),
        specialization: Joi.string().optional().trim(),
        experience: Joi.string().optional().trim(),
        profileImage: Joi.string().optional().trim(),
        availability: Joi.string().valid('Available', 'Busy', 'Offline').optional(),
        cityState: Joi.string().optional().trim(),
        aadhaarOrEmployeeId: Joi.string().optional().trim(),
        status: Joi.string().valid('Active', 'Inactive').optional(),
        address: Joi.string().optional().allow(null, '').trim(),
        role: Joi.string().optional().trim()
    })
    .rename('citystate', 'cityState', { override: true, ignoreUndefined: true })
    .rename('aadhaaroremployeeid', 'aadhaarOrEmployeeId', { override: true, ignoreUndefined: true })
    .min(1),
};

// Availability updates validation
const updateAvailabilityValidation = {
    params: Joi.object().keys({
        id: Joi.string().custom(objectId).optional(),
    }),
    body: Joi.object().keys({
        availability: Joi.string().valid('Available', 'Busy', 'Offline').required().messages({
            'any.only': 'Availability must be one of: Available, Busy, Offline',
            'any.required': 'Availability is required'
        })
    }),
};

module.exports = {
    objectId,
    getTechnicianByIdValidation,
    deleteTechnicianValidation,
    createTechnicianValidation,
    updateTechnicianValidation,
    updateAvailabilityValidation
};
