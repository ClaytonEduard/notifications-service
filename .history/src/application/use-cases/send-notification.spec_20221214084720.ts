import { SendNotification } from "./send-notification"

describe('Send notifications', () => {
    it('should be able to send notification', async () => {
        const sendNotification = new SendNotification()

        const { notification } = await sendNotification.execute({
            content: 'This is a notification',
            category: 'social',
            recipientId: 'exemplo de recipientId'
        })

    })



})