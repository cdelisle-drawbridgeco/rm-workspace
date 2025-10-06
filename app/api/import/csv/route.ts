import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

function toQuarterKey(d: Date): string {
  const year = d.getUTCFullYear();
  const q = Math.floor(d.getUTCMonth() / 3) + 1;
  return `FY${String(year).slice(-2)}-Q${q}`;
}

export async function POST(req: NextRequest) {
  const text = await req.text();
  if (!text.trim()) return new NextResponse('Empty CSV', { status: 400 });
  const lines = text.trim().split(/\r?\n/);
  const header = lines.shift();
  if (!header) return new NextResponse('Missing header', { status: 400 });
  const expected = [
    'Account Name','Opportunity Name','Renewal Date','Expiring ARR','Stage','Probability','Health Score','Risk Flag','Product Family','Term Months','Owner Name','Region','Segment'
  ];
  const cols = header.split(',').map(s => s.trim());
  if (expected.some((e, i) => cols[i] !== e)) {
    return new NextResponse('Unexpected header format', { status: 400 });
  }

  let created = 0;
  for (const line of lines) {
    if (!line.trim()) continue;
    const [accName, oppName, renewalDate, arrUsd, stage, prob, health, risk, product, term, owner, region, segment] = line.split(',').map(s => s.trim());
    let account = await prisma.account.findFirst({
      where: { name: accName }
    });
    
    if (!account) {
      account = await prisma.account.create({
        data: { name: accName, ownerName: owner, region, segment }
      });
    } else {
      // Update existing account if needed
      account = await prisma.account.update({
        where: { id: account.id },
        data: { ownerName: owner, region, segment }
      });
    }
    const dt = new Date(renewalDate);
    const cents = Math.round(parseFloat(arrUsd) * 100);
    await prisma.opportunity.create({
      data: {
        accountId: account.id,
        name: oppName,
        renewalDate: dt,
        quarterKey: toQuarterKey(dt),
        expiringArrCents: cents,
        stage,
        probability: prob ? parseFloat(prob) : null,
        healthScore: health ? parseInt(health, 10) : null,
        riskFlag: risk?.toLowerCase() === 'true',
        productFamily: product || null,
        termMonths: term ? parseInt(term, 10) : null
      }
    });
    created++;
  }

  return NextResponse.text(`Imported ${created} opportunities`);
}

