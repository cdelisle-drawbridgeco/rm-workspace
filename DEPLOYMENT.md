# Deployment Guide

## Environment Setup

This project uses two Vercel environments:

### Production
- **Project Name**: `renewal-forecast` (or your current production project name)
- **Branch**: `main`
- **URL**: https://renewal-forecast-o2t7.vercel.app (or your production URL)
- **Database**: Production Neon database

### Development
- **Project Name**: `renewal-forecast-dev` (or your dev project name)
- **Branch**: `dev`
- **URL**: Will be provided after Vercel project creation
- **Database**: Can use the same database or a separate dev database

## Workflow

### Working in Development

1. **Switch to dev branch:**
   ```bash
   git checkout dev
   ```

2. **Make your changes and commit:**
   ```bash
   git add .
   git commit -m "Your changes"
   git push origin dev
   ```

3. **Vercel will automatically deploy** the `dev` branch to your development project

4. **Test your changes** on the development URL

### Promoting to Production

When you're happy with changes in development:

1. **Merge dev into main:**
   ```bash
   git checkout main
   git pull origin main
   git merge dev
   git push origin main
   ```

2. **Vercel will automatically deploy** the `main` branch to your production project

### Alternative: Direct Push to Production (for hotfixes)

For urgent production fixes, you can push directly to `main`:

```bash
git checkout main
# Make your changes
git add .
git commit -m "Hotfix: description"
git push origin main
```

Then merge back to dev:
```bash
git checkout dev
git merge main
git push origin dev
```

## Setting Up Development Environment in Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New..." → "Project"
3. Import the same GitHub repository (`chrisdel25/renewal-forecast`)
4. Configure the project:
   - **Project Name**: `renewal-forecast-dev`
   - **Framework Preset**: Next.js
   - **Root Directory**: `./renewal-forecast` (if your repo has a subdirectory)
   - **Build Command**: `npm run vercel-build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`

5. **Environment Variables**:
   - Copy all environment variables from your production project:
     - `DATABASE_URL` (can use same DB or create a dev DB)
     - `ACCESS_KEY`
     - Any other variables

6. **Git Branch**:
   - In project settings, go to "Git"
   - Set "Production Branch" to `dev`
   - Or use Vercel's branch-based deployments (automatic)

## Database Considerations

You have two options:

### Option 1: Shared Database (Simpler)
- Use the same `DATABASE_URL` for both environments
- Development changes will affect production data
- **Use with caution** - only recommended if you're careful

### Option 2: Separate Development Database (Recommended)
- Create a new Neon database for development
- Set `DATABASE_URL` in dev project to point to dev database
- Run migrations and seed script on dev database
- Keeps production data safe

## Current Setup

- **Production**: Deployed from `main` branch
- **Development**: Will be deployed from `dev` branch (after Vercel project creation)
