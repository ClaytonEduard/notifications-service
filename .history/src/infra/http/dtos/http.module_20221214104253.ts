import { Module } from '@nestjs/common';
import { SendNotification } from '../../../../src/application/use-cases/send-notification';

import { NotificationsController } from '../controllers/notifications..controller';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [SendNotification],
})
export class HttpModule {}
