import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const PORT = process.env.PORT || 5000;

  const app = await NestFactory.create(AppModule);

  // Set Global Prefix
  app.setGlobalPrefix('api');

  // Enable CORS
  app.enableCors();

  // Add Validation Pipe
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(PORT);

  console.log(`Server is listening at http://localhost:${PORT}`);
}

bootstrap();
