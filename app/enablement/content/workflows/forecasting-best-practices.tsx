'use client';

import React from 'react';
import {
  HeroSection,
  SectionHeading,
  SubSection,
  CharacteristicCard,
  DrawbridgeAngle,
  LastUpdated,
} from '../../components/shared-ui';

export default function ForecastingBestPractices() {
  return (
    <>
      <HeroSection
        icon="🎯"
        title="Forecasting Best Practices"
        subtitle="How to build a disciplined, data-driven renewal forecast — treating your renewal pipeline like a sales pipeline."
      />
      <LastUpdated date="February 24, 2026 at 9:04 PM" />

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

      {/* Gross Retention framing callout */}
      <div className="rounded-lg border border-db-aqua/30 bg-db-aqua/5 p-4 mt-2">
        <p className="text-sm text-db-dark font-medium">
          <strong>Forecasting focus: Gross Retention Rate (GRR).</strong> We are currently forecasting
          against gross retention — meaning our goal is to retain 100% of expiring ARR at current contract
          value. Best Case is capped at the expiring ARR. Expansion, upsells, and price increases will be
          tracked separately once we move into net retention reporting.
        </p>
      </div>

      {/* Best / Worst / Call */}
      <SectionHeading>Understanding Best, Worst & Call</SectionHeading>
      <div className="grid grid-cols-3 gap-4 mt-2">
        <div className="rounded-lg border-2 border-green-200 bg-green-50 p-4">
          <p className="font-semibold text-green-800 font-heading">Best Case</p>
          <p className="mt-2 text-sm text-green-700">
            The client renews at <strong>100% of expiring ARR</strong> — full retention at current
            contract value, on time, with no scope reduction. This is the ceiling for gross
            retention forecasting. Do not include expansion or price increases in your Best Case.
          </p>
          <p className="mt-3 text-xs text-green-600 italic">
            Ask yourself: &ldquo;Is there anything that could prevent a full, clean renewal at the
            current contract value?&rdquo; If not, Best Case = expiring ARR.
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

      <SubSection icon="🔍" title="Signals That Inform Your Forecast">
        <p>
          Your Best / Worst / Call isn&apos;t just a math exercise — it&apos;s a judgment call informed by
          everything you know about the account. Before setting your numbers, run through these
          seven signal areas. They&apos;re the difference between a forecast and a guess.
        </p>
        <div className="mt-4 grid grid-cols-2 gap-3">
          {/* Overall Sentiment */}
          <div className="rounded-md border border-gray-200 bg-gray-50 p-3">
            <p className="text-xs font-semibold text-db-dark uppercase tracking-wide">Overall Sentiment</p>
            <ul className="mt-2 space-y-1 text-xs text-gray-600 list-none">
              <li>• Have we had value-focused conversations? Are they aligned on ROI?</li>
              <li>• Are they happy — and do they advocate for us internally or externally?</li>
              <li>• Invested in improving cyber posture, or check-the-box?</li>
              <li>• Have they already indicated intent to renew?</li>
            </ul>
          </div>
          {/* Business Health */}
          <div className="rounded-md border border-gray-200 bg-gray-50 p-3">
            <p className="text-xs font-semibold text-db-dark uppercase tracking-wide">Business Health</p>
            <ul className="mt-2 space-y-1 text-xs text-gray-600 list-none">
              <li>• Are they fundraising, or is performance declining?</li>
              <li>• Any signs of budget cuts, layoffs, or hiring freezes?</li>
              <li>• Is macro stress hitting them harder than their peers?</li>
            </ul>
          </div>
          {/* Executive Sponsorship */}
          <div className="rounded-md border border-gray-200 bg-gray-50 p-3">
            <p className="text-xs font-semibold text-db-dark uppercase tracking-wide">Executive Sponsorship</p>
            <ul className="mt-2 space-y-1 text-xs text-gray-600 list-none">
              <li>• Do we have a senior leader who will advocate for Drawbridge in budget conversations?</li>
              <li>• Or are we relying on a day-to-day user to make the case internally?</li>
            </ul>
          </div>
          {/* Product Usage & Stickiness */}
          <div className="rounded-md border border-gray-200 bg-gray-50 p-3">
            <p className="text-xs font-semibold text-db-dark uppercase tracking-wide">Product Usage &amp; Stickiness</p>
            <ul className="mt-2 space-y-1 text-xs text-gray-600 list-none">
              <li>• How many products are they using, and how embedded are they in workflow?</li>
              <li>• Has the account expanded recently?</li>
            </ul>
          </div>
          {/* SKU-Level Risk */}
          <div className="rounded-md border border-gray-200 bg-gray-50 p-3">
            <p className="text-xs font-semibold text-db-dark uppercase tracking-wide">SKU-Level Churn Risk</p>
            <ul className="mt-2 space-y-1 text-xs text-gray-600 list-none">
              <li>• Are specific products at higher risk — rotating pen-test, something they&apos;re unhappy with, something not delivering value today?</li>
            </ul>
          </div>
          {/* Tenure */}
          <div className="rounded-md border border-gray-200 bg-gray-50 p-3">
            <p className="text-xs font-semibold text-db-dark uppercase tracking-wide">Tenure</p>
            <ul className="mt-2 space-y-1 text-xs text-gray-600 list-none">
              <li>• ~1 year accounts carry more churn risk than 5+ year clients.</li>
              <li>• For newer accounts: was onboarding successful? Are they fully activated?</li>
            </ul>
          </div>
          {/* Adoption Quality */}
          <div className="rounded-md border border-gray-200 bg-gray-50 col-span-2 p-3">
            <p className="text-xs font-semibold text-db-dark uppercase tracking-wide">Adoption Quality</p>
            <ul className="mt-2 grid grid-cols-3 gap-x-6 gap-y-1 text-xs text-gray-600 list-none">
              <li>• Using value-add capabilities, or just logging in?</li>
              <li>• Using the platform for remediation planning and forecasting?</li>
              <li>• Or are most interactions still via spreadsheets and email?</li>
            </ul>
          </div>
        </div>
      </SubSection>

      <SubSection icon="📐" title="How to Set Your Best / Worst / Call">
        <p><strong>Step 1: Start with the baseline.</strong> The expiring ARR is your anchor. Every
          forecast starts from what the client is paying today.</p>
        <p><strong>Step 2: Set your Best Case at 100% of expiring ARR.</strong> In the gross
          retention model, the best outcome is a full, clean renewal at current contract value.
          If the account is locked and risk-free, Best = expiring ARR. Do not factor in
          expansion, price increases, or upsells — those are tracked separately.</p>
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
                <td className="px-4 py-2 text-green-700">Full Renewal</td>
                <td className="px-4 py-2 text-gray-600">Same scope, same price — Best Case (GRR ceiling)</td>
                <td className="px-4 py-2 text-right">60%</td>
                <td className="px-4 py-2 text-right">$150K</td>
                <td className="px-4 py-2 text-right font-medium">$90K</td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-orange-700">Downsize</td>
                <td className="px-4 py-2 text-gray-600">Drop one service line</td>
                <td className="px-4 py-2 text-right">30%</td>
                <td className="px-4 py-2 text-right">$110K</td>
                <td className="px-4 py-2 text-right font-medium">$33K</td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-red-700">Churn</td>
                <td className="px-4 py-2 text-gray-600">Client does not renew</td>
                <td className="px-4 py-2 text-right">10%</td>
                <td className="px-4 py-2 text-right">$0</td>
                <td className="px-4 py-2 text-right font-medium">$0</td>
              </tr>
              <tr className="bg-gray-50 font-semibold">
                <td className="px-4 py-2" colSpan={2}>Expected Value (Your Call)</td>
                <td className="px-4 py-2 text-right">100%</td>
                <td className="px-4 py-2 text-right"></td>
                <td className="px-4 py-2 text-right">$123K</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-gray-500 italic">
          Note: Expansion and upsell scenarios are excluded from GRR forecasting. When we move to
          net retention reporting, a fourth &ldquo;Expansion&rdquo; row will be added above Full Renewal.
        </p>
        <p className="mt-2">
          You don&apos;t need to calculate this formally every time, but you should be thinking
          this way. When your manager asks &ldquo;why is your call at $123K?&rdquo; you should be
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
                Flag accounts that need escalation or support.
              </p>
              <p className="mt-2 text-sm text-gray-600">
                When updating notes, answer two questions: <strong>why is there risk</strong> on
                this account, and <strong>what is being done about it</strong>? A note that only
                logs activity (&ldquo;left voicemail,&rdquo; &ldquo;call next week&rdquo;) is not useful.
                A note that explains the situation and the action plan is.
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
              <p className="text-xs font-semibold text-gray-400 uppercase">Tue–Thu</p>
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
              <p className="mt-2 text-sm text-gray-600">
                <strong>Come with notes that explain the risk, not just the activity.</strong> &ldquo;Call scheduled
                for Tuesday&rdquo; is not a note — it&apos;s a calendar entry. A useful note tells the story:
                <em> why</em> is this account at risk, and <em>what is actively being done about it</em>?
                The goal is for anyone reading your Salesforce notes to understand the situation without
                having to ask you. If you can&apos;t articulate the risk and the action, you&apos;re not
                ready for the 1:1.
              </p>
              <div className="mt-3 rounded-md bg-gray-50 border border-gray-200 p-3 text-xs text-gray-600 space-y-2">
                <p className="font-semibold text-gray-500 uppercase tracking-wide text-[10px]">Note quality examples</p>
                <div className="flex gap-2">
                  <span className="text-red-500 font-bold shrink-0">✗</span>
                  <span className="italic">&ldquo;Called client, left voicemail. Follow-up scheduled.&rdquo;</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-green-600 font-bold shrink-0">✓</span>
                  <span className="italic">&ldquo;CFO flagged Drawbridge as discretionary spend in Q2 budget review. CCO is our champion but doesn&apos;t control the budget. Scheduled call with CCO to prep a cost-of-risk conversation before CFO review on 4/15.&rdquo;</span>
                </div>
              </div>
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
