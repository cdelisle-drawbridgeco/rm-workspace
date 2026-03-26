'use client';

import React from 'react';
import { StatCard, SectionHeading, CharacteristicCard, TermBadge, HeroSection, DrawbridgeAngle, SubSection, FlowDiagram, LastUpdated } from '../../components/shared-ui';

export default function PrivateEquity() {
  return (
    <>
      <HeroSection
        icon="🏢"
        title="Private Equity"
        subtitle="Firms that acquire, operate, and grow private companies to generate returns for institutional investors."
      />
      <LastUpdated date="March 25, 2026 at 3:45 PM" />

      <div className="mt-6 grid grid-cols-4 gap-4">
        <StatCard label="Global PE AUM" value="$8.2T" />
        <StatCard label="Number of Firms" value="~12,000" />
        <StatCard label="Avg. Fund Life" value="10 Years" />
        <StatCard label="Avg. Team Size" value="30–80" />
      </div>

      <SectionHeading>Overview</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed">
        Private equity firms raise capital from institutional investors and deploy it to
        acquire, improve, and eventually exit private companies. The typical fund has a
        10-year life with a 3–5 year investment period followed by a harvesting period.
        PE firms manage both their own firm-level cybersecurity and increasingly bear
        responsibility for the cyber posture of their portfolio companies.
      </p>
      <p className="mt-3 text-sm text-gray-700 leading-relaxed">
        The dual-layer risk profile — firm risk plus portfolio company risk — creates
        unique challenges. A breach at a portfolio company can impact fund returns,
        LP confidence, and even deal valuations. The SEC&apos;s focus on PE has intensified,
        with cybersecurity as a top exam priority.
      </p>

      <SectionHeading>How Private Equity Raises Capital</SectionHeading>
      <FlowDiagram
        steps={[
          'Fund Strategy & Formation',
          'LP Roadshow (6–18 months)',
          'Due Diligence & Commitment',
          'First Close',
          'Final Close',
          'Capital Calls Over 3–5 Years',
        ]}
      />
      <SubSection icon="📣" title="The Fundraising Cycle">
        <p>
          PE fundraising is a major, multi-year undertaking. A firm typically raises a new
          fund every <strong>3–5 years</strong>, and the fundraising process itself can take
          <strong> 12–18 months</strong>. The GP creates a detailed pitch — including strategy,
          track record, team bios, and terms — and presents it to institutional LPs through
          one-on-one meetings and roadshows. Placement agents (intermediaries) may be hired
          to help reach new LP relationships.
        </p>
        <p>
          Unlike hedge funds, PE funds are <strong>closed-ended</strong>. LPs make a
          <strong> capital commitment</strong> upfront (say, $50M) but the money is not
          transferred immediately. Instead, the GP issues <strong>capital calls</strong> over
          the 3–5 year investment period as deals are identified. LPs are legally obligated
          to fund capital calls — missing one is a serious breach of the partnership agreement.
        </p>
        <p>
          The fundraising market is highly competitive. LPs now conduct extensive operational
          and cybersecurity due diligence on the GP <em>before</em> committing. A failed
          cybersecurity review during fundraising can cost a firm hundreds of millions in
          commitments. This is why PE firms are among Drawbridge&apos;s most motivated buyers — the
          stakes are existential during fundraising years.
        </p>
      </SubSection>

      <SectionHeading>How Private Equity Deploys Capital</SectionHeading>
      <FlowDiagram
        steps={[
          'Deal Sourcing',
          'Due Diligence',
          'Acquisition (LBO)',
          'Value Creation (3–7 yrs)',
          'Exit (Sale / IPO)',
          'Distributions to LPs',
        ]}
      />
      <SubSection icon="🎯" title="The Deal Lifecycle">
        <p>
          PE firms deploy capital by <strong>acquiring controlling stakes</strong> in private
          companies (or taking public companies private). The most common structure is a
          <strong> leveraged buyout (LBO)</strong> — the firm uses a combination of the fund&apos;s
          equity (30–50% of the purchase price) and <strong>debt</strong> (50–70%, borrowed
          by the target company) to finance the acquisition. This leverage amplifies returns
          but also amplifies risk.
        </p>
        <p>
          Once a company is acquired, the PE firm works to <strong>increase its value</strong> over
          a 3–7 year holding period through:
        </p>
        <ul className="list-disc ml-5 space-y-1">
          <li><strong>Operational Improvements</strong> — Cut costs, improve margins, professionalize management, upgrade technology</li>
          <li><strong>Revenue Growth</strong> — Expand into new markets, launch new products, improve sales processes</li>
          <li><strong>Add-on Acquisitions</strong> — Buy smaller companies to bolt onto the platform, creating scale and synergies (&ldquo;buy-and-build&rdquo;)</li>
          <li><strong>Financial Engineering</strong> — Optimize capital structure, refinance debt at better terms, implement tax efficiencies</li>
        </ul>
        <p>
          The PE firm then <strong>exits</strong> the investment — selling to a strategic buyer,
          another PE firm (<strong>secondary buyout</strong>), or taking the company public via IPO.
          The difference between what was paid and what the company sells for (minus debt)
          is the profit returned to LPs.
        </p>
      </SubSection>

      <SectionHeading>How the Business Operates</SectionHeading>
      <SubSection icon="🏛️" title="Revenue Model & Organizational Structure">
        <p>
          PE firms earn revenue from two streams, similar to hedge funds but with important differences:
        </p>
        <ul className="list-disc ml-5 space-y-1">
          <li><strong>Management Fee (1.5–2% of committed capital)</strong> — Charged on <em>committed</em> capital during the investment period and <em>invested</em> capital during the harvest period. A $5B fund at 2% generates $100M/year in management fees — providing stable cash flow to run the firm.</li>
          <li><strong>Carried Interest (20% of profits above a hurdle)</strong> — The GP&apos;s share of fund profits, typically above an 8% preferred return (hurdle rate) to LPs. On a successful fund, carry can be worth billions. This is the primary wealth-creation mechanism for PE professionals.</li>
        </ul>
        <p>
          The typical PE firm organizational structure:
        </p>
        <ul className="list-disc ml-5 space-y-1">
          <li><strong>Managing Partners / Partners</strong> — Lead deal sourcing, negotiation, and portfolio company board seats</li>
          <li><strong>Principals / VPs</strong> — Run deal execution, financial modeling, due diligence</li>
          <li><strong>Associates / Analysts</strong> — Support deal teams with analysis and research</li>
          <li><strong>Operating Partners</strong> — Senior executives (former CEOs/CFOs) who work directly with portfolio companies on value creation</li>
          <li><strong>Investor Relations</strong> — Manage LP communications, fundraising, and quarterly reporting</li>
          <li><strong>Finance / Operations / Compliance</strong> — Fund accounting, regulatory filings, and internal operations</li>
        </ul>
        <p>
          A mid-size PE firm ($5–15B AUM) may employ 100–300 people at the firm level,
          but oversee <strong>tens of thousands of employees</strong> across portfolio
          companies. This creates a unique risk profile: the firm itself is small and
          manageable, but the aggregate attack surface across all portfolio companies is
          enormous.
        </p>
      </SubSection>

      <SectionHeading>Key Characteristics</SectionHeading>
      <div className="grid grid-cols-2 gap-4">
        <CharacteristicCard
          title="Portfolio Company Risk"
          description="PE firms own dozens of companies across industries, each with its own tech stack, risk profile, and maturity level."
        />
        <CharacteristicCard
          title="Deal-Driven Lifecycle"
          description="Cybersecurity due diligence during acquisitions and security uplift post-acquisition are critical value-creation activities."
        />
        <CharacteristicCard
          title="LP Reporting Requirements"
          description="Institutional LPs expect regular reporting on portfolio company cybersecurity posture, incidents, and remediation efforts."
        />
        <CharacteristicCard
          title="Regulatory Expansion"
          description="SEC proposed rules targeting PE advisers include requirements for cybersecurity policies and annual reviews at both firm and portfolio levels."
        />
      </div>

      <DrawbridgeAngle>
        <p>
          Private equity is Drawbridge&apos;s highest-growth segment. The portfolio company angle
          creates natural expansion opportunities — a single PE firm renewal can unlock 10–50
          portfolio company engagements. During renewals, quantify the portfolio-level risk
          reduction and emphasize Drawbridge&apos;s ability to provide a unified view across the
          entire portfolio.
        </p>
        <p>
          The fundraising cycle creates urgency: PE firms raising a new fund will invest heavily
          in their security posture to pass LP due diligence. Drawbridge has supported over{' '}
          <strong>2,000 successful ODD reviews</strong> — that track record is a differentiator
          worth naming in every fundraising conversation. <strong>Raise Your Guard. Protect Your
          Returns.</strong> Time renewal conversations to fundraising timelines when possible, and
          lead with what a mature security program means for LP confidence and the next raise.
        </p>
        <p>
          Key renewal levers: number of portfolio companies covered, M&amp;A cyber due diligence
          engagements completed, portfolio-wide risk score improvements, LP reporting deliverables,
          and fundraising DD support.
        </p>
      </DrawbridgeAngle>

      <SectionHeading>Key Terms</SectionHeading>
      <div className="grid grid-cols-3 gap-3">
        <TermBadge term="Portco" definition="Portfolio Company — a business owned (in whole or part) by a private equity fund." />
        <TermBadge term="LBO" definition="Leveraged Buyout — acquiring a company using significant debt (50–70% of purchase price), which is placed on the target company's balance sheet." />
        <TermBadge term="GP Commitment" definition="Capital the fund manager (GP) personally invests alongside LPs, typically 1–5% of fund size, aligning incentives." />
        <TermBadge term="Capital Call" definition="Notice from GP to LPs to transfer a portion of their committed capital, issued as deals are identified during the investment period." />
        <TermBadge term="Value Creation" definition="The process of improving portfolio company operations, growth, and efficiency to drive returns beyond financial engineering." />
        <TermBadge term="Add-On / Bolt-On" definition="Smaller acquisitions made to complement an existing portfolio company, creating scale and synergies (buy-and-build strategy)." />
        <TermBadge term="Exit" definition="The sale or IPO of a portfolio company, where the PE fund realizes its return for investors." />
        <TermBadge term="Cyber DD" definition="Cybersecurity due diligence conducted before an acquisition to identify risks and estimate remediation costs." />
        <TermBadge term="Fund Life" definition="Typically 10 years — includes investment period (years 1–5) and harvest period (years 6–10) with possible extensions." />
      </div>

    </>
  );
}
