'use client';

import React from 'react';
import {
  StatCard,
  SectionHeading,
  TermBadge,
  HeroSection,
  DrawbridgeAngle,
  SubSection,
  LastUpdated,
} from '../../components/shared-ui';

export default function DORA() {
  return (
    <>
      <HeroSection
        icon="\uD83C\uDDEA\uD83C\uDDFA"
        title="DORA \u2014 Digital Operational Resilience Act"
        subtitle="The EU's landmark regulation for ICT risk management in financial services, and what it means for Drawbridge's clients with European operations."
      />

      <div className="mt-6 grid grid-cols-4 gap-4">
        <StatCard label="Enacted" value="Jan 2023" />
        <StatCard label="In Force" value="Jan 2025" />
        <StatCard label="Scope" value="EU Financial Entities" />
        <StatCard label="ICT Providers Covered" value="Direct Oversight" />
      </div>

      {/* What Is DORA */}
      <SectionHeading>What Is DORA?</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed">
        The <strong>Digital Operational Resilience Act (DORA)</strong> is an EU regulation
        (Regulation 2022/2554) that establishes a comprehensive framework for managing
        ICT (Information and Communications Technology) risk across the European financial
        sector. Unlike directives, DORA is a <strong>regulation</strong> — meaning it applies
        directly and uniformly across all EU member states without needing national
        transposition.
      </p>
      <p className="mt-3 text-sm text-gray-700 leading-relaxed">
        DORA recognizes that digital operational resilience is not just an IT issue but a
        <strong> financial stability concern</strong>. A major cyber incident at a systemically
        important financial institution — or at a critical third-party ICT provider — could
        cascade across the financial system. DORA aims to prevent this by harmonizing ICT
        risk management rules across 21 types of financial entities.
      </p>
      <p className="mt-3 text-sm text-gray-700 leading-relaxed">
        For Drawbridge&apos;s clients, DORA matters because many alternative asset managers have
        <strong> European operations, European investors, or European portfolio companies</strong>.
        Even US-headquartered firms may need to comply if they manage EU-domiciled funds
        (common in Luxembourg and Ireland) or are classified as critical ICT providers
        to EU financial entities.
      </p>

      {/* Five Pillars */}
      <SectionHeading>The Five Pillars of DORA</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed mb-4">
        DORA is organized around five core pillars, each with detailed requirements.
      </p>

      <SubSection icon="1\uFE0F\u20E3" title="Pillar 1: ICT Risk Management">
        <p>
          Financial entities must establish a <strong>comprehensive ICT risk management
          framework</strong> that is documented, reviewed annually, and approved by the
          management body (board of directors or equivalent). Requirements include:
        </p>
        <ul className="list-disc ml-5 space-y-1">
          <li><strong>Governance</strong> — The management body bears ultimate responsibility for ICT risk. They must define, approve, and oversee the implementation of the ICT risk management framework. This is a board-level obligation, not just a CISO responsibility.</li>
          <li><strong>Identification</strong> — Map all ICT assets, systems, and dependencies. Maintain an up-to-date inventory of information assets and ICT systems, including those managed by third parties.</li>
          <li><strong>Protection &amp; Prevention</strong> — Implement security controls including access management, encryption, network security, and vulnerability management. Policies must cover data classification, identity management, and physical security.</li>
          <li><strong>Detection</strong> — Deploy mechanisms to promptly detect anomalous activity, including security monitoring, log analysis, and intrusion detection.</li>
          <li><strong>Response &amp; Recovery</strong> — Maintain incident response and business continuity plans. Conduct regular testing of recovery procedures with specific recovery time and recovery point objectives (RTO/RPO).</li>
          <li><strong>Learning &amp; Evolving</strong> — Conduct post-incident reviews, incorporate lessons learned, and continuously improve the ICT risk framework based on threat intelligence and incidents.</li>
        </ul>
      </SubSection>

      <SubSection icon="2\uFE0F\u20E3" title="Pillar 2: ICT Incident Reporting">
        <p>
          DORA establishes a <strong>harmonized incident reporting framework</strong> across
          the EU, replacing the patchwork of national reporting requirements. Key requirements:
        </p>
        <ul className="list-disc ml-5 space-y-1">
          <li><strong>Classification</strong> — Incidents must be classified using specific criteria: number of clients affected, duration, geographic spread, data losses, economic impact, and criticality of services affected.</li>
          <li><strong>Reporting Timeline</strong> — Major ICT incidents must be reported to the relevant competent authority (national regulator) using a three-stage process: <strong>initial notification</strong> (within 4 hours of classification / 24 hours of detection), <strong>intermediate report</strong> (within 72 hours), and <strong>final report</strong> (within 1 month).</li>
          <li><strong>Voluntary Reporting</strong> — Firms may voluntarily report significant cyber threats, even if no incident has occurred, to help build sector-wide threat intelligence.</li>
        </ul>
      </SubSection>

      <SubSection icon="3\uFE0F\u20E3" title="Pillar 3: Digital Operational Resilience Testing">
        <p>
          DORA requires regular testing of ICT systems and tools, going well beyond
          traditional penetration testing:
        </p>
        <ul className="list-disc ml-5 space-y-1">
          <li><strong>Basic Testing (All Entities)</strong> — Vulnerability assessments, network security scans, gap analysis, source code reviews, performance testing, and end-to-end testing at least annually.</li>
          <li><strong>Threat-Led Penetration Testing (TLPT)</strong> — Systemically important firms must conduct advanced <strong>threat-led penetration tests</strong> (similar to TIBER-EU) at least every 3 years. These are red-team exercises that simulate real-world attack scenarios based on current threat intelligence.</li>
          <li><strong>Third-Party Testing</strong> — Testing must cover critical ICT services provided by third parties, and third-party providers must participate in or support these exercises.</li>
        </ul>
      </SubSection>

      <SubSection icon="4\uFE0F\u20E3" title="Pillar 4: Third-Party ICT Risk Management">
        <p>
          This is arguably DORA&apos;s most groundbreaking pillar — and the most relevant
          to Drawbridge. DORA creates a <strong>comprehensive framework for managing
          third-party ICT risk</strong>:
        </p>
        <ul className="list-disc ml-5 space-y-2">
          <li>
            <strong>Contractual Requirements</strong> — All ICT outsourcing contracts must
            include specific provisions: service level descriptions, data location and
            processing requirements, audit rights, exit strategies, incident notification
            obligations, and security requirements. Pre-DORA contracts must be updated.
          </li>
          <li>
            <strong>Concentration Risk</strong> — Firms must identify and manage ICT
            concentration risk — over-reliance on a single provider or a small number
            of providers. Regulators can require firms to diversify if concentration
            poses systemic risk.
          </li>
          <li>
            <strong>Critical ICT Provider Oversight</strong> — For the first time, EU
            regulators have <strong>direct oversight authority</strong> over critical
            third-party ICT providers (designated by the European Supervisory Authorities).
            Major cloud providers (AWS, Azure, Google Cloud) and other critical vendors
            are subject to direct regulatory engagement, inspections, and recommendations.
          </li>
          <li>
            <strong>Register of ICT Providers</strong> — Firms must maintain a detailed
            register of all ICT third-party service providers, classifying which support
            critical or important functions.
          </li>
        </ul>
      </SubSection>

      <SubSection icon="5\uFE0F\u20E3" title="Pillar 5: Information Sharing">
        <p>
          DORA encourages (but does not mandate) financial entities to share cyber
          threat intelligence with each other through trusted information-sharing
          arrangements. The goal is to build collective defenses by enabling firms to
          learn from each other&apos;s incidents and threat observations. Sharing arrangements
          must comply with GDPR and competition law.
        </p>
      </SubSection>

      {/* Who Does DORA Apply To */}
      <SectionHeading>Who Does DORA Apply To?</SectionHeading>
      <SubSection icon="\uD83C\uDFAF" title="Scope of Application">
        <p>DORA applies to <strong>21 categories</strong> of financial entities, including:</p>
        <ul className="list-disc ml-5 space-y-1">
          <li>Credit institutions (banks)</li>
          <li>Investment firms (including EU-based fund managers)</li>
          <li><strong>Alternative Investment Fund Managers (AIFMs)</strong> — This is the EU equivalent of hedge fund and PE managers, and the category most relevant to Drawbridge clients</li>
          <li>Management companies (UCITS managers)</li>
          <li>Insurance and reinsurance undertakings</li>
          <li>Central counterparties and trade repositories</li>
          <li>Crypto-asset service providers</li>
          <li><strong>ICT third-party service providers</strong> designated as critical</li>
        </ul>
        <p className="mt-2">
          <strong>The extraterritorial angle:</strong> A US-headquartered hedge fund or PE
          firm is not directly subject to DORA. However, if that firm:
        </p>
        <ul className="list-disc ml-5 space-y-1">
          <li>Manages EU-domiciled funds (e.g., a Cayman master / Irish feeder structure) through an EU AIFM</li>
          <li>Has a European subsidiary or office that is a regulated entity</li>
          <li>Is designated as a critical ICT provider to EU financial entities</li>
        </ul>
        <p>
          ...then DORA applies to those EU-regulated components. Many Drawbridge clients
          with European fund structures need to ensure their EU operations are DORA-compliant.
        </p>
      </SubSection>

      {/* DORA vs Other Regs */}
      <SectionHeading>DORA vs. Other Regulations</SectionHeading>
      <div className="mt-2 rounded-md border border-gray-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left font-medium text-gray-600">Aspect</th>
              <th className="px-4 py-2 text-left font-medium text-gray-600">Reg S-P (US/SEC)</th>
              <th className="px-4 py-2 text-left font-medium text-gray-600">DORA (EU)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            <tr>
              <td className="px-4 py-2 font-medium">Scope</td>
              <td className="px-4 py-2">SEC-registered entities</td>
              <td className="px-4 py-2">21 categories of EU financial entities + critical ICT providers</td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-medium">Focus</td>
              <td className="px-4 py-2">Customer information protection</td>
              <td className="px-4 py-2">Comprehensive digital operational resilience</td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-medium">Third-Party Oversight</td>
              <td className="px-4 py-2">Contractual requirements</td>
              <td className="px-4 py-2">Direct regulatory oversight of critical ICT providers</td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-medium">Testing Requirements</td>
              <td className="px-4 py-2">Not specified</td>
              <td className="px-4 py-2">Annual basic testing + TLPT every 3 years for major entities</td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-medium">Incident Reporting</td>
              <td className="px-4 py-2">30-day customer notification</td>
              <td className="px-4 py-2">4-hour initial / 72-hour intermediate / 1-month final to regulators</td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-medium">Board Accountability</td>
              <td className="px-4 py-2">Implied (policies must be approved)</td>
              <td className="px-4 py-2">Explicit — management body bears ultimate responsibility</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Impact on Drawbridge */}
      <DrawbridgeAngle>
        <p>
          DORA creates significant opportunities for Drawbridge, particularly with clients
          who have European operations:
        </p>
        <ul className="list-disc ml-5 space-y-1">
          <li><strong>ICT Risk Management Frameworks</strong> → Drawbridge builds and maintains the documented frameworks DORA requires</li>
          <li><strong>Incident Response &amp; Reporting</strong> → Drawbridge&apos;s IR services help clients meet the aggressive 4-hour initial notification timeline</li>
          <li><strong>Resilience Testing</strong> → Drawbridge coordinates vulnerability assessments and penetration testing programs</li>
          <li><strong>Third-Party Risk Registers</strong> → Drawbridge helps clients build and maintain the required ICT provider registers</li>
          <li><strong>Board Reporting</strong> → Drawbridge provides board-ready reporting on ICT risk posture, which DORA requires the management body to review</li>
        </ul>
        <p className="mt-2">
          For renewals, DORA is a powerful conversation driver with any client that has
          European fund structures. Many US-headquartered firms are still figuring out
          their DORA obligations — positioning Drawbridge as a guide through DORA compliance
          adds significant renewal and expansion value. Ask in discovery: &ldquo;Do you manage
          any EU-domiciled funds or have European LPs? Let&apos;s talk about how DORA affects
          your program.&rdquo;
        </p>
      </DrawbridgeAngle>

      <SectionHeading>Key Terms</SectionHeading>
      <div className="grid grid-cols-3 gap-3">
        <TermBadge term="DORA" definition="Digital Operational Resilience Act (Regulation 2022/2554) — EU-wide regulation for ICT risk management in financial services, effective January 2025." />
        <TermBadge term="AIFM" definition="Alternative Investment Fund Manager — the EU regulatory classification for hedge fund and PE managers, authorized under the AIFMD directive." />
        <TermBadge term="ESA" definition="European Supervisory Authorities — the three EU financial regulators (EBA, ESMA, EIOPA) responsible for DORA oversight and designating critical ICT providers." />
        <TermBadge term="TLPT" definition="Threat-Led Penetration Testing — advanced red-team exercises simulating real attack scenarios, required every 3 years for systemically important entities." />
        <TermBadge term="TIBER-EU" definition="Threat Intelligence-Based Ethical Red Teaming — the ECB's framework for threat-led testing that DORA's TLPT requirements are modeled on." />
        <TermBadge term="ICT Concentration Risk" definition="The risk arising from over-dependence on a single or small number of ICT providers — DORA requires firms to identify and manage this explicitly." />
        <TermBadge term="RTO / RPO" definition="Recovery Time Objective / Recovery Point Objective — maximum acceptable downtime and data loss targets that DORA requires firms to define and test." />
        <TermBadge term="Critical ICT Provider" definition="A third-party ICT provider designated by the ESAs as critical to EU financial stability — subject to direct regulatory oversight under DORA." />
        <TermBadge term="Competent Authority" definition="The national financial regulator in each EU member state (e.g., BaFin in Germany, AMF in France) responsible for DORA enforcement." />
      </div>

      <LastUpdated date="2026-02-24" />
    </>
  );
}
