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

export default function NegotiationPlaybook() {
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

      {/* Uplift Negotiation */}
      <SectionHeading>Negotiating Uplift (Price Increases)</SectionHeading>

      <SubSection icon="📊" title="Why Uplift Matters — The Strategic Picture">
        <p>
          Our standard annual uplift is 7%. In practice, most deals land somewhere between
          3% and 7%. At our typical ACV of $30–50K, the dollar difference between those
          numbers is a few hundred to maybe a thousand dollars. <strong>This is not about
          fighting over a few hundred bucks.</strong>
        </p>
        <p>
          So why does uplift matter? Because it&apos;s a <em>habit</em> and a <em>signal</em>.
          If you consistently accept flat renewals or minimal increases, you&apos;re training
          clients to expect it — and you&apos;re compressing your book over time. A 0% increase
          this year is actually a real-dollar decrease when costs go up. Across 50 accounts,
          the difference between averaging 3% uplift and 5% uplift is real money at the
          portfolio level, even if any single deal feels small.
        </p>
        <p>
          More importantly, <strong>how you handle the uplift conversation signals how you
          show up as a partner</strong>. An RM who presents uplift confidently, ties it to
          value, and uses it as a lever to deepen the relationship is operating strategically.
          An RM who apologizes for it, pre-discounts before the client even pushes back, or
          avoids the conversation entirely is leaving value on the table and undermining
          their own positioning.
        </p>
      </SubSection>

      <SubSection icon="🧭" title="The Uplift Framework">
        <p>
          This isn&apos;t a rigid script — it&apos;s a way of thinking about the conversation.
          Every client is different, every situation has context, and you have judgment.
          The framework is designed to help you <strong>think through your approach before
          the conversation</strong>, not to box you in during it.
        </p>

        <div className="mt-4 space-y-4">
          {/* Principle 1 */}
          <div className="rounded-lg border border-gray-200 bg-white p-5">
            <p className="text-sm font-bold text-db-dark">1. Always Start at Standard</p>
            <p className="mt-2 text-sm text-gray-700">
              Every proposal goes out at 7%. No pre-discounting. No &ldquo;I already brought it down
              for you.&rdquo; The reason is simple: <strong>many clients will accept it without
              pushback</strong> if it&apos;s presented as standard. You don&apos;t know which ones will push
              back until they do — so don&apos;t negotiate against yourself.
            </p>
            <p className="mt-2 text-sm text-gray-700">
              Present it as a line item, not a talking point. Call it an &ldquo;annual adjustment&rdquo;
              or &ldquo;standard rate update&rdquo; — not a &ldquo;price increase.&rdquo; Language shapes perception.
              If you treat it as routine, the client will too.
            </p>
          </div>

          {/* Principle 2 */}
          <div className="rounded-lg border border-gray-200 bg-white p-5">
            <p className="text-sm font-bold text-db-dark">2. When They Push Back — Lead with Value, Not Apology</p>
            <p className="mt-2 text-sm text-gray-700">
              If a client questions the uplift, your first instinct should <em>not</em> be to
              offer a lower number. Your first move is to tie the increase to something real:
            </p>
            <ul className="mt-2 text-sm text-gray-700 space-y-1 ml-4">
              <li>&#8226; &ldquo;The regulatory landscape has expanded — new Reg S-P amendments, AI governance, expanded SEC priorities. The scope of what we cover for you has grown.&rdquo;</li>
              <li>&#8226; &ldquo;We&apos;ve deepened our knowledge of your environment over the past year. That continuity has real value — a new provider would take 6 months to get up to speed.&rdquo;</li>
              <li>&#8226; &ldquo;Platform improvements, expanded threat intelligence, faster DDQ turnaround — the service has gotten better, and the adjustment reflects that.&rdquo;</li>
            </ul>
            <p className="mt-2 text-sm text-gray-700">
              Often, simply explaining the &ldquo;why&rdquo; is enough. Many clients push back reflexively —
              they&apos;re not genuinely objecting, they&apos;re checking to see if the number moves.
              If you hold with a clear rationale, a lot of them will accept it.
            </p>
          </div>

          {/* Principle 3 */}
          <div className="rounded-lg border border-gray-200 bg-white p-5">
            <p className="text-sm font-bold text-db-dark">3. If You Come Down — Trade for Something</p>
            <p className="mt-2 text-sm text-gray-700">
              The exact percentage matters less than the principle: <strong>every concession
              should come with a trade</strong>. This is where the real strategy lives.
              Whether you end up at 5% or 3% is less important than what you get in return.
            </p>
            <div className="mt-3 rounded-md border border-gray-200 overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left font-medium text-gray-600">You Give</th>
                    <th className="px-4 py-2 text-left font-medium text-gray-600">You Get</th>
                    <th className="px-4 py-2 text-left font-medium text-gray-600">Why It&apos;s Worth It</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="px-4 py-2 text-gray-700">Lower uplift</td>
                    <td className="px-4 py-2 font-medium text-db-dark">2-year commitment</td>
                    <td className="px-4 py-2 text-gray-600">Eliminates next year&apos;s renewal risk entirely. Revenue secured for 24 months.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-gray-700">Lower uplift</td>
                    <td className="px-4 py-2 font-medium text-db-dark">Auto-renewal clause</td>
                    <td className="px-4 py-2 text-gray-600">Contract continues unless cancelled. Shifts the burden from &ldquo;renew&rdquo; to &ldquo;cancel.&rdquo;</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-gray-700">Lower uplift</td>
                    <td className="px-4 py-2 font-medium text-db-dark">Expansion commitment</td>
                    <td className="px-4 py-2 text-gray-600">&ldquo;I can work on the rate if we add the portco assessment we discussed for Q3.&rdquo;</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-gray-700">Lower uplift</td>
                    <td className="px-4 py-2 font-medium text-db-dark">Case study / reference</td>
                    <td className="px-4 py-2 text-gray-600">Marketing asset + social proof. Worth more than the uplift delta to the business.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-gray-700">Lower uplift</td>
                    <td className="px-4 py-2 font-medium text-db-dark">Upfront annual payment</td>
                    <td className="px-4 py-2 text-gray-600">Cash flow improvement. A $40K check in January vs. quarterly invoices has real value.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm text-gray-700">
              The <strong>2-year deal is your best lever</strong> and should be the first trade
              you reach for. It&apos;s easy for the client to say yes to — they get rate certainty
              and eliminate the hassle of renegotiating next year. You get guaranteed revenue
              and remove renewal risk from your pipeline. Both sides win.
            </p>
          </div>

          {/* Principle 4 */}
          <div className="rounded-lg border border-gray-200 bg-white p-5">
            <p className="text-sm font-bold text-db-dark">4. Know When It&apos;s Not Worth the Fight</p>
            <p className="mt-2 text-sm text-gray-700">
              Strategic judgment matters. On a $35K deal, the difference between 5% and 3% is
              $700. If the client is a strong reference, has expansion potential, or just needs
              an easy win to get the deal signed, it may not be worth spending two more calls
              negotiating over that delta. <strong>Your time is an asset too.</strong>
            </p>
            <p className="mt-2 text-sm text-gray-700">
              The question to ask yourself is: <em>&ldquo;What else could I accomplish with the time
              I&apos;d spend fighting for this?&rdquo;</em> If the answer is &ldquo;close another deal&rdquo; or
              &ldquo;expand a different account,&rdquo; take the reasonable offer and move on. The goal
              is to maximize the value of your <em>book</em>, not to win every individual negotiation.
            </p>
          </div>

          {/* Principle 5 */}
          <div className="rounded-lg border border-gray-200 bg-white p-5">
            <p className="text-sm font-bold text-db-dark">5. Flat Renewals Need a Story</p>
            <p className="mt-2 text-sm text-gray-700">
              Sometimes the right answer is 0%. A strategic account in a save situation, a
              client going through a genuine hardship, a relationship you need to protect for
              long-term expansion. That&apos;s fine — but it should be a <strong>deliberate
              decision with a plan</strong>, not a default.
            </p>
            <p className="mt-2 text-sm text-gray-700">
              If you&apos;re proposing a flat renewal, you should be able to articulate:
              <em> why this client</em>, <em>what you&apos;re getting in return</em> (even if it&apos;s
              just goodwill and retention), and <em>what the plan is to get uplift next year</em>.
              It&apos;s not about asking permission — it&apos;s about operating with intention.
            </p>
          </div>
        </div>
      </SubSection>

      {/* Strategic Thinking */}
      <SubSection icon="🧠" title="The Real Skill: Reading the Situation">
        <p>
          The best uplift negotiators don&apos;t rely on a script. They read the client and
          the situation and adjust. Here are the patterns to recognize:
        </p>
        <div className="mt-3 space-y-3">
          <div className="rounded-md border border-gray-200 bg-white p-4">
            <p className="text-sm font-bold text-db-dark">The Reflexive Pushback</p>
            <p className="mt-1 text-sm text-gray-700">
              <strong>What it sounds like:</strong> &ldquo;Can you do anything on the price?&rdquo; — asked
              casually, almost out of habit. They haven&apos;t looked at the numbers. They&apos;re checking.
            </p>
            <p className="mt-1 text-sm text-gray-700">
              <strong>What to do:</strong> Hold. Explain the value. Most of the time, this
              resolves itself. They weren&apos;t objecting — they were testing. If you immediately
              offer a discount, you&apos;ve rewarded the test and they&apos;ll do it harder next year.
            </p>
          </div>
          <div className="rounded-md border border-gray-200 bg-white p-4">
            <p className="text-sm font-bold text-db-dark">The Budget Reality</p>
            <p className="mt-1 text-sm text-gray-700">
              <strong>What it sounds like:</strong> &ldquo;Our COO said all vendor renewals need to
              come in at X% or flat.&rdquo; There&apos;s a real number. Someone above them set it.
            </p>
            <p className="mt-1 text-sm text-gray-700">
              <strong>What to do:</strong> Work with it. If the number is 3% or 5%, just take it
              and trade for multi-year or another concession. If it&apos;s 0%, explore restructuring
              or offer to help them build the internal case. &ldquo;Would it help if I put together a
              brief for your COO on the regulatory risk of reducing coverage?&rdquo;
            </p>
          </div>
          <div className="rounded-md border border-gray-200 bg-white p-4">
            <p className="text-sm font-bold text-db-dark">The Competitive Lever</p>
            <p className="mt-1 text-sm text-gray-700">
              <strong>What it sounds like:</strong> &ldquo;We got a quote from another provider at
              $X&rdquo; or &ldquo;We&apos;re evaluating options.&rdquo;
            </p>
            <p className="mt-1 text-sm text-gray-700">
              <strong>What to do:</strong> Don&apos;t panic and don&apos;t match blindly. Shift the
              conversation to switching costs and continuity: &ldquo;Switching providers means 3–6
              months of onboarding, losing institutional knowledge of your environment, and
              starting over on LP reporting. The uplift is a fraction of that disruption cost.&rdquo;
              Then offer the multi-year trade to close the conversation.
            </p>
          </div>
          <div className="rounded-md border border-gray-200 bg-white p-4">
            <p className="text-sm font-bold text-db-dark">The Value Question</p>
            <p className="mt-1 text-sm text-gray-700">
              <strong>What it sounds like:</strong> &ldquo;Why should we pay more when we didn&apos;t
              use everything?&rdquo; or &ldquo;We&apos;re not sure we&apos;re getting our money&apos;s worth.&rdquo;
            </p>
            <p className="mt-1 text-sm text-gray-700">
              <strong>What to do:</strong> This is a delivery and engagement problem, not a pricing
              problem. Don&apos;t argue about the uplift — schedule a business review and show the
              value. If the client is under-utilizing, that&apos;s on us to fix. Address the root
              cause, then the renewal conversation gets much easier.
            </p>
          </div>
          <div className="rounded-md border border-gray-200 bg-white p-4">
            <p className="text-sm font-bold text-db-dark">The Hard Line</p>
            <p className="mt-1 text-sm text-gray-700">
              <strong>What it sounds like:</strong> &ldquo;We&apos;re renewing at the old price or we&apos;re
              not renewing.&rdquo; Firm. Not negotiating.
            </p>
            <p className="mt-1 text-sm text-gray-700">
              <strong>What to do:</strong> Take it seriously but don&apos;t fold immediately. Use
              the &ldquo;leadership approval&rdquo; frame to buy time and add weight: &ldquo;A flat renewal
              isn&apos;t something I can approve on my own — let me take this back to my leadership
              with a case for it. If we can get a 2-year commitment, that gives me something to
              work with.&rdquo; This shows the client the concession is real and makes the trade feel
              earned.
            </p>
          </div>
        </div>
      </SubSection>

      <SubSection icon="🤝" title="The Multi-Year Play — Your Best Tool">
        <p>
          Across all of these scenarios, the <strong>2-year deal</strong> is your most versatile
          lever. It works because both sides genuinely benefit:
        </p>
        <div className="mt-3 grid grid-cols-2 gap-4">
          <div className="rounded-lg border border-green-200 bg-green-50 p-4">
            <p className="text-sm font-bold text-green-700">Client Gets</p>
            <ul className="mt-2 text-sm text-gray-700 space-y-1">
              <li>&#8226; Rate certainty for 24 months</li>
              <li>&#8226; No renewal negotiation next year</li>
              <li>&#8226; Budget predictability — easier internal approval</li>
              <li>&#8226; Commitment to continued service levels</li>
            </ul>
          </div>
          <div className="rounded-lg border border-db-aqua bg-db-aqua/5 p-4">
            <p className="text-sm font-bold text-db-aqua-dark">Drawbridge Gets</p>
            <ul className="mt-2 text-sm text-gray-700 space-y-1">
              <li>&#8226; Guaranteed revenue for 2 years</li>
              <li>&#8226; One less renewal to manage next year</li>
              <li>&#8226; Deeper relationship and switching cost</li>
              <li>&#8226; Better forecasting accuracy</li>
            </ul>
          </div>
        </div>
        <p className="mt-3 text-sm text-gray-700">
          Frame it as a partnership move, not a pricing trick: &ldquo;A 2-year agreement means
          we can plan a longer-horizon program together — more proactive, less reactive.
          It also takes this negotiation off both our plates next year so we can focus on
          the work.&rdquo;
        </p>
      </SubSection>

      <DrawbridgeAngle>
        <p>
          The uplift conversation is a skill, not a policy. The percentages are guidelines.
          What matters is <strong>how you show up</strong>: confident, prepared, and focused on
          the relationship. An RM who consistently lands 3–5% with multi-year terms and
          strong client relationships is doing exactly the right thing. An RM who avoids
          the conversation entirely or apologizes their way to 0% is leaving value on the
          table — not just in dollars, but in how the client perceives us.
        </p>
        <p>
          Think of uplift as a muscle. The more you practice it, the more natural it feels.
          Start by presenting 7% confidently on your next renewal and see what happens.
          You&apos;ll be surprised how often the answer is just &ldquo;okay.&rdquo;
        </p>
      </DrawbridgeAngle>

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

      <LastUpdated date="2026-02-24" />
    </>
  );
}
