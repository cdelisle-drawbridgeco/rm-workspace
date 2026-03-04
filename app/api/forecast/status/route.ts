import { NextRequest, NextResponse } from 'next/server';
import { forecastLockService } from '@/lib/services';
import { periodKeyWeek } from '@/lib/quarters';

/**
 * GET /api/forecast/status?rmName=...&quarterKey=...
 * Returns the current week's lock status for an RM + quarter.
 */
export async function GET(req: NextRequest) {
  try {
    const rmName = req.nextUrl.searchParams.get('rmName');
    const quarterKey = req.nextUrl.searchParams.get('quarterKey');

    if (!rmName || !quarterKey) {
      return new NextResponse('Missing rmName or quarterKey', { status: 400 });
    }

    const periodKey = periodKeyWeek(new Date());
    const lock = await forecastLockService.getStatus(rmName, quarterKey, periodKey);

    return NextResponse.json(lock || { status: 'draft', periodKey });
  } catch (err: unknown) {
    console.error('Forecast status failed', err);
    const message = err instanceof Error ? err.message : 'unknown';
    return new NextResponse(`Server error: ${message}`, { status: 500 });
  }
}
