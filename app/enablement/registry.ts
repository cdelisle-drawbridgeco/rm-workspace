import type { ComponentType } from 'react';
import type { CategoryConfig, CategoryId, TopicId } from './types';

/* ------------------------------------------------------------------ */
/*  Category definitions (drives sidebar + landing pages)              */
/* ------------------------------------------------------------------ */

export const CATEGORIES: CategoryConfig[] = [
  {
    id: 'training',
    label: 'Training',
    icon: '📚',
    subtitle:
      'Industry knowledge, client segments, and regulatory deep-dives to sharpen your renewal conversations.',
    topics: [
      {
        id: 'industry-overview',
        title: 'Industry Overview',
        description:
          'The alternative asset management landscape — AUM, capital flows, and why cybersecurity matters.',
        icon: '🌐',
        group: 'Industry & Client Segments',
      },
      {
        id: 'hedge-funds',
        title: 'Hedge Funds',
        description:
          'Strategies, capital raising, and the unique cyber risk profile of actively managed funds.',
        icon: '📈',
        group: 'Industry & Client Segments',
      },
      {
        id: 'private-equity',
        title: 'Private Equity',
        description:
          'LBOs, portfolio company risk, and how PE fundraising cycles drive security investment.',
        icon: '🏢',
        group: 'Industry & Client Segments',
      },
      {
        id: 'family-offices',
        title: 'Family & Home Offices',
        description:
          'UHNW wealth management entities with lean teams and outsized cyber exposure.',
        icon: '🏠',
        group: 'Industry & Client Segments',
      },
      {
        id: 'reg-sp',
        title: 'Regulation S-P',
        description:
          'The SEC\'s cornerstone privacy regulation — 2025 amendments, breach notification, and enforcement.',
        icon: '⚖️',
        group: 'Regulatory Deep-Dives',
      },
      {
        id: 'dora',
        title: 'DORA (EU)',
        description:
          'The EU\'s Digital Operational Resilience Act and its impact on financial entities.',
        icon: '🇪🇺',
        group: 'Regulatory Deep-Dives',
      },
      {
        id: 'sec-exam-priorities',
        title: 'SEC Exam Priorities',
        description:
          'What SEC examiners are looking for in 2025 and how to prepare clients.',
        icon: '🔍',
        group: 'Regulatory Deep-Dives',
      },
    ],
  },
  {
    id: 'workflows',
    label: 'RM Workflows',
    icon: '⚙️',
    subtitle:
      'Step-by-step guides for forecasting, renewal planning, negotiation, and cross-team coordination.',
    topics: [
      {
        id: 'forecasting-best-practices',
        title: 'Forecasting Best Practices',
        description:
          'Weekly cadence, Best/Worst/Call methodology, and common forecasting pitfalls.',
        icon: '📊',
      },
      {
        id: 'renewal-plan-best-practices',
        title: 'Renewal Plan Best Practices',
        description:
          'Stage-gate workflow, timeline management, and stakeholder alignment.',
        icon: '📋',
      },
      {
        id: 'negotiation-playbook',
        title: 'Negotiation Playbook',
        description:
          'Strategic framework for pricing conversations, concession management, and closing.',
        icon: '🤝',
      },
      {
        id: 'escalation-path',
        title: 'RM ↔ CS Escalation Path',
        description:
          'When and how to escalate between Relationship Management and Client Success.',
        icon: '🔄',
      },
      {
        id: 'msp-objection-handling',
        title: 'MSP Objection Handling',
        description:
          'When a client says they\'re moving cyber to their MSP — regulatory case for independence and talk tracks.',
        icon: '🛡️',
      },
      {
        id: 'svr-framework',
        title: 'SVR Framework',
        description:
          'The Strategic Value Review playbook — preparation, conversation flow, value translation, and churn early warning.',
        icon: '📋',
        group: 'SVR Meetings',
      },
      {
        id: 'svr-conversation-guide',
        title: 'SVR Conversation Guide',
        description:
          'Question bank and active listening cues for turning SVRs into strategic partnership conversations.',
        icon: '💬',
        group: 'SVR Meetings',
      },
      {
        id: 'churn-reasons',
        title: 'Churn Reason Tagging',
        description:
          'The seven-tag churn taxonomy, when to use each tag, the Quick Decision Guide, and the 1:1 review process.',
        icon: '📉',
      },
    ],
  },
  {
    id: 'outcomes',
    label: 'Outcomes & Value',
    icon: '🎯',
    subtitle:
      'Outcome frameworks and customer journey maps to anchor every renewal in measurable client value.',
    topics: [
      {
        id: 'outcome-framework',
        title: 'Outcome Framework',
        description:
          'Six business outcomes that define Drawbridge\'s value — from regulatory readiness to AI safety.',
        icon: '🏆',
      },
      {
        id: 'journey-hedge-fund',
        title: 'Journey: Hedge Fund',
        description:
          'End-to-end customer journey mapping for hedge fund clients across the lifecycle.',
        icon: '🗺️',
      },
      {
        id: 'journey-hedge-fund-revised',
        title: 'Journey: Hedge Fund (Revised)',
        description:
          'Value-first customer journey — mapped to the client\'s business evolution, not our internal milestones.',
        icon: '🧭',
      },
      {
        id: 'journey-pe-management',
        title: 'Journey: PE Management Co.',
        description:
          'Customer journey for PE firms (GPs) — from LP due diligence to portfolio-wide value creation.',
        icon: '🏛️',
      },
      {
        id: 'journey-pe-portco',
        title: 'Journey: PE Portfolio Co.',
        description:
          'Customer journey for PE portfolio companies — from sponsor mandate to exit-ready security.',
        icon: '🏭',
      },
      {
        id: 'journey-pe-revised',
        title: 'Journey: PE Firm (Revised)',
        description:
          'Value-first PE journey — GP and portfolio outcomes mapped to fund lifecycle, not internal milestones.',
        icon: '🧭',
      },
      {
        id: 'roi-value-measurement',
        title: 'ROI & Value Measurement',
        description:
          'Five frameworks for quantifying Drawbridge\'s business impact — capital protected, costs avoided, and build vs. buy.',
        icon: '📐',
      },
    ],
  },
  {
    id: 'marketing',
    label: 'Marketing Materials',
    icon: '📁',
    subtitle:
      'Sales collateral, competitive intelligence, and customer-facing resources.',
    topics: [
      {
        id: 'marketing-materials',
        title: 'Browse Materials',
        description:
          'Pitch decks, case studies, one-pagers, and battle cards for sales conversations.',
        icon: '📁',
      },
    ],
  },
  {
    id: 'ai-training',
    label: 'AI Training',
    icon: '🤖',
    subtitle:
      'How AI is reshaping cyber threats and how Drawbridge helps clients stay protected.',
    topics: [
      {
        id: 'ai-cyber-risk',
        title: 'AI & Cyber Risk',
        description:
          'How artificial intelligence is amplifying the threat landscape — and what it means for your clients.',
        icon: '🧠',
      },
      {
        id: 'ai-in-alts',
        title: 'AI in Alternatives',
        description:
          'How hedge funds and PE firms are actually using AI — and the cyber risks each use case creates.',
        icon: '🏦',
      },
      {
        id: 'genai-assessments',
        title: 'GenAI Security Assessments',
        description:
          'New ChatGPT and Claude security assessments — what they cover, who to target, and how to sell them.',
        icon: '🔐',
      },
      {
        id: 'ai-security-bundle',
        title: 'AI Security & Governance Bundle',
        description:
          'Assessment, Policy, and Training — the full three-service AI bundle, who to target, and how to sell it.',
        icon: '🛡️',
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Lazy-loaded topic components                                       */
/* ------------------------------------------------------------------ */

import dynamic from 'next/dynamic';

const TOPIC_COMPONENTS: Record<TopicId, ComponentType> = {
  'industry-overview': dynamic(() => import('./content/training/industry-overview')),
  'hedge-funds': dynamic(() => import('./content/training/hedge-funds')),
  'private-equity': dynamic(() => import('./content/training/private-equity')),
  'family-offices': dynamic(() => import('./content/training/family-offices')),
  'reg-sp': dynamic(() => import('./content/training/reg-sp')),
  dora: dynamic(() => import('./content/training/dora')),
  'sec-exam-priorities': dynamic(() => import('./content/training/sec-exam-priorities')),
  'forecasting-best-practices': dynamic(
    () => import('./content/workflows/forecasting-best-practices'),
  ),
  'renewal-plan-best-practices': dynamic(
    () => import('./content/workflows/renewal-plan-best-practices'),
  ),
  'negotiation-playbook': dynamic(
    () => import('./content/workflows/negotiation-playbook'),
  ),
  'escalation-path': dynamic(() => import('./content/workflows/escalation-path')),
  'msp-objection-handling': dynamic(
    () => import('./content/workflows/msp-objection-handling'),
  ),
  'svr-framework': dynamic(() => import('./content/workflows/svr-framework')),
  'svr-conversation-guide': dynamic(
    () => import('./content/workflows/svr-conversation-guide'),
  ),
  'outcome-framework': dynamic(() => import('./content/outcomes/outcome-framework')),
  'journey-hedge-fund': dynamic(() => import('./content/outcomes/journey-hedge-fund')),
  'journey-hedge-fund-revised': dynamic(() => import('./content/outcomes/journey-hedge-fund-revised')),
  'journey-pe-management': dynamic(
    () => import('./content/outcomes/journey-pe-management'),
  ),
  'journey-pe-portco': dynamic(() => import('./content/outcomes/journey-pe-portco')),
  'journey-pe-revised': dynamic(() => import('./content/outcomes/journey-pe-revised')),
  'roi-value-measurement': dynamic(() => import('./content/outcomes/roi-value-measurement')),
  'marketing-materials': dynamic(
    () => import('./content/marketing/marketing-materials'),
  ),
  'ai-cyber-risk': dynamic(
    () => import('./content/ai-training/ai-cyber-risk'),
  ),
  'ai-in-alts': dynamic(
    () => import('./content/ai-training/ai-in-alts'),
  ),
  'genai-assessments': dynamic(
    () => import('./content/ai-training/genai-assessments'),
  ),
  'ai-security-bundle': dynamic(
    () => import('./content/ai-training/ai-security-bundle'),
  ),
  'churn-reasons': dynamic(
    () => import('./content/workflows/churn-reasons'),
  ),
};

export { TOPIC_COMPONENTS };

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

export function getCategoryById(id: CategoryId): CategoryConfig {
  return CATEGORIES.find((c) => c.id === id)!;
}
