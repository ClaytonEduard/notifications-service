import { Injectable } from "@nestjs/common";
import { Notification } from "@application/entities/notification";
import { NotificationsRepository } from "@application/respositories/notifications-repository";
import { PrismaService } from "../prisma.service";
import { PrismaNotificationMapper } from "../mappers/prisma-notification-mapper";
''
@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository {

    constructor(private prismaservice: PrismaService) { }

    async findById(notificationId: string): Promise<Notification | null> {
        const notification = await this.prismaservice.notification.findUnique({
            where: {
                id: notificationId,
            }
        });

        if (!notification) {
            return null;
        }

        return PrismaNotificationMapper.toDomain(notification);
    }

    async findManyByRecipientId(recipientId: string): Promise<Notification[]> {
        const notifications = await this.prismaservice.notification.findMany({
            where: {
                recipientId,
            },
        });

        return notifications.map((PrismaNotificationMapper.toDomain))

        /*return notifications.map((notification) => {
            return PrismaNotificationMapper.toDomain(notification);
        }) */
    }


    async countManyByRecipientId(recipientId: string): Promise<number> {

        const count = await this.prismaservice.notification.count({
            where: {
                recipientId,
            },
        });

        return count;
    }

    async create(notification: Notification): Promise<void> {

        const raw = PrismaNotificationMapper.toPrisma(notification)
        await this.prismaservice.notification.create({
            data: raw,
        })
    }

    async save(notification: Notification): Promise<void> {
        const raw = PrismaNotificationMapper.toPrisma(notification)
        await this.prismaservice.notification.update({
            where: {
                id: raw.id,
            }, data: raw,
        });
    }
}