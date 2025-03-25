import bcrypt from 'bcryptjs';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash('admin123', 10);

  await prisma.user.upsert({
    where: { email: 'admin@indicaflow.com' },
    update: {},
    create: {
      email: 'admin@indicaflow.com',
      password: hashedPassword,
      role: 'ADMIN',
      name: 'Gabriel',
      userType: 'basic',
    },
  });

  console.log('Admin user seeded.');
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
