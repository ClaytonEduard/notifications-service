import { Module } from "@nestjs/common";
import { NotificationsRepository } from "src/application/respositories/notifications-repository";
import { PrismaService } from "./prisma/prisma.service";
import { PrismaNotificationsRepository } from "./prisma/repositories/prisma-notifications-repository";

@Module({
    providers: [PrismaService],
    {
        provide: NotificationsRepository,
        useClass: PrismaNotificationsRepository,
    }
})
export class DatabaseModule { }