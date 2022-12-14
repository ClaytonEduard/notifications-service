import { Notification } from "src/application/entities/notification";
import { NotificationsRepository } from "../../../../application/respositories/notifications-repository";

export class PrismaNotificationsRepository implements NotificationsRepository{
   asy create(notification: Notification): Promise<void> {
        throw new Error("Method not implemented.");
    }
}