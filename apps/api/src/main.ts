import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { ApiModule } from './api.module';

async function bootstrap() {
  const app = await NestFactory.create(ApiModule);

  const configService = app.get(ConfigService);
  const PORT = await configService.get('PORT');
  const SERVER_URL = await configService.get('SERVER_URL');

  await app.listen(PORT, '0.0.0.0', () => {
    console.info(`Server is running on port ${PORT}`);
    console.info(`Server url - ${SERVER_URL}`);
  });
}
bootstrap();
