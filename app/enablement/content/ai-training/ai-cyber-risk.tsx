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
  FlowDiagram,
} from '../../components/shared-ui';

export default function AiCyberRisk() {
  return (
    <>
      <HeroSection
        icon="🧠"
        title="AI & Cyber Risk"
        subtitle="How artificial intelligence is amplifying the threat landscape — and what it means for your clients."
      />

      {/* ── Stats Row ────────────────────────────────────── */}
      <div className="mt-6 grid grid-cols-4 gap-4">
        <StatCard label="Increase in AI-Powered Phishing (YoY)" value="+1,265%" />
        <StatCard label="Time to Craft Spear-Phish with AI" value="~5 min" />
        <StatCard label="Avg Cost of AI-Enabled Breach" value="$4.88M" />
        <StatCard label="Orgs Reporting AI-Driven Attacks" value="75%" />
      </div>

      {/* ── The AI Amplifier Effect ──────────────────────── */}
      <SectionHeading>The AI Amplifier Effect</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed">
        AI is not inherently an attacker&apos;s tool or a defender&apos;s tool — it is a
        <strong> force multiplier</strong> for whoever wields it. The same large language models
        that help junior developers write better code faster are simultaneously enabling
        less-skilled hackers to launch more sophisticated attacks. Understanding this parallel
        is the key to explaining AI cyber risk to clients.
      </p>

      <SubSection icon="💻" title="What AI Does for Developers">
        <p>
          Research from multiple sources confirms that AI dramatically accelerates software
          development and learning:
        </p>
        <ul className="list-disc pl-5 space-y-2 mt-2">
          <li>
            <strong>Anthropic RCT (2025):</strong> A randomized controlled trial found that
            developers using Claude achieved <strong>65%+ comprehension gains</strong> on
            unfamiliar codebases, with the AI acting as a &ldquo;personal tutor&rdquo; that
            adapts explanations to each developer&apos;s level.
          </li>
          <li>
            <strong>CACM / ACM Study:</strong> A large-scale analysis published in
            Communications of the ACM confirmed that <strong>junior developers see the
            largest productivity gains</strong> from AI coding assistants — effectively
            narrowing the experience gap.
          </li>
          <li>
            <strong>GitHub / Microsoft Study:</strong> Developers using GitHub Copilot
            completed tasks <strong>55% faster</strong> on average, with the effect strongest
            on boilerplate-heavy and repetitive work.
          </li>
          <li>
            <strong>GitHub Developer Surveys:</strong> 88% of developers reported
            <strong> reduced cognitive load</strong> and an improved ability to stay in flow
            state when using AI coding tools.
          </li>
        </ul>
        <p className="mt-3">
          The pattern is clear: AI compresses the learning curve. A junior developer with an
          AI assistant can operate closer to a mid-level developer in terms of output and
          code comprehension.
        </p>
      </SubSection>

      <SubSection icon="🎭" title="What AI Does for Hackers — The Mirror Image">
        <p>
          Now apply the exact same capabilities to the other side:
        </p>
        <div className="mt-3 grid grid-cols-2 gap-4">
          <CharacteristicCard
            title="Pattern Recognition → Vulnerability Scanning"
            description="The same AI that finds code patterns for developers finds security vulnerabilities for attackers — automated, at scale, and faster than any human team."
          />
          <CharacteristicCard
            title="Code Generation → Exploit & Malware Creation"
            description="AI that generates production code also generates exploit code, polymorphic malware, and evasion scripts — lowering the technical bar to near zero."
          />
          <CharacteristicCard
            title="Leveling Up Juniors → Leveling Up Script Kiddies"
            description="Just as junior devs become more senior, low-skill attackers become sophisticated threat actors. The CACM finding applies to both sides."
          />
          <CharacteristicCard
            title="Productivity Boost → Attack Volume & Speed"
            description="55% faster development means 55% faster iteration on attacks. More campaigns, higher quality, faster pivots when defenses respond."
          />
        </div>
        <p className="mt-3">
          <strong>The bottom line:</strong> The research proving AI makes good developers
          better is simultaneously proving that AI makes attackers more dangerous. Every
          capability gain is symmetric.
        </p>
      </SubSection>

      {/* ── How AI is Changing the Threat Landscape ──────── */}
      <SectionHeading>How AI is Changing the Threat Landscape</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed mb-2">
        AI isn&apos;t creating entirely new categories of attack — it&apos;s making existing
        attack vectors faster, cheaper, more convincing, and harder to detect. Here&apos;s
        what&apos;s changed:
      </p>

      <SubSection icon="🎣" title="AI-Generated Phishing">
        <p>
          Traditional phishing relied on templates — generic, often riddled with grammar
          mistakes. AI-generated phishing is <strong>personalized</strong>,
          <strong> grammatically perfect</strong>, and produced <strong>at scale</strong>.
          LLMs can scrape a target&apos;s LinkedIn, recent emails, and company news to craft
          messages indistinguishable from legitimate communications. The 1,265% increase in
          AI phishing is a direct result of this capability.
        </p>
        <p>
          <strong>For your clients:</strong> Wire-fraud risk skyrockets when an attacker
          can perfectly impersonate a CFO or external counsel in minutes.
        </p>
      </SubSection>

      <SubSection icon="🔍" title="Automated Reconnaissance & Vulnerability Discovery">
        <p>
          AI agents can now autonomously scan public-facing infrastructure, correlate CVE
          databases, and identify attack paths — work that previously required a skilled
          penetration tester working for days. These tools run continuously and adapt their
          approach based on results.
        </p>
        <FlowDiagram
          steps={[
            'AI scans target surface',
            'Correlates known CVEs',
            'Identifies attack path',
            'Generates exploit code',
            'Launches attack',
          ]}
        />
      </SubSection>

      <SubSection icon="🎭" title="Deepfakes & Voice Cloning">
        <p>
          Attackers are using AI to clone voices and create video deepfakes for social
          engineering. A 3-second audio clip is enough to clone a voice convincingly. In
          2024, a Hong Kong firm lost <strong>$25 million</strong> after an employee was
          deceived by a deepfake video call impersonating the company&apos;s CFO.
        </p>
        <p>
          <strong>For your clients:</strong> Verbal authorization for wire transfers is no
          longer a reliable control. Multi-factor verification procedures need to be
          updated.
        </p>
      </SubSection>

      <SubSection icon="🦠" title="Polymorphic Malware">
        <p>
          AI-generated malware can <strong>rewrite its own code</strong> with each execution,
          changing signatures, obfuscation patterns, and behaviors to evade signature-based
          detection. Traditional antivirus is increasingly ineffective against these threats.
          Each variant is functionally identical but structurally unique.
        </p>
      </SubSection>

      <SubSection icon="⚡" title="Speed: Weeks Compressed to Hours">
        <p>
          The cumulative effect of AI on attack timelines is dramatic. What previously took
          a skilled threat actor weeks — reconnaissance, exploit development, payload
          crafting, social engineering pretexting — can now be accomplished in hours. This
          compression means defenders have less time to detect and respond.
        </p>
        <div className="mt-3 grid grid-cols-2 gap-4">
          <CharacteristicCard
            title="Before AI"
            description="Weeks of manual recon, custom exploit development, hand-crafted phishing. Attacks were slower but still dangerous."
          />
          <CharacteristicCard
            title="With AI"
            description="Hours from initial scan to first attack. Automated toolchains run recon, generate exploits, craft phishing, and launch — continuously."
          />
        </div>
      </SubSection>

      {/* ── Talking to Clients ──────────────────────────── */}
      <SectionHeading>Talking to Clients: Claude &amp; ChatGPT Assessments</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed">
        Drawbridge now offers dedicated <strong>AI usage assessments</strong> — evaluating how
        clients&apos; organizations are adopting AI tools like Claude and ChatGPT, and whether
        appropriate guardrails are in place. Here&apos;s how to position them.
      </p>

      <SubSection icon="📋" title="What the Assessments Evaluate">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>AI tool inventory:</strong> Which AI tools are in use (sanctioned and
            unsanctioned / &ldquo;shadow AI&rdquo;)?
          </li>
          <li>
            <strong>Data exposure risk:</strong> What data is being fed into AI systems?
            Are employees pasting client PII, trade strategies, or proprietary code into
            public LLMs?
          </li>
          <li>
            <strong>Policy &amp; governance:</strong> Does the firm have an acceptable use
            policy for AI? Who approved the tools? Is there oversight?
          </li>
          <li>
            <strong>Prompt injection &amp; output risks:</strong> Are AI-generated outputs
            being reviewed before use in client communications or decision-making?
          </li>
          <li>
            <strong>Vendor risk:</strong> What are the data retention and training policies
            of the AI providers? Is the firm using enterprise tiers with appropriate
            contractual protections?
          </li>
        </ul>
      </SubSection>

      <SubSection icon="💬" title="How to Position in Renewal Conversations">
        <p>
          AI assessments are a natural expansion of existing engagements. Frame them around
          the client&apos;s reality:
        </p>
        <div className="mt-3 space-y-3">
          <div className="rounded-md bg-gray-50 p-3 border border-gray-200">
            <p className="text-xs font-semibold text-db-dark uppercase tracking-wide mb-1">
              Opening
            </p>
            <p className="text-sm italic text-gray-700">
              &ldquo;Your team is almost certainly using AI tools already — even if there
              isn&apos;t an official policy yet. We&apos;re helping firms get ahead of this
              by understanding their exposure before it becomes a compliance issue.&rdquo;
            </p>
          </div>
          <div className="rounded-md bg-gray-50 p-3 border border-gray-200">
            <p className="text-xs font-semibold text-db-dark uppercase tracking-wide mb-1">
              Value Prop
            </p>
            <p className="text-sm italic text-gray-700">
              &ldquo;Our AI assessment doesn&apos;t just check a box — it gives you a clear
              picture of how AI is being used, where your data is going, and what policies
              you need in place before your next LP due diligence review.&rdquo;
            </p>
          </div>
          <div className="rounded-md bg-gray-50 p-3 border border-gray-200">
            <p className="text-xs font-semibold text-db-dark uppercase tracking-wide mb-1">
              Objection: &ldquo;We don&apos;t use AI&rdquo;
            </p>
            <p className="text-sm italic text-gray-700">
              &ldquo;That&apos;s actually one of the most common things we hear — and in
              almost every case, the assessment reveals that employees are using AI tools
              the firm doesn&apos;t know about. That&apos;s shadow AI, and it&apos;s a
              data-leakage risk hiding in plain sight.&rdquo;
            </p>
          </div>
          <div className="rounded-md bg-gray-50 p-3 border border-gray-200">
            <p className="text-xs font-semibold text-db-dark uppercase tracking-wide mb-1">
              Objection: &ldquo;We already have an AI policy&rdquo;
            </p>
            <p className="text-sm italic text-gray-700">
              &ldquo;That&apos;s great — you&apos;re ahead of most firms. Our assessment
              validates that the policy is actually being followed and identifies gaps
              between policy and practice. Think of it as a health check.&rdquo;
            </p>
          </div>
        </div>
      </SubSection>

      <SubSection icon="🏆" title="Client-Facing Value Props">
        <div className="grid grid-cols-2 gap-3 mt-1">
          <CharacteristicCard
            title="Regulatory Readiness"
            description="SEC and state regulators are starting to ask about AI governance. Get ahead of the questions before your next exam."
          />
          <CharacteristicCard
            title="LP Confidence"
            description="Demonstrate to allocators that you have controls around AI adoption — a differentiator in competitive fundraising."
          />
          <CharacteristicCard
            title="Data Protection"
            description="Ensure proprietary strategies, client data, and PII aren't leaking into public AI models through employee usage."
          />
          <CharacteristicCard
            title="Operational Governance"
            description="Move from ad-hoc AI adoption to a governed framework with clear policies, approved tools, and oversight."
          />
        </div>
      </SubSection>

      {/* ── Drawbridge Angle ────────────────────────────── */}
      <DrawbridgeAngle>
        <p>
          Drawbridge helps firms assess, monitor, and defend against AI-amplified risk.
          Our <strong>Claude and ChatGPT assessments</strong> give clients a clear picture
          of their AI exposure — sanctioned tools, shadow AI, data flows, and governance
          gaps — before they become compliance findings or security incidents.
        </p>
        <p>
          As the threat landscape accelerates, Drawbridge&apos;s continuous monitoring
          and proactive assessment model becomes even more critical. The firms that
          understand their AI risk posture today are the ones that will be prepared for
          the regulatory and threat environment of tomorrow.
        </p>
        <p>
          <strong>Position the AI assessment as a natural add-on</strong> during renewals:
          it&apos;s a small incremental investment that addresses a fast-moving risk area
          and demonstrates proactive governance to allocators and regulators alike.
        </p>
      </DrawbridgeAngle>

      {/* ── Key Terms ───────────────────────────────────── */}
      <SectionHeading>Key Terms</SectionHeading>
      <div className="grid grid-cols-3 gap-3">
        <TermBadge
          term="LLM"
          definition="Large Language Model — AI systems trained on massive text datasets that can generate human-like text, code, and analysis (e.g., ChatGPT, Claude)."
        />
        <TermBadge
          term="Prompt Injection"
          definition="An attack where malicious input tricks an AI model into ignoring its instructions and executing unintended actions or revealing sensitive data."
        />
        <TermBadge
          term="Deepfake"
          definition="AI-generated synthetic media (video, audio, images) designed to convincingly impersonate real people for social engineering or fraud."
        />
        <TermBadge
          term="Polymorphic Malware"
          definition="Malware that uses AI to automatically rewrite its own code, changing its signature with each execution to evade detection tools."
        />
        <TermBadge
          term="AI Red Teaming"
          definition="Structured testing of AI systems for vulnerabilities, biases, and misuse potential — increasingly required by regulators and best-practice frameworks."
        />
        <TermBadge
          term="Shadow AI"
          definition="Unsanctioned use of AI tools by employees without organizational approval or oversight — a growing data-leakage and compliance risk."
        />
      </div>
    </>
  );
}
