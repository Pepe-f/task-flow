import { DocumentBuilder } from '@nestjs/swagger';

export const docsConfig = new DocumentBuilder()
  .setTitle('Task Flow')
  .setDescription('Api for Task Flow application')
  .setVersion('1.0.0')
  .addBearerAuth()
  .addTag('Server NestJS')
  .build();
