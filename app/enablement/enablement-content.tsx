'use client';

import React, { useState } from 'react';

/* ------------------------------------------------------------------ */
/*  Types & Navigation Data                                           */
/* ------------------------------------------------------------------ */

type SectionId =
  | 'industry-overview'
  | 'hedge-funds'
  | 'private-equity'
  | 'family-offices'
  | 'marketing';

interface NavItem {
  id: SectionId;
  label: string;
}

const TRAINING_ITEMS: NavItem[] = [
  { id: 'industry-overview', label: 'Industry Overview' },
  { id: 'hedge-funds', label: 'Hedge Funds' },
  { id: 'private-equity', label: 'Private Equity' },
  { id: 'family-offices', label: 'Family & Home Offices' },
];

/* ------------------------------------------------------------------ */
/*  Shared UI Pieces                                                  */
/* ------------------------------------------------------------------ */

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-white p-4 shadow-sm border border-gray-100 text-center">
      <p className="text-2xl font-bold font-heading text-db-dark">{value}</p>
      <p className="mt-1 text-xs text-gray-500">{label}</p>
    </div>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mt-8 mb-3 text-lg font-semibold font-heading text-db-dark">
      {children}
    </h3>
  );
}

function CharacteristicCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4">
      <p className="font-semibold text-db-dark">{title}</p>
      <p className="mt-1 text-sm text-gray-600">{description}</p>
    </div>
  );
}

function TermBadge({ term, definition }: { term: string; definition: string }) {
  return (
    <div className="rounded-lg bg-db-aqua/10 border border-db-aqua/30 p-3">
      <p className="text-sm font-semibold text-db-dark">{term}</p>
      <p className="mt-1 text-xs text-gray-600">{definition}</p>
    </div>
  );
}

function HeroSection({
  icon,
  title,
  subtitle,
}: {
  icon: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="rounded-xl bg-gradient-to-r from-db-dark to-db-dark/90 p-8 text-white">
      <span className="text-4xl">{icon}</span>
      <h2 className="mt-3 text-2xl font-bold font-heading">{title}</h2>
      <p className="mt-2 text-sm text-gray-300">{subtitle}</p>
    </div>
  );
}

function DrawbridgeAngle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-8 rounded-lg border-l-4 border-db-orange bg-orange-50 p-5">
      <p className="mb-2 text-sm font-semibold text-db-orange uppercase tracking-wide">
        What This Means for Drawbridge
      </p>
      <div className="text-sm text-gray-700 space-y-2">{children}</div>
    </div>
  );
}

function SubSection({
  icon,
  title,
  children,
}: {
  icon: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-6 rounded-lg border border-gray-200 bg-white p-5">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-lg">{icon}</span>
        <h4 className="font-semibold font-heading text-db-dark">{title}</h4>
      </div>
      <div className="text-sm text-gray-700 leading-relaxed space-y-3">
        {children}
      </div>
    </div>
  );
}

