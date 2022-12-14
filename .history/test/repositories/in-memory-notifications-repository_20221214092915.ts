import { NotificationsRepository } from "src/application/respositories/notifications-repository";


const notifications: Notification[] = [];

class InMemoryNotificationsRepository implements NotificationsRepository {
    async create(notification: Notification) {
        notifications.push(notification);
    }
}