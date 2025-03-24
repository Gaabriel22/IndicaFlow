import { Module } from '@nestjs/common';
import { AdminJsController } from './adminjs.controller';

@Module({
  controllers: [AdminJsController],
})
export class AdminJsModule {}
