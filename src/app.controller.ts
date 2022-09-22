import {
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @HttpCode(200)
  getHello(): string {
    // throw new HttpException('Servidor no disponible', HttpStatus.UNAUTHORIZED);
    return this.appService.getHello();
  }
}
