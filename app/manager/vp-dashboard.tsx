'use client';

import React, { useState, useEffect } from 'react';
import ForecastTrendChart from './forecast-trend-chart';

interface Account {
  id: string;
  name: string;
  owner: {
    id: string;
    firstName: string;
    lastName: string;
    email: string | null;
    username: string | null;
    isActive: boolean;
  };
  segment: string | null;
  region: string | null;
  createdAt: Date;
  updatedAt: Date;
  opportunities: Array<{
    id: string;
    accountId: string;
    name: string;
    renewalDate: Date;
    quarterKey: string;
    expiringArrCents: number;
    stage: string | null;
    probability: number | null;
    healthScore: number | null;
    riskFlag: boolean | null;
    productFamily: string | null;
    termMonths: number | null;
    createdAt: Date;
    updatedAt: Date;
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

export default function VpDashboard({
  accounts,
  latestByAccount,
  vpForecasts: existingVpForecasts,
  quarters
}: {
  accounts: Account[];
  latestByAccount: Record<string, Record<string, { 
    bestUsd: number; 
    worstUsd: number; 
    callUsd: number; 
    grossCallUsd: number;
    priceIncreaseUsd: number;
    expansionUsd: number;
    notes: string 
  }>>;
  vpForecasts: Record<string, { 
    bestUsd: number; 
    worstUsd: number; 
    callUsd: number; 
    grossCallUsd: number;
    priceIncreaseUsd: number;
    expansionUsd: number;
    notes: string 
  }>;
  quarters: Quarters;
}) {
  const [selectedQuarter, setSelectedQuarter] = useState<string>('CQ');
  const [expandedRMs, setExpandedRMs] = useState<Record<string, boolean>>({});
  const [expandedCallComponents, setExpandedCallComponents] = useState<Record<string, boolean>>({});
  const [vpForecasts, setVpForecasts] = useState<Record<string, { best: string; worst: string; call: string; notes: string }>>(() => {
    const forecasts: Record<string, { best: string; worst: string; call: string; notes: string }> = {};
    Object.values(quarters).forEach(quarter => {
      forecasts[quarter] = { best: '', worst: '', call: '', notes: '' };
    });
    return forecasts;
  });

  // Load existing VP forecasts from props
  useEffect(() => {
    const loadedForecasts: Record<string, { best: string; worst: string; call: string; notes: string }> = {};
    Object.values(quarters).forEach(quarter => {
      const existing = existingVpForecasts[quarter];
      if (existing) {
        loadedForecasts[quarter] = {
          best: existing.bestUsd > 0 ? formatCurrency(String(existing.bestUsd)) : '',
          worst: existing.worstUsd > 0 ? formatCurrency(String(existing.worstUsd)) : '',
          call: existing.callUsd > 0 ? formatCurrency(String(existing.callUsd)) : '',
          notes: existing.notes || ''
        };
      } else {
        loadedForecasts[quarter] = { best: '', worst: '', call: '', notes: '' };
      }
    });
    setVpForecasts(loadedForecasts);
  }, [quarters, existingVpForecasts]);

  // Filter accounts by quarter
  const currentQuarterKey = selectedQuarter === 'CQ' ? quarters.cq : selectedQuarter === 'NQ' ? quarters.nq : quarters.fq;
  const quarterAccounts = accounts.filter(acc => 
    acc.opportunities.some(opp => opp.quarterKey === currentQuarterKey)
  );

  // Group accounts by RM
  const accountsByRM = quarterAccounts.reduce((acc, account) => {
    if (!account.owner) {
      console.warn(`Account ${account.name} has no owner`);
      return acc;
    }
    const rm = `${account.owner.firstName} ${account.owner.lastName}`;
    if (!acc[rm]) acc[rm] = [];
    acc[rm].push(account);
    return acc;
  }, {} as Record<string, Account[]>);

  const rms = Object.keys(accountsByRM).sort();

  // Calculate summary totals
  const totalArrUpCents = quarterAccounts.reduce((sum, a) => 
    sum + a.opportunities
      .filter(o => o.quarterKey === currentQuarterKey)
      .reduce((s, o) => s + o.expiringArrCents, 0), 0);
  
  let bestUsdTotal = 0, worstUsdTotal = 0, callUsdTotal = 0, grossCallTotal = 0, priceIncreaseTotal = 0, expansionTotal = 0;
  for (const a of quarterAccounts) {
    const accountSnapshots = latestByAccount[a.name];
    const latest = accountSnapshots?.[currentQuarterKey];
    if (latest) {
      bestUsdTotal += latest.bestUsd || 0;
      worstUsdTotal += latest.worstUsd || 0;
      callUsdTotal += latest.callUsd || 0;
      grossCallTotal += latest.grossCallUsd || 0;
      priceIncreaseTotal += latest.priceIncreaseUsd || 0;
      expansionTotal += latest.expansionUsd || 0;
    }
  }

  const renewalRate = totalArrUpCents > 0 ? (callUsdTotal * 100) / (totalArrUpCents / 100) : 0;
  const spreadUsd = Math.max(0, bestUsdTotal - worstUsdTotal);

  const parseCurrency = (val: string) => {
    const cleaned = val.replace(/[$,]/g, '');
    return Number(cleaned) || 0;
  };

  const formatCurrency = (val: string) => {
    const cleaned = val.replace(/[$,]/g, '');
    const num = Number(cleaned);
    if (isNaN(num) || num === 0) return '';
    return num.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  };

  async function saveVpForecast() {
    const currentForecast = vpForecasts[currentQuarterKey];
    if (!currentForecast) return;

    const res = await fetch('/api/snapshots', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        scopeType: 'VP',
        scopeName: 'VP Forecast',
        best: parseCurrency(currentForecast.best),
        worst: parseCurrency(currentForecast.worst),
        call: parseCurrency(currentForecast.call),
        notes: currentForecast.notes || null,
        quarterKey: currentQuarterKey
      })
    });
    
