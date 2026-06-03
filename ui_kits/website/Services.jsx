/* Services.jsx — image-backed service cards (Logiko style) */
function ServiceTile({ img, icon, tag, title }) {
  const [h, setH] = React.useState(false);
  return (
    <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ position: 'relative', height: 340, borderRadius: 'var(--r-md)', overflow: 'hidden',
        cursor: 'pointer', boxShadow: h ? 'var(--sh-lg)' : 'var(--sh-sm)',
        transform: h ? 'translateY(-4px)' : 'none', transition: 'all 200ms var(--ease)' }}>
      <img src={img} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%',
        objectFit: 'cover', transform: h ? 'scale(1.06)' : 'scale(1)', transition: 'transform 500ms var(--ease)' }} />
      <div style={{ position: 'absolute', inset: 0, background: h
        ? 'linear-gradient(to top, rgba(184,52,31,.92) 0%, rgba(184,52,31,.55) 55%, rgba(184,52,31,.15) 100%)'
        : 'linear-gradient(to top, rgba(20,18,16,.92) 0%, rgba(20,18,16,.35) 55%, rgba(20,18,16,0) 100%)',
        transition: 'background 250ms var(--ease)' }} />
      {/* icon badge */}
      <div style={{ position: 'absolute', left: 20, top: 20, width: 48, height: 48, borderRadius: 'var(--r-sm)',
        background: h ? '#fff' : 'var(--ff-red)', color: h ? 'var(--ff-red)' : '#fff',
        display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 200ms var(--ease)' }}>
        <i data-lucide={icon} style={{ width: 26, height: 26 }}></i>
      </div>
      <div style={{ position: 'absolute', left: 20, right: 20, bottom: 22 }}>
        <div className="ff-eyebrow" style={{ color: h ? 'rgba(255,255,255,.9)' : 'var(--ff-orange)', marginBottom: 6 }}>{tag}</div>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 21, color: '#fff', lineHeight: 1.1 }}>{title}</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginTop: 12,
          color: '#fff', fontFamily: 'var(--font-cond)', fontWeight: 700, fontSize: 12.5,
          letterSpacing: '.08em', textTransform: 'uppercase', opacity: h ? 1 : 0,
          transform: h ? 'translateX(0)' : 'translateX(-6px)', transition: 'all 220ms var(--ease)' }}>
          Learn more <i data-lucide="arrow-right" style={{ width: 15, height: 15 }}></i>
        </div>
      </div>
    </div>
  );
}

function Services() {
  const items = [
    ['../../assets/national-fleet.jpg', 'truck', 'Road service', 'Overnight Freight'],
    ['../../assets/delivering.jpg', 'package', 'Courier', 'Same-Day Delivery'],
    ['../../assets/warehouse.jpg', 'warehouse', 'Storage', 'Warehousing'],
    ['../../assets/depot-packing.jpg', 'boxes', 'Depot', 'Cross-Docking'],
    ['../../assets/on-the-go.jpg', 'route', 'Dedicated', 'Contract Routes'],
  ];
  return (
    <section style={{ background: 'var(--ff-paper)', padding: '92px 24px 96px' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 44 }}>
          <div className="ff-eyebrow" style={{ color: 'var(--ff-red)', letterSpacing: '.18em' }}>Specialist in the transportation</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(1.9rem,3.4vw,2.6rem)',
            margin: '10px 0 0', color: 'var(--fg-1)' }}>Specialist logistics services</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 18 }}>
          {items.map(it => <ServiceTile key={it[3]} img={it[0]} icon={it[1]} tag={it[2]} title={it[3]} />)}
        </div>
      </div>
    </section>
  );
}
window.Services = Services;
window.ServiceTile = ServiceTile;
