import { engagementService } from '@/lib/services';
import EngagementsView from './engagements-view';

export const dynamic = 'force-dynamic';

export default async function EngagementsPage() {
  const [engagements, authors] = await Promise.all([
    engagementService.findAll(),
    engagementService.findAllAuthors(),
  ]);

  const serialized = engagements.map((e) => ({
    ...e,
    date: e.date.toISOString(),
    createdAt: e.createdAt.toISOString(),
    updatedAt: e.updatedAt.toISOString(),
  }));

  return (
    <main className="h-[calc(100vh-48px)] overflow-hidden">
      <EngagementsView initialEngagements={serialized} authors={authors} />
    </main>
  );
}
