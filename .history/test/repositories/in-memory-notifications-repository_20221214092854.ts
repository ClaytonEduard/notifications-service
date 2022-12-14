

const notifications: Notification[] = [];

class NotificationsRepository implements NotificationsRepository {
    async create(notification: Notification) {
        notifications.push(notification);
    }
}