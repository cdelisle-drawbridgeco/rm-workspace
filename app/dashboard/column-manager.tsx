'use client';

import React, { useCallback, useState, useRef } from 'react';
import {
  type ColumnConfigItem,
  type DashboardColumnId,
  getDefaultColumnConfig,
  loadColumnConfig,
  saveColumnConfig,
} from './column-config';

export interface ColumnManagerProps {
  columnConfig: ColumnConfigItem[];
  onConfigChange: (config: ColumnConfigItem[]) => void;
}

export default function ColumnManager({
  columnConfig,
  onConfigChange,
}: ColumnManagerProps) {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState<ColumnConfigItem[]>(() =>
    loadColumnConfig().sort((a, b) => a.order - b.order)
  );

  // Drag state
  const [dragIndex, setDragIndex] = useState<number | null>(null);
  const [dropTarget, setDropTarget] = useState<number | null>(null);
  const dragItemRef = useRef<number | null>(null);

  const openModal = useCallback(() => {
    setDraft(loadColumnConfig().sort((a, b) => a.order - b.order));
    setOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setOpen(false);
    setDragIndex(null);
    setDropTarget(null);
  }, []);

  const toggleVisible = useCallback((id: DashboardColumnId) => {
    setDraft((prev) =>
      prev.map((c) => (c.id === id ? { ...c, visible: !c.visible } : c))
    );
  }, []);

  const handleDragStart = useCallback((e: React.DragEvent, index: number) => {
    dragItemRef.current = index;
    setDragIndex(index);
    e.dataTransfer.effectAllowed = 'move';
    // Required for Firefox
    e.dataTransfer.setData('text/plain', String(index));
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent, index: number) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    setDropTarget(index);
  }, []);

  const handleDragLeave = useCallback(() => {
    setDropTarget(null);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent, toIndex: number) => {
    e.preventDefault();
    const fromIndex = dragItemRef.current;
    if (fromIndex === null || fromIndex === toIndex) {
      setDragIndex(null);
      setDropTarget(null);
      return;
    }
    setDraft((prev) => {
      const sorted = [...prev].sort((a, b) => a.order - b.order);
      const item = sorted.splice(fromIndex, 1)[0];
      sorted.splice(toIndex, 0, item);
      return sorted.map((c, i) => ({ ...c, order: i }));
    });
    setDragIndex(null);
    setDropTarget(null);
    dragItemRef.current = null;
  }, []);

  const handleDragEnd = useCallback(() => {
    setDragIndex(null);
    setDropTarget(null);
    dragItemRef.current = null;
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

  const sorted = [...draft].sort((a, b) => a.order - b.order);

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="rounded border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
      >
        Customize columns
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
          onClick={(e) => e.target === e.currentTarget && closeModal()}
          role="dialog"
          aria-modal="true"
          aria-labelledby="dashboard-column-manager-title"
        >
          <div
            className="max-h-[80vh] w-full max-w-md overflow-hidden rounded-lg border border-gray-200 bg-white shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="border-b border-gray-200 px-4 py-3">
              <h2 id="dashboard-column-manager-title" className="text-lg font-semibold text-gray-900">
                Customize columns
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Show or hide columns and drag to reorder. Changes are saved to this browser.
              </p>
            </div>
            <div className="max-h-96 overflow-y-auto px-4 py-3">
              <ul className="space-y-1">
                {sorted.map((col, index) => (
                  <li
                    key={col.id}
                    draggable
                    onDragStart={(e) => handleDragStart(e, index)}
                    onDragOver={(e) => handleDragOver(e, index)}
                    onDragLeave={handleDragLeave}
                    onDrop={(e) => handleDrop(e, index)}
                    onDragEnd={handleDragEnd}
                    className={`flex items-center gap-2 rounded border py-2 pl-2 pr-3 transition-colors ${
                      dragIndex === index
                        ? 'border-blue-300 bg-blue-50 opacity-50'
                        : dropTarget === index
                          ? 'border-blue-400 bg-blue-50'
                          : 'border-gray-100 bg-gray-50/50'
                    }`}
                  >
                    <span
                      className="cursor-grab text-gray-400 hover:text-gray-600 active:cursor-grabbing px-1 text-lg leading-none select-none"
                      title="Drag to reorder"
                    >
                      ⠿
                    </span>
                    <label className="flex flex-1 cursor-pointer items-center gap-2">
                      <input
                        type="checkbox"
                        checked={col.visible}
                        onChange={() => toggleVisible(col.id)}
                        className="h-4 w-4 rounded border-gray-300 text-blue-600"
                      />
                      <span className="text-sm font-medium text-gray-800">{col.label}</span>
                      {col.mock && (
                        <span className="text-[9px] text-gray-400">(mock)</span>
                      )}
                    </label>
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
