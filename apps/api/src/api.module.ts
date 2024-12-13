import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from '@app/shared/services/prisma.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [ApiController],
  providers: [ApiService, PrismaService],
})
export class ApiModule {}
