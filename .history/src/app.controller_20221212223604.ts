import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('app')
export class AppController {
  constructor(private readonly ) {}

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }
}
