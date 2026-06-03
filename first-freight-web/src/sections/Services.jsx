import { useState } from 'react'
import { Truck, Package, Warehouse, Route, ArrowRight } from 'lucide-react'

const iconMap = { truck: Truck, package: Package, warehouse: Warehouse, route: Route }

function ServiceCard({ img, icon, num, title, body }) {
  const [h, setH] = useState(false)
  const Icon = iconMap[icon]
  return (
    <div
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        background: 'rgba(255,255,255,0.06)',
        border: `1px solid ${h ? 'rgba(222,70,50,.5)' : 'rgba(255,255,255,0.10)'}`,
        borderRadius: 'var(--r-lg)',
        overflow: 'hidden', transition: 'all 200ms var(--ease)',
        transform: h ? 'translateY(-5px)' : 'none',
        boxShadow: h ? '0 12px 32px rgba(0,0,0,.4)' : '0 1px 4px rgba(0,0,0,.2)',
      }}
    >
      <div style={{ position: 'relative', height: 168, overflow: 'hidden' }}>
        <img src={img} alt="" style={{
          width: '100%', height: '100%', objectFit: 'cover',
          transform: h ? 'scale(1.07)' : 'scale(1)', transition: 'transform 500ms var(--ease)'
        }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(43,42,40,.95) 4%, transparent 60%)' }} />
        <span style={{
          position: 'absolute', top: 14, right: 16, fontFamily: 'var(--font-display)',
          fontStyle: 'italic', fontWeight: 700, fontSize: 26, color: 'rgba(255,255,255,.85)', textShadow: '0 1px 6px rgba(0,0,0,.35)'
        }}>{num}</span>
        <div style={{
          position: 'absolute', left: 16, bottom: -22, width: 48, height: 48, borderRadius: 'var(--r-sm)',
          background: 'var(--ff-red)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: 'var(--sh-brand)'
        }}>
          <Icon size={24} />
        </div>
      </div>
      <div style={{ padding: '34px 22px 24px' }}>
        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, color: '#fff', margin: '0 0 8px' }}>{title}</h3>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.55, color: 'rgba(255,255,255,.68)', margin: '0 0 16px' }}>{body}</p>
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-cond)',
          fontWeight: 700, fontSize: 12, letterSpacing: '.1em', textTransform: 'uppercase',
          color: h ? 'var(--ff-orange)' : 'rgba(255,255,255,.45)', transition: 'color 180ms var(--ease)'
        }}>
          Learn more <ArrowRight size={15} />
        </span>
      </div>
    </div>
  )
}

const items = [
  ['/assets/national-fleet.jpg', 'truck', '01', 'Overnight Road Freight', 'Scheduled overnight line-haul of parcels and pallets between all three metro depots.'],
  ['/assets/delivering.jpg', 'package', '02', 'Same-Day Courier', 'On-demand local pick-up and delivery within Johannesburg, Durban and Cape Town.'],
  ['/assets/warehouse.jpg', 'warehouse', '03', 'Warehousing & Depot', 'Secure storage, handling and cross-docking at our depots across the country.'],
  ['/assets/on-the-go.jpg', 'route', '04', 'Contract Distribution', 'Dedicated vehicles and routes for high-volume and time-critical accounts.'],
]

export default function Services() {
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map(([img, icon, num, title, body]) => (
            <ServiceCard key={title} img={img} icon={icon} num={num} title={title} body={body} />
          ))}
        </div>
      </div>
    </section>
  )
}
