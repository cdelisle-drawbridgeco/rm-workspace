'use client';

import React from 'react';
import { StatCard, SectionHeading, CharacteristicCard, TermBadge, HeroSection, DrawbridgeAngle, SubSection, FlowDiagram, LastUpdated } from '../../components/shared-ui';

export default function HedgeFunds() {
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

      <LastUpdated date="2026-02-24" />
    </>
  );
}
