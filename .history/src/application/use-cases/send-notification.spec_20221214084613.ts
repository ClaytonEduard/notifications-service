import { SendNotification } from "./send-notification"

describe('Send notifications', () => {
    it('should be able to send notification', () => {
        const sendNotification = new SendNotification()
    
        sendNotification.execute({
            content:'This is a notification',
            category: 'social
        })

    })



})