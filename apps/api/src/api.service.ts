import { Injectable } from '@nestjs/common';
import { PrismaService } from '@app/shared/services/prisma.service';

@Injectable()
export class ApiService {
  constructor(private prisma: PrismaService) {}

  getHello(): string {
    return 'Hello World!';
  }
}
