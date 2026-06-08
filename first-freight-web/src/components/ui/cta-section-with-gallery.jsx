import * as React from 'react'
import { motion } from 'motion/react'

import { cn } from '@/lib/utils'

const SPRING_TRANSITION_CONFIG = {
  type: 'spring',
  stiffness: 100,
  damping: 16,
  mass: 0.75,
  restDelta: 0.005,
}

const filterVariants = {
  hidden: { opacity: 0, filter: 'blur(10px)' },
  visible: { opacity: 1, filter: 'blur(0px)' },
}

/* Programmatic masonry placement so the grid scales to any image count.
   Even indices fall in column 2, odd in column 1; each cell spans two row
   tracks, with column 1 offset down by one track for the staggered look.
   Reproduces the original 4-cell layout exactly and extends beyond it. */
function cellPlacement(index) {
  const col = index % 2 === 0 ? 2 : 1
  const k = Math.floor(index / 2)
  const rowStart = index % 2 === 0 ? 2 * k + 1 : 2 * k + 2
  return { gridColumn: `${col} / ${col + 1}`, gridRow: `${rowStart} / ${rowStart + 2}` }
}

export const ContainerStagger = React.forwardRef(({ transition, ...props }, ref) => {
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{
        staggerChildren: transition?.staggerChildren ?? 0.2,
        delayChildren: transition?.delayChildren ?? 0.2,
        duration: 0.3,
        ...transition,
      }}
      {...props}
    />
  )
})
ContainerStagger.displayName = 'ContainerStagger'

export const ContainerAnimated = React.forwardRef(({ transition, ...props }, ref) => {
  return (
    <motion.div
      ref={ref}
      variants={filterVariants}
      transition={{
        ...SPRING_TRANSITION_CONFIG,
        duration: 0.3,
        ...transition,
      }}
      {...props}
    />
  )
})
ContainerAnimated.displayName = 'ContainerAnimated'

export const GalleryGrid = React.forwardRef(({ className, children, style, ...props }, ref) => {
  // Alternating 50px / 150px tracks; (count + 1) tracks gives each cell a
  // two-track (200px) span with the staggered column offset.
  const trackCount = React.Children.count(children) + 1
  const gridTemplateRows = Array.from({ length: trackCount }, (_, i) => (i % 2 === 0 ? '50px' : '150px')).join(' ')
  return (
    <div
      ref={ref}
      className={cn('grid grid-cols-2 gap-4', className)}
      style={{ gridTemplateRows, ...style }}
      {...props}
    >
      {children}
    </div>
  )
})
GalleryGrid.displayName = 'GalleryGrid'

export const GalleryGridCell = React.forwardRef(({ className, transition, index, style, ...props }, ref) => {
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        delay: index * 0.06,
        ease: [0.23, 1, 0.32, 1],
        delayChildren: transition?.delayChildren ?? 0.2,
      }}
      whileHover={{
        scale: 1.05,
        zIndex: 30,
        boxShadow: '0 26px 60px rgba(0,0,0,.30)',
        transition: { duration: 0.35, ease: [0.2, 0.7, 0.2, 1] },
      }}
      className={cn('relative overflow-hidden rounded-xl', className)}
      style={{ ...cellPlacement(index), boxShadow: '0 10px 30px rgba(0,0,0,.12)', cursor: 'pointer', ...style }}
      {...props}
    />
  )
})
GalleryGridCell.displayName = 'GalleryGridCell'
