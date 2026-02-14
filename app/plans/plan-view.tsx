'use client';
import React, { useState, useEffect, useCallback } from 'react';
import {
  RENEWAL_STAGES,
  STAGE_LABELS,
  STAGE_GATES_FIELD,
  STAGE_GATES,
  RISK_RATING_COLORS,
  stageIndex,
  nextStage,
} from '@/lib/renewal-stages';
import type { RenewalStage } from '@/lib/renewal-stages';
import { formatUsd } from '@/lib/format';
import StageSection from './stage-section';

interface Opportunity {
  id: string;
  name: string;
  renewalDate: string;
  expiringArrCents: number;
}

interface PlanData {
  id: string;
  currentStage: string;
  riskRating: string | null;
  prepGates: Record<string, unknown> | null;
  callScheduledGates: Record<string, unknown> | null;
  riskRatingGates: Record<string, unknown> | null;
  strategizeGates: Record<string, unknown> | null;
  planningGates: Record<string, unknown> | null;
  negotiateGates: Record<string, unknown> | null;
  executeGates: Record<string, unknown> | null;
  notes: string | null;
  account: {
    id: string;
    name: string;
    owner: { firstName: string; lastName: string };
    opportunities: Opportunity[];
  };
}

function daysUntilRenewal(opportunities: Opportunity[]): number | null {
  if (opportunities.length === 0) return null;
  const earliest = opportunities.reduce((min, opp) => {
    const d = new Date(opp.renewalDate).getTime();
    return d < min ? d : min;
  }, Infinity);
  const diff = Math.ceil((earliest - Date.now()) / (1000 * 60 * 60 * 24));
  return diff;
}

function DaysUntilBadge({ days }: { days: number | null }) {
  if (days === null) return null;
  let color = 'bg-green-100 text-green-800';
  if (days <= 60) color = 'bg-yellow-100 text-yellow-800';
  if (days <= 30) color = 'bg-red-100 text-red-800';
  if (days <= 0) color = 'bg-red-200 text-red-900';
  const label = days <= 0 ? `${Math.abs(days)}d overdue` : `${days}d left`;
  return (
    <span className={`inline-block rounded px-2 py-1 text-xs font-medium ${color}`}>
      {label}
    </span>
  );
}

