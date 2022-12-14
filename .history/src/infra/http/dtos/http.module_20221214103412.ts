import { Module } from '@nestjs/common';
import { SendNotification } from 'src/application/use-cases/send-notification';
import { PrismaService } from '../../database/prisma/prisma.service';
import { NotificationsController } from '../controllers/notifications..controller';

@Module({
  imports: [Da],
  controllers: [NotificationsController],
  providers: [SendNotification],
})
export class HttpModule {}
