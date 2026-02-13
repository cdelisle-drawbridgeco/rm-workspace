'use client';
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { RENEWAL_STAGES, STAGE_LABELS, RISK_RATING_COLORS } from '@/lib/renewal-stages';
import type { RenewalStage } from '@/lib/renewal-stages';
import { formatUsd } from '@/lib/format';
import PlanView from './plan-view';

interface Opportunity {
  id: string;
  name: string;
  renewalDate: string;
  expiringArrCents: number;
  quarterKey: string;
}

interface PlanSummary {
  id: string;
  currentStage: string;
  riskRating: string | null;
}

interface AccountWithPlan {
  accountId: string;
  accountName: string;
  owner: { id: string; firstName: string; lastName: string };
  opportunityCount: number;
  combinedArrCents: number;
  opportunities: Opportunity[];
  plan: PlanSummary | null;
}

export default function PlansList({
  quarters,
}: {
  quarters: { cq: string; nq: string; fq: string; q4: string };
}) {
  const quarterOptions = [
    { key: 'cq', label: `Current (${quarters.cq})`, value: quarters.cq },
    { key: 'nq', label: `Next (${quarters.nq})`, value: quarters.nq },
    { key: 'fq', label: `Following (${quarters.fq})`, value: quarters.fq },
    { key: 'q4', label: `Q4 (${quarters.q4})`, value: quarters.q4 },
  ];

  const [selectedQuarter, setSelectedQuarter] = useState(quarters.cq);
  const [selectedRM, setSelectedRM] = useState<string>('All');
  const [accounts, setAccounts] = useState<AccountWithPlan[]>([]);
  const [selectedAccountId, setSelectedAccountId] = useState<string | null>(null);
  const [activePlanId, setActivePlanId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [creating, setCreating] = useState(false);

  const fetchAccounts = useCallback(async (qk: string) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/renewal-plans?quarterKey=${qk}`);
      if (res.ok) {
        const data: AccountWithPlan[] = await res.json();
        setAccounts(data);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAccounts(selectedQuarter);
    setSelectedAccountId(null);
    setActivePlanId(null);
  }, [selectedQuarter, fetchAccounts]);

  const rms = useMemo(() => {
    const names = new Set<string>();
    for (const acc of accounts) {
      names.add(`${acc.owner.firstName} ${acc.owner.lastName}`);
    }
    return Array.from(names).sort();
  }, [accounts]);

  const filteredAccounts = useMemo(() => {
    if (selectedRM === 'All') return accounts;
    return accounts.filter(
      (acc) => `${acc.owner.firstName} ${acc.owner.lastName}` === selectedRM
    );
  }, [accounts, selectedRM]);

  const stageCounts = useMemo(() => {
    const counts: Record<string, { count: number; arrCents: number }> = {};
    for (const stage of RENEWAL_STAGES) {
      counts[stage] = { count: 0, arrCents: 0 };
    }
    counts['none'] = { count: 0, arrCents: 0 };

    for (const acc of filteredAccounts) {
      const stage = acc.plan?.currentStage || 'none';
      if (!counts[stage]) counts[stage] = { count: 0, arrCents: 0 };
      counts[stage].count++;
      counts[stage].arrCents += acc.combinedArrCents;
    }
    return counts;
  }, [filteredAccounts]);

  const handleSelectAccount = async (accountId: string) => {
    setSelectedAccountId(accountId);
    const acc = accounts.find((a) => a.accountId === accountId);
    if (!acc) return;

    if (acc.plan) {
      setActivePlanId(acc.plan.id);
    } else {
      setCreating(true);
      try {
        const res = await fetch('/api/renewal-plans/create', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            accountId,
            quarterKey: selectedQuarter,
          }),
        });
        if (res.ok) {
          const newPlan = await res.json();
          setActivePlanId(newPlan.id);
          fetchAccounts(selectedQuarter);
        }
      } finally {
        setCreating(false);
      }
    }
  };

  const selectedAccount = filteredAccounts.find(
    (a) => a.accountId === selectedAccountId
  );

  return (
    <div className="mt-6">
      {/* Filters row */}
      <div className="mb-4 flex flex-wrap items-center gap-4">
        <div>
          <label className="text-sm font-medium text-db-dark">Quarter:</label>
          <select
            className="ml-2 rounded border border-db-gray p-2 text-sm"
            value={selectedQuarter}
            onChange={(e) => setSelectedQuarter(e.target.value)}
          >
            {quarterOptions.map((q) => (
              <option key={q.key} value={q.value}>
                {q.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-sm font-medium text-db-dark">Filter by RM:</label>
          <select
            className="ml-2 rounded border border-db-gray p-2 text-sm"
            value={selectedRM}
            onChange={(e) => setSelectedRM(e.target.value)}
          >
            <option value="All">All RMs</option>
            {rms.map((rm) => (
              <option key={rm} value={rm}>
                {rm}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Stage summary bar */}
      {!loading && filteredAccounts.length > 0 && (
        <section className="mb-4 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
          {RENEWAL_STAGES.map((stage) => {
            const { count, arrCents } = stageCounts[stage];
            return (
              <div key={stage} className="rounded-lg border border-db-gray bg-white p-3">
                <div className="text-xs text-gray-500">{STAGE_LABELS[stage]}</div>
                <div className="text-lg font-heading font-semibold text-db-dark">{count}</div>
                {arrCents > 0 && (
                  <div className="text-xs text-db-aqua-dark">{formatUsd(arrCents)}</div>
                )}
              </div>
            );
          })}
          {stageCounts['none'].count > 0 && (
            <div className="rounded-lg border border-db-gray bg-white p-3">
              <div className="text-xs text-gray-500">No Plan</div>
              <div className="text-lg font-heading font-semibold text-db-dark">{stageCounts['none'].count}</div>
              {stageCounts['none'].arrCents > 0 && (
                <div className="text-xs text-db-aqua-dark">{formatUsd(stageCounts['none'].arrCents)}</div>
              )}
            </div>
          )}
        </section>
      )}

      {loading && (
        <p className="text-sm text-gray-500">Loading accounts...</p>
      )}

      {!loading && accounts.length === 0 && (
        <p className="text-sm text-gray-500">
          No accounts with renewals in this quarter.
        </p>
      )}

      {!loading && filteredAccounts.length > 0 && (
        <div className="flex gap-6">
          {/* Account list sidebar */}
          <div className="w-80 flex-shrink-0">
            <div className="text-sm font-medium text-db-dark mb-2">
              Accounts ({filteredAccounts.length})
            </div>
            <div className="space-y-1 max-h-[70vh] overflow-y-auto">
              {filteredAccounts.map((acc) => {
                const isSelected = acc.accountId === selectedAccountId;
                const stage = acc.plan?.currentStage as RenewalStage | undefined;
                const risk = acc.plan?.riskRating;
                return (
                  <button
                    key={acc.accountId}
                    onClick={() => handleSelectAccount(acc.accountId)}
                    className={`w-full text-left rounded-lg border p-3 text-sm transition ${
                      isSelected
                        ? 'border-db-aqua bg-db-aqua-light'
                        : 'border-db-gray bg-white hover:bg-db-gray-light'
                    }`}
                  >
                    <div className="font-medium text-db-dark">{acc.accountName}</div>
                    <div className="mt-1 flex items-center gap-2 text-xs text-gray-500">
                      <span>
                        {acc.opportunityCount} opp
                        {acc.opportunityCount !== 1 ? 's' : ''}
                      </span>
                      <span>{formatUsd(acc.combinedArrCents)}</span>
                      <span className="text-gray-400">
                        {acc.owner.firstName} {acc.owner.lastName}
                      </span>
                    </div>
                    {stage && (
                      <div className="mt-1 flex items-center gap-2">
                        <span className="inline-block rounded bg-db-aqua-light px-2 py-0.5 text-xs text-db-aqua-dark font-medium">
                          {STAGE_LABELS[stage] || stage}
                        </span>
                        {risk && (
                          <span
                            className={`inline-block rounded px-2 py-0.5 text-xs ${
                              RISK_RATING_COLORS[risk]?.bg || 'bg-gray-100'
                            } ${
                              RISK_RATING_COLORS[risk]?.text || 'text-gray-800'
                            }`}
                          >
                            {risk}
                          </span>
                        )}
                      </div>
                    )}
                    {!stage && (
                      <div className="mt-1 text-xs text-gray-400">
                        No plan yet
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Plan view */}
          <div className="flex-1 min-w-0">
            {creating && (
              <p className="text-sm text-gray-500">Creating plan...</p>
            )}
            {!creating && activePlanId && selectedAccount && (
              <PlanView
                planId={activePlanId}
                accountName={selectedAccount.accountName}
                ownerName={`${selectedAccount.owner.firstName} ${selectedAccount.owner.lastName}`}
                onStageChange={() => fetchAccounts(selectedQuarter)}
              />
            )}
            {!creating && !activePlanId && (
              <div className="rounded-lg border border-db-gray bg-white p-8 text-center text-gray-500">
                Select an account to view or create its renewal plan.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
