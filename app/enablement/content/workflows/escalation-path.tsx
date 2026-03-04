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
        title="RM ↔ Client Success Operating Model"
        subtitle="A proposed framework for how RM and CS collaborate day-to-day and route issues when they arise — designed to be refined together."
      />

      <div className="rounded-lg border border-db-aqua/30 bg-db-aqua/5 p-4 mt-2">
        <p className="text-sm text-db-dark">
          <strong>Proposed Operating Model.</strong> This document is a starting point for aligning
          RM and CS leadership on how our teams work together. It&apos;s meant to be reviewed and
          refined jointly by the Head of CS and VP of RM before being shared broadly.
        </p>
      </div>

      {/* Purpose */}
      <SectionHeading>Purpose</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed">
        RM and CS are both client-facing, and our teams interact constantly — that&apos;s by design.
        <strong> Relationship Managers</strong> own the commercial relationship: renewals, expansion,
        executive engagement, and strategic account planning. <strong>Client Success</strong> (Cyber Security
        Advisors and Tech Advisors) owns delivery: assessments, advisory engagements, policy work,
        and technical implementation.
      </p>
      <p className="mt-3 text-sm text-gray-700 leading-relaxed">
        Most of the time, this works naturally. But when issues arise — a delivery gap, a client
        complaint, a scope question — it helps to have a shared understanding of who owns the
        resolution and how information flows between teams. This framework aims to:
      </p>
      <ul className="mt-2 text-sm text-gray-700 space-y-1">
        <li>&#8226; Clarify ownership so issues get resolved quickly by the right people</li>
        <li>&#8226; Keep both teams informed without creating unnecessary overhead</li>
        <li>&#8226; Present a coordinated front to clients — one team, not two silos</li>
        <li>&#8226; Protect everyone&apos;s time by resolving issues at the appropriate level</li>
        <li>&#8226; Make sure nothing falls through the cracks</li>
      </ul>

      {/* Day-to-Day Collaboration */}
      <SectionHeading>Day-to-Day Collaboration</SectionHeading>
      <div className="mt-3 rounded-xl border border-green-200 bg-green-50/50 p-5">
        <p className="text-sm text-gray-700 leading-relaxed">
          Before talking about escalation, it&apos;s worth stating the obvious: <strong>IC-to-IC
          collaboration between RMs and CS Advisors is normal, expected, and encouraged.</strong> Our
          teams work together every day — shared Slack channels, joint client calls, informal
          coordination on account priorities. That&apos;s how it should be.
        </p>
        <p className="mt-3 text-sm text-gray-700 leading-relaxed">
          This document is <em>not</em> about restricting who can talk to whom. It&apos;s about what
          happens when an <strong>issue needs to be escalated</strong> — who owns the resolution,
          and how it moves between teams. Day-to-day collaboration continues as it always has.
        </p>
        <div className="mt-4 grid grid-cols-3 gap-3">
          <div className="rounded-lg bg-white border border-green-200 p-3 text-center">
            <p className="text-xs font-semibold text-green-700">Shared Account Channels</p>
            <p className="text-xs text-gray-500 mt-1">RMs and Advisors coordinate in real time</p>
          </div>
          <div className="rounded-lg bg-white border border-green-200 p-3 text-center">
            <p className="text-xs font-semibold text-green-700">Joint Client Calls</p>
            <p className="text-xs text-gray-500 mt-1">Both teams participate when it makes sense</p>
          </div>
          <div className="rounded-lg bg-white border border-green-200 p-3 text-center">
            <p className="text-xs font-semibold text-green-700">Informal Check-ins</p>
            <p className="text-xs text-gray-500 mt-1">Quick syncs on account status and priorities</p>
          </div>
        </div>
      </div>

      {/* Org Context */}
      <SectionHeading>Organizational Context</SectionHeading>
      <div className="mt-3 grid grid-cols-2 gap-4">
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-db-aqua-dark">Relationship Management</p>
          <div className="mt-3 space-y-2 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-db-aqua/20 text-xs font-bold text-db-aqua-dark">L4</span>
              <span>VP, Relationship Management</span>
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
              <span>Head of Client Success</span>
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

      {/* The Core Idea */}
      <SubSection icon="🎯" title="The Core Idea">
        <p>
          When delivery issues come up, <strong>CS owns the resolution through their management
          chain</strong> — they&apos;re closest to the work and best positioned to fix it. When an
          issue has commercial or relationship implications, it crosses to RM. This keeps each
          team focused on what they do best: CS on delivery execution, RM on the strategic relationship.
        </p>
        <p>
          The same principle works in both directions: when RMs need delivery changes to support
          a commercial conversation, that request is best routed through CS management so it
          gets properly prioritized alongside other delivery commitments.
        </p>
      </SubSection>

      {/* Escalation Levels */}
      <SectionHeading>Escalation Levels</SectionHeading>
      <p className="text-sm text-gray-500 mt-1">
        These levels describe <strong>who owns resolution</strong> as an issue grows in complexity or impact — not who&apos;s allowed to communicate.
      </p>

      {/* Level 1 */}
      <div className="mt-4 rounded-xl border-2 border-gray-200 bg-white overflow-hidden">
        <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 text-lg font-bold text-green-700">L1</span>
            <div>
              <h3 className="text-lg font-bold font-heading text-db-dark">Advisor-Level Resolution</h3>
              <p className="text-sm text-gray-500 mt-0.5">CS Advisor owns it — handles directly with the client</p>
            </div>
          </div>
        </div>
        <div className="px-6 py-5 space-y-4">
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Resolution Owner</p>
            <p className="mt-1 text-sm text-gray-700">Cyber Security Advisor or Tech Advisor working directly with the client</p>
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
            <p className="mt-1 text-sm text-gray-700">Advisor resolves directly with the client. Logs resolution if relevant to account health.</p>
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
              <h3 className="text-lg font-bold font-heading text-db-dark">CS Manager Resolution</h3>
              <p className="text-sm text-gray-500 mt-0.5">CS Manager owns it — delivery escalation stays within CS</p>
            </div>
          </div>
        </div>
        <div className="px-6 py-5 space-y-4">
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Resolution Owner</p>
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
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Why This Level Matters</p>
            <p className="mt-1 text-sm text-gray-700">
              This is where most delivery issues get resolved. CS Managers are closest to the work,
              know their team&apos;s capacity, and can adjust delivery plans, reassign resources, or
              coach advisors. <strong>When CS owns resolution at this level, it keeps RM focused on
              the strategic relationship</strong> rather than getting pulled into delivery execution.
            </p>
          </div>
          <div className="rounded-md bg-blue-50 border border-blue-200 p-3">
            <p className="text-xs text-blue-700"><strong>RM Visibility:</strong> CS Manager sends a brief heads-up to the assigned RM if the issue is visible to the client or may affect the relationship. Informational — not asking RM to act.</p>
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
              <p className="text-sm text-gray-500 mt-0.5">CS Manager ↔ RM — when delivery meets the commercial relationship</p>
            </div>
          </div>
        </div>
        <div className="px-6 py-5 space-y-4">
          <div className="rounded-md bg-db-aqua/5 border border-db-aqua/20 p-3">
            <p className="text-sm text-db-dark">
              This is where delivery issues cross into relationship territory (or vice versa). The
              recommended pattern is <strong>CS Manager ↔ RM</strong> as the coordination point,
              since CS Managers have full context on the delivery situation and RMs have context on
              the commercial relationship. This pairing ensures both sides of the picture are represented.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Resolution Owners</p>
            <p className="mt-1 text-sm text-gray-700">CS Manager + Relationship Manager for the account — jointly</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">When Delivery Issues Reach RM</p>
            <ul className="mt-1 text-sm text-gray-700 space-y-1">
              <li>&#8226; Client is expressing significant dissatisfaction or raising renewal concerns</li>
              <li>&#8226; Delivery issue has commercial implications (scope change, pricing conversation needed)</li>
              <li>&#8226; Client executive has raised concerns that need a relationship-level response</li>
              <li>&#8226; Issue has been worked at L2 but the client isn&apos;t satisfied with the resolution</li>
              <li>&#8226; RM needs to proactively manage client expectations or reset the narrative</li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">When Commercial Context Reaches CS</p>
            <ul className="mt-1 text-sm text-gray-700 space-y-1">
              <li>&#8226; Client raised a delivery concern directly with the RM</li>
              <li>&#8226; RM identified a delivery gap during a QBR or renewal conversation</li>
              <li>&#8226; Expansion opportunity that requires delivery team input on feasibility</li>
              <li>&#8226; Strategic account planning that needs CS alignment on priorities</li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">How It Works</p>
            <p className="mt-1 text-sm text-gray-700">
              CS Manager and RM connect directly (Slack, call, or quick huddle) to align on the
              issue and agree on who takes the next action with the client. Both parties leave
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
              <h3 className="text-lg font-bold font-heading text-db-dark">Leadership Alignment</h3>
              <p className="text-sm text-gray-500 mt-0.5">Head of CS ↔ VP of RM — systemic or high-impact issues</p>
            </div>
          </div>
        </div>
        <div className="px-6 py-5 space-y-4">
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Resolution Owners</p>
            <p className="mt-1 text-sm text-gray-700">Head of CS and/or VP of RM — and often both together</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">When This Happens</p>
            <ul className="mt-1 text-sm text-gray-700 space-y-1">
              <li>&#8226; L3 coordination between CS Manager and RM hasn&apos;t resolved the issue</li>
              <li>&#8226; The issue is systemic — a pattern across multiple clients, not a one-off</li>
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
                <p className="text-sm text-gray-700">CS Manager escalates to Head of CS, who decides whether to loop in VP of RM or handle within CS.</p>
              </div>
              <div className="flex items-start gap-3 rounded-md border border-gray-200 bg-gray-50 p-3">
                <span className="shrink-0 text-sm font-bold text-db-aqua-dark">RM →</span>
                <p className="text-sm text-gray-700">RM escalates to VP of RM, who decides whether to engage Head of CS or resolve directly.</p>
              </div>
              <div className="flex items-start gap-3 rounded-md border border-gray-200 bg-gray-50 p-3">
                <span className="shrink-0 text-sm font-bold text-db-dark">Joint →</span>
                <p className="text-sm text-gray-700">When both sides are involved, Head of CS and VP of RM align directly before taking action with the client.</p>
              </div>
            </div>
          </div>
          <div className="rounded-md bg-orange-50 border border-orange-200 p-3">
            <p className="text-xs text-orange-700"><strong>Recommended path:</strong> Issues arrive at leadership with full context when they&apos;ve moved through the levels — IC → CS Manager → Head of CS, or IC RM → VP of RM. This gives leadership what they need to act quickly.</p>
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
              <p className="text-[10px] text-gray-400 mt-0.5">Owns resolution at L1</p>
            </div>
          </div>
          <div className="text-gray-300 px-2">→</div>
          <div className="text-center">
            <div className="rounded-lg bg-orange-50 border border-orange-200 px-4 py-3 w-36">
              <p className="font-bold text-orange-700 text-xs">CS Manager</p>
              <p className="text-[10px] text-gray-400 mt-0.5">Owns resolution at L2</p>
            </div>
          </div>
          <div className="text-gray-300 px-2">→</div>
          {/* Crossing Point */}
          <div className="text-center">
            <div className="rounded-lg bg-db-aqua/10 border-2 border-db-aqua px-4 py-3 w-44">
              <p className="font-bold text-db-aqua-dark text-xs">CS Manager ↔ RM</p>
              <p className="text-[10px] text-gray-400 mt-0.5">Joint ownership at L3</p>
            </div>
          </div>
          <div className="text-gray-300 px-2">→</div>
          {/* Leadership */}
          <div className="text-center">
            <div className="rounded-lg bg-orange-50 border border-orange-200 px-4 py-3 w-36">
              <p className="font-bold text-orange-700 text-xs">Head of CS</p>
              <p className="text-[10px] text-gray-400 mt-0.5">L4 — CS leadership</p>
            </div>
          </div>
          <div className="text-gray-300 px-2">↔</div>
          <div className="text-center">
            <div className="rounded-lg bg-db-aqua/10 border border-db-aqua px-4 py-3 w-36">
              <p className="font-bold text-db-aqua-dark text-xs">VP of RM</p>
              <p className="text-[10px] text-gray-400 mt-0.5">L4 — RM leadership</p>
            </div>
          </div>
        </div>
      </div>

      {/* Proposed Operating Norms */}
      <SectionHeading>Proposed Operating Norms</SectionHeading>
      <div className="mt-3 grid grid-cols-2 gap-4">
        <div className="rounded-lg border border-green-200 bg-green-50 p-4">
          <p className="text-sm font-bold text-green-700 mb-2">What Works Well</p>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>&#8226; RMs and CS Advisors collaborating directly in shared account channels</li>
            <li>&#8226; CS Managers looping in RMs when client-visible issues are in play, even when CS is handling it</li>
            <li>&#8226; RMs routing delivery-related requests through CS Managers for proper prioritization</li>
            <li>&#8226; Both sides documenting issues and resolutions for account continuity</li>
            <li>&#8226; When in doubt, over-communicating — a quick Slack message goes a long way</li>
          </ul>
        </div>
        <div className="rounded-lg border border-amber-200 bg-amber-50 p-4">
          <p className="text-sm font-bold text-amber-700 mb-2">What We Want to Avoid</p>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>&#8226; Delivery issues bypassing CS management and landing on RMs by default</li>
            <li>&#8226; Either side surprising the other in front of a client</li>
            <li>&#8226; Delivery complaints bouncing back to the client without internal coordination</li>
            <li>&#8226; Issues sitting unresolved because &ldquo;it&apos;s the other team&apos;s problem&rdquo;</li>
            <li>&#8226; Skipping levels — issues arriving at leadership without context from the teams closest to the work</li>
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
            <span>CS Manager steps in if client still unsatisfied</span>
            <span className="text-gray-300">→</span>
            <span className="rounded-full bg-db-aqua/20 text-db-aqua-dark px-2 py-0.5 font-medium">L3</span>
            <span>CS Manager loops in RM if renewal risk emerges</span>
          </div>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <p className="text-sm font-bold text-db-dark">Client asks advisor for services outside SOW</p>
          <div className="mt-2 flex items-center gap-2 text-xs text-gray-500">
            <span className="rounded-full bg-blue-100 text-blue-700 px-2 py-0.5 font-medium">L2</span>
            <span>Advisor flags to CS Manager</span>
            <span className="text-gray-300">→</span>
            <span className="rounded-full bg-db-aqua/20 text-db-aqua-dark px-2 py-0.5 font-medium">L3</span>
            <span>CS Manager connects with RM for scoping / commercial discussion</span>
          </div>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <p className="text-sm font-bold text-db-dark">Client executive emails VP of RM about a delivery problem</p>
          <div className="mt-2 flex items-center gap-2 text-xs text-gray-500">
            <span className="rounded-full bg-orange-100 text-orange-700 px-2 py-0.5 font-medium">L4</span>
            <span>VP of RM connects with Head of CS to understand the issue</span>
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
          This is a starting point for alignment between RM and CS leadership — not a finished
          product. The goal is to capture how we think these teams can best work together, then
          refine it based on real-world experience and input from CS leadership.
        </p>
        <p>
          When we get this right, clients see one coordinated team. Issues get resolved by the
          people closest to them. And both teams stay focused on what they do best — CS on
          delivering great work, RM on building lasting client relationships.
        </p>
      </DrawbridgeAngle>
    </>
  );
}
