import { motion } from 'framer-motion'

export default function SectionHeading({ index, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="mb-12 sm:mb-16"
    >
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-sm text-brass-700 dark:text-brass">{index}</span>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-graphite dark:text-ink">
          {title}
        </h2>
      </div>
      <div className="mt-4 h-px w-16 bg-brass-700/50 dark:bg-brass/60" />
      {description && (
        <p className="mt-5 max-w-xl text-graphite-muted dark:text-ink-muted">
          {description}
        </p>
      )}
    </motion.div>
  )
}
