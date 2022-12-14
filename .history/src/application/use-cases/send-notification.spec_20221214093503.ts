import { InMemoryNotificationsRepository } from "../../../test/repositories/in-memory-notifications-repository"
import { SendNotification } from "./send-notification"


describe('Send notifications', () => {
    it('should be able to send notification', async () => {
        const notificationsRepository = new InMemoryNotificationsRepository();
        const sendNotification = new SendNotification(notificationsRepositoryitory);

      const {notification}=   await sendNotification.execute({
            content: 'This is a notification',
            category: 'social',
            recipientId: 'exemplo de recipientId'
        })

        // espero que meu array de notifications tenha ao menos 1 notificacao
        expect(notificationsRepositoryitory.notifications).toHaveLength(1)
        expect(notificationsRepository.notifications[0])
    })
})