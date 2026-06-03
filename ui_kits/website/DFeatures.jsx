/* DFeatures.jsx — "Precision logistics, at scale" — alternating feature rows (light) */
function FeatureRowItem({ img, stat, statLabel, eyebrow, title, body, points, flip }) {
  const textCol = (
    <div style={{ gridColumn: flip ? '2' : '1' }}>
      <span className="ff-eyebrow" style={{ color: 'var(--ff-red)', display: 'flex', alignItems: 'center', gap: 9 }}>
        <span style={{ width: 24, height: 3, background: 'var(--ff-red)' }}></span>{eyebrow}</span>
      <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(1.6rem,2.8vw,2.2rem)',
        lineHeight: 1.1, color: 'var(--fg-1)', margin: '14px 0 12px' }}>{title}</h3>
      <p style={{ fontFamily: 'var(--font-body)', fontSize: 15.5, lineHeight: 1.65, color: 'var(--fg-2)', margin: '0 0 18px', maxWidth: 440 }}>{body}</p>
      <div style={{ display: 'grid', gap: 9 }}>
        {points.map(p => (
          <div key={p} style={{ display: 'flex', alignItems: 'center', gap: 10,
            fontFamily: 'var(--font-body)', fontSize: 14.5, color: 'var(--fg-1)' }}>
            <i data-lucide="check" style={{ width: 18, height: 18, color: 'var(--ff-red)' }}></i>{p}</div>
        ))}
      </div>
    </div>
  );
  const imgCol = (
    <div style={{ gridColumn: flip ? '1' : '2', position: 'relative' }}>
      <img src={img} alt="" style={{ width: '100%', height: 340, objectFit: 'cover', borderRadius: 'var(--r-lg)', boxShadow: 'var(--sh-md)' }} />
      <div style={{ position: 'absolute', [flip ? 'right' : 'left']: -18, bottom: -18,
        background: 'var(--ff-red)', color: '#fff', borderRadius: 'var(--r-md)', padding: '16px 22px',
        boxShadow: 'var(--sh-brand)', textAlign: 'center' }}>
        <div style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 700, fontSize: 34, lineHeight: 1 }}>{stat}</div>
        <div style={{ fontFamily: 'var(--font-cond)', fontWeight: 700, fontSize: 10.5, letterSpacing: '.1em', textTransform: 'uppercase', marginTop: 4 }}>{statLabel}</div>
      </div>
    </div>
  );
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center', marginBottom: 64 }}>
      {flip ? <React.Fragment>{imgCol}{textCol}</React.Fragment> : <React.Fragment>{textCol}{imgCol}</React.Fragment>}
    </div>
  );
}

function DFeatures() {
  const rows = [
    { img: '../../assets/national-fleet.jpg', stat: '40+', statLabel: 'Daily routes', eyebrow: 'Network',
      title: 'National linehaul network', body: 'Scheduled overnight line-haul connects our Johannesburg, Durban and Cape Town depots so your freight keeps moving while the country sleeps.',
      points: ['Nightly trunk routes between metros', 'Regional feeder runs to outlying towns'] , flip: false },
    { img: '../../assets/fleet-truck.jpg', stat: '180+', statLabel: 'Vehicles', eyebrow: 'Fleet',
      title: 'Managed fleet excellence', body: 'Trucks, bakkies and vans maintained to a tight standard and matched to the job — from a single envelope to a full pallet load.',
      points: ['Right-sized vehicle for every consignment', 'Routine maintenance & safety checks'], flip: true },
    { img: '../../assets/depot-packing.jpg', stat: '99.4%', statLabel: 'On-time', eyebrow: 'Technology',
      title: 'Technology-driven visibility', body: 'Every shipment is scanned, tracked and confirmed — so you and your customer always know exactly where a parcel is.',
      points: ['24-hour satellite tracking', 'Signed, time-stamped proof of delivery'], flip: false },
    { img: '../../assets/warehouse.jpg', stat: '24/7', statLabel: 'Depot ops', eyebrow: 'Warehousing',
      title: 'Industrial warehousing', body: 'Secure storage, handling and cross-docking at our depots — an extension of your supply chain, not just a stop along the way.',
      points: ['Inbound, storage & outbound handling', 'Cross-dock for fast turnaround'], flip: true },
  ];
  return (
    <section style={{ background: 'var(--ff-paper)', padding: '100px 30px 84px' }}>
      <div style={{ maxWidth: 1140, margin: '0 auto' }}>
        <div style={{ marginBottom: 56, maxWidth: 560 }}>
          <span className="ff-eyebrow" style={{ color: 'var(--ff-red)' }}>Capability</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(2.1rem,4vw,3.1rem)',
            lineHeight: 1.06, color: 'var(--fg-1)', margin: '14px 0 0' }}>
            Precision logistics.<br /><span style={{ fontStyle: 'italic', color: 'var(--ff-red)' }}>At scale.</span></h2>
        </div>
        {rows.map(r => <FeatureRowItem key={r.title} {...r} />)}
      </div>
    </section>
  );
}
window.DFeatures = DFeatures;
window.FeatureRowItem = FeatureRowItem;
