import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

function toQuarterKey(d: Date): string {
  const year = d.getUTCFullYear();
  const month = d.getUTCMonth();
  // Fiscal Q aligned to calendar Q for MVP
  const q = Math.floor(month / 3) + 1;
  const fy = year; // simple FY for MVP
  return `FY${String(fy).slice(-2)}-Q${q}`;
}

function periodKeyWeek(d: Date): string {
  const date = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()));
  // ISO week naive
  const firstThursday = new Date(Date.UTC(date.getUTCFullYear(), 0, 4));
  const dayOfWeek = (date.getUTCDay() + 6) % 7;
  const week1 = new Date(firstThursday);
  week1.setUTCDate(firstThursday.getUTCDate() - ((firstThursday.getUTCDay() + 6) % 7));
  const diff = (date.getTime() - week1.getTime()) / (1000 * 60 * 60 * 24);
  const week = Math.floor(diff / 7) + 1;
  return `${date.getUTCFullYear()}-${String(week).padStart(2, '0')}`;
}

async function main() {
  const rms = ['Alex Lee', 'Jordan Kim', 'Taylor Chen', 'Sam Patel', 'Morgan Diaz'];

  // Create ~20 accounts
  const accounts = await Promise.all(
    Array.from({ length: 20 }).map(async (_, i) => {
      const ownerName = rms[i % rms.length];
      return prisma.account.create({
        data: {
          name: `Acme ${i + 1}`,
          ownerName,
          segment: i % 2 === 0 ? 'Mid-Market' : 'Enterprise',
          region: ['NA', 'EMEA', 'APAC'][i % 3]
        }
      });
    })
  );

  // Create opportunities spread across 3 quarters (CQ, NQ, FQ)
  const now = new Date();
  const opps: any[] = [];
  
  // Current Quarter (CQ) - ~50 opportunities
  for (let i = 0; i < 50; i++) {
    const account = accounts[i % accounts.length];
    const monthsOffset = i % 3; // spread over current quarter
    const renewal = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() + monthsOffset, 15));
    const quarterKey = toQuarterKey(renewal);
    const expiringArrCents = (Math.floor(Math.random() * 90_000) + 10_000) * 100; // $10k-$100k
    const probability = Math.round((0.5 + Math.random() * 0.5) * 100) / 100;
    const healthScore = Math.floor(50 + Math.random() * 50);
    const riskFlag = healthScore < 65 || probability < 0.6;
    opps.push(
      prisma.opportunity.create({
        data: {
          accountId: account.id,
          name: `CQ Renewal ${i + 1}`,
          renewalDate: renewal,
          quarterKey,
          expiringArrCents,
          stage: ['Renewal - Identified', 'Negotiation', 'Closed Won', 'Closed Lost'][i % 4],
          probability,
          healthScore,
          riskFlag,
          productFamily: ['Core', 'Add-on', 'Premium'][i % 3],
          termMonths: [12, 24, 36][i % 3]
        }
      })
    );
  }
  
  // Next Quarter (NQ) - 1 opportunity per RM
  for (let i = 0; i < 5; i++) {
    const account = accounts[i * 4]; // One account per RM
    const renewal = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() + 3 + (i % 3), 15));
    const quarterKey = toQuarterKey(renewal);
    const expiringArrCents = (Math.floor(Math.random() * 90_000) + 10_000) * 100;
    const probability = Math.round((0.5 + Math.random() * 0.5) * 100) / 100;
    const healthScore = Math.floor(50 + Math.random() * 50);
    const riskFlag = healthScore < 65 || probability < 0.6;
    opps.push(
      prisma.opportunity.create({
        data: {
          accountId: account.id,
          name: `NQ Renewal ${i + 1}`,
          renewalDate: renewal,
          quarterKey,
          expiringArrCents,
          stage: 'Renewal - Identified',
          probability,
          healthScore,
          riskFlag,
          productFamily: ['Core', 'Add-on', 'Premium'][i % 3],
          termMonths: [12, 24, 36][i % 3]
        }
      })
    );
  }
  
  // Following Quarter (FQ) - 1 opportunity per RM
  for (let i = 0; i < 5; i++) {
    const account = accounts[i * 4]; // One account per RM
    const renewal = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() + 6 + (i % 3), 15));
    const quarterKey = toQuarterKey(renewal);
    const expiringArrCents = (Math.floor(Math.random() * 90_000) + 10_000) * 100;
    const probability = Math.round((0.5 + Math.random() * 0.5) * 100) / 100;
    const healthScore = Math.floor(50 + Math.random() * 50);
    const riskFlag = healthScore < 65 || probability < 0.6;
    opps.push(
      prisma.opportunity.create({
        data: {
          accountId: account.id,
          name: `FQ Renewal ${i + 1}`,
          renewalDate: renewal,
          quarterKey,
          expiringArrCents,
          stage: 'Renewal - Identified',
          probability,
          healthScore,
          riskFlag,
          productFamily: ['Core', 'Add-on', 'Premium'][i % 3],
          termMonths: [12, 24, 36][i % 3]
        }
      })
    );
  }
  
  await Promise.all(opps);

  // Clear existing snapshots first
  await prisma.forecastSnapshot.deleteMany({});
  
  // Create account-level snapshots for all quarters with Best/Worst/Call = ARR up for renewal
  const snapshots: any[] = [];
  
  // Get all opportunities grouped by account and quarter
  const allOpps = await prisma.opportunity.findMany();
  const oppsByAccountAndQuarter = new Map<string, Map<string, number>>();
  
  for (const opp of allOpps) {
    const account = await prisma.account.findUnique({ where: { id: opp.accountId } });
    if (!account) continue;
    
    const key = account.name;
    if (!oppsByAccountAndQuarter.has(key)) {
      oppsByAccountAndQuarter.set(key, new Map());
    }
    
    const quarterMap = oppsByAccountAndQuarter.get(key)!;
    const currentArr = quarterMap.get(opp.quarterKey) || 0;
    quarterMap.set(opp.quarterKey, currentArr + opp.expiringArrCents);
  }
  
  // Create snapshots for each account/quarter combination
  const confidenceOptions = ['Commit', 'Likely', 'Upside', 'At Risk', 'Churn'];
  for (const [accountName, quarterMap] of oppsByAccountAndQuarter) {
    for (const [quarterKey, arrUpCents] of quarterMap) {
      // Randomly assign confidence levels for variety
      const confidence = confidenceOptions[Math.floor(Math.random() * confidenceOptions.length)];
      snapshots.push(
        prisma.forecastSnapshot.create({
          data: {
            scopeType: 'Account',
            scopeName: accountName,
            quarterKey: quarterKey,
            periodKey: periodKeyWeek(new Date()),
            forQuarter: quarterKey.includes('Q1') || quarterKey.includes('Q2') ? 'CQ' : 'NQ',
            bestCents: arrUpCents, // Set equal to ARR up
            worstCents: arrUpCents, // Set equal to ARR up
            callCents: arrUpCents, // Set equal to ARR up
            confidencePct: 75,
            confidence: confidence,
            notes: 'Initial seed - Best/Worst/Call = ARR up for testing',
            createdBy: 'Seed Script'
          }
        })
      );
    }
  }
  
  await Promise.all(snapshots);

  console.log('Seed complete');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });


