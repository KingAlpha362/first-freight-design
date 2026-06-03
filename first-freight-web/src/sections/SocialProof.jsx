const logos = [
  { src: '/assets/social-proof/shopritesa.jpg',   alt: 'Shoprite'      },
  { src: '/assets/social-proof/Pick-N-Pay.jpg',   alt: 'Pick n Pay'    },
  { src: '/assets/social-proof/Mr-Price.jpg',     alt: 'Mr Price'      },
  { src: '/assets/social-proof/Foschini.jpg',     alt: 'Foschini'      },
  { src: '/assets/social-proof/Superbalist-1.jpg',alt: 'Superbalist'   },
  { src: '/assets/social-proof/Massmart-1.jpg',   alt: 'Massmart'      },
  { src: '/assets/social-proof/Jumbo.jpg',        alt: 'Jumbo'         },
]

const track = [...logos, ...logos]

export default function SocialProof() {
  return (
    <section style={{ background: 'var(--ff-white)', borderTop: '1px solid var(--ff-line)', borderBottom: '1px solid var(--ff-line)', padding: '48px 0' }}>
      <p style={{
        textAlign: 'center',
        fontFamily: 'var(--font-cond)',
        fontWeight: 600,
        fontSize: 13,
        letterSpacing: '.1em',
        textTransform: 'uppercase',
        color: 'var(--fg-2)',
        marginBottom: 36,
        padding: '0 30px',
      }}>
        Delivering for South Africa's leading brands
      </p>

      <div style={{ overflow: 'hidden' }}>
        <div style={{
          display: 'flex',
          width: 'max-content',
          alignItems: 'center',
          gap: '0 64px',
          animation: 'ff-marquee 28s linear infinite',
          paddingInline: 32,
        }}>
          {track.map(({ src, alt }, i) => (
            <img
              key={i}
              src={src}
              alt={alt}
              style={{
                height: 64,
                width: 'auto',
                objectFit: 'contain',
                filter: 'grayscale(1) opacity(0.55)',
                transition: 'filter 220ms ease',
                flexShrink: 0,
              }}
              onMouseEnter={e => { e.currentTarget.style.filter = 'grayscale(0) opacity(1)' }}
              onMouseLeave={e => { e.currentTarget.style.filter = 'grayscale(1) opacity(0.55)' }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
