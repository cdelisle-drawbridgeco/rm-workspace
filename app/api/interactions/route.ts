import { NextRequest, NextResponse } from 'next/server';
import { interactionService } from '@/lib/services';

/**
 * GET /api/interactions?accountId=xxx
 * Returns interactions for an account, newest first.
 */
export async function GET(req: NextRequest) {
  try {
    const accountId = req.nextUrl.searchParams.get('accountId');
    if (!accountId) {
      return new NextResponse('Missing accountId', { status: 400 });
    }

    const interactions = await interactionService.findByAccount(accountId);
    return NextResponse.json(interactions);
  } catch (err: unknown) {
    console.error('Interactions GET failed', err);
    const message = err instanceof Error ? err.message : 'unknown';
    return new NextResponse(`Server error: ${message}`, { status: 500 });
  }
}

/**
 * POST /api/interactions
 * Creates a new interaction.
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => null);
    if (!body?.accountId || !body?.type || !body?.notes) {
      return new NextResponse('Missing required fields (accountId, type, notes)', {
        status: 400,
      });
    }

    const interaction = await interactionService.create({
      accountId: body.accountId,
      authorId: body.authorId,
      date: body.date ? new Date(body.date) : undefined,
      type: body.type,
      notes: body.notes,
      temperature: body.temperature || null,
      riskFlag: body.riskFlag || false,
      followUp: body.followUp || null,
      participants: body.participants || null,
    });

    return NextResponse.json(interaction);
  } catch (err: unknown) {
    console.error('Interactions POST failed', err);
    const message = err instanceof Error ? err.message : 'unknown';
    return new NextResponse(`Server error: ${message}`, { status: 500 });
  }
}
