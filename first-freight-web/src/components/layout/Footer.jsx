import { MapPin, Mail } from 'lucide-react'

/* Brand glyphs (not in this lucide build) — single-colour, inherit currentColor */
const IgIcon = ({ size = 17 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <rect x="2" y="2" width="20" height="20" rx="5.5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" stroke="none" />
  </svg>
)
const FbIcon = ({ size = 17 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M13.5 21v-7h2.4l.36-2.79H13.5V9.43c0-.81.22-1.36 1.38-1.36h1.48V5.57A19.7 19.7 0 0 0 14.18 5.5c-2.13 0-3.59 1.3-3.59 3.69v2.02H8.2V14h2.39v7h2.91z" />
  </svg>
)
const GoogleIcon = ({ size = 17 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
  </svg>
)

const socials = [
  { label: 'Instagram',          href: 'https://www.instagram.com/firstfreightcouriers/', Icon: IgIcon },
  { label: 'Facebook',           href: 'https://www.facebook.com/FirstFreightCouriersSA/', Icon: FbIcon },
  { label: 'Find us on Google',  href: 'https://www.google.com/maps/search/?api=1&query=first+freight+courier+jhb', Icon: GoogleIcon },
]

const branches = [
  ['Johannesburg', '011 387 7000', 'Head office & main hub', 'sales@firstfreight.co.za', '4 Struwig St, Witfield, Boksburg 1459'],
  ['Durban', '031 569 1451', 'KZN regional depot', 'sales@firstfreightkzn.co.za', '42 Riverhorse Road, Riverhorse Valley, 3630'],
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
            <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
              {socials.map(({ label, href, Icon }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} style={{
                  width: 38, height: 38, borderRadius: '50%', border: '1px solid rgba(255,255,255,.18)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,.7)',
                  transition: 'all 180ms var(--ease)'
                }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'var(--ff-orange)'; e.currentTarget.style.background = 'rgba(242,106,33,.12)' }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,.7)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,.18)'; e.currentTarget.style.background = 'transparent' }}
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
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
