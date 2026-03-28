'use client';

import { useState } from 'react';
import {
  ENGAGEMENT_TYPES,
  ENGAGEMENT_DIRECTIONS,
  CONTACT_TIERS,
} from '@/lib/engagement-types';

const LS_AUTHOR_KEY = 'db-last-engagement-author';

interface Props {
  onSaved: () => void;
}

function getStoredAuthor() {
  if (typeof window === 'undefined') return '';
  return localStorage.getItem(LS_AUTHOR_KEY) || '';
}

export default function EngagementQuickAddForm({ onSaved }: Props) {
  const [date, setDate] = useState(() => new Date().toISOString().slice(0, 10));
  const [type, setType] = useState<string>(ENGAGEMENT_TYPES[0]);
  const [direction, setDirection] = useState<string>('Outbound');
  const [contactTier, setContactTier] = useState<string>('Tier 2');
  const [authorName, setAuthorName] = useState(getStoredAuthor);
  const [clientName, setClientName] = useState('');
  const [contactName, setContactName] = useState('');
  const [subject, setSubject] = useState('');
  const [notes, setNotes] = useState('');
  const [followUp, setFollowUp] = useState('');
  const [pathToExecutive, setPathToExecutive] = useState('');
  const [showMore, setShowMore] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const canSave = clientName.trim() && contactName.trim() && authorName.trim() && subject.trim() && notes.trim();

  async function handleSave() {
    if (!canSave) return;
    setSaving(true);
    setError(null);

    try {
      localStorage.setItem(LS_AUTHOR_KEY, authorName.trim());

      const res = await fetch('/api/engagements', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          date,
          type,
          direction,
          contactTier,
          authorName: authorName.trim(),
          clientName: clientName.trim(),
          contactName: contactName.trim(),
          subject: subject.trim(),
          notes: notes.trim(),
          followUp: followUp.trim() || null,
          pathToExecutive: pathToExecutive.trim() || null,
        }),
      });

      if (res.ok) {
        setClientName('');
        setContactName('');
        setSubject('');
        setNotes('');
        setFollowUp('');
        setPathToExecutive('');
        setShowMore(false);
        setDate(new Date().toISOString().slice(0, 10));
        onSaved();
      } else {
        const msg = await res.text();
        setError(msg);
      }
    } finally {
      setSaving(false);
    }
  }

  const inputCls = 'rounded border border-db-gray px-2 py-1.5 text-sm focus:border-db-aqua focus:outline-none focus:ring-1 focus:ring-db-aqua';

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 space-y-3">
      {/* Row 1: date, type, direction, author */}
      <div className="flex items-center gap-2 flex-wrap">
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className={inputCls} />
        <select value={type} onChange={(e) => setType(e.target.value)} className={inputCls}>
          {ENGAGEMENT_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
        <div className="flex rounded border border-db-gray overflow-hidden text-sm">
          {ENGAGEMENT_DIRECTIONS.map((d) => (
            <button
              key={d}
              type="button"
              onClick={() => setDirection(d)}
              className={`px-3 py-1.5 transition ${direction === d ? 'bg-db-aqua text-db-dark font-medium' : 'text-gray-500 hover:bg-gray-50'}`}
            >
              {d}
            </button>
          ))}
        </div>
        <input
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
          placeholder="Your name"
          className={`${inputCls} w-36`}
        />
        <div className="flex-1" />
        <button
          onClick={handleSave}
          disabled={saving || !canSave}
          className="rounded bg-db-aqua px-4 py-1.5 text-sm font-medium text-db-dark hover:bg-db-aqua-dark hover:text-white transition disabled:opacity-50"
        >
          {saving ? 'Saving...' : 'Log Engagement'}
        </button>
      </div>

      {/* Row 2: client, contact, tier */}
      <div className="flex items-center gap-2">
        <input value={clientName} onChange={(e) => setClientName(e.target.value)} placeholder="Client name" className={`${inputCls} flex-1`} />
        <input value={contactName} onChange={(e) => setContactName(e.target.value)} placeholder="Contact name" className={`${inputCls} flex-1`} />
        <select value={contactTier} onChange={(e) => setContactTier(e.target.value)} className={inputCls}>
          {CONTACT_TIERS.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
      </div>

      {/* Subject */}
      <input
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        placeholder="Brief subject / topic"
        className={`${inputCls} w-full`}
      />

      {/* Notes */}
      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="What happened? Key takeaways, client reaction, next steps..."
        rows={2}
        className="w-full rounded border border-db-gray p-2 text-sm focus:border-db-aqua focus:outline-none focus:ring-1 focus:ring-db-aqua resize-none"
        onInput={(e) => {
          const el = e.currentTarget;
          el.style.height = 'auto';
          el.style.height = el.scrollHeight + 'px';
        }}
      />

      {/* More details */}
      <div className="flex items-center gap-2">
        {!showMore && (
          <button type="button" onClick={() => setShowMore(true)} className="text-xs text-db-aqua-dark hover:underline">
            + More details
          </button>
        )}
      </div>

      {showMore && (
        <div className="space-y-2">
          <input
            value={followUp}
            onChange={(e) => setFollowUp(e.target.value)}
            placeholder="Follow-up / next steps"
            className={`${inputCls} w-full`}
          />
          <input
            value={pathToExecutive}
            onChange={(e) => setPathToExecutive(e.target.value)}
            placeholder="Path to Tier 1 exec (if no Tier 1 relationship yet)"
            className={`${inputCls} w-full`}
          />
        </div>
      )}

      {error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  );
}
