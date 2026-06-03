/* About.jsx — "provider since 1996" with image collage + skill bars */
function SkillBar({ label, pct }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 7 }}>
        <span style={{ fontFamily: 'var(--font-cond)', fontWeight: 700, fontSize: 13, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--fg-1)' }}>{label}</span>
        <span style={{ fontFamily: 'var(--font-cond)', fontWeight: 700, fontSize: 13, color: 'var(--ff-red)' }}>{pct}%</span>
      </div>
      <div style={{ height: 7, background: 'var(--ff-mist)', borderRadius: 'var(--r-pill)', overflow: 'hidden' }}>
        <div style={{ width: pct + '%', height: '100%', background: 'var(--ff-red)', borderRadius: 'var(--r-pill)' }}></div>
      </div>
    </div>
  );
}

function About() {
  return (
    <section style={{ position: 'relative', background: '#fff', padding: '104px 24px 92px', overflow: 'hidden' }}>
      {/* faded brand watermark */}
      <div style={{ position: 'absolute', right: -10, top: '50%', transform: 'translateY(-50%) rotate(90deg)',
        fontFamily: 'var(--font-display)', fontWeight: 700, fontStyle: 'italic', fontSize: 100,
        color: 'var(--ff-mist)', letterSpacing: '.04em', pointerEvents: 'none', whiteSpace: 'nowrap' }}>First Freight</div>

      <div style={{ position: 'relative', maxWidth: 1140, margin: '0 auto',
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
        {/* image collage */}
        <div style={{ position: 'relative', paddingBottom: 30, paddingLeft: 30 }}>
          <img src="../../assets/fleet-truck.jpg" alt="" style={{ width: '88%', height: 360,
            objectFit: 'cover', borderRadius: 'var(--r-md)', boxShadow: 'var(--sh-md)' }} />
          <img src="../../assets/warehouse.jpg" alt="" style={{ position: 'absolute', right: 0, bottom: 0,
            width: '46%', height: 200, objectFit: 'cover', borderRadius: 'var(--r-md)',
            border: '6px solid #fff', boxShadow: 'var(--sh-lg)' }} />
          <div style={{ position: 'absolute', left: 0, top: 28, background: 'var(--ff-red)', color: '#fff',
            borderRadius: 'var(--r-md)', padding: '16px 20px', boxShadow: 'var(--sh-brand)', textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 700, fontSize: 38, lineHeight: 1 }}>30+</div>
            <div style={{ fontFamily: 'var(--font-cond)', fontWeight: 700, fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', marginTop: 4 }}>Years on<br />the road</div>
          </div>
        </div>

        {/* copy */}
        <div>
          <div className="ff-eyebrow" style={{ color: 'var(--ff-red)', display: 'flex', alignItems: 'center', gap: 9 }}>
            <span style={{ width: 26, height: 3, background: 'var(--ff-red)' }}></span>About the company
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(1.9rem,3.2vw,2.5rem)',
            lineHeight: 1.12, color: 'var(--fg-1)', margin: '14px 0 14px' }}>
            National logistics solution<br />provider since <span style={{ color: 'var(--ff-red)', fontStyle: 'italic' }}>1996</span></h2>
          <p style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 16, color: 'var(--ff-red)', margin: '0 0 12px' }}>
            Simplify your freight and logistics with a personal approach.</p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 15.5, lineHeight: 1.65, color: 'var(--fg-2)', margin: '0 0 26px', maxWidth: 480 }}>
            From a single parcel to a contracted fleet, First Freight Couriers moves your cargo
            through a hub-and-spoke depot network — giving you a complete account of the shipment,
            valuable visibility, and freight that arrives when it should.</p>

          <div style={{ maxWidth: 420, marginBottom: 26 }}>
            <SkillBar label="Road Freight" pct={95} />
            <SkillBar label="Warehousing" pct={87} />
            <SkillBar label="Same-Day Courier" pct={78} />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 14, paddingTop: 18, borderTop: '1px solid var(--ff-line)' }}>
            <div style={{ width: 46, height: 46, borderRadius: '50%', background: 'var(--ff-graphite)', color: '#fff',
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 700 }}>JM</div>
            <div>
              <div style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 15, color: 'var(--fg-1)' }}>J. Mokoena</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--fg-2)' }}>Managing Director</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.About = About;
window.SkillBar = SkillBar;
