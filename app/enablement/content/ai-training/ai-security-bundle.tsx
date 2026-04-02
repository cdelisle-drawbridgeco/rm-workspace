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
        title="AI Risk Intelligence"
        subtitle="Secure AI adoption for alternative investment firms — Drawbridge's structured, end-to-end framework combining advisory, assessment, governance, and training."
      />
      <LastUpdated date="April 2, 2026 at 12:00 PM" />

      {/* ── Why This Is the Moment ────────────────────────── */}
      <div className="mt-6 grid grid-cols-4 gap-4">
        <StatCard label="Most Demanded Offering Right Now" value="#1" />
        <StatCard label="Referral Partners Already Routing Clients" value="JP Morgan, AirGC" />
        <StatCard label="AI Platforms in Scope" value="4" />
        <StatCard label="Pillars of AI Risk Intelligence" value="4" />
      </div>

      {/* ── The Challenge ─────────────────────────────────── */}
      <SectionHeading>The Challenge: AI Adoption Is Outpacing Control</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed">
        AI is no longer experimental — <strong>it is already embedded across the organization.</strong>{' '}
        AI tools are rapidly becoming part of day-to-day workflows across investment, operational,
        and client functions — often without formal oversight or defined controls.
      </p>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <p className="text-xs font-semibold text-db-dark uppercase tracking-wide mb-2">Inside the firm</p>
          <ul className="space-y-1.5 text-xs text-gray-700">
            <li className="flex gap-2"><span className="text-db-orange shrink-0 mt-0.5">•</span>AI usage is decentralized and difficult to monitor</li>
            <li className="flex gap-2"><span className="text-db-orange shrink-0 mt-0.5">•</span>Employees may unknowingly input confidential data into external tools</li>
            <li className="flex gap-2"><span className="text-db-orange shrink-0 mt-0.5">•</span>Governance frameworks have not kept pace with adoption</li>
            <li className="flex gap-2"><span className="text-db-orange shrink-0 mt-0.5">•</span>Security teams lack visibility into how AI is being used</li>
          </ul>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <p className="text-xs font-semibold text-db-dark uppercase tracking-wide mb-2">Outside the firm</p>
          <ul className="space-y-1.5 text-xs text-gray-700">
            <li className="flex gap-2"><span className="text-db-orange shrink-0 mt-0.5">•</span>Non-technical users can now build code and automate workflows</li>
            <li className="flex gap-2"><span className="text-db-orange shrink-0 mt-0.5">•</span>Threat actors can scale phishing, malware, and social engineering using AI</li>
            <li className="flex gap-2"><span className="text-db-orange shrink-0 mt-0.5">•</span>Regulatory expectations around data protection and governance are increasing</li>
          </ul>
        </div>
      </div>
      <div className="mt-3 rounded-lg border-l-4 border-db-dark bg-db-dark/5 p-4">
        <p className="text-sm font-semibold text-db-dark">The result: a rapidly expanding risk surface with limited oversight.</p>
        <p className="text-xs text-gray-600 mt-1">Employee behavior is now a primary AI risk vector. Unstructured use of generative AI tools can expose sensitive firm and investor data — often unintentionally — creating new pathways for data leakage and operational risk.</p>
      </div>

      <p className="text-sm text-gray-700 leading-relaxed mt-3">
        The window to establish Drawbridge as the go-to for AI governance in alternative asset
        management is open — but competitors (Salus, Optima, Gotham, Aponix, MSPs) are all
        moving in this direction. Every alternative asset manager is somewhere on the AI
        adoption curve and virtually none of them have the governance program to match their
        usage. That gap is your opening.
      </p>

      {/* ── The Four Pillars ─────────────────────────────── */}
      <SectionHeading>The Solution: Four Pillars, One Program</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed">
        AI Risk Intelligence is a structured, end-to-end framework that enables firms to adopt
        AI securely, manage risk, and demonstrate control. The four pillars are designed to
        build on each other — sold individually they each stand alone; sold together they form
        a complete AI governance program.
      </p>

      <div className="mt-4 rounded-lg border border-db-aqua/30 bg-db-aqua/5 p-5">
        <p className="text-sm font-semibold text-db-dark text-center mb-4">
          Consult &rarr; Assess &rarr; Govern &rarr; Train
        </p>
        <div className="grid grid-cols-4 gap-3">
          {[
            {
              icon: '💡',
              title: 'Consult',
              subtitle: 'Deployment consultation',
              desc: 'Understand how AI is being used across the firm and where risk exists. Identify tools, highlight data exposure scenarios, and align usage with regulatory expectations.',
              tag: 'Start here',
            },
            {
              icon: '🔍',
              title: 'Assess',
              subtitle: 'AI security assessment',
              desc: 'Gain an independent view of AI-related cyber risk. Inventory platforms, identify vulnerabilities and control gaps, and deliver prioritized remediation guidance.',
              tag: 'Typical entry point',
            },
            {
              icon: '📋',
              title: 'Govern',
              subtitle: 'AI policy development',
              desc: 'Establish clear, enforceable guardrails for AI usage. Define policies tailored to the firm, implement governance frameworks, and produce audit-ready documentation.',
              tag: 'Closes the policy gap',
            },
            {
              icon: '🎓',
              title: 'Train',
              subtitle: 'AI security training',
              desc: 'Ensure people can use AI safely and effectively. Educate employees on AI-enabled threats, prevent data leakage, and reinforce secure behaviors in daily workflows.',
              tag: 'Makes the policy stick',
            },
          ].map(({ icon, title, subtitle, desc, tag }) => (
            <div key={title} className="rounded-lg border border-gray-200 bg-white p-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-lg">{icon}</span>
                <h3 className="font-semibold text-db-dark text-sm">{title}</h3>
              </div>
              <p className="text-xs text-gray-500 italic mb-2">{subtitle}</p>
              <p className="text-xs text-gray-600">{desc}</p>
              <p className="text-xs text-db-aqua font-medium mt-2">{tag}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Service Deep-Dives ───────────────────────────── */}
      <SectionHeading>Pillar Deep-Dives</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed">
        You need to understand each pillar well enough to have a credible conversation —
        not just hand over a one-pager. Here&apos;s what you need to know about each one.
      </p>

      {/* Consult */}
      <div className="mt-4 rounded-lg border border-gray-200 bg-white p-5">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xl">💡</span>
          <h3 className="font-semibold text-db-dark">Consult — Deployment Consultation</h3>
        </div>
        <p className="text-sm text-gray-700 mb-3">
          The advisory starting point. Before a firm can assess or govern AI, they need to
          understand how it&apos;s actually being used — and where the risk exists. The
          consultation provides practical, implementation-focused guidance with no conflicts
          of interest.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">What It Covers</p>
            <ul className="space-y-1 text-xs text-gray-700">
              <li className="flex gap-1.5"><span className="text-db-aqua shrink-0">→</span> Identify AI tools, use cases, workflows, and monitoring requirements</li>
              <li className="flex gap-1.5"><span className="text-db-aqua shrink-0">→</span> Highlight high-risk data exposure scenarios</li>
              <li className="flex gap-1.5"><span className="text-db-aqua shrink-0">→</span> Recommend AI hardening and security controls to prevent data leakage or prompt injection</li>
              <li className="flex gap-1.5"><span className="text-db-aqua shrink-0">→</span> Align AI usage with operational and regulatory expectations</li>
              <li className="flex gap-1.5"><span className="text-db-aqua shrink-0">→</span> Provide practical, implementation-focused guidance</li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">When to Lead With Consult</p>
            <ul className="space-y-1 text-xs text-gray-700">
              <li className="flex gap-1.5"><span className="text-green-600 shrink-0">✓</span> Firm is actively deploying AI and needs immediate guidance</li>
              <li className="flex gap-1.5"><span className="text-green-600 shrink-0">✓</span> Leadership wants expert input before committing to a full assessment</li>
              <li className="flex gap-1.5"><span className="text-green-600 shrink-0">✓</span> Firm has a known shadow AI problem and needs a rapid inventory</li>
              <li className="flex gap-1.5"><span className="text-green-600 shrink-0">✓</span> Client is in procurement process for a new AI platform</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Assessment */}
      <div className="mt-4 rounded-lg border border-gray-200 bg-white p-5">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xl">🔍</span>
          <h3 className="font-semibold text-db-dark">Assess — AI Security Assessment</h3>
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
            <li className="flex gap-2"><span className="text-green-600 shrink-0">✓</span> Next-step options mapped to governance, training, and ongoing advisory</li>
          </ul>
        </div>
      </div>

      {/* Govern */}
      <div className="mt-4 rounded-lg border border-gray-200 bg-white p-5">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xl">📋</span>
          <h3 className="font-semibold text-db-dark">Govern — AI Policy Development</h3>
        </div>

        <p className="text-sm text-gray-700 mb-3">
          Establish clear, enforceable guardrails for AI usage. A customized, regulator-ready
          AI policy tailored to the firm&apos;s risk profile — giving CCOs, boards, LPs, and
          regulators something defensible to point to.
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
              <li className="flex gap-1.5"><span className="text-green-600 shrink-0">✓</span> Clear, audit-ready documentation</li>
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
          <h3 className="font-semibold text-db-dark">Train — AI Security Training</h3>
        </div>

        <p className="text-sm text-gray-700 mb-3">
          Ensure your people can use AI safely and effectively. Live instructor-led training
          for employees and leadership — content tailored to the firm&apos;s approved tools,
          risk profile, and financial services environment.
        </p>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">What the Training Covers</p>
            <ul className="space-y-1 text-xs text-gray-700">
              <li><strong>AI Foundations:</strong> What GenAI is, how LLMs work, limitations</li>
              <li><strong>Key Risk Areas:</strong> Data leakage, deepfakes, hallucinations, prompt injection, shadow AI</li>
              <li><strong>Governance & Safe Use:</strong> Public vs. enterprise tools, approved vs. prohibited use cases, human review expectations</li>
              <li><strong>Real-World Scenarios:</strong> Deepfake executive fraud, AI chatbot data leakage during due diligence</li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Delivery Options</p>
            <ul className="space-y-1 text-xs text-gray-700">
              <li className="flex gap-1.5"><span className="text-db-aqua shrink-0">→</span> Live instructor-led training</li>
              <li className="flex gap-1.5"><span className="text-db-aqua shrink-0">→</span> Management-focused session</li>
              <li className="flex gap-1.5"><span className="text-db-aqua shrink-0">→</span> Firm-wide employee awareness sessions</li>
              <li className="flex gap-1.5"><span className="text-db-aqua shrink-0">→</span> Tailored for financial services environments</li>
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

      {/* ── What This Delivers ───────────────────────────── */}
      <SectionHeading>What AI Risk Intelligence Delivers</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed">
        AI Risk Intelligence enables firms to:
      </p>
      <div className="mt-3 grid grid-cols-3 gap-3">
        {[
          { title: 'Adopt AI safely', desc: 'Without slowing innovation — governance that enables, not restricts.' },
          { title: 'Protect sensitive data', desc: 'Across teams and workflows — investor data, fund strategies, and PII.' },
          { title: 'Strengthen governance', desc: 'In line with regulatory expectations — exam-ready documentation and policies.' },
          { title: 'Reduce cyber exposure', desc: 'As AI usage scales — controls that grow with adoption.' },
          { title: 'Demonstrate control', desc: 'To investors, boards, and regulators — a complete, defensible answer.' },
          { title: 'Scale without headcount', desc: 'Enterprise-grade AI governance delivered by Drawbridge — no internal lift required.' },
        ].map(({ title, desc }) => (
          <div key={title} className="rounded-lg border border-gray-200 bg-white p-4">
            <p className="text-xs font-bold text-db-dark mb-1">{title}</p>
            <p className="text-xs text-gray-600">{desc}</p>
          </div>
        ))}
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
            description="Hedge funds, PE firms, and family offices facing SEC exams, LP due diligence, or board-level AI governance questions. AI Risk Intelligence gives them documented evidence of oversight."
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
              context: 'Classic expansion trigger. The four-pillar program positions perfectly here — consult first to understand the landscape, then assess, govern, and train.',
            },
            {
              trigger: '"Our employees are using AI tools we haven\'t approved"',
              context: 'Shadow AI is nearly universal. Entry point for the full program — consultation surfaces the scope, assessment validates it, policy sets the rules, training changes behavior.',
            },
            {
              trigger: '"Our LPs / regulators are asking about our AI governance"',
              context: 'The complete program gives them a documented answer: we consulted with experts, assessed our environment, we have a policy, and our employees are trained. That\'s defensible.',
            },
            {
              trigger: '"We\'re rolling out [ChatGPT / Copilot / Claude] company-wide"',
              context: 'A rollout without governance is a risk event. Offer AI Risk Intelligence as the governance layer that enables the rollout to happen safely.',
            },
            {
              trigger: '"We need an AI policy"',
              context: 'Don\'t just sell Govern. Ask what\'s driving the need — a regulatory ask, an LP question, an incident? Then position the full program around that context.',
            },
          ].map((item, i) => (
            <div key={i} className="rounded-md bg-gray-50 border border-gray-200 p-3">
              <p className="text-sm font-medium text-db-dark">{item.trigger}</p>
              <p className="text-xs text-gray-600 mt-1">{item.context}</p>
            </div>
          ))}
        </div>
      </SubSection>

      {/* ── How to Position ──────────────────────────────── */}
      <SectionHeading>How to Position AI Risk Intelligence</SectionHeading>

      <SubSection icon="🎯" title="Why the Full Program — Not Just Individual Services">
        <p className="text-sm text-gray-700 mb-3">
          Each pillar stands alone, but the full program is the complete answer:
        </p>
        <div className="space-y-2">
          <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
            <p className="text-sm font-medium text-db-dark">Consultation without assessment leaves blind spots</p>
            <p className="text-xs text-gray-600 mt-1">
              A consultation surfaces known risks — but a structured assessment of the actual platform configurations reveals what no one knew to look for.
            </p>
          </div>
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
            <p className="text-sm font-medium text-db-dark">The full program = a complete answer to anyone asking</p>
            <p className="text-xs text-gray-600 mt-1">
              When an LP or regulator asks &ldquo;how are you governing AI?&rdquo; — the client can answer: we had expert consultation, a formal assessment, an AI policy, and our people are trained. That&apos;s the complete, defensible answer.
            </p>
          </div>
        </div>
      </SubSection>

      <SubSection icon="💬" title="Talk Tracks">
        <div className="space-y-3 mt-1">
          <div className="rounded-md bg-gray-50 p-3 border border-gray-200">
            <p className="text-xs font-semibold text-db-dark uppercase tracking-wide mb-1">Opening the Conversation</p>
            <p className="text-sm italic text-gray-700">
              &ldquo;AI adoption is already embedded across most firms — the governance hasn&apos;t
              kept pace. We&apos;ve built a structured four-pillar program — consult, assess, govern,
              and train — specifically for alternative investment firms. Have you had a chance to
              formally review your AI setup?&rdquo;
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
              your tools, and the questions your LPs and regulators are already asking.
              And it&apos;s vendor-neutral — we have no conflicts of interest in what we recommend.&rdquo;
            </p>
          </div>
        </div>
      </SubSection>

      {/* ── Why Drawbridge ───────────────────────────────── */}
      <SectionHeading>Why Drawbridge</SectionHeading>
      <div className="mt-3 grid grid-cols-2 gap-4">
        {[
          {
            num: '1',
            title: 'Built for alternatives',
            desc: 'Purpose-built for hedge funds, private equity firms, and RIAs — not generic enterprise environments. We know the regulatory landscape, the LP scrutiny, and the operational constraints unique to alts.',
          },
          {
            num: '2',
            title: 'Independent and trusted',
            desc: 'Vendor-neutral advice with no conflicts of interest — focused solely on your risk. Regulators expect independent oversight of AI governance, not a managed service provider self-reviewing.',
          },
          {
            num: '3',
            title: 'Proven at scale',
            desc: 'Trusted by 1,200+ firms globally, delivering insight across the investment ecosystem. When a client asks "Is this normal?" — we can actually answer that with real benchmarking data.',
          },
          {
            num: '4',
            title: 'Powered by Cyber Risk Intelligence',
            desc: 'Integrated with Drawbridge\'s broader platform — enabling visibility, benchmarking, and continuous improvement. AI governance isn\'t a standalone product, it\'s part of the complete program.',
          },
        ].map(({ num, title, desc }) => (
          <div key={num} className="rounded-lg border border-gray-200 bg-white overflow-hidden">
            <div className="bg-db-dark px-4 py-2.5 flex items-center gap-2">
              <span className="text-xs font-bold text-db-aqua">{num}</span>
              <p className="text-xs font-semibold text-white">{title}</p>
            </div>
            <div className="p-4">
              <p className="text-xs text-gray-700 leading-relaxed">{desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ── Competitive Awareness ─────────────────────────── */}
      <SectionHeading>Competitive Awareness</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed">
        The window to own this space is open but not permanent. Drawbridge&apos;s
        differentiation is alt asset specialization, vendor independence, and a complete
        four-pillar program — not a checkbox vendor or a generalist MSP.
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
            MSPs are increasingly pitching AI governance services. Use the independence
            argument — the same way we position against MSP-run cyber programs generally.
            Regulators expect independent oversight. An MSP self-reviewing their own AI
            environment is not independent oversight.
          </p>
        </div>
      </div>

      {/* ── Natural Expansion ─────────────────────────────── */}
      <SectionHeading>Natural Expansion — What Comes Next</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed">
        Every AI Risk Intelligence engagement generates follow-on conversations. Know where to take the client next.
      </p>
      <div className="mt-3 grid grid-cols-3 gap-3">
        {[
          { service: 'AI Pen Testing', desc: 'Prompt injection, model manipulation, and AI-specific attack simulation. Flag for clients in tech-forward or high-risk environments.' },
          { service: 'Cyber Risk Assessment (CRA)', desc: 'The AI assessment validates several controls that appear in the broader CRA — SSO, least privilege, authentication. Bundle clients often have CRA gaps to address.' },
          { service: 'Tabletop Exercises (AI-Focused)', desc: 'Simulate AI misuse scenarios — deepfake fraud, data exfiltration via AI tool, shadow AI incident. Most IR plans don\'t account for AI threats yet.' },
          { service: 'Vendor Risk Assessments', desc: 'Formal due diligence on AI vendors (OpenAI, Anthropic, Microsoft). Required for most regulatory frameworks and increasingly expected by LPs.' },
          { service: 'Phishing Campaigns', desc: 'AI-generated phishing simulations test whether employees can identify increasingly sophisticated, AI-crafted lures — a natural complement to AI security training.' },
          { service: 'Ongoing Advisory', desc: 'Staying current as tools, threats, and regulations evolve. A natural follow-on for clients who want continued expert guidance post-program.' },
        ].map((item) => (
          <CharacteristicCard key={item.service} title={item.service} description={item.desc} />
        ))}
      </div>

      {/* ── Referral Partner Context ─────────────────────── */}
      <SectionHeading>Referral Partner Context</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed">
        JP Morgan and AirGC have already told Nate Ford they have clients in need of
        this and asked for collateral to share. When you get an inbound from a referral
        partner on AI, treat it as a warm lead and move quickly.
      </p>
      <div className="mt-3 rounded-md bg-gray-50 border border-gray-200 p-4">
        <p className="text-sm text-gray-700">
          <strong>What to send referral partners:</strong> Use the official{' '}
          <em>AI Risk Intelligence</em> one-pager — available in Marketing Materials.
          Do not send internal documents.
        </p>
      </div>

      {/* ── Drawbridge Angle ────────────────────────────── */}
      <DrawbridgeAngle>
        <p>
          AI risk is quickly becoming an expectation, not a question. As cyber risk becomes
          embedded in due diligence, firms are increasingly expected to demonstrate governance,
          control and oversight across emerging technologies.{' '}
          <strong>AI risk is the next evolution.</strong>
        </p>
        <p className="mt-2">
          The attack surface hasn&apos;t changed — the threat has. AI is lowering the barrier
          to entry for attackers, enabling non-technical actors to generate code, automate
          phishing, and scale attacks with greater speed and precision. AI adoption is
          accelerating on both sides simultaneously.
        </p>
        <p className="mt-2">
          <strong>AI Risk Intelligence</strong> is the most demanded product offering
          Drawbridge has right now. The differentiator is specialization, independence, and
          the ability to deliver a complete four-pillar program — Consult, Assess, Govern,
          Train — rather than a single-service assessment from a generalist vendor.
        </p>
        <p className="mt-2">
          No other provider combines Drawbridge&apos;s AI governance expertise with
          intelligence from <strong>1,200+ alternative investment firms</strong> and the
          full context of their regulatory and investor environment. Clients get actionable
          outputs — not generic reports. Designed for real-world fund operations.
          <strong> Adopt AI with confidence.</strong>
        </p>
      </DrawbridgeAngle>

      {/* ── Key Terms ───────────────────────────────────── */}
      <SectionHeading>Key Terms</SectionHeading>
      <div className="grid grid-cols-3 gap-3">
        <TermBadge
          term="Shadow AI"
          definition="Unsanctioned use of AI tools by employees without organizational approval or oversight — nearly universal in alternative asset management firms and a primary driver of consultation conversations."
        />
        <TermBadge
          term="Generative AI (GenAI)"
          definition="AI systems that generate content (text, images, code, audio) based on prompts. Includes ChatGPT, Claude, Copilot, and Gemini — the platforms covered by the Assess pillar."
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
