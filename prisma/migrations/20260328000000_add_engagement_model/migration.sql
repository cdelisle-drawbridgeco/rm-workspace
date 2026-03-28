-- CreateTable
CREATE TABLE "engagements" (
    "id" TEXT NOT NULL,
    "clientName" TEXT NOT NULL,
    "contactName" TEXT NOT NULL,
    "contactTier" TEXT NOT NULL,
    "authorName" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "type" TEXT NOT NULL,
    "direction" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "notes" TEXT NOT NULL,
    "followUp" TEXT,
    "pathToExecutive" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "engagements_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "engagements_authorName_idx" ON "engagements"("authorName");

-- CreateIndex
CREATE INDEX "engagements_date_idx" ON "engagements"("date" DESC);
