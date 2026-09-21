import { motion } from 'framer-motion'
import { skillGroups } from '../data/portfolioData'
import SectionHeading from './SectionHeading'

export default function Skills() {
  return (
    <section id="skills" className="section-pad bg-paper-surface/60 dark:bg-surface/40">
      <div className="container-content">
        <SectionHeading
          index="02"
          title="Skills"
          description="Technologies and tools I use to design, build, and ship software."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: (i % 3) * 0.06 }}
              className="rounded-xl border border-graphite/10 dark:border-ink/10 bg-paper-surface dark:bg-surface-raised/60 p-6 transition-colors hover:border-brass-700/40 dark:hover:border-brass/30"
            >
              <h3 className="font-display font-semibold text-graphite dark:text-ink">
                {group.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-graphite/10 dark:border-ink/10 bg-paper dark:bg-base/60 px-2.5 py-1 font-mono text-xs text-graphite-muted dark:text-ink-muted"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
