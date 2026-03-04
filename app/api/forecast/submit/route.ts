import { NextRequest, NextResponse } from 'next/server';
import { forecastLockService } from '@/lib/services';
import { periodKeyWeek } from '@/lib/quarters';
import type { AccountForecastSnapshot } from '@/lib/services';

/**
 * POST /api/forecast/submit
 * Submits the weekly forecast for an RM.
 * Body: { rmName, quarterKey, accounts: [{ accountId, accountName, best, worst, grossCall, priceIncrease, expansion, call, confidence, notes }] }
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => null);
    if (!body?.rmName || !body?.quarterKey || !Array.isArray(body?.accounts)) {
      return new NextResponse(
        'Missing required fields (rmName, quarterKey, accounts[])',
        { status: 400 }
      );
    }

    const periodKey = periodKeyWeek(new Date());

    const snapshotData: AccountForecastSnapshot[] = body.accounts.map(
      (a: AccountForecastSnapshot) => ({
        accountId: a.accountId,
        accountName: a.accountName,
        best: a.best,
        worst: a.worst,
        grossCall: a.grossCall,
        priceIncrease: a.priceIncrease,
        expansion: a.expansion,
        call: a.call,
        confidence: a.confidence,
        notes: a.notes,
      })
    );

    const lock = await forecastLockService.submit({
      rmName: body.rmName,
      quarterKey: body.quarterKey,
      periodKey,
      snapshotData,
    });

    return NextResponse.json(lock);
  } catch (err: unknown) {
    console.error('Forecast submit failed', err);
    const message = err instanceof Error ? err.message : 'unknown';
    return new NextResponse(`Server error: ${message}`, { status: 500 });
  }
}
