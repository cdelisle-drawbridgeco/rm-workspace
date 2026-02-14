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

export type GateType = 'checkbox' | 'text' | 'textarea' | 'select' | 'date';

export interface GateDefinition {
  key: string;
  label: string;
  type: GateType;
  options?: string[]; // for select type
  placeholder?: string;
}

export const STAGE_GATES: Record<RenewalStage, GateDefinition[]> = {
  prep: [
    { key: 'reviewUsage', label: 'Review usage & adoption data', type: 'checkbox' },
    { key: 'reviewContract', label: 'Review current contract terms & pricing', type: 'checkbox' },
    { key: 'identifyStakeholders', label: 'Identify key stakeholders & decision-makers', type: 'checkbox' },
    { key: 'checkSupportHistory', label: 'Check support ticket history', type: 'checkbox' },
    { key: 'reviewSentiment', label: 'Review NPS / CSAT scores', type: 'checkbox' },
    { key: 'prepNotes', label: 'Account health notes', type: 'textarea', placeholder: 'Key observations about account health, usage trends, relationship status...' },
  ],
  callScheduled: [
    { key: 'callDate', label: 'Call date', type: 'date' },
    { key: 'decisionMakerConfirmed', label: 'Meeting confirmed with decision-maker', type: 'checkbox' },
    { key: 'callType', label: 'Call type', type: 'select', options: ['Intro / Check-in', 'Renewal Discussion', 'Executive Review', 'Technical Review'] },
    { key: 'discoveryQuestions', label: 'Discovery questions prepared', type: 'checkbox' },
    { key: 'competitiveLandscape', label: 'Competitive landscape reviewed', type: 'checkbox' },
    { key: 'agendaSent', label: 'Agenda sent to customer', type: 'checkbox' },
    { key: 'preCallNotes', label: 'Pre-call notes', type: 'textarea', placeholder: 'Talking points, goals for the call, known concerns...' },
  ],
  riskRating: [
    { key: 'rating', label: 'Overall risk rating', type: 'select', options: ['Green', 'Yellow', 'Red'] },
    { key: 'usageTrend', label: 'Usage trend', type: 'select', options: ['Growing', 'Stable', 'Declining'] },
    { key: 'championStatus', label: 'Champion status', type: 'select', options: ['Strong', 'At Risk', 'No Champion', 'New Champion Needed'] },
    { key: 'competitiveThreat', label: 'Competitive threat level', type: 'select', options: ['None Known', 'Low', 'Medium', 'High'] },
    { key: 'budgetConcerns', label: 'Budget concerns identified', type: 'checkbox' },
    { key: 'orgChanges', label: 'Organizational changes (reorg, M&A, layoffs)', type: 'checkbox' },
    { key: 'productGaps', label: 'Product gaps or feature requests outstanding', type: 'checkbox' },
    { key: 'riskNotes', label: 'Risk assessment notes', type: 'textarea', placeholder: 'Detail specific risk factors, mitigation plans, escalation needs...' },
  ],
  strategize: [
    { key: 'retentionStrategy', label: 'Retention strategy defined', type: 'checkbox' },
    { key: 'expansionOpp', label: 'Upsell / expansion opportunities identified', type: 'checkbox' },
    { key: 'internalAlignment', label: 'Internal resources aligned (SE, exec sponsor)', type: 'checkbox' },
    { key: 'pricingStrategy', label: 'Pricing approach', type: 'select', options: ['Flat Renewal', 'Price Increase', 'Multi-Year Discount', 'Custom / Negotiated'] },
    { key: 'targetOutcome', label: 'Target outcome', type: 'select', options: ['Renew Flat', 'Upsell', 'Multi-Year', 'Managed Downgrade'] },
    { key: 'strategyNotes', label: 'Strategy notes', type: 'textarea', placeholder: 'Renewal strategy details, upsell angles, executive engagement plan...' },
  ],
  planning: [
    { key: 'proposalDrafted', label: 'Proposal / quote drafted', type: 'checkbox' },
    { key: 'pricingApproval', label: 'Internal pricing approval obtained', type: 'checkbox' },
    { key: 'execSponsor', label: 'Executive sponsor engaged (if needed)', type: 'checkbox' },
    { key: 'customerTimeline', label: 'Customer timeline confirmed', type: 'checkbox' },
    { key: 'proposedArr', label: 'Proposed ARR', type: 'text', placeholder: 'e.g., $150,000' },
    { key: 'planningNotes', label: 'Proposal notes', type: 'textarea', placeholder: 'Proposal details, pricing rationale, terms to include...' },
  ],
  negotiate: [
    { key: 'proposalSent', label: 'Proposal sent to customer', type: 'checkbox' },
    { key: 'counterReceived', label: 'Customer counter-proposal received', type: 'checkbox' },
    { key: 'legalEngaged', label: 'Legal / procurement engaged', type: 'checkbox' },
    { key: 'concessionsDocumented', label: 'Concessions documented', type: 'checkbox' },
    { key: 'finalPricingAgreed', label: 'Final pricing agreed', type: 'checkbox' },
    { key: 'negotiationNotes', label: 'Negotiation notes', type: 'textarea', placeholder: 'Counter-offers, concessions made, outstanding terms, blockers...' },
  ],
  execute: [
    { key: 'finalTerms', label: 'Final terms documented', type: 'checkbox' },
    { key: 'contractSent', label: 'Contract sent for signature', type: 'checkbox' },
    { key: 'contractSigned', label: 'Contract signed', type: 'checkbox' },
    { key: 'bookingProcessed', label: 'Booking processed in system', type: 'checkbox' },
    { key: 'csHandoff', label: 'CS / AM handoff complete', type: 'checkbox' },
    { key: 'closeoutNotes', label: 'Close-out notes', type: 'textarea', placeholder: 'Final outcome, lessons learned, expansion follow-ups...' },
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
