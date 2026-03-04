/**
 * Renewal plan service — currently reads/writes Prisma/Postgres.
 * Phase 3: will read/write Salesforce (object TBD by user).
 */
import { prisma } from '@/lib/db';

export const renewalPlanService = {
  /** Fetch plan summaries (stage + risk) for given quarters. */
  async findSummaries(quarterKeys: string[]) {
    return prisma.renewalPlan.findMany({
      where: { quarterKey: { in: quarterKeys } },
      select: {
        accountId: true,
        quarterKey: true,
        currentStage: true,
        riskRating: true,
      },
    });
  },

  /** Fetch a single plan by ID, with account, owner, and opportunities. */
  async findById(planId: string) {
    return prisma.renewalPlan.findUnique({
      where: { id: planId },
      include: {
        account: {
          include: {
            owner: {
              select: { id: true, firstName: true, lastName: true },
            },
            opportunities: true,
          },
        },
      },
    });
  },

  /** Upsert a renewal plan for a given account + quarter. */
  async upsert(accountId: string, quarterKey: string) {
    return prisma.renewalPlan.upsert({
      where: {
        accountId_quarterKey: { accountId, quarterKey },
      },
      create: {
        accountId,
        quarterKey,
        currentStage: 'prep',
      },
      update: {},
    });
  },

  /** Update the current stage of a plan. */
  async updateStage(planId: string, stage: string) {
    return prisma.renewalPlan.update({
      where: { id: planId },
      data: { currentStage: stage },
    });
  },

  /** Update the notes of a plan. */
  async updateNotes(planId: string, notes: string) {
    return prisma.renewalPlan.update({
      where: { id: planId },
      data: { notes },
    });
  },

  /** Get current plan to read existing gate data. */
  async findByIdSimple(planId: string) {
    return prisma.renewalPlan.findUnique({
      where: { id: planId },
    });
  },

  /** Update gate JSON fields (and optionally riskRating). */
  async updateGates(planId: string, data: Record<string, unknown>) {
    return prisma.renewalPlan.update({
      where: { id: planId },
      data,
    });
  },
};
