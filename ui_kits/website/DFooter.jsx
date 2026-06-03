/* DFooter.jsx — dark footer */
function DFooter() {
  const branches = [
    ['Johannesburg', '011 387 7000', 'Head office & main hub'],
    ['Durban', '031 569 1451', 'KZN regional depot'],
    ['Cape Town', '021 036 0333', 'Western Cape depot'],
  ];
  const cols = [
    ['Services', ['Overnight Road Freight', 'Same-Day Courier', 'Warehousing', 'Contract Distribution']],
    ['Company', ['About', 'Our Network', 'Fleet', 'Careers']],
  ];
  return (
    <footer style={{ background: '#0A0908', color: '#fff', padding: '64px 30px 34px', borderTop: '1px solid rgba(255,255,255,.08)' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1.4fr', gap: 36,
          paddingBottom: 40, borderBottom: '1px solid rgba(255,255,255,.1)' }}>
          <div>
            <img src="../../assets/logo-first-freight-dark.png" alt="First Freight Couriers" style={{ height: 38, marginBottom: 16 }} />
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.6, color: 'rgba(255,255,255,.6)', maxWidth: 260, margin: 0 }}>
              National courier &amp; freight since 1996. Your parcel, our priority.</p>
            <div style={{ fontFamily: 'var(--font-cond)', fontSize: 12, letterSpacing: '.05em', color: 'rgba(255,255,255,.38)', marginTop: 16 }}>
              Reg. No. 1996/005172/07 · www.firstfreight.co.za</div>
          </div>
          {cols.map(([h, items]) => (
            <div key={h}>
              <div style={{ fontFamily: 'var(--font-cond)', fontWeight: 700, fontSize: 12, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--ff-orange)', marginBottom: 14 }}>{h}</div>
              <div style={{ display: 'grid', gap: 9 }}>
                {items.map(it => (
                  <a key={it} href="#" onClick={e => e.preventDefault()} style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'rgba(255,255,255,.66)', textDecoration: 'none' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,.66)'}>{it}</a>
                ))}
              </div>
            </div>
          ))}
          <div>
            <div style={{ fontFamily: 'var(--font-cond)', fontWeight: 700, fontSize: 12, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--ff-orange)', marginBottom: 14 }}>Branches</div>
            <div style={{ display: 'grid', gap: 12 }}>
              {branches.map(([c, p, n]) => (
                <div key={c} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <i data-lucide="map-pin" style={{ width: 16, height: 16, color: 'var(--ff-red)', marginTop: 3, flex: 'none' }}></i>
                  <div>
                    <div style={{ fontFamily: 'var(--font-cond)', fontWeight: 700, fontSize: 13.5, letterSpacing: '.06em', textTransform: 'uppercase' }}>{c}</div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'rgba(255,255,255,.55)' }}>{p}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, paddingTop: 24,
          fontFamily: 'var(--font-body)', fontSize: 13, color: 'rgba(255,255,255,.45)' }}>
          <span>&copy; {new Date().getFullYear()} First Freight Couriers (Pty) Ltd. All rights reserved.</span>
          <span style={{ display: 'flex', gap: 22 }}>
            <a href="#" onClick={e => e.preventDefault()} style={{ color: 'inherit', textDecoration: 'none' }}>Privacy</a>
            <a href="#" onClick={e => e.preventDefault()} style={{ color: 'inherit', textDecoration: 'none' }}>Terms</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
window.DFooter = DFooter;
