import { Content } from "@application/entities/content";
import { Notification } from "@application/entities/notification";
import { InMemoryNotificationsRepository } from "@test/repositories/in-memory-notifications-repository";
import { CancelNotification } from "./cancel-notification";
import { NotificationNotFound } from "./errors/notification-not-found";

describe('Cancel notifications', () => {
    it('should be able to cancel a notification', async () => {
        const notificationsRepository = new InMemoryNotificationsRepository();
        const cancelNotification = new CancelNotification(notificationsRepository);

        // antes de cancelar é preciso criar uma notificacao
        const notification = new Notification({
            category: 'social',
            content: new Content('Nova solicitação de amizade!'),
            recipientId: 'texted',
        })
        // adiciona um notification no banco virtual
        await notificationsRepository.create(notification);

        //cancela a notification
        await cancelNotification.execute({
            notificationId: notification.id,
        })

        // espero que no meu array de notifications, tenha qualquer objeto do tipo date para cancelar
        expect(notificationsRepository.notifications[0].canceledAt).toEqual(expect.any(Date),)
    
    });

    it('should not be able to cancel a non existing notification', async () => {
        const notificationsRepository = new InMemoryNotificationsRepository();
        const cancelNotification = new CancelNotification(notificationsRepository);
        
        expect(()=>{
            return cancelNotification.execute({
                notificationId: 'facke-notification',
            })
        }).rejects.toThrow(NotificationNotFound)
    })
});