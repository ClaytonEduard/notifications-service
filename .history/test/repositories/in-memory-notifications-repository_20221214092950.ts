import { NotificationsRepository } from "src/application/respositories/notifications-repository";


class InMemoryNotificationsRepository implements NotificationsRepository {
    public notifications: Notification[] = [];
    async create(notification: Notification) {
        this.notifications.push(notification);
    }
}