import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle({ theme, toggleTheme }) {
  const isDark = theme === 'dark'
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      aria-pressed={isDark}
      className="grid h-9 w-9 place-items-center rounded-full border border-graphite/15 dark:border-ink/10
                 text-graphite dark:text-ink transition-colors hover:border-brass-700/50 dark:hover:border-brass/50"
    >
      {isDark ? <Sun size={16} strokeWidth={1.75} /> : <Moon size={16} strokeWidth={1.75} />}
    </button>
  )
}
