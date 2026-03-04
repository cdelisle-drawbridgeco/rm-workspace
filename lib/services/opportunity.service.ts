/**
 * Opportunity service — currently reads/writes Prisma/Postgres.
 * Phase 3: will read/write Salesforce Opportunity object.
 */
import { prisma } from '@/lib/db';

export const opportunityService = {
  /** Create a new opportunity. */
  async create(data: {
    accountId: string;
    name: string;
    renewalDate: Date;
    quarterKey: string;
    expiringArrCents: number;
    stage?: string | null;
    probability?: number | null;
    healthScore?: number | null;
    riskFlag?: boolean;
    productFamily?: string | null;
    termMonths?: number | null;
  }) {
    return prisma.opportunity.create({ data });
  },
};
