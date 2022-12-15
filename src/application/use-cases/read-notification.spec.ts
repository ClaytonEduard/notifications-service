import { makeNotification } from "@test/factories/notification-factory";
import { InMemoryNotificationsRepository } from "@test/repositories/in-memory-notifications-repository";
import { CancelNotification } from "./cancel-notification";
import { NotificationNotFound } from "./errors/notification-not-found";
import { ReadNotification } from "./read-notification";

describe('Read notifications', () => {
    it('should be able to cancel a notification', async () => {
        const notificationsRepository = new InMemoryNotificationsRepository();
        const readNotification = new ReadNotification(notificationsRepository);

        // antes de cancelar é preciso criar uma notificacao
        // make e uma parametro com o test ja escrito
        const notification = makeNotification();
        // adiciona um notification no banco virtual
        await notificationsRepository.create(notification);

        //cancela a notification
        await readNotification.execute({
            notificationId: notification.id,
        })

        // espero que no meu array de notifications, tenha qualquer objeto do tipo date para cancelar
        expect(notificationsRepository.notifications[0].readAt).toEqual(expect.any(Date),)
    
    });

    it('should not be able to read a non existing notification', async () => {
        const notificationsRepository = new InMemoryNotificationsRepository();
        const readNotification = new ReadNotification(notificationsRepository);
        
        expect(()=>{
            return readNotification.execute({
                notificationId: 'facke-notification',
            })
        }).rejects.toThrow(NotificationNotFound)
    })
});