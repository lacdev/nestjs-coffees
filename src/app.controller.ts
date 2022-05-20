import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

/* The AppController class is a NestJS controller that uses the AppService to handle all incoming HTTP requests on the /
route */
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
