import { Module } from '@nestjs/common';
import { AdminJsModule } from './adminjs/adminjs.module';

@Module({
  imports: [AdminJsModule],
})
export class AppModule {}
