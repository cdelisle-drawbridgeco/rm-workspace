'use client';
import React, { useState, useEffect } from 'react';
import ForecastTrendChart from '../manager/forecast-trend-chart';
import ColumnManager from './column-manager';
import { formatUsd, formatUsdFromDollars, formatCurrency, parseCurrency } from '@/lib/format';
import {
  type ColumnConfigItem,
  type GridColumnId,
  getDefaultColumnConfig,
  loadColumnConfig,
  getVisibleColumns,
} from './column-config';

type Account = {
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
  businessSegment: string | null;
  region: string | null;
  createdAt: Date;
  updatedAt: Date;
  opportunities: {
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
  }[];
};

type DraftRow = {
  best: string;
  worst: string;
  grossCall: string;
  priceIncrease: string;
  expansion: string;
  confidence: string;
  notes: string;
};

const EMPTY_DRAFT: DraftRow = { best: '', worst: '', grossCall: '', priceIncrease: '', expansion: '', confidence: '', notes: '' };

/** Renders a single account row + its expandable opportunities panel. */
function AccountRow({
  acc,
  drafts,
  setDrafts,
  savingStatus,
  expanded,
  setExpanded,
  visibleColumns,
  saveRow,
  nested,
}: {
  acc: Account;
  drafts: Record<string, DraftRow>;
  setDrafts: React.Dispatch<React.SetStateAction<Record<string, DraftRow>>>;
  savingStatus: Record<string, 'saving' | 'saved' | null>;
  expanded: Record<string, boolean>;
  setExpanded: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
  visibleColumns: ColumnConfigItem[];
  saveRow: (a: Account) => void;
  nested: boolean;
}) {
  const sumArr = acc.opportunities.reduce((s, o) => s + o.expiringArrCents, 0);
  const d = drafts[acc.id] || EMPTY_DRAFT;
  const callTotal = parseCurrency(d.grossCall) + parseCurrency(d.priceIncrease) + parseCurrency(d.expansion);
  const callTotalFormatted = callTotal > 0 ? formatCurrency(String(callTotal)) : '';

  const updateDraft = (field: keyof DraftRow, value: string) => {
    setDrafts(s => ({ ...s, [acc.id]: { ...s[acc.id], [field]: value } }));
  };

  const blurFormat = (field: keyof DraftRow, value: string) => {
    if (value && !value.includes('$')) {
      updateDraft(field, formatCurrency(value));
    }
    saveRow(acc);
  };

  return (
    <React.Fragment>
      <tr className={nested ? 'bg-gray-50 hover:bg-gray-100' : 'hover:bg-gray-50'}>
        {visibleColumns.map(col => {
          if (col.id === 'account') return (
            <td key={col.id} className={nested ? 'p-2 pl-8 align-top' : 'p-2 align-top'}>
              <button className="mr-2 text-blue-600" onClick={() => setExpanded(x => ({ ...x, [acc.id]: !x[acc.id] }))}>
                {expanded[acc.id] ? '▾' : '▸'}
              </button>
              {acc.name}
            </td>
          );
          if (col.id === 'rm') return <td key={col.id} className="p-2 align-top">{acc.owner ? `${acc.owner.firstName} ${acc.owner.lastName}` : 'N/A'}</td>;
          if (col.id === 'clientType') return <td key={col.id} className="p-2 align-top">{acc.segment || '-'}</td>;
          if (col.id === 'segment') return <td key={col.id} className="p-2 align-top">{acc.businessSegment || '-'}</td>;
          if (col.id === 'opps') return <td key={col.id} className="p-2 align-top">{acc.opportunities.length}</td>;
          if (col.id === 'arrUp') return <td key={col.id} className="p-2 align-top font-medium">{formatUsd(sumArr)}</td>;
          if (col.id === 'best') return (
            <td key={col.id} className="p-2 align-top">
              <input className="w-full rounded border p-1 h-8" placeholder="$0" value={d.best}
                onChange={e => updateDraft('best', e.target.value)}
                onBlur={e => blurFormat('best', e.target.value)}
              />
            </td>
          );
          if (col.id === 'worst') return (
            <td key={col.id} className="p-2 align-top">
              <input className="w-full rounded border p-1 h-8" placeholder="$0" value={d.worst}
                onChange={e => updateDraft('worst', e.target.value)}
                onBlur={e => blurFormat('worst', e.target.value)}
              />
            </td>
          );
          if (col.id === 'callTotal') return (
            <td key={col.id} className="p-2 align-top">
              <div className="mb-2 rounded border bg-gray-100 p-1 text-center text-sm font-semibold text-blue-600 h-8 flex items-center justify-center">{callTotalFormatted || '$0'}</div>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <label className="text-xs text-gray-600 w-20 flex-shrink-0">Gross Call:</label>
                  <input className="flex-1 rounded border border-blue-200 p-1 text-xs" placeholder="$0" value={d.grossCall}
                    onChange={e => updateDraft('grossCall', e.target.value)}
                    onBlur={e => blurFormat('grossCall', e.target.value)}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <label className="text-xs text-gray-600 w-20 flex-shrink-0">Price Inc:</label>
                  <input className="flex-1 rounded border border-blue-200 p-1 text-xs" placeholder="$0" value={d.priceIncrease}
                    onChange={e => updateDraft('priceIncrease', e.target.value)}
                    onBlur={e => blurFormat('priceIncrease', e.target.value)}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <label className="text-xs text-gray-600 w-20 flex-shrink-0">Expansion:</label>
                  <input className="flex-1 rounded border border-blue-200 p-1 text-xs" placeholder="$0" value={d.expansion}
                    onChange={e => updateDraft('expansion', e.target.value)}
                    onBlur={e => blurFormat('expansion', e.target.value)}
                  />
                </div>
              </div>
            </td>
          );
          if (col.id === 'confidence') return (
            <td key={col.id} className="p-2 align-top">
              <select className="w-full rounded border p-1 h-8" value={d.confidence} onChange={e => updateDraft('confidence', e.target.value)} onBlur={() => saveRow(acc)}>
                <option value="">Select confidence...</option>
                <option value="Commit">Commit (&lt;90%)</option>
                <option value="Likely">Likely (60-90%)</option>
                <option value="Upside">Upside (&gt;60%)</option>
                <option value="At Risk">At Risk</option>
                <option value="Churn">Churn</option>
              </select>
            </td>
          );
          if (col.id === 'notes') return (
            <td key={col.id} className="p-2 align-top">
              <div className="flex items-center gap-1">
                <input className="flex-1 rounded border p-1 h-8" placeholder="Notes" value={d.notes} onChange={e => updateDraft('notes', e.target.value)} onBlur={() => saveRow(acc)} />
                {savingStatus[acc.id] === 'saving' && <span className="text-xs text-gray-500">Saving...</span>}
                {savingStatus[acc.id] === 'saved' && <span className="text-xs text-green-600">✓</span>}
              </div>
            </td>
          );
          return <td key={col.id} className="p-2 align-top">-</td>;
        })}
      </tr>
      {expanded[acc.id] && (
        <tr>
          <td colSpan={visibleColumns.length} className={nested ? 'bg-gray-100 p-3 pl-8' : 'bg-gray-50 p-3'}>
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
}

export default function AccountTable({
  accounts,
  latestByAccount,
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
    confidence: string;
    notes: string
  }>>;
  quarters: { cq: string; nq: string; fq: string };
}) {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [expandedRMs, setExpandedRMs] = useState<Record<string, boolean>>({});
  const [selectedRM, setSelectedRM] = useState<string>('All');
  const [selectedQuarter, setSelectedQuarter] = useState<string>('CQ');
  const [savingStatus, setSavingStatus] = useState<Record<string, 'saving' | 'saved' | null>>({});
  const [columnConfig, setColumnConfig] = useState<ColumnConfigItem[]>(() => getDefaultColumnConfig());
  const visibleColumns = getVisibleColumns(columnConfig);

  useEffect(() => {
    setColumnConfig(loadColumnConfig());
  }, []);

  const [drafts, setDrafts] = useState<Record<string, DraftRow>>(() => {
    const d: Record<string, DraftRow> = {};
    for (const a of accounts) {
      const accountSnapshots = latestByAccount[a.name];
      const currentQuarterKey = selectedQuarter === 'CQ' ? quarters.cq : selectedQuarter === 'NQ' ? quarters.nq : quarters.fq;
      const latest = accountSnapshots?.[currentQuarterKey];
      d[a.id] = {
        best: latest && latest.bestUsd > 0 ? formatCurrency(String(latest.bestUsd)) : '',
        worst: latest && latest.worstUsd > 0 ? formatCurrency(String(latest.worstUsd)) : '',
        grossCall: latest && latest.grossCallUsd > 0 ? formatCurrency(String(latest.grossCallUsd)) : '',
        priceIncrease: latest && latest.priceIncreaseUsd > 0 ? formatCurrency(String(latest.priceIncreaseUsd)) : '',
        expansion: latest && latest.expansionUsd > 0 ? formatCurrency(String(latest.expansionUsd)) : '',
        confidence: latest && latest.confidence ? String(latest.confidence) : '',
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
  const filteredAccounts = selectedRM === 'All' ? quarterAccountsWithFilteredOpps : accountsByRM[selectedRM] || [];

  async function saveRow(a: Account, showAlert = false) {
    const row = drafts[a.id];
    if (!row) return;

    setSavingStatus(prev => ({ ...prev, [a.id]: 'saving' }));

    try {
      const res = await fetch('/api/snapshots', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          scopeType: 'Account',
          scopeName: a.name,
          best: parseCurrency(row.best),
          worst: parseCurrency(row.worst),
          grossCall: parseCurrency(row.grossCall),
          priceIncrease: parseCurrency(row.priceIncrease),
          expansion: parseCurrency(row.expansion),
          confidence: row.confidence || null,
          notes: row.notes || null,
          quarterKey: currentQuarterKey
        })
      });

      if (!res.ok) {
        const errorText = await res.text();
        setSavingStatus(prev => ({ ...prev, [a.id]: null }));
        if (showAlert) alert(`Save failed: ${errorText}`);
      } else {
        setSavingStatus(prev => ({ ...prev, [a.id]: 'saved' }));
        setTimeout(() => {
          setSavingStatus(prev => ({ ...prev, [a.id]: null }));
        }, 2000);
        if (showAlert) alert('Saved successfully!');
      }
    } catch (error) {
      console.error('Save error:', error);
      setSavingStatus(prev => ({ ...prev, [a.id]: null }));
      if (showAlert) alert('Save failed. Please try again.');
    }
  }

  // Calculate summary totals based on selected RM and quarter
  const summaryAccounts = selectedRM === 'All' ? quarterAccountsWithFilteredOpps : accountsByRM[selectedRM] || [];

  const totalArrUpCents = summaryAccounts.reduce((sum, a) =>
    sum + a.opportunities.reduce((s, o) => s + o.expiringArrCents, 0), 0);
  let bestUsdTotal = 0, worstUsdTotal = 0, callUsdTotal = 0;
  for (const a of summaryAccounts) {
    const d = drafts[a.id];
    if (d) {
      bestUsdTotal += parseCurrency(d.best);
      worstUsdTotal += parseCurrency(d.worst);
      callUsdTotal += parseCurrency(d.grossCall) + parseCurrency(d.priceIncrease) + parseCurrency(d.expansion);
    } else {
      const latest = latestByAccount[a.name]?.[currentQuarterKey];
      if (latest) {
        bestUsdTotal += latest.bestUsd || 0;
        worstUsdTotal += latest.worstUsd || 0;
        callUsdTotal += latest.callUsd || 0;
      }
    }
  }

  const renewalRate = totalArrUpCents > 0 ? (callUsdTotal * 100) / (totalArrUpCents / 100) : 0;
  const spreadUsd = Math.max(0, bestUsdTotal - worstUsdTotal);
  const fmtUsd = (usd: number) => `$${usd.toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
  const fmtUsdFromCents = (c: number) => `$${(c / 100).toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
  const fmtPct = (p: number) => `${p.toFixed(1)}%`;

  const thWidth: Partial<Record<GridColumnId, string>> = {
    account: 'w-56', rm: 'w-24', clientType: 'w-28', segment: 'w-28', opps: 'w-16',
    arrUp: 'w-32', best: 'w-28', worst: 'w-28', callTotal: 'w-28', confidence: 'w-32', notes: 'w-48',
  };

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

      {/* RM Filter + Column customization */}
      <div className="mb-4 flex flex-wrap items-center gap-4">
        <div>
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
        <ColumnManager columnConfig={columnConfig} onConfigChange={setColumnConfig} />
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
              {visibleColumns.map(col => (
                <th key={col.id} className={`p-2 align-top ${thWidth[col.id] ?? ''}`}>
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-sm [&>tr>td]:align-top">
            {selectedRM === 'All' ? (
              // Grouped view
              rms.map(rm => {
                const rmAccounts = accountsByRM[rm];
                const rmTotals = rmAccounts.reduce((totals, acc) => {
                  const sumArr = acc.opportunities.reduce((s, o) => s + o.expiringArrCents, 0);
                  const accountSnapshots = latestByAccount[acc.name];
                  const latest = accountSnapshots?.[currentQuarterKey];
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
                      {visibleColumns.map(col => {
                        if (col.id === 'account') return (
                          <td key={col.id} className="p-2 align-top">
                            <button className="mr-2 text-blue-600" onClick={() => setExpandedRMs(x => ({ ...x, [rm]: !x[rm] }))}>
                              {expandedRMs[rm] ? '▾' : '▸'}
                            </button>
                            {rm} (Total)
                          </td>
                        );
                        if (col.id === 'rm') return <td key={col.id} className="p-2 align-top">{rm}</td>;
                        if (col.id === 'clientType' || col.id === 'segment' || col.id === 'confidence' || col.id === 'notes') return <td key={col.id} className="p-2 align-top">-</td>;
                        if (col.id === 'opps') return <td key={col.id} className="p-2 align-top">{rmAccounts.length}</td>;
                        if (col.id === 'arrUp') return <td key={col.id} className="p-2 align-top">{formatUsd(rmTotals.arrUp)}</td>;
                        if (col.id === 'best') return <td key={col.id} className="p-2 align-top text-green-600">{formatUsdFromDollars(rmTotals.best)}</td>;
                        if (col.id === 'worst') return <td key={col.id} className="p-2 align-top text-red-600">{formatUsdFromDollars(rmTotals.worst)}</td>;
                        if (col.id === 'callTotal') return <td key={col.id} className="p-2 align-top text-blue-600">{formatUsdFromDollars(rmTotals.call)}</td>;
                        return <td key={col.id} className="p-2 align-top">-</td>;
                      })}
                    </tr>
                    {/* Account Rows */}
                    {expandedRMs[rm] && rmAccounts.map(acc => (
                      <AccountRow
                        key={acc.id}
                        acc={acc}
                        drafts={drafts}
                        setDrafts={setDrafts}
                        savingStatus={savingStatus}
                        expanded={expanded}
                        setExpanded={setExpanded}
                        visibleColumns={visibleColumns}
                        saveRow={saveRow}
                        nested
                      />
                    ))}
                  </React.Fragment>
                );
              })
            ) : (
              // Single RM view
              filteredAccounts.map(acc => (
                <AccountRow
                  key={acc.id}
                  acc={acc}
                  drafts={drafts}
                  setDrafts={setDrafts}
                  savingStatus={savingStatus}
                  expanded={expanded}
                  setExpanded={setExpanded}
                  visibleColumns={visibleColumns}
                  saveRow={saveRow}
                  nested={false}
                />
              ))
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
