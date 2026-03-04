'use client';

import { HeroSection, SectionHeading, CharacteristicCard, SubSection, DrawbridgeAngle, LastUpdated } from '../../components/shared-ui';

export default function JourneyHedgeFund() {
  const phases = [
    { num: '1', label: 'Get Started', color: 'bg-db-aqua' },
    { num: '2', label: 'Build Foundation', color: 'bg-db-aqua-dark' },
    { num: '3', label: 'Strengthen', color: 'bg-db-orange/80' },
    { num: '4', label: 'Differentiate', color: 'bg-db-orange' },
  ];

  return (
    <>
      <HeroSection
        icon="📍"
        title="Customer Journey — Hedge Fund"
        subtitle="A practical roadmap for building a lasting client relationship. Start by solving their most urgent problem, then expand as their business evolves."
      />

      {/* How to use */}
      <div className="mt-6 rounded-lg bg-db-dark p-5">
        <p className="text-sm font-semibold text-db-aqua uppercase tracking-wide mb-2">
          Two Views of the Same Journey
        </p>
        <div className="grid grid-cols-2 gap-6 text-sm text-gray-300">
          <div>
            <p className="font-medium text-white">Client-Facing (Outcome Phases)</p>
            <p className="mt-1">What the client sees: a progression of business outcomes — starting with their most urgent need and expanding as priorities evolve. Share this in sales, QBRs, and renewals.</p>
          </div>
          <div>
            <p className="font-medium text-white">Internal (Drawbridge Lifecycle)</p>
            <p className="mt-1">How we operate behind the scenes: the handoffs, roles, and motions that deliver each outcome. This is our playbook for who does what and when.</p>
          </div>
        </div>
      </div>

      {/* ── INTERNAL LIFECYCLE ── */}
      <SectionHeading>The Drawbridge Lifecycle</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed mb-4">
        Every client relationship follows a continuous cycle. Each stage has a clear
        owner, a defined purpose, and a handoff that keeps the relationship moving forward.
      </p>

      {/* Lifecycle visual */}
      <div className="flex items-center gap-0 mb-2">
        {[
          { label: 'Discovery', color: 'bg-db-dark', text: 'text-white' },
          { label: 'Implementation', color: 'bg-db-aqua-dark', text: 'text-white' },
          { label: 'Value Realization', color: 'bg-db-aqua', text: 'text-db-dark' },
          { label: 'Strategic Partnership', color: 'bg-db-orange/80', text: 'text-white' },
          { label: 'Renewal', color: 'bg-db-orange', text: 'text-white' },
        ].map((stage, i) => (
          <div key={stage.label} className={`flex-1 ${stage.color} ${stage.text} py-2 px-1 text-center text-xs font-semibold ${i === 0 ? 'rounded-l-lg' : ''} ${i === 4 ? 'rounded-r-lg' : ''}`}>
            {stage.label}
          </div>
        ))}
      </div>
      <div className="flex justify-end mb-6">
        <span className="text-xs text-gray-400 italic">↩ cycles back to Strategic Partnership</span>
      </div>

      {/* Stage details */}
      <div className="space-y-4">
        {/* Discovery */}
        <div className="rounded-lg border border-gray-200 bg-white overflow-hidden">
          <div className="bg-db-dark px-5 py-3 flex items-center justify-between">
            <p className="text-sm font-semibold text-white">Discovery &amp; Solution Design</p>
            <span className="rounded-full bg-white/20 px-3 py-0.5 text-xs text-white">Sales Team</span>
          </div>
          <div className="px-5 py-4">
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase">Purpose</p>
                <p className="mt-1 text-gray-700">Understand the client&apos;s business problem. Not &ldquo;what services do they need?&rdquo; but &ldquo;what outcome are they trying to achieve?&rdquo;</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase">Key Activities</p>
                <ul className="mt-1 text-gray-700 space-y-1">
                  <li>&#8226; Identify the triggering event (fundraise, exam, incident, LP pressure)</li>
                  <li>&#8226; Map the outcome to the framework (which of the 5?)</li>
                  <li>&#8226; Design a solution scoped to the outcome, not a product list</li>
                  <li>&#8226; Present the journey — show the client the path forward</li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase">Handoff</p>
                <p className="mt-1 text-gray-700">
                  Closed deal transitions to implementation with a clear brief: the outcome
                  we promised, the scope, the timeline, and the client&apos;s expectations.
                  The RM is introduced to the client before the sale closes — not after.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Implementation */}
        <div className="rounded-lg border border-gray-200 bg-white overflow-hidden">
          <div className="bg-db-aqua-dark px-5 py-3 flex items-center justify-between">
            <p className="text-sm font-semibold text-white">Implementation &amp; Onboarding</p>
            <span className="rounded-full bg-white/20 px-3 py-0.5 text-xs text-white">Cybersecurity Advisory Team + RM</span>
          </div>
          <div className="px-5 py-4">
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase">Purpose</p>
                <p className="mt-1 text-gray-700">Configure the platform, deliver the initial assessment, and begin working on the promised outcome. The cybersecurity advisory team owns the technical delivery.</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase">Key Activities</p>
                <ul className="mt-1 text-gray-700 space-y-1">
                  <li>&#8226; Kick-off call with client stakeholders</li>
                  <li>&#8226; Platform configuration and data collection</li>
                  <li>&#8226; Initial security assessment and gap analysis</li>
                  <li>&#8226; Begin delivering against the scoped outcome (DDQs, policies, etc.)</li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase">Handoff</p>
                <p className="mt-1 text-gray-700">
                  Implementation is &ldquo;complete&rdquo; when the initial deliverables are in the
                  client&apos;s hands and the program is running. The RM takes the lead on the
                  relationship while the advisory team continues ongoing delivery.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Value Realization */}
        <div className="rounded-lg border border-gray-200 bg-white overflow-hidden">
          <div className="bg-db-aqua px-5 py-3 flex items-center justify-between">
            <p className="text-sm font-semibold text-db-dark">Value Realization</p>
            <span className="rounded-full bg-db-dark/20 px-3 py-0.5 text-xs text-db-dark">RM Team</span>
          </div>
          <div className="px-5 py-4">
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase">Purpose</p>
                <p className="mt-1 text-gray-700">Measure and communicate the value delivered — in the client&apos;s language, tied to the business outcome they bought. This is where we prove the investment is working.</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase">Key Activities</p>
                <ul className="mt-1 text-gray-700 space-y-1">
                  <li>&#8226; Gather evidence: DDQs completed, turnaround times, risk scores, training rates</li>
                  <li>&#8226; Frame the story around the outcome, not the tasks</li>
                  <li>&#8226; Deliver a QBR that shows impact: &ldquo;Here&apos;s what we achieved together&rdquo;</li>
                  <li>&#8226; Confirm with the client that they see the value</li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase">Handoff</p>
                <p className="mt-1 text-gray-700">
                  Once the client confirms value, the RM shifts into strategic partnership
                  mode. The client trusts us — now we&apos;ve earned the right to broaden
                  the conversation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Strategic Partnership */}
        <div className="rounded-lg border border-gray-200 bg-white overflow-hidden">
          <div className="bg-db-orange/80 px-5 py-3 flex items-center justify-between">
            <p className="text-sm font-semibold text-white">Strategic Partnership</p>
            <span className="rounded-full bg-white/20 px-3 py-0.5 text-xs text-white">RM Team</span>
          </div>
          <div className="px-5 py-4">
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase">Purpose</p>
                <p className="mt-1 text-gray-700">
                  Be the client&apos;s trusted business advisor — someone who understands their
                  firm, anticipates their needs, and connects business problems to solutions.
                  <strong> This is an RM relationship role</strong>, distinct from the cybersecurity
                  advisory services our delivery team provides.
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase">Key Activities</p>
                <ul className="mt-1 text-gray-700 space-y-1">
                  <li>&#8226; Stay close to the client&apos;s business: fundraising cycles, team changes, regulatory events</li>
                  <li>&#8226; Proactively surface business problems they may not have connected to Drawbridge</li>
                  <li>&#8226; Introduce the next outcome phase when the timing is right — not as a pitch, but as a natural next step</li>
                  <li>&#8226; Keep the advisory team informed so delivery stays aligned</li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase">The Distinction</p>
                <p className="mt-1 text-gray-700">
                  <strong>RM as strategic advisor</strong> = understanding the client&apos;s business
                  and guiding the relationship. <strong>Cybersecurity advisory services</strong> =
                  the technical expertise our delivery team provides (assessments, policies, IR).
                  The RM connects the two — identifying the problem, the advisory team solves it.
                </p>
              </div>
            </div>
            <div className="mt-4 rounded-md bg-orange-50 border border-orange-200 p-3">
              <p className="text-xs font-semibold text-db-orange uppercase">Getting It Right</p>
              <p className="text-sm text-gray-700 mt-1">
                The line between &ldquo;helpful advisor&rdquo; and &ldquo;salesperson&rdquo; is intent. When
                you surface a problem, lead with the client&apos;s risk or business impact —
                not with a product. &ldquo;I noticed you&apos;re launching a new fund — that changes
                your risk profile&rdquo; is advisory. &ldquo;We have a new product for fund launches&rdquo;
                is sales. Same information, completely different conversation.
              </p>
            </div>
          </div>
        </div>

        {/* Renewal */}
        <div className="rounded-lg border border-gray-200 bg-white overflow-hidden">
          <div className="bg-db-orange px-5 py-3 flex items-center justify-between">
            <p className="text-sm font-semibold text-white">Renewal</p>
            <span className="rounded-full bg-white/20 px-3 py-0.5 text-xs text-white">RM Team</span>
          </div>
          <div className="px-5 py-4">
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase">Purpose</p>
                <p className="mt-1 text-gray-700">Prove the value delivered, demonstrate ROI, and confirm the renewal. This should feel like a natural checkpoint in the relationship — not a sales event.</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase">Key Activities</p>
                <ul className="mt-1 text-gray-700 space-y-1">
                  <li>&#8226; Present outcome-based value summary (not a task list)</li>
                  <li>&#8226; Quantify ROI: cost of alternatives, risk reduction, time saved</li>
                  <li>&#8226; Propose next year&apos;s scope — including the next outcome phase if appropriate</li>
                  <li>&#8226; Negotiate and close using the playbook principles</li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase">What Happens Next</p>
                <p className="mt-1 text-gray-700">
                  After renewal, the cycle continues — back into <strong>Strategic Partnership</strong>.
                  If the renewal includes new scope (next outcome phase), it flows through
                  Implementation first. The relationship is continuous, not transactional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lifecycle + Outcome mapping */}
      <SectionHeading>How the Lifecycle Maps to Outcome Phases</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed mb-4">
        The internal lifecycle repeats within each outcome phase. As the client progresses
        through outcomes, the lifecycle spins again — but faster and with deeper trust.
      </p>
      <div className="rounded-md border border-gray-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-3 py-2 text-left font-medium text-gray-600">Outcome Phase</th>
              <th className="px-3 py-2 text-left font-medium text-gray-600">Discovery</th>
              <th className="px-3 py-2 text-left font-medium text-gray-600">Implementation</th>
              <th className="px-3 py-2 text-left font-medium text-gray-600">Value Realization</th>
              <th className="px-3 py-2 text-left font-medium text-gray-600">Strategic / Renewal</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            <tr>
              <td className="px-3 py-2 font-medium text-db-dark">1. Capital Confidence</td>
              <td className="px-3 py-2 text-gray-600 text-xs">Sales identifies DDQ/ODD pain</td>
              <td className="px-3 py-2 text-gray-600 text-xs">Advisory delivers assessment + DDQ foundation</td>
              <td className="px-3 py-2 text-gray-600 text-xs">RM shows turnaround improvement, LP satisfaction</td>
              <td className="px-3 py-2 text-gray-600 text-xs">RM bridges to regulatory readiness</td>
            </tr>
            <tr className="bg-gray-50/50">
              <td className="px-3 py-2 font-medium text-db-dark">2. Regulatory Readiness</td>
              <td className="px-3 py-2 text-gray-600 text-xs">RM identifies exam risk</td>
              <td className="px-3 py-2 text-gray-600 text-xs">Advisory builds policies, IR plan, training</td>
              <td className="px-3 py-2 text-gray-600 text-xs">RM shows exam-ready posture, policy currency</td>
              <td className="px-3 py-2 text-gray-600 text-xs">RM bridges to active protection</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-medium text-db-dark">3. Protection</td>
              <td className="px-3 py-2 text-gray-600 text-xs">RM identifies testing gaps</td>
              <td className="px-3 py-2 text-gray-600 text-xs">Advisory runs pen tests, tabletops, monitoring</td>
              <td className="px-3 py-2 text-gray-600 text-xs">RM shows risk reduction, remediation progress</td>
              <td className="px-3 py-2 text-gray-600 text-xs">RM bridges to competitive positioning</td>
            </tr>
            <tr className="bg-gray-50/50">
              <td className="px-3 py-2 font-medium text-db-dark">4. Competitive Advantage</td>
              <td className="px-3 py-2 text-gray-600 text-xs">RM identifies positioning opportunity</td>
              <td className="px-3 py-2 text-gray-600 text-xs">Advisory delivers benchmarking, board reports</td>
              <td className="px-3 py-2 text-gray-600 text-xs">RM shows peer positioning, LP feedback</td>
              <td className="px-3 py-2 text-gray-600 text-xs">Renewal + continued partnership</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs text-gray-500 italic">
        Note: After Phase 1, the &ldquo;Discovery&rdquo; step is led by the RM (not Sales) — because the
        RM is already in the relationship and identifies the next business problem naturally.
      </p>

      {/* Visual journey bar */}
      <SectionHeading>Client-Facing Outcome Phases</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed mb-4">
        Below is the client-facing view — what you share with the client. The internal lifecycle
        above is how we operate behind the scenes to deliver each phase.
      </p>
      <div className="flex items-center gap-0">
        {phases.map((phase, i) => (
          <div key={phase.num} className="flex-1 relative">
            <div className={`${phase.color} h-2 ${i === 0 ? 'rounded-l-full' : ''} ${i === phases.length - 1 ? 'rounded-r-full' : ''}`} />
            <div className="mt-2 text-center">
              <p className="text-xs font-semibold text-gray-400">PHASE {phase.num}</p>
              <p className="text-sm font-semibold text-db-dark">{phase.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ── Phase 1 ── */}
      <div className="mt-10 rounded-xl border-2 border-db-aqua overflow-hidden">
        <div className="bg-db-aqua/10 px-6 py-4 border-b border-db-aqua/20 flex items-center gap-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-db-aqua text-white text-lg font-bold">1</span>
          <div>
            <h3 className="text-lg font-bold font-heading text-db-dark">Get Started — Raise &amp; Retain Capital</h3>
            <p className="text-sm text-gray-500">Solve their most urgent problem first. Everything else follows.</p>
          </div>
        </div>
        <div className="px-6 py-5 space-y-5">
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">The Trigger</p>
            <p className="mt-1 text-sm text-gray-700">
              A hedge fund raising capital or going through LP due diligence needs to
              demonstrate a credible cybersecurity program — fast. DDQ season is approaching,
              a consultant flagged gaps, or an allocator asked a question they couldn&apos;t answer.
              This is the moment they reach out.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">What We Do</p>
            <div className="mt-2 grid grid-cols-3 gap-3">
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-aqua-dark">Week 1–2</p>
                <p className="text-sm font-medium text-db-dark mt-1">Security Assessment</p>
                <p className="text-xs text-gray-500 mt-1">Baseline their current posture. Identify gaps allocators will find.</p>
              </div>
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-aqua-dark">Week 2–4</p>
                <p className="text-sm font-medium text-db-dark mt-1">Policy &amp; DDQ Foundation</p>
                <p className="text-xs text-gray-500 mt-1">Build core policies and prepare DDQ responses they can send to LPs immediately.</p>
              </div>
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-aqua-dark">Ongoing</p>
                <p className="text-sm font-medium text-db-dark mt-1">DDQ &amp; ODD Support</p>
                <p className="text-xs text-gray-500 mt-1">Handle incoming DDQs and support allocator due diligence reviews as they come in.</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">How We Measure Value</p>
            <div className="mt-1 flex flex-wrap gap-2">
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">DDQ turnaround: 3 weeks → 5 days</span>
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">ODD reviews passed without findings</span>
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">Zero follow-up requests from allocators</span>
            </div>
          </div>

          <div className="rounded-md bg-green-50 border border-green-200 p-3">
            <p className="text-xs font-semibold text-green-700">THE BRIDGE TO PHASE 2</p>
            <p className="text-sm text-green-800 mt-1">
              &ldquo;Your DDQ responses are strong and your allocators are satisfied. But the
              responses are only as good as the program behind them. Let&apos;s make sure the
              underlying policies and procedures are exam-ready — so if the SEC calls, you&apos;re
              as prepared as you are for your LPs.&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* ── Phase 2 ── */}
      <div className="mt-6 rounded-xl border-2 border-db-aqua-dark overflow-hidden">
        <div className="bg-db-aqua-dark/10 px-6 py-4 border-b border-db-aqua-dark/20 flex items-center gap-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-db-aqua-dark text-white text-lg font-bold">2</span>
          <div>
            <h3 className="text-lg font-bold font-heading text-db-dark">Build the Foundation — Regulatory Readiness</h3>
            <p className="text-sm text-gray-500">Move from reactive DDQ support to a proactive compliance program.</p>
          </div>
        </div>
        <div className="px-6 py-5 space-y-5">
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">The Trigger</p>
            <p className="mt-1 text-sm text-gray-700">
              The initial engagement is working — DDQs are getting done, allocators are happy.
              Now the conversation shifts naturally: what happens when the SEC shows up?
              The Reg S-P amendments require a documented incident response program. The firm&apos;s
              policies need to be current, specific, and board-approved.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">What We Add</p>
            <div className="mt-2 grid grid-cols-3 gap-3">
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-aqua-dark">Policies</p>
                <p className="text-sm font-medium text-db-dark mt-1">Full Policy Program</p>
                <p className="text-xs text-gray-500 mt-1">Written, board-approved cybersecurity policies tailored to the firm. Annual reviews.</p>
              </div>
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-aqua-dark">IR Planning</p>
                <p className="text-sm font-medium text-db-dark mt-1">Incident Response Plan</p>
                <p className="text-xs text-gray-500 mt-1">Documented IR procedures with roles, escalation, and notification workflows.</p>
              </div>
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-aqua-dark">Training</p>
                <p className="text-sm font-medium text-db-dark mt-1">Security Awareness</p>
                <p className="text-xs text-gray-500 mt-1">Employee training program with completion tracking and phishing simulations.</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">How We Measure Value</p>
            <div className="mt-1 flex flex-wrap gap-2">
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">All policies current and board-approved</span>
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">IR plan documented and roles assigned</span>
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">90%+ training completion rate</span>
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">Exam-ready document package maintained</span>
            </div>
          </div>

          <div className="rounded-md bg-green-50 border border-green-200 p-3">
            <p className="text-xs font-semibold text-green-700">THE BRIDGE TO PHASE 3</p>
            <p className="text-sm text-green-800 mt-1">
              &ldquo;You have the policies and the plan on paper. Now let&apos;s test it. When&apos;s the
              last time you ran a tabletop exercise or a penetration test? Let&apos;s find out
              if the plan actually works before you need it to.&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* ── Phase 3 ── */}
      <div className="mt-6 rounded-xl border-2 border-db-orange/60 overflow-hidden">
        <div className="bg-orange-50 px-6 py-4 border-b border-db-orange/20 flex items-center gap-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-db-orange/80 text-white text-lg font-bold">3</span>
          <div>
            <h3 className="text-lg font-bold font-heading text-db-dark">Strengthen — Protect from Disruption</h3>
            <p className="text-sm text-gray-500">Move from documentation to active defense and tested resilience.</p>
          </div>
        </div>
        <div className="px-6 py-5 space-y-5">
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">The Trigger</p>
            <p className="mt-1 text-sm text-gray-700">
              The program is documented and the firm is exam-ready. But a policy on paper
              doesn&apos;t stop ransomware. A peer firm gets breached. An employee clicks a
              phishing link. The conversation naturally evolves from &ldquo;are we compliant?&rdquo; to
              &ldquo;are we actually protected?&rdquo;
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">What We Add</p>
            <div className="mt-2 grid grid-cols-3 gap-3">
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-orange">Testing</p>
                <p className="text-sm font-medium text-db-dark mt-1">Pen Testing &amp; Vuln Scans</p>
                <p className="text-xs text-gray-500 mt-1">Find weaknesses before attackers do. Annual pen test plus quarterly vulnerability scanning.</p>
              </div>
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-orange">Readiness</p>
                <p className="text-sm font-medium text-db-dark mt-1">Tabletop Exercises</p>
                <p className="text-xs text-gray-500 mt-1">Simulate a real incident with the leadership team. Stress-test the IR plan.</p>
              </div>
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-orange">Protection</p>
                <p className="text-sm font-medium text-db-dark mt-1">IR Retainer &amp; Monitoring</p>
                <p className="text-xs text-gray-500 mt-1">Someone to call at 2am. Ongoing monitoring and rapid response capability.</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">How We Measure Value</p>
            <div className="mt-1 flex flex-wrap gap-2">
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">Vulnerabilities found and remediated</span>
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">Risk score improvement over time</span>
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">Tabletop exercise completed with leadership</span>
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">Phishing click rate decreasing quarter over quarter</span>
            </div>
          </div>

          <div className="rounded-md bg-green-50 border border-green-200 p-3">
            <p className="text-xs font-semibold text-green-700">THE BRIDGE TO PHASE 4</p>
            <p className="text-sm text-green-800 mt-1">
              &ldquo;You&apos;re now running a stronger security program than most of your peers.
              That&apos;s not just protection — it&apos;s a differentiator. Let&apos;s make sure your LPs
              and prospective allocators see it. How are you telling that story today?&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* ── Phase 4 ── */}
      <div className="mt-6 rounded-xl border-2 border-db-orange overflow-hidden">
        <div className="bg-orange-50 px-6 py-4 border-b border-db-orange/20 flex items-center gap-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-db-orange text-white text-lg font-bold">4</span>
          <div>
            <h3 className="text-lg font-bold font-heading text-db-dark">Differentiate — Security as Competitive Advantage</h3>
            <p className="text-sm text-gray-500">Turn the program into a story that wins capital and builds trust.</p>
          </div>
        </div>
        <div className="px-6 py-5 space-y-5">
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">The Trigger</p>
            <p className="mt-1 text-sm text-gray-700">
              The firm has a mature, tested program. Now the question shifts from &ldquo;are we
              protected?&rdquo; to &ldquo;how do we use this to win?&rdquo; Allocators are comparing managers.
              The firm with the best operational story wins the allocation. This is where
              cybersecurity becomes a revenue driver, not a cost center.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">What We Add</p>
            <div className="mt-2 grid grid-cols-3 gap-3">
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-orange">Positioning</p>
                <p className="text-sm font-medium text-db-dark mt-1">Peer Benchmarking</p>
                <p className="text-xs text-gray-500 mt-1">Show the firm where they stand vs. peers — and help them tell that story to allocators.</p>
              </div>
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-orange">Governance</p>
                <p className="text-sm font-medium text-db-dark mt-1">Board &amp; LP Reporting</p>
                <p className="text-xs text-gray-500 mt-1">Executive-ready reports that demonstrate program maturity to leadership and investors.</p>
              </div>
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-orange">Growth</p>
                <p className="text-sm font-medium text-db-dark mt-1">Vendor Risk Program</p>
                <p className="text-xs text-gray-500 mt-1">Extend the program to cover third-party risk — a top allocator and regulatory priority.</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">How We Measure Value</p>
            <div className="mt-1 flex flex-wrap gap-2">
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">Top-quartile peer benchmarking position</span>
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">Board receives quarterly security reports</span>
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">LP feedback cites security program as a strength</span>
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">Vendor risk program covering critical third parties</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scale narrative */}
      <SectionHeading>The Constant: Scale Without Headcount</SectionHeading>
      <div className="rounded-lg border-l-4 border-db-dark bg-gray-50 p-5">
        <p className="text-sm text-gray-700 leading-relaxed">
          <strong>Outcome 5 — Scale Without Adding Headcount</strong> — isn&apos;t a phase. It&apos;s the
          underlying value proposition that runs through the entire journey. At every phase, the
          client is getting enterprise-grade security without hiring a CISO or building an internal
          team. This should be reinforced at every touchpoint: &ldquo;We&apos;re delivering all of this
          at a fraction of what it would cost to build in-house — and it scales automatically
          as your firm grows.&rdquo;
        </p>
      </div>

      {/* Journey at a glance */}
      <SectionHeading>The Journey at a Glance</SectionHeading>
      <div className="rounded-md border border-gray-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left font-medium text-gray-600">Phase</th>
              <th className="px-4 py-2 text-left font-medium text-gray-600">Outcome</th>
              <th className="px-4 py-2 text-left font-medium text-gray-600">Client Says</th>
              <th className="px-4 py-2 text-left font-medium text-gray-600">We Deliver</th>
              <th className="px-4 py-2 text-left font-medium text-gray-600">Bridge to Next</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            <tr>
              <td className="px-4 py-2 font-medium text-db-dark">1. Get Started</td>
              <td className="px-4 py-2 text-gray-600">Capital Confidence</td>
              <td className="px-4 py-2 text-gray-600 italic">&ldquo;DDQ season is killing us&rdquo;</td>
              <td className="px-4 py-2 text-gray-600">Assessment, DDQ support, ODD readiness</td>
              <td className="px-4 py-2 text-gray-600">&ldquo;Let&apos;s make the underlying program exam-ready&rdquo;</td>
            </tr>
            <tr className="bg-gray-50/50">
              <td className="px-4 py-2 font-medium text-db-dark">2. Foundation</td>
              <td className="px-4 py-2 text-gray-600">Regulatory Readiness</td>
              <td className="px-4 py-2 text-gray-600 italic">&ldquo;What if the SEC shows up?&rdquo;</td>
              <td className="px-4 py-2 text-gray-600">Policies, IR plan, training program</td>
              <td className="px-4 py-2 text-gray-600">&ldquo;Let&apos;s test if the plan actually works&rdquo;</td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-medium text-db-dark">3. Strengthen</td>
              <td className="px-4 py-2 text-gray-600">Protection</td>
              <td className="px-4 py-2 text-gray-600 italic">&ldquo;Are we actually protected?&rdquo;</td>
              <td className="px-4 py-2 text-gray-600">Pen testing, tabletops, IR retainer</td>
              <td className="px-4 py-2 text-gray-600">&ldquo;You&apos;re ahead of peers — let&apos;s tell that story&rdquo;</td>
            </tr>
            <tr className="bg-gray-50/50">
              <td className="px-4 py-2 font-medium text-db-dark">4. Differentiate</td>
              <td className="px-4 py-2 text-gray-600">Competitive Advantage</td>
              <td className="px-4 py-2 text-gray-600 italic">&ldquo;How do we stand out?&rdquo;</td>
              <td className="px-4 py-2 text-gray-600">Benchmarking, board reporting, vendor risk</td>
              <td className="px-4 py-2 text-gray-600">Continuous partnership &amp; expansion</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Key principles */}
      <SectionHeading>Key Principles</SectionHeading>
      <div className="grid grid-cols-2 gap-4">
        <CharacteristicCard
          title="Start Where They Hurt"
          description="Don't try to sell the full program on day one. Solve their most urgent problem, prove value fast, and earn the right to expand."
        />
        <CharacteristicCard
          title="Every Phase Earns the Next"
          description="The bridge between phases should feel natural, not salesy. You're identifying the next business problem, not pitching the next SKU."
        />
        <CharacteristicCard
          title="The Client Sets the Pace"
          description="Some clients move through all four phases in year one. Others take three years. Match their priorities and budget cycle, not yours."
        />
        <CharacteristicCard
          title="The Journey Never Ends"
          description="Phase 4 isn't the finish line. Threats evolve, regulations change, firms grow. The partnership continues to create value as long as we stay relevant."
        />
      </div>

      <DrawbridgeAngle>
        <p>
          This journey has two layers by design. The <strong>client-facing outcome phases</strong> are
          what you share externally — they show the client a clear, non-salesy path
          forward. The <strong>internal lifecycle</strong> is how we operate — it ensures
          clean handoffs, clear ownership, and disciplined value communication.
        </p>
        <p>
          The RM is the connective tissue. You bridge Discovery to Implementation by
          setting clear expectations. You bridge Implementation to Value Realization by
          gathering evidence and telling the story. You bridge Value to Strategic
          Partnership by earning trust. And you bridge Strategic Partnership to Renewal
          by making the decision obvious. Every bridge is earned, never forced.
        </p>
      </DrawbridgeAngle>

      <LastUpdated date="2026-02-24" />
    </>
  );
}
