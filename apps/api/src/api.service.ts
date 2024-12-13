import { Injectable } from '@nestjs/common';
import { PrismaService } from '@app/shared';

@Injectable()
export class ApiService {
  constructor(private prisma: PrismaService) {}

  getHello(): string {
    return 'Hello World!';
  }
}
