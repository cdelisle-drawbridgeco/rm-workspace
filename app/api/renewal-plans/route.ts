import { NextRequest, NextResponse } from 'next/server';
import { accountService } from '@/lib/services';

/**
 * GET /api/renewal-plans?quarterKey=FY26-Q1
 * Returns all accounts with renewals in the given quarter, along with their renewal plans.
 */
export async function GET(req: NextRequest) {
  try {
    const quarterKey = req.nextUrl.searchParams.get('quarterKey');
    if (!quarterKey) {
      return new NextResponse('Missing quarterKey', { status: 400 });
    }

    const accounts = await accountService.findByQuarter(quarterKey);

    // Flatten: each account gets its plan (or null) + aggregated ARR
    const results = accounts.map((acc) => {
      const plan = acc.renewalPlans[0] || null;
      const combinedArrCents = acc.opportunities.reduce(
        (sum, o) => sum + o.expiringArrCents,
        0
      );
      return {
        accountId: acc.id,
        accountName: acc.name,
        owner: acc.owner,
        opportunityCount: acc.opportunities.length,
        combinedArrCents,
        opportunities: acc.opportunities,
        plan,
      };
    });

    return NextResponse.json(results);
  } catch (err: unknown) {
    console.error('Renewal plans GET failed', err);
    const message = err instanceof Error ? err.message : 'unknown';
    return new NextResponse(`Server error: ${message}`, { status: 500 });
  }
}
