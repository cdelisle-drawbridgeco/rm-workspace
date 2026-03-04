'use client';

import { HeroSection, SectionHeading, SubSection, DrawbridgeAngle, LastUpdated } from '../../components/shared-ui';

export default function OutcomeFramework() {
  return (
    <>
      <HeroSection
        icon="🎯"
        title="Business Outcome Framework"
        subtitle="Stop selling features. Start solving business problems. Six outcomes that define the value we deliver — in our clients' language."
      />
      <LastUpdated date="February 24, 2026 at 9:04 PM" />

      {/* Philosophy */}
      <SectionHeading>Why Outcomes, Not Features</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed">
        No client wakes up thinking &ldquo;I need a cybersecurity assessment.&rdquo; They wake up
        thinking &ldquo;How do I keep my investors confident?&rdquo; or &ldquo;How do I make sure
        we pass our next SEC exam?&rdquo; or &ldquo;How do I protect what we&apos;ve built?&rdquo;
      </p>
      <p className="mt-3 text-sm text-gray-700 leading-relaxed">
        When we talk about features and deliverables — assessments, policies, monitoring —
        we&apos;re speaking <em>our</em> language. When we talk about outcomes — capital confidence,
        regulatory readiness, operational resilience — we&apos;re speaking <em>their</em> language.
        The shift is subtle but powerful: it moves us from vendor to strategic partner.
      </p>
      <p className="mt-3 text-sm text-gray-700 leading-relaxed">
        This framework defines <strong>six business outcomes</strong> that every Drawbridge
        engagement should map to. Use them in renewal conversations, QBRs, proposals, and
        internal planning. Over time, we&apos;ll layer in detailed value narratives and SKU
        mappings underneath each outcome — but the outcomes themselves are the foundation.
      </p>

      {/* How to Use */}
      <SubSection icon="💡" title="How to Use This Framework">
        <p>
          <strong>In renewal conversations:</strong> &ldquo;This year, we helped you achieve
          [Outcome] by [specific evidence]. Here&apos;s how we&apos;ll continue driving that
          value next year.&rdquo;
        </p>
        <p>
          <strong>In proposals:</strong> Lead with the outcome, then explain how
          specific services deliver it. Not &ldquo;we&apos;ll provide 4 assessments and 12 policy
          reviews&rdquo; — instead, &ldquo;we&apos;ll ensure you&apos;re exam-ready year-round, which
          includes...&rdquo;
        </p>
        <p>
          <strong>In QBRs:</strong> Organize the review around outcomes, not task lists.
          Show progress against each outcome with evidence and metrics.
        </p>
        <p>
          <strong>In your client&apos;s language:</strong> Every outcome below includes a
          &ldquo;how your client says it&rdquo; section. Listen for these phrases — they&apos;re buying
          signals that map directly to an outcome you can solve.
        </p>
      </SubSection>

      {/* Outcome 1 */}
      <SectionHeading>The Six Outcomes</SectionHeading>

      {/* At-a-glance overview cards */}
      <div className="mt-4 grid grid-cols-3 gap-3">
        {[
          { num: '1', title: 'Raise & Retain Capital with Confidence', desc: 'Investor trust through operational excellence' },
          { num: '2', title: 'Navigate Regulatory Complexity', desc: 'Stay ahead of evolving regulations' },
          { num: '3', title: 'Protect the Firm from Disruption', desc: 'Be ready for the incident that hasn\u2019t happened yet' },
          { num: '4', title: 'Make Security a Competitive Advantage', desc: 'Turn a cost center into a differentiator' },
          { num: '5', title: 'Scale Without Adding Headcount', desc: 'Enterprise security without the enterprise team' },
          { num: '6', title: 'Get AI-Ready, Stay AI-Safe', desc: 'Adopt AI with confidence — training, assessments & governance' },
        ].map((o) => (
          <div key={o.num} className="rounded-lg border border-db-aqua/30 bg-db-aqua/5 p-4 text-center">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-db-aqua text-white text-sm font-bold">{o.num}</span>
            <p className="mt-2 text-sm font-bold font-heading text-db-dark leading-snug">{o.title}</p>
            <p className="mt-1 text-xs text-gray-500">{o.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-xl border-2 border-db-aqua bg-white overflow-hidden">
        <div className="bg-db-aqua/10 px-6 py-4 border-b border-db-aqua/20">
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-db-aqua/20 text-lg font-bold text-db-aqua-dark">1</span>
            <div>
              <h3 className="text-lg font-bold font-heading text-db-dark">Raise &amp; Retain Capital with Confidence</h3>
              <p className="text-sm text-gray-500 mt-0.5">Investor trust is earned through operational excellence — not just performance.</p>
            </div>
          </div>
        </div>
        <div className="px-6 py-5 space-y-4">
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Why It Matters</p>
            <p className="mt-1 text-sm text-gray-700 leading-relaxed">
              Allocators commit capital to managers they trust — and trust increasingly requires
              demonstrating operational and cybersecurity maturity. A single failed DDQ response,
              an incomplete ODD review, or a data breach headline can cost a firm hundreds of millions
              in commitments. For PE firms in fundraising cycles and hedge funds with open-ended
              redemption structures, investor confidence is existential.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">The Business Impact</p>
            <ul className="mt-1 text-sm text-gray-700 space-y-1">
              <li>&#8226; Faster DDQ turnaround with higher-quality, consistent responses</li>
              <li>&#8226; Smoother LP due diligence cycles with fewer follow-up requests</li>
              <li>&#8226; Confidence to pursue new allocator relationships knowing the program is solid</li>
              <li>&#8226; Reduced risk of capital loss from operational deficiency concerns</li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-db-aqua-dark uppercase tracking-wide">How Your Client Says It</p>
            <div className="mt-1 flex flex-wrap gap-2">
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">&ldquo;Our LPs keep asking about cybersecurity&rdquo;</span>
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">&ldquo;DDQ season is killing us&rdquo;</span>
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">&ldquo;We&apos;re raising a new fund&rdquo;</span>
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">&ldquo;Our consultant flagged our security program&rdquo;</span>
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">&ldquo;We need to look institutional&rdquo;</span>
            </div>
          </div>
          <div className="rounded-md bg-gray-50 border border-gray-100 p-3">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Value Narratives &amp; SKU Mapping</p>
            <p className="mt-1 text-xs text-gray-400 italic">Coming soon — detailed narratives and service mapping will be added here.</p>
          </div>
        </div>
      </div>

      {/* Outcome 2 */}
      <div className="mt-6 rounded-xl border-2 border-db-aqua bg-white overflow-hidden">
        <div className="bg-db-aqua/10 px-6 py-4 border-b border-db-aqua/20">
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-db-aqua/20 text-lg font-bold text-db-aqua-dark">2</span>
            <div>
              <h3 className="text-lg font-bold font-heading text-db-dark">Navigate Regulatory Complexity</h3>
              <p className="text-sm text-gray-500 mt-0.5">Stay ahead of evolving regulations without building a compliance department.</p>
            </div>
          </div>
        </div>
        <div className="px-6 py-5 space-y-4">
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Why It Matters</p>
            <p className="mt-1 text-sm text-gray-700 leading-relaxed">
              The regulatory landscape is expanding and accelerating — Reg S-P amendments, SEC exam
              priorities, DORA in Europe, state privacy laws, and new disclosure requirements.
              Keeping up is a full-time job that most alternative managers don&apos;t have the headcount
              for. The cost of non-compliance isn&apos;t just fines — it&apos;s reputational damage,
              LP concern, and management distraction.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">The Business Impact</p>
            <ul className="mt-1 text-sm text-gray-700 space-y-1">
              <li>&#8226; Exam-ready posture maintained year-round — not scrambled before a visit</li>
              <li>&#8226; Proactive compliance with new rules before enforcement begins</li>
              <li>&#8226; Reduced legal and consulting spend on regulatory interpretation</li>
              <li>&#8226; Confidence that the firm won&apos;t be caught off guard by a rule change</li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-db-aqua-dark uppercase tracking-wide">How Your Client Says It</p>
            <div className="mt-1 flex flex-wrap gap-2">
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">&ldquo;What do the new SEC rules mean for us?&rdquo;</span>
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">&ldquo;We got an exam notification&rdquo;</span>
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">&ldquo;Our outside counsel says we need to update our policies&rdquo;</span>
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">&ldquo;We have European investors now&rdquo;</span>
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">&ldquo;We just want to stay out of trouble&rdquo;</span>
            </div>
          </div>
          <div className="rounded-md bg-gray-50 border border-gray-100 p-3">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Value Narratives &amp; SKU Mapping</p>
            <p className="mt-1 text-xs text-gray-400 italic">Coming soon — detailed narratives and service mapping will be added here.</p>
          </div>
        </div>
      </div>

      {/* Outcome 3 */}
      <div className="mt-6 rounded-xl border-2 border-db-aqua bg-white overflow-hidden">
        <div className="bg-db-aqua/10 px-6 py-4 border-b border-db-aqua/20">
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-db-aqua/20 text-lg font-bold text-db-aqua-dark">3</span>
            <div>
              <h3 className="text-lg font-bold font-heading text-db-dark">Protect the Firm from Disruption</h3>
              <p className="text-sm text-gray-500 mt-0.5">Be ready for the incident that hasn&apos;t happened yet — and recover fast when it does.</p>
            </div>
          </div>
        </div>
        <div className="px-6 py-5 space-y-4">
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Why It Matters</p>
            <p className="mt-1 text-sm text-gray-700 leading-relaxed">
              Cyber incidents aren&apos;t theoretical — they&apos;re statistical certainties. The question
              is not <em>if</em> but <em>when</em> and <em>how bad</em>. A ransomware attack can
              shut down operations for weeks. A BEC scam can move millions in minutes. A data
              breach can trigger regulatory action, LP redemptions, and lasting reputational
              harm. The firms that survive these events are the ones that prepared for them.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">The Business Impact</p>
            <ul className="mt-1 text-sm text-gray-700 space-y-1">
              <li>&#8226; Reduced likelihood and blast radius of security incidents</li>
              <li>&#8226; Faster detection and response when incidents occur</li>
              <li>&#8226; Tested recovery procedures that actually work under pressure</li>
              <li>&#8226; Lower financial and reputational cost of incidents</li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-db-aqua-dark uppercase tracking-wide">How Your Client Says It</p>
            <div className="mt-1 flex flex-wrap gap-2">
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">&ldquo;What happens if we get hit?&rdquo;</span>
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">&ldquo;Our peer firm just had a breach&rdquo;</span>
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">&ldquo;We need someone to call at 2am&rdquo;</span>
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">&ldquo;We&apos;re worried about ransomware&rdquo;</span>
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">&ldquo;Do we have a plan if something happens?&rdquo;</span>
            </div>
          </div>
          <div className="rounded-md bg-gray-50 border border-gray-100 p-3">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Value Narratives &amp; SKU Mapping</p>
            <p className="mt-1 text-xs text-gray-400 italic">Coming soon — detailed narratives and service mapping will be added here.</p>
          </div>
        </div>
      </div>

      {/* Outcome 4 */}
      <div className="mt-6 rounded-xl border-2 border-db-aqua bg-white overflow-hidden">
        <div className="bg-db-aqua/10 px-6 py-4 border-b border-db-aqua/20">
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-db-aqua/20 text-lg font-bold text-db-aqua-dark">4</span>
            <div>
              <h3 className="text-lg font-bold font-heading text-db-dark">Make Security a Competitive Advantage</h3>
              <p className="text-sm text-gray-500 mt-0.5">Turn a cost center into a differentiator that wins capital, talent, and trust.</p>
            </div>
          </div>
        </div>
        <div className="px-6 py-5 space-y-4">
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Why It Matters</p>
            <p className="mt-1 text-sm text-gray-700 leading-relaxed">
              Most firms think of cybersecurity as a cost — something they have to do. The
              best-run firms think of it as a competitive weapon. In a market where allocators
              are choosing between managers with similar strategies and returns, the firm with
              the best operational infrastructure wins the allocation. A mature, well-documented
              security program signals professionalism, institutional quality, and respect for
              investor capital.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">The Business Impact</p>
            <ul className="mt-1 text-sm text-gray-700 space-y-1">
              <li>&#8226; Differentiation in competitive fundraising situations</li>
              <li>&#8226; Faster LP onboarding with pre-built compliance evidence</li>
              <li>&#8226; Ability to win larger, more sophisticated institutional allocators</li>
              <li>&#8226; Talent attraction — top candidates want to join well-run firms</li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-db-aqua-dark uppercase tracking-wide">How Your Client Says It</p>
            <div className="mt-1 flex flex-wrap gap-2">
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">&ldquo;We want to look best-in-class&rdquo;</span>
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">&ldquo;How do we compare to our peers?&rdquo;</span>
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">&ldquo;We&apos;re going after bigger LPs&rdquo;</span>
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">&ldquo;Our competitor just got SOC 2 certified&rdquo;</span>
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">&ldquo;We need to level up our operations&rdquo;</span>
            </div>
          </div>
          <div className="rounded-md bg-gray-50 border border-gray-100 p-3">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Value Narratives &amp; SKU Mapping</p>
            <p className="mt-1 text-xs text-gray-400 italic">Coming soon — detailed narratives and service mapping will be added here.</p>
          </div>
        </div>
      </div>

      {/* Outcome 5 */}
      <div className="mt-6 rounded-xl border-2 border-db-aqua bg-white overflow-hidden">
        <div className="bg-db-aqua/10 px-6 py-4 border-b border-db-aqua/20">
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-db-aqua/20 text-lg font-bold text-db-aqua-dark">5</span>
            <div>
              <h3 className="text-lg font-bold font-heading text-db-dark">Scale Without Adding Headcount</h3>
              <p className="text-sm text-gray-500 mt-0.5">Grow the firm, launch funds, and expand operations without building an internal security team.</p>
            </div>
          </div>
        </div>
        <div className="px-6 py-5 space-y-4">
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Why It Matters</p>
            <p className="mt-1 text-sm text-gray-700 leading-relaxed">
              Alternative managers are lean by design — every headcount dollar that goes to
              non-investment functions is a dollar not generating alpha. But as firms grow,
              the security demands grow with them: more employees, more vendors, more data,
              more regulatory surface area. Hiring a CISO ($300K–$500K+ fully loaded) plus a
              security team is prohibitive for most firms. They need enterprise-grade security
              that scales with their business — without the enterprise headcount.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">The Business Impact</p>
            <ul className="mt-1 text-sm text-gray-700 space-y-1">
              <li>&#8226; Full security program at a fraction of the cost of building in-house</li>
              <li>&#8226; Instant access to specialized expertise (IR, pen testing, regulatory) on demand</li>
              <li>&#8226; Security that grows automatically with new funds, offices, and portfolio companies</li>
              <li>&#8226; Free up COO / CCO time to focus on running the business</li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-db-aqua-dark uppercase tracking-wide">How Your Client Says It</p>
            <div className="mt-1 flex flex-wrap gap-2">
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">&ldquo;We don&apos;t have a CISO and don&apos;t want to hire one&rdquo;</span>
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">&ldquo;Our COO is stretched thin&rdquo;</span>
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">&ldquo;We just launched a new fund&rdquo;</span>
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">&ldquo;We&apos;re opening a London office&rdquo;</span>
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">&ldquo;We need this handled — I don&apos;t have the bandwidth&rdquo;</span>
            </div>
          </div>
          <div className="rounded-md bg-gray-50 border border-gray-100 p-3">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Value Narratives &amp; SKU Mapping</p>
            <p className="mt-1 text-xs text-gray-400 italic">Coming soon — detailed narratives and service mapping will be added here.</p>
          </div>
        </div>
      </div>

      {/* Outcome 6 */}
      <div className="mt-6 rounded-xl border-2 border-db-aqua bg-white overflow-hidden">
        <div className="bg-db-aqua/10 px-6 py-4 border-b border-db-aqua/20">
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-db-aqua/20 text-lg font-bold text-db-aqua-dark">6</span>
            <div>
              <h3 className="text-lg font-bold font-heading text-db-dark">Get AI-Ready, Stay AI-Safe</h3>
              <p className="text-sm text-gray-500 mt-0.5">Adopt AI with confidence — with the training, assessments, and governance to minimize risk.</p>
            </div>
          </div>
        </div>
        <div className="px-6 py-5 space-y-4">
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Why It Matters</p>
            <p className="mt-1 text-sm text-gray-700 leading-relaxed">
              Every firm is being asked about AI — by LPs, by regulators, and by their own teams.
              Employees are already using AI tools, often without oversight. The SEC is paying
              attention to AI governance, and allocators are starting to ask &ldquo;what&apos;s your AI
              policy?&rdquo; in DDQs. Firms that wait to address AI readiness will find themselves
              reacting to incidents, regulatory gaps, and reputational risk. The firms that get
              ahead will have clear policies, trained teams, and a framework for evaluating and
              governing AI tools — turning a source of anxiety into a managed capability.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">The Business Impact</p>
            <ul className="mt-1 text-sm text-gray-700 space-y-1">
              <li>&#8226; Employee AI training that reduces risk of data leakage and misuse</li>
              <li>&#8226; LLM and AI tool assessments that identify exposure before it becomes a problem</li>
              <li>&#8226; Clear, documented AI acceptable use policies that satisfy regulators and LPs</li>
              <li>&#8226; Governance framework for evaluating, approving, and monitoring AI tools</li>
              <li>&#8226; Confidence to adopt AI where it adds value — without creating new attack surfaces</li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-db-aqua-dark uppercase tracking-wide">How Your Client Says It</p>
            <div className="mt-1 flex flex-wrap gap-2">
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">&ldquo;Our team is using ChatGPT — should we be worried?&rdquo;</span>
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">&ldquo;LPs are asking about our AI policy&rdquo;</span>
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">&ldquo;We don&apos;t know what tools people are using&rdquo;</span>
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">&ldquo;The SEC mentioned AI in their exam priorities&rdquo;</span>
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">&ldquo;We want to use AI but don&apos;t know where to start&rdquo;</span>
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">What This Looks Like</p>
            <div className="mt-2 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="rounded-md border border-gray-200 bg-gray-50 p-3">
                <p className="text-xs font-semibold text-db-aqua-dark">AI Training</p>
                <p className="mt-1 text-xs text-gray-600">
                  Role-based training for employees on safe AI usage, data handling with AI tools,
                  and recognizing AI-related risks like prompt injection and data leakage.
                </p>
              </div>
              <div className="rounded-md border border-gray-200 bg-gray-50 p-3">
                <p className="text-xs font-semibold text-db-aqua-dark">LLM &amp; Tool Assessments</p>
                <p className="mt-1 text-xs text-gray-600">
                  Evaluate which AI tools are in use (sanctioned and shadow), assess data exposure
                  risk, review vendor security posture, and map AI to existing risk frameworks.
                </p>
              </div>
              <div className="rounded-md border border-gray-200 bg-gray-50 p-3">
                <p className="text-xs font-semibold text-db-aqua-dark">Policy &amp; Governance</p>
                <p className="mt-1 text-xs text-gray-600">
                  Create and maintain AI acceptable use policies, establish approval workflows for
                  new AI tools, and build ongoing monitoring and review cadences.
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-md bg-gray-50 border border-gray-100 p-3">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Value Narratives &amp; SKU Mapping</p>
            <p className="mt-1 text-xs text-gray-400 italic">Coming soon — detailed narratives and service mapping will be added here.</p>
          </div>
        </div>
      </div>

      {/* Using the Framework */}
      <SectionHeading>Putting It All Together</SectionHeading>

      <SubSection icon="🗣️" title="The Outcome-Led Conversation">
        <p>
          Here&apos;s the shift in practice. Instead of walking into a renewal and saying:
        </p>
        <div className="rounded-md bg-red-50 border border-red-200 p-3 mt-2">
          <p className="text-sm text-red-700 italic">
            &ldquo;This year we completed 4 assessments, updated 12 policies, ran 2 tabletop
            exercises, and responded to 47 DDQs. Here&apos;s the renewal for the same scope.&rdquo;
          </p>
        </div>
        <p className="mt-3">You say:</p>
        <div className="rounded-md bg-green-50 border border-green-200 p-3 mt-2">
          <p className="text-sm text-green-700 italic">
            &ldquo;This year, we helped you raise your new fund with confidence — your ODD
            reviews went smoothly and your DDQ turnaround time dropped from 3 weeks to 5
            days. We kept you exam-ready with current policies and a tested IR plan. We
            got ahead of AI risk with training and policies before the SEC asked about it.
            And we did it all without you having to hire a single security person. Looking
            ahead, here&apos;s how we continue driving those outcomes as you grow.&rdquo;
          </p>
        </div>
        <p className="mt-3">
          Same services. Same deliverables. Completely different conversation. The first
          sounds like a vendor reporting tasks. The second sounds like a partner
          demonstrating impact.
        </p>
      </SubSection>

      <SubSection icon="🔄" title="Mapping Outcomes to Client Priorities">
        <p>
          Not every outcome matters equally to every client. Part of being a strategic
          advisor is knowing which outcomes to lead with based on who you&apos;re talking to:
        </p>
        <div className="mt-3 rounded-md border border-gray-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left font-medium text-gray-600">Client Type</th>
                <th className="px-4 py-2 text-left font-medium text-gray-600">Lead With</th>
                <th className="px-4 py-2 text-left font-medium text-gray-600">Support With</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="px-4 py-2 font-medium text-db-dark">Hedge Fund (fundraising)</td>
                <td className="px-4 py-2 text-gray-600">1. Raise &amp; Retain Capital</td>
                <td className="px-4 py-2 text-gray-600">2. Regulatory + 4. Competitive Advantage</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium text-db-dark">Hedge Fund (steady state)</td>
                <td className="px-4 py-2 text-gray-600">2. Regulatory Complexity</td>
                <td className="px-4 py-2 text-gray-600">3. Protection + 6. AI Readiness</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium text-db-dark">PE Firm (GP level)</td>
                <td className="px-4 py-2 text-gray-600">1. Raise &amp; Retain Capital</td>
                <td className="px-4 py-2 text-gray-600">5. Scale + 6. AI Readiness (portco)</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium text-db-dark">PE Portfolio Company</td>
                <td className="px-4 py-2 text-gray-600">3. Protect from Disruption</td>
                <td className="px-4 py-2 text-gray-600">2. Regulatory + 6. AI Readiness</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium text-db-dark">Family Office</td>
                <td className="px-4 py-2 text-gray-600">3. Protect from Disruption</td>
                <td className="px-4 py-2 text-gray-600">5. Scale (no headcount)</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium text-db-dark">Firm with EU exposure</td>
                <td className="px-4 py-2 text-gray-600">2. Regulatory (DORA)</td>
                <td className="px-4 py-2 text-gray-600">4. Competitive Advantage</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium text-db-dark">Post-incident firm</td>
                <td className="px-4 py-2 text-gray-600">3. Protect from Disruption</td>
                <td className="px-4 py-2 text-gray-600">1. Capital Confidence (LP recovery)</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium text-db-dark">Firm adopting AI tools</td>
                <td className="px-4 py-2 text-gray-600">6. AI Readiness</td>
                <td className="px-4 py-2 text-gray-600">2. Regulatory + 3. Protection</td>
              </tr>
            </tbody>
          </table>
        </div>
      </SubSection>

      <SubSection icon="📏" title="Measuring Outcome Delivery">
        <p>
          Each outcome should have observable evidence. When you prepare for a QBR or
          renewal, gather proof points for the outcomes that matter most to that client:
        </p>
        <div className="mt-3 grid grid-cols-1 gap-2">
          <div className="flex items-start gap-3 rounded-md border border-gray-200 bg-white p-3">
            <span className="shrink-0 font-bold text-db-aqua-dark">1</span>
            <div>
              <p className="text-sm font-medium text-db-dark">Capital Confidence</p>
              <p className="text-xs text-gray-500">DDQs completed &amp; avg. turnaround time, ODD reviews supported, LP-facing reports delivered, allocator retention rate</p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-md border border-gray-200 bg-white p-3">
            <span className="shrink-0 font-bold text-db-aqua-dark">2</span>
            <div>
              <p className="text-sm font-medium text-db-dark">Regulatory Readiness</p>
              <p className="text-xs text-gray-500">Policies updated &amp; current, exam readiness score, regulatory changes addressed, deficiency findings (zero is the goal)</p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-md border border-gray-200 bg-white p-3">
            <span className="shrink-0 font-bold text-db-aqua-dark">3</span>
            <div>
              <p className="text-sm font-medium text-db-dark">Protection &amp; Resilience</p>
              <p className="text-xs text-gray-500">Risk score trend, vulnerabilities identified &amp; remediated, IR plan tested (date), incidents detected &amp; contained, phishing test results</p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-md border border-gray-200 bg-white p-3">
            <span className="shrink-0 font-bold text-db-aqua-dark">4</span>
            <div>
              <p className="text-sm font-medium text-db-dark">Competitive Advantage</p>
              <p className="text-xs text-gray-500">Peer benchmarking position, new capabilities implemented, certifications or frameworks achieved, LP feedback quality</p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-md border border-gray-200 bg-white p-3">
            <span className="shrink-0 font-bold text-db-aqua-dark">5</span>
            <div>
              <p className="text-sm font-medium text-db-dark">Scale &amp; Efficiency</p>
              <p className="text-xs text-gray-500">Cost vs. in-house equivalent, COO/CCO hours saved, new entities covered (funds, offices, portcos), services consumed per dollar</p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-md border border-gray-200 bg-white p-3">
            <span className="shrink-0 font-bold text-db-aqua-dark">6</span>
            <div>
              <p className="text-sm font-medium text-db-dark">AI Readiness</p>
              <p className="text-xs text-gray-500">AI policy in place &amp; current, employees trained (% completion), AI tools inventoried &amp; assessed, shadow AI tools identified, governance review cadence established</p>
            </div>
          </div>
        </div>
      </SubSection>

      <DrawbridgeAngle>
        <p>
          This framework is the foundation for how we talk about value — externally and
          internally. Every service we deliver, every assessment we run, every policy we
          write should tie back to one or more of these six outcomes. If it doesn&apos;t,
          we need to ask why we&apos;re doing it.
        </p>
        <p>
          Over time, we&apos;ll build detailed value narratives under each outcome — the
          specific stories, data points, and proof that bring each outcome to life in
          client conversations. We&apos;ll also map our service catalog (SKUs) to outcomes
          so every proposal can be framed as &ldquo;here&apos;s how we deliver Outcome X&rdquo; rather
          than &ldquo;here&apos;s a list of things we do.&rdquo;
        </p>
        <p>
          Start using the framework now. Pick one client this week and reframe your
          next conversation around outcomes instead of deliverables. See what happens.
        </p>
      </DrawbridgeAngle>

    </>
  );
}
