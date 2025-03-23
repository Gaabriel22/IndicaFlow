import { Module } from '@nestjs/common';
import { AdminjsModule } from './adminjs/adminjs.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [AdminjsModule],
  providers: [PrismaService],
})
export class AppModule {}
