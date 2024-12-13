import { RmqContext, RmqOptions } from '@nestjs/microservices';

export interface SharedServiceInterface {
  getRmgOptions(queue: string): RmqOptions;
  acknowledgeMessage(context: RmqContext): void;
}
