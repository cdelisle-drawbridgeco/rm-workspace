import { accountService, interactionService, snapshotService } from '@/lib/services';
import { generateMockData } from '@/lib/mock-data';
import type { DashboardAccount } from './types';
import DashboardContent from './dashboard-content';

export const dynamic = 'force-dynamic';

export default async function DashboardPage() {
  // Fetch all accounts with related data
  const accounts = await accountService.findAllForDashboard();

  // Fetch interactions for days-since-last-touch and last QBR
  const interactions = await interactionService.findAllForDashboard();

  // Fetch expansion data from latest forecast snapshots
  const snapshots = await snapshotService.findRmSnapshots();

  // Build interaction maps per account
  const now = new Date();
  const interactionsByAccount = new Map<
    string,
    { latestDate: Date | null; latestTemp: string | null; lastQbrDate: Date | null }
  >();

  for (const ix of interactions) {
    const existing = interactionsByAccount.get(ix.accountId);
    if (!existing) {
      interactionsByAccount.set(ix.accountId, {
        latestDate: ix.date,
        latestTemp: ix.temperature,
        lastQbrDate: ix.type === 'QBR' ? ix.date : null,
      });
    } else {
      if (!existing.lastQbrDate && ix.type === 'QBR') {
        existing.lastQbrDate = ix.date;
      }
    }
  }

  // Build expansion map by scopeName (RM name)
  const expansionByRM = new Map<string, number>();
  for (const snap of snapshots) {
    if (!expansionByRM.has(snap.scopeName)) {
      expansionByRM.set(snap.scopeName, snap.expansionCents);
    }
  }

  // Build RM list
  const rmSet = new Set<string>();

  // Assemble DashboardAccount[]
  const dashboardAccounts: DashboardAccount[] = accounts.map((acct) => {
    const ownerName = `${acct.owner.firstName} ${acct.owner.lastName}`;
    rmSet.add(ownerName);

    const arrCents = acct.opportunities.reduce(
      (sum, o) => sum + o.expiringArrCents,
      0
    );

    // Next renewal: earliest future date
    const futureOpps = acct.opportunities.filter(
      (o) => new Date(o.renewalDate) >= now
    );
    futureOpps.sort(
      (a, b) =>
        new Date(a.renewalDate).getTime() - new Date(b.renewalDate).getTime()
    );
    const nextRenewalDate = futureOpps[0]
      ? futureOpps[0].renewalDate.toISOString()
      : null;

    const ixData = interactionsByAccount.get(acct.id);
    const daysSinceLastTouch = ixData?.latestDate
      ? Math.floor(
          (now.getTime() - ixData.latestDate.getTime()) / (1000 * 60 * 60 * 24)
        )
      : null;

    const temperature = ixData?.latestTemp ?? null;
    const riskRating = acct.renewalPlans[0]?.riskRating ?? null;
    const lastQbrDate = ixData?.lastQbrDate
      ? ixData.lastQbrDate.toISOString()
      : null;

    const expansionCents = expansionByRM.get(ownerName) ?? 0;

    const mock = generateMockData(acct.id);

    return {
      id: acct.id,
      name: acct.name,
      ownerName,
      segment: acct.segment,
      arrCents,
      nextRenewalDate,
      renewalOppCount: acct.opportunities.length,
      temperature,
      riskRating,
      daysSinceLastTouch,
      lastQbrDate,
      expansionCents,
      ...mock,
    };
  });

  const rms = Array.from(rmSet).sort();

  return (
    <main className="h-[calc(100vh-48px)] overflow-hidden">
      <DashboardContent accounts={dashboardAccounts} rms={rms} />
    </main>
  );
}
