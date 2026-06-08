import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const EASE = [0.2, 0.7, 0.2, 1]

/* glass category pill (mirrors the brand pill used elsewhere) */
function Pill({ children, accent }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', padding: '5px 11px', borderRadius: 'var(--r-pill)',
      background: accent ? 'rgba(222,70,50,.92)' : 'rgba(255,255,255,.12)',
      backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
      border: `1px solid ${accent ? 'rgba(255,255,255,.25)' : 'rgba(255,255,255,.20)'}`,
      fontFamily: 'var(--font-cond)', fontWeight: 700, fontSize: 11, letterSpacing: '.1em',
      textTransform: 'uppercase', color: '#fff', whiteSpace: 'nowrap',
    }}>{children}</span>
  )
}

/* ---------------- desktop: one expanding panel ---------------- */
function Panel({ data, expanded, onHover, onLeave, onOpen }) {
  const Icon = data.Icon
  return (
    <motion.button
      type="button"
      animate={{ flex: expanded ? 2.4 : 0.62 }}
      transition={{ duration: 0.5, ease: EASE }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onFocus={onHover}
      onBlur={onLeave}
      onClick={onOpen}
      aria-label={`${data.title} — view larger`}
      style={{
        position: 'relative', overflow: 'hidden', cursor: 'pointer', minWidth: 0,
        height: 460, borderRadius: 'var(--r-lg)', padding: 0, textAlign: 'left',
        background: 'var(--ff-graphite)',
        border: `1px solid ${expanded ? 'rgba(222,70,50,.55)' : 'rgba(255,255,255,.10)'}`,
        boxShadow: expanded ? '0 18px 40px rgba(0,0,0,.45)' : '0 1px 4px rgba(0,0,0,.25)',
        transition: 'border-color 220ms cubic-bezier(.2,.7,.2,1), box-shadow 220ms cubic-bezier(.2,.7,.2,1)',
      }}
    >
      <img src={data.src} alt={data.alt || ''} className="ff-graded" style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover',
        transform: expanded ? 'scale(1.05)' : 'scale(1.12)', transition: 'transform 600ms cubic-bezier(.2,.7,.2,1)',
      }} />
      <div style={{
        position: 'absolute', inset: 0, transition: 'background 220ms cubic-bezier(.2,.7,.2,1)',
        background: expanded
          ? 'linear-gradient(0deg, rgba(18,16,15,.93) 8%, rgba(18,16,15,.45) 46%, rgba(18,16,15,.12) 100%)'
          : 'linear-gradient(0deg, rgba(18,16,15,.62), rgba(18,16,15,.26))',
      }} />

      {/* tag(s) top-left */}
      <div style={{ position: 'absolute', top: 18, left: 18, display: 'flex', gap: 8 }}>
        {data.flagship && <Pill accent>Flagship</Pill>}
        <Pill>{data.tag}</Pill>
      </div>

      {/* collapsed: vertical title label */}
      <span style={{
        position: 'absolute', left: 0, right: 0, bottom: 22, display: 'flex', justifyContent: 'center',
        opacity: expanded ? 0 : 1, transition: 'opacity 200ms cubic-bezier(.2,.7,.2,1)', pointerEvents: 'none',
      }}>
        <span style={{
          writingMode: 'vertical-rl', transform: 'rotate(180deg)', fontFamily: 'var(--font-cond)',
          fontWeight: 700, fontSize: 14, letterSpacing: '.12em', textTransform: 'uppercase', color: '#fff', whiteSpace: 'nowrap',
        }}>{data.title}</span>
      </span>

      {/* expanded: copy */}
      <div style={{
        position: 'absolute', insetInline: 0, bottom: 0, padding: '0 30px 28px', maxWidth: 460,
        opacity: expanded ? 1 : 0, transform: expanded ? 'translateY(0)' : 'translateY(12px)',
        transition: 'opacity 260ms cubic-bezier(.2,.7,.2,1) 80ms, transform 320ms cubic-bezier(.2,.7,.2,1) 60ms',
        pointerEvents: 'none',
      }}>
        {Icon && (
          <span style={{
            display: 'inline-flex', width: 44, height: 44, borderRadius: 'var(--r-md)', marginBottom: 14,
            alignItems: 'center', justifyContent: 'center', color: '#fff',
            background: data.flagship ? 'rgba(222,70,50,.92)' : 'rgba(255,255,255,.10)',
            border: '1px solid rgba(255,255,255,.20)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
          }}><Icon size={21} /></span>
        )}
        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(1.5rem,2.2vw,2rem)',
          lineHeight: 1.06, color: '#fff', margin: '0 0 10px' }}>{data.title}</h3>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, lineHeight: 1.55, color: 'rgba(255,255,255,.82)', margin: '0 0 14px' }}>{data.body}</p>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-cond)',
          fontWeight: 700, fontSize: 12, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--ff-orange)' }}>
          View larger <ChevronRight size={15} />
        </span>
      </div>
    </motion.button>
  )
}

