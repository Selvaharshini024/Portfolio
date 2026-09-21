import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { achievements } from '../data/portfolioData'
import SectionHeading from './SectionHeading'

export default function Achievements() {
  return (
    <section id="achievements" className="section-pad bg-paper-surface/60 dark:bg-surface/40">
      <div className="container-content">
        <SectionHeading index="06" title="Achievements" />

        <div className="grid gap-4 sm:grid-cols-2">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: i * 0.08 }}
              className="rounded-xl border border-graphite/10 dark:border-ink/10 bg-paper-surface dark:bg-surface-raised/50 p-6"
            >
              <span className="grid h-9 w-9 place-items-center rounded-full bg-brass-700/10 dark:bg-brass/10 text-brass-700 dark:text-brass">
                <Sparkles size={16} strokeWidth={1.75} />
              </span>
              <h3 className="mt-4 font-display font-semibold text-graphite dark:text-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-graphite-muted dark:text-ink-muted">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
