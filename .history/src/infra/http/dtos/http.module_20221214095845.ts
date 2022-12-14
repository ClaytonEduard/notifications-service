import { Module } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { NotificationsController } from '../controllers/notifications..controller';

@Module({
  imports: [],
  controllers: [NotificationsController],
  providers: [],
})
export class HttpModule {}
