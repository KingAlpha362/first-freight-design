/* Hero.jsx — angled red OR full-bleed image hero (tweakable) */
function Hero({ onQuote, onTrackSubmit, full = false, overlay = 55 }) {
  const slides = [
    { img: '../../assets/fleet-truck.jpg', kicker: 'National courier & freight', title: ['Get your freight', 'moving nationwide'] },
    { img: '../../assets/national-fleet.jpg', kicker: 'One fleet · three metros', title: ['Specialist cargo', 'across South Africa'] },
    { img: '../../assets/on-the-go.jpg', kicker: 'Overnight & same-day', title: ['Your parcel,', 'our priority.'] },
  ];
  const [i, setI] = React.useState(0);
  const go = d => setI(p => (p + d + slides.length) % slides.length);
  const s = slides[i];
  const onDark = full;
  const ov = Math.max(0, Math.min(90, overlay)) / 100;

  return (
    <section style={{ position: 'relative', background: 'var(--ff-paper)', overflow: 'hidden' }}>
      {full ? (
        /* ---- FULL-BLEED IMAGE HERO ---- */
        <React.Fragment>
          <img key={s.img} src={s.img} alt="" style={{ position: 'absolute', inset: 0,
            width: '100%', height: '100%', objectFit: 'cover', animation: 'ffFade 500ms var(--ease)' }} />
          <div style={{ position: 'absolute', inset: 0, background:
            `linear-gradient(95deg, rgba(20,18,16,${(ov + .25).toFixed(2)}) 0%, rgba(20,18,16,${ov.toFixed(2)}) 42%, rgba(184,52,31,${(ov * .55).toFixed(2)}) 100%)` }} />
        </React.Fragment>
      ) : (
        /* ---- ANGLED RED PANEL ---- */
        <React.Fragment>
          <div style={{ position: 'absolute', left: 0, top: 0, width: 260, height: 220,
            backgroundImage: 'radial-gradient(var(--ff-line-2) 1.4px, transparent 1.4px)',
            backgroundSize: '16px 16px', opacity: .7, pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: '56%',
            clipPath: 'polygon(18% 0, 100% 0, 100% 100%, 0 100%)', background: 'var(--ff-red)' }}>
            <img key={s.img} src={s.img} alt="" style={{ position: 'absolute', inset: 0,
              width: '100%', height: '100%', objectFit: 'cover', mixBlendMode: 'multiply', opacity: .92,
              animation: 'ffFade 500ms var(--ease)' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(120deg, rgba(222,70,50,.55), rgba(184,52,31,.2))' }} />
          </div>
        </React.Fragment>
      )}

      {/* trust badge */}
      <div style={{ position: 'absolute', top: 40, right: 64, zIndex: 3,
        width: 116, height: 116, borderRadius: '50%', background: '#fff', boxShadow: 'var(--sh-lg)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        textAlign: 'center', border: '3px solid var(--ff-orange)' }}>
        <div style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 700, fontSize: 30, color: 'var(--ff-red)', lineHeight: 1 }}>30<span style={{ fontSize: 16 }}>yrs</span></div>
        <div style={{ fontFamily: 'var(--font-cond)', fontWeight: 700, fontSize: 9.5, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--fg-2)', marginTop: 4 }}>Trusted<br />since 1996</div>
      </div>

      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1240, margin: '0 auto',
        padding: '92px 24px 154px' }}>
        <div style={{ maxWidth: 600 }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 9, marginBottom: 18 }}>
            <span style={{ width: 30, height: 3, background: onDark ? 'var(--ff-orange)' : 'var(--ff-red)' }}></span>
            <span className="ff-eyebrow" style={{ color: onDark ? 'var(--ff-orange)' : 'var(--ff-red)' }}>{s.kicker}</span>
          </span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(2.3rem,3.8vw,3.4rem)',
            lineHeight: 1.08, color: onDark ? '#fff' : 'var(--ff-ink)', margin: '0 0 22px', letterSpacing: '-.01em' }}>
            {s.title[0]}<br />{s.title[1]}</h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 17.5, lineHeight: 1.55,
            color: onDark ? 'rgba(255,255,255,.88)' : 'var(--fg-2)', maxWidth: 440, margin: '0 0 30px' }}>
            Overnight road freight, same-day courier and warehousing — handled by people who move
            cargo every day, between Johannesburg, Durban and Cape Town.</p>
          <div style={{ display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap' }}>
            <button onClick={onQuote} className="ff-cta-red"><i data-lucide="arrow-right" style={{ width: 18, height: 18 }}></i>Explore Services</button>
            <button onClick={() => onTrackSubmit('FF-2840-117')} className="ff-cta-line" style={onDark ? { color: '#fff', borderColor: 'rgba(255,255,255,.5)' } : null}><i data-lucide="search" style={{ width: 17, height: 17 }}></i>Track a Parcel</button>
          </div>
        </div>
      </div>

      {/* carousel arrows */}
      <div style={{ position: 'absolute', right: 40, bottom: 176, zIndex: 3, display: 'flex', gap: 10 }}>
        {[['chevron-left', -1], ['chevron-right', 1]].map(([ic, d]) => (
          <button key={ic} onClick={() => go(d)} aria-label="slide" style={{
            width: 46, height: 46, borderRadius: '50%',
            border: onDark ? '1.5px solid rgba(255,255,255,.6)' : '1.5px solid var(--ff-line-2)',
            background: onDark ? 'rgba(255,255,255,.12)' : '#fff', cursor: 'pointer', display: 'flex',
            alignItems: 'center', justifyContent: 'center', color: onDark ? '#fff' : 'var(--fg-1)',
            transition: 'all 160ms var(--ease)' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--ff-red)'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'var(--ff-red)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = onDark ? 'rgba(255,255,255,.12)' : '#fff'; e.currentTarget.style.color = onDark ? '#fff' : 'var(--fg-1)'; e.currentTarget.style.borderColor = onDark ? 'rgba(255,255,255,.6)' : 'var(--ff-line-2)'; }}>
            <i data-lucide={ic} style={{ width: 20, height: 20 }}></i>
          </button>
        ))}
      </div>
    </section>
  );
}
window.Hero = Hero;
