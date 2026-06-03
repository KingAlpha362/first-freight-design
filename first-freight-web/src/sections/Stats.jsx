import { useRef, useState, useEffect } from 'react'
import useCountUp from '../hooks/useCountUp'

function StatItem({ value, decimals = 0, suffix = '', prefix = '', label, run }) {
  const v = useCountUp(value, run)
  const num = v.toLocaleString('en-ZA', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })
  return (
    <div style={{ textAlign: 'center', padding: '8px 16px' }}>
      <div style={{
        fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 700,
        fontSize: 'clamp(2.4rem,4vw,3.4rem)', color: '#fff', lineHeight: 1
      }}>
        {prefix}{num}{suffix}
      </div>
      <div style={{
        fontFamily: 'var(--font-cond)', fontWeight: 700, fontSize: 12.5,
        letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,.78)', marginTop: 10
      }}>{label}</div>
    </div>
  )
}

export default function Stats() {
  const ref = useRef(null)
  const [run, setRun] = useState(false)
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setRun(true); io.disconnect() }
    }, { threshold: .4 })
    if (ref.current) io.observe(ref.current)
    return () => io.disconnect()
  }, [])

  return (
    <section ref={ref} style={{
      background: 'linear-gradient(100deg, var(--ff-red-deep), var(--ff-red))',
      padding: '54px 30px'
    }}>
      <div className="grid grid-cols-2 md:grid-cols-4" style={{ maxWidth: 1100, margin: '0 auto' }}>
        {[
          { value: 99.4, decimals: 1, suffix: '%', label: 'On-time delivery' },
          { value: 30, suffix: '+', label: 'Years on the road' },
          { value: 4890, label: 'Parcels moved daily' },
          { value: 3, label: 'Metro depots' },
        ].map((s, i, arr) => (
          <div key={s.label} style={{ borderRight: i < arr.length - 1 ? '1px solid rgba(255,255,255,.18)' : 'none' }}>
            <StatItem {...s} run={run} />
          </div>
        ))}
      </div>
    </section>
  )
}
