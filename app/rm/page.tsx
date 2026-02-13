import { getDashboardData } from '@/lib/data';
import AccountTable from './table';
import ForecastNav from '../forecast-nav';

export const dynamic = 'force-dynamic';

export default async function RmPage() {
  const { accounts, latestByAccount, quarters, renewalPlanSummaries } = await getDashboardData({
    includeRenewalPlanSummaries: true,
  });

  return (
    <main className="mx-auto max-w-6xl p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">RM Workspace</h1>
        <ForecastNav />
      </div>
      <p className="mt-2 text-gray-600">3-quarter rolling view: Current, Next, and Following quarters.</p>
      <AccountTable
        accounts={accounts}
        latestByAccount={latestByAccount}
        quarters={quarters}
        renewalPlanSummaries={renewalPlanSummaries}
      />
    </main>
  );
}
