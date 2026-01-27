import { prisma } from '@/lib/db';
import AccountTable from './table';

export const dynamic = 'force-dynamic';

function getCurrentQuarter(): string {
  const now = new Date();
  const year = now.getUTCFullYear();
  const q = Math.floor(now.getUTCMonth() / 3) + 1;
  return `FY${String(year).slice(-2)}-Q${q}`;
}

function getNextQuarter(): string {
  const now = new Date();
  const year = now.getUTCFullYear();
  const q = Math.floor(now.getUTCMonth() / 3) + 1;
  const nextQ = q === 4 ? 1 : q + 1;
  const nextYear = q === 4 ? year + 1 : year;
  return `FY${String(nextYear).slice(-2)}-Q${nextQ}`;
}

function getFollowingQuarter(): string {
  const now = new Date();
  const year = now.getUTCFullYear();
  const q = Math.floor(now.getUTCMonth() / 3) + 1;
  const followingQ = q === 4 ? 2 : q === 3 ? 1 : q + 2;
  const followingYear = q >= 3 ? year + 1 : year;
  return `FY${String(followingYear).slice(-2)}-Q${followingQ}`;
}

async function getData() {
  try {
    // Use a more defensive query - get accounts and owners separately if needed
    const accounts = await prisma.account.findMany({ 
      include: { 
        opportunities: true,
        owner: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
            username: true,
            isActive: true
          }
        }
      } 
    });
    
    // Filter out any accounts without owners (defensive check)
    const validAccounts = accounts.filter(acc => acc.owner !== null);
    
    if (validAccounts.length !== accounts.length) {
      console.warn(`Warning: ${accounts.length - validAccounts.length} accounts found without owners`);
      console.warn('Accounts without owners:', accounts.filter(acc => acc.owner === null).map(a => a.name));
    }
    
    const names = validAccounts.map(a => a.name);
  
  const cq = getCurrentQuarter();
  const nq = getNextQuarter();
  const fq = getFollowingQuarter();
  
  // Get snapshots for all quarters
  const latestByAccount = new Map<string, Record<string, { 
    bestUsd: number; 
    worstUsd: number; 
    callUsd: number; 
    grossCallUsd: number;
    priceIncreaseUsd: number;
    expansionUsd: number;
    confidence: string; 
    notes: string 
  }>>();
  
  for (const accountName of names) {
    const accountSnapshots: Record<string, { 
      bestUsd: number; 
      worstUsd: number; 
      callUsd: number; 
      grossCallUsd: number;
      priceIncreaseUsd: number;
      expansionUsd: number;
      confidence: string; 
      notes: string 
    }> = {};
    
    for (const quarter of [cq, nq, fq]) {
      const latestSnap = await prisma.forecastSnapshot.findFirst({
        where: { scopeType: 'Account', scopeName: accountName, quarterKey: quarter },
        orderBy: { createdAt: 'desc' }
      });
      
      if (latestSnap) {
        console.log(`Loading snapshot for ${accountName} in ${quarter}:`, {
          bestCents: latestSnap.bestCents,
          worstCents: latestSnap.worstCents,
          callCents: latestSnap.callCents,
          grossCallCents: latestSnap.grossCallCents,
          priceIncreaseCents: latestSnap.priceIncreaseCents,
          expansionCents: latestSnap.expansionCents,
          notes: latestSnap.notes
        });
        accountSnapshots[quarter] = {
          bestUsd: (latestSnap.bestCents || 0) / 100,
          worstUsd: (latestSnap.worstCents || 0) / 100,
          callUsd: (latestSnap.callCents || 0) / 100,
          grossCallUsd: (latestSnap.grossCallCents || 0) / 100,
          priceIncreaseUsd: (latestSnap.priceIncreaseCents || 0) / 100,
          expansionUsd: (latestSnap.expansionCents || 0) / 100,
          confidence: latestSnap.confidence || '',
          notes: latestSnap.notes || ''
        };
      }
    }
    
    if (Object.keys(accountSnapshots).length > 0) {
      latestByAccount.set(accountName, accountSnapshots);
    }
  }
  
    return { 
      accounts: validAccounts, 
      latestByAccount: Object.fromEntries(latestByAccount),
      quarters: { cq, nq, fq }
    };
  } catch (error) {
    console.error('Error fetching accounts:', error);
    throw error;
  }
}

function formatUsd(cents: number): string {
  return `$${(cents / 100).toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
}

export default async function RmPage() {
  const { accounts, latestByAccount, quarters } = await getData();
  
  return (
    <main className="mx-auto max-w-6xl p-6">
      <h1 className="text-2xl font-semibold">RM Workspace</h1>
      <p className="mt-2 text-gray-600">3-quarter rolling view: Current, Next, and Following quarters.</p>
      {/* Forecasting occurs at account level; no top-level edit controls */}
      <AccountTable accounts={accounts} latestByAccount={latestByAccount} quarters={quarters} />
    </main>
  );
}

