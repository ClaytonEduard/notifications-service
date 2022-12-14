import { Body, Controller, Post } from '@nestjs/common';

import { CreateNotificationBody } from '../dtos/create-notification-body';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly prisma: PrismaService) {}

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    console.log(body);

    const { recipientId, content, category } = body;
  
  }
}
