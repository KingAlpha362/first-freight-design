import { useState } from 'react'
import { Phone } from 'lucide-react'

// Image is square, displayed 480×480 centred in 800×480 viewBox → x-offset 160
// All coordinates derived from city dot positions on the map photo

const cities = {
  JHB: { x: 415, y: 187, name: 'Johannesburg', tag: 'Head office',        phone: '011 387 7000' },
  DBN: { x: 510, y: 312, name: 'Durban',        tag: 'KZN depot',          phone: '031 569 1451' },
  CPT: { x: 198, y: 437, name: 'Cape Town',     tag: 'Western Cape depot', phone: '021 036 0333' },
}

// Every city dot visible on the map photo — label positioned to avoid overlap
const hubs = [
  { id: 'PTA', x: 420, y: 163, label: 'Pretoria',        ax: 'start',  dy: 16  },
  { id: 'PLK', x: 460, y: 101, label: 'Polokwane',       ax: 'middle', dy: -10 },
  { id: 'NLS', x: 485, y: 178, label: 'Nelspruit',       ax: 'start',  dy: -8  },
  { id: 'MFG', x: 350, y: 168, label: 'Mafikeng',        ax: 'middle', dy: -10 },
  { id: 'KLK', x: 365, y: 216, label: 'Klerksdorp',      ax: 'end',    dy: -8  },
  { id: 'UPT', x: 260, y: 240, label: 'Upington',        ax: 'middle', dy: -10 },
  { id: 'KIM', x: 340, y: 259, label: 'Kimberley',       ax: 'end',    dy: -8  },
  { id: 'BFN', x: 400, y: 274, label: 'Bloemfontein',    ax: 'middle', dy: -10 },
  { id: 'PMB', x: 490, y: 298, label: 'P.Maritzburg',    ax: 'end',    dy: -8  },
  { id: 'UMT', x: 435, y: 394, label: 'Umtata',          ax: 'middle', dy: -10 },
  { id: 'ELN', x: 420, y: 418, label: 'East London',     ax: 'middle', dy: 17  },
  { id: 'PLZ', x: 365, y: 442, label: 'Port Elizabeth',  ax: 'middle', dy: 16  },
  { id: 'MSL', x: 300, y: 442, label: 'Mossel Bay',      ax: 'middle', dy: 16  },
]

// Major depot arteries
const routes = [
  { id: 'r1', d: 'M415,187 Q462,250 510,312', from: 'JHB', to: 'DBN' },
  { id: 'r2', d: 'M415,187 Q307,312 198,437', from: 'JHB', to: 'CPT' },
  { id: 'r3', d: 'M510,312 Q354,375 198,437', from: 'DBN', to: 'CPT' },
]

// Hub routes — follow real road corridors so no city is bypassed
const hubRoutes = [
  // Limpopo corridor (N1 north)
  { id: 'h01', d: 'M415,187 Q417,175 420,163', dur: '3s'   }, // JHB → PTA
  { id: 'h02', d: 'M420,163 Q440,132 460,101', dur: '4.5s' }, // PTA → PLK
  // Mpumalanga (N4 east)
  { id: 'h03', d: 'M420,163 Q452,170 485,178', dur: '4s'   }, // PTA → NLS
  { id: 'h04', d: 'M485,178 Q472,139 460,101', dur: '4.5s' }, // NLS → PLK
  // North West (N14 west)
  { id: 'h05', d: 'M415,187 Q390,201 365,216', dur: '4s'   }, // JHB → KLK
  { id: 'h06', d: 'M365,216 Q358,192 350,168', dur: '4s'   }, // KLK → MFG
  // Northern Cape (N12 / N10)
  { id: 'h07', d: 'M365,216 Q352,237 340,259', dur: '5s'   }, // KLK → KIM
  { id: 'h08', d: 'M340,259 Q300,250 260,240', dur: '5.5s' }, // KIM → UPT
  { id: 'h09', d: 'M260,240 Q229,339 198,437', dur: '7s'   }, // UPT → CPT
  // Free State (N1 south)
  { id: 'h10', d: 'M415,187 Q408,231 400,274', dur: '5s'   }, // JHB → BFN
  // Eastern Cape coast (N9 / N2)
  { id: 'h11', d: 'M400,274 Q382,358 365,442', dur: '5.5s' }, // BFN → PLZ
  { id: 'h12', d: 'M365,442 Q332,442 300,442', dur: '4s'   }, // PLZ → MSL
  { id: 'h13', d: 'M300,442 Q249,440 198,437', dur: '5s'   }, // MSL → CPT
  { id: 'h14', d: 'M365,442 Q392,430 420,418', dur: '4.5s' }, // PLZ → ELN
  { id: 'h15', d: 'M420,418 Q428,406 435,394', dur: '3.5s' }, // ELN → UMT
  // KZN coast (N2 north)
  { id: 'h16', d: 'M435,394 Q462,346 490,298', dur: '4.5s' }, // UMT → PMB
  { id: 'h17', d: 'M490,298 Q500,305 510,312', dur: '3s'   }, // PMB → DBN
]

