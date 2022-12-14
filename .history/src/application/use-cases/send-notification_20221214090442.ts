import { Content } from "../entities/content";
import { Notification } from "../entities/notification";

interface SendNotificationRequest {
    recipientId: string;
    content: string;
    category: string;
}

//criar um object para retornalo ao inves de uma string
interface SendNotificationResponse {
    notification: Notification;
}

export class SendNotification {
    constructor


    async execute(request: SendNotificationRequest): Promise<SendNotificationResponse> {
        const { recipientId, content, category } = request;

        const notification = new Notification({
            recipientId,
            content: new Content(content),
            category
        });

        return{
            notification,
        };
    }
}