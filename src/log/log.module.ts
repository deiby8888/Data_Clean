import { Module } from '@nestjs/common';
import { LogService } from './log/service/log.service';

@Module({
  providers: [LogService],
})
export class LogModule {}
