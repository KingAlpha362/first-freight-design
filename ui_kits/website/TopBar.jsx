/* TopBar.jsx — dark utility strip (address · hours · phone / socials) */
function TopBar() {
  const items = [
    ['map-pin', 'Cnr Main Reef & Nasrec Rd, Johannesburg'],
    ['clock', 'Mon–Fri 8am – 5pm'],
    ['phone', '011 387 7000'],
  ];
  const socials = ['facebook', 'instagram', 'linkedin', 'twitter'];
  return (
    <div style={{ background: 'var(--ff-graphite)', color: 'rgba(255,255,255,.82)' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 24px', height: 42,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', gap: 26, alignItems: 'center' }}>
          {items.map(([ic, t]) => (
            <span key={t} style={{ display: 'flex', alignItems: 'center', gap: 8,
              fontFamily: 'var(--font-body)', fontSize: 13.5 }}>
              <i data-lucide={ic} style={{ width: 15, height: 15, color: 'var(--ff-orange)' }}></i>{t}
            </span>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
          {socials.map(s => (
            <a key={s} href="#" onClick={e => e.preventDefault()} aria-label={s} style={{
              width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'rgba(255,255,255,.7)', borderRadius: 4
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--ff-orange)'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,.7)'}>
              <i data-lucide={s} style={{ width: 15, height: 15 }}></i>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
window.TopBar = TopBar;
