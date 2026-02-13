import { getRollingQuarters4 } from '@/lib/quarters';
import PlansList from './plans-list';

export const dynamic = 'force-dynamic';

export default function PlansPage() {
  const quarters = getRollingQuarters4();

  return (
    <main className="mx-auto max-w-6xl p-6">
      <h1 className="text-2xl font-semibold">Renewal Plans</h1>
      <p className="mt-2 text-gray-600">
        Track the 7-stage renewal workflow for each account.
      </p>
      <PlansList quarters={quarters} />
    </main>
  );
}
