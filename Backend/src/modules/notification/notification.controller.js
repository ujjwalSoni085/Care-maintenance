const notificationService = require('./notification.service');

class NotificationController {
    /**
     * @desc    Get all notifications for logged in user
     * @route   GET /api/v1/notifications
     * @access  Private
     */
    async getNotifications(req, res, next) {
        try {
            const notifications = await notificationService.getUserNotifications(req.user._id, req.query);
            
            res.status(200).json({
                success: true,
                count: notifications.length,
                data: notifications
            });
        } catch (error) {
            next(error);
        }
    }

    /**
     * @desc    Create a new notification
     * @route   POST /api/v1/notifications
     * @access  Private
     */
    async createNotification(req, res, next) {
        try {
            const notificationData = {
                ...req.body,
                user: req.user._id
            };
            const notification = await notificationService.createNotification(notificationData);
            
            res.status(201).json({
                success: true,
                data: notification
            });
        } catch (error) {
            next(error);
        }
    }

    /**
     * @desc    Get a single notification by ID
     * @route   GET /api/v1/notifications/:id
     * @access  Private
     */
    async getNotificationById(req, res, next) {
        try {
            const notification = await notificationService.getNotificationById(req.params.id, req.user._id);
            
            res.status(200).json({
                success: true,
                data: notification
            });
        } catch (error) {
            if (error.message.includes('not found') || error.message.includes('authorized')) {
                error.statusCode = 404;
            }
            next(error);
        }
    }

    /**
     * @desc    Mark a notification as read
     * @route   PUT /api/v1/notifications/:id/read
     * @access  Private
     */
    async markAsRead(req, res, next) {
        try {
            const notification = await notificationService.markAsRead(req.params.id, req.user._id);
            
            res.status(200).json({
                success: true,
                data: notification
            });
        } catch (error) {
            if (error.message.includes('not found') || error.message.includes('authorized')) {
                error.statusCode = 404;
            }
            next(error);
        }
    }

    /**
     * @desc    Mark all notifications as read
     * @route   PUT /api/v1/notifications/read-all
     * @access  Private
     */
    async markAllAsRead(req, res, next) {
        try {
            await notificationService.markAllAsRead(req.user._id);
            
            res.status(200).json({
                success: true,
                message: 'All notifications marked as read'
            });
        } catch (error) {
            next(error);
        }
    }

    /**
     * @desc    Delete a notification
     * @route   DELETE /api/v1/notifications/:id
     * @access  Private
     */
    async deleteNotification(req, res, next) {
        try {
            await notificationService.deleteNotification(req.params.id, req.user._id);
            
            res.status(200).json({
                success: true,
                data: {}
            });
        } catch (error) {
            if (error.message.includes('not found') || error.message.includes('authorized')) {
                error.statusCode = 404;
            }
            next(error);
        }
    }

    /**
     * @desc    Delete all read notifications
     * @route   DELETE /api/v1/notifications/read
     * @access  Private
     */
    async deleteReadNotifications(req, res, next) {
        try {
            await notificationService.deleteReadNotifications(req.user._id);
            
            res.status(200).json({
                success: true,
                message: 'Read notifications deleted successfully'
            });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new NotificationController();
