'use client';

import React, { useState } from 'react';
import ForecastTrendChart from '../manager/forecast-trend-chart';

interface Account {
  id: string;
  name: string;
  ownerName: string;
  opportunities: Array<{
    id: string;
    name: string;
    quarterKey: string;
    expiringArrCents: number;
  }>;
}

interface Quarters {
  cq: string;
  nq: string;
  fq: string;
}

function formatUsd(cents: number): string {
  return `$${(cents / 100).toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
}

function formatUsdFromDollars(dollars: number): string {
  return `$${dollars.toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
}

export default function ExecDashboard({
  accounts,
  latestByAccount,
  vpForecasts,
  quarters
}: {
  accounts: Account[];
  latestByAccount: Record<string, Record<string, { bestUsd: number; worstUsd: number; callUsd: number; notes: string }>>;
  vpForecasts: Record<string, { bestUsd: number; worstUsd: number; callUsd: number; notes: string }>;
  quarters: Quarters;
}) {
  const [selectedQuarter, setSelectedQuarter] = useState<string>('CQ');
  const [expandedRMs, setExpandedRMs] = useState<Record<string, boolean>>({});

  // Filter accounts by quarter
  const currentQuarterKey = selectedQuarter === 'CQ' ? quarters.cq : selectedQuarter === 'NQ' ? quarters.nq : quarters.fq;
  const quarterAccounts = accounts.filter(acc => 
    acc.opportunities.some(opp => opp.quarterKey === currentQuarterKey)
  );

  // Group accounts by RM
  const accountsByRM = quarterAccounts.reduce((acc, account) => {
    const rm = account.ownerName;
    if (!acc[rm]) acc[rm] = [];
    acc[rm].push(account);
    return acc;
  }, {} as Record<string, Account[]>);

  const rms = Object.keys(accountsByRM).sort();

  // Calculate summary totals (RM rollups)
  const totalArrUpCents = quarterAccounts.reduce((sum, a) => 
    sum + a.opportunities
      .filter(o => o.quarterKey === currentQuarterKey)
      .reduce((s, o) => s + o.expiringArrCents, 0), 0);
  
  let rmBest = 0, rmWorst = 0, rmCall = 0;
  for (const a of quarterAccounts) {
    const accountSnapshots = latestByAccount[a.name];
    const latest = accountSnapshots?.[currentQuarterKey];
    if (latest) {
      rmBest += latest.bestUsd || 0;
      rmWorst += latest.worstUsd || 0;
      rmCall += latest.callUsd || 0;
    }
  }

  // Get VP forecast for current quarter
  const vpForecast = vpForecasts[currentQuarterKey];
  const vpBest = vpForecast?.bestUsd || 0;
  const vpWorst = vpForecast?.worstUsd || 0;
  const vpCall = vpForecast?.callUsd || 0;

  const rmRenewalRate = totalArrUpCents > 0 ? (rmCall * 100) / (totalArrUpCents / 100) : 0;
  const vpRenewalRate = totalArrUpCents > 0 ? (vpCall * 100) / (totalArrUpCents / 100) : 0;
  const rmSpread = Math.max(0, rmBest - rmWorst);
  const vpSpread = Math.max(0, vpBest - vpWorst);

  return (
    <div className="mt-6">
      {/* Quarter Tabs */}
      <div className="mb-4">
        <div className="flex space-x-1 border-b">
          {[
            { key: 'CQ', label: `Current Quarter (${quarters.cq})` },
            { key: 'NQ', label: `Next Quarter (${quarters.nq})` },
            { key: 'FQ', label: `Following Quarter (${quarters.fq})` }
          ].map(tab => (
            <button
              key={tab.key}
              className={`px-4 py-2 text-sm font-medium border-b-2 ${
                selectedQuarter === tab.key
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setSelectedQuarter(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Executive Summary Cards */}
      <section className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-5">
        <div className="rounded border bg-white p-3">
          <div className="text-xs text-gray-600">ARR up for renewal</div>
          <div className="text-lg font-semibold">{formatUsd(totalArrUpCents)}</div>
        </div>
        <div className="rounded border bg-white p-3">
          <div className="text-xs text-gray-600">VP Best Case</div>
          <div className="text-lg font-semibold text-green-600">{formatUsdFromDollars(vpBest)}</div>
        </div>
        <div className="rounded border bg-white p-3">
          <div className="text-xs text-gray-600">VP Worst Case</div>
          <div className="text-lg font-semibold text-red-600">{formatUsdFromDollars(vpWorst)}</div>
        </div>
        <div className="rounded border bg-white p-3">
          <div className="text-xs text-gray-600">VP Call</div>
          <div className="text-lg font-semibold text-blue-600">{formatUsdFromDollars(vpCall)}</div>
        </div>
        <div className="rounded border bg-white p-3">
          <div className="text-xs text-gray-600">VP Renewal Rate</div>
          <div className="text-lg font-semibold">{vpRenewalRate.toFixed(1)}%</div>
        </div>
      </section>

      {/* VP Forecast Display */}
      {vpForecast && (
        <div className="mb-6 rounded-lg border bg-green-50 p-4">
          <h3 className="mb-3 text-lg font-semibold text-green-900">VP Forecast</h3>
          <p className="mb-4 text-sm text-green-700">
            VP-level forecast for {selectedQuarter === 'CQ' ? 'Current Quarter' : selectedQuarter === 'NQ' ? 'Next Quarter' : 'Following Quarter'}.
          </p>
          
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
            <div>
              <div className="text-sm font-medium text-gray-700">Best Case</div>
              <div className="text-lg font-semibold text-green-600">{formatUsdFromDollars(vpBest)}</div>
            </div>
            <div>
              <div className="text-sm font-medium text-gray-700">Worst Case</div>
              <div className="text-lg font-semibold text-red-600">{formatUsdFromDollars(vpWorst)}</div>
            </div>
            <div>
              <div className="text-sm font-medium text-gray-700">Call</div>
              <div className="text-lg font-semibold text-blue-600">{formatUsdFromDollars(vpCall)}</div>
            </div>
            <div>
              <div className="text-sm font-medium text-gray-700">Spread</div>
              <div className="text-lg font-semibold">{formatUsdFromDollars(vpSpread)}</div>
            </div>
          </div>
          
          {vpForecast.notes && (
            <div className="mt-4">
              <div className="text-sm font-medium text-gray-700">VP Notes</div>
              <div className="mt-1 rounded bg-white p-3 text-sm text-gray-600">{vpForecast.notes}</div>
            </div>
          )}
        </div>
      )}

      {/* RM Rollup Table */}
      <div className="mb-6">
        <h3 className="mb-3 text-lg font-semibold">RM Rollups</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-gray-100 text-left text-sm font-semibold">
                <th className="p-2">RM</th>
                <th className="p-2">Accounts</th>
                <th className="p-2">ARR Up</th>
                <th className="p-2">Best</th>
                <th className="p-2">Worst</th>
                <th className="p-2">Call</th>
                <th className="p-2">Renewal Rate</th>
                <th className="p-2">Spread</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              {rms.map(rm => {
                const rmAccounts = accountsByRM[rm];
                const rmArrUpCents = rmAccounts.reduce((sum, acc) => 
                  sum + acc.opportunities
                    .filter(o => o.quarterKey === currentQuarterKey)
                    .reduce((s, o) => s + o.expiringArrCents, 0), 0);
                
                let rmBest = 0, rmWorst = 0, rmCall = 0;
                for (const acc of rmAccounts) {
                  const accountSnapshots = latestByAccount[acc.name];
                  const latest = accountSnapshots?.[currentQuarterKey];
                  if (latest) {
                    rmBest += latest.bestUsd || 0;
                    rmWorst += latest.worstUsd || 0;
                    rmCall += latest.callUsd || 0;
                  }
                }
                
                const rmRenewalRate = rmArrUpCents > 0 ? (rmCall * 100) / (rmArrUpCents / 100) : 0;
                const rmSpread = Math.max(0, rmBest - rmWorst);

                return (
                  <React.Fragment key={rm}>
                    {/* RM Summary Row */}
                    <tr className="bg-blue-50 font-semibold hover:bg-blue-100">
                      <td className="p-2">
                        <button 
                          className="mr-2 text-blue-600" 
                          onClick={() => setExpandedRMs(prev => ({ ...prev, [rm]: !prev[rm] }))}
                        >
                          {expandedRMs[rm] ? '▾' : '▸'}
                        </button>
                        {rm}
                      </td>
                      <td className="p-2">{rmAccounts.length}</td>
                      <td className="p-2">{formatUsd(rmArrUpCents)}</td>
                      <td className="p-2 text-green-600">{formatUsdFromDollars(rmBest)}</td>
                      <td className="p-2 text-red-600">{formatUsdFromDollars(rmWorst)}</td>
                      <td className="p-2 text-blue-600">{formatUsdFromDollars(rmCall)}</td>
                      <td className="p-2">{rmRenewalRate.toFixed(1)}%</td>
                      <td className="p-2">{formatUsdFromDollars(rmSpread)}</td>
                    </tr>
                    
                    {/* Account Detail Rows */}
                    {expandedRMs[rm] && rmAccounts.map(account => {
                      const accountArrUpCents = account.opportunities
                        .filter(o => o.quarterKey === currentQuarterKey)
                        .reduce((s, o) => s + o.expiringArrCents, 0);
                      
                      const accountSnapshots = latestByAccount[account.name];
                      const accountLatest = accountSnapshots?.[currentQuarterKey];
                      const accountBest = accountLatest?.bestUsd || 0;
                      const accountWorst = accountLatest?.worstUsd || 0;
                      const accountCall = accountLatest?.callUsd || 0;
                      const accountRenewalRate = accountArrUpCents > 0 ? (accountCall * 100) / (accountArrUpCents / 100) : 0;
                      const accountSpread = Math.max(0, accountBest - accountWorst);

                      return (
                        <tr key={account.id} className="bg-gray-50 text-xs">
                          <td className="p-2 pl-8 text-gray-600">{account.name}</td>
                          <td className="p-2">-</td>
                          <td className="p-2">{formatUsd(accountArrUpCents)}</td>
                          <td className="p-2 text-green-600">{formatUsdFromDollars(accountBest)}</td>
                          <td className="p-2 text-red-600">{formatUsdFromDollars(accountWorst)}</td>
                          <td className="p-2 text-blue-600">{formatUsdFromDollars(accountCall)}</td>
                          <td className="p-2">{accountRenewalRate.toFixed(1)}%</td>
                          <td className="p-2">{formatUsdFromDollars(accountSpread)}</td>
                        </tr>
                      );
                    })}
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Forecast Trend Chart */}
      <div className="mt-8">
        <h3 className="mb-4 text-lg font-semibold">Forecast Trends Over Time - {selectedQuarter === 'CQ' ? 'Current Quarter' : selectedQuarter === 'NQ' ? 'Next Quarter' : 'Following Quarter'}</h3>
        <div className="rounded-lg border bg-white p-6">
          <ForecastTrendChart 
            accounts={accounts}
            latestByAccount={latestByAccount}
            vpForecasts={vpForecasts}
            quarters={quarters}
            selectedQuarter={selectedQuarter}
          />
        </div>
      </div>
    </div>
  );
}
