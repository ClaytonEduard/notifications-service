import { Notification } from "src/application/entities/notification";
import { NotificationsRepository } from "../../../../application/respositories/notifications-repository";

export class PrismaNotificationsRepository implements NotificationsRepository{

    constructor({private prismaservicevice:PrismaService}){}


   async create(notification: Notification): Promise<void> {
        throw new Error("Method not implemented.");
    }
}