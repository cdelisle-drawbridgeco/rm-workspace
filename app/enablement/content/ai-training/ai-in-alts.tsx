'use client';

import React from 'react';
import {
  StatCard,
  SectionHeading,
  CharacteristicCard,
  HeroSection,
  DrawbridgeAngle,
  SubSection,
  LastUpdated,
} from '../../components/shared-ui';

/* ── Risk badge component ─────────────────────────────────── */
type RiskLevel = 'Critical' | 'High' | 'Medium' | 'Low';

const RISK_COLORS: Record<RiskLevel, { bg: string; text: string; border: string }> = {
  Critical: { bg: 'bg-red-100', text: 'text-red-800', border: 'border-red-300' },
  High: { bg: 'bg-orange-100', text: 'text-orange-800', border: 'border-orange-300' },
  Medium: { bg: 'bg-yellow-50', text: 'text-yellow-800', border: 'border-yellow-300' },
  Low: { bg: 'bg-green-50', text: 'text-green-800', border: 'border-green-300' },
};

function RiskBadge({ level, label }: { level: RiskLevel; label: string }) {
  const c = RISK_COLORS[level];
  return (
    <span className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-semibold ${c.bg} ${c.text} ${c.border}`}>
      <span className={`inline-block h-1.5 w-1.5 rounded-full ${level === 'Critical' ? 'bg-red-500' : level === 'High' ? 'bg-orange-500' : level === 'Medium' ? 'bg-yellow-500' : 'bg-green-500'}`} />
      {label}
    </span>
  );
}

/* ── Use case card ────────────────────────────────────────── */
interface UseCase {
  icon: string;
  title: string;
  description: string;
  examples: string[];
  risks: { level: RiskLevel; label: string }[];
  whatCanGoWrong: string;
  drawbridgeQuestion: string;
}

function UseCaseCard({ uc }: { uc: UseCase }) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-gray-100 bg-gray-50 px-5 py-3">
        <span className="text-2xl">{uc.icon}</span>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-db-dark font-heading">{uc.title}</p>
        </div>
        <div className="flex flex-wrap gap-1.5 justify-end">
          {uc.risks.map((r, i) => (
            <RiskBadge key={i} level={r.level} label={r.label} />
          ))}
        </div>
      </div>
      {/* Body */}
      <div className="px-5 py-4 space-y-3">
        <p className="text-sm text-gray-700">{uc.description}</p>
        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">How firms are using it</p>
          <ul className="text-xs text-gray-600 space-y-1">
            {uc.examples.map((ex, i) => (
              <li key={i} className="flex items-start gap-1.5">
                <span className="text-db-aqua mt-0.5">&#8226;</span>
                <span>{ex}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-md bg-red-50 border border-red-200 p-3">
          <p className="text-xs font-semibold text-red-700 uppercase tracking-wide mb-1">What can go wrong</p>
          <p className="text-xs text-red-700">{uc.whatCanGoWrong}</p>
        </div>
        <div className="rounded-md bg-db-aqua/10 border border-db-aqua/30 p-3">
          <p className="text-xs font-semibold text-db-aqua-dark uppercase tracking-wide mb-1">Ask the client</p>
          <p className="text-xs italic text-gray-700">&ldquo;{uc.drawbridgeQuestion}&rdquo;</p>
        </div>
      </div>
    </div>
  );
}

/* ── Data ─────────────────────────────────────────────────── */
const USE_CASES: UseCase[] = [
  {
    icon: '🔬',
    title: 'Contextualized Research',
    description:
      'AI aggregates, summarizes, and interprets large volumes of information — filings, transcripts, news, research reports, market data — and presents it in a way that is specific to a firm\'s investment thesis, sector focus, or portfolio needs.',
    examples: [
      'Feeding earnings transcripts and SEC filings into an LLM alongside the firm\'s investment thesis to generate targeted insights',
      'Summarizing 50+ research reports into a sector-specific brief in minutes',
      'Cross-referencing portfolio holdings with breaking news and regulatory developments',
      'Generating investment memos from raw data inputs with firm-specific framing',
    ],
    risks: [
      { level: 'Critical', label: 'Data Leakage' },
      { level: 'High', label: 'IP Exposure' },
      { level: 'Medium', label: 'Hallucination' },
    ],
    whatCanGoWrong:
      'Proprietary investment theses, portfolio positions, and trade ideas are being fed directly into AI models. Without enterprise-grade configurations, this data may be used for model training or be accessible to the provider. A firm\'s alpha is literally being uploaded into a shared system.',
    drawbridgeQuestion:
      'When your analysts use AI for research, are they uploading proprietary data — positions, theses, portfolio details? Do you know which AI tool they\'re using and whether it\'s configured to prevent data from being used for training?',
  },
  {
    icon: '📑',
    title: 'Automated Diligence',
    description:
      'AI automates portions of due diligence by reviewing data rooms, contracts, financial statements, compliance documents, customer reviews, and operational data — highlighting red flags or areas needing deeper scrutiny.',
    examples: [
      'Scanning virtual data rooms to flag material contract risks, unusual provisions, or missing documents',
      'Reviewing financial statements across multiple portfolio companies to identify anomalies',
      'Extracting key terms from 100+ contracts and surfacing non-standard clauses',
      'Cross-referencing compliance documentation against regulatory requirements',
    ],
    risks: [
      { level: 'Critical', label: 'Confidentiality' },
      { level: 'High', label: 'Data Leakage' },
      { level: 'Medium', label: 'Regulatory' },
      { level: 'Medium', label: 'Hallucination' },
    ],
    whatCanGoWrong:
      'Data rooms contain the most sensitive information in any deal — NDA-protected financials, customer data, IP, and strategic plans. Uploading this into an AI tool without proper controls means confidential deal information could be exposed, violating NDAs and potentially securities laws.',
    drawbridgeQuestion:
      'Is your deal team using AI to review data rooms? Are they uploading NDA-protected documents into tools you haven\'t vetted? What happens to that data after the analysis is complete?',
  },
  {
    icon: '📡',
    title: 'Market Scanning',
    description:
      'AI continuously monitors markets, competitors, regulatory updates, product launches, and macroeconomic shifts to alert investors to emerging opportunities or risks in real time.',
    examples: [
      'Monitoring regulatory filings across jurisdictions for changes affecting portfolio companies',
      'Tracking competitor activity, hiring patterns, and product launches for deal sourcing',
      'Scanning news and social sentiment for early signals of portfolio company risk',
      'Aggregating macroeconomic indicators into custom dashboards with AI-generated commentary',
    ],
    risks: [
      { level: 'Medium', label: 'Hallucination' },
      { level: 'Medium', label: 'Shadow AI' },
      { level: 'Low', label: 'Data Leakage' },
    ],
    whatCanGoWrong:
      'Market scanning typically uses public data, so the direct data leakage risk is lower. The greater risk is hallucination — AI generating false signals, misinterpreting data, or surfacing inaccurate regulatory alerts that lead to bad investment decisions. Shadow AI risk is also real: analysts may be using unapproved tools for monitoring without the firm\'s knowledge.',
    drawbridgeQuestion:
      'Do you have a process for verifying AI-generated market intelligence before it influences investment decisions? How confident are you that your team is only using approved tools for this?',
  },
  {
    icon: '📊',
    title: 'Risk & Scenario Analysis',
    description:
      'LLMs generate scenario analyses, stress tests, counterfactuals, and risk narratives by combining structured data (performance, exposure, financials) with unstructured inputs (news, geopolitical developments, sentiment). Unlike traditional Monte Carlo simulations, AI can generate randomized scenarios that are contextually plausible — avoiding impossible combinations like 15% interest rates with 15% unemployment.',
    examples: [
      'Generating plausible stress scenarios that combine macro, geopolitical, and sector-specific factors',
      'Building risk narratives around portfolio exposures that incorporate current market context',
      'Running counterfactual analyses ("What happens to our fund if X regulation passes?")',
      'Producing board-ready risk reports with AI-generated commentary alongside quantitative models',
    ],
    risks: [
      { level: 'High', label: 'Data Leakage' },
      { level: 'High', label: 'Hallucination' },
      { level: 'Medium', label: 'Regulatory' },
    ],
    whatCanGoWrong:
      'Portfolio-level exposure data, fund performance, and LP information are being fed into AI models to generate scenarios. The hallucination risk is particularly acute here — an AI-generated scenario that looks authoritative but contains flawed assumptions could drive real investment decisions. There\'s also regulatory exposure if AI-generated risk reports are presented to LPs or boards without disclosure or validation.',
    drawbridgeQuestion:
      'When your risk team uses AI for scenario analysis, what validation process exists for the output? Are AI-generated risk reports being shared with LPs or your board — and do they know AI was used to produce them?',
  },
  {
    icon: '✉️',
    title: 'Investor Communications',
    description:
      'AI assists in creating LP updates, quarterly letters, pitch decks, performance summaries, and fundraising materials — drawing from internal data, CRM systems, and portfolio information.',
    examples: [
      'Drafting quarterly LP letters from performance data and portfolio commentary',
      'Generating first drafts of pitch decks using fund strategy and track record data',
      'Creating personalized LP updates based on individual investor interests and prior conversations',
      'Summarizing portfolio company updates into investor-ready narratives',
    ],
    risks: [
      { level: 'Critical', label: 'Data Leakage' },
      { level: 'High', label: 'Regulatory' },
      { level: 'High', label: 'Hallucination' },
      { level: 'Medium', label: 'IP Exposure' },
    ],
    whatCanGoWrong:
      'This is one of the highest-risk use cases. LP names, fund performance data, investment terms, and strategic positioning are all being fed into AI to generate communications. A hallucination in a quarterly letter — an incorrect return figure, a mischaracterized investment — is a compliance event. If the AI fabricates or embellishes performance data and it reaches an LP, that\'s a securities issue.',
    drawbridgeQuestion:
      'Is your IR team using AI to draft LP communications? What guardrails exist to ensure AI-generated content doesn\'t misrepresent performance or include inaccurate data before it goes out to investors?',
  },
  {
    icon: '💻',
    title: 'Code Refactoring & Model Migration',
    description:
      'For quantitative teams, AI rewrites, optimizes, and translates large codebases. Even in less technical shops, tools like Claude Code are being used to harden and codify Excel-based models and VBA into more secure and supportable applications.',
    examples: [
      'Translating legacy VBA/Excel models into Python or other production-grade languages',
      'Refactoring trading algorithms for performance optimization',
      'Migrating spreadsheet-based portfolio analytics into proper applications',
      'Code review and security hardening of quantitative strategies',
    ],
    risks: [
      { level: 'Critical', label: 'IP Exposure' },
      { level: 'High', label: 'Data Leakage' },
      { level: 'Medium', label: 'Integrity' },
    ],
    whatCanGoWrong:
      'Proprietary trading strategies, quantitative models, and algorithmic IP are the crown jewels of any investment firm. Feeding this code into an AI tool for refactoring means the firm\'s most valuable intellectual property is being uploaded to a third-party system. There\'s also an integrity risk — if AI introduces a subtle bug in a trading algorithm during refactoring, the financial consequences could be severe.',
    drawbridgeQuestion:
      'Is your quant team using AI to refactor trading code or migrate models? Are proprietary algorithms being uploaded into AI tools? What testing process validates that AI-refactored code behaves identically to the original?',
  },
];

/* ── Component ────────────────────────────────────────────── */
export default function AiInAlts() {
  return (
    <>
      <HeroSection
        icon="🏦"
        title="AI in Alternatives: How Your Clients Are Using It"
        subtitle="Real-world AI adoption across hedge funds and PE firms — and the cyber risks each use case creates."
      />

      {/* Stats */}
      <div className="mt-6 grid grid-cols-4 gap-4">
        <StatCard label="Alt Firms Using AI Tools (Est.)" value="72%" />
        <StatCard label="Employees Using Shadow AI" value="1 in 3" />
        <StatCard label="Firms With Formal AI Policy" value="<25%" />
        <StatCard label="LPs Asking About AI in ODD" value="Growing" />
      </div>

      {/* Intro */}
      <SectionHeading>The Adoption Reality</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed">
        Your clients are not waiting for regulatory clarity to adopt AI. Hedge funds and PE firms
        are already using large language models across research, diligence, risk, communications,
        and even code. The adoption is happening <strong>faster than policy can keep up</strong> —
        which is exactly where Drawbridge comes in.
      </p>
      <p className="mt-3 text-sm text-gray-700 leading-relaxed">
        This training covers the <strong>six most common AI use cases</strong> in the alternatives
        space, the <strong>specific cyber risks</strong> each one creates, and the questions you
        should be asking your clients to open the conversation.
      </p>

      {/* Risk Legend */}
      <SectionHeading>Risk Overlay: How to Read the Cards</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed mb-3">
        Each use case below includes a risk overlay showing the type and severity of cyber risk
        it creates. These risks are not theoretical — they are happening now at firms that have
        adopted AI without proper oversight.
      </p>
      <div className="rounded-lg border border-gray-200 bg-white p-4">
        <div className="grid grid-cols-2 gap-x-6 gap-y-3">
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Risk Level</p>
            <div className="flex flex-wrap gap-2">
              <RiskBadge level="Critical" label="Critical" />
              <RiskBadge level="High" label="High" />
              <RiskBadge level="Medium" label="Medium" />
              <RiskBadge level="Low" label="Low" />
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Risk Types</p>
            <div className="grid grid-cols-2 gap-1 text-xs text-gray-600">
              <p><strong>Data Leakage</strong> — proprietary data entering AI models</p>
              <p><strong>IP Exposure</strong> — trade secrets, strategies, alpha leaking</p>
              <p><strong>Hallucination</strong> — AI generating false or misleading output</p>
              <p><strong>Confidentiality</strong> — NDA/deal-protected info exposed</p>
              <p><strong>Regulatory</strong> — compliance gaps or reporting violations</p>
              <p><strong>Shadow AI</strong> — unapproved tool usage</p>
              <p><strong>Integrity</strong> — AI introducing errors into critical systems</p>
            </div>
          </div>
        </div>
      </div>

      {/* Use Case Cards */}
      <SectionHeading>The Six Use Cases</SectionHeading>
      <div className="space-y-4">
        {USE_CASES.map((uc) => (
          <UseCaseCard key={uc.title} uc={uc} />
        ))}
      </div>

      {/* Risk Heat Map */}
      <SectionHeading>Risk Heat Map: At a Glance</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed mb-3">
        Not all AI use cases carry the same risk. This heat map shows where RMs should focus
        the conversation.
      </p>
      <div className="rounded-md border border-gray-200 overflow-hidden">
        <table className="w-full text-xs">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-3 py-2 text-left font-medium text-gray-600">Use Case</th>
              <th className="px-3 py-2 text-center font-medium text-gray-600">Data Leakage</th>
              <th className="px-3 py-2 text-center font-medium text-gray-600">IP Exposure</th>
              <th className="px-3 py-2 text-center font-medium text-gray-600">Hallucination</th>
              <th className="px-3 py-2 text-center font-medium text-gray-600">Regulatory</th>
              <th className="px-3 py-2 text-center font-medium text-gray-600">Overall</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {([
              ['Contextualized Research', '🔴', '🔴', '🟡', '🟡', 'Critical'],
              ['Automated Diligence', '🔴', '🟠', '🟡', '🟡', 'Critical'],
              ['Market Scanning', '🟢', '🟢', '🟡', '🟡', 'Medium'],
              ['Risk & Scenario Analysis', '🟠', '🟡', '🔴', '🟡', 'High'],
              ['Investor Communications', '🔴', '🟡', '🔴', '🔴', 'Critical'],
              ['Code Refactoring', '🟠', '🔴', '🟡', '🟢', 'High'],
            ] as const).map(([name, dl, ip, hall, reg, overall]) => (
              <tr key={name}>
                <td className="px-3 py-2 font-medium text-gray-700">{name}</td>
                <td className="px-3 py-2 text-center">{dl}</td>
                <td className="px-3 py-2 text-center">{ip}</td>
                <td className="px-3 py-2 text-center">{hall}</td>
                <td className="px-3 py-2 text-center">{reg}</td>
                <td className="px-3 py-2 text-center">
                  <span className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-bold ${
                    overall === 'Critical' ? 'bg-red-100 text-red-800' :
                    overall === 'High' ? 'bg-orange-100 text-orange-800' :
                    'bg-yellow-50 text-yellow-800'
                  }`}>{overall}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-2 text-[11px] text-gray-400">
        🔴 Critical &nbsp; 🟠 High &nbsp; 🟡 Medium &nbsp; 🟢 Low
      </p>

      {/* The Pattern */}
      <SectionHeading>The Pattern: Adoption Without Governance</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed mb-3">
        Across all six use cases, the same pattern emerges. Understanding it is the key to
        having a productive AI conversation with any client.
      </p>
      <div className="grid grid-cols-3 gap-4">
        <CharacteristicCard
          title="1. Employees Adopt First"
          description="AI adoption in alts is bottom-up. Analysts, associates, and IR teams start using ChatGPT or Claude on their own — without policy, without enterprise accounts, without IT knowing."
        />
        <CharacteristicCard
          title="2. Sensitive Data Follows"
          description="Once adoption starts, the data flowing into AI tools escalates quickly — from public research to proprietary theses, deal docs, LP names, trading code, and performance data."
        />
        <CharacteristicCard
          title="3. Policy Lags Behind"
          description="Most firms don't have an AI acceptable use policy, enterprise-grade configurations, or vendor due diligence on AI providers. The governance gap widens as adoption accelerates."
        />
      </div>

      {/* Talking to Clients */}
      <SectionHeading>Talking to Clients About AI Adoption</SectionHeading>
      <SubSection icon="💬" title="Opening the Conversation">
        <p>
          The goal is not to make clients feel bad about AI adoption — it&apos;s to help them
          <strong> adopt safely</strong>. Position Drawbridge as the firm that helps them get
          the benefits of AI without the risk.
        </p>
        <div className="mt-3 space-y-3">
          <div className="rounded-md bg-gray-50 p-3 border border-gray-200">
            <p className="text-xs font-semibold text-db-dark uppercase tracking-wide mb-1">
              General opener
            </p>
            <p className="text-sm italic text-gray-700">
              &ldquo;We&apos;re seeing AI adoption accelerate across the alternatives space — firms
              are using it for research, diligence, risk modeling, LP communications, even code
              refactoring. The use cases are real and the productivity gains are significant. The
              question is whether the governance has kept pace with the adoption. For most firms,
              it hasn&apos;t.&rdquo;
            </p>
          </div>
          <div className="rounded-md bg-gray-50 p-3 border border-gray-200">
            <p className="text-xs font-semibold text-db-dark uppercase tracking-wide mb-1">
              For hedge funds
            </p>
            <p className="text-sm italic text-gray-700">
              &ldquo;Your analysts are almost certainly using AI for research and idea generation.
              The question is whether your investment thesis, position data, and proprietary
              models are being uploaded into tools that haven&apos;t been vetted. That&apos;s not
              a compliance question — it&apos;s an alpha-protection question.&rdquo;
            </p>
          </div>
          <div className="rounded-md bg-gray-50 p-3 border border-gray-200">
            <p className="text-xs font-semibold text-db-dark uppercase tracking-wide mb-1">
              For PE firms
            </p>
            <p className="text-sm italic text-gray-700">
              &ldquo;AI is showing up in deal teams, portfolio operations, and IR at PE firms.
              The risk that concerns me most is diligence — uploading NDA-protected data room
              materials into AI tools that your firm hasn&apos;t assessed. One data breach from a
              deal room leak creates a problem that goes well beyond cyber.&rdquo;
            </p>
          </div>
          <div className="rounded-md bg-gray-50 p-3 border border-gray-200">
            <p className="text-xs font-semibold text-db-dark uppercase tracking-wide mb-1">
              Objection: &ldquo;We&apos;re not using AI yet&rdquo;
            </p>
            <p className="text-sm italic text-gray-700">
              &ldquo;That&apos;s what most firms say — and in almost every case, employees are
              already using it. One in three employees at financial services firms uses AI tools
              the firm doesn&apos;t know about. The question isn&apos;t whether your team is using
              AI. It&apos;s whether you know which tools they&apos;re using, what data they&apos;re
              putting in, and what controls are around it.&rdquo;
            </p>
          </div>
        </div>
      </SubSection>

      <SubSection icon="🎯" title="Connecting to Drawbridge Services">
        <p>
          Every use case above connects directly to something Drawbridge delivers:
        </p>
        <div className="mt-3 rounded-md border border-gray-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-3 py-2 text-left font-medium text-gray-600">Risk</th>
                <th className="px-3 py-2 text-left font-medium text-gray-600">Drawbridge Service</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ['Proprietary data in AI tools', 'Enterprise configuration review — ensure data sharing, retention, and access controls are locked down'],
                ['No AI policy in place', 'AI policy development — acceptable use, approved tools, data handling, employee responsibilities'],
                ['Shadow AI usage', 'AI assessment — discover what tools are in use, by whom, and what data is flowing through them'],
                ['Employees unaware of risks', 'AI cybersecurity training — safe usage, data leakage risks, recognizing AI-generated threats'],
                ['AI vendor not vetted', 'AI vendor due diligence — SOC reports, data practices, contractual protections, regulatory compliance'],
                ['AI integrations not tested', 'Penetration testing of AI vendors — prompt injection, data exfiltration, API misconfigurations'],
              ].map(([risk, service], i) => (
                <tr key={i}>
                  <td className="px-3 py-2 text-gray-700 font-medium text-xs">{risk}</td>
                  <td className="px-3 py-2 text-gray-600 text-xs">{service}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SubSection>

      <DrawbridgeAngle>
        <p>
          The AI conversation is the single best expansion opportunity in your book right now.
          Every client is using AI or will be soon — and almost none of them have the governance
          in place. Drawbridge&apos;s AI assessment program covers the full surface: enterprise
          configuration review, policy development, employee training, vendor due diligence, and
          penetration testing.
        </p>
        <p>
          <strong>The framing that works:</strong> you&apos;re not asking clients to stop using AI.
          You&apos;re helping them adopt it safely — so they get the productivity gains without
          the data leakage, regulatory exposure, and LP confidence risk. That&apos;s a conversation
          every COO, CCO, and CTO wants to have.
        </p>
      </DrawbridgeAngle>

      <LastUpdated date="2026-03-03" />
    </>
  );
}
