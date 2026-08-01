const notificationRepository = require('./notification.repository');

class NotificationService {
    // ==========================================
    // Core Notification Business Logic
    // ==========================================

    async createNotification(data) {
        return await notificationRepository.create(data);
    }

    async getUserNotifications(userId, query = {}) {
        return await notificationRepository.findByUserId(userId, query);
    }

    async getNotificationById(notificationId, userId) {
        const notification = await notificationRepository.findById(notificationId);
        
        if (!notification) {
            throw new Error('Notification not found');
        }

        if (notification.user.toString() !== userId.toString()) {
            throw new Error('Not authorized to view this notification');
        }

        return notification;
    }

    async getUnreadCount(userId) {
        const unread = await notificationRepository.findByUserId(userId, { isRead: false });
        return unread.length;
    }

    async markAsRead(notificationId, userId) {
        const notification = await notificationRepository.findById(notificationId);
        
        if (!notification) {
            throw new Error('Notification not found');
        }

        if (notification.user.toString() !== userId.toString()) {
            throw new Error('Not authorized to update this notification');
        }

        return await notificationRepository.markAsRead(notificationId);
    }

    async markAllAsRead(userId) {
        return await notificationRepository.markAllAsRead(userId);
    }

    async deleteNotification(notificationId, userId) {
        const notification = await notificationRepository.findById(notificationId);
        
        if (!notification) {
            throw new Error('Notification not found');
        }

        if (notification.user.toString() !== userId.toString()) {
            throw new Error('Not authorized to delete this notification');
        }

        return await notificationRepository.delete(notificationId);
    }

    async deleteReadNotifications(userId) {
        return await notificationRepository.deleteAllRead(userId);
    }

    // ==========================================
    // Trigger Notifications from other modules
    // ==========================================

    async triggerRequestAssigned(userId, requestId, technicianName = 'A technician') {
        return await this.createNotification({
            user: userId,
            title: 'Technician Assigned',
            message: `${technicianName} has been assigned to your service request.`,
            type: 'Assignment',
            requestId: requestId
        });
    }

    async triggerOtpGenerated(userId, requestId = null) {
        return await this.createNotification({
            user: userId,
            title: 'OTP Generated',
            message: 'A new OTP has been generated for your service request.',
            type: 'OTP', 
            requestId: requestId
        });
    }

    async triggerOtpVerified(userId, requestId) {
        return await this.createNotification({
            user: userId,
            title: 'OTP Verified',
            message: 'Your OTP has been successfully verified. Service will proceed.',
            type: 'OTP',
            requestId: requestId
        });
    }

    async triggerJobCompleted(userId, requestId) {
        return await this.createNotification({
            user: userId,
            title: 'Job Completed',
            message: 'Your service request has been marked as completed. Thank you for using our services!',
            type: 'Completed',
            requestId: requestId
        });
    }

    async triggerJobCancelled(userId, requestId, reason = 'No reason provided') {
        return await this.createNotification({
            user: userId,
            title: 'Job Cancelled',
            message: `Your service request has been cancelled. Reason: ${reason}`,
            type: 'Cancelled',
            requestId: requestId
        });
    }

    async triggerReminder(userId, message, requestId = null) {
        return await this.createNotification({
            user: userId,
            title: 'Reminder',
            message: message,
            type: 'Reminder',
            requestId: requestId
        });
    }
}

module.exports = new NotificationService();
