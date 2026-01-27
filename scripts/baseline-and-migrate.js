#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function exec(command, options = {}) {
  try {
    return execSync(command, { 
      encoding: 'utf-8', 
      stdio: 'inherit',
      ...options 
    });
  } catch (error) {
    return { error: error.message, output: error.stdout?.toString() || error.stderr?.toString() };
  }
}

function main() {
  console.log('Generating Prisma Client...');
  exec('npx prisma generate');

  console.log('Attempting to deploy migrations...');
  try {
    execSync('npx prisma migrate deploy', { encoding: 'utf-8', stdio: 'inherit' });
    console.log('Migrations deployed successfully');
  } catch (error) {
    const errorOutput = error.stderr?.toString() || error.stdout?.toString() || '';
    
    if (errorOutput.includes('P3005') || errorOutput.includes('database schema is not empty')) {
      console.log('Database needs baselining. Marking existing migrations as applied...');
      
      // Get list of migration directories (exclude the new user model migration)
      const migrationsDir = path.join(__dirname, '..', 'prisma', 'migrations');
      const migrations = fs.readdirSync(migrationsDir)
        .filter(item => {
          const itemPath = path.join(migrationsDir, item);
          return fs.statSync(itemPath).isDirectory() && 
                 !item.includes('add_user_model') &&
                 item !== 'migration_lock.toml';
        })
        .sort();
      
      // Mark existing migrations as applied
      for (const migration of migrations) {
        try {
          console.log(`Marking ${migration} as applied...`);
          execSync(`npx prisma migrate resolve --applied ${migration}`, { 
            encoding: 'utf-8', 
            stdio: 'inherit' 
          });
        } catch (resolveError) {
          console.log(`Note: Could not resolve ${migration} (may already be applied)`);
        }
      }
      
      console.log('Retrying migration deploy...');
      execSync('npx prisma migrate deploy', { encoding: 'utf-8', stdio: 'inherit' });
    } else {
      console.error('Migration failed with error:');
      console.error(errorOutput);
      process.exit(1);
    }
  }

  console.log('Building Next.js application...');
  execSync('next build', { encoding: 'utf-8', stdio: 'inherit' });
}

main();
