-- AlterTable: Add businessSegment column
ALTER TABLE "Account" ADD COLUMN IF NOT EXISTS "businessSegment" TEXT;
