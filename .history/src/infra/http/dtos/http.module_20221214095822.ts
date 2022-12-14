import { Module } from '@nestjs/common';
import { PrismaService } from '../../../prisma.service';
import { NotificationsController } from '../controllers/notifications..controller';

@Module({
  imports: [],
  controllers: [NotificationsController],
  providers: [PrismaService],
})
export class HttpModule {}
