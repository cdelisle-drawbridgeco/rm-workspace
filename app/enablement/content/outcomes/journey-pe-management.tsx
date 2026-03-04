'use client';

import { HeroSection, SectionHeading, CharacteristicCard, DrawbridgeAngle, LastUpdated } from '../../components/shared-ui';

export default function JourneyPEManagement() {
  const phases = [
    { num: '1', label: 'Get Started', color: 'bg-db-aqua' },
    { num: '2', label: 'Build Foundation', color: 'bg-db-aqua-dark' },
    { num: '3', label: 'Strengthen', color: 'bg-db-orange/80' },
    { num: '4', label: 'Differentiate', color: 'bg-db-orange' },
  ];

  return (
    <>
      <HeroSection
        icon="🏛️"
        title="Customer Journey — PE Management Company"
        subtitle="A roadmap for building a lasting relationship with PE firms (GPs). Start with the fundraising moment, then expand into portfolio oversight and value creation."
      />
      <LastUpdated date="February 24, 2026 at 10:39 PM" />

      {/* How to use */}
      <div className="mt-6 rounded-lg bg-db-dark p-5">
        <p className="text-sm font-semibold text-db-aqua uppercase tracking-wide mb-2">
          Two Views of the Same Journey
        </p>
        <div className="grid grid-cols-2 gap-6 text-sm text-gray-300">
          <div>
            <p className="font-medium text-white">Client-Facing (Outcome Phases)</p>
            <p className="mt-1">What the PE firm sees: a progression of business outcomes — from LP due diligence readiness to using cyber as a value creation lever across the portfolio. Share this in sales, QBRs, and renewals.</p>
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
        Every PE management company relationship follows a continuous cycle. Each stage has a clear
        owner, a defined purpose, and a handoff that keeps the relationship moving forward. Note: PE
        fundraising cycles are longer (12–18 months) and less frequent (every 3–5 years) — making each
        touchpoint higher-stakes.
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
                <p className="mt-1 text-gray-700">Understand the PE firm&apos;s business problem — is it LP pressure during a fundraise, SEC exam preparation, or portfolio-level risk oversight? Map the outcome, not a product list.</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase">Key Activities</p>
                <ul className="mt-1 text-gray-700 space-y-1">
                  <li>&#8226; Identify the triggering event (fundraise ODD, SEC exam, portfolio incident, LP mandate)</li>
                  <li>&#8226; Map key decision-makers (Managing Partner, COO, Head of Portfolio Ops)</li>
                  <li>&#8226; Design a solution scoped to the outcome — firm-level, portfolio-level, or both</li>
                  <li>&#8226; Present the journey: show the firm the path from LP readiness to value creation</li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase">Handoff</p>
                <p className="mt-1 text-gray-700">
                  Closed deal transitions to implementation with a clear brief: the outcome
                  we promised, scope (firm-level vs. portfolio-wide), timeline aligned to the
                  fundraising cycle, and the client&apos;s expectations. The RM is introduced
                  before the sale closes.
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
                <p className="mt-1 text-gray-700">Configure the platform, deliver the initial firm-level assessment, and begin working on the promised outcome. For portfolio-level engagements, onboard the PE Portfolio Analytics platform.</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase">Key Activities</p>
                <ul className="mt-1 text-gray-700 space-y-1">
                  <li>&#8226; Kick-off call with Managing Partner, COO, and/or Head of Portfolio Ops</li>
                  <li>&#8226; Platform configuration and firm-level data collection</li>
                  <li>&#8226; Initial security assessment and gap analysis at the GP level</li>
                  <li>&#8226; Begin delivering against scoped outcome (DDQs, policies, portfolio onboarding)</li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase">Handoff</p>
                <p className="mt-1 text-gray-700">
                  Implementation is &ldquo;complete&rdquo; when the initial deliverables are in the
                  firm&apos;s hands and the program is running. The RM takes the lead on the
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
                <p className="mt-1 text-gray-700">Measure and communicate the value delivered — in terms the Managing Partner and LPs care about. Frame around fundraising success, portfolio risk reduction, and operational scalability.</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase">Key Activities</p>
                <ul className="mt-1 text-gray-700 space-y-1">
                  <li>&#8226; Gather evidence: DDQs completed, LP ODD reviews passed, portfolio risk scores</li>
                  <li>&#8226; Frame the story around the outcome — capital raised, exams passed, portfolio visibility gained</li>
                  <li>&#8226; Deliver a QBR showing firm-level and portfolio-level impact</li>
                  <li>&#8226; Confirm with the client that LPs and the board see the value</li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase">Handoff</p>
                <p className="mt-1 text-gray-700">
                  Once the firm confirms value, the RM shifts into strategic partnership
                  mode. The firm trusts us — now we&apos;ve earned the right to broaden
                  the conversation to portfolio-level oversight or value creation.
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
                  Be the firm&apos;s trusted advisor — someone who understands their fund lifecycle,
                  portfolio strategy, and LP expectations.
                  <strong> This is an RM relationship role</strong>, distinct from the cybersecurity
                  advisory services our delivery team provides.
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase">Key Activities</p>
                <ul className="mt-1 text-gray-700 space-y-1">
                  <li>&#8226; Stay close to the firm&apos;s business: fundraising timelines, new acquisitions, exits, LP advisory committee meetings</li>
                  <li>&#8226; Proactively surface portfolio-level risks they may not have connected to cyber</li>
                  <li>&#8226; Introduce the next outcome phase when timing is right — tied to fund lifecycle events</li>
                  <li>&#8226; Keep the advisory team informed so delivery stays aligned with deal flow</li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase">The Distinction</p>
                <p className="mt-1 text-gray-700">
                  <strong>RM as strategic advisor</strong> = understanding the firm&apos;s fund strategy,
                  LP relationships, and portfolio composition. <strong>Cybersecurity advisory services</strong> =
                  the technical expertise our delivery team provides (assessments, portfolio analytics, M&amp;A DD).
                  The RM connects the two.
                </p>
              </div>
            </div>
            <div className="mt-4 rounded-md bg-orange-50 border border-orange-200 p-3">
              <p className="text-xs font-semibold text-db-orange uppercase">PE-Specific Timing</p>
              <p className="text-sm text-gray-700 mt-1">
                PE firms operate on longer cycles than hedge funds. Fundraising happens every 3–5 years,
                not annually. That means the &ldquo;fundraising DD moment&rdquo; is higher-stakes and less frequent.
                Stay close to the fund lifecycle — the best time to expand scope is during a new fund
                launch, a major acquisition, or exit preparation, not on an arbitrary renewal date.
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
                <p className="mt-1 text-gray-700">Prove the value delivered across firm-level and portfolio-level programs. Demonstrate ROI in terms LPs and the board understand — risk reduction, fundraising readiness, and portfolio visibility.</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase">Key Activities</p>
                <ul className="mt-1 text-gray-700 space-y-1">
                  <li>&#8226; Present outcome-based value summary (not a task list)</li>
                  <li>&#8226; Quantify ROI: cost of building in-house, portfolio risk reduction, LP satisfaction</li>
                  <li>&#8226; Propose next year&apos;s scope — including portfolio expansion or exit readiness if appropriate</li>
                  <li>&#8226; Negotiate and close using the playbook principles</li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase">What Happens Next</p>
                <p className="mt-1 text-gray-700">
                  After renewal, the cycle continues — back into <strong>Strategic Partnership</strong>.
                  If the renewal includes new scope (portfolio oversight, M&amp;A DD, exit prep), it flows
                  through Implementation first. The relationship is continuous, aligned to the fund lifecycle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lifecycle + Outcome mapping */}
      <SectionHeading>How the Lifecycle Maps to Outcome Phases</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed mb-4">
        The internal lifecycle repeats within each outcome phase. As the PE firm progresses
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
              <td className="px-3 py-2 text-gray-600 text-xs">Sales identifies LP ODD/fundraising pain</td>
              <td className="px-3 py-2 text-gray-600 text-xs">Advisory delivers assessment + DDQ foundation + LP-ready reporting</td>
              <td className="px-3 py-2 text-gray-600 text-xs">RM shows LP satisfaction, ODD pass rate, DDQ turnaround</td>
              <td className="px-3 py-2 text-gray-600 text-xs">RM bridges to firm-level regulatory readiness</td>
            </tr>
            <tr className="bg-gray-50/50">
              <td className="px-3 py-2 font-medium text-db-dark">2. Regulatory Readiness</td>
              <td className="px-3 py-2 text-gray-600 text-xs">RM identifies SEC exam risk, Reg S-P gaps</td>
              <td className="px-3 py-2 text-gray-600 text-xs">Advisory builds full policy program, IR plan, employee training</td>
              <td className="px-3 py-2 text-gray-600 text-xs">RM shows exam-ready posture, policy currency, training rates</td>
              <td className="px-3 py-2 text-gray-600 text-xs">RM bridges to portfolio oversight</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-medium text-db-dark">3. Portfolio Oversight</td>
              <td className="px-3 py-2 text-gray-600 text-xs">RM identifies portfolio-wide risk visibility gaps</td>
              <td className="px-3 py-2 text-gray-600 text-xs">Advisory deploys PE Portfolio Analytics, portco assessments, M&amp;A DD</td>
              <td className="px-3 py-2 text-gray-600 text-xs">RM shows portfolio risk scores, coverage rates, DD findings</td>
              <td className="px-3 py-2 text-gray-600 text-xs">RM bridges to value creation positioning</td>
            </tr>
            <tr className="bg-gray-50/50">
              <td className="px-3 py-2 font-medium text-db-dark">4. Value Creation</td>
              <td className="px-3 py-2 text-gray-600 text-xs">RM identifies exit prep or LP differentiation opportunity</td>
              <td className="px-3 py-2 text-gray-600 text-xs">Advisory delivers benchmarking, board/IC reports, maturity scoring</td>
              <td className="px-3 py-2 text-gray-600 text-xs">RM shows peer positioning, LP feedback, portfolio maturity trends</td>
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
        Below is the client-facing view — what you share with the PE firm. The internal lifecycle
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
            <p className="text-sm text-gray-500">LP due diligence is now a gating factor. Solve it first, and everything else follows.</p>
          </div>
        </div>
        <div className="px-6 py-5 space-y-5">
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">The Trigger</p>
            <p className="mt-1 text-sm text-gray-700">
              A PE firm raising a new fund faces LP operational due diligence that now includes
              cybersecurity as a gating factor. Fundraising cycles are 12–18 months and happen
              every 3–5 years — failing ODD can delay or derail a fund close. An LP asked a
              question they couldn&apos;t answer, a placement agent flagged gaps, or a consultant
              recommended a program.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">What We Do</p>
            <div className="mt-2 grid grid-cols-3 gap-3">
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-aqua-dark">Week 1–2</p>
                <p className="text-sm font-medium text-db-dark mt-1">Security Assessment</p>
                <p className="text-xs text-gray-500 mt-1">Baseline the firm&apos;s current posture. Identify gaps LPs and ODD consultants will find.</p>
              </div>
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-aqua-dark">Week 2–4</p>
                <p className="text-sm font-medium text-db-dark mt-1">Policy &amp; DDQ Foundation</p>
                <p className="text-xs text-gray-500 mt-1">Build core policies and prepare DDQ responses the firm can share with LPs and ODD reviewers immediately.</p>
              </div>
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-aqua-dark">Ongoing</p>
                <p className="text-sm font-medium text-db-dark mt-1">LP-Ready Reporting</p>
                <p className="text-xs text-gray-500 mt-1">Investor-facing security reports and ODD support throughout the fundraising cycle.</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">How We Measure Value</p>
            <div className="mt-1 flex flex-wrap gap-2">
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">LP ODD reviews passed without findings</span>
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">DDQ turnaround: 3 weeks → 5 days</span>
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">Fund close not delayed by cyber gaps</span>
            </div>
          </div>

          <div className="rounded-md bg-green-50 border border-green-200 p-3">
            <p className="text-xs font-semibold text-green-700">THE BRIDGE TO PHASE 2</p>
            <p className="text-sm text-green-800 mt-1">
              &ldquo;Your LPs are satisfied and the fundraise is on track. But the DDQ responses are only
              as good as the program behind them. With the SEC now examining PE advisers more aggressively
              — especially around Reg S-P — let&apos;s make sure the underlying program is exam-ready,
              not just LP-ready.&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* ── Phase 2 ── */}
      <div className="mt-6 rounded-xl border-2 border-db-aqua-dark overflow-hidden">
        <div className="bg-db-aqua-dark/10 px-6 py-4 border-b border-db-aqua-dark/20 flex items-center gap-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-db-aqua-dark text-white text-lg font-bold">2</span>
          <div>
            <h3 className="text-lg font-bold font-heading text-db-dark">Build the Foundation — Firm-Level Regulatory Readiness</h3>
            <p className="text-sm text-gray-500">Move from LP-ready responses to a comprehensive compliance program at the GP level.</p>
          </div>
        </div>
        <div className="px-6 py-5 space-y-5">
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">The Trigger</p>
            <p className="mt-1 text-sm text-gray-700">
              The initial engagement is working — LPs are satisfied and the fundraise closed.
              Now the conversation shifts: the SEC is increasingly examining PE advisers, and the
              Reg S-P amendments require a documented incident response program. The firm&apos;s
              policies need to be current, specific, and board-approved — covering the management
              company itself, not just DDQ responses.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">What We Add</p>
            <div className="mt-2 grid grid-cols-3 gap-3">
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-aqua-dark">Policies</p>
                <p className="text-sm font-medium text-db-dark mt-1">Full Policy Program</p>
                <p className="text-xs text-gray-500 mt-1">Written, board-approved cybersecurity policies tailored to the GP entity. Annual reviews and updates.</p>
              </div>
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-aqua-dark">IR Planning</p>
                <p className="text-sm font-medium text-db-dark mt-1">Incident Response Plan</p>
                <p className="text-xs text-gray-500 mt-1">Documented IR procedures with roles, escalation, and Reg S-P notification workflows.</p>
              </div>
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-aqua-dark">Training</p>
                <p className="text-sm font-medium text-db-dark mt-1">Employee Training</p>
                <p className="text-xs text-gray-500 mt-1">Security awareness program with completion tracking, phishing simulations, and exam-ready documentation.</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">How We Measure Value</p>
            <div className="mt-1 flex flex-wrap gap-2">
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">All policies current and board-approved</span>
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">IR plan documented with Reg S-P compliance</span>
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">90%+ training completion rate</span>
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">Exam-ready document package maintained</span>
            </div>
          </div>

          <div className="rounded-md bg-green-50 border border-green-200 p-3">
            <p className="text-xs font-semibold text-green-700">THE BRIDGE TO PHASE 3</p>
            <p className="text-sm text-green-800 mt-1">
              &ldquo;The firm itself is in great shape. But your LPs and board are starting to ask about
              the portfolio — how are your portfolio companies managing cyber risk? You have 15 companies
              across three funds. Do you know which ones are exposed? Let&apos;s get visibility across the
              full portfolio.&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* ── Phase 3 ── */}
      <div className="mt-6 rounded-xl border-2 border-db-orange/60 overflow-hidden">
        <div className="bg-orange-50 px-6 py-4 border-b border-db-orange/20 flex items-center gap-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-db-orange/80 text-white text-lg font-bold">3</span>
          <div>
            <h3 className="text-lg font-bold font-heading text-db-dark">Strengthen — Portfolio Oversight &amp; Protection</h3>
            <p className="text-sm text-gray-500">Extend the program from the GP to the portfolio. Get visibility across every company you own.</p>
          </div>
        </div>
        <div className="px-6 py-5 space-y-5">
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">The Trigger</p>
            <p className="mt-1 text-sm text-gray-700">
              The firm&apos;s own house is in order. Now the board, LPs, or investment committee
              is asking about portfolio-level risk. A portfolio company incident, an upcoming exit,
              or a new acquisition surfaces the question: &ldquo;Do we have cyber visibility across
              our entire portfolio?&rdquo; This is where PE-specific capabilities — Portfolio Analytics,
              M&amp;A DD — differentiate Drawbridge.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">What We Add</p>
            <div className="mt-2 grid grid-cols-3 gap-3">
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-orange">Portfolio</p>
                <p className="text-sm font-medium text-db-dark mt-1">PE Portfolio Analytics</p>
                <p className="text-xs text-gray-500 mt-1">Dashboard showing cyber risk scores across all portfolio companies. Identify outliers and track remediation.</p>
              </div>
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-orange">Assessments</p>
                <p className="text-sm font-medium text-db-dark mt-1">Portfolio Company Tracking</p>
                <p className="text-xs text-gray-500 mt-1">Standardized assessments across portfolio companies with maturity scoring and remediation tracking.</p>
              </div>
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-orange">M&amp;A</p>
                <p className="text-sm font-medium text-db-dark mt-1">Cyber Due Diligence</p>
                <p className="text-xs text-gray-500 mt-1">Pre-acquisition cyber screening for new deals. Identify hidden risks before closing.</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">How We Measure Value</p>
            <div className="mt-1 flex flex-wrap gap-2">
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">100% portfolio company coverage</span>
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">Portfolio risk score improvement over time</span>
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">M&amp;A DD completed on all new acquisitions</span>
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">Board/IC receives quarterly portfolio cyber report</span>
            </div>
          </div>

          <div className="rounded-md bg-green-50 border border-green-200 p-3">
            <p className="text-xs font-semibold text-green-700">THE BRIDGE TO PHASE 4</p>
            <p className="text-sm text-green-800 mt-1">
              &ldquo;You now have visibility and oversight across the full portfolio. That&apos;s not just
              risk management — it&apos;s a value creation lever. Portfolio companies with strong
              cyber programs command higher valuations at exit. Let&apos;s turn this from a cost center
              into a differentiator your LPs talk about.&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* ── Phase 4 ── */}
      <div className="mt-6 rounded-xl border-2 border-db-orange overflow-hidden">
        <div className="bg-orange-50 px-6 py-4 border-b border-db-orange/20 flex items-center gap-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-db-orange text-white text-lg font-bold">4</span>
          <div>
            <h3 className="text-lg font-bold font-heading text-db-dark">Differentiate — Cyber as Value Creation</h3>
            <p className="text-sm text-gray-500">Position the cyber program as an LP differentiator and portfolio value-creation lever.</p>
          </div>
        </div>
        <div className="px-6 py-5 space-y-5">
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">The Trigger</p>
            <p className="mt-1 text-sm text-gray-700">
              The firm has firm-level compliance and portfolio-wide oversight. Now the question shifts
              from &ldquo;are we managing risk?&rdquo; to &ldquo;how do we use this to win?&rdquo; LPs
              are comparing GPs on operational maturity. Portfolio companies approaching exit need
              buyer-ready security postures. The cyber program becomes a revenue driver — improving
              valuations, winning LP allocations, and reducing deal risk.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">What We Add</p>
            <div className="mt-2 grid grid-cols-3 gap-3">
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-orange">Positioning</p>
                <p className="text-sm font-medium text-db-dark mt-1">Peer Benchmarking</p>
                <p className="text-xs text-gray-500 mt-1">Show where the firm stands vs. peer GPs — and help tell that story to LPs and advisory committees.</p>
              </div>
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-orange">Governance</p>
                <p className="text-sm font-medium text-db-dark mt-1">Board &amp; IC Reporting</p>
                <p className="text-xs text-gray-500 mt-1">Executive-ready reports for the board and investment committee showing portfolio maturity trends.</p>
              </div>
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-orange">Exit Prep</p>
                <p className="text-sm font-medium text-db-dark mt-1">Portfolio Maturity &amp; Exit Readiness</p>
                <p className="text-xs text-gray-500 mt-1">Maturity scoring for portfolio companies approaching exit. Buyer-ready security documentation.</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">How We Measure Value</p>
            <div className="mt-1 flex flex-wrap gap-2">
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">Top-quartile GP peer benchmarking position</span>
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">Board &amp; IC receive quarterly portfolio maturity reports</span>
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">LP feedback cites security program as differentiator</span>
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">Exit-ready portcos pass buyer DD without findings</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scale narrative */}
      <SectionHeading>The Constant: Scale Without Headcount</SectionHeading>
      <div className="rounded-lg border-l-4 border-db-dark bg-gray-50 p-5">
        <p className="text-sm text-gray-700 leading-relaxed">
          <strong>Scale Without Adding Headcount</strong> — isn&apos;t a phase. It&apos;s the
          underlying value proposition that runs through the entire journey. At every phase, the
          PE firm is getting enterprise-grade security — for both the management company and across
          the portfolio — without hiring a CISO or building internal security teams at every
          portfolio company. This should be reinforced at every touchpoint: &ldquo;We&apos;re delivering
          firm-level compliance, portfolio-wide oversight, and exit-ready security at a fraction
          of what it would cost to build in-house — and it scales automatically as your portfolio
          grows.&rdquo;
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
              <td className="px-4 py-2 text-gray-600 italic">&ldquo;LPs are asking about cyber and we&apos;re not ready&rdquo;</td>
              <td className="px-4 py-2 text-gray-600">Assessment, DDQ support, LP-ready reporting</td>
              <td className="px-4 py-2 text-gray-600">&ldquo;Let&apos;s make the firm exam-ready, not just LP-ready&rdquo;</td>
            </tr>
            <tr className="bg-gray-50/50">
              <td className="px-4 py-2 font-medium text-db-dark">2. Foundation</td>
              <td className="px-4 py-2 text-gray-600">Regulatory Readiness</td>
              <td className="px-4 py-2 text-gray-600 italic">&ldquo;What if the SEC examines us?&rdquo;</td>
              <td className="px-4 py-2 text-gray-600">Policies, IR plan, training, exam-ready docs</td>
              <td className="px-4 py-2 text-gray-600">&ldquo;Now let&apos;s look at the portfolio&rdquo;</td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-medium text-db-dark">3. Strengthen</td>
              <td className="px-4 py-2 text-gray-600">Portfolio Oversight</td>
              <td className="px-4 py-2 text-gray-600 italic">&ldquo;Do we know which portcos are exposed?&rdquo;</td>
              <td className="px-4 py-2 text-gray-600">PE Portfolio Analytics, portco assessments, M&amp;A DD</td>
              <td className="px-4 py-2 text-gray-600">&ldquo;This isn&apos;t just risk — it&apos;s a value creation lever&rdquo;</td>
            </tr>
            <tr className="bg-gray-50/50">
              <td className="px-4 py-2 font-medium text-db-dark">4. Differentiate</td>
              <td className="px-4 py-2 text-gray-600">Value Creation</td>
              <td className="px-4 py-2 text-gray-600 italic">&ldquo;How do we use cyber to win LP allocations?&rdquo;</td>
              <td className="px-4 py-2 text-gray-600">Benchmarking, board/IC reporting, exit readiness</td>
              <td className="px-4 py-2 text-gray-600">Continuous partnership &amp; portfolio expansion</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Key principles */}
      <SectionHeading>Key Principles</SectionHeading>
      <div className="grid grid-cols-2 gap-4">
        <CharacteristicCard
          title="Align to the Fund Lifecycle"
          description="PE firms don't operate on annual cycles like hedge funds. Time your conversations to fundraising events, new acquisitions, and exit timelines — not arbitrary renewal dates."
        />
        <CharacteristicCard
          title="Start at the GP, Expand to the Portfolio"
          description="Most PE relationships start with the management company's own compliance needs. Earn trust at the firm level before expanding to portfolio-wide oversight."
        />
        <CharacteristicCard
          title="Cyber as Value Creation, Not Just Cost"
          description="The strongest PE relationships position cybersecurity as a value-creation lever — improving portco valuations, winning LP allocations, and reducing deal risk."
        />
        <CharacteristicCard
          title="Know the Decision-Makers"
          description="PE firms have different power centers: Managing Partner (strategy), COO (operations), Head of Portfolio Ops (portco oversight). Map the org and tailor your message."
        />
      </div>

      <DrawbridgeAngle>
        <p>
          This journey has two layers by design. The <strong>client-facing outcome phases</strong> are
          what you share externally — they show the PE firm a clear path from LP readiness to
          portfolio-wide value creation. The <strong>internal lifecycle</strong> is how we operate —
          it ensures clean handoffs, clear ownership, and disciplined value communication.
        </p>
        <p>
          The PE management company journey is distinct from hedge funds in two critical ways:
          <strong> Phase 3 introduces portfolio-level oversight</strong> — PE Portfolio Analytics,
          portfolio company tracking, and M&amp;A cyber due diligence. And <strong>Phase 4 frames cyber
          as a value creation lever</strong> — improving portfolio company valuations and winning
          LP allocations, not just competitive positioning. The RM who understands the fund lifecycle
          and portfolio strategy becomes indispensable.
        </p>
      </DrawbridgeAngle>

    </>
  );
}
