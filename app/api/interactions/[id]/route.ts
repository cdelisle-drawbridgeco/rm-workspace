import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

const ALLOWED_FIELDS = [
  'notes',
  'type',
  'temperature',
  'riskFlag',
  'followUp',
  'participants',
  'date',
];

/**
 * PATCH /api/interactions/:id
 * Accepts { field, value } for auto-save.
 */
export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await req.json().catch(() => null);
    if (!body?.field) {
      return new NextResponse('Missing field in body', { status: 400 });
    }

    if (!ALLOWED_FIELDS.includes(body.field)) {
      return new NextResponse(`Unknown field: ${body.field}`, { status: 400 });
    }

    let value = body.value;
    if (body.field === 'date') value = new Date(body.value);

    const updated = await prisma.clientInteraction.update({
      where: { id: params.id },
      data: { [body.field]: value },
      include: {
        author: { select: { id: true, firstName: true, lastName: true } },
      },
    });

    return NextResponse.json(updated);
  } catch (err: unknown) {
    console.error('Interaction PATCH failed', err);
    const message = err instanceof Error ? err.message : 'unknown';
    return new NextResponse(`Server error: ${message}`, { status: 500 });
  }
}

/**
 * DELETE /api/interactions/:id
 */
export async function DELETE(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.clientInteraction.delete({ where: { id: params.id } });
    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    console.error('Interaction DELETE failed', err);
    const message = err instanceof Error ? err.message : 'unknown';
    return new NextResponse(`Server error: ${message}`, { status: 500 });
  }
}
