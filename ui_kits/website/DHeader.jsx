/* DHeader.jsx — dark site header (transparent over hero → solid on scroll) */
function DHeader({ onTrack, onQuote }) {
  const [solid, setSolid] = React.useState(false);
  React.useEffect(() => {
    const el = document.querySelector('.kit-scroll') || window;
    const onScroll = () => setSolid((el === window ? window.scrollY : el.scrollTop) > 40);
    el.addEventListener('scroll', onScroll);
    return () => el.removeEventListener('scroll', onScroll);
  }, []);
  const links = ['Services', 'Network', 'Operations', 'About', 'FAQ'];
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: solid ? 'rgba(255,255,255,.9)' : 'transparent',
      backdropFilter: solid ? 'blur(12px)' : 'none',
      borderBottom: `1px solid ${solid ? 'var(--ff-line)' : 'transparent'}`,
      transition: 'all 240ms var(--ease)'
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 30px', height: 78,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <img src="../../assets/logo-first-freight.png" alt="First Freight Couriers" style={{ height: 34 }} />
        <nav style={{ display: 'flex', alignItems: 'center', gap: 34 }}>
          {links.map(l => (
            <a key={l} href="#" onClick={e => e.preventDefault()} style={{
              fontFamily: 'var(--font-cond)', fontWeight: 600, fontSize: 14, letterSpacing: '.05em',
              textTransform: 'uppercase', color: 'var(--fg-1)', textDecoration: 'none' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--ff-red)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--fg-1)'}>{l}</a>
          ))}
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <button onClick={onTrack} aria-label="Track" style={{ background: 'none', border: 0, cursor: 'pointer',
            color: 'var(--fg-1)', display: 'flex', alignItems: 'center' }}>
            <i data-lucide="search" style={{ width: 20, height: 20 }}></i>
          </button>
          <button onClick={onQuote} className="ff-cta-red" style={{ padding: '12px 22px' }}>
            <i data-lucide="file-text" style={{ width: 16, height: 16 }}></i>Get a Quote
          </button>
        </div>
      </div>
    </header>
  );
}
window.DHeader = DHeader;
