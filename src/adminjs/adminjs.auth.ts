import { PrismaService } from '../prisma/prisma.service'; 
import { User as PrismaUser } from '@prisma/client';

export interface User extends PrismaUser {
  id: string;
  email: string;
  password: string;
  createdAt: Date;
}

export const adminJSAuth = (prismaService: PrismaService) => ({
  authenticate: async (email: string, password: string): Promise<User | false> => {
    const user = await prismaService.user.findUnique({ where: { email } });

    if (user && user.password === password) {
      return user;
    }

    return false;
  },
  cookieName: 'adminjs',
  cookiePassword: 'some-secret-password-used-to-secure-cookie',
});
