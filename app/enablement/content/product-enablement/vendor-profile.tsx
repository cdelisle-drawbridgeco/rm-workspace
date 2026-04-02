'use client';

import React from 'react';
import {
  StatCard,
  SectionHeading,
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

function AdvantageCard({ number, title, body }: { number: string; title: string; body: string }) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white overflow-hidden">
      <div className="bg-db-dark px-4 py-2.5 flex items-center gap-2">
        <span className="text-xs font-bold text-db-aqua">{number}</span>
        <p className="text-xs font-semibold text-white">{title}</p>
      </div>
      <div className="p-4">
        <p className="text-xs text-gray-700 leading-relaxed">{body}</p>
      </div>
    </div>
  );
}

function PersonaCard({
  persona,
  mindset,
  hook,
  message,
}: {
  persona: string;
  mindset: string;
  hook: string;
  message: string;
}) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4">
      <p className="text-xs font-bold text-db-dark uppercase tracking-wide mb-1">{persona}</p>
      <p className="text-xs text-gray-500 italic mb-3">{mindset}</p>
      <div className="space-y-2">
        <div>
          <p className="text-xs font-semibold text-db-aqua-dark mb-0.5">Service hook</p>
          <p className="text-xs text-gray-600">{hook}</p>
        </div>
        <div className="rounded border-l-4 border-db-aqua/50 bg-db-aqua/5 px-3 py-2 mt-2">
          <p className="text-xs text-gray-600 italic">&ldquo;{message}&rdquo;</p>
        </div>
      </div>
    </div>
  );
}

