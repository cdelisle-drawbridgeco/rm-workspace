'use client';

import { HeroSection, SectionHeading, CharacteristicCard, SubSection, DrawbridgeAngle, LastUpdated } from '../../components/shared-ui';

export default function JourneyHedgeFundRevised() {
  return (
    <>
      <HeroSection
        icon="🧭"
        title="Customer Value Journey — Hedge Fund (Revised)"
        subtitle="A value-first framework built around the client's business evolution. Not linear — clients enter where their need is most urgent and expand from there."
      />
      <LastUpdated date="March 9, 2026 at 3:00 PM" />

      {/* The core insight */}
      <div className="mt-6 rounded-lg bg-db-dark p-6">
        <p className="text-sm font-semibold text-db-aqua uppercase tracking-wide mb-3">
          The Fundamental Shift
        </p>
        <div className="grid grid-cols-2 gap-6 text-sm">
          <div className="rounded-lg border border-red-400/30 bg-red-950/30 p-4">
            <p className="font-medium text-red-300 mb-2">Service Blueprint (What We Used to Map)</p>
            <ul className="text-gray-400 space-y-1.5 text-xs">
              <li>&bull; Implementation phases and go-live milestones</li>
              <li>&bull; Adoption thresholds and health scores</li>
              <li>&bull; QBR cadences and renewal timelines</li>
              <li>&bull; Task completion and deliverable checklists</li>
            </ul>
            <p className="text-red-300/80 text-xs mt-3 italic">
              This is how we operate. It&apos;s necessary — but it&apos;s our map, not theirs.
            </p>
          </div>
          <div className="rounded-lg border border-green-400/30 bg-green-950/30 p-4">
            <p className="font-medium text-green-300 mb-2">Value Journey (What We Map Now)</p>
            <ul className="text-gray-300 space-y-1.5 text-xs">
              <li>&bull; Where is the client in their business evolution?</li>
              <li>&bull; What business outcome are they trying to achieve right now?</li>
              <li>&bull; Is the behavior change actually happening inside their firm?</li>
              <li>&bull; Does the executive sponsor still have momentum?</li>
            </ul>
            <p className="text-green-300/80 text-xs mt-3 italic">
              This is the client&apos;s reality. It&apos;s what drives renewal, expansion, and trust.
            </p>
          </div>
        </div>
        <div className="mt-4 rounded-md bg-white/5 border border-white/10 p-3">
          <p className="text-xs text-gray-300">
            <strong className="text-white">The danger of conflation:</strong> You can have a &ldquo;healthy&rdquo;
            account by every internal metric — platform adopted, policies delivered, QBRs completed — that
            churns at renewal because the business never actually changed. Nobody buys software to use software.
            They buy it to get a specific return.
          </p>
        </div>
      </div>

      {/* ── THEMES ── */}
      <SectionHeading>Three Themes That Run Through Every Conversation</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed mb-4">
        These aren&apos;t stages — they&apos;re persistent truths that should surface in every client
        interaction, regardless of where the client is in their journey.
      </p>

      <div className="grid grid-cols-3 gap-4">
        {/* Theme 1: Independence */}
        <div className="rounded-lg border-2 border-purple-300 bg-purple-50 p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-purple-600 text-white text-xs font-bold">1</span>
            <p className="text-sm font-bold text-purple-900">Independence from IT</p>
          </div>
          <p className="text-xs text-purple-800 leading-relaxed">
            <strong>Your cybersecurity assessment must be independent of your IT provider.</strong> The
            SEC expects an objective review of your security program — not a self-assessment by the team
            that built it. An MSP or IT provider auditing their own work is like an accountant auditing
            their own books. Drawbridge is 100% independent: we don&apos;t sell IT services, manage
            infrastructure, or have conflicts of interest. This independence is what makes our
            assessment credible to regulators, allocators, and boards.
          </p>
          <div className="mt-3 rounded bg-purple-100 p-2">
            <p className="text-[10px] font-semibold text-purple-700 uppercase">When to Surface This</p>
            <p className="text-xs text-purple-800 mt-0.5">
              When the client says &ldquo;our IT team handles security&rdquo; or &ldquo;our MSP does that for us.&rdquo;
              The question is: who audits the auditor?
            </p>
          </div>
        </div>

        {/* Theme 2: Scale Without Headcount */}
        <div className="rounded-lg border-2 border-blue-300 bg-blue-50 p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-bold">2</span>
            <p className="text-sm font-bold text-blue-900">Scale Without Headcount</p>
          </div>
          <p className="text-xs text-blue-800 leading-relaxed">
            At every point in their journey, the client is getting enterprise-grade cybersecurity
            without hiring a CISO or building an internal team. As their firm grows from $500M to $5B AUM,
            the program scales with them. The alternative is a $300K+ CISO, a team of analysts, and
            the management overhead to run it all. Most hedge funds have 15–50 employees — they
            shouldn&apos;t need to become cybersecurity companies to run a credible program.
          </p>
          <div className="mt-3 rounded bg-blue-100 p-2">
            <p className="text-[10px] font-semibold text-blue-700 uppercase">When to Surface This</p>
            <p className="text-xs text-blue-800 mt-0.5">
              At renewal, when scope expands, or when a client asks about hiring internally.
              Frame the comparison: cost of Drawbridge vs. cost of building in-house.
            </p>
          </div>
        </div>

        {/* Theme 3: Outcome > Adoption */}
        <div className="rounded-lg border-2 border-emerald-300 bg-emerald-50 p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-emerald-600 text-white text-xs font-bold">3</span>
            <p className="text-sm font-bold text-emerald-900">Outcome Over Adoption</p>
          </div>
          <p className="text-xs text-emerald-800 leading-relaxed">
            Value is not a feature getting used — it&apos;s a business outcome getting realized. A client
            who logs into the platform daily but whose employees still click phishing links has adopted
            the tool but hasn&apos;t realized the value. We measure success by what changed in their
            business: DDQ turnaround time, allocator satisfaction, exam readiness, risk posture improvement.
            Not logins, not tickets closed.
          </p>
          <div className="mt-3 rounded bg-emerald-100 p-2">
            <p className="text-[10px] font-semibold text-emerald-700 uppercase">When to Surface This</p>
            <p className="text-xs text-emerald-800 mt-0.5">
              In every QBR and SVR. Lead with &ldquo;what changed in your business&rdquo; — not
              &ldquo;here&apos;s what we delivered.&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* ── THE OUTCOMES ── */}
      <SectionHeading>Five Business Outcomes — Enter Where They Need You</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed mb-2">
        These are not sequential steps. A client might enter at <strong>Capital Confidence</strong> because
        DDQ season is killing them, or jump straight to <strong>Validated Protection</strong> after a peer
        firm breach. Some clients care most about <strong>Regulatory Readiness</strong> from day one.
        Start where the pain is — then expand to adjacent outcomes as trust grows.
      </p>
      <p className="text-xs text-gray-500 italic mb-6">
        Ask: &ldquo;What is keeping your COO/CCO up at night right now?&rdquo; The answer tells you where to start.
      </p>

      {/* Entry point diagnostic */}
      <div className="rounded-lg bg-gray-50 border border-gray-200 p-5 mb-8">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Where Does Your Client Enter?</p>
        <div className="grid grid-cols-5 gap-2">
          {[
            { label: 'Capital Confidence', trigger: '"DDQ season is killing us"', color: 'border-db-aqua bg-db-aqua/10' },
            { label: 'Regulatory Readiness', trigger: '"What if the SEC shows up?"', color: 'border-db-aqua-dark bg-db-aqua-dark/10' },
            { label: 'Validated Protection', trigger: '"Are we actually protected?"', color: 'border-db-orange/60 bg-orange-50' },
            { label: 'Operational Resilience', trigger: '"We need this to just run"', color: 'border-db-orange/80 bg-orange-50' },
            { label: 'Competitive Advantage', trigger: '"How do we use this to win?"', color: 'border-db-orange bg-orange-50' },
          ].map(item => (
            <div key={item.label} className={`rounded-md border-2 ${item.color} p-3 text-center`}>
              <p className="text-xs font-bold text-db-dark">{item.label}</p>
              <p className="text-[10px] text-gray-500 mt-1 italic">{item.trigger}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-400 mt-3 text-center">
          Most hedge funds enter at Capital Confidence or Regulatory Readiness — but not all. Meet them where they are.
        </p>
      </div>

      {/* ── Outcome A: Capital Confidence ── */}
      <div className="rounded-xl border-2 border-db-aqua overflow-hidden">
        <div className="bg-db-aqua/10 px-6 py-4 border-b border-db-aqua/20 flex items-center gap-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-db-aqua text-white text-lg font-bold">A</span>
          <div>
            <h3 className="text-lg font-bold font-heading text-db-dark">Capital Confidence</h3>
            <p className="text-sm text-gray-500">&ldquo;We need allocators to trust us — and right now, we can&apos;t answer their questions.&rdquo;</p>
          </div>
        </div>
        <div className="px-6 py-5 space-y-5">
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Where the Client Is</p>
            <p className="mt-1 text-sm text-gray-700">
              The firm is raising capital or going through LP due diligence. An allocator asked a question
              they couldn&apos;t answer. DDQ turnaround is slow and inconsistent. A consultant flagged
              gaps. The fundraise is stalling — and the COO or CCO is feeling the pressure personally.
              They don&apos;t need a comprehensive security program yet — they need credibility, fast.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">What&apos;s Changing in Their Business</p>
            <div className="mt-2 grid grid-cols-3 gap-3">
              <div className="rounded-md bg-db-aqua/5 border border-db-aqua/20 p-3">
                <p className="text-xs font-semibold text-db-aqua-dark">Allocator Conversations</p>
                <p className="text-xs text-gray-600 mt-1">
                  The firm moves from dreading DDQ season to handling it systematically. Responses go
                  out confidently and consistently. Follow-up questions stop coming.
                </p>
              </div>
              <div className="rounded-md bg-db-aqua/5 border border-db-aqua/20 p-3">
                <p className="text-xs font-semibold text-db-aqua-dark">Fundraise Momentum</p>
                <p className="text-xs text-gray-600 mt-1">
                  Cybersecurity stops being a blocker in the capital-raising process. ODD reviews pass
                  cleanly. The operational due diligence story holds together.
                </p>
              </div>
              <div className="rounded-md bg-db-aqua/5 border border-db-aqua/20 p-3">
                <p className="text-xs font-semibold text-db-aqua-dark">Leadership Confidence</p>
                <p className="text-xs text-gray-600 mt-1">
                  The COO/CCO can walk into any allocator meeting and articulate the firm&apos;s security
                  posture clearly. The anxiety is gone.
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">How the Client Knows It&apos;s Working</p>
            <div className="mt-1 flex flex-wrap gap-2">
              <span className="rounded-full bg-green-50 border border-green-200 px-3 py-1 text-xs text-green-800">DDQ turnaround: weeks → days</span>
              <span className="rounded-full bg-green-50 border border-green-200 px-3 py-1 text-xs text-green-800">ODD reviews pass without findings</span>
              <span className="rounded-full bg-green-50 border border-green-200 px-3 py-1 text-xs text-green-800">Zero follow-up requests from allocators</span>
              <span className="rounded-full bg-green-50 border border-green-200 px-3 py-1 text-xs text-green-800">COO stops losing sleep over allocator calls</span>
            </div>
          </div>

          {/* ROI */}
          <div className="rounded-md bg-blue-50 border border-blue-200 p-3">
            <p className="text-xs font-semibold text-blue-700 uppercase">ROI Consideration</p>
            <p className="text-sm text-blue-900 mt-1">
              <strong>Capital at risk vs. cost of program.</strong> If a $2B fund loses an allocation because
              they failed ODD, the management fee impact alone ($20M+ annually at 1%) dwarfs the cost of
              a Drawbridge engagement. Frame the ROI around capital protected and retained, not just cost
              of cybersecurity. <em>See the ROI &amp; Value Measurement training for how to quantify this.</em>
            </p>
          </div>

          <div className="rounded-md bg-amber-50 border border-amber-200 p-3">
            <p className="text-xs font-semibold text-amber-700">NATURAL EXPANSION → REGULATORY READINESS OR VALIDATED PROTECTION</p>
            <p className="text-sm text-amber-900 mt-1">
              Once DDQs are handled, the client naturally asks: &ldquo;The responses are strong — but is the
              underlying program exam-ready?&rdquo; or &ldquo;What if someone actually tests us?&rdquo; Don&apos;t
              pitch — listen for which question comes first. That tells you where to go next.
            </p>
          </div>
        </div>
      </div>

      {/* ── Outcome B: Regulatory Readiness ── */}
      <div className="mt-6 rounded-xl border-2 border-db-aqua-dark overflow-hidden">
        <div className="bg-db-aqua-dark/10 px-6 py-4 border-b border-db-aqua-dark/20 flex items-center gap-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-db-aqua-dark text-white text-lg font-bold">B</span>
          <div>
            <h3 className="text-lg font-bold font-heading text-db-dark">Regulatory Readiness</h3>
            <p className="text-sm text-gray-500">&ldquo;If the SEC called today, could we walk them through our program?&rdquo;</p>
          </div>
        </div>
        <div className="px-6 py-5 space-y-5">
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Where the Client Is</p>
            <p className="mt-1 text-sm text-gray-700">
              The firm knows they need a documented cybersecurity program — not just for allocators, but
              for regulators. Reg S-P amendments require a documented incident response program. Policies
              need to be current, specific, and board-approved. Some clients enter here directly (especially
              after an SEC sweep announcement); others arrive here after solving their DDQ problem first.
              This is where real organizational behavior change begins.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">What&apos;s Changing in Their Business</p>
            <div className="mt-2 grid grid-cols-3 gap-3">
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-aqua-dark">Organizational Behavior</p>
                <p className="text-xs text-gray-600 mt-1">
                  Employees go through security training. People change how they handle data and report
                  concerns. The board reviews and approves cybersecurity policies for the first time.
                </p>
              </div>
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-aqua-dark">Governance Structure</p>
                <p className="text-xs text-gray-600 mt-1">
                  Roles and responsibilities for incident response are assigned. Someone owns this now.
                  IR plans have named individuals who know their role, not just job titles on paper.
                </p>
              </div>
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-aqua-dark">Regulatory Posture</p>
                <p className="text-xs text-gray-600 mt-1">
                  The firm builds documentation that would survive an SEC exam. Not because one is
                  imminent, but because they want to be ready when it comes.
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">How the Client Knows It&apos;s Working</p>
            <div className="mt-1 flex flex-wrap gap-2">
              <span className="rounded-full bg-green-50 border border-green-200 px-3 py-1 text-xs text-green-800">All policies current and board-approved</span>
              <span className="rounded-full bg-green-50 border border-green-200 px-3 py-1 text-xs text-green-800">IR plan has named owners who know their role</span>
              <span className="rounded-full bg-green-50 border border-green-200 px-3 py-1 text-xs text-green-800">90%+ training completion without chasing</span>
              <span className="rounded-full bg-green-50 border border-green-200 px-3 py-1 text-xs text-green-800">CCO can walk a regulator through the program</span>
            </div>
          </div>

          <div className="rounded-md bg-blue-50 border border-blue-200 p-3">
            <p className="text-xs font-semibold text-blue-700 uppercase">ROI Consideration</p>
            <p className="text-sm text-blue-900 mt-1">
              <strong>Cost of non-compliance vs. cost of program.</strong> SEC enforcement actions
              average $1.5M+ in fines, plus reputational damage that impacts fundraising for years.
              A single deficiency finding can trigger enhanced examination requirements. The program
              cost is a fraction of one enforcement action — and it protects the firm&apos;s ability to
              operate. <em>See the ROI &amp; Value Measurement training for detailed frameworks.</em>
            </p>
          </div>

          <div className="rounded-md bg-amber-50 border border-amber-200 p-3">
            <p className="text-xs font-semibold text-amber-700">NATURAL EXPANSION → VALIDATED PROTECTION OR CAPITAL CONFIDENCE</p>
            <p className="text-sm text-amber-900 mt-1">
              The client has policies on paper. Then they ask: &ldquo;But does any of this actually work if
              we get hit?&rdquo; — that points to Validated Protection. Or they realize &ldquo;our allocators
              should know about this&rdquo; — that points back to Capital Confidence with a stronger story.
            </p>
          </div>
        </div>
      </div>

      {/* ── Outcome C: Validated Protection ── */}
      <div className="mt-6 rounded-xl border-2 border-db-orange/60 overflow-hidden">
        <div className="bg-orange-50 px-6 py-4 border-b border-db-orange/20 flex items-center gap-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-db-orange/80 text-white text-lg font-bold">C</span>
          <div>
            <h3 className="text-lg font-bold font-heading text-db-dark">Validated Protection</h3>
            <p className="text-sm text-gray-500">&ldquo;We have a program on paper — but does it actually work?&rdquo;</p>
          </div>
        </div>
        <div className="px-6 py-5 space-y-5">
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Where the Client Is</p>
            <p className="mt-1 text-sm text-gray-700">
              The firm has moved beyond documentation. A peer firm got breached. An employee clicked a
              phishing link. The question shifts from &ldquo;are we compliant?&rdquo; to &ldquo;are we actually
              protected?&rdquo; Some clients land here first — especially after a security incident or near-miss.
              This is where the program gets stress-tested: pen tests reveal real vulnerabilities, tabletop
              exercises reveal whether the leadership team knows what to do in a crisis.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">What&apos;s Changing in Their Business</p>
            <div className="mt-2 grid grid-cols-3 gap-3">
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-orange">Security Culture</p>
                <p className="text-xs text-gray-600 mt-1">
                  Phishing click rates drop. Employees report suspicious activity without prompting.
                  Security becomes part of how the firm operates, not a top-down mandate.
                </p>
              </div>
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-orange">Risk Visibility</p>
                <p className="text-xs text-gray-600 mt-1">
                  Leadership has real-time visibility into vulnerabilities. They&apos;ve seen findings
                  remediated and can track improvement over time — with data, not guesswork.
                </p>
              </div>
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-orange">Crisis Readiness</p>
                <p className="text-xs text-gray-600 mt-1">
                  The leadership team has rehearsed an incident. They know who calls whom, what gets
                  communicated to LPs, and how to contain damage. The plan is muscle memory, not paper.
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">How the Client Knows It&apos;s Working</p>
            <div className="mt-1 flex flex-wrap gap-2">
              <span className="rounded-full bg-green-50 border border-green-200 px-3 py-1 text-xs text-green-800">Risk score improving quarter over quarter</span>
              <span className="rounded-full bg-green-50 border border-green-200 px-3 py-1 text-xs text-green-800">Pen test findings shrinking, not growing</span>
              <span className="rounded-full bg-green-50 border border-green-200 px-3 py-1 text-xs text-green-800">Leadership runs the IR playbook without prompting</span>
              <span className="rounded-full bg-green-50 border border-green-200 px-3 py-1 text-xs text-green-800">Phishing click rates below industry average</span>
            </div>
          </div>

          <div className="rounded-md bg-blue-50 border border-blue-200 p-3">
            <p className="text-xs font-semibold text-blue-700 uppercase">ROI Consideration</p>
            <p className="text-sm text-blue-900 mt-1">
              <strong>Cost of a breach vs. cost of testing.</strong> The average cost of a data breach
              for financial services firms exceeds $5M (IBM 2024). A pen test that finds and remediates a
              critical vulnerability before an attacker does has infinite ROI. Tabletop exercises that
              reduce incident response time from days to hours save multiples of their cost in a real event.
              <em> See the ROI &amp; Value Measurement training for breach cost modeling.</em>
            </p>
          </div>

          <div className="rounded-md bg-amber-50 border border-amber-200 p-3">
            <p className="text-xs font-semibold text-amber-700">NATURAL EXPANSION → OPERATIONAL RESILIENCE OR COMPETITIVE ADVANTAGE</p>
            <p className="text-sm text-amber-900 mt-1">
              The client realizes they&apos;re ahead of most peers. They either want the program to
              &ldquo;just run&rdquo; without constant attention (→ Operational Resilience) or they want to
              use it to win capital (→ Competitive Advantage). Listen for which direction they lean.
            </p>
          </div>
        </div>
      </div>

      {/* ── Outcome D: Operational Resilience ── */}
      <div className="mt-6 rounded-xl border-2 border-db-orange/80 overflow-hidden">
        <div className="bg-orange-50 px-6 py-4 border-b border-db-orange/20 flex items-center gap-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-db-orange/80 text-white text-lg font-bold">D</span>
          <div>
            <h3 className="text-lg font-bold font-heading text-db-dark">Operational Resilience</h3>
            <p className="text-sm text-gray-500">&ldquo;Security should be woven into how we operate — not a separate initiative.&rdquo;</p>
          </div>
        </div>
        <div className="px-6 py-5 space-y-5">
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Where the Client Is</p>
            <p className="mt-1 text-sm text-gray-700">
              Cybersecurity is no longer a project — it&apos;s an operating discipline. The firm wants
              monitoring in place, someone to call at 2am, and a vendor risk program that extends protection
              to their supply chain. They want the program to evolve with the threat landscape without
              requiring constant attention from leadership. The board gets quarterly briefings as normal
              governance. New hires go through security onboarding automatically.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">What&apos;s Changing in Their Business</p>
            <div className="mt-2 grid grid-cols-3 gap-3">
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-orange">Operational Integration</p>
                <p className="text-xs text-gray-600 mt-1">
                  Security is embedded in vendor onboarding, employee lifecycle, and technology decisions.
                  It&apos;s not a workstream — it&apos;s how the firm operates.
                </p>
              </div>
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-orange">Continuous Adaptation</p>
                <p className="text-xs text-gray-600 mt-1">
                  New regulations, new attack vectors, new technologies — the firm adapts without
                  scrambling. The program evolves proactively, not reactively.
                </p>
              </div>
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-orange">Extended Perimeter</p>
                <p className="text-xs text-gray-600 mt-1">
                  Third-party vendors are assessed and monitored. The firm&apos;s security extends
                  beyond its own walls — a top regulatory and allocator priority.
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">How the Client Knows It&apos;s Working</p>
            <div className="mt-1 flex flex-wrap gap-2">
              <span className="rounded-full bg-green-50 border border-green-200 px-3 py-1 text-xs text-green-800">Board receives security updates as normal governance</span>
              <span className="rounded-full bg-green-50 border border-green-200 px-3 py-1 text-xs text-green-800">Vendor risk program covers all critical third parties</span>
              <span className="rounded-full bg-green-50 border border-green-200 px-3 py-1 text-xs text-green-800">New threats addressed proactively</span>
              <span className="rounded-full bg-green-50 border border-green-200 px-3 py-1 text-xs text-green-800">No internal headcount growth despite program maturity</span>
            </div>
          </div>

          <div className="rounded-md bg-blue-50 border border-blue-200 p-3">
            <p className="text-xs font-semibold text-blue-700 uppercase">ROI Consideration</p>
            <p className="text-sm text-blue-900 mt-1">
              <strong>Outsourced program vs. in-house build.</strong> Total cost of an in-house security
              function (CISO + analyst + tools + management time) runs $500K–$1M+ annually. Drawbridge
              delivers comparable capability at a fraction of the cost — and scales without linear
              headcount growth. At renewal, this is the core value comparison.
              <em> See the ROI &amp; Value Measurement training for the build-vs-buy calculator.</em>
            </p>
          </div>

          <div className="rounded-md bg-amber-50 border border-amber-200 p-3">
            <p className="text-xs font-semibold text-amber-700">NATURAL EXPANSION → COMPETITIVE ADVANTAGE</p>
            <p className="text-sm text-amber-900 mt-1">
              The client starts treating their security program as an asset. They want to know:
              &ldquo;How do we compare to other firms our size?&rdquo; and &ldquo;Can we use this in our
              investor materials?&rdquo; The shift from defense to leverage is the signal.
            </p>
          </div>
        </div>
      </div>

      {/* ── Outcome E: Competitive Advantage ── */}
      <div className="mt-6 rounded-xl border-2 border-db-orange overflow-hidden">
        <div className="bg-orange-50 px-6 py-4 border-b border-db-orange/20 flex items-center gap-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-db-orange text-white text-lg font-bold">E</span>
          <div>
            <h3 className="text-lg font-bold font-heading text-db-dark">Competitive Advantage</h3>
            <p className="text-sm text-gray-500">&ldquo;Our security program wins us capital. It&apos;s a business differentiator.&rdquo;</p>
          </div>
        </div>
        <div className="px-6 py-5 space-y-5">
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Where the Client Is</p>
            <p className="mt-1 text-sm text-gray-700">
              The firm has a mature, tested, continuously improving security program. The question is no
              longer &ldquo;are we protected?&rdquo; but &ldquo;how do we use this to win?&rdquo; Allocators
              compare managers on operational resilience. The firm with the best story wins the allocation.
              Cybersecurity has transformed from cost center to revenue driver.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">What&apos;s Changing in Their Business</p>
            <div className="mt-2 grid grid-cols-3 gap-3">
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-orange">Capital Narrative</p>
                <p className="text-xs text-gray-600 mt-1">
                  The security program is part of the fundraise pitch. LP materials include Drawbridge
                  Cyber Score data. The firm proactively tells its security story.
                </p>
              </div>
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-orange">Peer Leadership</p>
                <p className="text-xs text-gray-600 mt-1">
                  Top-quartile benchmarking against 1,200+ peers. The firm shows allocators exactly where
                  they stand — with data, not anecdotes.
                </p>
              </div>
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-orange">Strategic Identity</p>
                <p className="text-xs text-gray-600 mt-1">
                  Leadership treats operational resilience as a differentiator. Cybersecurity is part of
                  how they talk about themselves to the market.
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">How the Client Knows It&apos;s Working</p>
            <div className="mt-1 flex flex-wrap gap-2">
              <span className="rounded-full bg-green-50 border border-green-200 px-3 py-1 text-xs text-green-800">LP feedback cites security program as a strength</span>
              <span className="rounded-full bg-green-50 border border-green-200 px-3 py-1 text-xs text-green-800">Top-quartile peer benchmarking position</span>
              <span className="rounded-full bg-green-50 border border-green-200 px-3 py-1 text-xs text-green-800">ODD completes faster because the story is clear</span>
              <span className="rounded-full bg-green-50 border border-green-200 px-3 py-1 text-xs text-green-800">Security program cited in successful fundraise materials</span>
            </div>
          </div>

          <div className="rounded-md bg-blue-50 border border-blue-200 p-3">
            <p className="text-xs font-semibold text-blue-700 uppercase">ROI Consideration</p>
            <p className="text-sm text-blue-900 mt-1">
              <strong>Security as revenue driver.</strong> When a top-quartile Cyber Score helps win a
              $200M allocation, the management fee impact ($2M+ annually) makes the entire Drawbridge
              engagement a rounding error. This is the most powerful ROI story: cybersecurity isn&apos;t
              a cost — it&apos;s a capital-raising accelerator.
              <em> See the ROI &amp; Value Measurement training for allocation impact modeling.</em>
            </p>
          </div>
        </div>
      </div>

      {/* ── What this means for the RM ── */}
      <SectionHeading>What This Means for the RM</SectionHeading>

      <div className="rounded-lg border border-gray-200 overflow-hidden">
        <div className="bg-gray-50 px-5 py-3">
          <p className="text-sm font-semibold text-db-dark">Reframe Your Conversations</p>
        </div>
        <div className="px-5 py-4">
          <div className="grid grid-cols-2 gap-6 text-sm">
            <div>
              <p className="text-xs font-semibold text-red-500 uppercase mb-2">Service Blueprint Questions</p>
              <ul className="text-gray-600 space-y-2 text-xs">
                <li>&bull; &ldquo;Have we completed the assessment?&rdquo;</li>
                <li>&bull; &ldquo;Did they adopt the platform?&rdquo;</li>
                <li>&bull; &ldquo;Are we on track for the QBR?&rdquo;</li>
                <li>&bull; &ldquo;What&apos;s their health score?&rdquo;</li>
                <li>&bull; &ldquo;When is the renewal date?&rdquo;</li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold text-green-600 uppercase mb-2">Value Journey Questions</p>
              <ul className="text-gray-600 space-y-2 text-xs">
                <li>&bull; &ldquo;Has their behavior around DDQs actually changed?&rdquo;</li>
                <li>&bull; &ldquo;Does the COO feel less exposed than 6 months ago?&rdquo;</li>
                <li>&bull; &ldquo;Is the executive sponsor still championing this internally?&rdquo;</li>
                <li>&bull; &ldquo;Are they using the program to tell a story to allocators?&rdquo;</li>
                <li>&bull; &ldquo;What business problem is emerging that we can help with next?&rdquo;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Quick reference table */}
      <SectionHeading>Quick Reference</SectionHeading>
      <div className="rounded-md border border-gray-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-3 py-2 text-left font-medium text-gray-600">Outcome</th>
              <th className="px-3 py-2 text-left font-medium text-gray-600">Client Says...</th>
              <th className="px-3 py-2 text-left font-medium text-gray-600">Business Change</th>
              <th className="px-3 py-2 text-left font-medium text-gray-600">ROI Frame</th>
              <th className="px-3 py-2 text-left font-medium text-gray-600">Expands To...</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            <tr>
              <td className="px-3 py-2 font-medium text-db-dark">A. Capital Confidence</td>
              <td className="px-3 py-2 text-gray-600 text-xs italic">&ldquo;DDQ season is killing us&rdquo;</td>
              <td className="px-3 py-2 text-gray-600 text-xs">Allocator conversations transform</td>
              <td className="px-3 py-2 text-gray-600 text-xs">Capital protected / retained</td>
              <td className="px-3 py-2 text-gray-600 text-xs">B or C</td>
            </tr>
            <tr className="bg-gray-50/50">
              <td className="px-3 py-2 font-medium text-db-dark">B. Regulatory Readiness</td>
              <td className="px-3 py-2 text-gray-600 text-xs italic">&ldquo;What if the SEC shows up?&rdquo;</td>
              <td className="px-3 py-2 text-gray-600 text-xs">Behavior + governance change</td>
              <td className="px-3 py-2 text-gray-600 text-xs">Enforcement cost avoided</td>
              <td className="px-3 py-2 text-gray-600 text-xs">C or A</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-medium text-db-dark">C. Validated Protection</td>
              <td className="px-3 py-2 text-gray-600 text-xs italic">&ldquo;Are we actually protected?&rdquo;</td>
              <td className="px-3 py-2 text-gray-600 text-xs">Culture shift + crisis readiness</td>
              <td className="px-3 py-2 text-gray-600 text-xs">Breach cost avoided</td>
              <td className="px-3 py-2 text-gray-600 text-xs">D or E</td>
            </tr>
            <tr className="bg-gray-50/50">
              <td className="px-3 py-2 font-medium text-db-dark">D. Operational Resilience</td>
              <td className="px-3 py-2 text-gray-600 text-xs italic">&ldquo;We need this to just run&rdquo;</td>
              <td className="px-3 py-2 text-gray-600 text-xs">Security as operating discipline</td>
              <td className="px-3 py-2 text-gray-600 text-xs">Build vs. buy</td>
              <td className="px-3 py-2 text-gray-600 text-xs">E</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-medium text-db-dark">E. Competitive Advantage</td>
              <td className="px-3 py-2 text-gray-600 text-xs italic">&ldquo;How do we use this to win?&rdquo;</td>
              <td className="px-3 py-2 text-gray-600 text-xs">Security drives capital decisions</td>
              <td className="px-3 py-2 text-gray-600 text-xs">Capital-raising accelerator</td>
              <td className="px-3 py-2 text-gray-600 text-xs">Continuous</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Key principles */}
      <SectionHeading>Key Principles</SectionHeading>
      <div className="grid grid-cols-2 gap-4">
        <CharacteristicCard
          title="Start Where They Hurt"
          description="Don't assume a sequence. Ask what's keeping leadership up at night. A firm dealing with a peer breach doesn't need DDQ help — they need Validated Protection. Meet the client where they are."
        />
        <CharacteristicCard
          title="Independence Is the Foundation"
          description="Every outcome is built on independent, conflict-free assessment. An MSP auditing its own work isn't an audit — it's a self-review. Drawbridge's independence is what makes the program credible to regulators, allocators, and boards."
        />
        <CharacteristicCard
          title="Outcomes Earn Adjacent Outcomes"
          description="Each outcome solved builds trust and reveals the next need. But the client chooses the path — they might go A→B→C or A→C→E. Follow their business evolution, don't impose a sequence."
        />
        <CharacteristicCard
          title="ROI Is Always a Business Story"
          description="Never frame ROI as 'cost of Drawbridge vs. nothing.' Frame it as 'cost of Drawbridge vs. the alternative' — whether that's capital lost, enforcement fines, breach costs, or building in-house. The ROI & Value Measurement training has the detailed frameworks."
        />
      </div>

      <DrawbridgeAngle>
        <p>
          This journey is deliberately non-linear. Clients don&apos;t follow a prescribed path — they
          follow their business priorities. The RM&apos;s job is to understand which outcome matters
          most <em>right now</em>, deliver it, and listen for the signals that reveal what&apos;s next.
        </p>
        <p>
          Three themes should surface in every conversation: <strong>independence</strong> (your cyber
          assessment can&apos;t come from the same team that built your IT — the SEC expects it, allocators
          demand it, and it&apos;s why Drawbridge exists), <strong>scale</strong> (enterprise-grade security
          without the enterprise headcount), and <strong>outcomes over adoption</strong> (what changed in
          their business, not what we delivered). Get these right and the renewal conversation becomes
          obvious.
        </p>
      </DrawbridgeAngle>
    </>
  );
}
