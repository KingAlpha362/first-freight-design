/* Footer.jsx */
function Footer() {
  const cols = [
    ['Services', ['Road Freight', 'Same-Day Courier', 'Warehousing', 'Contract Distribution']],
    ['Company', ['About First Freight', 'Our Fleet', 'Coverage', 'Careers']],
    ['Support', ['Track a Parcel', 'Get a Quote', 'Claims', 'Contact']],
  ];
  return (
    <footer style={{ background: 'var(--ff-graphite)', color: '#fff', padding: '64px 24px 36px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 32, paddingBottom: 40, borderBottom: '1px solid rgba(255,255,255,.12)' }}>
          <div>
            <img src="../../assets/logo-first-freight.png" alt="First Freight Couriers" style={{ height: 40, marginBottom: 16, filter: 'brightness(1.05)' }} />
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.6, color: 'rgba(255,255,255,.66)', maxWidth: 280, margin: 0 }}>
              National courier &amp; freight since 1996. Your Parcel, Our Priority.</p>
            <div style={{ fontFamily: 'var(--font-cond)', fontSize: 12, letterSpacing: '.06em', color: 'rgba(255,255,255,.4)', marginTop: 16 }}>
              Reg. No. 1996/005172/07 · www.firstfreight.co.za</div>
          </div>
          {cols.map(([h, items]) => (
            <div key={h}>
              <div style={{ fontFamily: 'var(--font-cond)', fontWeight: 700, fontSize: 12, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--ff-orange)', marginBottom: 14 }}>{h}</div>
              <div style={{ display: 'grid', gap: 9 }}>
                {items.map(it => (
                  <a key={it} href="#" onClick={e => e.preventDefault()} style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'rgba(255,255,255,.72)', textDecoration: 'none' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,.72)'}>{it}</a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, paddingTop: 24, fontFamily: 'var(--font-body)', fontSize: 13, color: 'rgba(255,255,255,.5)' }}>
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
window.Footer = Footer;
