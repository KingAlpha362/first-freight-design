import { useState, useEffect, useRef } from 'react'

/**
 * Fade-in-on-scroll. Returns [ref, shown]; flips `shown` true once the
 * element enters the viewport, then disconnects (fires once). Honours
 * prefers-reduced-motion by starting shown.
 */
export default function useReveal({ threshold = 0.18, rootMargin = '0px 0px -8% 0px' } = {}) {
  const prefersReduced = typeof window !== 'undefined' &&
    window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const ref = useRef(null)
  const [shown, setShown] = useState(prefersReduced)

  useEffect(() => {
    if (prefersReduced || shown) return
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') { setShown(true); return }
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setShown(true); io.disconnect() }
    }, { threshold, rootMargin })
    io.observe(el)
    return () => io.disconnect()
  }, [prefersReduced, shown, threshold, rootMargin])

  return [ref, shown]
}
