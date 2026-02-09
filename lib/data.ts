/**
 * Shared data-fetching logic for all dashboard pages.
 */
import { prisma } from '@/lib/db';
import { getRollingQuarters } from '@/lib/quarters';

export interface AccountSnapshotData {
  bestUsd: number;
  worstUsd: number;
  callUsd: number;
  grossCallUsd: number;
  priceIncreaseUsd: number;
  expansionUsd: number;
  confidence: string;
  notes: string;
}

export interface VpForecastData {
  bestUsd: number;
  worstUsd: number;
  callUsd: number;
  grossCallUsd: number;
  priceIncreaseUsd: number;
  expansionUsd: number;
  notes: string;
}

const OWNER_SELECT = {
  id: true,
  firstName: true,
  lastName: true,
  email: true,
  username: true,
  isActive: true,
} as const;

/**
 * Fetch all accounts with opportunities and owner, plus latest forecast
 * snapshots per account per quarter. Optionally fetches VP-level forecasts.
 */
export async function getDashboardData(options?: { includeVpForecasts?: boolean }) {
  const accounts = await prisma.account.findMany({
    include: {
      opportunities: true,
      owner: { select: OWNER_SELECT },
    },
  });

  // Filter out any accounts without owners (defensive check)
  const validAccounts = accounts.filter(acc => acc.owner !== null);

  if (validAccounts.length !== accounts.length) {
    console.warn(
      `Warning: ${accounts.length - validAccounts.length} accounts found without owners`
    );
  }

  const quarters = getRollingQuarters();
  const quarterValues = [quarters.cq, quarters.nq, quarters.fq];

  // Build latest snapshot map per account per quarter
  const latestByAccount = new Map<string, Record<string, AccountSnapshotData>>();

  for (const account of validAccounts) {
    const accountSnapshots: Record<string, AccountSnapshotData> = {};

    for (const quarter of quarterValues) {
      const snap = await prisma.forecastSnapshot.findFirst({
        where: { scopeType: 'Account', scopeName: account.name, quarterKey: quarter },
        orderBy: { createdAt: 'desc' },
      });

      if (snap) {
        accountSnapshots[quarter] = {
          bestUsd: (snap.bestCents || 0) / 100,
          worstUsd: (snap.worstCents || 0) / 100,
          callUsd: (snap.callCents || 0) / 100,
          grossCallUsd: (snap.grossCallCents || 0) / 100,
          priceIncreaseUsd: (snap.priceIncreaseCents || 0) / 100,
          expansionUsd: (snap.expansionCents || 0) / 100,
          confidence: snap.confidence || '',
          notes: snap.notes || '',
        };
      }
    }

    if (Object.keys(accountSnapshots).length > 0) {
      latestByAccount.set(account.name, accountSnapshots);
    }
  }

  // Optionally fetch VP forecasts
  let vpForecasts = new Map<string, VpForecastData>();

  if (options?.includeVpForecasts) {
    for (const quarter of quarterValues) {
      const vpSnap = await prisma.forecastSnapshot.findFirst({
        where: { scopeType: 'VP', scopeName: 'VP Forecast', quarterKey: quarter },
        orderBy: { createdAt: 'desc' },
      });

      if (vpSnap) {
        vpForecasts.set(quarter, {
          bestUsd: (vpSnap.bestCents || 0) / 100,
          worstUsd: (vpSnap.worstCents || 0) / 100,
          callUsd: (vpSnap.callCents || 0) / 100,
          grossCallUsd: (vpSnap.grossCallCents || 0) / 100,
          priceIncreaseUsd: (vpSnap.priceIncreaseCents || 0) / 100,
          expansionUsd: (vpSnap.expansionCents || 0) / 100,
          notes: vpSnap.notes || '',
        });
      }
    }
  }

  return {
    accounts: validAccounts,
    latestByAccount: Object.fromEntries(latestByAccount),
    vpForecasts: Object.fromEntries(vpForecasts),
    quarters,
  };
}
