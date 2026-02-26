-- CreateTable
CREATE TABLE IF NOT EXISTS "RenewalPlan" (
    "id" TEXT NOT NULL,
    "accountId" TEXT NOT NULL,
    "quarterKey" TEXT NOT NULL,
    "currentStage" TEXT NOT NULL DEFAULT 'prep',
    "riskRating" TEXT,
    "prepGates" JSONB,
    "callScheduledGates" JSONB,
    "riskRatingGates" JSONB,
    "strategizeGates" JSONB,
    "planningGates" JSONB,
    "negotiateGates" JSONB,
    "executeGates" JSONB,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RenewalPlan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE IF NOT EXISTS "client_interactions" (
    "id" TEXT NOT NULL,
    "accountId" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "type" TEXT NOT NULL,
    "notes" TEXT NOT NULL,
    "temperature" TEXT,
    "riskFlag" BOOLEAN NOT NULL DEFAULT false,
    "followUp" TEXT,
    "participants" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "client_interactions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex (idempotent)
CREATE UNIQUE INDEX IF NOT EXISTS "RenewalPlan_accountId_quarterKey_key" ON "RenewalPlan"("accountId", "quarterKey");

-- CreateIndex (idempotent)
CREATE INDEX IF NOT EXISTS "client_interactions_accountId_date_idx" ON "client_interactions"("accountId", "date" DESC);

-- AddForeignKey (idempotent — skip if already exists)
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'RenewalPlan_accountId_fkey') THEN
    ALTER TABLE "RenewalPlan" ADD CONSTRAINT "RenewalPlan_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
  END IF;
END $$;

DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'client_interactions_accountId_fkey') THEN
    ALTER TABLE "client_interactions" ADD CONSTRAINT "client_interactions_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
  END IF;
END $$;

DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'client_interactions_authorId_fkey') THEN
    ALTER TABLE "client_interactions" ADD CONSTRAINT "client_interactions_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
  END IF;
END $$;
