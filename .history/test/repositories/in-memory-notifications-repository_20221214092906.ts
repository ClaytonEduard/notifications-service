

const notifications: Notification[] = [];

class InMemoryNotificationsRepository implements NotificationsRepository {
    async create(notification: Notification) {
        notifications.push(notification);
    }
}