-- CreateTable
CREATE TABLE "weekly_forecast_locks" (
    "id" TEXT NOT NULL,
    "rmName" TEXT NOT NULL,
    "quarterKey" TEXT NOT NULL,
    "periodKey" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'draft',
    "submittedAt" TIMESTAMP(3),
    "reviewedBy" TEXT,
    "reviewedAt" TIMESTAMP(3),
    "lockedAt" TIMESTAMP(3),
    "snapshotData" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "weekly_forecast_locks_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "weekly_forecast_locks_rmName_quarterKey_periodKey_key" ON "weekly_forecast_locks"("rmName", "quarterKey", "periodKey");
