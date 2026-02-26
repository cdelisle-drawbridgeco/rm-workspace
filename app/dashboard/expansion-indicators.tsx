'use client';

import { formatUsd } from '@/lib/format';
import type { DashboardAccount } from './types';

interface Props {
  accounts: DashboardAccount[];
}

export default function ExpansionIndicators({ accounts }: Props) {
  // Open expansion opps: accounts with positive expansionCents
  const withExpansion = accounts
    .filter((a) => a.expansionCents > 0)
    .sort((a, b) => b.expansionCents - a.expansionCents);

  const totalExpansion = withExpansion.reduce(
    (s, a) => s + a.expansionCents,
    0
  );

  // Account whitespace: low entitlements + low logged-in users relative to entitlements
  const whitespace = accounts
    .filter((a) => a.loggedInUsers180d < a.entitlements * 5 && a.entitlements < 6)
    .sort((a, b) => b.arrCents - a.arrCents);

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      {/* Expansion Opps */}
      <div className="rounded-lg border border-db-gray bg-white p-4">
        <h4 className="text-sm font-heading font-semibold text-db-dark mb-1">
          Expansion Opportunities
        </h4>
        <p className="text-xs text-gray-500 mb-3">
          Accounts with forecast expansion &middot;{' '}
          <span className="font-medium text-db-aqua-dark">
            {formatUsd(totalExpansion)} total
          </span>
        </p>
        {withExpansion.length === 0 ? (
          <p className="text-xs text-gray-400">No expansion opportunities.</p>
        ) : (
          <div className="max-h-64 overflow-y-auto space-y-1">
            {withExpansion.map((a) => (
              <div
                key={a.id}
                className="flex items-center justify-between rounded px-2 py-1.5 text-xs hover:bg-db-gray-light"
              >
                <div className="truncate mr-2">
                  <span className="font-medium text-db-dark">{a.name}</span>
                  <span className="ml-2 text-gray-400">{a.ownerName}</span>
                </div>
                <span className="shrink-0 font-medium text-green-600">
                  +{formatUsd(a.expansionCents)}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Whitespace / Inactive Entitlements */}
      <div className="rounded-lg border border-db-gray bg-white p-4">
        <h4 className="text-sm font-heading font-semibold text-db-dark mb-1">
          Account Whitespace{' '}
          <span className="text-xs font-normal text-gray-400">(mock)</span>
        </h4>
        <p className="text-xs text-gray-500 mb-3">
          Low entitlements with underutilized licenses
        </p>
        {whitespace.length === 0 ? (
          <p className="text-xs text-gray-400">No whitespace accounts found.</p>
        ) : (
          <div className="max-h-64 overflow-y-auto space-y-1">
            {whitespace.map((a) => (
              <div
                key={a.id}
                className="flex items-center justify-between rounded px-2 py-1.5 text-xs hover:bg-db-gray-light"
              >
                <div className="truncate mr-2">
                  <span className="font-medium text-db-dark">{a.name}</span>
                  <span className="ml-2 text-gray-400">
                    {a.entitlements} entitlements &middot;{' '}
                    {a.loggedInUsers180d} users
                  </span>
                </div>
                <span className="shrink-0 text-gray-600">
                  {formatUsd(a.arrCents)}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
