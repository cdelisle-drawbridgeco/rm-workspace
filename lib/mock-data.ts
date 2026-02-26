/**
 * Seeded PRNG mock data generator.
 * Keyed by accountId for deterministic output — same values on every render.
 * Replace individual fields with real data as integrations are built.
 */

function seededRandom(seed: string): () => number {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    const char = seed.charCodeAt(i);
    hash = ((hash << 5) - hash + char) | 0;
  }
  return () => {
    hash = (hash * 16807 + 0) % 2147483647;
    return (hash & 0x7fffffff) / 0x7fffffff;
  };
}

export interface MockAccountData {
  entitlements: number;
  loggedInUsers180d: number;
  openCases: number;
  staleCases: number;
  hasExecSponsor: boolean;
  nextScheduledQbr: string | null;
  platformScore: number;
  unresponsive: boolean;
}

export function generateMockData(accountId: string): MockAccountData {
  const rand = seededRandom(accountId);

  const entitlements = Math.floor(rand() * 12) + 1;
  const loggedInUsers180d = Math.floor(rand() * 80) + 5;
  const openCases = rand() > 0.6 ? Math.floor(rand() * 5) + 1 : 0;
  const staleCases = openCases > 0 && rand() > 0.5 ? Math.floor(rand() * openCases) + 1 : 0;
  const hasExecSponsor = rand() > 0.35;
  const platformScore = Math.floor(rand() * 60) + 40; // 40-100

  // Next scheduled QBR: 30-180 days from "today" for ~70% of accounts
  let nextScheduledQbr: string | null = null;
  if (rand() > 0.3) {
    const daysOut = Math.floor(rand() * 150) + 30;
    const d = new Date();
    d.setDate(d.getDate() + daysOut);
    nextScheduledQbr = d.toISOString();
  }

  const unresponsive = rand() > 0.85;

  return {
    entitlements,
    loggedInUsers180d,
    openCases,
    staleCases,
    hasExecSponsor,
    nextScheduledQbr,
    platformScore,
    unresponsive,
  };
}
