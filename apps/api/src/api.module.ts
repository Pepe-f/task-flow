import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from '@app/shared';
import { ApiService } from './api.service';
import { ApiController } from './api.controller';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [ApiController],
  providers: [ApiService, PrismaService],
})
export class ApiModule {}
