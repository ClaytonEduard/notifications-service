

const notifications: Notification[] = [];

class NotificationsRepository = {
    async create(notification: Notification) {
        notifications.push(notification);
    }
}