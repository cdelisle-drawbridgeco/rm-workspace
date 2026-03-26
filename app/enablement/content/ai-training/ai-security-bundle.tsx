'use client';

import React from 'react';
import {
  StatCard,
  SectionHeading,
  CharacteristicCard,
  TermBadge,
  HeroSection,
  DrawbridgeAngle,
  SubSection,
  LastUpdated,
} from '../../components/shared-ui';

export default function AiSecurityBundle() {
  return (
    <>
      <HeroSection
        icon="🛡️"
        title="AI Security & Governance Bundle"
        subtitle="Drawbridge's three-service AI offering — Assessment, Policy, and Training. What each service is, how they fit together, who to target, and how to sell the bundle."
      />
      <LastUpdated date="March 25, 2026 at 3:45 PM" />

      {/* ── Why This Is the Moment ────────────────────────── */}
      <div className="mt-6 grid grid-cols-4 gap-4">
        <StatCard label="Most Demanded Offering Right Now" value="#1" />
        <StatCard label="Referral Partners Already Routing Clients" value="JP Morgan, AirGC" />
        <StatCard label="AI Platforms in Scope" value="4" />
        <StatCard label="Services in the Bundle" value="3" />
      </div>

      <SectionHeading>The Market Opportunity — Act Now</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed">
        This is the most demanded product offering Drawbridge has right now. Referral partners
        are already routing clients our way and asking for collateral to share. The window to
        establish Drawbridge as the go-to for AI governance in alternative asset management is
        open — but competitors (Salus, Optima, Gotham, Aponix, MSPs) are all moving in this
        direction.
      </p>
      <p className="text-sm text-gray-700 leading-relaxed mt-2">
        Every alternative asset manager is somewhere on the AI adoption curve — and virtually
        none of them have the governance program to match their usage. That gap is your opening.
        The conversations are already happening; clients and prospects just need someone who can
        actually deliver a complete solution.
      </p>

      {/* ── The Three Services ───────────────────────────── */}
      <SectionHeading>The Bundle — Three Services, One Program</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed">
        The three services are designed to build on each other. Sold individually they each
        stand alone; sold together they form a complete AI governance program.
      </p>

      <div className="mt-4 rounded-lg border border-db-aqua/30 bg-db-aqua/5 p-5">
        <p className="text-sm font-semibold text-db-dark text-center mb-4">
          Assess what you have &rarr; Build the rules &rarr; Train your people
        </p>
        <div className="grid grid-cols-3 gap-4">
          <div className="rounded-lg border border-gray-200 bg-white p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">🔍</span>
              <h3 className="font-semibold text-db-dark text-sm">AI Security Assessment</h3>
            </div>
            <p className="text-xs text-gray-600">
              A structured audit of security controls, governance processes, and safeguards
              around the firm&apos;s AI tools. Surfaces gaps, rates findings, and produces a
              remediation roadmap.
            </p>
            <p className="text-xs text-db-aqua font-medium mt-2">Typical entry point</p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">📋</span>
              <h3 className="font-semibold text-db-dark text-sm">AI Policy Development</h3>
            </div>
            <p className="text-xs text-gray-600">
              A customized, regulator-ready AI policy that establishes acceptable use rules,
              data protection requirements, governance structure, and accountability frameworks.
            </p>
            <p className="text-xs text-db-aqua font-medium mt-2">Closes the policy gap</p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">🎓</span>
              <h3 className="font-semibold text-db-dark text-sm">AI Security Training</h3>
            </div>
            <p className="text-xs text-gray-600">
              Live instructor-led training for employees and leadership on AI risks, safe use
              practices, and real-world threat scenarios tailored to the firm&apos;s approved tools.
            </p>
            <p className="text-xs text-db-aqua font-medium mt-2">Makes the policy stick</p>
          </div>
        </div>
      </div>

      <div className="mt-3 rounded-md bg-amber-50 border border-amber-200 p-3">
        <p className="text-sm text-amber-800">
          <strong>Also in the pipeline:</strong> AI Consulting (ongoing advisory) and AI Pen Testing
          are two additional services Drawbridge is developing. Keep these on your radar for future
          expansion conversations — especially with clients who complete the bundle.
        </p>
      </div>

      {/* ── Service Deep-Dives ───────────────────────────── */}
      <SectionHeading>Service Deep-Dives</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed">
        You need to understand each service well enough to have a credible conversation —
        not just hand over a one-pager. Here&apos;s what you need to know about each one.
      </p>

      {/* Assessment */}
      <div className="mt-4 rounded-lg border border-gray-200 bg-white p-5">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xl">🔍</span>
          <h3 className="font-semibold text-db-dark">AI Security Assessment</h3>
        </div>

        <p className="text-sm text-gray-700 mb-3">
          A structured audit of security controls, governance processes, and operational
          safeguards around the firm&apos;s use of AI. Designed as a point-in-time exercise
          that produces clear, actionable findings — not a lengthy consulting engagement.
        </p>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Platforms in Scope</p>
            <div className="flex flex-wrap gap-2">
              {['ChatGPT (Business/Enterprise)', 'Claude (Enterprise)', 'Microsoft Copilot', 'Gemini'].map((p) => (
                <span key={p} className="rounded-full bg-gray-100 border border-gray-200 px-2.5 py-1 text-xs text-gray-700">
                  {p}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Requirement</p>
            <p className="text-xs text-gray-700">
              Client must have an <strong>enterprise version</strong> of the AI tool being
              assessed and an admin who has access to all security configurations.
            </p>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">What the Assessment Covers</p>
          <div className="grid grid-cols-3 gap-2">
            {[
              'Identity & Access Management',
              'Session & Network Security',
              'Data Protection & Privacy',
              'Integrations & Connectors',
              'Governance & Training',
              'Configuration Hardening',
              'Data Handling & Retention',
              'Collaboration & Sharing',
              'AI Functionality & Features',
            ].map((area) => (
              <div key={area} className="rounded-md bg-gray-50 border border-gray-200 px-3 py-2 text-xs text-gray-700">
                {area}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">What the Client Gets</p>
          <ul className="space-y-1 text-sm text-gray-700">
            <li className="flex gap-2"><span className="text-green-600 shrink-0">✓</span> Inventory of AI use cases across departments</li>
            <li className="flex gap-2"><span className="text-green-600 shrink-0">✓</span> Control audit via screenshare with an admin</li>
            <li className="flex gap-2"><span className="text-green-600 shrink-0">✓</span> Risk findings rated High / Moderate / Low with specific remediation guidance</li>
            <li className="flex gap-2"><span className="text-green-600 shrink-0">✓</span> Prioritized roadmap separating quick wins from long-term controls</li>
            <li className="flex gap-2"><span className="text-green-600 shrink-0">✓</span> Next-step options mapped to policy, training, and ongoing advisory</li>
          </ul>
        </div>
      </div>

      {/* Policy */}
      <div className="mt-4 rounded-lg border border-gray-200 bg-white p-5">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xl">📋</span>
          <h3 className="font-semibold text-db-dark">AI Policy Development</h3>
        </div>

        <p className="text-sm text-gray-700 mb-3">
          A customized, regulator-ready AI policy tailored to the firm&apos;s risk profile. It
          gives the firm the rules, structure, and governance it needs to adopt AI responsibly —
          and gives CCOs, boards, LPs, and regulators something defensible to point to.
        </p>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">What the Policy Covers</p>
            <ul className="space-y-1 text-xs text-gray-700">
              <li>AI scope & definitions (GenAI, AI systems, AI agents)</li>
              <li>Public vs. enterprise AI tools and approved services</li>
              <li>Permitted and prohibited activities</li>
              <li>Guardrails for confidential data and PII</li>
              <li>Human review requirements for AI-generated content</li>
              <li>Data minimization, retention, and records management</li>
              <li>Vendor and third-party AI data restrictions</li>
              <li>AI committee / executive oversight structure</li>
              <li>Use-case intake, risk tiering, and approval workflow</li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">What the Client Gets</p>
            <ul className="space-y-1 text-xs text-gray-700">
              <li className="flex gap-1.5"><span className="text-green-600 shrink-0">✓</span> A customized AI policy aligned to the firm&apos;s risk profile</li>
              <li className="flex gap-1.5"><span className="text-green-600 shrink-0">✓</span> Clear governance structure and approval workflows</li>
              <li className="flex gap-1.5"><span className="text-green-600 shrink-0">✓</span> Defined monitoring, retention, and review policies</li>
              <li className="flex gap-1.5"><span className="text-green-600 shrink-0">✓</span> Language suitable for regulators, investors, and auditors</li>
              <li className="flex gap-1.5"><span className="text-green-600 shrink-0">✓</span> A foundation for training, assessments, and ongoing oversight</li>
            </ul>
          </div>
        </div>

        <div className="mt-3 rounded-md bg-gray-50 border border-gray-200 p-3">
          <p className="text-xs text-gray-700">
            <strong>Key positioning point:</strong> The policy integrates seamlessly with the
            firm&apos;s existing cybersecurity program — it&apos;s not a standalone document
            that sits in a drawer. It connects to the CRA, to Regulation S-P compliance, and
            to ongoing training and assessment programs.
          </p>
        </div>
      </div>

      {/* Training */}
      <div className="mt-4 rounded-lg border border-gray-200 bg-white p-5">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xl">🎓</span>
          <h3 className="font-semibold text-db-dark">AI Security Training</h3>
        </div>

        <p className="text-sm text-gray-700 mb-3">
          Live instructor-led training for employees and leadership on how to use AI safely,
          responsibly, and in alignment with the firm&apos;s policies and regulatory expectations.
          Content is tailored to the firm&apos;s approved tools and risk profile.
        </p>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">What the Training Covers</p>
            <ul className="space-y-1 text-xs text-gray-700">
              <li><strong>AI Foundations:</strong> What GenAI is, how LLMs work, limitations</li>
              <li><strong>Key Risk Areas:</strong> Data leakage, deepfakes, hallucinations, prompt injection, shadow AI</li>
              <li><strong>Governance & Safe Use:</strong> Public vs. enterprise tools, approved vs. prohibited use cases, human review expectations</li>
              <li><strong>Real-World Scenarios:</strong> Deepfake executive fraud, AI chatbot data leakage during due diligence, practical &ldquo;what would you do?&rdquo; examples</li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Delivery Options</p>
            <ul className="space-y-1 text-xs text-gray-700">
              <li className="flex gap-1.5"><span className="text-db-aqua shrink-0">→</span> Live instructor-led training</li>
              <li className="flex gap-1.5"><span className="text-db-aqua shrink-0">→</span> Management-focused session</li>
              <li className="flex gap-1.5"><span className="text-db-aqua shrink-0">→</span> Firm-wide employee awareness sessions</li>
              <li className="flex gap-1.5"><span className="text-db-aqua shrink-0">→</span> Content tailored to approved tools and policies</li>
            </ul>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 mt-3">What the Client Gets</p>
            <ul className="space-y-1 text-xs text-gray-700">
              <li className="flex gap-1.5"><span className="text-green-600 shrink-0">✓</span> Reduced risk of data leakage and policy violations</li>
              <li className="flex gap-1.5"><span className="text-green-600 shrink-0">✓</span> Clear expectations for employee AI use</li>
              <li className="flex gap-1.5"><span className="text-green-600 shrink-0">✓</span> Defensible, documented AI training program</li>
              <li className="flex gap-1.5"><span className="text-green-600 shrink-0">✓</span> Alignment with regulatory and investor expectations</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Who to Target ────────────────────────────────── */}
      <SectionHeading>Who to Target</SectionHeading>

      <SubSection icon="🎯" title="Strong Fit — These Are Your Buyers">
        <div className="grid grid-cols-2 gap-3 mt-1">
          <CharacteristicCard
            title="Firms Actively Using Enterprise AI"
            description="Any client or prospect using ChatGPT Business/Enterprise, Claude Enterprise, Microsoft Copilot, or Gemini — especially if they rolled it out without a formal governance process."
          />
          <CharacteristicCard
            title="Regulated Firms Under Investor Scrutiny"
            description="Hedge funds, PE firms, and family offices facing SEC exams, LP due diligence, or board-level AI governance questions. The bundle gives them documented evidence of oversight."
          />
          <CharacteristicCard
            title="Firms Expanding AI Across the Business"
            description="Organizations that started with one team using AI and are now rolling it out firm-wide. More users = more surface area, more need for policy and training."
          />
          <CharacteristicCard
            title="Leadership Asked to Sign Off on AI"
            description="When a CCO, COO, or CTO is being asked to 'sign off on AI' — that's a direct trigger. They need an assessment to know what they're signing off on, a policy to sign, and training to enforce it."
          />
        </div>
      </SubSection>

      <SubSection icon="⚡" title="Common Trigger Events — Listen for These">
        <div className="space-y-2 mt-2">
          {[
            {
              trigger: '"We want to scale AI but need to make sure we\'re doing it safely"',
              context: 'Classic expansion trigger. The bundle positions perfectly here — assess first, then govern, then train.',
            },
            {
              trigger: '"Our employees are using AI tools we haven\'t approved"',
              context: 'Shadow AI is nearly universal. This is an entry point for the full bundle — assessment surfaces the scope, policy sets the rules, training changes the behavior.',
            },
            {
              trigger: '"Our LPs / regulators are asking about our AI governance"',
              context: 'A complete bundle gives them a documented answer: we assessed our environment, we have a policy, and our employees are trained. That\'s defensible.',
            },
            {
              trigger: '"We\'re rolling out [ChatGPT / Copilot / Claude] company-wide"',
              context: 'A rollout without governance is a risk event. Offer the bundle as the governance layer that enables the rollout to happen safely.',
            },
            {
              trigger: '"We need an AI policy"',
              context: 'Don\'t just sell the policy. Ask what\'s driving the need — a regulatory ask, an LP question, an incident? Then position the full bundle around that context.',
            },
          ].map((item, i) => (
            <div key={i} className="rounded-md bg-gray-50 border border-gray-200 p-3">
              <p className="text-sm font-medium text-db-dark">{item.trigger}</p>
              <p className="text-xs text-gray-600 mt-1">{item.context}</p>
            </div>
          ))}
        </div>
      </SubSection>

      {/* ── How to Sell the Bundle ───────────────────────── */}
      <SectionHeading>How to Position the Bundle</SectionHeading>

      <SubSection icon="🎯" title="Why Bundle — Not Just Individual Services">
        <p className="text-sm text-gray-700 mb-3">
          Each service stands alone, but the bundle is the complete answer. Here&apos;s the logic
          to internalize and use in conversations:
        </p>
        <div className="space-y-2">
          <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
            <p className="text-sm font-medium text-db-dark">Assessment alone isn&apos;t enough</p>
            <p className="text-xs text-gray-600 mt-1">
              A report full of findings is only useful if you have a policy to fix them and training to ensure employees follow the new rules. Without those, you have a risk report that sits on a shelf.
            </p>
          </div>
          <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
            <p className="text-sm font-medium text-db-dark">Policy without training doesn&apos;t change behavior</p>
            <p className="text-xs text-gray-600 mt-1">
              Employees won&apos;t read the policy. Training is what makes it real — and it also satisfies the &ldquo;documented training program&rdquo; requirement that regulators and LPs increasingly ask for.
            </p>
          </div>
          <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
            <p className="text-sm font-medium text-db-dark">The bundle = a complete program they can show anyone</p>
            <p className="text-xs text-gray-600 mt-1">
              When an LP or regulator asks &ldquo;how are you governing AI?&rdquo; — the client can answer: we had a formal assessment, we have an AI policy, and our people are trained. That&apos;s a complete, defensible answer.
            </p>
          </div>
        </div>
      </SubSection>

      <SubSection icon="💬" title="Talk Tracks">
        <div className="space-y-3 mt-1">
          <div className="rounded-md bg-gray-50 p-3 border border-gray-200">
            <p className="text-xs font-semibold text-db-dark uppercase tracking-wide mb-1">Opening the Conversation</p>
            <p className="text-sm italic text-gray-700">
              &ldquo;AI governance is the number one thing I&apos;m hearing about from clients and
              referral partners right now. A lot of firms have adopted AI tools without the
              governance layer to match. We&apos;ve built a three-part program — assessment,
              policy, and training — specifically for firms like yours. Have you had a chance
              to formally review your AI setup?&rdquo;
            </p>
          </div>
          <div className="rounded-md bg-gray-50 p-3 border border-gray-200">
            <p className="text-xs font-semibold text-db-dark uppercase tracking-wide mb-1">When They Want Just the Assessment</p>
            <p className="text-sm italic text-gray-700">
              &ldquo;The assessment is a great starting point — and most firms we work with find
              that the findings point directly to gaps in policy and training. We can start
              there and use the report to build the case for the rest of the program internally.
              A lot of clients find it easier to get buy-in once they see the actual findings.&rdquo;
            </p>
          </div>
          <div className="rounded-md bg-gray-50 p-3 border border-gray-200">
            <p className="text-xs font-semibold text-db-dark uppercase tracking-wide mb-1">When They Already Have a Policy</p>
            <p className="text-sm italic text-gray-700">
              &ldquo;Great — do you know how well the current policy maps to the actual tools your
              employees are using? That&apos;s often where the gap is. The assessment would tell
              us whether the policy is actually being enforced at the platform level, and the
              training ensures people know what the policy requires.&rdquo;
            </p>
          </div>
          <div className="rounded-md bg-gray-50 p-3 border border-gray-200">
            <p className="text-xs font-semibold text-db-dark uppercase tracking-wide mb-1">When They Say They Don&apos;t Use AI</p>
            <p className="text-sm italic text-gray-700">
              &ldquo;That&apos;s actually one of the most common things we hear — and in nearly every
              case, employees are already using AI tools the firm hasn&apos;t formally approved.
              Shadow AI is almost universal. The assessment surfaces that exposure and gives
              leadership the clarity to decide what they want to do about it.&rdquo;
            </p>
          </div>
          <div className="rounded-md bg-gray-50 p-3 border border-gray-200">
            <p className="text-xs font-semibold text-db-dark uppercase tracking-wide mb-1">When They Ask What Makes Us Different</p>
            <p className="text-sm italic text-gray-700">
              &ldquo;We specialize in alternative asset management — we know what hedge funds,
              PE firms, and family offices actually deal with on the regulatory and investor
              side. This isn&apos;t a generic IT audit. It&apos;s built around your context,
              your tools, and the questions your LPs and regulators are already asking.&rdquo;
            </p>
          </div>
        </div>
      </SubSection>

      {/* ── Competitive Awareness ─────────────────────────── */}
      <SectionHeading>Competitive Awareness</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed">
        The window to own this space is open but not permanent. These are the competitors
        to be aware of — Drawbridge&apos;s differentiation is alt asset specialization and
        delivery by a dedicated advisory team (not a checkbox vendor or a generalist MSP).
      </p>

      <div className="mt-3 grid grid-cols-2 gap-3">
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <h4 className="font-semibold text-db-dark text-sm mb-2">Named Competitors</h4>
          <ul className="space-y-1 text-sm text-gray-700">
            {['Salus', 'Optima', 'Gotham', 'Aponix'].map((c) => (
              <li key={c} className="flex gap-2 items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0 mt-0.5" />
                {c}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <h4 className="font-semibold text-db-dark text-sm mb-2">MSPs as Competitors</h4>
          <p className="text-xs text-gray-700">
            MSPs are increasingly pitching AI governance services. If a client mentions their
            MSP is handling this, use the independence argument — the same way we position
            against MSP-run cyber programs generally. Regulators expect independent oversight
            of AI governance, not the firm&apos;s managed service provider self-reviewing.
          </p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-db-aqua/5 border-db-aqua/30 p-4 col-span-2">
          <h4 className="font-semibold text-db-dark text-sm mb-2">Our Differentiation</h4>
          <div className="grid grid-cols-3 gap-3">
            {[
              { title: 'Alt Asset Specialization', desc: 'Built for hedge funds, PE firms, and family offices — not generic enterprises. We know the regulatory environment, the LP scrutiny, and the operational constraints.' },
              { title: 'Advisory-Led Delivery', desc: 'Delivered by Caleb Beaver\'s team — experienced cybersecurity advisors, not a checklist tool or a junior analyst. Clients get expert judgment, not just a report.' },
              { title: 'Complete Program', desc: 'We offer all three services in an integrated program. Competitors may offer pieces; Drawbridge can deliver the full assessment → policy → training arc.' },
            ].map((item) => (
              <div key={item.title}>
                <p className="text-xs font-semibold text-db-dark mb-1">{item.title}</p>
                <p className="text-xs text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Services Alignment ───────────────────────────────── */}
      <SectionHeading>Natural Expansion — What Comes Next</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed">
        The bundle is both a complete program and an entry point. Every engagement
        generates follow-on conversations. Know where to take the client next.
      </p>
      <div className="mt-3 grid grid-cols-3 gap-3">
        {[
          { service: 'AI Consulting (Advisory)', desc: 'Ongoing AI advisory partnership — staying current as tools, threats, and regulations evolve. A natural follow-on for clients who want continued expert guidance post-bundle.' },
          { service: 'AI Pen Testing', desc: 'Prompt injection, model manipulation, and AI-specific attack simulation. Coming soon — flag for clients in tech-forward or high-risk environments.' },
          { service: 'Cyber Risk Assessment (CRA)', desc: 'The AI assessment validates several controls that appear in the broader CRA — SSO, least privilege, authentication. Bundle clients often have CRA gaps to address.' },
          { service: 'Tabletop Exercises (AI-Focused)', desc: 'Simulate AI misuse scenarios — deepfake fraud, data exfiltration via AI tool, shadow AI incident. Most IR plans don\'t account for AI threats yet.' },
          { service: 'Vendor Risk Assessments', desc: 'Formal due diligence on AI vendors (OpenAI, Anthropic, Microsoft). Required for most regulatory frameworks and increasingly expected by LPs.' },
          { service: 'Phishing Campaigns', desc: 'AI-generated phishing simulations test whether employees can identify increasingly sophisticated, AI-crafted lures — a natural complement to AI security training.' },
        ].map((item) => (
          <CharacteristicCard key={item.service} title={item.service} description={item.desc} />
        ))}
      </div>

      {/* ── Referral Partner Context ─────────────────────── */}
      <SectionHeading>Referral Partner Context</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed">
        JP Morgan and AirGC have already told Nate Ford they have clients in need of
        this and asked for collateral to share. This is not a hypothetical pipeline — referral
        partners are actively routing opportunities. When you get an inbound from a referral
        partner on AI, treat it as a warm lead and move quickly.
      </p>
      <div className="mt-3 rounded-md bg-gray-50 border border-gray-200 p-4">
        <p className="text-sm text-gray-700">
          <strong>What to send referral partners:</strong> The client-facing one-pager (being
          produced by Lacewing Media / Kate dos Santos) is the asset to use here. Do not send
          internal documents. Ask your manager for the one-pager when it&apos;s ready.
        </p>
      </div>

      {/* ── Drawbridge Angle ────────────────────────────── */}
      <DrawbridgeAngle>
        <p>
          The AI Security & Governance Bundle is <strong>the most demanded product offering
          Drawbridge has right now</strong> — and the window to own this space is open, but
          not permanent. Competitors are all moving toward AI governance services. The
          differentiator is speed, specialization, and the ability to deliver a complete
          three-part program rather than a single-service assessment.
        </p>
        <p className="mt-2">
          The right frame for every conversation: <strong>AI adoption is not going to slow
          down</strong>. Every alternative asset manager is somewhere on this curve.
          Drawbridge helps them get the governance layer in place so they can use AI
          confidently — with their LPs, their regulators, and their own leadership all
          aligned.
        </p>
        <p className="mt-2">
          <strong>Lead with the assessment as the entry point.</strong> Use the findings
          to build the case for policy and training. The bundle sells itself once the client
          sees what an unreviewed AI environment actually looks like.
        </p>
        <p className="mt-2">
          No other provider can combine Drawbridge&apos;s AI governance expertise with
          intelligence from <strong>1,000+ alternative investment fund relationships</strong>
          and <strong>2,000+ successful ODD reviews</strong>. The bundle isn&apos;t just a
          product — it&apos;s the foundation of a client&apos;s AI governance story for their
          LPs, regulators, and board. Own this conversation now.
          <strong> Raise Your Guard. Raise Your Bar.</strong>
        </p>
      </DrawbridgeAngle>

      {/* ── Key Terms ───────────────────────────────────── */}
      <SectionHeading>Key Terms</SectionHeading>
      <div className="grid grid-cols-3 gap-3">
        <TermBadge
          term="Shadow AI"
          definition="Unsanctioned use of AI tools by employees without organizational approval or oversight — nearly universal in alternative asset management firms and a primary driver of assessment conversations."
        />
        <TermBadge
          term="Generative AI (GenAI)"
          definition="AI systems that generate content (text, images, code, audio) based on prompts. Includes ChatGPT, Claude, Copilot, and Gemini — the platforms covered by the assessment."
        />
        <TermBadge
          term="AI Governance"
          definition="The policies, oversight structures, and accountability frameworks that determine how a firm uses AI — what's allowed, who approves it, how it's monitored, and how risks are managed."
        />
        <TermBadge
          term="Prompt Injection"
          definition="An attack where malicious instructions are embedded in AI inputs to manipulate the model's behavior — a key risk for firms using AI with access to sensitive data sources."
        />
        <TermBadge
          term="Hallucination"
          definition="When an AI model generates confident-sounding but factually incorrect output. A governance risk for firms using AI in research, analysis, or client-facing communications."
        />
        <TermBadge
          term="Deepfake"
          definition="AI-generated synthetic audio, video, or image content used to impersonate individuals. A growing threat for executive fraud and social engineering attacks targeting financial firms."
        />
      </div>
    </>
  );
}
