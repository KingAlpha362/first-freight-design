/* DMap.jsx — KICK: interactive 3-metro network map with parcels in transit */
function DMap() {
  const cities = {
    JHB: { x: 430, y: 150, name: 'Johannesburg', tag: 'Head office', phone: '011 387 7000' },
    DBN: { x: 600, y: 320, name: 'Durban', tag: 'KZN depot', phone: '031 569 1451' },
    CPT: { x: 180, y: 380, name: 'Cape Town', tag: 'Western Cape depot', phone: '021 036 0333' },
  };
  const routes = [
    { id: 'r1', d: 'M430,150 Q540,200 600,320', from: 'JHB', to: 'DBN' },
    { id: 'r2', d: 'M430,150 Q250,230 180,380', from: 'JHB', to: 'CPT' },
    { id: 'r3', d: 'M600,320 Q390,440 180,380', from: 'DBN', to: 'CPT' },
  ];
  const [sel, setSel] = React.useState('JHB');
  const stats = [['9', 'Provinces served'], ['40+', 'Daily routes'], ['2 400', 'Deliveries / day'], ['1.2M', 'km² covered']];

  return (
    <section style={{ background: 'var(--ff-white)', color: 'var(--fg-1)', padding: '100px 30px', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 14 }}>
          <span className="ff-eyebrow" style={{ color: 'var(--ff-red)' }}>The network</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(2.1rem,4.2vw,3.3rem)',
            margin: '14px 0 0', lineHeight: 1.04 }}>
            Moving South Africa, <span style={{ fontStyle: 'italic', color: 'var(--ff-red)' }}>everywhere.</span></h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 40, alignItems: 'center' }}>
          {/* MAP */}
          <div style={{ position: 'relative', background: 'radial-gradient(80% 70% at 50% 40%, rgba(222,70,50,.10), transparent 70%)',
            border: '1px solid var(--ff-line)', borderRadius: 'var(--r-lg)', padding: 10 }}>
            <svg viewBox="0 0 800 480" style={{ width: '100%', height: 'auto', display: 'block' }}>
              <defs>
                <radialGradient id="dotglow"><stop offset="0%" stopColor="#FB8B3D" /><stop offset="100%" stopColor="#DE4632" /></radialGradient>
              </defs>
              {/* faint dotted field */}
              {Array.from({ length: 13 }).map((_, r) => Array.from({ length: 21 }).map((_, c) => (
                <circle key={r + '-' + c} cx={20 + c * 38} cy={20 + r * 36} r="1.3" fill="rgba(26,26,26,.12)" />
              )))}
              {/* routes */}
              {routes.map(rt => {
                const active = rt.from === sel || rt.to === sel;
                return (
                  <g key={rt.id}>
                    <path id={rt.id} d={rt.d} fill="none"
                      stroke={active ? 'var(--ff-red)' : 'rgba(26,26,26,.20)'} strokeWidth={active ? 2.5 : 1.5}
                      strokeDasharray="7 7" style={{ animation: 'dashmove 1s linear infinite', transition: 'stroke .3s' }} />
                    <circle r={active ? 6 : 4} fill="url(#dotglow)">
                      <animateMotion dur={rt.id === 'r2' ? '4.2s' : rt.id === 'r3' ? '5s' : '3.6s'} repeatCount="indefinite" path={rt.d} rotate="auto" />
                    </circle>
                  </g>
                );
              })}
              {/* nodes */}
              {Object.entries(cities).map(([key, c]) => {
                const on = key === sel;
                return (
                  <g key={key} style={{ cursor: 'pointer' }} onClick={() => setSel(key)}>
                    {on && <circle cx={c.x} cy={c.y} r="22" fill="none" stroke="var(--ff-red)" strokeWidth="2" opacity=".5" style={{ animation: 'pulsering 1.8s ease-out infinite' }} />}
                    <circle cx={c.x} cy={c.y} r={on ? 13 : 9} fill={on ? 'var(--ff-red)' : 'var(--ff-steel)'} stroke="#fff" strokeWidth="3" />
                    <text x={c.x} y={c.y - 24} textAnchor="middle" fill={on ? 'var(--ff-ink)' : 'var(--ff-slate)'}
                      style={{ fontFamily: 'var(--font-cond)', fontWeight: 700, fontSize: 18, letterSpacing: '.04em' }}>{key}</text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* right: selected branch + stats */}
          <div>
            <div style={{ background: 'var(--ff-paper)', border: '1px solid var(--ff-line)', borderRadius: 'var(--r-lg)', padding: '24px 24px', marginBottom: 22 }}>
              <div className="ff-eyebrow" style={{ color: 'var(--ff-red)' }}>{cities[sel].tag}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 700, fontSize: 30, margin: '6px 0 14px', color: 'var(--fg-1)' }}>{cities[sel].name}</div>
              <a href="#" onClick={e => e.preventDefault()} style={{ display: 'inline-flex', alignItems: 'center', gap: 10,
                color: 'var(--fg-1)', textDecoration: 'none', fontFamily: 'var(--font-cond)', fontWeight: 600, fontSize: 20, letterSpacing: '.04em' }}>
                <i data-lucide="phone" style={{ width: 18, height: 18, color: 'var(--ff-red)' }}></i>{cities[sel].phone}</a>
              <div style={{ display: 'flex', gap: 8, marginTop: 18 }}>
                {Object.keys(cities).map(k => (
                  <button key={k} onClick={() => setSel(k)} style={{ flex: 1, padding: '8px 0', cursor: 'pointer',
                    borderRadius: 'var(--r-sm)', border: '1px solid', borderColor: k === sel ? 'var(--ff-red)' : 'var(--ff-line-2)',
                    background: k === sel ? 'rgba(222,70,50,.10)' : 'transparent', color: k === sel ? 'var(--ff-red)' : 'var(--fg-2)',
                    fontFamily: 'var(--font-cond)', fontWeight: 700, fontSize: 13, letterSpacing: '.05em' }}>{k}</button>
                ))}
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {stats.map(([n, l]) => (
                <div key={l} style={{ background: 'var(--ff-paper)', border: '1px solid var(--ff-line)',
                  borderRadius: 'var(--r-md)', padding: '16px 18px' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 700, fontSize: 28, color: 'var(--ff-red)', lineHeight: 1 }}>{n}</div>
                  <div style={{ fontFamily: 'var(--font-cond)', fontWeight: 600, fontSize: 11.5, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--fg-2)', marginTop: 6 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.DMap = DMap;
