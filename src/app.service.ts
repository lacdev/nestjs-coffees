import { Injectable } from '@nestjs/common';

/* The @Injectable() decorator tells TypeScript to emit metadata about the service. 
The metadata specifies that NestJs may need to inject other dependencies into this service */
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
