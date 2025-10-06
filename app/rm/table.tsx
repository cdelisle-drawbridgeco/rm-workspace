'use client';
import React, { useState } from 'react';
import ForecastTrendChart from '../manager/forecast-trend-chart';

type Account = {
  id: string;
  name: string;
  ownerName: string;
  segment: string | null;
  opportunities: { id: string; name: string; expiringArrCents: number; renewalDate: string }[];
};

function formatUsd(cents: number): string {
  return `$${(cents / 100).toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
}

function formatUsdFromDollars(dollars: number): string {
  return `$${dollars.toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
}

function formatCurrency(val: string): string {
  const cleaned = val.replace(/[$,]/g, '');
  const num = Number(cleaned);
  if (isNaN(num) || num === 0) return '';
  return num.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

function handleCurrencyInput(value: string, setValue: (val: string) => void) {
  // Allow normal typing - only store the raw value
  setValue(value);
}

export default function AccountTable({
  accounts,
  latestByAccount,
  quarters
}: {
  accounts: Account[];
  latestByAccount: Record<string, Record<string, { bestUsd: number; worstUsd: number; callUsd: number; notes: string }>>;
  quarters: { cq: string; nq: string; fq: string };
}) {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [expandedRMs, setExpandedRMs] = useState<Record<string, boolean>>({});
  const [selectedRM, setSelectedRM] = useState<string>('All');
  const [selectedQuarter, setSelectedQuarter] = useState<string>('CQ');
  
  const [drafts, setDrafts] = useState<Record<string, { best: string; worst: string; call: string; notes: string }>>(() => {
    const d: Record<string, { best: string; worst: string; call: string; notes: string }> = {};
    for (const a of accounts) {
      const accountSnapshots = latestByAccount[a.name];
      const currentQuarterKey = selectedQuarter === 'CQ' ? quarters.cq : selectedQuarter === 'NQ' ? quarters.nq : quarters.fq;
      const latest = accountSnapshots?.[currentQuarterKey];
      d[a.id] = {
        best: latest && latest.bestUsd > 0 ? formatCurrency(String(latest.bestUsd)) : '',
        worst: latest && latest.worstUsd > 0 ? formatCurrency(String(latest.worstUsd)) : '',
        call: latest && latest.callUsd > 0 ? formatCurrency(String(latest.callUsd)) : '',
        notes: latest ? String(latest.notes) : ''
      };
    }
    return d;
  });

  // Filter accounts by quarter
  const currentQuarterKey = selectedQuarter === 'CQ' ? quarters.cq : selectedQuarter === 'NQ' ? quarters.nq : quarters.fq;
  const quarterAccounts = accounts.filter(acc => 
    acc.opportunities.some(opp => opp.quarterKey === currentQuarterKey)
  );
  
  // Filter opportunities to only show current quarter ones
  const quarterAccountsWithFilteredOpps = quarterAccounts.map(acc => ({
    ...acc,
    opportunities: acc.opportunities.filter(opp => opp.quarterKey === currentQuarterKey)
  }));

  // Group accounts by RM (using filtered opportunities)
  const accountsByRM = quarterAccountsWithFilteredOpps.reduce((acc, account) => {
    const rm = account.ownerName;
    if (!acc[rm]) acc[rm] = [];
    acc[rm].push(account);
    return acc;
  }, {} as Record<string, Account[]>);

  const rms = Object.keys(accountsByRM).sort();
  const filteredAccounts = selectedRM === 'All' ? quarterAccountsWithFilteredOpps : accountsByRM[selectedRM] || [];

  async function saveRow(a: Account) {
    const row = drafts[a.id];
    if (!row) return;
    
    console.log('Saving row for', a.name, 'with data:', {
      best: row.best,
      worst: row.worst,
      call: row.call,
      notes: row.notes
    });
    
    // Parse currency values (remove $ and commas)
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
    
    const res = await fetch('/api/snapshots', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        scopeType: 'Account',
        scopeName: a.name,
        best: parseCurrency(row.best),
        worst: parseCurrency(row.worst),
        call: parseCurrency(row.call),
        notes: row.notes || null,
        quarterKey: currentQuarterKey
      })
    });
    if (!res.ok) {
      alert(`Save failed: ${await res.text()}`);
    } else {
      alert('Saved successfully!');
    }
  }

  // Calculate summary totals based on selected RM and quarter
  const summaryAccounts = selectedRM === 'All' ? quarterAccountsWithFilteredOpps : accountsByRM[selectedRM] || [];
  
  // Debug logging
  console.log('Current quarter key:', currentQuarterKey);
  console.log('Summary accounts count:', summaryAccounts.length);
  console.log('Sample account opportunities:', summaryAccounts[0]?.opportunities?.map(o => ({ name: o.name, quarterKey: o.quarterKey })));
  console.log('Sample account snapshots:', latestByAccount[summaryAccounts[0]?.name]);
  
  // Now opportunities are already filtered, so no need to filter again
  const totalArrUpCents = summaryAccounts.reduce((sum, a) => 
    sum + a.opportunities.reduce((s, o) => s + o.expiringArrCents, 0), 0);
  let bestUsdTotal = 0, worstUsdTotal = 0, callUsdTotal = 0;
  for (const a of summaryAccounts) {
    const accountSnapshots = latestByAccount[a.name];
    const latest = accountSnapshots?.[currentQuarterKey];
    console.log(`Account ${a.name} - quarter ${currentQuarterKey}:`, latest);
    if (latest) {
      bestUsdTotal += latest.bestUsd || 0;
      worstUsdTotal += latest.worstUsd || 0;
      callUsdTotal += latest.callUsd || 0;
    }
  }
  
  console.log('Rollup totals:', { totalArrUpCents, bestUsdTotal, worstUsdTotal, callUsdTotal });
  const renewalRate = totalArrUpCents > 0 ? (callUsdTotal * 100) / (totalArrUpCents / 100) : 0;
  const spreadUsd = Math.max(0, bestUsdTotal - worstUsdTotal);
  const fmtUsd = (usd: number) => `$${usd.toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
  const fmtUsdFromCents = (c: number) => `$${(c / 100).toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
  const fmtPct = (p: number) => `${p.toFixed(1)}%`;

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

      {/* RM Filter */}
      <div className="mb-4">
        <label className="text-sm font-medium text-gray-700">Filter by RM:</label>
        <select 
          className="ml-2 rounded border p-2" 
          value={selectedRM} 
          onChange={e => setSelectedRM(e.target.value)}
        >
          <option value="All">All RMs</option>
          {rms.map(rm => (
            <option key={rm} value={rm}>{rm}</option>
          ))}
        </select>
      </div>

      {/* Summary header - filtered by selected RM */}
      <section className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-5">
        <div className="rounded border bg-white p-3">
          <div className="text-xs text-gray-600">ARR up for renewal</div>
          <div className="text-xl font-semibold">{fmtUsdFromCents(totalArrUpCents)}</div>
        </div>
        <div className="rounded border bg-white p-3">
          <div className="text-xs text-gray-600">Best</div>
          <div className="text-xl font-semibold text-green-600">{fmtUsd(bestUsdTotal)}</div>
        </div>
        <div className="rounded border bg-white p-3">
          <div className="text-xs text-gray-600">Worst</div>
          <div className="text-xl font-semibold text-red-600">{fmtUsd(worstUsdTotal)}</div>
        </div>
        <div className="rounded border bg-white p-3">
          <div className="text-xs text-gray-600">Call</div>
          <div className="text-xl font-semibold text-blue-600">{fmtUsd(callUsdTotal)}</div>
        </div>
        <div className="rounded border bg-white p-3">
          <div className="text-xs text-gray-600">Call renewal rate / Spread</div>
          <div className="text-xl font-semibold">{fmtPct(renewalRate)} <span className="text-sm text-gray-500"> / {fmtUsd(spreadUsd)}</span></div>
        </div>
      </section>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr className="bg-gray-100 text-left text-sm font-semibold">
              <th className="p-2 w-64">Account</th>
              <th className="p-2">RM</th>
              <th className="p-2">Client Type</th>
              <th className="p-2 w-20">Opps</th>
              <th className="p-2">ARR Up (sum)</th>
              <th className="p-2">Best (USD)</th>
              <th className="p-2">Worst (USD)</th>
              <th className="p-2">Call (USD)</th>
              <th className="p-2">Notes</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-sm">
            {selectedRM === 'All' ? (
              // Grouped view
              rms.map(rm => {
                const rmAccounts = accountsByRM[rm];
                const rmTotals = rmAccounts.reduce((totals, acc) => {
                  const sumArr = acc.opportunities.reduce((s, o) => s + o.expiringArrCents, 0);
                  const accountSnapshots = latestByAccount[acc.name];
                  const latest = accountSnapshots?.[currentQuarterKey];
                  console.log(`RM ${rm} - Account ${acc.name} - Quarter ${currentQuarterKey}:`, latest);
                  return {
                    arrUp: totals.arrUp + sumArr,
                    best: totals.best + (latest?.bestUsd || 0),
                    worst: totals.worst + (latest?.worstUsd || 0),
                    call: totals.call + (latest?.callUsd || 0)
                  };
                }, { arrUp: 0, best: 0, worst: 0, call: 0 });

                return (
                  <React.Fragment key={rm}>
                    {/* RM Summary Row */}
                    <tr className="bg-blue-50 font-semibold hover:bg-blue-100">
                      <td className="p-2">
                        <button 
                          className="mr-2 text-blue-600" 
                          onClick={() => setExpandedRMs(x => ({ ...x, [rm]: !x[rm] }))}
                        >
                          {expandedRMs[rm] ? '▾' : '▸'}
                        </button>
                        {rm} (Total)
                      </td>
                      <td className="p-2">{rm}</td>
                      <td className="p-2">-</td>
                      <td className="p-2">{rmAccounts.length}</td>
                      <td className="p-2">{formatUsd(rmTotals.arrUp)}</td>
                      <td className="p-2 text-green-600">{formatUsdFromDollars(rmTotals.best)}</td>
                      <td className="p-2 text-red-600">{formatUsdFromDollars(rmTotals.worst)}</td>
                      <td className="p-2 text-blue-600">{formatUsdFromDollars(rmTotals.call)}</td>
                      <td className="p-2">-</td>
                      <td className="p-2">-</td>
                    </tr>
                    {/* Account Rows */}
                    {expandedRMs[rm] && rmAccounts.map(acc => {
                      const sumArr = acc.opportunities.reduce((s, o) => s + o.expiringArrCents, 0);
                      const d = drafts[acc.id] || { best: '', worst: '', call: '', notes: '' };
                      return (
                        <React.Fragment key={acc.id}>
                          <tr className="bg-gray-50 hover:bg-gray-100">
                            <td className="p-2 pl-8">
                              <button className="mr-2 text-blue-600" onClick={() => setExpanded(x => ({ ...x, [acc.id]: !x[acc.id] }))}>
                                {expanded[acc.id] ? '▾' : '▸'}
                              </button>
                              {acc.name}
                            </td>
                            <td className="p-2">{acc.ownerName}</td>
                            <td className="p-2">{acc.segment}</td>
                            <td className="p-2">{acc.opportunities.length}</td>
                            <td className="p-2 font-medium">{formatUsd(sumArr)}</td>
                            <td className="p-2">
                              <input 
                                className="w-24 rounded border p-1" 
                                placeholder="$0"
                                value={d.best} 
                                onChange={e => {
                                  setDrafts(s => ({ ...s, [acc.id]: { ...s[acc.id], best: e.target.value } }));
                                }}
                                onBlur={e => {
                                  if (e.target.value && !e.target.value.includes('$')) {
                                    const formatted = formatCurrency(e.target.value);
                                    setDrafts(s => ({ ...s, [acc.id]: { ...s[acc.id], best: formatted } }));
                                  }
                                }} 
                              />
                            </td>
                            <td className="p-2">
                              <input 
                                className="w-24 rounded border p-1" 
                                placeholder="$0"
                                value={d.worst} 
                                onChange={e => {
                                  setDrafts(s => ({ ...s, [acc.id]: { ...s[acc.id], worst: e.target.value } }));
                                }}
                                onBlur={e => {
                                  if (e.target.value && !e.target.value.includes('$')) {
                                    const formatted = formatCurrency(e.target.value);
                                    setDrafts(s => ({ ...s, [acc.id]: { ...s[acc.id], worst: formatted } }));
                                  }
                                }} 
                              />
                            </td>
                            <td className="p-2">
                              <input 
                                className="w-24 rounded border p-1" 
                                placeholder="$0"
                                value={d.call} 
                                onChange={e => {
                                  setDrafts(s => ({ ...s, [acc.id]: { ...s[acc.id], call: e.target.value } }));
                                }}
                                onBlur={e => {
                                  if (e.target.value && !e.target.value.includes('$')) {
                                    const formatted = formatCurrency(e.target.value);
                                    setDrafts(s => ({ ...s, [acc.id]: { ...s[acc.id], call: formatted } }));
                                  }
                                }} 
                              />
                            </td>
                            <td className="p-2">
                              <input 
                                className="w-full rounded border p-1" 
                                placeholder="Notes" 
                                value={d.notes} 
                                onChange={e => setDrafts(s => ({ ...s, [acc.id]: { ...s[acc.id], notes: e.target.value } }))} 
                              />
                            </td>
                            <td className="p-2">
                              <button className="rounded bg-blue-600 px-3 py-1 text-white hover:bg-blue-700" onClick={() => saveRow(acc)}>Save</button>
                            </td>
                          </tr>
                          {expanded[acc.id] && (
                            <tr key={`${acc.id}-expanded`}>
                              <td colSpan={10} className="bg-gray-100 p-3 pl-12">
                                <div className="text-xs font-semibold text-gray-600">Opportunities</div>
                                <div className="mt-2 grid grid-cols-4 gap-2 text-xs">
                                  {acc.opportunities.map(o => (
                                    <div key={o.id} className="rounded border bg-white p-2">
                                      <div className="font-medium">{o.name}</div>
                                      <div>Renewal: {new Date(o.renewalDate).toLocaleDateString()}</div>
                                      <div>ARR: {formatUsd(o.expiringArrCents)}</div>
                                    </div>
                                  ))}
                                </div>
                              </td>
                            </tr>
                          )}
                        </React.Fragment>
                      );
                    })}
                  </React.Fragment>
                );
              })
            ) : (
              // Single RM view
              filteredAccounts.map(acc => {
                const sumArr = acc.opportunities.reduce((s, o) => s + o.expiringArrCents, 0);
                const d = drafts[acc.id] || { best: '', worst: '', call: '', notes: '' };
                return (
                  <React.Fragment key={acc.id}>
                    <tr className="hover:bg-gray-50">
                      <td className="p-2">
                        <button className="mr-2 text-blue-600" onClick={() => setExpanded(x => ({ ...x, [acc.id]: !x[acc.id] }))}>
                          {expanded[acc.id] ? '▾' : '▸'}
                        </button>
                        {acc.name}
                      </td>
                      <td className="p-2">{acc.ownerName}</td>
                      <td className="p-2">{acc.segment}</td>
                      <td className="p-2 w-20">{acc.opportunities.length}</td>
                      <td className="p-2 font-medium">{formatUsd(sumArr)}</td>
                      <td className="p-2">
                        <input 
                          className="w-24 rounded border p-1" 
                          placeholder="$0"
                          value={d.best} 
                          onChange={e => {
                            setDrafts(s => ({ ...s, [acc.id]: { ...s[acc.id], best: e.target.value } }));
                          }}
                          onBlur={e => {
                            if (e.target.value && !e.target.value.includes('$')) {
                              const formatted = formatCurrency(e.target.value);
                              setDrafts(s => ({ ...s, [acc.id]: { ...s[acc.id], best: formatted } }));
                            }
                          }}
                        />
                      </td>
                      <td className="p-2">
                        <input 
                          className="w-24 rounded border p-1" 
                          placeholder="$0"
                          value={d.worst} 
                          onChange={e => {
                            setDrafts(s => ({ ...s, [acc.id]: { ...s[acc.id], worst: e.target.value } }));
                          }}
                          onBlur={e => {
                            if (e.target.value && !e.target.value.includes('$')) {
                              const formatted = formatCurrency(e.target.value);
                              setDrafts(s => ({ ...s, [acc.id]: { ...s[acc.id], worst: formatted } }));
                            }
                          }}
                        />
                      </td>
                      <td className="p-2">
                        <input 
                          className="w-24 rounded border p-1" 
                          placeholder="$0"
                          value={d.call} 
                          onChange={e => {
                            setDrafts(s => ({ ...s, [acc.id]: { ...s[acc.id], call: e.target.value } }));
                          }}
                          onBlur={e => {
                            if (e.target.value && !e.target.value.includes('$')) {
                              const formatted = formatCurrency(e.target.value);
                              setDrafts(s => ({ ...s, [acc.id]: { ...s[acc.id], call: formatted } }));
                            }
                          }}
                        />
                      </td>
                      <td className="p-2">
                        <input 
                          className="w-full rounded border p-1" 
                          placeholder="Notes" 
                          value={d.notes} 
                          onChange={e => setDrafts(s => ({ ...s, [acc.id]: { ...s[acc.id], notes: e.target.value } }))} 
                        />
                      </td>
                      <td className="p-2">
                        <button className="rounded bg-blue-600 px-3 py-1 text-white hover:bg-blue-700" onClick={() => saveRow(acc)}>Save</button>
                      </td>
                    </tr>
                    {expanded[acc.id] && (
                      <tr key={`${acc.id}-expanded`}>
                        <td colSpan={10} className="bg-gray-50 p-3">
                          <div className="text-xs font-semibold text-gray-600">Opportunities</div>
                          <div className="mt-2 grid grid-cols-4 gap-2 text-xs">
                            {acc.opportunities.map(o => (
                              <div key={o.id} className="rounded border bg-white p-2">
                                <div className="font-medium">{o.name}</div>
                                <div>Renewal: {new Date(o.renewalDate).toLocaleDateString()}</div>
                                <div>ARR: {formatUsd(o.expiringArrCents)}</div>
                              </div>
                            ))}
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Forecast Trend Chart */}
      <div className="mt-8">
        <h3 className="mb-4 text-lg font-semibold">RM Forecast Trends - {selectedRM === 'All' ? 'All RMs' : selectedRM} - {selectedQuarter === 'CQ' ? 'Current Quarter' : selectedQuarter === 'NQ' ? 'Next Quarter' : 'Following Quarter'}</h3>
        <div className="rounded-lg border bg-white p-6">
          <ForecastTrendChart 
            accounts={accounts}
            latestByAccount={latestByAccount}
            vpForecasts={{}} // Empty for RM view
            quarters={quarters}
            selectedQuarter={selectedQuarter}
            selectedRM={selectedRM}
          />
        </div>
      </div>
    </div>
  );
}

