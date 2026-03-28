export const ENGAGEMENT_TYPES = ['Call', 'Email', 'Meeting', 'Onsite Visit'] as const;
export type EngagementType = (typeof ENGAGEMENT_TYPES)[number];

export const ENGAGEMENT_DIRECTIONS = ['Inbound', 'Outbound'] as const;
export type EngagementDirection = (typeof ENGAGEMENT_DIRECTIONS)[number];

export const CONTACT_TIERS = ['Tier 1', 'Tier 2', 'Tier 3'] as const;
export type ContactTier = (typeof CONTACT_TIERS)[number];

export const ENGAGEMENT_TYPE_BADGES: Record<EngagementType, { letter: string; color: string }> = {
  Call:           { letter: 'C',  color: 'bg-blue-500' },
  Email:          { letter: 'E',  color: 'bg-green-500' },
  Meeting:        { letter: 'M',  color: 'bg-purple-500' },
  'Onsite Visit': { letter: 'OV', color: 'bg-db-orange' },
};

export const TIER_COLORS: Record<ContactTier, string> = {
  'Tier 1': 'bg-db-aqua/15 text-db-aqua-dark',
  'Tier 2': 'bg-blue-100 text-blue-700',
  'Tier 3': 'bg-gray-100 text-gray-600',
};
