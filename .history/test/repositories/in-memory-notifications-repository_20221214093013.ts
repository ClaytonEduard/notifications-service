import { Notification } from "src/application/entities/notification";
import { NotificationsRepository } from "src/application/respositories/notifications-repository";


eclass InMemoryNotificationsRepository implements NotificationsRepository {
    public notifications: Notification[] = [];
    async create(notification: Notification) {
        this.notifications.push(notification);
    }
}