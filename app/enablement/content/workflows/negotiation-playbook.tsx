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

export default function NegotiationPlaybook() {
  return (
    <>
      <HeroSection
        icon="🤝"
        title="Renewal Negotiation Playbook"
        subtitle="You're not an order-taker. You're a strategic advisor who protects and grows revenue through disciplined, proactive negotiation."
      />
      <LastUpdated date="March 10, 2026" />

      {/* Mindset */}
      <SectionHeading>The RM Mindset Shift</SectionHeading>
      <div className="grid grid-cols-2 gap-4 mt-2">
        <div className="rounded-lg border-2 border-red-200 bg-red-50 p-5">
          <p className="font-semibold text-red-800 font-heading">Order-Taker</p>
          <ul className="mt-3 text-sm text-red-700 space-y-2">
            <li>&ldquo;The client said they want a discount, so I gave them 15%.&rdquo;</li>
            <li>&ldquo;They asked to drop a service, so I removed it.&rdquo;</li>
            <li>&ldquo;They haven&apos;t responded to my email, so I&apos;m waiting.&rdquo;</li>
            <li>&ldquo;They said they&apos;re happy, so the renewal should be fine.&rdquo;</li>
            <li>Reacts to client requests. Accepts the first offer. Avoids difficult conversations.</li>
          </ul>
        </div>
        <div className="rounded-lg border-2 border-green-200 bg-green-50 p-5">
          <p className="font-semibold text-green-800 font-heading">Strategic Advisor</p>
          <ul className="mt-3 text-sm text-green-700 space-y-2">
            <li>&ldquo;They asked for a discount — I asked what&apos;s driving the request and proposed a multi-year instead.&rdquo;</li>
            <li>&ldquo;They want to drop a service — I showed them the risk exposure and offered a restructured package.&rdquo;</li>
            <li>&ldquo;No response in 5 days — I called, texted, and looped in their COO.&rdquo;</li>
            <li>&ldquo;They say they&apos;re happy — great, let&apos;s talk about what else we can help with.&rdquo;</li>
            <li>Drives the conversation. Controls the timeline. Creates value.</li>
          </ul>
        </div>
      </div>

      <SubSection icon="💡" title="The Core Principle: You Own the Renewal">
        <p>
          The single biggest mistake RMs make is treating a renewal as something that
          <strong> happens to them</strong> rather than something they <strong>drive</strong>.
          You set the timeline. You frame the conversation. You present the proposal.
          You control the pace. If the client is dictating every term of the renewal,
          you&apos;ve already lost the negotiation.
        </p>
        <p>
          This doesn&apos;t mean being aggressive or adversarial — it means being
          <strong> proactive, prepared, and purposeful</strong>. The best RMs are the ones
          clients <em>trust</em> to guide them, not the ones who simply do what they&apos;re told.
        </p>
      </SubSection>

      {/* Pre-Renewal Preparation */}
      <SectionHeading>Pre-Renewal Preparation: Your SVR Data Is Your Playbook</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed">
        If you&apos;ve been running SVRs properly, you already have everything you need to walk into
        a renewal conversation with confidence. The SVR isn&apos;t just a client touchpoint — it&apos;s
        your <strong>negotiation prep</strong>. Every data point you gathered, every conversation you
        had, every piece of value you articulated feeds directly into how you position the renewal.
      </p>

      <SubSection icon="📋" title="The Data You Already Have">
        <p>
          Before you start a renewal conversation, pull these from your most recent SVR and CS
          briefing. If you don&apos;t have them, that&apos;s a sign your SVR prep needs work.
        </p>
        <div className="mt-3 grid grid-cols-2 gap-3">
          <div className="rounded-lg border border-gray-200 bg-white p-4">
            <p className="text-xs font-semibold text-db-aqua-dark uppercase tracking-wide mb-2">Score &amp; Posture</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>&#8226; CRA baseline score vs. current score</li>
              <li>&#8226; Year-over-year score trajectory (multi-year clients)</li>
              <li>&#8226; Items remediated since last SVR</li>
              <li>&#8226; Outstanding items and projected score impact</li>
              <li>&#8226; Remediation velocity — are items closing or stacking up?</li>
            </ul>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-4">
            <p className="text-xs font-semibold text-db-aqua-dark uppercase tracking-wide mb-2">Value Delivered</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>&#8226; DDQs turned around (count, turnaround time)</li>
              <li>&#8226; Policies updated and board-approved</li>
              <li>&#8226; Training completion rates</li>
              <li>&#8226; Phishing simulation improvements</li>
              <li>&#8226; Tabletop exercises run, IR plan documented</li>
              <li>&#8226; Vendor risk assessments completed</li>
            </ul>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-4">
            <p className="text-xs font-semibold text-db-aqua-dark uppercase tracking-wide mb-2">Client Context</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>&#8226; Primary outcome the client cares about</li>
              <li>&#8226; Client persona (COO, CCO, Founder)</li>
              <li>&#8226; Business changes (fundraise, growth, new fund)</li>
              <li>&#8226; Upcoming regulatory events (exam, DORA deadline)</li>
              <li>&#8226; Competitive dynamics (evaluating alternatives?)</li>
            </ul>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-4">
            <p className="text-xs font-semibold text-db-aqua-dark uppercase tracking-wide mb-2">Health Signals</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>&#8226; Engagement level (active, passive, disengaged)</li>
              <li>&#8226; Services purchased vs. utilized</li>
              <li>&#8226; Champion stability (same contact? new?)</li>
              <li>&#8226; Any friction, complaints, or escalations</li>
              <li>&#8226; Churn signals present (0, 1, 2+)</li>
            </ul>
          </div>
        </div>
        <div className="mt-3 rounded-md bg-db-aqua/5 border border-db-aqua/20 p-3">
          <p className="text-sm text-db-dark">
            <strong>The principle:</strong> If you walk into a renewal conversation without this data,
            you&apos;re winging it. And when you wing it, you react to what the client says instead of
            driving the conversation to where you want it to go.
          </p>
        </div>
      </SubSection>

      <SubSection icon="🎯" title="The Score Is Your Negotiation Anchor">
        <p>
          Your client&apos;s Drawbridge score is the most powerful asset in a renewal conversation.
          It&apos;s concrete, measurable, and directly tied to business outcomes. Use it differently
          depending on the trajectory:
        </p>
        <div className="mt-3 space-y-3">
          <div className="rounded-md border border-green-200 bg-green-50 p-4">
            <p className="text-sm font-bold text-green-700">Score improved significantly (10+ points from baseline)</p>
            <p className="mt-1 text-sm text-gray-700">
              <strong>Your position is strong.</strong> Lead with the progress: &ldquo;When we started,
              your score was 58. Today it&apos;s 76. That improvement didn&apos;t happen by accident — it&apos;s
              the result of 14 remediated items, a documented IR plan, and quarterly training. That
              trajectory is exactly what your LPs want to see.&rdquo;
            </p>
            <p className="mt-1 text-sm text-gray-700">
              <strong>Negotiation lever:</strong> Use the score to justify the uplift. &ldquo;The program
              is delivering measurable results. The standard adjustment reflects the expanded scope
              and deeper coverage we&apos;ve built together.&rdquo;
            </p>
          </div>
          <div className="rounded-md border border-amber-200 bg-amber-50 p-4">
            <p className="text-sm font-bold text-amber-700">Score flat or modest improvement (3-9 points)</p>
            <p className="mt-1 text-sm text-gray-700">
              <strong>Acknowledge honestly, then pivot to what&apos;s next.</strong> &ldquo;We&apos;ve made
              progress, but there&apos;s more to do. The top 3 planned items would push you into the 80s.
              Renewing gives us the continuity to finish what we started — and switching providers
              would reset you to zero on institutional knowledge.&rdquo;
            </p>
            <p className="mt-1 text-sm text-gray-700">
              <strong>Negotiation lever:</strong> Frame the renewal as completing the journey. Offer to
              front-load the high-impact items in the next quarter as part of the renewal commitment.
            </p>
          </div>
          <div className="rounded-md border border-red-200 bg-red-50 p-4">
            <p className="text-sm font-bold text-red-700">Score stalled or flat from baseline</p>
            <p className="mt-1 text-sm text-gray-700">
              <strong>This is a value delivery problem first, negotiation problem second.</strong> Don&apos;t
              try to negotiate a renewal on a stalled score — the client knows the program hasn&apos;t
              moved the needle. Instead, lead with honesty and a plan: &ldquo;Your score hasn&apos;t moved the
              way either of us wanted. Here&apos;s my hypothesis on what&apos;s blocking progress, and here&apos;s
              what I&apos;d change in the next 90 days. I want to earn the renewal by showing you results,
              not just asking you to sign.&rdquo;
            </p>
            <p className="mt-1 text-sm text-gray-700">
              <strong>Negotiation lever:</strong> Consider a restructured scope, a shorter renewal term
              with a check-in, or a performance milestone. Show you&apos;re willing to be accountable.
            </p>
          </div>
        </div>
      </SubSection>

      {/* The 120-Day Renewal Timeline */}
      <SectionHeading>The 120-Day Renewal Timeline</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed">
        Renewals don&apos;t start when the contract expires — they start <strong>4 months
        before</strong>. This timeline integrates your SVR cadence, CS coordination, and
        negotiation strategy into a single workflow.
      </p>

      <div className="mt-4 space-y-3">
        <div className="rounded-lg border-2 border-gray-200 bg-white overflow-hidden">
          <div className="bg-gray-50 px-5 py-3 border-b border-gray-200 flex items-center gap-3">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-db-aqua/20 text-sm font-bold text-db-aqua-dark">120d</span>
            <div>
              <p className="text-sm font-bold text-db-dark">Day 120: Data Gathering &amp; SVR Prep</p>
              <p className="text-xs text-gray-500">4 months before renewal</p>
            </div>
          </div>
          <div className="px-5 py-4 text-sm text-gray-700 space-y-2">
            <ul className="space-y-1">
              <li>&#8226; Request CS Brief — get the full picture on delivery, engagement, and value story</li>
              <li>&#8226; Pull score data: baseline, current, trajectory, planned items</li>
              <li>&#8226; Review Salesforce: prior call notes, expansion history, support tickets</li>
              <li>&#8226; Identify churn signals (use the SVR churn signal checklist)</li>
              <li>&#8226; Research: firm news, fundraising activity, regulatory calendar</li>
            </ul>
            <div className="rounded-md bg-db-aqua/5 border border-db-aqua/20 p-3">
              <p className="text-xs text-db-aqua-dark"><strong>Goal:</strong> Know the full account picture before any renewal conversation happens.</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border-2 border-gray-200 bg-white overflow-hidden">
          <div className="bg-gray-50 px-5 py-3 border-b border-gray-200 flex items-center gap-3">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 text-sm font-bold text-green-700">90d</span>
            <div>
              <p className="text-sm font-bold text-db-dark">Day 90: The Pre-Renewal SVR</p>
              <p className="text-xs text-gray-500">3 months before renewal</p>
            </div>
          </div>
          <div className="px-5 py-4 text-sm text-gray-700 space-y-2">
            <ul className="space-y-1">
              <li>&#8226; Run a full SVR using the SVR Framework — this is the most important SVR of the year</li>
              <li>&#8226; Present the score story, value delivered, and forward recommendations</li>
              <li>&#8226; Use strategic bridge questions to understand what&apos;s ahead for the firm</li>
              <li>&#8226; Listen carefully for budget signals, competitive pressure, or scope questions</li>
              <li>&#8226; <strong>Do NOT discuss pricing yet</strong> — this meeting is about value, not cost</li>
            </ul>
            <div className="rounded-md bg-green-50 border border-green-200 p-3">
              <p className="text-xs text-green-700"><strong>Goal:</strong> Anchor the renewal in value delivered and value ahead. The client should leave this meeting feeling like Drawbridge is essential — before they ever see a price.</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border-2 border-gray-200 bg-white overflow-hidden">
          <div className="bg-gray-50 px-5 py-3 border-b border-gray-200 flex items-center gap-3">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-sm font-bold text-blue-700">60d</span>
            <div>
              <p className="text-sm font-bold text-db-dark">Day 60: Proposal &amp; Opening Position</p>
              <p className="text-xs text-gray-500">2 months before renewal</p>
            </div>
          </div>
          <div className="px-5 py-4 text-sm text-gray-700 space-y-2">
            <ul className="space-y-1">
              <li>&#8226; Send the renewal proposal — anchored at standard 7% uplift with expansion if applicable</li>
              <li>&#8226; Reference the SVR: &ldquo;Based on our conversation last month, here&apos;s the program for the coming year&rdquo;</li>
              <li>&#8226; Include a one-page value summary (score progress, key deliverables, forward plan)</li>
              <li>&#8226; If expansion is on the table, bundle it into the renewal proposal — not a separate conversation</li>
              <li>&#8226; Schedule a follow-up within 1 week to discuss</li>
            </ul>
            <div className="rounded-md bg-blue-50 border border-blue-200 p-3">
              <p className="text-xs text-blue-700"><strong>Goal:</strong> Get the proposal in front of the right people with enough time for internal review. Never send a proposal without a follow-up date locked in.</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border-2 border-gray-200 bg-white overflow-hidden">
          <div className="bg-gray-50 px-5 py-3 border-b border-gray-200 flex items-center gap-3">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-amber-100 text-sm font-bold text-amber-700">30d</span>
            <div>
              <p className="text-sm font-bold text-db-dark">Day 30: Negotiation &amp; Close</p>
              <p className="text-xs text-gray-500">1 month before renewal</p>
            </div>
          </div>
          <div className="px-5 py-4 text-sm text-gray-700 space-y-2">
            <ul className="space-y-1">
              <li>&#8226; Handle objections, negotiate terms, trade concessions (see frameworks below)</li>
              <li>&#8226; If stalling, diagnose the reason and apply the appropriate response</li>
              <li>&#8226; Multi-thread if needed — reach out to additional stakeholders</li>
              <li>&#8226; Push for signature with constructive urgency (gap in coverage, rate certainty)</li>
              <li>&#8226; If at-risk, escalate now — don&apos;t wait until the last week</li>
            </ul>
            <div className="rounded-md bg-amber-50 border border-amber-200 p-3">
              <p className="text-xs text-amber-700"><strong>Goal:</strong> Signed contract before expiration. If it&apos;s not going to happen, you should know why by now — not be surprised on the last day.</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border-2 border-gray-200 bg-white overflow-hidden">
          <div className="bg-gray-50 px-5 py-3 border-b border-gray-200 flex items-center gap-3">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-red-100 text-sm font-bold text-red-700">0d</span>
            <div>
              <p className="text-sm font-bold text-db-dark">Renewal Date: Confirm &amp; Kick Off</p>
              <p className="text-xs text-gray-500">Contract renewal</p>
            </div>
          </div>
          <div className="px-5 py-4 text-sm text-gray-700 space-y-2">
            <ul className="space-y-1">
              <li>&#8226; Confirm signed contract and internal processing</li>
              <li>&#8226; Send a &ldquo;thank you + here&apos;s what&apos;s ahead&rdquo; note to the client</li>
              <li>&#8226; Brief CS on any scope changes, expansion items, or commitments made</li>
              <li>&#8226; Update Salesforce with final terms, uplift %, and next renewal date</li>
              <li>&#8226; If multi-year, note the review cadence (e.g., annual check-in even without renewal)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Negotiating by Persona */}
      <SectionHeading>Negotiating by Persona</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed">
        Who you&apos;re negotiating with changes everything — the same program, the same value, the
        same price lands completely differently depending on who&apos;s across the table. Your SVR
        should have identified the primary persona. Use that to tailor your negotiation approach.
      </p>

      <div className="mt-4 space-y-4">
        <div className="rounded-lg border border-gray-200 bg-white p-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-lg">🏢</span>
            <p className="text-sm font-bold text-db-dark">COO — Peace of Mind &amp; Efficiency</p>
          </div>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">What They Care About</p>
              <p className="text-gray-700">Operational risk is covered. Nothing falls through the cracks. Their time is freed up for higher-value work. The board is satisfied.</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">How to Frame the Renewal</p>
              <p className="text-gray-700">&ldquo;We&apos;re handling your entire cyber program so you don&apos;t have to. The alternative is hiring a CISO and a security analyst — that&apos;s $450K+ before you add tools and overhead. We&apos;re a fraction of that cost with deeper expertise.&rdquo;</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">What Triggers Pushback</p>
              <p className="text-gray-700">Feels like they&apos;re managing the vendor too much. Deliverables are late or require chasing. They don&apos;t see the program running itself.</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Concession They&apos;ll Trade For</p>
              <p className="text-gray-700">More hands-off experience. Fewer meetings, faster turnaround, proactive updates instead of reactive. &ldquo;If we commit to a 2-year term, I&apos;ll ensure quarterly proactive briefings so you never have to chase us.&rdquo;</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-lg">⚖️</span>
            <p className="text-sm font-bold text-db-dark">CCO — Regulatory Readiness &amp; Exam Risk</p>
          </div>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">What They Care About</p>
              <p className="text-gray-700">SEC exam readiness. Current policies on file. Documented evidence they can point to. No surprises from regulators. DORA compliance if applicable.</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">How to Frame the Renewal</p>
              <p className="text-gray-700">&ldquo;Reg S-P just got harder. SEC exam priorities added AI governance and vendor oversight. Your policies are current, your IR plan is documented, and your training records are clean — because of this program. Dropping it means rebuilding that evidence from scratch.&rdquo;</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">What Triggers Pushback</p>
              <p className="text-gray-700">Doesn&apos;t see Drawbridge as connected to their compliance obligations. Thinks their outside counsel handles it. Doesn&apos;t feel like the program maps to what examiners actually ask for.</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Concession They&apos;ll Trade For</p>
              <p className="text-gray-700">Regulatory-specific deliverables. &ldquo;I&apos;ll include a Reg S-P readiness assessment in the renewal scope — that&apos;s something you can hand directly to your examiner.&rdquo;</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-lg">👤</span>
            <p className="text-sm font-bold text-db-dark">Founder / CEO — Reputation &amp; Capital</p>
          </div>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">What They Care About</p>
              <p className="text-gray-700">Firm reputation. LP confidence. Not being the fund that gets breached. Looking sophisticated and institutional to allocators. Time — they don&apos;t want to think about this.</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">How to Frame the Renewal</p>
              <p className="text-gray-700">&ldquo;Your LPs see a firm with a mature cyber program that benchmarks in the top quartile. That&apos;s a competitive advantage when you&apos;re raising capital — one your peers don&apos;t have. Our program is what makes that story credible.&rdquo;</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">What Triggers Pushback</p>
              <p className="text-gray-700">Feels like cybersecurity is a &ldquo;check the box&rdquo; exercise that doesn&apos;t connect to their real priorities (fundraising, performance, growth). Doesn&apos;t see it as strategic.</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Concession They&apos;ll Trade For</p>
              <p className="text-gray-700">Status and positioning. &ldquo;I&apos;d like to feature your firm as a case study — anonymized or named, your choice. It positions you as a leader in cyber governance.&rdquo; Also: executive briefings, board-ready reporting.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Pushing Conversations Forward */}
      <SectionHeading>Pushing Conversations Forward</SectionHeading>

      <SubSection icon="🚀" title="The 48-Hour Rule">
        <p>
          No renewal conversation should go <strong>more than 48 business hours</strong> without
          a next action. If you sent a proposal Monday, you should have a follow-up scheduled
          for Wednesday. If the client asked for time to think, you should have a check-in
          on the calendar. Silence is not a strategy — it&apos;s how deals die.
        </p>
        <p>
          Tactics for maintaining momentum:
        </p>
        <ul className="list-disc ml-5 space-y-2">
          <li><strong>Always end meetings with a next step</strong> — Never leave a conversation without a specific follow-up date and action. &ldquo;I&apos;ll send the proposal by Thursday and let&apos;s plan to discuss it next Tuesday at 2pm.&rdquo;</li>
          <li><strong>Use calendar invites, not promises</strong> — Don&apos;t say &ldquo;let&apos;s connect next week.&rdquo; Send the invite before you hang up. A commitment without a calendar hold is just a wish.</li>
          <li><strong>Multi-thread your communication</strong> — If the primary contact goes dark, reach out to another stakeholder. &ldquo;Hi Sarah, I sent the renewal proposal to John last week but haven&apos;t heard back — do you know if the team has had a chance to review?&rdquo;</li>
          <li><strong>Create constructive urgency</strong> — Reference real deadlines: renewal date, budget cycle, regulatory timelines, contract auto-renewal clauses, upcoming SEC exam season. &ldquo;To ensure there&apos;s no gap in coverage before your Q2 renewal date, we should finalize terms by March 15.&rdquo;</li>
          <li><strong>Change the medium</strong> — If email isn&apos;t working, pick up the phone. If the phone isn&apos;t working, text. If texting isn&apos;t working, show up at a conference. Different people respond to different channels.</li>
        </ul>
      </SubSection>

      <SubSection icon="🛑" title="When the Client Stalls — Diagnosis & Response">
        <p>
          Stalling almost always means one of five things. Diagnose the real reason before
          choosing your response:
        </p>
        <div className="mt-3 rounded-md border border-gray-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left font-medium text-gray-600">Stall Reason</th>
                <th className="px-4 py-2 text-left font-medium text-gray-600">Signals</th>
                <th className="px-4 py-2 text-left font-medium text-gray-600">Response</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="px-4 py-2 font-medium text-db-dark">Price Sensitivity</td>
                <td className="px-4 py-2 text-gray-600">&ldquo;We need to review the budget&rdquo; / &ldquo;Can you sharpen the pencil?&rdquo;</td>
                <td className="px-4 py-2 text-gray-600">Don&apos;t drop price — explore value. Restructure scope, offer multi-year, or reframe ROI.</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium text-db-dark">Competing Priority</td>
                <td className="px-4 py-2 text-gray-600">Genuine busyness, delayed responses, &ldquo;crazy quarter&rdquo;</td>
                <td className="px-4 py-2 text-gray-600">Reduce friction — pre-fill paperwork, offer a 15-min call, handle everything on your side.</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium text-db-dark">Internal Misalignment</td>
                <td className="px-4 py-2 text-gray-600">Champion is on board but &ldquo;needs to get approval&rdquo; / &ldquo;legal is reviewing&rdquo;</td>
                <td className="px-4 py-2 text-gray-600">Arm your champion. Provide an internal justification doc, ROI summary, or offer to brief the decision-maker directly.</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium text-db-dark">Evaluating Alternatives</td>
                <td className="px-4 py-2 text-gray-600">Asking for competitive comparisons, new RFP language, unusual questions</td>
                <td className="px-4 py-2 text-gray-600">Address head-on. &ldquo;Are you evaluating other options? I&apos;d love the chance to address any concerns directly.&rdquo;</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium text-db-dark">Low Perceived Value</td>
                <td className="px-4 py-2 text-gray-600">Low engagement all year, &ldquo;we haven&apos;t really used it&rdquo;, questioning necessity</td>
                <td className="px-4 py-2 text-gray-600">This is a value delivery problem, not a negotiation problem. Re-engage with a business review showing usage data and risk impact.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </SubSection>

      {/* Price & Discount Tactics */}
      <SectionHeading>Handling Price Pressure</SectionHeading>

      <SubSection icon="💰" title="The Cardinal Rules of Pricing">
        <ul className="list-disc ml-5 space-y-2">
          <li>
            <strong>Never discount without a reason.</strong> If a client asks for a discount
            and you immediately say yes, you&apos;ve told them two things: the original price was
            inflated, and they should ask for more. Always ask <em>why</em> first: &ldquo;Help me
            understand what&apos;s driving the budget conversation — is this a firmwide initiative
            or specific to our engagement?&rdquo;
          </li>
          <li>
            <strong>Never concede without getting something back.</strong> Every concession
            should come with a trade. This is non-negotiable:
            <div className="mt-2 ml-4 grid grid-cols-2 gap-2">
              <div className="rounded bg-gray-50 p-2 text-xs">Client wants: 10% discount → You get: 3-year term commitment</div>
              <div className="rounded bg-gray-50 p-2 text-xs">Client wants: drop a service → You get: case study + reference</div>
              <div className="rounded bg-gray-50 p-2 text-xs">Client wants: delayed start → You get: upfront annual payment</div>
              <div className="rounded bg-gray-50 p-2 text-xs">Client wants: price hold → You get: auto-renewal clause</div>
            </div>
          </li>
          <li>
            <strong>Anchor high, not low.</strong> Your opening proposal should include a
            modest price increase or expansion. This isn&apos;t aggressive — it&apos;s smart. If you
            anchor at the current price, the only direction the negotiation can go is down.
            If you anchor 5–10% above, you have room to &ldquo;meet in the middle&rdquo; at flat or
            slightly up — which is a win.
          </li>
          <li>
            <strong>Reframe the conversation from cost to risk.</strong> When a client pushes
            on price, shift the frame: &ldquo;I understand budget is a concern. Let me share what
            a regulatory deficiency finding or a data breach would cost in comparison. We&apos;re
            not a cost line — we&apos;re risk mitigation.&rdquo;
          </li>
          <li>
            <strong>Use silence.</strong> After you present your price, stop talking. The
            instinct is to fill the silence with justification or preemptive concessions.
            Resist it. Let the client respond first. Often the &ldquo;objection&rdquo; you were
            bracing for never comes.
          </li>
        </ul>
      </SubSection>

      <SubSection icon="🔧" title="Restructure, Don't Reduce">
        <p>
          When a client genuinely cannot afford the current scope, <strong>restructure
          the engagement rather than simply cutting the price</strong>. This protects your
          ARR per unit of effort and keeps the door open for future expansion:
        </p>
        <ul className="list-disc ml-5 space-y-1">
          <li><strong>Tiered approach</strong> — &ldquo;We can move to our core package this year and layer back the advanced services when budget allows. That brings the cost to X while keeping your foundational program intact.&rdquo;</li>
          <li><strong>Phased expansion</strong> — &ldquo;Let&apos;s start with firm-level coverage this year and plan to add portfolio company assessments in Q3 when the new budget cycle opens.&rdquo;</li>
          <li><strong>Payment restructuring</strong> — Quarterly payments instead of annual upfront can solve cash flow problems without touching the total contract value.</li>
          <li><strong>Scope swap</strong> — Replace a lower-value service with a higher-value one at the same price. The client feels they got something new, and you maintain revenue.</li>
        </ul>
      </SubSection>

      {/* Uplift Negotiation */}
      <SectionHeading>Negotiating Uplift (Price Increases)</SectionHeading>

      <SubSection icon="📊" title="Why Uplift Matters — The Strategic Picture">
        <p>
          Our standard annual uplift is 7%. In practice, most deals land somewhere between
          3% and 7%. At our typical ACV of $30–50K, the dollar difference between those
          numbers is a few hundred to maybe a thousand dollars. <strong>This is not about
          fighting over a few hundred bucks.</strong>
        </p>
        <p>
          So why does uplift matter? Because it&apos;s a <em>habit</em> and a <em>signal</em>.
          If you consistently accept flat renewals or minimal increases, you&apos;re training
          clients to expect it — and you&apos;re compressing your book over time. A 0% increase
          this year is actually a real-dollar decrease when costs go up. Across 50 accounts,
          the difference between averaging 3% uplift and 5% uplift is real money at the
          portfolio level, even if any single deal feels small.
        </p>
        <p>
          More importantly, <strong>how you handle the uplift conversation signals how you
          show up as a partner</strong>. An RM who presents uplift confidently, ties it to
          value, and uses it as a lever to deepen the relationship is operating strategically.
          An RM who apologizes for it, pre-discounts before the client even pushes back, or
          avoids the conversation entirely is leaving value on the table and undermining
          their own positioning.
        </p>
      </SubSection>

      <SubSection icon="🧭" title="The Uplift Framework">
        <p>
          This isn&apos;t a rigid script — it&apos;s a way of thinking about the conversation.
          Every client is different, every situation has context, and you have judgment.
          The framework is designed to help you <strong>think through your approach before
          the conversation</strong>, not to box you in during it.
        </p>

        <div className="mt-4 space-y-4">
          {/* Principle 1 */}
          <div className="rounded-lg border border-gray-200 bg-white p-5">
            <p className="text-sm font-bold text-db-dark">1. Always Start at Standard</p>
            <p className="mt-2 text-sm text-gray-700">
              Every proposal goes out at 7%. No pre-discounting. No &ldquo;I already brought it down
              for you.&rdquo; The reason is simple: <strong>many clients will accept it without
              pushback</strong> if it&apos;s presented as standard. You don&apos;t know which ones will push
              back until they do — so don&apos;t negotiate against yourself.
            </p>
            <p className="mt-2 text-sm text-gray-700">
              Present it as a line item, not a talking point. Call it an &ldquo;annual adjustment&rdquo;
              or &ldquo;standard rate update&rdquo; — not a &ldquo;price increase.&rdquo; Language shapes perception.
              If you treat it as routine, the client will too.
            </p>
          </div>

          {/* Principle 2 */}
          <div className="rounded-lg border border-gray-200 bg-white p-5">
            <p className="text-sm font-bold text-db-dark">2. When They Push Back — Lead with Value, Not Apology</p>
            <p className="mt-2 text-sm text-gray-700">
              If a client questions the uplift, your first instinct should <em>not</em> be to
              offer a lower number. Your first move is to tie the increase to something real:
            </p>
            <ul className="mt-2 text-sm text-gray-700 space-y-1 ml-4">
              <li>&#8226; &ldquo;The regulatory landscape has expanded — new Reg S-P amendments, AI governance, expanded SEC priorities. The scope of what we cover for you has grown.&rdquo;</li>
              <li>&#8226; &ldquo;We&apos;ve deepened our knowledge of your environment over the past year. That continuity has real value — a new provider would take 6 months to get up to speed.&rdquo;</li>
              <li>&#8226; &ldquo;Platform improvements, expanded threat intelligence, faster DDQ turnaround — the service has gotten better, and the adjustment reflects that.&rdquo;</li>
            </ul>
            <p className="mt-2 text-sm text-gray-700">
              Often, simply explaining the &ldquo;why&rdquo; is enough. Many clients push back reflexively —
              they&apos;re not genuinely objecting, they&apos;re checking to see if the number moves.
              If you hold with a clear rationale, a lot of them will accept it.
            </p>
          </div>

          {/* Principle 3 */}
          <div className="rounded-lg border border-gray-200 bg-white p-5">
            <p className="text-sm font-bold text-db-dark">3. If You Come Down — Trade for Something</p>
            <p className="mt-2 text-sm text-gray-700">
              The exact percentage matters less than the principle: <strong>every concession
              should come with a trade</strong>. This is where the real strategy lives.
              Whether you end up at 5% or 3% is less important than what you get in return.
            </p>
            <div className="mt-3 rounded-md border border-gray-200 overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left font-medium text-gray-600">You Give</th>
                    <th className="px-4 py-2 text-left font-medium text-gray-600">You Get</th>
                    <th className="px-4 py-2 text-left font-medium text-gray-600">Why It&apos;s Worth It</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="px-4 py-2 text-gray-700">Lower uplift</td>
                    <td className="px-4 py-2 font-medium text-db-dark">2-year commitment</td>
                    <td className="px-4 py-2 text-gray-600">Eliminates next year&apos;s renewal risk entirely. Revenue secured for 24 months.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-gray-700">Lower uplift</td>
                    <td className="px-4 py-2 font-medium text-db-dark">Auto-renewal clause</td>
                    <td className="px-4 py-2 text-gray-600">Contract continues unless cancelled. Shifts the burden from &ldquo;renew&rdquo; to &ldquo;cancel.&rdquo;</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-gray-700">Lower uplift</td>
                    <td className="px-4 py-2 font-medium text-db-dark">Expansion commitment</td>
                    <td className="px-4 py-2 text-gray-600">&ldquo;I can work on the rate if we add the portco assessment we discussed for Q3.&rdquo;</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-gray-700">Lower uplift</td>
                    <td className="px-4 py-2 font-medium text-db-dark">Case study / reference</td>
                    <td className="px-4 py-2 text-gray-600">Marketing asset + social proof. Worth more than the uplift delta to the business.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-gray-700">Lower uplift</td>
                    <td className="px-4 py-2 font-medium text-db-dark">Upfront annual payment</td>
                    <td className="px-4 py-2 text-gray-600">Cash flow improvement. A $40K check in January vs. quarterly invoices has real value.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm text-gray-700">
              The <strong>2-year deal is your best lever</strong> and should be the first trade
              you reach for. It&apos;s easy for the client to say yes to — they get rate certainty
              and eliminate the hassle of renegotiating next year. You get guaranteed revenue
              and remove renewal risk from your pipeline. Both sides win.
            </p>
          </div>

          {/* Principle 4 */}
          <div className="rounded-lg border border-gray-200 bg-white p-5">
            <p className="text-sm font-bold text-db-dark">4. Know When It&apos;s Not Worth the Fight</p>
            <p className="mt-2 text-sm text-gray-700">
              Strategic judgment matters. On a $35K deal, the difference between 5% and 3% is
              $700. If the client is a strong reference, has expansion potential, or just needs
              an easy win to get the deal signed, it may not be worth spending two more calls
              negotiating over that delta. <strong>Your time is an asset too.</strong>
            </p>
            <p className="mt-2 text-sm text-gray-700">
              The question to ask yourself is: <em>&ldquo;What else could I accomplish with the time
              I&apos;d spend fighting for this?&rdquo;</em> If the answer is &ldquo;close another deal&rdquo; or
              &ldquo;expand a different account,&rdquo; take the reasonable offer and move on. The goal
              is to maximize the value of your <em>book</em>, not to win every individual negotiation.
            </p>
          </div>

          {/* Principle 5 */}
          <div className="rounded-lg border border-gray-200 bg-white p-5">
            <p className="text-sm font-bold text-db-dark">5. Flat Renewals Need a Story</p>
            <p className="mt-2 text-sm text-gray-700">
              Sometimes the right answer is 0%. A strategic account in a save situation, a
              client going through a genuine hardship, a relationship you need to protect for
              long-term expansion. That&apos;s fine — but it should be a <strong>deliberate
              decision with a plan</strong>, not a default.
            </p>
            <p className="mt-2 text-sm text-gray-700">
              If you&apos;re proposing a flat renewal, you should be able to articulate:
              <em> why this client</em>, <em>what you&apos;re getting in return</em> (even if it&apos;s
              just goodwill and retention), and <em>what the plan is to get uplift next year</em>.
              It&apos;s not about asking permission — it&apos;s about operating with intention.
            </p>
          </div>
        </div>
      </SubSection>

      {/* Strategic Thinking */}
      <SubSection icon="🧠" title="The Real Skill: Reading the Situation">
        <p>
          The best uplift negotiators don&apos;t rely on a script. They read the client and
          the situation and adjust. Here are the patterns to recognize:
        </p>
        <div className="mt-3 space-y-3">
          <div className="rounded-md border border-gray-200 bg-white p-4">
            <p className="text-sm font-bold text-db-dark">The Reflexive Pushback</p>
            <p className="mt-1 text-sm text-gray-700">
              <strong>What it sounds like:</strong> &ldquo;Can you do anything on the price?&rdquo; — asked
              casually, almost out of habit. They haven&apos;t looked at the numbers. They&apos;re checking.
            </p>
            <p className="mt-1 text-sm text-gray-700">
              <strong>What to do:</strong> Hold. Explain the value. Most of the time, this
              resolves itself. They weren&apos;t objecting — they were testing. If you immediately
              offer a discount, you&apos;ve rewarded the test and they&apos;ll do it harder next year.
            </p>
          </div>
          <div className="rounded-md border border-gray-200 bg-white p-4">
            <p className="text-sm font-bold text-db-dark">The Budget Reality</p>
            <p className="mt-1 text-sm text-gray-700">
              <strong>What it sounds like:</strong> &ldquo;Our COO said all vendor renewals need to
              come in at X% or flat.&rdquo; There&apos;s a real number. Someone above them set it.
            </p>
            <p className="mt-1 text-sm text-gray-700">
              <strong>What to do:</strong> Work with it. If the number is 3% or 5%, just take it
              and trade for multi-year or another concession. If it&apos;s 0%, explore restructuring
              or offer to help them build the internal case. &ldquo;Would it help if I put together a
              brief for your COO on the regulatory risk of reducing coverage?&rdquo;
            </p>
          </div>
          <div className="rounded-md border border-gray-200 bg-white p-4">
            <p className="text-sm font-bold text-db-dark">The Competitive Lever</p>
            <p className="mt-1 text-sm text-gray-700">
              <strong>What it sounds like:</strong> &ldquo;We got a quote from another provider at
              $X&rdquo; or &ldquo;We&apos;re evaluating options.&rdquo;
            </p>
            <p className="mt-1 text-sm text-gray-700">
              <strong>What to do:</strong> Don&apos;t panic and don&apos;t match blindly. Shift the
              conversation to switching costs and continuity: &ldquo;Switching providers means 3–6
              months of onboarding, losing institutional knowledge of your environment, and
              starting over on LP reporting. The uplift is a fraction of that disruption cost.&rdquo;
              Then offer the multi-year trade to close the conversation.
            </p>
          </div>
          <div className="rounded-md border border-gray-200 bg-white p-4">
            <p className="text-sm font-bold text-db-dark">The Value Question</p>
            <p className="mt-1 text-sm text-gray-700">
              <strong>What it sounds like:</strong> &ldquo;Why should we pay more when we didn&apos;t
              use everything?&rdquo; or &ldquo;We&apos;re not sure we&apos;re getting our money&apos;s worth.&rdquo;
            </p>
            <p className="mt-1 text-sm text-gray-700">
              <strong>What to do:</strong> This is a delivery and engagement problem, not a pricing
              problem. Don&apos;t argue about the uplift — schedule a business review and show the
              value. If the client is under-utilizing, that&apos;s on us to fix. Address the root
              cause, then the renewal conversation gets much easier.
            </p>
          </div>
          <div className="rounded-md border border-gray-200 bg-white p-4">
            <p className="text-sm font-bold text-db-dark">The Hard Line</p>
            <p className="mt-1 text-sm text-gray-700">
              <strong>What it sounds like:</strong> &ldquo;We&apos;re renewing at the old price or we&apos;re
              not renewing.&rdquo; Firm. Not negotiating.
            </p>
            <p className="mt-1 text-sm text-gray-700">
              <strong>What to do:</strong> Take it seriously but don&apos;t fold immediately. Use
              the &ldquo;leadership approval&rdquo; frame to buy time and add weight: &ldquo;A flat renewal
              isn&apos;t something I can approve on my own — let me take this back to my leadership
              with a case for it. If we can get a 2-year commitment, that gives me something to
              work with.&rdquo; This shows the client the concession is real and makes the trade feel
              earned.
            </p>
          </div>
        </div>
      </SubSection>

      <SubSection icon="🤝" title="The Multi-Year Play — Your Best Tool">
        <p>
          Across all of these scenarios, the <strong>2-year deal</strong> is your most versatile
          lever. It works because both sides genuinely benefit:
        </p>
        <div className="mt-3 grid grid-cols-2 gap-4">
          <div className="rounded-lg border border-green-200 bg-green-50 p-4">
            <p className="text-sm font-bold text-green-700">Client Gets</p>
            <ul className="mt-2 text-sm text-gray-700 space-y-1">
              <li>&#8226; Rate certainty for 24 months</li>
              <li>&#8226; No renewal negotiation next year</li>
              <li>&#8226; Budget predictability — easier internal approval</li>
              <li>&#8226; Commitment to continued service levels</li>
            </ul>
          </div>
          <div className="rounded-lg border border-db-aqua bg-db-aqua/5 p-4">
            <p className="text-sm font-bold text-db-aqua-dark">Drawbridge Gets</p>
            <ul className="mt-2 text-sm text-gray-700 space-y-1">
              <li>&#8226; Guaranteed revenue for 2 years</li>
              <li>&#8226; One less renewal to manage next year</li>
              <li>&#8226; Deeper relationship and switching cost</li>
              <li>&#8226; Better forecasting accuracy</li>
            </ul>
          </div>
        </div>
        <p className="mt-3 text-sm text-gray-700">
          Frame it as a partnership move, not a pricing trick: &ldquo;A 2-year agreement means
          we can plan a longer-horizon program together — more proactive, less reactive.
          It also takes this negotiation off both our plates next year so we can focus on
          the work.&rdquo;
        </p>
      </SubSection>

      <DrawbridgeAngle>
        <p>
          The uplift conversation is a skill, not a policy. The percentages are guidelines.
          What matters is <strong>how you show up</strong>: confident, prepared, and focused on
          the relationship. An RM who consistently lands 3–5% with multi-year terms and
          strong client relationships is doing exactly the right thing. An RM who avoids
          the conversation entirely or apologizes their way to 0% is leaving value on the
          table — not just in dollars, but in how the client perceives us.
        </p>
        <p>
          Think of uplift as a muscle. The more you practice it, the more natural it feels.
          Start by presenting 7% confidently on your next renewal and see what happens.
          You&apos;ll be surprised how often the answer is just &ldquo;okay.&rdquo;
        </p>
      </DrawbridgeAngle>

      {/* ROI Ammunition */}
      <SectionHeading>ROI Ammunition for Negotiation</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed">
        When a client pushes on price, abstract arguments don&apos;t work. Concrete numbers do.
        Use these ROI frameworks to shift the conversation from &ldquo;what does it cost?&rdquo; to
        &ldquo;what does it cost <em>not</em> to have it?&rdquo;
      </p>

      <div className="mt-4 overflow-x-auto">
        <table className="min-w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-db-dark text-white text-left">
              <th className="px-4 py-3 font-semibold">Framework</th>
              <th className="px-4 py-3 font-semibold">When to Use</th>
              <th className="px-4 py-3 font-semibold">The Line</th>
              <th className="px-4 py-3 font-semibold">Typical ROI</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr className="bg-white">
              <td className="px-4 py-3 font-medium text-db-dark">Capital Protected</td>
              <td className="px-4 py-3 text-gray-700">Client is fundraising, has LP concentration risk, or LPs are asking about cyber in ODD</td>
              <td className="px-4 py-3 text-gray-700">&ldquo;A failed ODD due to cyber gaps costs you the allocation — that&apos;s $X in management fees at risk. Our annual fee is a rounding error compared to one lost LP.&rdquo;</td>
              <td className="px-4 py-3 font-medium text-green-700">25-50x</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-4 py-3 font-medium text-db-dark">Enforcement Avoided</td>
              <td className="px-4 py-3 text-gray-700">Client is compliance-focused, has an exam coming, or their CCO is the decision-maker</td>
              <td className="px-4 py-3 text-gray-700">&ldquo;Average SEC cyber enforcement is $1.5M+ before legal fees. Our program costs less than what their lawyers charge for a single deficiency response.&rdquo;</td>
              <td className="px-4 py-3 font-medium text-green-700">15-70x</td>
            </tr>
            <tr className="bg-white">
              <td className="px-4 py-3 font-medium text-db-dark">Breach Cost</td>
              <td className="px-4 py-3 text-gray-700">Peer firm was breached, client had a near-miss, or their team is lean and exposed</td>
              <td className="px-4 py-3 text-gray-700">&ldquo;Average breach in financial services: $5.9M. Even at a 5% annual probability, the expected cost is $295K/year. Our program is a fraction of that.&rdquo;</td>
              <td className="px-4 py-3 font-medium text-green-700">3-9x</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-4 py-3 font-medium text-db-dark">Build vs. Buy</td>
              <td className="px-4 py-3 text-gray-700">Client says they&apos;ll handle it in-house, is hiring a CISO, or COO is evaluating vendor consolidation</td>
              <td className="px-4 py-3 text-gray-700">&ldquo;A CISO + analyst + tools is $455K-$810K/year. We deliver broader coverage for $40K-$100K. Even if you hire internally, you still need us for the independent assessment.&rdquo;</td>
              <td className="px-4 py-3 font-medium text-green-700">5-8x savings</td>
            </tr>
            <tr className="bg-white">
              <td className="px-4 py-3 font-medium text-db-dark">Allocation Impact</td>
              <td className="px-4 py-3 text-gray-700">Large fund, institutional LPs, competitive fundraise, or CEO/Founder is the persona</td>
              <td className="px-4 py-3 text-gray-700">&ldquo;A single institutional allocation won or retained because of your cyber posture is $9-15M in lifetime fees. Our program costs less than a single month of that impact.&rdquo;</td>
              <td className="px-4 py-3 font-medium text-green-700">100x+</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-3 rounded-md bg-db-aqua/5 border border-db-aqua/20 p-3">
        <p className="text-sm text-db-dark">
          <strong>Which framework to lead with:</strong> Match to the persona. COO → Build vs. Buy.
          CCO → Enforcement Avoided. Founder/CEO → Capital Protected or Allocation Impact.
          If a peer was recently breached, lead with Breach Cost regardless of persona.
        </p>
      </div>

      {/* Churn Signals → Negotiation Strategy */}
      <SectionHeading>Reading the Account: Churn Signals Shape Your Approach</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed">
        Not every renewal is the same negotiation. Your SVR should have surfaced churn signals —
        use them to adjust your approach <strong>before</strong> you send the proposal.
      </p>

      <div className="mt-4 overflow-x-auto">
        <table className="min-w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-db-dark text-white text-left">
              <th className="px-4 py-3 font-semibold">Churn Signals</th>
              <th className="px-4 py-3 font-semibold">Account Health</th>
              <th className="px-4 py-3 font-semibold">Negotiation Approach</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr className="bg-white">
              <td className="px-4 py-3 font-medium text-green-700">0 signals</td>
              <td className="px-4 py-3">
                <span className="rounded-full bg-green-100 text-green-700 px-2 py-0.5 text-xs font-medium">Healthy</span>
              </td>
              <td className="px-4 py-3 text-gray-700">
                Full standard approach. Lead with value, anchor at 7%, push for multi-year and expansion.
                This is your opportunity to grow the account, not just retain it.
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-4 py-3 font-medium text-amber-700">1 signal</td>
              <td className="px-4 py-3">
                <span className="rounded-full bg-amber-100 text-amber-700 px-2 py-0.5 text-xs font-medium">Watch</span>
              </td>
              <td className="px-4 py-3 text-gray-700">
                Standard approach but address the signal directly before proposing. If it&apos;s unused
                services, fix that first. If it&apos;s a new contact, rebuild the relationship before
                negotiating. Don&apos;t ignore the signal and hope the renewal covers it.
              </td>
            </tr>
            <tr className="bg-white">
              <td className="px-4 py-3 font-medium text-red-700">2+ signals</td>
              <td className="px-4 py-3">
                <span className="rounded-full bg-red-100 text-red-700 px-2 py-0.5 text-xs font-medium">At Risk</span>
              </td>
              <td className="px-4 py-3 text-gray-700">
                Shift from negotiation mode to <strong>save mode</strong>. The goal is retention, not
                uplift. Lead with value recovery — re-engage the client, demonstrate concrete impact,
                and be willing to restructure scope. A flat renewal you retain is infinitely better
                than a churned account with 7% uplift on the proposal.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <SubSection icon="🔍" title="The Churn Signal Checklist">
        <p>Review these before every renewal — and flag any account with 2+ signals immediately:</p>
        <div className="mt-2 grid grid-cols-2 gap-2">
          <div className="rounded-md bg-gray-50 border border-gray-200 p-3 text-sm text-gray-700">&#9744; Score unchanged from CRA baseline</div>
          <div className="rounded-md bg-gray-50 border border-gray-200 p-3 text-sm text-gray-700">&#9744; Services purchased but not utilized</div>
          <div className="rounded-md bg-gray-50 border border-gray-200 p-3 text-sm text-gray-700">&#9744; No remediation activity in 60+ days</div>
          <div className="rounded-md bg-gray-50 border border-gray-200 p-3 text-sm text-gray-700">&#9744; Primary contact changed</div>
          <div className="rounded-md bg-gray-50 border border-gray-200 p-3 text-sm text-gray-700">&#9744; Low or declining platform engagement</div>
          <div className="rounded-md bg-gray-50 border border-gray-200 p-3 text-sm text-gray-700">&#9744; Friction, complaints, or escalations</div>
          <div className="rounded-md bg-gray-50 border border-gray-200 p-3 text-sm text-gray-700">&#9744; No response to outreach</div>
          <div className="rounded-md bg-gray-50 border border-gray-200 p-3 text-sm text-gray-700">&#9744; Renewal approaching with no expansion discussion</div>
        </div>
      </SubSection>

      {/* Expansion Playbook */}
      <SectionHeading>Driving Expansion</SectionHeading>

      <SubSection icon="📈" title="Expansion Is Not Upselling — It's Problem-Solving">
        <p>
          The worst way to expand a client is to pitch them a product they didn&apos;t ask for.
          The best way is to <strong>identify a problem they have and show them how
          Drawbridge solves it</strong>. Expansion should feel like a natural next step, not
          a sales push.
        </p>
        <p>Expansion opportunities are everywhere — you just have to look for the signals:</p>
      </SubSection>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <CharacteristicCard
          title="Regulatory Trigger"
          description="New SEC rule, DORA compliance need, state privacy law. 'The new Reg S-P amendments require an incident response program — let's make sure you're covered.'"
        />
        <CharacteristicCard
          title="Organizational Change"
          description="New fund launch, acquisition, office expansion, key hire. Every change creates new risk surface. 'Congratulations on the new fund — let's extend your security program to cover it.'"
        />
        <CharacteristicCard
          title="Incident or Near-Miss"
          description="Phishing attempt, vendor breach, industry peer hit by ransomware. 'Given what happened to [peer firm], this is a good time to review your IR plan and add tabletop exercises.'"
        />
        <CharacteristicCard
          title="LP / Allocator Pressure"
          description="New DDQ requirements, LP asking about specific controls, consultant review. 'Your allocators are asking about these areas — let us help you get ahead of it.'"
        />
      </div>

      <SubSection icon="🎯" title="The Expansion Conversation Framework">
        <p>
          Use this structure when you see an expansion opportunity. It takes 60 seconds
          and feels consultative, not salesy:
        </p>
        <ol className="list-decimal ml-5 space-y-2">
          <li>
            <strong>Observation</strong> — Lead with something you&apos;ve noticed, not something
            you want to sell. &ldquo;I noticed your team grew from 30 to 55 people since we started
            working together...&rdquo;
          </li>
          <li>
            <strong>Implication</strong> — Connect it to risk or a gap. &ldquo;...which means there
            are 25 people who haven&apos;t been through your security training program, and your
            access controls probably need an update.&rdquo;
          </li>
          <li>
            <strong>Recommendation</strong> — Offer a specific, scoped solution. &ldquo;I&apos;d recommend
            we add a training refresh and an access control review — that would take about
            4 weeks and ensure you&apos;re covered.&rdquo;
          </li>
          <li>
            <strong>Bridge to action</strong> — Make it easy to say yes. &ldquo;I can put together
            a quick scope and pricing by Friday. Want me to send it over?&rdquo;
          </li>
        </ol>
      </SubSection>

      <SubSection icon="🔑" title="Portfolio Company Expansion (PE Clients)">
        <p>
          For private equity clients, portfolio company expansion is the single biggest
          growth lever. A single PE firm relationship can 10x through portco coverage.
          The playbook:
        </p>
        <ul className="list-disc ml-5 space-y-2">
          <li>
            <strong>Start with the firm</strong> — Deliver exceptional service at the GP level
            first. Build trust with the deal team and operating partners. Your credibility
            with portfolio companies comes from the GP relationship.
          </li>
          <li>
            <strong>Anchor to a deal</strong> — Offer cyber due diligence on the next
            acquisition. This is a natural entry point that demonstrates value to the deal
            team and introduces Drawbridge to the portfolio company.
          </li>
          <li>
            <strong>Create a portfolio program</strong> — Propose a standardized security
            baseline across all portfolio companies. Position it as risk management for the
            fund: &ldquo;A breach at any portco is a breach on the fund&apos;s reputation with LPs.&rdquo;
          </li>
          <li>
            <strong>Use LP pressure</strong> — LPs are increasingly asking PE firms about
            portfolio-level cybersecurity. This creates top-down demand: &ldquo;Your LPs are
            asking about this in every DDQ — let&apos;s get ahead of it with a portfolio-wide
            program.&rdquo;
          </li>
        </ul>
      </SubSection>

      {/* Tactical Toolbox */}
      <SectionHeading>Tactical Toolbox</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed mb-4">
        Specific phrases and techniques for common renewal scenarios. Practice these
        until they feel natural.
      </p>

      <SubSection icon="💬" title="When They Say... You Say...">
        <div className="space-y-4">
          <div className="rounded-md border border-gray-200 bg-white p-4">
            <p className="text-sm font-medium text-red-700">&ldquo;We need a 20% discount or we&apos;re leaving.&rdquo;</p>
            <p className="mt-2 text-sm text-gray-700">
              &ldquo;I hear you, and I want to make this work. Help me understand what&apos;s driving that
              number — is it a budget constraint or are you comparing to another option? If it&apos;s
              budget, let&apos;s look at restructuring the scope to fit. If it&apos;s competitive, I&apos;d love
              the chance to show you what you&apos;d be giving up.&rdquo;
            </p>
          </div>
          <div className="rounded-md border border-gray-200 bg-white p-4">
            <p className="text-sm font-medium text-red-700">&ldquo;We&apos;re going to handle security in-house now.&rdquo;</p>
            <p className="mt-2 text-sm text-gray-700">
              &ldquo;That&apos;s great that you&apos;re investing in internal capabilities — who are you bringing
              on? Most of our clients find that even with an internal hire, they need a partner for
              specialized work: IR planning, pen testing, DDQ support, and regulatory expertise.
              What if we scoped a hybrid model where we complement your internal team instead of
              replacing them?&rdquo;
            </p>
          </div>
          <div className="rounded-md border border-gray-200 bg-white p-4">
            <p className="text-sm font-medium text-red-700">&ldquo;Our new CFO wants to cut all non-essential vendors.&rdquo;</p>
            <p className="mt-2 text-sm text-gray-700">
              &ldquo;I understand the pressure a new CFO brings. Let me help you make the case internally —
              I can put together a one-page ROI summary showing the regulatory risk of dropping your
              cyber program, the cost of a single SEC deficiency finding, and the LP retention risk.
              Would it be helpful if I also briefed your CFO directly? Sometimes hearing it from the
              provider carries different weight.&rdquo;
            </p>
          </div>
          <div className="rounded-md border border-gray-200 bg-white p-4">
            <p className="text-sm font-medium text-red-700">&ldquo;We&apos;re happy with Drawbridge — just send over the same contract.&rdquo;</p>
            <p className="mt-2 text-sm text-gray-700">
              &ldquo;That&apos;s great to hear. Before I send the renewal, I want to make sure we&apos;re set up
              for the year ahead — a lot has changed in the regulatory landscape since we last
              signed. Can we do a quick 30-minute review to make sure your program covers the
              new Reg S-P requirements and any changes to your firm? I&apos;d hate to find a gap
              during DDQ season.&rdquo;
              <span className="block mt-1 text-xs text-gray-500 italic">
                (This is the moment most order-takers miss. &ldquo;Just send the same contract&rdquo; is
                an invitation to flat-renew. A strategic RM turns it into a value conversation
                that often leads to expansion.)
              </span>
            </p>
          </div>
          <div className="rounded-md border border-gray-200 bg-white p-4">
            <p className="text-sm font-medium text-red-700">&ldquo;We need to push the renewal out a few months.&rdquo;</p>
            <p className="mt-2 text-sm text-gray-700">
              &ldquo;I understand timing can be tricky. Two concerns with a gap: first, you&apos;d lose
              continuity on your monitoring and compliance evidence, which matters if you have
              DDQs or an exam in that window. Second, I can&apos;t guarantee the same pricing once
              we re-engage — our rates are increasing next quarter. What if we do a short bridge
              agreement to maintain coverage while we finalize the full renewal?&rdquo;
            </p>
          </div>
          <div className="rounded-md border border-gray-200 bg-white p-4">
            <p className="text-sm font-medium text-red-700">&ldquo;We don&apos;t think we need cybersecurity services anymore.&rdquo;</p>
            <p className="mt-2 text-sm text-gray-700">
              &ldquo;That&apos;s a bold call. Can I ask — has anything changed in the regulatory landscape
              that makes you more comfortable? The SEC just expanded Reg S-P with mandatory
              incident response programs, and cybersecurity has been an exam priority for 10
              straight years. I&apos;d want to make sure you&apos;re not creating exposure right before
              your next exam cycle. Would it make sense to at least keep the foundational
              program in place while we figure out what a right-sized engagement looks like?&rdquo;
            </p>
          </div>
        </div>
      </SubSection>

      {/* Multi-Year Deals */}
      <SectionHeading>The Multi-Year Play</SectionHeading>
      <SubSection icon="📅" title="When and How to Push Multi-Year Commitments">
        <p>
          Multi-year agreements are the gold standard for renewals. They provide revenue
          predictability, reduce renewal risk, and deepen the client relationship. But
          you have to earn them — a client won&apos;t commit to 3 years if you haven&apos;t
          demonstrated 1 year of value.
        </p>
        <p><strong>When to propose multi-year:</strong></p>
        <ul className="list-disc ml-5 space-y-1">
          <li>The client is asking for a discount — trade price for term</li>
          <li>You have a strong champion who may leave (lock in the relationship)</li>
          <li>Regulatory or compliance deadlines create urgency for long-term coverage</li>
          <li>The client is in a PE fundraising cycle (they need stable operations for LP diligence)</li>
        </ul>
        <p className="mt-2"><strong>How to frame it:</strong></p>
        <ul className="list-disc ml-5 space-y-1">
          <li>&ldquo;If we can commit to a 2-year term, I can hold the current rate instead of applying the standard increase. That saves you $X over the contract.&rdquo;</li>
          <li>&ldquo;A multi-year agreement means we can plan a more comprehensive program — training, assessments, and IR — on a predictable schedule. It also looks great in your LP reporting.&rdquo;</li>
          <li>&ldquo;Most of our enterprise clients are moving to multi-year to lock in capacity. With demand increasing around the new regulations, I&apos;d recommend securing your slot.&rdquo;</li>
        </ul>
      </SubSection>

      {/* Escalation */}
      <SectionHeading>When to Escalate</SectionHeading>
      <SubSection icon="⬆️" title="Escalation Is a Strategy, Not a Failure">
        <p>
          Bringing in your manager or a senior leader is not admitting defeat — it&apos;s
          a <strong>strategic move</strong> that changes the dynamic of the conversation.
          Know when to use it:
        </p>
        <ul className="list-disc ml-5 space-y-2">
          <li><strong>The decision-maker is above your contact</strong> — If your champion can&apos;t get approval, offer an exec-to-exec conversation. &ldquo;Would it be helpful if our VP joined the call with your CFO? Sometimes a peer-level conversation helps move things along.&rdquo;</li>
          <li><strong>The negotiation is stuck on price</strong> — A senior leader can sometimes unlock budget that a mid-level contact can&apos;t. Plus, it signals to the client that we take the relationship seriously enough to bring in leadership.</li>
          <li><strong>You&apos;re being asked for a concession outside your authority</strong> — Never make a promise you can&apos;t keep. &ldquo;Let me bring in my VP on that — I want to make sure I can commit to what we agree to.&rdquo;</li>
          <li><strong>The client is at genuine churn risk</strong> — A save conversation from a senior leader carries more weight. It shows the client they matter to the organization, not just to one RM.</li>
        </ul>
        <p>
          <strong>Rule of thumb:</strong> escalate when the risk of <em>not</em> escalating
          is higher than the cost of asking for help. When in doubt, escalate early.
        </p>
      </SubSection>

      {/* Save Playbook */}
      <SectionHeading>The Save Playbook: At-Risk Accounts</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed">
        When an account is genuinely at risk — 2+ churn signals, client expressing dissatisfaction,
        or competitive evaluation underway — the standard negotiation playbook doesn&apos;t apply.
        You need a structured save approach. A saved account is worth more than two new logos.
      </p>

      <SubSection icon="🚨" title="The Save Framework: RESET">
        <div className="mt-3 space-y-3">
          <div className="rounded-md border border-gray-200 bg-white p-4">
            <p className="text-sm font-bold text-db-dark">R — Recognize the Risk Honestly</p>
            <p className="mt-1 text-sm text-gray-700">
              Don&apos;t sugarcoat it internally or externally. Name what&apos;s happening: &ldquo;I think this
              account is at risk. Here&apos;s what I&apos;m seeing.&rdquo; Flag it in your forecast, tell your
              VP, and brief CS. Pretending the renewal is fine when it isn&apos;t is how accounts churn
              &ldquo;unexpectedly.&rdquo;
            </p>
          </div>
          <div className="rounded-md border border-gray-200 bg-white p-4">
            <p className="text-sm font-bold text-db-dark">E — Engage Immediately and Directly</p>
            <p className="mt-1 text-sm text-gray-700">
              Don&apos;t wait for the client to formally cancel. Call them. Be direct: &ldquo;I want to check
              in on how you&apos;re feeling about the program. I&apos;ve noticed [specific signal] and I want
              to make sure we&apos;re addressing anything that&apos;s not working.&rdquo; Directness builds trust.
              Avoidance erodes it.
            </p>
          </div>
          <div className="rounded-md border border-gray-200 bg-white p-4">
            <p className="text-sm font-bold text-db-dark">S — Surface the Real Issue</p>
            <p className="mt-1 text-sm text-gray-700">
              The stated reason is rarely the real reason. &ldquo;Budget&rdquo; usually means &ldquo;we don&apos;t see
              enough value to justify the spend.&rdquo; &ldquo;We&apos;re going in-house&rdquo; usually means &ldquo;we feel
              like we could do this ourselves because we don&apos;t see what you&apos;re doing.&rdquo; Ask open
              questions and listen for what&apos;s underneath: &ldquo;If budget weren&apos;t a factor, would you
              still want to change? What would make this a no-brainer to keep?&rdquo;
            </p>
          </div>
          <div className="rounded-md border border-gray-200 bg-white p-4">
            <p className="text-sm font-bold text-db-dark">E — Execute a Value Recovery</p>
            <p className="mt-1 text-sm text-gray-700">
              Once you understand the real issue, act fast. If it&apos;s low engagement — reactivate unused
              services within days, not weeks. If it&apos;s value perception — run an emergency SVR showing
              concrete impact. If it&apos;s the relationship — bring in a senior leader or change the team
              dynamic. The client needs to <em>feel</em> the value changing before they&apos;ll reconsider.
            </p>
          </div>
          <div className="rounded-md border border-gray-200 bg-white p-4">
            <p className="text-sm font-bold text-db-dark">T — Trade for Time, Then Earn It</p>
            <p className="mt-1 text-sm text-gray-700">
              If the client is leaning toward churning, your last play is a structured &ldquo;prove it&rdquo;
              period. Offer a short-term renewal (6 months, bridge quarter) with specific milestones:
              &ldquo;Give us 90 days. Here&apos;s exactly what we&apos;ll deliver and what the measurable outcome
              will be. If we don&apos;t hit these targets, you walk with no obligation.&rdquo; This works
              because it removes the client&apos;s risk and puts the burden on you to perform.
            </p>
          </div>
        </div>
      </SubSection>

      <SubSection icon="💡" title="Save Tactics That Work">
        <div className="mt-2 space-y-3">
          <div className="rounded-md border border-gray-200 bg-gray-50 p-4">
            <p className="text-sm font-bold text-db-dark">The Executive Touch</p>
            <p className="mt-1 text-sm text-gray-700">
              Have your VP or a senior leader reach out directly. This signals that the client
              matters to the organization, not just one RM. Keep it genuine — not a hostage
              negotiation. &ldquo;Chris mentioned you might have some concerns about the program.
              I wanted to hear directly from you.&rdquo;
            </p>
          </div>
          <div className="rounded-md border border-gray-200 bg-gray-50 p-4">
            <p className="text-sm font-bold text-db-dark">The Switching Cost Conversation</p>
            <p className="mt-1 text-sm text-gray-700">
              Most clients underestimate what switching actually costs. Walk them through it: 3-6
              months of onboarding, lost institutional knowledge, new provider learning their environment,
              gaps in compliance evidence, disrupted DDQ responses. &ldquo;You&apos;d be starting from scratch
              on things that took us 18 months to build.&rdquo;
            </p>
          </div>
          <div className="rounded-md border border-gray-200 bg-gray-50 p-4">
            <p className="text-sm font-bold text-db-dark">The Scope Restructure</p>
            <p className="mt-1 text-sm text-gray-700">
              If budget is genuinely the issue, restructure rather than discount. Move to a core
              package, defer expansion services, adjust payment terms. A smaller renewal you retain is
              always better than a full-price proposal the client declines. Protect the relationship —
              the scope can grow back.
            </p>
          </div>
          <div className="rounded-md border border-gray-200 bg-gray-50 p-4">
            <p className="text-sm font-bold text-db-dark">The Peer Comparison</p>
            <p className="mt-1 text-sm text-gray-700">
              Use benchmarking data: &ldquo;You&apos;re benchmarked against 1,200+ alternative investment firms.
              Walking away from that data point means your next ODD questionnaire comes without peer
              context — and that&apos;s increasingly what allocators are asking for.&rdquo;
            </p>
          </div>
        </div>
      </SubSection>

      <DrawbridgeAngle>
        <p>
          Every dollar of ARR you protect and grow compounds across the business. A
          5% average price increase across your book is worth more than a single large
          new deal. A churn save is worth more than two new logos. The math is
          simple: <strong>retention and expansion are the highest-ROI activities
          in the business</strong>.
        </p>
        <p>
          Your job is to make clients feel like they <em>can&apos;t afford to leave</em> — not
          through lock-in, but through genuine indispensability. When you&apos;re deeply
          embedded in their compliance program, their DDQ process, their incident
          response plan, and their board reporting, Drawbridge isn&apos;t a vendor anymore
          — it&apos;s infrastructure. That&apos;s the goal of every renewal conversation.
        </p>
      </DrawbridgeAngle>

    </>
  );
}
