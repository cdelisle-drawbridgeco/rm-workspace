'use client';

import React, { useCallback, useRef } from 'react';
import { formatUsd } from '@/lib/format';
import type { DashboardAccount, SortColumn, SortDirection } from './types';
import {
  type ColumnConfigItem,
  getDefaultWidth,
  getVisibleColumns,
  saveColumnConfig,
} from './column-config';

interface Props {
  accounts: DashboardAccount[];
  sortColumn: SortColumn;
  sortDirection: SortDirection;
  onSort: (col: SortColumn) => void;
  columnConfig: ColumnConfigItem[];
  onConfigChange: (config: ColumnConfigItem[]) => void;
}

function formatDate(iso: string | null): string {
  if (!iso) return '\u2014';
  return new Date(iso).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

function TempBadge({ temp }: { temp: string | null }) {
  if (!temp) return <span className="text-gray-400">\u2014</span>;
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
  if (days === null) return <span className="text-gray-400">\u2014</span>;
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

const RENDERERS: Record<string, (a: DashboardAccount) => React.ReactNode> = {
  name: (a) => <span className="font-medium text-db-dark">{a.name}</span>,
  arrCents: (a) => formatUsd(a.arrCents),
  nextRenewalDate: (a) => formatDate(a.nextRenewalDate),
  renewalOppCount: (a) => a.renewalOppCount,
  temperature: (a) => <TempBadge temp={a.temperature} />,
  entitlements: (a) => a.entitlements,
  loggedInUsers180d: (a) => a.loggedInUsers180d,
  openCases: (a) => (
    <span className={a.openCases > 0 ? 'text-orange-600 font-medium' : ''}>
      {a.openCases}
    </span>
  ),
  staleCases: (a) => (
    <span className={a.staleCases > 0 ? 'text-red-600 font-medium' : ''}>
      {a.staleCases}
    </span>
  ),
  hasExecSponsor: (a) =>
    a.hasExecSponsor ? (
      <span className="text-green-600">&#10003;</span>
    ) : (
      <span className="text-red-400">&#10007;</span>
    ),
  daysSinceLastTouch: (a) => <DaysBadge days={a.daysSinceLastTouch} />,
  lastQbrDate: (a) => formatDate(a.lastQbrDate),
  nextScheduledQbr: (a) => formatDate(a.nextScheduledQbr),
  platformScore: (a) => <ScoreBar score={a.platformScore} />,
};

export default function AccountTable({
  accounts,
  sortColumn,
  sortDirection,
  onSort,
  columnConfig,
  onConfigChange,
}: Props) {
  const arrow = sortDirection === 'asc' ? ' \u25B2' : ' \u25BC';
  const visibleColumns = getVisibleColumns(columnConfig);

  // --- Column resize logic ---
  const resizingRef = useRef<{ colId: string; startX: number; startW: number } | null>(null);

  const getColWidth = (col: ColumnConfigItem) => col.width ?? getDefaultWidth(col.id);

  const handleResizeStart = useCallback((e: React.MouseEvent, col: ColumnConfigItem) => {
    e.preventDefault();
    e.stopPropagation();
    const colId = col.id;
    const startX = e.clientX;
    const startW = getColWidth(col);
    resizingRef.current = { colId, startX, startW };

    const onMove = (ev: MouseEvent) => {
      if (!resizingRef.current) return;
      const delta = ev.clientX - startX;
      const newWidth = Math.max(40, startW + delta);
      onConfigChange(
        columnConfig.map((c) => (c.id === colId ? { ...c, width: newWidth } : c))
      );
    };

    const onUp = () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
      // Persist widths
      saveColumnConfig(columnConfig);
      resizingRef.current = null;
    };

    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
  }, [columnConfig, onConfigChange]);

  const totalWidth = visibleColumns.reduce((sum, c) => sum + getColWidth(c), 0);

  return (
    <div className="overflow-x-auto rounded-lg border border-db-gray bg-white">
      <table className="text-sm" style={{ tableLayout: 'fixed', width: totalWidth }}>
        <colgroup>
          {visibleColumns.map((col) => (
            <col key={col.id} style={{ width: getColWidth(col) }} />
          ))}
        </colgroup>
        <thead>
          <tr className="border-b border-db-gray bg-db-gray-light">
            {visibleColumns.map((col) => (
              <th
                key={col.id}
                onClick={() => onSort(col.id as SortColumn)}
                className={`relative cursor-pointer select-none whitespace-nowrap px-3 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-500 hover:text-db-dark ${
                  col.align === 'right' ? 'text-right' : ''
                }`}
                style={{ width: getColWidth(col) }}
              >
                <span className="block truncate pr-2">
                  {col.label}
                  {col.mock && (
                    <span className="ml-1 text-[9px] font-normal normal-case text-gray-400">
                      (mock)
                    </span>
                  )}
                  {sortColumn === col.id && (
                    <span className="ml-0.5 text-db-aqua-dark">{arrow}</span>
                  )}
                </span>
                <div
                  onMouseDown={(e) => handleResizeStart(e, col)}
                  className="absolute right-0 top-0 bottom-0 w-1.5 cursor-col-resize hover:bg-db-aqua/40 active:bg-db-aqua/60"
                  title="Drag to resize"
                />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {accounts.length === 0 && (
            <tr>
              <td
                colSpan={visibleColumns.length}
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
              {visibleColumns.map((col) => (
                <td
                  key={col.id}
                  className={`whitespace-nowrap px-3 py-2 overflow-hidden ${
                    col.align === 'right' ? 'text-right' : ''
                  }`}
                >
                  {RENDERERS[col.id]?.(acct) ?? '\u2014'}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
