import { Notification } from "../entities/notification";

abstract class NotificationsRepositoty{
    abstract create(notification: Notification)
}