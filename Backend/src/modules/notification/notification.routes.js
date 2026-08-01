const express = require('express');
const router = express.Router();
const notificationController = require('./notification.controller');
const authenticate = require('../../middleware/authenticate');
const validate = require('../../middleware/validate');
const {
    createNotificationValidation,
    getNotificationByIdValidation,
    deleteNotificationValidation,
    markAsReadValidation
} = require('./notification.validation');

// Protect all notification routes
router.use(authenticate);

router.route('/')
    .get(notificationController.getNotifications)
    .post(validate(createNotificationValidation), notificationController.createNotification);

router.route('/read-all')
    .put(notificationController.markAllAsRead);

router.route('/read')
    .delete(notificationController.deleteReadNotifications);

router.route('/:id/read')
    .put(validate(markAsReadValidation), notificationController.markAsRead);

router.route('/:id')
    .get(validate(getNotificationByIdValidation), notificationController.getNotificationById)
    .delete(validate(deleteNotificationValidation), notificationController.deleteNotification);

module.exports = router;
