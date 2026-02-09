import { getDashboardData } from '@/lib/data';
import ExecDashboard from './exec-dashboard';

export const dynamic = 'force-dynamic';

export default async function ExecPage() {
  const { accounts, latestByAccount, vpForecasts, quarters } = await getDashboardData({
    includeVpForecasts: true,
  });

  return (
    <main className="mx-auto max-w-6xl p-6">
      <h1 className="text-2xl font-semibold">Executive Dashboard</h1>
      <p className="mt-2 text-gray-600">3-quarter rolling view with VP forecasts and RM rollups.</p>
      <ExecDashboard
        accounts={accounts}
        latestByAccount={latestByAccount}
        vpForecasts={vpForecasts}
        quarters={quarters}
      />
    </main>
  );
}
