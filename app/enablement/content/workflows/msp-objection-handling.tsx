'use client';

import React from 'react';
import {
  HeroSection,
  SectionHeading,
  SubSection,
  LastUpdated,
  StatCard,
  DrawbridgeAngle,
} from '../../components/shared-ui';

export default function MspObjectionHandling() {
  return (
    <article className="space-y-6 max-w-4xl">
      <LastUpdated date="2026-03-09" />

      <HeroSection
        icon="🛡️"
        title="MSP Objection Handling"
        subtitle="When a client says &quot;We're moving our cyber program to our MSP&quot; — the regulatory case for independent oversight and how to reframe the conversation."
      />

      {/* ------------------------------------------------------------------ */}
      {/*  The Objection                                                      */}
      {/* ------------------------------------------------------------------ */}
      <SectionHeading>The Objection</SectionHeading>
      <div className="rounded-lg border-l-4 border-red-400 bg-red-50 p-5">
        <p className="text-sm italic text-gray-700">
          &quot;Our MSP already handles our IT — we&apos;re going to have them run our cybersecurity
          program too. It&apos;ll simplify things and save us money.&quot;
        </p>
      </div>
      <p className="text-sm text-gray-700 leading-relaxed">
        This is an increasingly common objection, especially from smaller firms looking to
        consolidate vendors. The instinct is understandable — but it creates a{' '}
        <strong>structural conflict of interest</strong> that regulators on three continents are
        actively scrutinizing. The entity that manages your controls should not be the same entity
        that evaluates whether those controls are working.
      </p>

      {/* ------------------------------------------------------------------ */}
      {/*  The Core Problem                                                   */}
      {/* ------------------------------------------------------------------ */}
      <SectionHeading>The Core Problem: Who Grades the Homework?</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatCard value="~50%" label="of security controls typically owned or managed by the MSP" />
        <StatCard value="0%" label="of those controls independently validated when MSP self-assesses" />
        <StatCard value="3" label="major regulators (SEC, FCA, DORA) requiring independent oversight" />
      </div>
      <p className="text-sm text-gray-700 leading-relaxed">
        When your MSP runs your cybersecurity program, they&apos;re assessing the effectiveness of
        controls they themselves implemented and manage. This is the equivalent of an audit firm
        auditing its own consulting work — something the accounting industry banned decades ago.
        Financial services regulators are now applying the same logic to cybersecurity.
      </p>

      {/* ------------------------------------------------------------------ */}
      {/*  Regulatory Framework                                               */}
      {/* ------------------------------------------------------------------ */}
      <SectionHeading>The Regulatory Case for Independence</SectionHeading>

      <SubSection icon="🇺🇸" title="SEC (United States)">
        <p className="font-semibold text-db-dark">Regulation S-P (Amended 2024, Effective 2025-26)</p>
        <p>
          The SEC&apos;s amended Regulation S-P requires firms to <strong>oversee service providers</strong> with
          access to customer information. Firms must ensure service providers maintain safeguards — and critically,
          must have the ability to <strong>independently verify</strong> those safeguards are working.
          Letting your MSP self-certify its own controls does not satisfy this requirement.
        </p>

        <p className="font-semibold text-db-dark mt-4">SEC Exam Priorities (2024-2025)</p>
        <p>
          SEC OCIE has explicitly flagged <strong>vendor oversight</strong> and <strong>third-party risk management</strong> as
          exam priorities. Examiners are looking for evidence that firms conduct independent assessments of
          their service providers — not vendor-provided attestations. The SEC&apos;s Risk Alert on
          cybersecurity specifically recommends &quot;independent audits of security controls.&quot;
        </p>

        <p className="font-semibold text-db-dark mt-4">Enforcement Precedent</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>R.T. Jones Capital</strong> — $75K fine for failing to adopt written cybersecurity policies and conduct periodic risk assessments</li>
          <li><strong>Voya Financial Advisors</strong> — $1M fine for identity theft failures where third-party oversight was inadequate</li>
          <li><strong>Morgan Stanley</strong> — $1M fine for failing to protect customer data, including vendor management failures</li>
          <li><strong>Cetera / Cambridge / KMS</strong> — $750K combined for email security failures with insufficient independent controls</li>
          <li><strong>Unisys, Avaya, Check Point, Mimecast</strong> — $6.985M combined (SEC Cyber Fraud, 2024) for minimizing breach disclosures</li>
        </ul>
        <p>
          Total: <strong>$10M+ in penalties</strong> where inadequate independent oversight of security controls
          was a contributing factor.
        </p>
      </SubSection>

      <SubSection icon="🇪🇺" title="DORA (EU — Effective January 2025)">
        <p>
          The Digital Operational Resilience Act is the most explicit regulation globally on the
          independence of ICT risk management:
        </p>
        <ul className="list-disc pl-5 space-y-2 mt-2">
          <li>
            <strong>Article 6(4)</strong> — The ICT risk management function must be{' '}
            <strong>&quot;independent from the ICT operations functions&quot;</strong> with a{' '}
            <strong>&quot;sufficient level of separation&quot;</strong> to avoid conflicts of interest.
            An MSP running both operations and security assessment directly violates this.
          </li>
          <li>
            <strong>Article 24(4)</strong> — ICT security testing must be conducted by{' '}
            <strong>&quot;independent parties, either internal or external.&quot;</strong> The MSP
            that configured your firewall cannot independently test whether it was configured correctly.
          </li>
          <li>
            <strong>Article 26(8)</strong> — Threat-Led Penetration Testing (TLPT) must use{' '}
            <strong>external testers</strong> that are &quot;independent from the financial entity&quot;
            and have no conflicts of interest.
          </li>
          <li>
            <strong>Article 28(4)</strong> — Before entering ICT service arrangements, firms must{' '}
            <strong>assess potential conflicts of interest</strong>. Bundling security oversight with
            the provider being overseen is the textbook conflict DORA targets.
          </li>
          <li>
            <strong>Article 29</strong> — Firms must monitor <strong>ICT concentration risk</strong>{' '}
            and avoid over-reliance on a single provider across critical functions.
          </li>
        </ul>
        <p className="mt-2">
          DORA&apos;s <strong>three lines of defence model</strong> makes this unambiguous: the entity
          operating controls (1st line) must be separate from the entity assessing them (2nd line).
          An MSP occupying both lines collapses the model regulators require.
        </p>
      </SubSection>

      <SubSection icon="🇬🇧" title="FCA (United Kingdom)">
        <p className="font-semibold text-db-dark">Principle 3: Management & Control</p>
        <p>
          Firms must take &quot;reasonable care to organise and control its affairs responsibly and
          effectively, with adequate risk management systems.&quot; The FCA interprets this as
          requiring <strong>independent risk assessment</strong> capabilities — not delegation to the
          same entity managing the risk.
        </p>

        <p className="font-semibold text-db-dark mt-4">SYSC 8.1: Outsourcing Requirements</p>
        <p>
          Firms outsourcing critical functions must maintain <strong>effective oversight</strong> and
          the <strong>ability to independently evaluate</strong> the service provider&apos;s performance.
          Relying on your MSP&apos;s own reporting does not constitute independent evaluation.
        </p>

        <p className="font-semibold text-db-dark mt-4">PS21/3: Operational Resilience</p>
        <p>
          The FCA&apos;s operational resilience framework requires firms to identify important
          business services and set <strong>impact tolerances</strong> — with independent testing
          to verify they can remain within those tolerances during disruption.
        </p>

        <p className="font-semibold text-db-dark mt-4">Enforcement Precedent</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Equifax Ltd — £11.16M fine</strong> — The FCA specifically cited that the security
            function <strong>reported to the same entity it was meant to assess</strong> as a
            structural failure. The lack of independent oversight was a central finding.
          </li>
          <li>
            <strong>TSB — £48.65M fine</strong> — Inadequate oversight of IT migration and outsourced
            services, with insufficient independent assessment of third-party risk.
          </li>
        </ul>
      </SubSection>

      {/* ------------------------------------------------------------------ */}
      {/*  Talk Tracks                                                        */}
      {/* ------------------------------------------------------------------ */}
      <SectionHeading>RM Talk Tracks</SectionHeading>
      <p className="text-sm text-gray-600 mb-3">
        Use these conversation starters when the MSP objection comes up. Each reframes
        the conversation from cost to risk.
      </p>

      <div className="space-y-4">
        <div className="rounded-lg border border-gray-200 bg-white p-5">
          <div className="flex items-start gap-3">
            <span className="text-lg mt-0.5">1️⃣</span>
            <div>
              <p className="font-semibold text-db-dark text-sm">The Audit Analogy</p>
              <p className="text-sm text-gray-700 mt-1">
                &quot;Would your fund let your accountant audit their own work? That&apos;s
                exactly what happens when your MSP assesses the controls they built and manage.
                Regulators — SEC, FCA, DORA — are all moving toward requiring the same independence
                in cybersecurity that&apos;s been standard in financial auditing for decades.&quot;
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-5">
          <div className="flex items-start gap-3">
            <span className="text-lg mt-0.5">2️⃣</span>
            <div>
              <p className="font-semibold text-db-dark text-sm">The ODD Question</p>
              <p className="text-sm text-gray-700 mt-1">
                &quot;When your allocators send an ODD questionnaire asking who independently
                validates your cybersecurity controls — what&apos;s the answer if it&apos;s
                the same MSP that runs them? LPs are asking this question more than ever.
                An independent assessment gives you a clean answer.&quot;
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-5">
          <div className="flex items-start gap-3">
            <span className="text-lg mt-0.5">3️⃣</span>
            <div>
              <p className="font-semibold text-db-dark text-sm">The Reg S-P Angle (US Firms)</p>
              <p className="text-sm text-gray-700 mt-1">
                &quot;The amended Reg S-P requires you to oversee service providers with access
                to customer data — including your MSP. If your MSP is also the one telling you
                whether their controls are working, you don&apos;t have oversight. You have
                a vendor self-assessment. That&apos;s the gap SEC examiners are looking for.&quot;
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-5">
          <div className="flex items-start gap-3">
            <span className="text-lg mt-0.5">4️⃣</span>
            <div>
              <p className="font-semibold text-db-dark text-sm">The DORA Angle (EU/UK Firms)</p>
              <p className="text-sm text-gray-700 mt-1">
                &quot;DORA Article 6 explicitly requires that your ICT risk management function
                be independent from the teams running ICT operations. If your MSP does both,
                you&apos;re in direct conflict with a regulation that came into force in January 2025.
                This isn&apos;t a gray area — it&apos;s in the text.&quot;
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-5">
          <div className="flex items-start gap-3">
            <span className="text-lg mt-0.5">5️⃣</span>
            <div>
              <p className="font-semibold text-db-dark text-sm">The Cost Reframe</p>
              <p className="text-sm text-gray-700 mt-1">
                &quot;I understand the appeal of consolidating. But consider the math: our annual
                fee is a fraction of one SEC enforcement action, one LP pullback, or one
                breach event. You&apos;re not paying for a second vendor — you&apos;re paying
                for independent validation that protects your fund from regulatory risk,
                LP attrition, and the blind spots your MSP can&apos;t see in their own work.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/*  Common Counterarguments                                            */}
      {/* ------------------------------------------------------------------ */}
      <SectionHeading>Handling Follow-Up Objections</SectionHeading>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-db-dark text-white text-left">
              <th className="px-4 py-3 font-semibold w-1/3">They Say</th>
              <th className="px-4 py-3 font-semibold w-2/3">You Say</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr className="bg-white">
              <td className="px-4 py-3 align-top font-medium text-gray-800">
                &quot;Our MSP has SOC 2 — isn&apos;t that enough?&quot;
              </td>
              <td className="px-4 py-3 text-gray-700">
                A SOC 2 tells you the MSP has controls for <em>their</em> environment.
                It doesn&apos;t tell you whether the controls they configured for <em>your</em> environment
                are adequate, properly maintained, or aligned with your regulatory obligations.
                SOC 2 is a vendor attestation, not an independent assessment of your security posture.
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-4 py-3 align-top font-medium text-gray-800">
                &quot;We&apos;re too small to need separate oversight.&quot;
              </td>
              <td className="px-4 py-3 text-gray-700">
                The SEC doesn&apos;t scale enforcement by AUM. R.T. Jones was fined $75K — they were
                a small RIA. Regulators expect the same structural independence regardless of firm size.
                In fact, smaller firms are often <em>more</em> vulnerable because they have fewer
                internal checks.
              </td>
            </tr>
            <tr className="bg-white">
              <td className="px-4 py-3 align-top font-medium text-gray-800">
                &quot;We trust our MSP.&quot;
              </td>
              <td className="px-4 py-3 text-gray-700">
                And you should — for the IT services they provide. But trust and independence are
                different things. You trust your accountant too, but you still have an external auditor.
                Independence isn&apos;t about distrust — it&apos;s about having a structural safeguard
                that regulators and LPs require.
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-4 py-3 align-top font-medium text-gray-800">
                &quot;It&apos;ll cost less to consolidate.&quot;
              </td>
              <td className="px-4 py-3 text-gray-700">
                Short-term, maybe. But if the SEC cites you for inadequate oversight, or an LP
                downgrades your ODD score, or a breach goes undetected because the MSP didn&apos;t
                flag their own gap — the cost of not having independence dwarfs our annual fee.
                The Equifax FCA fine was £11.16M. Our service is a rounding error by comparison.
              </td>
            </tr>
            <tr className="bg-white">
              <td className="px-4 py-3 align-top font-medium text-gray-800">
                &quot;Our MSP says they can do everything Drawbridge does.&quot;
              </td>
              <td className="px-4 py-3 text-gray-700">
                They probably can deliver many of the same services. The question isn&apos;t capability — it&apos;s
                independence. An MSP assessing controls they built and manage is structurally conflicted.
                They also can&apos;t provide peer benchmarking against 1,200+ alternative investment firms,
                because they don&apos;t have that data. And they have a financial incentive to recommend
                more of their own services as remediation — we don&apos;t.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/*  Why Drawbridge                                                     */}
      {/* ------------------------------------------------------------------ */}
      <DrawbridgeAngle>
        <p className="font-semibold text-db-dark text-base mb-3">Why Drawbridge — Not Just &quot;Not Your MSP&quot;</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="rounded-md bg-white border border-orange-200 p-3">
            <p className="font-semibold text-sm text-db-dark">Purpose-Built for Alternatives</p>
            <p className="text-xs text-gray-600 mt-1">
              1,200+ firms, $1.7T AUM protected. Our benchmarks, ODD expertise, and regulatory
              mapping are specific to hedge funds, PE, and family offices — not generic SMB IT.
            </p>
          </div>
          <div className="rounded-md bg-white border border-orange-200 p-3">
            <p className="font-semibold text-sm text-db-dark">Structurally Independent</p>
            <p className="text-xs text-gray-600 mt-1">
              We don&apos;t manage your IT. We don&apos;t sell remediation services. We don&apos;t
              have a financial incentive to find problems that require buying more of our products.
              Our assessment is bias-free by design.
            </p>
          </div>
          <div className="rounded-md bg-white border border-orange-200 p-3">
            <p className="font-semibold text-sm text-db-dark">Peer Benchmarking</p>
            <p className="text-xs text-gray-600 mt-1">
              Our Cyber Score benchmarks your client against 1,200+ similar firms. No MSP has this
              data set. LPs and allocators increasingly expect to see where a fund sits relative to
              peers — not just whether it &quot;passes&quot; a checklist.
            </p>
          </div>
          <div className="rounded-md bg-white border border-orange-200 p-3">
            <p className="font-semibold text-sm text-db-dark">ODD-Ready from Day One</p>
            <p className="text-xs text-gray-600 mt-1">
              2,000+ ODD questionnaires processed. We know what allocators ask because we answer those
              questions every day. An MSP&apos;s security report doesn&apos;t map to ODD frameworks —
              ours does.
            </p>
          </div>
        </div>
      </DrawbridgeAngle>

      {/* ------------------------------------------------------------------ */}
      {/*  Positioning Guide                                                  */}
      {/* ------------------------------------------------------------------ */}
      <SectionHeading>Positioning: Complement, Not Compete</SectionHeading>
      <div className="rounded-lg border border-blue-200 bg-blue-50 p-5">
        <p className="text-sm text-gray-700 leading-relaxed">
          <strong>Important:</strong> Never position Drawbridge as a replacement for the MSP.
          The MSP provides valuable IT and operational services. The message is:{' '}
          <strong>&quot;Your MSP handles your IT — we make sure your cybersecurity program has the
          independent oversight that regulators and LPs require.&quot;</strong>
        </p>
        <p className="text-sm text-gray-700 leading-relaxed mt-3">
          This is the same model as external financial auditors. Nobody questions why a company
          needs an independent auditor even though they have an internal finance team. The same
          logic applies to cybersecurity.
        </p>
      </div>

      <div className="mt-4 overflow-x-auto">
        <table className="min-w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-db-dark text-white text-left">
              <th className="px-4 py-3 font-semibold">Function</th>
              <th className="px-4 py-3 font-semibold">MSP</th>
              <th className="px-4 py-3 font-semibold">Drawbridge</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr className="bg-white">
              <td className="px-4 py-3 font-medium text-gray-800">IT Operations</td>
              <td className="px-4 py-3 text-green-700">✅ Owns</td>
              <td className="px-4 py-3 text-gray-400">—</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-4 py-3 font-medium text-gray-800">Control Implementation</td>
              <td className="px-4 py-3 text-green-700">✅ Builds & manages</td>
              <td className="px-4 py-3 text-gray-400">—</td>
            </tr>
            <tr className="bg-white">
              <td className="px-4 py-3 font-medium text-gray-800">Independent Assessment</td>
              <td className="px-4 py-3 text-red-600">❌ Conflict of interest</td>
              <td className="px-4 py-3 text-green-700">✅ Independent by design</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-4 py-3 font-medium text-gray-800">Peer Benchmarking</td>
              <td className="px-4 py-3 text-red-600">❌ No peer data</td>
              <td className="px-4 py-3 text-green-700">✅ 1,200+ firms</td>
            </tr>
            <tr className="bg-white">
              <td className="px-4 py-3 font-medium text-gray-800">ODD Questionnaire Support</td>
              <td className="px-4 py-3 text-red-600">❌ Not their expertise</td>
              <td className="px-4 py-3 text-green-700">✅ 2,000+ processed</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-4 py-3 font-medium text-gray-800">Regulatory Mapping</td>
              <td className="px-4 py-3 text-yellow-600">⚠️ Generic</td>
              <td className="px-4 py-3 text-green-700">✅ SEC / FCA / DORA specific</td>
            </tr>
            <tr className="bg-white">
              <td className="px-4 py-3 font-medium text-gray-800">Remediation Services</td>
              <td className="px-4 py-3 text-green-700">✅ Sells remediation</td>
              <td className="px-4 py-3 text-gray-700">❌ No remediation (no conflict)</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/*  Quick Reference                                                    */}
      {/* ------------------------------------------------------------------ */}
      <SectionHeading>Quick Reference: Key Numbers</SectionHeading>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <StatCard value="$10M+" label="SEC enforcement penalties tied to oversight failures" />
        <StatCard value="£11.16M" label="FCA Equifax fine — independence cited as structural failure" />
        <StatCard value="£48.65M" label="FCA TSB fine — inadequate vendor oversight" />
        <StatCard value="1,200+" label="alternative investment firms using Drawbridge" />
      </div>
    </article>
  );
}
