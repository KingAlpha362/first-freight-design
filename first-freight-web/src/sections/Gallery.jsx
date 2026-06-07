import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

/* ---- One photo tile: index + label caption, calm zoom, red rule wipe ---- */
function GTile({ img, alt = '', index, label, desc, feature = false, desat = false, style }) {
  const [h, setH] = useState(false)
  return (
    <figure
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        position: 'relative', overflow: 'hidden', margin: 0,
        borderRadius: 'var(--r-md)', border: '1px solid var(--ff-line)',
        background: 'var(--ff-graphite)', ...style
      }}
    >
      <img src={img} alt={alt} className={desat ? 'ff-desat' : 'ff-graded'} style={{
        width: '100%', height: '100%', objectFit: 'cover', display: 'block',
        transform: h ? 'scale(1.045)' : 'scale(1)', transition: 'transform 620ms var(--ease)'
      }} />

      {/* legibility gradient — deep ink rising from the base */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'linear-gradient(0deg, rgba(14,12,11,.74) 0%, rgba(14,12,11,.18) 42%, rgba(14,12,11,0) 70%)'
      }} />

      {/* caption */}
      <figcaption style={{
        position: 'absolute', left: feature ? 22 : 16, right: 16, bottom: feature ? 20 : 15,
        transform: h ? 'translateY(-3px)' : 'translateY(0)', transition: 'transform 250ms var(--ease)'
      }}>
        <span style={{
          display: 'flex', alignItems: 'center', gap: 9,
          fontFamily: 'var(--font-cond)', fontWeight: 700, letterSpacing: '.12em',
          textTransform: 'uppercase', color: '#fff', fontSize: feature ? 14 : 12
        }}>
          <span style={{ color: 'var(--ff-orange)' }}>{index}</span>
          <span style={{ width: 14, height: 1, background: 'rgba(255,255,255,.45)' }} />
          {label}
        </span>
        {feature && desc && (
          <p style={{
            margin: '8px 0 0', maxWidth: 320, fontFamily: 'var(--font-body)',
            fontSize: 14.5, lineHeight: 1.5, color: 'rgba(255,255,255,.82)'
          }}>{desc}</p>
        )}
      </figcaption>

      {/* red rule wipes in on hover */}
      <span style={{
        position: 'absolute', left: 0, bottom: 0, height: 3, background: 'var(--ff-red)',
        width: h ? '100%' : '0%', transition: 'width 320ms var(--ease)'
      }} />
    </figure>
  )
}

/* ---- Non-image statement tile — breaks the photo rhythm ---- */
function StatementTile({ style }) {
  const [h, setH] = useState(false)
  return (
    <a
      href="#contact"
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        position: 'relative', overflow: 'hidden', textDecoration: 'none',
        borderRadius: 'var(--r-md)', background: 'var(--ff-red)', color: '#fff',
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        padding: '20px 22px', boxShadow: h ? 'var(--sh-brand)' : 'none',
        transition: 'box-shadow 250ms var(--ease)', ...style
      }}
    >
      <span className="ff-eyebrow" style={{ color: 'rgba(255,255,255,.78)' }}>Our promise</span>
      <span style={{
        fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 700,
        fontSize: 'clamp(1.35rem, 2vw, 1.7rem)', lineHeight: 1.08, margin: '14px 0 0'
      }}>
        Your parcel,<br />our priority.
      </span>
      <span style={{
        display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 16,
        fontFamily: 'var(--font-cond)', fontWeight: 700, fontSize: 12,
        letterSpacing: '.1em', textTransform: 'uppercase'
      }}>
        Get a quote
        <ArrowRight size={15} style={{ transform: h ? 'translateX(3px)' : 'none', transition: 'transform 250ms var(--ease)' }} />
      </span>
    </a>
  )
}