/* ---------------- mobile: stacked image card ---------------- */
function StackCard({ data, onOpen }) {
  const Icon = data.Icon
  return (
    <button type="button" onClick={onOpen} aria-label={`${data.title} — view larger`} style={{
      position: 'relative', overflow: 'hidden', display: 'block', width: '100%', textAlign: 'left',
      height: 240, borderRadius: 'var(--r-lg)', border: '1px solid rgba(255,255,255,.10)', cursor: 'pointer',
      boxShadow: '0 1px 4px rgba(0,0,0,.25)', padding: 0, background: 'var(--ff-graphite)',
    }}>
      <img src={data.src} alt={data.alt || ''} className="ff-graded" style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
      <div style={{ position: 'absolute', inset: 0,
        background: 'linear-gradient(0deg, rgba(18,16,15,.93) 8%, rgba(18,16,15,.45) 48%, rgba(18,16,15,.15) 100%)' }} />
      <div style={{ position: 'absolute', top: 16, left: 16, display: 'flex', gap: 8 }}>
        {data.flagship && <Pill accent>Flagship</Pill>}
        <Pill>{data.tag}</Pill>
      </div>
      {Icon && (
        <span style={{ position: 'absolute', top: 14, right: 16, width: 38, height: 38, borderRadius: 'var(--r-sm)',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#fff',
          background: data.flagship ? 'rgba(222,70,50,.92)' : 'rgba(255,255,255,.12)', border: '1px solid rgba(255,255,255,.20)' }}>
          <Icon size={18} />
        </span>
      )}
      <div style={{ position: 'absolute', insetInline: 0, bottom: 0, padding: '0 20px 18px' }}>
        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, color: '#fff', margin: '0 0 5px' }}>{data.title}</h3>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 13.5, lineHeight: 1.5, color: 'rgba(255,255,255,.78)', margin: 0,
          display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{data.body}</p>
      </div>
    </button>
  )
}

/* ---------------- fullscreen lightbox ---------------- */
function Lightbox({ items, index, onClose, onPrev, onNext }) {
  const data = items[index]
  const many = items.length > 1
  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 60, display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'rgba(18,16,15,.96)', backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)', padding: 24,
      }}
    >
      <button type="button" onClick={onClose} aria-label="Close"
        style={{ position: 'absolute', top: 18, right: 20, zIndex: 2, background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,.8)' }}>
        <X size={30} />
      </button>

      {many && (
        <button type="button" onClick={(e) => { e.stopPropagation(); onPrev() }} aria-label="Previous"
          style={{ position: 'absolute', left: 16, zIndex: 2, background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,.8)' }}>
          <ChevronLeft size={40} />
        </button>
      )}

      <motion.div onClick={(e) => e.stopPropagation()} style={{ position: 'relative', width: '100%', maxWidth: 1040, maxHeight: '88vh' }}>
        <motion.img
          key={index}
          src={data.src}
          alt={data.alt || data.title || ''}
          initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.92 }}
          transition={{ duration: 0.3, ease: EASE }}
          style={{ width: '100%', height: '100%', maxHeight: '88vh', objectFit: 'contain', borderRadius: 'var(--r-md)', display: 'block' }}
        />
        <div style={{ position: 'absolute', left: 0, bottom: 0, right: 0, padding: '0 4px 6px', display: 'flex', gap: 8, alignItems: 'center' }}>
          {data.flagship && <Pill accent>Flagship</Pill>}
          <Pill>{data.tag}</Pill>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, color: '#fff',
            textShadow: '0 2px 12px rgba(0,0,0,.6)' }}>{data.title}</span>
        </div>
      </motion.div>

      {many && (
        <button type="button" onClick={(e) => { e.stopPropagation(); onNext() }} aria-label="Next"
          style={{ position: 'absolute', right: 16, zIndex: 2, background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,.8)' }}>
          <ChevronRight size={40} />
        </button>
      )}

      <div style={{
        position: 'absolute', bottom: 22, left: '50%', transform: 'translateX(-50%)',
        fontFamily: 'var(--font-cond)', fontWeight: 700, fontSize: 13, letterSpacing: '.1em', color: '#fff',
        background: 'rgba(255,255,255,.10)', border: '1px solid rgba(255,255,255,.18)',
        padding: '6px 14px', borderRadius: 'var(--r-pill)',
      }}>
        {index + 1} / {items.length}
      </div>
    </motion.div>
  )
}

/* ---------------- public component ---------------- */
export function ExpandableGallery({ items, className = '' }) {
  const [hovered, setHovered] = useState(0)
  const [selected, setSelected] = useState(null)

  const close = useCallback(() => setSelected(null), [])
  const next = useCallback(() => setSelected((s) => (s === null ? s : (s + 1) % items.length)), [items.length])
  const prev = useCallback(() => setSelected((s) => (s === null ? s : (s - 1 + items.length) % items.length)), [items.length])

  useEffect(() => {
    if (selected === null) return
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      else if (e.key === 'ArrowRight') next()
      else if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [selected, close, next, prev])

  return (
    <div className={className}>
      {/* desktop: expanding panels */}
      <div className="hidden lg:flex" style={{ gap: 12, width: '100%' }}>
        {items.map((it, i) => (
          <Panel key={i} data={it} expanded={hovered === i}
            onHover={() => setHovered(i)} onLeave={() => setHovered(i)} onOpen={() => setSelected(i)} />
        ))}
      </div>

      {/* mobile / tablet: stacked cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden" style={{ gap: 16 }}>
        {items.map((it, i) => (
          <StackCard key={i} data={it} onOpen={() => setSelected(i)} />
        ))}
      </div>

      <AnimatePresence>
        {selected !== null && (
          <Lightbox items={items} index={selected} onClose={close} onPrev={prev} onNext={next} />
        )}
      </AnimatePresence>
    </div>
  )
}
