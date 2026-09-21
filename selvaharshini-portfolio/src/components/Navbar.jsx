import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../data/portfolioData'
import ThemeToggle from './ThemeToggle'

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const handleLinkClick = () => setOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'bg-paper/85 dark:bg-base/85 backdrop-blur-md border-b border-graphite/10 dark:border-ink/10'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="container-content flex h-16 items-center justify-between" aria-label="Primary">
        <a
          href="#home"
          className="font-display text-lg font-semibold tracking-tight text-graphite dark:text-ink"
        >
          Selva<span className="text-brass-700 dark:text-brass">harshini</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-graphite-muted dark:text-ink-muted transition-colors hover:text-graphite dark:hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <a
            href="#contact"
            className="rounded-full border border-brass-700/40 dark:border-brass/40 px-4 py-1.5 text-sm text-graphite dark:text-ink transition-colors hover:bg-brass-700/10 dark:hover:bg-brass/10"
          >
            Let's talk
          </a>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="grid h-9 w-9 place-items-center rounded-full border border-graphite/15 dark:border-ink/10 text-graphite dark:text-ink"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-graphite/10 dark:border-ink/10 bg-paper dark:bg-base"
        >
          <ul className="container-content flex flex-col py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleLinkClick}
                  className="block py-3 text-base text-graphite dark:text-ink border-b border-graphite/5 dark:border-ink/5 last:border-none"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
