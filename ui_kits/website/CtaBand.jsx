/* CtaBand.jsx — "simplify" strip + full-bleed photo CTA */
function CtaBand({ onQuote }) {
  return (
    <React.Fragment>
      {/* thin strip */}
      <div style={{ background: '#fff', borderTop: '1px solid var(--ff-line)' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto', padding: '22px 24px',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14 }}>
          <i data-lucide="truck" style={{ width: 26, height: 26, color: 'var(--ff-red)' }}></i>
          <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 600, fontSize: 21, color: 'var(--fg-1)' }}>
            Simplify your freight today —</span>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--fg-2)' }}>
            national logistics provider since 1996.</span>
        </div>
      </div>

      {/* photo CTA */}
      <section style={{ position: 'relative', overflow: 'hidden' }}>
        <img src="../../assets/warehouse.jpg" alt="" style={{ position: 'absolute', inset: 0,
          width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(20,18,16,.82), rgba(184,52,31,.55))' }} />
        <div style={{ position: 'relative', maxWidth: 1140, margin: '0 auto', padding: '76px 24px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 30, flexWrap: 'wrap' }}>
          <div>
            <div className="ff-eyebrow" style={{ color: 'var(--ff-orange)', marginBottom: 12 }}>Get in touch with us anytime</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(1.9rem,3.6vw,2.8rem)',
              color: '#fff', lineHeight: 1.12, margin: 0 }}>
              Looking for the best logistics<br />transport{' '}
              <span style={{ position: 'relative', display: 'inline-block', padding: '0 6px' }}>
                service?
                <svg viewBox="0 0 200 60" preserveAspectRatio="none" style={{ position: 'absolute', left: -6, top: -6, width: 'calc(100% + 12px)', height: 'calc(100% + 14px)', pointerEvents: 'none' }}>
                  <ellipse cx="100" cy="30" rx="96" ry="26" fill="none" stroke="var(--ff-orange)" strokeWidth="3" strokeDasharray="300 40" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
          </div>
          <button onClick={onQuote} className="ff-cta-red" style={{ fontSize: 15, padding: '16px 30px' }}>
            <i data-lucide="file-text" style={{ width: 18, height: 18 }}></i>Get a Quote
          </button>
        </div>
      </section>
    </React.Fragment>
  );
}
window.CtaBand = CtaBand;
