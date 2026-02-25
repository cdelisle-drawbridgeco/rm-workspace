'use client';

import React from 'react';
import {
  HeroSection,
  SectionHeading,
  SubSection,
  DrawbridgeAngle,
} from '../../components/shared-ui';

export default function EscalationPath() {
  return (
    <>
      <HeroSection
        icon="🔀"
        title="RM ↔ Client Success Escalation Path"
        subtitle="A shared framework for routing delivery issues efficiently — so the right people are involved at the right time."
      />

      <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 mt-2">
        <p className="text-sm text-amber-800">
          <strong>DRAFT — For Collaboration.</strong> This document is a starting point for aligning
          the RM and Client Success teams on escalation norms. It is intended to be refined together
          with CS leadership before being finalized.
        </p>
      </div>

      {/* Purpose */}
      <SectionHeading>Purpose</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed">
        Both the RM and Client Success teams are client-facing, but they serve different functions.
        <strong> Relationship Managers</strong> own the commercial relationship — renewals, expansion,
        executive engagement, and strategic account planning. <strong>Client Success</strong> (Cyber Security
        Advisors and Tech Advisors) own delivery — assessments, advisory engagements, policy work,
        and technical implementation.
      </p>
      <p className="mt-3 text-sm text-gray-700 leading-relaxed">
        When delivery issues arise, they need to be resolved quickly — but through the right channels.
        This document defines a clear escalation path so that:
      </p>
      <ul className="mt-2 text-sm text-gray-700 space-y-1">
        <li>&#8226; CS teams resolve what they can within their own chain before crossing to RM</li>
        <li>&#8226; RMs aren&apos;t pulled into delivery issues that CS management can handle</li>
        <li>&#8226; Clients experience a coordinated team — not competing points of contact</li>
        <li>&#8226; Senior leadership is protected from issues that should be resolved at lower levels</li>
        <li>&#8226; Nothing falls through the cracks — every issue has a clear owner and next step</li>
      </ul>

      {/* Org Context */}
      <SectionHeading>Organizational Context</SectionHeading>
      <div className="mt-3 grid grid-cols-2 gap-4">
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-db-aqua-dark">Relationship Management</p>
          <div className="mt-3 space-y-2 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-db-aqua/20 text-xs font-bold text-db-aqua-dark">L4</span>
              <span>VP, Relationship Management <span className="text-gray-400">(you)</span></span>
            </div>
            <div className="ml-4 border-l-2 border-gray-200 pl-3">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-db-aqua/20 text-xs font-bold text-db-aqua-dark">L1</span>
                <span>Relationship Managers <span className="text-gray-400">(ICs)</span></span>
              </div>
            </div>
          </div>
          <p className="mt-3 text-xs text-gray-400">Flat structure — ICs report directly to VP</p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-db-aqua-dark">Client Success</p>
          <div className="mt-3 space-y-2 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-orange-100 text-xs font-bold text-orange-600">L4</span>
              <span>Head of Client Success <span className="text-gray-400">(Chris Grillo)</span></span>
            </div>
            <div className="ml-4 border-l-2 border-gray-200 pl-3 space-y-2">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-orange-100 text-xs font-bold text-orange-600">L3</span>
                <span>CS Managers <span className="text-gray-400">(middle management)</span></span>
              </div>
              <div className="ml-4 border-l-2 border-gray-200 pl-3 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-orange-100 text-xs font-bold text-orange-600">L1</span>
                  <span>Cyber Security Advisors <span className="text-gray-400">(ICs)</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-orange-100 text-xs font-bold text-orange-600">L1</span>
                  <span>Tech Advisors <span className="text-gray-400">(ICs)</span></span>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-3 text-xs text-gray-400">Layered structure — ICs → Managers → Head of CS</p>
        </div>
      </div>

      {/* The Core Principle */}
      <SubSection icon="🎯" title="The Core Principle">
        <p>
          <strong>Delivery issues should exhaust the CS chain before crossing to RM.</strong> This
          isn&apos;t about creating barriers — it&apos;s about making sure the people closest to the work
          have the first opportunity to resolve it, and that when an issue does reach RM, it comes
          with context, not just a problem.
        </p>
        <p>
          The same principle applies in reverse: RMs should not go directly to CS ICs to request
          delivery changes. Commercial requests that affect delivery scope should route through
          CS management.
        </p>
      </SubSection>

      {/* Escalation Levels */}
      <SectionHeading>Escalation Levels</SectionHeading>

      {/* Level 1 */}
      <div className="mt-4 rounded-xl border-2 border-gray-200 bg-white overflow-hidden">
        <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 text-lg font-bold text-green-700">L1</span>
            <div>
              <h3 className="text-lg font-bold font-heading text-db-dark">Advisor-Level Resolution</h3>
              <p className="text-sm text-gray-500 mt-0.5">CS Advisors handle directly — no escalation needed</p>
            </div>
          </div>
        </div>
        <div className="px-6 py-5 space-y-4">
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Who&apos;s Involved</p>
            <p className="mt-1 text-sm text-gray-700">Cyber Security Advisors and/or Tech Advisors working directly with the client</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Types of Issues</p>
            <ul className="mt-1 text-sm text-gray-700 space-y-1">
              <li>&#8226; Scheduling conflicts or delivery timeline adjustments</li>
              <li>&#8226; Clarification on deliverable scope or client expectations</li>
              <li>&#8226; Minor client feedback on work product quality</li>
              <li>&#8226; Day-to-day coordination questions with the client</li>
              <li>&#8226; Technical questions the advisor can research and resolve</li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Expected Resolution</p>
            <p className="mt-1 text-sm text-gray-700">Advisor resolves directly with the client. No RM involvement needed. Advisor logs resolution if relevant to account health.</p>
          </div>
          <div className="rounded-md bg-green-50 border border-green-200 p-3">
            <p className="text-xs text-green-700"><strong>RM Visibility:</strong> None required. RMs may hear about it in regular account syncs but don&apos;t need to be looped in real-time.</p>
          </div>
        </div>
      </div>

      {/* Level 2 */}
      <div className="mt-4 rounded-xl border-2 border-gray-200 bg-white overflow-hidden">
        <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-lg font-bold text-blue-700">L2</span>
            <div>
              <h3 className="text-lg font-bold font-heading text-db-dark">CS Manager Escalation</h3>
              <p className="text-sm text-gray-500 mt-0.5">Advisor escalates to their CS Manager</p>
            </div>
          </div>
        </div>
        <div className="px-6 py-5 space-y-4">
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Who&apos;s Involved</p>
            <p className="mt-1 text-sm text-gray-700">CS Manager (the advisor&apos;s direct manager)</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Types of Issues</p>
            <ul className="mt-1 text-sm text-gray-700 space-y-1">
              <li>&#8226; Client dissatisfaction with a deliverable that the advisor can&apos;t resolve alone</li>
              <li>&#8226; Resource conflicts — advisor needs support or a reassignment</li>
              <li>&#8226; Scope disagreements between what was sold and what&apos;s being delivered</li>
              <li>&#8226; Client requesting work outside the current SOW</li>
              <li>&#8226; Quality concerns that need a second set of eyes</li>
              <li>&#8226; Advisor-client relationship friction</li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Expected Resolution</p>
            <p className="mt-1 text-sm text-gray-700">
              CS Manager works with the advisor to resolve. May involve reassigning resources,
              coaching the advisor, adjusting the delivery plan, or having a direct conversation
              with the client. <strong>Most delivery issues should be resolved here.</strong>
            </p>
          </div>
          <div className="rounded-md bg-blue-50 border border-blue-200 p-3">
            <p className="text-xs text-blue-700"><strong>RM Visibility:</strong> CS Manager sends a brief heads-up to the assigned RM if the issue is visible to the client or may affect the relationship. Informational — not asking for RM action.</p>
          </div>
        </div>
      </div>

      {/* Level 3 — Cross-Team */}
      <div className="mt-4 rounded-xl border-2 border-db-aqua bg-white overflow-hidden">
        <div className="bg-db-aqua/10 px-6 py-4 border-b border-db-aqua/20">
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-db-aqua/20 text-lg font-bold text-db-aqua-dark">L3</span>
            <div>
              <h3 className="text-lg font-bold font-heading text-db-dark">Cross-Team Coordination</h3>
              <p className="text-sm text-gray-500 mt-0.5">CS Manager → RM (or RM → CS Manager) — the handoff point</p>
            </div>
          </div>
        </div>
        <div className="px-6 py-5 space-y-4">
          <div className="rounded-md bg-db-aqua/5 border border-db-aqua/20 p-3">
            <p className="text-sm text-db-dark">
              <strong>This is the critical boundary.</strong> L3 is where delivery issues cross from
              CS into RM territory (or vice versa). The key rule: <strong>CS Managers are the bridge to
              RM — not CS ICs.</strong> An advisor should never go directly to an RM with a delivery
              escalation. Similarly, RMs should route delivery-impacting requests through CS Managers,
              not directly to advisors.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Who&apos;s Involved</p>
            <p className="mt-1 text-sm text-gray-700">CS Manager + Relationship Manager for the account</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">When CS Escalates to RM</p>
            <ul className="mt-1 text-sm text-gray-700 space-y-1">
              <li>&#8226; Client is threatening to not renew or expressing significant dissatisfaction</li>
              <li>&#8226; Delivery issue has commercial implications (scope change, pricing conversation needed)</li>
              <li>&#8226; Client executive has raised concerns that need a relationship-level response</li>
              <li>&#8226; Issue has been worked at L2 but the client isn&apos;t satisfied with the resolution</li>
              <li>&#8226; RM needs to proactively manage client expectations or reset the narrative</li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">When RM Escalates to CS</p>
            <ul className="mt-1 text-sm text-gray-700 space-y-1">
              <li>&#8226; Client raised a delivery concern directly with the RM</li>
              <li>&#8226; RM identified a delivery gap during a QBR or renewal conversation</li>
              <li>&#8226; Expansion opportunity that requires delivery team input on feasibility</li>
              <li>&#8226; Strategic account planning that needs CS alignment on priorities</li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Expected Behavior</p>
            <p className="mt-1 text-sm text-gray-700">
              CS Manager and RM connect directly (Slack, call, or quick meeting) to align on the
              issue and agree on who takes the next action with the client. Both parties should leave
              with a clear owner and timeline.
            </p>
          </div>
          <div className="rounded-md bg-db-aqua/5 border border-db-aqua/20 p-3">
            <p className="text-xs text-db-aqua-dark"><strong>RM Visibility:</strong> Full. RM is an active participant in resolution at this level.</p>
          </div>
        </div>
      </div>

      {/* Level 4 — Leadership */}
      <div className="mt-4 rounded-xl border-2 border-orange-200 bg-white overflow-hidden">
        <div className="bg-orange-50 px-6 py-4 border-b border-orange-200">
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-100 text-lg font-bold text-orange-600">L4</span>
            <div>
              <h3 className="text-lg font-bold font-heading text-db-dark">Leadership Escalation</h3>
              <p className="text-sm text-gray-500 mt-0.5">Head of CS and/or VP of RM — executive involvement</p>
            </div>
          </div>
        </div>
        <div className="px-6 py-5 space-y-4">
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Who&apos;s Involved</p>
            <p className="mt-1 text-sm text-gray-700">Chris Grillo (Head of CS) and/or VP of RM — and potentially both together</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">When This Happens</p>
            <ul className="mt-1 text-sm text-gray-700 space-y-1">
              <li>&#8226; L3 coordination between CS Manager and RM hasn&apos;t resolved the issue</li>
              <li>&#8226; The issue is systemic — not account-specific but pattern-based across clients</li>
              <li>&#8226; Significant revenue at risk (large renewal, multi-year deal, strategic account)</li>
              <li>&#8226; Cross-functional process breakdown that needs structural change</li>
              <li>&#8226; Client executive (C-suite) has escalated directly and needs a leadership response</li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Routing</p>
            <div className="mt-2 space-y-2">
              <div className="flex items-start gap-3 rounded-md border border-gray-200 bg-gray-50 p-3">
                <span className="shrink-0 text-sm font-bold text-orange-600">CS →</span>
                <p className="text-sm text-gray-700">CS Manager escalates to <strong>Chris Grillo</strong>. Grillo decides whether to loop in VP of RM or handle within CS.</p>
              </div>
              <div className="flex items-start gap-3 rounded-md border border-gray-200 bg-gray-50 p-3">
                <span className="shrink-0 text-sm font-bold text-db-aqua-dark">RM →</span>
                <p className="text-sm text-gray-700">RM escalates to <strong>VP of RM</strong>. VP decides whether to engage Grillo or resolve directly.</p>
              </div>
              <div className="flex items-start gap-3 rounded-md border border-gray-200 bg-gray-50 p-3">
                <span className="shrink-0 text-sm font-bold text-db-dark">Joint →</span>
                <p className="text-sm text-gray-700">When both sides are involved, Grillo and VP of RM align directly before taking action with the client.</p>
              </div>
            </div>
          </div>
          <div className="rounded-md bg-orange-50 border border-orange-200 p-3">
            <p className="text-xs text-orange-700"><strong>Important:</strong> CS ICs should never escalate directly to the VP of RM. The path is always IC → CS Manager → Head of CS → VP of RM (if needed). This protects both teams and ensures issues arrive with full context.</p>
          </div>
        </div>
      </div>

      {/* Visual Flow */}
      <SectionHeading>Escalation Flow — At a Glance</SectionHeading>
      <div className="mt-4 rounded-lg border border-gray-200 bg-white p-6">
        <div className="flex items-center justify-center gap-0 text-sm">
          {/* CS Side */}
          <div className="text-center">
            <div className="rounded-lg bg-orange-50 border border-orange-200 px-4 py-3 w-36">
              <p className="font-bold text-orange-700 text-xs">CS Advisor</p>
              <p className="text-[10px] text-gray-400 mt-0.5">IC — resolves at L1</p>
            </div>
          </div>
          <div className="text-gray-300 px-2">→</div>
          <div className="text-center">
            <div className="rounded-lg bg-orange-50 border border-orange-200 px-4 py-3 w-36">
              <p className="font-bold text-orange-700 text-xs">CS Manager</p>
              <p className="text-[10px] text-gray-400 mt-0.5">L2 — most issues end here</p>
            </div>
          </div>
          <div className="text-gray-300 px-2">→</div>
          {/* Crossing Point */}
          <div className="text-center">
            <div className="rounded-lg bg-db-aqua/10 border-2 border-db-aqua px-4 py-3 w-44">
              <p className="font-bold text-db-aqua-dark text-xs">CS Manager ↔ RM</p>
              <p className="text-[10px] text-gray-400 mt-0.5">L3 — cross-team handoff</p>
            </div>
          </div>
          <div className="text-gray-300 px-2">→</div>
          {/* Leadership */}
          <div className="text-center">
            <div className="rounded-lg bg-orange-50 border border-orange-200 px-4 py-3 w-36">
              <p className="font-bold text-orange-700 text-xs">Head of CS</p>
              <p className="text-[10px] text-gray-400 mt-0.5">Grillo — L4 CS side</p>
            </div>
          </div>
          <div className="text-gray-300 px-2">↔</div>
          <div className="text-center">
            <div className="rounded-lg bg-db-aqua/10 border border-db-aqua px-4 py-3 w-36">
              <p className="font-bold text-db-aqua-dark text-xs">VP of RM</p>
              <p className="text-[10px] text-gray-400 mt-0.5">L4 RM side</p>
            </div>
          </div>
        </div>
      </div>

      {/* Ground Rules */}
      <SectionHeading>Ground Rules</SectionHeading>
      <div className="mt-3 grid grid-cols-2 gap-4">
        <div className="rounded-lg border border-green-200 bg-green-50 p-4">
          <p className="text-sm font-bold text-green-700 mb-2">Do</p>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>&#8226; CS Advisors: escalate to your manager first — always</li>
            <li>&#8226; CS Managers: give RMs a heads-up when client-visible issues are in play, even if you&apos;re handling it</li>
            <li>&#8226; RMs: route delivery concerns through CS Managers, not directly to advisors</li>
            <li>&#8226; Both sides: document the issue and resolution for account continuity</li>
            <li>&#8226; When in doubt, over-communicate — a quick Slack message goes a long way</li>
          </ul>
        </div>
        <div className="rounded-lg border border-red-200 bg-red-50 p-4">
          <p className="text-sm font-bold text-red-700 mb-2">Don&apos;t</p>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>&#8226; CS ICs: don&apos;t escalate directly to RMs — go through your CS Manager</li>
            <li>&#8226; CS ICs: don&apos;t escalate directly to the VP of RM — ever</li>
            <li>&#8226; RMs: don&apos;t redirect client delivery complaints back to the client without coordinating with CS</li>
            <li>&#8226; Either side: don&apos;t let an issue sit unresolved because &ldquo;it&apos;s the other team&apos;s problem&rdquo;</li>
            <li>&#8226; Either side: don&apos;t surprise the other team in front of a client</li>
          </ul>
        </div>
      </div>

      {/* Common Scenarios */}
      <SectionHeading>Common Scenarios</SectionHeading>
      <div className="mt-3 space-y-3">
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <p className="text-sm font-bold text-db-dark">Client unhappy with assessment quality</p>
          <div className="mt-2 flex items-center gap-2 text-xs text-gray-500">
            <span className="rounded-full bg-green-100 text-green-700 px-2 py-0.5 font-medium">L1</span>
            <span>Advisor reviews feedback and revises</span>
            <span className="text-gray-300">→</span>
            <span className="rounded-full bg-blue-100 text-blue-700 px-2 py-0.5 font-medium">L2</span>
            <span>CS Manager reviews if client still unsatisfied</span>
            <span className="text-gray-300">→</span>
            <span className="rounded-full bg-db-aqua/20 text-db-aqua-dark px-2 py-0.5 font-medium">L3</span>
            <span>CS Manager notifies RM if renewal risk</span>
          </div>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <p className="text-sm font-bold text-db-dark">Client asks advisor for services outside SOW</p>
          <div className="mt-2 flex items-center gap-2 text-xs text-gray-500">
            <span className="rounded-full bg-blue-100 text-blue-700 px-2 py-0.5 font-medium">L2</span>
            <span>Advisor flags to CS Manager</span>
            <span className="text-gray-300">→</span>
            <span className="rounded-full bg-db-aqua/20 text-db-aqua-dark px-2 py-0.5 font-medium">L3</span>
            <span>CS Manager connects with RM for scoping/commercial discussion</span>
          </div>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <p className="text-sm font-bold text-db-dark">Client executive emails VP of RM about a delivery problem</p>
          <div className="mt-2 flex items-center gap-2 text-xs text-gray-500">
            <span className="rounded-full bg-orange-100 text-orange-700 px-2 py-0.5 font-medium">L4</span>
            <span>VP of RM connects with Grillo to understand the issue</span>
            <span className="text-gray-300">→</span>
            <span className="rounded-full bg-db-aqua/20 text-db-aqua-dark px-2 py-0.5 font-medium">L3</span>
            <span>RM + CS Manager align on response</span>
          </div>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <p className="text-sm font-bold text-db-dark">Advisor running behind on deliverables for multiple clients</p>
          <div className="mt-2 flex items-center gap-2 text-xs text-gray-500">
            <span className="rounded-full bg-blue-100 text-blue-700 px-2 py-0.5 font-medium">L2</span>
            <span>CS Manager reprioritizes or reassigns</span>
            <span className="text-gray-300">→</span>
            <span className="rounded-full bg-db-aqua/20 text-db-aqua-dark px-2 py-0.5 font-medium">L3</span>
            <span>CS Manager proactively notifies affected RMs of adjusted timelines</span>
          </div>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <p className="text-sm font-bold text-db-dark">RM hears delivery praise during a renewal call</p>
          <div className="mt-2 flex items-center gap-2 text-xs text-gray-500">
            <span className="rounded-full bg-green-100 text-green-700 px-2 py-0.5 font-medium">L1</span>
            <span>RM passes the kudos back to CS Manager and advisor — positive feedback flows too</span>
          </div>
        </div>
      </div>

      {/* Communication Norms */}
      <SectionHeading>Communication Norms</SectionHeading>
      <div className="mt-3 rounded-md border border-gray-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left font-medium text-gray-600">Channel</th>
              <th className="px-4 py-2 text-left font-medium text-gray-600">When to Use</th>
              <th className="px-4 py-2 text-left font-medium text-gray-600">Response Time</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            <tr>
              <td className="px-4 py-2 font-medium text-db-dark">Slack (account channel)</td>
              <td className="px-4 py-2 text-gray-600">Quick heads-ups, status updates, non-urgent coordination</td>
              <td className="px-4 py-2 text-gray-600">Same business day</td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-medium text-db-dark">Slack (DM to CS Manager or RM)</td>
              <td className="px-4 py-2 text-gray-600">Time-sensitive L2/L3 issues that need quick alignment</td>
              <td className="px-4 py-2 text-gray-600">Within 2 hours</td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-medium text-db-dark">15-min call / huddle</td>
              <td className="px-4 py-2 text-gray-600">L3 cross-team issues that need real-time discussion</td>
              <td className="px-4 py-2 text-gray-600">Scheduled same day</td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-medium text-db-dark">Email</td>
              <td className="px-4 py-2 text-gray-600">Formal documentation of resolution, client-facing communication drafts</td>
              <td className="px-4 py-2 text-gray-600">Within 24 hours</td>
            </tr>
          </tbody>
        </table>
      </div>

      <DrawbridgeAngle>
        <p>
          This escalation path isn&apos;t about hierarchy or bureaucracy — it&apos;s about making sure
          clients experience one coordinated team, not two separate ones pointing at each other.
          When we get escalation right, issues get resolved faster, RMs stay focused on the
          relationship, CS stays focused on delivery, and clients see a team that has their back.
        </p>
        <p>
          This is a living document. As we use it, we&apos;ll learn what works and what needs adjustment.
          Feedback from both teams is expected and encouraged.
        </p>
      </DrawbridgeAngle>
    </>
  );
}
