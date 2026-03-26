'use client';

import { HeroSection, SectionHeading, CharacteristicCard, DrawbridgeAngle, LastUpdated } from '../../components/shared-ui';

export default function JourneyPEPortco() {
  const phases = [
    { num: '1', label: 'Get Started', color: 'bg-db-aqua' },
    { num: '2', label: 'Build Foundation', color: 'bg-db-aqua-dark' },
    { num: '3', label: 'Strengthen', color: 'bg-db-orange/80' },
    { num: '4', label: 'Differentiate', color: 'bg-db-orange' },
  ];

  return (
    <>
      <HeroSection
        icon="🏭"
        title="Customer Journey — PE Portfolio Company"
        subtitle="A roadmap for portfolio companies mandated by their PE sponsor to build a security program. Start with rapid uplift, then mature toward exit readiness."
      />
      <LastUpdated date="March 25, 2026 at 3:45 PM" />

      {/* How to use */}
      <div className="mt-6 rounded-lg bg-db-dark p-5">
        <p className="text-sm font-semibold text-db-aqua uppercase tracking-wide mb-2">
          Two Views of the Same Journey
        </p>
        <div className="grid grid-cols-2 gap-6 text-sm text-gray-300">
          <div>
            <p className="font-medium text-white">Client-Facing (Outcome Phases)</p>
            <p className="mt-1">What the portfolio company sees: a progression from baseline compliance to exit-ready security. The &ldquo;client&rdquo; is the portco (CEO, CFO, IT Director), but the PE sponsor is often the mandate source and buyer.</p>
          </div>
          <div>
            <p className="font-medium text-white">Internal (Drawbridge Lifecycle)</p>
            <p className="mt-1">How we operate behind the scenes: the handoffs, roles, and motions that deliver each outcome. Discovery is often triggered by the PE operating partner, not a traditional sales motion.</p>
          </div>
        </div>
      </div>

      {/* ── INTERNAL LIFECYCLE ── */}
      <SectionHeading>The Drawbridge Lifecycle</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed mb-4">
        Portfolio company relationships follow a continuous cycle, but the entry point is different:
        the PE sponsor typically mandates the engagement, and the portco often starts from near-zero
        security maturity. The timeline aligns to the PE hold period (3–7 years), not an annual
        renewal cycle.
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
            <span className="rounded-full bg-white/20 px-3 py-0.5 text-xs text-white">PE Operating Partner + Sales</span>
          </div>
          <div className="px-5 py-4">
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase">Purpose</p>
                <p className="mt-1 text-gray-700">Understand the portco&apos;s current state and the sponsor&apos;s expectations. Most portcos are mid-market operating companies with minimal security infrastructure — the gap between &ldquo;where they are&rdquo; and &ldquo;where they need to be&rdquo; is typically large.</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase">Key Activities</p>
                <ul className="mt-1 text-gray-700 space-y-1">
                  <li>&#8226; Identify the trigger (PE sponsor mandate, acquisition, insurance requirement, customer demand)</li>
                  <li>&#8226; Map stakeholders: portco leadership (CEO, CFO, IT Director) + PE operating partner</li>
                  <li>&#8226; Assess current maturity level — many portcos start from near-zero</li>
                  <li>&#8226; Design a rapid-uplift plan scoped to the sponsor&apos;s timeline and the portco&apos;s reality</li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase">Handoff</p>
                <p className="mt-1 text-gray-700">
                  Closed deal transitions to implementation with dual accountability: the portco
                  owns day-to-day execution, the PE sponsor tracks progress. The RM is introduced
                  to both the portco leadership and the operating partner.
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
                <p className="mt-1 text-gray-700">Deliver rapid uplift. Portcos often need to go from zero to credible in weeks, not months. The advisory team drives the technical delivery while the RM manages expectations with both the portco and the PE sponsor.</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase">Key Activities</p>
                <ul className="mt-1 text-gray-700 space-y-1">
                  <li>&#8226; Kick-off call with portco leadership and PE operating partner</li>
                  <li>&#8226; Rapid assessment and gap analysis (first 2 weeks)</li>
                  <li>&#8226; Critical remediation priorities — focus on the highest-impact gaps first</li>
                  <li>&#8226; Report progress to PE sponsor through portfolio analytics dashboard</li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase">Handoff</p>
                <p className="mt-1 text-gray-700">
                  Implementation is &ldquo;complete&rdquo; when the initial assessment is delivered,
                  critical gaps are identified, and a remediation roadmap is in place. The RM
                  takes the lead while the advisory team continues delivery.
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
                <p className="mt-1 text-gray-700">Measure and communicate progress — to both the portco and the PE sponsor. Frame around business outcomes: risk reduction, compliance milestones, and insurance/customer requirement satisfaction.</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase">Key Activities</p>
                <ul className="mt-1 text-gray-700 space-y-1">
                  <li>&#8226; Gather evidence: assessment scores, remediation completion, compliance progress</li>
                  <li>&#8226; Frame the story for two audiences: portco leadership and PE sponsor</li>
                  <li>&#8226; Show maturity improvement: &ldquo;You were here 90 days ago, you&apos;re here now&rdquo;</li>
                  <li>&#8226; Feed progress data into the PE sponsor&apos;s portfolio analytics dashboard</li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase">Handoff</p>
                <p className="mt-1 text-gray-700">
                  Once the portco and sponsor confirm value, the RM shifts into strategic
                  partnership mode — planning the next phase of maturity improvement aligned
                  to the hold period and exit timeline.
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
                  Be the portco&apos;s trusted security partner — the team they rely on because
                  they don&apos;t have (and shouldn&apos;t build) an internal security function.
                  <strong> The RM bridges between portco needs and PE sponsor expectations</strong>,
                  ensuring both sides are aligned on the maturity roadmap.
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase">Key Activities</p>
                <ul className="mt-1 text-gray-700 space-y-1">
                  <li>&#8226; Stay close to the portco&apos;s business: growth plans, new customers, M&amp;A activity, regulatory changes</li>
                  <li>&#8226; Monitor the PE hold period timeline — is an exit approaching?</li>
                  <li>&#8226; Proactively surface next-phase needs aligned to business events</li>
                  <li>&#8226; Keep the PE operating partner informed on progress and roadmap</li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase">The Dual Relationship</p>
                <p className="mt-1 text-gray-700">
                  Portfolio company engagements have <strong>two clients</strong>: the portco itself
                  (who experiences the service daily) and the PE sponsor (who mandated and funds the
                  engagement). The RM must serve both — showing the portco practical value and showing
                  the sponsor measurable risk reduction and exit readiness.
                </p>
              </div>
            </div>
            <div className="mt-4 rounded-md bg-orange-50 border border-orange-200 p-3">
              <p className="text-xs font-semibold text-db-orange uppercase">Hold Period Awareness</p>
              <p className="text-sm text-gray-700 mt-1">
                Portfolio companies are held for 3–7 years. The security journey should be planned
                against this timeline. If an exit is 18 months away, Phase 4 (exit readiness) becomes
                urgent. If the company was just acquired, there&apos;s time to build systematically.
                Always ask: &ldquo;Where are we in the hold period?&rdquo;
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
                <p className="mt-1 text-gray-700">Demonstrate the maturity improvement, quantify the risk reduction, and confirm the renewal. For portcos, the renewal case often goes through the PE sponsor&apos;s operating team, not the portco alone.</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase">Key Activities</p>
                <ul className="mt-1 text-gray-700 space-y-1">
                  <li>&#8226; Present maturity progression: &ldquo;Here&apos;s where you started, here&apos;s where you are&rdquo;</li>
                  <li>&#8226; Quantify ROI: cost of building in-house vs. Drawbridge, insurance savings, customer wins</li>
                  <li>&#8226; Propose next year&apos;s scope aligned to hold period and exit timeline</li>
                  <li>&#8226; Coordinate renewal approval with both portco and PE sponsor</li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase">What Happens Next</p>
                <p className="mt-1 text-gray-700">
                  After renewal, the cycle continues — back into <strong>Strategic Partnership</strong>.
                  If an exit is approaching, Phase 4 accelerates. If the portco was sold, the
                  relationship may transfer to the new owner — or the PE sponsor may deploy
                  Drawbridge at the next acquisition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lifecycle + Outcome mapping */}
      <SectionHeading>How the Lifecycle Maps to Outcome Phases</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed mb-4">
        The internal lifecycle repeats within each outcome phase. As the portco matures,
        the lifecycle spins again — each time with a stronger baseline and clearer objectives.
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
              <td className="px-3 py-2 font-medium text-db-dark">1. Baseline &amp; Comply</td>
              <td className="px-3 py-2 text-gray-600 text-xs">PE sponsor mandates program; portco has near-zero maturity</td>
              <td className="px-3 py-2 text-gray-600 text-xs">Advisory delivers rapid assessment + gap analysis + critical remediation</td>
              <td className="px-3 py-2 text-gray-600 text-xs">RM shows maturity uplift, critical gaps closed, sponsor visibility</td>
              <td className="px-3 py-2 text-gray-600 text-xs">RM bridges to documented policies and people</td>
            </tr>
            <tr className="bg-gray-50/50">
              <td className="px-3 py-2 font-medium text-db-dark">2. Policies &amp; People</td>
              <td className="px-3 py-2 text-gray-600 text-xs">RM identifies policy and training gaps</td>
              <td className="px-3 py-2 text-gray-600 text-xs">Advisory builds policies, training, IR plan, vendor risk basics</td>
              <td className="px-3 py-2 text-gray-600 text-xs">RM shows policy coverage, training rates, IR readiness</td>
              <td className="px-3 py-2 text-gray-600 text-xs">RM bridges to active testing and resilience</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-medium text-db-dark">3. Prove Resilience</td>
              <td className="px-3 py-2 text-gray-600 text-xs">RM identifies testing and defense gaps</td>
              <td className="px-3 py-2 text-gray-600 text-xs">Advisory runs pen tests, vuln scans, tabletops, IR retainer</td>
              <td className="px-3 py-2 text-gray-600 text-xs">RM shows risk reduction, remediation velocity, tested readiness</td>
              <td className="px-3 py-2 text-gray-600 text-xs">RM bridges to exit-ready security</td>
            </tr>
            <tr className="bg-gray-50/50">
              <td className="px-3 py-2 font-medium text-db-dark">4. Exit-Ready Security</td>
              <td className="px-3 py-2 text-gray-600 text-xs">PE sponsor signals exit timeline</td>
              <td className="px-3 py-2 text-gray-600 text-xs">Advisory delivers maturity scoring, compliance mapping, DD package</td>
              <td className="px-3 py-2 text-gray-600 text-xs">RM shows buyer-ready posture, compliance certifications, board reports</td>
              <td className="px-3 py-2 text-gray-600 text-xs">Exit complete or continued partnership</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs text-gray-500 italic">
        Note: Phase 1 Discovery is typically initiated by the PE operating partner, not a traditional
        sales motion. After Phase 1, the RM drives discovery for subsequent phases.
      </p>

      {/* Visual journey bar */}
      <SectionHeading>Client-Facing Outcome Phases</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed mb-4">
        Below is the client-facing view — what you share with the portfolio company and their PE sponsor.
        The internal lifecycle above is how we operate behind the scenes to deliver each phase.
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
            <h3 className="text-lg font-bold font-heading text-db-dark">Get Started — Baseline &amp; Comply</h3>
            <p className="text-sm text-gray-500">The sponsor said &ldquo;get a security program.&rdquo; Start with rapid assessment and critical remediation.</p>
          </div>
        </div>
        <div className="px-6 py-5 space-y-5">
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">The Trigger</p>
            <p className="mt-1 text-sm text-gray-700">
              A portfolio company has been mandated by its PE sponsor to implement a cybersecurity
              program. The trigger is often post-acquisition (the PE firm&apos;s operating team requires
              it), but it can also come from cyber insurance requirements, customer demands, or a
              near-miss incident. Most portcos are mid-market operating companies starting from
              near-zero security maturity.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">What We Do</p>
            <div className="mt-2 grid grid-cols-3 gap-3">
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-aqua-dark">Week 1–2</p>
                <p className="text-sm font-medium text-db-dark mt-1">Rapid Assessment</p>
                <p className="text-xs text-gray-500 mt-1">Baseline the company&apos;s current security posture. Identify the biggest gaps and most urgent risks.</p>
              </div>
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-aqua-dark">Week 2–3</p>
                <p className="text-sm font-medium text-db-dark mt-1">Gap Analysis</p>
                <p className="text-xs text-gray-500 mt-1">Map gaps against frameworks (NIST CSF, CIS), insurance requirements, and customer contractual obligations.</p>
              </div>
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-aqua-dark">Week 3–6</p>
                <p className="text-sm font-medium text-db-dark mt-1">Critical Remediation</p>
                <p className="text-xs text-gray-500 mt-1">Address the highest-risk gaps first — MFA, endpoint protection, backup verification, admin access controls.</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">How We Measure Value</p>
            <div className="mt-1 flex flex-wrap gap-2">
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">Maturity score baseline established</span>
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">Critical gaps identified and remediation underway</span>
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">PE sponsor has visibility via portfolio dashboard</span>
            </div>
          </div>

          <div className="rounded-md bg-green-50 border border-green-200 p-3">
            <p className="text-xs font-semibold text-green-700">THE BRIDGE TO PHASE 2</p>
            <p className="text-sm text-green-800 mt-1">
              &ldquo;We&apos;ve closed the critical gaps and you have a baseline. But your customers are
              asking for documented policies, your insurer wants proof of a training program, and
              your team needs to know what to do if something happens. Let&apos;s build the program
              behind the assessment.&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* ── Phase 2 ── */}
      <div className="mt-6 rounded-xl border-2 border-db-aqua-dark overflow-hidden">
        <div className="bg-db-aqua-dark/10 px-6 py-4 border-b border-db-aqua-dark/20 flex items-center gap-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-db-aqua-dark text-white text-lg font-bold">2</span>
          <div>
            <h3 className="text-lg font-bold font-heading text-db-dark">Build the Foundation — Policies &amp; People</h3>
            <p className="text-sm text-gray-500">Move from gap closure to a documented, defensible security program.</p>
          </div>
        </div>
        <div className="px-6 py-5 space-y-5">
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">The Trigger</p>
            <p className="mt-1 text-sm text-gray-700">
              The initial assessment and critical remediation are done. Now the portco needs documented
              policies that satisfy customers, insurers, and regulators. Employees need training. The
              company needs an incident response plan. This is where the portco goes from &ldquo;we fixed
              the urgent stuff&rdquo; to &ldquo;we have a real program.&rdquo;
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">What We Add</p>
            <div className="mt-2 grid grid-cols-3 gap-3">
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-aqua-dark">Policies</p>
                <p className="text-sm font-medium text-db-dark mt-1">Policy Development</p>
                <p className="text-xs text-gray-500 mt-1">Practical, right-sized policies for a mid-market company — not enterprise bloat. Covers data handling, access control, acceptable use.</p>
              </div>
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-aqua-dark">People</p>
                <p className="text-sm font-medium text-db-dark mt-1">Training &amp; IR Plan</p>
                <p className="text-xs text-gray-500 mt-1">Security awareness training for all employees. Documented IR plan with clear roles and escalation paths.</p>
              </div>
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-aqua-dark">Supply Chain</p>
                <p className="text-sm font-medium text-db-dark mt-1">Vendor Risk Basics</p>
                <p className="text-xs text-gray-500 mt-1">Basic vendor risk assessment process to satisfy customer and insurer questionnaires about third-party management.</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">How We Measure Value</p>
            <div className="mt-1 flex flex-wrap gap-2">
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">Core policies documented and approved</span>
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">IR plan documented with roles assigned</span>
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">85%+ training completion rate</span>
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">Customer security questionnaires answered confidently</span>
            </div>
          </div>

          <div className="rounded-md bg-green-50 border border-green-200 p-3">
            <p className="text-xs font-semibold text-green-700">THE BRIDGE TO PHASE 3</p>
            <p className="text-sm text-green-800 mt-1">
              &ldquo;You have policies and a plan on paper. Your employees are trained. Now let&apos;s
              test it — when&apos;s the last time anyone tried to break in? Let&apos;s run a pen test
              and a tabletop exercise to see if the plan actually works before you need it to.&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* ── Phase 3 ── */}
      <div className="mt-6 rounded-xl border-2 border-db-orange/60 overflow-hidden">
        <div className="bg-orange-50 px-6 py-4 border-b border-db-orange/20 flex items-center gap-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-db-orange/80 text-white text-lg font-bold">3</span>
          <div>
            <h3 className="text-lg font-bold font-heading text-db-dark">Strengthen — Prove Resilience</h3>
            <p className="text-sm text-gray-500">Move from documented policies to tested defenses and evidence-based resilience.</p>
          </div>
        </div>
        <div className="px-6 py-5 space-y-5">
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">The Trigger</p>
            <p className="mt-1 text-sm text-gray-700">
              The program is documented and the team is trained. But the board, the PE sponsor, or
              the insurance carrier wants evidence of active defense — not just documentation. A peer
              company in the portfolio was breached. The sponsor is tracking portfolio-wide risk scores
              and this portco needs to show improvement, not just compliance.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">What We Add</p>
            <div className="mt-2 grid grid-cols-3 gap-3">
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-orange">Testing</p>
                <p className="text-sm font-medium text-db-dark mt-1">Pen Testing &amp; Vuln Management</p>
                <p className="text-xs text-gray-500 mt-1">Find weaknesses before attackers do. Annual pen test plus ongoing vulnerability scanning and remediation tracking.</p>
              </div>
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-orange">Readiness</p>
                <p className="text-sm font-medium text-db-dark mt-1">Tabletop Exercises</p>
                <p className="text-xs text-gray-500 mt-1">Simulate a real incident with the leadership team and IT. Stress-test the IR plan in a safe environment.</p>
              </div>
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-orange">Response</p>
                <p className="text-sm font-medium text-db-dark mt-1">IR Retainer</p>
                <p className="text-xs text-gray-500 mt-1">Someone to call when something happens. Rapid response capability for a company without an internal security team.</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">How We Measure Value</p>
            <div className="mt-1 flex flex-wrap gap-2">
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">Vulnerabilities found and remediated within SLA</span>
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">Maturity score improving quarter over quarter</span>
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">Tabletop exercise completed with leadership</span>
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">IR retainer in place with tested response plan</span>
            </div>
          </div>

          <div className="rounded-md bg-green-50 border border-green-200 p-3">
            <p className="text-xs font-semibold text-green-700">THE BRIDGE TO PHASE 4</p>
            <p className="text-sm text-green-800 mt-1">
              &ldquo;Your program is strong and tested. You can prove resilience to any auditor or
              insurer. Now the sponsor is thinking about exit. When a buyer does due diligence,
              cyber will be front and center. Let&apos;s make sure the security story helps
              your valuation, not hurts it.&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* ── Phase 4 ── */}
      <div className="mt-6 rounded-xl border-2 border-db-orange overflow-hidden">
        <div className="bg-orange-50 px-6 py-4 border-b border-db-orange/20 flex items-center gap-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-db-orange text-white text-lg font-bold">4</span>
          <div>
            <h3 className="text-lg font-bold font-heading text-db-dark">Differentiate — Exit-Ready Security</h3>
            <p className="text-sm text-gray-500">Turn the security program into a valuation asset. Make buyer DD a strength, not a risk.</p>
          </div>
        </div>
        <div className="px-6 py-5 space-y-5">
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">The Trigger</p>
            <p className="mt-1 text-sm text-gray-700">
              The PE sponsor is preparing for an exit — sale to a strategic buyer, secondary buyout,
              or IPO. Buyer due diligence will scrutinize the company&apos;s cybersecurity posture.
              Gaps found during DD reduce valuations, delay closings, or kill deals. The portco
              needs to present a mature, documented, and independently validated security program
              that gives buyers confidence.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">What We Add</p>
            <div className="mt-2 grid grid-cols-3 gap-3">
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-orange">Maturity</p>
                <p className="text-sm font-medium text-db-dark mt-1">Maturity Scoring</p>
                <p className="text-xs text-gray-500 mt-1">Independently validated maturity assessment showing progression from baseline to current state.</p>
              </div>
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-orange">Compliance</p>
                <p className="text-sm font-medium text-db-dark mt-1">Compliance Mapping</p>
                <p className="text-xs text-gray-500 mt-1">Map the program to SOC 2, ISO 27001, or industry-specific frameworks buyers expect. Board-ready reporting.</p>
              </div>
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-orange">Exit Package</p>
                <p className="text-sm font-medium text-db-dark mt-1">Buyer DD Package</p>
                <p className="text-xs text-gray-500 mt-1">Comprehensive security documentation package designed for buyer due diligence — policies, test results, maturity evidence.</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">How We Measure Value</p>
            <div className="mt-1 flex flex-wrap gap-2">
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">Maturity score at or above buyer expectations</span>
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">Compliance mapping complete (SOC 2 / ISO 27001)</span>
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">Buyer DD completed without cyber-related findings</span>
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">Board receives quarterly security posture reports</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scale narrative */}
      <SectionHeading>The Constant: Enterprise Security Without Enterprise Cost</SectionHeading>
      <div className="rounded-lg border-l-4 border-db-dark bg-gray-50 p-5">
        <p className="text-sm text-gray-700 leading-relaxed">
          Portfolio companies are mid-market operating companies, not financial institutions. They
          don&apos;t have — and shouldn&apos;t build — a full internal security team. The underlying
          value proposition at every phase is: <strong>enterprise-grade security without enterprise
          cost</strong>. At every touchpoint, reinforce this: &ldquo;You&apos;re getting the security
          program of a company 10x your size, delivered as a service, at a fraction of the cost of
          building it yourself — and it scales as you grow.&rdquo;
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
              <td className="px-4 py-2 text-gray-600">Baseline &amp; Comply</td>
              <td className="px-4 py-2 text-gray-600 italic">&ldquo;Our PE sponsor says we need a security program&rdquo;</td>
              <td className="px-4 py-2 text-gray-600">Rapid assessment, gap analysis, critical remediation</td>
              <td className="px-4 py-2 text-gray-600">&ldquo;Let&apos;s build the program behind the assessment&rdquo;</td>
            </tr>
            <tr className="bg-gray-50/50">
              <td className="px-4 py-2 font-medium text-db-dark">2. Foundation</td>
              <td className="px-4 py-2 text-gray-600">Policies &amp; People</td>
              <td className="px-4 py-2 text-gray-600 italic">&ldquo;Customers and insurers want documentation&rdquo;</td>
              <td className="px-4 py-2 text-gray-600">Policy development, training, IR plan, vendor risk</td>
              <td className="px-4 py-2 text-gray-600">&ldquo;Now let&apos;s test if it actually works&rdquo;</td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-medium text-db-dark">3. Strengthen</td>
              <td className="px-4 py-2 text-gray-600">Prove Resilience</td>
              <td className="px-4 py-2 text-gray-600 italic">&ldquo;Can we prove we&apos;re actually protected?&rdquo;</td>
              <td className="px-4 py-2 text-gray-600">Pen testing, vuln management, tabletops, IR retainer</td>
              <td className="px-4 py-2 text-gray-600">&ldquo;Exit is coming — let&apos;s make security a valuation asset&rdquo;</td>
            </tr>
            <tr className="bg-gray-50/50">
              <td className="px-4 py-2 font-medium text-db-dark">4. Differentiate</td>
              <td className="px-4 py-2 text-gray-600">Exit-Ready Security</td>
              <td className="px-4 py-2 text-gray-600 italic">&ldquo;Buyers will look at our cyber program&rdquo;</td>
              <td className="px-4 py-2 text-gray-600">Maturity scoring, compliance mapping, buyer DD package</td>
              <td className="px-4 py-2 text-gray-600">Successful exit or continued partnership</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Key principles */}
      <SectionHeading>Key Principles</SectionHeading>
      <div className="grid grid-cols-2 gap-4">
        <CharacteristicCard
          title="Meet Them Where They Are"
          description="Most portcos start from near-zero maturity. Don't overwhelm with enterprise frameworks. Start with what matters most and build systematically."
        />
        <CharacteristicCard
          title="Serve Two Masters Well"
          description="The portco is your day-to-day client, but the PE sponsor mandated and funds the engagement. Report value to both audiences with different framings."
        />
        <CharacteristicCard
          title="Plan Against the Hold Period"
          description="Always know where you are in the PE hold period. An exit in 18 months means Phase 4 is urgent. A fresh acquisition means time to build properly."
        />
        <CharacteristicCard
          title="Make Security a Growth Enabler"
          description="For mid-market portcos, security unlocks growth: winning enterprise customers, satisfying insurers, and commanding higher valuations at exit."
        />
      </div>

      <DrawbridgeAngle>
        <p>
          This journey has two layers by design. The <strong>client-facing outcome phases</strong> are
          what you share with the portco and their PE sponsor — a clear path from baseline compliance
          to exit-ready security. The <strong>internal lifecycle</strong> is how we operate — ensuring
          clean handoffs, clear ownership, and disciplined value communication.
        </p>
        <p className="mt-2">
          Drawbridge understands the PE ecosystem from both sides: we work with <strong>GP management
          companies</strong> on LP readiness and with their <strong>portfolio companies</strong> on
          rapid uplift and exit preparation. That dual vantage point — backed by 1,000+ fund
          relationships and 2,000+ ODD reviews — means the RM who understands the sponsor&apos;s
          investment thesis becomes the advisor no other vendor can replicate.
          <strong> Raise Your Guard. Raise Your Bar.</strong>
        </p>
        <p>
          The portfolio company journey is distinct from the PE management company journey in critical
          ways: <strong>the client often starts from near-zero maturity</strong>, the engagement is
          typically <strong>sponsor-mandated</strong> (not self-initiated), and <strong>Phase 4 is
          about exit readiness</strong> — making the company attractive for sale or IPO. The cross-cutting
          theme shifts from &ldquo;Scale Without Headcount&rdquo; to <strong>&ldquo;Enterprise Security
          Without Enterprise Cost&rdquo;</strong> — because these are mid-market operating companies,
          not financial firms. The RM who understands both the portco&apos;s operational reality and the
          sponsor&apos;s investment thesis becomes indispensable.
        </p>
      </DrawbridgeAngle>

    </>
  );
}
