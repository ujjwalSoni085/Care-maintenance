const Joi = require('joi');

const objectId = (value, helpers) => {
    if (!value.match(/^[0-9a-fA-F]{24}$/)) {
        return helpers.message('"{{#label}}" must be a valid Mongo ID');
    }
    return value;
};

const createNotificationValidation = {
    body: Joi.object().keys({
        title: Joi.string().required().trim(),
        message: Joi.string().required().trim(),
        type: Joi.string().valid('Assignment', 'OTP', 'Completed', 'Cancelled', 'Reminder').required().messages({
            'any.only': 'Notification Type must be one of: Assignment, OTP, Completed, Cancelled, Reminder',
            'any.required': 'Notification Type is required'
        }),
        requestId: Joi.string().custom(objectId).optional(),
        user: Joi.string().custom(objectId).optional()
    })
};

const getNotificationByIdValidation = {
    params: Joi.object().keys({
        id: Joi.string().custom(objectId).required().messages({
            'any.required': 'Notification ID is required'
        })
    })
};

const deleteNotificationValidation = {
    params: Joi.object().keys({
        id: Joi.string().custom(objectId).required().messages({
            'any.required': 'Notification ID is required'
        })
    })
};

const markAsReadValidation = {
    params: Joi.object().keys({
        id: Joi.string().custom(objectId).required().messages({
            'any.required': 'Notification ID is required'
        })
    })
};

module.exports = {
    objectId,
    createNotificationValidation,
    getNotificationByIdValidation,
    deleteNotificationValidation,
    markAsReadValidation
};
