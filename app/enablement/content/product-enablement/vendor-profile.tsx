'use client';

import React from 'react';
import {
  StatCard,
  SectionHeading,
  CharacteristicCard,
  HeroSection,
  DrawbridgeAngle,
  SubSection,
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

export default function VendorProfile() {
  return (
    <>
      <HeroSection
        icon="🔗"
        title="Vendor Profile"
        subtitle="One profile. Every client. The only vendor risk solution built at the scale of the alts market."
      />
      <LastUpdated date="April 1, 2026 at 9:00 AM" />

      {/* ── Stats Row ─────────────────────────────────────── */}
      <div className="mt-6 grid grid-cols-4 gap-4">
        <StatCard label="Clients on the Drawbridge Platform" value="1,300+" />
        <StatCard label="Vendors in the Drawbridge Network" value="5,000+" />
        <StatCard label="Vendors with a Shared Profile (DCA)" value="~270" />
        <StatCard label="DDQ Completed Once — Shared Across All Mutual Clients" value="1×" />
      </div>

      {/* ── What Is Vendor Profile ──────────────────────────── */}
      <SectionHeading>What Is Vendor Profile?</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed">
        Vendor Profile is Drawbridge&apos;s third-party risk management solution. It gives clients
        a structured, expert-reviewed view of the cybersecurity posture of the vendors they rely
        on — without requiring them to chase vendors, manage questionnaires, or interpret raw
        security data themselves.
      </p>
      <p className="text-sm text-gray-700 leading-relaxed mt-2">
        The model is simple: vendors complete one Due Diligence Questionnaire (DDQ) per year.
        Drawbridge reviews and maintains that response, then shares it across every mutual client.
        The client gets a clean, consistent risk report — findings, context, and recommendations —
        produced by Drawbridge, not by the vendor.
      </p>
      <p className="text-sm text-gray-700 leading-relaxed mt-2">
        This matters because most firms in alternatives are managing third-party risk manually,
        inconsistently, or not at all — and the exposure that creates touches multiple business
        outcomes clients care about.
      </p>

      {/* ── Outcomes Map ───────────────────────────────────── */}
      <SectionHeading>Which Outcomes This Addresses</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed">
        Vendor Profile is one of the few products that cuts across multiple client outcomes
        simultaneously. Understanding which outcome your client is anchored in helps you open
        the right conversation.
      </p>
      <div className="mt-4 space-y-3">
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <div className="flex items-start gap-3">
            <OutcomeTag number="1" label="Raise & Retain Capital" />
            <div className="flex-1">
              <p className="text-xs font-semibold text-db-dark mb-1">LPs are asking about third-party risk</p>
              <p className="text-xs text-gray-600 leading-relaxed">
                ODD processes increasingly include questions about how a fund manages its vendor
                relationships. A client who can point to documented, expert-reviewed vendor
                assessments — maintained by a dedicated third party — has a materially stronger
                answer than one describing a manual process. Vendor Profile gives them that answer.
              </p>
              <p className="mt-2 text-xs text-gray-500 italic">
                &ldquo;If an LP asks how you manage third-party risk in your next ODD, what does your answer look like today?&rdquo;
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <div className="flex items-start gap-3">
            <OutcomeTag number="2" label="Navigate Regulatory Complexity" />
            <div className="flex-1">
              <p className="text-xs font-semibold text-db-dark mb-1">Reg S-P vendor compliance in one place</p>
              <p className="text-xs text-gray-600 leading-relaxed">
                Reg S-P requires investment advisers to protect client PII — and that obligation
                extends to every vendor handling it on their behalf. Drawbridge surfaces which vendors
                touch investor data and manages the compliance tracking in one place on the platform.
                For most clients, this replaces a process that doesn&apos;t exist yet.
              </p>
              <p className="mt-2 text-xs text-gray-500 italic">
                &ldquo;If a vendor touching your investor data has a breach, you have a 30-day Reg S-P notification obligation. Do you know which vendors are in that category?&rdquo;
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <div className="flex items-start gap-3">
            <OutcomeTag number="3" label="Protect the Firm from Disruption" />
            <div className="flex-1">
              <p className="text-xs font-semibold text-db-dark mb-1">A vendor breach is your operational incident</p>
              <p className="text-xs text-gray-600 leading-relaxed">
                The firms that get disrupted most often aren&apos;t the ones that got hacked
                directly — they&apos;re the ones whose MSP, cloud provider, or software vendor did.
                Most alternative managers have no systematic view of whether their key vendors
                have the controls in place to protect them. Vendor Profile changes that from a
                blind spot to a managed risk.
              </p>
              <p className="mt-2 text-xs text-gray-500 italic">
                &ldquo;What would it take for one of your vendors to take you offline? Have you looked at their security posture?&rdquo;
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <div className="flex items-start gap-3">
            <OutcomeTag number="5" label="Scale Without Adding Headcount" />
            <div className="flex-1">
              <p className="text-xs font-semibold text-db-dark mb-1">Enterprise vendor risk management — without the enterprise team</p>
              <p className="text-xs text-gray-600 leading-relaxed">
                Running a rigorous vendor due diligence program in-house requires people, process,
                and expertise most alternative managers don&apos;t have or want to hire. Drawbridge
                does this at scale across 1,300 clients — pooling vendor interactions, maintaining
                one authoritative profile per vendor, and delivering reviewed findings without
                any lift from the client&apos;s team.
              </p>
              <p className="mt-2 text-xs text-gray-500 italic">
                &ldquo;How much time is your team spending on vendor questionnaires today — and how confident are you in the results?&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── The Value Proposition ──────────────────────────── */}
      <SectionHeading>Why Drawbridge — The RM Story</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed">
        The product value comes from four structural advantages that no client or competitor can
        replicate independently. These are the points worth internalizing before any client
        conversation.
      </p>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <CharacteristicCard
          title="Predictability on delivery"
          description="One shared profile per vendor means no dependency on vendors filling out questionnaires on each client's timeline. Reports for vendors with a profile are produced quickly and predictably — no chasing, no delays, no variance by account."
        />
        <CharacteristicCard
          title="Economies of scale — 1,300 clients"
          description="With 1,300 clients pooling vendor requests, Drawbridge operates at a scale no individual firm or competitor can match in the alts market. That network breadth means faster coverage and better data than any in-house program."
        />
        <CharacteristicCard
          title="Superior report quality"
          description="Because we maintain one authoritative report per vendor rather than bespoke assessments per client, we invest that time in quality — including integrating vendor responses and remediation planning directly into the findings."
        />
        <CharacteristicCard
          title="Reg S-P compliance, managed"
          description="Our platform manages Reg S-P vendor response and compliance tracking in one place. Clients aren't piecing this together across spreadsheets and email chains — it's built into the program."
        />
      </div>

      {/* ── Opening the Conversation ───────────────────────── */}
      <SectionHeading>Opening the Conversation</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed">
        Lead with the business exposure, not the product. The right opener depends on what your
        client is focused on — fundraising, regulatory pressure, or operational risk.
      </p>
      <div className="mt-3 rounded-lg border-l-4 border-db-aqua bg-db-aqua/5 p-4">
        <p className="text-xs font-semibold text-db-aqua-dark uppercase tracking-wide mb-3">Match the opener to the client</p>
        <div className="space-y-3">
          {[
            { context: 'Fundraising / LP pressure', line: '"LPs are increasingly asking about third-party risk in ODD. What does your answer look like today?"' },
            { context: 'Regulatory focus', line: '"If a vendor touching your investor data has a breach, you have a Reg S-P notification obligation within 30 days. Do you know which vendors are in that category?"' },
            { context: 'Operational risk', line: '"What would it take for one of your vendors to take you offline? Have you looked at their security posture recently?"' },
            { context: 'Efficiency / lean team', line: '"How much time is your team spending on vendor questionnaires — and how confident are you in the results?"' },
          ].map(({ context, line }, i) => (
            <div key={i} className="flex gap-3">
              <span className="text-xs font-semibold text-db-aqua-dark w-36 shrink-0 mt-0.5">{context}</span>
              <span className="text-xs text-gray-700 italic">{line}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── What Clients Get ───────────────────────────────── */}
      <SectionHeading>What the Client Actually Gets</SectionHeading>
      <div className="mt-2 grid grid-cols-2 gap-4">
        <div className="rounded-lg border border-gray-200 p-4">
          <p className="text-sm font-semibold text-db-dark mb-2">Visibility</p>
          <p className="text-xs text-gray-600 leading-relaxed">
            A structured risk report for each vendor — findings by severity, what risk each
            finding creates, and Drawbridge&apos;s recommendation. Where vendors have submitted
            responses or remediation plans, those are integrated directly. The client doesn&apos;t
            interpret raw security data — we do that for them.
          </p>
        </div>
        <div className="rounded-lg border border-gray-200 p-4">
          <p className="text-sm font-semibold text-db-dark mb-2">Defensibility</p>
          <p className="text-xs text-gray-600 leading-relaxed">
            When an LP asks &ldquo;how do you manage third-party risk?&rdquo; or an SEC examiner
            asks about vendor due diligence, the client has a documented, expert-reviewed answer
            they didn&apos;t have to produce themselves. That&apos;s what turns vendor risk from
            a liability into a program asset.
          </p>
        </div>
      </div>

      {/* ── What to Know About the DCA ─────────────────────── */}
      <SubSection icon="📋" title="The DCA — What You Need to Know">
        <p>
          A <strong>Data Contribution Agreement (DCA)</strong> is what enables the shared profile
          model. When a vendor signs a DCA, they complete one DDQ per year — Drawbridge maintains
          it and shares it across every mutual client. About <strong>270 vendors</strong> have
          signed, covering the most common MSPs, technology providers, and service vendors in
          the alts space.
        </p>
        <p className="mt-2 text-sm text-gray-700">
          Vendors without a DCA require a separate assessment per client — slower, less consistent,
          and more dependent on vendor cooperation. When a client has high-criticality vendors
          outside the DCA network, that&apos;s both a risk gap and a program expansion opportunity.
        </p>
        <div className="mt-3 rounded-lg border border-amber-200 bg-amber-50 p-4">
          <p className="text-xs font-semibold text-amber-800 uppercase tracking-wide mb-1">One thing to know</p>
          <p className="text-xs text-amber-700">
            Some vendors submit a SOC 2 or SIG instead of the Drawbridge DDQ (&ldquo;Alternative
            Complete&rdquo;). These vendors are still assessed but may appear differently in
            reporting. Flag it proactively if a client asks why a vendor looks different —
            don&apos;t let them discover it themselves.
          </p>
        </div>
      </SubSection>

      {/* ── Common Client Questions ────────────────────────── */}
      <SectionHeading>Common Client Questions</SectionHeading>
      <div className="space-y-3 mt-2">
        {[
          {
            q: '"Why does my vendor have more findings this year than last year?"',
            a: 'The DDQ was updated in July 2025 — first update since 2022. New AI and Reg S-P questions surface risk areas that weren\'t previously assessed. More findings means a more complete picture, not a worse vendor.',
          },
          {
            q: '"How does this compare to us doing our own vendor assessments?"',
            a: 'You could send your own questionnaires — but you\'d be doing it vendor by vendor, on your timeline, without the network context or Drawbridge\'s review expertise behind each report. We pool 1,300 clients\' worth of vendor interactions. No single firm can replicate that coverage or consistency.',
          },
          {
            q: '"Can we add a vendor to the program?"',
            a: 'Yes. If they\'re already in the Drawbridge network, we add them to your list. If not, we can reach out about a DCA. Loop in your CSM to initiate.',
          },
          {
            q: '"The vendor says they\'ve fixed the issue — why is the finding still showing?"',
            a: 'Findings update when the vendor submits a management response or completes their next annual DDQ. Encourage them to submit a response now — it gets integrated into every mutual client\'s report once reviewed.',
          },
        ].map(({ q, a }, i) => (
          <div key={i} className="rounded-lg border border-gray-200 p-4">
            <p className="text-xs font-semibold text-gray-800 mb-1">{q}</p>
            <p className="text-xs text-gray-600">{a}</p>
          </div>
        ))}
      </div>

      {/* ── Drawbridge Angle ───────────────────────────────── */}
      <DrawbridgeAngle>
        <p>
          Third-party risk is where most programs have the largest gap between what clients think
          they&apos;re covered on and what they&apos;re actually covered on. Most firms assume
          their MSP or key software vendors are fine. Most haven&apos;t looked.
        </p>
        <p className="mt-2">
          The DCA network is a genuine competitive moat — ~270 vendors, one profile each, shared
          across 1,300 clients. No other provider operates at this scale in alternatives. That
          network effect only grows, which means the value of being inside it compounds over time.
        </p>
        <p className="mt-2">
          The LP question and the Reg S-P question are both accelerating. Clients who have
          Vendor Profile can answer both confidently. Clients who don&apos;t are hoping those
          questions stay vague. Help them get ahead of it before it becomes reactive.
        </p>
      </DrawbridgeAngle>
    </>
  );
}
