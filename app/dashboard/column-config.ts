/**
 * Column configuration for the Dashboard accounts table.
 * Persisted in localStorage so users can show/hide, reorder, and resize columns.
 */

import type { SortColumn } from './types';

export type DashboardColumnId = SortColumn;

export interface ColumnConfigItem {
  id: DashboardColumnId;
  label: string;
  visible: boolean;
  order: number;
  width?: number;
  mock?: boolean;
  align?: 'right';
}

const STORAGE_KEY = 'renewal-forecast-dashboard-columns';

const DEFAULT_COLUMNS: ColumnConfigItem[] = [
  { id: 'name', label: 'Account Name', visible: true, order: 0, width: 200 },
  { id: 'arrCents', label: 'ARR', visible: true, order: 1, width: 110, align: 'right' },
  { id: 'nextRenewalDate', label: 'Next Renewal', visible: true, order: 2, width: 120 },
  { id: 'renewalOppCount', label: '# Opps', visible: true, order: 3, width: 70, align: 'right' },
  { id: 'temperature', label: 'Temperature', visible: true, order: 4, width: 100 },
  { id: 'entitlements', label: '# Entitlements', visible: true, order: 5, width: 110, mock: true, align: 'right' },
  { id: 'loggedInUsers180d', label: 'Users (180d)', visible: true, order: 6, width: 100, mock: true, align: 'right' },
  { id: 'openCases', label: 'Open Cases', visible: true, order: 7, width: 95, mock: true, align: 'right' },
  { id: 'staleCases', label: 'Stale Cases', visible: true, order: 8, width: 95, mock: true, align: 'right' },
  { id: 'hasExecSponsor', label: 'Exec Sponsor', visible: true, order: 9, width: 105, mock: true },
  { id: 'daysSinceLastTouch', label: 'Days Since Touch', visible: true, order: 10, width: 125 },
  { id: 'lastQbrDate', label: 'Last QBR', visible: true, order: 11, width: 110 },
  { id: 'nextScheduledQbr', label: 'Next QBR', visible: true, order: 12, width: 110, mock: true },
  { id: 'platformScore', label: 'Platform Score', visible: true, order: 13, width: 140, mock: true },
];

export function getDefaultColumnConfig(): ColumnConfigItem[] {
  return DEFAULT_COLUMNS.map((c) => ({ ...c }));
}

function getDefaultMap(): Map<DashboardColumnId, ColumnConfigItem> {
  const m = new Map<DashboardColumnId, ColumnConfigItem>();
  DEFAULT_COLUMNS.forEach((c) => m.set(c.id, { ...c }));
  return m;
}

export function loadColumnConfig(): ColumnConfigItem[] {
  if (typeof window === 'undefined') return getDefaultColumnConfig();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return getDefaultColumnConfig();
    const parsed = JSON.parse(raw) as ColumnConfigItem[];
    if (!Array.isArray(parsed) || parsed.length === 0) return getDefaultColumnConfig();
    const byId = new Map(getDefaultMap().entries());
    for (const item of parsed) {
      if (item && typeof item.id === 'string' && typeof item.order === 'number') {
        const def = byId.get(item.id as DashboardColumnId);
        byId.set(item.id as DashboardColumnId, {
          id: item.id as DashboardColumnId,
          label: typeof item.label === 'string' ? item.label : (def?.label ?? item.id),
          visible: typeof item.visible === 'boolean' ? item.visible : true,
          order: item.order,
          width: typeof item.width === 'number' ? item.width : def?.width,
          mock: def?.mock,
          align: def?.align,
        });
      }
    }
    // Ensure any default column not in saved config is appended
    const defaultMap = getDefaultMap();
    for (const [id, def] of defaultMap) {
      if (!byId.has(id)) byId.set(id, { ...def, order: byId.size });
    }
    return Array.from(byId.values()).sort((a, b) => a.order - b.order);
  } catch {
    return getDefaultColumnConfig();
  }
}

export function saveColumnConfig(config: ColumnConfigItem[]): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
  } catch {
    // ignore
  }
}

export function getDefaultWidth(id: DashboardColumnId): number {
  return getDefaultMap().get(id)?.width ?? 120;
}

export function getVisibleColumns(config: ColumnConfigItem[]): ColumnConfigItem[] {
  const visible = config.filter((c) => c.visible).sort((a, b) => a.order - b.order);
  return visible.length > 0 ? visible : [...config].sort((a, b) => a.order - b.order);
}
