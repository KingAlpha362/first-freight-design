/* Header.jsx — Logiko-style main nav with red angled "Get a Quote" block */
function Header({ onTrack, onQuote }) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const el = document.querySelector('.kit-scroll') || window;
    const onScroll = () => setScrolled((el === window ? window.scrollY : el.scrollTop) > 8);
    el.addEventListener('scroll', onScroll);
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['Home', 'Services', 'Fleet', 'Coverage', 'About', 'News'];
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50, background: '#fff',
      boxShadow: scrolled ? 'var(--sh-md)' : 'none', transition: 'box-shadow 200ms var(--ease)'
    }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', paddingLeft: 24,
        display: 'flex', alignItems: 'stretch', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="../../assets/logo-first-freight.png" alt="First Freight Couriers" style={{ height: 40 }} />
        </div>

        <nav style={{ display: 'flex', alignItems: 'center', gap: 30 }}>
          {links.map((l, i) => (
            <a key={l} href="#" onClick={e => e.preventDefault()} style={{
              fontFamily: 'var(--font-cond)', fontWeight: 600, fontSize: 15,
              letterSpacing: '.04em', textTransform: 'uppercase',
              color: i === 0 ? 'var(--ff-red)' : 'var(--fg-1)', textDecoration: 'none',
              padding: '26px 0', position: 'relative'
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--ff-red)'}
            onMouseLeave={e => e.currentTarget.style.color = i === 0 ? 'var(--ff-red)' : 'var(--fg-1)'}>{l}</a>
          ))}
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: 18, paddingLeft: 8 }}>
          <button onClick={onTrack} aria-label="Track" style={{
            background: 'none', border: 0, cursor: 'pointer', color: 'var(--fg-1)',
            display: 'flex', alignItems: 'center'
          }}><i data-lucide="search" style={{ width: 20, height: 20 }}></i></button>

          {/* angled red GET A QUOTE block — Logiko signature */}
          <button onClick={onQuote} style={{
            position: 'relative', background: 'var(--ff-red)', color: '#fff', border: 0,
            cursor: 'pointer', fontFamily: 'var(--font-cond)', fontWeight: 700, fontSize: 14,
            letterSpacing: '.08em', textTransform: 'uppercase',
            padding: '0 30px 0 46px', alignSelf: 'stretch', display: 'flex', alignItems: 'center', gap: 9,
            clipPath: 'polygon(22px 0, 100% 0, 100% 100%, 0 100%)',
            transition: 'background 180ms var(--ease)'
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'var(--ff-red-deep)'}
          onMouseLeave={e => e.currentTarget.style.background = 'var(--ff-red)'}>
            <i data-lucide="file-text" style={{ width: 17, height: 17 }}></i>Get a Quote
          </button>
        </div>
      </div>
    </header>
  );
}
window.Header = Header;
