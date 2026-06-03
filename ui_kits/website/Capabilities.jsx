/* Capabilities.jsx — outline wordmark, intro, stat counters, red contact strip */
function Capabilities() {
  const stats = [
    ['package', '4 890', 'Parcels moved daily'],
    ['truck', '180+', 'Vehicles in the fleet'],
    ['map-pin', '3', 'Metro depots'],
    ['users', '350+', 'Team members'],
  ];
  return (
    <section style={{ position: 'relative', background: '#fff', padding: '96px 24px 0', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', left: '50%', top: 40, transform: 'translateX(-50%)',
        fontFamily: 'var(--font-display)', fontWeight: 700, fontStyle: 'italic', fontSize: 'clamp(5rem,13vw,11rem)',
        color: 'transparent', WebkitTextStroke: '1.5px var(--ff-line)', letterSpacing: '.02em',
        pointerEvents: 'none', whiteSpace: 'nowrap', lineHeight: 1 }}>Logistics</div>

      <div style={{ position: 'relative', maxWidth: 1140, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center', marginBottom: 64 }}>
          <div>
            <div className="ff-eyebrow" style={{ color: 'var(--ff-red)', display: 'flex', alignItems: 'center', gap: 9 }}>
              <span style={{ width: 26, height: 3, background: 'var(--ff-red)' }}></span>Why choose us</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(2rem,3.6vw,2.8rem)',
              lineHeight: 1.1, color: 'var(--fg-1)', margin: '14px 0 0' }}>
              We create the scope<br />to reach your potential</h2>
          </div>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.7, color: 'var(--fg-2)', margin: 0 }}>
            Three decades of moving cargo have built a network you can lean on — trucks, bakkies and
            vans linking our Johannesburg, Durban and Cape Town depots, backed by 24-hour satellite
            tracking and proof of delivery on every shipment.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 0,
          border: '1px solid var(--ff-line)', borderRadius: 'var(--r-md)', overflow: 'hidden' }}>
          {stats.map(([ic, n, l], i) => (
            <div key={l} style={{ padding: '30px 24px', textAlign: 'center',
              borderRight: i < 3 ? '1px solid var(--ff-line)' : 'none' }}>
              <i data-lucide={ic} style={{ width: 26, height: 26, color: 'var(--ff-red)' }}></i>
              <div style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 700, fontSize: 38, color: 'var(--fg-1)', lineHeight: 1.1, marginTop: 8 }}>{n}</div>
              <div style={{ fontFamily: 'var(--font-cond)', fontWeight: 600, fontSize: 12.5, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--fg-2)', marginTop: 4 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* red contact strip */}
      <div style={{ position: 'relative', maxWidth: 1140, margin: '40px auto -44px', zIndex: 4 }}>
        <div style={{ background: 'var(--ff-red)', color: '#fff', borderRadius: 'var(--r-md)',
          padding: '26px 36px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: 20, flexWrap: 'wrap', boxShadow: 'var(--sh-brand)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <i data-lucide="shield-check" style={{ width: 34, height: 34 }}></i>
            <div style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 700, fontSize: 24 }}>Trusted transportation company</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <span style={{ fontFamily: 'var(--font-cond)', fontWeight: 600, fontSize: 13, letterSpacing: '.08em', textTransform: 'uppercase', opacity: .85 }}>Get professional help</span>
            <a href="#" onClick={e => e.preventDefault()} style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 700, fontSize: 30, color: '#fff', textDecoration: 'none' }}>011 387 7000</a>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Capabilities = Capabilities;
