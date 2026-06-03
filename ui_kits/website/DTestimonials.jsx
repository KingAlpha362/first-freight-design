/* DTestimonials.jsx — client review cards */
function DTestimonials() {
  var reviews = [
    {
      name: ‘Loriana Trisolino’,
      role: ‘Operations Manager’,
      company: ‘Accessories Spares Centre’,
      initial: ‘L’,
      avatarBg: ‘var(--ff-red)’,
      quote: ‘I highly recommend them to customers as they have a personalized service and a very family orientated ‘feel’ that makes day to day dealings easy and hassle free.’,
    },
    {
      name: ‘Preshanthan Reddy’,
      role: ‘Operations Manager’,
      company: ‘Central Medical’,
      initial: ‘P’,
      avatarBg: ‘var(--ff-orange)’,
      quote: ‘When it comes to excellent service at competitive pricing, nobody can come close to First Freight. I always recommend them to our customers.’,
    },
    {
      name: ‘Thabo Nkosi’,
      role: ‘Logistics Coordinator’,
      company: ‘Brandhouse Beverages’,
      initial: ‘T’,
      avatarBg: ‘var(--ff-red)’,
      quote: ‘First Freight handles our high-volume distribution without a single missed deadline. Their tracking system gives us full visibility and our customers love the communication.’,
    },
    {
      name: ‘Samantha du Plessis’,
      role: ‘Supply Chain Manager’,
      company: ‘Cape Pharma Distributors’,
      initial: ‘S’,
      avatarBg: ‘var(--ff-orange)’,
      quote: ‘We ship temperature-sensitive pharmaceutical products and First Freight understands the urgency. Reliable, professional, and always reachable when we need them.’,
    },
    {
      name: ‘Kevin Mhlongo’,
      role: ‘E-commerce Director’,
      company: ‘Joburg Streetwear Co.’,
      initial: ‘K’,
      avatarBg: ‘var(--ff-red)’,
      quote: ‘Switched from two courier accounts to First Freight alone. Simpler invoicing, one contact, and our order-to-door time dropped by a full day.’,
    },
    {
      name: ‘Anita Pillay’,
      role: ‘Branch Manager’,
      company: ‘SA Auto Parts KZN’,
      initial: ‘A’,
      avatarBg: ‘var(--ff-orange)’,
      quote: ‘Same-day delivery within Durban used to be a nightmare. First Freight sorted it out on day one. Our workshop clients now rely on us because we can rely on them.’,
    },
  ];

  function Stars() {
    return (
      React.createElement('div', { style: { display: 'flex', gap: 3, marginBottom: 20 } },
        [0,1,2,3,4].map(function(i) {
          return React.createElement('svg', { key: i, width: 20, height: 20, viewBox: '0 0 20 20', fill: '#F5A623' },
            React.createElement('path', { d: 'M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27l-4.77 2.44.91-5.32L2.27 6.62l5.34-.78z' })
          );
        })
      )
    );
  }

  return (
    <section style={{
      background: 'var(--ff-paper)',
      color: 'var(--fg-1)',
      padding: '100px 30px',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="ff-eyebrow" style={{ color: 'var(--ff-red)' }}>Client testimonials</span>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: 'clamp(2.1rem, 4vw, 3.1rem)',
            lineHeight: 1.06,
            color: 'var(--fg-1)',
            margin: '14px 0 0',
          }}>
            Trusted by South African{' '}
            <span style={{ fontStyle: 'italic', color: 'var(--ff-red)' }}>businesses.</span>
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 32,
        }}>
          {reviews.map(function(r) {
            return (
              <div key={r.name} style={{
                background: 'var(--ff-white)',
                border: '1px solid var(--ff-line)',
                borderRadius: 'var(--r-lg)',
                padding: 32,
                display: 'flex',
                flexDirection: 'column',
              }}>
                <Stars />
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 16,
                  lineHeight: 1.7,
                  color: 'var(--fg-1)',
                  margin: '0 0 28px',
                  flexGrow: 1,
                }}>
                  &ldquo;{r.quote}&rdquo;
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    background: r.avatarBg,
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-cond)',
                    fontWeight: 700,
                    fontSize: 20,
                    flexShrink: 0,
                  }}>
                    {r.initial}
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-cond)', fontWeight: 700, fontSize: 15, color: 'var(--fg-1)' }}>
                      {r.name}
                    </div>
                    <div style={{ fontFamily: 'var(--font-cond)', fontSize: 13, color: 'var(--fg-2)', marginTop: 2 }}>
                      {r.role} &middot; {r.company}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
window.DTestimonials = DTestimonials;
