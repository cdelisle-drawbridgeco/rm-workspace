'use client';

import React from 'react';
import {
  StatCard,
  SectionHeading,
  SubSection,
  HeroSection,
  DrawbridgeAngle,
  LastUpdated,
} from '../../components/shared-ui';

function OutcomeTag({ number, label }: { number: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-db-aqua/40 bg-db-aqua/10 px-2.5 py-1 text-xs font-medium text-db-aqua-dark">
      <span className="font-bold">O{number}</span>
      <span>{label}</span>
    </span>
  );
}

function IndicatorCard({
  name,
  description,
  talkingPoint,
}: {
  name: string;
  description: string;
  talkingPoint: string;
}) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white overflow-hidden">
      <div className="bg-db-dark px-4 py-2.5">
        <p className="text-xs font-semibold text-db-aqua">{name}</p>
      </div>
      <div className="p-4 space-y-3">
        <p className="text-xs text-gray-700 leading-relaxed">{description}</p>
        <div className="rounded border-l-4 border-db-aqua/50 bg-db-aqua/5 px-3 py-2">
          <p className="text-xs font-semibold text-db-aqua-dark mb-0.5">With your client</p>
          <p className="text-xs text-gray-600 italic">{talkingPoint}</p>
        </div>
      </div>
    </div>
  );
}

