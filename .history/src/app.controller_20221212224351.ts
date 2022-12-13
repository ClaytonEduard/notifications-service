/* eslint-disable prettier/prettier */
import { Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import {ra}from 'node:crypto';

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  list(){
    return this.prisma.notification.findMany();
  }

  @Post()
  async create(){
   await this.prisma.notification.create({
    data: {
      id:
    }
   })
}
}
