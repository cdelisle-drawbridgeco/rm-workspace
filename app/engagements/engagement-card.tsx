'use client';

import { useState } from 'react';
import {
  ENGAGEMENT_TYPES,
  ENGAGEMENT_DIRECTIONS,
  CONTACT_TIERS,
  ENGAGEMENT_TYPE_BADGES,
  TIER_COLORS,
  type EngagementType,
  type ContactTier,
} from '@/lib/engagement-types';

export interface Engagement {
  id: string;
  clientName: string;
  contactName: string;
  contactTier: string;
  authorName: string;
  date: string;
  type: string;
  direction: string;
  subject: string;
  notes: string;
  followUp: string | null;
  pathToExecutive: string | null;
  createdAt: string;
  updatedAt: string;
}

interface Props {
  engagement: Engagement;
  onUpdate: (id: string, field: string, value: unknown) => Promise<void>;
  onDelete: (id: string) => Promise<void>;
}

function TypeBadge({ type }: { type: string }) {
  const badge = ENGAGEMENT_TYPE_BADGES[type as EngagementType] ?? { letter: '?', color: 'bg-gray-500' };
  return (
    <span className={`inline-flex h-7 min-w-[1.75rem] items-center justify-center rounded text-xs font-bold text-white ${badge.color}`}>
      {badge.letter}
    </span>
  );
}