export default function PlanView({
  planId,
  accountName,
  ownerName,
  onStageChange,
}: {
  planId: string;
  accountName: string;
  ownerName: string;
  onStageChange: () => void;
}) {
  const [plan, setPlan] = useState<PlanData | null>(null);
  const [loading, setLoading] = useState(true);
  const [notesLocal, setNotesLocal] = useState('');
  const [notesSaving, setNotesSaving] = useState(false);
  const [notesSaved, setNotesSaved] = useState(false);

  const fetchPlan = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/renewal-plans/${planId}`);
      if (res.ok) {
        const data = await res.json();
        setPlan(data);
        setNotesLocal(data.notes || '');
      }
    } finally {
      setLoading(false);
    }
  }, [planId]);

  useEffect(() => {
    fetchPlan();
  }, [fetchPlan]);

  const handleGateChange = async (
    stage: RenewalStage,
    gateKey: string,
    value: unknown
  ) => {
    if (!plan) return;
    const field = STAGE_GATES_FIELD[stage];
    await fetch(`/api/renewal-plans/${planId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ field, value: { [gateKey]: value } }),
    });
    fetchPlan();
    if (stage === 'riskRating' && gateKey === 'rating') {
      onStageChange();
    }
  };

  const handleAdvanceStage = async () => {
    if (!plan) return;
    const next = nextStage(plan.currentStage as RenewalStage);
    if (!next) return;
    await fetch(`/api/renewal-plans/${planId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ field: 'currentStage', value: next }),
    });
    fetchPlan();
    onStageChange();
  };

  const handleNotesSave = async () => {
    if (!plan || notesLocal === (plan.notes || '')) return;
    setNotesSaving(true);
    await fetch(`/api/renewal-plans/${planId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ field: 'notes', value: notesLocal }),
    });
    setNotesSaving(false);
    setNotesSaved(true);
    setTimeout(() => setNotesSaved(false), 2000);
    fetchPlan();
  };

  if (loading) {
    return <p className="text-sm text-gray-500">Loading plan...</p>;
  }

  if (!plan) {
    return <p className="text-sm text-red-500">Failed to load plan.</p>;
  }

  const currentStage = plan.currentStage as RenewalStage;
  const currentIdx = stageIndex(currentStage);
  const combinedArr = plan.account.opportunities.reduce(
    (s, o) => s + o.expiringArrCents,
    0
  );
  const days = daysUntilRenewal(plan.account.opportunities);
  const earliestRenewal = plan.account.opportunities.length > 0
    ? new Date(
        plan.account.opportunities.reduce((min, opp) => {
          const d = new Date(opp.renewalDate).getTime();
          return d < min ? d : min;
        }, Infinity)
      ).toLocaleDateString()
    : null;

  return (
    <div>
      {/* Header card */}
      <div className="rounded-lg border border-db-gray bg-white p-4 mb-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-heading font-semibold text-db-dark">{accountName}</h2>
            <div className="text-sm text-gray-500">RM: {ownerName}</div>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right">
              <div className="text-sm font-semibold text-db-dark">
                {formatUsd(combinedArr)}
              </div>
              {earliestRenewal && (
                <div className="text-xs text-gray-500">
                  Renews {earliestRenewal}
                </div>
              )}
            </div>
            <DaysUntilBadge days={days} />
            <span className="inline-block rounded bg-db-aqua-light px-2 py-1 text-xs font-medium text-db-aqua-dark">
              {STAGE_LABELS[currentStage] || currentStage}
            </span>
            {plan.riskRating && (
              <span
                className={`inline-block rounded px-2 py-1 text-xs font-medium ${
                  RISK_RATING_COLORS[plan.riskRating]?.bg || 'bg-gray-100'
                } ${
                  RISK_RATING_COLORS[plan.riskRating]?.text || 'text-gray-800'
                }`}
              >
                {plan.riskRating}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Associated opportunities */}
      {plan.account.opportunities.length > 0 && (
        <div className="rounded-lg border border-db-gray bg-white p-4 mb-4">
          <h3 className="text-sm font-semibold text-db-dark mb-2">
            Opportunities ({plan.account.opportunities.length})
          </h3>
          <div className="grid grid-cols-3 gap-2">
            {plan.account.opportunities.map((opp) => (
              <div key={opp.id} className="rounded-lg border border-db-gray p-2 text-xs">
                <div className="font-medium text-db-dark">{opp.name}</div>
                <div className="text-gray-500">
                  Renewal: {new Date(opp.renewalDate).toLocaleDateString()}
                </div>
                <div className="text-db-aqua-dark">
                  ARR: {formatUsd(opp.expiringArrCents)}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Progress bar */}
      <div className="rounded-lg border border-db-gray bg-white p-4 mb-4">
        <div className="flex items-center gap-1">
          {RENEWAL_STAGES.map((stage, idx) => {
            const gatesField = STAGE_GATES_FIELD[stage] as keyof PlanData;
            const gateValues = (plan[gatesField] as Record<string, unknown>) || {};
            const checkboxGates = STAGE_GATES[stage].filter((g) => g.type === 'checkbox');
            const completed = checkboxGates.filter((g) => !!gateValues[g.key]).length;

            let color = 'bg-gray-200 text-gray-400';
            if (idx < currentIdx) color = 'bg-db-aqua-dark text-white';
            if (idx === currentIdx) color = 'bg-db-aqua text-db-dark';
            return (
              <div
                key={stage}
                className={`flex-1 rounded px-1 py-1.5 text-center text-xs font-medium ${color}`}
              >
                <div>{STAGE_LABELS[stage]}</div>
                {checkboxGates.length > 0 && idx <= currentIdx && (
                  <div className={`text-[10px] font-normal mt-0.5 ${idx < currentIdx ? 'text-white/70' : 'text-gray-500'}`}>
                    {completed}/{checkboxGates.length}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Stage sections */}
      {RENEWAL_STAGES.map((stage, idx) => {
        const gatesField = STAGE_GATES_FIELD[stage] as keyof PlanData;
        const gateValues =
          (plan[gatesField] as Record<string, unknown>) || {};
        let status: 'past' | 'current' | 'future' = 'future';
        if (idx < currentIdx) status = 'past';
        if (idx === currentIdx) status = 'current';

        return (
          <StageSection
            key={stage}
            stage={stage}
            status={status}
            gateValues={gateValues}
            onGateChange={(gateKey, value) =>
              handleGateChange(stage, gateKey, value)
            }
            onAdvance={status === 'current' ? handleAdvanceStage : undefined}
          />
        );
      })}

      {/* Overall plan notes */}
      <div className="mt-4 rounded-lg border border-db-gray bg-white p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-semibold text-db-dark">Plan Notes</h3>
          {notesSaving && <span className="text-xs text-gray-500">Saving...</span>}
          {notesSaved && <span className="text-xs text-db-aqua-dark">&#10003; Saved</span>}
        </div>
        <textarea
          value={notesLocal}
          onChange={(e) => setNotesLocal(e.target.value)}
          onBlur={handleNotesSave}
          placeholder="Overall plan notes, key decisions, escalations..."
          rows={4}
          className="w-full rounded border border-db-gray p-2 text-sm focus:border-db-aqua focus:outline-none focus:ring-1 focus:ring-db-aqua resize-y"
        />
      </div>
    </div>
  );
}