function FlowDiagram({ steps }: { steps: string[] }) {
  return (
    <div className="flex items-center gap-1 overflow-x-auto py-3">
      {steps.map((step, i) => (
        <React.Fragment key={i}>
          <div className="shrink-0 rounded-md bg-db-dark/5 border border-gray-200 px-3 py-2 text-xs font-medium text-db-dark text-center min-w-[100px]">
            {step}
          </div>
          {i < steps.length - 1 && (
            <span className="shrink-0 text-gray-300 text-lg">&rarr;</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  INDUSTRY OVERVIEW                                                 */
/* ------------------------------------------------------------------ */

function IndustryOverview() {
  return (
    <>
      <HeroSection
        icon="🌐"
        title="Alternative Asset Management — Industry Overview"
        subtitle="Understanding the landscape Drawbridge serves across hedge funds, private equity, and family offices."
      />

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

/* ------------------------------------------------------------------ */
/*  HEDGE FUNDS                                                       */
/* ------------------------------------------------------------------ */

function HedgeFunds() {
  return (
    <>
      <HeroSection
        icon="📈"
        title="Hedge Funds"
        subtitle="Actively managed investment vehicles using diverse strategies across public and private markets."
      />

      <div className="mt-6 grid grid-cols-4 gap-4">
        <StatCard label="Global Hedge Fund AUM" value="$4.3T" />
        <StatCard label="Number of Funds" value="~15,000" />
        <StatCard label="Avg. Fund Size" value="$290M" />
        <StatCard label="Avg. Headcount" value="25–50" />
      </div>

      <SectionHeading>Overview</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed">
        Hedge funds are pooled investment vehicles that employ a range of strategies — from
        long/short equity and event-driven to global macro and quantitative — to generate
        alpha for investors. They typically charge a management fee (1–2%) and performance
        fee (15–20%), creating strong incentives for both performance and operational
        excellence. Hedge funds are among the most technology-intensive financial firms,
        relying heavily on electronic trading, data feeds, and proprietary algorithms.
      </p>
      <p className="mt-3 text-sm text-gray-700 leading-relaxed">
        Regulatory bodies like the SEC have significantly increased cybersecurity
        expectations. The 2023 SEC cybersecurity disclosure rules and ongoing exam
        priorities put hedge funds under direct scrutiny, making a robust cyber program
        a regulatory necessity rather than a best practice.
      </p>

      <SectionHeading>How Hedge Funds Raise Capital</SectionHeading>
      <FlowDiagram
        steps={[
          'Fund Formation & PPM',
          'Roadshow / Cap Intro',
          'LP Due Diligence',
          'Subscription & Onboarding',
          'Ongoing Reporting',
        ]}
      />
      <SubSection icon="📣" title="Capital Raising Process">
        <p>
          Hedge funds raise capital through a combination of direct marketing and prime
          broker <strong>capital introduction (cap intro)</strong> programs. The GP creates
          a <strong>Private Placement Memorandum (PPM)</strong> and marketing deck, then
          meets with prospective LPs — pension funds, endowments, fund-of-funds,
          sovereign wealth funds, and high-net-worth individuals — often at industry
          conferences or one-on-one roadshows.
        </p>
        <p>
          Unlike private equity, hedge funds typically have <strong>open-ended structures</strong> —
          investors can subscribe (invest) and redeem (withdraw) on a periodic basis
          (monthly or quarterly, subject to lock-up periods and gates). This means hedge
          funds are continuously marketing to both retain existing capital and attract
          new allocators.
        </p>
        <p>
          The due diligence process has become a key gatekeeping moment. Allocators now
          routinely include cybersecurity in their operational due diligence (ODD) reviews.
          A hedge fund that cannot demonstrate a formal security program, incident response
          plan, and evidence of ongoing monitoring may lose the allocation to a competitor
          that can.
        </p>
      </SubSection>

      <SectionHeading>How Hedge Funds Deploy Capital</SectionHeading>
      <SubSection icon="⚡" title="Investment Strategies & Execution">
        <p>
          Hedge funds deploy capital into <strong>liquid, publicly traded markets</strong> using
          a variety of strategies. The key differentiator from traditional asset managers is
          their ability to use <strong>leverage</strong> (borrowed money to amplify returns),
          <strong> short selling</strong> (profiting from price declines), and <strong>derivatives</strong> (options,
          futures, swaps) to express investment views.
        </p>
        <p>Common strategies include:</p>
        <ul className="list-disc ml-5 space-y-1">
          <li><strong>Long/Short Equity</strong> — Buy undervalued stocks while shorting overvalued ones. The most common strategy, representing ~30% of industry AUM.</li>
          <li><strong>Global Macro</strong> — Trade currencies, rates, commodities, and indices based on macroeconomic themes. Firms like Bridgewater and Brevan Howard are examples.</li>
          <li><strong>Event-Driven</strong> — Invest around corporate events: mergers, spinoffs, bankruptcies, activist campaigns. Requires deep legal and fundamental analysis.</li>
          <li><strong>Quantitative / Systematic</strong> — Use algorithms and statistical models to identify patterns and execute trades at speed. Renaissance Technologies and Two Sigma are leaders.</li>
          <li><strong>Credit / Distressed</strong> — Invest in corporate bonds, loans, and distressed debt. Requires deep credit analysis and sometimes active restructuring involvement.</li>
          <li><strong>Multi-Strategy</strong> — Run several strategies under one roof, allocating capital dynamically. Citadel, Millennium, and Point72 operate this way.</li>
        </ul>
        <p>
          Trades are executed through <strong>prime brokers</strong> (Goldman Sachs, Morgan Stanley,
          JP Morgan) who provide financing, custody, trade execution, and securities lending.
          Fund administrators (Citco, SS&C) handle NAV calculations, investor reporting,
          and compliance recordkeeping.
        </p>
      </SubSection>

      <SectionHeading>How the Business Operates</SectionHeading>
      <SubSection icon="🏛️" title="Revenue Model & Organizational Structure">
        <p>
          A hedge fund&apos;s revenue comes from two streams:
        </p>
        <ul className="list-disc ml-5 space-y-1">
          <li><strong>Management Fee (1–2% of AUM)</strong> — Charged annually regardless of performance. A $2B fund at 1.5% generates $30M/year in management fees to cover salaries, rent, technology, and operations.</li>
          <li><strong>Performance Fee (15–20% of profits)</strong> — Charged on gains above a <strong>high-water mark</strong> (meaning the fund must recoup losses before earning performance fees again). A strong year can generate enormous performance fees; a loss year generates zero.</li>
        </ul>
        <p>
          The typical hedge fund organizational structure includes:
        </p>
        <ul className="list-disc ml-5 space-y-1">
          <li><strong>Portfolio Manager(s) / CIO</strong> — Make investment decisions</li>
          <li><strong>Analysts</strong> — Research teams covering sectors, geographies, or strategies</li>
          <li><strong>Traders</strong> — Execute and manage positions</li>
          <li><strong>COO / CFO</strong> — Oversee operations, compliance, and fund administration</li>
          <li><strong>Technology</strong> — Maintain trading systems, market data, risk systems</li>
          <li><strong>Investor Relations</strong> — Manage LP communications, DDQs, and fundraising</li>
        </ul>
        <p>
          Even large hedge funds (~$10B+ AUM) typically employ only 50–200 people.
          Smaller funds ($500M or below) may have 10–25 staff. This lean structure means
          most do not have dedicated security personnel — making outsourced cybersecurity
          from firms like Drawbridge essential.
        </p>
      </SubSection>

      <SectionHeading>Key Characteristics</SectionHeading>
      <div className="grid grid-cols-2 gap-4">
        <CharacteristicCard
          title="Technology-Intensive"
          description="Heavy reliance on trading systems, market data, cloud infrastructure, and third-party APIs creates a large attack surface."
        />
        <CharacteristicCard
          title="High Regulatory Scrutiny"
          description="SEC Reg S-P, Reg S-ID, and new cybersecurity rules require documented policies, incident response, and board-level reporting."
        />
        <CharacteristicCard
          title="Allocator Expectations"
          description="Institutional LPs require annual security assessments, penetration testing results, and evidence of employee training programs."
        />
        <CharacteristicCard
          title="Wire Fraud Exposure"
          description="Frequent high-value fund transfers make hedge funds prime targets for business email compromise (BEC) and wire-fraud schemes."
        />
      </div>

      <DrawbridgeAngle>
        <p>
          Hedge funds are Drawbridge&apos;s largest client segment. Renewals often coincide with
          annual DDQ season (Q1), when firms are responding to allocator questionnaires and
          need to demonstrate their security posture. Emphasize how Drawbridge simplifies
          DDQ responses, maintains regulatory compliance evidence, and provides the ongoing
          monitoring that allocators expect to see.
        </p>
        <p>
          The open-ended fund structure means LPs can redeem at any time — a security
          incident or failed DDQ can directly trigger redemptions and AUM loss. This makes
          cyber risk an existential business risk, not just an IT issue. Frame Drawbridge as
          protecting not just data, but the fund&apos;s ability to retain and attract capital.
        </p>
        <p>
          Key renewal levers: DDQ support volume, regulatory exam readiness, incident
          response retainer utilization, new SEC requirements addressed, and technology
          stack security assessments (trading systems, cloud, third-party vendors).
        </p>
      </DrawbridgeAngle>

      <SectionHeading>Key Terms</SectionHeading>
      <div className="grid grid-cols-3 gap-3">
        <TermBadge term="Long/Short" definition="Strategy that buys undervalued securities (long) and sells overvalued ones (short) to generate market-neutral returns." />
        <TermBadge term="Alpha" definition="Returns generated above a benchmark — the value a manager adds through skill and strategy selection." />
        <TermBadge term="Prime Broker" definition="Bank providing trade execution, financing, and custody services to hedge funds (e.g., Goldman Sachs, Morgan Stanley)." />
        <TermBadge term="2 and 20" definition="Traditional fee structure: 2% management fee on AUM plus 20% performance fee on profits above a hurdle rate." />
        <TermBadge term="High-Water Mark" definition="The highest NAV the fund has reached — performance fees are only charged on gains above this level, protecting LPs from paying fees to recoup losses." />
        <TermBadge term="Cap Intro" definition="Capital Introduction — prime broker service connecting hedge funds with potential LP investors through events and introductions." />
        <TermBadge term="Fund Administrator" definition="Third-party firm (Citco, SS&C, NAV Consulting) that calculates NAV, handles investor reporting, and maintains fund records." />
        <TermBadge term="BEC" definition="Business Email Compromise — social engineering attack targeting wire transfers by impersonating executives or counterparties." />
        <TermBadge term="Reg S-P" definition="SEC regulation requiring financial institutions to protect customer information and notify of breaches." />
      </div>
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  PRIVATE EQUITY                                                    */
/* ------------------------------------------------------------------ */

function PrivateEquity() {
  return (
    <>
      <HeroSection
        icon="🏢"
        title="Private Equity"
        subtitle="Firms that acquire, operate, and grow private companies to generate returns for institutional investors."
      />

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
          Private equity is Drawbridge&apos;s highest-growth segment. The portfolio company
          angle creates natural expansion opportunities — a single PE firm renewal can
          unlock 10–50 portfolio company engagements. During renewals, quantify the
          portfolio-level risk reduction and emphasize Drawbridge&apos;s ability to provide
          a unified view across the entire portfolio.
        </p>
        <p>
          The fundraising cycle creates urgency: PE firms raising a new fund will invest
          heavily in their security posture to pass LP due diligence. Time renewal
          conversations to fundraising timelines when possible. Additionally, cyber due
          diligence on acquisition targets is a natural add-on service — every deal is
          a potential Drawbridge engagement.
        </p>
        <p>
          Key renewal levers: number of portfolio companies covered, M&A cyber due
          diligence engagements completed, portfolio-wide risk score improvements,
          LP reporting deliverables, and fundraising DD support.
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

/* ------------------------------------------------------------------ */
/*  FAMILY & HOME OFFICES                                             */
/* ------------------------------------------------------------------ */

function FamilyOffices() {
  return (
    <>
      <HeroSection
        icon="🏠"
        title="Family & Home Offices"
        subtitle="Private wealth management entities serving ultra-high-net-worth families and individuals."
      />

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

/* ------------------------------------------------------------------ */
/*  MARKETING MATERIALS                                               */
/* ------------------------------------------------------------------ */

function MarketingMaterials() {
  const categories = [
    {
      icon: '📊',
      title: 'Pitch Decks',
      description:
        'Company overview and solution pitch decks for prospects and partner meetings.',
      count: 12,
    },
    {
      icon: '📋',
      title: 'Case Studies',
      description:
        'Client success stories demonstrating measurable security improvements and ROI.',
      count: 8,
    },
    {
      icon: '📄',
      title: 'One-Pagers',
      description:
        'Product and service one-pagers for quick reference during sales conversations.',
      count: 15,
    },
    {
      icon: '⚔️',
      title: 'Battle Cards',
      description:
        'Competitive positioning guides with objection handling and differentiation points.',
      count: 6,
    },
  ];

  return (
    <>
      <HeroSection
        icon="📁"
        title="Marketing Materials"
        subtitle="Sales collateral, competitive intelligence, and customer-facing resources."
      />

      <div className="mt-6 grid grid-cols-2 gap-4">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className="rounded-lg border border-gray-200 bg-white p-5 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start gap-4">
              <span className="text-3xl">{cat.icon}</span>
              <div className="flex-1">
                <p className="font-semibold text-db-dark">{cat.title}</p>
                <p className="mt-1 text-sm text-gray-600">{cat.description}</p>
                <p className="mt-3 text-xs text-gray-400">
                  {cat.count} files available
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-lg border-2 border-dashed border-db-aqua/40 bg-db-aqua/5 p-6 text-center">
        <span className="text-3xl">🔗</span>
        <p className="mt-2 font-semibold text-db-dark font-heading">
          Connect to SharePoint
        </p>
        <p className="mt-1 text-sm text-gray-500">
          Link your organization&apos;s SharePoint library to access and sync marketing
          materials directly within Drawbridge.
        </p>
        <button
          disabled
          className="mt-4 rounded-md bg-db-aqua/30 px-5 py-2 text-sm font-medium text-db-dark cursor-not-allowed"
        >
          Coming Soon
        </button>
      </div>
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  MAIN COMPONENT                                                    */
/* ------------------------------------------------------------------ */

const CONTENT_MAP: Record<SectionId, React.FC> = {
  'industry-overview': IndustryOverview,
  'hedge-funds': HedgeFunds,
  'private-equity': PrivateEquity,
  'family-offices': FamilyOffices,
  marketing: MarketingMaterials,
};

export default function EnablementContent() {
  const [active, setActive] = useState<SectionId>('industry-overview');
  const ContentComponent = CONTENT_MAP[active];

  return (
    <div className="flex gap-6">
      {/* Sidebar */}
      <aside className="w-56 shrink-0">
        <nav className="sticky top-6 rounded-lg border border-gray-200 bg-white p-4">
          {/* Training Section */}
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
            Training
          </p>
          <ul className="space-y-1">
            {TRAINING_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActive(item.id)}
                  className={`w-full rounded-md px-3 py-2 text-left text-sm transition ${
                    active === item.id
                      ? 'border-l-3 border-db-aqua bg-db-aqua/10 font-medium text-db-dark'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-db-dark'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="my-4 border-t border-gray-100" />

          {/* Marketing Materials Section */}
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
            Marketing Materials
          </p>
          <button
            onClick={() => setActive('marketing')}
            className={`w-full rounded-md px-3 py-2 text-left text-sm transition ${
              active === 'marketing'
                ? 'border-l-3 border-db-aqua bg-db-aqua/10 font-medium text-db-dark'
                : 'text-gray-600 hover:bg-gray-50 hover:text-db-dark'
            }`}
          >
            Browse Materials
          </button>
        </nav>
      </aside>

      {/* Content Area */}
      <section className="flex-1 min-w-0">
        <ContentComponent />
      </section>
    </div>
  );
}
