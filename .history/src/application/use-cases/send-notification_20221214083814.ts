import { Notification } from "../entities/notification";

interface SendNotificationRequest{
    recipientId: string;
    content:string;
    category:string;
}

export class SendNotification {
    async execute(request: SendNotificationRequest):Promise<Notification> {
    }
}