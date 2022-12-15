import { makeNotification } from "@test/factories/notification-factory";
import { InMemoryNotificationsRepository } from "@test/repositories/in-memory-notifications-repository";
import { NotificationNotFound } from "./errors/notification-not-found";
import { UnreadNotification } from "./unread-notification";

describe('Unread notifications', () => {
    it('should be able to cancel a notification', async () => {
        const notificationsRepository = new InMemoryNotificationsRepository();
        const unreadNotification = new UnreadNotification(notificationsRepository);

        // antes de cancelar é preciso criar uma notificacao com uma data
        // make e uma parametro com o test ja escrito
        const notification = makeNotification({
            readAt: new Date(),
        });
        // adiciona um notification no banco virtual
        await notificationsRepository.create(notification);

        //cancela a notification
        await unreadNotification.execute({
            notificationId: notification.id,
        })

        // espero que no meu array de notifications, tenha qualquer objeto do tipo date para cancelar
        expect(notificationsRepository.notifications[0].readAt).toBeNull();
    
    });

    it('should not be able to unread a non existing notification', async () => {
        const notificationsRepository = new InMemoryNotificationsRepository();
        const unreadNotification = new UnreadNotification(notificationsRepository);
        
        expect(()=>{
            return unreadNotification.execute({
                notificationId: 'facke-notification',
            })
        }).rejects.toThrow(NotificationNotFound)
    })
});