export default function EngagementCard({ engagement, onUpdate, onDelete }: Props) {
  const [expanded, setExpanded] = useState(false);
  const [editing, setEditing] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [saving, setSaving] = useState(false);

  const [editDate, setEditDate] = useState(engagement.date.slice(0, 10));
  const [editType, setEditType] = useState(engagement.type);
  const [editDirection, setEditDirection] = useState(engagement.direction);
  const [editClientName, setEditClientName] = useState(engagement.clientName);
  const [editContactName, setEditContactName] = useState(engagement.contactName);
  const [editContactTier, setEditContactTier] = useState(engagement.contactTier);
  const [editSubject, setEditSubject] = useState(engagement.subject);
  const [editNotes, setEditNotes] = useState(engagement.notes);
  const [editFollowUp, setEditFollowUp] = useState(engagement.followUp ?? '');
  const [editPathToExec, setEditPathToExec] = useState(engagement.pathToExecutive ?? '');

  const dateStr = new Date(engagement.date).toLocaleDateString('en-US', {
    month: 'short', day: 'numeric', year: 'numeric',
  });

  async function handleSaveEdit() {
    setSaving(true);
    const updates: [string, unknown][] = [];
    if (editDate !== engagement.date.slice(0, 10)) updates.push(['date', editDate]);
    if (editType !== engagement.type) updates.push(['type', editType]);
    if (editDirection !== engagement.direction) updates.push(['direction', editDirection]);
    if (editClientName !== engagement.clientName) updates.push(['clientName', editClientName]);
    if (editContactName !== engagement.contactName) updates.push(['contactName', editContactName]);
    if (editContactTier !== engagement.contactTier) updates.push(['contactTier', editContactTier]);
    if (editSubject !== engagement.subject) updates.push(['subject', editSubject]);
    if (editNotes !== engagement.notes) updates.push(['notes', editNotes]);
    if (editFollowUp !== (engagement.followUp ?? '')) updates.push(['followUp', editFollowUp || null]);
    if (editPathToExec !== (engagement.pathToExecutive ?? '')) updates.push(['pathToExecutive', editPathToExec || null]);

    for (const [field, value] of updates) {
      await onUpdate(engagement.id, field, value);
    }
    setSaving(false);
    setEditing(false);
  }

  const inputCls = 'rounded border border-db-gray px-2 py-1 text-sm focus:border-db-aqua focus:outline-none focus:ring-1 focus:ring-db-aqua';

  if (editing) {
    return (
      <div className="rounded-lg border border-db-aqua bg-white p-4 space-y-2">
        <div className="flex items-center gap-2 flex-wrap">
          <input type="date" value={editDate} onChange={(e) => setEditDate(e.target.value)} className={inputCls} />
          <select value={editType} onChange={(e) => setEditType(e.target.value)} className={inputCls}>
            {ENGAGEMENT_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
          <select value={editDirection} onChange={(e) => setEditDirection(e.target.value)} className={inputCls}>
            {ENGAGEMENT_DIRECTIONS.map((d) => <option key={d} value={d}>{d}</option>)}
          </select>
          <select value={editContactTier} onChange={(e) => setEditContactTier(e.target.value)} className={inputCls}>
            {CONTACT_TIERS.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
        <div className="flex gap-2">
          <input value={editClientName} onChange={(e) => setEditClientName(e.target.value)} placeholder="Client name" className={`${inputCls} flex-1`} />
          <input value={editContactName} onChange={(e) => setEditContactName(e.target.value)} placeholder="Contact name" className={`${inputCls} flex-1`} />
        </div>
        <input value={editSubject} onChange={(e) => setEditSubject(e.target.value)} placeholder="Subject" className={`${inputCls} w-full`} />
        <textarea
          value={editNotes}
          onChange={(e) => setEditNotes(e.target.value)}
          rows={3}
          className="w-full rounded border border-db-gray p-2 text-sm focus:border-db-aqua focus:outline-none focus:ring-1 focus:ring-db-aqua"
        />
        <input value={editFollowUp} onChange={(e) => setEditFollowUp(e.target.value)} placeholder="Follow-up / next steps" className={`${inputCls} w-full`} />
        <input value={editPathToExec} onChange={(e) => setEditPathToExec(e.target.value)} placeholder="Path to Tier 1 exec" className={`${inputCls} w-full`} />
        <div className="flex items-center gap-2">
          <button
            onClick={handleSaveEdit}
            disabled={saving || !editNotes.trim()}
            className="rounded bg-db-aqua px-3 py-1.5 text-sm font-medium text-db-dark hover:bg-db-aqua-dark hover:text-white transition disabled:opacity-50"
          >
            {saving ? 'Saving...' : 'Save'}
          </button>
          <button onClick={() => setEditing(false)} className="rounded px-3 py-1.5 text-sm text-gray-500 hover:text-db-dark transition">
            Cancel
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 hover:border-gray-300 transition">
      <div className="flex items-start gap-3">
        <TypeBadge type={engagement.type} />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm font-medium text-db-dark">{engagement.type}</span>
            <span className="text-xs text-gray-400">{dateStr}</span>
            <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${TIER_COLORS[engagement.contactTier as ContactTier] ?? 'bg-gray-100 text-gray-600'}`}>
              {engagement.contactTier}
            </span>
            <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${engagement.direction === 'Inbound' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'}`}>
              {engagement.direction}
            </span>
          </div>

          <p className="mt-1 text-sm font-medium text-db-dark">{engagement.subject}</p>

          <p className={`mt-1 text-sm text-gray-700 whitespace-pre-wrap ${!expanded ? 'line-clamp-3' : ''}`}>
            {engagement.notes}
          </p>
          {!expanded && engagement.notes.length > 200 && (
            <button onClick={() => setExpanded(true)} className="mt-0.5 text-xs text-db-aqua-dark hover:underline">Show more</button>
          )}
          {expanded && (
            <button onClick={() => setExpanded(false)} className="mt-0.5 text-xs text-db-aqua-dark hover:underline">Show less</button>
          )}

          {engagement.followUp && (
            <p className="mt-2 text-xs text-gray-500"><span className="font-medium">Follow-up:</span> {engagement.followUp}</p>
          )}
          {engagement.pathToExecutive && (
            <p className="mt-1 text-xs text-gray-500"><span className="font-medium">Path to exec:</span> {engagement.pathToExecutive}</p>
          )}

          <div className="mt-2 flex items-center gap-3 text-xs text-gray-400">
            <span className="font-medium text-db-dark">{engagement.clientName}</span>
            <span>·</span>
            <span>{engagement.contactName}</span>
            <span>·</span>
            <span>{engagement.authorName}</span>
            <button onClick={() => setEditing(true)} className="ml-auto text-db-aqua-dark hover:underline">Edit</button>
            {!confirmDelete ? (
              <button onClick={() => setConfirmDelete(true)} className="text-gray-400 hover:text-red-500">Delete</button>
            ) : (
              <span className="flex items-center gap-1">
                <span className="text-red-500">Delete?</span>
                <button onClick={() => onDelete(engagement.id)} className="font-medium text-red-600 hover:underline">Yes</button>
                <button onClick={() => setConfirmDelete(false)} className="text-gray-400 hover:underline">No</button>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
