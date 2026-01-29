'use client';

import React, { useCallback, useState } from 'react';
import {
  type ColumnConfigItem,
  type GridColumnId,
  getDefaultColumnConfig,
  loadColumnConfig,
  saveColumnConfig,
} from './column-config';

export interface ColumnManagerProps {
  /** Current config (controlled from parent) */
  columnConfig: ColumnConfigItem[];
  /** Called when user saves or resets */
  onConfigChange: (config: ColumnConfigItem[]) => void;
  /** Trigger element; if not provided, we render a default button */
  trigger?: React.ReactNode;
}

export default function ColumnManager({
  columnConfig,
  onConfigChange,
  trigger,
}: ColumnManagerProps) {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState<ColumnConfigItem[]>(() =>
    loadColumnConfig().sort((a, b) => a.order - b.order)
  );

  const openModal = useCallback(() => {
    setDraft(loadColumnConfig().sort((a, b) => a.order - b.order));
    setOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setOpen(false);
  }, []);

  const move = useCallback((id: GridColumnId, direction: 'up' | 'down') => {
    setDraft((prev) => {
      const sorted = [...prev].sort((a, b) => a.order - b.order);
      const idx = sorted.findIndex((c) => c.id === id);
      if (idx < 0) return prev;
      const swapIdx = direction === 'up' ? idx - 1 : idx + 1;
      if (swapIdx < 0 || swapIdx >= sorted.length) return prev;
      const orderA = sorted[idx].order;
      const orderB = sorted[swapIdx].order;
      sorted[idx].order = orderB;
      sorted[swapIdx].order = orderA;
      return sorted.sort((a, b) => a.order - b.order);
    });
  }, []);

  const toggleVisible = useCallback((id: GridColumnId) => {
    setDraft((prev) =>
      prev.map((c) => (c.id === id ? { ...c, visible: !c.visible } : c))
    );
  }, []);

  const handleSave = useCallback(() => {
    saveColumnConfig(draft);
    onConfigChange(draft);
    closeModal();
  }, [draft, onConfigChange, closeModal]);

  const handleReset = useCallback(() => {
    const defaultConfig = getDefaultColumnConfig();
    setDraft(defaultConfig);
    saveColumnConfig(defaultConfig);
    onConfigChange(defaultConfig);
    closeModal();
  }, [onConfigChange, closeModal]);

  return (
    <>
      {trigger ? (
        <div onClick={openModal}>{trigger}</div>
      ) : (
        <button
          type="button"
          onClick={openModal}
          className="rounded border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
        >
          Customize columns
        </button>
      )}

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
          onClick={(e) => e.target === e.currentTarget && closeModal()}
          role="dialog"
          aria-modal="true"
          aria-labelledby="column-manager-title"
        >
          <div
            className="max-h-[80vh] w-full max-w-md overflow-hidden rounded-lg border border-gray-200 bg-white shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="border-b border-gray-200 px-4 py-3">
              <h2 id="column-manager-title" className="text-lg font-semibold text-gray-900">
                Customize columns
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Show or hide columns and change their order. Changes are saved to this browser.
              </p>
            </div>
            <div className="max-h-96 overflow-y-auto px-4 py-3">
              <ul className="space-y-1">
                {[...draft].sort((a, b) => a.order - b.order).map((col, index) => (
                  <li
                    key={col.id}
                    className="flex items-center justify-between gap-2 rounded border border-gray-100 bg-gray-50/50 py-2 pl-3 pr-2"
                  >
                    <label className="flex flex-1 cursor-pointer items-center gap-2">
                      <input
                        type="checkbox"
                        checked={col.visible}
                        onChange={() => toggleVisible(col.id)}
                        className="h-4 w-4 rounded border-gray-300 text-blue-600"
                      />
                      <span className="text-sm font-medium text-gray-800">{col.label}</span>
                    </label>
                    <div className="flex items-center gap-0.5">
                      <button
                        type="button"
                        onClick={() => move(col.id, 'up')}
                        disabled={index === 0}
                        className="rounded p-1 text-gray-500 hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-40"
                        title="Move left"
                        aria-label={`Move ${col.label} left`}
                      >
                        ←
                      </button>
                      <button
                        type="button"
                        onClick={() => move(col.id, 'down')}
                        disabled={index === draft.length - 1}
                        className="rounded p-1 text-gray-500 hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-40"
                        title="Move right"
                        aria-label={`Move ${col.label} right`}
                      >
                        →
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-between border-t border-gray-200 px-4 py-3">
              <button
                type="button"
                onClick={handleReset}
                className="rounded border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Reset to default
              </button>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={closeModal}
                  className="rounded border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSave}
                  className="rounded border border-blue-600 bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
