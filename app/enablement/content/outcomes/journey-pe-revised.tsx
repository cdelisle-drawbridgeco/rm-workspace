'use client';

import { HeroSection, SectionHeading, CharacteristicCard, SubSection, DrawbridgeAngle, LastUpdated } from '../../components/shared-ui';

export default function JourneyPERevised() {
  return (
    <>
      <HeroSection
        icon="🧭"
        title="Customer Value Journey — PE Firm (Revised)"
        subtitle="A value-first playbook for PE management companies. Non-linear — enter where the firm's need is most urgent and expand across firm-level and portfolio-level outcomes."
      />
      <LastUpdated date="March 25, 2026 at 3:45 PM" />

      {/* The core insight */}
      <div className="mt-6 rounded-lg bg-db-dark p-6">
        <p className="text-sm font-semibold text-db-aqua uppercase tracking-wide mb-3">
          What Makes PE Different
        </p>
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div className="rounded-lg border border-white/10 bg-white/5 p-4">
            <p className="font-medium text-db-aqua mb-2">Longer Cycles</p>
            <p className="text-xs text-gray-400">
              Fundraising happens every 3–5 years, not annually. Each ODD moment is higher-stakes
              and less frequent. The renewal conversation must tie to the fund lifecycle, not the
              calendar.
            </p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/5 p-4">
            <p className="font-medium text-db-aqua mb-2">Two Client Layers</p>
            <p className="text-xs text-gray-400">
              The GP (management company) is your primary client. But the portfolio — 10, 20, 50+
              companies — is where value multiplies. A single GP engagement can expand into
              portfolio-wide coverage.
            </p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/5 p-4">
            <p className="font-medium text-db-aqua mb-2">Value Creation Lens</p>
            <p className="text-xs text-gray-400">
              PE firms think in terms of value creation and exit multiples. Cybersecurity isn&apos;t
              just risk mitigation — it&apos;s a lever that improves portco valuations, wins LP
              allocations, and reduces deal risk.
            </p>
          </div>
        </div>
        <div className="mt-4 rounded-md bg-white/5 border border-white/10 p-3">
          <p className="text-xs text-gray-300">
            <strong className="text-white">Same principle as the hedge fund journey:</strong> Map the
            client&apos;s business evolution, not your internal milestones. But for PE, the business
            evolution spans both the firm <em>and</em> the portfolio — and the exit timeline drives
            everything.
          </p>
        </div>
      </div>

      {/* ── THEMES ── */}
      <SectionHeading>Three Themes That Run Through Every Conversation</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed mb-4">
        These aren&apos;t stages — they&apos;re persistent truths adapted for the PE context.
        Surface them in every interaction, regardless of where the firm is in their journey.
      </p>

      <div className="grid grid-cols-3 gap-4">
        {/* Theme 1: Independence */}
        <div className="rounded-lg border-2 border-purple-300 bg-purple-50 p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-purple-600 text-white text-xs font-bold">1</span>
            <p className="text-sm font-bold text-purple-900">Independence from IT</p>
          </div>
          <p className="text-xs text-purple-800 leading-relaxed">
            This applies at <strong>both</strong> the GP and portfolio company level. The PE firm&apos;s
            IT provider shouldn&apos;t audit the PE firm&apos;s security. And the portco&apos;s MSP
            shouldn&apos;t be the one assessing the portco&apos;s cyber posture. Drawbridge is
            independent at every layer — which is what makes our assessments credible to LPs,
            regulators, and buyers.
          </p>
          <div className="mt-3 rounded bg-purple-100 p-2">
            <p className="text-[10px] font-semibold text-purple-700 uppercase">When to Surface This</p>
            <p className="text-xs text-purple-800 mt-0.5">
              When the GP says &ldquo;our portcos&apos; IT teams handle their own security reviews&rdquo;
              or when the firm itself relies on its MSP for assessments. At M&amp;A DD: the target&apos;s
              self-assessment isn&apos;t credible.
            </p>
          </div>
        </div>

        {/* Theme 2: Portfolio Multiplier */}
        <div className="rounded-lg border-2 border-blue-300 bg-blue-50 p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-bold">2</span>
            <p className="text-sm font-bold text-blue-900">Portfolio Multiplier</p>
          </div>
          <p className="text-xs text-blue-800 leading-relaxed">
            One GP engagement creates value across the entire portfolio. The PE firm gets
            consolidated visibility into 10, 20, 50+ companies — without hiring a CISO at
            every portco. Each new acquisition, each new fund, each exit prep multiplies the
            value. No other vendor gives them a single pane of glass across their holdings.
          </p>
          <div className="mt-3 rounded bg-blue-100 p-2">
            <p className="text-[10px] font-semibold text-blue-700 uppercase">When to Surface This</p>
            <p className="text-xs text-blue-800 mt-0.5">
              At every expansion conversation. &ldquo;You&apos;re already getting this for the management
              company — now imagine the same visibility across your 20 portfolio companies.&rdquo;
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
            PE firms care about business outcomes: fund close timelines, portco valuations, LP
            satisfaction, exit multiples. Not platform logins or assessment completion rates.
            Frame everything in terms of what changed in their business — capital raised,
            risk reduced, valuations improved — not what Drawbridge delivered.
          </p>
          <div className="mt-3 rounded bg-emerald-100 p-2">
            <p className="text-[10px] font-semibold text-emerald-700 uppercase">When to Surface This</p>
            <p className="text-xs text-emerald-800 mt-0.5">
              In every QBR and renewal. Lead with &ldquo;your portfolio cyber risk score improved
              25% and two portcos passed buyer DD clean&rdquo; — not &ldquo;we completed 45 assessments.&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* ── ENTRY POINT DIAGNOSTIC ── */}
      <SectionHeading>Where Does Your PE Client Enter?</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed mb-2">
        PE firms don&apos;t follow a prescribed path. A firm raising Fund IV enters differently than
        one preparing three portcos for exit. The Managing Partner cares about capital, the COO
        cares about compliance, the Head of Portfolio Ops cares about visibility.
        <strong> Start where the decision-maker&apos;s pain is.</strong>
      </p>

      <div className="rounded-lg bg-gray-50 border border-gray-200 p-5 mb-8">
        <div className="grid grid-cols-5 gap-2">
          {[
            { label: 'LP Readiness', trigger: '"LPs are asking about cyber"', color: 'border-db-aqua bg-db-aqua/10' },
            { label: 'Firm Compliance', trigger: '"What if the SEC examines us?"', color: 'border-db-aqua-dark bg-db-aqua-dark/10' },
            { label: 'Portfolio Visibility', trigger: '"Which portcos are exposed?"', color: 'border-db-orange/60 bg-orange-50' },
            { label: 'Portfolio Value', trigger: '"Cyber should improve valuations"', color: 'border-db-orange/80 bg-orange-50' },
            { label: 'Exit & Differentiation', trigger: '"Buyers will scrutinize this"', color: 'border-db-orange bg-orange-50' },
          ].map(item => (
            <div key={item.label} className={`rounded-md border-2 ${item.color} p-3 text-center`}>
              <p className="text-xs font-bold text-db-dark">{item.label}</p>
              <p className="text-[10px] text-gray-500 mt-1 italic">{item.trigger}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-400 mt-3 text-center">
          Most PE firms enter at LP Readiness (fundraise-driven) or Portfolio Visibility (board/IC-driven). Map the decision-maker to find the entry.
        </p>
      </div>

      {/* ── JOURNEY PLAYBOOKS ── */}
      <SectionHeading>The Playbook — What We Deliver at Each Entry Point</SectionHeading>

      {/* ── Outcome A: LP Readiness ── */}
      <div className="rounded-xl border-2 border-db-aqua overflow-hidden">
        <div className="bg-db-aqua/10 px-6 py-4 border-b border-db-aqua/20 flex items-center gap-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-db-aqua text-white text-lg font-bold">A</span>
          <div>
            <h3 className="text-lg font-bold font-heading text-db-dark">LP Readiness & Capital Confidence</h3>
            <p className="text-sm text-gray-500">&ldquo;We&apos;re raising Fund IV and LPs are asking questions we can&apos;t answer.&rdquo;</p>
          </div>
        </div>
        <div className="px-6 py-5 space-y-5">
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">The Trigger</p>
            <p className="mt-1 text-sm text-gray-700">
              The firm is in fundraise mode. LP operational due diligence now treats cybersecurity
              as a gating factor for allocations over $50M. A placement agent flagged gaps. An ODD
              consultant sent back questions. The fundraise is 12–18 months — and every delay costs
              the GP management fees. Unlike hedge funds (annual DDQ cycles), this is a once-every-3-to-5-years
              moment. The stakes are enormous.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">What We Deliver</p>
            <div className="mt-2 grid grid-cols-3 gap-3">
              <div className="rounded-md bg-db-aqua/5 border border-db-aqua/20 p-3">
                <p className="text-xs font-semibold text-db-aqua-dark">Week 1–2</p>
                <p className="text-sm font-medium text-db-dark mt-1">Security Assessment</p>
                <p className="text-xs text-gray-500 mt-1">Baseline the GP&apos;s posture. Identify gaps that LPs and ODD consultants will find before they find them.</p>
              </div>
              <div className="rounded-md bg-db-aqua/5 border border-db-aqua/20 p-3">
                <p className="text-xs font-semibold text-db-aqua-dark">Week 2–4</p>
                <p className="text-sm font-medium text-db-dark mt-1">Policy & DDQ Foundation</p>
                <p className="text-xs text-gray-500 mt-1">Core policies and DDQ responses the firm can share with LPs and ODD reviewers immediately.</p>
              </div>
              <div className="rounded-md bg-db-aqua/5 border border-db-aqua/20 p-3">
                <p className="text-xs font-semibold text-db-aqua-dark">Ongoing</p>
                <p className="text-sm font-medium text-db-dark mt-1">LP-Ready Reporting</p>
                <p className="text-xs text-gray-500 mt-1">Investor-facing security reports and ODD support throughout the fundraise cycle.</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">RM Playbook</p>
            <div className="mt-2 rounded-md bg-white border border-gray-200 p-4">
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <p className="font-semibold text-db-dark mb-1">Map the Power Center</p>
                  <p className="text-gray-600">
                    PE firms have multiple decision-makers: Managing Partner (strategy + LPs), COO
                    (operations), Head of Portfolio Ops (portco oversight). Know who is driving the
                    engagement and tailor your value story accordingly.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-db-dark mb-1">Know the Fundraise Timeline</p>
                  <p className="text-gray-600">
                    When is first close? Final close? Are they in market now or preparing? Every
                    conversation should reference the fundraise calendar. If ODD is in 6 weeks,
                    prioritize differently than if it&apos;s 6 months out.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">How the Client Knows It&apos;s Working</p>
            <div className="mt-1 flex flex-wrap gap-2">
              <span className="rounded-full bg-green-50 border border-green-200 px-3 py-1 text-xs text-green-800">LP ODD reviews pass without cyber findings</span>
              <span className="rounded-full bg-green-50 border border-green-200 px-3 py-1 text-xs text-green-800">DDQ turnaround: weeks &rarr; days</span>
              <span className="rounded-full bg-green-50 border border-green-200 px-3 py-1 text-xs text-green-800">Fund close not delayed by operational gaps</span>
              <span className="rounded-full bg-green-50 border border-green-200 px-3 py-1 text-xs text-green-800">Managing Partner confident in LP conversations</span>
            </div>
          </div>

          <div className="rounded-md bg-blue-50 border border-blue-200 p-3">
            <p className="text-xs font-semibold text-blue-700 uppercase">ROI Frame</p>
            <p className="text-sm text-blue-900 mt-1">
              <strong>Capital at risk vs. cost of program.</strong> PE fundraises are multi-billion-dollar
              events. A delayed fund close costs the GP millions in deferred management fees. A failed
              ODD can lose an anchor LP. The program cost is a rounding error on the fund economics.
              <em> See ROI &amp; Value Measurement training for the capital impact calculator.</em>
            </p>
          </div>

          <div className="rounded-md bg-amber-50 border border-amber-200 p-3">
            <p className="text-xs font-semibold text-amber-700">EXPANSION SIGNALS</p>
            <ul className="mt-2 text-sm text-amber-900 space-y-1">
              <li>&bull; <em>&ldquo;LPs are satisfied — but what if the SEC examines us?&rdquo;</em> &rarr; <strong>Firm Compliance</strong></li>
              <li>&bull; <em>&ldquo;What about our portfolio companies?&rdquo;</em> &rarr; <strong>Portfolio Visibility</strong></li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Outcome B: Firm Compliance ── */}
      <div className="mt-6 rounded-xl border-2 border-db-aqua-dark overflow-hidden">
        <div className="bg-db-aqua-dark/10 px-6 py-4 border-b border-db-aqua-dark/20 flex items-center gap-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-db-aqua-dark text-white text-lg font-bold">B</span>
          <div>
            <h3 className="text-lg font-bold font-heading text-db-dark">Firm-Level Compliance</h3>
            <p className="text-sm text-gray-500">&ldquo;The SEC is examining PE advisers more aggressively. Are we ready?&rdquo;</p>
          </div>
        </div>
        <div className="px-6 py-5 space-y-5">
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">The Trigger</p>
            <p className="mt-1 text-sm text-gray-700">
              The SEC is expanding exams to PE advisers — historically less scrutinized than hedge funds.
              Reg S-P amendments require documented incident response. The firm needs board-approved
              policies, a tested IR plan, and trained employees. Some GPs enter here directly after
              getting an exam notification; others arrive after solving LP readiness.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">What We Deliver</p>
            <div className="mt-2 grid grid-cols-3 gap-3">
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-aqua-dark">Policies</p>
                <p className="text-sm font-medium text-db-dark mt-1">Full Policy Program</p>
                <p className="text-xs text-gray-500 mt-1">Board-approved cybersecurity policies tailored to the GP entity. Annual reviews and regulatory updates baked in.</p>
              </div>
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-aqua-dark">IR Planning</p>
                <p className="text-sm font-medium text-db-dark mt-1">Incident Response Plan</p>
                <p className="text-xs text-gray-500 mt-1">Documented IR procedures with named owners, escalation paths, and Reg S-P 72-hour notification workflows.</p>
              </div>
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-aqua-dark">Training</p>
                <p className="text-sm font-medium text-db-dark mt-1">Security Awareness</p>
                <p className="text-xs text-gray-500 mt-1">Employee training with completion tracking and phishing simulations. Exam-ready documentation package.</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">RM Playbook</p>
            <div className="mt-2 rounded-md bg-white border border-gray-200 p-4">
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <p className="font-semibold text-db-dark mb-1">Drive the Independence Story</p>
                  <p className="text-gray-600">
                    PE firms often use their IT provider or MSP to &ldquo;handle security.&rdquo; The SEC
                    expects an independent assessment. Surface this early: an MSP auditing its own work
                    is a compliance gap. Drawbridge&apos;s independence makes the program defensible.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-db-dark mb-1">Track Real Behavior Change</p>
                  <p className="text-gray-600">
                    Is the board actually reviewing policies? Do named IR owners know their roles? Are
                    employees completing training without being chased? These are the signals that matter
                    to a regulator — not the number of policies written.
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
              <span className="rounded-full bg-green-50 border border-green-200 px-3 py-1 text-xs text-green-800">COO can walk a regulator through the program</span>
            </div>
          </div>

          <div className="rounded-md bg-blue-50 border border-blue-200 p-3">
            <p className="text-xs font-semibold text-blue-700 uppercase">ROI Frame</p>
            <p className="text-sm text-blue-900 mt-1">
              <strong>Cost of non-compliance.</strong> SEC enforcement actions average $1.5M+ in fines,
              plus enhanced exam cycles that drain management time for years. For a PE firm, the
              reputational damage impacts fundraising across all funds — not just one.
              <em> See ROI &amp; Value Measurement training for enforcement cost modeling.</em>
            </p>
          </div>

          <div className="rounded-md bg-amber-50 border border-amber-200 p-3">
            <p className="text-xs font-semibold text-amber-700">EXPANSION SIGNALS</p>
            <ul className="mt-2 text-sm text-amber-900 space-y-1">
              <li>&bull; <em>&ldquo;The firm is in great shape — but what about our portfolio companies?&rdquo;</em> &rarr; <strong>Portfolio Visibility</strong></li>
              <li>&bull; <em>&ldquo;Our LPs should know how strong our program is.&rdquo;</em> &rarr; <strong>LP Readiness</strong> (stronger story)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Outcome C: Portfolio Visibility ── */}
      <div className="mt-6 rounded-xl border-2 border-db-orange/60 overflow-hidden">
        <div className="bg-orange-50 px-6 py-4 border-b border-db-orange/20 flex items-center gap-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-db-orange/80 text-white text-lg font-bold">C</span>
          <div>
            <h3 className="text-lg font-bold font-heading text-db-dark">Portfolio Visibility</h3>
            <p className="text-sm text-gray-500">&ldquo;We have 20 portfolio companies across three funds. Which ones are exposed?&rdquo;</p>
          </div>
        </div>
        <div className="px-6 py-5 space-y-5">
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">The Trigger</p>
            <p className="mt-1 text-sm text-gray-700">
              The board, the investment committee, or LPs are asking about portfolio-level cyber risk.
              A portco had an incident. A new acquisition revealed hidden vulnerabilities. The GP can&apos;t
              answer the question: &ldquo;How exposed are we across the portfolio?&rdquo; This is the
              PE-specific outcome that no hedge fund journey includes — and where Drawbridge&apos;s
              Portfolio Analytics platform is uniquely positioned.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">What We Deliver</p>
            <div className="mt-2 grid grid-cols-3 gap-3">
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-orange">Portfolio</p>
                <p className="text-sm font-medium text-db-dark mt-1">PE Portfolio Analytics</p>
                <p className="text-xs text-gray-500 mt-1">Single dashboard showing cyber risk scores across all portfolio companies. Identify outliers and track remediation.</p>
              </div>
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-orange">Assessments</p>
                <p className="text-sm font-medium text-db-dark mt-1">Portco Assessments</p>
                <p className="text-xs text-gray-500 mt-1">Standardized assessments across the portfolio with maturity scoring and remediation tracking.</p>
              </div>
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-orange">M&amp;A</p>
                <p className="text-sm font-medium text-db-dark mt-1">Cyber Due Diligence</p>
                <p className="text-xs text-gray-500 mt-1">Pre-acquisition cyber screening for new deals. Identify hidden risks before the close — not after.</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">RM Playbook</p>
            <div className="mt-2 rounded-md bg-white border border-gray-200 p-4">
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <p className="font-semibold text-db-dark mb-1">This Is the Portfolio Multiplier</p>
                  <p className="text-gray-600">
                    One conversation with the Head of Portfolio Ops can unlock 10–30+ portco engagements.
                    Frame it: &ldquo;You&apos;re already getting this for the management company — imagine
                    the same visibility across your entire portfolio.&rdquo; The per-portco cost is a fraction
                    of each company building its own program.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-db-dark mb-1">Stay Close to Deal Flow</p>
                  <p className="text-gray-600">
                    Every new acquisition is a new portco to assess. Every exit needs DD-ready security.
                    Build a relationship with the deal team so Drawbridge is the default for pre-acquisition
                    cyber screening — not an afterthought.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">How the Client Knows It&apos;s Working</p>
            <div className="mt-1 flex flex-wrap gap-2">
              <span className="rounded-full bg-green-50 border border-green-200 px-3 py-1 text-xs text-green-800">100% portfolio company coverage</span>
              <span className="rounded-full bg-green-50 border border-green-200 px-3 py-1 text-xs text-green-800">Portfolio risk score improving quarter over quarter</span>
              <span className="rounded-full bg-green-50 border border-green-200 px-3 py-1 text-xs text-green-800">M&amp;A DD completed on all new acquisitions</span>
              <span className="rounded-full bg-green-50 border border-green-200 px-3 py-1 text-xs text-green-800">Board/IC receives quarterly portfolio cyber reports</span>
            </div>
          </div>

          <div className="rounded-md bg-blue-50 border border-blue-200 p-3">
            <p className="text-xs font-semibold text-blue-700 uppercase">ROI Frame</p>
            <p className="text-sm text-blue-900 mt-1">
              <strong>Portfolio risk reduction + M&amp;A protection.</strong> One undiscovered vulnerability
              in an acquired company can cost millions post-close. Pre-acquisition DD costs a fraction of
              post-close remediation. And portfolio-wide visibility prevents the cascading breach that
              hits multiple companies through shared infrastructure.
              <em> See ROI &amp; Value Measurement training for breach cost modeling.</em>
            </p>
          </div>

          <div className="rounded-md bg-amber-50 border border-amber-200 p-3">
            <p className="text-xs font-semibold text-amber-700">EXPANSION SIGNALS</p>
            <ul className="mt-2 text-sm text-amber-900 space-y-1">
              <li>&bull; <em>&ldquo;Can we use portco cyber maturity to improve valuations?&rdquo;</em> &rarr; <strong>Portfolio Value Creation</strong></li>
              <li>&bull; <em>&ldquo;We have three exits coming next year.&rdquo;</em> &rarr; <strong>Exit &amp; LP Differentiation</strong></li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Outcome D: Portfolio Value Creation ── */}
      <div className="mt-6 rounded-xl border-2 border-db-orange/80 overflow-hidden">
        <div className="bg-orange-50 px-6 py-4 border-b border-db-orange/20 flex items-center gap-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-db-orange/80 text-white text-lg font-bold">D</span>
          <div>
            <h3 className="text-lg font-bold font-heading text-db-dark">Portfolio Value Creation</h3>
            <p className="text-sm text-gray-500">&ldquo;Cyber shouldn&apos;t just mitigate risk — it should improve portco valuations.&rdquo;</p>
          </div>
        </div>
        <div className="px-6 py-5 space-y-5">
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">The Trigger</p>
            <p className="mt-1 text-sm text-gray-700">
              The GP has visibility across the portfolio. Now they want to use it as a value creation
              lever — the same way PE firms use operational improvement, revenue growth, and cost
              optimization to increase EBITDA and exit multiples. Portcos with mature, documented
              security programs are worth more at exit. Buyers are discounting valuations for
              cyber gaps.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">What We Deliver</p>
            <div className="mt-2 grid grid-cols-3 gap-3">
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-orange">Maturity</p>
                <p className="text-sm font-medium text-db-dark mt-1">Portco Maturity Scoring</p>
                <p className="text-xs text-gray-500 mt-1">Track maturity improvement over the hold period. Show the journey from baseline to buyer-ready.</p>
              </div>
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-orange">Compliance</p>
                <p className="text-sm font-medium text-db-dark mt-1">Framework Mapping</p>
                <p className="text-xs text-gray-500 mt-1">Map portco programs to SOC 2, ISO 27001, NIST CSF — whatever the target buyer or industry expects.</p>
              </div>
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-orange">Remediation</p>
                <p className="text-sm font-medium text-db-dark mt-1">Portco Security Programs</p>
                <p className="text-xs text-gray-500 mt-1">Full security programs for individual portcos — policies, training, testing, IR plans — right-sized for mid-market.</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">RM Playbook</p>
            <div className="mt-2 rounded-md bg-white border border-gray-200 p-4">
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <p className="font-semibold text-db-dark mb-1">Speak the Language of Value Creation</p>
                  <p className="text-gray-600">
                    PE firms think in EBITDA multiples, not risk scores. Frame cyber improvement
                    as: &ldquo;Portcos with mature security programs see fewer buyer adjustments at exit.
                    That&apos;s margin protection.&rdquo; Connect to the investment thesis, not the
                    threat landscape.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-db-dark mb-1">Know the Hold Period</p>
                  <p className="text-gray-600">
                    A portco 4 years into a 5-year hold needs exit-ready security now. A fresh
                    acquisition has time to build properly. Always ask: &ldquo;Where are we in the
                    hold period?&rdquo; and plan the maturity roadmap against that timeline.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">How the Client Knows It&apos;s Working</p>
            <div className="mt-1 flex flex-wrap gap-2">
              <span className="rounded-full bg-green-50 border border-green-200 px-3 py-1 text-xs text-green-800">Portfolio maturity scores trending up across all funds</span>
              <span className="rounded-full bg-green-50 border border-green-200 px-3 py-1 text-xs text-green-800">Portcos winning enterprise customers citing security</span>
              <span className="rounded-full bg-green-50 border border-green-200 px-3 py-1 text-xs text-green-800">Insurance premiums reduced at portfolio level</span>
              <span className="rounded-full bg-green-50 border border-green-200 px-3 py-1 text-xs text-green-800">No cyber-related valuation adjustments at exit</span>
            </div>
          </div>

          <div className="rounded-md bg-blue-50 border border-blue-200 p-3">
            <p className="text-xs font-semibold text-blue-700 uppercase">ROI Frame</p>
            <p className="text-sm text-blue-900 mt-1">
              <strong>Valuation protection + enterprise customer wins.</strong> Buyers are discounting
              valuations 5–15% for cyber gaps at exit. On a $200M deal, that&apos;s $10M–$30M. Portcos
              with strong programs also win enterprise customers who require vendor security assessments.
              The Drawbridge cost per portco is a rounding error on either impact.
              <em> See ROI &amp; Value Measurement training for the build-vs-buy calculator.</em>
            </p>
          </div>

          <div className="rounded-md bg-amber-50 border border-amber-200 p-3">
            <p className="text-xs font-semibold text-amber-700">EXPANSION SIGNALS</p>
            <ul className="mt-2 text-sm text-amber-900 space-y-1">
              <li>&bull; <em>&ldquo;We have three exits in the next 18 months.&rdquo;</em> &rarr; <strong>Exit &amp; LP Differentiation</strong></li>
              <li>&bull; <em>&ldquo;Our LPs want to see this portfolio data.&rdquo;</em> &rarr; <strong>LP Readiness</strong> (portfolio-level story)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Outcome E: Exit & LP Differentiation ── */}
      <div className="mt-6 rounded-xl border-2 border-db-orange overflow-hidden">
        <div className="bg-orange-50 px-6 py-4 border-b border-db-orange/20 flex items-center gap-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-db-orange text-white text-lg font-bold">E</span>
          <div>
            <h3 className="text-lg font-bold font-heading text-db-dark">Exit & LP Differentiation</h3>
            <p className="text-sm text-gray-500">&ldquo;Our cyber program should win us LP allocations and make portco exits smoother.&rdquo;</p>
          </div>
        </div>
        <div className="px-6 py-5 space-y-5">
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">The Trigger</p>
            <p className="mt-1 text-sm text-gray-700">
              The firm has firm-level compliance, portfolio-wide oversight, and maturing portcos.
              Now cybersecurity becomes a competitive weapon: LPs compare GPs on operational maturity,
              portcos need buyer-ready DD packages, and the firm&apos;s track record of portfolio value
              creation includes cyber improvement as a measurable data point.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">What We Deliver</p>
            <div className="mt-2 grid grid-cols-3 gap-3">
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-orange">Positioning</p>
                <p className="text-sm font-medium text-db-dark mt-1">GP Peer Benchmarking</p>
                <p className="text-xs text-gray-500 mt-1">Show where the GP stands vs. peer PE firms — and help tell that story to LPs and advisory committees.</p>
              </div>
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-orange">Exit</p>
                <p className="text-sm font-medium text-db-dark mt-1">Buyer DD Packages</p>
                <p className="text-xs text-gray-500 mt-1">Comprehensive security documentation for portcos approaching exit. Maturity evidence, compliance mapping, test results.</p>
              </div>
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-orange">Governance</p>
                <p className="text-sm font-medium text-db-dark mt-1">Board & IC Reporting</p>
                <p className="text-xs text-gray-500 mt-1">Executive-ready reports showing portfolio maturity trends, value creation metrics, and LP-ready narratives.</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">RM Playbook</p>
            <div className="mt-2 rounded-md bg-white border border-gray-200 p-4">
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <p className="font-semibold text-db-dark mb-1">Arm the Fundraise Team</p>
                  <p className="text-gray-600">
                    Give the IR team and placement agents the data to tell the security story. Portfolio
                    maturity improvements, portco coverage rates, peer benchmarking — this is the
                    operational excellence narrative that wins institutional allocations.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-db-dark mb-1">Own the Exit Prep Conversation</p>
                  <p className="text-gray-600">
                    When a portco exit is announced, be the first call: &ldquo;Let&apos;s make sure the
                    buyer DD goes smoothly.&rdquo; A clean DD package that demonstrates maturity progression
                    is the difference between a valuation adjustment and a clean close.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">How the Client Knows It&apos;s Working</p>
            <div className="mt-1 flex flex-wrap gap-2">
              <span className="rounded-full bg-green-50 border border-green-200 px-3 py-1 text-xs text-green-800">LP feedback cites portfolio cyber program as a strength</span>
              <span className="rounded-full bg-green-50 border border-green-200 px-3 py-1 text-xs text-green-800">Portco exits pass buyer DD without cyber findings</span>
              <span className="rounded-full bg-green-50 border border-green-200 px-3 py-1 text-xs text-green-800">Top-quartile GP peer benchmarking position</span>
              <span className="rounded-full bg-green-50 border border-green-200 px-3 py-1 text-xs text-green-800">Portfolio cyber cited in fundraise materials</span>
            </div>
          </div>

          <div className="rounded-md bg-blue-50 border border-blue-200 p-3">
            <p className="text-xs font-semibold text-blue-700 uppercase">ROI Frame</p>
            <p className="text-sm text-blue-900 mt-1">
              <strong>Exit multiples + LP allocation wins.</strong> A portco exit with clean cyber DD
              vs. one with findings can mean millions in valuation difference. And when LPs are choosing
              between two GPs with similar track records, the one demonstrating portfolio-wide operational
              excellence wins the allocation. That&apos;s fund economics at scale.
              <em> See ROI &amp; Value Measurement training for allocation impact modeling.</em>
            </p>
          </div>
        </div>
      </div>

      {/* ── Reframe conversations ── */}
      <SectionHeading>Reframe Your Conversations</SectionHeading>

      <div className="rounded-lg border border-gray-200 overflow-hidden">
        <div className="px-5 py-4">
          <div className="grid grid-cols-2 gap-6 text-sm">
            <div>
              <p className="text-xs font-semibold text-red-500 uppercase mb-2">Service Blueprint Questions</p>
              <ul className="text-gray-600 space-y-2 text-xs">
                <li>&bull; &ldquo;How many assessments did we complete?&rdquo;</li>
                <li>&bull; &ldquo;What percentage of portcos are onboarded?&rdquo;</li>
                <li>&bull; &ldquo;Did we hit the QBR cadence?&rdquo;</li>
                <li>&bull; &ldquo;What&apos;s the platform adoption rate?&rdquo;</li>
                <li>&bull; &ldquo;When is renewal?&rdquo;</li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold text-green-600 uppercase mb-2">Value Journey Questions</p>
              <ul className="text-gray-600 space-y-2 text-xs">
                <li>&bull; &ldquo;Did the last fundraise ODD go smoother than Fund III?&rdquo;</li>
                <li>&bull; &ldquo;Which portcos are still exposed and why?&rdquo;</li>
                <li>&bull; &ldquo;Is the IC getting the portfolio risk data they need for decisions?&rdquo;</li>
                <li>&bull; &ldquo;Are exit-track portcos buyer-ready from a cyber perspective?&rdquo;</li>
                <li>&bull; &ldquo;What&apos;s the next acquisition and when do we need DD?&rdquo;</li>
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
              <th className="px-3 py-2 text-left font-medium text-gray-600">Decision-Maker</th>
              <th className="px-3 py-2 text-left font-medium text-gray-600">We Deliver</th>
              <th className="px-3 py-2 text-left font-medium text-gray-600">ROI Frame</th>
              <th className="px-3 py-2 text-left font-medium text-gray-600">Expands To...</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            <tr>
              <td className="px-3 py-2 font-medium text-db-dark text-xs">A. LP Readiness</td>
              <td className="px-3 py-2 text-gray-600 text-xs">Managing Partner / IR</td>
              <td className="px-3 py-2 text-gray-600 text-xs">Assessment, DDQ, LP reporting</td>
              <td className="px-3 py-2 text-gray-600 text-xs">Capital at risk</td>
              <td className="px-3 py-2 text-gray-600 text-xs">B or C</td>
            </tr>
            <tr className="bg-gray-50/50">
              <td className="px-3 py-2 font-medium text-db-dark text-xs">B. Firm Compliance</td>
              <td className="px-3 py-2 text-gray-600 text-xs">COO / CCO</td>
              <td className="px-3 py-2 text-gray-600 text-xs">Policies, IR plan, training</td>
              <td className="px-3 py-2 text-gray-600 text-xs">Enforcement avoided</td>
              <td className="px-3 py-2 text-gray-600 text-xs">C or A</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-medium text-db-dark text-xs">C. Portfolio Visibility</td>
              <td className="px-3 py-2 text-gray-600 text-xs">Head of Portfolio Ops</td>
              <td className="px-3 py-2 text-gray-600 text-xs">Portfolio Analytics, portco assessments, M&amp;A DD</td>
              <td className="px-3 py-2 text-gray-600 text-xs">Portfolio risk + M&amp;A protection</td>
              <td className="px-3 py-2 text-gray-600 text-xs">D or E</td>
            </tr>
            <tr className="bg-gray-50/50">
              <td className="px-3 py-2 font-medium text-db-dark text-xs">D. Portfolio Value</td>
              <td className="px-3 py-2 text-gray-600 text-xs">Operating Partner / Deal Team</td>
              <td className="px-3 py-2 text-gray-600 text-xs">Maturity scoring, framework mapping, portco programs</td>
              <td className="px-3 py-2 text-gray-600 text-xs">Valuation protection</td>
              <td className="px-3 py-2 text-gray-600 text-xs">E</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-medium text-db-dark text-xs">E. Exit & Differentiation</td>
              <td className="px-3 py-2 text-gray-600 text-xs">Managing Partner / IR</td>
              <td className="px-3 py-2 text-gray-600 text-xs">Benchmarking, buyer DD packages, board reporting</td>
              <td className="px-3 py-2 text-gray-600 text-xs">Exit multiples + LP wins</td>
              <td className="px-3 py-2 text-gray-600 text-xs">Continuous</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Key principles */}
      <SectionHeading>Key Principles</SectionHeading>
      <div className="grid grid-cols-2 gap-4">
        <CharacteristicCard
          title="Align to the Fund Lifecycle"
          description="PE firms don't operate on annual cycles. Time your conversations to fundraising events, new acquisitions, and exit timelines — not arbitrary renewal dates."
        />
        <CharacteristicCard
          title="Map the Power Center"
          description="Managing Partner cares about LPs. COO cares about compliance. Head of Portfolio Ops cares about portco risk. Deal team cares about M&A DD. Tailor your message to the decision-maker."
        />
        <CharacteristicCard
          title="Independence at Every Layer"
          description="The GP's MSP shouldn't assess the GP. The portco's IT team shouldn't assess the portco. Drawbridge is independent at both layers — which is what makes the program credible to regulators, LPs, and buyers."
        />
        <CharacteristicCard
          title="Portfolio Creates the Multiplier"
          description="The GP relationship is the anchor. But 20 portco engagements at $40K each is $800K in ARR from one relationship. Always be looking for the portfolio expansion signal."
        />
      </div>

      <DrawbridgeAngle>
        <p>
          This journey is deliberately non-linear and spans two dimensions: the firm itself and
          the portfolio. Most PE relationships start with one dimension (LP readiness or firm
          compliance) and expand into the other (portfolio visibility and value creation).
          The RM who understands both dimensions — and the fund lifecycle that connects them —
          becomes indispensable.
        </p>
        <p className="mt-2">
          Drawbridge has supported over <strong>2,000 successful ODD reviews</strong> and is trusted
          by <strong>1,000+ alternative investment funds managing $1.7T+ in assets</strong>. In PE,
          that depth means we know what Fund IV allocators are asking today — and how to make sure
          your client&apos;s program is ready before they ask it.
        </p>
        <p>
          Three themes should surface in every conversation: <strong>independence</strong> (at both GP
          and portco level — the SEC expects it, LPs demand it, and buyers verify it),
          <strong> the portfolio multiplier</strong> (one GP relationship, value across every company
          they own), and <strong>outcomes over adoption</strong> (portco maturity improvements,
          exit-ready DD, and LP satisfaction — not assessments completed). The renewal conversation
          for a PE firm should sound like: &ldquo;This year, we helped you raise Fund IV, reduced
          portfolio cyber risk by 30%, and prepared two portcos for clean exits. Here&apos;s how we
          continue that across Fund V.&rdquo; <strong>Raise Your Guard. Protect Your Returns.</strong>
        </p>
      </DrawbridgeAngle>
    </>
  );
}
