import { useState } from 'react'

const qs = [
  ['Which areas do you deliver to?', 'We operate full-service depots in Johannesburg, Durban and Cape Town, and reach the rest of the country through our national line-haul and regional feeder routes. Cross-border services extend into Botswana, Lesotho, Mozambique and Eswatini.'],
  ['How do I track my parcel?', 'Enter your waybill number in the tracking field at the top of the page. Every shipment is scanned at each handover, so you always see its latest status.'],
  ['What are your delivery turnaround times?', 'Air freight express runs depart on demand — same-day delivery within 60 minutes for local air, or overnight by 11:00 AM next day. Overnight road freight moves between metros while you sleep; same-day courier covers local pick-ups and drops within a metro. Your controller will confirm exact timings when you book.'],
  ['Do you deliver across borders?', 'Yes. We offer cross-border road and air freight to Botswana, Lesotho, Mozambique and Eswatini (BLMS countries). Our team handles the necessary documentation and border formalities on your behalf.'],
  ['Do you handle medical and emergency deliveries?', 'Yes — we run dedicated medical distribution routes and on-demand emergency delivery services for healthcare providers and pharmaceutical clients across our national network.'],
  ['Is my cargo insured in transit?', 'Yes — goods-in-transit cover applies from the moment we collect until we deliver and capture proof of delivery. Higher-value loads can be specially declared.'],
  ['How do I get a quote?', 'Use the "Get a quote" form, or call your nearest branch directly. We typically respond within one business hour.'],
]

function CircleIcon({ open }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, color: 'var(--ff-steel)' }}>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      <line x1="8" y1="12" x2="16" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      {!open && <line x1="12" y1="8" x2="12" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />}
    </svg>
  )
}

export default function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" style={{ background: 'var(--ff-white)', color: 'var(--fg-1)', padding: '100px 30px' }}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16" style={{ maxWidth: 1100, margin: '0 auto', alignItems: 'start' }}>

        {/* Left: heading + intro */}
        <div style={{ paddingTop: 4 }}>
          <span className="ff-eyebrow" style={{ color: 'var(--ff-red)' }}>Good to know</span>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: 'clamp(2.4rem,4.5vw,3.4rem)', lineHeight: 1.04,
            color: 'var(--fg-1)', margin: '14px 0 20px'
          }}>FAQs</h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.7, color: 'var(--fg-2)', margin: 0, maxWidth: 380 }}>
            Everything you need to know about our services and operations. Can&rsquo;t find the answer
            you&rsquo;re looking for? Please{' '}
            <a href="#contact" style={{ color: 'var(--ff-red)', textDecoration: 'underline', textUnderlineOffset: 3 }}>
              speak to our team
            </a>.
          </p>
        </div>

        {/* Right: borderless accordion */}
        <div>
          {qs.map(([q, a], i) => {
            const on = open === i
            return (
              <div key={i} style={{ borderTop: '1px solid var(--ff-line)' }}>
                <button
                  onClick={() => setOpen(on ? -1 : i)}
                  style={{
                    width: '100%', textAlign: 'left', background: 'none', border: 0,
                    cursor: 'pointer', color: 'var(--fg-1)',
                    padding: '20px 0',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16
                  }}
                >
                  <span style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 15.5 }}>{q}</span>
                  <CircleIcon open={on} />
                </button>
                <div style={{ maxHeight: on ? 300 : 0, overflow: 'hidden', transition: 'max-height 300ms var(--ease)' }}>
                  <p style={{
                    fontFamily: 'var(--font-body)', fontSize: 14.5, lineHeight: 1.7,
                    color: 'var(--fg-2)', margin: 0, paddingBottom: 20
                  }}>{a}</p>
                </div>
              </div>
            )
          })}
          {/* Bottom border */}
          <div style={{ borderTop: '1px solid var(--ff-line)' }} />
        </div>

      </div>
    </section>
  )
}
