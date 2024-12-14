import { Controller, Get, HttpStatus } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ApiService } from './api.service';

@Controller()
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @ApiTags('Api')
  @ApiOperation({ summary: 'Check server' })
  @ApiResponse({ status: HttpStatus.OK })
  @Get()
  checkServer(): string {
    return this.apiService.checkServer();
  }
}
