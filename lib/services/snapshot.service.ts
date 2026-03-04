/**
 * Snapshot service — wraps prisma.forecastSnapshot.*.
 * This stays on Azure SQL even after Salesforce migration.
 */
import { prisma } from '@/lib/db';

export const snapshotService = {
  /** Create a new forecast snapshot. */
  async create(data: {
    scopeType: string;
    scopeName: string;
    quarterKey: string;
    periodKey: string;
    forQuarter: string;
    bestCents: number;
    worstCents: number;
    callCents: number;
    grossCallCents: number;
    priceIncreaseCents: number;
    expansionCents: number;
    confidencePct?: number | null;
    confidence?: string | null;
    notes?: string | null;
    createdBy: string;
    dataVersionId?: string | null;
  }) {
    return prisma.forecastSnapshot.create({ data });
  },

  /** Fetch snapshots by scope type and quarter keys, newest first. */
  async findByScope(scopeType: string, quarterKeys: string[]) {
    return prisma.forecastSnapshot.findMany({
      where: {
        scopeType,
        quarterKey: { in: quarterKeys },
      },
      orderBy: { createdAt: 'desc' },
    });
  },

  /** Fetch VP-level snapshots for specific quarters. */
  async findVpSnapshots(quarterKeys: string[]) {
    return prisma.forecastSnapshot.findMany({
      where: {
        scopeType: 'VP',
        scopeName: 'VP Forecast',
        quarterKey: { in: quarterKeys },
      },
      orderBy: { createdAt: 'desc' },
    });
  },

  /** Fetch all RM-scope snapshots for dashboard (expansion data). */
  async findRmSnapshots() {
    return prisma.forecastSnapshot.findMany({
      where: { scopeType: 'RM' },
      orderBy: { createdAt: 'desc' },
      select: {
        scopeName: true,
        expansionCents: true,
        quarterKey: true,
      },
    });
  },

  /** Fetch latest snapshot per account for a given quarter. */
  async findLatestByAccounts(accountNames: string[], quarterKey: string) {
    return prisma.forecastSnapshot.findMany({
      where: {
        scopeType: 'Account',
        scopeName: { in: accountNames },
        quarterKey,
      },
      orderBy: { createdAt: 'desc' },
    });
  },
};
