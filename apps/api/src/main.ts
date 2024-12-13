import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { docsConfig, loggerWinston, LoggingInterceptor } from '@app/shared';
import { ApiModule } from './api.module';
import { SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(ApiModule, {
    logger: loggerWinston,
  });

  const configService = app.get(ConfigService);
  const PORT = await configService.get('PORT');
  const SERVER_URL = await configService.get('SERVER_URL');

  app.useGlobalInterceptors(new LoggingInterceptor());

  const document = SwaggerModule.createDocument(app, docsConfig);
  SwaggerModule.setup('/api/docs', app, document);

  await app.listen(PORT, '0.0.0.0', () => {
    console.info(`Server is running on port ${PORT}`);
    console.info(`Server url - ${SERVER_URL}`);
    console.info(`Docs - ${SERVER_URL}/api/docs`);
  });
}
bootstrap();
