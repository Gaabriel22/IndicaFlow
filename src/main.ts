import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"
import { DatabaseConfig } from "./config/database"
import { AdminJSConfig } from "./config/adminjs"
import * as AdminJS from "adminjs"
import { PrismaService } from "./prisma.service"

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  // Configuração do AdminJS
  const adminJs = new AdminJS(AdminJSConfig)
  await adminJs.initialize()

  // Inicializa o Prisma
  const prismaService = app.get(PrismaService)
  await prismaService.enableShutdownHooks(app)

  await app.listen(3000)
}
bootstrap()
