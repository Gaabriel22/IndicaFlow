import { PrismaClient } from "@prisma/client"

export const prisma = new PrismaClient()

export const DatabaseConfig = {
  url: process.env.DATABASE_URL,
}
