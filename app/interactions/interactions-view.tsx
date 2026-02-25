'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import {
  TEMPERATURE_COLORS,
  type Temperature,
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
/*  Account Search with autocomplete                                   */
/* ------------------------------------------------------------------ */

function AccountSearch({
  accounts,
  selectedId,
  onSelect,
}: {
  accounts: AccountSummary[];
  selectedId: string | null;
  onSelect: (id: string) => void;
}) {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const selected = accounts.find((a) => a.id === selectedId);

  const suggestions =
    query.length > 0
      ? accounts.filter((a) =>
          a.name.toLowerCase().includes(query.toLowerCase())
        )
      : accounts;

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  function handleSelect(id: string) {
    onSelect(id);
    setQuery('');
    setOpen(false);
  }

  return (
    <div ref={wrapperRef} className="relative flex-1 min-w-[240px]">
      <input
        type="text"
        value={open ? query : selected ? selected.name : query}
        onChange={(e) => {
          setQuery(e.target.value);
          if (!open) setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        placeholder="Search accounts..."
        className="w-full rounded border border-db-gray px-3 py-1.5 text-sm focus:border-db-aqua focus:outline-none focus:ring-1 focus:ring-db-aqua"
      />
      {open && (
        <div className="absolute z-20 mt-1 max-h-64 w-full overflow-y-auto rounded-lg border border-gray-200 bg-white shadow-lg">
          {suggestions.length === 0 ? (
            <p className="px-3 py-3 text-sm text-gray-400">No accounts found</p>
          ) : (
            suggestions.map((account) => {
              const latest = account.interactions[0];
              const isActive = selectedId === account.id;
              return (
                <button
                  key={account.id}
                  onClick={() => handleSelect(account.id)}
                  className={`w-full px-3 py-2 text-left text-sm transition hover:bg-gray-50 ${
                    isActive ? 'bg-db-aqua/10 font-medium' : ''
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-db-dark">{account.name}</span>
                    <div className="flex items-center gap-1.5 ml-2 shrink-0">
                      {latest?.temperature && (
                        <span
                          className={`rounded-full px-1.5 py-0.5 text-[10px] font-medium ${
                            TEMPERATURE_COLORS[latest.temperature as Temperature]
                              ?.active ?? ''
                          }`}
                        >
                          {latest.temperature}
                        </span>
                      )}
                      {latest?.riskFlag && (
                        <span className="rounded-full bg-red-100 px-1.5 py-0.5 text-[10px] font-medium text-red-700">
                          Risk
                        </span>
                      )}
                      {account._count.interactions > 0 && (
                        <span className="rounded-full bg-gray-100 px-1.5 py-0.5 text-[10px] text-gray-500">
                          {account._count.interactions}
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-xs text-gray-400">
                    {account.owner.firstName} {account.owner.lastName}
                    {latest && (
                      <>
                        {' '}
                        &middot;{' '}
                        {new Date(latest.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                        })}{' '}
                        {latest.type}
                      </>
                    )}
                  </p>
                </button>
              );
            })
          )}
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Component                                                     */
/* ------------------------------------------------------------------ */

export default function InteractionsView({ accounts, rms }: Props) {
  const [selectedRM, setSelectedRM] = useState('All');
  const [selectedAccountId, setSelectedAccountId] = useState<string | null>(null);
  const [interactions, setInteractions] = useState<Interaction[]>([]);
  const [loading, setLoading] = useState(false);

  // Filter accounts by RM
  const filtered = accounts.filter((a) => {
    if (selectedRM === 'All') return true;
    const rmName = `${a.owner.firstName} ${a.owner.lastName}`;
    return rmName === selectedRM;
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

  // Clear selected account if RM filter changes and the account doesn't match
  useEffect(() => {
    if (selectedRM !== 'All' && selectedAccount) {
      const rmName = `${selectedAccount.owner.firstName} ${selectedAccount.owner.lastName}`;
      if (rmName !== selectedRM) {
        setSelectedAccountId(null);
        setInteractions([]);
      }
    }
  }, [selectedRM, selectedAccount]);

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
    <div className="flex h-full flex-col">
      {/* Top Filter Bar */}
      <div className="shrink-0 border-b border-gray-200 bg-white px-6 py-3">
        <div className="mx-auto flex max-w-4xl items-center gap-4">
          <div className="shrink-0">
            <label className="mr-2 text-sm font-medium text-db-dark">RM:</label>
            <select
              value={selectedRM}
              onChange={(e) => setSelectedRM(e.target.value)}
              className="rounded border border-db-gray px-2 py-1.5 text-sm focus:border-db-aqua focus:outline-none focus:ring-1 focus:ring-db-aqua"
            >
              <option value="All">All RMs</option>
              {rms.map((rm) => (
                <option key={rm} value={rm}>
                  {rm}
                </option>
              ))}
            </select>
          </div>
          <AccountSearch
            accounts={filtered}
            selectedId={selectedAccountId}
            onSelect={setSelectedAccountId}
          />
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 min-h-0 overflow-y-auto">
        <div className="mx-auto max-w-4xl p-6">
          {!selectedAccount ? (
            <div className="flex items-center justify-center py-24">
              <div className="text-center">
                <p className="text-lg font-heading font-semibold text-db-dark">
                  Client Interactions
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  Select an account above to view and log interactions.
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
        </div>
      </div>
    </div>
  );
}
