'use client';

import { HeroSection, SectionHeading, CharacteristicCard, DrawbridgeAngle, LastUpdated } from '../../components/shared-ui';

export default function JourneyHedgeFundRevised() {
  return (
    <>
      <HeroSection
        icon="🧭"
        title="Customer Value Journey — Hedge Fund (Revised)"
        subtitle="Stop mapping your internal milestones. Start mapping the customer's business evolution. This journey is built around where the client is — not what we deliver."
      />
      <LastUpdated date="March 9, 2026 at 12:00 PM" />

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

      {/* The value journey visual */}
      <SectionHeading>The Client&apos;s Business Evolution</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed mb-4">
        Each stage represents where the client is in their business — not what we&apos;ve delivered.
        The question at every stage is: <strong>what is changing in their world?</strong>
      </p>

      {/* Journey stages visual */}
      <div className="flex items-stretch gap-0 mb-2">
        {[
          { label: 'Exposed', sub: '"We have a problem"', color: 'bg-red-500', text: 'text-white' },
          { label: 'Responding', sub: '"We\'re addressing it"', color: 'bg-db-aqua-dark', text: 'text-white' },
          { label: 'Confident', sub: '"We can prove it"', color: 'bg-db-aqua', text: 'text-db-dark' },
          { label: 'Resilient', sub: '"We\'re ahead of it"', color: 'bg-db-orange/80', text: 'text-white' },
          { label: 'Differentiated', sub: '"We leverage it"', color: 'bg-db-orange', text: 'text-white' },
        ].map((stage, i) => (
          <div key={stage.label} className={`flex-1 ${stage.color} ${stage.text} py-3 px-1 text-center ${i === 0 ? 'rounded-l-lg' : ''} ${i === 4 ? 'rounded-r-lg' : ''}`}>
            <p className="text-xs font-bold">{stage.label}</p>
            <p className="text-[10px] opacity-80 mt-0.5">{stage.sub}</p>
          </div>
        ))}
      </div>
      <p className="text-xs text-gray-400 text-right italic mb-6">
        The client&apos;s journey, in their words — not our implementation milestones
      </p>

      {/* ── Stage 1: Exposed ── */}
      <div className="mt-4 rounded-xl border-2 border-red-400 overflow-hidden">
        <div className="bg-red-50 px-6 py-4 border-b border-red-200 flex items-center gap-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-red-500 text-white text-lg font-bold">1</span>
          <div>
            <h3 className="text-lg font-bold font-heading text-db-dark">Exposed</h3>
            <p className="text-sm text-gray-500">&ldquo;We have a problem we can&apos;t solve ourselves.&rdquo;</p>
          </div>
        </div>
        <div className="px-6 py-5 space-y-5">
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Where the Client Is</p>
            <p className="mt-1 text-sm text-gray-700">
              Something has forced cybersecurity onto the leadership agenda. An allocator asked a question
              they couldn&apos;t answer. A DDQ came back with red flags. A peer firm got breached. The SEC
              announced a sweep. They know they have exposure — and they know they can&apos;t fix it with
              their current team. The COO or CCO is feeling the pressure personally.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">What&apos;s Happening in Their Business</p>
            <div className="mt-2 grid grid-cols-3 gap-3">
              <div className="rounded-md bg-red-50 border border-red-200 p-3">
                <p className="text-xs font-semibold text-red-700">Capital at Risk</p>
                <p className="text-xs text-gray-600 mt-1">
                  Allocators are asking questions the firm can&apos;t confidently answer. DDQ turnaround
                  is slow and inconsistent. The fundraise is stalling or at risk.
                </p>
              </div>
              <div className="rounded-md bg-red-50 border border-red-200 p-3">
                <p className="text-xs font-semibold text-red-700">Regulatory Exposure</p>
                <p className="text-xs text-gray-600 mt-1">
                  No documented policies, no incident response plan, no evidence of a program.
                  If the SEC called today, there&apos;s nothing to show.
                </p>
              </div>
              <div className="rounded-md bg-red-50 border border-red-200 p-3">
                <p className="text-xs font-semibold text-red-700">Internal Anxiety</p>
                <p className="text-xs text-gray-600 mt-1">
                  Leadership knows this is a gap but doesn&apos;t know where to start. They&apos;re
                  not cybersecurity experts — and they shouldn&apos;t have to be.
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">The Business Outcome They Need</p>
            <p className="mt-1 text-sm text-gray-700 font-medium">
              Confidence that they can answer the next question — from an LP, a regulator, or
              their own board — without panic.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">How the Client Knows It&apos;s Working</p>
            <div className="mt-1 flex flex-wrap gap-2">
              <span className="rounded-full bg-green-50 border border-green-200 px-3 py-1 text-xs text-green-800">DDQs go out in days, not weeks</span>
              <span className="rounded-full bg-green-50 border border-green-200 px-3 py-1 text-xs text-green-800">The COO stops losing sleep over allocator calls</span>
              <span className="rounded-full bg-green-50 border border-green-200 px-3 py-1 text-xs text-green-800">They pass their first ODD review cleanly</span>
              <span className="rounded-full bg-green-50 border border-green-200 px-3 py-1 text-xs text-green-800">They can articulate their security posture to anyone who asks</span>
            </div>
          </div>

          <div className="rounded-md bg-amber-50 border border-amber-200 p-3">
            <p className="text-xs font-semibold text-amber-700">VALUE CONVERSATION TRIGGER → STAGE 2</p>
            <p className="text-sm text-amber-900 mt-1">
              The client stops reacting and starts thinking ahead. They say something like:
              &ldquo;We handled the DDQs — but what happens if we actually get examined?&rdquo; or
              &ldquo;We need to get this formalized, not just patched together.&rdquo; The shift from
              fire-fighting to institution-building is the signal.
            </p>
          </div>
        </div>
      </div>

      {/* ── Stage 2: Responding ── */}
      <div className="mt-6 rounded-xl border-2 border-db-aqua-dark overflow-hidden">
        <div className="bg-db-aqua-dark/10 px-6 py-4 border-b border-db-aqua-dark/20 flex items-center gap-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-db-aqua-dark text-white text-lg font-bold">2</span>
          <div>
            <h3 className="text-lg font-bold font-heading text-db-dark">Responding</h3>
            <p className="text-sm text-gray-500">&ldquo;We&apos;re building a real program — not just checking boxes.&rdquo;</p>
          </div>
        </div>
        <div className="px-6 py-5 space-y-5">
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Where the Client Is</p>
            <p className="mt-1 text-sm text-gray-700">
              The immediate crisis is handled. DDQs are getting done, allocators are satisfied.
              Now the firm is thinking structurally: &ldquo;We need a real cybersecurity program, not
              just a vendor who fills out questionnaires.&rdquo; The CCO wants policies they can point to.
              The COO wants a plan if something goes wrong. This is the shift from reactive to proactive —
              and it requires real behavior change inside the firm.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">What&apos;s Changing in Their Business</p>
            <div className="mt-2 grid grid-cols-3 gap-3">
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-aqua-dark">Organizational Behavior</p>
                <p className="text-xs text-gray-600 mt-1">
                  Employees are going through security training for the first time. People are changing
                  how they handle data, who they click links from, how they report concerns.
                </p>
              </div>
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-aqua-dark">Governance Structure</p>
                <p className="text-xs text-gray-600 mt-1">
                  The board is reviewing and approving cybersecurity policies for the first time. Roles
                  and responsibilities for incident response are being assigned. Someone owns this now.
                </p>
              </div>
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-aqua-dark">Regulatory Posture</p>
                <p className="text-xs text-gray-600 mt-1">
                  The firm is building the documentation that would survive an SEC exam — not because
                  one is imminent, but because they want to be ready when it comes.
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">The Business Outcome They Need</p>
            <p className="mt-1 text-sm text-gray-700 font-medium">
              A documented, board-approved cybersecurity program that would withstand regulatory scrutiny —
              and the organizational muscle memory to sustain it.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">How the Client Knows It&apos;s Working</p>
            <div className="mt-1 flex flex-wrap gap-2">
              <span className="rounded-full bg-green-50 border border-green-200 px-3 py-1 text-xs text-green-800">Employees complete training without being chased</span>
              <span className="rounded-full bg-green-50 border border-green-200 px-3 py-1 text-xs text-green-800">Board signs off on policies as part of normal governance</span>
              <span className="rounded-full bg-green-50 border border-green-200 px-3 py-1 text-xs text-green-800">The IR plan has named owners who know their role</span>
              <span className="rounded-full bg-green-50 border border-green-200 px-3 py-1 text-xs text-green-800">The CCO can walk a regulator through the program confidently</span>
            </div>
          </div>

          <div className="rounded-md bg-amber-50 border border-amber-200 p-3">
            <p className="text-xs font-semibold text-amber-700">VALUE CONVERSATION TRIGGER → STAGE 3</p>
            <p className="text-sm text-amber-900 mt-1">
              The client has the program on paper and feels good about their exam readiness. Then
              they ask the next question: &ldquo;But does it actually work? If we got hit with ransomware
              tomorrow, would any of this hold up?&rdquo; The shift from documentation to validation is
              the signal. A peer firm breach often accelerates this.
            </p>
          </div>
        </div>
      </div>

      {/* ── Stage 3: Confident ── */}
      <div className="mt-6 rounded-xl border-2 border-db-aqua overflow-hidden">
        <div className="bg-db-aqua/10 px-6 py-4 border-b border-db-aqua/20 flex items-center gap-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-db-aqua text-white text-lg font-bold">3</span>
          <div>
            <h3 className="text-lg font-bold font-heading text-db-dark">Confident</h3>
            <p className="text-sm text-gray-500">&ldquo;We can prove our program works — to ourselves, our investors, and regulators.&rdquo;</p>
          </div>
        </div>
        <div className="px-6 py-5 space-y-5">
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Where the Client Is</p>
            <p className="mt-1 text-sm text-gray-700">
              The firm has moved from &ldquo;we have a program&rdquo; to &ldquo;we&apos;ve tested it and it works.&rdquo;
              They&apos;ve run a pen test and remediated findings. They&apos;ve done a tabletop exercise
              and their leadership knows what to do in a crisis. The program isn&apos;t just documented —
              it&apos;s been stress-tested. This is the stage where the firm develops genuine confidence,
              not just compliance comfort.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">What&apos;s Changing in Their Business</p>
            <div className="mt-2 grid grid-cols-3 gap-3">
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-aqua-dark">Security Culture</p>
                <p className="text-xs text-gray-600 mt-1">
                  Phishing click rates are dropping. Employees report suspicious activity without being
                  prompted. Security isn&apos;t a top-down mandate — it&apos;s becoming part of how the firm operates.
                </p>
              </div>
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-aqua-dark">Risk Visibility</p>
                <p className="text-xs text-gray-600 mt-1">
                  Leadership has a real-time view of the firm&apos;s risk posture. They know their
                  vulnerabilities, they&apos;ve seen them remediated, and they can track progress over time.
                </p>
              </div>
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-aqua-dark">Crisis Readiness</p>
                <p className="text-xs text-gray-600 mt-1">
                  The leadership team has rehearsed an incident scenario. They know who calls whom,
                  what gets communicated to LPs, and how to contain damage. The plan is muscle memory, not paper.
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">The Business Outcome They Need</p>
            <p className="mt-1 text-sm text-gray-700 font-medium">
              Evidence-based confidence that their program can withstand a real attack — and the ability
              to show that evidence to anyone who asks.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">How the Client Knows It&apos;s Working</p>
            <div className="mt-1 flex flex-wrap gap-2">
              <span className="rounded-full bg-green-50 border border-green-200 px-3 py-1 text-xs text-green-800">Risk score improving quarter over quarter</span>
              <span className="rounded-full bg-green-50 border border-green-200 px-3 py-1 text-xs text-green-800">Pen test findings are shrinking, not growing</span>
              <span className="rounded-full bg-green-50 border border-green-200 px-3 py-1 text-xs text-green-800">Leadership can run the IR playbook without prompting</span>
              <span className="rounded-full bg-green-50 border border-green-200 px-3 py-1 text-xs text-green-800">Phishing click rates below industry average</span>
            </div>
          </div>

          <div className="rounded-md bg-amber-50 border border-amber-200 p-3">
            <p className="text-xs font-semibold text-amber-700">VALUE CONVERSATION TRIGGER → STAGE 4</p>
            <p className="text-sm text-amber-900 mt-1">
              The client realizes they&apos;re ahead of most of their peers. They start saying things
              like: &ldquo;Our program is solid — but do our LPs know that?&rdquo; or &ldquo;We&apos;re
              spending all this money on security — how do we make it work for us in the fundraise?&rdquo;
              The shift from defense to leverage is the signal.
            </p>
          </div>
        </div>
      </div>

      {/* ── Stage 4: Resilient ── */}
      <div className="mt-6 rounded-xl border-2 border-db-orange/60 overflow-hidden">
        <div className="bg-orange-50 px-6 py-4 border-b border-db-orange/20 flex items-center gap-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-db-orange/80 text-white text-lg font-bold">4</span>
          <div>
            <h3 className="text-lg font-bold font-heading text-db-dark">Resilient</h3>
            <p className="text-sm text-gray-500">&ldquo;Security is woven into how we operate — not a separate initiative.&rdquo;</p>
          </div>
        </div>
        <div className="px-6 py-5 space-y-5">
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Where the Client Is</p>
            <p className="mt-1 text-sm text-gray-700">
              Cybersecurity is no longer a project — it&apos;s an operating discipline. The firm has monitoring
              in place, someone to call at 2am, and a vendor risk program that extends protection to their
              supply chain. They&apos;re not just responding to threats — they&apos;re anticipating them.
              The board gets quarterly security briefings as part of normal governance. New hires go
              through security onboarding automatically.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">What&apos;s Changing in Their Business</p>
            <div className="mt-2 grid grid-cols-3 gap-3">
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-orange">Operational Integration</p>
                <p className="text-xs text-gray-600 mt-1">
                  Security is embedded in vendor onboarding, employee lifecycle, and technology decisions.
                  It&apos;s not a separate workstream — it&apos;s how the firm operates.
                </p>
              </div>
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-orange">Continuous Improvement</p>
                <p className="text-xs text-gray-600 mt-1">
                  The program evolves with the threat landscape. New regulations, new attack vectors,
                  new technologies — the firm adapts without scrambling.
                </p>
              </div>
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-orange">Extended Coverage</p>
                <p className="text-xs text-gray-600 mt-1">
                  Third-party vendors are assessed and monitored. The firm&apos;s security perimeter
                  extends beyond its own walls — a top priority for regulators and allocators.
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">The Business Outcome They Need</p>
            <p className="mt-1 text-sm text-gray-700 font-medium">
              An adaptive security program that keeps pace with the firm&apos;s growth, the threat landscape,
              and regulatory evolution — without requiring the firm to become a cybersecurity company.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">How the Client Knows It&apos;s Working</p>
            <div className="mt-1 flex flex-wrap gap-2">
              <span className="rounded-full bg-green-50 border border-green-200 px-3 py-1 text-xs text-green-800">Board receives security updates as normal governance</span>
              <span className="rounded-full bg-green-50 border border-green-200 px-3 py-1 text-xs text-green-800">Vendor risk assessments cover all critical third parties</span>
              <span className="rounded-full bg-green-50 border border-green-200 px-3 py-1 text-xs text-green-800">New threats get addressed proactively, not reactively</span>
              <span className="rounded-full bg-green-50 border border-green-200 px-3 py-1 text-xs text-green-800">No increase in internal headcount despite program maturity</span>
            </div>
          </div>

          <div className="rounded-md bg-amber-50 border border-amber-200 p-3">
            <p className="text-xs font-semibold text-amber-700">VALUE CONVERSATION TRIGGER → STAGE 5</p>
            <p className="text-sm text-amber-900 mt-1">
              The client starts treating their security program as an asset, not a cost. They
              want to know: &ldquo;How do we compare to other firms our size?&rdquo; and &ldquo;Can we use
              this in our investor materials?&rdquo; The shift from operational resilience to strategic
              positioning is the signal.
            </p>
          </div>
        </div>
      </div>

      {/* ── Stage 5: Differentiated ── */}
      <div className="mt-6 rounded-xl border-2 border-db-orange overflow-hidden">
        <div className="bg-orange-50 px-6 py-4 border-b border-db-orange/20 flex items-center gap-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-db-orange text-white text-lg font-bold">5</span>
          <div>
            <h3 className="text-lg font-bold font-heading text-db-dark">Differentiated</h3>
            <p className="text-sm text-gray-500">&ldquo;Our security program wins us capital. It&apos;s a competitive advantage.&rdquo;</p>
          </div>
        </div>
        <div className="px-6 py-5 space-y-5">
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Where the Client Is</p>
            <p className="mt-1 text-sm text-gray-700">
              The firm has a mature, tested, continuously improving security program. Now the question
              is no longer &ldquo;are we protected?&rdquo; but &ldquo;how do we use this to win?&rdquo; Allocators
              are comparing managers on operational resilience. The firm with the best story wins the
              allocation. Cybersecurity has transformed from a cost center into a revenue driver.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">What&apos;s Changing in Their Business</p>
            <div className="mt-2 grid grid-cols-3 gap-3">
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-orange">Capital Narrative</p>
                <p className="text-xs text-gray-600 mt-1">
                  The security program is part of the fundraise pitch. LP materials include cyber
                  posture data. The firm proactively tells its security story rather than waiting to be asked.
                </p>
              </div>
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-orange">Peer Leadership</p>
                <p className="text-xs text-gray-600 mt-1">
                  The firm benchmarks in the top quartile against 1,200+ peers. They can show
                  allocators exactly where they stand — with data, not anecdotes.
                </p>
              </div>
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-orange">Strategic Identity</p>
                <p className="text-xs text-gray-600 mt-1">
                  The firm&apos;s leadership thinks of operational resilience as a differentiator.
                  Cybersecurity is part of how they talk about themselves to the market.
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">The Business Outcome They Need</p>
            <p className="mt-1 text-sm text-gray-700 font-medium">
              A provable competitive advantage — data-backed evidence that their operational resilience
              is better than peers, communicated in a way that wins allocator confidence and capital.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">How the Client Knows It&apos;s Working</p>
            <div className="mt-1 flex flex-wrap gap-2">
              <span className="rounded-full bg-green-50 border border-green-200 px-3 py-1 text-xs text-green-800">LP feedback specifically cites the security program as a strength</span>
              <span className="rounded-full bg-green-50 border border-green-200 px-3 py-1 text-xs text-green-800">Top-quartile peer benchmarking position</span>
              <span className="rounded-full bg-green-50 border border-green-200 px-3 py-1 text-xs text-green-800">Allocators complete ODD faster because the story is clear</span>
              <span className="rounded-full bg-green-50 border border-green-200 px-3 py-1 text-xs text-green-800">Security program cited in successful fundraise materials</span>
            </div>
          </div>
        </div>
      </div>

      {/* The underlying constant */}
      <SectionHeading>The Constant: Scale Without Headcount</SectionHeading>
      <div className="rounded-lg border-l-4 border-db-dark bg-gray-50 p-5">
        <p className="text-sm text-gray-700 leading-relaxed">
          This isn&apos;t a stage — it&apos;s the underlying value proposition that runs through the
          entire journey. At every stage of their evolution, the client is getting enterprise-grade
          security capability without hiring a CISO or building an internal security team. As their
          firm grows from $500M to $5B AUM, the program scales with them. This should be reinforced
          at every touchpoint: the alternative is a $300K+ CISO hire, a team of analysts, and the
          ongoing management overhead that comes with it.
        </p>
      </div>

      {/* What this means for the RM */}
      <SectionHeading>What This Means for the RM</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed mb-4">
        The RM&apos;s job is to understand where the client is in their business evolution — not
        to track whether we&apos;ve delivered our internal milestones. Every conversation should
        be oriented around the client&apos;s reality, not our checklist.
      </p>

      <div className="space-y-4">
        <div className="rounded-lg border border-gray-200 overflow-hidden">
          <div className="bg-gray-50 px-5 py-3">
            <p className="text-sm font-semibold text-db-dark">Instead of Asking This...</p>
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
      </div>

      {/* Journey at a glance */}
      <SectionHeading>The Value Journey at a Glance</SectionHeading>
      <div className="rounded-md border border-gray-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-3 py-2 text-left font-medium text-gray-600">Stage</th>
              <th className="px-3 py-2 text-left font-medium text-gray-600">Client&apos;s Reality</th>
              <th className="px-3 py-2 text-left font-medium text-gray-600">Business Outcome</th>
              <th className="px-3 py-2 text-left font-medium text-gray-600">They Say...</th>
              <th className="px-3 py-2 text-left font-medium text-gray-600">Evolution Signal</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            <tr>
              <td className="px-3 py-2 font-medium text-db-dark">1. Exposed</td>
              <td className="px-3 py-2 text-gray-600 text-xs">Can&apos;t answer LP/regulator questions</td>
              <td className="px-3 py-2 text-gray-600 text-xs">Immediate credibility with allocators</td>
              <td className="px-3 py-2 text-gray-600 text-xs italic">&ldquo;DDQ season is killing us&rdquo;</td>
              <td className="px-3 py-2 text-gray-600 text-xs">Shifts from fire-fighting to institution-building</td>
            </tr>
            <tr className="bg-gray-50/50">
              <td className="px-3 py-2 font-medium text-db-dark">2. Responding</td>
              <td className="px-3 py-2 text-gray-600 text-xs">Building a real program, changing behavior</td>
              <td className="px-3 py-2 text-gray-600 text-xs">Exam-ready, documented program</td>
              <td className="px-3 py-2 text-gray-600 text-xs italic">&ldquo;What if the SEC shows up?&rdquo;</td>
              <td className="px-3 py-2 text-gray-600 text-xs">Asks &ldquo;does it actually work?&rdquo;</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-medium text-db-dark">3. Confident</td>
              <td className="px-3 py-2 text-gray-600 text-xs">Program tested, culture shifting</td>
              <td className="px-3 py-2 text-gray-600 text-xs">Evidence-based security confidence</td>
              <td className="px-3 py-2 text-gray-600 text-xs italic">&ldquo;We proved we can handle it&rdquo;</td>
              <td className="px-3 py-2 text-gray-600 text-xs">Wants to use program as an asset</td>
            </tr>
            <tr className="bg-gray-50/50">
              <td className="px-3 py-2 font-medium text-db-dark">4. Resilient</td>
              <td className="px-3 py-2 text-gray-600 text-xs">Security embedded in operations</td>
              <td className="px-3 py-2 text-gray-600 text-xs">Adaptive, scalable security posture</td>
              <td className="px-3 py-2 text-gray-600 text-xs italic">&ldquo;It just runs — we don&apos;t think about it&rdquo;</td>
              <td className="px-3 py-2 text-gray-600 text-xs">Asks &ldquo;how do we compare?&rdquo;</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-medium text-db-dark">5. Differentiated</td>
              <td className="px-3 py-2 text-gray-600 text-xs">Security drives capital decisions</td>
              <td className="px-3 py-2 text-gray-600 text-xs">Competitive advantage with allocators</td>
              <td className="px-3 py-2 text-gray-600 text-xs italic">&ldquo;Our security story wins us capital&rdquo;</td>
              <td className="px-3 py-2 text-gray-600 text-xs">Continuous partnership &amp; evolution</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Key principles */}
      <SectionHeading>Key Principles</SectionHeading>
      <div className="grid grid-cols-2 gap-4">
        <CharacteristicCard
          title="Map Their Journey, Not Yours"
          description="Your internal milestones (assessment complete, platform adopted, QBR delivered) are your service blueprint. The client's journey is about their business evolution — from exposed to differentiated. Track both, but never confuse them."
        />
        <CharacteristicCard
          title="Value = Business Change, Not Feature Adoption"
          description="A client who uses the platform daily but hasn't changed how their firm operates hasn't realized value. Value is the COO sleeping better, the DDQ going out in 2 days, the allocator saying yes. Measure what changed in their business."
        />
        <CharacteristicCard
          title="Listen for Evolution Signals"
          description="The bridge between stages isn't a deliverable you complete — it's a shift in how the client thinks about their business. Listen for the questions they start asking. When they stop asking 'are we compliant?' and start asking 'are we protected?' — that's the signal."
        />
        <CharacteristicCard
          title="Behavior Change Takes Time"
          description="Technology adoption is fast. Organizational behavior change is slow. The real journey is getting employees to change habits, boards to engage with security governance, and leadership to think of cyber as a business issue. Be patient with this — it's where the actual value lives."
        />
      </div>

      <DrawbridgeAngle>
        <p>
          This revised journey is built on a simple insight: <strong>the service blueprint is not the
          customer journey</strong>. Our implementation phases, adoption thresholds, and QBR cadences are
          how we operate — and we need them. But the client doesn&apos;t experience our process. They
          experience their own business evolution: from feeling exposed, to building a program, to
          gaining confidence, to achieving resilience, to using security as a competitive weapon.
        </p>
        <p>
          Every RM conversation should be oriented around where the client is in <em>their</em> evolution —
          not where we are in our delivery checklist. The RM who asks &ldquo;has your firm&apos;s behavior
          actually changed?&rdquo; is having a strategic conversation. The RM who asks &ldquo;did we complete
          the assessment?&rdquo; is reading from the blueprint. Both matter — but only one builds the kind
          of trust that makes renewals obvious.
        </p>
      </DrawbridgeAngle>
    </>
  );
}
