'use client';

import React from 'react';
import {
  HeroSection,
  SectionHeading,
  SubSection,
  CharacteristicCard,
  DrawbridgeAngle,
  LastUpdated,
} from '../../components/shared-ui';

export default function RenewalPlanBestPractices() {
  return (
    <>
      <HeroSection
        icon="📋"
        title="Renewal Plan Best Practices"
        subtitle="How to run your renewal pipeline with the rigor of a sales pipeline — proactive, structured, and always moving forward."
      />
      <LastUpdated date="February 24, 2026 at 9:04 PM" />

      {/* Pipeline Mindset */}
      <SectionHeading>The Pipeline Mindset</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed">
        A renewal is not an event — it&apos;s a <strong>process that starts months before the
        contract expires</strong>. The best RMs treat every renewal like a deal in a sales
        pipeline: it has stages, milestones, risk signals, and a close plan. The renewal
        plan is your deal sheet — it keeps you organized, accountable, and ahead of the
        timeline.
      </p>
      <p className="mt-3 text-sm text-gray-700 leading-relaxed">
        The 7-stage renewal workflow in Drawbridge is designed to mirror this pipeline
        approach. Each stage has specific gates (tasks) that must be completed before
        moving forward. Skipping stages is like skipping discovery in a sales process —
        you might get lucky, but you&apos;ll eventually lose a deal you shouldn&apos;t have.
      </p>

      {/* Timeline */}
      <SectionHeading>Renewal Timeline — When to Start What</SectionHeading>
      <div className="rounded-lg border border-gray-200 bg-white overflow-hidden">
        <div className="grid grid-cols-1 divide-y divide-gray-100">
          <div className="flex items-start gap-4 p-4">
            <div className="shrink-0 w-24 text-center">
              <p className="text-xs font-semibold text-gray-400">START</p>
              <p className="text-lg font-bold font-heading text-db-dark">120+ days</p>
            </div>
            <div>
              <p className="font-semibold text-db-dark">Discovery & Health Check</p>
              <p className="mt-1 text-sm text-gray-600">
                Begin the renewal plan. Pull usage data, review support tickets, check
                stakeholder changes. Open the plan in Drawbridge, complete Stage 1 gates.
                The goal: understand where you stand <em>before</em> you talk to the client.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4">
            <div className="shrink-0 w-24 text-center">
              <p className="text-xs font-semibold text-gray-400">ENGAGE</p>
              <p className="text-lg font-bold font-heading text-db-dark">90 days</p>
            </div>
            <div>
              <p className="font-semibold text-db-dark">Stakeholder Engagement</p>
              <p className="mt-1 text-sm text-gray-600">
                Schedule the renewal conversation with your champion and economic buyer.
                Present the value delivered (DDQs completed, incidents handled, compliance
                maintained). Surface any concerns early. Complete Stages 2–3.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4">
            <div className="shrink-0 w-24 text-center">
              <p className="text-xs font-semibold text-gray-400">PROPOSE</p>
              <p className="text-lg font-bold font-heading text-db-dark">60 days</p>
            </div>
            <div>
              <p className="font-semibold text-db-dark">Proposal & Negotiation</p>
              <p className="mt-1 text-sm text-gray-600">
                Deliver the renewal proposal. Include scope, pricing, any expansion
                opportunities. Be prepared for negotiation — have your walk-away and your
                stretch targets defined. Complete Stages 4–5.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4">
            <div className="shrink-0 w-24 text-center">
              <p className="text-xs font-semibold text-gray-400">CLOSE</p>
              <p className="text-lg font-bold font-heading text-db-dark">30 days</p>
            </div>
            <div>
              <p className="font-semibold text-db-dark">Contract & Signature</p>
              <p className="mt-1 text-sm text-gray-600">
                Finalize terms, route the contract through legal, get the signature.
                If you&apos;re still in negotiation at 30 days, escalate — this is a red flag.
                Complete Stages 6–7 and close the plan.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Working the Plan */}
      <SectionHeading>Working the Plan — Stage by Stage</SectionHeading>
      <SubSection icon="1️⃣" title="Pre-Renewal Assessment">
        <p>
          This is your <strong>discovery phase</strong>. Before you reach out to the client,
          do your homework:
        </p>
        <ul className="list-disc ml-5 space-y-1">
          <li>Review the current contract scope and pricing</li>
          <li>Pull usage and engagement data — are they using everything they&apos;re paying for?</li>
          <li>Check support ticket history — any unresolved issues?</li>
          <li>Review DDQ completion rates, assessment scores, and deliverable status</li>
          <li>Confirm your stakeholder map — who&apos;s the champion, the economic buyer, the blocker?</li>
        </ul>
        <p>
          <strong>Red flags at this stage:</strong> Low engagement, unresolved support issues,
          champion departure, M&A activity, budget freezes. If you find these, adjust your
          forecast accordingly and start strategizing early.
        </p>
      </SubSection>

      <SubSection icon="2️⃣" title="Stakeholder Mapping & Engagement">
        <p>
          Know your <strong>buying committee</strong>. In alternative asset management, the
          decision-making structure typically looks like:
        </p>
        <ul className="list-disc ml-5 space-y-1">
          <li><strong>Champion</strong> — The person who uses and values Drawbridge day-to-day (usually COO, CCO, or Head of IT)</li>
          <li><strong>Economic Buyer</strong> — The person who signs the check (often CFO, Managing Partner, or CEO)</li>
          <li><strong>Influencers</strong> — People whose opinions matter (compliance team, external counsel, allocator relations)</li>
          <li><strong>Blockers</strong> — People who might resist renewal (new hires who preferred a different vendor, cost-cutters)</li>
        </ul>
        <p>
          Schedule a <strong>formal renewal meeting</strong> — don&apos;t try to sneak the renewal
          into a regular check-in. Frame it as a strategic conversation about the partnership,
          not a transaction.
        </p>
      </SubSection>

      <SubSection icon="3️⃣" title="Value Demonstration">
        <p>
          This is your <strong>ROI conversation</strong>. Come prepared with concrete data:
        </p>
        <ul className="list-disc ml-5 space-y-1">
          <li>Number of DDQs completed and hours saved</li>
          <li>Security incidents detected and resolved</li>
          <li>Compliance requirements met (SEC exams, LP requests)</li>
          <li>Risk score improvements over the contract period</li>
          <li>Peer benchmarking data — how do they compare to similar firms?</li>
        </ul>
        <p>
          The goal is to make the renewal feel like an <strong>obvious decision</strong>. If
          you&apos;ve delivered clear value, the conversation shifts from &ldquo;should we renew?&rdquo;
          to &ldquo;what else can Drawbridge help with?&rdquo;
        </p>
      </SubSection>

      <SubSection icon="4️⃣" title="Proposal & Negotiation Strategy">
        <p>
          Go in with a plan. Before presenting the proposal, know:
        </p>
        <ul className="list-disc ml-5 space-y-1">
          <li><strong>Your anchor</strong> — The price you lead with (ideally with a modest increase or expansion)</li>
          <li><strong>Your target</strong> — The deal you&apos;d be happy with</li>
          <li><strong>Your floor</strong> — The minimum you&apos;ll accept before escalating to leadership</li>
          <li><strong>Your levers</strong> — Multi-year commitment, payment terms, scope adjustments, timing</li>
        </ul>
        <p>
          <strong>Don&apos;t discount preemptively.</strong> Let the client ask for a concession
          before you offer one. And when you do concede, always get something in return —
          a longer term, a case study, a reference, or expanded scope.
        </p>
      </SubSection>

      <SubSection icon="5️⃣" title="Managing At-Risk Renewals">
        <p>
          Not every renewal will be smooth. When you identify a renewal at risk:
        </p>
        <ul className="list-disc ml-5 space-y-2">
          <li><strong>Escalate early</strong> — Don&apos;t wait. Bring your manager in as soon as you sense risk. A warm handoff to leadership can change the dynamic.</li>
          <li><strong>Diagnose the root cause</strong> — Is it price? Value? Champion change? Competitive displacement? Each requires a different strategy.</li>
          <li><strong>Build a save plan</strong> — Specific actions with owners and deadlines. &ldquo;Schedule exec-to-exec call by Friday&rdquo; not &ldquo;try to save the deal.&rdquo;</li>
          <li><strong>Consider creative structures</strong> — Bridge contracts, reduced-scope renewals, pilot extensions. A partial save is better than a churn.</li>
          <li><strong>Update your forecast honestly</strong> — If a deal is at risk, your call should reflect that. Don&apos;t hide problems in the forecast.</li>
        </ul>
      </SubSection>

      {/* Running it like a pipeline */}
      <SectionHeading>Pipeline Hygiene</SectionHeading>
      <div className="grid grid-cols-2 gap-4">
        <CharacteristicCard
          title="No Stale Plans"
          description="Every renewal plan should have activity in the last 7 days during the active forecast window. If a plan is untouched for 2+ weeks, it's not being worked."
        />
        <CharacteristicCard
          title="Stage Progression"
          description="Plans should move forward every 2–3 weeks. If a renewal has been in the same stage for a month, something is stuck — diagnose and unblock it."
        />
        <CharacteristicCard
          title="Complete Gate Items"
          description="Don't skip gate items to advance stages. Each gate exists for a reason — they ensure you've done the work needed before moving forward."
        />
        <CharacteristicCard
          title="Notes Are Non-Negotiable"
          description="Every account should have current notes explaining the situation. If you got hit by a bus, could someone pick up this renewal from your notes alone?"
        />
      </div>

      <SubSection icon="📊" title="Weekly Self-Check">
        <p>Before submitting your Monday forecast, ask yourself these questions for every renewal in your active window:</p>
        <ul className="list-disc ml-5 space-y-1">
          <li>Have I spoken with or emailed the client in the last 2 weeks?</li>
          <li>Do I know who the decision-maker is and what their timeline looks like?</li>
          <li>Can I articulate the top risk to this renewal?</li>
          <li>Is my Best / Worst / Call still accurate, or does it need adjustment?</li>
          <li>What is the <strong>one thing</strong> I need to do this week to move this renewal forward?</li>
        </ul>
        <p>
          If you can&apos;t answer these for an account, that account needs immediate attention.
        </p>
      </SubSection>

      <DrawbridgeAngle>
        <p>
          The renewal plan workflow in Drawbridge is built to support this pipeline discipline.
          Use it as your single source of truth — not a spreadsheet, not a notepad, not your
          memory. When every RM works their plans consistently, we get predictability as a
          business. Predictability lets us invest, hire, and grow with confidence.
        </p>
        <p>
          Remember: a well-worked renewal plan doesn&apos;t just protect revenue — it creates
          expansion opportunities. The RMs who consistently work their plans early are the
          ones who find upsell moments and drive net revenue growth, not just retention.
        </p>
      </DrawbridgeAngle>

    </>
  );
}
