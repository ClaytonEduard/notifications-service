import { Content } from "../entities/content";
import { Notification } from "../entities/notification";

interface SendNotificationRequest {
    recipientId: string;
    content: string;
    category: string;
}

//criar um object para retornalo ao inves de uma string
interface SendNotificationResponse {
    
}

export class SendNotification {
    async execute(request: SendNotificationRequest): Promise<Notification> {
        const { recipientId, content, category } = request;

        const notification = new Notification({
            recipientId,
            content: new Content(content),
            category
        });

        return{
            notification,
        }
    }
}