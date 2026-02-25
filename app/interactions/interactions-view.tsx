'use client';

import { useCallback, useEffect, useState } from 'react';
import {
  TEMPERATURE_COLORS,
  MEETING_TYPE_BADGES,
  type Temperature,
  type MeetingType,
} from '@/lib/interaction-types';
import QuickAddForm from './quick-add-form';
import InteractionCard, { type Interaction } from './interaction-card';

/* ------------------------------------------------------------------ */
/*  Types for the server-provided account list                         */
/* ------------------------------------------------------------------ */

interface AccountSummary {
  id: string;
  name: string;
  ownerId: string;
  owner: { id: string; firstName: string; lastName: string };
  interactions: {
    date: string;
    type: string;
    temperature: string | null;
    riskFlag: boolean;
  }[];
  _count: { interactions: number };
}

interface Props {
  accounts: AccountSummary[];
  rms: string[];
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function InteractionsView({ accounts, rms }: Props) {
  const [selectedRM, setSelectedRM] = useState('All');
  const [search, setSearch] = useState('');
  const [selectedAccountId, setSelectedAccountId] = useState<string | null>(null);
  const [interactions, setInteractions] = useState<Interaction[]>([]);
  const [loading, setLoading] = useState(false);

  // Filter accounts by RM and search
  const filtered = accounts.filter((a) => {
    const rmName = `${a.owner.firstName} ${a.owner.lastName}`;
    if (selectedRM !== 'All' && rmName !== selectedRM) return false;
    if (search && !a.name.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const selectedAccount = accounts.find((a) => a.id === selectedAccountId);

  // Fetch interactions for selected account
  const fetchInteractions = useCallback(async (accountId: string) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/interactions?accountId=${accountId}`);
      if (res.ok) {
        setInteractions(await res.json());
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (selectedAccountId) {
      fetchInteractions(selectedAccountId);
    }
  }, [selectedAccountId, fetchInteractions]);

  function handleSelectAccount(id: string) {
    setSelectedAccountId(id);
  }

  function handleSaved() {
    if (selectedAccountId) fetchInteractions(selectedAccountId);
  }

  async function handleUpdate(id: string, field: string, value: unknown) {
    await fetch(`/api/interactions/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ field, value }),
    });
    if (selectedAccountId) fetchInteractions(selectedAccountId);
  }

  async function handleDelete(id: string) {
    await fetch(`/api/interactions/${id}`, { method: 'DELETE' });
    if (selectedAccountId) fetchInteractions(selectedAccountId);
  }

  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <aside className="w-80 shrink-0 overflow-y-auto border-r border-gray-200 bg-white">
        <div className="p-3 space-y-2 border-b border-gray-100">
          <select
            value={selectedRM}
            onChange={(e) => setSelectedRM(e.target.value)}
            className="w-full rounded border border-db-gray px-2 py-1.5 text-sm focus:border-db-aqua focus:outline-none focus:ring-1 focus:ring-db-aqua"
          >
            <option value="All">All RMs</option>
            {rms.map((rm) => (
              <option key={rm} value={rm}>
                {rm}
              </option>
            ))}
          </select>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search accounts..."
            className="w-full rounded border border-db-gray px-2 py-1.5 text-sm focus:border-db-aqua focus:outline-none focus:ring-1 focus:ring-db-aqua"
          />
        </div>
        <div className="divide-y divide-gray-100">
          {filtered.map((account) => {
            const latest = account.interactions[0];
            const isSelected = selectedAccountId === account.id;
            const latestDate = latest
              ? new Date(latest.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                })
              : null;
            const badge =
              latest &&
              MEETING_TYPE_BADGES[latest.type as MeetingType];

            return (
              <button
                key={account.id}
                onClick={() => handleSelectAccount(account.id)}
                className={`w-full px-3 py-2.5 text-left transition ${
                  isSelected
                    ? 'bg-db-aqua/10 border-l-3 border-db-aqua'
                    : 'hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-db-dark truncate">
                    {account.name}
                  </p>
                  {account._count.interactions > 0 && (
                    <span className="ml-2 shrink-0 rounded-full bg-gray-100 px-1.5 py-0.5 text-xs text-gray-500">
                      {account._count.interactions}
                    </span>
                  )}
                </div>
                <div className="mt-0.5 flex items-center gap-2 text-xs text-gray-400">
                  <span>
                    {account.owner.firstName} {account.owner.lastName}
                  </span>
                  {latestDate && badge && (
                    <>
                      <span className="text-gray-300">|</span>
                      <span>
                        {latestDate} &middot; {latest.type}
                      </span>
                    </>
                  )}
                </div>
                {latest && (
                  <div className="mt-1 flex items-center gap-1.5">
                    {latest.temperature && (
                      <span
                        className={`rounded-full px-1.5 py-0.5 text-[10px] font-medium ${
                          TEMPERATURE_COLORS[latest.temperature as Temperature]
                            ?.active ?? ''
                        }`}
                      >
                        {latest.temperature}
                      </span>
                    )}
                    {latest.riskFlag && (
                      <span className="rounded-full bg-red-100 px-1.5 py-0.5 text-[10px] font-medium text-red-700">
                        Risk
                      </span>
                    )}
                  </div>
                )}
              </button>
            );
          })}
          {filtered.length === 0 && (
            <p className="px-3 py-6 text-center text-sm text-gray-400">
              No accounts found
            </p>
          )}
        </div>
      </aside>

      {/* Detail Pane */}
      <section className="flex-1 min-w-0 overflow-y-auto p-6">
        {!selectedAccount ? (
          <div className="flex h-full items-center justify-center">
            <div className="text-center">
              <p className="text-lg font-heading font-semibold text-db-dark">
                Client Interactions
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Select an account to view and log interactions.
              </p>
            </div>
          </div>
        ) : (
          <>
            {/* Account Header */}
            <div className="mb-4">
              <h2 className="text-lg font-heading font-semibold text-db-dark">
                {selectedAccount.name}
              </h2>
              <p className="text-sm text-gray-500">
                {selectedAccount.owner.firstName} {selectedAccount.owner.lastName}
              </p>
            </div>

            {/* Quick Add */}
            <QuickAddForm
              accountId={selectedAccount.id}
              authorId={selectedAccount.ownerId}
              onSaved={handleSaved}
            />

            {/* Timeline */}
            <div className="mt-6 space-y-3">
              {loading && (
                <p className="py-4 text-center text-sm text-gray-400">Loading...</p>
              )}
              {!loading && interactions.length === 0 && (
                <p className="py-8 text-center text-sm text-gray-400">
                  No interactions yet. Log the first one above.
                </p>
              )}
              {!loading &&
                interactions.map((ix) => (
                  <InteractionCard
                    key={ix.id}
                    interaction={ix}
                    onUpdate={handleUpdate}
                    onDelete={handleDelete}
                  />
                ))}
            </div>
          </>
        )}
      </section>
    </div>
  );
}
