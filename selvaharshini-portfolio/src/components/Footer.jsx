import { Linkedin, Github, Mail } from 'lucide-react'
import { profile } from '../data/portfolioData'

export default function Footer() {
  return (
    <footer className="border-t border-graphite/10 dark:border-ink/10 py-8">
      <div className="container-content flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <p className="text-sm text-graphite-muted dark:text-ink-muted">
          © 2026 {profile.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-graphite-muted dark:text-ink-muted transition-colors hover:text-brass-700 dark:hover:text-brass"
          >
            <Linkedin size={17} strokeWidth={1.75} />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-graphite-muted dark:text-ink-muted transition-colors hover:text-brass-700 dark:hover:text-brass"
          >
            <Github size={17} strokeWidth={1.75} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="text-graphite-muted dark:text-ink-muted transition-colors hover:text-brass-700 dark:hover:text-brass"
          >
            <Mail size={17} strokeWidth={1.75} />
          </a>
        </div>
      </div>
    </footer>
  )
}
