#!/bin/bash
set -e

echo "Generating Prisma Client..."
npx prisma generate

echo "Attempting to deploy migrations..."
MIGRATE_OUTPUT=$(npx prisma migrate deploy 2>&1) || MIGRATE_EXIT_CODE=$?

if [ -z "$MIGRATE_EXIT_CODE" ]; then
    echo "Migrations deployed successfully"
else
    if echo "$MIGRATE_OUTPUT" | grep -q "P3005"; then
        echo "Database needs baselining. Marking existing migrations as applied..."
        
        # Mark existing migrations as applied (these should already exist in production)
        npx prisma migrate resolve --applied 20251005173207_init 2>&1 || echo "Migration 20251005173207_init already resolved or doesn't exist"
        npx prisma migrate resolve --applied 20251009022955_add_confidence_field 2>&1 || echo "Migration 20251009022955_add_confidence_field already resolved or doesn't exist"
        
        echo "Retrying migration deploy..."
        npx prisma migrate deploy
    else
        echo "Migration failed with error:"
        echo "$MIGRATE_OUTPUT"
        exit 1
    fi
fi

echo "Building Next.js application..."
next build
