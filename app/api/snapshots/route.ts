import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { toQuarterKey, periodKeyWeek } from '@/lib/quarters';

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json().catch(() => null)) as any;
    if (!body) return new NextResponse('Bad JSON', { status: 400 });
    const {
      scopeType = 'RM',
      scopeName,
      best,
      worst,
      call, // Legacy: if provided, will be ignored in favor of components
      grossCall,
      priceIncrease,
      expansion,
      confidencePct,
      confidence,
      notes,
      quarterKey
    } = body;
    if (!scopeName) return new NextResponse('Missing scopeName', { status: 400 });
    const b = Number(best);
    const w = Number(worst);

    // Handle Call components: if provided, use them; otherwise fall back to legacy 'call' field
    let grossCallCents = 0;
    let priceIncreaseCents = 0;
    let expansionCents = 0;

    if (grossCall !== undefined || priceIncrease !== undefined || expansion !== undefined) {
      // New format: use components
      grossCallCents = Math.round((Number(grossCall) || 0) * 100);
      priceIncreaseCents = Math.round((Number(priceIncrease) || 0) * 100);
      expansionCents = Math.round((Number(expansion) || 0) * 100);
    } else if (call !== undefined) {
      // Legacy format: all call value goes to grossCall
      grossCallCents = Math.round(Number(call) * 100);
      priceIncreaseCents = 0;
      expansionCents = 0;
    }

    // Compute callCents as sum of components
    const callCents = grossCallCents + priceIncreaseCents + expansionCents;

    if (Number.isNaN(b) || Number.isNaN(w)) {
      return new NextResponse('Best/Worst must be numbers (USD)', { status: 400 });
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
        callCents: callCents,
        grossCallCents: grossCallCents,
        priceIncreaseCents: priceIncreaseCents,
        expansionCents: expansionCents,
        confidencePct: confidencePct != null ? Number(confidencePct) : null,
        confidence: confidence || null,
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
      grossCallCents: snap.grossCallCents,
      priceIncreaseCents: snap.priceIncreaseCents,
      expansionCents: snap.expansionCents,
      notes: snap.notes
    });
    return NextResponse.json(snap);
  } catch (err: any) {
    console.error('Snapshot create failed', err);
    return new NextResponse(`Server error: ${err?.message || 'unknown'}`, { status: 500 });
  }
}
