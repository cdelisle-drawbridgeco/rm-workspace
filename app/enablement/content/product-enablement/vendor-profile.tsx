'use client';

import React from 'react';
import {
  StatCard,
  SectionHeading,
  CharacteristicCard,
  TermBadge,
  HeroSection,
  DrawbridgeAngle,
  SubSection,
  FlowDiagram,
  LastUpdated,
} from '../../components/shared-ui';

export default function VendorProfile() {
  return (
    <>
      <HeroSection
        icon="🔗"
        title="Vendor Profile"
        subtitle="Third-party risk, simplified — one DDQ, shared across every mutual client."
      />
      <LastUpdated date="March 27, 2026 at 10:00 AM" />

      {/* ── Stats Row ─────────────────────────────────────── */}
      <div className="mt-6 grid grid-cols-4 gap-4">
        <StatCard label="Vendors in the Drawbridge Network" value="5,000+" />
        <StatCard label="Vendors with a Data Contribution Agreement" value="~270" />
        <StatCard label="DDQ Completed Once — Shared with All Mutual Clients" value="1×" />
        <StatCard label="DDQ Last Updated (Added AI + Reg SP Questions)" value="Jul 2025" />
      </div>

      {/* ── What Is Vendor Profile ──────────────────────────── */}
      <SectionHeading>What Is Vendor Profile?</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed">
        Vendor Profile is Drawbridge&apos;s third-party risk management product. It gives clients
        a structured view of the cybersecurity posture of the vendors they rely on — without
        requiring each client to independently assess the same vendors.
      </p>
      <p className="text-sm text-gray-700 leading-relaxed mt-2">
        The core idea: vendors complete one Due Diligence Questionnaire (DDQ) per year. That
        response is shared across every Drawbridge client who uses that vendor. The client gets
        a standardized risk output — findings, severity, recommendations — without chasing vendors
        themselves.
      </p>
      <p className="text-sm text-gray-700 leading-relaxed mt-2">
        Drawbridge is the only provider that unites MSPs, vendors, and alternative investment
        clients on a single platform — which is why the vendor network is this large and why the
        DCA model works at scale.
      </p>

      {/* ── Two Delivery Modes ─────────────────────────────── */}
      <SectionHeading>Two Delivery Modes</SectionHeading>
      <div className="grid grid-cols-2 gap-4">
        <CharacteristicCard
          title="Present Day — PDF Report"
          description="Today, vendor risk output is delivered as a PDF. It includes a severity/findings/risk/recommendation table plus any management responses the vendor has submitted. Drawbridge analysts review responses and produce the report."
        />
        <CharacteristicCard
          title="Future State — Platform Dashboard"
          description="Coming soon: an in-platform Vendor Profile dashboard with tiering (Tier 1/2/3), Reg SP flags, outlier analytics, top-5 risk areas, severity counts, and DDQ filtering (recent vs. all responses). Currently behind a feature flag."
        />
      </div>

      {/* ── The DCA Model ──────────────────────────────────── */}
      <SectionHeading>The Data Contribution Agreement (DCA)</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed">
        A <strong>Data Contribution Agreement</strong> is what enables the shared-DDQ model.
        When a vendor signs a DCA, they agree to complete one DDQ per year that Drawbridge shares
        with all mutual clients. The vendor benefits from a single compliance process instead of
        fielding individual questionnaires from every fund.
      </p>
      <p className="text-sm text-gray-700 leading-relaxed mt-2">
        Approximately <strong>270 vendors</strong> have signed a DCA. Non-DCA vendors receive a
        legacy PDF report and must complete a DDQ per client — a slower, higher-friction process.
      </p>

      <SubSection icon="⚙️" title="How the DCA Workflow Runs">
        <FlowDiagram
          steps={[
            'Vendor signs Data Contribution Agreement',
            'Vendor completes one DDQ per year (shared across all mutual clients)',
            'Drawbridge reviews responses and produces risk output',
            'Vendor Profile report delivered to each mutual client',
            'Vendor may submit management responses to findings (applied globally)',
          ]}
        />
        <div className="mt-3 rounded-lg border border-amber-200 bg-amber-50 p-4">
          <p className="text-xs font-semibold text-amber-800 uppercase tracking-wide mb-1">
            Non-DCA vendors — legacy process
          </p>
          <p className="text-xs text-amber-700">
            Vendors without a DCA receive a PDF report only and must complete a DDQ separately
            for each client. If a client has 10 vendors not on DCA, that&apos;s 10 independent
            assessment processes. Use this contrast when explaining the DCA value to clients.
          </p>
        </div>
        <div className="mt-3 rounded-lg border border-amber-200 bg-amber-50 p-4">
          <p className="text-xs font-semibold text-amber-800 uppercase tracking-wide mb-1">
            Alternative Complete status
          </p>
          <p className="text-xs text-amber-700">
            Some vendors submit a SOC 2 or SIG questionnaire instead of the Drawbridge DDQ. These
            vendors are marked &ldquo;Alternative Complete&rdquo; and <strong>will not appear</strong>{' '}
            in the Vendor Profile platform dashboard — they may still appear on the PDF vendor
            list. This can cause a discrepancy; flag it proactively if a client asks why a vendor
            is missing from the dashboard.
          </p>
        </div>
      </SubSection>

      {/* ── Finding the DCA List in the Platform ──────────── */}
      <SubSection icon="🖥️" title="Finding DCA Vendors in the Platform">
        <p>
          In the Drawbridge admin platform, you can filter vendor lists by DCA status to quickly
          identify which of a client&apos;s vendors have signed and which haven&apos;t. Use this to:
        </p>
        <div className="mt-3 grid grid-cols-2 gap-3">
          <CharacteristicCard
            title="Pre-meeting prep"
            description="Pull the client's vendor list before an SVR. Flag any high-criticality vendors without a DCA — those are both a risk exposure and a program expansion opportunity."
          />
          <CharacteristicCard
            title="New client onboarding"
            description="During onboarding, identify the client's key vendors and check DCA status. DCA gaps on Tier 1 vendors are an early win — adding them strengthens the program immediately."
          />
        </div>
      </SubSection>

      {/* ── DDQ Details ─────────────────────────────────────── */}
      <SectionHeading>The DDQ — What&apos;s in It and Why It Changed</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed">
        The Drawbridge vendor DDQ was <strong>updated July 22, 2025</strong> — the first update
        since 2022. The new version added questions covering:
      </p>
      <ul className="mt-2 space-y-1 text-sm text-gray-700 list-disc list-inside">
        <li>
          <strong>Artificial intelligence</strong> — AI tool usage, governance, and controls
        </li>
        <li>
          <strong>Regulation S-P</strong> — how vendors handle personally identifiable client
          information (PII)
        </li>
      </ul>
      <p className="text-sm text-gray-700 leading-relaxed mt-3">
        This matters for client conversations: if a client sees <strong>more findings
        year-over-year</strong> than expected, the most likely explanation is the expanded DDQ —
        not that the vendor&apos;s security has gotten worse. Frame it as a more complete picture,
        not a regression.
      </p>

      {/* ── Vendor Risk Output ─────────────────────────────── */}
      <SectionHeading>Understanding the Vendor Risk Output</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed">
        The vendor risk report surfaces findings in a structured table:
      </p>
      <div className="mt-3 grid grid-cols-3 gap-4">
        <CharacteristicCard
          title="Severity"
          description="High / Moderate / Low — risk rating of the finding. Lead with highs in client conversations. Frame lows as known and managed."
        />
        <CharacteristicCard
          title="Findings + Risk"
          description="What the vendor reported (or didn't), and the resulting risk exposure. These map to client business outcomes — data exposure, regulatory gap, operational continuity."
        />
        <CharacteristicCard
          title="Recommendation"
          description="Drawbridge's suggested remediation or mitigation. Can be paired with a management response from the vendor acknowledging the finding."
        />
      </div>

      <SubSection icon="💬" title="Management Responses">
        <p>
          Vendors can submit a <strong>management response</strong> to any finding — explaining
          what they&apos;re doing to address it or providing context. Key things to know:
        </p>
        <ul className="mt-2 space-y-2 text-sm text-gray-700 list-disc list-inside">
          <li>
            Management responses are applied <strong>globally</strong> — if a vendor responds to
            a finding, that response appears on every mutual client&apos;s report
          </li>
          <li>
            Responses are reviewed by Drawbridge before publication
          </li>
          <li>
            There is a full <strong>audit log</strong> in the backend — but no client-facing
            version history yet (on the product roadmap)
          </li>
          <li>
            Vendors can update responses over time as they remediate — follow-up is encouraged
          </li>
        </ul>
      </SubSection>

      {/* ── Reg SP ─────────────────────────────────────────── */}
      <SectionHeading>Regulation S-P &amp; Vendor Risk</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed">
        Reg S-P requires investment advisers to protect client PII — and that obligation extends
        to the vendors handling that data on their behalf. Drawbridge surfaces this risk directly
        in the vendor assessment.
      </p>
      <div className="mt-3 grid grid-cols-2 gap-4">
        <CharacteristicCard
          title="How to validate vendor PII handling"
          description="Check the 6th Informational DDQ question — it asks whether the vendor handles PII on behalf of the client. If yes, three specific follow-on questions probe controls, breach notification procedures, and data handling agreements."
        />
        <CharacteristicCard
          title="Reg SP flag in the platform"
          description="In the future-state platform dashboard, vendors handling PII will be flagged with a Reg SP indicator. The admin platform also has a Vendor Reg SP report (not client-facing). A client-facing dashboard is on the roadmap."
        />
      </div>
      <div className="mt-3 rounded-lg border border-blue-200 bg-blue-50 p-4">
        <p className="text-xs font-semibold text-blue-800 uppercase tracking-wide mb-1">
          Conversation framing
        </p>
        <p className="text-xs text-blue-700">
          &ldquo;If a vendor is touching your investor data — CRM, email, document management —
          and they have a breach, you have a Reg S-P notification obligation. Vendor Profile
          helps you know which vendors carry that exposure and whether their controls are
          actually in place.&rdquo;
        </p>
      </div>

      {/* ── Platform Features (Future State) ──────────────── */}
      <SectionHeading>Platform Features — Future State</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed">
        The in-platform Vendor Profile dashboard is in development. When released, it will include:
      </p>
      <div className="mt-3 grid grid-cols-2 gap-4">
        <CharacteristicCard
          title="Vendor Tiering"
          description="Tier 1 / Tier 2 / Tier 3 — priority classification based on criticality to the client's operations and data exposure. Tier 1 vendors warrant deepest scrutiny."
        />
        <CharacteristicCard
          title="Reg SP Flags"
          description="Visual indicator on any vendor confirmed to handle client PII — surfaces regulatory exposure at a glance."
        />
        <CharacteristicCard
          title="Outlier Analytics"
          description="Identifies vendors whose risk profile is significantly worse than peers in the Drawbridge network — a signal that warrants deeper conversation or vendor replacement."
        />
        <CharacteristicCard
          title="Top 5 Risk Areas"
          description="Aggregated view of the most common finding categories across a client's vendor portfolio — useful for SVR conversations about third-party program gaps."
        />
        <CharacteristicCard
          title="Severity Counts"
          description="Dashboard-level severity breakdown (High / Moderate / Low) across all vendors — enables prioritization without reading every individual report."
        />
        <CharacteristicCard
          title="DDQ Filtering"
          description="Toggle between most recent DDQ responses and all historical responses — useful when a vendor has a long history but recently remediated a finding."
        />
      </div>

      {/* ── Client Q&A / Talking Points ────────────────────── */}
      <SectionHeading>Client Conversations — Q&amp;A</SectionHeading>
      <div className="space-y-4 mt-2">
        <div className="rounded-lg border border-gray-200 p-4">
          <p className="text-xs font-semibold text-gray-800 mb-1">
            &ldquo;Why does my vendor have more findings this year than last year?&rdquo;
          </p>
          <p className="text-xs text-gray-600">
            The DDQ was updated in July 2025 — first update since 2022. New AI and Reg S-P
            questions added surface risk areas that weren&apos;t previously assessed. More findings
            doesn&apos;t mean the vendor&apos;s security got worse — it means we&apos;re asking
            better questions.
          </p>
        </div>
        <div className="rounded-lg border border-gray-200 p-4">
          <p className="text-xs font-semibold text-gray-800 mb-1">
            &ldquo;Can I see the vendor&apos;s actual responses, not just the summary?&rdquo;
          </p>
          <p className="text-xs text-gray-600">
            The current PDF output includes findings and recommendations. The raw DDQ responses
            are not surfaced client-facing today — the platform roadmap includes expanded
            transparency features. If a client needs the raw data for an ODD, escalate to your
            CSM or account team.
          </p>
        </div>
        <div className="rounded-lg border border-gray-200 p-4">
          <p className="text-xs font-semibold text-gray-800 mb-1">
            &ldquo;A vendor is on my list but I don&apos;t see them in the dashboard.&rdquo;
          </p>
          <p className="text-xs text-gray-600">
            Check whether the vendor submitted an Alternative Complete response (SOC 2 or SIG
            instead of the Drawbridge DDQ). Alternative Complete vendors are excluded from the
            dashboard but still appear on the PDF vendor list. This is a known discrepancy —
            flag it rather than letting the client discover it themselves.
          </p>
        </div>
        <div className="rounded-lg border border-gray-200 p-4">
          <p className="text-xs font-semibold text-gray-800 mb-1">
            &ldquo;Can we add a vendor to the program?&rdquo;
          </p>
          <p className="text-xs text-gray-600">
            Yes. If the vendor isn&apos;t in the Drawbridge network, we can reach out to them
            about signing a DCA. If they&apos;re already in the network, we add them to the
            client&apos;s vendor list. Either way, loop in your CSM to initiate.
          </p>
        </div>
        <div className="rounded-lg border border-gray-200 p-4">
          <p className="text-xs font-semibold text-gray-800 mb-1">
            &ldquo;The vendor says they&apos;ve fixed the issue — why is the finding still showing?&rdquo;
          </p>
          <p className="text-xs text-gray-600">
            Findings update when the vendor submits a management response or when they complete
            their next annual DDQ. Encourage the vendor to submit a management response now —
            it will appear on all mutual clients&apos; reports immediately once reviewed.
          </p>
        </div>
      </div>

      {/* ── Drawbridge Angle ───────────────────────────────── */}
      <DrawbridgeAngle>
        <p>
          Third-party risk is one of the top exam priorities for the SEC and one of the most
          common ODD questions alternative managers receive. Most firms are fielding vendor
          questionnaires manually — or not at all. Drawbridge solves both sides: we assess the
          vendors and deliver the output to clients, at scale, without adding work to the client&apos;s
          plate.
        </p>
        <p className="mt-2">
          The DCA network is a genuine moat. ~270 vendors completing one DDQ shared across 1,000+
          funds — no other provider operates at this scale in alternatives. That means your clients
          get risk data on their MSPs, portco vendors, and cloud providers that no one else can
          deliver. When an LP asks &ldquo;how do you manage third-party risk?&rdquo; — Vendor
          Profile is the answer.
        </p>
        <p className="mt-2">
          As the platform dashboard rolls out, the story gets stronger: vendor tiering, Reg S-P
          flags, and outlier analytics give clients a risk-prioritized view of their vendor
          portfolio — not a flat list. That&apos;s the shift from compliance checkbox to active
          risk management.
        </p>
      </DrawbridgeAngle>
    </>
  );
}
