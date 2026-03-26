'use client';

import { HeroSection, SectionHeading, CharacteristicCard, SubSection, DrawbridgeAngle, LastUpdated } from '../../components/shared-ui';

export default function JourneyHedgeFundRevised() {
  return (
    <>
      <HeroSection
        icon="🧭"
        title="Customer Value Journey — Hedge Fund"
        subtitle="A value-first playbook for hedge fund clients. Non-linear — enter where the client's need is most urgent and expand as trust grows."
      />
      <LastUpdated date="March 25, 2026 at 3:45 PM" />

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
            SEC expects an objective review — not a self-assessment by the team
            that built it. An MSP auditing their own work is like an accountant auditing
            their own books. Drawbridge is 100% independent: we don&apos;t sell IT services, manage
            infrastructure, or have conflicts of interest.
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
            the program scales with them. Most hedge funds have 15–50 employees — they
            shouldn&apos;t need to become cybersecurity companies to run a credible program.
          </p>
          <div className="mt-3 rounded bg-blue-100 p-2">
            <p className="text-[10px] font-semibold text-blue-700 uppercase">When to Surface This</p>
            <p className="text-xs text-blue-800 mt-0.5">
              At renewal, when scope expands, or when a client asks about hiring internally.
              Frame: cost of Drawbridge vs. cost of building in-house.
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
            business — not logins, not tickets closed.
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

      {/* ── ENTRY POINT DIAGNOSTIC ── */}
      <SectionHeading>Where Does Your Client Enter?</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed mb-2">
        This journey is not sequential. A client might enter because DDQ season is killing them,
        or jump straight to protection testing after a peer firm breach. Some care most about
        the SEC from day one. <strong>Start where the pain is</strong> — then expand to adjacent
        outcomes as trust grows.
      </p>
      <p className="text-xs text-gray-500 italic mb-4">
        Ask: &ldquo;What is keeping your COO/CCO up at night right now?&rdquo; The answer tells you where to start.
      </p>

      <div className="rounded-lg bg-gray-50 border border-gray-200 p-5 mb-8">
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

      {/* ── JOURNEY PLAYBOOKS ── */}
      <SectionHeading>The Playbook — What We Deliver at Each Entry Point</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed mb-6">
        Each section below is a self-contained playbook: the trigger that brings the client in,
        what Drawbridge delivers, how the RM runs the relationship, and the signals that tell you
        where the client is ready to go next.
      </p>

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
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">The Trigger</p>
            <p className="mt-1 text-sm text-gray-700">
              The firm is raising capital or going through LP due diligence. An allocator asked a question
              they couldn&apos;t answer. DDQ turnaround is slow and inconsistent. A consultant flagged
              gaps. They don&apos;t need a comprehensive security program yet — they need credibility, fast.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">What We Deliver</p>
            <div className="mt-2 grid grid-cols-3 gap-3">
              <div className="rounded-md bg-db-aqua/5 border border-db-aqua/20 p-3">
                <p className="text-xs font-semibold text-db-aqua-dark">Week 1–2</p>
                <p className="text-sm font-medium text-db-dark mt-1">Security Assessment</p>
                <p className="text-xs text-gray-500 mt-1">Baseline their current posture. Identify the gaps allocators will find before they find them.</p>
              </div>
              <div className="rounded-md bg-db-aqua/5 border border-db-aqua/20 p-3">
                <p className="text-xs font-semibold text-db-aqua-dark">Week 2–4</p>
                <p className="text-sm font-medium text-db-dark mt-1">Policy & DDQ Foundation</p>
                <p className="text-xs text-gray-500 mt-1">Build core policies and prepare DDQ responses they can send to LPs immediately.</p>
              </div>
              <div className="rounded-md bg-db-aqua/5 border border-db-aqua/20 p-3">
                <p className="text-xs font-semibold text-db-aqua-dark">Ongoing</p>
                <p className="text-sm font-medium text-db-dark mt-1">DDQ & ODD Support</p>
                <p className="text-xs text-gray-500 mt-1">Handle incoming DDQs and support allocator due diligence reviews as they come in.</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">RM Playbook</p>
            <div className="mt-2 rounded-md bg-white border border-gray-200 p-4">
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <p className="font-semibold text-db-dark mb-1">Own the Relationship From Day 1</p>
                  <p className="text-gray-600">
                    Get introduced before the deal closes. Know the COO/CCO by name. Understand
                    the fundraise timeline — when are they in market? When is DDQ season?
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-db-dark mb-1">Measure What They Care About</p>
                  <p className="text-gray-600">
                    Track DDQ turnaround time (before/after). Count ODD reviews that pass clean.
                    Get the COO to tell you whether the anxiety level has changed.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">How the Client Knows It&apos;s Working</p>
            <div className="mt-1 flex flex-wrap gap-2">
              <span className="rounded-full bg-green-50 border border-green-200 px-3 py-1 text-xs text-green-800">DDQ turnaround: weeks &rarr; days</span>
              <span className="rounded-full bg-green-50 border border-green-200 px-3 py-1 text-xs text-green-800">ODD reviews pass without findings</span>
              <span className="rounded-full bg-green-50 border border-green-200 px-3 py-1 text-xs text-green-800">Zero follow-up requests from allocators</span>
              <span className="rounded-full bg-green-50 border border-green-200 px-3 py-1 text-xs text-green-800">COO stops losing sleep over allocator calls</span>
            </div>
          </div>

          {/* ROI */}
          <div className="rounded-md bg-blue-50 border border-blue-200 p-3">
            <p className="text-xs font-semibold text-blue-700 uppercase">ROI Frame</p>
            <p className="text-sm text-blue-900 mt-1">
              <strong>Capital at risk vs. cost of program.</strong> If a $2B fund loses an allocation because
              they failed ODD, the management fee impact alone ($20M+ at 1%) dwarfs the engagement cost.
              Frame around capital protected. <em>See ROI &amp; Value Measurement training for the full calculator.</em>
            </p>
          </div>

          <div className="rounded-md bg-amber-50 border border-amber-200 p-3">
            <p className="text-xs font-semibold text-amber-700">EXPANSION SIGNALS</p>
            <p className="text-sm text-amber-900 mt-1">
              Listen for these — they tell you where to go next:
            </p>
            <ul className="mt-2 text-sm text-amber-900 space-y-1">
              <li>&bull; <em>&ldquo;The DDQ responses are strong — but is the underlying program exam-ready?&rdquo;</em> &rarr; <strong>Regulatory Readiness</strong></li>
              <li>&bull; <em>&ldquo;What if someone actually tests us?&rdquo;</em> &rarr; <strong>Validated Protection</strong></li>
            </ul>
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
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">The Trigger</p>
            <p className="mt-1 text-sm text-gray-700">
              The firm needs a documented cybersecurity program — not just for allocators, but
              for regulators. Reg S-P amendments require a documented incident response program.
              Some clients enter here directly (especially after an SEC sweep announcement);
              others arrive after solving their DDQ problem. This is where real organizational
              behavior change begins.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">What We Deliver</p>
            <div className="mt-2 grid grid-cols-3 gap-3">
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-aqua-dark">Policies</p>
                <p className="text-sm font-medium text-db-dark mt-1">Full Policy Program</p>
                <p className="text-xs text-gray-500 mt-1">Written, board-approved cybersecurity policies tailored to the firm. Annual reviews baked in.</p>
              </div>
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-aqua-dark">IR Planning</p>
                <p className="text-sm font-medium text-db-dark mt-1">Incident Response Plan</p>
                <p className="text-xs text-gray-500 mt-1">Documented IR procedures with named owners, escalation paths, and 72-hr notification workflows.</p>
              </div>
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-aqua-dark">Training</p>
                <p className="text-sm font-medium text-db-dark mt-1">Security Awareness</p>
                <p className="text-xs text-gray-500 mt-1">Employee training program with completion tracking and phishing simulations.</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">RM Playbook</p>
            <div className="mt-2 rounded-md bg-white border border-gray-200 p-4">
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <p className="font-semibold text-db-dark mb-1">Track Behavior Change, Not Deliverables</p>
                  <p className="text-gray-600">
                    Policies on paper don&apos;t matter if nobody reads them. Is the board actually reviewing
                    and approving? Are employees completing training without being chased? Does the IR plan
                    have real people assigned, not just job titles?
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-db-dark mb-1">Connect to the Independence Theme</p>
                  <p className="text-gray-600">
                    This is where the MSP separation story lands hardest. The SEC expects an independent
                    assessment — not a self-review by the team that built the infrastructure. If their
                    MSP is doing their &ldquo;cyber audit,&rdquo; that&apos;s a compliance gap.
                  </p>
                </div>
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
            <p className="text-xs font-semibold text-blue-700 uppercase">ROI Frame</p>
            <p className="text-sm text-blue-900 mt-1">
              <strong>Cost of non-compliance vs. cost of program.</strong> SEC enforcement actions
              average $1.5M+ in fines, plus years of enhanced exam burden. The program
              cost is a fraction of one enforcement action. <em>See ROI &amp; Value Measurement training for enforcement cost modeling.</em>
            </p>
          </div>

          <div className="rounded-md bg-amber-50 border border-amber-200 p-3">
            <p className="text-xs font-semibold text-amber-700">EXPANSION SIGNALS</p>
            <p className="text-sm text-amber-900 mt-1">
              Listen for these:
            </p>
            <ul className="mt-2 text-sm text-amber-900 space-y-1">
              <li>&bull; <em>&ldquo;We have the plan on paper — but does any of this actually work if we get hit?&rdquo;</em> &rarr; <strong>Validated Protection</strong></li>
              <li>&bull; <em>&ldquo;Our allocators should know about this program we&apos;ve built.&rdquo;</em> &rarr; <strong>Capital Confidence</strong> (with a stronger story)</li>
            </ul>
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
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">The Trigger</p>
            <p className="mt-1 text-sm text-gray-700">
              A peer firm got breached. An employee clicked a phishing link. The question shifts from
              &ldquo;are we compliant?&rdquo; to &ldquo;are we actually protected?&rdquo; Some clients land here
              first — especially after a security incident or near-miss. This is where the program gets
              stress-tested.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">What We Deliver</p>
            <div className="mt-2 grid grid-cols-3 gap-3">
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-orange">Testing</p>
                <p className="text-sm font-medium text-db-dark mt-1">Pen Testing & Vuln Scans</p>
                <p className="text-xs text-gray-500 mt-1">Find weaknesses before attackers do. Annual pen test plus quarterly vulnerability scanning.</p>
              </div>
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-orange">Readiness</p>
                <p className="text-sm font-medium text-db-dark mt-1">Tabletop Exercises</p>
                <p className="text-xs text-gray-500 mt-1">Simulate a real incident with the leadership team. Stress-test the IR plan until it&apos;s muscle memory.</p>
              </div>
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-orange">Protection</p>
                <p className="text-sm font-medium text-db-dark mt-1">IR Retainer & Monitoring</p>
                <p className="text-xs text-gray-500 mt-1">Someone to call at 2am. Ongoing monitoring and rapid response capability.</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">RM Playbook</p>
            <div className="mt-2 rounded-md bg-white border border-gray-200 p-4">
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <p className="font-semibold text-db-dark mb-1">Tell the Story With Data</p>
                  <p className="text-gray-600">
                    Track risk score quarter-over-quarter. Show pen test findings shrinking, not growing.
                    Get phishing click rates and compare to industry averages. This is where the
                    &ldquo;Outcome Over Adoption&rdquo; theme matters most.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-db-dark mb-1">Use the Independence Differentiator</p>
                  <p className="text-gray-600">
                    A pen test from the same vendor that manages your infrastructure is a conflict of
                    interest. Drawbridge tests independently — the results are credible to regulators,
                    auditors, and allocators. That&apos;s why the findings matter.
                  </p>
                </div>
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
            <p className="text-xs font-semibold text-blue-700 uppercase">ROI Frame</p>
            <p className="text-sm text-blue-900 mt-1">
              <strong>Cost of a breach vs. cost of testing.</strong> Average financial services breach
              exceeds $5M (IBM 2024). A pen test that finds a critical vulnerability has infinite ROI.
              <em> See ROI &amp; Value Measurement training for breach cost modeling.</em>
            </p>
          </div>

          <div className="rounded-md bg-amber-50 border border-amber-200 p-3">
            <p className="text-xs font-semibold text-amber-700">EXPANSION SIGNALS</p>
            <ul className="mt-2 text-sm text-amber-900 space-y-1">
              <li>&bull; <em>&ldquo;We just need this to run — I don&apos;t want to think about it.&rdquo;</em> &rarr; <strong>Operational Resilience</strong></li>
              <li>&bull; <em>&ldquo;We&apos;re ahead of most firms our size — how do we use that?&rdquo;</em> &rarr; <strong>Competitive Advantage</strong></li>
            </ul>
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
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">The Trigger</p>
            <p className="mt-1 text-sm text-gray-700">
              Cybersecurity is no longer a project — it&apos;s an operating discipline. The firm wants
              monitoring in place, someone to call at 2am, and a vendor risk program that extends protection
              to their supply chain. The board gets quarterly briefings as normal governance.
              New hires go through security onboarding automatically.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">What We Deliver</p>
            <div className="mt-2 grid grid-cols-3 gap-3">
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-orange">Governance</p>
                <p className="text-sm font-medium text-db-dark mt-1">Board & LP Reporting</p>
                <p className="text-xs text-gray-500 mt-1">Quarterly executive reports that make security a normal governance conversation, not a fire drill.</p>
              </div>
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-orange">Vendor Risk</p>
                <p className="text-sm font-medium text-db-dark mt-1">Third-Party Assessments</p>
                <p className="text-xs text-gray-500 mt-1">Assess and monitor critical vendors. Extend the security perimeter beyond the firm&apos;s own walls.</p>
              </div>
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-orange">Continuous</p>
                <p className="text-sm font-medium text-db-dark mt-1">Program Evolution</p>
                <p className="text-xs text-gray-500 mt-1">New regulations, new threats, new technologies — the program adapts proactively. No scrambling.</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">RM Playbook</p>
            <div className="mt-2 rounded-md bg-white border border-gray-200 p-4">
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <p className="font-semibold text-db-dark mb-1">This Is the Build vs. Buy Moment</p>
                  <p className="text-gray-600">
                    Clients at this stage sometimes think &ldquo;maybe we should hire our own CISO.&rdquo;
                    That&apos;s the conversation where you show the math: $500K+ for a CISO + analyst + tools
                    vs. what they pay Drawbridge. And a hire still can&apos;t independently audit themselves.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-db-dark mb-1">Stay Ahead of Their Business</p>
                  <p className="text-gray-600">
                    Know when they&apos;re launching a new fund, opening a London office, or onboarding a
                    new prime broker. Each event changes the security surface. Surface the need before
                    they ask — that&apos;s what makes you an advisor, not a vendor.
                  </p>
                </div>
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
            <p className="text-xs font-semibold text-blue-700 uppercase">ROI Frame</p>
            <p className="text-sm text-blue-900 mt-1">
              <strong>Outsourced program vs. in-house build.</strong> Total cost of an in-house security
              function runs $500K–$1M+ annually. Drawbridge delivers comparable capability at a fraction.
              <em> See ROI &amp; Value Measurement training for the build-vs-buy calculator.</em>
            </p>
          </div>

          <div className="rounded-md bg-amber-50 border border-amber-200 p-3">
            <p className="text-xs font-semibold text-amber-700">EXPANSION SIGNALS</p>
            <ul className="mt-2 text-sm text-amber-900 space-y-1">
              <li>&bull; <em>&ldquo;How do we compare to other firms our size?&rdquo;</em> &rarr; <strong>Competitive Advantage</strong></li>
              <li>&bull; <em>&ldquo;Can we use this in our investor materials?&rdquo;</em> &rarr; <strong>Competitive Advantage</strong></li>
            </ul>
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
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">The Trigger</p>
            <p className="mt-1 text-sm text-gray-700">
              The firm has a mature, tested, continuously improving security program. The question is no
              longer &ldquo;are we protected?&rdquo; but &ldquo;how do we use this to win?&rdquo; Allocators
              compare managers on operational resilience. The firm with the best story wins the allocation.
              Cybersecurity has transformed from cost center to revenue driver.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">What We Deliver</p>
            <div className="mt-2 grid grid-cols-3 gap-3">
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-orange">Positioning</p>
                <p className="text-sm font-medium text-db-dark mt-1">Peer Benchmarking</p>
                <p className="text-xs text-gray-500 mt-1">Top-quartile ranking against 1,200+ peers. Data the firm can put in LP materials.</p>
              </div>
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-orange">Narrative</p>
                <p className="text-sm font-medium text-db-dark mt-1">LP-Ready Reports</p>
                <p className="text-xs text-gray-500 mt-1">Executive summaries designed for allocator consumption. The security story, told in their language.</p>
              </div>
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-orange">Evolution</p>
                <p className="text-sm font-medium text-db-dark mt-1">Continuous Improvement</p>
                <p className="text-xs text-gray-500 mt-1">Stay ahead of evolving threats, regulations, and allocator expectations. The program never stops getting better.</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">RM Playbook</p>
            <div className="mt-2 rounded-md bg-white border border-gray-200 p-4">
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <p className="font-semibold text-db-dark mb-1">Arm the Champion</p>
                  <p className="text-gray-600">
                    At this stage, your job is to give the COO/CCO the data and story to justify
                    the program internally and to tell externally. They should be able to walk into
                    any allocator meeting and articulate the firm&apos;s security posture with confidence.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-db-dark mb-1">Let Them Own the Story</p>
                  <p className="text-gray-600">
                    The most powerful ROI conversation is the one where the client does the math:
                    &ldquo;We&apos;ve raised $400M since we started with Drawbridge, and no allocator
                    has flagged our cyber posture.&rdquo; When they say it, they believe it.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">How the Client Knows It&apos;s Working</p>
            <div className="mt-1 flex flex-wrap gap-2">
              <span className="rounded-full bg-green-50 border border-green-200 px-3 py-1 text-xs text-green-800">LP feedback cites security program as a strength</span>
              <span className="rounded-full bg-green-50 border border-green-200 px-3 py-1 text-xs text-green-800">Top-quartile peer benchmarking position</span>
              <span className="rounded-full bg-green-50 border border-green-200 px-3 py-1 text-xs text-green-800">ODD completes faster because the story is clear</span>
              <span className="rounded-full bg-green-50 border border-green-200 px-3 py-1 text-xs text-green-800">Security cited in successful fundraise materials</span>
            </div>
          </div>

          <div className="rounded-md bg-blue-50 border border-blue-200 p-3">
            <p className="text-xs font-semibold text-blue-700 uppercase">ROI Frame</p>
            <p className="text-sm text-blue-900 mt-1">
              <strong>Security as revenue driver.</strong> When a top-quartile Cyber Score helps win a
              $200M allocation, the management fee impact ($3M+ annually) makes the entire engagement
              a rounding error. <em>See ROI &amp; Value Measurement training for allocation impact modeling.</em>
            </p>
          </div>
        </div>
      </div>

      {/* ── What this means for the RM ── */}
      <SectionHeading>Reframe Your Conversations</SectionHeading>

      <div className="rounded-lg border border-gray-200 overflow-hidden">
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
              <th className="px-3 py-2 text-left font-medium text-gray-600">Entry Point</th>
              <th className="px-3 py-2 text-left font-medium text-gray-600">Client Says...</th>
              <th className="px-3 py-2 text-left font-medium text-gray-600">We Deliver</th>
              <th className="px-3 py-2 text-left font-medium text-gray-600">ROI Frame</th>
              <th className="px-3 py-2 text-left font-medium text-gray-600">Expands To...</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            <tr>
              <td className="px-3 py-2 font-medium text-db-dark text-xs">A. Capital Confidence</td>
              <td className="px-3 py-2 text-gray-600 text-xs italic">&ldquo;DDQ season is killing us&rdquo;</td>
              <td className="px-3 py-2 text-gray-600 text-xs">Assessment, DDQ support, ODD readiness</td>
              <td className="px-3 py-2 text-gray-600 text-xs">Capital protected</td>
              <td className="px-3 py-2 text-gray-600 text-xs">B or C</td>
            </tr>
            <tr className="bg-gray-50/50">
              <td className="px-3 py-2 font-medium text-db-dark text-xs">B. Regulatory Readiness</td>
              <td className="px-3 py-2 text-gray-600 text-xs italic">&ldquo;What if the SEC shows up?&rdquo;</td>
              <td className="px-3 py-2 text-gray-600 text-xs">Policies, IR plan, training program</td>
              <td className="px-3 py-2 text-gray-600 text-xs">Enforcement avoided</td>
              <td className="px-3 py-2 text-gray-600 text-xs">C or A</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-medium text-db-dark text-xs">C. Validated Protection</td>
              <td className="px-3 py-2 text-gray-600 text-xs italic">&ldquo;Are we actually protected?&rdquo;</td>
              <td className="px-3 py-2 text-gray-600 text-xs">Pen testing, tabletops, IR retainer</td>
              <td className="px-3 py-2 text-gray-600 text-xs">Breach cost avoided</td>
              <td className="px-3 py-2 text-gray-600 text-xs">D or E</td>
            </tr>
            <tr className="bg-gray-50/50">
              <td className="px-3 py-2 font-medium text-db-dark text-xs">D. Operational Resilience</td>
              <td className="px-3 py-2 text-gray-600 text-xs italic">&ldquo;We need this to just run&rdquo;</td>
              <td className="px-3 py-2 text-gray-600 text-xs">Board reporting, vendor risk, program evolution</td>
              <td className="px-3 py-2 text-gray-600 text-xs">Build vs. buy</td>
              <td className="px-3 py-2 text-gray-600 text-xs">E</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-medium text-db-dark text-xs">E. Competitive Advantage</td>
              <td className="px-3 py-2 text-gray-600 text-xs italic">&ldquo;How do we use this to win?&rdquo;</td>
              <td className="px-3 py-2 text-gray-600 text-xs">Peer benchmarking, LP-ready reports</td>
              <td className="px-3 py-2 text-gray-600 text-xs">Capital accelerator</td>
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
          description="Never frame ROI as 'cost of Drawbridge vs. nothing.' Frame it as 'cost of Drawbridge vs. the alternative' — capital lost, enforcement fines, breach costs, or building in-house. See the ROI & Value Measurement training for detailed frameworks."
        />
      </div>

      <DrawbridgeAngle>
        <p>
          This journey is deliberately non-linear. Clients don&apos;t follow a prescribed path — they
          follow their business priorities. The RM&apos;s job is to understand which outcome matters
          most <em>right now</em>, deliver it, and listen for the expansion signals that reveal what&apos;s next.
        </p>
        <p className="mt-2">
          Three themes should surface in every conversation: <strong>independence</strong> (your cyber
          assessment can&apos;t come from the same team that built your IT), <strong>scale</strong> (enterprise-grade security
          without the enterprise headcount), and <strong>outcomes over adoption</strong> (what changed in
          their business, not what we delivered). Get these right and the renewal conversation becomes
          obvious.
        </p>
        <p className="mt-2">
          Drawbridge is trusted by <strong>1,000+ alternative investment funds managing $1.7T+ in
          assets</strong> and has supported over <strong>2,000 successful ODD reviews</strong>. That
          track record is built one outcome at a time — exactly the journey mapped here.
          <strong> Raise Your Guard. Raise Your Score. Raise Your Bar.</strong>
        </p>
      </DrawbridgeAngle>
    </>
  );
}
