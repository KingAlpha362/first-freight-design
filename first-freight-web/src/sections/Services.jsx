import { useState } from 'react'
import { Truck, Package, Warehouse, ArrowRight, Plane, Globe, HeartPulse } from 'lucide-react'

const iconMap = { truck: Truck, package: Package, warehouse: Warehouse, plane: Plane, globe: Globe, 'heart-pulse': HeartPulse }

/* glass category pill */
function Tag({ children, style }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center',
      padding: '5px 11px', borderRadius: 'var(--r-pill)',
      background: 'rgba(255,255,255,.12)', backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,.20)',
      fontFamily: 'var(--font-cond)', fontWeight: 700, fontSize: 11,
      letterSpacing: '.1em', textTransform: 'uppercase', color: '#fff', ...style
    }}>{children}</span>
  )
}

/* surface treatment shared by every card */
const cardBase = (h) => ({
  position: 'relative', overflow: 'hidden', borderRadius: 'var(--r-lg)',
  background: 'linear-gradient(160deg, rgba(255,255,255,.075), rgba(255,255,255,.025))',
  border: `1px solid ${h ? 'rgba(222,70,50,.55)' : 'rgba(255,255,255,.10)'}`,
  boxShadow: h ? '0 18px 40px rgba(0,0,0,.45)' : '0 1px 4px rgba(0,0,0,.25)',
  transform: h ? 'translateY(-6px)' : 'none',
  transition: 'transform 220ms var(--ease), box-shadow 220ms var(--ease), border-color 220ms var(--ease)',
})

const zoom = (h) => ({
  width: '100%', height: '100%', objectFit: 'cover', display: 'block',
  transform: h ? 'scale(1.06)' : 'scale(1)', transition: 'transform 560ms var(--ease)'
})

/* ---------------- Featured (flagship) card ---------------- */
function FeaturedCard({ img, icon, tag, title, body, cta, onClick }) {
  const [h, setH] = useState(false)
  const Icon = iconMap[icon]
  return (
    <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ ...cardBase(h), height: '100%', minHeight: 440, display: 'flex', flexDirection: 'column' }}>
      <img src={img} alt="" className="ff-graded" style={{ position: 'absolute', inset: 0, ...zoom(h) }} />
      <div style={{ position: 'absolute', inset: 0, background:
        'linear-gradient(0deg, rgba(18,16,15,.93) 8%, rgba(18,16,15,.45) 46%, rgba(18,16,15,.15) 100%)' }} />

      <div style={{ position: 'absolute', top: 18, left: 18, display: 'flex', gap: 8 }}>
        <Tag style={{ background: 'rgba(222,70,50,.92)', border: '1px solid rgba(255,255,255,.25)' }}>Flagship</Tag>
        <Tag>{tag}</Tag>
      </div>
      <div style={{
        position: 'absolute', top: 16, right: 18, width: 46, height: 46, borderRadius: 'var(--r-md)',
        background: 'rgba(255,255,255,.10)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
        border: '1px solid rgba(255,255,255,.20)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff'
      }}><Icon size={22} /></div>

      <div style={{ position: 'relative', marginTop: 'auto', padding: '0 30px 30px' }}>
        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(1.7rem,2.6vw,2.15rem)',
          lineHeight: 1.05, color: '#fff', margin: '0 0 12px', maxWidth: 460 }}>{title}</h3>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 15.5, lineHeight: 1.6, color: 'rgba(255,255,255,.82)',
          margin: '0 0 22px', maxWidth: 440 }}>{body}</p>
        <button onClick={onClick} className="ff-cta-red" style={{ padding: '13px 24px', display: 'inline-flex', alignItems: 'center', gap: 9 }}>
          {cta} <ArrowRight size={16} style={{ transform: h ? 'translateX(3px)' : 'none', transition: 'transform 220ms var(--ease)' }} />
        </button>
      </div>
    </div>
  )
}

