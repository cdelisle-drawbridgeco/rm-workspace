'use client';

export default function AiBundleOnePager() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo:wght@400;600;700;800&family=Inter:wght@400;500;600&display=swap');
        @media print {
          header { display: none !important; }
          body { background: white !important; margin: 0 !important; padding: 0 !important; }
          .no-print { display: none !important; }
          .doc-outer { padding: 0 !important; background: white !important; }
          .page { box-shadow: none !important; width: 100% !important; }
          @page { margin: 0; size: letter portrait; }
        }
        .doc-outer {
          background: #e5e7eb;
          min-height: 100vh;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        /* Dot-grid pattern background for header */
        .dot-grid {
          background-image: radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px);
          background-size: 18px 18px;
        }
      `}</style>

      <div className="doc-outer">

        {/* Print button */}
        <div className="no-print" style={{ marginBottom: '1rem', display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          <button
            onClick={() => window.print()}
            style={{ background: '#FF6900', color: 'white', padding: '0.5rem 1.25rem', borderRadius: '0.375rem', fontSize: '0.875rem', fontWeight: 600, cursor: 'pointer', border: 'none' }}
          >
            Save as PDF / Print
          </button>
          <span style={{ fontSize: '0.75rem', color: '#6b7280' }}>Chrome → Print → Save as PDF → Margins: None</span>
        </div>

        {/* ── Document ─────────────────────────────────────── */}
        <div
          className="page"
          style={{
            width: '8.5in',
            height: '11in',
            background: 'white',
            boxShadow: '0 4px 32px rgba(0,0,0,0.2)',
            fontFamily: 'Inter, system-ui, sans-serif',
            display: 'flex',
            flexDirection: 'row',
            overflow: 'hidden',
            position: 'relative',
          }}
        >

          {/* ── Orange left strip ────────────────────────── */}
          <div style={{ width: '0.22in', background: '#FF6900', flexShrink: 0, zIndex: 2 }} />

          {/* ── Main content ────────────────────────────── */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>

            {/* ── Header ──────────────────────────────────── */}
            <div
              className="dot-grid"
              style={{
                background: '#111821',
                padding: '0.32in 0.42in 0.28in',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                flexShrink: 0,
              }}
            >
              <div>
                <div style={{ fontFamily: 'Archivo, system-ui, sans-serif', color: 'white', fontSize: '1rem', fontWeight: 800, letterSpacing: '0.06em', marginBottom: '0.22in' }}>
                  DRAWBRIDGE
                </div>
                <h1 style={{ fontFamily: 'Archivo, system-ui, sans-serif', fontSize: '1.75rem', fontWeight: 800, lineHeight: 1.1, margin: 0, color: 'white' }}>
                  AI Security &amp; Governance
                </h1>
                <p style={{ marginTop: '0.1in', fontSize: '1rem', color: '#FF6900', fontWeight: 700, fontFamily: 'Archivo, system-ui, sans-serif', letterSpacing: '0.01em' }}>
                  Assess. Govern. Train.
                </p>
              </div>
              <div style={{ textAlign: 'right', paddingTop: '0.05in' }}>
                <p style={{ fontSize: '0.62rem', color: 'rgba(255,255,255,0.5)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 0.08in' }}>Built for</p>
                <p style={{ fontSize: '0.72rem', color: 'white', margin: '0.03in 0', lineHeight: 1.6, fontWeight: 500 }}>Hedge Funds</p>
                <p style={{ fontSize: '0.72rem', color: 'white', margin: '0.03in 0', lineHeight: 1.6, fontWeight: 500 }}>Private Equity Firms</p>
                <p style={{ fontSize: '0.72rem', color: 'white', margin: '0.03in 0', lineHeight: 1.6, fontWeight: 500 }}>Family Offices</p>
              </div>
            </div>

            {/* ── Challenge strip ─────────────────────────── */}
            <div style={{ background: '#FF6900', padding: '0.13in 0.42in', flexShrink: 0 }}>
              <p style={{ fontSize: '0.74rem', color: 'white', lineHeight: 1.55, margin: 0, fontWeight: 500 }}>
                AI adoption in alternative asset management is accelerating faster than governance can keep pace. Most firms have already integrated AI tools into daily workflows — but few have evaluated whether those tools are configured securely, governed appropriately, or understood by the people using them.
              </p>
            </div>

            {/* ── Three service columns ────────────────────── */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', flex: 1, borderBottom: '2px solid #f3f4f6' }}>

              {[
                {
                  icon: '›',
                  label: '01',
                  title: 'AI Security Assessment',
                  body: 'A structured, expert-led audit of security controls, governance processes, and safeguards around your AI tools — with a clear prioritized roadmap to address every gap.',
                  items: [
                    'Inventory of AI use across all departments',
                    'Live control audit via screenshare with admin',
                    'Risk findings rated High / Moderate / Low',
                    'Prioritized remediation roadmap',
                    'Quick wins and long-term strategic controls',
                  ],
                  note: 'ChatGPT Enterprise · Claude Enterprise · Microsoft Copilot · Gemini',
                  noteLabel: 'Platforms',
                  border: true,
                },
                {
                  icon: '›',
                  label: '02',
                  title: 'AI Policy Development',
                  body: 'A customized, regulator-ready AI policy tailored to your firm\'s risk profile — establishing clear rules, governance structure, and accountability that satisfies regulators, investors, and leadership.',
                  items: [
                    'Permitted and prohibited AI use definitions',
                    'Data protection and confidentiality guardrails',
                    'Governance structure and oversight model',
                    'Use-case intake and approval workflow',
                    'Language ready for regulators, LPs & auditors',
                  ],
                  note: 'Integrates with existing cybersecurity programs, CRA, and regulatory frameworks',
                  noteLabel: 'Integration',
                  border: true,
                },
                {
                  icon: '›',
                  label: '03',
                  title: 'AI Security Training',
                  body: 'Instructor-led training that equips employees and leadership with the knowledge to use AI safely, recognize emerging threats, and act in alignment with your firm\'s policies.',
                  items: [
                    'AI risk: data leakage, deepfakes, shadow AI',
                    'Safe use guidance for approved tools',
                    'Scenarios specific to alternative assets',
                    'Management and firm-wide session options',
                    'Documented training program for compliance',
                  ],
                  note: 'Live instructor-led · Management sessions · Firm-wide awareness · Tool-tailored content',
                  noteLabel: 'Delivery',
                  border: false,
                },
              ].map((svc) => (
                <div key={svc.title} style={{ padding: '0.22in 0.25in 0.18in', borderRight: svc.border ? '1px solid #e5e7eb' : 'none', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.1in', marginBottom: '0.1in' }}>
                    <span style={{ fontFamily: 'Archivo, system-ui, sans-serif', fontSize: '0.6rem', fontWeight: 700, color: '#FF6900', textTransform: 'uppercase', letterSpacing: '0.1em', background: 'rgba(255,105,0,0.1)', padding: '0.02in 0.08in', borderRadius: '2px' }}>{svc.label}</span>
                    <h2 style={{ fontFamily: 'Archivo, system-ui, sans-serif', fontSize: '0.78rem', fontWeight: 700, color: '#111821', margin: 0 }}>{svc.title}</h2>
                  </div>
                  <p style={{ fontSize: '0.68rem', color: '#374151', lineHeight: 1.55, margin: '0 0 0.13in', flexShrink: 0 }}>{svc.body}</p>
                  <div style={{ borderTop: '2px solid #FF6900', paddingTop: '0.1in', marginBottom: '0.1in', flexShrink: 0 }}>
                    <p style={{ fontSize: '0.58rem', fontWeight: 700, color: '#FF6900', textTransform: 'uppercase', letterSpacing: '0.07em', margin: '0 0 0.07in' }}>What You Receive</p>
                    {svc.items.map((item) => (
                      <div key={item} style={{ display: 'flex', gap: '0.06in', marginBottom: '0.05in', alignItems: 'flex-start' }}>
                        <span style={{ color: '#FF6900', fontSize: '0.7rem', flexShrink: 0, lineHeight: 1.3, fontWeight: 700 }}>›</span>
                        <span style={{ fontSize: '0.66rem', color: '#374151', lineHeight: 1.45 }}>{item}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ background: '#f9fafb', borderLeft: '2px solid #FF6900', padding: '0.06in 0.1in', marginTop: 'auto', flexShrink: 0 }}>
                    <p style={{ fontSize: '0.58rem', color: '#6b7280', margin: 0, lineHeight: 1.45 }}>
                      <strong style={{ color: '#111821' }}>{svc.noteLabel}:</strong> {svc.note}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* ── Bottom two columns ───────────────────────── */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: '1px solid #e5e7eb', flexShrink: 0 }}>

              {/* Why Drawbridge */}
              <div style={{ padding: '0.18in 0.25in', borderRight: '1px solid #e5e7eb' }}>
                <p style={{ fontSize: '0.58rem', fontWeight: 700, color: '#FF6900', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 0.1in' }}>Why Drawbridge</p>
                {[
                  { title: 'Alternative Asset Specialists', desc: 'Built for hedge funds, PE firms, and family offices — not generic enterprises. We understand LP scrutiny, SEC exam requirements, and the constraints of your business.' },
                  { title: 'Advisory-Led, Not Checklist-Driven', desc: 'Delivered by experienced cybersecurity advisors. Clients receive expert judgment and strategic recommendations, not just a templated report.' },
                  { title: 'One Integrated Program', desc: 'Assessment findings inform the policy; the policy shapes the training. A complete, connected program — not three separate vendor engagements.' },
                ].map((item) => (
                  <div key={item.title} style={{ display: 'flex', gap: '0.08in', marginBottom: '0.08in', alignItems: 'flex-start' }}>
                    <div style={{ width: '0.1in', height: '0.1in', background: '#FF6900', flexShrink: 0, marginTop: '0.04in', borderRadius: '1px' }} />
                    <div>
                      <span style={{ fontSize: '0.67rem', fontWeight: 700, color: '#111821' }}>{item.title}: </span>
                      <span style={{ fontSize: '0.67rem', color: '#374151', lineHeight: 1.5 }}>{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Business case */}
              <div style={{ padding: '0.18in 0.25in' }}>
                <p style={{ fontSize: '0.58rem', fontWeight: 700, color: '#FF6900', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 0.1in' }}>The Business Case</p>
                {[
                  'Demonstrate defensible AI governance to LPs and regulators',
                  'Reduce exposure to data leakage and confidentiality breaches',
                  'Establish firm-wide consistency and accountability for AI use',
                  'Enable responsible AI innovation — with the controls in place',
                  'Address growing investor and regulatory scrutiny of AI programs',
                ].map((item) => (
                  <div key={item} style={{ display: 'flex', gap: '0.07in', marginBottom: '0.07in', alignItems: 'flex-start' }}>
                    <span style={{ color: '#FF6900', fontSize: '0.7rem', flexShrink: 0, lineHeight: 1.3, fontWeight: 700 }}>›</span>
                    <span style={{ fontSize: '0.67rem', color: '#374151', lineHeight: 1.45 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Footer ──────────────────────────────────── */}
            <div
              className="dot-grid"
              style={{
                background: '#1e2433',
                padding: '0.14in 0.42in',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexShrink: 0,
              }}
            >
              <div>
                <span style={{ fontFamily: 'Archivo, system-ui, sans-serif', color: 'white', fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.08em' }}>DRAWBRIDGE</span>
                <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.6rem', marginLeft: '0.15in' }}>AI Security &amp; Governance</span>
              </div>
              <div style={{ display: 'flex', gap: '0.3in', alignItems: 'center' }}>
                <span style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.5)' }}>info@drawbridgeco.com</span>
                <span style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.5)' }}>+1 561-593-1600</span>
                <span style={{ fontSize: '0.6rem', color: '#FF6900', fontWeight: 600 }}>drawbridgeco.com</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