export default function VendorProfile() {
  return (
    <>
      <HeroSection
        icon="🔗"
        title="Vendor Cyber Risk Services"
        subtitle="Protect your clients from third-party weak links — the only vendor risk solution built at the scale of the alts market."
      />
      <LastUpdated date="April 1, 2026 at 9:00 AM" />

      {/* ── Stats Row ─────────────────────────────────────── */}
      <div className="mt-6 grid grid-cols-4 gap-4">
        <StatCard label="Funds on the Drawbridge Platform" value="1,000+" />
        <StatCard label="Assets Protected Across the Network" value="$1.7T+" />
        <StatCard label="Vendors in the Drawbridge Database" value="5,000+" />
        <StatCard label="Successful ODDs Supported" value="2,000+" />
      </div>

      {/* ── What Is Vendor Cyber Risk Services ────────────── */}
      <SectionHeading>What Is Vendor Cyber Risk Services?</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed">
        Your client&apos;s cybersecurity is only as strong as the vendors they rely on. From fund
        administrators and custodians to cloud and data providers, third-party systems create hidden
        exposures that can trigger breaches, disrupt operations, and draw regulatory scrutiny.{' '}
        <strong>Supply chain risk is fund risk</strong> — and passive ratings are no longer enough.
      </p>
      <p className="text-sm text-gray-700 leading-relaxed mt-2">
        Drawbridge Vendor Cyber Risk Services give alternative investment firms the independent
        oversight they need to identify weaknesses early, strengthen governance, and prove due
        diligence to investors and boards. The model is simple: vendors complete one Due Diligence
        Questionnaire (DDQ) per year. Drawbridge reviews and maintains that response, then shares
        it across every mutual client. The client gets a clean, consistent risk report — findings,
        context, and recommendations — produced by Drawbridge, not by the vendor.
      </p>
      <div className="mt-3 rounded-lg border-l-4 border-db-dark bg-db-dark/5 p-4">
        <p className="text-xs font-semibold text-db-dark uppercase tracking-wide mb-1">The RM framing</p>
        <p className="text-xs text-gray-700 leading-relaxed">
          Most clients in alternatives are managing third-party risk manually, inconsistently, or not
          at all. The exposure that creates touches LP trust, regulatory readiness, and operational
          resilience simultaneously. Vendor risk is rarely one conversation — it&apos;s an entry
          point into multiple client outcomes.
        </p>
      </div>

      {/* ── Which Outcomes This Addresses ─────────────────── */}
      <SectionHeading>Which Outcomes This Addresses</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed">
        Vendor Cyber Risk Services is one of the few products that cuts across multiple client
        outcomes simultaneously. Understanding which outcome your client is anchored in helps you
        open the right conversation.
      </p>
      <div className="mt-4 space-y-3">
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <div className="flex items-start gap-3">
            <OutcomeTag number="1" label="Raise & Retain Capital" />
            <div className="flex-1">
              <p className="text-xs font-semibold text-db-dark mb-1">Provide regulator and allocator-ready evidence of due diligence</p>
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
              <p className="text-xs font-semibold text-db-dark mb-1">Meet SEC, FCA, and DORA expectations for vendor oversight</p>
              <p className="text-xs text-gray-600 leading-relaxed">
                Reg S-P requires investment advisers to protect client PII — and that obligation
                extends to every vendor handling it on their behalf. Drawbridge surfaces which vendors
                touch investor data and manages compliance tracking in one place on the platform.
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
              <p className="text-xs font-semibold text-db-dark mb-1">Strengthen firm-wide resilience by addressing supply chain gaps</p>
              <p className="text-xs text-gray-600 leading-relaxed">
                The firms that get disrupted most often aren&apos;t the ones that got hacked
                directly — they&apos;re the ones whose MSP, cloud provider, or software vendor did.
                Most alternative managers have no systematic view of whether their key vendors
                have the controls in place to protect them. Vendor risk changes from a blind spot
                to a managed risk.
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
                does this at scale across 1,000+ clients — pooling vendor interactions, maintaining
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

      {/* ── The Drawbridge Advantage ───────────────────────── */}
      <SectionHeading>The Drawbridge Advantage</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed">
        Drawbridge Vendor Risk Assessments go far beyond automated scoring tools. The platform
        combines hands-on evaluation with deep sector expertise — and delivers results no individual
        firm or competitor can replicate in the alts market.
      </p>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <AdvantageCard
          number="01"
          title="Independent assessments with zero conflicts of interest"
          body="Unlike IT providers or MSPs who assess themselves, Drawbridge has no stake in the outcome. Clients get an unbiased view of their vendor landscape — the kind of independent verification LPs and regulators trust."
        />
        <AdvantageCard
          number="02"
          title="Purpose-built for hedge funds, private equity, and RIAs"
          body="With 1,000+ funds and $1.7T+ in assets on the platform, Drawbridge operates at a scale no individual firm or sector-agnostic provider can match. The network breadth means faster coverage, richer benchmarking, and better data than any in-house program."
        />
        <AdvantageCard
          number="03"
          title="Actionable insight that goes deeper than generic scoring"
          body="One shared profile per vendor means Drawbridge invests the time in quality — qualitative findings, remediation guidance tailored to the firm, and compliance-ready documentation for audits, ODD, and board reviews. Not a score. A story."
        />
        <AdvantageCard
          number="04"
          title="Trusted across the allocator and LP community"
          body="With 2,000+ successful ODDs supported and a client base spanning the industry, Drawbridge assessments carry weight with the allocators asking the questions. Clients aren't just managing risk — they're building the evidence base that survives due diligence."
        />
      </div>

      {/* ── Persona-Based Openers ──────────────────────────── */}
      <SectionHeading>Opening the Conversation — By Contact Type</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed">
        The right hook depends on who you&apos;re talking to. Lead with the pressure they feel,
        not the product you&apos;re selling.
      </p>
      <div className="mt-4 grid grid-cols-3 gap-4">
        <PersonaCard
          persona="The CTO"
          mindset="Confident in existing measures; sceptical of external warnings"
          hook="Peer benchmarking across 1,000+ firms + independent vendor assessment"
          message="You may already be strong — but here's how you can prove it to investors and regulators."
        />
        <PersonaCard
          persona="The CFO / CCO"
          mindset="Wants cyber risk off the plate; sees it as a compliance box-tick"
          hook="End-to-end vendor programme — no internal resource drain"
          message="Outsource your vendor headaches to a trusted, dedicated partner who delivers measurable investor confidence."
        />
        <PersonaCard
          persona="The COO"
          mindset="Assumes the MSP or IT provider has vendor risk handled"
          hook="Independent vendor due diligence + conflict-free remediation plans"
          message="Your IT runs the systems. We independently verify they're secure."
        />
      </div>
      <div className="mt-3 rounded-lg border-l-4 border-db-aqua bg-db-aqua/5 p-4">
        <p className="text-xs font-semibold text-db-aqua-dark uppercase tracking-wide mb-2">Situation-based openers</p>
        <div className="space-y-2">
          {[
            { context: 'Fundraising / LP pressure', line: '"LPs are increasingly asking about third-party risk in ODD. What does your answer look like today?"' },
            { context: 'Regulatory focus', line: '"If a vendor touching your investor data has a breach, you have a Reg S-P notification obligation within 30 days. Do you know which vendors are in that category? Vendors with access to sensitive information actually face an even stricter 72-hour requirement — which makes maintaining visibility into their policies and procedures more important than ever."' },
            { context: 'Operational risk', line: '"What would it take for one of your vendors to take you offline? Have you looked at their security posture recently?"' },
            { context: 'Lean team / efficiency', line: '"How much time is your team spending on vendor questionnaires — and how confident are you in the results?"' },
          ].map(({ context, line }, i) => (
            <div key={i} className="flex gap-3">
              <span className="text-xs font-semibold text-db-aqua-dark w-40 shrink-0 mt-0.5">{context}</span>
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
            asks about vendor due diligence, the client has documented, expert-reviewed,
            compliance-ready evidence they didn&apos;t have to produce themselves. That&apos;s
            what turns vendor risk from a liability into a program asset.
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
            a: 'You could send your own questionnaires — but you\'d be doing it vendor by vendor, on your timeline, without the network context or Drawbridge\'s review expertise behind each report. We pool 1,000+ clients\' worth of vendor interactions. No single firm can replicate that coverage, consistency, or independence.',
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
          Drawbridge is the platform at the centre of the alternative investment ecosystem. With
          thousands of MSPs, 5,000 vendors, and a client base spanning the industry, Drawbridge
          collects, organises, and analyses more proprietary data than any other player. This
          creates a <strong>defensible moat</strong> — a closed loop of insights that competitors
          cannot replicate.
        </p>
        <p className="mt-2">
          Vendor Cyber Risk Services is one of the clearest expressions of that moat in action.
          The DCA network — ~270 vendors, one authoritative profile each, shared across 1,000+
          clients — only grows more valuable over time. That network effect is the reason no
          individual firm and no sector-agnostic competitor can replicate the coverage or
          consistency Drawbridge delivers.
        </p>
        <p className="mt-2">
          The LP question and the Reg S-P question are both accelerating. Clients who have Vendor
          Cyber Risk Services can answer both confidently — and can show the evidence to back it
          up. Clients who don&apos;t are hoping those questions stay vague. Help them{' '}
          <strong>raise their guard</strong> before it becomes reactive.
        </p>
      </DrawbridgeAngle>
    </>
  );
}
