import { PrismaService } from '../prisma/prisma.service'; 
import { User as PrismaUser } from '@prisma/client'; 

export interface User extends PrismaUser {
  id: string;
  email: string;
  password: string;
  createdAt: Date;
}

export const adminJSAuth = {
  authenticate: async (
    email: string,
    password: string,
  ): Promise<User | false> => {
    const user = await PrismaService.user.findUnique({ where: { email } });

    if (user && user.password === password) {
      return Promise.resolve(user); 
    }

    return Promise.resolve(false);
  },
  cookieName: 'adminjs',
  cookiePassword: 'some-secret-password-used-to-secure-cookie',
};
