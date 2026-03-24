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
        Renewals are won or lost long before the conversation about price happens. Clients who feel
        consistently supported, strategically advised, and connected to Drawbridge&apos;s value renew
        at higher rates and with less friction. Clients who only hear from us around renewal tend to
        treat it as a transaction — and transactions are easier to cancel.
      </p>
      <p className="mt-3 text-sm text-gray-700 leading-relaxed">
        The engagement cadence below isn&apos;t a compliance checklist — it&apos;s the activity pattern
        that correlates with strong retention. Think of it the same way you think about your forecast:
        a discipline that keeps you ahead of problems instead of reacting to them.
      </p>

      {/* Weekly Cadence Goal */}
      <SectionHeading>The Weekly Cadence Goal</SectionHeading>
      <div className="rounded-lg border border-db-aqua/30 bg-db-aqua/5 p-4">
        <p className="text-sm font-semibold text-db-dark">
          Target: 20 qualifying client interactions per week.
        </p>
        <p className="mt-1 text-sm text-gray-700">
          With a typical book of ~100 accounts, 20 interactions per week means you&apos;re touching
          every client at least once a month. That&apos;s the minimum frequency needed to stay ahead
          of risk signals and reinforce value before renewal conversations begin.
        </p>
      </div>
      <p className="mt-3 text-sm text-gray-700 leading-relaxed">
        This is a goal, not a ceiling. Accounts that are at risk, approaching renewal, or in the
        middle of a significant deliverable should get more attention. Use the 20-per-week target
        as a baseline to ensure no account goes dark — and let judgment drive where you spend
        additional time.
      </p>

      {/* What Counts */}
      <SubSection icon="✅" title="What Counts as a Qualifying Interaction">
        <p>
          Not every email or Slack message counts. A qualifying interaction is one where you&apos;re
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
                <td className="px-4 py-3 text-gray-600 align-top">Scheduled or unscheduled live conversation</td>
                <td className="px-4 py-3 text-gray-500 align-top">SVR, QBR, intro call, ad-hoc check-in, renewal conversation</td>
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
                <td className="px-4 py-3 text-gray-600 align-top">Connecting to a new stakeholder or broadening the relationship</td>
                <td className="px-4 py-3 text-gray-500 align-top">Intro to CFO or COO, connecting a client to the technical team, peer intro</td>
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
                <td className="px-4 py-3 font-medium text-db-dark align-top">Executive sponsor (CFO, COO, CRO, Managing Partner)</td>
                <td className="px-4 py-3 text-gray-600 align-top">This person controls budget and will ultimately make or break the renewal. If they only know Drawbridge through your day-to-day contact, the renewal is at risk.</td>
                <td className="px-4 py-3 text-gray-500 align-top">At minimum quarterly — every SVR</td>
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
          <p className="text-xs font-semibold text-amber-700">Path to Executive</p>
          <p className="mt-1 text-xs text-gray-700">
            For every account where you don&apos;t yet have a Tier 1 relationship, you should have an
            active plan for how to get there. Who is the bridge? What&apos;s the right moment — an SVR,
            a regulatory update, a new initiative? Log this in Salesforce and bring it to your 1:1.
            Executive access is too important to leave to chance.
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
        Building toward 20 interactions per week is easier when you build it into a consistent
        rhythm rather than sprinting on Fridays. Here&apos;s a cadence that works:
      </p>
      <div className="mt-3 grid grid-cols-5 gap-2">
        {[
          {
            day: 'Monday',
            focus: 'Plan the week',
            detail: 'Review your book. Identify which accounts need a touch this week. Queue outreach for Tue–Thu.',
            color: 'border-gray-200 bg-gray-50',
            labelColor: 'text-gray-500',
          },
          {
            day: 'Tuesday',
            focus: 'Outreach block',
            detail: 'Primary outreach day. Aim for 5–8 meaningful contacts — calls, emails, strategic shares.',
            color: 'border-db-aqua/30 bg-db-aqua/5',
            labelColor: 'text-db-aqua-dark',
          },
          {
            day: 'Wednesday',
            focus: 'Outreach + 1:1 prep',
            detail: 'Continue outreach. Afternoon: prep for Thursday 1:1 — update forecasts, flag risks, draft account notes.',
            color: 'border-db-aqua/30 bg-db-aqua/5',
            labelColor: 'text-db-aqua-dark',
          },
          {
            day: 'Thursday',
            focus: 'Outreach + 1:1',
            detail: '1:1 with your manager. Morning outreach before. Log everything same-day.',
            color: 'border-db-aqua/30 bg-db-aqua/5',
            labelColor: 'text-db-aqua-dark',
          },
          {
            day: 'Friday',
            focus: 'Wrap + log',
            detail: 'Catch-up logging, async follow-ups, pipeline review. Set yourself up for a strong Monday.',
            color: 'border-gray-200 bg-gray-50',
            labelColor: 'text-gray-500',
          },
        ].map(({ day, focus, detail, color, labelColor }) => (
          <div key={day} className={`rounded-lg border p-3 ${color}`}>
            <p className={`text-xs font-semibold uppercase tracking-wide ${labelColor}`}>{day}</p>
            <p className="mt-1 text-sm font-medium text-db-dark">{focus}</p>
            <p className="mt-1 text-xs text-gray-600 leading-relaxed">{detail}</p>
          </div>
        ))}
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
          Clients who feel genuinely advised — not just serviced — are far less likely to shop
          alternatives at renewal. The RM who knows the client&apos;s fund structure, regulatory
          exposure, and business pressures is not interchangeable.
        </p>
        <p>
          The best outreach angle right now is AI: every firm is navigating GenAI risk without a
          clear framework. Drawbridge has a perspective. Use it to get in front of executives who
          aren&apos;t currently in your contact list.
        </p>
        <p>
          When a client eventually does receive a competitive pitch, what you&apos;ve built at the
          executive level is what makes them say &ldquo;we&apos;re not switching.&rdquo; That
          relationship is built over 12 months of consistent, high-quality engagement — not the
          renewal call.
        </p>
      </DrawbridgeAngle>
    </>
  );
}
