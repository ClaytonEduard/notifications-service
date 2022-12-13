/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Controller('notification')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get('hello')
  getHello(){
    return this.prisma.notification.findMany();
  }
}
