import { useState } from 'react'
import { X, Send, CheckCircle, Quote } from 'lucide-react'

function QField({ label, ...props }) {
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <span style={{ fontFamily: 'var(--font-cond)', fontWeight: 700, fontSize: 11, letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,.85)' }}>{label}</span>
      <input {...props} style={{
        fontFamily: 'var(--font-body)', fontSize: 15, padding: '11px 13px', border: 0,
        borderRadius: 'var(--r-sm)', background: 'rgba(255,255,255,.96)', color: 'var(--ff-ink)'
      }} />
    </label>
  )
}

export function QuoteForm({ bare = false }) {
  const [sent, setSent] = useState(false)
  return (
    <section id="quote" style={{ background: bare ? 'transparent' : 'var(--ff-paper)', padding: bare ? 0 : '92px 24px 96px' }}>
      <div className="grid grid-cols-1 md:grid-cols-2" style={{
        maxWidth: 1140, margin: '0 auto',
        borderRadius: 'var(--r-lg)', overflow: 'hidden', boxShadow: 'var(--sh-lg)'
      }}>
        <div style={{ background: 'var(--ff-red)', padding: '44px 44px 48px', color: '#fff' }}>
          <div className="ff-eyebrow" style={{ color: 'rgba(255,255,255,.85)' }}>Fast turnaround</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontStyle: 'italic', fontSize: 34, margin: '8px 0 6px' }}>Request a Quote</h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'rgba(255,255,255,.85)', margin: '0 0 24px' }}>
            Tell us what you&rsquo;re sending — we&rsquo;ll respond within one business hour.</p>
          {sent ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 18, background: 'rgba(255,255,255,.16)', borderRadius: 'var(--r-md)' }}>
              <CheckCircle size={24} />
              <span style={{ fontWeight: 600 }}>Thanks — our team will be in touch shortly.</span>
            </div>
          ) : (
            <form onSubmit={e => { e.preventDefault(); setSent(true) }} style={{ display: 'grid', gap: 14 }}>
              <div className="grid grid-cols-2 gap-3">
                <QField label="From" placeholder="Johannesburg" />
                <QField label="To" placeholder="Cape Town" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <QField label="Parcels" placeholder="e.g. 3" />
                <QField label="Weight (kg)" placeholder="e.g. 24" />
              </div>
              <QField label="Contact email" type="email" placeholder="ops@company.co.za" />
              <button type="submit" style={{
                marginTop: 6, background: 'var(--ff-graphite)', color: '#fff', border: 0,
                borderRadius: 'var(--r-sm)', padding: '14px', cursor: 'pointer',
                fontFamily: 'var(--font-cond)', fontWeight: 700, fontSize: 14, letterSpacing: '.08em',
                textTransform: 'uppercase', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 9
              }}><Send size={17} />Submit Request</button>
            </form>
          )}
        </div>
        <div style={{ position: 'relative', minHeight: 380 }}>
          <img src="/assets/driver-assistant.jpg" alt="First Freight courier team" style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(20,18,16,.85), rgba(20,18,16,0) 55%)' }} />
          <div style={{ position: 'absolute', left: 28, right: 28, bottom: 28, color: '#fff' }}>
            <Quote size={30} style={{ color: 'var(--ff-orange)' }} />
            <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 600, fontSize: 19, lineHeight: 1.4, margin: '10px 0 12px' }}>
              &ldquo;They&rsquo;ve moved our stock between provinces for years — never a missed deadline.&rdquo;</p>
            <div style={{ fontFamily: 'var(--font-cond)', fontWeight: 700, fontSize: 12.5, letterSpacing: '.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,.8)' }}>
              Warehouse Manager · Retail client</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function QuoteModal({ onClose }) {
  return (
    <div onClick={onClose} style={{
      position: 'fixed', inset: 0, zIndex: 100, background: 'rgba(20,18,16,.65)',
      backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16,
      overflowY: 'auto'
    }}>
      <div onClick={e => e.stopPropagation()} style={{ position: 'relative', width: '100%', maxWidth: 1000 }}>
        <button onClick={onClose} aria-label="Close" style={{
          position: 'absolute', top: 14, right: 14, zIndex: 10,
          background: 'rgba(0,0,0,.35)', border: 0, borderRadius: '50%', width: 36, height: 36,
          cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff'
        }}><X size={18} /></button>
        <QuoteForm bare />
      </div>
    </div>
  )
}
