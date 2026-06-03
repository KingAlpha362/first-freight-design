/* DEvolution.jsx — "logistics done properly" intro + feature list + image */
function DEvolution() {
  const feats = [
    ['radar', 'Live tracking', 'Every shipment satellite-tracked, 24 hours a day.'],
    ['file-check-2', 'Proof of delivery', 'Signed, time-stamped confirmation on every drop.'],
    ['shield', 'Insured cargo', 'Goods-in-transit cover from collection to delivery.'],
    ['headset', 'Real people', 'A dedicated controller who knows your account.'],
  ];
  return (
    <section style={{ background: 'var(--ff-white)', color: 'var(--fg-1)', padding: '104px 30px' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', display: 'grid',
        gridTemplateColumns: '1.05fr .95fr', gap: 70, alignItems: 'center' }}>
        <div>
          <span className="ff-eyebrow" style={{ color: 'var(--ff-red)' }}>Why First Freight</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(2.1rem,4vw,3.1rem)',
            lineHeight: 1.08, margin: '16px 0 18px', letterSpacing: '-.01em', color: 'var(--fg-1)' }}>
            A grown-up approach<br />to <span style={{ fontStyle: 'italic', color: 'var(--ff-red)' }}>logistics.</span></h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 16.5, lineHeight: 1.65,
            color: 'var(--fg-2)', maxWidth: 480, margin: '0 0 36px' }}>
            Thirty years of moving cargo have taught us that freight is a promise — to be where we
            said, when we said. We pair a national fleet with the visibility and care of a courier
            who treats your parcel like the only one on the truck.</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            {feats.map(([ic, t, d]) => (
              <div key={t} style={{ display: 'flex', gap: 13, padding: '16px 16px',
                background: 'var(--ff-paper)', border: '1px solid var(--ff-line)',
                borderRadius: 'var(--r-md)' }}>
                <div style={{ width: 40, height: 40, flex: 'none', borderRadius: 'var(--r-sm)',
                  background: 'rgba(222,70,50,.12)', color: 'var(--ff-red)', display: 'flex',
                  alignItems: 'center', justifyContent: 'center' }}>
                  <i data-lucide={ic} style={{ width: 21, height: 21 }}></i></div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 3, color: 'var(--fg-1)' }}>{t}</div>
                  <div style={{ fontSize: 12.5, lineHeight: 1.45, color: 'var(--fg-2)' }}>{d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <img src="../../assets/driver-assistant.jpg" alt="First Freight courier team" style={{
            width: '100%', height: 480, objectFit: 'cover', borderRadius: 'var(--r-lg)' }} />
          <div style={{ position: 'absolute', inset: 0, borderRadius: 'var(--r-lg)',
            boxShadow: 'inset 0 0 0 1px rgba(255,255,255,.1)', background: 'linear-gradient(0deg, rgba(14,12,11,.5), transparent 40%)' }} />
          <div style={{ position: 'absolute', left: 22, bottom: 22, right: 22, display: 'flex',
            alignItems: 'center', gap: 12 }}>
            <div style={{ width: 46, height: 46, borderRadius: '50%', background: 'var(--ff-red)',
              display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <i data-lucide="quote" style={{ width: 22, height: 22, color: '#fff' }}></i></div>
            <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 600, fontSize: 17, color: '#fff' }}>
              People who move cargo every day.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
window.DEvolution = DEvolution;
