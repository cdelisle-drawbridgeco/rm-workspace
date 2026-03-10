'use client';

import React from 'react';
import {
  HeroSection,
  SectionHeading,
  SubSection,
  DrawbridgeAngle,
  LastUpdated,
} from '../../components/shared-ui';

export default function EscalationPath() {
  return (
    <>
      <HeroSection
        icon="🔀"
        title="RM ↔ Client Success Operating Model"
        subtitle="A proposed framework for how RM and CS collaborate day-to-day and route issues when they arise — designed to be refined together."
      />
      <LastUpdated date="March 9, 2026" />

      <div className="rounded-lg border border-db-aqua/30 bg-db-aqua/5 p-4 mt-2">
        <p className="text-sm text-db-dark">
          <strong>Proposed Operating Model.</strong> This document captures how RM and CS work together
          day-to-day and how issues escalate when they arise. It&apos;s a shared framework meant
          to be refined over time based on what works in practice.
        </p>
      </div>

      {/* Purpose */}
      <SectionHeading>Purpose</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed">
        RM and CS are both client-facing, and our teams interact constantly — that&apos;s by design.
        Both teams have been presented on their roles and responsibilities (detailed below), and the
        day-to-day working relationship between RMs and CS Advisors is the engine that drives our
        client experience.
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
          teams work together every day — and that daily interaction is what makes the client
          experience feel seamless.
        </p>
        <p className="mt-3 text-sm text-gray-700 leading-relaxed">
          RMs and Advisors talk about their shared clients constantly. They coordinate in account
          channels, join calls together, share context informally, and flag things for each other.
          This is the foundation of how we serve clients well — and nothing in this document is
          meant to change that.
        </p>
        <p className="mt-3 text-sm text-gray-700 leading-relaxed">
          The escalation framework below is specifically about <strong>issue resolution
          ownership</strong> — when something goes wrong, who drives the fix? Day-to-day
          collaboration continues exactly as it always has.
        </p>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
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
          <div className="rounded-lg bg-white border border-green-200 p-3 text-center">
            <p className="text-xs font-semibold text-green-700">Cross-Team Context</p>
            <p className="text-xs text-gray-500 mt-1">Sharing what each side hears from the client</p>
          </div>
        </div>
      </div>

      {/* When Issues Surface Between ICs */}
      <SubSection icon="💬" title="When Issues Come Up Between ICs">
        <p>
          Because RMs and CS Advisors work so closely together, issues from both domains naturally
          come up in IC conversations. An advisor mentions a delivery delay. An RM shares that a
          client raised concerns during a renewal call. A scope question surfaces on a joint call.
          This cross-pollination is healthy — it means both teams are informed.
        </p>
        <p>
          <strong>The key is making sure issues get routed to the right owner</strong> rather than
          getting stuck with whoever heard about it first. The pattern is the same in both directions:
        </p>
        <div className="mt-3 grid grid-cols-2 gap-3">
          <div className="rounded-md border border-gray-200 bg-gray-50 p-4">
            <p className="text-sm font-semibold text-db-dark mb-2">When a delivery issue surfaces with the RM</p>
            <div className="space-y-2 text-sm text-gray-600">
              <p>&#8226; Acknowledge it — the advisor feels heard</p>
              <p>&#8226; Encourage the advisor to bring in their CS Manager if they haven&apos;t already</p>
              <p>&#8226; Note it for account awareness</p>
              <p>&#8226; If it could affect the relationship or renewal, engage at L3</p>
            </div>
          </div>
          <div className="rounded-md border border-gray-200 bg-gray-50 p-4">
            <p className="text-sm font-semibold text-db-dark mb-2">When a commercial issue surfaces with the advisor</p>
            <div className="space-y-2 text-sm text-gray-600">
              <p>&#8226; Acknowledge it — the client&apos;s concern is valid</p>
              <p>&#8226; Let the client know the RM is the right person for that conversation</p>
              <p>&#8226; Loop the RM in directly — it&apos;s a natural handoff</p>
              <p>&#8226; If it could affect delivery scope, flag it to CS Manager as well</p>
            </div>
          </div>
        </div>
        <div className="mt-3 rounded-md bg-db-aqua/5 border border-db-aqua/20 p-3">
          <p className="text-sm text-db-dark">
            <strong>The principle:</strong> Neither team absorbs issues that belong to the other.
            Both teams stay informed through the IC relationship, and both teams route to the
            right owner when something crosses domains. No walls, no silos — just clear ownership.
          </p>
        </div>
      </SubSection>

      {/* Org Context */}
      <SectionHeading>Organizational Context</SectionHeading>
      <div className="mt-3 grid grid-cols-2 gap-4">
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-db-aqua-dark">Relationship Management</p>
          <div className="mt-3 space-y-2 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-db-aqua/20 text-xs font-bold text-db-aqua-dark">VP</span>
              <span>VP, Relationship Management</span>
            </div>
            <div className="ml-4 border-l-2 border-gray-200 pl-3">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-db-aqua/20 text-xs font-bold text-db-aqua-dark">IC</span>
                <span>Relationship Managers</span>
              </div>
            </div>
          </div>
          <p className="mt-3 text-xs text-gray-400">Flat structure — ICs report directly to VP</p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-db-aqua-dark">Client Success</p>
          <div className="mt-3 space-y-2 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-orange-100 text-xs font-bold text-orange-600">VP</span>
              <span>Head of Client Success</span>
            </div>
            <div className="ml-4 border-l-2 border-gray-200 pl-3 space-y-2">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-orange-100 text-xs font-bold text-orange-600">Mgr</span>
                <span>CS Managers</span>
              </div>
              <div className="ml-4 border-l-2 border-gray-200 pl-3 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-orange-100 text-xs font-bold text-orange-600">IC</span>
                  <span>Cyber Security Advisors</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-orange-100 text-xs font-bold text-orange-600">IC</span>
                  <span>Tech Advisors</span>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-3 text-xs text-gray-400">Layered structure — ICs → Managers → Head of CS</p>
        </div>
      </div>
      <div className="mt-3 rounded-md bg-gray-50 border border-gray-200 p-3">
        <p className="text-sm text-gray-600">
          <strong>A note on structure:</strong> These two teams are organized differently — RM is
          flat, CS has a management layer. That means an RM (IC) and a CS Advisor (IC) are peers
          in terms of client work, even though the org charts look different. The escalation framework
          accounts for this asymmetry: CS Advisors have a manager to escalate delivery issues to;
          RMs escalate directly to the VP of RM.
        </p>
      </div>

      {/* Roles & Responsibilities */}
      <SectionHeading>Roles & Responsibilities</SectionHeading>
      <p className="text-sm text-gray-500 mt-1">
        Both teams have been aligned on these responsibilities. Understanding what each team owns — and
        what they don&apos;t — is what makes the escalation framework work in practice.
      </p>
      <div className="mt-3 grid grid-cols-2 gap-4">
        {/* RM */}
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-db-aqua-dark mb-3">Relationship Management</p>
          <div>
            <p className="text-xs font-semibold text-green-600 mb-1">We Own</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>&#8226; Strategic, lasting client relationships</li>
              <li>&#8226; Trusted advisor role — linking client outcomes to Drawbridge value</li>
              <li>&#8226; Post-sales commercial responsibilities (renewals, expansion)</li>
              <li>&#8226; Achieving outcomes and demonstrating value to protect Gross Retention</li>
              <li>&#8226; Identifying opportunities to drive Net Retention</li>
              <li>&#8226; Strategic account planning and executive engagement</li>
              <li>&#8226; Evangelizing Drawbridge service value</li>
            </ul>
          </div>
          <div className="mt-3">
            <p className="text-xs font-semibold text-amber-600 mb-1">We Don&apos;t Own</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>&#8226; Tactical delivery conversations</li>
              <li>&#8226; Project delivery execution</li>
              <li>&#8226; Reactive problem-solving on delivery issues</li>
            </ul>
          </div>
        </div>
        {/* CS */}
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-db-aqua-dark mb-3">Client Success</p>
          <div>
            <p className="text-xs font-semibold text-green-600 mb-1">We Own</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>&#8226; Delivering contracted products and services</li>
              <li>&#8226; Cyber advisory — interpreting data, clarifying threats, driving remediation</li>
              <li>&#8226; Insight-led narrative and clear value story for clients</li>
              <li>&#8226; Product quality standards and content ownership</li>
              <li>&#8226; Engagement expectations, timelines, and effort estimates</li>
              <li>&#8226; Improving client posture and Drawbridge score</li>
              <li>&#8226; Creating and monitoring remediation plans</li>
            </ul>
          </div>
          <div className="mt-3">
            <p className="text-xs font-semibold text-amber-600 mb-1">We Don&apos;t Own</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>&#8226; Setting or providing pricing</li>
              <li>&#8226; Commenting on invoices or payment timing</li>
              <li>&#8226; Managing third-party or white-labeled vendors</li>
              <li>&#8226; Selling products (especially without a SKU)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Handoff Boundaries */}
      <SubSection icon="🔄" title="Natural Handoff Points">
        <p>
          The &ldquo;We Don&apos;t Own&rdquo; lists above are where handoffs naturally occur. When a
          client asks a CS Advisor about pricing, that&apos;s an RM conversation. When a client
          raises a delivery concern with their RM, that&apos;s a CS conversation. These aren&apos;t
          walls — they&apos;re the moments where the IC pair (RM + Advisor) recognizes
          &ldquo;this one belongs to you&rdquo; and routes accordingly.
        </p>
        <div className="mt-3 grid grid-cols-2 gap-3">
          <div className="rounded-md bg-db-aqua/5 border border-db-aqua/20 p-3">
            <p className="text-xs font-semibold text-db-aqua-dark mb-1">Route to RM When...</p>
            <ul className="text-xs text-gray-600 space-y-1">
              <li>&#8226; Client asks about pricing, invoicing, or contract terms</li>
              <li>&#8226; Client wants to discuss renewal or expansion</li>
              <li>&#8226; Client raises strategic or executive-level concerns</li>
              <li>&#8226; Third-party vendor management questions come up</li>
            </ul>
          </div>
          <div className="rounded-md bg-orange-50 border border-orange-200 p-3">
            <p className="text-xs font-semibold text-orange-600 mb-1">Route to CS When...</p>
            <ul className="text-xs text-gray-600 space-y-1">
              <li>&#8226; Client has delivery quality or timeline concerns</li>
              <li>&#8226; Client needs scope clarification or effort estimates</li>
              <li>&#8226; Client asks about product capabilities or feasibility</li>
              <li>&#8226; Technical or advisory questions surface in RM conversations</li>
            </ul>
          </div>
        </div>
        <div className="mt-3 rounded-md bg-gray-50 border border-gray-200 p-3">
          <p className="text-xs text-gray-600">
            <strong>Sign-off note:</strong> Effort, capacity, and capability decisions are signed off by CS
            leadership. Pricing and market fit decisions are signed off by commercial leadership. When
            conversations cross these lines, that&apos;s a natural trigger for cross-team coordination.
          </p>
        </div>
      </SubSection>

      {/* The Core Idea */}
      <SubSection icon="🎯" title="The Core Idea">
        <p>
          <strong>RMs and CS Advisors are the primary working relationship on each account.</strong> They
          collaborate daily, share context, and coordinate on client needs. That&apos;s the engine
          that makes accounts work.
        </p>
        <p>
          When issues arise, each team has a clear escalation path. <strong>Delivery issues escalate
          through CS management</strong> — CS Managers know their team&apos;s capacity, can reassign
          resources, and have the authority to adjust delivery plans. <strong>Commercial and relationship
          issues escalate through RM leadership.</strong> Both ICs are empowered to route issues to
          the right owner — and because they work so closely together, neither team is in the dark
          when something escalates.
        </p>
        <p>
          When an issue spans both domains — delivery problems that affect the relationship, or
          commercial changes that affect delivery — that&apos;s when the teams formally coordinate
          at L3 to co-own the resolution.
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
              <h3 className="text-lg font-bold font-heading text-db-dark">IC-Level Resolution</h3>
              <p className="text-sm text-gray-500 mt-0.5">CS Advisor handles it — often in coordination with the RM</p>
            </div>
          </div>
        </div>
        <div className="px-6 py-5 space-y-4">
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Resolution Owner</p>
            <p className="mt-1 text-sm text-gray-700">CS Advisor (Cyber Security Advisor or Tech Advisor), with the RM as a natural collaborator on the account</p>
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
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">How This Works in Practice</p>
            <p className="mt-1 text-sm text-gray-700">
              The advisor resolves it directly with the client. Because RMs and advisors work closely
              together, the RM often knows about these issues already — they may come up in account
              channel conversations or on joint calls. That&apos;s normal. The advisor owns the fix,
              and the RM has natural visibility through the working relationship.
            </p>
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
              <p className="text-sm text-gray-500 mt-0.5">Delivery issue needs management support — CS Manager steps in</p>
            </div>
          </div>
        </div>
        <div className="px-6 py-5 space-y-4">
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Resolution Owner</p>
            <p className="mt-1 text-sm text-gray-700">CS Manager (the advisor&apos;s direct manager) — with input from the RM and advisor as needed</p>
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
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">How Issues Get Here</p>
            <p className="mt-1 text-sm text-gray-700">
              This can come from multiple directions. The advisor recognizes they need help and
              escalates to their manager. The RM hears about a delivery issue through their
              IC relationship and encourages the advisor to bring their manager in. Or the CS
              Manager proactively identifies a pattern across their team. However it arrives,
              CS management gets involved because the issue needs resources, authority, or
              oversight that goes beyond what the IC pair can handle.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Why This Level Matters</p>
            <p className="mt-1 text-sm text-gray-700">
              CS Managers can do things ICs can&apos;t — reassign resources, adjust delivery plans
              across accounts, coach advisors, or have management-level conversations with clients.
              This is where most delivery issues get resolved. Because the RM and advisor work
              closely together, the RM typically has awareness of the issue already. The CS Manager
              keeps the RM in the loop on anything that could affect the client relationship.
            </p>
          </div>
          <div className="rounded-md bg-blue-50 border border-blue-200 p-3">
            <p className="text-xs text-blue-700"><strong>Cross-team visibility:</strong> At this level, the CS Manager may reach out to the RM for additional client context or to coordinate on messaging. The RM doesn&apos;t own the delivery resolution, but both teams benefit from staying aligned.</p>
          </div>
        </div>
      </div>

      {/* Level 3 — Cross-Team */}
      <div className="mt-4 rounded-xl border-2 border-db-aqua bg-white overflow-hidden">
        <div className="bg-db-aqua/10 px-6 py-4 border-b border-db-aqua/20">
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-db-aqua/20 text-lg font-bold text-db-aqua-dark">L3</span>
            <div>
              <h3 className="text-lg font-bold font-heading text-db-dark">Joint Resolution</h3>
              <p className="text-sm text-gray-500 mt-0.5">Delivery issue has relationship or commercial impact — both teams actively own it</p>
            </div>
          </div>
        </div>
        <div className="px-6 py-5 space-y-4">
          <div className="rounded-md bg-db-aqua/5 border border-db-aqua/20 p-3">
            <p className="text-sm text-db-dark">
              L3 is when an issue formally spans both domains — delivery and commercial/relationship —
              and needs coordinated action from both teams to resolve. Because RMs and advisors
              work so closely together, both sides typically have context already. This level is
              about aligning on a joint plan of action rather than one team handing off to the other.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Resolution Owners</p>
            <p className="mt-1 text-sm text-gray-700">RM + CS Manager (and often the CS Advisor) — jointly, with each contributing their domain expertise</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">When Delivery Issues Need RM Ownership</p>
            <ul className="mt-1 text-sm text-gray-700 space-y-1">
              <li>&#8226; Client is expressing significant dissatisfaction or raising renewal concerns</li>
              <li>&#8226; Delivery issue has commercial implications (scope change, pricing conversation needed)</li>
              <li>&#8226; Client executive has raised concerns that need a relationship-level response</li>
              <li>&#8226; Issue has been worked at L2 but the client isn&apos;t satisfied with the resolution</li>
              <li>&#8226; RM needs to proactively manage client expectations or reset the narrative</li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">When Commercial Context Needs CS Action</p>
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
              The RM, CS Manager, and often the CS Advisor connect (Teams, call, or quick huddle) to
              align on the issue and agree on who takes the next action with the client. Everyone
              leaves with a clear owner and timeline. The advisor often stays involved since they
              have the deepest client context.
            </p>
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
      <SectionHeading>How It Fits Together</SectionHeading>
      <div className="mt-4 rounded-lg border border-gray-200 bg-white p-6">
        {/* Two-track layout */}
        <div className="space-y-6">
          {/* Day-to-day track */}
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3 text-center">Day-to-Day Working Relationship</p>
            <div className="flex items-center justify-center gap-4">
              <div className="rounded-lg bg-orange-50 border border-orange-200 px-4 py-3 w-36 text-center">
                <p className="font-bold text-orange-700 text-xs">CS Advisor</p>
                <p className="text-[10px] text-gray-400 mt-0.5">Delivery IC</p>
              </div>
              <div className="text-db-aqua-dark font-bold text-sm">↔</div>
              <div className="rounded-lg bg-db-aqua/10 border border-db-aqua px-4 py-3 w-36 text-center">
                <p className="font-bold text-db-aqua-dark text-xs">RM</p>
                <p className="text-[10px] text-gray-400 mt-0.5">Relationship IC</p>
              </div>
            </div>
            <p className="text-[10px] text-gray-400 text-center mt-2">Primary account partnership — collaborate daily on client needs</p>
          </div>

          <div className="border-t border-dashed border-gray-200" />

          {/* Escalation track */}
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3 text-center">When Issues Need Escalation</p>
            <div className="flex items-center justify-center gap-0 text-sm">
              <div className="text-center">
                <div className="rounded-lg bg-green-50 border border-green-200 px-3 py-3 w-40">
                  <p className="font-bold text-green-700 text-xs">L1 — IC Resolution</p>
                  <p className="text-[10px] text-gray-400 mt-0.5">Advisor handles, RM aware</p>
                </div>
              </div>
              <div className="text-gray-300 px-2">→</div>
              <div className="text-center">
                <div className="rounded-lg bg-blue-50 border border-blue-200 px-3 py-3 w-40">
                  <p className="font-bold text-blue-700 text-xs">L2 — CS Manager</p>
                  <p className="text-[10px] text-gray-400 mt-0.5">Delivery escalation within CS</p>
                </div>
              </div>
              <div className="text-gray-300 px-2">→</div>
              <div className="text-center">
                <div className="rounded-lg bg-db-aqua/10 border-2 border-db-aqua px-3 py-3 w-40">
                  <p className="font-bold text-db-aqua-dark text-xs">L3 — Joint Resolution</p>
                  <p className="text-[10px] text-gray-400 mt-0.5">RM + CS co-own outcome</p>
                </div>
              </div>
              <div className="text-gray-300 px-2">→</div>
              <div className="text-center">
                <div className="rounded-lg bg-orange-50 border border-orange-200 px-3 py-3 w-40">
                  <p className="font-bold text-orange-700 text-xs">L4 — Leadership</p>
                  <p className="text-[10px] text-gray-400 mt-0.5">Head of CS ↔ VP of RM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Client Non-Responsiveness */}
      <SectionHeading>Client Non-Responsiveness Escalation</SectionHeading>
      <div className="rounded-lg border border-amber-300 bg-amber-50 p-4">
        <p className="text-sm text-gray-700 leading-relaxed">
          One of the most common — and most dangerous — situations CS faces is a client who stops
          responding. Missed meetings, unanswered emails, silence on remediation items. This isn&apos;t
          just a delivery blocker — <strong>it&apos;s an early renewal risk signal.</strong> Disengaged
          clients don&apos;t renew. The earlier we catch it, the easier it is to recover.
        </p>
      </div>

      <SubSection icon="📵" title="When a Client Goes Silent">
        <p>
          CS Advisors are often the first to notice disengagement because they have the most frequent
          touchpoints — assessment scheduling, remediation follow-ups, training coordination. When a
          client stops responding to CS outreach, the path is clear:
        </p>

        {/* Escalation flow */}
        <div className="mt-4 space-y-3">
          {/* Step 1 */}
          <div className="rounded-lg border-2 border-green-200 bg-white overflow-hidden">
            <div className="bg-green-50 px-4 py-3 border-b border-green-200 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-sm font-bold text-green-700">1</span>
              <div>
                <p className="text-sm font-bold text-db-dark">CS Advisor: Direct Outreach (1-2 weeks)</p>
              </div>
            </div>
            <div className="px-4 py-3 text-sm text-gray-700 space-y-2">
              <p>
                The advisor tries to re-engage through normal channels — follow-up emails, rescheduling
                attempts, direct messages. Document each attempt with dates.
              </p>
              <div className="rounded-md bg-green-50 border border-green-200 p-3">
                <p className="text-xs text-green-700">
                  <strong>Trigger to escalate:</strong> Two or more unanswered outreach attempts across
                  different channels (email + call/Teams), or a scheduled meeting no-showed with no
                  follow-up from the client.
                </p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex justify-center">
            <span className="text-gray-300 text-lg">↓</span>
          </div>
          <div className="rounded-lg border-2 border-db-aqua bg-white overflow-hidden">
            <div className="bg-db-aqua/10 px-4 py-3 border-b border-db-aqua/20 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-db-aqua/20 text-sm font-bold text-db-aqua-dark">2</span>
              <div>
                <p className="text-sm font-bold text-db-dark">Escalate to RM: Relationship Lever</p>
              </div>
            </div>
            <div className="px-4 py-3 text-sm text-gray-700 space-y-2">
              <p>
                CS Advisor (or CS Manager) reaches out to the RM with context: who they&apos;ve been
                trying to reach, how many attempts, what&apos;s outstanding, and how long the silence
                has lasted.
              </p>
              <p>
                <strong>Why the RM:</strong> RMs have the strategic relationship with the client. They
                speak to different stakeholders, have different touchpoints, and carry different weight
                in the relationship. A message from the RM often gets a response when CS outreach
                hasn&apos;t.
              </p>
              <div className="rounded-md bg-db-aqua/5 border border-db-aqua/20 p-3">
                <p className="text-xs text-db-aqua-dark">
                  <strong>RM action:</strong> Treat this as an <strong>early renewal risk.</strong> Reach
                  out to the client directly — not about the missed deliverable, but about the
                  relationship. A check-in call, a &ldquo;wanted to make sure everything&apos;s okay on
                  your end&rdquo; message. Use your relationship to understand what&apos;s behind the
                  silence and get the client re-engaged with the CS team.
                </p>
              </div>
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs text-gray-600">
                  <strong>What to listen for:</strong> Is the client overwhelmed internally? Did they
                  lose their champion? Are they deprioritizing cyber? Each answer points to a different
                  recovery path. Share what you learn back with CS so the team can adjust their approach.
                </p>
              </div>
              <div className="rounded-md bg-amber-50 border border-amber-200 p-3">
                <p className="text-xs text-amber-700">
                  <strong>Trigger to escalate:</strong> RM outreach also goes unanswered for 1+ week,
                  or client responds but still won&apos;t engage with CS on outstanding work.
                </p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex justify-center">
            <span className="text-gray-300 text-lg">↓</span>
          </div>
          <div className="rounded-lg border-2 border-blue-200 bg-white overflow-hidden">
            <div className="bg-blue-50 px-4 py-3 border-b border-blue-200 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-sm font-bold text-blue-700">3</span>
              <div>
                <p className="text-sm font-bold text-db-dark">CS Manager: Coordinated Recovery</p>
              </div>
            </div>
            <div className="px-4 py-3 text-sm text-gray-700 space-y-2">
              <p>
                If neither the CS Advisor nor the RM can break through, the CS Manager gets involved.
                At this point the account is at meaningful risk and needs a coordinated recovery plan.
              </p>
              <ul className="space-y-1">
                <li>&#8226; Review the full outreach history (CS + RM attempts)</li>
                <li>&#8226; Assess whether the advisor-client pairing needs to change</li>
                <li>&#8226; Coordinate with the RM on a joint approach — who reaches out next, through what channel, with what message</li>
                <li>&#8226; Consider whether a different stakeholder at the client should be contacted</li>
                <li>&#8226; Flag the account as at-risk in any internal tracking</li>
              </ul>
              <div className="rounded-md bg-blue-50 border border-blue-200 p-3">
                <p className="text-xs text-blue-700">
                  <strong>Trigger to escalate:</strong> Recovery plan isn&apos;t working after 1-2 weeks,
                  or the account is approaching renewal with an unengaged client.
                </p>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex justify-center">
            <span className="text-gray-300 text-lg">↓</span>
          </div>
          <div className="rounded-lg border-2 border-orange-200 bg-white overflow-hidden">
            <div className="bg-orange-50 px-4 py-3 border-b border-orange-200 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-100 text-sm font-bold text-orange-600">4</span>
              <div>
                <p className="text-sm font-bold text-db-dark">VP of RM: Leadership Intervention</p>
              </div>
            </div>
            <div className="px-4 py-3 text-sm text-gray-700 space-y-2">
              <p>
                If the CS Manager&apos;s coordinated approach hasn&apos;t worked, escalate to the VP of RM.
                At this point the client is materially disengaged and the renewal is at risk.
              </p>
              <ul className="space-y-1">
                <li>&#8226; VP reviews the full timeline and all outreach attempts</li>
                <li>&#8226; May reach out to the client at the executive level — a different voice and seniority can reset the conversation</li>
                <li>&#8226; Decides whether to flag the account in leadership reviews and adjust the renewal forecast</li>
                <li>&#8226; Aligns with Head of CS on whether to adjust the delivery plan (pause, restructure, or reallocate resources)</li>
              </ul>
            </div>
          </div>
        </div>
      </SubSection>

      {/* Why this matters for RMs */}
      <SubSection icon="⚠️" title="Why RMs Should Care About Client Silence">
        <p>
          When CS tells you a client isn&apos;t responding, it&apos;s tempting to see it as a delivery
          problem. But client disengagement is one of the strongest predictors of churn:
        </p>
        <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-center">
            <p className="text-sm font-bold text-red-700">Disengaged clients don&apos;t renew</p>
            <p className="text-xs text-gray-500 mt-1">
              If they&apos;re not participating in the program, they&apos;re not seeing the value.
              Renewal becomes a cost conversation, not a value conversation.
            </p>
          </div>
          <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-center">
            <p className="text-sm font-bold text-red-700">Silence hides bigger problems</p>
            <p className="text-xs text-gray-500 mt-1">
              A client going silent may be evaluating alternatives, losing their internal champion,
              or deprioritizing cyber entirely. The RM relationship is the best way to find out which.
            </p>
          </div>
          <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-center">
            <p className="text-sm font-bold text-red-700">Early action = easier recovery</p>
            <p className="text-xs text-gray-500 mt-1">
              A client who&apos;s been disengaged for 2 weeks is recoverable. A client who&apos;s been
              disengaged for 3 months is a churn risk. Speed matters.
            </p>
          </div>
        </div>
        <div className="mt-3 rounded-md bg-db-aqua/5 border border-db-aqua/20 p-3">
          <p className="text-sm text-db-dark">
            <strong>The ask:</strong> When CS escalates a non-responsive client to you, treat it with the
            same urgency as a renewal risk — because that&apos;s what it is. Use your relationship to
            re-open the door, then work with CS to get the client back on track.
          </p>
        </div>
      </SubSection>

      {/* Client Feedback About RMs */}
      <SectionHeading>Client Feedback About an RM</SectionHeading>
      <div className="rounded-lg border border-purple-300 bg-purple-50 p-4">
        <p className="text-sm text-gray-700 leading-relaxed">
          CS Advisors spend more time with clients than anyone. That means they sometimes hear things
          about the broader client experience — including feedback about the RM relationship. When a
          client shares concerns about their RM, the advisor needs a clear, safe path to surface that
          feedback so it can be addressed constructively.
        </p>
      </div>

      <SubSection icon="💬" title="What This Looks Like">
        <p>
          This isn&apos;t always a direct complaint. Often it surfaces indirectly — a comment during a
          working session, frustration about a follow-up that didn&apos;t happen, or a question about
          why something was communicated a certain way. Examples:
        </p>
        <div className="mt-3 space-y-2">
          <div className="rounded-md bg-gray-50 border border-gray-200 p-3 flex items-start gap-3">
            <span className="text-sm mt-0.5">💬</span>
            <p className="text-sm text-gray-700 italic">
              &quot;I emailed [RM] about our renewal two weeks ago and haven&apos;t heard back.&quot;
            </p>
          </div>
          <div className="rounded-md bg-gray-50 border border-gray-200 p-3 flex items-start gap-3">
            <span className="text-sm mt-0.5">💬</span>
            <p className="text-sm text-gray-700 italic">
              &quot;[RM] told us we&apos;d have that pricing by last Friday — we still don&apos;t have it.&quot;
            </p>
          </div>
          <div className="rounded-md bg-gray-50 border border-gray-200 p-3 flex items-start gap-3">
            <span className="text-sm mt-0.5">💬</span>
            <p className="text-sm text-gray-700 italic">
              &quot;We don&apos;t feel like anyone on the commercial side really understands our business.&quot;
            </p>
          </div>
          <div className="rounded-md bg-gray-50 border border-gray-200 p-3 flex items-start gap-3">
            <span className="text-sm mt-0.5">💬</span>
            <p className="text-sm text-gray-700 italic">
              &quot;Can you just handle the renewal conversation? You actually know what we need.&quot;
            </p>
          </div>
          <div className="rounded-md bg-gray-50 border border-gray-200 p-3 flex items-start gap-3">
            <span className="text-sm mt-0.5">💬</span>
            <p className="text-sm text-gray-700 italic">
              &quot;Our last RM was much more proactive about checking in. We feel a bit forgotten.&quot;
            </p>
          </div>
        </div>
      </SubSection>

      <SubSection icon="🔀" title="How to Escalate: Advisor → CS Manager → VP of RM">
        <p>
          The advisor should <strong>never</strong> try to address RM performance directly with the RM
          or with the client. That crosses organizational lines and puts the advisor in an uncomfortable
          position. Instead, the path is clear and confidential:
        </p>

        <div className="mt-4 space-y-3">
          {/* Step 1 */}
          <div className="rounded-lg border-2 border-green-200 bg-white overflow-hidden">
            <div className="bg-green-50 px-4 py-3 border-b border-green-200 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-sm font-bold text-green-700">1</span>
              <p className="text-sm font-bold text-db-dark">Advisor: Acknowledge and Document</p>
            </div>
            <div className="px-4 py-3 text-sm text-gray-700 space-y-2">
              <p>
                When the client shares feedback, the advisor should listen and acknowledge without
                agreeing, disagreeing, or making excuses on anyone&apos;s behalf.
              </p>
              <div className="rounded-md bg-green-50 border border-green-200 p-3">
                <p className="text-xs text-green-700">
                  <strong>What to say:</strong> &quot;I appreciate you sharing that with me. I want to
                  make sure the right people hear this so we can address it. Let me bring this back to
                  my team.&quot;
                </p>
              </div>
              <p>
                Document what was said — the specifics matter. &quot;Client is unhappy with RM&quot; is
                not useful. &quot;Client said they emailed about renewal pricing on March 1st and haven&apos;t
                received a response&quot; is actionable.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex justify-center">
            <span className="text-gray-300 text-lg">↓</span>
          </div>
          <div className="rounded-lg border-2 border-blue-200 bg-white overflow-hidden">
            <div className="bg-blue-50 px-4 py-3 border-b border-blue-200 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-sm font-bold text-blue-700">2</span>
              <p className="text-sm font-bold text-db-dark">CS Manager: Assess and Route</p>
            </div>
            <div className="px-4 py-3 text-sm text-gray-700 space-y-2">
              <p>
                The advisor brings the feedback to their CS Manager — this is a private, internal
                conversation. The CS Manager&apos;s role is to:
              </p>
              <ul className="space-y-1">
                <li>&#8226; Understand the full context — is this a one-time miss or a pattern?</li>
                <li>&#8226; Determine if the feedback is something the client has raised before</li>
                <li>&#8226; Assess whether the issue is impacting delivery or client engagement</li>
                <li>&#8226; Pass the feedback to the VP of RM with specifics and context</li>
              </ul>
              <div className="rounded-md bg-blue-50 border border-blue-200 p-3">
                <p className="text-xs text-blue-700">
                  <strong>Key:</strong> The CS Manager should not attempt to resolve the RM issue
                  themselves or coach the RM directly. That&apos;s the VP of RM&apos;s responsibility.
                  The CS Manager&apos;s job is to make sure the feedback gets to the right person
                  with enough detail to act on it.
                </p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex justify-center">
            <span className="text-gray-300 text-lg">↓</span>
          </div>
          <div className="rounded-lg border-2 border-orange-200 bg-white overflow-hidden">
            <div className="bg-orange-50 px-4 py-3 border-b border-orange-200 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-100 text-sm font-bold text-orange-600">3</span>
              <p className="text-sm font-bold text-db-dark">VP of RM: Address and Close the Loop</p>
            </div>
            <div className="px-4 py-3 text-sm text-gray-700 space-y-2">
              <p>
                The VP of RM receives the feedback from the CS Manager and owns the resolution:
              </p>
              <ul className="space-y-1">
                <li>&#8226; Speaks with the RM to understand their side — there may be context CS doesn&apos;t have</li>
                <li>&#8226; Coaches the RM on the specific issue (responsiveness, follow-through, engagement style)</li>
                <li>&#8226; If it&apos;s a pattern, addresses it as part of broader performance management</li>
                <li>&#8226; Closes the loop with the CS Manager to confirm the feedback was received and addressed</li>
                <li>&#8226; If the client relationship needs a direct repair, the RM or VP of RM takes action with the client</li>
              </ul>
              <div className="rounded-md bg-orange-50 border border-orange-200 p-3">
                <p className="text-xs text-orange-700">
                  <strong>Important:</strong> The advisor and CS Manager should never be put in the middle
                  of an RM coaching conversation or asked to deliver feedback to the RM. That erodes
                  trust and makes advisors less likely to surface feedback in the future. The VP of RM
                  handles it directly within their team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SubSection>

      <SubSection icon="🛡️" title="Why This Path Matters">
        <p>
          CS Advisors are our closest ear to the client. If they don&apos;t feel safe surfacing
          feedback — including feedback about RMs — we lose visibility into problems that directly
          affect retention. This path protects everyone:
        </p>
        <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="rounded-lg border border-purple-200 bg-purple-50 p-3 text-center">
            <p className="text-sm font-bold text-purple-700">Protects the Advisor</p>
            <p className="text-xs text-gray-500 mt-1">
              They don&apos;t have to confront an RM peer or manage someone else&apos;s team. They
              just route it to their manager — same as any other escalation.
            </p>
          </div>
          <div className="rounded-lg border border-purple-200 bg-purple-50 p-3 text-center">
            <p className="text-sm font-bold text-purple-700">Protects the RM</p>
            <p className="text-xs text-gray-500 mt-1">
              Feedback comes through their own leadership chain, with context and fairness. They
              hear it from their VP, not secondhand from another team.
            </p>
          </div>
          <div className="rounded-lg border border-purple-200 bg-purple-50 p-3 text-center">
            <p className="text-sm font-bold text-purple-700">Protects the Client</p>
            <p className="text-xs text-gray-500 mt-1">
              Their concern actually gets addressed — it doesn&apos;t get stuck, ignored, or lost
              because no one wanted to have an awkward conversation.
            </p>
          </div>
        </div>
      </SubSection>

      {/* Proposed Operating Norms */}
      <SectionHeading>Proposed Operating Norms</SectionHeading>
      <div className="mt-3 grid grid-cols-2 gap-4">
        <div className="rounded-lg border border-green-200 bg-green-50 p-4">
          <p className="text-sm font-bold text-green-700 mb-2">What Works Well</p>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>&#8226; RMs and CS Advisors as the primary account partnership — talking daily, sharing context</li>
            <li>&#8226; ICs routing issues to the right owner instead of absorbing them</li>
            <li>&#8226; CS Managers and RMs keeping each other informed when issues cross domains</li>
            <li>&#8226; Both sides documenting issues and resolutions for account continuity</li>
            <li>&#8226; When in doubt, over-communicating — a quick Teams message goes a long way</li>
          </ul>
        </div>
        <div className="rounded-lg border border-amber-200 bg-amber-50 p-4">
          <p className="text-sm font-bold text-amber-700 mb-2">What We Want to Avoid</p>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>&#8226; Issues getting stuck with whoever heard about them first instead of routing to the right owner</li>
            <li>&#8226; Either side surprising the other in front of a client</li>
            <li>&#8226; Client concerns bouncing back without internal coordination</li>
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
          <p className="text-sm font-bold text-db-dark">Advisor mentions a delivery delay to the RM in Teams</p>
          <div className="mt-2 flex items-center gap-2 text-xs text-gray-500">
            <span className="rounded-full bg-green-100 text-green-700 px-2 py-0.5 font-medium">IC</span>
            <span>RM acknowledges, asks &ldquo;Have you looped in [CS Manager]?&rdquo;</span>
            <span className="text-gray-300">→</span>
            <span className="rounded-full bg-blue-100 text-blue-700 px-2 py-0.5 font-medium">L2</span>
            <span>Advisor brings CS Manager in — CS owns resolution</span>
          </div>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <p className="text-sm font-bold text-db-dark">Client asks advisor about pricing or contract terms</p>
          <div className="mt-2 flex items-center gap-2 text-xs text-gray-500">
            <span className="rounded-full bg-green-100 text-green-700 px-2 py-0.5 font-medium">IC</span>
            <span>Advisor acknowledges, explains RM handles commercial conversations</span>
            <span className="text-gray-300">→</span>
            <span className="rounded-full bg-green-100 text-green-700 px-2 py-0.5 font-medium">IC</span>
            <span>RM picks it up — natural handoff, no escalation needed</span>
          </div>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <p className="text-sm font-bold text-db-dark">Client stops responding to CS outreach</p>
          <div className="mt-2 flex items-center gap-2 text-xs text-gray-500 flex-wrap">
            <span className="rounded-full bg-green-100 text-green-700 px-2 py-0.5 font-medium">CS</span>
            <span>Advisor tries 2+ times, no response</span>
            <span className="text-gray-300">→</span>
            <span className="rounded-full bg-db-aqua/20 text-db-aqua-dark px-2 py-0.5 font-medium">RM</span>
            <span>Reaches out using relationship — treats as early renewal risk</span>
            <span className="text-gray-300">→</span>
            <span className="rounded-full bg-blue-100 text-blue-700 px-2 py-0.5 font-medium">CS Mgr</span>
            <span>Coordinated recovery if RM also can&apos;t break through</span>
            <span className="text-gray-300">→</span>
            <span className="rounded-full bg-orange-100 text-orange-700 px-2 py-0.5 font-medium">VP RM</span>
            <span>Leadership intervention if still unresolved</span>
          </div>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <p className="text-sm font-bold text-db-dark">Client tells advisor the RM hasn&apos;t followed up on a commitment</p>
          <div className="mt-2 flex items-center gap-2 text-xs text-gray-500 flex-wrap">
            <span className="rounded-full bg-green-100 text-green-700 px-2 py-0.5 font-medium">Advisor</span>
            <span>Acknowledges, documents specifics</span>
            <span className="text-gray-300">→</span>
            <span className="rounded-full bg-blue-100 text-blue-700 px-2 py-0.5 font-medium">CS Mgr</span>
            <span>Reviews context, passes to VP of RM</span>
            <span className="text-gray-300">→</span>
            <span className="rounded-full bg-orange-100 text-orange-700 px-2 py-0.5 font-medium">VP RM</span>
            <span>Coaches RM, ensures client gets a response</span>
          </div>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <p className="text-sm font-bold text-db-dark">Client asks advisor to handle commercial conversations instead of RM</p>
          <div className="mt-2 flex items-center gap-2 text-xs text-gray-500 flex-wrap">
            <span className="rounded-full bg-green-100 text-green-700 px-2 py-0.5 font-medium">Advisor</span>
            <span>Declines politely, notes it as a signal</span>
            <span className="text-gray-300">→</span>
            <span className="rounded-full bg-blue-100 text-blue-700 px-2 py-0.5 font-medium">CS Mgr</span>
            <span>Flags to VP of RM — relationship may need a reset</span>
            <span className="text-gray-300">→</span>
            <span className="rounded-full bg-orange-100 text-orange-700 px-2 py-0.5 font-medium">VP RM</span>
            <span>Works with RM to re-engage client directly</span>
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
              <td className="px-4 py-2 font-medium text-db-dark">Teams (account channel)</td>
              <td className="px-4 py-2 text-gray-600">Quick heads-ups, status updates, non-urgent coordination</td>
              <td className="px-4 py-2 text-gray-600">Same business day</td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-medium text-db-dark">Teams (chat with CS Manager or RM)</td>
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
          This is a shared framework — not a finished product. The goal is to capture how both
          teams can work together most effectively, then refine it as we learn what works in
          practice.
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
