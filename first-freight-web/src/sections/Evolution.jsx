import { Radar, FileCheck2, Shield, Headset, Quote, ScanBarcode, BellRing } from 'lucide-react'

const iconMap = { 'radar': Radar, 'file-check-2': FileCheck2, 'shield': Shield, 'headset': Headset, 'scan-barcode': ScanBarcode, 'bell-ring': BellRing }

const feats = [
  ['radar', 'Live tracking', 'Every shipment satellite-tracked, 24 hours a day.'],
  ['file-check-2', 'Proof of delivery', 'Signed, time-stamped confirmation on every drop.'],
  ['shield', 'Insured cargo', 'Goods-in-transit cover from collection to delivery.'],
  ['headset', 'Real people', 'A dedicated controller who knows your account.'],
  ['scan-barcode', 'Barcode scanning', 'Every parcel scanned at each handover point for a complete chain-of-custody record.'],
  ['bell-ring', 'SMS & email alerts', 'Automated collection, in-transit, and delivery notifications sent directly to your client.'],
]

export default function Evolution() {
  return (
    <section style={{ background: 'var(--ff-white)', color: 'var(--fg-1)', padding: '104px 30px' }}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center" style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div>
          <span className="ff-eyebrow" style={{ color: 'var(--ff-red)' }}>Why First Freight</span>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(2.1rem,4vw,3.1rem)',
            lineHeight: 1.08, margin: '16px 0 18px', letterSpacing: '-.01em', color: 'var(--fg-1)'
          }}>
            A grown-up approach<br />to <span style={{ fontStyle: 'italic', color: 'var(--ff-red)' }}>logistics.</span>
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 16.5, lineHeight: 1.65, color: 'var(--fg-2)', maxWidth: 480, margin: '0 0 36px' }}>
            Since 1997, moving cargo has taught us that freight is a promise — to be where we
            said, when we said. We pair a national fleet with the Parcel Perfect tracking system
            and the care of a team that treats your parcel like the only one on the truck.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {feats.map(([ic, t, d]) => {
              const Icon = iconMap[ic]
              return (
                <div key={t} style={{
                  display: 'flex', gap: 13, padding: '16px',
                  background: 'var(--ff-paper)', border: '1px solid var(--ff-line)', borderRadius: 'var(--r-md)'
                }}>
                  <div style={{
                    width: 40, height: 40, flex: 'none', borderRadius: 'var(--r-sm)',
                    background: 'rgba(222,70,50,.12)', color: 'var(--ff-red)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <Icon size={21} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 3, color: 'var(--fg-1)' }}>{t}</div>
                    <div style={{ fontSize: 12.5, lineHeight: 1.45, color: 'var(--fg-2)' }}>{d}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div style={{ position: 'relative' }}>
          <img src="/assets/driver-assistant.jpg" alt="First Freight courier team" style={{
            width: '100%', height: 480, objectFit: 'cover', borderRadius: 'var(--r-lg)', display: 'block' }} />
          <div style={{
            position: 'absolute', inset: 0, borderRadius: 'var(--r-lg)',
            background: 'linear-gradient(0deg, rgba(14,12,11,.5), transparent 40%)'
          }} />
          <div style={{ position: 'absolute', left: 22, bottom: 22, right: 22, display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{
              width: 46, height: 46, borderRadius: '50%', background: 'var(--ff-red)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
            }}>
              <Quote size={22} color="#fff" />
            </div>
            <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 600, fontSize: 17, color: '#fff' }}>
              People who move cargo every day.</span>
          </div>
        </div>
      </div>
    </section>
  )
}
