import { NextRequest, NextResponse } from 'next/server';
import { engagementService } from '@/lib/services';

const ALLOWED_FIELDS = [
  'clientName', 'contactName', 'contactTier', 'authorName',
  'date', 'type', 'direction', 'subject', 'notes', 'followUp', 'pathToExecutive',
];

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

    const updated = await engagementService.updateField(params.id, body.field, value);
    return NextResponse.json(updated);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'unknown';
    return new NextResponse(`Server error: ${message}`, { status: 500 });
  }
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await engagementService.delete(params.id);
    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'unknown';
    return new NextResponse(`Server error: ${message}`, { status: 500 });
  }
}
