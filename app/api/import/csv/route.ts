import { NextRequest, NextResponse } from 'next/server';
import { createHash } from 'crypto';
import { userService, accountService, opportunityService, dataVersionService } from '@/lib/services';
import { toQuarterKey } from '@/lib/quarters';

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

    // Find or create User based on owner name (format: "FirstName LastName")
    let user = null;
    if (owner) {
      const nameParts = owner.trim().split(/\s+/);
      const firstName = nameParts[0] || '';
      const lastName = nameParts.slice(1).join(' ') || '';

      if (firstName && lastName) {
        // Try to find existing user by first and last name
        user = await userService.findByName(firstName, lastName);

        // If not found, create new user
        if (!user) {
          const email = `${firstName.toLowerCase()}.${lastName.toLowerCase().replace(/'/g, '')}@company.com`;
          const username = `${firstName.toLowerCase()}.${lastName.toLowerCase().replace(/'/g, '')}`;
          user = await userService.create({
            firstName,
            lastName,
            email,
            username,
            isActive: true,
          });
        }
      }
    }

    // If no user found/created, skip this record
    if (!user) {
      console.warn(`Skipping record: Could not find or create user for owner "${owner}"`);
      continue;
    }

    let account = await accountService.findByName(accName);

    if (!account) {
      account = await accountService.create({
        name: accName,
        ownerId: user.id,
        region,
        segment,
      });
    } else {
      // Update existing account if needed
      account = await accountService.update(account.id, {
        ownerId: user.id,
        region,
        segment,
      });
    }
    const dt = new Date(renewalDate);
    const cents = Math.round(parseFloat(arrUsd) * 100);
    await opportunityService.create({
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
      termMonths: term ? parseInt(term, 10) : null,
    });
    created++;
  }

  // Record this import in DataVersion
  const hash = createHash('sha256').update(text).digest('hex');
  await dataVersionService.create({
    source: 'CSV',
    hash,
    recordsCount: created,
  });

  return new NextResponse(`Imported ${created} opportunities`, {
    status: 200,
    headers: { 'Content-Type': 'text/plain' }
  });
}
