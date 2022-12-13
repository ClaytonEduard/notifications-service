/* eslint-disable prettier/prettier */
import { Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  getHello(){
    return this.prisma.notification.findMany();
  }

  @Post()
  create(){
    return this.prisma.notification.findMany();
  

}}
