import useReveal from '../../hooks/useReveal'

/**
 * Wraps children in a fade-in-on-scroll. `delay` (ms) staggers grouped items.
 * Renders a plain div; pass `style`/`className` through as needed.
 */
export default function Reveal({ children, delay = 0, as: Tag = 'div', className = '', style, ...rest }) {
  const [ref, shown] = useReveal()
  return (
    <Tag
      ref={ref}
      className={`ff-reveal${shown ? ' is-in' : ''} ${className}`.trim()}
      style={{ transitionDelay: shown ? `${delay}ms` : '0ms', ...style }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
