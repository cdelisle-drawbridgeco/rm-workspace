import { NextRequest, NextResponse } from 'next/server';
import { renewalPlanService } from '@/lib/services';

/**
 * POST /api/renewal-plans/create
 * Lazy-creates a renewal plan for the given account + quarter (upsert).
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => null);
    if (!body?.accountId || !body?.quarterKey) {
      return new NextResponse('Missing accountId or quarterKey', {
        status: 400,
      });
    }

    const plan = await renewalPlanService.upsert(body.accountId, body.quarterKey);
    return NextResponse.json(plan);
  } catch (err: unknown) {
    console.error('Renewal plan create failed', err);
    const message = err instanceof Error ? err.message : 'unknown';
    return new NextResponse(`Server error: ${message}`, { status: 500 });
  }
}
