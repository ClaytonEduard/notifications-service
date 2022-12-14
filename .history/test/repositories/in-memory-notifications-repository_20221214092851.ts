

const notifications: Notification[] = [];

class NotificationsRepository implements NotificationRepository {
    async create(notification: Notification) {
        notifications.push(notification);
    }
}