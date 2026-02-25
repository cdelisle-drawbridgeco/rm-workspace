'use client';

import { useState } from 'react';
import {
  MEETING_TYPES,
  TEMPERATURE_OPTIONS,
  TEMPERATURE_COLORS,
  type Temperature,
} from '@/lib/interaction-types';

interface Props {
  accountId: string;
  authorId: string;
  onSaved: () => void;
}

const LS_KEY = 'db-last-interaction-type';

function getDefaultType(): string {
  if (typeof window === 'undefined') return 'Check-in';
  return localStorage.getItem(LS_KEY) || 'Check-in';
}

export default function QuickAddForm({ accountId, authorId, onSaved }: Props) {
  const [date, setDate] = useState(() => new Date().toISOString().slice(0, 10));
  const [type, setType] = useState(getDefaultType);
  const [notes, setNotes] = useState('');
  const [temperature, setTemperature] = useState<string | null>(null);
  const [riskFlag, setRiskFlag] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [followUp, setFollowUp] = useState('');
  const [participants, setParticipants] = useState('');
  const [saving, setSaving] = useState(false);

  async function handleSave() {
    if (!notes.trim()) return;
    setSaving(true);

    try {
      localStorage.setItem(LS_KEY, type);

      const res = await fetch('/api/interactions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          accountId,
          authorId,
          date,
          type,
          notes: notes.trim(),
          temperature,
          riskFlag,
          followUp: followUp.trim() || null,
          participants: participants.trim() || null,
        }),
      });

      if (res.ok) {
        // Reset form but keep type
        setDate(new Date().toISOString().slice(0, 10));
        setNotes('');
        setTemperature(null);
        setRiskFlag(false);
        setFollowUp('');
        setParticipants('');
        setShowMore(false);
        onSaved();
      }
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4">
      <div className="flex items-center gap-3">
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="rounded border border-db-gray px-2 py-1.5 text-sm focus:border-db-aqua focus:outline-none focus:ring-1 focus:ring-db-aqua"
        />
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="rounded border border-db-gray px-2 py-1.5 text-sm focus:border-db-aqua focus:outline-none focus:ring-1 focus:ring-db-aqua"
        >
          {MEETING_TYPES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
        <div className="flex-1" />
        <button
          onClick={handleSave}
          disabled={saving || !notes.trim()}
          className="rounded bg-db-aqua px-4 py-1.5 text-sm font-medium text-db-dark hover:bg-db-aqua-dark hover:text-white transition disabled:opacity-50"
        >
          {saving ? 'Saving...' : 'Save'}
        </button>
      </div>

      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="What happened? Key takeaways..."
        rows={2}
        className="mt-3 w-full rounded border border-db-gray p-2 text-sm focus:border-db-aqua focus:outline-none focus:ring-1 focus:ring-db-aqua resize-none"
        onInput={(e) => {
          const el = e.currentTarget;
          el.style.height = 'auto';
          el.style.height = el.scrollHeight + 'px';
        }}
      />

      <div className="mt-2 flex items-center gap-2 flex-wrap">
        {TEMPERATURE_OPTIONS.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTemperature(temperature === t ? null : t)}
            className={`rounded-full px-3 py-1 text-xs font-medium transition ${
              temperature === t
                ? TEMPERATURE_COLORS[t as Temperature].active
                : TEMPERATURE_COLORS[t as Temperature].idle
            }`}
          >
            {t}
          </button>
        ))}
        <button
          type="button"
          onClick={() => setRiskFlag(!riskFlag)}
          className={`ml-1 rounded-full px-3 py-1 text-xs font-medium transition ${
            riskFlag ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-500'
          }`}
        >
          Risk
        </button>

        {!showMore && (
          <button
            type="button"
            onClick={() => setShowMore(true)}
            className="ml-auto text-xs text-db-aqua-dark hover:underline"
          >
            + More details
          </button>
        )}
      </div>

      {showMore && (
        <div className="mt-2 space-y-2">
          <input
            type="text"
            value={followUp}
            onChange={(e) => setFollowUp(e.target.value)}
            placeholder="Follow-up / next steps"
            className="w-full rounded border border-db-gray px-2 py-1.5 text-sm focus:border-db-aqua focus:outline-none focus:ring-1 focus:ring-db-aqua"
          />
          <input
            type="text"
            value={participants}
            onChange={(e) => setParticipants(e.target.value)}
            placeholder="Participants"
            className="w-full rounded border border-db-gray px-2 py-1.5 text-sm focus:border-db-aqua focus:outline-none focus:ring-1 focus:ring-db-aqua"
          />
        </div>
      )}
    </div>
  );
}
