import { useState, useEffect } from 'react'

export default function useCountUp(target, run, dur = 1400) {
  const [v, setV] = useState(0)
  useEffect(() => {
    if (!run) return
    let raf, start
    const tick = (t) => {
      if (!start) start = t
      const p = Math.min(1, (t - start) / dur)
      const eased = 1 - Math.pow(1 - p, 3)
      setV(target * eased)
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [run, target, dur])
  return v
}
