import { InMemoryNotificationsRepository } from "test/repositories/in-memory-notifications-repository"
import { Notification } from "../entities/notification"
import { SendNotification } from "./send-notification"


describe('Send notifications', () => {
    it('should be able to send notification', async () => {
        const notificationsRepositoryitory = new InMemoryNotificationsRepositoryy() => {
        const sendNotification = new SendNotification(notificationsRepository)

        await sendNotification.execute({
            content: 'This is a notification',
            category: 'social',
            recipientId: 'exemplo de recipientId'
        })

        // espero que meu array de notifications tenha ao menos 1 notificacao
        expect(notifications).toHaveLength(1)
    })
})