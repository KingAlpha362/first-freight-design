import { MapPin, Mail } from 'lucide-react'

const branches = [
  ['Johannesburg', '011 387 7000', 'Head office & main hub', 'sales@firstfreight.co.za', '4 Struwig St, Witfield, Boksburg 1459'],
  ['Durban', '031 569 1451', 'KZN regional depot', 'sales@firstfreightkzn.co.za', '1 Jameson Drive, Avoca'],
  ['Cape Town', '021 036 0333', 'Western Cape depot', 'sales@firstfreightcpt.co.za', '57 Mobile Road, Boquinar IA, 7490'],
]

const cols = [
  ['Services', [
    { label: 'Overnight Road Freight', href: '#services' },
    { label: 'Same-Day Courier',       href: '#services' },
    { label: 'Air Freight',            href: '#services' },
    { label: 'Cross-Border Delivery',  href: '#services' },
    { label: 'Warehousing',            href: '#services' },
    { label: 'Medical & Emergency',    href: '#services' },
  ]],
  ['Company', [
    { label: 'About',       href: '#features' },
    { label: 'Our Network', href: '#network' },
    { label: 'Fleet',       href: '#gallery' },
    { label: 'Contact',     href: '#contact' },
  ]],
]

export default function Footer() {
  return (
    <footer style={{ background: '#0A0908', color: '#fff', padding: '64px 30px 34px', borderTop: '1px solid rgba(255,255,255,.08)' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-9 pb-10" style={{ borderBottom: '1px solid rgba(255,255,255,.1)' }}>
          <div className="md:col-span-1">
            <img src="/assets/logo-first-freight-dark.png" alt="First Freight Couriers" style={{ height: 38, marginBottom: 16 }} />
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.6, color: 'rgba(255,255,255,.6)', maxWidth: 260, margin: 0 }}>
              National courier &amp; freight since 1996. Your parcel, our priority.</p>
            <div style={{ fontFamily: 'var(--font-cond)', fontSize: 12, letterSpacing: '.05em', color: 'rgba(255,255,255,.38)', marginTop: 16 }}>
              Reg. No. 1996/005172/07 · www.firstfreight.co.za</div>
          </div>

          {cols.map(([heading, items]) => (
            <div key={heading}>
              <div style={{ fontFamily: 'var(--font-cond)', fontWeight: 700, fontSize: 12, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--ff-orange)', marginBottom: 14 }}>{heading}</div>
              <div style={{ display: 'grid', gap: 9 }}>
                {items.map(({ label, href }) => (
                  <a key={label} href={href} style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'rgba(255,255,255,.66)', textDecoration: 'none', transition: 'color 180ms' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,.66)'}>{label}</a>
                ))}
              </div>
            </div>
          ))}

          <div>
            <div style={{ fontFamily: 'var(--font-cond)', fontWeight: 700, fontSize: 12, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--ff-orange)', marginBottom: 14 }}>Branches</div>
            <div style={{ display: 'grid', gap: 14 }}>
              {branches.map(([city, phone, , email, address]) => (
                <div key={city} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <MapPin size={16} style={{ color: 'var(--ff-red)', marginTop: 3, flex: 'none' }} />
                  <div>
                    <div style={{ fontFamily: 'var(--font-cond)', fontWeight: 700, fontSize: 13.5, letterSpacing: '.06em', textTransform: 'uppercase' }}>{city}</div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'rgba(255,255,255,.55)' }}>{phone}</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginTop: 2 }}>
                      <Mail size={11} style={{ color: 'rgba(255,255,255,.35)', flexShrink: 0 }} />
                      <a href={`mailto:${email}`} style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'rgba(255,255,255,.38)', textDecoration: 'none' }}>{email}</a>
                    </div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: 11.5, color: 'rgba(255,255,255,.28)', marginTop: 1 }}>{address}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-3 pt-6" style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'rgba(255,255,255,.45)' }}>
          <span>&copy; {new Date().getFullYear()} First Freight Couriers (Pty) Ltd. All rights reserved.</span>
          <span className="flex gap-6">
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy</a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Terms</a>
          </span>
        </div>
      </div>
    </footer>
  )
}
