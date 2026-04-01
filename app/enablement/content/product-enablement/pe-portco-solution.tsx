'use client';

import React from 'react';
import {
  StatCard,
  SectionHeading,
  HeroSection,
  DrawbridgeAngle,
  SubSection,
  LastUpdated,
} from '../../components/shared-ui';

function OutcomeTag({ number, label }: { number: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-db-aqua/40 bg-db-aqua/10 px-2.5 py-1 text-xs font-medium text-db-aqua-dark">
      <span className="font-bold">O{number}</span>
      <span>{label}</span>
    </span>
  );
}

function LifecycleCard({
  stage,
  label,
  description,
  angle,
}: {
  stage: string;
  label: string;
  description: string;
  angle: string;
}) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white overflow-hidden">
      <div className="bg-db-dark px-4 py-2.5 flex items-center gap-2">
        <span className="text-xs font-bold text-db-orange">{stage}</span>
        <p className="text-xs font-semibold text-white">{label}</p>
      </div>
      <div className="p-4 space-y-3">
        <p className="text-xs text-gray-700 leading-relaxed">{description}</p>
        <div className="rounded border-l-4 border-db-aqua/50 bg-db-aqua/5 px-3 py-2">
          <p className="text-xs font-semibold text-db-aqua-dark mb-0.5">RM angle</p>
          <p className="text-xs text-gray-600 italic">{angle}</p>
        </div>
      </div>
    </div>
  );
}

function CompareRow({
  dimension,
  drawbridge,
  msp,
}: {
  dimension: string;
  drawbridge: string;
  msp: string;
}) {
  return (
    <div className="grid grid-cols-3 gap-0 border-b border-gray-100 last:border-0">
      <div className="px-3 py-3 bg-gray-50">
        <p className="text-xs font-semibold text-db-dark">{dimension}</p>
      </div>
      <div className="px-3 py-3 border-l border-gray-100">
        <p className="text-xs text-gray-700 leading-relaxed">{drawbridge}</p>
      </div>
      <div className="px-3 py-3 border-l border-gray-100">
        <p className="text-xs text-gray-500 leading-relaxed">{msp}</p>
      </div>
    </div>
  );
}

