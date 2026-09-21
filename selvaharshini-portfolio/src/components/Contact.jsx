import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Linkedin, Github, Send, CheckCircle2 } from 'lucide-react'
import { profile } from '../data/portfolioData'
import SectionHeading from './SectionHeading'

const contactLinks = [
  { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: profile.phone, href: `tel:${profile.phone.replace(/\s+/g, '')}` },
  { icon: Linkedin, label: 'linkedin.com/in/selvaharshini06', href: profile.linkedin },
  { icon: Github, label: 'github.com/Selvaharshini024', href: profile.github },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sent

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: wire this up to Formspree, EmailJS, or your own backend.
    // e.g. Formspree:
    //   fetch('https://formspree.io/f/your-form-id', {
    //     method: 'POST',
    //     headers: { Accept: 'application/json' },
    //     body: new FormData(e.target),
    //   })
    setStatus('sent')
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="section-pad">
      <div className="container-content">
        <SectionHeading
          index="07"
          title="Contact"
          description="Have an opening, a project, or just want to say hello? I'd like to hear from you."
        />

        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="space-y-4"
          >
            {contactLinks.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                className="flex items-center gap-3 rounded-xl border border-graphite/10 dark:border-ink/10 bg-paper-surface dark:bg-surface-raised/50 p-4 text-sm text-graphite-muted dark:text-ink-muted transition-colors hover:border-brass-700/40 dark:hover:border-brass/30 hover:text-graphite dark:hover:text-ink"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brass-700/10 dark:bg-brass/10 text-brass-700 dark:text-brass">
                  <Icon size={16} strokeWidth={1.75} />
                </span>
                <span className="break-all">{label}</span>
              </a>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, ease: 'easeOut', delay: 0.08 }}
            onSubmit={handleSubmit}
            className="rounded-xl border border-graphite/10 dark:border-ink/10 bg-paper-surface dark:bg-surface-raised/50 p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label htmlFor="name" className="mb-1.5 block text-sm text-graphite-muted dark:text-ink-muted">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-graphite/15 dark:border-ink/15 bg-paper dark:bg-base px-3.5 py-2.5 text-sm text-graphite dark:text-ink outline-none transition-colors focus:border-brass-700 dark:focus:border-brass"
                  placeholder="Your name"
                />
              </div>
              <div className="sm:col-span-1">
                <label htmlFor="email" className="mb-1.5 block text-sm text-graphite-muted dark:text-ink-muted">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-graphite/15 dark:border-ink/15 bg-paper dark:bg-base px-3.5 py-2.5 text-sm text-graphite dark:text-ink outline-none transition-colors focus:border-brass-700 dark:focus:border-brass"
                  placeholder="you@example.com"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="mb-1.5 block text-sm text-graphite-muted dark:text-ink-muted">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full resize-none rounded-lg border border-graphite/15 dark:border-ink/15 bg-paper dark:bg-base px-3.5 py-2.5 text-sm text-graphite dark:text-ink outline-none transition-colors focus:border-brass-700 dark:focus:border-brass"
                  placeholder="Tell me a little about the role or project..."
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-brass-700 dark:bg-brass px-6 py-2.5 text-sm font-medium text-white dark:text-base transition-transform hover:-translate-y-0.5"
            >
              <Send size={15} strokeWidth={1.75} />
              Send Message
            </button>

            {status === 'sent' && (
              <p role="status" className="mt-4 flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 size={15} />
                Thanks! This form isn't connected to a backend yet — see the code comment in
                Contact.jsx to wire it up to Formspree, EmailJS, or your own API.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}
