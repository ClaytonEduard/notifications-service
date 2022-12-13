import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
/ eslint-disable-next-line prettier/prettier/
// injeção de depandencias;