/**
 * Media — the single graded image primitive for the "Warm Steel" system.
 * Every photo on the site routes through this so the grade, overlay stack,
 * cropping focal point and lazy/dimension behaviour stay consistent.
 *
 *  ratio     "16/10" | "4/3" | "1/1" …  → framed (uses aspect-ratio)
 *  fill      true                        → absolute inset:0 (hero/CTA bg)
 *  position  object-position focal point (default "center 40%")
 *  scrim     "bottom" | "left" | false   → legibility gradient on the text side
 *  vignette  edge darkening for depth (default true)
 *  grain     filmic noise for feature moments (default false)
 *  kenburns  one-shot push-in on load (hero/CTA only)
 *  zoom      hover scale (caller toggles via `hovered`)
 *  children  extra overlay layers (tags, captions, brand glow)
 */
export default function Media({
  src, alt = '', ratio, fill = false, position = 'center 40%',
  scrim = false, vignette = true, grain = false, kenburns = false,
  zoom = false, hovered = false, radius, eager = false,
  className = '', style, children,
}) {
  const frame = fill
    ? { position: 'absolute', inset: 0 }
    : { position: 'relative', width: '100%', aspectRatio: ratio }

  const scrimBg = scrim === 'left'
    ? 'linear-gradient(90deg, rgba(18,16,15,.84) 0%, rgba(18,16,15,.4) 38%, transparent 70%)'
    : 'linear-gradient(0deg, rgba(18,16,15,.84) 0%, rgba(18,16,15,.18) 46%, transparent 66%)'

  return (
    <div className={className} style={{ overflow: 'hidden', borderRadius: radius, ...frame, ...style }}>
      <img
        src={src} alt={alt} loading={eager ? 'eager' : 'lazy'} decoding="async"
        className={`ff-graded${kenburns ? ' ff-kenburns' : ''}`}
        style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: position,
          transform: zoom && hovered ? 'scale(1.06)' : 'scale(1)',
          transition: 'transform 560ms var(--ease)',
        }}
      />
      {scrim && <div aria-hidden style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: scrimBg }} />}
      {vignette && <div aria-hidden className="ff-vignette" />}
      {children}
      {grain && <div aria-hidden className="ff-grain" />}
    </div>
  )
}
