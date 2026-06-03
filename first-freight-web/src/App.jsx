import { useState } from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import QuoteModal from './components/shared/QuoteModal'
import TrackingModal from './components/shared/TrackingModal'
import Hero from './sections/Hero'
import SocialProof from './sections/SocialProof'
import Evolution from './sections/Evolution'
import Stats from './sections/Stats'
import Services from './sections/Services'
import Gallery from './sections/Gallery'
import Features from './sections/Features'
import NetworkMap from './sections/NetworkMap'
import Testimonials from './sections/Testimonials'
import Faq from './sections/Faq'
import Contact from './sections/Contact'

export default function App() {
  const [quoteOpen, setQuoteOpen] = useState(false)
  const [trackWaybill, setTrackWaybill] = useState(null)
  const openQuote = () => setQuoteOpen(true)

  return (
    <>
      <Header onQuote={openQuote} onTrack={() => setTrackWaybill('FF-2840-117')} />
      <main style={{ paddingTop: 78 }}>
        <Hero onQuote={openQuote} onTrackSubmit={wb => setTrackWaybill(wb || 'FF-2840-117')} />
        <SocialProof />
        <Evolution />
        <Stats />
        <Services />
        <Gallery />
        <Features />
        <NetworkMap />
        <Testimonials />
        <Faq />
        <Contact onQuote={openQuote} />
      </main>
      <Footer />
      {quoteOpen && <QuoteModal onClose={() => setQuoteOpen(false)} />}
      {trackWaybill && <TrackingModal waybill={trackWaybill} onClose={() => setTrackWaybill(null)} />}
    </>
  )
}
