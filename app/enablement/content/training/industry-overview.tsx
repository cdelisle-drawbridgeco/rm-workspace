'use client';

import React from 'react';
import { StatCard, SectionHeading, CharacteristicCard, TermBadge, HeroSection, DrawbridgeAngle, SubSection, FlowDiagram, LastUpdated } from '../../components/shared-ui';

export default function IndustryOverview() {
  return (
    <>
      <HeroSection
        icon="🌐"
        title="Alternative Asset Management — Industry Overview"
        subtitle="Understanding the landscape Drawbridge serves across hedge funds, private equity, and family offices."
      />
      <LastUpdated date="February 24, 2026 at 9:04 PM" />

      <div className="mt-6 grid grid-cols-4 gap-4">
        <StatCard label="Global AUM (Alternatives)" value="$23.2T" />
        <StatCard label="Number of Funds" value="~40,000" />
        <StatCard label="Projected AUM by 2028" value="$30T+" />
        <StatCard label="Annual Growth Rate" value="~8%" />
      </div>

      <SectionHeading>Overview</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed">
        Alternative asset management encompasses investment strategies and fund structures that
        fall outside traditional long-only equity and fixed-income mandates. The industry includes
        hedge funds, private equity and venture capital, real estate, infrastructure, and private
        credit — all of which face increasing regulatory scrutiny, operational complexity, and
        cybersecurity risk. Drawbridge provides cybersecurity and operational risk solutions
        tailored to the unique needs of these firms.
      </p>
      <p className="mt-3 text-sm text-gray-700 leading-relaxed">
        As allocators (pension funds, endowments, sovereign wealth funds, and fund-of-funds)
        increase their due-diligence requirements, managers are under growing pressure to
        demonstrate robust operational and cyber risk programs. This has created a significant
        tailwind for Drawbridge&apos;s services.
      </p>

      <SectionHeading>How Capital Flows Through Alternatives</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed mb-4">
        Understanding the capital lifecycle is essential to understanding why these firms exist
        and how they make money. At the highest level, money flows from large institutional
        investors (allocators) into fund vehicles managed by specialized firms, gets deployed
        into investments, and returns to investors as profits are realized.
      </p>
      <FlowDiagram
        steps={[
          'Allocators (Pensions, Endowments, Sovereigns)',
          'Capital Commitment',
          'Fund Vehicle (LP/GP Structure)',
          'Capital Deployment',
          'Investments (Trades, Companies, Assets)',
          'Returns & Distributions',
        ]}
      />

      <SubSection icon="💰" title="Who Are the Allocators?">
        <p>
          The investors who provide capital to alternative managers are called <strong>allocators</strong> or
          <strong> Limited Partners (LPs)</strong>. They include public pension funds (CalPERS, NY State
          Common), corporate pensions, university endowments (Yale, Harvard), sovereign wealth funds
          (GIC, ADIA, Norges Bank), foundations, fund-of-funds, and increasingly, high-net-worth
          individuals. These allocators typically commit capital for years, and they conduct extensive
          due diligence — including cybersecurity reviews — before investing. This is why DDQs and
          security assessments are so critical to the business.
        </p>
      </SubSection>

      <SubSection icon="🏗️" title="The Fund Structure">
        <p>
          Most alternative funds use a <strong>limited partnership (LP/GP)</strong> structure. The
          <strong> General Partner (GP)</strong> is the fund manager — they make investment decisions,
          operate the fund, and bear unlimited liability. <strong>Limited Partners (LPs)</strong> are
          the passive investors who commit capital and have liability limited to their investment.
          The GP typically forms a new fund every 3–5 years, each with its own set of LPs and
          investment mandate.
        </p>
        <p>
          Fund managers earn revenue from two primary streams: a <strong>management fee</strong> (typically
          1–2% of assets annually, covering salaries and operations) and a <strong>performance fee</strong> or
          <strong> carried interest</strong> (typically 15–20% of profits above a hurdle rate). This &ldquo;2 and 20&rdquo;
          model means the manager&apos;s economics are directly tied to both AUM (scale) and performance
          (alpha). Retaining allocator confidence — which now includes cybersecurity posture — is
          therefore existential to the business model.
        </p>
      </SubSection>

      <SectionHeading>Key Characteristics</SectionHeading>
      <div className="grid grid-cols-2 gap-4">
        <CharacteristicCard
          title="Regulatory Pressure"
          description="SEC, FCA, and global regulators increasingly require documented cybersecurity programs, incident response plans, and third-party risk management."
        />
        <CharacteristicCard
          title="Allocator Due Diligence"
          description="LPs demand annual DDQs, SOC reports, and evidence of ongoing security monitoring before committing or re-upping capital."
        />
        <CharacteristicCard
          title="Lean Operations"
          description="Most alternative managers run lean teams — they don't have in-house CISOs or large IT departments, making outsourced solutions essential."
        />
        <CharacteristicCard
          title="High-Value Targets"
          description="Firms manage billions in assets with small headcounts, making them attractive targets for social engineering and wire-fraud attacks."
        />
      </div>

      <DrawbridgeAngle>
        <p>
          Drawbridge is uniquely positioned at the intersection of cybersecurity and alternative
          asset management. Our deep domain expertise lets us speak the language of fund
          managers and COOs while delivering enterprise-grade security programs. Every renewal
          is an opportunity to demonstrate continued value through regulatory alignment,
          allocator satisfaction, and risk reduction.
        </p>
        <p>
          The capital lifecycle creates natural touchpoints: allocators require cyber due diligence
          <em> before</em> committing capital, <em>during</em> the investment period through ongoing
          monitoring and reporting, and <em>at re-up</em> when they decide whether to invest in
          the next fund. Drawbridge supports managers at every stage.
        </p>
      </DrawbridgeAngle>

      <SectionHeading>Key Terms</SectionHeading>
      <div className="grid grid-cols-3 gap-3">
        <TermBadge term="AUM" definition="Assets Under Management — total market value of assets a firm manages on behalf of investors." />
        <TermBadge term="LP / GP" definition="Limited Partner (investor) and General Partner (fund manager) — the two sides of a fund structure." />
        <TermBadge term="DDQ" definition="Due Diligence Questionnaire — standardized questionnaire LPs send to evaluate manager operations." />
        <TermBadge term="SOC 2" definition="Service Organization Control report — third-party audit of security controls and processes." />
        <TermBadge term="BCP / DR" definition="Business Continuity Plan / Disaster Recovery — plans for maintaining operations during disruptions." />
        <TermBadge term="CISO" definition="Chief Information Security Officer — senior executive responsible for an organization's security program." />
        <TermBadge term="Management Fee" definition="Annual fee (1–2% of AUM/commitments) charged by the GP to cover firm operations, regardless of performance." />
        <TermBadge term="Carried Interest" definition="The GP's share of fund profits (typically 20%), earned above a preferred return hurdle — the primary wealth driver for fund managers." />
        <TermBadge term="ODD" definition="Operational Due Diligence — LP review of a manager's non-investment operations including cybersecurity, compliance, and business continuity." />
      </div>

    </>
  );
}