export default function TrendAnalysis() {
  return (
    <>
      <HeroSection
        icon="📊"
        title="Trend Analysis"
        subtitle="Turning historical CRA data into a client progress story — and a renewal conversation."
      />
      <LastUpdated date="April 1, 2026 at 9:00 AM" />

      {/* ── Stats Row ─────────────────────────────────────── */}
      <div className="mt-6 grid grid-cols-4 gap-4">
        <StatCard label="Years of CRA Data Now Powering Trend Analysis" value="2+" />
        <StatCard label="Key Indicators Tracked Over Time" value="5" />
        <StatCard label="Where to Find It in the Platform" value="Analytics" />
        <StatCard label="History Lost If a Client Leaves Drawbridge" value="All of it" />
      </div>

      {/* ── What Is Trend Analysis ─────────────────────────── */}
      <SectionHeading>What Is Trend Analysis?</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed">
        In 2024, Drawbridge released a suite of analytics features built on Cyber Risk Assessment
        data — giving clients a point-in-time view of their program through scoring and
        benchmarking. At the same time, we started storing that data with time series analysis in
        mind. We now have enough history to surface the next layer: <strong>how a client&apos;s
        program has changed over time.</strong>
      </p>
      <p className="text-sm text-gray-700 leading-relaxed mt-2">
        Trend Analysis lives under the <strong>Analytics</strong> menu in the platform. It shows
        five key indicators of program progress across historical CRAs — score trajectory, control
        growth, risk aging, and forecast accuracy. The data is produced automatically from the
        assessments Drawbridge has already been running.
      </p>
      <div className="mt-3 rounded-lg border-l-4 border-db-dark bg-db-dark/5 p-4">
        <p className="text-xs font-semibold text-db-dark uppercase tracking-wide mb-1">The framing shift</p>
        <p className="text-xs text-gray-700 leading-relaxed">
          Historically, Drawbridge deliverables have focused on what clients are <em>not</em> doing
          well. Trend Analysis flips that. Wherever possible, lead with what the client <em>is</em>{' '}
          doing well — the progress they&apos;ve made, the controls they&apos;ve added, the risks
          they&apos;ve addressed. Every client has a positive story in this data. Your job is to
          find it and bring it to the conversation.
        </p>
      </div>

      {/* ── Which Outcomes This Addresses ─────────────────── */}
      <SectionHeading>Which Outcomes This Addresses</SectionHeading>
      <div className="space-y-3">
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <div className="flex items-start gap-3">
            <OutcomeTag number="1" label="Raise & Retain Capital" />
            <div className="flex-1">
              <p className="text-xs font-semibold text-db-dark mb-1">Show LPs a program that&apos;s getting better</p>
              <p className="text-xs text-gray-600 leading-relaxed">
                Allocators want to see that a fund takes cybersecurity seriously — not just that
                they have a program, but that the program is improving. Trend Analysis gives clients
                a documented, data-backed record of progress that can be shared directly in ODD
                responses or LP reviews. A score trending up over three CRAs tells a materially
                different story than a point-in-time snapshot.
              </p>
              <p className="mt-2 text-xs text-gray-500 italic">
                &ldquo;Next time an LP asks about your security program, you can show them three years of improvement — not just where you are today.&rdquo;
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <div className="flex items-start gap-3">
            <OutcomeTag number="2" label="Navigate Regulatory Complexity" />
            <div className="flex-1">
              <p className="text-xs font-semibold text-db-dark mb-1">Demonstrate proactive improvement to examiners</p>
              <p className="text-xs text-gray-600 leading-relaxed">
                SEC examiners increasingly want to see not just what controls are in place, but
                evidence of a continuous improvement process. Trend Analysis provides exactly
                that — a timestamped record of how the program has evolved across assessments.
                For a client going into an exam, showing an upward score trajectory and declining
                open risks is a meaningful piece of evidence.
              </p>
              <p className="mt-2 text-xs text-gray-500 italic">
                &ldquo;If you&apos;re examined, you want to show the SEC a program that&apos;s actively improving — Trend Analysis is that evidence.&rdquo;
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <div className="flex items-start gap-3">
            <OutcomeTag number="4" label="Make Security a Competitive Advantage" />
            <div className="flex-1">
              <p className="text-xs font-semibold text-db-dark mb-1">Turn program progress into a differentiator</p>
              <p className="text-xs text-gray-600 leading-relaxed">
                For clients who have reached a strong score, Trend Analysis lets them demonstrate
                that achievement. For clients who have always maintained a strong program, it
                shows consistent diligence over time — not just a good score on any given day.
                Either way, it&apos;s a story that differentiates them from peers who can only
                show a point-in-time snapshot.
              </p>
              <p className="mt-2 text-xs text-gray-500 italic">
                &ldquo;You&apos;ve been running a strong program. Now you can actually show that to the people who matter.&rdquo;
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <div className="flex items-start gap-3">
            <OutcomeTag number="3" label="Protect the Firm from Disruption" />
            <div className="flex-1">
              <p className="text-xs font-semibold text-db-dark mb-1">Surface long-aging risks before they become incidents</p>
              <p className="text-xs text-gray-600 leading-relaxed">
                The Age of Risks indicator flags how many risks have been left unaddressed for
                over two years. This is a direct operational risk conversation — risks that have
                sat unaddressed aren&apos;t just a score problem, they&apos;re a real exposure.
                Used carefully, this indicator can refocus a client on remediation without being
                punitive about it.
              </p>
              <p className="mt-2 text-xs text-gray-500 italic">
                &ldquo;You have 20 open risks today — but 10 of those have been sitting for over two years. Let&apos;s talk about what it would take to close them.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── The Five Indicators ────────────────────────────── */}
      <SectionHeading>The Five Indicators</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed">
        Each indicator tells a different part of the program story. Know what each one shows
        so you can lead with the indicators that are most positive for each client.
      </p>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <IndicatorCard
          name="Score Change"
          description="Tracks the client's score across their last three CRAs and plots the forecasted score going forward. The most direct measure of overall program trajectory."
          talkingPoint='"Your score has moved from X to Y over three assessments — and your forecasted score puts you on track for Z. That&apos;s a story worth sharing."'
        />
        <IndicatorCard
          name="Actual vs. Forecast"
          description="Compares the score the client forecasted in their last CRA against what they actually achieved — alongside their current score and forward forecast. Shows whether clients are hitting their own goals."
          talkingPoint='"You forecasted X last year and hit Y. That&apos;s a credibility point — it shows your improvement plan is grounded and executable."'
        />
        <IndicatorCard
          name="Controls in Place"
          description="Shows how many controls the client had in place by year and how many they are forecasting to have in place. An upward trajectory here is one of the clearest program progress stories."
          talkingPoint='"You&apos;ve added N controls over the past two years. That&apos;s the program investment showing up in the data."'
        />
        <IndicatorCard
          name="Age of Risks"
          description="Shows how many risks have been left unaddressed going back more than two years. A useful conversation starter for clients whose score hasn't improved — shows where the remediation backlog is sitting."
          talkingPoint='"Of your 20 open risks, 10 have been here for over two years. Closing those would move your score materially — let&apos;s build a plan around them."'
        />
        <IndicatorCard
          name="Risks Over Time"
          description="Tracks the total number of open risks across assessments — the inverse of Controls in Place. For clients with a declining risk count, this is a strong positive data point."
          talkingPoint='"Your open risk count has dropped from X to Y over three years. That&apos;s the program working — and it&apos;s the kind of progress you can put in front of an LP or examiner."'
        />
      </div>

      {/* ── How to Use It by Client Type ──────────────────── */}
      <SectionHeading>How to Use It — By Client Situation</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed">
        There is value in Trend Analysis for every client regardless of their current score.
        The entry point and emphasis change — but every client has a positive story in this data.
      </p>
      <div className="mt-4 space-y-3">
        {[
          {
            situation: 'Score is strong and improving',
            lead: 'Score Change + Controls in Place',
            angle: 'Celebrate the achievement. Show the trajectory. This is the LP and ODD story — share it proactively in the next investor communication or DDQ response.',
          },
          {
            situation: 'Score has always been strong',
            lead: 'Actual vs. Forecast + Controls in Place',
            angle: 'Sustained excellence is a differentiator, not just a baseline. Show consistent diligence over time — that\'s harder to fake than a single good score.',
          },
          {
            situation: 'Score is improving but not yet where they want it',
            lead: 'Score Change + Risks Over Time',
            angle: 'Progress and effort matter — especially to regulators and LPs. Showing a clear upward trajectory tells a credible story even when the destination isn\'t reached yet.',
          },
          {
            situation: 'Score is flat or not improving',
            lead: 'Age of Risks + Controls in Place',
            angle: 'Use this carefully and constructively. The data shows where the backlog is sitting — turn it into a focused remediation conversation, not a performance review.',
          },
        ].map(({ situation, lead, angle }, i) => (
          <div key={i} className="rounded-lg border border-gray-200 p-4">
            <div className="flex items-start gap-4">
              <div className="w-48 shrink-0">
                <p className="text-xs font-semibold text-db-dark">{situation}</p>
                <p className="text-xs text-db-aqua-dark mt-1 font-medium">Lead with: {lead}</p>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed flex-1">{angle}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ── The Retention Angle ────────────────────────────── */}
      <SubSection icon="🔒" title="The Retention Angle">
        <p>
          This is one of the most important renewal points in Trend Analysis:{' '}
          <strong>if a client leaves Drawbridge, they lose their history.</strong>
        </p>
        <p className="mt-2 text-sm text-gray-700">
          The trend data — their score trajectory, their control growth, their risk reduction —
          is built on Drawbridge&apos;s CRA history. A client who moves to another provider
          starts from zero. No trend line. No progress story. No data to show an LP or examiner
          that the program has been improving.
        </p>
        <p className="mt-2 text-sm text-gray-700">
          As the history database continues to build, this advantage compounds. Three years of
          data today becomes five years next year. The longer a client stays, the richer their
          story — and the steeper the cost of starting over.
        </p>
        <div className="mt-3 rounded-lg border-l-4 border-db-dark bg-db-dark/5 p-4">
          <p className="text-xs font-semibold text-db-dark uppercase tracking-wide mb-1">In a renewal conversation</p>
          <p className="text-xs text-gray-600 italic">
            &ldquo;One thing worth knowing: this trend history lives with Drawbridge. If you ever moved
            to another provider, you&apos;d lose it — and you&apos;d have to rebuild that story from
            scratch. The longer you&apos;re here, the more valuable this data becomes.&rdquo;
          </p>
        </div>
      </SubSection>

      {/* ── Drawbridge Angle ───────────────────────────────── */}
      <DrawbridgeAngle>
        <p>
          Trend Analysis is one of the clearest expressions of what the Drawbridge platform
          enables that an advisory-only model never could. The data exists because we&apos;ve
          been running structured CRAs consistently, storing the results, and building the
          infrastructure to turn that history into a client story. That took years to build —
          and it&apos;s proprietary.
        </p>
        <p className="mt-2">
          Every client conversation about Trend Analysis is also a value conversation. The
          question &ldquo;how has our program changed?&rdquo; now has a data-backed answer.
          And for RMs, it&apos;s one of the most natural renewal anchors we&apos;ve ever had —
          because the cost of leaving isn&apos;t just switching providers, it&apos;s erasing
          the evidence of the work.
        </p>
        <p className="mt-2">
          The framing for every client, in every situation: <strong>lead with progress, not gaps.</strong>{' '}
          Drawbridge has historically been a findings-first product. Trend Analysis is the
          opportunity to change that dynamic — to walk into an SVR and spend the first ten
          minutes on what the client has accomplished, not what they haven&apos;t.
        </p>
      </DrawbridgeAngle>
    </>
  );
}
