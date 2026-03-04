import { NextRequest, NextResponse } from 'next/server';
import { forecastLockService } from '@/lib/services';

/**
 * GET /api/forecast/history?rmName=...&quarterKey=...
 * Returns the lock history for an RM + quarter (all weeks).
 */
export async function GET(req: NextRequest) {
  try {
    const rmName = req.nextUrl.searchParams.get('rmName');
    const quarterKey = req.nextUrl.searchParams.get('quarterKey');

    if (!rmName || !quarterKey) {
      return new NextResponse('Missing rmName or quarterKey', { status: 400 });
    }

    const history = await forecastLockService.getHistory(rmName, quarterKey);
    return NextResponse.json(history);
  } catch (err: unknown) {
    console.error('Forecast history failed', err);
    const message = err instanceof Error ? err.message : 'unknown';
    return new NextResponse(`Server error: ${message}`, { status: 500 });
  }
}
