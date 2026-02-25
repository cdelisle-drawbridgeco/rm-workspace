export const MEETING_TYPES = [
  'Call',
  'Email',
  'In-Person',
  'QBR',
  'Executive Briefing',
  'Check-in',
  'Other',
] as const;

export type MeetingType = (typeof MEETING_TYPES)[number];

export const TEMPERATURE_OPTIONS = ['Hot', 'Warm', 'Cool', 'Cold'] as const;
export type Temperature = (typeof TEMPERATURE_OPTIONS)[number];

export const TEMPERATURE_COLORS: Record<
  Temperature,
  { idle: string; active: string }
> = {
  Hot: {
    idle: 'bg-red-100 text-red-700',
    active: 'bg-red-500 text-white',
  },
  Warm: {
    idle: 'bg-orange-100 text-orange-700',
    active: 'bg-orange-500 text-white',
  },
  Cool: {
    idle: 'bg-blue-100 text-blue-700',
    active: 'bg-blue-500 text-white',
  },
  Cold: {
    idle: 'bg-gray-200 text-gray-600',
    active: 'bg-gray-500 text-white',
  },
};

export const MEETING_TYPE_BADGES: Record<
  MeetingType,
  { letter: string; color: string }
> = {
  Call: { letter: 'C', color: 'bg-blue-500' },
  Email: { letter: 'E', color: 'bg-green-500' },
  'In-Person': { letter: 'IP', color: 'bg-purple-500' },
  QBR: { letter: 'Q', color: 'bg-db-orange' },
  'Executive Briefing': { letter: 'EB', color: 'bg-red-500' },
  'Check-in': { letter: 'CI', color: 'bg-db-aqua-dark' },
  Other: { letter: 'O', color: 'bg-gray-500' },
};