/* ---------------- Supporting card (image-top, compact) ---------------- */
function ServiceCard({ img, icon, tag, title, body, cta }) {
  const [h, setH] = useState(false)
  const Icon = iconMap[icon]
  return (
    <a href="#contact" onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ ...cardBase(h), display: 'flex', flexDirection: 'column', textDecoration: 'none' }}>
      <div style={{ position: 'relative', height: 132, overflow: 'hidden' }}>
        <img src={img} alt="" className="ff-graded" style={zoom(h)} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(43,42,40,.92), transparent 62%)' }} />
        <Tag style={{ position: 'absolute', top: 12, left: 12 }}>{tag}</Tag>
        <div style={{
          position: 'absolute', right: 12, bottom: 12, width: 34, height: 34, borderRadius: 'var(--r-sm)',
          background: 'rgba(222,70,50,.92)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}><Icon size={17} /></div>
      </div>
      <div style={{ padding: '16px 18px 18px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 19, color: '#fff', margin: '0 0 7px' }}>{title}</h3>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 13.5, lineHeight: 1.55, color: 'rgba(255,255,255,.74)', margin: '0 0 16px',
          display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{body}</p>
        <span style={{
          marginTop: 'auto', display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-cond)',
          fontWeight: 700, fontSize: 12, letterSpacing: '.08em', textTransform: 'uppercase',
          color: h ? 'var(--ff-orange)' : 'rgba(255,255,255,.55)', transition: 'color 180ms var(--ease)'
        }}>
          {cta} <ArrowRight size={15} style={{ transform: h ? 'translateX(3px)' : 'none', transition: 'transform 220ms var(--ease)' }} />
        </span>
      </div>
    </a>
  )
}

/* ---------------- Wide closer card (image left, copy right) ---------------- */
function WideCard({ img, icon, tag, title, body, cta }) {
  const [h, setH] = useState(false)
  const Icon = iconMap[icon]
  return (
    <a href="#contact" onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      className="sm:col-span-2"
      style={{ ...cardBase(h), display: 'flex', textDecoration: 'none', minHeight: 150 }}>
      <div style={{ position: 'relative', width: '42%', flexShrink: 0, overflow: 'hidden' }}>
        <img src={img} alt="" className="ff-graded" style={{ position: 'absolute', inset: 0, ...zoom(h) }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, transparent 55%, rgba(43,42,40,.9))' }} />
        <Tag style={{ position: 'absolute', top: 12, left: 12 }}>{tag}</Tag>
      </div>
      <div style={{ padding: '18px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 8, color: 'var(--ff-orange)' }}>
          <Icon size={18} />
        </span>
        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 19, color: '#fff', margin: '0 0 6px' }}>{title}</h3>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 13.5, lineHeight: 1.55, color: 'rgba(255,255,255,.74)', margin: '0 0 14px' }}>{body}</p>
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-cond)',
          fontWeight: 700, fontSize: 12, letterSpacing: '.08em', textTransform: 'uppercase',
          color: h ? 'var(--ff-orange)' : 'rgba(255,255,255,.55)', transition: 'color 180ms var(--ease)'
        }}>
          {cta} <ArrowRight size={15} style={{ transform: h ? 'translateX(3px)' : 'none', transition: 'transform 220ms var(--ease)' }} />
        </span>
      </div>
    </a>
  )
}

const featured = {
  img: '/assets/national-fleet.jpg', icon: 'truck', tag: 'Freight',
  title: 'Overnight Road Freight', cta: 'Get a freight quote',
  body: 'Scheduled overnight line-haul of parcels and pallets between all three metro depots — Johannesburg, Durban and Cape Town. Loaded by night, delivered by morning, tracked the whole way.',
}

const supporting = [
  { img: '/assets/delivering.jpg', icon: 'package', tag: 'Express',
    title: 'Same-Day Courier', cta: 'Request a pickup',
    body: 'On-demand local pick-up and delivery within Johannesburg, Durban and Cape Town — collected and delivered the same day.' },
  { img: '/assets/aircraft-overhead.jpg', icon: 'plane', tag: 'Air',
    title: 'Air Freight', cta: 'Send express',
    body: 'Same-day express within 60 minutes for urgent shipments, or overnight by 11:00 AM for next-day critical deliveries.' },
  { img: '/assets/warehouse-loading.jpg', icon: 'warehouse', tag: 'Warehousing',
    title: 'Warehousing & Depot', cta: 'Tour our depots',
    body: 'Secure storage, handling and cross-docking at our depots, with inventory management and retail distribution support.' },
  { img: '/assets/sa-map.jpg', icon: 'globe', tag: 'Cross-Border',
    title: 'Cross-Border Delivery', cta: 'Ship cross-border',
    body: 'Road and air freight into Botswana, Lesotho, Mozambique and Eswatini (BLMS) — documentation and border formalities handled.' },
]

const closer = {
  img: '/assets/staff-parcel-handover.jpg', icon: 'heart-pulse', tag: 'Healthcare',
  title: 'Medical & Emergency', cta: 'Talk to dispatch',
  body: 'Dedicated medical distribution routes and on-demand emergency delivery for healthcare and pharmaceutical clients.',
}

export default function Services({ onQuote }) {
  return (
    <section id="services" style={{ background: 'var(--ff-graphite)', padding: '100px 30px' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-10">
          <div>
            <span className="ff-eyebrow" style={{ color: 'var(--ff-orange)' }}>What we move</span>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(2.1rem,4vw,3.1rem)',
              lineHeight: 1.06, color: '#fff', margin: '14px 0 0'
            }}>
              Every delivery need.<br /><span style={{ fontStyle: 'italic', color: 'var(--ff-red)' }}>Covered.</span>
            </h2>
          </div>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 15.5, lineHeight: 1.6, color: 'rgba(255,255,255,.65)', maxWidth: 360, margin: 0 }}>
            From a single envelope to a contracted national fleet — one partner, one point of contact.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-5">
          <div className="lg:w-[55%]">
            <FeaturedCard {...featured} onClick={onQuote} />
          </div>
          <div className="lg:w-[45%] grid grid-cols-1 sm:grid-cols-2 gap-4">
            {supporting.map(s => <ServiceCard key={s.title} {...s} />)}
            <WideCard {...closer} />
          </div>
        </div>
      </div>
    </section>
  )
}
