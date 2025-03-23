import { User } from './user.entity';

export const adminJSAuth = {
  authenticate: async (email: string, password: string) => {
    const user = await User.findOne({ where: { email } });
    if (user && user.password === password) {
      return Promise.resolve(user);
    }
    return Promise.resolve(false);
  },
  cookieName: 'adminjs',
  cookiePassword: 'some-secret-password-used-to-secure-cookie',
};
