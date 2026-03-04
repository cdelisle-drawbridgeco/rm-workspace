/**
 * Shared data-fetching logic for all dashboard pages.
 */
import { accountService, snapshotService, renewalPlanService } from '@/lib/services';
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
export interface RenewalPlanSummary {
  accountId: string;
  quarterKey: string;
  currentStage: string;
  riskRating: string | null;
}

/** Bulk fetch renewal plan summaries (stage + risk) for syncing to the RM table. */
export async function getRenewalPlanSummaries(
  quarterKeys: string[]
): Promise<Record<string, RenewalPlanSummary>> {
  const plans = await renewalPlanService.findSummaries(quarterKeys);

  const map: Record<string, RenewalPlanSummary> = {};
  for (const p of plans) {
    map[`${p.accountId}|${p.quarterKey}`] = p;
  }
  return map;
}

export async function getDashboardData(options?: {
  includeVpForecasts?: boolean;
  includeRenewalPlanSummaries?: boolean;
}) {
  const accounts = await accountService.findAllWithOwnerAndOpportunities();

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
  const allAccountSnaps = await snapshotService.findByScope('Account', quarterValues);

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
    const allVpSnaps = await snapshotService.findVpSnapshots(quarterValues);

    // Deduplicate: keep only the latest per quarterKey
    for (const snap of allVpSnaps) {
      if (!vpForecasts.has(snap.quarterKey)) {
        vpForecasts.set(snap.quarterKey, snapToVpData(snap));
      }
    }
  }

  // Optionally fetch renewal plan summaries
  let renewalPlanSummaries: Record<string, RenewalPlanSummary> = {};
  if (options?.includeRenewalPlanSummaries) {
    renewalPlanSummaries = await getRenewalPlanSummaries(quarterValues);
  }

  return {
    accounts: validAccounts,
    latestByAccount: Object.fromEntries(latestByAccount),
    vpForecasts: Object.fromEntries(vpForecasts),
    quarters,
    renewalPlanSummaries,
  };
}
