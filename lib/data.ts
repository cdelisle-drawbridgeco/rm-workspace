/**
 * Shared data-fetching logic for all dashboard pages.
 */
import { prisma } from '@/lib/db';
import { getRollingQuarters } from '@/lib/quarters';
import type { ForecastSnapshot } from '@prisma/client';

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

/** Convert a raw ForecastSnapshot row to USD display values. */
function snapToAccountData(snap: ForecastSnapshot): AccountSnapshotData {
  return {
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

function snapToVpData(snap: ForecastSnapshot): VpForecastData {
  return {
    bestUsd: (snap.bestCents || 0) / 100,
    worstUsd: (snap.worstCents || 0) / 100,
    callUsd: (snap.callCents || 0) / 100,
    grossCallUsd: (snap.grossCallCents || 0) / 100,
    priceIncreaseUsd: (snap.priceIncreaseCents || 0) / 100,
    expansionUsd: (snap.expansionCents || 0) / 100,
    notes: snap.notes || '',
  };
}

/**
 * Fetch all accounts with opportunities and owner, plus latest forecast
 * snapshots per account per quarter. Optionally fetches VP-level forecasts.
 *
 * Uses bulk queries instead of per-account loops to avoid N+1.
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

  // Bulk fetch all Account snapshots for the 3 quarters, newest first
  const allAccountSnaps = await prisma.forecastSnapshot.findMany({
    where: {
      scopeType: 'Account',
      quarterKey: { in: quarterValues },
    },
    orderBy: { createdAt: 'desc' },
  });

  // Deduplicate: keep only the latest per (scopeName, quarterKey)
  const latestByAccount = new Map<string, Record<string, AccountSnapshotData>>();
  const seen = new Set<string>();

  for (const snap of allAccountSnaps) {
    const key = `${snap.scopeName}|${snap.quarterKey}`;
    if (seen.has(key)) continue;
    seen.add(key);

    if (!latestByAccount.has(snap.scopeName)) {
      latestByAccount.set(snap.scopeName, {});
    }
    latestByAccount.get(snap.scopeName)![snap.quarterKey] = snapToAccountData(snap);
  }

  // Optionally bulk fetch VP forecasts
  let vpForecasts = new Map<string, VpForecastData>();

  if (options?.includeVpForecasts) {
    const allVpSnaps = await prisma.forecastSnapshot.findMany({
      where: {
        scopeType: 'VP',
        scopeName: 'VP Forecast',
        quarterKey: { in: quarterValues },
      },
      orderBy: { createdAt: 'desc' },
    });

    // Deduplicate: keep only the latest per quarterKey
    for (const snap of allVpSnaps) {
      if (!vpForecasts.has(snap.quarterKey)) {
        vpForecasts.set(snap.quarterKey, snapToVpData(snap));
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
