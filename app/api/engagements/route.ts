import { NextRequest, NextResponse } from 'next/server';
import { engagementService } from '@/lib/services';

export async function GET(req: NextRequest) {
  try {
    const authorName = req.nextUrl.searchParams.get('authorName') || undefined;
    const engagements = await engagementService.findAll(authorName);
    return NextResponse.json(engagements);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'unknown';
    return new NextResponse(`Server error: ${message}`, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => null);
    const required = ['clientName', 'contactName', 'contactTier', 'authorName', 'type', 'direction', 'subject', 'notes'];
    const missing = required.filter((f) => !body?.[f]?.trim());
    if (missing.length) {
      return new NextResponse(`Missing required fields: ${missing.join(', ')}`, { status: 400 });
    }

    const engagement = await engagementService.create({
      clientName: body.clientName.trim(),
      contactName: body.contactName.trim(),
      contactTier: body.contactTier,
      authorName: body.authorName.trim(),
      date: body.date ? new Date(body.date) : new Date(),
      type: body.type,
      direction: body.direction,
      subject: body.subject.trim(),
      notes: body.notes.trim(),
      followUp: body.followUp?.trim() || null,
      pathToExecutive: body.pathToExecutive?.trim() || null,
    });

    return NextResponse.json(engagement);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'unknown';
    return new NextResponse(`Server error: ${message}`, { status: 500 });
  }
}
