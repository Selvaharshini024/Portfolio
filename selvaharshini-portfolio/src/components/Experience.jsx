import { motion } from 'framer-motion'
import { Briefcase, ExternalLink } from 'lucide-react'
import { experience } from '../data/portfolioData'
import SectionHeading from './SectionHeading'

export default function Experience() {
  return (
    <section id="experience" className="section-pad bg-paper-surface/60 dark:bg-surface/40">
      <div className="container-content">
        <SectionHeading
          index="04"
          title="Experience"
          description="Internships where I got to work on real, shipped code."
        />

        <ol className="relative border-l border-graphite/15 dark:border-ink/10 pl-8 space-y-12 max-w-2xl">
          {experience.map((job, i) => (
            <motion.li
              key={job.company}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, ease: 'easeOut', delay: i * 0.08 }}
              className="relative"
            >
              <span className="absolute -left-[2.6rem] top-0.5 grid h-8 w-8 place-items-center rounded-full bg-brass-700/10 dark:bg-brass/10 text-brass-700 dark:text-brass">
                <Briefcase size={15} strokeWidth={1.75} />
              </span>

              <p className="font-mono text-xs text-graphite-muted/70 dark:text-ink-faint">{job.duration}</p>
              <h3 className="mt-1 font-display text-lg font-semibold text-graphite dark:text-ink">
                {job.role}
              </h3>
              <p className="text-sm font-medium text-brass-700 dark:text-brass">{job.company}</p>
              <p className="mt-3 text-sm leading-relaxed text-graphite-muted dark:text-ink-muted">
                {job.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {job.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded border border-graphite/10 dark:border-ink/10 px-2 py-0.5 font-mono text-[11px] text-graphite-muted dark:text-ink-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {job.certificate && (
                <a
                  href={job.certificate}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm text-graphite-muted dark:text-ink-muted transition-colors hover:text-graphite dark:hover:text-ink"
                >
                  <ExternalLink size={15} strokeWidth={1.75} />
                  View Certificate
                </a>
              )}
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
