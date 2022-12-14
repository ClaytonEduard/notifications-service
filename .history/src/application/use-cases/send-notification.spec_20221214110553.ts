import { InMemoryNotificationsRepository } from "../../../test/repositories/in-memory-notifications-repository";
import { SendNotification } from "./send-notification"


describe('Send notifications', () => {
    it('should be able to send notification', async () => {
        const notificationsRepository = new InMemoryNotificationsRepository();
        const sendNotification = new SendNotification(notificationsRepository);

      const {notification}=   await sendNotification.execute({
            category: 'social',
            content: 'This is a notification',
            recipientId: 'exemplo de recipientId'
        })

        // espero que meu array de notifications tenha ao menos 1 notificacao
        expect(notificationsRepository.notifications).toHaveLength(1)
        expect(notificationsRepository.notifications[0]).toEqual(notification);
    })
})