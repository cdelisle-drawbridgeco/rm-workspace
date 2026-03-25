'use client';

import React from 'react';
import {
  HeroSection,
  SectionHeading,
  SubSection,
  DrawbridgeAngle,
  LastUpdated,
} from '../../components/shared-ui';

export default function ClientEngagement() {
  return (
    <>
      <HeroSection
        icon="🤝"
        title="Client Engagement Process"
        subtitle="How to build the relationship depth that makes renewals easier — cadence, contact strategy, outreach quality, and Salesforce logging."
      />
      <LastUpdated date="March 2026" />

      {/* Why This Matters */}
      <SectionHeading>Why Consistent Engagement Matters</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed">
        Every interaction you have with a client is a brand moment for Drawbridge. The way you show
        up — how informed you are, how proactively you share relevant intelligence, how well you
        understand their business — is how clients form their opinion of Drawbridge as a firm. You
        are not just managing an account. You are the face of the brand.
      </p>
      <p className="mt-3 text-sm text-gray-700 leading-relaxed">
        The goal of consistent engagement is to earn the title of <strong>trusted advisor</strong> —
        not vendor. A vendor delivers services. A trusted advisor anticipates problems, brings
        perspectives the client hasn&apos;t asked for, and becomes part of how the firm thinks about
        its business. That status is not granted at contract signing. It&apos;s built interaction by
        interaction, over months.
      </p>
      <p className="mt-3 text-sm text-gray-700 leading-relaxed">
        To be seen as a thought leader in cybersecurity for alternative asset management — someone
        whose calls get picked up, whose emails get read, whose perspective gets shared internally —
        requires showing up with something worth saying on a regular basis. That reputation compounds
        over time. It also makes renewals dramatically easier, because the client already knows why
        Drawbridge matters.
      </p>

      {/* Quarterly Is Not Enough */}
      <div className="mt-4 rounded-lg border-l-4 border-db-orange bg-orange-50 p-4">
        <p className="text-sm font-semibold text-db-dark">Quarterly cadence keeps you in vendor territory.</p>
        <p className="mt-2 text-sm text-gray-700">
          If a client hears from you four times a year — typically tied to a deliverable or a renewal
          conversation — you haven&apos;t built a relationship. You&apos;ve established a billing cycle.
          At that frequency, clients don&apos;t think of you as someone they trust with strategic
          questions. They think of you as someone they hear from when something needs to get done.
        </p>
        <p className="mt-2 text-sm text-gray-700">
          Trusted advisors show up between the milestones. They share something relevant without
          being asked. They know what&apos;s happening at the firm and bring context that makes the
          client&apos;s job easier. That can&apos;t happen on four touches a year — it requires a
          consistent, proactive cadence that keeps you embedded in how the client thinks about their
          security program.
        </p>
      </div>

      {/* Impact on Renewals */}
      <div className="mt-4 rounded-lg border border-db-aqua/30 bg-db-aqua/5 p-4">
        <p className="text-sm font-semibold text-db-dark">Consistent engagement is what makes renewals easy.</p>
        <p className="mt-2 text-sm text-gray-700">
          When clients hear from you monthly — or more — renewal conversations stop feeling like a
          negotiation and start feeling like a natural next step. There&apos;s no cold outreach, no
          scramble to remind them what you&apos;ve done, no moment where they wonder why you&apos;re
          suddenly calling. You&apos;re already in a conversation. Starting the renewal early becomes
          straightforward because the relationship is warm enough to support it.
        </p>
        <p className="mt-2 text-sm text-gray-700">
          Consistent value demonstration flips the dynamic entirely. When a client has seen — through
          regular touchpoints — exactly how Drawbridge is protecting them, closing gaps, and keeping
          them ahead of regulatory exposure, the contract extension is an afterthought. They&apos;re
          not asking themselves whether you&apos;re worth it. They already know. The goal is to never
          reach a renewal conversation where you&apos;re building the case from scratch.
        </p>
      </div>

      {/* Weekly Cadence Goal */}
      <SectionHeading>The Weekly Cadence Goal</SectionHeading>
      <div className="rounded-lg border border-db-aqua/30 bg-db-aqua/5 p-4">
        <p className="text-sm font-semibold text-db-dark">
          Target: 20 qualifying client interactions per week.
        </p>
        <p className="mt-1 text-sm text-gray-700">
          With a typical book of ~100 accounts, 20 interactions per week means you&apos;re touching
          every client at least once a month. That&apos;s the minimum frequency to start building
          real relationship depth — and to catch risk signals before they become churn signals.
        </p>
      </div>
      <p className="mt-3 text-sm text-gray-700 leading-relaxed">
        Monthly touchpoints are the floor, not the goal. The clients where you build the strongest
        relationships — where you become someone they call proactively — are the ones you engage
        more often, more substantively, and across multiple tiers of the firm. Use the 20-per-week
        target to ensure no account goes dark, and let judgment drive where you invest additional depth.
      </p>

      {/* What Counts */}
      <SubSection icon="✅" title="What Counts as a Qualifying Interaction">
        <p>
          Not every email counts. A qualifying interaction is one where you&apos;re
          creating a touchpoint that the client would recognize as meaningful. There are four types:
        </p>
        <div className="mt-3 overflow-hidden rounded-lg border border-gray-200">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">Activity Type</th>
                <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">Description</th>
                <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">Examples</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr className="bg-white">
                <td className="px-4 py-3 font-medium text-db-dark align-top">Meeting / Call</td>
                <td className="px-4 py-3 text-gray-600 align-top">Scheduled live conversation — Teams calls and meetings that actually took place</td>
                <td className="px-4 py-3 text-gray-500 align-top">Quarterly review, scheduled check-in, renewal conversation, intro call</td>
              </tr>
              <tr className="bg-gray-50/50">
                <td className="px-4 py-3 font-medium text-db-dark align-top">Email Outreach</td>
                <td className="px-4 py-3 text-gray-600 align-top">Intentional, personalized email — not a blast or auto-notification</td>
                <td className="px-4 py-3 text-gray-500 align-top">Sharing a relevant article, following up on a deliverable, regulatory update with commentary</td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-3 font-medium text-db-dark align-top">Strategic Update</td>
                <td className="px-4 py-3 text-gray-600 align-top">Proactively sharing intelligence or context the client didn&apos;t ask for</td>
                <td className="px-4 py-3 text-gray-500 align-top">SEC exam prep note, threat advisory, new Drawbridge capability relevant to their situation</td>
              </tr>
              <tr className="bg-gray-50/50">
                <td className="px-4 py-3 font-medium text-db-dark align-top">Introduction / Expansion</td>
                <td className="px-4 py-3 text-gray-600 align-top">Connecting a client contact to someone new — either at Drawbridge or within their own firm</td>
                <td className="px-4 py-3 text-gray-500 align-top">Introducing a client to Chris or Eric, bringing a new stakeholder at the client into the relationship, facilitating a peer intro between clients</td>
              </tr>
            </tbody>
          </table>
        </div>
      </SubSection>

      {/* Who to Prioritize */}
      <SubSection icon="🎯" title="Who to Prioritize — The Three-Tier Contact Model">
        <p>
          Not all contacts are created equal. Each account should have representation across three
          tiers — and the goal is to make sure senior relationships don&apos;t depend entirely on
          whoever introduced you to the account.
        </p>
        <div className="mt-3 overflow-hidden rounded-lg border border-gray-200">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">Tier</th>
                <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">Who</th>
                <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">Why It Matters</th>
                <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">Cadence</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr className="bg-white">
                <td className="px-4 py-3 align-top">
                  <span className="inline-flex items-center rounded-full bg-db-aqua/15 px-2 py-0.5 text-xs font-semibold text-db-aqua-dark">Tier 1</span>
                </td>
                <td className="px-4 py-3 font-medium text-db-dark align-top">Executive sponsor (CFO, CCO, Managing Partner)</td>
                <td className="px-4 py-3 text-gray-600 align-top">This person controls budget and will ultimately make or break the renewal. If they only know Drawbridge through your day-to-day contact, the renewal is at risk.</td>
                <td className="px-4 py-3 text-gray-500 align-top">At minimum quarterly</td>
              </tr>
              <tr className="bg-gray-50/50">
                <td className="px-4 py-3 align-top">
                  <span className="inline-flex items-center rounded-full bg-blue-100 px-2 py-0.5 text-xs font-semibold text-blue-700">Tier 2</span>
                </td>
                <td className="px-4 py-3 font-medium text-db-dark align-top">Day-to-day champion (COO, CCO, IT lead, CTO)</td>
                <td className="px-4 py-3 text-gray-600 align-top">Your primary relationship — the person who receives deliverables, translates value to leadership, and advocates internally. Keep them informed and ahead of every initiative.</td>
                <td className="px-4 py-3 text-gray-500 align-top">Monthly or more frequently</td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-3 align-top">
                  <span className="inline-flex items-center rounded-full bg-gray-100 px-2 py-0.5 text-xs font-semibold text-gray-600">Tier 3</span>
                </td>
                <td className="px-4 py-3 font-medium text-db-dark align-top">Supporting contact (compliance analyst, IT staff, operations)</td>
                <td className="px-4 py-3 text-gray-600 align-top">Useful for delivery coordination and ground-level intelligence about what&apos;s actually happening at the firm. Don&apos;t anchor the whole relationship here.</td>
                <td className="px-4 py-3 text-gray-500 align-top">As needed for delivery</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-3 rounded-lg border border-amber-200 bg-amber-50 p-3">
          <p className="text-xs font-semibold text-amber-700">Building executive relationships you don&apos;t have yet</p>
          <p className="mt-1 text-xs text-gray-700">
            If you know who the executive sponsor should be but don&apos;t yet have a relationship
            with them, the first step is to get them into Salesforce correctly. Add them as a contact
            on the account, tag them as an executive sponsor, and use the Executive Sponsor notes
            field to document your plan for building that relationship — who the bridge is, what the
            right moment might be (a regulatory update, a new initiative, an intro from Chris or Eric),
            and where you are in the process. That keeps the gap visible and gives you something
            concrete to work toward, rather than leaving it as a vague intention.
          </p>
        </div>
      </SubSection>

      {/* Outreach Angles */}
      <SectionHeading>Outreach Angles — What to Say</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed">
        The hardest part of consistent engagement is having something worth saying. Here are the angles
        that tend to resonate — starting with the one that&apos;s opening the most doors right now.
      </p>
      <div className="mt-3 grid grid-cols-2 gap-3">
        <div className="rounded-lg border-2 border-db-aqua/40 bg-db-aqua/5 p-4">
          <p className="text-xs font-semibold text-db-aqua-dark uppercase tracking-wide">AI &amp; Cyber Risk — Primary Hook</p>
          <p className="mt-2 text-sm text-gray-700">
            Every client is trying to figure out how to use AI safely. This is the conversation that
            gets executives engaged — not just the compliance contact. Lead with what Drawbridge
            is seeing, what peers are doing, and how the risk profile is evolving.
          </p>
          <p className="mt-2 text-xs text-gray-500 italic">
            &ldquo;We&apos;re hearing from a lot of funds that their GPs are using ChatGPT before anyone has
            thought through the data exposure implications. Happy to share what we&apos;re seeing and
            what others are putting in place.&rdquo;
          </p>
        </div>
        <div className="space-y-2">
          <div className="rounded-md border border-gray-200 bg-gray-50 p-3">
            <p className="text-xs font-semibold text-db-dark">Regulatory Updates</p>
            <p className="mt-1 text-xs text-gray-600">SEC exam themes, Reg S-P amendments, DORA, new enforcement actions. Share with your context on what it means for them specifically.</p>
          </div>
          <div className="rounded-md border border-gray-200 bg-gray-50 p-3">
            <p className="text-xs font-semibold text-db-dark">Threat Intelligence</p>
            <p className="mt-1 text-xs text-gray-600">Relevant incidents in the alt asset space, vendor compromises, phishing campaigns targeting funds. Position Drawbridge as their early warning system.</p>
          </div>
          <div className="rounded-md border border-gray-200 bg-gray-50 p-3">
            <p className="text-xs font-semibold text-db-dark">Deliverable Milestones</p>
            <p className="mt-1 text-xs text-gray-600">When a scan completes, a CRA closes, or a training campaign wraps — use it as a reason to connect and translate what it means for their posture.</p>
          </div>
          <div className="rounded-md border border-gray-200 bg-gray-50 p-3">
            <p className="text-xs font-semibold text-db-dark">Peer Benchmarking</p>
            <p className="mt-1 text-xs text-gray-600">Clients care what peers are doing. &ldquo;Most funds your size are doing X&rdquo; is a powerful frame for both urgency and reassurance.</p>
          </div>
          <div className="rounded-md border border-db-aqua/20 bg-db-aqua/5 p-3">
            <p className="text-xs font-semibold text-db-aqua-dark">Introductions to Drawbridge Leadership</p>
            <p className="mt-1 text-xs text-gray-600">Offering to connect a client with Chris or Eric signals that the relationship matters beyond the transactional. Use this at key moments — ahead of renewal, when there&apos;s a strategic conversation to have, or to strengthen a Tier 1 relationship you&apos;re building.</p>
          </div>
        </div>
      </div>

      {/* Salesforce Logging */}
      <SectionHeading>Logging in Salesforce</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed">
        Salesforce is how we hold ourselves accountable to the engagement standard — and how leadership,
        CS, and the RM team keep a clean picture of account health across the book. Log the same day
        while context is fresh. It also protects you: if a situation escalates or a handoff happens,
        the log is your record of the relationship.
      </p>
      <p className="mt-2 text-sm text-gray-700 leading-relaxed">
        We cross-reference logs against email activity through Sturdy.ai to keep our data accurate
        enough to stand behind at the board level. This isn&apos;t about oversight — it&apos;s about
        making sure our engagement numbers reflect reality, not best-case memory.
      </p>

      <SubSection icon="📋" title="Required Fields — Client Touchpoint Object">
        <div className="overflow-hidden rounded-lg border border-gray-200">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">Field</th>
                <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">Options / Format</th>
                <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr className="bg-white">
                <td className="px-4 py-3 font-medium text-db-dark align-top">Activity Type</td>
                <td className="px-4 py-3 text-gray-600 align-top">Meeting / Call, Email Outreach, Strategic Update, Introduction / Expansion</td>
                <td className="px-4 py-3 text-gray-500 align-top">Pick the type that best describes the primary intent of the interaction</td>
              </tr>
              <tr className="bg-gray-50/50">
                <td className="px-4 py-3 font-medium text-db-dark align-top">Client Contact Name</td>
                <td className="px-4 py-3 text-gray-600 align-top">Lookup to Contact record</td>
                <td className="px-4 py-3 text-gray-500 align-top">The specific person you engaged — not the account</td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-3 font-medium text-db-dark align-top">Contact Tier</td>
                <td className="px-4 py-3 text-gray-600 align-top">Tier 1, Tier 2, Tier 3</td>
                <td className="px-4 py-3 text-gray-500 align-top">Auto-populated from the contact record if already set; override if needed</td>
              </tr>
              <tr className="bg-gray-50/50">
                <td className="px-4 py-3 font-medium text-db-dark align-top">Outreach Direction</td>
                <td className="px-4 py-3 text-gray-600 align-top">Inbound, Outbound</td>
                <td className="px-4 py-3 text-gray-500 align-top">Inbound = client reached out first. Outbound = you initiated.</td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-3 font-medium text-db-dark align-top">Path to Executive</td>
                <td className="px-4 py-3 text-gray-600 align-top">Yes / No / In Progress</td>
                <td className="px-4 py-3 text-gray-500 align-top">Was this interaction part of an intentional strategy to reach or strengthen a Tier 1 relationship?</td>
              </tr>
              <tr className="bg-gray-50/50">
                <td className="px-4 py-3 font-medium text-db-dark align-top">Notes</td>
                <td className="px-4 py-3 text-gray-600 align-top">Free text</td>
                <td className="px-4 py-3 text-gray-500 align-top">What was discussed, what was the client&apos;s reaction, what are the next steps. A few good sentences beats a long summary no one reads.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-3 rounded-lg border border-blue-200 bg-blue-50 p-3">
          <p className="text-xs font-semibold text-blue-700">Email interactions</p>
          <p className="mt-1 text-xs text-gray-700">
            You don&apos;t need to copy every email into Salesforce. Log the email as a touchpoint
            with a short note on what you sent and why. The goal is a record that a colleague
            could read and understand — not a transcript.
          </p>
        </div>
      </SubSection>

      {/* Weekly Rhythm */}
      <SectionHeading>Weekly Rhythm</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed">
        The 20-interaction target is easier to hit when you plan 1–2 weeks ahead rather than filling
        your week as you go. Scheduled meetings need lead time — which means your outreach queue
        should always be rolling forward, not reactive to whatever is in front of you today.
      </p>
      <div className="mt-3 grid grid-cols-3 gap-3">
        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Start of Week</p>
          <p className="mt-1 text-sm font-medium text-db-dark">Plan &amp; Schedule</p>
          <p className="mt-2 text-xs text-gray-600 leading-relaxed">
            Review your rolling 2-week outreach plan. Which accounts need a touch this week or next?
            Any meetings to schedule before your window closes? Prioritize accounts approaching
            renewal, with open items, or that have gone quiet.
          </p>
        </div>
        <div className="rounded-lg border border-db-aqua/30 bg-db-aqua/5 p-4">
          <p className="text-xs font-semibold text-db-aqua-dark uppercase tracking-wide">Mid-Week</p>
          <p className="mt-1 text-sm font-medium text-db-dark">Execute Outreach</p>
          <p className="mt-2 text-xs text-gray-600 leading-relaxed">
            Primary execution window. Calls, Teams meetings, emails, strategic shares. Aim to hit
            the bulk of your 20 interactions before Friday. Log same-day while context is fresh.
          </p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">End of Week</p>
          <p className="mt-1 text-sm font-medium text-db-dark">Wrap, Log &amp; Look Ahead</p>
          <p className="mt-2 text-xs text-gray-600 leading-relaxed">
            Catch up on any outstanding logging. Update your rolling plan for the next 1–2 weeks.
            Flag any account risks or open items for your weekly review.
          </p>
        </div>
      </div>
      <div className="mt-3 rounded-lg border border-blue-200 bg-blue-50 p-3">
        <p className="text-xs font-semibold text-blue-700">Rolling vs. reactive</p>
        <p className="mt-1 text-xs text-gray-700">
          If you wait until Monday to figure out who to contact that week, meetings won&apos;t get
          scheduled in time and email outreach fills the gap. The goal is a queue that&apos;s always
          populated 1–2 weeks out — so you&apos;re executing a plan, not improvising one.
        </p>
      </div>

      {/* What Good Looks Like */}
      <SubSection icon="⭐" title="What Good Looks Like">
        <p>
          Volume matters, but so does quality. Here&apos;s how to tell the difference between an
          interaction that builds the relationship and one that just checks a box:
        </p>
        <div className="mt-3 overflow-hidden rounded-lg border border-gray-200">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wide text-gray-500 w-1/2">Instead of…</th>
                <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wide text-gray-500 w-1/2">Try…</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr className="bg-white">
                <td className="px-4 py-3 text-gray-500 align-top">&ldquo;Just checking in — anything you need?&rdquo;</td>
                <td className="px-4 py-3 text-gray-700 align-top">Referencing something specific about their situation: an open item, an upcoming CRA, a regulatory update that applies to them</td>
              </tr>
              <tr className="bg-gray-50/50">
                <td className="px-4 py-3 text-gray-500 align-top">Sending a generic article or product announcement</td>
                <td className="px-4 py-3 text-gray-700 align-top">One sentence on why this is relevant to them specifically — SEC exam season, a new fund they&apos;re raising, a risk you&apos;ve discussed</td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-3 text-gray-500 align-top">Logging &ldquo;Email sent re: renewal&rdquo;</td>
                <td className="px-4 py-3 text-gray-700 align-top">Logging what you said, how they responded, and what the next step is — enough context that someone else could pick it up</td>
              </tr>
              <tr className="bg-gray-50/50">
                <td className="px-4 py-3 text-gray-500 align-top">Only engaging the day-to-day contact</td>
                <td className="px-4 py-3 text-gray-700 align-top">Using every deliverable milestone as an opportunity to brief a senior stakeholder — not just the person who received it</td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-3 text-gray-500 align-top">Waiting for the client to ask a question</td>
                <td className="px-4 py-3 text-gray-700 align-top">Proactively flagging something coming up — CRA timeline, training deadline, regulatory calendar — before they have to ask</td>
              </tr>
            </tbody>
          </table>
        </div>
      </SubSection>

      <DrawbridgeAngle>
        <p>
          Every client conversation is a chance to demonstrate that Drawbridge understands this
          industry at a depth no generalist firm can match. The RM who shows up with a perspective
          on how new SEC enforcement priorities affect a specific fund structure — or what GenAI
          adoption is doing to the risk profiles of firms raising LP capital — is building something
          that a competitor cannot easily replicate: a reputation as the firm that actually knows
          this space.
        </p>
        <p>
          The best outreach angle right now is AI: every firm is navigating GenAI risk without a
          clear framework, and executives want to talk about it. Use that as your door-opener — not
          just with your day-to-day contact, but with the CFOs and CCOs who control the budget and
          make the renewal decision. That is a thought leadership conversation, not a service call.
        </p>
        <p>
          When a client eventually does receive a competitive pitch, the relationship you have built
          at the executive level — based on twelve months of consistent, high-quality engagement —
          is what makes them say &ldquo;we&apos;re not switching.&rdquo; That kind of loyalty is
          earned by showing up like a trusted advisor long before the renewal conversation starts.
        </p>
      </DrawbridgeAngle>
    </>
  );
}
