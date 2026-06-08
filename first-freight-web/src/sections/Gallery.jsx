import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import {
  ContainerStagger,
  ContainerAnimated,
  GalleryGrid,
  GalleryGridCell,
} from '@/components/ui/cta-section-with-gallery'
import { ImageLightbox } from '@/components/ui/image-lightbox'

/* Four operations photos for the animated gallery grid */
const GALLERY = [
  { img: '/assets/team-truck-group.jpg',            alt: 'Group of uniformed First Freight staff posing in front of a branded truck' },
  { img: '/assets/fleet-aerial.jpg',                alt: 'Elevated view of First Freight bakkies and trucks parked in the depot yard' },
  { img: '/assets/warehouse-forklift-operator.jpg', alt: 'First Freight staff member operating a Toyota forklift in the warehouse' },
  { img: '/assets/driver-waving.jpg',               alt: 'Smiling First Freight driver waving from the cab of a branded truck' },
  { img: '/assets/fleet-bakkies-lineup.jpg',        alt: 'Row of white First Freight H-100 bakkies with orange bullbars at the depot' },
  { img: '/assets/warehouse-loading.jpg',           alt: 'Elevated view of the warehouse floor with parcels and a truck being loaded' },
  { img: '/assets/signage-building.jpg',            alt: 'First Freight Couriers sign on a blue warehouse wall against a clear sky' },
]

export default function Gallery({ onQuote }) {
  const [lightbox, setLightbox] = useState(null)
  const close = () => setLightbox(null)
  const prev = () => setLightbox(i => (i - 1 + GALLERY.length) % GALLERY.length)
  const next = () => setLightbox(i => (i + 1) % GALLERY.length)

  return (
    <section id="gallery" className="ff-section" style={{ background: '#FFFFFF', color: 'var(--fg-1)' }}>
      <div className="mx-auto grid w-full items-center gap-10 md:grid-cols-2"
        style={{ maxWidth: 1180 }}>

        {/* Left: staggered, blur-in copy */}
        <ContainerStagger>
          <ContainerAnimated>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 700,
              fontSize: 'clamp(2.1rem,4vw,3.1rem)', lineHeight: 1.04, margin: '0',
            }}>
              Active. Human.{' '}
              <span style={{ fontStyle: 'italic', color: 'var(--ff-red)' }}>Real.</span>
            </h2>
          </ContainerAnimated>
          <ContainerAnimated>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.6,
              color: 'var(--fg-2)', maxWidth: 420, margin: '20px 0 0',
            }}>
              A look inside the depots, the fleet and the teams that move your freight every day —
              branch crews across Johannesburg, Durban and Cape Town, on the road from night load to morning delivery.
            </p>
          </ContainerAnimated>
          <ContainerAnimated>
            <button
              type="button"
              onClick={onQuote}
              className="ff-cta-red"
              style={{ marginTop: 28, padding: '13px 24px', display: 'inline-flex', alignItems: 'center', gap: 9 }}
            >
              Get a quote <ArrowRight size={16} />
            </button>
          </ContainerAnimated>
        </ContainerStagger>

        {/* Right: animated asymmetric gallery grid */}
        <GalleryGrid>
          {GALLERY.map((item, index) => (
            <GalleryGridCell index={index} key={item.img}
              role="button" tabIndex={0} aria-label={`${item.alt} — view larger`}
              onClick={() => setLightbox(index)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setLightbox(index) } }}
              style={{ borderRadius: 'var(--r-lg)', border: '1px solid var(--ff-line)', background: 'var(--ff-graphite)' }}>
              <img
                src={item.img}
                alt={item.alt}
                className="ff-graded"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
              />
            </GalleryGridCell>
          ))}
        </GalleryGrid>
      </div>

      <ImageLightbox items={GALLERY} index={lightbox} onClose={close} onPrev={prev} onNext={next} />
    </section>
  )
}
