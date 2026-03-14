'use client';

export default function AiBundleOnePager() {
  return (
    <>
      <style>{`
        @media print {
          header { display: none !important; }
          body { background: white !important; }
          .no-print { display: none !important; }
          .page { box-shadow: none !important; margin: 0 !important; padding: 0 !important; max-width: 100% !important; }
          @page { margin: 0; size: letter portrait; }
        }
        @media screen {
          .page-bg { background: #e5e7eb; min-height: 100vh; padding: 2rem; display: flex; flex-direction: column; align-items: center; }
        }
      `}</style>

      {/* Screen wrapper */}
      <div className="page-bg">

        {/* Print button — screen only */}
        <div className="no-print mb-4 flex gap-3 items-center">
          <button
            onClick={() => window.print()}
            style={{ background: '#111821', color: 'white', padding: '0.5rem 1.25rem', borderRadius: '0.375rem', fontSize: '0.875rem', fontWeight: 600, cursor: 'pointer', border: 'none' }}
          >
            Save as PDF / Print
          </button>
          <span style={{ fontSize: '0.75rem', color: '#6b7280' }}>Open in Chrome → Print → Save as PDF for best results</span>
        </div>

        {/* One-pager document */}
        <div
          className="page"
          style={{
            width: '8.5in',
            minHeight: '11in',
            background: 'white',
            boxShadow: '0 4px 24px rgba(0,0,0,0.15)',
            fontFamily: 'Inter, system-ui, sans-serif',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
        >

          {/* ── Header ───────────────────────────────────────── */}
          <div style={{ background: '#111821', padding: '0.6in 0.6in 0.45in', color: 'white' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <div style={{ fontFamily: 'Archivo, system-ui, sans-serif', color: '#86C8BC', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.35in' }}>
                  DRAWBRIDGE
                </div>
                <h1 style={{ fontFamily: 'Archivo, system-ui, sans-serif', fontSize: '1.9rem', fontWeight: 700, lineHeight: 1.1, margin: 0, color: 'white' }}>
                  AI Security &<br />Governance
                </h1>
                <p style={{ marginTop: '0.18in', fontSize: '0.85rem', color: '#86C8BC', fontWeight: 500, letterSpacing: '0.01em' }}>
                  Assess. Govern. Train.
                </p>
              </div>
              <div style={{ textAlign: 'right', paddingTop: '0.05in' }}>
                <div style={{ background: 'rgba(134,200,188,0.12)', border: '1px solid rgba(134,200,188,0.3)', borderRadius: '0.25rem', padding: '0.15in 0.25in', display: 'inline-block' }}>
                  <p style={{ fontSize: '0.65rem', color: '#86C8BC', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 0.08in' }}>Built for</p>
                  <p style={{ fontSize: '0.75rem', color: 'white', margin: '0.04in 0', lineHeight: 1.5 }}>Hedge Funds</p>
                  <p style={{ fontSize: '0.75rem', color: 'white', margin: '0.04in 0', lineHeight: 1.5 }}>Private Equity</p>
                  <p style={{ fontSize: '0.75rem', color: 'white', margin: '0.04in 0', lineHeight: 1.5 }}>Family Offices</p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Challenge strip ───────────────────────────────── */}
          <div style={{ background: '#D6E6E3', padding: '0.22in 0.6in' }}>
            <p style={{ fontSize: '0.78rem', color: '#111821', lineHeight: 1.6, margin: 0 }}>
              AI adoption in alternative asset management is accelerating faster than governance can keep pace. Most firms have already integrated AI tools into daily workflows — but few have evaluated whether those tools are configured securely, governed appropriately, or understood by the people using them. <strong>Drawbridge&apos;s AI Security &amp; Governance program closes that gap.</strong>
            </p>
          </div>

          {/* ── Three service columns ────────────────────────── */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', flex: 1, borderBottom: '1px solid #e5e7eb' }}>

            {/* Assessment */}
            <div style={{ padding: '0.32in 0.32in 0.3in', borderRight: '1px solid #e5e7eb' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.1in', marginBottom: '0.12in' }}>
                <div style={{ width: '0.28in', height: '0.28in', borderRadius: '50%', background: '#111821', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.65rem', flexShrink: 0 }}>🔍</div>
                <h2 style={{ fontFamily: 'Archivo, system-ui, sans-serif', fontSize: '0.82rem', fontWeight: 700, color: '#111821', margin: 0 }}>AI Security Assessment</h2>
              </div>
              <p style={{ fontSize: '0.72rem', color: '#374151', lineHeight: 1.55, margin: '0 0 0.15in' }}>
                A structured, expert-led audit of the security controls, governance processes, and safeguards around your firm&apos;s AI tools — with a clear prioritized roadmap to address every gap.
              </p>
              <div style={{ borderTop: '1.5px solid #86C8BC', paddingTop: '0.12in', marginBottom: '0.12in' }}>
                <p style={{ fontSize: '0.62rem', fontWeight: 700, color: '#489E8E', textTransform: 'uppercase', letterSpacing: '0.07em', margin: '0 0 0.08in' }}>What You Receive</p>
                {[
                  'Inventory of AI use across all departments',
                  'Live control audit via screenshare with an admin',
                  'Risk findings rated High / Moderate / Low',
                  'Prioritized remediation roadmap',
                  'Quick wins and long-term strategic controls',
                ].map((item) => (
                  <div key={item} style={{ display: 'flex', gap: '0.07in', marginBottom: '0.06in', alignItems: 'flex-start' }}>
                    <span style={{ color: '#86C8BC', fontSize: '0.65rem', flexShrink: 0, marginTop: '0.01in' }}>✓</span>
                    <span style={{ fontSize: '0.7rem', color: '#374151', lineHeight: 1.45 }}>{item}</span>
                  </div>
                ))}
              </div>
              <div style={{ background: '#F6F6F7', borderRadius: '0.1rem', padding: '0.08in 0.1in', marginTop: 'auto' }}>
                <p style={{ fontSize: '0.6rem', color: '#6b7280', margin: 0, lineHeight: 1.5 }}>
                  <strong style={{ color: '#111821' }}>Platforms:</strong> ChatGPT Enterprise · Claude Enterprise · Microsoft Copilot · Gemini
                </p>
              </div>
            </div>

            {/* Policy */}
            <div style={{ padding: '0.32in 0.32in 0.3in', borderRight: '1px solid #e5e7eb' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.1in', marginBottom: '0.12in' }}>
                <div style={{ width: '0.28in', height: '0.28in', borderRadius: '50%', background: '#111821', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.65rem', flexShrink: 0 }}>📋</div>
                <h2 style={{ fontFamily: 'Archivo, system-ui, sans-serif', fontSize: '0.82rem', fontWeight: 700, color: '#111821', margin: 0 }}>AI Policy Development</h2>
              </div>
              <p style={{ fontSize: '0.72rem', color: '#374151', lineHeight: 1.55, margin: '0 0 0.15in' }}>
                A customized, regulator-ready AI policy tailored to your firm&apos;s risk profile — giving leadership, employees, and investors a clear, defensible framework for AI use.
              </p>
              <div style={{ borderTop: '1.5px solid #86C8BC', paddingTop: '0.12in', marginBottom: '0.12in' }}>
                <p style={{ fontSize: '0.62rem', fontWeight: 700, color: '#489E8E', textTransform: 'uppercase', letterSpacing: '0.07em', margin: '0 0 0.08in' }}>What You Receive</p>
                {[
                  'Permitted and prohibited AI use definitions',
                  'Data protection and confidentiality guardrails',
                  'Governance structure and oversight model',
                  'Use-case intake and approval workflow',
                  'Language ready for regulators, LPs, and auditors',
                ].map((item) => (
                  <div key={item} style={{ display: 'flex', gap: '0.07in', marginBottom: '0.06in', alignItems: 'flex-start' }}>
                    <span style={{ color: '#86C8BC', fontSize: '0.65rem', flexShrink: 0, marginTop: '0.01in' }}>✓</span>
                    <span style={{ fontSize: '0.7rem', color: '#374151', lineHeight: 1.45 }}>{item}</span>
                  </div>
                ))}
              </div>
              <div style={{ background: '#F6F6F7', borderRadius: '0.1rem', padding: '0.08in 0.1in', marginTop: 'auto' }}>
                <p style={{ fontSize: '0.6rem', color: '#6b7280', margin: 0, lineHeight: 1.5 }}>
                  <strong style={{ color: '#111821' }}>Integrates with:</strong> Existing cybersecurity programs · CRA · Regulatory compliance frameworks
                </p>
              </div>
            </div>

            {/* Training */}
            <div style={{ padding: '0.32in 0.32in 0.3in' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.1in', marginBottom: '0.12in' }}>
                <div style={{ width: '0.28in', height: '0.28in', borderRadius: '50%', background: '#111821', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.65rem', flexShrink: 0 }}>🎓</div>
                <h2 style={{ fontFamily: 'Archivo, system-ui, sans-serif', fontSize: '0.82rem', fontWeight: 700, color: '#111821', margin: 0 }}>AI Security Training</h2>
              </div>
              <p style={{ fontSize: '0.72rem', color: '#374151', lineHeight: 1.55, margin: '0 0 0.15in' }}>
                Instructor-led training that equips employees and leadership with the knowledge to use AI safely, recognize emerging threats, and act in alignment with your firm&apos;s policies.
              </p>
              <div style={{ borderTop: '1.5px solid #86C8BC', paddingTop: '0.12in', marginBottom: '0.12in' }}>
                <p style={{ fontSize: '0.62rem', fontWeight: 700, color: '#489E8E', textTransform: 'uppercase', letterSpacing: '0.07em', margin: '0 0 0.08in' }}>What You Receive</p>
                {[
                  'AI risk awareness: data leakage, deepfakes, shadow AI',
                  'Safe use guidance for approved enterprise tools',
                  'Real-world scenarios specific to alternative assets',
                  'Management-focused and firm-wide session options',
                  'Documented training program for compliance purposes',
                ].map((item) => (
                  <div key={item} style={{ display: 'flex', gap: '0.07in', marginBottom: '0.06in', alignItems: 'flex-start' }}>
                    <span style={{ color: '#86C8BC', fontSize: '0.65rem', flexShrink: 0, marginTop: '0.01in' }}>✓</span>
                    <span style={{ fontSize: '0.7rem', color: '#374151', lineHeight: 1.45 }}>{item}</span>
                  </div>
                ))}
              </div>
              <div style={{ background: '#F6F6F7', borderRadius: '0.1rem', padding: '0.08in 0.1in', marginTop: 'auto' }}>
                <p style={{ fontSize: '0.6rem', color: '#6b7280', margin: 0, lineHeight: 1.5 }}>
                  <strong style={{ color: '#111821' }}>Delivery:</strong> Live instructor-led · Management sessions · Firm-wide awareness · Tailored to approved tools
                </p>
              </div>
            </div>
          </div>

          {/* ── Why Drawbridge ───────────────────────────────── */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, borderBottom: '1px solid #e5e7eb' }}>
            <div style={{ padding: '0.25in 0.32in', borderRight: '1px solid #e5e7eb' }}>
              <p style={{ fontSize: '0.62rem', fontWeight: 700, color: '#489E8E', textTransform: 'uppercase', letterSpacing: '0.07em', margin: '0 0 0.1in' }}>Why Drawbridge</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.08in' }}>
                {[
                  { title: 'Alternative Asset Specialists', desc: 'Built for hedge funds, PE firms, and family offices — not generic enterprises. We understand LP scrutiny, SEC exam requirements, and the operational constraints of your business.' },
                  { title: 'Advisory-Led Delivery', desc: 'Delivered by experienced cybersecurity advisors, not a checklist tool. Clients receive expert judgment and recommendations, not just a report.' },
                  { title: 'One Integrated Program', desc: 'Assessment findings inform the policy; the policy shapes the training. A complete, connected program rather than three separate vendor engagements.' },
                ].map((item) => (
                  <div key={item.title} style={{ display: 'flex', gap: '0.1in', alignItems: 'flex-start' }}>
                    <div style={{ width: '0.12in', height: '0.12in', borderRadius: '50%', background: '#86C8BC', flexShrink: 0, marginTop: '0.04in' }} />
                    <div>
                      <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#111821' }}>{item.title}: </span>
                      <span style={{ fontSize: '0.7rem', color: '#374151', lineHeight: 1.5 }}>{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ padding: '0.25in 0.32in' }}>
              <p style={{ fontSize: '0.62rem', fontWeight: 700, color: '#489E8E', textTransform: 'uppercase', letterSpacing: '0.07em', margin: '0 0 0.1in' }}>The Business Case</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.07in' }}>
                {[
                  'Demonstrate defensible AI governance to LPs and regulators',
                  'Reduce exposure to data leakage and confidentiality breaches',
                  'Establish firm-wide consistency and accountability for AI use',
                  'Enable AI adoption — with the controls in place to do it safely',
                  'Address the growing investor and regulatory scrutiny of AI programs',
                ].map((item) => (
                  <div key={item} style={{ display: 'flex', gap: '0.07in', alignItems: 'flex-start' }}>
                    <span style={{ color: '#86C8BC', fontSize: '0.65rem', flexShrink: 0, marginTop: '0.01in' }}>✓</span>
                    <span style={{ fontSize: '0.7rem', color: '#374151', lineHeight: 1.45 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Footer ──────────────────────────────────────── */}
          <div style={{ background: '#111821', padding: '0.18in 0.6in', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <span style={{ fontFamily: 'Archivo, system-ui, sans-serif', color: '#86C8BC', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>DRAWBRIDGE</span>
              <span style={{ color: '#6b7280', fontSize: '0.65rem', marginLeft: '0.15in' }}>AI Security &amp; Governance</span>
            </div>
            <div style={{ textAlign: 'right' }}>
              <p style={{ fontSize: '0.65rem', color: '#9ca3af', margin: 0 }}>drawbridgeco.com</p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
