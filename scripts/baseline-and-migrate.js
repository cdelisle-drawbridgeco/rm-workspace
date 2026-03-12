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
  // Check if DATABASE_URL is set
  let dbUrl = process.env.DATABASE_URL;
  
  if (!dbUrl) {
    console.error('ERROR: DATABASE_URL environment variable is not set!');
    console.error('Please configure DATABASE_URL in your Vercel project settings.');
    process.exit(1);
  }

  // Clean up the URL - remove "DATABASE_URL=" prefix if present (common mistake in Vercel)
  dbUrl = dbUrl.trim();
  if (dbUrl.startsWith('DATABASE_URL=')) {
    dbUrl = dbUrl.substring('DATABASE_URL='.length).trim();
    console.log('Note: Removed DATABASE_URL= prefix from environment variable');
  }

  // Validate DATABASE_URL format
  const cleanUrl = dbUrl;
  if (!cleanUrl.startsWith('postgresql://') && !cleanUrl.startsWith('postgres://')) {
    console.error('ERROR: DATABASE_URL must start with postgresql:// or postgres://');
    console.error(`Current DATABASE_URL value: ${cleanUrl.substring(0, 50)}...`);
    console.error('Please check your Vercel environment variable configuration.');
    console.error('The value should be just the connection string, not "DATABASE_URL=connection_string"');
    process.exit(1);
  }

  console.log('DATABASE_URL is configured (format validated)');
  console.log('Generating Prisma Client...');
  
  // Ensure environment variables are passed to child processes
  const env = { ...process.env, DATABASE_URL: cleanUrl };
  
  exec('npx prisma generate', { env });

  console.log('Attempting to deploy migrations...');
  try {
    const output = execSync('npx prisma migrate deploy', { encoding: 'utf-8', stdio: 'pipe', env });
    console.log(output);
    console.log('Migrations deployed successfully');
  } catch (error) {
    // Capture error output - when stdio is 'pipe', output goes to stdout/stderr properties
    const stdout = error.stdout?.toString() || '';
    const stderr = error.stderr?.toString() || '';
    const errorOutput = stdout + stderr + (error.message || '');
    
    // Output the error for visibility
    if (stdout) console.log(stdout);
    if (stderr) console.error(stderr);
    
    if (errorOutput.includes('P1012') || errorOutput.includes('the URL must start with the protocol')) {
      console.error('ERROR: DATABASE_URL is not properly configured!');
      console.error('Please check your Vercel environment variables.');
      process.exit(1);
    }
    
    if (errorOutput.includes('P3009') || errorOutput.includes('migrate found failed migrations')) {
      console.log('Found failed migrations. Resolving as rolled back...');

      // Extract failed migration name from error output
      const migrationsDir = path.join(__dirname, '..', 'prisma', 'migrations');
      const migrations = fs.readdirSync(migrationsDir)
        .filter(item => {
          const itemPath = path.join(migrationsDir, item);
          return fs.statSync(itemPath).isDirectory() && item !== 'migration_lock.toml';
        })
        .sort();

      for (const migration of migrations) {
        if (errorOutput.includes(migration)) {
          try {
            console.log(`Marking ${migration} as rolled back...`);
            execSync(`npx prisma migrate resolve --rolled-back ${migration}`, {
              encoding: 'utf-8',
              stdio: 'inherit',
              env
            });
          } catch (resolveError) {
            console.log(`Note: Could not resolve ${migration}`);
          }
        }
      }

      console.log('Retrying migration deploy...');
      execSync('npx prisma migrate deploy', { encoding: 'utf-8', stdio: 'inherit', env });
    } else if (errorOutput.includes('P3005') || errorOutput.includes('database schema is not empty') || errorOutput.includes('The database schema is not empty')) {
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
            stdio: 'inherit',
            env
          });
        } catch (resolveError) {
          console.log(`Note: Could not resolve ${migration} (may already be applied)`);
        }
      }
      
      console.log('Retrying migration deploy...');
      execSync('npx prisma migrate deploy', { encoding: 'utf-8', stdio: 'pipe', env });
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
