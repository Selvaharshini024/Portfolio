import { motion } from 'framer-motion'
import { Languages as LanguagesIcon } from 'lucide-react'
import { languages } from '../data/portfolioData'
import SectionHeading from './SectionHeading'

export default function Languages() {
  return (
    <section id="languages" className="section-pad">
      <div className="container-content">
        <SectionHeading index="06" title="Languages" description="Languages I speak and use to connect with people." />

        <div className="grid gap-4 sm:grid-cols-3">
          {languages.map((language, i) => (
            <motion.div
              key={language}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: i * 0.08 }}
              className="flex items-center gap-3 rounded-xl border border-graphite/10 dark:border-ink/10 bg-paper-surface dark:bg-surface-raised/50 p-5 transition-colors hover:border-brass-700/40 dark:hover:border-brass/30"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brass-700/10 dark:bg-brass/10 text-brass-700 dark:text-brass">
                <LanguagesIcon size={16} strokeWidth={1.75} />
              </span>
              <h3 className="font-display font-semibold text-graphite dark:text-ink">{language}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
