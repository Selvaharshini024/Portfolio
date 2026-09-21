import { motion } from 'framer-motion'
import { Award, ExternalLink } from 'lucide-react'
import { certifications } from '../data/portfolioData'
import SectionHeading from './SectionHeading'

export default function Certifications() {
  return (
    <section id="certifications" className="section-pad">
      <div className="container-content">
        <SectionHeading index="05" title="Certifications" />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: (i % 3) * 0.06 }}
              className="flex items-start gap-3 rounded-xl border border-graphite/10 dark:border-ink/10 bg-paper-surface dark:bg-surface-raised/50 p-5 transition-colors hover:border-brass-700/40 dark:hover:border-brass/30"
            >
              <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brass-700/10 dark:bg-brass/10 text-brass-700 dark:text-brass">
                <Award size={16} strokeWidth={1.75} />
              </span>
              <div className="min-w-0">
                <h3 className="font-display font-semibold leading-snug text-graphite dark:text-ink">
                  {cert.name}
                </h3>
                <p className="mt-1 text-sm text-graphite-muted dark:text-ink-muted">{cert.org}</p>
                <p className="mt-1 font-mono text-xs text-graphite-muted/70 dark:text-ink-faint">{cert.date}</p>
                <a
                  href={cert.link ?? '#'}
                  aria-disabled={!cert.link}
                  className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-brass-700 dark:text-brass hover:underline"
                >
                  {cert.link ? (
                    <>
                      View Certificate <ExternalLink size={12} />
                    </>
                  ) : (
                    '[Add Certificate Link]'
                  )}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
