'use client';

import { useState } from 'react';
import {
  MEETING_TYPE_BADGES,
  MEETING_TYPES,
  TEMPERATURE_OPTIONS,
  TEMPERATURE_COLORS,
  type MeetingType,
  type Temperature,
} from '@/lib/interaction-types';

export interface Interaction {
  id: string;
  accountId: string;
  authorId: string;
  date: string;
  type: string;
  notes: string;
  temperature: string | null;
  riskFlag: boolean;
  followUp: string | null;
  participants: string | null;
  author: { id: string; firstName: string; lastName: string };
}

interface Props {
  interaction: Interaction;
  onUpdate: (id: string, field: string, value: unknown) => Promise<void>;
  onDelete: (id: string) => Promise<void>;
}

function TypeBadge({ type }: { type: string }) {
  const badge = MEETING_TYPE_BADGES[type as MeetingType] ?? {
    letter: '?',
    color: 'bg-gray-500',
  };
  return (
    <span
      className={`inline-flex h-7 min-w-[1.75rem] items-center justify-center rounded text-xs font-bold text-white ${badge.color}`}
    >
      {badge.letter}
    </span>
  );
}

function TemperaturePill({ temp }: { temp: string }) {
  const colors = TEMPERATURE_COLORS[temp as Temperature];
  if (!colors) return null;
  return (
    <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${colors.active}`}>
      {temp}
    </span>
  );
}

export default function InteractionCard({ interaction, onUpdate, onDelete }: Props) {
  const [expanded, setExpanded] = useState(false);
  const [editing, setEditing] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [saving, setSaving] = useState(false);

  // Edit state
  const [editType, setEditType] = useState(interaction.type);
  const [editNotes, setEditNotes] = useState(interaction.notes);
  const [editTemp, setEditTemp] = useState<string | null>(interaction.temperature);
  const [editRisk, setEditRisk] = useState(interaction.riskFlag);
  const [editFollowUp, setEditFollowUp] = useState(interaction.followUp ?? '');
  const [editParticipants, setEditParticipants] = useState(interaction.participants ?? '');
  const [editDate, setEditDate] = useState(interaction.date.slice(0, 10));

  const date = new Date(interaction.date);
  const dateStr = date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  async function handleSaveEdit() {
    setSaving(true);
    const updates: [string, unknown][] = [];
    if (editType !== interaction.type) updates.push(['type', editType]);
    if (editNotes !== interaction.notes) updates.push(['notes', editNotes]);
    if (editTemp !== interaction.temperature) updates.push(['temperature', editTemp]);
    if (editRisk !== interaction.riskFlag) updates.push(['riskFlag', editRisk]);
    if (editFollowUp !== (interaction.followUp ?? ''))
      updates.push(['followUp', editFollowUp || null]);
    if (editParticipants !== (interaction.participants ?? ''))
      updates.push(['participants', editParticipants || null]);
    if (editDate !== interaction.date.slice(0, 10)) updates.push(['date', editDate]);

    for (const [field, value] of updates) {
      await onUpdate(interaction.id, field, value);
    }
    setSaving(false);
    setEditing(false);
  }

  async function handleDelete() {
    await onDelete(interaction.id);
  }

  if (editing) {
    return (
      <div className="rounded-lg border border-db-aqua bg-white p-4">
        <div className="flex items-center gap-3 mb-3">
          <input
            type="date"
            value={editDate}
            onChange={(e) => setEditDate(e.target.value)}
            className="rounded border border-db-gray px-2 py-1 text-sm focus:border-db-aqua focus:outline-none focus:ring-1 focus:ring-db-aqua"
          />
          <select
            value={editType}
            onChange={(e) => setEditType(e.target.value)}
            className="rounded border border-db-gray px-2 py-1 text-sm focus:border-db-aqua focus:outline-none focus:ring-1 focus:ring-db-aqua"
          >
            {MEETING_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <textarea
          value={editNotes}
          onChange={(e) => setEditNotes(e.target.value)}
          rows={3}
          className="w-full rounded border border-db-gray p-2 text-sm focus:border-db-aqua focus:outline-none focus:ring-1 focus:ring-db-aqua"
        />

        <div className="mt-2 flex items-center gap-2">
          {TEMPERATURE_OPTIONS.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setEditTemp(editTemp === t ? null : t)}
              className={`rounded-full px-3 py-1 text-xs font-medium transition ${
                editTemp === t ? TEMPERATURE_COLORS[t].active : TEMPERATURE_COLORS[t].idle
              }`}
            >
              {t}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setEditRisk(!editRisk)}
            className={`ml-2 rounded-full px-3 py-1 text-xs font-medium transition ${
              editRisk ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-500'
            }`}
          >
            Risk
          </button>
        </div>

        <input
          type="text"
          value={editFollowUp}
          onChange={(e) => setEditFollowUp(e.target.value)}
          placeholder="Follow-up / next steps"
          className="mt-2 w-full rounded border border-db-gray px-2 py-1 text-sm focus:border-db-aqua focus:outline-none focus:ring-1 focus:ring-db-aqua"
        />
        <input
          type="text"
          value={editParticipants}
          onChange={(e) => setEditParticipants(e.target.value)}
          placeholder="Participants"
          className="mt-2 w-full rounded border border-db-gray px-2 py-1 text-sm focus:border-db-aqua focus:outline-none focus:ring-1 focus:ring-db-aqua"
        />

        <div className="mt-3 flex items-center gap-2">
          <button
            onClick={handleSaveEdit}
            disabled={saving || !editNotes.trim()}
            className="rounded bg-db-aqua px-3 py-1.5 text-sm font-medium text-db-dark hover:bg-db-aqua-dark hover:text-white transition disabled:opacity-50"
          >
            {saving ? 'Saving...' : 'Save'}
          </button>
          <button
            onClick={() => setEditing(false)}
            className="rounded px-3 py-1.5 text-sm text-gray-500 hover:text-db-dark transition"
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 hover:border-gray-300 transition">
      <div className="flex items-start gap-3">
        <TypeBadge type={interaction.type} />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm font-medium text-db-dark">{interaction.type}</span>
            <span className="text-xs text-gray-400">{dateStr}</span>
            {interaction.temperature && (
              <TemperaturePill temp={interaction.temperature} />
            )}
            {interaction.riskFlag && (
              <span className="rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-700">
                Risk
              </span>
            )}
          </div>

          <p
            className={`mt-1 text-sm text-gray-700 whitespace-pre-wrap ${
              !expanded ? 'line-clamp-3' : ''
            }`}
          >
            {interaction.notes}
          </p>
          {!expanded && interaction.notes.length > 200 && (
            <button
              onClick={() => setExpanded(true)}
              className="mt-0.5 text-xs text-db-aqua-dark hover:underline"
            >
              Show more
            </button>
          )}
          {expanded && (
            <button
              onClick={() => setExpanded(false)}
              className="mt-0.5 text-xs text-db-aqua-dark hover:underline"
            >
              Show less
            </button>
          )}

          {interaction.followUp && (
            <p className="mt-2 text-xs text-gray-500">
              <span className="font-medium">Follow-up:</span> {interaction.followUp}
            </p>
          )}
          {interaction.participants && (
            <p className="mt-1 text-xs text-gray-500">
              <span className="font-medium">Participants:</span>{' '}
              {interaction.participants}
            </p>
          )}

          <div className="mt-2 flex items-center gap-3 text-xs text-gray-400">
            <span>
              {interaction.author.firstName} {interaction.author.lastName}
            </span>
            <button
              onClick={() => setEditing(true)}
              className="text-db-aqua-dark hover:underline"
            >
              Edit
            </button>
            {!confirmDelete ? (
              <button
                onClick={() => setConfirmDelete(true)}
                className="text-gray-400 hover:text-red-500"
              >
                Delete
              </button>
            ) : (
              <span className="flex items-center gap-1">
                <span className="text-red-500">Delete?</span>
                <button
                  onClick={handleDelete}
                  className="font-medium text-red-600 hover:underline"
                >
                  Yes
                </button>
                <button
                  onClick={() => setConfirmDelete(false)}
                  className="text-gray-400 hover:underline"
                >
                  No
                </button>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
