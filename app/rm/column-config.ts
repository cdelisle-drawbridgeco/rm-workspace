/**
 * Column configuration for the RM grid.
 * Persisted in localStorage so users can add, remove, and reorder columns.
 */

export type GridColumnId =
  | 'account'
  | 'rm'
  | 'clientType'
  | 'segment'
  | 'opps'
  | 'arrUp'
  | 'best'
  | 'worst'
  | 'callTotal'
  | 'confidence'
  | 'notes';

export interface ColumnConfigItem {
  id: GridColumnId;
  label: string;
  visible: boolean;
  order: number;
}

const STORAGE_KEY = 'renewal-forecast-rm-columns';

const DEFAULT_COLUMNS: ColumnConfigItem[] = [
  { id: 'account', label: 'Account', visible: true, order: 0 },
  { id: 'rm', label: 'RM', visible: true, order: 1 },
  { id: 'clientType', label: 'Client Type', visible: true, order: 2 },
  { id: 'segment', label: 'Segment', visible: true, order: 3 },
  { id: 'opps', label: 'Opps', visible: true, order: 4 },
  { id: 'arrUp', label: 'ARR Up (sum)', visible: true, order: 5 },
  { id: 'best', label: 'Best (USD)', visible: true, order: 6 },
  { id: 'worst', label: 'Worst (USD)', visible: true, order: 7 },
  { id: 'callTotal', label: 'Call Total', visible: true, order: 8 },
  { id: 'confidence', label: 'Confidence', visible: true, order: 9 },
  { id: 'notes', label: 'Notes', visible: true, order: 10 },
];

export function getDefaultColumnConfig(): ColumnConfigItem[] {
  return DEFAULT_COLUMNS.map((c) => ({ ...c }));
}

export function loadColumnConfig(): ColumnConfigItem[] {
  if (typeof window === 'undefined') return getDefaultColumnConfig();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return getDefaultColumnConfig();
    const parsed = JSON.parse(raw) as ColumnConfigItem[];
    if (!Array.isArray(parsed) || parsed.length === 0) return getDefaultColumnConfig();
    // Merge with defaults so new columns appear if we add them later
    const byId = new Map(GET_DEFAULT_MAP().entries());
    for (const item of parsed) {
      if (item && typeof item.id === 'string' && typeof item.order === 'number') {
        byId.set(item.id as GridColumnId, {
          id: item.id as GridColumnId,
          label: typeof item.label === 'string' ? item.label : (byId.get(item.id as GridColumnId)?.label ?? item.id),
          visible: typeof item.visible === 'boolean' ? item.visible : true,
          order: item.order,
        });
      }
    }
    // Ensure any default column not in saved config is appended
    const defaultMap = GET_DEFAULT_MAP();
    for (const [id, def] of defaultMap) {
      if (!byId.has(id)) byId.set(id, { ...def, order: byId.size });
    }
    return Array.from(byId.values()).sort((a, b) => a.order - b.order);
  } catch {
    return getDefaultColumnConfig();
  }
}

function GET_DEFAULT_MAP(): Map<GridColumnId, ColumnConfigItem> {
  const m = new Map<GridColumnId, ColumnConfigItem>();
  DEFAULT_COLUMNS.forEach((c) => m.set(c.id, { ...c }));
  return m;
}

export function saveColumnConfig(config: ColumnConfigItem[]): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
  } catch {
    // ignore
  }
}

/** Visible columns in display order. If none visible, returns all columns so the grid is never empty. */
export function getVisibleColumns(config: ColumnConfigItem[]): ColumnConfigItem[] {
  const visible = config.filter((c) => c.visible).sort((a, b) => a.order - b.order);
  return visible.length > 0 ? visible : [...config].sort((a, b) => a.order - b.order);
}
