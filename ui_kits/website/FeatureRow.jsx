/* FeatureRow.jsx — 3 cards overlapping the hero (Logiko signature) */
function FeatureRow() {
  const cards = [
    ['wallet', 'Optimized Cost', 'Competitive nationwide rates with no hidden surcharges.'],
    ['timer', 'Reduced Transit Time', 'Scheduled overnight line-haul between all three depots.'],
    ['badge-check', 'Delivery on Time', 'Satellite-tracked fleet with proof of delivery on every run.'],
  ];
  return (
    <div style={{ position: 'relative', zIndex: 5, maxWidth: 1140, margin: '-78px auto 0', padding: '0 24px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 0,
        background: '#fff', borderRadius: 'var(--r-md)', boxShadow: 'var(--sh-lg)', overflow: 'hidden' }}>
        {cards.map(([ic, t, d], i) => (
          <div key={t} style={{ padding: '26px 26px', display: 'flex', gap: 16, alignItems: 'flex-start',
            borderRight: i < 2 ? '1px solid var(--ff-line)' : 'none', position: 'relative' }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--ff-paper)'}
            onMouseLeave={e => e.currentTarget.style.background = '#fff'}>
            <div style={{ width: 50, height: 50, flex: 'none', borderRadius: 'var(--r-sm)',
              background: 'var(--ff-red)', color: '#fff', display: 'flex', alignItems: 'center',
              justifyContent: 'center' }}>
              <i data-lucide={ic} style={{ width: 26, height: 26 }}></i>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 17, color: 'var(--fg-1)', marginBottom: 5 }}>{t}</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 13.5, lineHeight: 1.5, color: 'var(--fg-2)' }}>{d}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
window.FeatureRow = FeatureRow;
