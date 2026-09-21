import { motion } from 'framer-motion'
import { ArrowDown, Download, Mail } from 'lucide-react'
import { profile } from '../data/portfolioData'
import HeroVisual from './HeroVisual'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center pt-24 pb-16 overflow-hidden"
    >
      {/* faint background gradient wash, kept quiet on purpose */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_80%_10%,rgba(214,167,86,0.10),transparent_70%)]"
      />

      <div className="container-content grid items-center gap-16 lg:grid-cols-[1.15fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="font-mono text-sm text-brass-700 dark:text-brass">Hi, I&apos;m {profile.firstName}</p>

          <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-[3.4rem] font-semibold leading-[1.08] tracking-tight text-graphite dark:text-ink">
            Computer Science Engineering student &amp; software developer.
          </h1>

          <p className="mt-6 max-w-lg text-lg text-graphite-muted dark:text-ink-muted">
            {profile.tagline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-full bg-brass-700 dark:bg-brass px-6 py-3 text-sm font-medium text-white dark:text-base transition-transform hover:-translate-y-0.5"
            >
              View Projects
            </a>
            <a
              href={profile.resumePath}
              download
              className="inline-flex items-center gap-2 rounded-full border border-graphite/20 dark:border-ink/15 px-6 py-3 text-sm font-medium text-graphite dark:text-ink transition-colors hover:border-brass-700/60 dark:hover:border-brass/60"
            >
              <Download size={15} strokeWidth={1.75} />
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-graphite-muted dark:text-ink-muted transition-colors hover:text-graphite dark:hover:text-ink"
            >
              <Mail size={15} strokeWidth={1.75} />
              Contact Me
            </a>
          </div>
        </motion.div>

        <HeroVisual />
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-graphite-muted dark:text-ink-faint hover:text-graphite dark:hover:text-ink transition-colors"
      >
        <ArrowDown size={20} strokeWidth={1.5} />
      </a>
    </section>
  )
}
