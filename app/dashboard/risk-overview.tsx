'use client';

import { formatUsd } from '@/lib/format';
import type { DashboardAccount } from './types';

interface Props {
  accounts: DashboardAccount[];
}

function RiskList({
  title,
  items,
  emptyMsg,
}: {
  title: string;
  items: DashboardAccount[];
  emptyMsg: string;
}) {
  return (
    <div className="rounded-lg border border-db-gray bg-white p-4">
      <h4 className="text-sm font-heading font-semibold text-db-dark">
        {title}{' '}
        <span className="ml-1 text-xs font-normal text-gray-400">
          ({items.length})
        </span>
      </h4>
      {items.length === 0 ? (
        <p className="mt-2 text-xs text-gray-400">{emptyMsg}</p>
      ) : (
        <ul className="mt-2 space-y-1 max-h-48 overflow-y-auto">
          {items.map((a) => (
            <li
              key={a.id}
              className="flex items-center justify-between rounded px-2 py-1 text-xs hover:bg-db-gray-light"
            >
              <span className="font-medium text-db-dark truncate mr-2">
                {a.name}
              </span>
              <span className="shrink-0 text-gray-500">
                {formatUsd(a.arrCents)}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function RiskOverview({ accounts }: Props) {
  const highRisk = accounts.filter(
    (a) => a.riskRating === 'Red' || a.temperature === 'Cold'
  );

  const disengaged = accounts.filter(
    (a) => a.daysSinceLastTouch !== null && a.daysSinceLastTouch >= 90
  );

  const withOpenCases = accounts.filter((a) => a.openCases > 0);

  const noRecentQbr = accounts.filter((a) => {
    if (!a.lastQbrDate) return true;
    const days = Math.floor(
      (Date.now() - new Date(a.lastQbrDate).getTime()) / (1000 * 60 * 60 * 24)
    );
    return days > 90;
  });

  const unresponsiveAccounts = accounts.filter((a) => a.unresponsive);

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      <RiskList
        title="High Risk"
        items={highRisk}
        emptyMsg="No high-risk accounts."
      />
      <RiskList
        title="Disengaged (90+ days)"
        items={disengaged}
        emptyMsg="All accounts recently touched."
      />
      <RiskList
        title="Open Cases"
        items={withOpenCases}
        emptyMsg="No open cases."
      />
      <RiskList
        title="No QBR in 90 Days"
        items={noRecentQbr}
        emptyMsg="All accounts have recent QBRs."
      />
      <RiskList
        title="Unresponsive"
        items={unresponsiveAccounts}
        emptyMsg="No unresponsive accounts."
      />
    </div>
  );
}
