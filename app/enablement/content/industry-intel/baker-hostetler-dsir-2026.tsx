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

export default function BakerHostetlerDSIR2026() {
  return (
    <>
      <HeroSection
        icon="📋"
        title="BakerHostetler 2026 DSIR Report"
        subtitle="BakerHostetler handled 1,250+ data security incidents in 2025. Here's what the numbers say — and why it matters for every Drawbridge client conversation."
      />
      <LastUpdated date="April 2, 2026 at 12:00 PM" />

      <div className="mt-4 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3">
        <p className="text-xs text-gray-500">
          <strong className="text-gray-700">Source:</strong> BakerHostetler Data Security Incident Response Report 2026 — based on 1,250+ incidents handled by BakerHostetler's DSIR practice in 2025. One of the most comprehensive third-party incident datasets in the industry.
        </p>
      </div>

      {/* Stats Row */}
      <div className="mt-6 grid grid-cols-4 gap-4">
        <StatCard label="Incidents Handled in 2025" value="1,250+" />
        <StatCard label="Finance & Insurance Share" value="18%" />
        <StatCard label="Incidents Involving a Vendor" value="25%" />
        <StatCard label="States with AI Regulation" value="38" />
      </div>

      {/* Finance is Target #2 */}
      <SectionHeading>Finance & Insurance: The #2 Target</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed">
        Healthcare remains the most targeted sector at 27%, but{' '}
        <strong>Finance & Insurance is firmly #2 at 18%</strong> — accounting for nearly 1 in 5
        of every incident BakerHostetler handled in 2025. That's ahead of Business & Professional
        Services (15%), Manufacturing (9%), and Technology (9%).
      </p>
      <div className="mt-4 grid grid-cols-3 gap-3">
        {[
          { rank: '#1', sector: 'Healthcare', pct: '27%', highlight: false },
          { rank: '#2', sector: 'Finance & Insurance', pct: '18%', highlight: true },
          { rank: '#3', sector: 'Business & Professional Services', pct: '15%', highlight: false },
          { rank: '#4', sector: 'Retail & Hospitality', pct: '11%', highlight: false },
          { rank: '#5', sector: 'Manufacturing', pct: '9%', highlight: false },
          { rank: '#6', sector: 'Technology', pct: '9%', highlight: false },
        ].map(({ rank, sector, pct, highlight }) => (
          <div
            key={rank}
            className={`rounded-lg border p-3 flex items-center gap-3 ${
              highlight
                ? 'border-db-orange/40 bg-db-orange/5'
                : 'border-gray-200 bg-white'
            }`}
          >
            <span className={`text-xs font-bold w-8 shrink-0 ${highlight ? 'text-db-orange' : 'text-gray-400'}`}>{rank}</span>
            <div className="flex-1 min-w-0">
              <p className={`text-xs font-semibold truncate ${highlight ? 'text-db-dark' : 'text-gray-700'}`}>{sector}</p>
            </div>
            <span className={`text-sm font-bold shrink-0 ${highlight ? 'text-db-orange' : 'text-gray-500'}`}>{pct}</span>
          </div>
        ))}
      </div>
      <p className="mt-3 text-sm text-gray-700 leading-relaxed">
        The most common attack vectors into financial firms: <strong>Network Intrusion (47%)</strong>,{' '}
        <strong>Business Email Compromise (32%)</strong>, and Inadvertent Disclosure (8%). BEC
        remains disproportionately impactful in financial services — it's the attack that turns
        a compromised inbox into a wire transfer.
      </p>

      {/* Vendor Risk */}
      <SectionHeading>The Vendor Problem: 1 in 4 Incidents</SectionHeading>
      <div className="rounded-lg border-l-4 border-db-dark bg-db-dark/5 p-4 mb-4">
        <p className="text-sm font-semibold text-db-dark">
          "25% of the incidents we handled in 2025 occurred at a vendor."
        </p>
        <p className="text-xs text-gray-500 mt-1">— BakerHostetler 2026 DSIR Report, p.17</p>
      </div>
      <p className="text-sm text-gray-700 leading-relaxed">
        That figure held steady from 2024 — meaning vendor-originated incidents aren't a spike,
        they're a structural feature of the threat landscape. In healthcare, it was even worse:{' '}
        <strong>35% of incidents</strong> for healthcare clients traced back to a vendor. The
        Change Healthcare breach alone exposed 192.7 million individuals from a single third-party
        failure.
      </p>

      <SubSection icon="⏱️" title="The Notification Chain: 72 Hours → 30 Days">
        <p>
          The 2025 Reg S-P amendments created a two-stage notification obligation that runs
          directly through the vendor relationship:
        </p>
        <div className="mt-3 flex items-stretch gap-3">
          <div className="flex-1 rounded-lg border border-db-dark/20 bg-db-dark/5 p-3 text-center">
            <p className="text-xs font-semibold text-db-dark mb-1">Vendor discovers breach</p>
            <p className="text-xs text-gray-500">involving your sensitive data</p>
          </div>
          <div className="flex items-center text-gray-400 font-bold text-sm shrink-0">→</div>
          <div className="flex-1 rounded-lg border border-amber-300 bg-amber-50 p-3 text-center">
            <p className="text-xs font-bold text-amber-800 mb-1">72-hour window</p>
            <p className="text-xs text-amber-700">Vendor must notify the firm</p>
          </div>
          <div className="flex items-center text-gray-400 font-bold text-sm shrink-0">→</div>
          <div className="flex-1 rounded-lg border border-red-300 bg-red-50 p-3 text-center">
            <p className="text-xs font-bold text-red-800 mb-1">30-day window</p>
            <p className="text-xs text-red-700">Firm must notify affected customers</p>
          </div>
        </div>
        <p className="mt-3 text-sm text-gray-700">
          That 72-hour vendor notification window only works if you have the right contractual
          requirements in place <em>before</em> an incident. Firms that haven't updated their
          vendor agreements to include this obligation — or who don't know which vendors touch
          their investor data — are already behind.
        </p>
      </SubSection>

      {/* Reg S-P */}
      <SectionHeading>Reg S-P: Now Operational, Not Theoretical</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed">
        BakerHostetler explicitly calls out Reg S-P's 2025 amendments as a live compliance
        obligation for every SEC-registered firm. The report confirms the three pillars the SEC
        now requires:
      </p>
      <div className="mt-3 grid grid-cols-3 gap-3">
        {[
          {
            title: 'Written Incident Response Program',
            body: 'Defined roles, escalation procedures, and breach notification workflows — documented and current.',
          },
          {
            title: 'Service Provider Management Program',
            body: 'Contractual security requirements on vendors, plus 72-hour breach notification clauses for those touching sensitive data.',
          },
          {
            title: 'Data Disposal Policy',
            body: 'Formal process for secure disposal of customer information — increasingly examined alongside the broader safeguards program.',
          },
        ].map(({ title, body }) => (
          <div key={title} className="rounded-lg border border-gray-200 bg-white overflow-hidden">
            <div className="bg-db-dark px-3 py-2">
              <p className="text-xs font-semibold text-white">{title}</p>
            </div>
            <div className="p-3">
              <p className="text-xs text-gray-600 leading-relaxed">{body}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-3 text-sm text-gray-700 leading-relaxed">
        Notably, the report documents a shift in SEC enforcement posture: the SEC dismissed its
        case against SolarWinds and its CISO in November 2025, and the volume of cyber-related
        Form 8-K filings dropped from 24 in 2024 to 13 in 2025. But the SEC also{' '}
        <strong>created a new Cyber and Emerging Technologies Unit (CETU)</strong> in early 2025 —
        signaling a more targeted, better-resourced enforcement approach rather than retreat.
      </p>

      {/* AI */}
      <SectionHeading>AI as an Attack Tool: It's Already Here</SectionHeading>
      <SubSection icon="🤖" title="Vibe Hacking and Agentic Attacks">
        <p>
          The report documents two significant AI-enabled attack developments in 2025:
        </p>
        <ul className="list-disc ml-5 space-y-2 mt-2">
          <li>
            <strong>August 2025 (Anthropic report):</strong> A "vibe hacking" operation used
            Claude Code for reconnaissance, credential harvesting, and network penetration —
            targeting approximately 17 organizations.
          </li>
          <li>
            <strong>November 2025 (Anthropic report):</strong> The first reported
            "AI-orchestrated cyber espionage campaign," targeting ~30 entities, in which AI
            executed <strong>80–90% of tactical work independently</strong> with humans
            providing validation only at key decision points.
          </li>
        </ul>
        <p className="mt-3 text-sm text-gray-700">
          The practical implication: AI compresses the attack timeline. A threat actor who
          automates reconnaissance and runs parallel workstreams{' '}
          <strong>shrinks the window between initial access and significant impact</strong> —
          which means the window for detection and containment shrinks too. BakerHostetler's
          framing: <em>"AI may change speed and scale."</em>
        </p>
      </SubSection>

      <SubSection icon="⚖️" title="AI Regulation: 38 States Moved in 2025">
        <p>
          The regulatory environment around AI moved fast in 2025 — and is accelerating:
        </p>
        <ul className="list-disc ml-5 space-y-1 mt-2">
          <li><strong>38 states</strong> adopted or enacted AI measures in 2025</li>
          <li>All 50 states, Puerto Rico, D.C., and the Virgin Islands introduced AI legislation</li>
          <li>Colorado, Texas, Illinois, California, and New York all enacted specific AI requirements — bias assessment, disclosure mandates, and safety frameworks for high-risk systems</li>
        </ul>
        <p className="mt-2 text-sm text-gray-700">
          BakerHostetler's summary captures the shift: <em>"The era of 'move fast and break things'
          has given way to 'move thoughtfully and document everything.'"</em> Financial firms
          using AI in trading, compliance, or client communications now have state-level exposure
          they may not have mapped.
        </p>
      </SubSection>

      <DrawbridgeAngle>
        <p>
          Every major finding in this report maps directly to a Drawbridge client conversation:
        </p>
        <ul className="list-disc ml-5 space-y-2 mt-2">
          <li>
            <strong>Vendor Risk (p.17, p.23):</strong> "1 in 4 incidents happened at a vendor"
            is a powerful opener for any client who thinks their own perimeter is the whole
            story. Use it to introduce the Vendor Cyber Risk Services conversation — and the
            72-hour notification chain to reinforce why contractual vendor oversight is now
            a Reg S-P requirement, not a best practice.
          </li>
          <li>
            <strong>Reg S-P (p.25, p.35):</strong> The three-pillar framework the report
            describes — IR program, vendor management program, data disposal — maps precisely
            to the Drawbridge program. Use it to frame the annual review: "The SEC is now asking
            for all three of these. Let's make sure you can show evidence of each."
          </li>
          <li>
            <strong>AI (p.38):</strong> Vibe hacking and agentic attacks give real-world texture
            to the AI risk story. The shrinking detection window is a strong argument for
            proactive controls — GenAI assessments, AI policy, and employee training — before
            an incident forces the conversation.
          </li>
          <li>
            <strong>Finance at 18% (p.5):</strong> Use the sector ranking to counter the "it won't
            happen to us" objection. Finance isn't a background target — it's the second most
            targeted sector in the country, trailing only healthcare.
          </li>
        </ul>
        <p className="mt-3">
          <strong>Raise Your Guard. Pass the Test.</strong>
        </p>
      </DrawbridgeAngle>
    </>
  );
}
