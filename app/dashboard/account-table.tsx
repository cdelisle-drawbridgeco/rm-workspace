'use client';

import { formatUsd } from '@/lib/format';
import type { DashboardAccount, SortColumn, SortDirection } from './types';

interface Props {
  accounts: DashboardAccount[];
  sortColumn: SortColumn;
  sortDirection: SortDirection;
  onSort: (col: SortColumn) => void;
}

function formatDate(iso: string | null): string {
  if (!iso) return '—';
  return new Date(iso).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

function TempBadge({ temp }: { temp: string | null }) {
  if (!temp) return <span className="text-gray-400">—</span>;
  const colors: Record<string, string> = {
    Hot: 'bg-red-100 text-red-700',
    Warm: 'bg-orange-100 text-orange-700',
    Cool: 'bg-blue-100 text-blue-700',
    Cold: 'bg-gray-200 text-gray-600',
  };
  return (
    <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${colors[temp] ?? 'bg-gray-100 text-gray-600'}`}>
      {temp}
    </span>
  );
}

function DaysBadge({ days }: { days: number | null }) {
  if (days === null) return <span className="text-gray-400">—</span>;
  let color = 'text-green-700';
  if (days > 90) color = 'text-red-600 font-semibold';
  else if (days > 60) color = 'text-orange-600';
  else if (days > 30) color = 'text-yellow-600';
  return <span className={color}>{days}d</span>;
}

function ScoreBar({ score }: { score: number }) {
  let bg = 'bg-green-500';
  if (score < 60) bg = 'bg-red-500';
  else if (score < 75) bg = 'bg-yellow-500';
  return (
    <div className="flex items-center gap-2">
      <div className="h-2 w-16 rounded-full bg-gray-200">
        <div
          className={`h-2 rounded-full ${bg}`}
          style={{ width: `${score}%` }}
        />
      </div>
      <span className="text-xs text-gray-600">{score}</span>
    </div>
  );
}

type ColumnDef = {
  key: SortColumn;
  label: string;
  mock?: boolean;
  render: (a: DashboardAccount) => React.ReactNode;
  align?: 'right';
};

const COLUMNS: ColumnDef[] = [
  {
    key: 'name',
    label: 'Account Name',
    render: (a) => <span className="font-medium text-db-dark">{a.name}</span>,
  },
  {
    key: 'arrCents',
    label: 'ARR',
    align: 'right',
    render: (a) => formatUsd(a.arrCents),
  },
  {
    key: 'nextRenewalDate',
    label: 'Next Renewal',
    render: (a) => formatDate(a.nextRenewalDate),
  },
  {
    key: 'renewalOppCount',
    label: '# Opps',
    align: 'right',
    render: (a) => a.renewalOppCount,
  },
  {
    key: 'temperature',
    label: 'Temperature',
    render: (a) => <TempBadge temp={a.temperature} />,
  },
  {
    key: 'entitlements',
    label: '# Entitlements',
    mock: true,
    align: 'right',
    render: (a) => a.entitlements,
  },
  {
    key: 'loggedInUsers180d',
    label: 'Users (180d)',
    mock: true,
    align: 'right',
    render: (a) => a.loggedInUsers180d,
  },
  {
    key: 'openCases',
    label: 'Open Cases',
    mock: true,
    align: 'right',
    render: (a) => (
      <span className={a.openCases > 0 ? 'text-orange-600 font-medium' : ''}>
        {a.openCases}
      </span>
    ),
  },
  {
    key: 'staleCases',
    label: 'Stale Cases',
    mock: true,
    align: 'right',
    render: (a) => (
      <span className={a.staleCases > 0 ? 'text-red-600 font-medium' : ''}>
        {a.staleCases}
      </span>
    ),
  },
  {
    key: 'hasExecSponsor',
    label: 'Exec Sponsor',
    mock: true,
    render: (a) =>
      a.hasExecSponsor ? (
        <span className="text-green-600">&#10003;</span>
      ) : (
        <span className="text-red-400">&#10007;</span>
      ),
  },
  {
    key: 'daysSinceLastTouch',
    label: 'Days Since Touch',
    render: (a) => <DaysBadge days={a.daysSinceLastTouch} />,
  },
  {
    key: 'lastQbrDate',
    label: 'Last QBR',
    render: (a) => formatDate(a.lastQbrDate),
  },
  {
    key: 'nextScheduledQbr',
    label: 'Next QBR',
    mock: true,
    render: (a) => formatDate(a.nextScheduledQbr),
  },
  {
    key: 'platformScore',
    label: 'Platform Score',
    mock: true,
    render: (a) => <ScoreBar score={a.platformScore} />,
  },
];

export default function AccountTable({
  accounts,
  sortColumn,
  sortDirection,
  onSort,
}: Props) {
  const arrow = sortDirection === 'asc' ? ' \u25B2' : ' \u25BC';

  return (
    <div className="overflow-x-auto rounded-lg border border-db-gray bg-white">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-db-gray bg-db-gray-light">
            {COLUMNS.map((col) => (
              <th
                key={col.key}
                onClick={() => onSort(col.key)}
                className={`cursor-pointer whitespace-nowrap px-3 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-500 hover:text-db-dark select-none ${
                  col.align === 'right' ? 'text-right' : ''
                }`}
              >
                {col.label}
                {col.mock && (
                  <span className="ml-1 text-[9px] font-normal normal-case text-gray-400">
                    (mock)
                  </span>
                )}
                {sortColumn === col.key && (
                  <span className="ml-0.5 text-db-aqua-dark">{arrow}</span>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {accounts.length === 0 && (
            <tr>
              <td
                colSpan={COLUMNS.length}
                className="px-3 py-8 text-center text-gray-400"
              >
                No accounts match your filters.
              </td>
            </tr>
          )}
          {accounts.map((acct) => (
            <tr
              key={acct.id}
              className="border-b border-gray-100 hover:bg-db-gray-light/50 transition"
            >
              {COLUMNS.map((col) => (
                <td
                  key={col.key}
                  className={`whitespace-nowrap px-3 py-2 ${
                    col.align === 'right' ? 'text-right' : ''
                  }`}
                >
                  {col.render(acct)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
