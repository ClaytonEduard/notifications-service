import { Notification } from "../entities/notification";

export abstract class NotificationsRepository {
    // metodo de criar
    abstract create(notification: Notification): Promise<void>;
    // metodo de buscar por ID
    abstract findById(notificationId: string): Promise<Notification | null>;
    // metodo de cancelar
    abstract save(notification: Notification): Promise<void>;
    abstract countManyByRecipientId(recipientId: string): Promise<number>;
    abstract findManyByRecipientId(recipientId: string): Promise<Notification[]>;
}