import { motion } from 'motion/react'
import { TestimonialsColumn } from '@/components/ui/testimonials-columns'

const testimonials = [
  {
    text: "I highly recommend them to customers — they have a personalised service and a very family-orientated feel that makes day-to-day dealings easy and hassle free.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Loriana Trisolino",
    role: "Operations Manager · Accessories Spares Centre",
  },
  {
    text: "When it comes to excellent service at competitive pricing, nobody can come close to First Freight. I always recommend them to our customers.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Preshanthan Reddy",
    role: "Operations Manager · Central Medical",
  },
  {
    text: "First Freight handles our high-volume distribution without a single missed deadline. Their tracking gives us full visibility and our customers love the communication.",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    name: "Thabo Nkosi",
    role: "Logistics Coordinator · Brandhouse Beverages",
  },
  {
    text: "We ship temperature-sensitive pharmaceutical products and First Freight understands the urgency. Reliable, professional, and always reachable when we need them.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    name: "Samantha du Plessis",
    role: "Supply Chain Manager · Cape Pharma Distributors",
  },
  {
    text: "Switched from two courier accounts to First Freight alone. Simpler invoicing, one contact, and our order-to-door time dropped by a full day.",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    name: "Kevin Mhlongo",
    role: "E-commerce Director · Joburg Streetwear Co.",
  },
  {
    text: "Same-day delivery within Durban used to be a nightmare. First Freight sorted it on day one. Our clients now rely on us because we can rely on them.",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
    name: "Anita Pillay",
    role: "Branch Manager · SA Auto Parts KZN",
  },
  {
    text: "The cross-border documentation was always a headache. First Freight's team handles everything into Mozambique seamlessly — we just book and ship.",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    name: "Marco da Silva",
    role: "Export Manager · Durban Trade Supplies",
  },
  {
    text: "We moved our entire retail replenishment to First Freight three years ago. Stock arrives on time, every time — our store managers don't even worry about it anymore.",
    image: "https://randomuser.me/api/portraits/women/36.jpg",
    name: "Nadia Hendricks",
    role: "Regional Buyer · Cape Fashion Group",
  },
  {
    text: "The Parcel Perfect system gives us real-time scan updates at every depot. For our compliance team, that chain-of-custody record is invaluable.",
    image: "https://randomuser.me/api/portraits/men/91.jpg",
    name: "Riaan Botha",
    role: "Compliance Officer · MediStar Logistics",
  },
]

const col1 = testimonials.slice(0, 3)
const col2 = testimonials.slice(3, 6)
const col3 = testimonials.slice(6, 9)

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ background: 'var(--ff-paper)', padding: '100px 30px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1140, margin: '0 auto' }}>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: 56, maxWidth: 540, margin: '0 auto 56px' }}
        >
          <span className="ff-eyebrow" style={{ color: 'var(--ff-red)' }}>Client testimonials</span>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: 'clamp(2.1rem,4vw,3.1rem)',
            lineHeight: 1.06,
            color: 'var(--fg-1)',
            margin: '14px 0 16px',
          }}>
            Trusted by South African{' '}
            <span style={{ fontStyle: 'italic', color: 'var(--ff-red)' }}>businesses.</span>
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: 'var(--fg-2)', lineHeight: 1.6, margin: 0 }}>
            Real words from the operations teams who rely on us every day.
          </p>
        </motion.div>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 24,
          maxHeight: 680,
          overflow: 'hidden',
          maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
        }}>
          <TestimonialsColumn testimonials={col1} duration={18} />
          <TestimonialsColumn testimonials={col2} duration={22} className="hidden md:block" />
          <TestimonialsColumn testimonials={col3} duration={20} className="hidden lg:block" />
        </div>

      </div>
    </section>
  )
}
