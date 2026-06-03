/* DFaq.jsx — accordion */
function DFaq() {
  const qs = [
    ['Which areas do you deliver to?', 'We operate full-service depots in Johannesburg, Durban and Cape Town, and reach the rest of the country through our national line-haul and regional feeder routes.'],
    ['How do I track my parcel?', 'Enter your waybill number in the tracking field at the top of any page. Every shipment is scanned at each handover, so you always see its latest status.'],
    ['What are your delivery turnaround times?', 'Overnight road freight moves between metros while you sleep; same-day courier covers local pick-ups and drops within a metro. Your controller will confirm exact timings when you book.'],
    ['Is my cargo insured in transit?', 'Yes — goods-in-transit cover applies from the moment we collect until we deliver and capture proof of delivery. Higher-value loads can be specially declared.'],
    ['How do I get a quote?', 'Use the “Get a quote” form, or call your nearest branch directly. We typically respond within one business hour.'],
  ];
  const [open, setOpen] = React.useState(0);
  return (
    <section style={{ background: 'var(--ff-paper)', color: 'var(--fg-1)', padding: '100px 30px' }}>
      <div style={{ maxWidth: 860, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 44 }}>
          <span className="ff-eyebrow" style={{ color: 'var(--ff-red)' }}>Good to know</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(2.1rem,4vw,3rem)',
            margin: '14px 0 0', lineHeight: 1.04 }}>
            Frequently asked <span style={{ fontStyle: 'italic', color: 'var(--ff-red)' }}>questions.</span></h2>
        </div>
        <div style={{ display: 'grid', gap: 12 }}>
          {qs.map(([q, a], i) => {
            const on = open === i;
            return (
              <div key={i} style={{ background: on ? 'rgba(222,70,50,.06)' : 'var(--ff-white)',
                border: '1px solid', borderColor: on ? 'rgba(222,70,50,.4)' : 'var(--ff-line)',
                borderRadius: 'var(--r-md)', overflow: 'hidden', transition: 'all 200ms var(--ease)' }}>
                <button onClick={() => setOpen(on ? -1 : i)} style={{ width: '100%', textAlign: 'left',
                  background: 'none', border: 0, cursor: 'pointer', color: 'var(--fg-1)', padding: '20px 22px',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
                  <span style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 16.5 }}>{q}</span>
                  <i data-lucide={on ? 'minus' : 'plus'} style={{ width: 20, height: 20, color: 'var(--ff-red)', flex: 'none' }}></i>
                </button>
                <div style={{ maxHeight: on ? 200 : 0, overflow: 'hidden', transition: 'max-height 280ms var(--ease)' }}>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, lineHeight: 1.65,
                    color: 'var(--fg-2)', margin: 0, padding: '0 22px 22px' }}>{a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
window.DFaq = DFaq;
