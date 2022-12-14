import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from '../../../prisma.service';
import { randomUUID } from 'node:crypto'; // metodo para criar o id automatico
import { CreateNotificationBody } from '../dtos/create-notification-body';

@Controller('notifications')
export class  {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  list() {
    return this.prisma.notification.findMany();
  }

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    console.log(body);

    const { recipientId, content, category } = body;
    await this.prisma.notification.create({
      data: {
        id: randomUUID(),
        content,
        category,
        recipientId,
      },
    });
  }
}
