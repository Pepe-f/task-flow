import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from '@app/shared';
import { ApiService } from './api.service';
import { ApiController } from './api.controller';
import { SharedModule } from '@app/shared/modules/shared.module';

@Module({
  imports: [SharedModule, ConfigModule.forRoot()],
  controllers: [ApiController],
  providers: [ApiService, PrismaService],
})
export class ApiModule {}
