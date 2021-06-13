import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { HttpExceptionFilter } from './filters/http-exception.filter';
import { FallbackExpectionFilter } from './filters/fallback-exception.filter';
import { ValidationFilter } from './filters/validation.filter';
import { ValidationPipe } from '@nestjs/common';
import { ValidationError } from 'class-validator';
import { ValidationException } from './exceptions/validation.exception';

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v1');
  app.enableCors();

  app.useGlobalFilters(
    new FallbackExpectionFilter(),
    new HttpExceptionFilter(), 
    new ValidationFilter(),
  );

  app.useGlobalPipes(
    new ValidationPipe({
      skipMissingProperties: true,
      exceptionFactory: (errors: ValidationError[]) => {
        const messages: Array<string> = errors.map(
          (err) => `${Object.values(err.constraints).join('. ')}`,
        );

        return new ValidationException(messages);
      },
    }),
  );

  await app.listen(5000);
};
bootstrap();
