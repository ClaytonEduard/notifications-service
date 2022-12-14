import { Module } from "@nestjs/common";

@Module({
    providers:[PrismaService]
})
export class DatabaseModule{}