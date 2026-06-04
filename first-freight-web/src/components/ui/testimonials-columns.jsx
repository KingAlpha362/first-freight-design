import React from 'react'
import { motion } from 'motion/react'

export function TestimonialsColumn({ className = '', testimonials, duration = 10 }) {
  return (
    <div className={className} style={{ overflow: 'hidden' }}>
      <motion.div
        animate={{ translateY: '-50%' }}
        transition={{ duration, repeat: Infinity, ease: 'linear', repeatType: 'loop' }}
        style={{ display: 'flex', flexDirection: 'column', gap: 24, paddingBottom: 24 }}
      >
        {[...Array(2)].map((_, idx) => (
          <React.Fragment key={idx}>
            {testimonials.map(({ text, image, name, role }, i) => (
              <div key={i} style={{
                padding: '28px 26px',
                borderRadius: 'var(--r-lg)',
                border: '1px solid var(--ff-line)',
                background: 'var(--ff-white)',
                boxShadow: '0 4px 20px rgba(222,70,50,.07)',
                maxWidth: 320,
                width: '100%',
              }}>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 15,
                  lineHeight: 1.65,
                  color: 'var(--fg-1)',
                  margin: 0,
                }}>
                  &ldquo;{text}&rdquo;
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 20 }}>
                  <img
                    src={image}
                    alt={name}
                    width={40}
                    height={40}
                    style={{ width: 40, height: 40, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
                  />
                  <div>
                    <div style={{ fontFamily: 'var(--font-cond)', fontWeight: 700, fontSize: 14, color: 'var(--fg-1)', lineHeight: 1.2 }}>{name}</div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: 12.5, color: 'var(--fg-3)', marginTop: 2 }}>{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  )
}
