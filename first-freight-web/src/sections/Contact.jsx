import { FileText, Phone, Mail, MapPin, Clock, User } from 'lucide-react'

const branches = [
  {
    city: 'Johannesburg',
    note: 'Head office & main hub',
    manager: 'Conrad Boulle',
    phone: '011 387 7000',
    tel: '0113877000',
    email: 'sales@firstfreight.co.za',
    address: '4 Struwig Street, Witfield, Boksburg, 1459',
  },
  {
    city: 'Cape Town',
    note: 'Western Cape depot',
    manager: 'Keiron O\'Donnell',
    phone: '021 036 0333',
    tel: '0210360333',
    email: 'sales@firstfreightcpt.co.za',
    address: '57 Mobile Road, Boquinar Industrial Area, 7490',
  },
  {
    city: 'Durban',
    note: 'KZN regional depot',
    manager: 'Shawn Mellor',
    phone: '031 569 1451',
    tel: '0315691451',
    email: 'sales@firstfreightkzn.co.za',
    address: 'Unit 1 Grid Iron Park, 42 Riverhorse Road, Riverhorse Valley, 3630',
  },
]

export default function Contact({ onQuote }) {
  return (
    <section id="contact" style={{ position: 'relative', overflow: 'hidden', padding: '110px 30px 0' }}>
      <img src="/assets/national-fleet.jpg" alt="" className="ff-graded" style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%'
      }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(14,12,11,.95) 0%, rgba(14,12,11,.78) 50%, rgba(184,52,31,.6) 100%)' }} />

      {/* CTA row */}
      <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-10" style={{ maxWidth: 1180, margin: '0 auto', paddingBottom: 72 }}>
        <div style={{ maxWidth: 600 }}>
          <span className="ff-eyebrow" style={{ color: 'var(--ff-orange)' }}>Ready when you are</span>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 700, fontStyle: 'italic',
            fontSize: 'clamp(2.4rem,5vw,4rem)', color: '#fff', lineHeight: 1.02, margin: '14px 0 18px'
          }}>
            Let&rsquo;s work <span style={{ color: 'var(--ff-red)' }}>together.</span>
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.55, color: 'rgba(255,255,255,.8)', maxWidth: 440, margin: 0 }}>
            Tell us what you&rsquo;re moving and where. We&rsquo;ll put the right vehicle and the right
            person on it — and get back to you within the hour.</p>
        </div>
        <div className="flex flex-col gap-4" style={{ minWidth: 260 }}>
          <button onClick={onQuote} className="ff-cta-red" style={{ justifyContent: 'center', padding: '17px 30px', fontSize: 15 }}>
            <FileText size={18} />Get a Quote
          </button>
          <a href="tel:0113877000" style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 11,
            padding: '16px 30px', borderRadius: 'var(--r-sm)', border: '1.5px solid rgba(255,255,255,.4)',
            color: '#fff', textDecoration: 'none', fontFamily: 'var(--font-cond)', fontWeight: 700, fontSize: 15, letterSpacing: '.05em'
          }}>
            <Phone size={18} />011 387 7000
          </a>
        </div>
      </div>

      {/* Branch directory */}
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-5" style={{ maxWidth: 1180, margin: '0 auto', paddingBottom: 64 }}>
        {branches.map(b => (
          <div key={b.city} style={{
            background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.12)',
            borderRadius: 'var(--r-md)', padding: '26px 24px', backdropFilter: 'blur(6px)'
          }}>
            <div style={{ fontFamily: 'var(--font-cond)', fontWeight: 700, fontSize: 15, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--ff-orange)', marginBottom: 4 }}>{b.city}</div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 12.5, color: 'rgba(255,255,255,.45)', marginBottom: 16 }}>{b.note}</div>
            {[
              [User, b.manager],
              [Phone, <a href={`tel:${b.tel}`} style={{ color: 'inherit', textDecoration: 'none' }}>{b.phone}</a>],
              [Mail, <a href={`mailto:${b.email}`} style={{ color: 'inherit', textDecoration: 'none' }}>{b.email}</a>],
              [MapPin, b.address],
              [Clock, 'Mon–Fri 08:00–17:00'],
            ].map(([Icon, val], i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 10 }}>
                <Icon size={15} style={{ color: 'var(--ff-red)', marginTop: 2, flexShrink: 0 }} />
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 13.5, color: 'rgba(255,255,255,.78)', lineHeight: 1.45 }}>{val}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
