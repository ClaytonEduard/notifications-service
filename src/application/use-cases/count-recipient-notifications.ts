import { Injectable } from "@nestjs/common";
import { NotificationsRepository } from "../respositories/notifications-repository";
import { NotificationNotFound } from "./errors/notification-not-found";

interface CountRecipientNotificationsRequest {
    recipientId: string;
}

interface CountRecipientNotificationsResponse {
    count: number;
};

@Injectable()
export class CountRecipientNotifications {
    constructor(private notificationsRepository: NotificationsRepository) { }


    async execute(
        request: CountRecipientNotificationsRequest):
        Promise<CountRecipientNotificationsResponse> {
        const { recipientId } = request;

        const notification = await this.notificationsRepository.findById(notificationId);


        if (!notification) {
            throw new NotificationNotFound();
        }
        notification.cancel();

        await this.notificationsRepository.save(notification);
    }
}