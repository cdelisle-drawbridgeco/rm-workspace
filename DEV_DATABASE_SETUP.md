# Development Database Setup Guide

This guide will help you create a separate Neon database for development and set it up properly.

## Step 1: Create Development Database in Neon

1. Go to [Neon Console](https://console.neon.tech/)
2. Sign in to your account
3. Click on your project (or create a new project if needed)
4. Click **"Create Branch"** or **"New Database"**
   - **Name**: `renewal-forecast-dev` (or any name you prefer)
   - This creates a separate database branch/environment
5. After creation, click on the database to view connection details
6. Copy the **Connection String** (it will look like: `postgresql://user:password@host/dbname?sslmode=require`)

## Step 2: Set Up Local Environment Variable

Create or update your local `.env` file (or `.env.local`):

```bash
DATABASE_URL="postgresql://user:password@host/renewal-forecast-dev?sslmode=require"
```

**Important**: Make sure this is the development database URL, not production!

## Step 3: Initialize the Development Database

Run the setup script to apply migrations and seed data:

```bash
npm run setup-dev-db
```

Or manually:

```bash
# Generate Prisma Client
npx prisma generate

# Run migrations
npx prisma migrate deploy

# Seed the database
npx tsx prisma/seed.ts
```

## Step 4: Configure Vercel Development Project

**Before creating the Vercel project**, you need to set the environment variable:

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Create your new development project (or go to project settings if already created)
3. Go to **Settings** → **Environment Variables**
4. Add the following:
   - **Key**: `DATABASE_URL`
   - **Value**: Your development database connection string (from Step 1)
   - **Environment**: Select "Production", "Preview", and "Development" (or at least "Production")
5. Also add/verify:
   - **Key**: `ACCESS_KEY`
   - **Value**: (same as production, or create a dev-specific one)
6. Click **Save**

## Step 5: Deploy Development Project

After setting environment variables:

1. In your Vercel project, go to **Deployments**
2. If the project auto-deployed, it should now use the dev database
3. If not, trigger a new deployment

## Verification

To verify everything is working:

1. Check your development Vercel URL
2. The app should load with seeded data (7 RMs, accounts, opportunities)
3. You can verify by checking the database directly in Neon Console

## Important Notes

⚠️ **Database Safety**:
- Development and production databases are completely separate
- Changes in dev won't affect production data
- You can safely test migrations, seed scripts, and data changes in dev

🔄 **Keeping Dev Database in Sync**:
- When you add new migrations, they'll need to run on both databases
- Dev database will get migrations when you deploy the `dev` branch
- Production database gets migrations when you deploy `main` branch

🗑️ **Resetting Dev Database**:
If you need to reset your dev database:
```bash
# Set DATABASE_URL to dev database
export DATABASE_URL="your-dev-database-url"

# Reset and reseed
npx prisma migrate reset
npx tsx prisma/seed.ts
```

## Current Database URLs

- **Production**: Your existing Neon database (used by main branch)
- **Development**: New Neon database you're creating (used by dev branch)

Make sure to keep track of which database URL goes where!
