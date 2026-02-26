'use client';

import { useState } from 'react';
import { formatUsd } from '@/lib/format';
import type { DashboardAccount } from './types';

interface Props {
  accounts: DashboardAccount[];
}

function formatDate(iso: string | null): string {
  if (!iso) return '—';
  return new Date(iso).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

export default function RenewalCenter({ accounts }: Props) {
  const [horizon, setHorizon] = useState<90 | 180>(90);

  const now = Date.now();
  const cutoff = now + horizon * 24 * 60 * 60 * 1000;

  const upcoming = accounts
    .filter((a) => {
      if (!a.nextRenewalDate) return false;
      const t = new Date(a.nextRenewalDate).getTime();
      return t >= now && t <= cutoff;
    })
    .sort(
      (a, b) =>
        new Date(a.nextRenewalDate!).getTime() -
        new Date(b.nextRenewalDate!).getTime()
    );

  // Temperature breakdown by ARR
  const tempBuckets: Record<string, number> = {
    Hot: 0,
    Warm: 0,
    Cool: 0,
    Cold: 0,
    Unknown: 0,
  };
  for (const a of upcoming) {
    const key = a.temperature && tempBuckets[a.temperature] !== undefined
      ? a.temperature
      : 'Unknown';
    tempBuckets[key] += a.arrCents;
  }
  const totalTempArr = Object.values(tempBuckets).reduce((s, v) => s + v, 0);

  const tempColors: Record<string, string> = {
    Hot: 'bg-red-500',
    Warm: 'bg-orange-400',
    Cool: 'bg-blue-400',
    Cold: 'bg-gray-400',
    Unknown: 'bg-gray-200',
  };

  // Renewing with open cases
  const withCases = upcoming.filter((a) => a.openCases > 0);

  // On-time readiness: good temp (Hot/Warm) + good score (>=75) + exec sponsor
  const onTimeReady = upcoming.filter(
    (a) =>
      (a.temperature === 'Hot' || a.temperature === 'Warm') &&
      a.platformScore >= 75 &&
      a.hasExecSponsor
  );

  return (
    <div className="space-y-6">
      {/* Horizon toggle */}
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-db-dark">
          Upcoming Renewals
        </span>
        <div className="flex rounded-lg border border-db-gray overflow-hidden">
          <button
            onClick={() => setHorizon(90)}
            className={`px-3 py-1 text-xs font-medium transition ${
              horizon === 90
                ? 'bg-db-aqua text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            90 days
          </button>
          <button
            onClick={() => setHorizon(180)}
            className={`px-3 py-1 text-xs font-medium transition ${
              horizon === 180
                ? 'bg-db-aqua text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            180 days
          </button>
        </div>
        <span className="text-xs text-gray-400">
          {upcoming.length} account{upcoming.length !== 1 ? 's' : ''}
        </span>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {/* Renewal list */}
        <div className="rounded-lg border border-db-gray bg-white p-4">
          <h4 className="text-sm font-heading font-semibold text-db-dark mb-2">
            Renewals ({upcoming.length})
          </h4>
          {upcoming.length === 0 ? (
            <p className="text-xs text-gray-400">
              No renewals in the next {horizon} days.
            </p>
          ) : (
            <div className="max-h-64 overflow-y-auto space-y-1">
              {upcoming.map((a) => (
                <div
                  key={a.id}
                  className="flex items-center justify-between rounded px-2 py-1.5 text-xs hover:bg-db-gray-light"
                >
                  <div className="truncate mr-2">
                    <span className="font-medium text-db-dark">{a.name}</span>
                    <span className="ml-2 text-gray-400">
                      {formatDate(a.nextRenewalDate)}
                    </span>
                  </div>
                  <span className="shrink-0 font-medium">
                    {formatUsd(a.arrCents)}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Temperature breakdown */}
        <div className="rounded-lg border border-db-gray bg-white p-4">
          <h4 className="text-sm font-heading font-semibold text-db-dark mb-3">
            Temperature Breakdown (by ARR)
          </h4>
          {totalTempArr === 0 ? (
            <p className="text-xs text-gray-400">No data.</p>
          ) : (
            <>
              {/* Stacked bar */}
              <div className="flex h-6 w-full overflow-hidden rounded-full">
                {Object.entries(tempBuckets).map(([temp, cents]) => {
                  const pct = (cents / totalTempArr) * 100;
                  if (pct === 0) return null;
                  return (
                    <div
                      key={temp}
                      className={`${tempColors[temp]} transition-all`}
                      style={{ width: `${pct}%` }}
                      title={`${temp}: ${formatUsd(cents)} (${Math.round(pct)}%)`}
                    />
                  );
                })}
              </div>
              {/* Legend */}
              <div className="mt-3 flex flex-wrap gap-3">
                {Object.entries(tempBuckets).map(([temp, cents]) => {
                  if (cents === 0) return null;
                  const pct = Math.round((cents / totalTempArr) * 100);
                  return (
                    <div key={temp} className="flex items-center gap-1.5 text-xs">
                      <div
                        className={`h-2.5 w-2.5 rounded-full ${tempColors[temp]}`}
                      />
                      <span className="text-gray-600">
                        {temp}: {formatUsd(cents)} ({pct}%)
                      </span>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>

        {/* Renewing with open cases */}
        <div className="rounded-lg border border-db-gray bg-white p-4">
          <h4 className="text-sm font-heading font-semibold text-db-dark mb-2">
            Renewing with Open Cases{' '}
            <span className="text-xs font-normal text-gray-400">(mock)</span>
          </h4>
          {withCases.length === 0 ? (
            <p className="text-xs text-gray-400">
              No renewing accounts with open cases.
            </p>
          ) : (
            <ul className="max-h-48 overflow-y-auto space-y-1">
              {withCases.map((a) => (
                <li
                  key={a.id}
                  className="flex items-center justify-between rounded px-2 py-1 text-xs hover:bg-db-gray-light"
                >
                  <span className="font-medium text-db-dark truncate mr-2">
                    {a.name}
                  </span>
                  <span className="shrink-0 text-orange-600">
                    {a.openCases} case{a.openCases !== 1 ? 's' : ''}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* On-time readiness */}
        <div className="rounded-lg border border-db-gray bg-white p-4">
          <h4 className="text-sm font-heading font-semibold text-db-dark mb-2">
            On-Time Readiness
          </h4>
          <p className="text-xs text-gray-500 mb-2">
            Good temp + score &ge;75 + exec sponsor
          </p>
          {onTimeReady.length === 0 ? (
            <p className="text-xs text-gray-400">
              No accounts meet all readiness criteria.
            </p>
          ) : (
            <ul className="max-h-48 overflow-y-auto space-y-1">
              {onTimeReady.map((a) => (
                <li
                  key={a.id}
                  className="flex items-center justify-between rounded px-2 py-1 text-xs hover:bg-db-gray-light"
                >
                  <span className="font-medium text-db-dark truncate mr-2">
                    {a.name}
                  </span>
                  <span className="shrink-0 text-green-600">
                    {formatUsd(a.arrCents)}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