export default function PEPortcoSolution() {
  return (
    <>
      <HeroSection
        icon="🏭"
        title="PE Portfolio Company Cyber Services"
        subtitle="Protect Capital. Strengthen Portfolios. Maximize Value. — end-to-end cyber risk intelligence from acquisition through exit."
      />
      <LastUpdated date="April 1, 2026 at 9:00 AM" />

      {/* ── Stats Row ─────────────────────────────────────── */}
      <div className="mt-6 grid grid-cols-4 gap-4">
        <StatCard label="Alternative Investment Firms on Platform" value="1,200+" />
        <StatCard label="Assets Under Management Protected" value="$1.7T+" />
        <StatCard label="ODD Reviews Supported" value="2,000+" />
        <StatCard label="Portfolio Monitoring Coverage" value="Acquisition → Exit" />
      </div>

      {/* ── The Problem ───────────────────────────────────── */}
      <SectionHeading>The PE Cyber Problem</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed">
        For private equity firms, <strong>cyber risk is investment risk.</strong> A single weak
        control at a portfolio company can delay deals, erode valuations, or undermine LP confidence.
        Yet most PE sponsors struggle to answer three basic questions consistently:
      </p>
      <div className="mt-3 grid grid-cols-3 gap-3">
        {[
          { q: 'Where is cyber risk concentrated across our portfolio?', context: 'Portfolio visibility' },
          { q: 'Are things improving, or just being re-assessed?', context: 'Progress tracking' },
          { q: 'Is our cyber posture defensible when compared to other funds?', context: 'Benchmarking' },
        ].map(({ q, context }, i) => (
          <div key={i} className="rounded-lg border border-gray-200 bg-white p-4">
            <p className="text-xs font-semibold text-db-orange uppercase tracking-wide mb-1">{context}</p>
            <p className="text-xs text-gray-700 italic leading-relaxed">&ldquo;{q}&rdquo;</p>
          </div>
        ))}
      </div>
      <p className="text-sm text-gray-700 leading-relaxed mt-3">
        Most existing approaches produce fragmented data, subjective scoring, or MSP-led outputs
        that lack independence. Hiring a consultant to carry out cyber testing is a one-time event —
        this is not comparable to having access to a platform that continuously provides data on
        cyber oversight across every portfolio company.
      </p>
      <div className="mt-3 rounded-lg border-l-4 border-db-dark bg-db-dark/5 p-4">
        <p className="text-xs font-semibold text-db-dark uppercase tracking-wide mb-1">The headline positioning</p>
        <p className="text-xs text-gray-700 leading-relaxed">
          <strong>MSPs manage technology. Drawbridge measures and governs cyber risk independently.</strong>{' '}
          That distinction is key. Drawbridge gives sponsors the visibility, governance, and expert
          support needed to reduce exposure across every portfolio company — from pre-deal diligence
          through exit.
        </p>
      </div>

      {/* ── Which Outcomes This Addresses ─────────────────── */}
      <SectionHeading>Which Outcomes This Addresses</SectionHeading>
      <div className="space-y-3">
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <div className="flex items-start gap-3">
            <OutcomeTag number="1" label="Raise & Retain Capital" />
            <div className="flex-1">
              <p className="text-xs font-semibold text-db-dark mb-1">Stronger LP and allocator confidence</p>
              <p className="text-xs text-gray-600 leading-relaxed">
                LPs are increasingly demanding portfolio-level cyber disclosures in ODD. A sponsor
                who can produce a consistent, independently scored view of cyber posture across
                every portco — benchmarked against 1,200+ peers — answers that question with data,
                not assurances. Sponsors who can&apos;t are increasingly on the back foot in
                fundraising conversations.
              </p>
              <p className="mt-2 text-xs text-gray-500 italic">
                &ldquo;When your LPs ask about cyber risk in the portfolio, what do you show them — and how confident are you in that answer?&rdquo;
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <div className="flex items-start gap-3">
            <OutcomeTag number="3" label="Protect the Firm from Disruption" />
            <div className="flex-1">
              <p className="text-xs font-semibold text-db-dark mb-1">Real-time oversight across the full portfolio</p>
              <p className="text-xs text-gray-600 leading-relaxed">
                A breach at any portfolio company is an incident for the GP. Drawbridge provides
                continuous monitoring — not point-in-time snapshots — so sponsors can identify
                outliers and systemic risks before they become deal-breakers, valuation events,
                or regulatory problems. The platform tracks remediation progress in real time,
                giving fully transparent updates on what&apos;s getting fixed.
              </p>
              <p className="mt-2 text-xs text-gray-500 italic">
                &ldquo;Do you know which of your portfolio companies would be hardest hit by a cyber incident today — and what you&apos;d do about it?&rdquo;
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <div className="flex items-start gap-3">
            <OutcomeTag number="4" label="Make Security a Competitive Advantage" />
            <div className="flex-1">
              <p className="text-xs font-semibold text-db-dark mb-1">Exit-ready portfolios with measurable improvements</p>
              <p className="text-xs text-gray-600 leading-relaxed">
                Buyers are running cyber due diligence in transactions and discounting valuations
                for unresolved risk. Sponsors who can show a year-on-year improvement narrative —
                remediation progress, score trajectory, benchmarked posture — create a materially
                stronger exit story. Drawbridge is designed to stand up in transactions, ODD
                reviews, and regulatory examinations.
              </p>
              <p className="mt-2 text-xs text-gray-500 italic">
                &ldquo;When a buyer runs cyber DD on your portfolio company, what does that conversation look like — and are you in front of it?&rdquo;
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <div className="flex items-start gap-3">
            <OutcomeTag number="2" label="Navigate Regulatory Complexity" />
            <div className="flex-1">
              <p className="text-xs font-semibold text-db-dark mb-1">Demonstrate active oversight to LPs and regulators</p>
              <p className="text-xs text-gray-600 leading-relaxed">
                Regulators and LPs increasingly care about whether a GP has an active, defensible
                oversight process — not just whether individual portcos are compliant. Drawbridge
                gives sponsors a standardized scoring framework and benchmarked evidence of
                oversight across diverse portfolio companies, sectors, and geographies.
              </p>
              <p className="mt-2 text-xs text-gray-500 italic">
                &ldquo;If a regulator or board asked how you oversee cyber risk across your portfolio, could you show them something that goes beyond 'each company has an MSP'?&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── The PE Lifecycle ──────────────────────────────── */}
      <SectionHeading>End-to-End Support Across the PE Lifecycle</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed">
        The Drawbridge platform and advisory team deliver continuous coverage at every stage —
        not just at deal close or exit. This is the key differentiator from point-in-time
        consulting engagements.
      </p>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <LifecycleCard
          stage="Stage 1"
          label="Due Diligence"
          description="Independent assessments that de-risk deals and speed timelines. Pre-acquisition cyber DD run by a conflict-free third party — findings, benchmarking, and remediation scoping that stand up to buyer and LP scrutiny."
          angle='"Before you close on this acquisition, do you have an independent view of the cyber posture — not just what the MSP is telling them?"'
        />
        <LifecycleCard
          stage="Stage 2"
          label="Portfolio Company Monitoring"
          description="Baseline, score and track cyber readiness across every entity. Continuous oversight — not annual snapshots — with a standardized scoring framework applied consistently across companies, sectors, and geographies."
          angle='"With this platform, you can see every portco scored on the same framework, updated continuously. One view of the whole portfolio."'
        />
        <LifecycleCard
          stage="Stage 3"
          label="Fund-Level Program Development"
          description="Build governance aligned with industry best practice. Drawbridge helps sponsors establish portfolio-wide cyber standards, policies, and escalation structures — the governance layer that sits above individual MSP relationships."
          angle='"We don\'t replace the MSPs. We sit above them, giving you the governance layer that LPs and regulators expect from a mature sponsor."'
        />
        <LifecycleCard
          stage="Stage 4"
          label="Exit Readiness"
          description="Remediate value-impacting risks and strengthen buyer confidence. Going into a transaction, Drawbridge provides a documented, independently scored improvement narrative — remediation progress, benchmarked posture, and evidence of active oversight."
          angle='"The firms that get the cleanest cyber DD in a sale process are the ones that started tracking this two years before exit, not two months."'
        />
      </div>

      {/* ── The Cyber Score ───────────────────────────────── */}
      <SectionHeading>The Cyber Score — A Governance Tool, Not a Technical Metric</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed">
        The Cyber Score is not an IT metric. It is a governance and value-protection tool designed
        explicitly for portfolio oversight, LP conversations, and buyer due diligence. The score
        simplifies communication — not analysis. It is backed by detailed findings, benchmarking,
        and remediation tracking within the platform.
      </p>
      <div className="mt-4 grid grid-cols-2 gap-3">
        {[
          {
            title: 'Identify outliers before they delay deals or exits',
            body: 'Portfolio-level scoring surfaces which companies carry the most risk — so sponsors can prioritize remediation before it shows up in a transaction.',
          },
          {
            title: 'Standardize expectations across a diverse portfolio',
            body: 'Different sizes, sectors, geographies, and maturity levels — the score creates a common language across all of them. Custom peer groups let sponsors benchmark against direct comparables or aspirational peers.',
          },
          {
            title: 'Show LPs and regulators something defensible',
            body: 'Benchmarked against 1,200+ alternative investment firms, the score carries weight in ODD reviews, LP conversations, and regulatory examinations in a way that MSP-generated reports do not.',
          },
          {
            title: 'Track improvement — continuously, not annually',
            body: 'Continuous scoring tracks progress as remediation is completed and supports year-on-year improvement narratives. Point-in-time assessments can\'t do this. The platform can.',
          },
        ].map(({ title, body }, i) => (
          <div key={i} className="rounded-lg border border-gray-200 bg-white p-4">
            <p className="text-xs font-semibold text-db-dark mb-1.5">{title}</p>
            <p className="text-xs text-gray-600 leading-relaxed">{body}</p>
          </div>
        ))}
      </div>

      {/* ── Drawbridge vs MSP ─────────────────────────────── */}
      <SectionHeading>Drawbridge vs. MSP — Why It&apos;s Not the Same Thing</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed">
        The most common pushback from PE sponsors is &ldquo;we already get cyber reports from our
        MSPs.&rdquo; This comparison addresses that directly.
      </p>
      <div className="mt-4 rounded-lg border border-gray-200 overflow-hidden">
        <div className="grid grid-cols-3 gap-0 bg-db-dark">
          <div className="px-3 py-2.5">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Dimension</p>
          </div>
          <div className="px-3 py-2.5 border-l border-white/10">
            <p className="text-xs font-semibold text-db-aqua uppercase tracking-wide">Drawbridge</p>
          </div>
          <div className="px-3 py-2.5 border-l border-white/10">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">MSP / Internal</p>
          </div>
        </div>
        <CompareRow
          dimension="Independence"
          drawbridge="Fully independent, cyber-only provider. No incentive to oversell or underplay risk. Findings are trusted because they are conflict-free."
          msp="MSPs assess controls they design, manage, or remediate. Weak findings can reflect badly on their own services — results are often softened or normalized."
        />
        <CompareRow
          dimension="Purpose"
          drawbridge="Designed explicitly for governance, portfolio oversight, and LP, board, and buyer conversations."
          msp="Typically a by-product of IT monitoring. Designed to support operational IT decisions — rarely built for investor or board communication."
        />
        <CompareRow
          dimension="Portfolio Consistency"
          drawbridge="One scoring framework applied consistently across all portcos, sectors, and geographies. Enables true cross-portfolio comparison."
          msp="Different MSPs across portfolio companies = different methodologies. Scores not comparable across entities."
        />
        <CompareRow
          dimension="Benchmarking Depth"
          drawbridge="Benchmarked against 1,200+ alternative investment firms. Contextualized by firm size, structure, and maturity. Custom peer group selection available."
          msp="Benchmarks usually limited to tool baselines or generic industry standards — often opaque or proprietary to the MSP."
        />
        <CompareRow
          dimension="Time Horizon"
          drawbridge="Continuous scoring. Tracks progress as remediation is completed. Supports year-on-year improvement narratives."
          msp="Point-in-time snapshots, often tied to audits, renewals, or incidents. Limited ability to show improvement over time."
        />
        <CompareRow
          dimension="LP & Exit Credibility"
          drawbridge="Recognized across LP due diligence, ODD reviews, regulatory examinations. Designed to stand up in transactions."
          msp="LPs may question independence. Buyers may discount internally generated scores. Limited recognition in ODD and exit processes."
        />
      </div>

      {/* ── Objection Handling ────────────────────────────── */}
      <SubSection icon="🛡️" title="Objection Handling">
        <p className="text-sm text-gray-700 leading-relaxed">
          Common pushbacks from PE sponsors and operating partners — with the right responses.
        </p>
        <div className="mt-3 space-y-3">
          {[
            {
              objection: '"We already get cyber reports from our MSPs."',
              response: 'MSPs assess their own controls. Drawbridge provides independent oversight and a consistent scoring framework across all portfolio companies — with the platform and the people to manage the oversight and scoring with you. That\'s a fundamentally different thing.',
            },
            {
              objection: '"Isn\'t a score too simplistic?"',
              response: 'The score simplifies communication, not analysis. It\'s backed by detailed findings, benchmarking, and remediation tracking within the platform. The score is what you show LPs — the platform is what you use to manage the program.',
            },
            {
              objection: '"Our portfolio companies vary too much."',
              response: 'That\'s exactly why a standardized score matters — it creates a common language across different sizes, sectors, and maturity levels. Without it, you can\'t compare, prioritize, or demonstrate improvement.',
            },
            {
              objection: '"We don\'t want to disrupt portfolio companies."',
              response: 'Drawbridge does not replace MSPs. We sit above them, providing governance and measurement without changing day-to-day IT operations. The time needed from portco teams is a few hours a year. The cost — $10–12K per company — is insignificant relative to the risk of not having this in place.',
            },
            {
              objection: '"This feels like duplication."',
              response: 'It\'s separation of duties. MSPs operate. Drawbridge oversees. That separation is exactly what LPs expect in mature governance models. The question isn\'t whether you need both — it\'s whether you can afford not to have both.',
            },
            {
              objection: '"Why does the score matter if we\'re already compliant?"',
              response: 'LPs and regulators increasingly care about whether your cyber posture is defensible and improving relative to peers — and that requires a recognized, independent benchmark. Compliance is the floor. This is how you demonstrate you\'re above it.',
            },
          ].map(({ objection, response }, i) => (
            <div key={i} className="rounded-lg border border-gray-200 p-4">
              <p className="text-xs font-semibold text-gray-800 mb-1.5">{objection}</p>
              <p className="text-xs text-gray-600 leading-relaxed">{response}</p>
            </div>
          ))}
        </div>
      </SubSection>

      {/* ── Drawbridge Angle ───────────────────────────────── */}
      <DrawbridgeAngle>
        <p>
          Portfolio Analytics is one of the most distinctive capabilities Drawbridge has built —
          and one that no point-in-time consultant or MSP can replicate. When a sponsor can pull
          up a single dashboard showing every portco scored on the same framework, benchmarked
          against 1,200+ peers, with remediation progress tracked in real time, that&apos;s not
          a cyber tool. That&apos;s a governance platform.
        </p>
        <p className="mt-2">
          The RM angle here is that the conversation isn&apos;t really about cybersecurity — it&apos;s
          about investment risk, LP trust, and exit value. Cyber risk is investment risk. Every
          quarter that a portfolio company sits unscored and unmonitored is a quarter of exposure
          that could show up at the worst possible moment: in a deal process, an LP review, or a
          regulatory examination.
        </p>
        <p className="mt-2">
          The firms that answer LP cyber questions with data and benchmarks — instead of
          assurances and MSP reports — are the ones that stand out. <strong>Raise Your Guard,
          Raise Your Score, Raise Your Bar.</strong> That&apos;s the value narrative for every
          PE sponsor conversation.
        </p>
      </DrawbridgeAngle>
    </>
  );
}
