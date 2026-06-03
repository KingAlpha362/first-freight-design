import { FileText, Phone } from 'lucide-react'

export default function Contact({ onQuote }) {
  return (
    <section id="contact" style={{ position: 'relative', overflow: 'hidden', padding: '110px 30px' }}>
      <img src="/assets/national-fleet.jpg" alt="" style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%'
      }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(14,12,11,.95) 0%, rgba(14,12,11,.78) 50%, rgba(184,52,31,.6) 100%)' }} />
      <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-10" style={{ maxWidth: 1180, margin: '0 auto' }}>
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
    </section>
  )
}