const TILES = [
  { img: '/assets/team-truck-group.jpg',            alt: 'Group of uniformed First Freight staff posing in front of a branded truck', index: '01', label: 'The crew',
    desc: 'The people behind every delivery — branch teams across Johannesburg, Durban and Cape Town.', feature: true },
  { img: '/assets/fleet-aerial.jpg',                alt: 'Elevated view of First Freight bakkies and trucks parked in the depot yard',  index: '02', label: 'National fleet' },
  { img: '/assets/driver-waving.jpg',               alt: 'Smiling First Freight driver waving from the cab of a branded truck',         index: '03', label: 'On the road' },
  { img: '/assets/warehouse-forklift-operator.jpg', alt: 'First Freight staff member operating a Toyota forklift in the warehouse',      index: '04', label: 'Depot ops' },
  { img: '/assets/fleet-bakkies-lineup.jpg',        alt: 'Row of white First Freight H-100 bakkies with orange bullbars at the depot',   index: '05', label: 'Ready to roll' },
  { img: '/assets/signage-building.jpg',            alt: 'First Freight Couriers sign on a blue warehouse wall against a clear sky',      index: '06', label: 'Our depots', desat: true },
  { img: '/assets/staff-parcel-handover.jpg',       alt: 'Two First Freight staff exchanging a parcel beside a van',                     index: '07', label: 'Handover' },
  { img: '/assets/warehouse-loading.jpg',           alt: 'Elevated view of the warehouse floor with parcels and a truck being loaded',   index: '08', label: 'Loading bay', desat: true },
]

export default function Gallery() {
  return (
    <section id="gallery" style={{ background: '#FFFFFF', color: 'var(--fg-1)', padding: '100px 30px' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>

        {/* Editorial masthead */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 20,
          borderBottom: '1px solid var(--ff-line)', paddingBottom: 26, marginBottom: 32 }}>
          <div>
            <span className="ff-eyebrow" style={{ color: 'var(--ff-red)' }}>Behind the deliveries</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(2.1rem,4vw,3.1rem)', margin: '14px 0 0', lineHeight: 1.04 }}>
              Active. Human. <span style={{ fontStyle: 'italic', color: 'var(--ff-red)' }}>Real.</span>
            </h2>
          </div>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.55, color: 'var(--fg-2)', maxWidth: 340, margin: 0 }}>
            A look inside the depots, the fleet and the teams that move your freight every day.
            <span style={{ display: 'block', marginTop: 8, fontFamily: 'var(--font-cond)', fontWeight: 700, fontSize: 12, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--fg-3)' }}>
              01 — 08
            </span>
          </p>
        </div>

        {/* Desktop editorial mosaic */}
        <div className="hidden md:grid" style={{
          gridTemplateColumns: 'repeat(12, 1fr)', gridTemplateRows: '215px 215px 230px', gap: 14
        }}>
          <GTile {...TILES[0]} style={{ gridColumn: '1 / 5',  gridRow: '1 / 3' }} />
          <GTile {...TILES[1]} style={{ gridColumn: '5 / 13', gridRow: '1 / 2' }} />
          <GTile {...TILES[2]} style={{ gridColumn: '5 / 8',  gridRow: '2 / 3' }} />
          <GTile {...TILES[3]} style={{ gridColumn: '8 / 10', gridRow: '2 / 3' }} />
          <GTile {...TILES[4]} style={{ gridColumn: '10 / 13', gridRow: '2 / 3' }} />
          <GTile {...TILES[5]} style={{ gridColumn: '1 / 4',  gridRow: '3 / 4' }} />
          <StatementTile       style={{ gridColumn: '4 / 7',  gridRow: '3 / 4' }} />
          <GTile {...TILES[6]} style={{ gridColumn: '7 / 10', gridRow: '3 / 4' }} />
          <GTile {...TILES[7]} style={{ gridColumn: '10 / 13', gridRow: '3 / 4' }} />
        </div>

        {/* Mobile editorial stack: full-width lead, 2-col run, full-width statement */}
        <div className="grid md:hidden" style={{ gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          <GTile {...TILES[0]} feature={false} style={{ gridColumn: '1 / 3', height: 260 }} />
          <GTile {...TILES[1]} style={{ height: 170 }} />
          <GTile {...TILES[2]} style={{ height: 170 }} />
          <StatementTile       style={{ gridColumn: '1 / 3', minHeight: 150 }} />
          <GTile {...TILES[3]} style={{ height: 170 }} />
          <GTile {...TILES[4]} style={{ height: 170 }} />
          <GTile {...TILES[5]} style={{ height: 170 }} />
          <GTile {...TILES[6]} style={{ height: 170 }} />
          <GTile {...TILES[7]} style={{ gridColumn: '1 / 3', height: 200 }} />
        </div>
      </div>
    </section>
  )
}
