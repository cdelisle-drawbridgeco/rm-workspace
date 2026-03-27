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

export default function TrueGuard() {
  return (
    <>
      <HeroSection
        icon="🛡️"
        title="TrueGuard"
        subtitle="Continuous control validation — from annual attestation to real-time proof."
      />
      <LastUpdated date="March 27, 2026 at 10:00 AM" />

      {/* ── Stats Row ────────────────────────────────────── */}
      <div className="mt-6 grid grid-cols-4 gap-4">
        <StatCard label="Firms on the Drawbridge Platform" value="1,300+" />
        <StatCard label="Control Validation Frequency" value="Continuous" />
        <StatCard label="Cybersecurity Named Top SEC Exam Priority — 5 Years Running" value="#1" />
        <StatCard label="Financial Services Among Most Targeted Industries for Cyberattacks — IBM X-Force, 9 Years Running" value="Top 3" />
      </div>

      {/* ── What Is TrueGuard ─────────────────────────────── */}
      <SectionHeading>What Is TrueGuard?</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed">
        TrueGuard is Drawbridge&apos;s AI-powered continuous control validation platform. It
        transforms the way alternative investment firms manage and demonstrate their cybersecurity
        posture — shifting from <strong>periodic attestation</strong> to{' '}
        <strong>continuous, evidence-backed proof</strong>.
      </p>
      <p className="text-sm text-gray-700 leading-relaxed mt-2">
        Every year, funds go through the same ritual: fill out a DDQ, check boxes, attest that
        controls are in place. TrueGuard asks a harder question:{' '}
        <strong>
          &ldquo;You said you have this control — is it actually operating right now?&rdquo;
        </strong>
      </p>
      <p className="text-sm text-gray-700 leading-relaxed mt-2">
        Traditional due diligence asks: <em>Do you have this control?</em> TrueGuard asks:{' '}
        <em>You said you have this control — prove it.</em> That is the difference between
        attestation and validation.
      </p>

      <SubSection icon="⚙️" title="How It Works">
        <p>
          TrueGuard integrates data from across the Drawbridge service stack and validates it
          against what clients reported in their DDQs and assessments:
        </p>
        <div className="mt-3 grid grid-cols-2 gap-4">
          <CharacteristicCard
            title="Network & Endpoint Scanning"
            description="Continuous scanning of client infrastructure compares live configurations against reported controls — surfacing gaps in real time, not at next year's assessment."
          />
          <CharacteristicCard
            title="Cloud Configuration Assessments"
            description="Cloud posture is validated against client attestations. Misconfigurations, open storage, and access control gaps are flagged immediately when they emerge."
          />
          <CharacteristicCard
            title="Pen Testing Cross-Reference"
            description="Findings from penetration tests are cross-referenced with reported controls — confirming whether clients actually remediated what they said they remediated."
          />
          <CharacteristicCard
            title="Policy & Training Validation"
            description="Security policy versions and employee training completion records are validated against attestations — closing the 'we have a policy' vs. 'employees follow it' gap."
          />
        </div>
        <FlowDiagram
          steps={[
            'Client attests to controls in DDQ',
            'TrueGuard ingests live data across services',
            'AI cross-references attestation vs. reality',
            'Discrepancies surfaced instantly',
            'Remediation tracked to close',
          ]}
        />
      </SubSection>

      <SubSection icon="🔍" title="What TrueGuard Catches">
        <p>The most common — and most dangerous — discrepancies TrueGuard surfaces:</p>
        <ul className="list-disc pl-5 space-y-2 mt-2 text-sm text-gray-700">
          <li>
            <strong>Controls attested but not implemented</strong> — MFA reported as enabled on all
            systems; endpoint scan shows uncovered devices
          </li>
          <li>
            <strong>Vulnerability exposure</strong> — Network or endpoint vulnerabilities present
            despite &ldquo;patching current&rdquo; DDQ responses
          </li>
          <li>
            <strong>Training gaps</strong> — Employees listed as trained who have not completed
            required security awareness modules
          </li>
          <li>
            <strong>Policy inconsistencies</strong> — Outdated or unsigned policy documents that
            contradict what was attested to investors
          </li>
          <li>
            <strong>Cloud configuration drift</strong> — Settings that changed after the last
            assessment, exposing new attack surface without triggering any alert
          </li>
        </ul>
      </SubSection>

      {/* ── Why Now ──────────────────────────────────────── */}
      <SectionHeading>Why Now? The Market Moment</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed">
        Alternative investment firms are under compounding pressure from three directions
        simultaneously. TrueGuard is a direct answer to all three.
      </p>

      <SubSection icon="⚖️" title="Regulatory Pressure Is Accelerating">
        <p>
          The SEC&apos;s 2025 exam priorities put cybersecurity controls — and their actual
          implementation — front and center. Regulators are no longer satisfied with policies on
          paper; they want evidence that controls are{' '}
          <strong>operating effectively at the time of any incident</strong>. Reg S-P&apos;s
          72-hour breach notification window means firms need to know their control status
          continuously, not quarterly.
        </p>
        <p className="mt-2">
          <strong>The risk:</strong> A fund that attests to strong controls during an ODD, then
          suffers a breach caused by a control gap that quietly drifted, faces both regulatory
          enforcement and LP trust destruction simultaneously.
        </p>
      </SubSection>

      <SubSection icon="📋" title="LP Due Diligence Is Getting Harder">
        <p>
          Institutional allocators — pension funds, endowments, fund-of-funds — have materially
          increased the depth and frequency of their ODD processes. DDQs that previously took 30
          minutes now take days. LPs are asking not just &ldquo;do you have controls&rdquo; but
          &ldquo;can you prove they work?&rdquo; Funds that can demonstrate continuous validation
          have a meaningful fundraising advantage over firms still pointing to last year&apos;s
          assessment report.
        </p>
      </SubSection>

      <SubSection icon="🤖" title="AI Has Raised the Stakes on Both Sides">
        <p>
          AI-powered attacks move faster than annual assessment cycles. A firm that was
          &ldquo;compliant&rdquo; in January can be exposed by March due to control drift,
          new vulnerabilities, or shadow AI tool usage introducing new risk vectors. Point-in-time
          assessments create a false sense of security — TrueGuard turns security posture into a
          live signal, not a historical snapshot.
        </p>
      </SubSection>

      {/* ── How It Fits the Offering ──────────────────────── */}
      <SectionHeading>How TrueGuard Fits the Drawbridge Offering</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed">
        TrueGuard is not a standalone product — it is the validation layer that sits on top of
        everything Drawbridge already delivers. The difference between{' '}
        <strong>doing the work</strong> and <strong>proving the work is actually working</strong>.
      </p>

      <SubSection icon="🔗" title="The Integration Advantage">
        <div className="grid grid-cols-2 gap-4 mt-1">
          <CharacteristicCard
            title="Built on Existing Drawbridge Services"
            description="TrueGuard pulls from network scans, endpoint data, pen test findings, training records, and policy documents already delivered — no new integrations or onboarding burden for the client."
          />
          <CharacteristicCard
            title="Independent Third-Party Validation"
            description="Because Drawbridge delivers the underlying services AND validates the controls, clients get independent proof — not self-assessed posture data, but third-party verified evidence that LPs and regulators accept."
          />
          <CharacteristicCard
            title="Continuous vs. Point-in-Time"
            description="Every other provider delivers a snapshot. TrueGuard delivers a live feed. Control status doesn't quietly degrade between assessments — it's monitored and flagged in real time."
          />
          <CharacteristicCard
            title="DDQ Ready-State"
            description="When an LP sends a DDQ, TrueGuard dramatically reduces completion time by surfacing validated, evidence-backed data — eliminating days of manual documentation gathering."
          />
        </div>
      </SubSection>

      <SubSection icon="🎯" title="Outcomes Framework Mapping">
        <p>Map TrueGuard directly to the six Drawbridge outcomes clients already care about:</p>
        <div className="mt-3 space-y-2">
          {[
            {
              outcome: 'Regulatory Readiness',
              mapping:
                'Continuous control validation means clients can demonstrate to SEC examiners that controls were operating at the time of any incident — not just at their last assessment date.',
            },
            {
              outcome: 'Investor & LP Confidence',
              mapping:
                'LPs asking "can you prove your controls work?" get a real answer: validated, continuously updated evidence — not a PDF from last March.',
            },
            {
              outcome: 'Operational Resilience',
              mapping:
                'TrueGuard catches control drift and misconfigurations before attackers or auditors do — giving the operations team time to remediate proactively rather than reactively.',
            },
            {
              outcome: 'Cyber Risk Reduction',
              mapping:
                'Validated controls are effective controls. By closing the attestation-vs-reality gap, TrueGuard materially reduces the firm\'s actual exposure — not just its reported exposure.',
            },
            {
              outcome: 'Competitive Differentiation',
              mapping:
                'In competitive fundraising, the fund with demonstrable, continuously validated security posture wins allocations from institutional LPs with rigorous ODD mandates.',
            },
            {
              outcome: 'Time & Cost Efficiency',
              mapping:
                'DDQ completion time drops significantly when TrueGuard surfaces evidence-backed answers — freeing up ops and compliance teams from weeks of manual documentation.',
            },
          ].map((item) => (
            <div key={item.outcome} className="rounded-md border border-gray-200 bg-white p-3">
              <p className="text-xs font-semibold text-db-dark uppercase tracking-wide">
                {item.outcome}
              </p>
              <p className="text-xs text-gray-600 mt-1">{item.mapping}</p>
            </div>
          ))}
        </div>
      </SubSection>

      {/* ── Positioning & Talk Tracks ─────────────────────── */}
      <SectionHeading>Positioning & Talk Tracks</SectionHeading>

      <SubSection icon="💬" title="The Core Positioning Line">
        <div className="rounded-md bg-db-dark p-4 text-white">
          <p className="text-xs font-semibold text-db-aqua uppercase tracking-wide mb-2">
            Lead With This
          </p>
          <p className="text-sm italic leading-relaxed">
            &ldquo;Traditional due diligence asks: <em>Do you have this control?</em> TrueGuard
            asks: <em>You said you have this control — is it actually operating right now?</em>{' '}
            That&apos;s the difference between attestation and proof.&rdquo;
          </p>
        </div>
      </SubSection>

      <SubSection icon="🚀" title="Opening the Conversation">
        <div className="space-y-3">
          {[
            {
              label: 'Regulatory Angle',
              text:
                'The SEC isn\'t just asking if you have a patch management policy — they want to know if patching is actually happening. TrueGuard gives you continuous evidence that your controls are operating, not just documented.',
            },
            {
              label: 'LP / Fundraising Angle',
              text:
                'Your LPs\' ODD teams are getting more sophisticated. They\'re not satisfied with a DDQ checkbox anymore — they want proof. TrueGuard lets you show an allocator validated, continuously monitored controls, not a PDF from last March.',
            },
            {
              label: 'Operational Angle',
              text:
                'Right now, you have no way of knowing if a control drifted between your last assessment and today. TrueGuard closes that window — you\'re not flying blind between annual reviews anymore.',
            },
          ].map((item) => (
            <div key={item.label} className="rounded-md bg-gray-50 p-3 border border-gray-200">
              <p className="text-xs font-semibold text-db-dark uppercase tracking-wide mb-1">
                {item.label}
              </p>
              <p className="text-sm italic text-gray-700">&ldquo;{item.text}&rdquo;</p>
            </div>
          ))}
        </div>
      </SubSection>

      <SubSection icon="🔍" title="Discovery Questions">
        <p>Use these to surface the pain before introducing TrueGuard:</p>
        <ul className="list-disc pl-5 space-y-2 mt-2 text-sm text-gray-700">
          <li>
            &ldquo;When an LP sends you a DDQ, how long does it typically take your team to pull
            together the responses? Where does most of that time go?&rdquo;
          </li>
          <li>
            &ldquo;If the SEC asked you today to prove that your MFA policy is actively enforced on
            every endpoint — how would you demonstrate that?&rdquo;
          </li>
          <li>
            &ldquo;Between your annual assessment and now, do you have visibility into whether any
            of your security controls have drifted or changed?&rdquo;
          </li>
          <li>
            &ldquo;Have you ever completed an ODD and then received a follow-up from an LP that you
            couldn&apos;t answer quickly with documented evidence?&rdquo;
          </li>
          <li>
            &ldquo;Are there controls you know exist on paper but would be nervous to have someone
            verify in real time?&rdquo;
          </li>
        </ul>
      </SubSection>

      {/* ── Objection Handling ───────────────────────────── */}
      <SectionHeading>Objection Handling</SectionHeading>

      <div className="space-y-3">
        {[
          {
            objection: '"We already do DDQs and have a strong security questionnaire process."',
            response:
              'That\'s exactly why TrueGuard is valuable — it\'s not replacing your DDQ process, it\'s making your answers defensible. Right now you\'re attesting to controls. TrueGuard validates that those attestations are accurate, so when an LP or regulator asks for proof, you have it. The question isn\'t whether you fill out DDQs well — it\'s whether the answers hold up under scrutiny.',
          },
          {
            objection: '"We already have security tools that monitor our environment."',
            response:
              'TrueGuard isn\'t a security monitoring tool — it\'s a control validation platform. Your SIEM and EDR tell you what\'s happening in your environment. TrueGuard cross-references what\'s happening with what you\'ve told your investors is happening. Those are different questions. One is operational; the other is governance and accountability to your LPs and regulators.',
          },
          {
            objection: '"This sounds complex. How much work is this for our team?"',
            response:
              'Because TrueGuard is built on top of Drawbridge services you already have, the heavy lifting is done on our side. We\'re not asking your team to instrument new data sources or manage a new platform. We pull from your existing assessments, pen tests, training records, and policy documents — and surface the validation layer on top. The complexity sits with us, not you.',
          },
          {
            objection: '"We already monitor our controls internally."',
            response:
              'Internal monitoring is valuable — but it\'s also self-reported. When an institutional LP or the SEC reviews your controls, an internal monitoring report carries less weight than independent, third-party validated evidence. TrueGuard gives you the independent verification that external stakeholders actually require and that your own team can\'t provide.',
          },
          {
            objection: '"We just passed an ODD — our controls are fine."',
            response:
              'Congratulations — that\'s a real win. The challenge is that passing an ODD is a point-in-time snapshot. TrueGuard protects that result by ensuring controls don\'t drift before your next review. The worst outcome would be passing an ODD, then having a breach six months later because a control quietly degraded. TrueGuard prevents that — and keeps the evidence fresh for your next LP conversation.',
          },
          {
            objection: '"Can TrueGuard automatically answer DDQs?"',
            response:
              'Auto-population is on the roadmap and it\'s a meaningful near-term capability. Where TrueGuard adds immediate value is in dramatically reducing DDQ completion time by surfacing validated, evidence-backed data your team can use directly. Instead of days of manual documentation gathering, the evidence is ready to go. Auto-population is the next layer.',
          },
        ].map((item) => (
          <div key={item.objection} className="rounded-md border border-gray-200 bg-white p-4">
            <p className="text-xs font-semibold text-amber-700 uppercase tracking-wide mb-1">
              Objection
            </p>
            <p className="text-sm italic text-gray-700 mb-3">{item.objection}</p>
            <p className="text-xs font-semibold text-db-aqua-dark uppercase tracking-wide mb-1">
              Response
            </p>
            <p className="text-sm text-gray-700">{item.response}</p>
          </div>
        ))}
      </div>

      {/* ── Who to Target ────────────────────────────────── */}
      <SectionHeading>Who to Target</SectionHeading>

      <SubSection icon="👤" title="Primary Buyers">
        <div className="grid grid-cols-3 gap-3 mt-1">
          <CharacteristicCard
            title="COO / CTO"
            description="Owns the operational risk narrative. Feels the DDQ burden directly. Motivated by reducing compliance overhead and protecting the firm's fundraising position."
          />
          <CharacteristicCard
            title="CISO / Head of IT"
            description="Understands the control validation gap. Wants independent proof of their team's effectiveness. TrueGuard validates their work and gives them board-ready evidence."
          />
          <CharacteristicCard
            title="CFO / Finance Leadership"
            description="Concerned about regulatory cost and LP relationships. Motivated by ROI: TrueGuard reduces ODD burden, reduces enforcement risk, and protects capital allocations."
          />
        </div>
      </SubSection>

      <SubSection icon="🏦" title="Best-Fit Client Profiles">
        <div className="grid grid-cols-2 gap-3 mt-1">
          <CharacteristicCard
            title="Actively Fundraising Firms"
            description="LPs are scrutinizing ODD more carefully than ever. A fund in market with TrueGuard-validated controls has a demonstrable edge in allocation conversations."
          />
          <CharacteristicCard
            title="Post-ODD Clients"
            description="Just passed an ODD? This is the ideal moment. Protect that result — ensure controls don't drift before the next review cycle and keep the evidence fresh."
          />
          <CharacteristicCard
            title="Firms with Recent Incidents"
            description="A client who has experienced a breach or near-miss understands the attestation-vs-reality gap viscerally. TrueGuard directly addresses the root cause."
          />
          <CharacteristicCard
            title="Firms Under Regulatory Scrutiny"
            description="SEC-registered advisers preparing for exams or managing deficiency letters need demonstrable, continuous control evidence — exactly what TrueGuard delivers."
          />
        </div>
      </SubSection>

      {/* ── Drawbridge Angle ─────────────────────────────── */}
      <DrawbridgeAngle>
        <p>
          TrueGuard is the logical evolution of what Drawbridge has always done for alternative
          investment firms — now with a new level of proof. Trusted by{' '}
          <strong>1,300+ firms</strong> across hedge funds, private equity, and institutional
          allocators, Drawbridge has built the deepest cybersecurity program purpose-built for this
          industry. Every network scan, pen test, training record, and policy review we deliver
          generates data. TrueGuard turns that data into{' '}
          <strong>continuous, validated evidence</strong> that controls are actually working — not
          just documented.
        </p>
        <p className="mt-2">
          No other provider can offer this because no other provider has the underlying service
          breadth and client relationships that Drawbridge does. A standalone monitoring vendor can
          tell a client what&apos;s happening in their environment. Only Drawbridge can
          cross-reference that against what the client told their LPs and regulators — and serve as
          the independent third party that institutional investors actually trust.
        </p>
        <p className="mt-2">
          Position TrueGuard at renewal as the natural next layer of the program:{' '}
          <strong>you&apos;ve done the work — now let&apos;s prove the work is working.</strong>{' '}
          For clients who are fundraising, under exam, or managing LP relationships, this is not a
          nice-to-have. It&apos;s the difference between a security program and a defensible
          security posture.{' '}
          <strong>Raise Your Guard. Raise Your Score. Raise Your Bar.</strong>
        </p>
      </DrawbridgeAngle>

      {/* ── Key Terms ────────────────────────────────────── */}
      <SectionHeading>Key Terms</SectionHeading>
      <div className="grid grid-cols-3 gap-3">
        <TermBadge
          term="Control Validation"
          definition="The process of verifying that a security control is not just documented, but actively operating as intended — confirmed by independent evidence, not self-attestation."
        />
        <TermBadge
          term="DDQ"
          definition="Due Diligence Questionnaire — the formal security questionnaire LPs and institutional investors send to funds before allocating capital, often covering 50–200+ controls."
        />
        <TermBadge
          term="Control Drift"
          definition="The degradation of a security control between assessment periods — e.g., MFA disabled for a contractor, a critical patch not applied, a policy document not updated after personnel changes."
        />
        <TermBadge
          term="ODD"
          definition="Operational Due Diligence — the review process institutional LPs conduct before investing, often including cybersecurity assessment as a gating requirement for capital allocation."
        />
        <TermBadge
          term="Continuous Validation"
          definition="Real-time, ongoing verification that security controls remain implemented and effective — as opposed to point-in-time assessments conducted annually or quarterly."
        />
        <TermBadge
          term="Attestation Gap"
          definition="The difference between what a firm reports in a DDQ or assessment and the actual state of their security environment — the core problem TrueGuard solves."
        />
      </div>
    </>
  );
}
