/* DServices.jsx — "Every delivery need, covered" — dark photo cards */
function DServiceCard({ img, icon, num, title, body }) {
  const [h, setH] = React.useState(false);
  return (
    <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ background: 'var(--ff-white)', border: '1px solid var(--ff-line)', borderRadius: 'var(--r-lg)',
        overflow: 'hidden', transition: 'all 200ms var(--ease)',
        transform: h ? 'translateY(-5px)' : 'none',
        boxShadow: h ? 'var(--sh-lg)' : 'var(--sh-sm)',
        borderColor: h ? 'rgba(222,70,50,.5)' : 'var(--ff-line)' }}>
      <div style={{ position: 'relative', height: 168, overflow: 'hidden' }}>
        <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover',
          transform: h ? 'scale(1.07)' : 'scale(1)', transition: 'transform 500ms var(--ease)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, var(--ff-white) 4%, rgba(255,255,255,.15) 60%, transparent)' }} />
        <span style={{ position: 'absolute', top: 14, right: 16, fontFamily: 'var(--font-display)',
          fontStyle: 'italic', fontWeight: 700, fontSize: 26, color: 'rgba(255,255,255,.85)', textShadow: '0 1px 6px rgba(0,0,0,.35)' }}>{num}</span>
        <div style={{ position: 'absolute', left: 16, bottom: -22, width: 48, height: 48, borderRadius: 'var(--r-sm)',
          background: 'var(--ff-red)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: 'var(--sh-brand)' }}>
          <i data-lucide={icon} style={{ width: 24, height: 24 }}></i></div>
      </div>
      <div style={{ padding: '34px 22px 24px' }}>
        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, color: 'var(--fg-1)', margin: '0 0 8px' }}>{title}</h3>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.55, color: 'var(--fg-2)', margin: '0 0 16px' }}>{body}</p>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-cond)',
          fontWeight: 700, fontSize: 12, letterSpacing: '.1em', textTransform: 'uppercase',
          color: h ? 'var(--ff-red)' : 'var(--fg-3)', transition: 'color 180ms var(--ease)' }}>
          Learn more <i data-lucide="arrow-right" style={{ width: 15, height: 15 }}></i></span>
      </div>
    </div>
  );
}

function DServices() {
  const items = [
    ['../../assets/national-fleet.jpg', 'truck', '01', 'Overnight Road Freight', 'Scheduled overnight line-haul of parcels and pallets between all three metro depots.'],
    ['../../assets/delivering.jpg', 'package', '02', 'Same-Day Courier', 'On-demand local pick-up and delivery within Johannesburg, Durban and Cape Town.'],
    ['../../assets/warehouse.jpg', 'warehouse', '03', 'Warehousing & Depot', 'Secure storage, handling and cross-docking at our depots across the country.'],
    ['../../assets/on-the-go.jpg', 'route', '04', 'Contract Distribution', 'Dedicated vehicles and routes for high-volume and time-critical accounts.'],
  ];
  return (
    <section style={{ background: 'var(--ff-paper)', padding: '100px 30px' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 18, marginBottom: 44 }}>
          <div>
            <span className="ff-eyebrow" style={{ color: 'var(--ff-red)' }}>What we move</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(2.1rem,4vw,3.1rem)',
              lineHeight: 1.06, color: 'var(--fg-1)', margin: '14px 0 0' }}>
              Every delivery need.<br /><span style={{ fontStyle: 'italic', color: 'var(--ff-red)' }}>Covered.</span></h2>
          </div>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 15.5, lineHeight: 1.6, color: 'var(--fg-2)', maxWidth: 360, margin: 0 }}>
            From a single envelope to a contracted national fleet — one partner, one point of contact.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 22 }}>
          {items.map(it => <DServiceCard key={it[3]} img={it[0]} icon={it[1]} num={it[2]} title={it[3]} body={it[4]} />)}
        </div>
      </div>
    </section>
  );
}
window.DServices = DServices;
window.DServiceCard = DServiceCard;