    if (!res.ok) {
      alert(`Save failed: ${await res.text()}`);
    } else {
      alert('VP Forecast saved successfully!');
    }
  }

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

      {/* Summary Cards */}
      <section className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-5">
        <div className="rounded border bg-white p-3">
          <div className="text-xs text-gray-600">ARR up for renewal</div>
          <div className="text-lg font-semibold">{formatUsd(totalArrUpCents)}</div>
        </div>
        <div className="rounded border bg-white p-3">
          <div className="text-xs text-gray-600">Best Case</div>
          <div className="text-lg font-semibold text-green-600">{formatUsdFromDollars(bestUsdTotal)}</div>
        </div>
        <div className="rounded border bg-white p-3">
          <div className="text-xs text-gray-600">Worst Case</div>
          <div className="text-lg font-semibold text-red-600">{formatUsdFromDollars(worstUsdTotal)}</div>
        </div>
        <div className="rounded border bg-white p-3">
          <div className="text-xs text-gray-600">Call</div>
          <div className="text-lg font-semibold text-blue-600">{formatUsdFromDollars(callUsdTotal)}</div>
          <button 
            className="mt-1 text-xs text-blue-500 hover:text-blue-700"
            onClick={() => setExpandedCallComponents({ ...expandedCallComponents, summary: !expandedCallComponents.summary })}
          >
            {expandedCallComponents.summary ? '▾ Hide' : '▸ Show'} Components
          </button>
          {expandedCallComponents.summary && (
            <div className="mt-2 space-y-1 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-600">Gross Call:</span>
                <span className="font-medium">{formatUsdFromDollars(grossCallTotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Price Increase:</span>
                <span className="font-medium text-green-600">{formatUsdFromDollars(priceIncreaseTotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Expansion:</span>
                <span className="font-medium text-purple-600">{formatUsdFromDollars(expansionTotal)}</span>
              </div>
            </div>
          )}
        </div>
        <div className="rounded border bg-white p-3">
          <div className="text-xs text-gray-600">Renewal Rate</div>
          <div className="text-lg font-semibold">{renewalRate.toFixed(1)}%</div>
        </div>
      </section>

      {/* VP Forecasting Section */}
      <div className="mb-6 rounded-lg border bg-blue-50 p-4">
        <h3 className="mb-3 text-lg font-semibold text-blue-900">VP Forecast Input</h3>
        <p className="mb-4 text-sm text-blue-700">
          Review RM calls, apply your probability modeling, and enter your VP-level forecast for {selectedQuarter === 'CQ' ? 'Current Quarter' : selectedQuarter === 'NQ' ? 'Next Quarter' : 'Following Quarter'}.
        </p>
        
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Best Case ($)</label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
              placeholder="$0"
              value={vpForecasts[currentQuarterKey]?.best || ''}
              onChange={e => {
                setVpForecasts(prev => ({
                  ...prev,
                  [currentQuarterKey]: { ...prev[currentQuarterKey], best: e.target.value }
                }));
              }}
              onBlur={e => {
                if (e.target.value && !e.target.value.includes('$')) {
                  const formatted = formatCurrency(e.target.value);
                  setVpForecasts(prev => ({
                    ...prev,
                    [currentQuarterKey]: { ...prev[currentQuarterKey], best: formatted }
                  }));
                }
              }}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Worst Case ($)</label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
              placeholder="$0"
              value={vpForecasts[currentQuarterKey]?.worst || ''}
              onChange={e => {
                setVpForecasts(prev => ({
                  ...prev,
                  [currentQuarterKey]: { ...prev[currentQuarterKey], worst: e.target.value }
                }));
              }}
              onBlur={e => {
                if (e.target.value && !e.target.value.includes('$')) {
                  const formatted = formatCurrency(e.target.value);
                  setVpForecasts(prev => ({
                    ...prev,
                    [currentQuarterKey]: { ...prev[currentQuarterKey], worst: formatted }
                  }));
                }
              }}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Call ($)</label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
              placeholder="$0"
              value={vpForecasts[currentQuarterKey]?.call || ''}
              onChange={e => {
                setVpForecasts(prev => ({
                  ...prev,
                  [currentQuarterKey]: { ...prev[currentQuarterKey], call: e.target.value }
                }));
              }}
              onBlur={e => {
                if (e.target.value && !e.target.value.includes('$')) {
                  const formatted = formatCurrency(e.target.value);
                  setVpForecasts(prev => ({
                    ...prev,
                    [currentQuarterKey]: { ...prev[currentQuarterKey], call: formatted }
                  }));
                }
              }}
            />
          </div>
          <div className="flex items-end">
            <button
              onClick={saveVpForecast}
              className="w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              Save VP Forecast
            </button>
          </div>
        </div>
        
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">VP Notes</label>
          <textarea
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
            rows={2}
            placeholder="Add your analysis, probability modeling insights, or executive communication notes..."
            value={vpForecasts[currentQuarterKey]?.notes || ''}
            onChange={e => setVpForecasts(prev => ({
              ...prev,
              [currentQuarterKey]: { ...prev[currentQuarterKey], notes: e.target.value }
            }))}
          />
        </div>
      </div>

      {/* RM Rollup Table */}
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
              
              let rmBest = 0, rmWorst = 0, rmCall = 0, rmGrossCall = 0, rmPriceIncrease = 0, rmExpansion = 0;
              for (const acc of rmAccounts) {
                const accountSnapshots = latestByAccount[acc.name];
                const latest = accountSnapshots?.[currentQuarterKey];
                if (latest) {
                  rmBest += latest.bestUsd || 0;
                  rmWorst += latest.worstUsd || 0;
                  rmCall += latest.callUsd || 0;
                  rmGrossCall += latest.grossCallUsd || 0;
                  rmPriceIncrease += latest.priceIncreaseUsd || 0;
                  rmExpansion += latest.expansionUsd || 0;
                }
              }
              
              const rmRenewalRate = rmArrUpCents > 0 ? (rmCall * 100) / (rmArrUpCents / 100) : 0;
              const rmSpread = Math.max(0, rmBest - rmWorst);
              const rmKey = `rm-${rm}`;

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
                    <td className="p-2">
                      <div className="text-blue-600">{formatUsdFromDollars(rmCall)}</div>
                      <button 
                        className="mt-1 text-xs text-blue-500 hover:text-blue-700"
                        onClick={() => setExpandedCallComponents({ ...expandedCallComponents, [rmKey]: !expandedCallComponents[rmKey] })}
                      >
                        {expandedCallComponents[rmKey] ? '▾ Hide' : '▸ Show'} Components
                      </button>
                      {expandedCallComponents[rmKey] && (
                        <div className="mt-1 space-y-0.5 text-xs">
                          <div className="flex justify-between text-gray-600">
                            <span>Gross:</span>
                            <span className="font-medium">{formatUsdFromDollars(rmGrossCall)}</span>
                          </div>
                          <div className="flex justify-between text-green-600">
                            <span>Price Inc:</span>
                            <span className="font-medium">{formatUsdFromDollars(rmPriceIncrease)}</span>
                          </div>
                          <div className="flex justify-between text-purple-600">
                            <span>Expansion:</span>
                            <span className="font-medium">{formatUsdFromDollars(rmExpansion)}</span>
                          </div>
                        </div>
                      )}
                    </td>
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

        {/* Forecast Trend Chart */}
        <div className="mt-8">
          <h3 className="mb-4 text-lg font-semibold">Forecast Trends Over Time - {selectedQuarter === 'CQ' ? 'Current Quarter' : selectedQuarter === 'NQ' ? 'Next Quarter' : 'Following Quarter'}</h3>
          <div className="rounded-lg border bg-white p-6">
            <ForecastTrendChart 
              accounts={accounts}
              latestByAccount={latestByAccount}
              vpForecasts={existingVpForecasts}
              quarters={quarters}
              selectedQuarter={selectedQuarter}
            />
          </div>
        </div>
    </div>
  );
}
