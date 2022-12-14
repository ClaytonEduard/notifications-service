import { Notification } from "../entities/notification";

export abstract class NotificationsRepositoty{
    abstract create(notification: Notification):Promise<void>;
}