const stats = [
  ['9',     'Provinces served'],
  ['40+',   'Daily routes'],
  ['2 400', 'Deliveries / day'],
  ['1.2M',  'km² covered'],
]

export default function NetworkMap() {
  const [sel, setSel] = useState('JHB')
  const city = cities[sel]

  return (
    <section id="network" style={{ background: 'var(--ff-white)', color: 'var(--fg-1)', padding: '100px 30px', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 14 }}>
          <span className="ff-eyebrow" style={{ color: 'var(--ff-red)' }}>The network</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(2.1rem,4.2vw,3.3rem)', margin: '14px 0 0', lineHeight: 1.04 }}>
            Moving South Africa, <span style={{ fontStyle: 'italic', color: 'var(--ff-red)' }}>everywhere.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mt-8">
          <div className="hidden md:block md:col-span-2" style={{ position: 'relative' }}>
            <svg viewBox="0 0 800 480" style={{ width: '100%', height: 'auto', display: 'block' }}>
              <defs>
                <radialGradient id="dotglow">
                  <stop offset="0%" stopColor="#FB8B3D" />
                  <stop offset="100%" stopColor="#DE4632" />
                </radialGradient>
                <filter id="pinshadow" x="-60%" y="-60%" width="220%" height="220%">
                  <feDropShadow dx="0" dy="1" stdDeviation="2.5" floodColor="rgba(0,0,0,0.45)" />
                </filter>
              </defs>

              <image href="/assets/sa-map.jpg" x="0" y="0" width="800" height="480" preserveAspectRatio="xMidYMid meet" />

              {/* hub routes */}
              {hubRoutes.map(hr => (
                <g key={hr.id}>
                  <path d={hr.d} fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="1" />
                  <circle r="3" fill="rgba(242,106,33,0.9)">
                    <animateMotion dur={hr.dur} repeatCount="indefinite" path={hr.d} rotate="auto" />
                  </circle>
                </g>
              ))}

              {/* depot routes */}
              {routes.map(rt => {
                const active = rt.from === sel || rt.to === sel
                return (
                  <g key={rt.id}>
                    <path d={rt.d} fill="none"
                      stroke={active ? 'var(--ff-red)' : 'rgba(255,255,255,0.4)'}
                      strokeWidth={active ? 2.5 : 1.5}
                      strokeDasharray="7 7"
                      style={{ animation: 'dashmove 1s linear infinite', transition: 'stroke .3s' }} />
                    <circle r={active ? 6 : 4} fill="url(#dotglow)">
                      <animateMotion dur={rt.id === 'r2' ? '4.2s' : rt.id === 'r3' ? '5s' : '3.6s'} repeatCount="indefinite" path={rt.d} rotate="auto" />
                    </circle>
                  </g>
                )
              })}

              {/* hub nodes */}
              {hubs.map(h => (
                <g key={h.id} filter="url(#pinshadow)">
                  <circle cx={h.x} cy={h.y} r="4.5" fill="#fff" opacity="0.9" />
                  <circle cx={h.x} cy={h.y} r="2.8" fill="var(--ff-orange)" />
                  <text x={h.x} y={h.y + h.dy} textAnchor={h.ax}
                    style={{
                      fontFamily: 'var(--font-cond)', fontWeight: 700, fontSize: 10.5,
                      fill: '#1A1A1A', stroke: '#fff', strokeWidth: 3.5,
                      paintOrder: 'stroke fill', letterSpacing: '.02em',
                    }}>{h.label}</text>
                </g>
              ))}

              {/* depot nodes */}
              {Object.entries(cities).map(([key, c]) => {
                const on = key === sel
                return (
                  <g key={key} style={{ cursor: 'pointer' }} onClick={() => setSel(key)} filter="url(#pinshadow)">
                    {on
                      ? <circle cx={c.x} cy={c.y} r="22" fill="none" stroke="var(--ff-red)" strokeWidth="2" opacity=".6"
                          style={{ animation: 'pulsering 1.8s ease-out infinite' }} />
                      : <circle cx={c.x} cy={c.y} r="17" fill="none" stroke="#fff" strokeWidth="1.5" opacity=".5" />
                    }
                    <circle cx={c.x} cy={c.y} r={on ? 13 : 9} fill={on ? 'var(--ff-red)' : 'var(--ff-steel)'} stroke="#fff" strokeWidth="3" />
                    <text x={c.x} y={c.y - 22} textAnchor="middle"
                      style={{
                        fontFamily: 'var(--font-cond)', fontWeight: 700, fontSize: 16,
                        fill: on ? '#1A1A1A' : '#2a2a2a',
                        stroke: '#fff', strokeWidth: 4, paintOrder: 'stroke fill',
                        letterSpacing: '.04em',
                      }}>{key}</text>
                  </g>
                )
              })}
            </svg>
          </div>

          {/* Branch panel + stats */}
          <div>
            <div style={{ background: 'var(--ff-paper)', border: '1px solid var(--ff-line)', borderRadius: 'var(--r-lg)', padding: '24px', marginBottom: 22 }}>
              <div className="ff-eyebrow" style={{ color: 'var(--ff-red)' }}>{city.tag}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 700, fontSize: 30, margin: '6px 0 14px', color: 'var(--fg-1)' }}>{city.name}</div>
              <a href={`tel:${city.phone.replace(/\s/g, '')}`} style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                color: 'var(--fg-1)', textDecoration: 'none', fontFamily: 'var(--font-cond)', fontWeight: 600, fontSize: 20, letterSpacing: '.04em'
              }}>
                <Phone size={18} style={{ color: 'var(--ff-red)' }} />{city.phone}
              </a>
              <div className="flex gap-2 mt-4">
                {Object.keys(cities).map(k => (
                  <button key={k} onClick={() => setSel(k)} style={{
                    flex: 1, padding: '8px 0', cursor: 'pointer',
                    borderRadius: 'var(--r-sm)', border: '1px solid',
                    borderColor: k === sel ? 'var(--ff-red)' : 'var(--ff-line-2)',
                    background: k === sel ? 'rgba(222,70,50,.10)' : 'transparent',
                    color: k === sel ? 'var(--ff-red)' : 'var(--fg-2)',
                    fontFamily: 'var(--font-cond)', fontWeight: 700, fontSize: 13, letterSpacing: '.05em'
                  }}>{k}</button>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {stats.map(([n, l]) => (
                <div key={l} style={{ background: 'var(--ff-paper)', border: '1px solid var(--ff-line)', borderRadius: 'var(--r-md)', padding: '16px 18px' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 700, fontSize: 28, color: 'var(--ff-red)', lineHeight: 1 }}>{n}</div>
                  <div style={{ fontFamily: 'var(--font-cond)', fontWeight: 600, fontSize: 11.5, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--fg-2)', marginTop: 6 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
