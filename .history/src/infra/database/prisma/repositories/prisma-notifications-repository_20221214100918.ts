import { Notification } from "src/application/entities/notification";
import { NotificationsRepository } from "../../../../application/respositories/notifications-repository";
import { PrismaService } from "../prisma.service";

export class PrismaNotificationsRepository implements NotificationsRepository {

    constructor(private prismaservice: PrismaService) { }

    async create(notification: Notification): Promise<void> {
        await this.prismaservicevice
    }
}