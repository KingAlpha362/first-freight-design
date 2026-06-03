/* DHero.jsx — bright daylight hero on the real fleet/depot photo (light theme) */
function DHero({ onQuote, onTrackSubmit, scrim = 70 }) {
  const [wb, setWb] = React.useState('');
  const a = Math.max(20, Math.min(96, scrim)) / 100;
  return (
    <section style={{ position: 'relative', minHeight: 'min(92vh, 820px)', overflow: 'hidden',
      display: 'flex', alignItems: 'center', background: 'var(--ff-paper)' }}>
      <img src="../../assets/hero-fleet-depot.jpg" alt="First Freight fleet lined up at the depot" style={{ position: 'absolute', inset: 0,
        width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 58%' }} />
      {/* light scrim — keeps left-side text readable while the fleet stays bright on the right */}
      <div style={{ position: 'absolute', inset: 0, background:
        `linear-gradient(90deg, rgba(247,245,242,${(a + .14).toFixed(2)}) 0%, rgba(247,245,242,${a.toFixed(2)}) 38%, rgba(247,245,242,${(a * .35).toFixed(2)}) 66%, rgba(247,245,242,0) 100%)` }} />
      <div style={{ position: 'absolute', inset: 0, background:
        'linear-gradient(0deg, rgba(247,245,242,.7) 0%, rgba(247,245,242,0) 26%), linear-gradient(180deg, rgba(247,245,242,.55) 0%, rgba(247,245,242,0) 22%)' }} />

      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1280, margin: '0 auto',
        padding: '40px 30px', width: '100%' }}>
        <div style={{ maxWidth: 660 }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 22 }}>
            <span style={{ width: 34, height: 2, background: 'var(--ff-red)' }}></span>
            <span className="ff-eyebrow" style={{ color: 'var(--ff-red)' }}>National courier &amp; freight · since 1996</span>
          </span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontStyle: 'italic',
            fontSize: 'clamp(3rem,6.4vw,5.6rem)', lineHeight: .98, letterSpacing: '-.015em',
            color: 'var(--fg-1)', margin: '0 0 22px' }}>
            Your parcel.<br /><span style={{ color: 'var(--ff-red)' }}>Our priority.</span></h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 19, lineHeight: 1.55,
            color: 'var(--fg-2)', maxWidth: 500, margin: '0 0 34px' }}>
            Overnight road freight, same-day courier and warehousing across Johannesburg, Durban and
            Cape Town — on a satellite-tracked fleet, with proof of delivery on every run.</p>

          {/* tracking field — solid white card */}
          <form onSubmit={e => { e.preventDefault(); onTrackSubmit(wb || 'FF-2840-117'); }}
            style={{ display: 'flex', gap: 10, maxWidth: 520, marginBottom: 26,
              background: 'var(--ff-white)', border: '1px solid var(--ff-line)',
              boxShadow: 'var(--sh-md)', borderRadius: 'var(--r-md)', padding: 8 }}>
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 10, padding: '0 8px' }}>
              <i data-lucide="package-search" style={{ width: 20, height: 20, color: 'var(--ff-red)' }}></i>
              <input value={wb} onChange={e => setWb(e.target.value)} placeholder="Track your parcel — enter waybill no."
                style={{ flex: 1, background: 'none', border: 0, outline: 'none', color: 'var(--fg-1)',
                  fontFamily: 'var(--font-body)', fontSize: 15.5, padding: '12px 0' }} />
            </div>
            <button type="submit" className="ff-cta-red" style={{ padding: '13px 24px' }}>Track</button>
          </form>

          <div style={{ display: 'flex', alignItems: 'center', gap: 28, flexWrap: 'wrap' }}>
            <button onClick={onQuote} style={{ background: 'none', border: 0, cursor: 'pointer',
              color: 'var(--fg-1)', fontFamily: 'var(--font-cond)', fontWeight: 700, fontSize: 14,
              letterSpacing: '.06em', textTransform: 'uppercase', display: 'inline-flex',
              alignItems: 'center', gap: 9, whiteSpace: 'nowrap', borderBottom: '2px solid var(--ff-red)', paddingBottom: 4 }}>
              Get a quote <i data-lucide="arrow-right" style={{ width: 16, height: 16 }}></i></button>
            <div style={{ display: 'flex', gap: 22 }}>
              {[['30+', 'years on road'], ['3', 'metro depots'], ['24/7', 'tracked fleet']].map(([n, l]) => (
                <div key={l} style={{ borderLeft: '1px solid var(--ff-line-2)', paddingLeft: 14 }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 700, fontSize: 22, color: 'var(--fg-1)', lineHeight: 1, whiteSpace: 'nowrap' }}>{n}</div>
                  <div style={{ fontFamily: 'var(--font-cond)', fontWeight: 600, fontSize: 11, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--fg-3)', marginTop: 3, whiteSpace: 'nowrap' }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.DHero = DHero;
