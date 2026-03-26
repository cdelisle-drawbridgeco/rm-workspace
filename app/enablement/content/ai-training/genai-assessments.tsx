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

export default function GenAiAssessments() {
  return (
    <>
      <HeroSection
        icon="🔐"
        title="GenAI Security Assessments"
        subtitle="Drawbridge's ChatGPT and Claude Security Assessments — what they are, who they're for, how to sell them, and what clients get."
      />
      <LastUpdated date="March 25, 2026 at 3:45 PM" />

      {/* ── Why This Matters Now ─────────────────────────── */}
      <div className="mt-6 grid grid-cols-4 gap-4">
        <StatCard label="Firms Already Using AI in Workflows" value="Most" />
        <StatCard label="Common Finding: Shadow AI Usage" value="Nearly Universal" />
        <StatCard label="Clients Surprised by Default Settings" value="Every Assessment" />
        <StatCard label="Avg Risk Findings Per Assessment" value="28" />
      </div>

      <SectionHeading>Why This Matters Now</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed">
        AI adoption is accelerating faster than governance and security can keep pace. Most
        alternative asset management firms have already integrated AI tools into their daily
        workflows — but very few have evaluated whether those tools are configured securely
        or governed appropriately.
      </p>
      <p className="text-sm text-gray-700 leading-relaxed mt-2">
        These assessments answer the most pressing question firms are now facing:{' '}
        <strong>&ldquo;Are we using AI safely, defensibly, and in a way that minimizes business risk?&rdquo;</strong>
      </p>
      <p className="text-sm text-gray-700 leading-relaxed mt-2">
        This is not a hypothetical risk. Clients are routinely surprised by what settings
        are turned on by default. Employee AI usage exposes confidential fund data,
        investor information, and proprietary strategies to platforms that may train on
        that data — and in most cases, no one in the firm knows it&apos;s happening.
      </p>

      {/* ── What We're Launching ─────────────────────────── */}
      <SectionHeading>What We&apos;re Launching</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed">
        Drawbridge is launching two new parallel assessment offerings — with a third (Gemini) in development:
      </p>

      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="rounded-lg border border-gray-200 bg-white p-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xl">💬</span>
            <h3 className="font-semibold text-db-dark">ChatGPT Security Assessment</h3>
          </div>
          <p className="text-sm text-gray-600">
            A structured audit of the security controls, governance processes, and operational
            safeguards a client has in place around the use of ChatGPT.
          </p>
          <p className="text-xs text-gray-500 mt-2 font-medium">Requires: ChatGPT Business or Enterprise</p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xl">🤖</span>
            <h3 className="font-semibold text-db-dark">Claude Security Assessment</h3>
          </div>
          <p className="text-sm text-gray-600">
            A structured audit of the security controls, governance processes, and operational
            safeguards a client has in place around the use of Claude.
          </p>
          <p className="text-xs text-gray-500 mt-2 font-medium">Requires: Claude Enterprise</p>
        </div>
      </div>

      <div className="mt-4 rounded-md bg-db-aqua/10 border border-db-aqua/30 p-4">
        <p className="text-sm text-db-dark font-medium">
          Core definition: &ldquo;A structured audit of AI security controls and governance —
          focused on preventing data leakage, misuse, and compliance gaps.&rdquo;
        </p>
      </div>

      {/* ── Who to Target ────────────────────────────────── */}
      <SectionHeading>Who to Target</SectionHeading>

      <SubSection icon="🎯" title="Strong Fit Clients">
        <div className="grid grid-cols-2 gap-3 mt-1">
          <CharacteristicCard
            title="Active ChatGPT or Claude Enterprise Users"
            description="Firms that have already deployed ChatGPT Business/Enterprise or Claude Enterprise — these are the only clients we can assess."
          />
          <CharacteristicCard
            title="Regulated & Investor-Scrutinized Firms"
            description="Firms facing SEC exams, LP due diligence, or board-level AI governance questions. The assessment provides documented evidence of oversight."
          />
          <CharacteristicCard
            title="Firms Handling Sensitive or Confidential Data"
            description="Any alternative asset manager handling PII, investment strategies, LP data, or proprietary research — which is all of them."
          />
          <CharacteristicCard
            title="Leadership Asking for AI Policies or Guardrails"
            description="When a CCO, COO, or CTO is being asked to 'sign off on AI' — that's a direct trigger. They need something to sign off on."
          />
        </div>
      </SubSection>

      <SubSection icon="⚡" title="Common Trigger Events — Listen for These">
        <div className="space-y-2 mt-2">
          {[
            { trigger: '"We want to scale AI, but don\'t know our risk exposure"', context: 'Classic expansion trigger. They want to move fast but need guardrails first.' },
            { trigger: 'Employees using AI without clear rules (shadow AI)', context: 'Often discovered during CRA or phishing campaign reviews. Employees self-report using tools the firm hasn\'t approved.' },
            { trigger: 'Investor, board, or regulator questions about AI use', context: 'LPs increasingly asking about AI governance during due diligence. An assessment gives them a documented answer.' },
            { trigger: 'Security or compliance teams asked to "sign off" on AI', context: 'When the business wants to expand AI and compliance needs to validate it — that\'s exactly what this assessment does.' },
          ].map((item, i) => (
            <div key={i} className="rounded-md bg-gray-50 border border-gray-200 p-3">
              <p className="text-sm font-medium text-db-dark">&ldquo;{item.trigger}&rdquo;</p>
              <p className="text-xs text-gray-600 mt-1">{item.context}</p>
            </div>
          ))}
        </div>
      </SubSection>

      {/* ── What the Assessment Covers ───────────────────── */}
      <SectionHeading>What the Assessment Covers</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed">
        Both assessments follow the same three-phase structure. The control audit areas
        differ slightly by platform — ChatGPT-specific controls (GPTs, Codex, etc.) vs.
        Claude-specific controls (Projects, Cowork, Claude Code, etc.).
      </p>

      <SubSection icon="1️⃣" title="Phase 1: Discovery & Current-State Review">
        <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 mt-1">
          <li>Inventory of how AI is being used across teams</li>
          <li>Review of access controls and authentication methods</li>
          <li>Understanding of governance policies and training coverage</li>
        </ul>
      </SubSection>

      <SubSection icon="2️⃣" title="Phase 2: Platform-Specific Control Audit">
        <p className="text-sm text-gray-600 mb-3">
          Both assessments cover these core control domains via screenshare with an admin:
        </p>
        <div className="grid grid-cols-3 gap-2">
          {[
            'Identity & Access Management',
            'Data Protection & Privacy',
            'Sharing & Collaboration Settings',
            'Integrations & Connectors',
            'Configuration Hardening',
            'AI Feature & Capability Risks',
            'Governance, Training & Oversight',
            'Session & Network Security',
            'Data Handling & Retention',
          ].map((area) => (
            <div key={area} className="rounded-md bg-gray-50 border border-gray-200 px-3 py-2 text-xs text-gray-700 font-medium">
              {area}
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-500 mt-3">
          ChatGPT adds: GPT Security, Codex Security. Claude adds: Claude Code, Claude in Chrome, Cowork, Skills.
        </p>
      </SubSection>

      <SubSection icon="3️⃣" title="Phase 3: Risk Findings & Remediation Roadmap">
        <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 mt-1">
          <li>Clear, prioritized findings rated <strong>High / Moderate / Low</strong></li>
          <li>Each finding includes: what was found, the risk it creates, and a specific recommendation</li>
          <li>Quick wins vs. longer-term improvements clearly separated</li>
          <li>Next steps mapped to other Drawbridge services (policy, training, TTX)</li>
        </ul>
      </SubSection>

      {/* ── Real-World Examples ──────────────────────────── */}
      <SectionHeading>Real-World Findings — What We Actually See</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed">
        Clients are consistently surprised by what&apos;s turned on by default. These are
        representative findings from actual assessments — the kind of thing an RM should
        know to have credible conversations.
      </p>

      <div className="mt-4 space-y-3">
        <div className="rounded-lg border-l-4 border-red-500 bg-red-50 p-4">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-bold text-red-700 bg-red-100 px-2 py-0.5 rounded">HIGH</span>
            <span className="text-sm font-semibold text-gray-800">SSO Not Configured (ChatGPT)</span>
          </div>
          <p className="text-sm text-gray-700">
            Without SSO, user access may persist after employee termination, credentials may be
            weak or reused, and access cannot be centrally revoked. This increases the risk of
            unauthorized access to sensitive prompts, files, and GPT configurations.
          </p>
          <p className="text-xs text-gray-500 mt-1 italic">Fix: Enforce SSO through the corporate IdP, disable local ChatGPT passwords.</p>
        </div>

        <div className="rounded-lg border-l-4 border-red-500 bg-red-50 p-4">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-bold text-red-700 bg-red-100 px-2 py-0.5 rounded">HIGH</span>
            <span className="text-sm font-semibold text-gray-800">Users Can Access External GPTs (ChatGPT)</span>
          </div>
          <p className="text-sm text-gray-700">
            If users can access GPTs created outside the organization&apos;s workspace, they may
            interact with tools that have unvetted prompts, external API connections, or unknown
            data handling practices. Sensitive information may be shared with third parties without
            the firm knowing.
          </p>
          <p className="text-xs text-gray-500 mt-1 italic">Fix: Restrict users to internally approved GPTs only. Implement a formal review process for any external GPT.</p>
        </div>

        <div className="rounded-lg border-l-4 border-red-500 bg-red-50 p-4">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-bold text-red-700 bg-red-100 px-2 py-0.5 rounded">HIGH</span>
            <span className="text-sm font-semibold text-gray-800">Claude Code Bypass Permissions Allowed (Claude)</span>
          </div>
          <p className="text-sm text-gray-700">
            Bypass mode enables Claude to execute arbitrary commands without oversight. Prompt
            injection attacks could cause Claude to exfiltrate data, modify critical files, or
            corrupt system state — without user knowledge.
          </p>
          <p className="text-xs text-gray-500 mt-1 italic">Fix: Never enable bypass mode in production. Limit to sandboxed dev environments only.</p>
        </div>

        <div className="rounded-lg border-l-4 border-red-500 bg-red-50 p-4">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-bold text-red-700 bg-red-100 px-2 py-0.5 rounded">HIGH</span>
            <span className="text-sm font-semibold text-gray-800">Organization Creation Unrestricted (Claude)</span>
          </div>
          <p className="text-sm text-gray-700">
            Without restrictions, employees can create shadow organizations outside IT visibility
            and security controls. Shadow organizations bypass corporate policies, audit logging,
            and data governance requirements entirely.
          </p>
          <p className="text-xs text-gray-500 mt-1 italic">Fix: Enable organization creation restrictions for all verified domains.</p>
        </div>

        <div className="rounded-lg border-l-4 border-orange-500 bg-orange-50 p-4">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-bold text-orange-700 bg-orange-100 px-2 py-0.5 rounded">MODERATE</span>
            <span className="text-sm font-semibold text-gray-800">SCIM Not Enabled (ChatGPT)</span>
          </div>
          <p className="text-sm text-gray-700">
            Manual user management results in orphaned accounts, delayed deprovisioning, and
            inconsistent role assignments. Former employees retaining access pose a significant
            insider risk — especially in a firm handling sensitive fund data.
          </p>
          <p className="text-xs text-gray-500 mt-1 italic">Fix: Enable SCIM provisioning so user lifecycle events automatically reflect in ChatGPT.</p>
        </div>

        <div className="rounded-lg border-l-4 border-orange-500 bg-orange-50 p-4">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-bold text-orange-700 bg-orange-100 px-2 py-0.5 rounded">MODERATE</span>
            <span className="text-sm font-semibold text-gray-800">Connector Chat Sharing Enabled (Claude)</span>
          </div>
          <p className="text-sm text-gray-700">
            Sharing connector-based chats could expose derived insights from sensitive data sources
            even if raw data isn&apos;t visible. Recipients may be able to reverse-engineer
            sensitive information from Claude&apos;s responses about restricted data sources.
          </p>
          <p className="text-xs text-gray-500 mt-1 italic">Fix: Disable connector chat sharing unless absolutely necessary. Require data owner approval.</p>
        </div>
      </div>

      {/* ── How to Sell It ───────────────────────────────── */}
      <SectionHeading>How to Position This</SectionHeading>

      <SubSection icon="🎯" title="Core Positioning">
        <p className="text-sm text-gray-700 mb-3">This assessment is:</p>
        <div className="grid grid-cols-2 gap-3">
          <CharacteristicCard
            title="Proactive, Not Reactive"
            description="A security audit before an incident happens — not a response to one. Frame it as a forward-looking governance exercise."
          />
          <CharacteristicCard
            title="Enables AI, Doesn't Slow It Down"
            description="The goal isn't to restrict AI usage. It's to make sure the firm can innovate with AI safely and defensibly."
          />
          <CharacteristicCard
            title="Fast, High-Value Engagement"
            description="A relatively quick, focused exercise that delivers a clear report with actionable findings and opens the door to broader services."
          />
          <CharacteristicCard
            title="Compliance & Investor Ready"
            description="Gives the firm documented evidence of AI governance — something CCOs, boards, LPs, and regulators can point to."
          />
        </div>
      </SubSection>

      <SubSection icon="💬" title="Talk Tracks">
        <div className="space-y-3 mt-1">
          <div className="rounded-md bg-gray-50 p-3 border border-gray-200">
            <p className="text-xs font-semibold text-db-dark uppercase tracking-wide mb-1">Core Message</p>
            <p className="text-sm italic text-gray-700">
              &ldquo;This helps you innovate with AI while staying aligned with security, investor,
              and regulatory requirements. AI usage significantly increases the firm&apos;s attack
              surface, and these exercises aim to mitigate reputational and financial damage due
              to a weak AI security program.&rdquo;
            </p>
          </div>
          <div className="rounded-md bg-gray-50 p-3 border border-gray-200">
            <p className="text-xs font-semibold text-db-dark uppercase tracking-wide mb-1">Opening the Conversation</p>
            <p className="text-sm italic text-gray-700">
              &ldquo;A lot of firms I talk to are already using ChatGPT or Claude — but haven&apos;t
              had a chance to review whether those environments are configured securely. We now
              offer a point-in-time assessment that reviews the full security and governance setup.
              Is that something you&apos;ve looked at?&rdquo;
            </p>
          </div>
          <div className="rounded-md bg-gray-50 p-3 border border-gray-200">
            <p className="text-xs font-semibold text-db-dark uppercase tracking-wide mb-1">When They Say &ldquo;We Don&apos;t Use AI&rdquo;</p>
            <p className="text-sm italic text-gray-700">
              &ldquo;That&apos;s actually one of the most common things we hear — and in nearly every
              case, employees are already using AI tools the firm isn&apos;t aware of. Shadow AI is
              almost universal. Our assessment surfaces that exposure and helps you get ahead of it
              before it becomes a compliance finding.&rdquo;
            </p>
          </div>
          <div className="rounded-md bg-gray-50 p-3 border border-gray-200">
            <p className="text-xs font-semibold text-db-dark uppercase tracking-wide mb-1">When They Ask What We Actually Do</p>
            <p className="text-sm italic text-gray-700">
              &ldquo;We do a live screenshare with an admin and walk through the full security
              configuration — access controls, data sharing settings, integrations, governance
              policies, the works. You get a report with every finding rated High, Moderate, or Low,
              with specific remediation guidance for each one.&rdquo;
            </p>
          </div>
        </div>
      </SubSection>

      {/* ── Requirements & Scope ─────────────────────────── */}
      <SectionHeading>Requirements & Scope</SectionHeading>

      <div className="grid grid-cols-2 gap-4 mt-2">
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <h4 className="font-semibold text-db-dark text-sm mb-3">Requirements to Perform the Assessment</h4>
          <ul className="space-y-2">
            {[
              'An enterprise version of the AI tool being assessed (ChatGPT Business/Enterprise or Claude Enterprise)',
              'An AI tool administrator who has access to all security configurations',
              'Dedicated time for a screenshare with the client',
            ].map((req, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="text-db-aqua mt-0.5">✓</span>
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <h4 className="font-semibold text-db-dark text-sm mb-3">Scope Guardrails</h4>
          <div className="mb-3">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Included</p>
            <ul className="space-y-1 text-sm text-gray-700">
              <li className="flex gap-2"><span className="text-green-600">✓</span> Audit of controls via screenshare/interview</li>
              <li className="flex gap-2"><span className="text-green-600">✓</span> Risk findings and remediation report</li>
              <li className="flex gap-2"><span className="text-green-600">✓</span> Ongoing risk mitigation guidance from advisors</li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Not Included</p>
            <ul className="space-y-1 text-sm text-gray-700">
              <li className="flex gap-2"><span className="text-red-400">✗</span> Implementing technical controls</li>
              <li className="flex gap-2"><span className="text-red-400">✗</span> Acting as platform administrator</li>
              <li className="flex gap-2"><span className="text-red-400">✗</span> Continuous monitoring</li>
              <li className="flex gap-2"><span className="text-red-400">✗</span> AI pentesting or prompt injection testing (yet)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Services Alignment ───────────────────────────── */}
      <SectionHeading>Services Alignment — Natural Next Steps</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed">
        The assessment is designed as an entry point. Every report generates a list of
        next steps that map directly to other Drawbridge services — making this a natural
        expansion conversation.
      </p>
      <div className="mt-3 grid grid-cols-3 gap-3">
        {[
          { service: 'AI Security Awareness Training', desc: 'Train employees on AI-specific cyber risks — phishing, data leakage, shadow AI behavior.' },
          { service: 'AI Policy Development', desc: 'Dedicated AI policies covering approved tools, prohibited uses, data handling rules, and employee responsibilities.' },
          { service: 'AI-Focused Tabletop Exercises', desc: 'Simulate AI misuse scenarios — most IR plans don\'t account for these yet.' },
          { service: 'Vendor Risk Assessment', desc: 'Formal due diligence on AI vendors (OpenAI, Anthropic) — required for most regulatory frameworks.' },
          { service: 'CRA & Cloud Assessments', desc: 'The AI assessment validates cyber governance controls that also appear in the CRA — SSO, least privilege, authentication.' },
          { service: 'Phishing Campaigns', desc: 'AI-generated phishing simulations test whether employees can identify increasingly sophisticated AI-crafted lures.' },
        ].map((item) => (
          <CharacteristicCard key={item.service} title={item.service} description={item.desc} />
        ))}
      </div>

      {/* ── Drawbridge Angle ────────────────────────────── */}
      <DrawbridgeAngle>
        <p>
          The GenAI Security Assessments are a <strong>direct response to what clients are
          already asking about</strong> — and what regulators and investors are starting to
          require. AI adoption is not slowing down. Every alternative asset manager using
          ChatGPT or Claude Enterprise is operating with a security and governance footprint
          that almost certainly has misconfigured defaults, insufficient access controls,
          and gaps in policy coverage.
        </p>
        <p className="mt-2">
          Position this as a <strong>proactive, fast, high-value engagement</strong> that
          delivers immediate clarity and actionable findings. It&apos;s also a direct
          pipeline opener — every report generates a remediation roadmap that maps to
          training, policy work, tabletops, and vendor assessments.
        </p>
        <p className="mt-2">
          <strong>The key insight for your conversations:</strong> clients are always
          surprised by what they find. Default settings expose more than anyone realizes.
          That surprise — and the clear path to fixing it — is what makes this engagement
          land well.
        </p>
        <p className="mt-2">
          Drawbridge is the only cybersecurity firm purpose-built for alternative asset
          management with both the AI assessment capability <em>and</em> the context of
          <strong> 1,000+ fund relationships</strong> to benchmark findings against industry
          norms. When a client asks &ldquo;Is this normal?&rdquo; — we can actually answer that.
          <strong> Raise Your Guard. Raise Your Score.</strong>
        </p>
      </DrawbridgeAngle>

      {/* ── Key Terms ───────────────────────────────────── */}
      <SectionHeading>Key Terms</SectionHeading>
      <div className="grid grid-cols-3 gap-3">
        <TermBadge
          term="Shadow AI"
          definition="Unsanctioned use of AI tools by employees without organizational approval or oversight — a near-universal finding in assessments."
        />
        <TermBadge
          term="SSO (Single Sign-On)"
          definition="Centralized authentication that ties AI platform access to corporate identity management, enabling instant deprovisioning when employees leave."
        />
        <TermBadge
          term="SCIM"
          definition="System for Cross-domain Identity Management — automates user provisioning and deprovisioning so AI access stays in sync with HR records."
        />
        <TermBadge
          term="GPT (Custom GPT)"
          definition="A custom version of ChatGPT configured with specific instructions, files, and capabilities. External GPTs can expose sensitive firm data to unvetted third parties."
        />
        <TermBadge
          term="Claude Code / Cowork"
          definition="Advanced Claude features that can access local files and execute code — powerful capabilities that require strict governance to prevent unintended data exposure."
        />
        <TermBadge
          term="Connector"
          definition="An integration that connects an AI platform to external data sources (e.g., Slack, Google Drive). Connectors significantly expand the AI's access to sensitive firm data."
        />
      </div>
    </>
  );
}
