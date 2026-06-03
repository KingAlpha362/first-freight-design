/* DStats.jsx — animated count-up stat band */
function useCountUp(target, run, dur = 1400) {
  const [v, setV] = React.useState(0);
  React.useEffect(() => {
    if (!run) return;
    let raf, start;
    const tick = (t) => {
      if (!start) start = t;
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setV(target * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, target]);
  return v;
}

function StatItem({ value, decimals = 0, suffix = '', prefix = '', label, run }) {
  const v = useCountUp(value, run);
  const num = v.toLocaleString('en-ZA', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
  return (
    <div style={{ textAlign: 'center', padding: '8px 16px' }}>
      <div style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 700,
        fontSize: 'clamp(2.4rem,4vw,3.4rem)', color: '#fff', lineHeight: 1 }}>
        {prefix}{num}{suffix}</div>
      <div style={{ fontFamily: 'var(--font-cond)', fontWeight: 700, fontSize: 12.5,
        letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,.78)', marginTop: 10 }}>{label}</div>
    </div>
  );
}

function DStats() {
  const ref = React.useRef(null);
  const [run, setRun] = React.useState(false);
  React.useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setRun(true); io.disconnect(); } }, { threshold: .4 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return (
    <section ref={ref} style={{ background: 'linear-gradient(100deg, var(--ff-red-deep), var(--ff-red))',
      padding: '54px 30px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)',
        gap: 0 }}>
        <div style={{ borderRight: '1px solid rgba(255,255,255,.18)' }}><StatItem value={99.4} decimals={1} suffix="%" label="On-time delivery" run={run} /></div>
        <div style={{ borderRight: '1px solid rgba(255,255,255,.18)' }}><StatItem value={30} suffix="+" label="Years on the road" run={run} /></div>
        <div style={{ borderRight: '1px solid rgba(255,255,255,.18)' }}><StatItem value={4890} label="Parcels moved daily" run={run} /></div>
        <div><StatItem value={3} label="Metro depots" run={run} /></div>
      </div>
    </section>
  );
}
window.DStats = DStats;
window.StatItem = StatItem;
