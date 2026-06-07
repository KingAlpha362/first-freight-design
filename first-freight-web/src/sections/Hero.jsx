import { useState } from 'react'
import { PackageSearch, ArrowRight } from 'lucide-react'
import Media from '../components/shared/Media'
import Reveal from '../components/shared/Reveal'

const LEDGER = [
  ['30+', 'years on the road'],
  ['3', 'metro depots'],
  ['99.4%', 'on-time delivery'],
  ['24/7', 'tracked fleet'],
]

export default function Hero({ onQuote, onTrackSubmit }) {
  const [wb, setWb] = useState('')

  const handleTrack = (e) => {
    e.preventDefault()
    window.open('https://firstfreight.pperfect.com/', '_blank', 'noopener,noreferrer')
  }

  return (
    <section style={{
      position: 'relative', minHeight: 'min(94vh, 860px)', overflow: 'hidden',
      display: 'flex', flexDirection: 'column', justifyContent: 'center', background: '#1F0E05'
    }}>
      {/* Cinematic graded backdrop with one-shot push-in + filmic grain */}
      <Media
        src="/assets/hero-fleet-depot.jpg"
        alt="First Freight fleet lined up at the depot at dawn"
        fill eager kenburns grain vignette={false}
        position="center 56%"
      >
        {/* First Freight orange anchor rising from the bottom-left, where the copy sits —
            deepened at the text edge so the white copy stays legible */}
        <div aria-hidden style={{ position: 'absolute', inset: 0, background:
          'linear-gradient(102deg, rgba(122,42,8,.42) 0%, rgba(199,67,18,.28) 32%, rgba(242,106,33,.12) 60%, rgba(242,106,33,.02) 100%)' }} />
        {/* base + top falloff for depth */}
        <div aria-hidden style={{ position: 'absolute', inset: 0, background:
          'linear-gradient(0deg, rgba(122,42,8,.32) 0%, rgba(122,42,8,0) 30%), linear-gradient(180deg, rgba(122,42,8,.14) 0%, rgba(122,42,8,0) 20%)' }} />
        {/* brighter hi-vis orange glow bleeding off the right edge (screen) */}
        <div aria-hidden style={{ position: 'absolute', inset: 0, mixBlendMode: 'screen', background:
          'radial-gradient(58% 78% at 100% 34%, rgba(251,139,61,.34), rgba(251,139,61,0) 60%)' }} />
      </Media>

      {/* Copy */}
      <div className="relative z-10 w-full px-6 md:px-8" style={{ maxWidth: 1280, margin: '0 auto' }}>
        <Reveal style={{ maxWidth: 680 }}>
          <span className="flex items-center gap-2 mb-5">
            <span style={{ width: 34, height: 2, background: 'var(--ff-red)' }} />
            <span className="ff-eyebrow" style={{ color: 'var(--ff-orange)' }}>National courier &amp; freight · since 1996</span>
          </span>

          <h1 style={{
            fontFamily: 'var(--font-display)', fontWeight: 700, fontStyle: 'italic',
            fontSize: 'clamp(3rem,6.6vw,5.8rem)', lineHeight: .96, letterSpacing: '-.015em',
            color: '#fff', margin: '0 0 22px', textShadow: '0 2px 30px rgba(0,0,0,.35)'
          }}>
            Your parcel.<br /><span style={{ color: 'var(--ff-red)' }}>Our priority.</span>
          </h1>

          <p style={{ fontFamily: 'var(--font-body)', fontSize: 19, lineHeight: 1.55, color: 'rgba(255,255,255,.9)', textShadow: '0 1px 12px rgba(40,14,2,.55)', maxWidth: 520, margin: '0 0 32px' }}>
            Overnight road freight, same-day courier and warehousing across Johannesburg, Durban and
            Cape Town — on a satellite-tracked fleet, with proof of delivery on every run.</p>

          {/* Frosted tracking field */}
          <form onSubmit={handleTrack} className="flex flex-col sm:flex-row gap-2 mb-6" style={{
            maxWidth: 540,
            background: 'rgba(255,255,255,.10)', border: '1px solid rgba(255,255,255,.22)',
            backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)',
            boxShadow: '0 10px 34px rgba(0,0,0,.38)', borderRadius: 'var(--r-md)', padding: 8
          }}>
            <div className="flex items-center gap-2 flex-1 px-2">
              <PackageSearch size={20} style={{ color: 'var(--ff-orange)', flexShrink: 0 }} />
              <input
                value={wb}
                onChange={e => setWb(e.target.value)}
                placeholder="Track your parcel — enter waybill no."
                className="ff-input-light"
                style={{
                  flex: 1, background: 'none', border: 0, outline: 'none',
                  fontFamily: 'var(--font-body)', fontSize: 15.5, padding: '12px 0', minWidth: 0
                }}
              />
            </div>
            <button type="submit" className="ff-cta-red" style={{ padding: '13px 24px', whiteSpace: 'nowrap' }}>Track</button>
          </form>

          <button onClick={onQuote} className="ff-cta-line" style={{ borderColor: 'rgba(255,255,255,.45)' }}>
            Get a quote <ArrowRight size={16} />
          </button>
        </Reveal>
      </div>

      {/* Stat ledger — hairline credibility strip pinned to the base */}
      <div className="relative z-10 w-full px-6 md:px-8" style={{ maxWidth: 1280, margin: '0 auto', marginTop: 'clamp(40px, 7vh, 84px)' }}>
        <div className="flex flex-wrap" style={{ borderTop: '1px solid rgba(255,255,255,.16)', paddingTop: 18, gap: '14px 0' }}>
          {LEDGER.map(([n, l], i) => (
            <div key={l} style={{
              flex: '1 1 140px', paddingLeft: i === 0 ? 0 : 22, marginLeft: i === 0 ? 0 : 22,
              borderLeft: i === 0 ? 'none' : '1px solid rgba(255,255,255,.14)'
            }}>
              <div style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 700, fontSize: 26, color: '#fff', lineHeight: 1 }}>{n}</div>
              <div style={{ fontFamily: 'var(--font-cond)', fontWeight: 600, fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,.6)', marginTop: 5 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
