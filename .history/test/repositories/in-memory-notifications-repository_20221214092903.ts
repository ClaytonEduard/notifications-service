

const notifications: Notification[] = [];

class InNotificationsRepository implements NotificationsRepository {
    async create(notification: Notification) {
        notifications.push(notification);
    }
}