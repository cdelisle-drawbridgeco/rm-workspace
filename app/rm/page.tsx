import { getDashboardData } from '@/lib/data';
import AccountTable from './table';

export const dynamic = 'force-dynamic';

export default async function RmPage() {
  const { accounts, latestByAccount, quarters } = await getDashboardData();

  return (
    <main className="mx-auto max-w-6xl p-6">
      <h1 className="text-2xl font-semibold">RM Workspace</h1>
      <p className="mt-2 text-gray-600">3-quarter rolling view: Current, Next, and Following quarters.</p>
      {/* Forecasting occurs at account level; no top-level edit controls */}
      <AccountTable accounts={accounts} latestByAccount={latestByAccount} quarters={quarters} />
    </main>
  );
}
