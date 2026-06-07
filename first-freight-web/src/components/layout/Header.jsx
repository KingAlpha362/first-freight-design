import { useState, useEffect, useRef, Fragment } from 'react'
import { Search, FileText, Menu, X, ExternalLink } from 'lucide-react'

const navLinks = [
  { label: 'Services',   href: '#services' },
  { label: 'Network',    href: '#network' },
  { label: 'Operations', href: '#gallery' },
  { label: 'About',      href: '#features' },
  { label: 'FAQ',        href: '#faq' },
]

// Top utility strip — external customer/agent portals
const utilityLinks = [
  { label: 'Track Parcel',     href: 'https://firstfreight.pperfect.com/' },
  { label: 'Online Customers', href: 'https://ffweb30201.pperfect.com/pponline/' },
  { label: 'Agent Portal',     href: 'https://ffagentportal.pperfect.com/' },
]

export default function Header({ onQuote, onTrack }) {
  const [hidden, setHidden] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const lastY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      if (y < 80) setHidden(false)
      else if (y > lastY.current) setHidden(true)
      else setHidden(false)
      lastY.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const linkStyle = {
    fontFamily: 'var(--font-cond)', fontWeight: 600, fontSize: 14, letterSpacing: '.05em',
    textTransform: 'uppercase', color: 'rgba(255,255,255,.75)', textDecoration: 'none',
    transition: 'color 180ms var(--ease)'
  }

  const utilStyle = {
    fontFamily: 'var(--font-cond)', fontWeight: 600, fontSize: 12, letterSpacing: '.08em',
    textTransform: 'uppercase', color: 'rgba(255,255,255,.58)', textDecoration: 'none',
    background: 'none', border: 0, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 6,
    transition: 'color 180ms var(--ease)'
  }
  const utilHover = (on) => (e) => { e.currentTarget.style.color = on ? '#fff' : 'rgba(255,255,255,.58)' }

  const renderUtil = (item) => (
    <a href={item.href} target="_blank" rel="noopener noreferrer"
      style={{ ...utilStyle, padding: '0 16px' }} onMouseEnter={utilHover(true)} onMouseLeave={utilHover(false)}>
      {item.label}<ExternalLink size={11} style={{ opacity: .65 }} />
    </a>
  )

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      background: 'rgba(10,9,8,0.97)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(255,255,255,.10)',
      transform: hidden ? 'translateY(-100%)' : 'translateY(0)',
      transition: 'transform 320ms cubic-bezier(.2,.7,.2,1)',
    }}>
      {/* Top utility strip (desktop) */}
      <div className="hidden md:block" style={{ borderBottom: '1px solid rgba(255,255,255,.08)' }}>
        <div className="flex items-center justify-center px-6 md:px-8" style={{ maxWidth: 1280, margin: '0 auto', height: 38 }}>
          {utilityLinks.map((item, i) => (
            <Fragment key={item.label}>
              {i > 0 && <span aria-hidden style={{ width: 1, height: 13, background: 'rgba(255,255,255,.16)' }} />}
              {renderUtil(item)}
            </Fragment>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between px-6 md:px-8" style={{ maxWidth: 1280, margin: '0 auto', height: 78 }}>
        {/* Logo */}
        <a href="#" aria-label="First Freight Couriers — home" onClick={() => setMenuOpen(false)}>
          <img src="/assets/logo-first-freight-dark.png" alt="First Freight Couriers" style={{ height: 34 }} />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center" style={{ gap: 34 }}>
          {navLinks.map(({ label, href }) => (
            <a key={label} href={href} style={linkStyle}
              onMouseEnter={e => e.currentTarget.style.color = '#fff'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,.75)'}
            >{label}</a>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center" style={{ gap: 18 }}>
          <button onClick={onTrack} aria-label="Track parcel" style={{
            background: 'none', border: 0, cursor: 'pointer', color: 'rgba(255,255,255,.75)',
            display: 'flex', alignItems: 'center', transition: 'color 180ms var(--ease)'
          }}
            onMouseEnter={e => e.currentTarget.style.color = '#fff'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,.75)'}
          >
            <Search size={20} />
          </button>
          <button onClick={onQuote} className="ff-cta-red" style={{ padding: '12px 22px' }}>
            <FileText size={16} />Get a Quote
          </button>
        </div>

        {/* Mobile: track + hamburger */}
        <div className="flex md:hidden items-center" style={{ gap: 14 }}>
          <button onClick={onTrack} aria-label="Track parcel" style={{
            background: 'none', border: 0, cursor: 'pointer', color: 'rgba(255,255,255,.75)',
            display: 'flex', alignItems: 'center'
          }}>
            <Search size={20} />
          </button>
          <button onClick={() => setMenuOpen(v => !v)} aria-label="Toggle menu" style={{
            background: 'none', border: 0, cursor: 'pointer', color: '#fff',
            display: 'flex', alignItems: 'center'
          }}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden" style={{
          background: '#0A0908', borderTop: '1px solid rgba(255,255,255,.10)',
          padding: '24px 24px 32px', display: 'flex', flexDirection: 'column', gap: 4
        }}>
          {navLinks.map(({ label, href }) => (
            <a key={label} href={href} onClick={() => setMenuOpen(false)} style={{
              fontFamily: 'var(--font-cond)', fontWeight: 600, fontSize: 15, letterSpacing: '.06em',
              textTransform: 'uppercase', color: 'rgba(255,255,255,.8)', textDecoration: 'none',
              padding: '13px 4px', borderBottom: '1px solid rgba(255,255,255,.08)'
            }}>{label}</a>
          ))}

          {/* Quick links — external portals */}
          <span style={{
            fontFamily: 'var(--font-cond)', fontWeight: 700, fontSize: 11, letterSpacing: '.14em',
            textTransform: 'uppercase', color: 'rgba(255,255,255,.4)', padding: '18px 4px 6px'
          }}>Quick links</span>
          {utilityLinks.filter(u => u.href).map(({ label, href }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)} style={{
              fontFamily: 'var(--font-cond)', fontWeight: 600, fontSize: 15, letterSpacing: '.06em',
              textTransform: 'uppercase', color: 'rgba(255,255,255,.8)', textDecoration: 'none',
              padding: '13px 4px', borderBottom: '1px solid rgba(255,255,255,.08)',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between'
            }}>{label}<ExternalLink size={14} style={{ opacity: .6 }} /></a>
          ))}

          <button onClick={() => { setMenuOpen(false); onQuote() }} className="ff-cta-red" style={{ marginTop: 20, justifyContent: 'center' }}>
            <FileText size={16} />Get a Quote
          </button>
        </div>
      )}
    </header>
  )
}
