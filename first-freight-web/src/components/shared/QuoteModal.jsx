import { useState } from 'react'
import { X, Send, CheckCircle } from 'lucide-react'

const fieldStyle = {
  fontFamily: 'var(--font-body)', fontSize: 14, padding: '9px 12px', border: 0,
  borderRadius: 'var(--r-sm)', background: 'rgba(255,255,255,.96)', color: 'var(--ff-ink)'
}
const labelStyle = {
  fontFamily: 'var(--font-cond)', fontWeight: 700, fontSize: 11,
  letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,.85)'
}

function QField({ label, ...props }) {
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <span style={labelStyle}>{label}</span>
      <input {...props} style={fieldStyle} />
    </label>
  )
}

function QArea({ label, ...props }) {
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <span style={labelStyle}>{label}</span>
      <textarea {...props} style={{ ...fieldStyle, resize: 'vertical', minHeight: 56 }} />
    </label>
  )
}

const SERVICES = ['Economy Road Freight', 'Overnight Express', 'Air Freight', 'International Services']

const chipStyle = (on) => ({
  fontFamily: 'var(--font-cond)', fontWeight: 700, fontSize: 11.5, letterSpacing: '.04em',
  textTransform: 'uppercase', padding: '7px 13px', borderRadius: 'var(--r-pill)', cursor: 'pointer',
  border: '1px solid', transition: 'all 160ms var(--ease)',
  background: on ? '#fff' : 'rgba(255,255,255,.10)',
  color: on ? 'var(--ff-red)' : 'rgba(255,255,255,.9)',
  borderColor: on ? '#fff' : 'rgba(255,255,255,.35)',
})

export function QuoteForm({ bare = false }) {
  const [sent, setSent] = useState(false)
  const [picked, setPicked] = useState([])
  const toggle = (s) => setPicked(p => p.includes(s) ? p.filter(x => x !== s) : [...p, s])
  return (
    <section id="quote" style={{ background: bare ? 'transparent' : 'var(--ff-paper)', padding: bare ? 0 : '92px 24px 96px' }}>
      <div style={{
        maxWidth: 560, margin: '0 auto',
        borderRadius: 'var(--r-lg)', overflow: 'hidden', boxShadow: 'var(--sh-lg)'
      }}>
        <div style={{ background: 'var(--ff-red)', padding: '32px 34px 34px', color: '#fff' }}>
          <div className="ff-eyebrow" style={{ color: 'rgba(255,255,255,.85)' }}>Fast turnaround</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontStyle: 'italic', fontSize: 27, margin: '6px 0 5px' }}>Request a Quote</h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'rgba(255,255,255,.85)', margin: '0 0 18px' }}>
            Tell us what you&rsquo;re sending — we&rsquo;ll respond within one business hour.</p>
          {sent ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 18, background: 'rgba(255,255,255,.16)', borderRadius: 'var(--r-md)' }}>
              <CheckCircle size={24} />
              <span style={{ fontWeight: 600 }}>Thanks — our team will be in touch shortly.</span>
            </div>
          ) : (
            <form onSubmit={e => { e.preventDefault(); setSent(true) }} style={{ display: 'grid', gap: 11 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                <span style={labelStyle}>Preferred service</span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                  {SERVICES.map(s => (
                    <button type="button" key={s} onClick={() => toggle(s)} aria-pressed={picked.includes(s)} style={chipStyle(picked.includes(s))}>{s}</button>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <QField label="First name" placeholder="Thabo" />
                <QField label="Last name" placeholder="Nkosi" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <QField label="Contact number" type="tel" placeholder="082 000 0000" />
                <QField label="Company name" placeholder="Acme Retail (Pty) Ltd" />
              </div>
              <QField label="Email" type="email" placeholder="ops@company.co.za" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <QField label="Origin" placeholder="Johannesburg" />
                <QField label="Destination" placeholder="Cape Town" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <QField label="Box dimensions — l×b×h (cm)" placeholder="40 × 30 × 25" />
                <QField label="Actual mass (kg)" placeholder="24" />
              </div>
              <QArea label="Contents" rows={2} placeholder="e.g. Clothing, retail stock, documents" />
              <button type="submit" style={{
                marginTop: 4, background: 'var(--ff-graphite)', color: '#fff', border: 0,
                borderRadius: 'var(--r-sm)', padding: '12px', cursor: 'pointer',
                fontFamily: 'var(--font-cond)', fontWeight: 700, fontSize: 14, letterSpacing: '.08em',
                textTransform: 'uppercase', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 9
              }}><Send size={16} />Submit Request</button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default function QuoteModal({ onClose }) {
  return (
    <div onClick={onClose} style={{
      position: 'fixed', inset: 0, zIndex: 100, background: 'rgba(20,18,16,.65)',
      backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: 16,
      overflowY: 'auto'
    }}>
      <div onClick={e => e.stopPropagation()} style={{ position: 'relative', width: '100%', maxWidth: 560, margin: 'auto' }}>
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
