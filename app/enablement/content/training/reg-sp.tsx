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

export default function RegSP() {
  return (
    <>
      <HeroSection
        icon="\u2696\uFE0F"
        title="Regulation S-P \u2014 Deep Dive"
        subtitle="The SEC's cornerstone regulation for safeguarding customer information at financial institutions, and why it matters for every Drawbridge client."
      />
      <LastUpdated date="February 24, 2026 at 9:04 PM" />

      <div className="mt-6 grid grid-cols-4 gap-4">
        <StatCard label="Originally Adopted" value="2000" />
        <StatCard label="Major Amendment" value="2025" />
        <StatCard label="Compliance Deadline" value="Dec 2025" />
        <StatCard label="Applies To" value="All SEC-Registered" />
      </div>

      {/* What Is Reg S-P */}
      <SectionHeading>What Is Regulation S-P?</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed">
        Regulation S-P (formally &ldquo;Privacy of Consumer Financial Information&rdquo;) is the
        SEC&apos;s primary regulation governing how broker-dealers, investment companies, and
        <strong> registered investment advisers (RIAs)</strong> — including hedge fund and PE
        fund managers — must protect the personal information of their customers and
        investors. Originally adopted in 2000 under the Gramm-Leach-Bliley Act (GLBA),
        Reg S-P was <strong>significantly amended in 2025</strong> to address modern
        cybersecurity threats.
      </p>
      <p className="mt-3 text-sm text-gray-700 leading-relaxed">
        The regulation has two core pillars: <strong>privacy notices</strong> (informing
        customers about data collection and sharing practices) and the
        <strong> Safeguards Rule</strong> (requiring firms to implement written policies and
        procedures to protect customer information). The 2025 amendments dramatically
        expanded the Safeguards Rule, adding explicit incident response and breach
        notification requirements.
      </p>

      {/* Key Requirements */}
      <SectionHeading>Key Requirements</SectionHeading>

      <SubSection icon="\uD83D\uDCDC" title="The Safeguards Rule (Rule 30(a))">
        <p>
          The Safeguards Rule is the heart of Reg S-P for Drawbridge&apos;s clients. It requires
          every covered institution to adopt <strong>written policies and procedures</strong> that
          are reasonably designed to:
        </p>
        <ul className="list-disc ml-5 space-y-1">
          <li>Ensure the security and confidentiality of customer records and information</li>
          <li>Protect against anticipated threats or hazards to the security of those records</li>
          <li>Protect against unauthorized access or use that could result in substantial harm or inconvenience</li>
        </ul>
        <p>
          This is not a checkbox exercise — the SEC expects firms to implement controls
          that are <strong>appropriate to the size, complexity, and nature of their
          activities</strong>. A $10B multi-strategy hedge fund is held to a higher standard
          than a $200M single-strategy shop, but both must have documented programs.
        </p>
      </SubSection>

      <SubSection icon="\uD83C\uDD95" title="2025 Amendments \u2014 What Changed">
        <p>
          The SEC&apos;s 2025 amendments to Reg S-P represent the most significant update in
          the regulation&apos;s history. Key changes include:
        </p>
        <ul className="list-disc ml-5 space-y-2">
          <li>
            <strong>Incident Response Program (Required)</strong> — Firms must establish
            written policies and procedures for detecting, responding to, and recovering
            from unauthorized access to or use of customer information. This must include
            specific procedures for assessing the nature and scope of an incident, containing
            and remediating it, and notifying affected individuals.
          </li>
          <li>
            <strong>Breach Notification (New)</strong> — Firms must notify affected individuals
            <strong> within 30 days</strong> of becoming aware that a breach has occurred or is
            reasonably likely to have occurred. The notice must include specific details about
            the incident and steps individuals can take to protect themselves.
          </li>
          <li>
            <strong>Service Provider Oversight (Expanded)</strong> — Firms must ensure that
            their service providers (including IT vendors, cloud providers, and — notably —
            cybersecurity firms) implement appropriate safeguards. Contracts must require
            service providers to maintain protections and notify the firm of breaches.
          </li>
          <li>
            <strong>Record Keeping (Expanded)</strong> — Firms must maintain records of their
            safeguards policies, incident response procedures, and breach notifications for
            SEC examination.
          </li>
          <li>
            <strong>Exemption Removed</strong> — The previous &ldquo;no harm, no foul&rdquo; exception
            (where firms didn&apos;t need to notify if they determined no misuse occurred) has
            been <strong>eliminated</strong>. If customer information was accessed, notification
            is required regardless of whether harm occurred.
          </li>
        </ul>
      </SubSection>

      <SubSection icon="\uD83D\uDC65" title="Who Does Reg S-P Apply To?">
        <p>Reg S-P applies to every entity registered with the SEC, including:</p>
        <ul className="list-disc ml-5 space-y-1">
          <li><strong>Registered Investment Advisers (RIAs)</strong> — This covers most hedge fund and PE fund managers, since the GP entity is typically registered as an investment adviser</li>
          <li><strong>Broker-Dealers</strong> — Including prime brokers and any affiliated broker-dealer entities</li>
          <li><strong>Investment Companies</strong> — Registered funds (mutual funds, ETFs, closed-end funds)</li>
          <li><strong>Transfer Agents</strong> — Entities that maintain shareholder records</li>
        </ul>
        <p>
          <strong>Important nuance:</strong> Family offices that rely on the &ldquo;family office
          exclusion&rdquo; from RIA registration are technically <em>not</em> directly covered by
          Reg S-P. However, many family offices voluntarily adopt Reg S-P standards because
          (a) their LPs expect it, (b) they may have affiliated registered entities, and
          (c) it represents a recognized best-practice framework.
        </p>
      </SubSection>

      {/* What It Means for Clients */}
      <SectionHeading>What This Means for Drawbridge Clients</SectionHeading>
      <div className="grid grid-cols-2 gap-4">
        <CharacteristicCard
          title="Written Security Policies Required"
          description="Every client must have documented cybersecurity policies tailored to their specific risks — not a template downloaded from the internet. Drawbridge helps build and maintain these."
        />
        <CharacteristicCard
          title="Incident Response Plans Are Mandatory"
          description="The 2025 amendments make IR plans a regulatory requirement, not a best practice. Clients without one are now in violation. Drawbridge provides IR planning and retainer services."
        />
        <CharacteristicCard
          title="30-Day Breach Notification"
          description="Clients must notify affected individuals within 30 days of discovering a breach — a tight timeline that requires preparation and practiced response procedures."
        />
        <CharacteristicCard
          title="Vendor Oversight Obligations"
          description="Clients must monitor their vendors' security practices, including requiring contractual security commitments. This creates demand for third-party risk management services."
        />
      </div>

      {/* SEC Enforcement */}
      <SectionHeading>SEC Enforcement — The Stakes Are Real</SectionHeading>
      <SubSection icon="\uD83D\uDD28" title="How the SEC Enforces Reg S-P">
        <p>
          The SEC enforces Reg S-P through two primary mechanisms:
        </p>
        <ul className="list-disc ml-5 space-y-2">
          <li>
            <strong>Examinations (OCIE/EXAMS)</strong> — The SEC&apos;s Division of Examinations
            conducts routine and for-cause examinations of registered entities. Cybersecurity
            has been a <strong>stated exam priority every year since 2020</strong>. Examiners
            request and review written policies, incident logs, vendor contracts, training
            records, and evidence of ongoing monitoring. Deficiencies result in deficiency
            letters that require remediation.
          </li>
          <li>
            <strong>Enforcement Actions</strong> — For serious violations, the SEC&apos;s Division
            of Enforcement brings formal actions that can result in censures, fines,
            disgorgement of profits, and bars from the industry. Recent enforcement actions
            for cybersecurity failures have resulted in penalties ranging from
            <strong> $500K to $35M+</strong>.
          </li>
        </ul>
        <p>
          Notable enforcement examples include actions against firms for: failing to adopt
          written cybersecurity policies, failing to implement identity theft prevention
          programs, inadequate email security leading to account takeovers, and failing
          to notify customers after breaches.
        </p>
      </SubSection>

      <DrawbridgeAngle>
        <p>
          Reg S-P is the <strong>single most important regulatory driver</strong> of Drawbridge&apos;s
          business with US-based clients. Every service Drawbridge provides maps directly
          to a Reg S-P requirement:
        </p>
        <ul className="list-disc ml-5 space-y-1">
          <li>Written cybersecurity policies → Drawbridge Policy Program</li>
          <li>Incident response procedures → Drawbridge IR Planning &amp; Retainer</li>
          <li>Ongoing risk assessment → Drawbridge Security Assessments</li>
          <li>Employee training → Drawbridge Security Awareness Program</li>
          <li>Vendor oversight → Drawbridge Third-Party Risk Management</li>
          <li>Evidence of compliance → Drawbridge Platform &amp; Reporting</li>
        </ul>
        <p className="mt-2">
          The 2025 amendments are a major renewal tailwind. Clients who previously had
          basic programs now need to upgrade to meet the new incident response and breach
          notification requirements. Use this as a renewal conversation starter: &ldquo;The
          new Reg S-P requirements took effect in December — let&apos;s review your program
          to ensure you&apos;re compliant.&rdquo;
        </p>
      </DrawbridgeAngle>

      <SectionHeading>Key Terms</SectionHeading>
      <div className="grid grid-cols-3 gap-3">
        <TermBadge term="GLBA" definition="Gramm-Leach-Bliley Act (1999) — the federal law that authorized the SEC to create Reg S-P and other financial privacy regulations." />
        <TermBadge term="Safeguards Rule" definition="The core requirement of Reg S-P: written policies and procedures to protect customer information from unauthorized access." />
        <TermBadge term="NPI" definition="Nonpublic Personal Information — the category of customer data protected under Reg S-P (SSNs, account numbers, financial records, etc.)." />
        <TermBadge term="RIA" definition="Registered Investment Adviser — an entity registered with the SEC under the Investment Advisers Act, including most hedge fund and PE managers." />
        <TermBadge term="OCIE / EXAMS" definition="Office of Compliance Inspections and Examinations (now Division of Examinations) — the SEC's exam arm that audits firms for compliance." />
        <TermBadge term="Deficiency Letter" definition="A letter from SEC examiners identifying regulatory shortcomings — firms must respond with a remediation plan and evidence of corrective action." />
        <TermBadge term="Reg S-ID" definition="Regulation S-ID (Identity Theft Red Flags) — companion regulation requiring firms to detect and prevent identity theft. Often reviewed alongside Reg S-P." />
        <TermBadge term="Rule 30(a)" definition="The specific Reg S-P rule requiring written safeguards policies — the provision most commonly cited in SEC exams and enforcement actions." />
        <TermBadge term="Breach Notification" definition="New under 2025 amendments: requirement to notify affected individuals within 30 days of discovering unauthorized access to their information." />
      </div>

    </>
  );
}
