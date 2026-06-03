/* DGallery.jsx — "Active. Human. Real." operations photo mosaic */
function GTile({ img, c, r, label }) {
  const [h, setH] = React.useState(false);
  return (
    <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ gridColumn: c, gridRow: r, position: 'relative', overflow: 'hidden',
        borderRadius: 'var(--r-md)', border: '1px solid var(--ff-line)' }}>
      <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover',
        transform: h ? 'scale(1.06)' : 'scale(1)', transition: 'transform 600ms var(--ease)' }} />
      <div style={{ position: 'absolute', inset: 0, background: h
        ? 'linear-gradient(0deg, rgba(184,52,31,.55), transparent 60%)'
        : 'linear-gradient(0deg, rgba(14,12,11,.55), transparent 55%)', transition: 'background 250ms var(--ease)' }} />
      {label && <span style={{ position: 'absolute', left: 16, bottom: 14, fontFamily: 'var(--font-cond)',
        fontWeight: 700, fontSize: 12, letterSpacing: '.1em', textTransform: 'uppercase', color: '#fff' }}>{label}</span>}
    </div>
  );
}

function DGallery() {
  return (
    <section style={{ background: 'var(--ff-mist)', color: 'var(--fg-1)', padding: '100px 30px' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 44 }}>
          <span className="ff-eyebrow" style={{ color: 'var(--ff-red)' }}>Behind the deliveries</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(2.1rem,4vw,3.1rem)',
            margin: '14px 0 0', lineHeight: 1.04 }}>
            Active. Human. <span style={{ fontStyle: 'italic', color: 'var(--ff-red)' }}>Real.</span></h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)',
          gridTemplateRows: 'repeat(3, 196px)', gap: 16 }}>
          <GTile img="../../assets/big-team.jpg" c="1 / 3" r="1 / 3" label="The crew · Cape Town depot" />
          <GTile img="../../assets/delivering.jpg" c="3 / 4" r="1 / 2" />
          <GTile img="../../assets/warehouse.jpg" c="4 / 5" r="1 / 2" label="Depot" />
          <GTile img="../../assets/happy-team.jpg" c="3 / 5" r="2 / 3" label="On the road" />
          <GTile img="../../assets/depot-packing.jpg" c="1 / 2" r="3 / 4" />
          <GTile img="../../assets/fleet-truck.jpg" c="2 / 5" r="3 / 4" label="National fleet" />
        </div>
      </div>
    </section>
  );
}
window.DGallery = DGallery;
window.GTile = GTile;
