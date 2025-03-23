import { Module } from '@nestjs/common';
import { AdminModule } from '@adminjs/nestjs';
import { Database, Resource } from '@adminjs/prisma';
import * as AdminJS from 'adminjs';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  imports: [
    AdminModule.createAdmin({
      adminJsOptions: {
        resources: [
          {
            resource: Resource(PrismaService),
          },
        ],
        rootPath: '/admin',
        branding: {
          companyName: 'IndicaFlow Admin',
          logo: 'https://example.com/logo.png',
          softwareBrothers: false,
        },
      },
    }),
  ],
})
export class AdminjsModule {}
