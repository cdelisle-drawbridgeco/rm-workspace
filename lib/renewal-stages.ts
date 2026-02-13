/**
 * Renewal plan stage definitions, gate items, and risk rating config.
 * Single source of truth for both API validation and UI rendering.
 */

export const RENEWAL_STAGES = [
  'prep',
  'callScheduled',
  'riskRating',
  'strategize',
  'planning',
  'negotiate',
  'execute',
] as const;

export type RenewalStage = (typeof RENEWAL_STAGES)[number];

export const STAGE_LABELS: Record<RenewalStage, string> = {
  prep: 'Prep',
  callScheduled: 'Call Scheduled',
  riskRating: 'Risk Rating',
  strategize: 'Strategize',
  planning: 'Planning',
  negotiate: 'Negotiate',
  execute: 'Execute',
};

/** Maps stage key to the Prisma JSON column name. */
export const STAGE_GATES_FIELD: Record<RenewalStage, string> = {
  prep: 'prepGates',
  callScheduled: 'callScheduledGates',
  riskRating: 'riskRatingGates',
  strategize: 'strategizeGates',
  planning: 'planningGates',
  negotiate: 'negotiateGates',
  execute: 'executeGates',
};

export type GateType = 'checkbox' | 'text' | 'select';

export interface GateDefinition {
  key: string;
  label: string;
  type: GateType;
  options?: string[]; // for select type
}

export const STAGE_GATES: Record<RenewalStage, GateDefinition[]> = {
  prep: [
    { key: 'reviewAccount', label: 'Review account history & usage data', type: 'checkbox' },
    { key: 'identifyStakeholders', label: 'Identify key stakeholders', type: 'checkbox' },
    { key: 'reviewContract', label: 'Review current contract terms', type: 'checkbox' },
    { key: 'prepNotes', label: 'Prep notes', type: 'text' },
  ],
  callScheduled: [
    { key: 'callDate', label: 'Call date scheduled', type: 'text' },
    { key: 'agendaSent', label: 'Agenda sent to customer', type: 'checkbox' },
    { key: 'internalBrief', label: 'Internal brief completed', type: 'checkbox' },
  ],
  riskRating: [
    { key: 'rating', label: 'Risk rating', type: 'select', options: ['Green', 'Yellow', 'Red'] },
    { key: 'riskFactors', label: 'Risk factors / notes', type: 'text' },
  ],
  strategize: [
    { key: 'strategyDefined', label: 'Renewal strategy defined', type: 'checkbox' },
    { key: 'pricingApproved', label: 'Pricing strategy approved', type: 'checkbox' },
    { key: 'expansionOpp', label: 'Expansion opportunity identified', type: 'checkbox' },
    { key: 'strategyNotes', label: 'Strategy notes', type: 'text' },
  ],
  planning: [
    { key: 'proposalDrafted', label: 'Proposal drafted', type: 'checkbox' },
    { key: 'internalReview', label: 'Internal review completed', type: 'checkbox' },
    { key: 'customerTimeline', label: 'Customer timeline confirmed', type: 'checkbox' },
  ],
  negotiate: [
    { key: 'proposalSent', label: 'Proposal sent to customer', type: 'checkbox' },
    { key: 'termsDiscussed', label: 'Terms discussed with customer', type: 'checkbox' },
    { key: 'legalReview', label: 'Legal review (if needed)', type: 'checkbox' },
    { key: 'negotiationNotes', label: 'Negotiation notes', type: 'text' },
  ],
  execute: [
    { key: 'finalTermsAgreed', label: 'Final terms agreed', type: 'checkbox' },
    { key: 'contractSigned', label: 'Contract signed', type: 'checkbox' },
    { key: 'systemUpdated', label: 'System updated (CRM/billing)', type: 'checkbox' },
    { key: 'closeoutNotes', label: 'Close-out notes', type: 'text' },
  ],
};

export const RISK_RATING_OPTIONS = ['Green', 'Yellow', 'Red'] as const;
export type RiskRating = (typeof RISK_RATING_OPTIONS)[number];

export const RISK_RATING_COLORS: Record<string, { bg: string; text: string }> = {
  Green: { bg: 'bg-green-100', text: 'text-green-800' },
  Yellow: { bg: 'bg-yellow-100', text: 'text-yellow-800' },
  Red: { bg: 'bg-red-100', text: 'text-red-800' },
};

/** Returns the index of a stage in the workflow (0-based). */
export function stageIndex(stage: RenewalStage): number {
  return RENEWAL_STAGES.indexOf(stage);
}

/** Returns the next stage, or null if already at the last stage. */
export function nextStage(stage: RenewalStage): RenewalStage | null {
  const idx = stageIndex(stage);
  return idx < RENEWAL_STAGES.length - 1 ? RENEWAL_STAGES[idx + 1] : null;
}
