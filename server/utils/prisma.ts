import { PrismaPg } from '@prisma/adapter-pg';
import pkg from '@prisma/client';

const { PrismaClient } = pkg;

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const globalForPrisma = globalThis as unknown as {
  prisma: typeof PrismaClient;
};

export const prisma = new PrismaClient({ adapter });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
