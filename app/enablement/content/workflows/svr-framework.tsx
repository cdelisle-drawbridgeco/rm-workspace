'use client';

import React from 'react';
import {
  HeroSection,
  SectionHeading,
  SubSection,
  CharacteristicCard,
  DrawbridgeAngle,
  FlowDiagram,
} from '../../components/shared-ui';

export default function SvrFramework() {
  return (
    <>
      <HeroSection
        icon="📋"
        title="Strategic Value Review (SVR) Framework"
        subtitle="Relationship Manager Playbook — how to run SVRs that re-anchor value, protect GRR, and plant expansion seeds."
      />

      {/* Philosophy */}
      <SectionHeading>The Philosophy: Why SVRs Exist</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed">
        Your clients &mdash; COOs, CCOs, CFOs at alternative investment firms &mdash; did not hire
        Drawbridge because they love cybersecurity. They hired Drawbridge so they wouldn&apos;t have
        to think about it. They are running funds, managing investors, dealing with regulators, and
        growing their businesses. Cyber is a necessary burden they&apos;ve outsourced to you.
      </p>
      <p className="mt-3 text-sm text-gray-700 leading-relaxed">
        That is both the <strong>challenge</strong> and the <strong>opportunity</strong>.
      </p>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="rounded-lg border-2 border-red-200 bg-red-50 p-4">
          <p className="font-semibold text-red-800 font-heading">The Challenge</p>
          <p className="mt-2 text-sm text-red-700">
            If they&apos;re not thinking about it, they&apos;re not feeling the value either. Low
            engagement, &ldquo;check the box&rdquo; mentality, and passive churn all come from the
            same place &mdash; they&apos;ve forgotten why they bought you.
          </p>
        </div>
        <div className="rounded-lg border-2 border-green-200 bg-green-50 p-4">
          <p className="font-semibold text-green-800 font-heading">The Opportunity</p>
          <p className="mt-2 text-sm text-green-700">
            Every SVR is a chance to remind them, in their language, why Drawbridge is one of the
            best decisions they&apos;ve made for their firm. Not by showing them a dashboard. By
            connecting the work to the outcomes that keep them up at night &mdash; capital,
            regulators, reputation, and time.
          </p>
        </div>
      </div>
      <div className="mt-4 rounded-lg border-l-4 border-db-aqua bg-db-aqua/5 p-4">
        <p className="text-sm text-gray-700 font-medium">
          The SVR is <strong>not</strong> a QBR. It is <strong>not</strong> a status update. It is a
          strategic business conversation where Drawbridge earns the right to be called a partner
          &mdash; and plants the seeds for a long, expanding relationship.
        </p>
      </div>

      {/* Role Clarity */}
      <SectionHeading>Role Clarity: RM vs. CS</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed mb-4">
        One of the most important things to establish before SVRs can work is who does what.
        Confusion here creates duplicate effort, missed handoffs, and &mdash; worst of all &mdash;
        clients who aren&apos;t sure who to call.
      </p>
      <div className="rounded-md border border-gray-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left font-medium text-gray-600 w-1/5"></th>
              <th className="px-4 py-2 text-left font-medium text-db-aqua-dark w-2/5">Relationship Manager (RM)</th>
              <th className="px-4 py-2 text-left font-medium text-gray-600 w-2/5">Customer Success (CS)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            <tr>
              <td className="px-4 py-2 font-medium text-gray-700">Owns</td>
              <td className="px-4 py-2 text-gray-600">The relationship, commercial outcomes, renewal, expansion</td>
              <td className="px-4 py-2 text-gray-600">Delivery, execution, platform adoption, implementation</td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-medium text-gray-700">Leads</td>
              <td className="px-4 py-2 text-gray-600">SVRs, renewal conversations, strategic conversations</td>
              <td className="px-4 py-2 text-gray-600">Onboarding, assessment delivery, policy/training execution</td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-medium text-gray-700">Speaks to</td>
              <td className="px-4 py-2 text-gray-600">Business outcomes, risk posture, firm-level strategy</td>
              <td className="px-4 py-2 text-gray-600">Tasks completed, platform usage, technical findings</td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-medium text-gray-700">Success metric</td>
              <td className="px-4 py-2 text-gray-600">GRR, NRR, expansion, relationship depth</td>
              <td className="px-4 py-2 text-gray-600">Deliverable completion, platform engagement, client satisfaction</td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-medium text-gray-700">In the SVR</td>
              <td className="px-4 py-2 text-green-700 font-medium">Yes &mdash; owns the room</td>
              <td className="px-4 py-2 text-gray-600">No &mdash; feeds the RM with data and insights beforehand</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-sm text-gray-700 leading-relaxed">
        <strong>The critical handoff:</strong> CS does the work. The RM translates that work into
        business value. CS must brief the RM before every SVR &mdash; not with a task list, but with
        the 3&ndash;4 things that happened this quarter that the client should care about. The
        RM&apos;s job is to take that input and reframe it in the client&apos;s language.
      </p>
      <p className="mt-2 text-sm text-gray-700 italic">
        If CS is the engine, the RM is the translator and the driver.
      </p>

      {/* Two-Track Model */}
      <SectionHeading>The Two-Track Model: Enterprise vs. Long Tail</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed mb-4">
        Until formal client tiering is implemented, use this simple depth dial to right-size your
        SVR effort.
      </p>
      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-lg border-2 border-db-aqua bg-db-aqua/5 p-5">
          <p className="text-xs font-semibold text-db-aqua-dark uppercase tracking-wide">Enterprise</p>
          <p className="mt-1 font-semibold text-db-dark font-heading text-lg">&gt;$15k ARR &middot; ~800 clients</p>
          <div className="mt-3 text-sm text-gray-600 space-y-2">
            <p><strong>Format:</strong> Full 45&ndash;60 min live meeting (video or in-person)</p>
            <p><strong>Prep time:</strong> 45&ndash;60 min</p>
            <p><strong>Leave-behind:</strong> Formatted one-page summary sent within 48 hrs</p>
            <p><strong>Cadence:</strong> Quarterly SVR + monthly light touchpoint</p>
            <p><strong>Talk track:</strong> Full framework</p>
            <p><strong>Churn monitoring:</strong> Active &mdash; review signals monthly</p>
          </div>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-5">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Long Tail</p>
          <p className="mt-1 font-semibold text-db-dark font-heading text-lg">&lt;$15k ARR &middot; ~400 clients</p>
          <div className="mt-3 text-sm text-gray-600 space-y-2">
            <p><strong>Format:</strong> 30 min video or structured email summary</p>
            <p><strong>Prep time:</strong> 20&ndash;30 min</p>
            <p><strong>Leave-behind:</strong> Clean summary email within 48 hrs</p>
            <p><strong>Cadence:</strong> Quarterly SVR (may be async for lowest-engagement clients)</p>
            <p><strong>Talk track:</strong> Abbreviated: Score story + 2 recommendations + one strategic observation</p>
            <p><strong>Churn monitoring:</strong> Passive &mdash; flag triggers before renewal window</p>
          </div>
        </div>
      </div>

      {/* Part 1: Pre-Meeting Preparation */}
      <SectionHeading>Part 1: Pre-Meeting Preparation</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed mb-2">
        A great SVR is <strong>80% preparation</strong>. The meeting itself is the output of the
        work you did before walking in.
      </p>

      <FlowDiagram steps={['Brief with CS', 'Pull Your Data', 'Interpret the Data', 'Complete Prep Sheet']} />

      <SubSection icon="1" title="Step 1 &mdash; Brief with CS (48&ndash;72 hours before)">
        <p>
          Before you pull any data, talk to the CS owner for this account. Ask them four questions:
        </p>
        <ol className="list-decimal ml-5 space-y-2 mt-2">
          <li>What did we actually deliver this quarter that the client may not have noticed or appreciated?</li>
          <li>Is there anything the client is struggling with or not using that we should address?</li>
          <li>Any friction, complaints, or moments of delight in the last 90 days?</li>
          <li>What&apos;s the one thing you&apos;d want me to make sure the client understands about the value we&apos;ve delivered?</li>
        </ol>
        <p className="mt-3">
          Write down their answers. These become the raw material for your value story. Your job is
          not to repeat what CS tells you &mdash; it&apos;s to <strong>translate it</strong>.
        </p>
      </SubSection>

      <SubSection icon="2" title="Step 2 &mdash; Pull Your Data (Manual Checklist)">
        <p className="font-medium text-db-dark">From the Drawbridge Platform:</p>
        <ul className="list-disc ml-5 space-y-1 mt-1">
          <li>Current Cyber Score + prior quarter score</li>
          <li>Score trend: improving / flat / declining</li>
          <li>Number of outstanding CRA items (open findings)</li>
          <li>Number of remediated items since last SVR</li>
          <li>Remediation velocity: are items getting closed, or is the backlog growing?</li>
          <li>Items open 60+ days with no activity &mdash; flag these specifically</li>
          <li>Services purchased vs. actively used (Policy module, Training module, Vulnerability scanning, etc.)</li>
        </ul>
        <p className="mt-3 font-medium text-db-dark">From Salesforce:</p>
        <ul className="list-disc ml-5 space-y-1 mt-1">
          <li>Open next steps from prior meeting &mdash; completed or not?</li>
          <li>Support tickets or escalations since last SVR</li>
          <li>Contract: renewal date, current ARR, products on contract</li>
          <li>Expansion history: have they grown with Drawbridge or stayed flat?</li>
          <li>Prior call notes: what has this client said matters to them?</li>
        </ul>
        <p className="mt-3 font-medium text-db-dark">External Business Intelligence:</p>
        <ul className="list-disc ml-5 space-y-1 mt-1">
          <li>Any news about the firm: fundraise, new fund, leadership change, AUM growth</li>
          <li>Regulatory developments relevant to their firm type (SEC exam activity, new rules)</li>
          <li>Cybersecurity incidents in the alts peer group &mdash; breach news is a conversation starter</li>
        </ul>
      </SubSection>

      <SubSection icon="3" title="Step 3 &mdash; Interpret Before You Walk In">
        <p>
          Pulling data is table stakes. <strong>Interpreting it</strong> is the job. Answer these
          before the meeting:
        </p>
        <p className="mt-3 font-medium text-db-dark">On the score and remediation:</p>
        <ul className="list-disc ml-5 space-y-1 mt-1">
          <li>Is the score moving? If yes, what drove it &mdash; and can you name it specifically?</li>
          <li>If flat or declining, do you know why? Client-side inaction or a Drawbridge delivery gap?</li>
          <li>What are the 2&ndash;3 remediations with the biggest score impact if completed this quarter?</li>
          <li>Are there items open because the client hasn&apos;t prioritized them? That&apos;s a conversation to have.</li>
        </ul>
        <p className="mt-3 font-medium text-db-dark">On service utilization:</p>
        <ul className="list-disc ml-5 space-y-1 mt-1">
          <li>Are they getting value from everything they&apos;re paying for?</li>
          <li>Unused services are not neutral &mdash; they are a <strong>pre-churn signal</strong>. Identify and plan to address any.</li>
        </ul>
        <p className="mt-3 font-medium text-db-dark">On the business:</p>
        <ul className="list-disc ml-5 space-y-1 mt-1">
          <li>What phase of the client journey are they in? (Get Started &rarr; Build Foundation &rarr; Strengthen &rarr; Differentiate)</li>
          <li>What outcome matters most to this client right now?</li>
          <li>Is there a natural &ldquo;bridge&rdquo; to the next phase worth introducing this quarter?</li>
        </ul>
      </SubSection>

      <SubSection icon="4" title="Step 4 &mdash; Complete Your SVR Prep Sheet">
        <p>
          Fill this out before every SVR. It should take 15&ndash;20 minutes once you have the data.
          <strong> If you can&apos;t complete it, you&apos;re not ready to run the meeting.</strong>
        </p>
        <div className="mt-3 rounded-lg border border-gray-200 bg-gray-50 p-4 text-xs font-mono space-y-2">
          <p><strong>CLIENT:</strong> _________________ &nbsp; <strong>DATE:</strong> _________________</p>
          <p><strong>RM:</strong> _________________ &nbsp; <strong>RENEWAL DATE:</strong> _____________ &nbsp; <strong>CURRENT ARR:</strong> _____________</p>
          <p><strong>TRACK:</strong> [ ] Enterprise &nbsp; [ ] Long Tail</p>
          <p><strong>SCORE:</strong> Current [&nbsp;&nbsp;] | Prior Quarter [&nbsp;&nbsp;] | Trend: [ &#8593; Rising ] [ &#8594; Flat ] [ &#8595; Declining ]</p>
          <p className="mt-2"><strong>PRIMARY OUTCOME THIS CLIENT CARES ABOUT (pick one):</strong></p>
          <p className="ml-2">[ ] Raise &amp; Retain Capital &nbsp; [ ] Navigate Regulatory Complexity &nbsp; [ ] Protect from Disruption</p>
          <p className="ml-2">[ ] Competitive Advantage &nbsp; [ ] Scale Without Headcount &nbsp; [ ] AI Readiness</p>
          <p className="mt-2"><strong>CLIENT PERSONA / WHO I&apos;M TALKING TO:</strong></p>
          <p className="ml-2">[ ] COO &mdash; wants cyber off their plate, values peace of mind and efficiency</p>
          <p className="ml-2">[ ] CCO &mdash; focused on regulatory readiness, exam risk, documentation</p>
          <p className="ml-2">[ ] Founder/CEO &mdash; cares about firm reputation, LP relationships, capital</p>
          <p className="mt-2"><strong>CHURN SIGNALS PRESENT:</strong> [ ] None &nbsp; [ ] 1 &nbsp; [ ] 2+</p>
          <p className="mt-2"><strong>THE VALUE STORY I&apos;M TELLING TODAY:</strong></p>
          <p className="ml-2 italic">&ldquo;Since we last spoke, [specific progress]. The biggest driver was [specific action]. This matters for your business because [outcome connection]. The next thing that will have the most impact is [recommendation], and here&apos;s why now...&rdquo;</p>
          <p className="mt-2"><strong>3 THINGS I WANT TO COVER:</strong></p>
          <p className="ml-2">1. _______________ &nbsp; 2. _______________ &nbsp; 3. _______________</p>
          <p><strong>STRATEGIC BRIDGE CONVERSATION:</strong> _______________</p>
          <p><strong>MY ONE ASK AT THE END OF THIS MEETING:</strong> _______________</p>
        </div>
      </SubSection>

      {/* Churn Signal Check */}
      <SubSection icon="&#9888;&#65039;" title="Churn Signal Check">
        <p>Be honest with yourself. Check which signals are present:</p>
        <div className="mt-2 grid grid-cols-2 gap-2">
          {[
            'Score flat/declining 2+ quarters',
            'Unused services',
            'No remediation activity in 60+ days',
            'Primary contact has changed',
            'Low or declining platform engagement',
            'Friction or escalations in recent history',
            'No response to recent outreach',
          ].map((signal) => (
            <div key={signal} className="flex items-center gap-2 rounded border border-gray-200 bg-white p-2">
              <div className="h-4 w-4 rounded border border-gray-300 shrink-0" />
              <span className="text-xs text-gray-700">{signal}</span>
            </div>
          ))}
        </div>
        <p className="mt-3 text-red-700 font-medium">
          If you checked 2 or more, this is a retention-risk account. Adjust your SVR accordingly
          &mdash; your primary goal is to re-establish value and rebuild engagement, not advance the
          relationship.
        </p>
      </SubSection>

      {/* Part 2: Value Translation Guide */}
      <SectionHeading>Part 2: The CS &rarr; RM Value Translation Guide</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed mb-4">
        This is how you take what CS delivers and turn it into a business conversation.{' '}
        <strong>Do not read task lists to clients.</strong> Translate everything.
      </p>
      <div className="rounded-md border border-gray-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-3 py-2 text-left font-medium text-gray-600 w-1/5">CS delivers...</th>
              <th className="px-3 py-2 text-left font-medium text-gray-600 w-3/5">RM says to the client...</th>
              <th className="px-3 py-2 text-left font-medium text-gray-600 w-1/5">Outcome</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[
              {
                cs: 'Completed cyber risk assessment',
                rm: '"We now have a clear, documented baseline of where your program stands. That\'s what allocators and regulators are asking for — and you have it."',
                outcome: 'Capital confidence / Regulatory readiness',
              },
              {
                cs: 'Score improved X points',
                rm: '"Your score moved from [X] to [Y] this quarter. That means you\'re in stronger shape for LP due diligence and a more defensible position if the SEC comes calling."',
                outcome: 'Capital confidence / Competitive advantage',
              },
              {
                cs: 'Policies written / updated',
                rm: '"Your cybersecurity policies are now current and board-approved. That\'s the first thing an SEC examiner asks for. You hand them a signed document — that conversation is over before it starts."',
                outcome: 'Regulatory readiness',
              },
              {
                cs: 'Phishing simulation completed',
                rm: '"Your team\'s click rate dropped from [X]% to [Y]%. That\'s real, measurable risk reduction — and a data point you can cite to any LP who asks about your employee security program."',
                outcome: 'Protection from disruption',
              },
              {
                cs: 'Training completion rate improved',
                rm: '"You\'re now at [X]% completion on security awareness training. It\'s harder to breach a trained team, and it\'s a credible answer when allocators ask about your human risk controls."',
                outcome: 'Protection / Capital confidence',
              },
              {
                cs: 'DDQs responded to',
                rm: '"We turned around [X] DDQs this quarter with no follow-up requests from allocators. That\'s the DDQ process working the way it should — low friction, high credibility."',
                outcome: 'Capital confidence',
              },
              {
                cs: 'Vulnerability scan completed',
                rm: '"We identified [X] vulnerabilities before anyone else did. Finding them on your terms is always better than someone else finding them first."',
                outcome: 'Protection from disruption',
              },
              {
                cs: 'IR plan documented',
                rm: '"Your incident response plan is documented and roles are assigned. If something happens at 2am, your team knows exactly what to do and who to call."',
                outcome: 'Protection / Regulatory readiness',
              },
              {
                cs: 'Tabletop exercise completed',
                rm: '"You ran a live simulation of a real cyber incident with your leadership team. You found two gaps in your plan before they became real problems."',
                outcome: 'Protection from disruption',
              },
              {
                cs: 'Vendor risk assessment done',
                rm: '"We reviewed your third-party vendors against your risk framework. This is increasingly a top allocator and regulatory priority — you\'re ahead of most firms your size on this."',
                outcome: 'Regulatory readiness / Competitive advantage',
              },
              {
                cs: 'Low training completion (flagging)',
                rm: '"Your training completion is at [X]% — that\'s a gap we need to close. It\'s a practical risk, and it\'s the kind of thing that comes up in DDQs and ODD reviews."',
                outcome: 'Protection / Capital confidence',
              },
              {
                cs: 'Unused policy module',
                rm: '"You have the policy module in your contract and we haven\'t activated it yet. I want to fix that before your renewal — you\'re paying for something that should be working for you."',
                outcome: 'Regulatory readiness / Retention',
              },
            ].map((row, i) => (
              <tr key={i}>
                <td className="px-3 py-2 text-gray-700 font-medium">{row.cs}</td>
                <td className="px-3 py-2 text-gray-600 italic text-xs">{row.rm}</td>
                <td className="px-3 py-2 text-gray-500 text-xs">{row.outcome}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Part 3: SVR Conversation Flow */}
      <SectionHeading>Part 3: The SVR Conversation Flow</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed mb-4">
        This is a guide, not a script. Adjust to the client. The goal is a <strong>business
        conversation</strong>, not a presentation.
      </p>

      <FlowDiagram steps={['Opening (5 min)', 'Score Story (10 min)', 'Value Story (10 min)', 'Forward Story (15 min)', 'Strategic (5-10 min)', 'Close (5 min)']} />

      <SubSection icon="&#128075;" title="Opening (5 min) &mdash; Anchor in Their World">
        <p>Start in their business, not yours. Always.</p>
        <div className="mt-2 rounded-md bg-db-aqua/10 border border-db-aqua/30 p-3">
          <p className="text-xs italic text-gray-700">
            &ldquo;Before I walk through what we&apos;ve been working on together, I want to check in
            on what&apos;s top of mind for you right now. Anything changed since we last spoke &mdash;
            new priorities, anything coming up on the fundraising or regulatory front?&rdquo;
          </p>
        </div>
        <p className="mt-3">
          Listen carefully. What they say here is intelligence &mdash; it tells you which outcomes to
          emphasize and whether your prepared agenda still fits. <strong>Adjust in real time.</strong>
        </p>
        <p className="mt-2">
          <strong>If meeting a new contact (sponsor change):</strong> Spend more time here. Rebuild
          the relationship before presenting any data.
        </p>
      </SubSection>

      <SubSection icon="&#128202;" title="Section 1: Where You Stand (10 min) &mdash; The Score Story">
        <p><strong>Tell a story. Do not read a dashboard.</strong></p>
        <div className="mt-3 grid grid-cols-2 gap-3">
          <div className="rounded-md border border-red-200 bg-red-50 p-3">
            <p className="text-xs font-semibold text-red-700 uppercase">Don&apos;t say</p>
            <p className="mt-1 text-xs text-red-600 italic">
              &ldquo;Your score is 74. You have 12 open items and 8 remediated.&rdquo;
            </p>
          </div>
          <div className="rounded-md border border-green-200 bg-green-50 p-3">
            <p className="text-xs font-semibold text-green-700 uppercase">Say instead</p>
            <p className="mt-1 text-xs text-green-600 italic">
              &ldquo;Your score moved from 68 to 74 this quarter &mdash; that&apos;s real progress.
              The biggest driver was [specific items]. You now have 12 things still open, and I want
              to walk you through the 2 or 3 that will have the most impact...&rdquo;
            </p>
          </div>
        </div>
        <p className="mt-3">Always connect the score to something tangible:</p>
        <ul className="list-disc ml-5 space-y-1 mt-1">
          <li><strong>Rising score:</strong> &ldquo;That&apos;s what your LPs and allocators are looking for in ODD. You&apos;re moving in the right direction.&rdquo;</li>
          <li><strong>Flat score:</strong> &ldquo;Your score hasn&apos;t moved much, and I want to be straight with you about why &mdash; and what we do about it.&rdquo;</li>
          <li><strong>Declining score:</strong> &ldquo;I want to address this directly. Here&apos;s what happened and here&apos;s the plan.&rdquo;</li>
        </ul>
        <p className="mt-3 text-gray-600 italic text-xs">
          Never hide a flat or declining score. Name it, own it, and come with a hypothesis and a
          path forward. Clients respect directness far more than polished spin.
        </p>
      </SubSection>

      <SubSection icon="&#128161;" title="Section 2: What We&apos;ve Done for You (10 min) &mdash; The Value Story">
        <p>
          This is where the CS &rarr; RM translation table does its work. Pick the 3&ndash;4 most
          meaningful things delivered this quarter and reframe every single one in outcome language.
        </p>
        <p className="mt-2 font-medium">The structure for each:</p>
        <ol className="list-decimal ml-5 space-y-1 mt-1">
          <li>What happened (one sentence, brief)</li>
          <li>Why it matters for their business (outcome language)</li>
          <li>Any proof point or measurable result</li>
        </ol>
        <p className="mt-3 text-gray-600 italic text-xs">
          The rule: If you can&apos;t connect a deliverable to a business outcome, don&apos;t lead
          with it. Find the connection first.
        </p>
        <div className="mt-3 rounded-md bg-orange-50 border border-orange-200 p-3">
          <p className="text-xs font-semibold text-orange-700 uppercase">Special case &mdash; the &ldquo;check the box&rdquo; client</p>
          <p className="mt-1 text-xs text-gray-700">
            If you know this client sees cyber as a compliance exercise, use that framing
            deliberately &mdash; then gently expand it. Validate, show the box has changed,
            then demonstrate with evidence.
          </p>
        </div>
      </SubSection>

      <SubSection icon="&#128640;" title="Section 3: What to Focus on Next (15 min) &mdash; The Forward Story">
        <p>
          This is the most important section. It is where the RM shifts from <strong>reporter to
          advisor</strong>.
        </p>
        <p className="mt-2">
          Arrive with a point of view. 2&ndash;3 prioritized recommendations, not a list of
          everything that could be done. The client&apos;s job is to make decisions &mdash; your job
          is to make those decisions easy.
        </p>
        <div className="mt-3 rounded-md bg-db-aqua/10 border border-db-aqua/30 p-3">
          <p className="text-xs italic text-gray-700">
            &ldquo;Based on where you are today, here&apos;s what I think you should prioritize in
            the next 90 days &mdash; and I&apos;ll tell you why each one matters for your business
            specifically.&rdquo;
          </p>
        </div>
        <p className="mt-3 font-medium">Prioritization logic &mdash; use this order:</p>
        <ol className="list-decimal ml-5 space-y-1 mt-1">
          <li>What has the highest impact on their Cyber Score?</li>
          <li>What is most relevant to something happening in their business right now?</li>
          <li>What closes a gap in services they&apos;re already paying for but not using?</li>
        </ol>
      </SubSection>

      <SubSection icon="&#127919;" title="Section 4: The Strategic Conversation (5&ndash;10 min) &mdash; Looking Ahead">
        <p>
          This is where you earn <strong>&ldquo;strategic partner&rdquo;</strong> and stop being a
          vendor. One forward-looking observation, connected to something happening in their
          business. This is <strong>not a pitch</strong>. It is a business observation that happens
          to connect to something Drawbridge can help with.
        </p>
        <div className="mt-3 rounded-md bg-db-aqua/10 border border-db-aqua/30 p-3">
          <p className="text-xs italic text-gray-700">
            &ldquo;I want to flag something that I&apos;ve been thinking about as it relates to your
            firm &mdash; it may or may not be on your radar, but I want to make sure we talk about
            it.&rdquo;
          </p>
        </div>
        <p className="mt-3 font-medium">Strategic bridges by client situation:</p>
        <div className="mt-2 space-y-2">
          {[
            { sit: 'Fundraising / new fund launch', talk: 'DDQs are getting more sophisticated. LPs are asking about AI governance specifically. Most firms don\'t have a good answer yet.' },
            { sit: 'Regulatory / exam risk', talk: 'The SEC has been specific about what they want to see this cycle — IR documentation, training records, current policies. Make sure they feel genuinely ready.' },
            { sit: 'Growth (new hires, fund, office)', talk: 'Every new person is a new access point — new credentials, new devices, a new target for phishing. Make sure the program scales with the firm.' },
            { sit: '"Check the box" low engagement', talk: 'Be direct — engagement is lower, the landscape has shifted, LPs asking more, SEC more prescriptive. Risk of treating cyber as checkbox has gone up.' },
            { sit: 'AI governance (universal)', talk: 'Coming up everywhere — LP DDQs, SEC exam priorities. If the team uses AI tools without a documented policy, that\'s a gap that matters.' },
          ].map((item) => (
            <div key={item.sit} className="rounded border border-gray-200 bg-white p-3">
              <p className="text-xs font-semibold text-db-dark">{item.sit}</p>
              <p className="mt-1 text-xs text-gray-600">{item.talk}</p>
            </div>
          ))}
        </div>
      </SubSection>

      <SubSection icon="&#9989;" title="Close (5 min) &mdash; The Ask and the Recap">
        <p>Every SVR ends with clarity: what was decided, who owns what, and what happens next.</p>
        <ol className="list-decimal ml-5 space-y-2 mt-2">
          <li>
            <strong>Recap in their words, not yours:</strong>{' '}
            <span className="italic text-gray-600">&ldquo;So to recap &mdash; your score is trending up, we got [X] done this quarter, and the two priorities for the next 90 days are [Y and Z]. Does that feel right to you?&rdquo;</span>
          </li>
          <li>
            <strong>Assign clear owners and dates:</strong>{' '}
            <span className="italic text-gray-600">&ldquo;On our side, [CS/RM name] will [specific action] by [date]. On your side, the one thing that would have the biggest impact is [specific action].&rdquo;</span>
          </li>
          <li>
            <strong>Make one ask &mdash; your strategic bridge moment:</strong>{' '}
            <span className="italic text-gray-600">&ldquo;One thing I&apos;d love to understand better &mdash; you mentioned [thing they said]. I&apos;d like to spend 20 minutes on that specifically before our next SVR. Can we put 30 minutes on the calendar?&rdquo;</span>
          </li>
        </ol>
      </SubSection>

      {/* Part 4: Churn Early Warning */}
      <SectionHeading>Part 4: Churn Early Warning &mdash; Between SVRs</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed mb-4">
        The SVR is the quarterly anchor. <strong>GRR is protected in between.</strong> These signals
        should trigger outreach &mdash; don&apos;t wait for the next scheduled meeting.
      </p>
      <div className="rounded-md border border-gray-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-3 py-2 text-left font-medium text-gray-600">Signal</th>
              <th className="px-3 py-2 text-left font-medium text-gray-600">What it likely means</th>
              <th className="px-3 py-2 text-left font-medium text-gray-600">What to do</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[
              { signal: 'Score flat/declining 2+ quarters', means: 'Stuck, disengaged, or something blocking progress', action: 'Reach out with a specific hypothesis and a plan — not a generic check-in' },
              { signal: 'Services purchased but unused', means: 'Value not being realized — pre-churn signal', action: 'Proactive reactivation: "I noticed X hasn\'t been activated — let\'s fix that before renewal"' },
              { signal: 'No remediation activity 60+ days', means: 'Client not executing — capacity issue or disengagement', action: 'Offer to remove the blocker; find out who owns remediation on their side' },
              { signal: 'Primary contact changed', means: 'Relationship at risk; new contact doesn\'t know Drawbridge\'s value', action: 'Fast re-introduction meeting — start the value story over with the new stakeholder' },
              { signal: 'Low platform login activity', means: 'Out of sight, out of mind', action: 'Bring them back in with a specific insight: "Something came up in your data I want to walk you through"' },
              { signal: 'No response to outreach', means: 'Passive disengagement — the most dangerous kind', action: 'Escalate internally; consider an executive touchpoint from RM leadership' },
              { signal: 'Upcoming renewal with no expansion', means: 'Renewal at risk if value hasn\'t been demonstrated', action: 'Accelerate the SVR; lead with concrete ROI framing before the renewal conversation starts' },
            ].map((row, i) => (
              <tr key={i}>
                <td className="px-3 py-2 text-gray-700 font-medium text-xs">{row.signal}</td>
                <td className="px-3 py-2 text-gray-600 text-xs">{row.means}</td>
                <td className="px-3 py-2 text-gray-600 text-xs">{row.action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-red-700 font-medium">
        For accounts with 2+ signals: Flag immediately. Assign a recovery plan. The goal before
        renewal is to re-establish at least one concrete proof point of value.
      </p>

      {/* Part 5: The Leave-Behind */}
      <SectionHeading>Part 5: The Leave-Behind</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed mb-4">
        Sent within 24&ndash;48 hours of every SVR. One page. Written so the client can forward it
        to their leadership team without editing it.
      </p>
      <div className="rounded-lg border border-gray-200 bg-gray-50 p-5 text-sm space-y-3">
        <div className="border-b border-gray-300 pb-2">
          <p className="font-bold text-db-dark font-heading">Drawbridge | Strategic Value Review</p>
          <p className="text-xs text-gray-500">[Client Name] | [Date] | Prepared by [RM Name]</p>
        </div>
        <div>
          <p className="font-semibold text-gray-700 text-xs uppercase tracking-wide">Where you stand</p>
          <p className="text-xs text-gray-600 mt-1">Your Cyber Score is [X], [up X points / flat / down X points] from last quarter. [One sentence on what&apos;s driving it.]</p>
        </div>
        <div>
          <p className="font-semibold text-gray-700 text-xs uppercase tracking-wide">What we accomplished together this quarter</p>
          <ul className="text-xs text-gray-600 mt-1 list-disc ml-4 space-y-1">
            <li>[Outcome-language bullet &mdash; not task language]</li>
            <li>[Outcome-language bullet]</li>
            <li>[Outcome-language bullet]</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-gray-700 text-xs uppercase tracking-wide">What we&apos;re focused on next (next 90 days)</p>
          <ul className="text-xs text-gray-600 mt-1 list-disc ml-4 space-y-1">
            <li>[Priority 1 &mdash; with brief rationale]</li>
            <li>[Priority 2 &mdash; with brief rationale]</li>
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <p className="font-semibold text-gray-700 text-xs uppercase tracking-wide">Your action items</p>
            <p className="text-xs text-gray-600 mt-1">[Action] | Owner: [Name] | Target: [Date]</p>
          </div>
          <div>
            <p className="font-semibold text-gray-700 text-xs uppercase tracking-wide">Our action items</p>
            <p className="text-xs text-gray-600 mt-1">[Action] | Owner: [DB Name] | Target: [Date]</p>
          </div>
        </div>
        <div className="border-t border-gray-300 pt-2">
          <p className="font-semibold text-gray-700 text-xs uppercase tracking-wide">On our radar for your business</p>
          <p className="text-xs text-gray-600 mt-1">[The strategic observation from the SVR &mdash; one sentence, forward-looking]</p>
          <p className="text-xs text-gray-400 mt-2">Next SVR: [Proposed date] | Questions? [RM email]</p>
        </div>
      </div>

      {/* Part 6: Outcome Language Quick Reference */}
      <SectionHeading>Part 6: Outcome Language Quick Reference</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed mb-4">
        When in doubt, use this to translate from product/task language to business language.
      </p>
      <div className="rounded-md border border-gray-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-3 py-2 text-left font-medium text-gray-600">Situation</th>
              <th className="px-3 py-2 text-left font-medium text-gray-600">Business outcome</th>
              <th className="px-3 py-2 text-left font-medium text-gray-600">Say it like this</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[
              { sit: 'Rising Cyber Score', outcome: 'Capital confidence / Competitive positioning', say: '"Your program is getting stronger — that\'s what LPs and allocators are looking for in ODD."' },
              { sit: 'Completed, current policies', outcome: 'Regulatory readiness', say: '"Board-approved policies on record — that\'s the first thing an SEC examiner asks for."' },
              { sit: 'High training completion', outcome: 'Protection from disruption', say: '"Your team is a harder target than they were six months ago. That\'s real, measurable risk reduction."' },
              { sit: 'Clean DDQ cycles', outcome: 'Capital confidence', say: '"No follow-up requests from allocators — that\'s the fundraising process working the way it should."' },
              { sit: 'Active vulnerability scanning', outcome: 'Protection / Scale without headcount', say: '"We find the gaps before attackers do — without you needing to hire anyone to manage it."' },
              { sit: 'Low remediation velocity', outcome: 'Risk exposure / Missed value', say: '"This is the gap between where your score is and where it could be. Let\'s talk about what\'s blocking it."' },
              { sit: 'Unused services', outcome: 'Retention risk / Opportunity', say: '"You\'re paying for something that should be working for you. Let\'s fix that this quarter."' },
              { sit: 'Score improvement over time', outcome: 'All outcomes', say: '"You started at [X]. You\'re at [Y] today. That\'s the program maturing — and it shows."' },
            ].map((row, i) => (
              <tr key={i}>
                <td className="px-3 py-2 text-gray-700 font-medium text-xs">{row.sit}</td>
                <td className="px-3 py-2 text-gray-600 text-xs">{row.outcome}</td>
                <td className="px-3 py-2 text-gray-600 italic text-xs">{row.say}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Appendix A */}
      <SectionHeading>Appendix A: The &ldquo;Check the Box&rdquo; Client Playbook</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed mb-3">
        Some clients genuinely believe cyber is a compliance exercise. This is your most common
        re-engagement challenge. <strong>Do not argue with the framing &mdash; redirect it.</strong>
      </p>
      <div className="grid grid-cols-4 gap-3 mb-4">
        {[
          { step: '1', label: 'Validate their perspective', desc: 'Don\'t lecture' },
          { step: '2', label: 'Show the box has changed', desc: 'Landscape shift' },
          { step: '3', label: 'Connect to their actual concerns', desc: 'Capital, regulators, reputation' },
          { step: '4', label: 'Make it concrete and specific', desc: 'Their firm, their data' },
        ].map((s) => (
          <div key={s.step} className="rounded-lg border border-gray-200 bg-white p-3 text-center">
            <div className="mx-auto h-8 w-8 rounded-full bg-db-aqua/20 flex items-center justify-center text-sm font-bold text-db-dark">{s.step}</div>
            <p className="mt-2 text-xs font-semibold text-db-dark">{s.label}</p>
            <p className="mt-1 text-[11px] text-gray-500">{s.desc}</p>
          </div>
        ))}
      </div>
      <div className="rounded-md bg-db-aqua/10 border border-db-aqua/30 p-4">
        <p className="text-xs font-semibold text-db-aqua-dark uppercase mb-1">Talk track</p>
        <p className="text-xs text-gray-700 italic leading-relaxed">
          &ldquo;I get it &mdash; cyber can feel like a compliance exercise, and for a long time
          that&apos;s mostly what it was. What&apos;s changed is that the box is harder to check now,
          and the stakes are higher if you check it wrong. LP questionnaires are more specific. SEC
          exams are more technical. And when a peer firm gets breached, allocators start asking harder
          questions across the board. None of that means you need to become a cybersecurity expert
          &mdash; that&apos;s our job. But it does mean we want to make sure your program is genuinely
          solid, not just documented.&rdquo;
        </p>
      </div>

      {/* Appendix B */}
      <SectionHeading>Appendix B: SVR Conversation Starters by Situation</SectionHeading>
      <div className="space-y-3">
        {[
          { sit: 'Client in active fundraise', talk: '"With a fundraise underway, how are your LPs engaging on cybersecurity? Are you seeing more specific ODD questions than you were a year ago?"' },
          { sit: 'Peer firm had a breach', talk: '"You may have seen that a firm similar to yours recently had a breach. I wanted to make sure we talked about what that means for your posture — not to alarm you, but so you have a clear answer if your LPs bring it up."' },
          { sit: 'Regulatory exam anticipated', talk: '"Given what the SEC has been prioritizing in exams this cycle, I want to make sure you feel genuinely ready — not just document-ready, but actually ready."' },
          { sit: 'Firm is growing', talk: '"Growth changes your risk profile — more people, more vendors, more access points. I want to make sure your program is scaling with your business, not lagging behind it."' },
          { sit: 'Unused services', talk: '"I want to be straight with you — you\'re paying for [X] and we haven\'t put it to work yet. That\'s not acceptable. Let\'s fix this this quarter."' },
          { sit: 'New contact / sponsor change', talk: '"Since you\'re newer to working with us, I want to start by understanding what matters most to you in this engagement. What does success look like from your seat?"' },
          { sit: 'Low engagement / check the box', talk: '"I want to flag something directly — your engagement with the platform has been lower recently. I want to make sure you\'re getting real value from this, not just a line item."' },
        ].map((item) => (
          <div key={item.sit} className="rounded-lg border border-gray-200 bg-white p-4">
            <p className="text-sm font-semibold text-db-dark">{item.sit}</p>
            <p className="mt-1 text-xs text-gray-600 italic">{item.talk}</p>
          </div>
        ))}
      </div>

      <DrawbridgeAngle>
        <p>
          The SVR is where Drawbridge earns the right to be called a partner &mdash; not just a
          vendor. When done well, every SVR re-anchors the client&apos;s perception of value, plants
          expansion seeds naturally, and makes the renewal conversation a formality. The RM who
          masters the SVR masters their book of business.
        </p>
      </DrawbridgeAngle>
    </>
  );
}
