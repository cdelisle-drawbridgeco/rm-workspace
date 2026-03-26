'use client';

import React from 'react';
import {
  HeroSection,
  SectionHeading,
  SubSection,
  DrawbridgeAngle,
  LastUpdated,
} from '../../components/shared-ui';

export default function ChurnReasons() {
  return (
    <>
      <HeroSection
        icon="📉"
        title="Churn Reason Tagging"
        subtitle="How to accurately tag non-renewals in Salesforce — the framework, the seven tags, and the review process."
      />
      <LastUpdated date="March 25, 2026 at 3:45 PM" />

      {/* Purpose */}
      <SectionHeading>Why This Matters</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed">
        Every time a client doesn&apos;t renew, we tag the reason in Salesforce. This isn&apos;t a
        paperwork exercise — it&apos;s how we build the data to understand what&apos;s driving churn,
        make the case for investments, and have honest coaching conversations about what&apos;s in
        our control.
      </p>
      <p className="mt-3 text-sm text-gray-700 leading-relaxed">
        The data is only useful if tags are consistent and accurate across the team. One RM&apos;s
        &ldquo;Lost to Competitor&rdquo; should mean the same thing as another&apos;s.
      </p>

      {/* Churn categories */}
      <div className="mt-4 grid grid-cols-3 gap-3">
        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Structural</p>
          <p className="text-xs text-gray-600 leading-relaxed">Non-preventable churn. Business Wind-Down, M&amp;A / Org Change, Champion Departure.</p>
        </div>
        <div className="rounded-lg border border-orange-200 bg-orange-50 p-4">
          <p className="text-xs font-semibold text-orange-600 uppercase tracking-wide mb-2">Competitive</p>
          <p className="text-xs text-gray-600 leading-relaxed">Lost to a competitor or client building in-house. Lost to Competitor, Brought In-House.</p>
        </div>
        <div className="rounded-lg border border-red-200 bg-red-50 p-4">
          <p className="text-xs font-semibold text-red-600 uppercase tracking-wide mb-2">Controllable</p>
          <p className="text-xs text-gray-600 leading-relaxed">Highest-leverage for coaching. Insufficient Value Realized, Poor Customer Experience.</p>
        </div>
      </div>

      {/* The Golden Rule */}
      <SectionHeading>The Golden Rule</SectionHeading>
      <div className="rounded-lg border border-db-aqua/30 bg-db-aqua/5 p-4">
        <p className="text-sm font-semibold text-db-dark">
          Tag the most proximate cause at the time of non-renewal.
        </p>
        <p className="mt-1 text-sm text-gray-700">
          When multiple factors contributed, ask: <em>what was the tipping point that made the
          client decide not to renew?</em> That is the tag.
        </p>
      </div>
      <div className="mt-3 rounded-lg border border-amber-200 bg-amber-50 p-4">
        <p className="text-xs font-semibold text-amber-700 mb-1">Example</p>
        <p className="text-sm text-gray-700">
          A client&apos;s CCO left the firm six months ago. The new CCO came in and chose a competitor.
          The tipping point was <strong>Champion Departure</strong> — not Lost to Competitor. The
          competitive loss was downstream of the relationship failure.
        </p>
      </div>

      {/* When to Tag */}
      <SectionHeading>When to Tag</SectionHeading>
      <ol className="mt-2 space-y-3">
        {[
          { n: '1', text: 'You receive a non-renewal notice, or a renewal conversation ends without commitment.' },
          { n: '2', text: 'Before closing the opportunity as Closed Lost in Salesforce, select a Churn Reason tag.' },
          { n: '3', text: 'Complete the Win/Loss Description field — minimum 2–3 sentences. What did the client say? What do you believe the real reason was? What, if anything, could have prevented it?' },
          { n: '4', text: 'Bring the tag + notes to your next 1:1 with Chris. Tags are reviewed and confirmed before they are final — do not self-finalize.' },
        ].map(({ n, text }) => (
          <li key={n} className="flex gap-3 text-sm text-gray-700">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-db-navy text-white text-xs font-bold flex items-center justify-center">{n}</span>
            <span className="leading-relaxed pt-0.5">{text}</span>
          </li>
        ))}
      </ol>
      <div className="mt-3 rounded-lg border border-amber-200 bg-amber-50 p-3">
        <p className="text-sm text-gray-700">
          <strong>No &ldquo;Other&rdquo; option.</strong> If you genuinely cannot determine the correct tag,
          leave a note in Win/Loss Description and flag it for your 1:1. Do not guess — every churn
          maps to one of the seven tags.
        </p>
      </div>

      {/* The Seven Tags */}
      <SectionHeading>The Seven Tags</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed">
        Choose the one tag that best describes the proximate cause.
      </p>

      {/* Tag 1 */}
      <SubSection icon="⚔️" title="1. Lost to Competitor">
        <p className="text-sm text-gray-700 mb-3">
          The client selected a competing cybersecurity/compliance vendor, MSP, bundled platform,
          or consulting firm over Drawbridge.
        </p>
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-lg border border-green-200 bg-green-50 p-3">
            <p className="text-xs font-semibold text-green-700 mb-2">Use this tag when:</p>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>&#8226; Client explicitly named a competitor (ACA ComplianceAlpha, an MSP, RSM, boutique cyber firm)</li>
              <li>&#8226; Client received a competing proposal and chose it on price, features, or relationship</li>
              <li>&#8226; Client chose a bundled IT/MSP solution that includes cyber over Drawbridge&apos;s pure-play offering</li>
            </ul>
          </div>
          <div className="rounded-lg border border-red-200 bg-red-50 p-3">
            <p className="text-xs font-semibold text-red-700 mb-2">Do NOT use if:</p>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>&#8226; Client is building internally → <strong>Brought In-House</strong></li>
              <li>&#8226; Key contact left and the new person brought in a competitor → <strong>Champion Departure</strong> (relationship loss came first)</li>
              <li>&#8226; Client cited price but the real issue was value → consider <strong>Insufficient Value Realized</strong></li>
            </ul>
          </div>
        </div>
      </SubSection>

      {/* Tag 2 */}
      <SubSection icon="📉" title="2. Insufficient Value Realized">
        <p className="text-sm text-gray-700 mb-3">
          The client did not experience enough ROI, utility, or outcomes to justify renewal. Covers
          pricing objections, low adoption, product gaps, and budget cuts — because price is almost
          always a symptom of a value failure, not a standalone reason.
        </p>
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-lg border border-green-200 bg-green-50 p-3">
            <p className="text-xs font-semibold text-green-700 mb-2">Use this tag when:</p>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>&#8226; Client said the product wasn&apos;t worth the cost or they could get &ldquo;good enough&rdquo; elsewhere for less</li>
              <li>&#8226; Client was a low adopter — rarely logged in, didn&apos;t complete assessments, didn&apos;t engage with advisory</li>
              <li>&#8226; Client cited a specific product gap or missing feature</li>
              <li>&#8226; Budget was cut and cyber was deprioritized (Drawbridge hadn&apos;t made itself indispensable)</li>
              <li>&#8226; Client going without any vendor at all</li>
            </ul>
          </div>
          <div className="rounded-lg border border-red-200 bg-red-50 p-3">
            <p className="text-xs font-semibold text-red-700 mb-2">Do NOT use if:</p>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>&#8226; Client selected a specific named competitor → <strong>Lost to Competitor</strong></li>
              <li>&#8226; Client is building internal capability → <strong>Brought In-House</strong></li>
              <li>&#8226; The decision-maker who valued the relationship left → <strong>Champion Departure</strong></li>
            </ul>
          </div>
        </div>
      </SubSection>

      {/* Tag 3 */}
      <SubSection icon="🏢" title="3. Brought In-House">
        <p className="text-sm text-gray-700 mb-3">
          The client hired or built internal cybersecurity/compliance capabilities to replace
          Drawbridge&apos;s outsourced services.
        </p>
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-lg border border-green-200 bg-green-50 p-3">
            <p className="text-xs font-semibold text-green-700 mb-2">Use this tag when:</p>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>&#8226; Client hired a CISO, dedicated compliance officer, or internal cyber team</li>
              <li>&#8226; Client explicitly stated they are taking the function in-house</li>
              <li>&#8226; Client at growth stage (typically $5B+ AUM) where internal capability becomes cost-competitive</li>
            </ul>
          </div>
          <div className="rounded-lg border border-red-200 bg-red-50 p-3">
            <p className="text-xs font-semibold text-red-700 mb-2">Do NOT use if:</p>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>&#8226; Client is moving to a competitor firm → <strong>Lost to Competitor</strong></li>
              <li>&#8226; Client just said they want to cut costs → likely <strong>Insufficient Value Realized</strong> unless internal hire is confirmed</li>
            </ul>
          </div>
        </div>
      </SubSection>

      {/* Tag 4 */}
      <SubSection icon="🔻" title="4. Business Wind-Down">
        <p className="text-sm text-gray-700 mb-3">
          The client firm, fund, or entity ceased operations — including fund liquidation, firm
          dissolution, voluntary wind-down, or family office conversion.
        </p>
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-lg border border-green-200 bg-green-50 p-3">
            <p className="text-xs font-semibold text-green-700 mb-2">Use this tag when:</p>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>&#8226; Fund or firm closed, wound down, or ceased active operations</li>
              <li>&#8226; Client converted to a family office and no longer requires institutional-grade cyber compliance</li>
              <li>&#8226; Client fund was liquidated with no successor entity</li>
            </ul>
          </div>
          <div className="rounded-lg border border-red-200 bg-red-50 p-3">
            <p className="text-xs font-semibold text-red-700 mb-2">Do NOT use if:</p>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>&#8226; Firm was acquired and the acquirer chose not to continue → <strong>M&amp;A / Org Change</strong></li>
              <li>&#8226; Firm downsized but continues operating → likely <strong>Insufficient Value Realized</strong> or <strong>Lost to Competitor</strong></li>
            </ul>
          </div>
        </div>
      </SubSection>

      {/* Tag 5 */}
      <SubSection icon="🔀" title="5. M&A / Organizational Change">
        <p className="text-sm text-gray-700 mb-3">
          The client was acquired, merged, reorganized, or subject to a PE parent vendor mandate
          that displaced Drawbridge.
        </p>
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-lg border border-green-200 bg-green-50 p-3">
            <p className="text-xs font-semibold text-green-700 mb-2">Use this tag when:</p>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>&#8226; Client firm was acquired and the acquirer uses a different vendor</li>
              <li>&#8226; Fund merged into another vehicle and the successor entity has existing coverage</li>
              <li>&#8226; PE sponsor or parent company mandated a different cybersecurity vendor across the portfolio</li>
              <li>&#8226; Organizational restructuring resulted in the client entity no longer being a standalone Drawbridge client</li>
            </ul>
          </div>
          <div className="rounded-lg border border-red-200 bg-red-50 p-3">
            <p className="text-xs font-semibold text-red-700 mb-2">Do NOT use if:</p>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>&#8226; Firm simply ceased operations with no acquisition → <strong>Business Wind-Down</strong></li>
              <li>&#8226; An individual left the firm → <strong>Champion Departure</strong> (unless it triggered a broader org change)</li>
            </ul>
          </div>
        </div>
      </SubSection>

      {/* Tag 6 */}
      <SubSection icon="🚪" title="6. Champion Departure">
        <p className="text-sm text-gray-700 mb-3">
          The key decision-maker or sponsor (CCO, COO, CISO, or managing partner) left the firm and
          the client relationship did not survive the transition.
        </p>
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-lg border border-green-200 bg-green-50 p-3">
            <p className="text-xs font-semibold text-green-700 mb-2">Use this tag when:</p>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>&#8226; Primary contact or decision-maker departed and their replacement chose not to renew</li>
              <li>&#8226; New hire came in with a pre-existing vendor preference or competitive relationship</li>
              <li>&#8226; Relationship was person-to-person rather than institutional — and the person left</li>
              <li>&#8226; Multiple key contacts turned over in a short period and the account lost continuity</li>
            </ul>
          </div>
          <div className="rounded-lg border border-red-200 bg-red-50 p-3">
            <p className="text-xs font-semibold text-red-700 mb-2">Do NOT use if:</p>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>&#8226; Champion left AND new person selected a specific competitor → still <strong>Champion Departure</strong>; the competitive loss was downstream</li>
              <li>&#8226; Firm reorganized broadly → consider <strong>M&amp;A / Org Change</strong> if structural change was the driver</li>
            </ul>
          </div>
        </div>
      </SubSection>

      {/* Tag 7 */}
      <SubSection icon="😤" title="7. Poor Customer Experience">
        <p className="text-sm text-gray-700 mb-3">
          The client was dissatisfied with service delivery, support responsiveness, onboarding
          execution, advisor quality, or overall relationship management.
        </p>
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-lg border border-green-200 bg-green-50 p-3">
            <p className="text-xs font-semibold text-green-700 mb-2">Use this tag when:</p>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>&#8226; Client cited slow response times, dropped balls, or unmet commitments</li>
              <li>&#8226; Onboarding was rocky and the client never fully got off the ground</li>
              <li>&#8226; Client felt their advisor was unresponsive, uninformed, or not adding value</li>
              <li>&#8226; Policies delivered late, generic, or not tailored to the client&apos;s actual situation</li>
              <li>&#8226; Client felt Drawbridge was reactive rather than proactive throughout the relationship</li>
            </ul>
          </div>
          <div className="rounded-lg border border-red-200 bg-red-50 p-3">
            <p className="text-xs font-semibold text-red-700 mb-2">Do NOT use if:</p>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>&#8226; Client didn&apos;t use the product → likely <strong>Insufficient Value Realized</strong> (adoption failure)</li>
              <li>&#8226; Client chose a competitor on features/price → <strong>Lost to Competitor</strong></li>
              <li>&#8226; The issue was a single bad interaction rather than a pattern → escalate to Chris before tagging</li>
            </ul>
          </div>
        </div>
      </SubSection>

      {/* Quick Decision Guide */}
      <SectionHeading>Quick Decision Guide</SectionHeading>
      <p className="text-sm text-gray-700 mb-3">When you&apos;re unsure, work through these questions in order:</p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-db-navy text-white">
              <th className="text-left p-3 font-semibold rounded-tl-lg">Question</th>
              <th className="text-left p-3 font-semibold">If YES</th>
              <th className="text-left p-3 font-semibold rounded-tr-lg">If NO</th>
            </tr>
          </thead>
          <tbody>
            {[
              { q: 'Did the client entity cease to exist (wind-down, liquidation)?', yes: 'Business Wind-Down', no: 'Continue ↓' },
              { q: 'Was the client acquired, merged, or subject to a PE mandate?', yes: 'M&A / Org Change', no: 'Continue ↓' },
              { q: 'Did a key decision-maker depart and the new person not renew?', yes: 'Champion Departure', no: 'Continue ↓' },
              { q: 'Is the client building an internal capability to replace us?', yes: 'Brought In-House', no: 'Continue ↓' },
              { q: 'Did the client select a specific named competitor?', yes: 'Lost to Competitor', no: 'Continue ↓' },
              { q: 'Did the client cite poor service, responsiveness, or delivery?', yes: 'Poor Customer Experience', no: 'Continue ↓' },
              { q: 'Did the client not see enough value or ROI to justify the cost?', yes: 'Insufficient Value Realized', no: 'Escalate to Chris' },
            ].map(({ q, yes, no }, i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="p-3 border-b border-gray-100 text-gray-700">{q}</td>
                <td className="p-3 border-b border-gray-100 font-semibold text-db-navy">{yes}</td>
                <td className="p-3 border-b border-gray-100 text-gray-500 text-xs">{no}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Win/Loss Description */}
      <SectionHeading>Completing Win/Loss Description</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed">
        Required on every Closed Lost record. Minimum 2–3 sentences. Answer these three questions:
      </p>
      <ul className="mt-2 space-y-2 text-sm text-gray-700">
        <li className="flex gap-2"><span className="font-semibold text-db-navy">1.</span><span><strong>What did the client say?</strong> Direct quote or close paraphrase of their stated reason.</span></li>
        <li className="flex gap-2"><span className="font-semibold text-db-navy">2.</span><span><strong>What do you believe the actual reason was?</strong> Your honest read — this may differ from the stated reason.</span></li>
        <li className="flex gap-2"><span className="font-semibold text-db-navy">3.</span><span><strong>What, if anything, could have changed the outcome?</strong></span></li>
      </ul>
      <div className="mt-3 rounded-lg border border-db-aqua/30 bg-db-aqua/5 p-4">
        <p className="text-xs font-semibold text-db-dark mb-1">Example</p>
        <p className="text-sm text-gray-700 italic">
          &ldquo;Client said they were going with a competitor that offered a lower price. My read is they
          never saw the ROI because they didn&apos;t complete the annual assessment or engage with the
          advisory team after onboarding. Better adoption support in months 3–6 could have changed
          this.&rdquo;
        </p>
      </div>

      {/* Review Process */}
      <SectionHeading>Review Process</SectionHeading>
      <p className="text-sm text-gray-700 mb-3">Tags are not final until reviewed with Chris in your 1:1. Here&apos;s how it works:</p>
      <ol className="space-y-3">
        {[
          'Close the opportunity in Salesforce, select the tag, and complete Win/Loss Description.',
          'Flag the account in your weekly renewal forecast update with the tag you selected.',
          'Chris reviews the tag and notes during your 1:1 — he may ask questions or suggest a different tag.',
          'Once confirmed, the tag is final and feeds into exec reporting.',
        ].map((step, i) => (
          <li key={i} className="flex gap-3 text-sm text-gray-700">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-db-navy text-white text-xs font-bold flex items-center justify-center">{i + 1}</span>
            <span className="leading-relaxed pt-0.5">{step}</span>
          </li>
        ))}
      </ol>
      <div className="mt-3 rounded-lg border border-db-aqua/30 bg-db-aqua/5 p-4">
        <p className="text-sm text-gray-700">
          The review step is not about second-guessing your judgment — it&apos;s about ensuring
          consistency across the team so the data is meaningful. One RM&apos;s &ldquo;Lost to
          Competitor&rdquo; should mean the same thing as another&apos;s.
        </p>
      </div>

      <DrawbridgeAngle>
        <p>
          Accurate churn tagging is how Drawbridge makes the case for what&apos;s in our control vs.
          what isn&apos;t — separating structural and competitive losses from the controllable churn
          we can coach against and reduce. The cleaner the data, the stronger the story in exec
          reporting and the more targeted the coaching conversations in 1:1s.
        </p>
        <p className="mt-2">
          With <strong>1,000+ alternative investment fund relationships</strong>, Drawbridge has
          the pattern recognition to identify where churn risk is systemic vs. isolated — which
          products create stickiness, which client profiles churn at higher rates, and what
          intervention timelines work. That intelligence only compounds when every RM tags
          accurately and consistently.
        </p>
      </DrawbridgeAngle>
    </>
  );
}
