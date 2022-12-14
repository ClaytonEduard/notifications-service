import { Notification } from "src/application/entities/notification";
import { NotificationsRepository } from "../../../../application/respositories/notifications-repository";
import { PrismaService } from "../prisma.service";

export class PrismaNotificationsRepository implements NotificationsRepository {

    constructor(private prismaservice: PrismaService) { }

    async create(notification: Notification): Promise<void> {
        await this.prismaservice.notification.create({
            data:{
                id:
                category:notification.category,
                content:notification.content.value,
                recipientId:notification.recipientId,
                readAt:notification.readAt,
                //criei o nome no schema errado *Adt
                createAdt:notification.createdAt,
            }
        })
    }
}