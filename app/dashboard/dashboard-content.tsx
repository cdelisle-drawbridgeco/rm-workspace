'use client';

import { useMemo, useState, useRef, useEffect } from 'react';
import type {
  DashboardAccount,
  SortColumn,
  SortDirection,
  DashboardTab,
} from './types';
import StatCards from './stat-cards';
import AccountTable from './account-table';
import RiskOverview from './risk-overview';
import RenewalCenter from './renewal-center';
import ExpansionIndicators from './expansion-indicators';

interface Props {
  accounts: DashboardAccount[];
  rms: string[];
}

function AccountSearch({
  accounts,
  query,
  setQuery,
}: {
  accounts: DashboardAccount[];
  query: string;
  setQuery: (q: string) => void;
}) {
  return (
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search accounts..."
      className="w-full rounded border border-db-gray px-3 py-1.5 text-sm focus:border-db-aqua focus:outline-none focus:ring-1 focus:ring-db-aqua"
    />
  );
}

const TABS: { key: DashboardTab; label: string }[] = [
  { key: 'risk', label: 'Risk Overview' },
  { key: 'renewals', label: 'Renewal Center' },
  { key: 'expansion', label: 'Expansion Indicators' },
];

function compareValues(a: unknown, b: unknown, dir: SortDirection): number {
  const mult = dir === 'asc' ? 1 : -1;
  if (a === null || a === undefined) return 1;
  if (b === null || b === undefined) return -1;
  if (typeof a === 'string' && typeof b === 'string') {
    return mult * a.localeCompare(b);
  }
  if (typeof a === 'boolean' && typeof b === 'boolean') {
    return mult * (Number(a) - Number(b));
  }
  if (typeof a === 'number' && typeof b === 'number') {
    return mult * (a - b);
  }
  return mult * String(a).localeCompare(String(b));
}

export default function DashboardContent({ accounts, rms }: Props) {
  const [selectedRM, setSelectedRM] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortColumn, setSortColumn] = useState<SortColumn>('name');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
  const [activeTab, setActiveTab] = useState<DashboardTab>('risk');

  const handleSort = (col: SortColumn) => {
    if (col === sortColumn) {
      setSortDirection((d) => (d === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortColumn(col);
      setSortDirection('asc');
    }
  };

  const filteredAccounts = useMemo(() => {
    let list = accounts;
    if (selectedRM !== 'All') {
      list = list.filter((a) => a.ownerName === selectedRM);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter((a) => a.name.toLowerCase().includes(q));
    }
    return list;
  }, [accounts, selectedRM, searchQuery]);

  const sortedAccounts = useMemo(() => {
    return [...filteredAccounts].sort((a, b) =>
      compareValues(a[sortColumn], b[sortColumn], sortDirection)
    );
  }, [filteredAccounts, sortColumn, sortDirection]);

  return (
    <div className="flex h-full">
      {/* Left sidebar */}
      <aside className="w-64 shrink-0 overflow-y-auto border-r border-gray-200 bg-white">
        <div className="p-4 space-y-4">
          <div>
            <label className="mb-1 block text-xs font-medium uppercase tracking-wider text-gray-500">
              Relationship Manager
            </label>
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
          </div>

          <div>
            <label className="mb-1 block text-xs font-medium uppercase tracking-wider text-gray-500">
              Account
            </label>
            <AccountSearch
              accounts={filteredAccounts}
              query={searchQuery}
              setQuery={setSearchQuery}
            />
          </div>

          {/* Quick stats in sidebar */}
          <div className="rounded-lg border border-db-gray bg-db-gray-light p-3 space-y-2">
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
              Quick Stats
            </p>
            <div className="text-xs text-db-dark space-y-1">
              <div className="flex justify-between">
                <span>Accounts</span>
                <span className="font-semibold">{filteredAccounts.length}</span>
              </div>
              <div className="flex justify-between">
                <span>High Risk</span>
                <span className="font-semibold text-red-600">
                  {
                    filteredAccounts.filter(
                      (a) =>
                        a.riskRating === 'Red' || a.temperature === 'Cold'
                    ).length
                  }
                </span>
              </div>
              <div className="flex justify-between">
                <span>Disengaged</span>
                <span className="font-semibold text-orange-600">
                  {
                    filteredAccounts.filter(
                      (a) =>
                        a.daysSinceLastTouch !== null &&
                        a.daysSinceLastTouch >= 90
                    ).length
                  }
                </span>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <section className="flex-1 min-w-0 overflow-y-auto p-6 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-heading font-semibold text-db-dark">
            Customer Dashboard
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Book of business overview — ARR, renewals, risk signals, and
            expansion opportunities.
          </p>
        </div>

        {/* Stat cards */}
        <StatCards accounts={filteredAccounts} />

        {/* Accounts table */}
        <AccountTable
          accounts={sortedAccounts}
          sortColumn={sortColumn}
          sortDirection={sortDirection}
          onSort={handleSort}
        />

        {/* Tab switcher */}
        <div className="border-b border-db-gray">
          <div className="flex gap-0">
            {TABS.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-2 text-sm font-medium transition border-b-2 -mb-px ${
                  activeTab === tab.key
                    ? 'border-db-aqua-dark text-db-aqua-dark'
                    : 'border-transparent text-gray-500 hover:text-db-dark hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Active tab */}
        {activeTab === 'risk' && (
          <RiskOverview accounts={filteredAccounts} />
        )}
        {activeTab === 'renewals' && (
          <RenewalCenter accounts={filteredAccounts} />
        )}
        {activeTab === 'expansion' && (
          <ExpansionIndicators accounts={filteredAccounts} />
        )}
      </section>
    </div>
  );
}
