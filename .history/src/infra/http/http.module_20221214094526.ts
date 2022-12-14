import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { PrismaService } from '../../prisma.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule {}
