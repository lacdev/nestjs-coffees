import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';

/**
 * "Create a new instance of the ValidationPipe class and pass it to the useGlobalPipes() function."
 *
 * The ValidationPipe class is a built-in class that comes with NestJS. It's a class that implements the PipeTransform
 * interface. The PipeTransform interface is a built-in interface that comes with NestJS. It's an interface that defines a
 * single transform() function. The transform() function is a function that takes two arguments: value and metadata. The
 * value argument is the value that's being transformed. The metadata argument is an object that contains metadata about
 * the value that's being transformed
 */

async function bootstrap() {
  /* It's creating a new instance of the NestFactory class and calling the create() function on it. The create()
  function is a static function that takes one argument: the module that's being bootstrapped. The NestFactory class is
  a built-in class that comes with NestJS. It's a class that implements the NestFactoryStatic interface. 
  
  The NestFactoryStatic interface is a built-in interface that comes with NestJS. It's an interface that defines a create()
  function. The create() function is a function that takes one argument: the module that's being bootstrapped. */
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  ),
    app.useGlobalFilters(new HttpExceptionFilter());
  /* It's telling the app to listen on port 3000. */
  await app.listen(3000);
}
bootstrap();
