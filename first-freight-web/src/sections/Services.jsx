import { motion, useReducedMotion } from 'motion/react'
import { Truck, Package, Warehouse, Plane, Globe, HeartPulse, ArrowRight } from 'lucide-react'

const EASE_OUT = [0.23, 1, 0.32, 1] // strong ease-out for entrances (animations.dev)

/* scroll-in stagger + per-tile pop */
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.04 } },
}
const tilePop = {
  hidden: { opacity: 0, y: 24, scale: 0.92 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: EASE_OUT } },
}
// Reduced motion: keep the fade, drop the position/scale movement
const tilePopReduced = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3, ease: EASE_OUT } },
}

const services = [
  { id: 'road', Icon: Truck, tag: 'Freight', flagship: true,
    title: 'Overnight Road Freight', cta: 'Get a freight quote',
    body: 'Scheduled overnight line-haul between Johannesburg, Durban and Cape Town — loaded by night, delivered by morning, tracked the whole way.',
    src: '/assets/national-fleet.jpg', alt: 'First Freight line-haul trucks on the national road network',
    area: { gridColumn: '1 / 7', gridRow: '1 / 3' }, mob: { gridColumn: '1 / 3', height: 250 } },
  { id: 'air', Icon: Plane, tag: 'Air', title: 'Air Freight',
    src: '/assets/aircraft-overhead.jpg', alt: 'Cargo aircraft overhead',
    area: { gridColumn: '7 / 10', gridRow: '1 / 2' }, mob: { height: 170 } },
  { id: 'whse', Icon: Warehouse, tag: 'Warehousing', title: 'Warehousing & Depot',
    src: '/assets/warehouse-loading.jpg', alt: 'Warehouse floor with parcels being loaded',
    area: { gridColumn: '10 / 13', gridRow: '1 / 2' }, mob: { height: 170 } },
  { id: 'same', Icon: Package, tag: 'Express', title: 'Same-Day Courier',
    src: '/assets/delivering.jpg', alt: 'First Freight courier delivering a parcel',
    area: { gridColumn: '7 / 13', gridRow: '2 / 3' }, mob: { gridColumn: '1 / 3', height: 185 } },
  { id: 'xbdr', Icon: Globe, tag: 'Cross-Border', title: 'Cross-Border Delivery',
    src: '/assets/sa-map.jpg', alt: 'Map of southern Africa showing cross-border routes',
    area: { gridColumn: '1 / 7', gridRow: '3 / 4' }, mob: { height: 170 } },
  { id: 'med', Icon: HeartPulse, tag: 'Healthcare', title: 'Medical & Emergency',
    src: '/assets/staff-parcel-handover.jpg', alt: 'First Freight staff handing over a parcel',
    area: { gridColumn: '7 / 13', gridRow: '3 / 4' }, mob: { height: 170 } },
]

function Pill({ children, accent }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', padding: '5px 11px', borderRadius: 'var(--r-pill)',
      background: accent ? 'rgba(222,70,50,.92)' : 'rgba(255,255,255,.12)',
      backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
      border: `1px solid ${accent ? 'rgba(255,255,255,.25)' : 'rgba(255,255,255,.20)'}`,
      fontFamily: 'var(--font-cond)', fontWeight: 700, fontSize: 11, letterSpacing: '.1em',
      textTransform: 'uppercase', color: '#fff', whiteSpace: 'nowrap',
    }}>{children}</span>
  )
}

function Tile({ data, onQuote, mobile }) {
  const Icon = data.Icon
  const full = data.flagship
  const reduce = useReducedMotion()
  const placement = mobile ? data.mob : data.area
  const MotionComp = full ? motion.div : motion.a
  const linkProps = full ? {} : { href: '#contact', 'aria-label': data.title }

  return (
    <MotionComp
      variants={reduce ? tilePopReduced : tilePop}
      {...linkProps}
      className="group"
      style={{
        position: 'relative', overflow: 'hidden', display: 'block', textDecoration: 'none',
        borderRadius: 'var(--r-lg)', border: '1px solid rgba(255,255,255,.10)',
        background: 'var(--ff-graphite)', minWidth: 0, ...placement,
      }}
    >
      <img src={data.src} alt={data.alt || ''}
        className="ff-graded transition-transform duration-500 ease-ff group-hover:scale-105"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
      <div style={{ position: 'absolute', inset: 0,
        background: 'linear-gradient(0deg, rgba(18,16,15,.93) 6%, rgba(18,16,15,.42) 50%, rgba(18,16,15,.1) 100%)' }} />

      <div style={{ position: 'absolute', top: 16, left: 16, display: 'flex', gap: 8 }}>
        {full && <Pill accent>Flagship</Pill>}
        <Pill>{data.tag}</Pill>
      </div>
      <span style={{
        position: 'absolute', top: 14, right: 16, width: 40, height: 40, borderRadius: 'var(--r-md)',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#fff',
        background: full ? 'rgba(222,70,50,.92)' : 'rgba(255,255,255,.12)', border: '1px solid rgba(255,255,255,.20)',
        backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
      }}><Icon size={19} /></span>

      <div style={{ position: 'absolute', insetInline: 0, bottom: 0, padding: full ? '0 28px 26px' : '0 18px 16px', maxWidth: full ? 460 : 'none' }}>
        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700,
          fontSize: full ? 'clamp(1.6rem,2.4vw,2.1rem)' : 19, lineHeight: 1.08, color: '#fff', margin: 0 }}>
          {data.title}
        </h3>
        {full && (
          <>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, lineHeight: 1.55, color: 'rgba(255,255,255,.82)', margin: '10px 0 16px' }}>{data.body}</p>
            <button type="button" onClick={onQuote} className="ff-cta-red"
              style={{ padding: '12px 22px', display: 'inline-flex', alignItems: 'center', gap: 9 }}>
              {data.cta} <ArrowRight size={16} />
            </button>
          </>
        )}
        {!full && (
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, marginTop: 6, fontFamily: 'var(--font-cond)',
            fontWeight: 700, fontSize: 11.5, letterSpacing: '.08em', textTransform: 'uppercase',
            color: 'rgba(255,255,255,.62)', transition: 'color 180ms var(--ease)' }}
            className="group-hover:!text-[var(--ff-orange)]">
            Learn more <ArrowRight size={14} />
          </span>
        )}
      </div>
    </MotionComp>
  )
}

export default function Services({ onQuote }) {
  return (
    <section id="services" className="ff-section" style={{ background: 'var(--ff-graphite)' }}>
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

        {/* desktop bento */}
        <motion.div className="hidden md:grid"
          variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          style={{ gridTemplateColumns: 'repeat(12, 1fr)', gridTemplateRows: '210px 210px 240px', gap: 14 }}>
          {services.map(s => <Tile key={s.id} data={s} onQuote={onQuote} />)}
        </motion.div>

        {/* mobile stack */}
        <motion.div className="grid md:hidden"
          variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }}
          style={{ gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          {services.map(s => <Tile key={s.id} data={s} mobile onQuote={onQuote} />)}
        </motion.div>
      </div>
    </section>
  )
}
