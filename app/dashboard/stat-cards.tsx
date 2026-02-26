'use client';

import { formatUsd } from '@/lib/format';
import { getCurrentQuarter, getNextQuarter } from '@/lib/quarters';
import type { DashboardAccount } from './types';

interface Props {
  accounts: DashboardAccount[];
}

export default function StatCards({ accounts }: Props) {
  const totalArr = accounts.reduce((s, a) => s + a.arrCents, 0);

  const cq = getCurrentQuarter();
  const nq = getNextQuarter();
  const fy = `FY${String(new Date().getUTCFullYear()).slice(-2)}`;

  const renewingCQ = accounts.filter((a) => {
    if (!a.nextRenewalDate) return false;
    const d = new Date(a.nextRenewalDate);
    const q = Math.floor(d.getUTCMonth() / 3) + 1;
    const key = `FY${String(d.getUTCFullYear()).slice(-2)}-Q${q}`;
    return key === cq;
  });

  const renewingNQ = accounts.filter((a) => {
    if (!a.nextRenewalDate) return false;
    const d = new Date(a.nextRenewalDate);
    const q = Math.floor(d.getUTCMonth() / 3) + 1;
    const key = `FY${String(d.getUTCFullYear()).slice(-2)}-Q${q}`;
    return key === nq;
  });

  const renewingFY = accounts.filter((a) => {
    if (!a.nextRenewalDate) return false;
    const d = new Date(a.nextRenewalDate);
    const key = `FY${String(d.getUTCFullYear()).slice(-2)}`;
    return key === fy;
  });

  const cards = [
    {
      label: 'Accounts',
      value: accounts.length.toString(),
      sub: null,
    },
    {
      label: 'Total ARR',
      value: formatUsd(totalArr),
      sub: null,
    },
    {
      label: `Renewing ${cq}`,
      value: renewingCQ.length.toString(),
      sub: formatUsd(renewingCQ.reduce((s, a) => s + a.arrCents, 0)),
    },
    {
      label: `Renewing ${nq}`,
      value: renewingNQ.length.toString(),
      sub: formatUsd(renewingNQ.reduce((s, a) => s + a.arrCents, 0)),
    },
    {
      label: `Renewing ${fy}`,
      value: renewingFY.length.toString(),
      sub: formatUsd(renewingFY.reduce((s, a) => s + a.arrCents, 0)),
    },
  ];

  return (
    <div className="grid grid-cols-5 gap-4">
      {cards.map((c) => (
        <div
          key={c.label}
          className="rounded-lg border border-db-gray bg-white p-4"
        >
          <div className="text-xs font-medium uppercase tracking-wider text-gray-500">
            {c.label}
          </div>
          <div className="mt-1 text-2xl font-heading font-semibold text-db-dark">
            {c.value}
          </div>
          {c.sub && (
            <div className="mt-0.5 text-sm text-db-aqua-dark">{c.sub}</div>
          )}
        </div>
      ))}
    </div>
  );
}
