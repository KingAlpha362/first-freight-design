import { useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const EASE_OUT = [0.23, 1, 0.32, 1]

/* Reusable fullscreen image lightbox.
   `index` is the active item index (or null when closed). */
export function ImageLightbox({ items, index, onClose, onPrev, onNext }) {
  const open = index !== null && index !== undefined

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowRight') onNext()
      else if (e.key === 'ArrowLeft') onPrev()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose, onPrev, onNext])

  const item = open ? items[index] : null
  const src = item ? (item.src || item.img) : null
  const many = items.length > 1

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: EASE_OUT }}
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

          <motion.img
            key={index}
            src={src}
            alt={item.alt || ''}
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.94 }}
            transition={{ duration: 0.3, ease: EASE_OUT }}
            style={{ maxWidth: 'min(1040px, 92vw)', maxHeight: '88vh', objectFit: 'contain', borderRadius: 'var(--r-md)', display: 'block' }}
          />

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
      )}
    </AnimatePresence>
  )
}
