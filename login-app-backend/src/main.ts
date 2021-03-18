import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: process.env.UI_HOST,
  });
  await app.listen(process.env.SERVER_PORT);
}
bootstrap();
