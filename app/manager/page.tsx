import { getDashboardData } from '@/lib/data';
import VpDashboard from './vp-dashboard';
import ForecastNav from '../forecast-nav';

export const dynamic = 'force-dynamic';

export default async function VpPage() {
  const { accounts, latestByAccount, vpForecasts, quarters } = await getDashboardData({
    includeVpForecasts: true,
  });

  return (
    <main className="mx-auto max-w-6xl p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">VP Dashboard</h1>
        <ForecastNav />
      </div>
      <p className="mt-2 text-gray-600">3-quarter rolling view with RM rollups and Best/Worst/Call forecasting.</p>
      <VpDashboard accounts={accounts} latestByAccount={latestByAccount} vpForecasts={vpForecasts} quarters={quarters} />
    </main>
  );
}
