export interface DashboardAccount {
  id: string;
  name: string;
  ownerName: string;
  segment: string | null;
  // Real data
  arrCents: number;
  nextRenewalDate: string | null; // ISO string
  renewalOppCount: number;
  temperature: string | null; // Hot | Warm | Cool | Cold
  riskRating: string | null; // Green | Yellow | Red
  daysSinceLastTouch: number | null;
  lastQbrDate: string | null; // ISO string
  expansionCents: number;
  // Mock data
  entitlements: number;
  loggedInUsers180d: number;
  openCases: number;
  staleCases: number;
  hasExecSponsor: boolean;
  nextScheduledQbr: string | null; // ISO string
  platformScore: number; // 0-100
  unresponsive: boolean;
}

export type SortColumn = keyof DashboardAccount;
export type SortDirection = 'asc' | 'desc';
export type DashboardTab = 'risk' | 'renewals' | 'expansion';
