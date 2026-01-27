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
  // Clear existing data
  await prisma.forecastSnapshot.deleteMany({});
  await prisma.opportunity.deleteMany({});
  await prisma.account.deleteMany({});
  await prisma.user.deleteMany({});

  // Create the 7 RMs (mimicking Salesforce User structure)
  const rmNames = [
    { firstName: 'Mike', lastName: 'Sullivan' },
    { firstName: 'Tim', lastName: 'O\'Leary' },
    { firstName: 'Jake', lastName: 'Myers' },
    { firstName: 'Casey', lastName: 'Hays' },
    { firstName: 'Keiran', lastName: 'Sloane' },
    { firstName: 'Michael', lastName: 'Bealey' },
    { firstName: 'Taylor', lastName: 'McGranahan' }
  ];

  const users = await Promise.all(
    rmNames.map(async (rm) => {
      const email = `${rm.firstName.toLowerCase()}.${rm.lastName.toLowerCase().replace(/'/g, '')}@company.com`;
      const username = `${rm.firstName.toLowerCase()}.${rm.lastName.toLowerCase().replace(/'/g, '')}`;
      return prisma.user.create({
        data: {
          firstName: rm.firstName,
          lastName: rm.lastName,
          email,
          username,
          isActive: true
        }
      });
    })
  );

  // Create accounts with hedge fund and private equity company names
  const companyNames = [
    // Hedge Funds
    'Blackstone Capital Partners',
    'Bridgewater Associates',
    'Renaissance Technologies',
    'Two Sigma Investments',
    'Citadel LLC',
    'Millennium Management',
    'AQR Capital Management',
    'D.E. Shaw & Co.',
    'Point72 Asset Management',
    'Tiger Global Management',
    // Private Equity
    'KKR & Co.',
    'Apollo Global Management',
    'Carlyle Group',
    'TPG Capital',
    'Bain Capital',
    'Warburg Pincus',
    'General Atlantic',
    'Silver Lake Partners',
    'Thoma Bravo',
    'Vista Equity Partners'
  ];

  // Find Jake Myers (he will own all Growth accounts)
  const jakeMyers = users.find(u => u.firstName === 'Jake' && u.lastName === 'Myers');
  if (!jakeMyers) {
    throw new Error('Jake Myers not found in users');
  }

  // Create accounts - we'll assign segments and owners after creating opportunities
  // For now, create accounts with temporary owners (will update after)
  const accounts = await Promise.all(
    companyNames.map(async (name, i) => {
      const owner = users[i % users.length];
      return prisma.account.create({
        data: {
          name: name,
          ownerId: owner.id,
          segment: i < 10 ? 'Hedge Fund' : 'Private Equity', // Temporary, will update
          region: ['NA', 'EMEA', 'APAC'][i % 3]
        }
      });
    })
  );

  // Create opportunities for 2026 quarters
  const year2026 = 2026;
  const opps: any[] = [];
  
  // Q1 2026 (FY26-Q1) - Current Quarter
  for (let i = 0; i < accounts.length; i++) {
    const account = accounts[i];
    // Spread renewal dates across Q1 (Jan, Feb, Mar)
    const month = i % 3; // 0=Jan, 1=Feb, 2=Mar
    const renewal = new Date(Date.UTC(year2026, month, 15));
    const quarterKey = 'FY26-Q1';
    // $8,000 to $105,000 in cents
    const expiringArrCents = Math.floor((Math.random() * 97_000 + 8_000) * 100);
    const probability = Math.round((0.5 + Math.random() * 0.5) * 100) / 100;
    const healthScore = Math.floor(50 + Math.random() * 50);
    const riskFlag = healthScore < 65 || probability < 0.6;
    opps.push(
      prisma.opportunity.create({
        data: {
          accountId: account.id,
          name: `${account.name} - Q1 Renewal`,
          renewalDate: renewal,
          quarterKey,
          expiringArrCents,
          stage: ['Renewal - Identified', 'Negotiation', 'Closed Won'][i % 3],
          probability,
          healthScore,
          riskFlag,
          productFamily: ['Core', 'Add-on', 'Premium'][i % 3],
          termMonths: [12, 24, 36][i % 3]
        }
      })
    );
  }
  
  // Q2 2026 (FY26-Q2) - Next Quarter
  for (let i = 0; i < accounts.length; i++) {
    const account = accounts[i];
    // Spread renewal dates across Q2 (Apr, May, Jun)
    const month = 3 + (i % 3); // 3=Apr, 4=May, 5=Jun
    const renewal = new Date(Date.UTC(year2026, month, 15));
    const quarterKey = 'FY26-Q2';
    // $8,000 to $105,000 in cents
    const expiringArrCents = Math.floor((Math.random() * 97_000 + 8_000) * 100);
    const probability = Math.round((0.5 + Math.random() * 0.5) * 100) / 100;
    const healthScore = Math.floor(50 + Math.random() * 50);
    const riskFlag = healthScore < 65 || probability < 0.6;
    opps.push(
      prisma.opportunity.create({
        data: {
          accountId: account.id,
          name: `${account.name} - Q2 Renewal`,
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
  
  // Q3 2026 (FY26-Q3) - Following Quarter
  for (let i = 0; i < accounts.length; i++) {
    const account = accounts[i];
    // Spread renewal dates across Q3 (Jul, Aug, Sep)
    const month = 6 + (i % 3); // 6=Jul, 7=Aug, 8=Sep
    const renewal = new Date(Date.UTC(year2026, month, 15));
    const quarterKey = 'FY26-Q3';
    // $8,000 to $105,000 in cents
    const expiringArrCents = Math.floor((Math.random() * 97_000 + 8_000) * 100);
    const probability = Math.round((0.5 + Math.random() * 0.5) * 100) / 100;
    const healthScore = Math.floor(50 + Math.random() * 50);
    const riskFlag = healthScore < 65 || probability < 0.6;
    opps.push(
      prisma.opportunity.create({
        data: {
          accountId: account.id,
          name: `${account.name} - Q3 Renewal`,
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
  
  // Calculate total ARR per account and update segments/owners based on business logic
  // Rule: Accounts with total ARR < $20k are 'Growth' and owned by Jake Myers
  const allOpportunities = await prisma.opportunity.findMany();
  const arrByAccount = new Map<string, number>();
  
  for (const opp of allOpportunities) {
    const currentArr = arrByAccount.get(opp.accountId) || 0;
    arrByAccount.set(opp.accountId, currentArr + opp.expiringArrCents);
  }
  
  // Update accounts: assign segment and owner based on total ARR
  for (const account of accounts) {
    const totalArrCents = arrByAccount.get(account.id) || 0;
    const totalArrDollars = totalArrCents / 100;
    const isGrowth = totalArrDollars < 20_000;
    
    await prisma.account.update({
      where: { id: account.id },
      data: {
        segment: isGrowth ? 'Growth' : 'Enterprise',
        ownerId: isGrowth ? jakeMyers.id : account.ownerId // Jake Myers for Growth, keep original for Enterprise
      }
    });
    
    // If account is Growth, update all its opportunities to ensure they're under Jake Myers
    if (isGrowth) {
      await prisma.opportunity.updateMany({
        where: { accountId: account.id },
        data: {
          // Opportunities are already linked to account, so they'll inherit the account's owner
        }
      });
    }
  }
  
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
  // Best/Worst/Call are all set equal to the opportunity value (ARR up for renewal)
  const confidenceOptions = ['Commit', 'Likely', 'Upside', 'At Risk', 'Churn'];
  for (const [accountName, quarterMap] of oppsByAccountAndQuarter) {
    for (const [quarterKey, arrUpCents] of quarterMap) {
      // Randomly assign confidence levels for variety
      const confidence = confidenceOptions[Math.floor(Math.random() * confidenceOptions.length)];
      
      // Determine forQuarter based on quarter key
      let forQuarter = 'CQ';
      if (quarterKey === 'FY26-Q1') forQuarter = 'CQ';
      else if (quarterKey === 'FY26-Q2') forQuarter = 'NQ';
      else if (quarterKey === 'FY26-Q3') forQuarter = 'FQ';
      
      snapshots.push(
        prisma.forecastSnapshot.create({
          data: {
            scopeType: 'Account',
            scopeName: accountName,
            quarterKey: quarterKey,
            periodKey: periodKeyWeek(new Date()),
            forQuarter: forQuarter,
            bestCents: arrUpCents, // Set equal to ARR up
            worstCents: arrUpCents, // Set equal to ARR up
            callCents: arrUpCents, // Set equal to ARR up
            confidencePct: 75,
            confidence: confidence,
            notes: 'Seed data - Best/Worst/Call = ARR up for renewal',
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


