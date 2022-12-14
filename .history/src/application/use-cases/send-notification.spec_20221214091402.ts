import { Notification } from "../entities/notification"
import { SendNotification } from "./send-notification"

const notificationsRepository = {
    async create(notification: Notification) {
        console.log(notification)
    }
}
describe('Send notifications', () => {
    it('should be able to send notification', async () => {
        const sendNotification = new SendNotification(notificationsRepository)

        const { notification } = await sendNotification.execute({
            content: 'This is a notification',
            category: 'social',
            recipientId: 'exemplo de recipientId'
        })
        expect(notification).toBeTruthy();
    })
})