import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AdminModule } from './admin/admin.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use('/admin', AdminModule);

  await app.listen(3000);
}
bootstrap();
