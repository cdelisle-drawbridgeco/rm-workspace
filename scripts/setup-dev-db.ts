import { PrismaClient } from '@prisma/client';
import { execSync } from 'child_process';

const prisma = new PrismaClient();

async function main() {
  console.log('🚀 Setting up development database...\n');
  
  // Check if DATABASE_URL is set
  const dbUrl = process.env.DATABASE_URL;
  if (!dbUrl) {
    console.error('❌ ERROR: DATABASE_URL environment variable is not set');
    console.error('Please set DATABASE_URL before running this script');
    process.exit(1);
  }
  
  if (!dbUrl.includes('dev') && !dbUrl.includes('development')) {
    console.warn('⚠️  WARNING: DATABASE_URL does not contain "dev" or "development"');
    console.warn('Make sure you are using the development database URL, not production!');
    console.warn('Current URL:', dbUrl.replace(/:[^:@]+@/, ':****@')); // Hide password
    console.log('\nDo you want to continue? (This script will run migrations and seed data)');
    // In a real scenario, you might want to add a prompt here
  }
  
  console.log('📦 Step 1: Generating Prisma Client...');
  try {
    execSync('npx prisma generate', { stdio: 'inherit' });
    console.log('✅ Prisma Client generated\n');
  } catch (error) {
    console.error('❌ Failed to generate Prisma Client');
    throw error;
  }
  
  console.log('🔄 Step 2: Running database migrations...');
  try {
    execSync('npx prisma migrate deploy', { stdio: 'inherit', env: { ...process.env, DATABASE_URL: dbUrl } });
    console.log('✅ Migrations applied\n');
  } catch (error) {
    console.error('❌ Failed to run migrations');
    throw error;
  }
  
  console.log('🌱 Step 3: Seeding database with development data...');
  try {
    execSync('npx tsx prisma/seed.ts', { stdio: 'inherit', env: { ...process.env, DATABASE_URL: dbUrl } });
    console.log('✅ Database seeded\n');
  } catch (error) {
    console.error('❌ Failed to seed database');
    throw error;
  }
  
  console.log('✨ Development database setup complete!');
  console.log('\nYou can now use this database in your Vercel development environment.');
}

main()
  .catch((e) => {
    console.error('❌ Setup failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
