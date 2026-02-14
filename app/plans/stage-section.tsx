'use client';
import React, { useState } from 'react';
import {
  STAGE_LABELS,
  STAGE_GATES,
  nextStage,
} from '@/lib/renewal-stages';
import type { RenewalStage, GateDefinition } from '@/lib/renewal-stages';

export default function StageSection({
  stage,
  status,
  gateValues,
  onGateChange,
  onAdvance,
}: {
  stage: RenewalStage;
  status: 'past' | 'current' | 'future';
  gateValues: Record<string, unknown>;
  onGateChange: (gateKey: string, value: unknown) => void;
  onAdvance?: () => void;
}) {
  const [open, setOpen] = useState(status === 'current');
  const gates = STAGE_GATES[stage];

  // Count completed checkboxes for progress indicator
  const checkboxGates = gates.filter((g) => g.type === 'checkbox');
  const completedCount = checkboxGates.filter((g) => !!gateValues[g.key]).length;
  const totalCheckboxes = checkboxGates.length;

  let headerColor = 'bg-gray-100 text-gray-400';
  if (status === 'past') headerColor = 'bg-db-aqua-light text-db-aqua-dark';
  if (status === 'current') headerColor = 'bg-db-aqua/20 text-db-dark';

  return (
    <div className="mb-2 rounded-lg border border-db-gray bg-white overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center justify-between px-4 py-3 text-left text-sm font-medium ${headerColor}`}
      >
        <div className="flex items-center gap-2">
          {status === 'past' && (
            <span className="text-db-aqua-dark">&#10003;</span>
          )}
          {status === 'current' && (
            <span className="h-2 w-2 rounded-full bg-db-aqua inline-block" />
          )}
          {STAGE_LABELS[stage]}
          {totalCheckboxes > 0 && status !== 'future' && (
            <span className={`text-xs font-normal ${status === 'past' ? 'text-db-aqua-dark/70' : 'text-gray-500'}`}>
              {completedCount}/{totalCheckboxes}
            </span>
          )}
        </div>
        <span className="text-xs">{open ? '▾' : '▸'}</span>
      </button>

      {open && (
        <div className="px-4 py-3 space-y-3">
          {gates.map((gate) => {
            const gateProps: GateProps = {
              gate,
              value: gateValues[gate.key],
              disabled: status === 'future',
              readOnly: status === 'past',
              onChange: (val) => onGateChange(gate.key, val),
            };
            if (gate.type === 'checkbox') {
              return <CheckboxGate key={gate.key} {...gateProps} />;
            }
            if (gate.type === 'text') {
              return <TextGate key={gate.key} {...gateProps} />;
            }
            if (gate.type === 'textarea') {
              return <TextareaGate key={gate.key} {...gateProps} />;
            }
            if (gate.type === 'select') {
              return <SelectGate key={gate.key} {...gateProps} />;
            }
            if (gate.type === 'date') {
              return <DateGate key={gate.key} {...gateProps} />;
            }
            return null;
          })}
          {status === 'current' && onAdvance && nextStage(stage) && (
            <div className="mt-3 pt-3 border-t border-db-gray">
              <button
                onClick={onAdvance}
                className="rounded bg-db-aqua px-3 py-1.5 text-xs font-medium text-db-dark hover:bg-db-aqua-dark hover:text-white transition"
              >
                Complete &rarr; {STAGE_LABELS[nextStage(stage)!]}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

interface GateProps {
  gate: GateDefinition;
  value: unknown;
  disabled: boolean;
  readOnly: boolean;
  onChange: (val: unknown) => void;
}

function useSaveIndicator() {
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const save = async (val: unknown, onChange: (val: unknown) => void) => {
    setSaving(true);
    setSaved(false);
    await onChange(val);
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return { saving, saved, save };
}

function SaveStatus({ saving, saved }: { saving: boolean; saved: boolean }) {
  if (saving) return <span className="text-xs text-gray-500">Saving...</span>;
  if (saved) return <span className="text-xs text-db-aqua-dark">&#10003;</span>;
  return null;
}

function CheckboxGate({ gate, value, disabled, readOnly, onChange }: GateProps) {
  const { saving, saved, save } = useSaveIndicator();
  const checked = !!value;

  return (
    <label className="flex items-center gap-2 text-sm">
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={() => {
          if (!readOnly && !disabled) save(!checked, onChange);
        }}
        className="rounded accent-db-aqua-dark"
      />
      <span className={disabled ? 'text-gray-400' : 'text-db-dark'}>{gate.label}</span>
      {readOnly && checked && (
        <span className="text-db-aqua-dark text-xs">&#10003;</span>
      )}
      <SaveStatus saving={saving} saved={saved} />
    </label>
  );
}

function TextGate({ gate, value, disabled, readOnly, onChange }: GateProps) {
  const { saving, saved, save } = useSaveIndicator();
  const [localVal, setLocalVal] = useState((value as string) || '');

  return (
    <div>
      <label className="block text-sm text-gray-600 mb-1">{gate.label}</label>
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={localVal}
          disabled={disabled}
          readOnly={readOnly}
          onChange={(e) => setLocalVal(e.target.value)}
          onBlur={() => {
            if (!readOnly && !disabled && localVal !== (value || ''))
              save(localVal, onChange);
          }}
          className="flex-1 rounded border border-db-gray p-2 text-sm disabled:bg-gray-50 focus:border-db-aqua focus:outline-none focus:ring-1 focus:ring-db-aqua"
        />
        <SaveStatus saving={saving} saved={saved} />
      </div>
    </div>
  );
}

function SelectGate({ gate, value, disabled, readOnly, onChange }: GateProps) {
  const { saving, saved, save } = useSaveIndicator();

  return (
    <div>
      <label className="block text-sm text-gray-600 mb-1">{gate.label}</label>
      <div className="flex items-center gap-2">
        <select
          value={(value as string) || ''}
          disabled={disabled}
          onChange={(e) => {
            if (!readOnly && !disabled) save(e.target.value, onChange);
          }}
          className="rounded border border-db-gray p-2 text-sm disabled:bg-gray-50 focus:border-db-aqua focus:outline-none focus:ring-1 focus:ring-db-aqua"
        >
          <option value="">Select...</option>
          {gate.options?.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <SaveStatus saving={saving} saved={saved} />
      </div>
    </div>
  );
}

function TextareaGate({ gate, value, disabled, readOnly, onChange }: GateProps) {
  const { saving, saved, save } = useSaveIndicator();
  const [localVal, setLocalVal] = useState((value as string) || '');

  return (
    <div>
      <label className="block text-sm text-gray-600 mb-1">{gate.label}</label>
      <div className="relative">
        <textarea
          value={localVal}
          disabled={disabled}
          readOnly={readOnly}
          placeholder={gate.placeholder}
          rows={3}
          onChange={(e) => setLocalVal(e.target.value)}
          onBlur={() => {
            if (!readOnly && !disabled && localVal !== (value || ''))
              save(localVal, onChange);
          }}
          className="w-full rounded border border-db-gray p-2 text-sm disabled:bg-gray-50 read-only:bg-gray-50 focus:border-db-aqua focus:outline-none focus:ring-1 focus:ring-db-aqua resize-y"
        />
        <div className="absolute top-2 right-2">
          <SaveStatus saving={saving} saved={saved} />
        </div>
      </div>
    </div>
  );
}

function DateGate({ gate, value, disabled, readOnly, onChange }: GateProps) {
  const { saving, saved, save } = useSaveIndicator();

  return (
    <div>
      <label className="block text-sm text-gray-600 mb-1">{gate.label}</label>
      <div className="flex items-center gap-2">
        <input
          type="date"
          value={(value as string) || ''}
          disabled={disabled}
          readOnly={readOnly}
          onChange={(e) => {
            if (!readOnly && !disabled) save(e.target.value, onChange);
          }}
          className="rounded border border-db-gray p-2 text-sm disabled:bg-gray-50 focus:border-db-aqua focus:outline-none focus:ring-1 focus:ring-db-aqua"
        />
        <SaveStatus saving={saving} saved={saved} />
      </div>
    </div>
  );
}
