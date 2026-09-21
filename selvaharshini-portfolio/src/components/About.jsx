import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { profile, education } from '../data/portfolioData'
import SectionHeading from './SectionHeading'

export default function About() {
  return (
    <section id="about" className="section-pad">
      <div className="container-content">
        <SectionHeading index="01" title="About" />

        <div className="grid gap-14 lg:grid-cols-[1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="space-y-5 text-graphite-muted dark:text-ink-muted leading-relaxed"
          >
            {profile.about.map((para, i) => (
              <p key={i} className={i === 0 ? 'text-lg text-graphite dark:text-ink' : ''}>
                {para}
              </p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
          >
            <h3 className="mb-6 font-display text-lg font-semibold text-graphite dark:text-ink">
              Education
            </h3>
            <ol className="relative border-l border-graphite/15 dark:border-ink/10 pl-6 space-y-8">
              {education.map((ed) => (
                <li key={ed.institution} className="relative">
                  <span className="absolute -left-[1.95rem] top-1 grid h-6 w-6 place-items-center rounded-full bg-brass-700/10 dark:bg-brass/10 text-brass-700 dark:text-brass">
                    <GraduationCap size={13} strokeWidth={1.75} />
                  </span>
                  <p className="font-mono text-xs text-graphite-muted/70 dark:text-ink-faint">{ed.duration}</p>
                  <p className="mt-1 font-display font-semibold text-graphite dark:text-ink">
                    {ed.degree}
                  </p>
                  <p className="mt-1 text-sm text-graphite-muted dark:text-ink-muted">{ed.institution}</p>
                  <p className="mt-1 text-sm font-medium text-brass-700 dark:text-brass">{ed.detail}</p>
                </li>
              ))}
            </ol>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
