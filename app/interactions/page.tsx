import { prisma } from '@/lib/db';
import InteractionsView from './interactions-view';

export const dynamic = 'force-dynamic';

export default async function InteractionsPage() {
  const accounts = await prisma.account.findMany({
    include: {
      owner: { select: { id: true, firstName: true, lastName: true } },
      interactions: {
        orderBy: { date: 'desc' },
        take: 1,
        select: { date: true, type: true, temperature: true, riskFlag: true },
      },
      _count: { select: { interactions: true } },
    },
    orderBy: { name: 'asc' },
  });

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
