'use client';

import { HeroSection, SectionHeading, CharacteristicCard, SubSection, DrawbridgeAngle, LastUpdated } from '../../components/shared-ui';

export default function ROIValueMeasurement() {
  return (
    <>
      <HeroSection
        icon="📐"
        title="ROI & Value Measurement"
        subtitle="Frameworks for quantifying Drawbridge's impact in business terms — capital protected, costs avoided, and capability delivered vs. in-house alternatives."
      />
      <LastUpdated date="March 9, 2026 at 4:00 PM" />

      {/* The mindset shift */}
      <div className="mt-6 rounded-lg bg-db-dark p-6">
        <p className="text-sm font-semibold text-db-aqua uppercase tracking-wide mb-3">
          The Core Principle
        </p>
        <p className="text-sm text-gray-300 leading-relaxed">
          Never frame ROI as &ldquo;cost of Drawbridge vs. nothing.&rdquo; The client is never choosing between
          Drawbridge and nothing — they&apos;re choosing between Drawbridge and an alternative: building in-house,
          hiring a CISO, using their MSP, or accepting the risk. Every ROI conversation should compare
          <strong className="text-white"> cost of Drawbridge vs. cost of the alternative</strong>.
        </p>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="rounded-lg border border-red-400/30 bg-red-950/30 p-4">
            <p className="font-medium text-red-300 text-sm mb-2">Weak ROI Framing</p>
            <ul className="text-gray-400 space-y-1.5 text-xs">
              <li>&bull; &ldquo;We saved you time on DDQs&rdquo;</li>
              <li>&bull; &ldquo;We completed 12 assessments this year&rdquo;</li>
              <li>&bull; &ldquo;Our platform has 95% adoption&rdquo;</li>
              <li>&bull; &ldquo;You got good value for the price&rdquo;</li>
            </ul>
            <p className="text-red-300/80 text-xs mt-3 italic">
              Activity-based. Doesn&apos;t connect to business outcomes the executive cares about.
            </p>
          </div>
          <div className="rounded-lg border border-green-400/30 bg-green-950/30 p-4">
            <p className="font-medium text-green-300 text-sm mb-2">Strong ROI Framing</p>
            <ul className="text-gray-300 space-y-1.5 text-xs">
              <li>&bull; &ldquo;Your DDQ turnaround went from 3 weeks to 3 days — that&apos;s capital velocity&rdquo;</li>
              <li>&bull; &ldquo;You passed ODD without findings. Last year you lost a $50M allocation over that.&rdquo;</li>
              <li>&bull; &ldquo;A CISO + analyst would cost $500K. You&apos;re getting the same capability for a fraction.&rdquo;</li>
              <li>&bull; &ldquo;Your peer got fined $1.5M for the same gap we closed in Q2&rdquo;</li>
            </ul>
            <p className="text-green-300/80 text-xs mt-3 italic">
              Outcome-based. Connects to capital, risk, cost, and competitive position.
            </p>
          </div>
        </div>
      </div>

      {/* ── FRAMEWORK 1: Capital Protected ── */}
      <SectionHeading>Framework 1: Capital Protected & Retained</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed mb-4">
        For clients in the <strong>Capital Confidence</strong> or <strong>Competitive Advantage</strong> outcomes.
        This is the most powerful ROI frame for hedge funds because it connects directly to revenue.
      </p>

      <div className="rounded-xl border-2 border-db-aqua overflow-hidden">
        <div className="bg-db-aqua/10 px-6 py-4 border-b border-db-aqua/20">
          <h4 className="text-base font-bold font-heading text-db-dark">The Capital Impact Model</h4>
          <p className="text-xs text-gray-500 mt-1">
            Quantifies how cybersecurity posture affects capital raising and retention
          </p>
        </div>
        <div className="px-6 py-5 space-y-5">
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">The Logic Chain</p>
            <div className="flex items-center gap-1 overflow-x-auto py-2">
              {['Weak cyber posture', 'Failed ODD / DDQ delays', 'Allocation lost or delayed', 'Management fee impact'].map((step, i) => (
                <div key={step} className="flex items-center gap-1">
                  <div className="shrink-0 rounded-md bg-red-50 border border-red-200 px-3 py-2 text-xs font-medium text-red-800 text-center min-w-[130px]">
                    {step}
                  </div>
                  {i < 3 && <span className="shrink-0 text-gray-300 text-lg">&rarr;</span>}
                </div>
              ))}
            </div>
            <div className="mt-2 flex items-center gap-1 overflow-x-auto py-2">
              {['Strong cyber posture', 'Clean ODD / fast DDQs', 'Allocation won or retained', 'Management fee secured'].map((step, i) => (
                <div key={step} className="flex items-center gap-1">
                  <div className="shrink-0 rounded-md bg-green-50 border border-green-200 px-3 py-2 text-xs font-medium text-green-800 text-center min-w-[130px]">
                    {step}
                  </div>
                  {i < 3 && <span className="shrink-0 text-gray-300 text-lg">&rarr;</span>}
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Calculation Template</p>
            <div className="rounded-md bg-gray-50 border border-gray-200 p-4">
              <table className="w-full text-sm">
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-2 text-gray-600">Allocation at risk (failed ODD)</td>
                    <td className="py-2 text-right font-mono text-db-dark">$____M</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-gray-600">&times; Management fee rate</td>
                    <td className="py-2 text-right font-mono text-db-dark">&times; ____%</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-gray-600">= Annual fee impact</td>
                    <td className="py-2 text-right font-mono font-bold text-db-dark">$____M/yr</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="py-2 text-gray-600">Drawbridge annual cost</td>
                    <td className="py-2 text-right font-mono text-green-700">$____K/yr</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="py-2 font-semibold text-db-dark">ROI multiple</td>
                    <td className="py-2 text-right font-mono font-bold text-green-700">____x</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-md bg-white border border-gray-200 p-4">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Example Scenarios</p>
            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-md bg-db-aqua/5 border border-db-aqua/20 p-3">
                <p className="text-xs font-bold text-db-dark">$1B Fund</p>
                <p className="text-xs text-gray-600 mt-1">
                  $100M allocation at risk. At 1.5% mgmt fee = <strong>$1.5M/yr</strong> in fee impact.
                  Drawbridge cost: ~$50K. ROI: <strong>30x</strong>.
                </p>
              </div>
              <div className="rounded-md bg-db-aqua/5 border border-db-aqua/20 p-3">
                <p className="text-xs font-bold text-db-dark">$3B Fund</p>
                <p className="text-xs text-gray-600 mt-1">
                  $250M allocation delayed 6 months. At 1.5% mgmt fee = <strong>$1.875M</strong> delayed.
                  Drawbridge cost: ~$75K. ROI: <strong>25x</strong>.
                </p>
              </div>
              <div className="rounded-md bg-db-aqua/5 border border-db-aqua/20 p-3">
                <p className="text-xs font-bold text-db-dark">$500M Emerging Manager</p>
                <p className="text-xs text-gray-600 mt-1">
                  First institutional allocation ($50M) won because ODD was clean.
                  At 2% mgmt fee = <strong>$1M/yr</strong>. Drawbridge cost: ~$40K. ROI: <strong>25x</strong>.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-md bg-amber-50 border border-amber-200 p-3">
            <p className="text-xs font-semibold text-amber-700">HOW TO USE IN CONVERSATION</p>
            <p className="text-sm text-amber-900 mt-1">
              &ldquo;You mentioned losing the XYZ allocation last year because of ODD findings. That was
              $___M in management fees you didn&apos;t collect. Our program costs less than 5% of that annual
              impact. The question isn&apos;t whether you can afford Drawbridge — it&apos;s whether you can
              afford another lost allocation.&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* ── FRAMEWORK 2: Enforcement Cost Avoided ── */}
      <SectionHeading>Framework 2: Enforcement Cost Avoided</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed mb-4">
        For clients in the <strong>Regulatory Readiness</strong> outcome. Connects program cost to the
        financial and operational cost of regulatory action.
      </p>

      <div className="rounded-xl border-2 border-db-aqua-dark overflow-hidden">
        <div className="bg-db-aqua-dark/10 px-6 py-4 border-b border-db-aqua-dark/20">
          <h4 className="text-base font-bold font-heading text-db-dark">The Regulatory Risk Model</h4>
          <p className="text-xs text-gray-500 mt-1">
            Quantifies the cost of non-compliance vs. the cost of maintaining a program
          </p>
        </div>
        <div className="px-6 py-5 space-y-5">
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">SEC Enforcement Data Points</p>
            <div className="grid grid-cols-4 gap-3">
              {[
                { value: '$1.5M+', label: 'Average SEC cyber fine' },
                { value: '2–3 yrs', label: 'Enhanced exam period after finding' },
                { value: '45%', label: 'Of exams cite incident response gaps' },
                { value: '72 hrs', label: 'Reg S-P breach notification deadline' },
              ].map(stat => (
                <div key={stat.label} className="rounded-lg bg-white p-3 shadow-sm border border-gray-100 text-center">
                  <p className="text-xl font-bold font-heading text-db-dark">{stat.value}</p>
                  <p className="mt-1 text-[10px] text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Total Cost of an Enforcement Action</p>
            <div className="rounded-md bg-gray-50 border border-gray-200 p-4">
              <table className="w-full text-sm">
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-2 text-gray-600">Direct fine / penalty</td>
                    <td className="py-2 text-right font-mono text-red-600">$1.0M – $5.0M</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-gray-600">Legal fees (defense + remediation plan)</td>
                    <td className="py-2 text-right font-mono text-red-600">$200K – $1.0M</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-gray-600">Remediation costs (accelerated compliance)</td>
                    <td className="py-2 text-right font-mono text-red-600">$100K – $500K</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-gray-600">Enhanced exam burden (2–3 year cycle)</td>
                    <td className="py-2 text-right font-mono text-red-600">$50K – $200K/yr</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-gray-600">Fundraising impact (reputational)</td>
                    <td className="py-2 text-right font-mono text-red-600">Unquantifiable</td>
                  </tr>
                  <tr className="bg-red-50">
                    <td className="py-2 font-semibold text-db-dark">Estimated total cost range</td>
                    <td className="py-2 text-right font-mono font-bold text-red-700">$1.5M – $7.0M+</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-md bg-white border border-gray-200 p-4">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">The Comparison</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-md bg-red-50 border border-red-200 p-3 text-center">
                <p className="text-xs font-semibold text-red-700 uppercase">Without Drawbridge</p>
                <p className="text-2xl font-bold font-heading text-red-800 mt-1">$1.5M–$7M+</p>
                <p className="text-xs text-red-600 mt-1">When (not if) the SEC finds gaps</p>
              </div>
              <div className="rounded-md bg-green-50 border border-green-200 p-3 text-center">
                <p className="text-xs font-semibold text-green-700 uppercase">With Drawbridge</p>
                <p className="text-2xl font-bold font-heading text-green-800 mt-1">$40K–$100K/yr</p>
                <p className="text-xs text-green-600 mt-1">Continuous compliance + exam readiness</p>
              </div>
            </div>
          </div>

          <div className="rounded-md bg-amber-50 border border-amber-200 p-3">
            <p className="text-xs font-semibold text-amber-700">HOW TO USE IN CONVERSATION</p>
            <p className="text-sm text-amber-900 mt-1">
              &ldquo;The SEC fined [recent public example] $2.4M for inadequate incident response documentation —
              exactly the kind of gap we closed for you in Q1. Our annual cost is less than 5% of that single
              fine. And that doesn&apos;t count the legal fees, the enhanced exam cycle, or the allocator
              questions that follow.&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* ── FRAMEWORK 3: Breach Cost Avoided ── */}
      <SectionHeading>Framework 3: Breach Cost Avoided</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed mb-4">
        For clients in the <strong>Validated Protection</strong> outcome. Uses industry breach data
        to quantify the cost of inadequate security testing.
      </p>

      <div className="rounded-xl border-2 border-db-orange/60 overflow-hidden">
        <div className="bg-orange-50 px-6 py-4 border-b border-db-orange/20">
          <h4 className="text-base font-bold font-heading text-db-dark">The Breach Impact Model</h4>
          <p className="text-xs text-gray-500 mt-1">
            Maps testing and validation investment against breach probability and cost
          </p>
        </div>
        <div className="px-6 py-5 space-y-5">
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Industry Data (IBM Cost of a Data Breach 2024)</p>
            <div className="grid grid-cols-4 gap-3">
              {[
                { value: '$5.9M', label: 'Avg breach cost — financial services' },
                { value: '$4.88M', label: 'Avg breach cost — all industries' },
                { value: '258 days', label: 'Avg time to identify + contain' },
                { value: '$1.76M', label: 'Savings with incident response team' },
              ].map(stat => (
                <div key={stat.label} className="rounded-lg bg-white p-3 shadow-sm border border-gray-100 text-center">
                  <p className="text-xl font-bold font-heading text-db-dark">{stat.value}</p>
                  <p className="mt-1 text-[10px] text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
              What Drawbridge Reduces
            </p>
            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-orange">Probability of Breach</p>
                <p className="text-xs text-gray-600 mt-1">
                  Pen testing finds and remediates vulnerabilities before attackers exploit them.
                  Each critical finding fixed is a potential breach prevented. Phishing simulations
                  reduce the #1 attack vector.
                </p>
              </div>
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-orange">Cost of Breach (If It Happens)</p>
                <p className="text-xs text-gray-600 mt-1">
                  Tested IR plans reduce containment time from months to days. IBM data shows
                  organizations with IR teams save $1.76M per breach. Tabletop exercises are
                  the difference between rehearsed and panicked response.
                </p>
              </div>
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-orange">Downstream Impact</p>
                <p className="text-xs text-gray-600 mt-1">
                  A breach triggers regulatory scrutiny, LP questions, and reputational damage
                  that compounds for years. A firm with a documented, tested program faces
                  significantly lower scrutiny and faster recovery.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-md bg-white border border-gray-200 p-4">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Expected Value Calculation</p>
            <div className="rounded-md bg-gray-50 border border-gray-200 p-4">
              <table className="w-full text-sm">
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-2 text-gray-600">Average breach cost (financial services)</td>
                    <td className="py-2 text-right font-mono text-db-dark">$5.9M</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-gray-600">&times; Annual probability (small financial firm)</td>
                    <td className="py-2 text-right font-mono text-db-dark">&times; 5–15%</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-gray-600">= Expected annual breach cost</td>
                    <td className="py-2 text-right font-mono font-bold text-red-600">$295K – $885K</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="py-2 text-gray-600">Drawbridge annual cost</td>
                    <td className="py-2 text-right font-mono text-green-700">$40K – $100K</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="py-2 font-semibold text-db-dark">Even at lowest estimates, net positive</td>
                    <td className="py-2 text-right font-mono font-bold text-green-700">3–9x</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-3 italic">
              Note: This doesn&apos;t include reputational damage, LP redemptions, or regulatory
              consequences — which often exceed the direct breach cost.
            </p>
          </div>

          <div className="rounded-md bg-amber-50 border border-amber-200 p-3">
            <p className="text-xs font-semibold text-amber-700">HOW TO USE IN CONVERSATION</p>
            <p className="text-sm text-amber-900 mt-1">
              &ldquo;Your pen test last quarter found 3 critical vulnerabilities that have since been
              remediated. If any one of those had been exploited, you&apos;re looking at a $5M+ breach
              response. That single test paid for your entire Drawbridge program 50 times over.
              The ROI on validated protection isn&apos;t theoretical — it&apos;s the breach that didn&apos;t happen.&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* ── FRAMEWORK 4: Build vs. Buy ── */}
      <SectionHeading>Framework 4: Build vs. Buy</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed mb-4">
        For clients in the <strong>Operational Resilience</strong> outcome — or any client considering
        hiring a CISO or building an internal security function.
      </p>

      <div className="rounded-xl border-2 border-db-orange/80 overflow-hidden">
        <div className="bg-orange-50 px-6 py-4 border-b border-db-orange/20">
          <h4 className="text-base font-bold font-heading text-db-dark">The Build vs. Buy Calculator</h4>
          <p className="text-xs text-gray-500 mt-1">
            Total cost comparison: in-house security function vs. Drawbridge
          </p>
        </div>
        <div className="px-6 py-5 space-y-5">
          <div className="grid grid-cols-2 gap-4">
            {/* Build column */}
            <div className="rounded-lg border border-red-200 overflow-hidden">
              <div className="bg-red-50 px-4 py-3 border-b border-red-200">
                <p className="text-sm font-bold text-red-800">Build In-House</p>
                <p className="text-[10px] text-red-600">Annual cost to replicate Drawbridge&apos;s capability</p>
              </div>
              <div className="p-4">
                <table className="w-full text-xs">
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="py-1.5 text-gray-600">CISO (fractional or full-time)</td>
                      <td className="py-1.5 text-right font-mono text-red-700">$200K–$350K</td>
                    </tr>
                    <tr>
                      <td className="py-1.5 text-gray-600">Security analyst (1 FTE)</td>
                      <td className="py-1.5 text-right font-mono text-red-700">$100K–$150K</td>
                    </tr>
                    <tr>
                      <td className="py-1.5 text-gray-600">Security tools & platforms</td>
                      <td className="py-1.5 text-right font-mono text-red-700">$50K–$100K</td>
                    </tr>
                    <tr>
                      <td className="py-1.5 text-gray-600">Pen testing (third-party)</td>
                      <td className="py-1.5 text-right font-mono text-red-700">$30K–$60K</td>
                    </tr>
                    <tr>
                      <td className="py-1.5 text-gray-600">Training & compliance management</td>
                      <td className="py-1.5 text-right font-mono text-red-700">$20K–$40K</td>
                    </tr>
                    <tr>
                      <td className="py-1.5 text-gray-600">Management overhead (COO time)</td>
                      <td className="py-1.5 text-right font-mono text-red-700">$30K–$60K</td>
                    </tr>
                    <tr>
                      <td className="py-1.5 text-gray-600">Recruiting & retention risk</td>
                      <td className="py-1.5 text-right font-mono text-red-700">$25K–$50K</td>
                    </tr>
                    <tr className="bg-red-50">
                      <td className="py-2 font-bold text-db-dark">Total annual cost</td>
                      <td className="py-2 text-right font-mono font-bold text-red-700">$455K–$810K</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Buy column */}
            <div className="rounded-lg border border-green-200 overflow-hidden">
              <div className="bg-green-50 px-4 py-3 border-b border-green-200">
                <p className="text-sm font-bold text-green-800">Buy: Drawbridge</p>
                <p className="text-[10px] text-green-600">Equivalent capability, fully managed</p>
              </div>
              <div className="p-4">
                <table className="w-full text-xs">
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="py-1.5 text-gray-600">vCISO + advisory</td>
                      <td className="py-1.5 text-right font-mono text-green-700">Included</td>
                    </tr>
                    <tr>
                      <td className="py-1.5 text-gray-600">Dedicated security team</td>
                      <td className="py-1.5 text-right font-mono text-green-700">Included</td>
                    </tr>
                    <tr>
                      <td className="py-1.5 text-gray-600">Platform + monitoring</td>
                      <td className="py-1.5 text-right font-mono text-green-700">Included</td>
                    </tr>
                    <tr>
                      <td className="py-1.5 text-gray-600">Pen testing & assessments</td>
                      <td className="py-1.5 text-right font-mono text-green-700">Included</td>
                    </tr>
                    <tr>
                      <td className="py-1.5 text-gray-600">Training & phishing simulations</td>
                      <td className="py-1.5 text-right font-mono text-green-700">Included</td>
                    </tr>
                    <tr>
                      <td className="py-1.5 text-gray-600">COO time saved</td>
                      <td className="py-1.5 text-right font-mono text-green-700">Significant</td>
                    </tr>
                    <tr>
                      <td className="py-1.5 text-gray-600">No recruiting / retention risk</td>
                      <td className="py-1.5 text-right font-mono text-green-700">Eliminated</td>
                    </tr>
                    <tr className="bg-green-50">
                      <td className="py-2 font-bold text-db-dark">Total annual cost</td>
                      <td className="py-2 text-right font-mono font-bold text-green-700">$40K–$100K</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="rounded-md bg-white border border-gray-200 p-4 text-center">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Annual Savings</p>
            <p className="text-3xl font-bold font-heading text-green-700 mt-1">$355K – $710K+</p>
            <p className="text-xs text-gray-500 mt-1">
              Before accounting for speed-to-value, expertise depth, and 1,200+ firm benchmarking
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Beyond Cost: What You Can&apos;t Build Alone</p>
            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-dark">Peer Benchmarking</p>
                <p className="text-xs text-gray-600 mt-1">
                  Drawbridge scores clients against 1,200+ alternative investment firms. An in-house
                  CISO has a sample size of one.
                </p>
              </div>
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-dark">Independence</p>
                <p className="text-xs text-gray-600 mt-1">
                  An internal hire can&apos;t independently assess the environment they manage.
                  Regulators and allocators expect third-party validation.
                </p>
              </div>
              <div className="rounded-md bg-gray-50 border border-gray-200 p-3">
                <p className="text-xs font-semibold text-db-dark">Day-One Capability</p>
                <p className="text-xs text-gray-600 mt-1">
                  Hiring a CISO takes 6–9 months. Building a program from scratch takes 12–18 months.
                  Drawbridge delivers in weeks, not quarters.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-md bg-amber-50 border border-amber-200 p-3">
            <p className="text-xs font-semibold text-amber-700">HOW TO USE IN CONVERSATION</p>
            <p className="text-sm text-amber-900 mt-1">
              &ldquo;I know you&apos;ve been thinking about hiring a CISO. A strong hire would cost $250K–$350K
              in base comp alone — and that&apos;s before tools, team, and the 6 months it takes to recruit.
              You&apos;re getting equivalent capability from us at a fraction of that cost, and you had it
              from day one. If you do hire someone, they&apos;ll want Drawbridge for the benchmarking data and
              independent validation anyway.&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* ── FRAMEWORK 5: Allocation Impact ── */}
      <SectionHeading>Framework 5: Allocation Impact Model</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed mb-4">
        For clients at the <strong>Competitive Advantage</strong> outcome — the most sophisticated ROI
        frame. Positions cybersecurity as a capital-raising accelerator.
      </p>

      <div className="rounded-xl border-2 border-db-orange overflow-hidden">
        <div className="bg-orange-50 px-6 py-4 border-b border-db-orange/20">
          <h4 className="text-base font-bold font-heading text-db-dark">The Competitive Positioning Model</h4>
          <p className="text-xs text-gray-500 mt-1">
            Quantifies how top-quartile security posture influences allocation decisions
          </p>
        </div>
        <div className="px-6 py-5 space-y-5">
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">The Allocator Decision Lens</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Institutional allocators evaluate managers across four dimensions: investment performance,
              operational infrastructure, compliance posture, and cyber resilience. Drawbridge directly
              impacts the last two — and increasingly, ODD firms report that cybersecurity posture is a
              &ldquo;gating factor&rdquo; for allocations over $50M.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-md bg-gray-50 border border-gray-200 p-4">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Scenario: Win</p>
              <table className="w-full text-xs">
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="py-1.5 text-gray-600">New allocation won (top-quartile score)</td>
                    <td className="py-1.5 text-right font-mono text-green-700">$200M</td>
                  </tr>
                  <tr>
                    <td className="py-1.5 text-gray-600">&times; Management fee</td>
                    <td className="py-1.5 text-right font-mono text-green-700">&times; 1.5%</td>
                  </tr>
                  <tr>
                    <td className="py-1.5 text-gray-600">= Annual fee revenue</td>
                    <td className="py-1.5 text-right font-mono font-bold text-green-700">$3M/yr</td>
                  </tr>
                  <tr>
                    <td className="py-1.5 text-gray-600">&times; Avg fund tenure</td>
                    <td className="py-1.5 text-right font-mono text-green-700">&times; 3–5 yrs</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="py-1.5 font-bold text-db-dark">Lifetime fee impact</td>
                    <td className="py-1.5 text-right font-mono font-bold text-green-700">$9M–$15M</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="rounded-md bg-gray-50 border border-gray-200 p-4">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Scenario: Loss</p>
              <table className="w-full text-xs">
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="py-1.5 text-gray-600">Allocation lost (ODD failure)</td>
                    <td className="py-1.5 text-right font-mono text-red-600">$200M</td>
                  </tr>
                  <tr>
                    <td className="py-1.5 text-gray-600">&times; Management fee</td>
                    <td className="py-1.5 text-right font-mono text-red-600">&times; 1.5%</td>
                  </tr>
                  <tr>
                    <td className="py-1.5 text-gray-600">= Lost annual revenue</td>
                    <td className="py-1.5 text-right font-mono font-bold text-red-600">$3M/yr</td>
                  </tr>
                  <tr>
                    <td className="py-1.5 text-gray-600">+ Reputational signal to market</td>
                    <td className="py-1.5 text-right font-mono text-red-600">Cascading</td>
                  </tr>
                  <tr className="bg-red-50">
                    <td className="py-1.5 font-bold text-db-dark">Total impact</td>
                    <td className="py-1.5 text-right font-mono font-bold text-red-600">$9M–$15M+</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-md bg-white border border-gray-200 p-4 text-center">
            <p className="text-xs text-gray-500">Drawbridge annual cost vs. single allocation impact</p>
            <div className="flex items-center justify-center gap-6 mt-2">
              <div>
                <p className="text-sm text-gray-500">Drawbridge</p>
                <p className="text-xl font-bold font-heading text-green-700">$75K</p>
              </div>
              <p className="text-gray-400 text-2xl">vs.</p>
              <div>
                <p className="text-sm text-gray-500">One allocation</p>
                <p className="text-xl font-bold font-heading text-db-dark">$9M–$15M</p>
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-2">
              The program cost is a rounding error relative to the capital decision it influences.
            </p>
          </div>

          <div className="rounded-md bg-amber-50 border border-amber-200 p-3">
            <p className="text-xs font-semibold text-amber-700">HOW TO USE IN CONVERSATION</p>
            <p className="text-sm text-amber-900 mt-1">
              &ldquo;You told me LP diligence is getting more rigorous. Your top-quartile Cyber Score puts you
              ahead of 75% of the firms they&apos;re evaluating. That&apos;s not just a security metric — it&apos;s
              a capital-raising advantage. When an allocator is choosing between two managers with similar
              returns, the one with the stronger operational story wins. That&apos;s what we built together.&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* ── PRACTICAL: Using ROI in the Renewal ── */}
      <SectionHeading>Using ROI in the Renewal Conversation</SectionHeading>

      <div className="rounded-lg border border-gray-200 overflow-hidden">
        <div className="bg-gray-50 px-5 py-3">
          <p className="text-sm font-semibold text-db-dark">The Three-Step ROI Conversation</p>
        </div>
        <div className="px-5 py-4 space-y-4">
          <div className="flex gap-4">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-db-aqua text-white text-sm font-bold shrink-0">1</span>
            <div>
              <p className="text-sm font-semibold text-db-dark">Anchor in Their Language</p>
              <p className="text-xs text-gray-600 mt-1">
                Start with the business outcome that matters most to <em>them</em> — not the outcome that
                maps to your largest module. If they care about fundraising, lead with Capital Impact.
                If they care about the SEC, lead with Enforcement Cost Avoided. If they&apos;re evaluating
                hiring, lead with Build vs. Buy.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-db-aqua text-white text-sm font-bold shrink-0">2</span>
            <div>
              <p className="text-sm font-semibold text-db-dark">Quantify With Their Numbers</p>
              <p className="text-xs text-gray-600 mt-1">
                Use their AUM, their management fee rate, their actual allocations at risk. Generic
                industry statistics are good for context, but the conversation becomes powerful when
                you say &ldquo;based on your $2B fund at 1.5%&rdquo; — not &ldquo;based on industry
                averages.&rdquo; Ask for the data if you don&apos;t have it.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-db-aqua text-white text-sm font-bold shrink-0">3</span>
            <div>
              <p className="text-sm font-semibold text-db-dark">Connect to What Changed</p>
              <p className="text-xs text-gray-600 mt-1">
                ROI isn&apos;t hypothetical — it&apos;s retrospective. Point to specific changes:
                &ldquo;Your DDQ turnaround went from 3 weeks to 3 days. Your last pen test had zero
                critical findings, down from 4 a year ago. Your employees clicked 3% of phishing simulations
                vs. 22% when we started.&rdquo; These are the data points that make ROI real.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* When NOT to lead with ROI */}
      <SubSection icon="⚠️" title="When NOT to Lead with ROI">
        <p>
          ROI is a powerful tool — but it&apos;s not always the right opening. Avoid leading with
          ROI when:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
          <li>
            <strong>The client is in crisis mode.</strong> If they just had an incident or got an SEC
            letter, they don&apos;t need an ROI calculation — they need help. Lead with action, then
            frame the ROI after the dust settles.
          </li>
          <li>
            <strong>The relationship is new.</strong> In early conversations, ROI can feel transactional.
            Build trust first. ROI is most powerful when delivered by someone the client already trusts.
          </li>
          <li>
            <strong>The champion doesn&apos;t need convincing.</strong> If your sponsor already values
            the program, an unsolicited ROI pitch can feel like you&apos;re trying too hard. Instead,
            give <em>them</em> the ROI data so they can justify the renewal internally.
          </li>
        </ul>
        <p className="text-sm text-gray-700 mt-2">
          <strong>The best ROI moment:</strong> When the client is preparing to justify the spend to their
          PM, CIO, or board. That&apos;s when you say: &ldquo;Let me help you build the internal case.
          Here are the numbers.&rdquo;
        </p>
      </SubSection>

      {/* Quick reference */}
      <SectionHeading>Quick Reference: Which Framework to Use</SectionHeading>
      <div className="rounded-md border border-gray-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-3 py-2 text-left font-medium text-gray-600">Client Situation</th>
              <th className="px-3 py-2 text-left font-medium text-gray-600">Framework</th>
              <th className="px-3 py-2 text-left font-medium text-gray-600">Key Metric</th>
              <th className="px-3 py-2 text-left font-medium text-gray-600">Typical ROI</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            <tr>
              <td className="px-3 py-2 text-gray-600 text-xs">Fundraising / DDQ pain</td>
              <td className="px-3 py-2 font-medium text-db-dark text-xs">Capital Protected</td>
              <td className="px-3 py-2 text-gray-600 text-xs">Fee revenue on at-risk allocations</td>
              <td className="px-3 py-2 text-green-700 font-bold text-xs">25–50x</td>
            </tr>
            <tr className="bg-gray-50/50">
              <td className="px-3 py-2 text-gray-600 text-xs">Regulatory concern / SEC prep</td>
              <td className="px-3 py-2 font-medium text-db-dark text-xs">Enforcement Avoided</td>
              <td className="px-3 py-2 text-gray-600 text-xs">Fine + legal + enhanced exam costs</td>
              <td className="px-3 py-2 text-green-700 font-bold text-xs">15–70x</td>
            </tr>
            <tr>
              <td className="px-3 py-2 text-gray-600 text-xs">Security incident / peer breach</td>
              <td className="px-3 py-2 font-medium text-db-dark text-xs">Breach Cost Avoided</td>
              <td className="px-3 py-2 text-gray-600 text-xs">Expected breach cost &times; probability</td>
              <td className="px-3 py-2 text-green-700 font-bold text-xs">3–9x</td>
            </tr>
            <tr className="bg-gray-50/50">
              <td className="px-3 py-2 text-gray-600 text-xs">Considering hiring a CISO</td>
              <td className="px-3 py-2 font-medium text-db-dark text-xs">Build vs. Buy</td>
              <td className="px-3 py-2 text-gray-600 text-xs">Total in-house cost vs. Drawbridge</td>
              <td className="px-3 py-2 text-green-700 font-bold text-xs">5–8x savings</td>
            </tr>
            <tr>
              <td className="px-3 py-2 text-gray-600 text-xs">Using security to win capital</td>
              <td className="px-3 py-2 font-medium text-db-dark text-xs">Allocation Impact</td>
              <td className="px-3 py-2 text-gray-600 text-xs">Lifetime fee revenue from won allocation</td>
              <td className="px-3 py-2 text-green-700 font-bold text-xs">100x+</td>
            </tr>
          </tbody>
        </table>
      </div>

      <DrawbridgeAngle>
        <p>
          ROI isn&apos;t a pitch — it&apos;s a partnership tool. The goal is to help your client build
          the internal business case for renewal, not to convince them the program is worth it.
          If you&apos;ve delivered real outcomes, the ROI tells itself. Your job is to help them
          articulate it to their PM, their board, or their partners.
        </p>
        <p>
          The most powerful ROI conversation is the one where the <em>client</em> does the math:
          &ldquo;We&apos;ve raised $400M since we started working with Drawbridge, and not a single
          allocator has flagged our cyber posture.&rdquo; When they say it, they believe it. When you
          say it, it&apos;s a sales pitch. Give them the data, let them tell the story.
        </p>
      </DrawbridgeAngle>
    </>
  );
}
