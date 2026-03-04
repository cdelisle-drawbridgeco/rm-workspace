'use client';

import React from 'react';
import { StatCard, SectionHeading, CharacteristicCard, TermBadge, HeroSection, DrawbridgeAngle, SubSection, LastUpdated } from '../../components/shared-ui';

export default function FamilyOffices() {
  return (
    <>
      <HeroSection
        icon="🏠"
        title="Family & Home Offices"
        subtitle="Private wealth management entities serving ultra-high-net-worth families and individuals."
      />
      <LastUpdated date="February 24, 2026 at 9:04 PM" />

      <div className="mt-6 grid grid-cols-4 gap-4">
        <StatCard label="Global Family Office AUM" value="$6.0T" />
        <StatCard label="Number of Family Offices" value="~8,000" />
        <StatCard label="Avg. Net Worth Served" value="$500M+" />
        <StatCard label="Avg. Staff Size" value="5–15" />
      </div>

      <SectionHeading>Overview</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed">
        Family offices are private entities established to manage the wealth, investments,
        and affairs of ultra-high-net-worth (UHNW) families. Single-family offices (SFOs)
        serve one family, while multi-family offices (MFOs) serve multiple families. They
        typically manage investments, tax planning, estate planning, philanthropy, and
        lifestyle services. Despite managing enormous wealth, family offices often operate
        with very small teams and limited formal security infrastructure.
      </p>
      <p className="mt-3 text-sm text-gray-700 leading-relaxed">
        Family offices have historically been less regulated than institutional fund managers,
        but this is changing. The SEC&apos;s 2022 reclassification efforts and increasing awareness
        of cyber threats have pushed many family offices to formalize their security programs.
        High-profile breaches and targeted attacks on UHNW individuals have accelerated this trend.
      </p>

      <SectionHeading>Where the Capital Comes From</SectionHeading>
      <SubSection icon="💎" title="Sources of Family Office Wealth">
        <p>
          Unlike hedge funds and PE firms, family offices do <strong>not raise capital from
          external investors</strong> (with the exception of multi-family offices, which pool
          resources from several families). The wealth originates from the family itself —
          typically from one or more of these sources:
        </p>
        <ul className="list-disc ml-5 space-y-1">
          <li><strong>Business Sale / Liquidity Event</strong> — A founder sells their company (often for $500M–$10B+) and establishes a family office to manage the proceeds. This is the most common origin story.</li>
          <li><strong>Generational Wealth</strong> — Multi-generational families (think Rockefeller, Pritzker, Walton) who have compounded wealth over decades through diversified holdings.</li>
          <li><strong>Investment Gains</strong> — Successful investors who accumulated wealth through early-stage investments, real estate, or public markets.</li>
          <li><strong>Operating Businesses</strong> — Some family offices manage wealth while the family still operates its core business (e.g., a controlling stake in a public or private company).</li>
        </ul>
        <p>
          The lack of external investors means family offices are <strong>not subject to the
          same LP due diligence pressures</strong> as hedge funds and PE firms. However, this
          also means they have had less external motivation to formalize security programs —
          which is exactly why many are now playing catch-up as cyber threats escalate.
        </p>
      </SubSection>

      <SectionHeading>How Family Offices Deploy Capital</SectionHeading>
      <SubSection icon="🌍" title="Investment Approach & Asset Allocation">
        <p>
          Family offices are unique investors because they have <strong>permanent capital</strong> with
          <strong> no external redemption pressure</strong>. This means they can invest with
          extremely long time horizons — decades or even perpetuity. Their investment approach
          typically includes:
        </p>
        <ul className="list-disc ml-5 space-y-1">
          <li><strong>Direct Investments</strong> — Many family offices invest directly in private companies (bypassing PE funds), often in industries where the family has operational expertise. A tech founder&apos;s family office might take direct stakes in early-stage tech companies.</li>
          <li><strong>Co-Investments</strong> — Investing alongside PE or VC firms in specific deals, getting access to deal flow while paying lower fees than a fund commitment.</li>
          <li><strong>Fund Allocations</strong> — Committing to hedge funds, PE funds, VC funds, and real estate funds as an LP. Many family offices are significant allocators (making them both a Drawbridge client type <em>and</em> the LP audience that other clients need to impress).</li>
          <li><strong>Real Estate</strong> — Direct ownership of commercial and residential properties, often in trophy markets, forming a core part of most family office portfolios.</li>
          <li><strong>Public Markets</strong> — Traditional equity and fixed-income portfolios, often managed by external wealth managers or in-house CIOs.</li>
          <li><strong>Alternative Assets</strong> — Art, wine, collectibles, crypto, farmland, and other non-traditional investments, especially among younger-generation family offices.</li>
        </ul>
        <p>
          The <strong>average family office allocation</strong> is roughly: 30% equities, 20% private
          equity/VC, 15% real estate, 10% fixed income, 10% hedge funds, 15% other (cash,
          alternatives, direct). But this varies enormously — some are nearly 100% concentrated
          in a single operating business.
        </p>
      </SubSection>

      <SectionHeading>How the Business Operates</SectionHeading>
      <SubSection icon="🏛️" title="Structure & Day-to-Day Operations">
        <p>
          Family offices are fundamentally different from fund managers in structure and economics:
        </p>
        <ul className="list-disc ml-5 space-y-1">
          <li><strong>Cost Center, Not Profit Center</strong> — A single-family office is a <em>cost</em> to the family, not a revenue-generating business. The family funds all operations directly. This means budget decisions are personal — the &ldquo;client&rdquo; is the family patriarch/matriarch.</li>
          <li><strong>Holistic Scope</strong> — Beyond investments, family offices handle tax planning, estate and trust administration, philanthropy, insurance, lifestyle management (property, travel, security), and sometimes even family governance and education.</li>
          <li><strong>Key Personnel</strong> — A typical SFO has a CEO/CIO, a controller/CFO, an administrative assistant, and potentially external advisors (lawyers, accountants, wealth managers). Many have just 3–8 employees.</li>
          <li><strong>Decision-Making</strong> — Decisions are made by the family principal(s), often with advisory input from a family council or board. This can mean fast decisions on some things and very slow, consensus-driven decisions on others.</li>
        </ul>
        <p>
          <strong>Multi-family offices (MFOs)</strong> operate differently — they serve multiple
          families and charge fees (typically 0.5–1.5% of AUM or flat retainers). MFOs
          resemble small wealth management firms and are often regulated as investment
          advisers. They have stronger incentives to formalize operations because they
          must demonstrate value to multiple client families.
        </p>
        <p>
          The personal nature of family offices means the <strong>decision-maker is the asset
          owner themselves</strong> — not a COO or compliance officer. Conversations about
          cybersecurity must be framed in terms of protecting the family&apos;s privacy, reputation,
          and legacy rather than regulatory compliance checkboxes.
        </p>
      </SubSection>

      <SectionHeading>Key Characteristics</SectionHeading>
      <div className="grid grid-cols-2 gap-4">
        <CharacteristicCard
          title="Minimal IT Infrastructure"
          description="Extremely lean teams often lack dedicated IT staff, let alone security specialists. Many rely on personal devices and consumer-grade tools."
        />
        <CharacteristicCard
          title="High-Value Targets"
          description="The combination of enormous personal wealth, public visibility, and minimal security makes family offices prime targets for sophisticated attacks."
        />
        <CharacteristicCard
          title="Personal & Professional Overlap"
          description="Family members' personal digital lives (social media, travel, smart homes) blend with the office's financial systems, expanding the attack surface."
        />
        <CharacteristicCard
          title="Reputation Sensitivity"
          description="Privacy is paramount. A data breach can expose sensitive personal information, family dynamics, and financial details to the public."
        />
      </div>

      <DrawbridgeAngle>
        <p>
          Family offices represent a growing segment where Drawbridge can deliver outsized
          impact. These clients often need foundational security programs built from scratch —
          policies, training, incident response plans, and ongoing monitoring. The personal
          nature of the relationship means renewals are driven by trust and responsiveness
          as much as by deliverables.
        </p>
        <p>
          The sales motion is different here: family offices buy based on <strong>trust and
          personal relationships</strong>, not RFPs and procurement processes. The decision-maker
          is often the family principal, not a compliance officer. Frame the value proposition
          around protecting the family&apos;s legacy, privacy, and way of life — not just checking
          regulatory boxes. Personal cybersecurity for family members (device security,
          travel advisories, social media exposure reviews) often resonates more than
          enterprise security language.
        </p>
        <p>
          Key renewal levers: personal cybersecurity reviews for family members, security
          awareness training participation, travel security briefings delivered, incident
          response readiness, and proactive threat monitoring related to the family&apos;s
          public profile.
        </p>
      </DrawbridgeAngle>

      <SectionHeading>Key Terms</SectionHeading>
      <div className="grid grid-cols-3 gap-3">
        <TermBadge term="SFO" definition="Single-Family Office — serves one family exclusively, typically managing $100M+ in assets." />
        <TermBadge term="MFO" definition="Multi-Family Office — serves multiple families, offering shared infrastructure and economies of scale." />
        <TermBadge term="UHNW" definition="Ultra-High-Net-Worth — individuals or families with $30M+ in investable assets (some define at $100M+)." />
        <TermBadge term="Direct Investment" definition="Family office investing directly in a company (bypassing funds), often in industries where the family has operating expertise." />
        <TermBadge term="Co-Investment" definition="Investing alongside a PE or VC fund in a specific deal, accessing deal flow at lower fees than a fund commitment." />
        <TermBadge term="Permanent Capital" definition="Capital with no fixed life or redemption schedule — the family can invest with multi-decade or perpetual time horizons." />
        <TermBadge term="Family Governance" definition="Formal structures for family decision-making, succession planning, and wealth transfer across generations." />
        <TermBadge term="Concierge Security" definition="White-glove cybersecurity services covering personal devices, travel, home networks, and family members." />
        <TermBadge term="Digital Footprint" definition="The trail of personal information available online — social media, property records, court filings — that attackers use for targeting." />
      </div>

    </>
  );
}
