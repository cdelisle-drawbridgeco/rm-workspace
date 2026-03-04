import { accountService } from '@/lib/services';
import InteractionsView from './interactions-view';

export const dynamic = 'force-dynamic';

export default async function InteractionsPage() {
  const accounts = await accountService.findAllForInteractions();

  // Serialize Date objects to strings for the client component
  const serialized = accounts.map((a) => ({
    ...a,
    interactions: a.interactions.map((ix) => ({
      ...ix,
      date: ix.date.toISOString(),
    })),
  }));

  const rms = Array.from(
    new Set(accounts.map((a) => `${a.owner.firstName} ${a.owner.lastName}`))
  ).sort();

  return (
    <main className="h-[calc(100vh-48px)] overflow-hidden">
      <InteractionsView accounts={serialized} rms={rms} />
    </main>
  );
}
