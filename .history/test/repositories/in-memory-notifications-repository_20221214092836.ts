

const notifications: Notification[] = [];

class otificationsRepository = {
    async create(notification: Notification) {
        notifications.push(notification);
    }
}