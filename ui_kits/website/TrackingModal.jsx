/* TrackingModal.jsx — overlay with shipment timeline result */
function TrackingModal({ waybill, onClose }) {
  const steps = [
    ['Collected', 'Johannesburg depot', 'Mon 09:14', 'done'],
    ['Departed hub', 'JNB \u2192 CPT line-haul', 'Mon 21:40', 'done'],
    ['Arrived depot', 'Cape Town depot', 'Tue 06:02', 'done'],
    ['Out for delivery', 'Vehicle B18', 'Tue 08:30', 'active'],
    ['Delivered', 'Awaiting signature', '\u2014', 'pending'],
  ];
  const color = s => s === 'done' ? 'var(--ok)' : s === 'active' ? 'var(--ff-orange)' : 'var(--ff-line-2)';
  return (
    <div onClick={onClose} style={{
      position: 'fixed', inset: 0, zIndex: 100, background: 'rgba(20,18,16,.55)',
      backdropFilter: 'blur(3px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        background: '#fff', borderRadius: 'var(--r-lg)', boxShadow: 'var(--sh-lg)',
        width: 'min(520px,100%)', maxHeight: '86vh', overflow: 'auto'
      }}>
        <div style={{ padding: '22px 24px', borderBottom: '1px solid var(--ff-line)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <div className="ff-eyebrow" style={{ color: 'var(--ff-red)' }}>Tracking</div>
            <div style={{ fontFamily: 'var(--font-cond)', fontWeight: 700, fontSize: 24, letterSpacing: '.05em', marginTop: 4 }}>{waybill}</div>
          </div>
          <button onClick={onClose} aria-label="Close" style={{
            background: 'var(--ff-mist)', border: 0, borderRadius: '50%', width: 34, height: 34,
            cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--fg-2)'
          }}><i data-lucide="x" style={{ width: 18, height: 18 }}></i></button>
        </div>
        <div style={{ padding: '14px 24px 8px', display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 6, padding: '5px 12px',
            borderRadius: 'var(--r-pill)', fontSize: 13, fontWeight: 600,
            background: 'rgba(242,106,33,.16)', color: '#C7560F'
          }}><span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--ff-orange)' }}></span>In Transit</span>
          <span style={{ fontSize: 14, color: 'var(--fg-2)' }}>Est. delivery <strong>Today</strong></span>
        </div>
        <div style={{ padding: '12px 24px 28px' }}>
          {steps.map(([t, sub, time, st], i) => (
            <div key={t} style={{ display: 'flex', gap: 14, position: 'relative' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{
                  width: 16, height: 16, borderRadius: '50%', background: color(st),
                  border: st === 'pending' ? '2px solid var(--ff-line-2)' : 'none', flex: 'none',
                  boxShadow: st === 'active' ? '0 0 0 4px rgba(242,106,33,.2)' : 'none'
                }}></div>
                {i < steps.length - 1 && <div style={{ width: 2, flex: 1, background: 'var(--ff-line)', minHeight: 30 }}></div>}
              </div>
              <div style={{ paddingBottom: 18 }}>
                <div style={{ fontWeight: 700, fontSize: 15, color: st === 'pending' ? 'var(--fg-3)' : 'var(--fg-1)' }}>{t}</div>
                <div style={{ fontSize: 13.5, color: 'var(--fg-2)' }}>{sub} · {time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
window.TrackingModal = TrackingModal;
