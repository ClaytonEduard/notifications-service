import { Module } from "@nestjs/common";
import { NotificationsRepository } from "src/application/respositories/notifications-repository";
import { PrismaService } from "./prisma/prisma.service";

@Module({
    providers: [PrismaService],
    {
        provide: NotificationsRepository
    }
})
export class DatabaseModule { }