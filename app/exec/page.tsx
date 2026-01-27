import { prisma } from '@/lib/db';
import ExecDashboard from './exec-dashboard';

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
    const accounts = await prisma.account.findMany({ 
      include: { 
        opportunities: true,
        owner: true
      } 
    });
    
    // Filter out any accounts without owners (defensive check)
    const validAccounts = accounts.filter(acc => acc.owner !== null);
    
    if (validAccounts.length !== accounts.length) {
      console.warn(`Warning: ${accounts.length - validAccounts.length} accounts found without owners`);
    }
  const quarters = {
    cq: getCurrentQuarter(),
    nq: getNextQuarter(),
    fq: getFollowingQuarter()
  };

  // Get latest snapshots for each account and quarter
  const latestByAccount = new Map<string, Record<string, { 
    bestUsd: number; 
    worstUsd: number; 
    callUsd: number; 
    grossCallUsd: number;
    priceIncreaseUsd: number;
    expansionUsd: number;
    notes: string 
  }>>();
  
  for (const account of accounts) {
    const accountSnapshots: Record<string, { 
      bestUsd: number; 
      worstUsd: number; 
      callUsd: number; 
      grossCallUsd: number;
      priceIncreaseUsd: number;
      expansionUsd: number;
      notes: string 
    }> = {};
    
    for (const quarter of Object.values(quarters)) {
      const latestSnap = await prisma.forecastSnapshot.findFirst({
        where: { scopeType: 'Account', scopeName: account.name, quarterKey: quarter },
        orderBy: { createdAt: 'desc' }
      });
      
      if (latestSnap) {
        accountSnapshots[quarter] = {
          bestUsd: (latestSnap.bestCents || 0) / 100,
          worstUsd: (latestSnap.worstCents || 0) / 100,
          callUsd: (latestSnap.callCents || 0) / 100,
          grossCallUsd: (latestSnap.grossCallCents || 0) / 100,
          priceIncreaseUsd: (latestSnap.priceIncreaseCents || 0) / 100,
          expansionUsd: (latestSnap.expansionCents || 0) / 100,
          notes: latestSnap.notes || ''
        };
      }
    }
    
    if (Object.keys(accountSnapshots).length > 0) {
      latestByAccount.set(account.name, accountSnapshots);
    }
  }

  // Get VP forecasts for each quarter
  const vpForecasts = new Map<string, { 
    bestUsd: number; 
    worstUsd: number; 
    callUsd: number; 
    grossCallUsd: number;
    priceIncreaseUsd: number;
    expansionUsd: number;
    notes: string 
  }>();
  
  for (const quarter of Object.values(quarters)) {
    const vpSnap = await prisma.forecastSnapshot.findFirst({
      where: { scopeType: 'VP', scopeName: 'VP Forecast', quarterKey: quarter },
      orderBy: { createdAt: 'desc' }
    });
    
    if (vpSnap) {
      vpForecasts.set(quarter, {
        bestUsd: (vpSnap.bestCents || 0) / 100,
        worstUsd: (vpSnap.worstCents || 0) / 100,
        callUsd: (vpSnap.callCents || 0) / 100,
        grossCallUsd: (vpSnap.grossCallCents || 0) / 100,
        priceIncreaseUsd: (vpSnap.priceIncreaseCents || 0) / 100,
        expansionUsd: (vpSnap.expansionCents || 0) / 100,
        notes: vpSnap.notes || ''
      });
    }
  }

    return { 
      accounts: validAccounts, 
      latestByAccount: Object.fromEntries(latestByAccount), 
      vpForecasts: Object.fromEntries(vpForecasts),
      quarters 
    };
  } catch (error) {
    console.error('Error fetching accounts:', error);
    throw error;
  }
}

export default async function ExecPage() {
  const { accounts, latestByAccount, vpForecasts, quarters } = await getData();
  
  return (
    <main className="mx-auto max-w-6xl p-6">
      <h1 className="text-2xl font-semibold">Executive Dashboard</h1>
      <p className="mt-2 text-gray-600">3-quarter rolling view with VP forecasts and RM rollups.</p>
      <ExecDashboard 
        accounts={accounts} 
        latestByAccount={latestByAccount} 
        vpForecasts={vpForecasts}
        quarters={quarters} 
      />
    </main>
  );
}

