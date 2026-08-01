const Joi = require('joi');
const {
    REQUEST_STATUS,
    REQUEST_PRIORITY,
    SERVICE_CATEGORIES,
} = require('./request.constants');

const objectId = (value, helpers) => {
    if (!value.match(/^[0-9a-fA-F]{24}$/)) {
        return helpers.message('"{{#label}}" must be a valid Mongo ID');
    }
    return value;
};

// Phone regex allowing optional '+', digits, spaces, hyphens, and brackets (10 to 20 chars)
const phoneRegex = /^\+?[0-9\s\-()]{10,20}$/;

const createRequestValidation = {
    body: Joi.object().keys({
        clientName: Joi.string().required().trim(),
        clientPhone: Joi.string().required().trim().pattern(phoneRegex).messages({
            'string.pattern.base': 'Phone number must be a valid format (10-20 digits, optionally including +, -, spaces, or parentheses)'
        }),
        clientAddress: Joi.string().required().trim(),
        serviceCategory: Joi.string()
            .valid(...Object.values(SERVICE_CATEGORIES))
            .required()
            .trim(),
        problemDescription: Joi.string().required().trim(),
        priority: Joi.string().valid(...Object.values(REQUEST_PRIORITY)).optional(),
        createdBy: Joi.string().custom(objectId).optional(),
        assignedTo: Joi.string().custom(objectId).optional(),
        status: Joi.string().valid(...Object.values(REQUEST_STATUS)).optional(),
    }),
};

const updateRequestValidation = {
    params: Joi.object().keys({
        id: Joi.string().custom(objectId).required(),
    }),
    body: Joi.object()
        .keys({
            clientName: Joi.string().trim(),
            clientPhone: Joi.string().trim().pattern(phoneRegex).messages({
                'string.pattern.base': 'Phone number must be a valid format (10-20 digits, optionally including +, -, spaces, or parentheses)'
            }),
            clientAddress: Joi.string().trim(),
            serviceCategory: Joi.string()
                .valid(...Object.values(SERVICE_CATEGORIES))
                .trim(),
            problemDescription: Joi.string().trim(),
            priority: Joi.string().valid(...Object.values(REQUEST_PRIORITY)),
            status: Joi.string().valid(...Object.values(REQUEST_STATUS)),
            assignedTo: Joi.string().custom(objectId).allow(null),
            createdBy: Joi.string().custom(objectId),
        })
        .min(1), // Ensure at least one field is being updated
};

const assignTechnicianValidation = {
    params: Joi.object().keys({
        id: Joi.string().custom(objectId).required(),
    }),
    body: Joi.object().keys({
        technicianId: Joi.string().custom(objectId).required(),
    }),
};

const updateStatusValidation = {
    params: Joi.object().keys({
        id: Joi.string().custom(objectId).required(),
    }),
    body: Joi.object().keys({
        status: Joi.string()
            .valid(...Object.values(REQUEST_STATUS))
            .required(),
    }),
};

const getRequestByIdValidation = {
    params: Joi.object().keys({
        id: Joi.string().custom(objectId).required(),
    }),
};

const deleteRequestValidation = {
    params: Joi.object().keys({
        id: Joi.string().custom(objectId).required(),
    }),
};

module.exports = {
    objectId,
    createRequestValidation,
    updateRequestValidation,
    assignTechnicianValidation,
    updateStatusValidation,
    getRequestByIdValidation,
    deleteRequestValidation,
};
