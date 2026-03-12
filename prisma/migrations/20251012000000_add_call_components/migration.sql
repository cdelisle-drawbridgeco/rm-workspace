-- AlterTable: Add Call component fields to ForecastSnapshot
ALTER TABLE "ForecastSnapshot" ADD COLUMN IF NOT EXISTS "grossCallCents" INTEGER NOT NULL DEFAULT 0;
ALTER TABLE "ForecastSnapshot" ADD COLUMN IF NOT EXISTS "priceIncreaseCents" INTEGER NOT NULL DEFAULT 0;
ALTER TABLE "ForecastSnapshot" ADD COLUMN IF NOT EXISTS "expansionCents" INTEGER NOT NULL DEFAULT 0;

-- Update existing records: Set grossCallCents = callCents, priceIncreaseCents = 0, expansionCents = 0
-- This preserves existing data by assuming all current call value is Gross Call
UPDATE "ForecastSnapshot" 
SET 
  "grossCallCents" = "callCents",
  "priceIncreaseCents" = 0,
  "expansionCents" = 0
WHERE "grossCallCents" = 0 AND "priceIncreaseCents" = 0 AND "expansionCents" = 0;
