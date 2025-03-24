import { Module } from '@nestjs/common';
import { AdminModule as AdminJSModule } from '@adminjs/nestjs';
import AdminJS from 'adminjs';
import { PrismaService } from '../prisma/prisma.service';
import { UserService } from '../user/user.service';
import { AuthModule } from '../auth/auth.module';
import bcrypt from 'bcryptjs';
import { PrismaAdapter } from '@adminjs/prisma'; 

import { PrismaClient } from '@prisma/client'; 

const prisma = new PrismaClient(); 

@Module({
  imports: [
    AdminJSModule.createAdmin({
      adminJsOptions: {
        rootPath: '/admin',
        resources: [
          {
            resource: { model: prisma.user, client: prisma },
            options: {
              listProperties: ['id', 'name', 'email'],
              filterProperties: ['email', 'name'],
              showProperties: ['id', 'name', 'email'],
            },
          },
        ],
      },
      auth: {
        authenticate: async (email, password) => {
          const user = await prisma.user.findUnique({ where: { email } });
          if (user && bcrypt.compareSync(password, user.password)) {
            return user;
          }
          return null;
        },
        cookieName: 'adminjs',
        cookiePassword: 'sessionsecret',
      },
    }),
  ],
  providers: [PrismaService, UserService],
})
export class AdminModule {}
