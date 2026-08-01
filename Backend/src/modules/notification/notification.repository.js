const Notification = require('../../models/Notification');

class NotificationRepository {
    async create(data) {
        return await Notification.create(data);
    }

    async findByUserId(userId, query = {}) {
        return await Notification.find({ user: userId, ...query }).sort({ createdAt: -1 });
    }

    async findById(id) {
        return await Notification.findById(id);
    }

    async markAsRead(id) {
        return await Notification.findByIdAndUpdate(
            id,
            { isRead: true },
            { new: true, runValidators: true }
        );
    }

    async markAllAsRead(userId) {
        return await Notification.updateMany(
            { user: userId, isRead: false },
            { isRead: true }
        );
    }

    async delete(id) {
        return await Notification.findByIdAndDelete(id);
    }

    async deleteAllRead(userId) {
        return await Notification.deleteMany({ user: userId, isRead: true });
    }
}

module.exports = new NotificationRepository();
