export type CategoryId = 'training' | 'workflows' | 'outcomes' | 'marketing' | 'ai-training';

export type TopicId =
  | 'industry-overview'
  | 'hedge-funds'
  | 'private-equity'
  | 'family-offices'
  | 'reg-sp'
  | 'dora'
  | 'sec-exam-priorities'
  | 'forecasting-best-practices'
  | 'renewal-plan-best-practices'
  | 'negotiation-playbook'
  | 'escalation-path'
  | 'outcome-framework'
  | 'journey-hedge-fund'
  | 'journey-pe-management'
  | 'journey-pe-portco'
  | 'marketing-materials'
  | 'ai-cyber-risk';

export type NavState = {
  view: 'landing' | 'topic';
  category: CategoryId;
  topic?: TopicId;
};

export interface TopicConfig {
  id: TopicId;
  title: string;
  description: string;
  icon: string;
  group?: string;
}

export interface CategoryConfig {
  id: CategoryId;
  label: string;
  icon: string;
  subtitle: string;
  topics: TopicConfig[];
}
