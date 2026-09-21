import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import { projects } from '../data/portfolioData'
import SectionHeading from './SectionHeading'

const filters = [
  { key: 'all', label: 'All' },
  { key: 'fullstack', label: 'Full Stack' },
  { key: 'web', label: 'Web' },
  { key: 'iot', label: 'IoT' },
]

// A different quiet accent per project, cycled — used as a thin top border only.
const accents = ['#D6A756', '#5B9BD5', '#68A67A', '#B57EDC', '#D98C6B']

export default function Projects() {
  const [active, setActive] = useState('all')

  const visible = useMemo(
    () => (active === 'all' ? projects : projects.filter((p) => p.category === active)),
    [active],
  )

  return (
    <section id="projects" className="section-pad">
      <div className="container-content">
        <SectionHeading
          index="03"
          title="Projects"
          description="A selection of full-stack, web, and IoT projects I've built end to end."
        />

        <div className="mb-10 flex flex-wrap gap-2" role="tablist" aria-label="Filter projects by category">
          {filters.map((f) => (
            <button
              key={f.key}
              role="tab"
              aria-selected={active === f.key}
              onClick={() => setActive(f.key)}
              className={`rounded-full px-4 py-1.5 text-sm transition-colors ${
                active === f.key
                  ? 'bg-brass-700 dark:bg-brass text-white dark:text-base'
                  : 'border border-graphite/15 dark:border-ink/10 text-graphite-muted dark:text-ink-muted hover:text-graphite dark:hover:text-ink'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {visible.map((project, i) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: 'easeOut', delay: i * 0.04 }}
                className="group relative overflow-hidden rounded-xl border border-graphite/10 dark:border-ink/10 bg-paper-surface dark:bg-surface-raised/50 p-6 transition-transform hover:-translate-y-1"
                style={{ borderTopColor: accents[i % accents.length], borderTopWidth: '3px' }}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-graphite dark:text-ink">
                      {project.name}
                    </h3>
                    <p className="text-sm text-graphite-muted dark:text-ink-muted">{project.subtitle}</p>
                  </div>
                  <span className="whitespace-nowrap font-mono text-xs text-graphite-muted/70 dark:text-ink-faint">
                    {project.date}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-graphite-muted dark:text-ink-muted">
                  {project.description}
                </p>

                <ul className="mt-4 space-y-1.5">
                  {project.features.map((feat) => (
                    <li key={feat} className="flex gap-2 text-sm text-graphite dark:text-ink/90">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brass-700 dark:bg-brass" />
                      {feat}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded border border-graphite/10 dark:border-ink/10 px-2 py-0.5 font-mono text-[11px] text-graphite-muted dark:text-ink-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {(project.github || project.demo) && (
                  <div className="mt-6 flex gap-3 border-t border-graphite/10 dark:border-ink/10 pt-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        title="View on GitHub"
                        className="inline-flex items-center gap-1.5 text-sm text-graphite-muted dark:text-ink-muted transition-colors hover:text-graphite dark:hover:text-ink"
                      >
                        <Github size={15} strokeWidth={1.75} />
                        View Project
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        title="View live demo"
                        className="inline-flex items-center gap-1.5 text-sm text-graphite-muted dark:text-ink-muted transition-colors hover:text-graphite dark:hover:text-ink"
                      >
                        <ExternalLink size={15} strokeWidth={1.75} />
                        Live Demo
                      </a>
                    )}
                  </div>
                )}
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
