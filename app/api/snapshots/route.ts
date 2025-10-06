import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

function toQuarterKey(d: Date): string {
  const year = d.getUTCFullYear();
  const q = Math.floor(d.getUTCMonth() / 3) + 1;
  return `FY${String(year).slice(-2)}-Q${q}`;
}

function periodKeyWeek(d: Date): string {
  const date = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()));
  const firstThursday = new Date(Date.UTC(date.getUTCFullYear(), 0, 4));
  const dayOfWeek = (date.getUTCDay() + 6) % 7;
  const week1 = new Date(firstThursday);
  week1.setUTCDate(firstThursday.getUTCDate() - ((firstThursday.getUTCDay() + 6) % 7));
  const diff = (date.getTime() - week1.getTime()) / (1000 * 60 * 60 * 24);
  const week = Math.floor(diff / 7) + 1;
  return `${date.getUTCFullYear()}-${String(week).padStart(2, '0')}`;
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json().catch(() => null)) as any;
    if (!body) return new NextResponse('Bad JSON', { status: 400 });
    const { scopeType = 'RM', scopeName, best, worst, call, confidencePct, notes, quarterKey } = body;
    if (!scopeName) return new NextResponse('Missing scopeName', { status: 400 });
    const b = Number(best);
    const w = Number(worst);
    const c = Number(call);
    if (Number.isNaN(b) || Number.isNaN(w) || Number.isNaN(c)) {
      return new NextResponse('Best/Worst/Call must be numbers (USD)', { status: 400 });
    }
    const now = new Date();
    const toCents = (v: number) => Math.round(v * 100);
    const snap = await prisma.forecastSnapshot.create({
      data: {
        scopeType,
        scopeName,
        quarterKey: quarterKey || toQuarterKey(now),
        periodKey: periodKeyWeek(now),
        forQuarter: quarterKey ? (quarterKey.includes('Q1') || quarterKey.includes('Q2') ? 'CQ' : 'NQ') : 'CQ',
        bestCents: toCents(b),
        worstCents: toCents(w),
        callCents: toCents(c),
        confidencePct: confidencePct != null ? Number(confidencePct) : null,
        notes: notes || null,
        createdBy: scopeName
      }
    });
    console.log('Created snapshot:', {
      scopeType,
      scopeName,
      bestCents: snap.bestCents,
      worstCents: snap.worstCents,
      callCents: snap.callCents,
      notes: snap.notes
    });
    return NextResponse.json(snap);
  } catch (err: any) {
    console.error('Snapshot create failed', err);
    return new NextResponse(`Server error: ${err?.message || 'unknown'}`, { status: 500 });
  }
}

