import { NotificationsRepository } from "src/application/respositories/notifications-repository";


const 

class InMemoryNotificationsRepository implements NotificationsRepository {
    public notifications: Notification[] = [];
    async create(notification: Notification) {
        notifications.push(notification);
    }
}