-- CreateTable: Create users table
CREATE TABLE IF NOT EXISTS "users" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT,
    "username" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "profileId" TEXT,
    "roleId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex: Create unique index on email
CREATE UNIQUE INDEX IF NOT EXISTS "users_email_key" ON "users"("email");

-- CreateIndex: Create unique index on username
CREATE UNIQUE INDEX IF NOT EXISTS "users_username_key" ON "users"("username");

-- AlterTable: Add ownerId column (nullable first to handle existing data)
ALTER TABLE "Account" ADD COLUMN IF NOT EXISTS "ownerId" TEXT;

-- CreateIndex: Create index on ownerId for foreign key
CREATE INDEX IF NOT EXISTS "Account_ownerId_idx" ON "Account"("ownerId");

-- Migrate existing data: Create users from ownerName and link accounts
-- This handles the case where production has old data
DO $$
DECLARE
    account_record RECORD;
    user_id TEXT;
    name_parts TEXT[];
    first_name TEXT;
    last_name TEXT;
    user_email TEXT;
    user_username TEXT;
    accounts_without_owner INT;
BEGIN
    -- Check if there are accounts without owners that need migration
    SELECT COUNT(*) INTO accounts_without_owner 
    FROM "Account" 
    WHERE "ownerId" IS NULL;
    
    -- Only run migration if ownerName column exists AND there are accounts without owners
    IF EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'Account' AND column_name = 'ownerName'
    ) AND accounts_without_owner > 0 THEN
        FOR account_record IN SELECT id, "ownerName" FROM "Account" WHERE "ownerName" IS NOT NULL LOOP
            -- Parse ownerName (assuming format "FirstName LastName")
            name_parts := string_to_array(account_record."ownerName", ' ');
            first_name := name_parts[1];
            last_name := array_to_string(name_parts[2:], ' ');
            
            -- Generate email and username
            user_email := lower(replace(first_name || '.' || replace(last_name, '''', ''), ' ', '')) || '@company.com';
            user_username := lower(replace(first_name || '.' || replace(last_name, '''', ''), ' ', ''));
            
            -- Check if user already exists
            SELECT id INTO user_id FROM "users" 
            WHERE "firstName" = first_name AND "lastName" = last_name 
            LIMIT 1;
            
            -- Create user if doesn't exist (using cuid-like format)
            IF user_id IS NULL THEN
                -- Generate a simple ID (Prisma uses cuid format)
                -- Using a combination of timestamp and random for uniqueness
                user_id := 'cl' || to_char(EXTRACT(EPOCH FROM NOW())::bigint, 'FM999999999999999999') || substr(md5(random()::text), 1, 10);
                BEGIN
                    INSERT INTO "users" (id, "firstName", "lastName", email, username, "isActive", "createdAt", "updatedAt")
                    VALUES (user_id, first_name, COALESCE(last_name, ''), user_email, user_username, true, NOW(), NOW());
                EXCEPTION WHEN unique_violation THEN
                    -- If email/username conflict, try to find existing user
                    SELECT id INTO user_id FROM "users" 
                    WHERE email = user_email OR username = user_username 
                    LIMIT 1;
                END;
            END IF;
            
            -- Link account to user
            UPDATE "Account" SET "ownerId" = user_id WHERE id = account_record.id;
        END LOOP;
        
        -- Make ownerId required (after data migration)
        ALTER TABLE "Account" ALTER COLUMN "ownerId" SET NOT NULL;
        
        -- Drop old ownerName column
        ALTER TABLE "Account" DROP COLUMN IF EXISTS "ownerName";
    ELSE
        -- If ownerName doesn't exist, just make ownerId required (if not already)
        IF EXISTS (
            SELECT 1 FROM information_schema.columns 
            WHERE table_name = 'Account' AND column_name = 'ownerId' AND is_nullable = 'YES'
        ) THEN
            ALTER TABLE "Account" ALTER COLUMN "ownerId" SET NOT NULL;
        END IF;
    END IF;
END $$;

-- AddForeignKey: Add foreign key constraint (after data migration)
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_constraint 
        WHERE conname = 'Account_ownerId_fkey'
    ) THEN
        ALTER TABLE "Account" 
        ADD CONSTRAINT "Account_ownerId_fkey" 
        FOREIGN KEY ("ownerId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
    END IF;
END $$;
