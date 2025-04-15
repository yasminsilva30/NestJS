import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar o corpo como JSON (padrão)
  app.useGlobalPipes(new ValidationPipe()); // Para validar os DTOs
  app.enableCors(); // Se você precisar de CORS

  await app.listen(3000);
}
void bootstrap();
