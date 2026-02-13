import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { STAGE_GATES_FIELD, RENEWAL_STAGES } from '@/lib/renewal-stages';
import type { RenewalStage } from '@/lib/renewal-stages';

/**
 * GET /api/renewal-plans/:planId
 * Returns the renewal plan with its account, owner, and associated opportunities.
 */
export async function GET(
  _req: NextRequest,
  { params }: { params: { planId: string } }
) {
  try {
    const plan = await prisma.renewalPlan.findUnique({
      where: { id: params.planId },
      include: {
        account: {
          include: {
            owner: {
              select: { id: true, firstName: true, lastName: true },
            },
            opportunities: true,
          },
        },
      },
    });

    if (!plan) {
      return new NextResponse('Plan not found', { status: 404 });
    }

    // Filter opportunities to the plan's quarter
    const quarterOpps = plan.account.opportunities.filter(
      (o) => o.quarterKey === plan.quarterKey
    );

    return NextResponse.json({
      ...plan,
      account: {
        ...plan.account,
        opportunities: quarterOpps,
      },
    });
  } catch (err: unknown) {
    console.error('Renewal plan GET failed', err);
    const message = err instanceof Error ? err.message : 'unknown';
    return new NextResponse(`Server error: ${message}`, { status: 500 });
  }
}

/**
 * PATCH /api/renewal-plans/:planId
 * Accepts { field, value } for auto-save on blur.
 * - For gate JSON fields: merges value into existing gates object.
 * - For 'currentStage': validates against RENEWAL_STAGES.
 * - When risk rating gate changes, also updates top-level riskRating column.
 */
export async function PATCH(
  req: NextRequest,
  { params }: { params: { planId: string } }
) {
  try {
    const body = await req.json().catch(() => null);
    if (!body || !body.field) {
      return new NextResponse('Missing field in body', { status: 400 });
    }

    const { field, value } = body;

    // Handle currentStage advancement
    if (field === 'currentStage') {
      if (!RENEWAL_STAGES.includes(value as RenewalStage)) {
        return new NextResponse('Invalid stage', { status: 400 });
      }
      const updated = await prisma.renewalPlan.update({
        where: { id: params.planId },
        data: { currentStage: value },
      });
      return NextResponse.json(updated);
    }

    // Handle notes
    if (field === 'notes') {
      const updated = await prisma.renewalPlan.update({
        where: { id: params.planId },
        data: { notes: value },
      });
      return NextResponse.json(updated);
    }

    // Handle gate JSON fields
    const gateFields = Object.values(STAGE_GATES_FIELD);
    if (gateFields.includes(field)) {
      // Get current plan to merge gates
      const current = await prisma.renewalPlan.findUnique({
        where: { id: params.planId },
      });
      if (!current) {
        return new NextResponse('Plan not found', { status: 404 });
      }

      const currentGates =
        (current[field as keyof typeof current] as Record<string, unknown>) || {};
      const mergedGates = { ...currentGates, ...value };

      // Build update data
      const updateData: Record<string, unknown> = { [field]: mergedGates };

      // If this is the riskRating stage gates and the 'rating' key changed,
      // sync to top-level riskRating column
      if (field === 'riskRatingGates' && value.rating !== undefined) {
        updateData.riskRating = value.rating || null;
      }

      const updated = await prisma.renewalPlan.update({
        where: { id: params.planId },
        data: updateData,
      });
      return NextResponse.json(updated);
    }

    return new NextResponse(`Unknown field: ${field}`, { status: 400 });
  } catch (err: unknown) {
    console.error('Renewal plan PATCH failed', err);
    const message = err instanceof Error ? err.message : 'unknown';
    return new NextResponse(`Server error: ${message}`, { status: 500 });
  }
}
