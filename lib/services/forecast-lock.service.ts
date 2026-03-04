/**
 * Forecast lock service — manages the weekly lock/submit workflow.
 * Lives in Azure SQL (time-series store) across all phases.
 */
import { prisma } from '@/lib/db';

export type ForecastLockStatus = 'draft' | 'submitted' | 'reviewed' | 'locked';

export interface AccountForecastSnapshot {
  accountId: string;
  accountName: string;
  best: number;
  worst: number;
  grossCall: number;
  priceIncrease: number;
  expansion: number;
  call: number;
  confidence: string;
  notes: string;
}

export const forecastLockService = {
  /** Submit a weekly forecast — creates or updates a lock record. */
  async submit(data: {
    rmName: string;
    quarterKey: string;
    periodKey: string;
    snapshotData: AccountForecastSnapshot[];
  }) {
    return prisma.weeklyForecastLock.upsert({
      where: {
        rmName_quarterKey_periodKey: {
          rmName: data.rmName,
          quarterKey: data.quarterKey,
          periodKey: data.periodKey,
        },
      },
      create: {
        rmName: data.rmName,
        quarterKey: data.quarterKey,
        periodKey: data.periodKey,
        status: 'submitted',
        submittedAt: new Date(),
        snapshotData: JSON.stringify(data.snapshotData),
      },
      update: {
        status: 'submitted',
        submittedAt: new Date(),
        snapshotData: JSON.stringify(data.snapshotData),
      },
    });
  },

  /** Get the current lock status for an RM + quarter + period. */
  async getStatus(rmName: string, quarterKey: string, periodKey: string) {
    return prisma.weeklyForecastLock.findUnique({
      where: {
        rmName_quarterKey_periodKey: {
          rmName,
          quarterKey,
          periodKey,
        },
      },
    });
  },

  /** Get lock history for an RM + quarter (all weeks). */
  async getHistory(rmName: string, quarterKey: string) {
    return prisma.weeklyForecastLock.findMany({
      where: { rmName, quarterKey },
      orderBy: { periodKey: 'desc' },
    });
  },

  /** Mark a lock as reviewed by a manager. */
  async markReviewed(id: string, reviewedBy: string) {
    return prisma.weeklyForecastLock.update({
      where: { id },
      data: {
        status: 'reviewed',
        reviewedBy,
        reviewedAt: new Date(),
      },
    });
  },

  /** Lock a record (typically by cron on Friday). */
  async lock(id: string) {
    return prisma.weeklyForecastLock.update({
      where: { id },
      data: {
        status: 'locked',
        lockedAt: new Date(),
      },
    });
  },

  /** Bulk lock all submitted/reviewed records for a given period. */
  async lockAllForPeriod(periodKey: string) {
    return prisma.weeklyForecastLock.updateMany({
      where: {
        periodKey,
        status: { in: ['submitted', 'reviewed'] },
      },
      data: {
        status: 'locked',
        lockedAt: new Date(),
      },
    });
  },
};
