import { Module } from '@nestjs/common';
import { PrismaService } from '../../../prisma.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PrismaService],
})
export class HttpModule {}
