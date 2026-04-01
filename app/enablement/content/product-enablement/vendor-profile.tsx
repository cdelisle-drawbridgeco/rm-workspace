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
        The client gets a clean, consistent risk output — findings, context, and recommendations —
        produced by Drawbridge, not by the vendor.
      </p>

      {/* ── The Value Proposition ──────────────────────────── */}
      <SectionHeading>Why It Matters — The RM Story</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed">
        Third-party risk is one of the most common gaps Drawbridge finds across client programs —
        and one of the most common ODD questions alternative managers receive. Most firms are
        managing it manually, inconsistently, or not at all. Vendor Profile solves all three
        problems at once.
      </p>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <CharacteristicCard
          title="Predictability on delivery"
          description="Because we maintain one shared profile per vendor, we no longer depend on vendors filling out questionnaires on each client's timeline. Reports for vendors with a profile can be produced quickly and predictably — no chasing, no delays."
        />
        <CharacteristicCard
          title="Economies of scale — 1,300 clients strong"
          description="With 1,300 clients pooling their vendor requests, Drawbridge operates at a scale no individual firm or competitor can match in the alts market. That scale means faster coverage, broader network depth, and better data across the board."
        />
        <CharacteristicCard
          title="Superior report quality"
          description="Because we maintain one report per vendor rather than producing bespoke assessments for each client, we can invest more time in quality — including integrating vendor responses and remediation planning directly into the reported findings."
        />
        <CharacteristicCard
          title="Reg S-P compliance, simplified"
          description="Reg S-P requires firms to manage how vendors handle client PII. Our platform manages Reg S-P response and compliance tracking in one place — so clients aren't piecing this together across spreadsheets and vendor emails."
        />
      </div>

      {/* ── The Conversation ───────────────────────────────── */}
      <SectionHeading>Opening the Conversation</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed">
        Vendor risk conversations land best when you connect them to something the client already
        cares about — an upcoming ODD, a recent exam, an LP asking about third parties, or a vendor
        they&apos;ve been meaning to look at. Lead with the business exposure, not the product.
      </p>
      <div className="mt-3 rounded-lg border-l-4 border-db-aqua bg-db-aqua/5 p-4">
        <p className="text-xs font-semibold text-db-aqua-dark uppercase tracking-wide mb-2">Conversation starters</p>
        <ul className="space-y-2">
          {[
            '"Do you know the security posture of the vendors handling your investor data right now — your CRM, your document management, your email platform?"',
            '"If one of your key vendors had a breach tomorrow, would you know whether you have a Reg S-P notification obligation?"',
            '"LPs are increasingly asking about third-party risk in ODD. What does your answer look like today?"',
            '"How are you currently assessing the vendors your portfolio companies rely on?"',
          ].map((q, i) => (
            <li key={i} className="flex gap-2 text-xs text-gray-700">
              <span className="text-db-aqua-dark shrink-0 mt-0.5">→</span>
              <span className="italic">{q}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* ── What Clients Get ───────────────────────────────── */}
      <SectionHeading>What the Client Actually Gets</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed">
        Vendor Profile delivers two things to a client: visibility and defensibility.
      </p>
      <div className="mt-3 grid grid-cols-2 gap-4">
        <div className="rounded-lg border border-gray-200 p-4">
          <p className="text-sm font-semibold text-db-dark mb-2">Visibility</p>
          <p className="text-xs text-gray-600 leading-relaxed">
            A structured risk report for each vendor — findings by severity (High / Moderate / Low),
            what risk each finding creates, and Drawbridge&apos;s recommendation. Where vendors
            have submitted responses or remediation plans, those are integrated directly. The client
            doesn&apos;t have to interpret raw security data — we do that for them.
          </p>
        </div>
        <div className="rounded-lg border border-gray-200 p-4">
          <p className="text-sm font-semibold text-db-dark mb-2">Defensibility</p>
          <p className="text-xs text-gray-600 leading-relaxed">
            When an LP asks &ldquo;how do you manage third-party risk?&rdquo; or an SEC examiner
            asks about vendor due diligence, the client has a documented, expert-reviewed answer.
            That&apos;s not something they can produce with a manual process or a one-time
            questionnaire they send themselves.
          </p>
        </div>
      </div>

      {/* ── DCA — What RMs Need to Know ────────────────────── */}
      <SubSection icon="📋" title="The DCA — What You Need to Know">
        <p>
          A <strong>Data Contribution Agreement (DCA)</strong> is what enables the shared profile
          model. When a vendor signs a DCA, they agree to complete one DDQ per year that Drawbridge
          maintains and shares with all mutual clients. About <strong>270 vendors</strong> have
          signed — covering the most common MSPs, technology providers, and service vendors in
          the alts space.
        </p>
        <p className="mt-2 text-sm text-gray-700">
          Vendors without a DCA require a separate questionnaire per client — slower, less
          consistent, and more dependent on vendor cooperation. When a client has high-criticality
          vendors outside the DCA network, that&apos;s both a risk gap and a program expansion
          opportunity worth flagging.
        </p>
        <div className="mt-3 rounded-lg border border-amber-200 bg-amber-50 p-4">
          <p className="text-xs font-semibold text-amber-800 uppercase tracking-wide mb-1">One thing to know</p>
          <p className="text-xs text-amber-700">
            Some vendors submit a SOC 2 or SIG questionnaire instead of the Drawbridge DDQ
            (&ldquo;Alternative Complete&rdquo;). These vendors are assessed but may appear
            differently in reporting. If a client asks why a vendor seems missing, that&apos;s
            usually why — flag it proactively rather than letting them discover it.
          </p>
        </div>
      </SubSection>

      {/* ── Reg S-P ─────────────────────────────────────────── */}
      <SubSection icon="⚖️" title="The Reg S-P Angle">
        <p>
          Reg S-P requires investment advisers to protect client PII — and that obligation extends
          to the vendors handling it on their behalf. Drawbridge surfaces this directly in the
          vendor assessment and manages the compliance tracking in one place on the platform.
        </p>
        <p className="mt-2 text-sm text-gray-700">
          For clients who haven&apos;t thought through which vendors touch investor data —
          CRM, email, document management, investor portals — this is often a fast path to
          a meaningful conversation. The question isn&apos;t complicated:
        </p>
        <div className="mt-3 rounded-lg border-l-4 border-db-dark bg-db-dark/5 p-4">
          <p className="text-xs text-gray-700 italic">
            &ldquo;If a vendor is touching your investor data and they have a breach, you have a
            Reg S-P notification obligation within 30 days. Do you know which of your vendors
            are in that category right now?&rdquo;
          </p>
        </div>
      </SubSection>

      {/* ── Client Q&A ─────────────────────────────────────── */}
      <SectionHeading>Common Client Questions</SectionHeading>
      <div className="space-y-3 mt-2">
        {[
          {
            q: '"Why does my vendor have more findings this year than last year?"',
            a: 'The DDQ was updated in July 2025 — first update since 2022. New AI and Reg S-P questions surface risk areas that weren\'t previously assessed. More findings means a more complete picture, not a worse vendor.',
          },
          {
            q: '"Can we add a vendor to the program?"',
            a: 'Yes. If the vendor is already in the Drawbridge network, we add them to the client\'s list. If not, we can reach out about signing a DCA. Either way, loop in your CSM.',
          },
          {
            q: '"The vendor says they\'ve fixed the issue — why is the finding still showing?"',
            a: 'Findings update when the vendor submits a management response or completes their next annual DDQ. Encourage the vendor to submit a response now — it gets integrated into every mutual client\'s report once reviewed.',
          },
          {
            q: '"How does this compare to us doing our own vendor assessments?"',
            a: 'You could send your own questionnaires — but you\'d be doing it vendor by vendor, on your timeline, without the network context or the review expertise behind each report. Drawbridge pools 1,300 clients\' worth of vendor interactions, which means coverage, speed, and quality that no single firm can replicate.',
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
          Third-party risk is where a lot of programs have the biggest gap between what clients
          think they&apos;re covered on and what they&apos;re actually covered on. Most firms
          assume their MSP or key software vendors are fine. Most haven&apos;t looked.
        </p>
        <p className="mt-2">
          The DCA network is a genuine competitive moat. ~270 vendors completing one annual DDQ,
          shared across 1,300 clients — no other provider operates at this scale in alternatives.
          When an LP asks &ldquo;how do you manage third-party risk?&rdquo; — a client with
          Vendor Profile has a real answer. One without it is hoping the question doesn&apos;t
          come up.
        </p>
        <p className="mt-2">
          The Reg S-P angle is increasingly the door in. As the 30-day notification requirement
          becomes more real for clients, the question of which vendors touch investor data —
          and whether those vendors have documented controls — is no longer academic.
        </p>
      </DrawbridgeAngle>
    </>
  );
}
