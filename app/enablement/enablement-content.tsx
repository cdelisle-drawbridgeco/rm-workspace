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
  | 'reg-sp'
  | 'dora'
  | 'sec-exam-priorities'
  | 'forecasting-best-practices'
  | 'renewal-plan-best-practices'
  | 'negotiation-playbook'
  | 'outcome-framework'
  | 'journey-hedge-fund'
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
  { id: 'reg-sp', label: 'Regulation S-P' },
  { id: 'dora', label: 'DORA (EU)' },
  { id: 'sec-exam-priorities', label: 'SEC Exam Priorities' },
];

const WORKFLOW_ITEMS: NavItem[] = [
  { id: 'forecasting-best-practices', label: 'Forecasting Best Practices' },
  { id: 'renewal-plan-best-practices', label: 'Renewal Plan Best Practices' },
  { id: 'negotiation-playbook', label: 'Negotiation Playbook' },
];

const VALUE_ITEMS: NavItem[] = [
  { id: 'outcome-framework', label: 'Outcome Framework' },
  { id: 'journey-hedge-fund', label: 'Journey: Hedge Fund' },
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
/*  REGULATION S-P                                                    */
/* ------------------------------------------------------------------ */

function RegSP() {
  return (
    <>
      <HeroSection
        icon="⚖️"
        title="Regulation S-P — Deep Dive"
        subtitle="The SEC's cornerstone regulation for safeguarding customer information at financial institutions, and why it matters for every Drawbridge client."
      />

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

      <SubSection icon="📜" title="The Safeguards Rule (Rule 30(a))">
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

      <SubSection icon="🆕" title="2025 Amendments — What Changed">
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

      <SubSection icon="👥" title="Who Does Reg S-P Apply To?">
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
      <SubSection icon="🔨" title="How the SEC Enforces Reg S-P">
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

/* ------------------------------------------------------------------ */
/*  DORA (EU)                                                         */
/* ------------------------------------------------------------------ */

function DORA() {
  return (
    <>
      <HeroSection
        icon="🇪🇺"
        title="DORA — Digital Operational Resilience Act"
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

      <SubSection icon="1️⃣" title="Pillar 1: ICT Risk Management">
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

      <SubSection icon="2️⃣" title="Pillar 2: ICT Incident Reporting">
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

      <SubSection icon="3️⃣" title="Pillar 3: Digital Operational Resilience Testing">
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

      <SubSection icon="4️⃣" title="Pillar 4: Third-Party ICT Risk Management">
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

      <SubSection icon="5️⃣" title="Pillar 5: Information Sharing">
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
      <SubSection icon="🎯" title="Scope of Application">
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
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  SEC CYBERSECURITY EXAM PRIORITIES                                  */
/* ------------------------------------------------------------------ */

function SECExamPriorities() {
  return (
    <>
      <HeroSection
        icon="🔍"
        title="SEC Cybersecurity Exam Priorities"
        subtitle="What the SEC's Division of Examinations is actively looking for — and how it directly shapes what Drawbridge clients need."
      />

      <div className="mt-6 grid grid-cols-4 gap-4">
        <StatCard label="Cyber as Exam Priority Since" value="2014" />
        <StatCard label="Exams Conducted Annually" value="~3,000" />
        <StatCard label="% Citing Cyber Deficiencies" value="~25%" />
        <StatCard label="Avg. Exam Duration" value="4–8 Weeks" />
      </div>

      {/* What Is the Exam Program */}
      <SectionHeading>What Is the SEC Exam Program?</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed">
        The SEC&apos;s <strong>Division of Examinations</strong> (formerly OCIE) is the agency&apos;s
        front-line compliance oversight arm. It conducts examinations of registered
        entities — including investment advisers, broker-dealers, and fund complexes — to
        assess compliance with federal securities laws and to identify risks to investors
        and the markets.
      </p>
      <p className="mt-3 text-sm text-gray-700 leading-relaxed">
        Each year, the Division publishes its <strong>Examination Priorities</strong>,
        signaling to the industry what topics examiners will focus on. Cybersecurity and
        operational resilience have been <strong>explicitly named as a priority every year
        since 2014</strong> — and the depth and specificity of the cyber-related priorities
        has increased dramatically. For Drawbridge clients, understanding these priorities
        is essential because they represent exactly what an examiner will ask for during
        a visit.
      </p>

      {/* How Exams Work */}
      <SectionHeading>How a Cybersecurity Exam Works</SectionHeading>
      <FlowDiagram
        steps={[
          'Notification Letter',
          'Document Request',
          'On-Site / Remote Review',
          'Staff Interviews',
          'Findings & Deficiency Letter',
          'Remediation & Follow-Up',
        ]}
      />

      <SubSection icon="📬" title="The Exam Lifecycle">
        <p>
          Exams typically follow a predictable pattern, though the SEC can also conduct
          &ldquo;sweep&rdquo; exams targeting specific topics across many firms simultaneously:
        </p>
        <ul className="list-disc ml-5 space-y-2">
          <li>
            <strong>Notification &amp; Document Request</strong> — The firm receives a letter
            (sometimes with little advance notice) requesting specific documents. For
            cybersecurity, this typically includes: written information security policies,
            incident response plans, vendor risk assessments, employee training records,
            access control documentation, data classification policies, and evidence of
            ongoing monitoring.
          </li>
          <li>
            <strong>Review Period</strong> — Examiners review the submitted documents and
            may request additional materials. They are looking for both the <em>existence</em> of
            policies and <em>evidence of implementation</em>. A policy document that hasn&apos;t
            been updated in 3 years, or training records showing 40% completion rates,
            will raise red flags.
          </li>
          <li>
            <strong>Interviews</strong> — Examiners interview key personnel including the
            CCO, CTO/CISO (or equivalent), and sometimes the COO or CEO. They ask specific
            questions: &ldquo;Walk me through what happens when you detect a security incident.&rdquo;
            &ldquo;How do you evaluate the security of your third-party vendors?&rdquo; &ldquo;When was
            your last penetration test and what were the findings?&rdquo;
          </li>
          <li>
            <strong>Deficiency Letter</strong> — If issues are found, the firm receives a
            deficiency letter outlining the findings and requiring a written response with
            a remediation plan. Firms typically have 30–60 days to respond. Failure to
            remediate can lead to referral to the Division of Enforcement.
          </li>
        </ul>
      </SubSection>

      {/* Current Priorities */}
      <SectionHeading>Current Cybersecurity Exam Focus Areas</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed mb-4">
        Based on the Division&apos;s published priorities and recent exam trends, these are
        the areas examiners are most focused on. Each maps directly to Drawbridge
        service capabilities.
      </p>

      <SubSection icon="📝" title="1. Governance & Written Policies">
        <p>
          Examiners want to see that cybersecurity is <strong>governed at the senior
          level</strong>, not buried in IT. They look for:
        </p>
        <ul className="list-disc ml-5 space-y-1">
          <li>Board or senior management approval of the information security program</li>
          <li>Regular reporting of cyber risks to senior leadership</li>
          <li>Written policies that are specific to the firm (not generic templates)</li>
          <li>Evidence that policies are reviewed and updated at least annually</li>
          <li>Clear assignment of cybersecurity responsibilities to named individuals</li>
        </ul>
        <p className="mt-2 text-xs text-gray-500 italic">
          Drawbridge service: Policy Program, Annual Policy Reviews, Board Reporting
        </p>
      </SubSection>

      <SubSection icon="🚨" title="2. Incident Response Preparedness">
        <p>
          With the 2025 Reg S-P amendments mandating incident response programs, this
          area has moved from &ldquo;best practice&rdquo; to <strong>regulatory requirement</strong>.
          Examiners assess:
        </p>
        <ul className="list-disc ml-5 space-y-1">
          <li>Existence of a written incident response plan with defined roles, escalation procedures, and communication templates</li>
          <li>Evidence of tabletop exercises or simulations (when was the last one? who participated?)</li>
          <li>Incident log — have there been any incidents? how were they handled?</li>
          <li>Breach notification procedures aligned with the 30-day Reg S-P requirement</li>
          <li>Retainer agreements with IR firms for surge support</li>
        </ul>
        <p className="mt-2 text-xs text-gray-500 italic">
          Drawbridge service: IR Planning, Tabletop Exercises, IR Retainer, Breach Response Support
        </p>
      </SubSection>

      <SubSection icon="🔐" title="3. Access Controls & Identity Management">
        <p>
          Unauthorized access is a leading cause of breaches in financial services.
          Examiners focus heavily on:
        </p>
        <ul className="list-disc ml-5 space-y-1">
          <li>Multi-factor authentication (MFA) — is it implemented for all users on all critical systems?</li>
          <li>Privileged access management — who has admin rights and why?</li>
          <li>User access reviews — are permissions reviewed and deprovisioned when employees leave or change roles?</li>
          <li>Remote access controls — especially relevant post-COVID with hybrid work models</li>
          <li>Password policies — complexity, rotation, and prohibition of shared credentials</li>
        </ul>
        <p className="mt-2 text-xs text-gray-500 italic">
          Drawbridge service: Security Assessments, Access Control Reviews, Policy Program
        </p>
      </SubSection>

      <SubSection icon="📧" title="4. Email Security & Phishing Prevention">
        <p>
          Email remains the #1 attack vector for financial services firms. The SEC has
          brought <strong>multiple enforcement actions</strong> against firms that suffered
          email account takeovers. Examiners look for:
        </p>
        <ul className="list-disc ml-5 space-y-1">
          <li>Email filtering and anti-phishing technology in place</li>
          <li>Employee phishing awareness training — frequency, completion rates, and testing (simulated phishing campaigns)</li>
          <li>DMARC, DKIM, and SPF email authentication records configured</li>
          <li>Policies for verifying wire transfer instructions received via email</li>
          <li>Monitoring for compromised email accounts</li>
        </ul>
        <p className="mt-2 text-xs text-gray-500 italic">
          Drawbridge service: Security Awareness Training, Phishing Simulations, Email Security Assessment
        </p>
      </SubSection>

      <SubSection icon="🏢" title="5. Third-Party / Vendor Risk Management">
        <p>
          Financial firms rely on dozens of third-party vendors — fund administrators,
          cloud providers, IT managed service providers, trading platforms. Examiners
          want to see:
        </p>
        <ul className="list-disc ml-5 space-y-1">
          <li>A documented vendor risk management program with defined assessment criteria</li>
          <li>Initial due diligence conducted before onboarding vendors that access sensitive data</li>
          <li>Ongoing monitoring and periodic reassessment of critical vendors</li>
          <li>Contractual provisions requiring vendors to maintain security controls and notify of breaches</li>
          <li>Classification of vendors by risk tier (critical, high, medium, low)</li>
        </ul>
        <p className="mt-2 text-xs text-gray-500 italic">
          Drawbridge service: Third-Party Risk Management Program, Vendor Assessments
        </p>
      </SubSection>

      <SubSection icon="🔄" title="6. Data Loss Prevention & Encryption">
        <p>
          Protecting sensitive data — both at rest and in transit — is a core exam focus:
        </p>
        <ul className="list-disc ml-5 space-y-1">
          <li>Encryption of sensitive data at rest (laptops, servers, databases) and in transit (TLS, VPN)</li>
          <li>Data classification program — does the firm know where its sensitive data lives?</li>
          <li>Data loss prevention (DLP) controls to prevent unauthorized exfiltration</li>
          <li>Mobile device management (MDM) policies for firm and personal devices</li>
          <li>Secure disposal procedures for hardware and media</li>
        </ul>
        <p className="mt-2 text-xs text-gray-500 italic">
          Drawbridge service: Security Assessments, Data Classification Guidance, Policy Program
        </p>
      </SubSection>

      <SubSection icon="🏗️" title="7. Business Continuity & Disaster Recovery">
        <p>
          Operational resilience has become increasingly important, especially after
          COVID exposed gaps in many firms&apos; BCP/DR programs:
        </p>
        <ul className="list-disc ml-5 space-y-1">
          <li>Written BCP/DR plans covering critical business functions and systems</li>
          <li>Defined recovery time objectives (RTO) and recovery point objectives (RPO)</li>
          <li>Regular testing of backup and recovery procedures (not just backups — actual recovery tests)</li>
          <li>Consideration of scenarios beyond natural disasters: ransomware, provider outages, key-person risk</li>
          <li>Communication plans for clients and counterparties during disruptions</li>
        </ul>
        <p className="mt-2 text-xs text-gray-500 italic">
          Drawbridge service: BCP/DR Planning, Tabletop Exercises, Resilience Assessments
        </p>
      </SubSection>

      <SubSection icon="📊" title="8. Emerging Technology & AI Risks">
        <p>
          The SEC has signaled increasing attention to risks from new technologies:
        </p>
        <ul className="list-disc ml-5 space-y-1">
          <li>Use of AI and machine learning in trading, compliance, and client communications — governance and controls around these tools</li>
          <li>Cloud security posture — configuration management, shared responsibility model understanding, data residency</li>
          <li>Cryptocurrency and digital asset custody controls (for firms with exposure)</li>
          <li>Shadow IT — use of unsanctioned tools and services by employees</li>
        </ul>
        <p className="mt-2 text-xs text-gray-500 italic">
          Drawbridge service: Technology Risk Assessments, Cloud Security Reviews, Policy Program
        </p>
      </SubSection>

      {/* Exam Readiness Checklist */}
      <SectionHeading>Exam Readiness — What Clients Should Have Ready</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed mb-4">
        When the SEC sends a document request letter, clients need to produce these
        materials quickly and confidently. Drawbridge helps build, maintain, and organize
        all of them.
      </p>
      <div className="grid grid-cols-2 gap-3">
        <div className="flex items-start gap-2 rounded-md border border-gray-200 bg-white p-3">
          <span className="text-green-500 mt-0.5">&#10003;</span>
          <p className="text-sm text-gray-700">Written Information Security Policy (current, board-approved)</p>
        </div>
        <div className="flex items-start gap-2 rounded-md border border-gray-200 bg-white p-3">
          <span className="text-green-500 mt-0.5">&#10003;</span>
          <p className="text-sm text-gray-700">Incident Response Plan with defined roles &amp; escalation</p>
        </div>
        <div className="flex items-start gap-2 rounded-md border border-gray-200 bg-white p-3">
          <span className="text-green-500 mt-0.5">&#10003;</span>
          <p className="text-sm text-gray-700">Business Continuity / Disaster Recovery Plan</p>
        </div>
        <div className="flex items-start gap-2 rounded-md border border-gray-200 bg-white p-3">
          <span className="text-green-500 mt-0.5">&#10003;</span>
          <p className="text-sm text-gray-700">Vendor risk assessment records &amp; third-party inventory</p>
        </div>
        <div className="flex items-start gap-2 rounded-md border border-gray-200 bg-white p-3">
          <span className="text-green-500 mt-0.5">&#10003;</span>
          <p className="text-sm text-gray-700">Security awareness training completion records</p>
        </div>
        <div className="flex items-start gap-2 rounded-md border border-gray-200 bg-white p-3">
          <span className="text-green-500 mt-0.5">&#10003;</span>
          <p className="text-sm text-gray-700">Penetration test / vulnerability assessment reports</p>
        </div>
        <div className="flex items-start gap-2 rounded-md border border-gray-200 bg-white p-3">
          <span className="text-green-500 mt-0.5">&#10003;</span>
          <p className="text-sm text-gray-700">Access control reviews &amp; MFA implementation evidence</p>
        </div>
        <div className="flex items-start gap-2 rounded-md border border-gray-200 bg-white p-3">
          <span className="text-green-500 mt-0.5">&#10003;</span>
          <p className="text-sm text-gray-700">Incident log (even if no incidents — document that fact)</p>
        </div>
        <div className="flex items-start gap-2 rounded-md border border-gray-200 bg-white p-3">
          <span className="text-green-500 mt-0.5">&#10003;</span>
          <p className="text-sm text-gray-700">Risk assessment documentation &amp; remediation tracking</p>
        </div>
        <div className="flex items-start gap-2 rounded-md border border-gray-200 bg-white p-3">
          <span className="text-green-500 mt-0.5">&#10003;</span>
          <p className="text-sm text-gray-700">Privacy notices &amp; customer information handling procedures</p>
        </div>
      </div>

      <DrawbridgeAngle>
        <p>
          The SEC exam program is Drawbridge&apos;s most powerful sales and renewal driver.
          Every priority area listed above maps to a Drawbridge service. During renewals,
          frame the conversation around <strong>exam readiness</strong>:
        </p>
        <p>
          &ldquo;If the SEC sent you a document request letter tomorrow, could you respond
          confidently within a week? Drawbridge ensures the answer is yes.&rdquo;
        </p>
        <p>
          For clients who have been examined, reference the experience — &ldquo;You saw firsthand
          what the SEC asks for. Drawbridge keeps all of that current and organized so you&apos;re
          always ready.&rdquo; For clients who haven&apos;t been examined yet, create urgency —
          &ldquo;With ~3,000 exams a year and cyber as a stated priority, it&apos;s a matter of
          when, not if.&rdquo;
        </p>
        <p>
          Key renewal levers: number of exam-ready deliverables maintained, policy updates
          completed, training completion rates, IR plan currency, and the peace of mind
          that comes from knowing you&apos;re prepared.
        </p>
      </DrawbridgeAngle>

      <SectionHeading>Key Terms</SectionHeading>
      <div className="grid grid-cols-3 gap-3">
        <TermBadge term="Division of Examinations" definition="The SEC division (formerly OCIE) responsible for conducting compliance examinations of registered entities. Publishes annual exam priorities." />
        <TermBadge term="Exam Priorities" definition="Annual publication by the Division of Examinations identifying the topics and risk areas examiners will focus on in the coming year." />
        <TermBadge term="Deficiency Letter" definition="Written communication from SEC examiners identifying compliance shortcomings — requires a written remediation response within 30–60 days." />
        <TermBadge term="Sweep Exam" definition="A targeted exam conducted simultaneously across many firms to assess industry-wide compliance on a specific topic (e.g., email security, ransomware readiness)." />
        <TermBadge term="Risk Alert" definition="Public notice from the Division of Examinations highlighting common deficiencies observed during exams — serves as a warning to the industry." />
        <TermBadge term="MFA" definition="Multi-Factor Authentication — requiring two or more verification methods to access systems. Absence of MFA is one of the most commonly cited exam deficiencies." />
        <TermBadge term="DMARC" definition="Domain-based Message Authentication — email security protocol that prevents domain spoofing. Increasingly checked by SEC examiners as a baseline email security control." />
        <TermBadge term="Shadow IT" definition="Technology tools and services used by employees without organizational approval — creates unmonitored security risks that examiners increasingly scrutinize." />
        <TermBadge term="Document Request List" definition="The initial list of documents and records the SEC requests at the start of an examination — typically 30–50 specific items for cybersecurity-focused exams." />
      </div>
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  FORECASTING BEST PRACTICES                                        */
/* ------------------------------------------------------------------ */

function ForecastingBestPractices() {
  return (
    <>
      <HeroSection
        icon="🎯"
        title="Forecasting Best Practices"
        subtitle="How to build a disciplined, data-driven renewal forecast — treating your renewal pipeline like a sales pipeline."
      />

      {/* Philosophy */}
      <SectionHeading>The Forecasting Mindset</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed">
        Renewal forecasting is both an <strong>art and a science</strong>. The science is the
        data — contract values, renewal dates, historical retention rates, product usage.
        The art is your judgment as an RM — reading the relationship, sensing risk signals,
        and weighing factors the data can&apos;t capture. A great forecast combines both.
      </p>
      <p className="mt-3 text-sm text-gray-700 leading-relaxed">
        Think of your renewal book like a <strong>sales pipeline</strong>. Every renewal is a
        &ldquo;deal&rdquo; that needs to be qualified, worked, and closed. Just like a sales rep
        doesn&apos;t wait until the last week to close a deal, you shouldn&apos;t wait until the
        last month to engage on a renewal. The forecast is your tool for staying ahead.
      </p>

      {/* Best / Worst / Call */}
      <SectionHeading>Understanding Best, Worst & Call</SectionHeading>
      <div className="grid grid-cols-3 gap-4 mt-2">
        <div className="rounded-lg border-2 border-green-200 bg-green-50 p-4">
          <p className="font-semibold text-green-800 font-heading">Best Case</p>
          <p className="mt-2 text-sm text-green-700">
            The outcome if <strong>everything goes right</strong>. The client renews on time,
            accepts a price increase, adds new services, and the champion stays in place.
            This is your realistic upside — not a fantasy.
          </p>
          <p className="mt-3 text-xs text-green-600 italic">
            Ask yourself: &ldquo;If the stars align and every conversation goes well, what&apos;s the
            maximum realistic outcome?&rdquo;
          </p>
        </div>
        <div className="rounded-lg border-2 border-red-200 bg-red-50 p-4">
          <p className="font-semibold text-red-800 font-heading">Worst Case</p>
          <p className="mt-2 text-sm text-red-700">
            The outcome if <strong>things go sideways</strong>. The client downsizes, pushes
            back on price, loses their champion, goes through M&A, or churns entirely.
            This is your realistic downside — not doomsday.
          </p>
          <p className="mt-3 text-xs text-red-600 italic">
            Ask yourself: &ldquo;If I lose the internal champion or the budget gets cut, what&apos;s
            the floor?&rdquo;
          </p>
        </div>
        <div className="rounded-lg border-2 border-blue-200 bg-blue-50 p-4">
          <p className="font-semibold text-blue-800 font-heading">Call</p>
          <p className="mt-2 text-sm text-blue-700">
            Your <strong>honest, gut-informed prediction</strong> of what will actually happen.
            This is not the midpoint of best and worst — it&apos;s your professional judgment
            weighted by the signals you&apos;re seeing right now.
          </p>
          <p className="mt-3 text-xs text-blue-600 italic">
            Ask yourself: &ldquo;If I had to bet my own money, what would I say this renewal
            lands at?&rdquo;
          </p>
        </div>
      </div>

      <SubSection icon="📐" title="How to Set Your Best / Worst / Call">
        <p><strong>Step 1: Start with the baseline.</strong> The expiring ARR is your anchor. Every
          forecast starts from what the client is paying today.</p>
        <p><strong>Step 2: Assess the upside (Best).</strong> Is there an expansion opportunity?
          Price increase? New product adoption? Multi-year commitment? Factor in only
          what you have evidence to support — a conversation, a proposal, expressed interest.</p>
        <p><strong>Step 3: Assess the downside (Worst).</strong> What could go wrong? Budget
          pressure? Champion departure? Competitive threat? Scope reduction? Be honest —
          the worst case should feel uncomfortable but plausible.</p>
        <p><strong>Step 4: Make your Call.</strong> This is where judgment matters. Weight the
          probability of each scenario. If you&apos;re 80% confident in renewal at current
          rates, your call should be close to the expiring value. If there&apos;s a real risk
          of churn, the call should reflect that — don&apos;t hide bad news in the forecast.</p>
        <p><strong>Step 5: Narrow the spread over time.</strong> Early in the quarter, your best
          and worst may be far apart. That&apos;s fine — it reflects genuine uncertainty. As
          you get closer to the renewal date and have more conversations, the spread should
          tighten. If it&apos;s not tightening, you&apos;re not working the renewal hard enough.</p>
      </SubSection>

      {/* Probability Thinking */}
      <SectionHeading>Thinking in Probabilities</SectionHeading>
      <SubSection icon="🎲" title="Scenario Weighting">
        <p>
          Great forecasters don&apos;t think in single outcomes — they think in
          <strong> weighted scenarios</strong>. For every renewal, mentally assign a probability
          to each possible outcome:
        </p>
        <div className="mt-3 rounded-md border border-gray-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left font-medium text-gray-600">Scenario</th>
                <th className="px-4 py-2 text-left font-medium text-gray-600">Example</th>
                <th className="px-4 py-2 text-right font-medium text-gray-600">Probability</th>
                <th className="px-4 py-2 text-right font-medium text-gray-600">Value</th>
                <th className="px-4 py-2 text-right font-medium text-gray-600">Weighted</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="px-4 py-2 text-green-700">Upsell</td>
                <td className="px-4 py-2 text-gray-600">Expand to portcos + price increase</td>
                <td className="px-4 py-2 text-right">20%</td>
                <td className="px-4 py-2 text-right">$180K</td>
                <td className="px-4 py-2 text-right font-medium">$36K</td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-blue-700">Flat Renewal</td>
                <td className="px-4 py-2 text-gray-600">Same scope, same price</td>
                <td className="px-4 py-2 text-right">50%</td>
                <td className="px-4 py-2 text-right">$150K</td>
                <td className="px-4 py-2 text-right font-medium">$75K</td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-orange-700">Downsize</td>
                <td className="px-4 py-2 text-gray-600">Drop one service line</td>
                <td className="px-4 py-2 text-right">20%</td>
                <td className="px-4 py-2 text-right">$110K</td>
                <td className="px-4 py-2 text-right font-medium">$22K</td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-red-700">Churn</td>
                <td className="px-4 py-2 text-gray-600">Client leaves entirely</td>
                <td className="px-4 py-2 text-right">10%</td>
                <td className="px-4 py-2 text-right">$0</td>
                <td className="px-4 py-2 text-right font-medium">$0</td>
              </tr>
              <tr className="bg-gray-50 font-semibold">
                <td className="px-4 py-2" colSpan={2}>Expected Value (Your Call)</td>
                <td className="px-4 py-2 text-right">100%</td>
                <td className="px-4 py-2 text-right"></td>
                <td className="px-4 py-2 text-right">$133K</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3">
          You don&apos;t need to calculate this formally every time, but you should be thinking
          this way. When your manager asks &ldquo;why is your call at $133K?&rdquo; you should be
          able to articulate the scenarios and your confidence level in each.
        </p>
      </SubSection>

      <SubSection icon="⚠️" title="Common Forecasting Mistakes">
        <ul className="list-disc ml-5 space-y-2">
          <li><strong>Sandbagging</strong> — Setting your call artificially low so you can
            &ldquo;beat&rdquo; the number. This destroys trust and makes it impossible for leadership
            to plan. Your call should be your honest prediction, not a negotiating position.</li>
          <li><strong>Happy Ears</strong> — Hearing what you want to hear. The client said
            &ldquo;we love Drawbridge&rdquo; but hasn&apos;t signed the renewal with 30 days left. Actions
            matter more than words.</li>
          <li><strong>Stale Forecasts</strong> — Not updating your numbers after a significant
            conversation or event. If you learned the client is being acquired, your forecast
            should change <em>that day</em>, not next Monday.</li>
          <li><strong>Binary Thinking</strong> — &ldquo;They&apos;ll either renew or they won&apos;t.&rdquo;
            Reality has more nuance. Most renewals involve some negotiation on scope, price,
            or timing.</li>
          <li><strong>Ignoring Leading Indicators</strong> — Engagement metrics, response
            times, champion changes, budget cycle timing — these signals tell you where a
            renewal is heading before the client does.</li>
        </ul>
      </SubSection>

      {/* Weekly Cadence */}
      <SectionHeading>The Weekly Forecast Cadence</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed mb-4">
        Forecasting is not a monthly exercise — it&apos;s a <strong>weekly discipline</strong>.
        The following cadence ensures leadership always has a current, accurate picture
        of where we stand.
      </p>

      <div className="rounded-lg border border-gray-200 bg-white overflow-hidden">
        <div className="grid grid-cols-1 divide-y divide-gray-100">
          <div className="flex items-start gap-4 p-4">
            <div className="shrink-0 w-28 text-center">
              <p className="text-xs font-semibold text-gray-400 uppercase">Monday</p>
              <p className="text-lg font-bold font-heading text-db-dark">by EOD</p>
            </div>
            <div>
              <p className="font-semibold text-db-dark">RM Forecast Submission</p>
              <p className="mt-1 text-sm text-gray-600">
                Every RM updates their Best / Worst / Call for all renewals in the active
                forecast window. Review every account — even the ones you think are locked.
                Update notes on any changes from the prior week. Flag accounts that need
                escalation or support.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4">
            <div className="shrink-0 w-28 text-center">
              <p className="text-xs font-semibold text-gray-400 uppercase">Tuesday</p>
              <p className="text-lg font-bold font-heading text-db-dark">Team Call</p>
            </div>
            <div>
              <p className="font-semibold text-db-dark">Team Forecast Review</p>
              <p className="mt-1 text-sm text-gray-600">
                Team-wide meeting to review the aggregated call. Walk through at-risk renewals,
                celebrate wins, discuss strategy on key accounts. Focus on: What changed this
                week? Where do we need help? What&apos;s the gap to target? This is a
                working session, not a status report.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4">
            <div className="shrink-0 w-28 text-center">
              <p className="text-xs font-semibold text-gray-400 uppercase">Wed–Thu</p>
              <p className="text-lg font-bold font-heading text-db-dark">1:1s</p>
            </div>
            <div>
              <p className="font-semibold text-db-dark">Manager 1:1 Deep Dives</p>
              <p className="mt-1 text-sm text-gray-600">
                Individual sessions to go deeper on specific accounts. Strategize on at-risk
                renewals, coach on negotiation approach, align on escalation needs. This is
                where the real deal coaching happens — come prepared with your top 3 accounts
                that need attention.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4">
            <div className="shrink-0 w-28 text-center">
              <p className="text-xs font-semibold text-gray-400 uppercase">Thursday</p>
              <p className="text-lg font-bold font-heading text-db-dark">PM</p>
            </div>
            <div>
              <p className="font-semibold text-db-dark">Leadership Call Submitted</p>
              <p className="mt-1 text-sm text-gray-600">
                The leadership team finalizes the consolidated forecast and submits the call
                to the exec team. This number is informed by every RM&apos;s input, the team
                review, and 1:1 discussions. It&apos;s the official number the business plans on.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Forecast Horizons */}
      <SectionHeading>Forecast Horizons</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed mb-4">
        Not every quarter gets the same level of scrutiny. The cadence adjusts based on
        how close we are to execution.
      </p>

      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-lg border-2 border-db-aqua bg-db-aqua/5 p-5">
          <p className="text-xs font-semibold text-db-aqua-dark uppercase tracking-wide">Weekly Forecast</p>
          <p className="mt-2 font-semibold text-db-dark font-heading text-lg">Current Quarter + Next Quarter</p>
          <p className="mt-2 text-sm text-gray-600">
            These are your <strong>active execution quarters</strong>. Every renewal gets a
            weekly Best / Worst / Call update. The current quarter is all about closing —
            getting signatures and locking in ARR. Next quarter starts getting weekly
            attention <strong>one month before it begins</strong>, so you&apos;re never caught
            flat-footed on day one of a new quarter.
          </p>
          <div className="mt-3 flex gap-2">
            <span className="rounded-full bg-db-aqua/20 px-3 py-1 text-xs font-medium text-db-dark">Weekly updates</span>
            <span className="rounded-full bg-db-aqua/20 px-3 py-1 text-xs font-medium text-db-dark">Monday deadline</span>
            <span className="rounded-full bg-db-aqua/20 px-3 py-1 text-xs font-medium text-db-dark">Account-level detail</span>
          </div>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-5">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Monthly Forecast</p>
          <p className="mt-2 font-semibold text-db-dark font-heading text-lg">Following 2 Quarters</p>
          <p className="mt-2 text-sm text-gray-600">
            These are your <strong>planning quarters</strong>. Review monthly to maintain
            awareness and start early risk identification. The goal is to spot problems
            early — a renewal 6 months out that&apos;s already showing churn signals needs
            attention <em>now</em>, not when it hits the weekly window.
          </p>
          <div className="mt-3 flex gap-2">
            <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">Monthly updates</span>
            <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">Risk flagging</span>
            <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">Early engagement</span>
          </div>
        </div>
      </div>

      <SubSection icon="📅" title="Rolling 4-Quarter View">
        <p>
          At any given time, you should have visibility into the <strong>next 4 quarters
          of renewals</strong>. This is your rolling forecast window:
        </p>
        <div className="mt-3 grid grid-cols-4 gap-2">
          <div className="rounded-md bg-db-aqua/15 border border-db-aqua/30 p-3 text-center">
            <p className="text-xs font-semibold text-db-aqua-dark">Q (Current)</p>
            <p className="text-[11px] text-gray-500 mt-1">Weekly</p>
            <p className="text-[11px] text-gray-500">Close &amp; collect</p>
          </div>
          <div className="rounded-md bg-db-aqua/10 border border-db-aqua/20 p-3 text-center">
            <p className="text-xs font-semibold text-db-aqua-dark">Q+1</p>
            <p className="text-[11px] text-gray-500 mt-1">Weekly (last month)</p>
            <p className="text-[11px] text-gray-500">Engage &amp; negotiate</p>
          </div>
          <div className="rounded-md bg-gray-50 border border-gray-200 p-3 text-center">
            <p className="text-xs font-semibold text-gray-600">Q+2</p>
            <p className="text-[11px] text-gray-500 mt-1">Monthly</p>
            <p className="text-[11px] text-gray-500">Plan &amp; prepare</p>
          </div>
          <div className="rounded-md bg-gray-50 border border-gray-200 p-3 text-center">
            <p className="text-xs font-semibold text-gray-600">Q+3</p>
            <p className="text-[11px] text-gray-500 mt-1">Monthly</p>
            <p className="text-[11px] text-gray-500">Identify &amp; assess</p>
          </div>
        </div>
      </SubSection>

      {/* What Good Looks Like */}
      <SectionHeading>What a Great Forecast Looks Like</SectionHeading>
      <div className="grid grid-cols-2 gap-4">
        <CharacteristicCard
          title="Tight Spreads Late in Quarter"
          description="Best and Worst should converge as you approach close. A $100K spread with 2 weeks left means you haven't done the work."
        />
        <CharacteristicCard
          title="Call Moves for Reasons"
          description="When your call changes, you should be able to explain exactly why. 'I had a conversation with the CFO and they're cutting 20% of vendor spend.'"
        />
        <CharacteristicCard
          title="No Surprises"
          description="The Tuesday team call should never be the first time leadership hears about a deal going sideways. Flag risks early and often."
        />
        <CharacteristicCard
          title="Consistent Accuracy"
          description="Over time, your call should land within 5-10% of actuals. Track your forecast accuracy — it's how you build credibility."
        />
      </div>

      <DrawbridgeAngle>
        <p>
          Forecasting discipline directly impacts Drawbridge&apos;s ability to plan hiring, invest
          in product, and hit company targets. When every RM commits to an honest, well-reasoned
          weekly call, leadership can make better decisions for the entire business. Your
          forecast isn&apos;t just a number — it&apos;s a commitment to transparency and to running
          your book of business like a professional.
        </p>
      </DrawbridgeAngle>
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  RENEWAL PLAN BEST PRACTICES                                       */
/* ------------------------------------------------------------------ */

function RenewalPlanBestPractices() {
  return (
    <>
      <HeroSection
        icon="📋"
        title="Renewal Plan Best Practices"
        subtitle="How to run your renewal pipeline with the rigor of a sales pipeline — proactive, structured, and always moving forward."
      />

      {/* Pipeline Mindset */}
      <SectionHeading>The Pipeline Mindset</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed">
        A renewal is not an event — it&apos;s a <strong>process that starts months before the
        contract expires</strong>. The best RMs treat every renewal like a deal in a sales
        pipeline: it has stages, milestones, risk signals, and a close plan. The renewal
        plan is your deal sheet — it keeps you organized, accountable, and ahead of the
        timeline.
      </p>
      <p className="mt-3 text-sm text-gray-700 leading-relaxed">
        The 7-stage renewal workflow in Drawbridge is designed to mirror this pipeline
        approach. Each stage has specific gates (tasks) that must be completed before
        moving forward. Skipping stages is like skipping discovery in a sales process —
        you might get lucky, but you&apos;ll eventually lose a deal you shouldn&apos;t have.
      </p>

      {/* Timeline */}
      <SectionHeading>Renewal Timeline — When to Start What</SectionHeading>
      <div className="rounded-lg border border-gray-200 bg-white overflow-hidden">
        <div className="grid grid-cols-1 divide-y divide-gray-100">
          <div className="flex items-start gap-4 p-4">
            <div className="shrink-0 w-24 text-center">
              <p className="text-xs font-semibold text-gray-400">START</p>
              <p className="text-lg font-bold font-heading text-db-dark">120+ days</p>
            </div>
            <div>
              <p className="font-semibold text-db-dark">Discovery & Health Check</p>
              <p className="mt-1 text-sm text-gray-600">
                Begin the renewal plan. Pull usage data, review support tickets, check
                stakeholder changes. Open the plan in Drawbridge, complete Stage 1 gates.
                The goal: understand where you stand <em>before</em> you talk to the client.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4">
            <div className="shrink-0 w-24 text-center">
              <p className="text-xs font-semibold text-gray-400">ENGAGE</p>
              <p className="text-lg font-bold font-heading text-db-dark">90 days</p>
            </div>
            <div>
              <p className="font-semibold text-db-dark">Stakeholder Engagement</p>
              <p className="mt-1 text-sm text-gray-600">
                Schedule the renewal conversation with your champion and economic buyer.
                Present the value delivered (DDQs completed, incidents handled, compliance
                maintained). Surface any concerns early. Complete Stages 2–3.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4">
            <div className="shrink-0 w-24 text-center">
              <p className="text-xs font-semibold text-gray-400">PROPOSE</p>
              <p className="text-lg font-bold font-heading text-db-dark">60 days</p>
            </div>
            <div>
              <p className="font-semibold text-db-dark">Proposal & Negotiation</p>
              <p className="mt-1 text-sm text-gray-600">
                Deliver the renewal proposal. Include scope, pricing, any expansion
                opportunities. Be prepared for negotiation — have your walk-away and your
                stretch targets defined. Complete Stages 4–5.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4">
            <div className="shrink-0 w-24 text-center">
              <p className="text-xs font-semibold text-gray-400">CLOSE</p>
              <p className="text-lg font-bold font-heading text-db-dark">30 days</p>
            </div>
            <div>
              <p className="font-semibold text-db-dark">Contract & Signature</p>
              <p className="mt-1 text-sm text-gray-600">
                Finalize terms, route the contract through legal, get the signature.
                If you&apos;re still in negotiation at 30 days, escalate — this is a red flag.
                Complete Stages 6–7 and close the plan.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Working the Plan */}
      <SectionHeading>Working the Plan — Stage by Stage</SectionHeading>
      <SubSection icon="1️⃣" title="Pre-Renewal Assessment">
        <p>
          This is your <strong>discovery phase</strong>. Before you reach out to the client,
          do your homework:
        </p>
        <ul className="list-disc ml-5 space-y-1">
          <li>Review the current contract scope and pricing</li>
          <li>Pull usage and engagement data — are they using everything they&apos;re paying for?</li>
          <li>Check support ticket history — any unresolved issues?</li>
          <li>Review DDQ completion rates, assessment scores, and deliverable status</li>
          <li>Confirm your stakeholder map — who&apos;s the champion, the economic buyer, the blocker?</li>
        </ul>
        <p>
          <strong>Red flags at this stage:</strong> Low engagement, unresolved support issues,
          champion departure, M&A activity, budget freezes. If you find these, adjust your
          forecast accordingly and start strategizing early.
        </p>
      </SubSection>

      <SubSection icon="2️⃣" title="Stakeholder Mapping & Engagement">
        <p>
          Know your <strong>buying committee</strong>. In alternative asset management, the
          decision-making structure typically looks like:
        </p>
        <ul className="list-disc ml-5 space-y-1">
          <li><strong>Champion</strong> — The person who uses and values Drawbridge day-to-day (usually COO, CCO, or Head of IT)</li>
          <li><strong>Economic Buyer</strong> — The person who signs the check (often CFO, Managing Partner, or CEO)</li>
          <li><strong>Influencers</strong> — People whose opinions matter (compliance team, external counsel, allocator relations)</li>
          <li><strong>Blockers</strong> — People who might resist renewal (new hires who preferred a different vendor, cost-cutters)</li>
        </ul>
        <p>
          Schedule a <strong>formal renewal meeting</strong> — don&apos;t try to sneak the renewal
          into a regular check-in. Frame it as a strategic conversation about the partnership,
          not a transaction.
        </p>
      </SubSection>

      <SubSection icon="3️⃣" title="Value Demonstration">
        <p>
          This is your <strong>ROI conversation</strong>. Come prepared with concrete data:
        </p>
        <ul className="list-disc ml-5 space-y-1">
          <li>Number of DDQs completed and hours saved</li>
          <li>Security incidents detected and resolved</li>
          <li>Compliance requirements met (SEC exams, LP requests)</li>
          <li>Risk score improvements over the contract period</li>
          <li>Peer benchmarking data — how do they compare to similar firms?</li>
        </ul>
        <p>
          The goal is to make the renewal feel like an <strong>obvious decision</strong>. If
          you&apos;ve delivered clear value, the conversation shifts from &ldquo;should we renew?&rdquo;
          to &ldquo;what else can Drawbridge help with?&rdquo;
        </p>
      </SubSection>

      <SubSection icon="4️⃣" title="Proposal & Negotiation Strategy">
        <p>
          Go in with a plan. Before presenting the proposal, know:
        </p>
        <ul className="list-disc ml-5 space-y-1">
          <li><strong>Your anchor</strong> — The price you lead with (ideally with a modest increase or expansion)</li>
          <li><strong>Your target</strong> — The deal you&apos;d be happy with</li>
          <li><strong>Your floor</strong> — The minimum you&apos;ll accept before escalating to leadership</li>
          <li><strong>Your levers</strong> — Multi-year commitment, payment terms, scope adjustments, timing</li>
        </ul>
        <p>
          <strong>Don&apos;t discount preemptively.</strong> Let the client ask for a concession
          before you offer one. And when you do concede, always get something in return —
          a longer term, a case study, a reference, or expanded scope.
        </p>
      </SubSection>

      <SubSection icon="5️⃣" title="Managing At-Risk Renewals">
        <p>
          Not every renewal will be smooth. When you identify a renewal at risk:
        </p>
        <ul className="list-disc ml-5 space-y-2">
          <li><strong>Escalate early</strong> — Don&apos;t wait. Bring your manager in as soon as you sense risk. A warm handoff to leadership can change the dynamic.</li>
          <li><strong>Diagnose the root cause</strong> — Is it price? Value? Champion change? Competitive displacement? Each requires a different strategy.</li>
          <li><strong>Build a save plan</strong> — Specific actions with owners and deadlines. &ldquo;Schedule exec-to-exec call by Friday&rdquo; not &ldquo;try to save the deal.&rdquo;</li>
          <li><strong>Consider creative structures</strong> — Bridge contracts, reduced-scope renewals, pilot extensions. A partial save is better than a churn.</li>
          <li><strong>Update your forecast honestly</strong> — If a deal is at risk, your call should reflect that. Don&apos;t hide problems in the forecast.</li>
        </ul>
      </SubSection>

      {/* Running it like a pipeline */}
      <SectionHeading>Pipeline Hygiene</SectionHeading>
      <div className="grid grid-cols-2 gap-4">
        <CharacteristicCard
          title="No Stale Plans"
          description="Every renewal plan should have activity in the last 7 days during the active forecast window. If a plan is untouched for 2+ weeks, it's not being worked."
        />
        <CharacteristicCard
          title="Stage Progression"
          description="Plans should move forward every 2–3 weeks. If a renewal has been in the same stage for a month, something is stuck — diagnose and unblock it."
        />
        <CharacteristicCard
          title="Complete Gate Items"
          description="Don't skip gate items to advance stages. Each gate exists for a reason — they ensure you've done the work needed before moving forward."
        />
        <CharacteristicCard
          title="Notes Are Non-Negotiable"
          description="Every account should have current notes explaining the situation. If you got hit by a bus, could someone pick up this renewal from your notes alone?"
        />
      </div>

      <SubSection icon="📊" title="Weekly Self-Check">
        <p>Before submitting your Monday forecast, ask yourself these questions for every renewal in your active window:</p>
        <ul className="list-disc ml-5 space-y-1">
          <li>Have I spoken with or emailed the client in the last 2 weeks?</li>
          <li>Do I know who the decision-maker is and what their timeline looks like?</li>
          <li>Can I articulate the top risk to this renewal?</li>
          <li>Is my Best / Worst / Call still accurate, or does it need adjustment?</li>
          <li>What is the <strong>one thing</strong> I need to do this week to move this renewal forward?</li>
        </ul>
        <p>
          If you can&apos;t answer these for an account, that account needs immediate attention.
        </p>
      </SubSection>

      <DrawbridgeAngle>
        <p>
          The renewal plan workflow in Drawbridge is built to support this pipeline discipline.
          Use it as your single source of truth — not a spreadsheet, not a notepad, not your
          memory. When every RM works their plans consistently, we get predictability as a
          business. Predictability lets us invest, hire, and grow with confidence.
        </p>
        <p>
          Remember: a well-worked renewal plan doesn&apos;t just protect revenue — it creates
          expansion opportunities. The RMs who consistently work their plans early are the
          ones who find upsell moments and drive net revenue growth, not just retention.
        </p>
      </DrawbridgeAngle>
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  NEGOTIATION PLAYBOOK                                              */
/* ------------------------------------------------------------------ */

function NegotiationPlaybook() {
  return (
    <>
      <HeroSection
        icon="🤝"
        title="Renewal Negotiation Playbook"
        subtitle="You're not an order-taker. You're a strategic advisor who protects and grows revenue through disciplined, proactive negotiation."
      />

      {/* Mindset */}
      <SectionHeading>The RM Mindset Shift</SectionHeading>
      <div className="grid grid-cols-2 gap-4 mt-2">
        <div className="rounded-lg border-2 border-red-200 bg-red-50 p-5">
          <p className="font-semibold text-red-800 font-heading">Order-Taker</p>
          <ul className="mt-3 text-sm text-red-700 space-y-2">
            <li>&ldquo;The client said they want a discount, so I gave them 15%.&rdquo;</li>
            <li>&ldquo;They asked to drop a service, so I removed it.&rdquo;</li>
            <li>&ldquo;They haven&apos;t responded to my email, so I&apos;m waiting.&rdquo;</li>
            <li>&ldquo;They said they&apos;re happy, so the renewal should be fine.&rdquo;</li>
            <li>Reacts to client requests. Accepts the first offer. Avoids difficult conversations.</li>
          </ul>
        </div>
        <div className="rounded-lg border-2 border-green-200 bg-green-50 p-5">
          <p className="font-semibold text-green-800 font-heading">Strategic Advisor</p>
          <ul className="mt-3 text-sm text-green-700 space-y-2">
            <li>&ldquo;They asked for a discount — I asked what&apos;s driving the request and proposed a multi-year instead.&rdquo;</li>
            <li>&ldquo;They want to drop a service — I showed them the risk exposure and offered a restructured package.&rdquo;</li>
            <li>&ldquo;No response in 5 days — I called, texted, and looped in their COO.&rdquo;</li>
            <li>&ldquo;They say they&apos;re happy — great, let&apos;s talk about what else we can help with.&rdquo;</li>
            <li>Drives the conversation. Controls the timeline. Creates value.</li>
          </ul>
        </div>
      </div>

      <SubSection icon="💡" title="The Core Principle: You Own the Renewal">
        <p>
          The single biggest mistake RMs make is treating a renewal as something that
          <strong> happens to them</strong> rather than something they <strong>drive</strong>.
          You set the timeline. You frame the conversation. You present the proposal.
          You control the pace. If the client is dictating every term of the renewal,
          you&apos;ve already lost the negotiation.
        </p>
        <p>
          This doesn&apos;t mean being aggressive or adversarial — it means being
          <strong> proactive, prepared, and purposeful</strong>. The best RMs are the ones
          clients <em>trust</em> to guide them, not the ones who simply do what they&apos;re told.
        </p>
      </SubSection>

      {/* Pushing Conversations Forward */}
      <SectionHeading>Pushing Conversations Forward</SectionHeading>

      <SubSection icon="🚀" title="The 48-Hour Rule">
        <p>
          No renewal conversation should go <strong>more than 48 business hours</strong> without
          a next action. If you sent a proposal Monday, you should have a follow-up scheduled
          for Wednesday. If the client asked for time to think, you should have a check-in
          on the calendar. Silence is not a strategy — it&apos;s how deals die.
        </p>
        <p>
          Tactics for maintaining momentum:
        </p>
        <ul className="list-disc ml-5 space-y-2">
          <li><strong>Always end meetings with a next step</strong> — Never leave a conversation without a specific follow-up date and action. &ldquo;I&apos;ll send the proposal by Thursday and let&apos;s plan to discuss it next Tuesday at 2pm.&rdquo;</li>
          <li><strong>Use calendar invites, not promises</strong> — Don&apos;t say &ldquo;let&apos;s connect next week.&rdquo; Send the invite before you hang up. A commitment without a calendar hold is just a wish.</li>
          <li><strong>Multi-thread your communication</strong> — If the primary contact goes dark, reach out to another stakeholder. &ldquo;Hi Sarah, I sent the renewal proposal to John last week but haven&apos;t heard back — do you know if the team has had a chance to review?&rdquo;</li>
          <li><strong>Create constructive urgency</strong> — Reference real deadlines: renewal date, budget cycle, regulatory timelines, contract auto-renewal clauses, upcoming SEC exam season. &ldquo;To ensure there&apos;s no gap in coverage before your Q2 renewal date, we should finalize terms by March 15.&rdquo;</li>
          <li><strong>Change the medium</strong> — If email isn&apos;t working, pick up the phone. If the phone isn&apos;t working, text. If texting isn&apos;t working, show up at a conference. Different people respond to different channels.</li>
        </ul>
      </SubSection>

      <SubSection icon="🛑" title="When the Client Stalls — Diagnosis & Response">
        <p>
          Stalling almost always means one of five things. Diagnose the real reason before
          choosing your response:
        </p>
        <div className="mt-3 rounded-md border border-gray-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left font-medium text-gray-600">Stall Reason</th>
                <th className="px-4 py-2 text-left font-medium text-gray-600">Signals</th>
                <th className="px-4 py-2 text-left font-medium text-gray-600">Response</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="px-4 py-2 font-medium text-db-dark">Price Sensitivity</td>
                <td className="px-4 py-2 text-gray-600">&ldquo;We need to review the budget&rdquo; / &ldquo;Can you sharpen the pencil?&rdquo;</td>
                <td className="px-4 py-2 text-gray-600">Don&apos;t drop price — explore value. Restructure scope, offer multi-year, or reframe ROI.</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium text-db-dark">Competing Priority</td>
                <td className="px-4 py-2 text-gray-600">Genuine busyness, delayed responses, &ldquo;crazy quarter&rdquo;</td>
                <td className="px-4 py-2 text-gray-600">Reduce friction — pre-fill paperwork, offer a 15-min call, handle everything on your side.</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium text-db-dark">Internal Misalignment</td>
                <td className="px-4 py-2 text-gray-600">Champion is on board but &ldquo;needs to get approval&rdquo; / &ldquo;legal is reviewing&rdquo;</td>
                <td className="px-4 py-2 text-gray-600">Arm your champion. Provide an internal justification doc, ROI summary, or offer to brief the decision-maker directly.</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium text-db-dark">Evaluating Alternatives</td>
                <td className="px-4 py-2 text-gray-600">Asking for competitive comparisons, new RFP language, unusual questions</td>
                <td className="px-4 py-2 text-gray-600">Address head-on. &ldquo;Are you evaluating other options? I&apos;d love the chance to address any concerns directly.&rdquo;</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium text-db-dark">Low Perceived Value</td>
                <td className="px-4 py-2 text-gray-600">Low engagement all year, &ldquo;we haven&apos;t really used it&rdquo;, questioning necessity</td>
                <td className="px-4 py-2 text-gray-600">This is a value delivery problem, not a negotiation problem. Re-engage with a business review showing usage data and risk impact.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </SubSection>

      {/* Price & Discount Tactics */}
      <SectionHeading>Handling Price Pressure</SectionHeading>

      <SubSection icon="💰" title="The Cardinal Rules of Pricing">
        <ul className="list-disc ml-5 space-y-2">
          <li>
            <strong>Never discount without a reason.</strong> If a client asks for a discount
            and you immediately say yes, you&apos;ve told them two things: the original price was
            inflated, and they should ask for more. Always ask <em>why</em> first: &ldquo;Help me
            understand what&apos;s driving the budget conversation — is this a firmwide initiative
            or specific to our engagement?&rdquo;
          </li>
          <li>
            <strong>Never concede without getting something back.</strong> Every concession
            should come with a trade. This is non-negotiable:
            <div className="mt-2 ml-4 grid grid-cols-2 gap-2">
              <div className="rounded bg-gray-50 p-2 text-xs">Client wants: 10% discount → You get: 3-year term commitment</div>
              <div className="rounded bg-gray-50 p-2 text-xs">Client wants: drop a service → You get: case study + reference</div>
              <div className="rounded bg-gray-50 p-2 text-xs">Client wants: delayed start → You get: upfront annual payment</div>
              <div className="rounded bg-gray-50 p-2 text-xs">Client wants: price hold → You get: auto-renewal clause</div>
            </div>
          </li>
          <li>
            <strong>Anchor high, not low.</strong> Your opening proposal should include a
            modest price increase or expansion. This isn&apos;t aggressive — it&apos;s smart. If you
            anchor at the current price, the only direction the negotiation can go is down.
            If you anchor 5–10% above, you have room to &ldquo;meet in the middle&rdquo; at flat or
            slightly up — which is a win.
          </li>
          <li>
            <strong>Reframe the conversation from cost to risk.</strong> When a client pushes
            on price, shift the frame: &ldquo;I understand budget is a concern. Let me share what
            a regulatory deficiency finding or a data breach would cost in comparison. We&apos;re
            not a cost line — we&apos;re risk mitigation.&rdquo;
          </li>
          <li>
            <strong>Use silence.</strong> After you present your price, stop talking. The
            instinct is to fill the silence with justification or preemptive concessions.
            Resist it. Let the client respond first. Often the &ldquo;objection&rdquo; you were
            bracing for never comes.
          </li>
        </ul>
      </SubSection>

      <SubSection icon="🔧" title="Restructure, Don't Reduce">
        <p>
          When a client genuinely cannot afford the current scope, <strong>restructure
          the engagement rather than simply cutting the price</strong>. This protects your
          ARR per unit of effort and keeps the door open for future expansion:
        </p>
        <ul className="list-disc ml-5 space-y-1">
          <li><strong>Tiered approach</strong> — &ldquo;We can move to our core package this year and layer back the advanced services when budget allows. That brings the cost to X while keeping your foundational program intact.&rdquo;</li>
          <li><strong>Phased expansion</strong> — &ldquo;Let&apos;s start with firm-level coverage this year and plan to add portfolio company assessments in Q3 when the new budget cycle opens.&rdquo;</li>
          <li><strong>Payment restructuring</strong> — Quarterly payments instead of annual upfront can solve cash flow problems without touching the total contract value.</li>
          <li><strong>Scope swap</strong> — Replace a lower-value service with a higher-value one at the same price. The client feels they got something new, and you maintain revenue.</li>
        </ul>
      </SubSection>

      {/* Expansion Playbook */}
      <SectionHeading>Driving Expansion</SectionHeading>

      <SubSection icon="📈" title="Expansion Is Not Upselling — It's Problem-Solving">
        <p>
          The worst way to expand a client is to pitch them a product they didn&apos;t ask for.
          The best way is to <strong>identify a problem they have and show them how
          Drawbridge solves it</strong>. Expansion should feel like a natural next step, not
          a sales push.
        </p>
        <p>Expansion opportunities are everywhere — you just have to look for the signals:</p>
      </SubSection>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <CharacteristicCard
          title="Regulatory Trigger"
          description="New SEC rule, DORA compliance need, state privacy law. 'The new Reg S-P amendments require an incident response program — let's make sure you're covered.'"
        />
        <CharacteristicCard
          title="Organizational Change"
          description="New fund launch, acquisition, office expansion, key hire. Every change creates new risk surface. 'Congratulations on the new fund — let's extend your security program to cover it.'"
        />
        <CharacteristicCard
          title="Incident or Near-Miss"
          description="Phishing attempt, vendor breach, industry peer hit by ransomware. 'Given what happened to [peer firm], this is a good time to review your IR plan and add tabletop exercises.'"
        />
        <CharacteristicCard
          title="LP / Allocator Pressure"
          description="New DDQ requirements, LP asking about specific controls, consultant review. 'Your allocators are asking about these areas — let us help you get ahead of it.'"
        />
      </div>

      <SubSection icon="🎯" title="The Expansion Conversation Framework">
        <p>
          Use this structure when you see an expansion opportunity. It takes 60 seconds
          and feels consultative, not salesy:
        </p>
        <ol className="list-decimal ml-5 space-y-2">
          <li>
            <strong>Observation</strong> — Lead with something you&apos;ve noticed, not something
            you want to sell. &ldquo;I noticed your team grew from 30 to 55 people since we started
            working together...&rdquo;
          </li>
          <li>
            <strong>Implication</strong> — Connect it to risk or a gap. &ldquo;...which means there
            are 25 people who haven&apos;t been through your security training program, and your
            access controls probably need an update.&rdquo;
          </li>
          <li>
            <strong>Recommendation</strong> — Offer a specific, scoped solution. &ldquo;I&apos;d recommend
            we add a training refresh and an access control review — that would take about
            4 weeks and ensure you&apos;re covered.&rdquo;
          </li>
          <li>
            <strong>Bridge to action</strong> — Make it easy to say yes. &ldquo;I can put together
            a quick scope and pricing by Friday. Want me to send it over?&rdquo;
          </li>
        </ol>
      </SubSection>

      <SubSection icon="🔑" title="Portfolio Company Expansion (PE Clients)">
        <p>
          For private equity clients, portfolio company expansion is the single biggest
          growth lever. A single PE firm relationship can 10x through portco coverage.
          The playbook:
        </p>
        <ul className="list-disc ml-5 space-y-2">
          <li>
            <strong>Start with the firm</strong> — Deliver exceptional service at the GP level
            first. Build trust with the deal team and operating partners. Your credibility
            with portfolio companies comes from the GP relationship.
          </li>
          <li>
            <strong>Anchor to a deal</strong> — Offer cyber due diligence on the next
            acquisition. This is a natural entry point that demonstrates value to the deal
            team and introduces Drawbridge to the portfolio company.
          </li>
          <li>
            <strong>Create a portfolio program</strong> — Propose a standardized security
            baseline across all portfolio companies. Position it as risk management for the
            fund: &ldquo;A breach at any portco is a breach on the fund&apos;s reputation with LPs.&rdquo;
          </li>
          <li>
            <strong>Use LP pressure</strong> — LPs are increasingly asking PE firms about
            portfolio-level cybersecurity. This creates top-down demand: &ldquo;Your LPs are
            asking about this in every DDQ — let&apos;s get ahead of it with a portfolio-wide
            program.&rdquo;
          </li>
        </ul>
      </SubSection>

      {/* Tactical Toolbox */}
      <SectionHeading>Tactical Toolbox</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed mb-4">
        Specific phrases and techniques for common renewal scenarios. Practice these
        until they feel natural.
      </p>

      <SubSection icon="💬" title="When They Say... You Say...">
        <div className="space-y-4">
          <div className="rounded-md border border-gray-200 bg-white p-4">
            <p className="text-sm font-medium text-red-700">&ldquo;We need a 20% discount or we&apos;re leaving.&rdquo;</p>
            <p className="mt-2 text-sm text-gray-700">
              &ldquo;I hear you, and I want to make this work. Help me understand what&apos;s driving that
              number — is it a budget constraint or are you comparing to another option? If it&apos;s
              budget, let&apos;s look at restructuring the scope to fit. If it&apos;s competitive, I&apos;d love
              the chance to show you what you&apos;d be giving up.&rdquo;
            </p>
          </div>
          <div className="rounded-md border border-gray-200 bg-white p-4">
            <p className="text-sm font-medium text-red-700">&ldquo;We&apos;re going to handle security in-house now.&rdquo;</p>
            <p className="mt-2 text-sm text-gray-700">
              &ldquo;That&apos;s great that you&apos;re investing in internal capabilities — who are you bringing
              on? Most of our clients find that even with an internal hire, they need a partner for
              specialized work: IR planning, pen testing, DDQ support, and regulatory expertise.
              What if we scoped a hybrid model where we complement your internal team instead of
              replacing them?&rdquo;
            </p>
          </div>
          <div className="rounded-md border border-gray-200 bg-white p-4">
            <p className="text-sm font-medium text-red-700">&ldquo;Our new CFO wants to cut all non-essential vendors.&rdquo;</p>
            <p className="mt-2 text-sm text-gray-700">
              &ldquo;I understand the pressure a new CFO brings. Let me help you make the case internally —
              I can put together a one-page ROI summary showing the regulatory risk of dropping your
              cyber program, the cost of a single SEC deficiency finding, and the LP retention risk.
              Would it be helpful if I also briefed your CFO directly? Sometimes hearing it from the
              provider carries different weight.&rdquo;
            </p>
          </div>
          <div className="rounded-md border border-gray-200 bg-white p-4">
            <p className="text-sm font-medium text-red-700">&ldquo;We&apos;re happy with Drawbridge — just send over the same contract.&rdquo;</p>
            <p className="mt-2 text-sm text-gray-700">
              &ldquo;That&apos;s great to hear. Before I send the renewal, I want to make sure we&apos;re set up
              for the year ahead — a lot has changed in the regulatory landscape since we last
              signed. Can we do a quick 30-minute review to make sure your program covers the
              new Reg S-P requirements and any changes to your firm? I&apos;d hate to find a gap
              during DDQ season.&rdquo;
              <span className="block mt-1 text-xs text-gray-500 italic">
                (This is the moment most order-takers miss. &ldquo;Just send the same contract&rdquo; is
                an invitation to flat-renew. A strategic RM turns it into a value conversation
                that often leads to expansion.)
              </span>
            </p>
          </div>
          <div className="rounded-md border border-gray-200 bg-white p-4">
            <p className="text-sm font-medium text-red-700">&ldquo;We need to push the renewal out a few months.&rdquo;</p>
            <p className="mt-2 text-sm text-gray-700">
              &ldquo;I understand timing can be tricky. Two concerns with a gap: first, you&apos;d lose
              continuity on your monitoring and compliance evidence, which matters if you have
              DDQs or an exam in that window. Second, I can&apos;t guarantee the same pricing once
              we re-engage — our rates are increasing next quarter. What if we do a short bridge
              agreement to maintain coverage while we finalize the full renewal?&rdquo;
            </p>
          </div>
          <div className="rounded-md border border-gray-200 bg-white p-4">
            <p className="text-sm font-medium text-red-700">&ldquo;We don&apos;t think we need cybersecurity services anymore.&rdquo;</p>
            <p className="mt-2 text-sm text-gray-700">
              &ldquo;That&apos;s a bold call. Can I ask — has anything changed in the regulatory landscape
              that makes you more comfortable? The SEC just expanded Reg S-P with mandatory
              incident response programs, and cybersecurity has been an exam priority for 10
              straight years. I&apos;d want to make sure you&apos;re not creating exposure right before
              your next exam cycle. Would it make sense to at least keep the foundational
              program in place while we figure out what a right-sized engagement looks like?&rdquo;
            </p>
          </div>
        </div>
      </SubSection>

      {/* Multi-Year Deals */}
      <SectionHeading>The Multi-Year Play</SectionHeading>
      <SubSection icon="📅" title="When and How to Push Multi-Year Commitments">
        <p>
          Multi-year agreements are the gold standard for renewals. They provide revenue
          predictability, reduce renewal risk, and deepen the client relationship. But
          you have to earn them — a client won&apos;t commit to 3 years if you haven&apos;t
          demonstrated 1 year of value.
        </p>
        <p><strong>When to propose multi-year:</strong></p>
        <ul className="list-disc ml-5 space-y-1">
          <li>The client is asking for a discount — trade price for term</li>
          <li>You have a strong champion who may leave (lock in the relationship)</li>
          <li>Regulatory or compliance deadlines create urgency for long-term coverage</li>
          <li>The client is in a PE fundraising cycle (they need stable operations for LP diligence)</li>
        </ul>
        <p className="mt-2"><strong>How to frame it:</strong></p>
        <ul className="list-disc ml-5 space-y-1">
          <li>&ldquo;If we can commit to a 2-year term, I can hold the current rate instead of applying the standard increase. That saves you $X over the contract.&rdquo;</li>
          <li>&ldquo;A multi-year agreement means we can plan a more comprehensive program — training, assessments, and IR — on a predictable schedule. It also looks great in your LP reporting.&rdquo;</li>
          <li>&ldquo;Most of our enterprise clients are moving to multi-year to lock in capacity. With demand increasing around the new regulations, I&apos;d recommend securing your slot.&rdquo;</li>
        </ul>
      </SubSection>

      {/* Escalation */}
      <SectionHeading>When to Escalate</SectionHeading>
      <SubSection icon="⬆️" title="Escalation Is a Strategy, Not a Failure">
        <p>
          Bringing in your manager or a senior leader is not admitting defeat — it&apos;s
          a <strong>strategic move</strong> that changes the dynamic of the conversation.
          Know when to use it:
        </p>
        <ul className="list-disc ml-5 space-y-2">
          <li><strong>The decision-maker is above your contact</strong> — If your champion can&apos;t get approval, offer an exec-to-exec conversation. &ldquo;Would it be helpful if our VP joined the call with your CFO? Sometimes a peer-level conversation helps move things along.&rdquo;</li>
          <li><strong>The negotiation is stuck on price</strong> — A senior leader can sometimes unlock budget that a mid-level contact can&apos;t. Plus, it signals to the client that we take the relationship seriously enough to bring in leadership.</li>
          <li><strong>You&apos;re being asked for a concession outside your authority</strong> — Never make a promise you can&apos;t keep. &ldquo;Let me bring in my VP on that — I want to make sure I can commit to what we agree to.&rdquo;</li>
          <li><strong>The client is at genuine churn risk</strong> — A save conversation from a senior leader carries more weight. It shows the client they matter to the organization, not just to one RM.</li>
        </ul>
        <p>
          <strong>Rule of thumb:</strong> escalate when the risk of <em>not</em> escalating
          is higher than the cost of asking for help. When in doubt, escalate early.
        </p>
      </SubSection>

      <DrawbridgeAngle>
        <p>
          Every dollar of ARR you protect and grow compounds across the business. A
          5% average price increase across your book is worth more than a single large
          new deal. A churn save is worth more than two new logos. The math is
          simple: <strong>retention and expansion are the highest-ROI activities
          in the business</strong>.
        </p>
        <p>
          Your job is to make clients feel like they <em>can&apos;t afford to leave</em> — not
          through lock-in, but through genuine indispensability. When you&apos;re deeply
          embedded in their compliance program, their DDQ process, their incident
          response plan, and their board reporting, Drawbridge isn&apos;t a vendor anymore
          — it&apos;s infrastructure. That&apos;s the goal of every renewal conversation.
        </p>
      </DrawbridgeAngle>
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  OUTCOME FRAMEWORK                                                 */
/* ------------------------------------------------------------------ */

function OutcomeFramework() {
  return (
    <>
      <HeroSection
        icon="🎯"
        title="Business Outcome Framework"
        subtitle="Stop selling features. Start solving business problems. Five outcomes that define the value we deliver — in our clients' language."
      />

      {/* Philosophy */}
      <SectionHeading>Why Outcomes, Not Features</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed">
        No client wakes up thinking &ldquo;I need a cybersecurity assessment.&rdquo; They wake up
        thinking &ldquo;How do I keep my investors confident?&rdquo; or &ldquo;How do I make sure
        we pass our next SEC exam?&rdquo; or &ldquo;How do I protect what we&apos;ve built?&rdquo;
      </p>
      <p className="mt-3 text-sm text-gray-700 leading-relaxed">
        When we talk about features and deliverables — assessments, policies, monitoring —
        we&apos;re speaking <em>our</em> language. When we talk about outcomes — capital confidence,
        regulatory readiness, operational resilience — we&apos;re speaking <em>their</em> language.
        The shift is subtle but powerful: it moves us from vendor to strategic partner.
      </p>
      <p className="mt-3 text-sm text-gray-700 leading-relaxed">
        This framework defines <strong>five business outcomes</strong> that every Drawbridge
        engagement should map to. Use them in renewal conversations, QBRs, proposals, and
        internal planning. Over time, we&apos;ll layer in detailed value narratives and SKU
        mappings underneath each outcome — but the outcomes themselves are the foundation.
      </p>

      {/* How to Use */}
      <SubSection icon="💡" title="How to Use This Framework">
        <p>
          <strong>In renewal conversations:</strong> &ldquo;This year, we helped you achieve
          [Outcome] by [specific evidence]. Here&apos;s how we&apos;ll continue driving that
          value next year.&rdquo;
        </p>
        <p>
          <strong>In proposals:</strong> Lead with the outcome, then explain how
          specific services deliver it. Not &ldquo;we&apos;ll provide 4 assessments and 12 policy
          reviews&rdquo; — instead, &ldquo;we&apos;ll ensure you&apos;re exam-ready year-round, which
          includes...&rdquo;
        </p>
        <p>
          <strong>In QBRs:</strong> Organize the review around outcomes, not task lists.
          Show progress against each outcome with evidence and metrics.
        </p>
        <p>
          <strong>In your client&apos;s language:</strong> Every outcome below includes a
          &ldquo;how your client says it&rdquo; section. Listen for these phrases — they&apos;re buying
          signals that map directly to an outcome you can solve.
        </p>
      </SubSection>

      {/* Outcome 1 */}
      <SectionHeading>The Five Outcomes</SectionHeading>

      <div className="mt-4 rounded-xl border-2 border-db-aqua bg-white overflow-hidden">
        <div className="bg-db-aqua/10 px-6 py-4 border-b border-db-aqua/20">
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-db-aqua/20 text-lg font-bold text-db-aqua-dark">1</span>
            <div>
              <h3 className="text-lg font-bold font-heading text-db-dark">Raise &amp; Retain Capital with Confidence</h3>
              <p className="text-sm text-gray-500 mt-0.5">Investor trust is earned through operational excellence — not just performance.</p>
            </div>
          </div>
        </div>
        <div className="px-6 py-5 space-y-4">
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Why It Matters</p>
            <p className="mt-1 text-sm text-gray-700 leading-relaxed">
              Allocators commit capital to managers they trust — and trust increasingly requires
              demonstrating operational and cybersecurity maturity. A single failed DDQ response,
              an incomplete ODD review, or a data breach headline can cost a firm hundreds of millions
              in commitments. For PE firms in fundraising cycles and hedge funds with open-ended
              redemption structures, investor confidence is existential.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">The Business Impact</p>
            <ul className="mt-1 text-sm text-gray-700 space-y-1">
              <li>&#8226; Faster DDQ turnaround with higher-quality, consistent responses</li>
              <li>&#8226; Smoother LP due diligence cycles with fewer follow-up requests</li>
              <li>&#8226; Confidence to pursue new allocator relationships knowing the program is solid</li>
              <li>&#8226; Reduced risk of capital loss from operational deficiency concerns</li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-db-aqua-dark uppercase tracking-wide">How Your Client Says It</p>
            <div className="mt-1 flex flex-wrap gap-2">
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">&ldquo;Our LPs keep asking about cybersecurity&rdquo;</span>
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">&ldquo;DDQ season is killing us&rdquo;</span>
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">&ldquo;We&apos;re raising a new fund&rdquo;</span>
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">&ldquo;Our consultant flagged our security program&rdquo;</span>
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">&ldquo;We need to look institutional&rdquo;</span>
            </div>
          </div>
          <div className="rounded-md bg-gray-50 border border-gray-100 p-3">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Value Narratives &amp; SKU Mapping</p>
            <p className="mt-1 text-xs text-gray-400 italic">Coming soon — detailed narratives and service mapping will be added here.</p>
          </div>
        </div>
      </div>

      {/* Outcome 2 */}
      <div className="mt-6 rounded-xl border-2 border-db-aqua bg-white overflow-hidden">
        <div className="bg-db-aqua/10 px-6 py-4 border-b border-db-aqua/20">
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-db-aqua/20 text-lg font-bold text-db-aqua-dark">2</span>
            <div>
              <h3 className="text-lg font-bold font-heading text-db-dark">Navigate Regulatory Complexity</h3>
              <p className="text-sm text-gray-500 mt-0.5">Stay ahead of evolving regulations without building a compliance department.</p>
            </div>
          </div>
        </div>
        <div className="px-6 py-5 space-y-4">
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Why It Matters</p>
            <p className="mt-1 text-sm text-gray-700 leading-relaxed">
              The regulatory landscape is expanding and accelerating — Reg S-P amendments, SEC exam
              priorities, DORA in Europe, state privacy laws, and new disclosure requirements.
              Keeping up is a full-time job that most alternative managers don&apos;t have the headcount
              for. The cost of non-compliance isn&apos;t just fines — it&apos;s reputational damage,
              LP concern, and management distraction.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">The Business Impact</p>
            <ul className="mt-1 text-sm text-gray-700 space-y-1">
              <li>&#8226; Exam-ready posture maintained year-round — not scrambled before a visit</li>
              <li>&#8226; Proactive compliance with new rules before enforcement begins</li>
              <li>&#8226; Reduced legal and consulting spend on regulatory interpretation</li>
              <li>&#8226; Confidence that the firm won&apos;t be caught off guard by a rule change</li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-db-aqua-dark uppercase tracking-wide">How Your Client Says It</p>
            <div className="mt-1 flex flex-wrap gap-2">
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">&ldquo;What do the new SEC rules mean for us?&rdquo;</span>
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">&ldquo;We got an exam notification&rdquo;</span>
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">&ldquo;Our outside counsel says we need to update our policies&rdquo;</span>
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">&ldquo;We have European investors now&rdquo;</span>
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">&ldquo;We just want to stay out of trouble&rdquo;</span>
            </div>
          </div>
          <div className="rounded-md bg-gray-50 border border-gray-100 p-3">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Value Narratives &amp; SKU Mapping</p>
            <p className="mt-1 text-xs text-gray-400 italic">Coming soon — detailed narratives and service mapping will be added here.</p>
          </div>
        </div>
      </div>

      {/* Outcome 3 */}
      <div className="mt-6 rounded-xl border-2 border-db-aqua bg-white overflow-hidden">
        <div className="bg-db-aqua/10 px-6 py-4 border-b border-db-aqua/20">
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-db-aqua/20 text-lg font-bold text-db-aqua-dark">3</span>
            <div>
              <h3 className="text-lg font-bold font-heading text-db-dark">Protect the Firm from Disruption</h3>
              <p className="text-sm text-gray-500 mt-0.5">Be ready for the incident that hasn&apos;t happened yet — and recover fast when it does.</p>
            </div>
          </div>
        </div>
        <div className="px-6 py-5 space-y-4">
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Why It Matters</p>
            <p className="mt-1 text-sm text-gray-700 leading-relaxed">
              Cyber incidents aren&apos;t theoretical — they&apos;re statistical certainties. The question
              is not <em>if</em> but <em>when</em> and <em>how bad</em>. A ransomware attack can
              shut down operations for weeks. A BEC scam can move millions in minutes. A data
              breach can trigger regulatory action, LP redemptions, and lasting reputational
              harm. The firms that survive these events are the ones that prepared for them.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">The Business Impact</p>
            <ul className="mt-1 text-sm text-gray-700 space-y-1">
              <li>&#8226; Reduced likelihood and blast radius of security incidents</li>
              <li>&#8226; Faster detection and response when incidents occur</li>
              <li>&#8226; Tested recovery procedures that actually work under pressure</li>
              <li>&#8226; Lower financial and reputational cost of incidents</li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-db-aqua-dark uppercase tracking-wide">How Your Client Says It</p>
            <div className="mt-1 flex flex-wrap gap-2">
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">&ldquo;What happens if we get hit?&rdquo;</span>
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">&ldquo;Our peer firm just had a breach&rdquo;</span>
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">&ldquo;We need someone to call at 2am&rdquo;</span>
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">&ldquo;We&apos;re worried about ransomware&rdquo;</span>
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">&ldquo;Do we have a plan if something happens?&rdquo;</span>
            </div>
          </div>
          <div className="rounded-md bg-gray-50 border border-gray-100 p-3">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Value Narratives &amp; SKU Mapping</p>
            <p className="mt-1 text-xs text-gray-400 italic">Coming soon — detailed narratives and service mapping will be added here.</p>
          </div>
        </div>
      </div>

      {/* Outcome 4 */}
      <div className="mt-6 rounded-xl border-2 border-db-aqua bg-white overflow-hidden">
        <div className="bg-db-aqua/10 px-6 py-4 border-b border-db-aqua/20">
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-db-aqua/20 text-lg font-bold text-db-aqua-dark">4</span>
            <div>
              <h3 className="text-lg font-bold font-heading text-db-dark">Make Security a Competitive Advantage</h3>
              <p className="text-sm text-gray-500 mt-0.5">Turn a cost center into a differentiator that wins capital, talent, and trust.</p>
            </div>
          </div>
        </div>
        <div className="px-6 py-5 space-y-4">
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Why It Matters</p>
            <p className="mt-1 text-sm text-gray-700 leading-relaxed">
              Most firms think of cybersecurity as a cost — something they have to do. The
              best-run firms think of it as a competitive weapon. In a market where allocators
              are choosing between managers with similar strategies and returns, the firm with
              the best operational infrastructure wins the allocation. A mature, well-documented
              security program signals professionalism, institutional quality, and respect for
              investor capital.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">The Business Impact</p>
            <ul className="mt-1 text-sm text-gray-700 space-y-1">
              <li>&#8226; Differentiation in competitive fundraising situations</li>
              <li>&#8226; Faster LP onboarding with pre-built compliance evidence</li>
              <li>&#8226; Ability to win larger, more sophisticated institutional allocators</li>
              <li>&#8226; Talent attraction — top candidates want to join well-run firms</li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-db-aqua-dark uppercase tracking-wide">How Your Client Says It</p>
            <div className="mt-1 flex flex-wrap gap-2">
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">&ldquo;We want to look best-in-class&rdquo;</span>
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">&ldquo;How do we compare to our peers?&rdquo;</span>
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">&ldquo;We&apos;re going after bigger LPs&rdquo;</span>
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">&ldquo;Our competitor just got SOC 2 certified&rdquo;</span>
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">&ldquo;We need to level up our operations&rdquo;</span>
            </div>
          </div>
          <div className="rounded-md bg-gray-50 border border-gray-100 p-3">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Value Narratives &amp; SKU Mapping</p>
            <p className="mt-1 text-xs text-gray-400 italic">Coming soon — detailed narratives and service mapping will be added here.</p>
          </div>
        </div>
      </div>

      {/* Outcome 5 */}
      <div className="mt-6 rounded-xl border-2 border-db-aqua bg-white overflow-hidden">
        <div className="bg-db-aqua/10 px-6 py-4 border-b border-db-aqua/20">
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-db-aqua/20 text-lg font-bold text-db-aqua-dark">5</span>
            <div>
              <h3 className="text-lg font-bold font-heading text-db-dark">Scale Without Adding Headcount</h3>
              <p className="text-sm text-gray-500 mt-0.5">Grow the firm, launch funds, and expand operations without building an internal security team.</p>
            </div>
          </div>
        </div>
        <div className="px-6 py-5 space-y-4">
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Why It Matters</p>
            <p className="mt-1 text-sm text-gray-700 leading-relaxed">
              Alternative managers are lean by design — every headcount dollar that goes to
              non-investment functions is a dollar not generating alpha. But as firms grow,
              the security demands grow with them: more employees, more vendors, more data,
              more regulatory surface area. Hiring a CISO ($300K–$500K+ fully loaded) plus a
              security team is prohibitive for most firms. They need enterprise-grade security
              that scales with their business — without the enterprise headcount.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">The Business Impact</p>
            <ul className="mt-1 text-sm text-gray-700 space-y-1">
              <li>&#8226; Full security program at a fraction of the cost of building in-house</li>
              <li>&#8226; Instant access to specialized expertise (IR, pen testing, regulatory) on demand</li>
              <li>&#8226; Security that grows automatically with new funds, offices, and portfolio companies</li>
              <li>&#8226; Free up COO / CCO time to focus on running the business</li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-db-aqua-dark uppercase tracking-wide">How Your Client Says It</p>
            <div className="mt-1 flex flex-wrap gap-2">
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">&ldquo;We don&apos;t have a CISO and don&apos;t want to hire one&rdquo;</span>
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">&ldquo;Our COO is stretched thin&rdquo;</span>
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">&ldquo;We just launched a new fund&rdquo;</span>
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">&ldquo;We&apos;re opening a London office&rdquo;</span>
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">&ldquo;We need this handled — I don&apos;t have the bandwidth&rdquo;</span>
            </div>
          </div>
          <div className="rounded-md bg-gray-50 border border-gray-100 p-3">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Value Narratives &amp; SKU Mapping</p>
            <p className="mt-1 text-xs text-gray-400 italic">Coming soon — detailed narratives and service mapping will be added here.</p>
          </div>
        </div>
      </div>

      {/* Using the Framework */}
      <SectionHeading>Putting It All Together</SectionHeading>

      <SubSection icon="🗣️" title="The Outcome-Led Conversation">
        <p>
          Here&apos;s the shift in practice. Instead of walking into a renewal and saying:
        </p>
        <div className="rounded-md bg-red-50 border border-red-200 p-3 mt-2">
          <p className="text-sm text-red-700 italic">
            &ldquo;This year we completed 4 assessments, updated 12 policies, ran 2 tabletop
            exercises, and responded to 47 DDQs. Here&apos;s the renewal for the same scope.&rdquo;
          </p>
        </div>
        <p className="mt-3">You say:</p>
        <div className="rounded-md bg-green-50 border border-green-200 p-3 mt-2">
          <p className="text-sm text-green-700 italic">
            &ldquo;This year, we helped you raise your new fund with confidence — your ODD
            reviews went smoothly and your DDQ turnaround time dropped from 3 weeks to 5
            days. We kept you exam-ready with current policies and a tested IR plan. And
            we did it all without you having to hire a single security person. Looking
            ahead, here&apos;s how we continue driving those outcomes as you grow.&rdquo;
          </p>
        </div>
        <p className="mt-3">
          Same services. Same deliverables. Completely different conversation. The first
          sounds like a vendor reporting tasks. The second sounds like a partner
          demonstrating impact.
        </p>
      </SubSection>

      <SubSection icon="🔄" title="Mapping Outcomes to Client Priorities">
        <p>
          Not every outcome matters equally to every client. Part of being a strategic
          advisor is knowing which outcomes to lead with based on who you&apos;re talking to:
        </p>
        <div className="mt-3 rounded-md border border-gray-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left font-medium text-gray-600">Client Type</th>
                <th className="px-4 py-2 text-left font-medium text-gray-600">Lead With</th>
                <th className="px-4 py-2 text-left font-medium text-gray-600">Support With</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="px-4 py-2 font-medium text-db-dark">Hedge Fund (fundraising)</td>
                <td className="px-4 py-2 text-gray-600">1. Raise &amp; Retain Capital</td>
                <td className="px-4 py-2 text-gray-600">2. Regulatory + 4. Competitive Advantage</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium text-db-dark">Hedge Fund (steady state)</td>
                <td className="px-4 py-2 text-gray-600">2. Regulatory Complexity</td>
                <td className="px-4 py-2 text-gray-600">3. Protection + 5. Scale</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium text-db-dark">PE Firm (GP level)</td>
                <td className="px-4 py-2 text-gray-600">1. Raise &amp; Retain Capital</td>
                <td className="px-4 py-2 text-gray-600">5. Scale (portco expansion)</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium text-db-dark">PE Portfolio Company</td>
                <td className="px-4 py-2 text-gray-600">3. Protect from Disruption</td>
                <td className="px-4 py-2 text-gray-600">2. Regulatory + 5. Scale</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium text-db-dark">Family Office</td>
                <td className="px-4 py-2 text-gray-600">3. Protect from Disruption</td>
                <td className="px-4 py-2 text-gray-600">5. Scale (no headcount)</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium text-db-dark">Firm with EU exposure</td>
                <td className="px-4 py-2 text-gray-600">2. Regulatory (DORA)</td>
                <td className="px-4 py-2 text-gray-600">4. Competitive Advantage</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium text-db-dark">Post-incident firm</td>
                <td className="px-4 py-2 text-gray-600">3. Protect from Disruption</td>
                <td className="px-4 py-2 text-gray-600">1. Capital Confidence (LP recovery)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </SubSection>

      <SubSection icon="📏" title="Measuring Outcome Delivery">
        <p>
          Each outcome should have observable evidence. When you prepare for a QBR or
          renewal, gather proof points for the outcomes that matter most to that client:
        </p>
        <div className="mt-3 grid grid-cols-1 gap-2">
          <div className="flex items-start gap-3 rounded-md border border-gray-200 bg-white p-3">
            <span className="shrink-0 font-bold text-db-aqua-dark">1</span>
            <div>
              <p className="text-sm font-medium text-db-dark">Capital Confidence</p>
              <p className="text-xs text-gray-500">DDQs completed &amp; avg. turnaround time, ODD reviews supported, LP-facing reports delivered, allocator retention rate</p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-md border border-gray-200 bg-white p-3">
            <span className="shrink-0 font-bold text-db-aqua-dark">2</span>
            <div>
              <p className="text-sm font-medium text-db-dark">Regulatory Readiness</p>
              <p className="text-xs text-gray-500">Policies updated &amp; current, exam readiness score, regulatory changes addressed, deficiency findings (zero is the goal)</p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-md border border-gray-200 bg-white p-3">
            <span className="shrink-0 font-bold text-db-aqua-dark">3</span>
            <div>
              <p className="text-sm font-medium text-db-dark">Protection &amp; Resilience</p>
              <p className="text-xs text-gray-500">Risk score trend, vulnerabilities identified &amp; remediated, IR plan tested (date), incidents detected &amp; contained, phishing test results</p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-md border border-gray-200 bg-white p-3">
            <span className="shrink-0 font-bold text-db-aqua-dark">4</span>
            <div>
              <p className="text-sm font-medium text-db-dark">Competitive Advantage</p>
              <p className="text-xs text-gray-500">Peer benchmarking position, new capabilities implemented, certifications or frameworks achieved, LP feedback quality</p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-md border border-gray-200 bg-white p-3">
            <span className="shrink-0 font-bold text-db-aqua-dark">5</span>
            <div>
              <p className="text-sm font-medium text-db-dark">Scale &amp; Efficiency</p>
              <p className="text-xs text-gray-500">Cost vs. in-house equivalent, COO/CCO hours saved, new entities covered (funds, offices, portcos), services consumed per dollar</p>
            </div>
          </div>
        </div>
      </SubSection>

      <DrawbridgeAngle>
        <p>
          This framework is the foundation for how we talk about value — externally and
          internally. Every service we deliver, every assessment we run, every policy we
          write should tie back to one or more of these five outcomes. If it doesn&apos;t,
          we need to ask why we&apos;re doing it.
        </p>
        <p>
          Over time, we&apos;ll build detailed value narratives under each outcome — the
          specific stories, data points, and proof that bring each outcome to life in
          client conversations. We&apos;ll also map our service catalog (SKUs) to outcomes
          so every proposal can be framed as &ldquo;here&apos;s how we deliver Outcome X&rdquo; rather
          than &ldquo;here&apos;s a list of things we do.&rdquo;
        </p>
        <p>
          Start using the framework now. Pick one client this week and reframe your
          next conversation around outcomes instead of deliverables. See what happens.
        </p>
      </DrawbridgeAngle>
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  CUSTOMER JOURNEY: HEDGE FUND                                      */
/* ------------------------------------------------------------------ */

function JourneyHedgeFund() {
  const phases = [
    { num: '1', label: 'Get Started', color: 'bg-db-aqua' },
    { num: '2', label: 'Build Foundation', color: 'bg-db-aqua-dark' },
    { num: '3', label: 'Strengthen', color: 'bg-db-orange/80' },
    { num: '4', label: 'Differentiate', color: 'bg-db-orange' },
  ];

  return (
    <>
      <HeroSection
        icon="📍"
        title="Customer Journey — Hedge Fund"
        subtitle="A practical roadmap for building a lasting client relationship. Start by solving their most urgent problem, then expand as their business evolves."
      />

      {/* How to use */}
      <div className="mt-6 rounded-lg bg-db-dark p-5">
        <p className="text-sm font-semibold text-db-aqua uppercase tracking-wide mb-2">
          Two Views of the Same Journey
        </p>
        <div className="grid grid-cols-2 gap-6 text-sm text-gray-300">
          <div>
            <p className="font-medium text-white">Client-Facing (Outcome Phases)</p>
            <p className="mt-1">What the client sees: a progression of business outcomes — starting with their most urgent need and expanding as priorities evolve. Share this in sales, QBRs, and renewals.</p>
          </div>
          <div>
            <p className="font-medium text-white">Internal (Drawbridge Lifecycle)</p>
            <p className="mt-1">How we operate behind the scenes: the handoffs, roles, and motions that deliver each outcome. This is our playbook for who does what and when.</p>
          </div>
        </div>
      </div>

      {/* ── INTERNAL LIFECYCLE ── */}
      <SectionHeading>The Drawbridge Lifecycle</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed mb-4">
        Every client relationship follows a continuous cycle. Each stage has a clear
        owner, a defined purpose, and a handoff that keeps the relationship moving forward.
      </p>

      {/* Lifecycle visual */}
      <div className="flex items-center gap-0 mb-2">
        {[
          { label: 'Discovery', color: 'bg-db-dark', text: 'text-white' },
          { label: 'Implementation', color: 'bg-db-aqua-dark', text: 'text-white' },
          { label: 'Value Realization', color: 'bg-db-aqua', text: 'text-db-dark' },
          { label: 'Strategic Partnership', color: 'bg-db-orange/80', text: 'text-white' },
          { label: 'Renewal', color: 'bg-db-orange', text: 'text-white' },
        ].map((stage, i) => (
          <div key={stage.label} className={`flex-1 ${stage.color} ${stage.text} py-2 px-1 text-center text-xs font-semibold ${i === 0 ? 'rounded-l-lg' : ''} ${i === 4 ? 'rounded-r-lg' : ''}`}>
            {stage.label}
          </div>
        ))}
      </div>
      <div className="flex justify-end mb-6">
        <span className="text-xs text-gray-400 italic">↩ cycles back to Strategic Partnership</span>
      </div>

      {/* Stage details */}
      <div className="space-y-4">
        {/* Discovery */}
        <div className="rounded-lg border border-gray-200 bg-white overflow-hidden">
          <div className="bg-db-dark px-5 py-3 flex items-center justify-between">
            <p className="text-sm font-semibold text-white">Discovery &amp; Solution Design</p>
            <span className="rounded-full bg-white/20 px-3 py-0.5 text-xs text-white">Sales Team</span>
          </div>
          <div className="px-5 py-4">
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase">Purpose</p>
                <p className="mt-1 text-gray-700">Understand the client&apos;s business problem. Not &ldquo;what services do they need?&rdquo; but &ldquo;what outcome are they trying to achieve?&rdquo;</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase">Key Activities</p>
                <ul className="mt-1 text-gray-700 space-y-1">
                  <li>&#8226; Identify the triggering event (fundraise, exam, incident, LP pressure)</li>
                  <li>&#8226; Map the outcome to the framework (which of the 5?)</li>
                  <li>&#8226; Design a solution scoped to the outcome, not a product list</li>
                  <li>&#8226; Present the journey — show the client the path forward</li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase">Handoff</p>
                <p className="mt-1 text-gray-700">
                  Closed deal transitions to implementation with a clear brief: the outcome
                  we promised, the scope, the timeline, and the client&apos;s expectations.
                  The RM is introduced to the client before the sale closes — not after.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Implementation */}
        <div className="rounded-lg border border-gray-200 bg-white overflow-hidden">
          <div className="bg-db-aqua-dark px-5 py-3 flex items-center justify-between">
            <p className="text-sm font-semibold text-white">Implementation &amp; Onboarding</p>
            <span className="rounded-full bg-white/20 px-3 py-0.5 text-xs text-white">Cybersecurity Advisory Team + RM</span>
          </div>
          <div className="px-5 py-4">
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase">Purpose</p>
                <p className="mt-1 text-gray-700">Configure the platform, deliver the initial assessment, and begin working on the promised outcome. The cybersecurity advisory team owns the technical delivery.</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase">Key Activities</p>
                <ul className="mt-1 text-gray-700 space-y-1">
                  <li>&#8226; Kick-off call with client stakeholders</li>
                  <li>&#8226; Platform configuration and data collection</li>
                  <li>&#8226; Initial security assessment and gap analysis</li>
                  <li>&#8226; Begin delivering against the scoped outcome (DDQs, policies, etc.)</li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase">Handoff</p>
                <p className="mt-1 text-gray-700">
                  Implementation is &ldquo;complete&rdquo; when the initial deliverables are in the
                  client&apos;s hands and the program is running. The RM takes the lead on the
                  relationship while the advisory team continues ongoing delivery.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Value Realization */}
        <div className="rounded-lg border border-gray-200 bg-white overflow-hidden">
          <div className="bg-db-aqua px-5 py-3 flex items-center justify-between">
            <p className="text-sm font-semibold text-db-dark">Value Realization</p>
            <span className="rounded-full bg-db-dark/20 px-3 py-0.5 text-xs text-db-dark">RM Team</span>
          </div>
          <div className="px-5 py-4">
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase">Purpose</p>
                <p className="mt-1 text-gray-700">Measure and communicate the value delivered — in the client&apos;s language, tied to the business outcome they bought. This is where we prove the investment is working.</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase">Key Activities</p>
                <ul className="mt-1 text-gray-700 space-y-1">
                  <li>&#8226; Gather evidence: DDQs completed, turnaround times, risk scores, training rates</li>
                  <li>&#8226; Frame the story around the outcome, not the tasks</li>
                  <li>&#8226; Deliver a QBR that shows impact: &ldquo;Here&apos;s what we achieved together&rdquo;</li>
                  <li>&#8226; Confirm with the client that they see the value</li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase">Handoff</p>
                <p className="mt-1 text-gray-700">
                  Once the client confirms value, the RM shifts into strategic partnership
                  mode. The client trusts us — now we&apos;ve earned the right to broaden
                  the conversation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Strategic Partnership */}
        <div className="rounded-lg border border-gray-200 bg-white overflow-hidden">
          <div className="bg-db-orange/80 px-5 py-3 flex items-center justify-between">
            <p className="text-sm font-semibold text-white">Strategic Partnership</p>
            <span className="rounded-full bg-white/20 px-3 py-0.5 text-xs text-white">RM Team</span>
          </div>
          <div className="px-5 py-4">
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase">Purpose</p>
                <p className="mt-1 text-gray-700">
                  Be the client&apos;s trusted business advisor — someone who understands their
                  firm, anticipates their needs, and connects business problems to solutions.
                  <strong> This is an RM relationship role</strong>, distinct from the cybersecurity
                  advisory services our delivery team provides.
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase">Key Activities</p>
                <ul className="mt-1 text-gray-700 space-y-1">
                  <li>&#8226; Stay close to the client&apos;s business: fundraising cycles, team changes, regulatory events</li>
                  <li>&#8226; Proactively surface business problems they may not have connected to Drawbridge</li>
                  <li>&#8226; Introduce the next outcome phase when the timing is right — not as a pitch, but as a natural next step</li>
                  <li>&#8226; Keep the advisory team informed so delivery stays aligned</li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase">The Distinction</p>
                <p className="mt-1 text-gray-700">
                  <strong>RM as strategic advisor</strong> = understanding the client&apos;s business
                  and guiding the relationship. <strong>Cybersecurity advisory services</strong> =
                  the technical expertise our delivery team provides (assessments, policies, IR).
                  The RM connects the two — identifying the problem, the advisory team solves it.
                </p>
              </div>
            </div>
            <div className="mt-4 rounded-md bg-orange-50 border border-orange-200 p-3">
              <p className="text-xs font-semibold text-db-orange uppercase">Getting It Right</p>
              <p className="text-sm text-gray-700 mt-1">
                The line between &ldquo;helpful advisor&rdquo; and &ldquo;salesperson&rdquo; is intent. When
                you surface a problem, lead with the client&apos;s risk or business impact —
                not with a product. &ldquo;I noticed you&apos;re launching a new fund — that changes
                your risk profile&rdquo; is advisory. &ldquo;We have a new product for fund launches&rdquo;
                is sales. Same information, completely different conversation.
              </p>
            </div>
          </div>
        </div>

        {/* Renewal */}
        <div className="rounded-lg border border-gray-200 bg-white overflow-hidden">
          <div className="bg-db-orange px-5 py-3 flex items-center justify-between">
            <p className="text-sm font-semibold text-white">Renewal</p>
            <span className="rounded-full bg-white/20 px-3 py-0.5 text-xs text-white">RM Team</span>
          </div>
          <div className="px-5 py-4">
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase">Purpose</p>
                <p className="mt-1 text-gray-700">Prove the value delivered, demonstrate ROI, and confirm the renewal. This should feel like a natural checkpoint in the relationship — not a sales event.</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase">Key Activities</p>
                <ul className="mt-1 text-gray-700 space-y-1">
                  <li>&#8226; Present outcome-based value summary (not a task list)</li>
                  <li>&#8226; Quantify ROI: cost of alternatives, risk reduction, time saved</li>
                  <li>&#8226; Propose next year&apos;s scope — including the next outcome phase if appropriate</li>
                  <li>&#8226; Negotiate and close using the playbook principles</li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase">What Happens Next</p>
                <p className="mt-1 text-gray-700">
                  After renewal, the cycle continues — back into <strong>Strategic Partnership</strong>.
                  If the renewal includes new scope (next outcome phase), it flows through
                  Implementation first. The relationship is continuous, not transactional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lifecycle + Outcome mapping */}
      <SectionHeading>How the Lifecycle Maps to Outcome Phases</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed mb-4">
        The internal lifecycle repeats within each outcome phase. As the client progresses
        through outcomes, the lifecycle spins again — but faster and with deeper trust.
      </p>
      <div className="rounded-md border border-gray-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-3 py-2 text-left font-medium text-gray-600">Outcome Phase</th>
              <th className="px-3 py-2 text-left font-medium text-gray-600">Discovery</th>
              <th className="px-3 py-2 text-left font-medium text-gray-600">Implementation</th>
              <th className="px-3 py-2 text-left font-medium text-gray-600">Value Realization</th>
              <th className="px-3 py-2 text-left font-medium text-gray-600">Strategic / Renewal</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            <tr>
              <td className="px-3 py-2 font-medium text-db-dark">1. Capital Confidence</td>
              <td className="px-3 py-2 text-gray-600 text-xs">Sales identifies DDQ/ODD pain</td>
              <td className="px-3 py-2 text-gray-600 text-xs">Advisory delivers assessment + DDQ foundation</td>
              <td className="px-3 py-2 text-gray-600 text-xs">RM shows turnaround improvement, LP satisfaction</td>
              <td className="px-3 py-2 text-gray-600 text-xs">RM bridges to regulatory readiness</td>
            </tr>
            <tr className="bg-gray-50/50">
              <td className="px-3 py-2 font-medium text-db-dark">2. Regulatory Readiness</td>
              <td className="px-3 py-2 text-gray-600 text-xs">RM identifies exam risk</td>
              <td className="px-3 py-2 text-gray-600 text-xs">Advisory builds policies, IR plan, training</td>
              <td className="px-3 py-2 text-gray-600 text-xs">RM shows exam-ready posture, policy currency</td>
              <td className="px-3 py-2 text-gray-600 text-xs">RM bridges to active protection</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-medium text-db-dark">3. Protection</td>
              <td className="px-3 py-2 text-gray-600 text-xs">RM identifies testing gaps</td>
              <td className="px-3 py-2 text-gray-600 text-xs">Advisory runs pen tests, tabletops, monitoring</td>
              <td className="px-3 py-2 text-gray-600 text-xs">RM shows risk reduction, remediation progress</td>
              <td className="px-3 py-2 text-gray-600 text-xs">RM bridges to competitive positioning</td>
            </tr>
            <tr className="bg-gray-50/50">
              <td className="px-3 py-2 font-medium text-db-dark">4. Competitive Advantage</td>
              <td className="px-3 py-2 text-gray-600 text-xs">RM identifies positioning opportunity</td>
              <td className="px-3 py-2 text-gray-600 text-xs">Advisory delivers benchmarking, board reports</td>
              <td className="px-3 py-2 text-gray-600 text-xs">RM shows peer positioning, LP feedback</td>
              <td className="px-3 py-2 text-gray-600 text-xs">Renewal + continued partnership</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs text-gray-500 italic">
        Note: After Phase 1, the &ldquo;Discovery&rdquo; step is led by the RM (not Sales) — because the
        RM is already in the relationship and identifies the next business problem naturally.
      </p>

      {/* Visual journey bar */}
      <SectionHeading>Client-Facing Outcome Phases</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed mb-4">
        Below is the client-facing view — what you share with the client. The internal lifecycle
        above is how we operate behind the scenes to deliver each phase.
      </p>
      <div className="flex items-center gap-0">
        {phases.map((phase, i) => (
          <div key={phase.num} className="flex-1 relative">
            <div className={`${phase.color} h-2 ${i === 0 ? 'rounded-l-full' : ''} ${i === phases.length - 1 ? 'rounded-r-full' : ''}`} />
            <div className="mt-2 text-center">
              <p className="text-xs font-semibold text-gray-400">PHASE {phase.num}</p>
              <p className="text-sm font-semibold text-db-dark">{phase.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ── Phase 1 ── */}
      <div className="mt-10 rounded-xl border-2 border-db-aqua overflow-hidden">
        <div className="bg-db-aqua/10 px-6 py-4 border-b border-db-aqua/20 flex items-center gap-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-db-aqua text-white text-lg font-bold">1</span>
          <div>
            <h3 className="text-lg font-bold font-heading text-db-dark">Get Started — Raise &amp; Retain Capital</h3>
            <p className="text-sm text-gray-500">Solve their most urgent problem first. Everything else follows.</p>
          </div>
        </div>
        <div className="px-6 py-5 space-y-5">
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">The Trigger</p>
            <p className="mt-1 text-sm text-gray-700">
              A hedge fund raising capital or going through LP due diligence needs to
              demonstrate a credible cybersecurity program — fast. DDQ season is approaching,
              a consultant flagged gaps, or an allocator asked a question they couldn&apos;t answer.
              This is the moment they reach out.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">What We Do</p>
            <div className="mt-2 grid grid-cols-3 gap-3">
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-aqua-dark">Week 1–2</p>
                <p className="text-sm font-medium text-db-dark mt-1">Security Assessment</p>
                <p className="text-xs text-gray-500 mt-1">Baseline their current posture. Identify gaps allocators will find.</p>
              </div>
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-aqua-dark">Week 2–4</p>
                <p className="text-sm font-medium text-db-dark mt-1">Policy &amp; DDQ Foundation</p>
                <p className="text-xs text-gray-500 mt-1">Build core policies and prepare DDQ responses they can send to LPs immediately.</p>
              </div>
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-aqua-dark">Ongoing</p>
                <p className="text-sm font-medium text-db-dark mt-1">DDQ &amp; ODD Support</p>
                <p className="text-xs text-gray-500 mt-1">Handle incoming DDQs and support allocator due diligence reviews as they come in.</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">How We Measure Value</p>
            <div className="mt-1 flex flex-wrap gap-2">
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">DDQ turnaround: 3 weeks → 5 days</span>
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">ODD reviews passed without findings</span>
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">Zero follow-up requests from allocators</span>
            </div>
          </div>

          <div className="rounded-md bg-green-50 border border-green-200 p-3">
            <p className="text-xs font-semibold text-green-700">THE BRIDGE TO PHASE 2</p>
            <p className="text-sm text-green-800 mt-1">
              &ldquo;Your DDQ responses are strong and your allocators are satisfied. But the
              responses are only as good as the program behind them. Let&apos;s make sure the
              underlying policies and procedures are exam-ready — so if the SEC calls, you&apos;re
              as prepared as you are for your LPs.&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* ── Phase 2 ── */}
      <div className="mt-6 rounded-xl border-2 border-db-aqua-dark overflow-hidden">
        <div className="bg-db-aqua-dark/10 px-6 py-4 border-b border-db-aqua-dark/20 flex items-center gap-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-db-aqua-dark text-white text-lg font-bold">2</span>
          <div>
            <h3 className="text-lg font-bold font-heading text-db-dark">Build the Foundation — Regulatory Readiness</h3>
            <p className="text-sm text-gray-500">Move from reactive DDQ support to a proactive compliance program.</p>
          </div>
        </div>
        <div className="px-6 py-5 space-y-5">
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">The Trigger</p>
            <p className="mt-1 text-sm text-gray-700">
              The initial engagement is working — DDQs are getting done, allocators are happy.
              Now the conversation shifts naturally: what happens when the SEC shows up?
              The Reg S-P amendments require a documented incident response program. The firm&apos;s
              policies need to be current, specific, and board-approved.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">What We Add</p>
            <div className="mt-2 grid grid-cols-3 gap-3">
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-aqua-dark">Policies</p>
                <p className="text-sm font-medium text-db-dark mt-1">Full Policy Program</p>
                <p className="text-xs text-gray-500 mt-1">Written, board-approved cybersecurity policies tailored to the firm. Annual reviews.</p>
              </div>
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-aqua-dark">IR Planning</p>
                <p className="text-sm font-medium text-db-dark mt-1">Incident Response Plan</p>
                <p className="text-xs text-gray-500 mt-1">Documented IR procedures with roles, escalation, and notification workflows.</p>
              </div>
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-aqua-dark">Training</p>
                <p className="text-sm font-medium text-db-dark mt-1">Security Awareness</p>
                <p className="text-xs text-gray-500 mt-1">Employee training program with completion tracking and phishing simulations.</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">How We Measure Value</p>
            <div className="mt-1 flex flex-wrap gap-2">
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">All policies current and board-approved</span>
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">IR plan documented and roles assigned</span>
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">90%+ training completion rate</span>
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">Exam-ready document package maintained</span>
            </div>
          </div>

          <div className="rounded-md bg-green-50 border border-green-200 p-3">
            <p className="text-xs font-semibold text-green-700">THE BRIDGE TO PHASE 3</p>
            <p className="text-sm text-green-800 mt-1">
              &ldquo;You have the policies and the plan on paper. Now let&apos;s test it. When&apos;s the
              last time you ran a tabletop exercise or a penetration test? Let&apos;s find out
              if the plan actually works before you need it to.&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* ── Phase 3 ── */}
      <div className="mt-6 rounded-xl border-2 border-db-orange/60 overflow-hidden">
        <div className="bg-orange-50 px-6 py-4 border-b border-db-orange/20 flex items-center gap-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-db-orange/80 text-white text-lg font-bold">3</span>
          <div>
            <h3 className="text-lg font-bold font-heading text-db-dark">Strengthen — Protect from Disruption</h3>
            <p className="text-sm text-gray-500">Move from documentation to active defense and tested resilience.</p>
          </div>
        </div>
        <div className="px-6 py-5 space-y-5">
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">The Trigger</p>
            <p className="mt-1 text-sm text-gray-700">
              The program is documented and the firm is exam-ready. But a policy on paper
              doesn&apos;t stop ransomware. A peer firm gets breached. An employee clicks a
              phishing link. The conversation naturally evolves from &ldquo;are we compliant?&rdquo; to
              &ldquo;are we actually protected?&rdquo;
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">What We Add</p>
            <div className="mt-2 grid grid-cols-3 gap-3">
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-orange">Testing</p>
                <p className="text-sm font-medium text-db-dark mt-1">Pen Testing &amp; Vuln Scans</p>
                <p className="text-xs text-gray-500 mt-1">Find weaknesses before attackers do. Annual pen test plus quarterly vulnerability scanning.</p>
              </div>
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-orange">Readiness</p>
                <p className="text-sm font-medium text-db-dark mt-1">Tabletop Exercises</p>
                <p className="text-xs text-gray-500 mt-1">Simulate a real incident with the leadership team. Stress-test the IR plan.</p>
              </div>
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-orange">Protection</p>
                <p className="text-sm font-medium text-db-dark mt-1">IR Retainer &amp; Monitoring</p>
                <p className="text-xs text-gray-500 mt-1">Someone to call at 2am. Ongoing monitoring and rapid response capability.</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">How We Measure Value</p>
            <div className="mt-1 flex flex-wrap gap-2">
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">Vulnerabilities found and remediated</span>
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">Risk score improvement over time</span>
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">Tabletop exercise completed with leadership</span>
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">Phishing click rate decreasing quarter over quarter</span>
            </div>
          </div>

          <div className="rounded-md bg-green-50 border border-green-200 p-3">
            <p className="text-xs font-semibold text-green-700">THE BRIDGE TO PHASE 4</p>
            <p className="text-sm text-green-800 mt-1">
              &ldquo;You&apos;re now running a stronger security program than most of your peers.
              That&apos;s not just protection — it&apos;s a differentiator. Let&apos;s make sure your LPs
              and prospective allocators see it. How are you telling that story today?&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* ── Phase 4 ── */}
      <div className="mt-6 rounded-xl border-2 border-db-orange overflow-hidden">
        <div className="bg-orange-50 px-6 py-4 border-b border-db-orange/20 flex items-center gap-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-db-orange text-white text-lg font-bold">4</span>
          <div>
            <h3 className="text-lg font-bold font-heading text-db-dark">Differentiate — Security as Competitive Advantage</h3>
            <p className="text-sm text-gray-500">Turn the program into a story that wins capital and builds trust.</p>
          </div>
        </div>
        <div className="px-6 py-5 space-y-5">
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">The Trigger</p>
            <p className="mt-1 text-sm text-gray-700">
              The firm has a mature, tested program. Now the question shifts from &ldquo;are we
              protected?&rdquo; to &ldquo;how do we use this to win?&rdquo; Allocators are comparing managers.
              The firm with the best operational story wins the allocation. This is where
              cybersecurity becomes a revenue driver, not a cost center.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">What We Add</p>
            <div className="mt-2 grid grid-cols-3 gap-3">
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-orange">Positioning</p>
                <p className="text-sm font-medium text-db-dark mt-1">Peer Benchmarking</p>
                <p className="text-xs text-gray-500 mt-1">Show the firm where they stand vs. peers — and help them tell that story to allocators.</p>
              </div>
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-orange">Governance</p>
                <p className="text-sm font-medium text-db-dark mt-1">Board &amp; LP Reporting</p>
                <p className="text-xs text-gray-500 mt-1">Executive-ready reports that demonstrate program maturity to leadership and investors.</p>
              </div>
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-orange">Growth</p>
                <p className="text-sm font-medium text-db-dark mt-1">Vendor Risk Program</p>
                <p className="text-xs text-gray-500 mt-1">Extend the program to cover third-party risk — a top allocator and regulatory priority.</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">How We Measure Value</p>
            <div className="mt-1 flex flex-wrap gap-2">
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">Top-quartile peer benchmarking position</span>
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">Board receives quarterly security reports</span>
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">LP feedback cites security program as a strength</span>
              <span className="rounded-full bg-db-aqua/10 border border-db-aqua/20 px-3 py-1 text-xs text-db-dark">Vendor risk program covering critical third parties</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scale narrative */}
      <SectionHeading>The Constant: Scale Without Headcount</SectionHeading>
      <div className="rounded-lg border-l-4 border-db-dark bg-gray-50 p-5">
        <p className="text-sm text-gray-700 leading-relaxed">
          <strong>Outcome 5 — Scale Without Adding Headcount</strong> — isn&apos;t a phase. It&apos;s the
          underlying value proposition that runs through the entire journey. At every phase, the
          client is getting enterprise-grade security without hiring a CISO or building an internal
          team. This should be reinforced at every touchpoint: &ldquo;We&apos;re delivering all of this
          at a fraction of what it would cost to build in-house — and it scales automatically
          as your firm grows.&rdquo;
        </p>
      </div>

      {/* Journey at a glance */}
      <SectionHeading>The Journey at a Glance</SectionHeading>
      <div className="rounded-md border border-gray-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left font-medium text-gray-600">Phase</th>
              <th className="px-4 py-2 text-left font-medium text-gray-600">Outcome</th>
              <th className="px-4 py-2 text-left font-medium text-gray-600">Client Says</th>
              <th className="px-4 py-2 text-left font-medium text-gray-600">We Deliver</th>
              <th className="px-4 py-2 text-left font-medium text-gray-600">Bridge to Next</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            <tr>
              <td className="px-4 py-2 font-medium text-db-dark">1. Get Started</td>
              <td className="px-4 py-2 text-gray-600">Capital Confidence</td>
              <td className="px-4 py-2 text-gray-600 italic">&ldquo;DDQ season is killing us&rdquo;</td>
              <td className="px-4 py-2 text-gray-600">Assessment, DDQ support, ODD readiness</td>
              <td className="px-4 py-2 text-gray-600">&ldquo;Let&apos;s make the underlying program exam-ready&rdquo;</td>
            </tr>
            <tr className="bg-gray-50/50">
              <td className="px-4 py-2 font-medium text-db-dark">2. Foundation</td>
              <td className="px-4 py-2 text-gray-600">Regulatory Readiness</td>
              <td className="px-4 py-2 text-gray-600 italic">&ldquo;What if the SEC shows up?&rdquo;</td>
              <td className="px-4 py-2 text-gray-600">Policies, IR plan, training program</td>
              <td className="px-4 py-2 text-gray-600">&ldquo;Let&apos;s test if the plan actually works&rdquo;</td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-medium text-db-dark">3. Strengthen</td>
              <td className="px-4 py-2 text-gray-600">Protection</td>
              <td className="px-4 py-2 text-gray-600 italic">&ldquo;Are we actually protected?&rdquo;</td>
              <td className="px-4 py-2 text-gray-600">Pen testing, tabletops, IR retainer</td>
              <td className="px-4 py-2 text-gray-600">&ldquo;You&apos;re ahead of peers — let&apos;s tell that story&rdquo;</td>
            </tr>
            <tr className="bg-gray-50/50">
              <td className="px-4 py-2 font-medium text-db-dark">4. Differentiate</td>
              <td className="px-4 py-2 text-gray-600">Competitive Advantage</td>
              <td className="px-4 py-2 text-gray-600 italic">&ldquo;How do we stand out?&rdquo;</td>
              <td className="px-4 py-2 text-gray-600">Benchmarking, board reporting, vendor risk</td>
              <td className="px-4 py-2 text-gray-600">Continuous partnership &amp; expansion</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Key principles */}
      <SectionHeading>Key Principles</SectionHeading>
      <div className="grid grid-cols-2 gap-4">
        <CharacteristicCard
          title="Start Where They Hurt"
          description="Don't try to sell the full program on day one. Solve their most urgent problem, prove value fast, and earn the right to expand."
        />
        <CharacteristicCard
          title="Every Phase Earns the Next"
          description="The bridge between phases should feel natural, not salesy. You're identifying the next business problem, not pitching the next SKU."
        />
        <CharacteristicCard
          title="The Client Sets the Pace"
          description="Some clients move through all four phases in year one. Others take three years. Match their priorities and budget cycle, not yours."
        />
        <CharacteristicCard
          title="The Journey Never Ends"
          description="Phase 4 isn't the finish line. Threats evolve, regulations change, firms grow. The partnership continues to create value as long as we stay relevant."
        />
      </div>

      <DrawbridgeAngle>
        <p>
          This journey has two layers by design. The <strong>client-facing outcome phases</strong> are
          what you share externally — they show the client a clear, non-salesy path
          forward. The <strong>internal lifecycle</strong> is how we operate — it ensures
          clean handoffs, clear ownership, and disciplined value communication.
        </p>
        <p>
          The RM is the connective tissue. You bridge Discovery to Implementation by
          setting clear expectations. You bridge Implementation to Value Realization by
          gathering evidence and telling the story. You bridge Value to Strategic
          Partnership by earning trust. And you bridge Strategic Partnership to Renewal
          by making the decision obvious. Every bridge is earned, never forced.
        </p>
      </DrawbridgeAngle>
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
  'reg-sp': RegSP,
  dora: DORA,
  'sec-exam-priorities': SECExamPriorities,
  'forecasting-best-practices': ForecastingBestPractices,
  'renewal-plan-best-practices': RenewalPlanBestPractices,
  'negotiation-playbook': NegotiationPlaybook,
  'outcome-framework': OutcomeFramework,
  'journey-hedge-fund': JourneyHedgeFund,
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

          {/* RM Workflows Section */}
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
            RM Workflows
          </p>
          <ul className="space-y-1">
            {WORKFLOW_ITEMS.map((item) => (
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

          {/* Outcomes & Value Section */}
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
            Outcomes &amp; Value
          </p>
          <ul className="space-y-1">
            {VALUE_ITEMS.map((item) => (
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
