'use client';

import { useCallback, useState } from 'react';
import EngagementQuickAddForm from './quick-add-form';
import EngagementCard, { type Engagement } from './engagement-card';

interface Props {
  initialEngagements: Engagement[];
  authors: string[];
}

export default function EngagementsView({ initialEngagements, authors }: Props) {
  const [engagements, setEngagements] = useState<Engagement[]>(initialEngagements);
  const [selectedAuthor, setSelectedAuthor] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const refresh = useCallback(async (authorName?: string) => {
    setLoading(true);
    try {
      const url = authorName ? `/api/engagements?authorName=${encodeURIComponent(authorName)}` : '/api/engagements';
      const res = await fetch(url);
      if (res.ok) {
        setEngagements(await res.json());
      }
    } finally {
      setLoading(false);
    }
  }, []);

  async function handleAuthorChange(author: string) {
    setSelectedAuthor(author);
    await refresh(author || undefined);
  }

  async function handleUpdate(id: string, field: string, value: unknown) {
    await fetch(`/api/engagements/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ field, value }),
    });
    await refresh(selectedAuthor || undefined);
  }

  async function handleDelete(id: string) {
    await fetch(`/api/engagements/${id}`, { method: 'DELETE' });
    setEngagements((prev) => prev.filter((e) => e.id !== id));
  }

  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <aside className="w-56 shrink-0 overflow-y-auto border-r border-gray-200 bg-white p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-3">Filter by RM</p>
        <button
          onClick={() => handleAuthorChange('')}
          className={`w-full text-left rounded px-2 py-1.5 text-sm mb-1 transition ${!selectedAuthor ? 'bg-db-aqua/15 text-db-aqua-dark font-medium' : 'text-gray-600 hover:bg-gray-50'}`}
        >
          All
        </button>
        {authors.map((author) => (
          <button
            key={author}
            onClick={() => handleAuthorChange(author)}
            className={`w-full text-left rounded px-2 py-1.5 text-sm mb-1 transition ${selectedAuthor === author ? 'bg-db-aqua/15 text-db-aqua-dark font-medium' : 'text-gray-600 hover:bg-gray-50'}`}
          >
            {author}
          </button>
        ))}
        {authors.length === 0 && (
          <p className="text-xs text-gray-400 mt-2">No engagements logged yet.</p>
        )}
      </aside>

      {/* Main content */}
      <section className="flex-1 min-w-0 overflow-y-auto">
        <div className="max-w-3xl mx-auto p-6 space-y-4">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-lg font-semibold text-db-dark">Client Engagements</h1>
            <span className="text-xs text-gray-400">{engagements.length} logged</span>
          </div>

          <EngagementQuickAddForm onSaved={() => refresh(selectedAuthor || undefined)} />

          {loading && <p className="text-xs text-gray-400 text-center py-4">Loading...</p>}

          {!loading && engagements.length === 0 && (
            <p className="text-sm text-gray-400 text-center py-8">No engagements logged yet. Use the form above to log your first one.</p>
          )}

          {!loading && engagements.map((e) => (
            <EngagementCard
              key={e.id}
              engagement={e}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
