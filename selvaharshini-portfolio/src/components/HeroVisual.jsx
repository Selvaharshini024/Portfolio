import { motion } from 'framer-motion'
import { profile } from '../data/portfolioData'

const nodes = [
  { x: 40, y: 30 }, { x: 140, y: 70 }, { x: 90, y: 150 },
  { x: 220, y: 40 }, { x: 250, y: 140 }, { x: 170, y: 190 },
]

const edges = [[0, 1], [1, 2], [1, 3], [3, 4], [2, 5], [4, 5]]

function NodeField() {
  return (
    <svg
      viewBox="0 0 280 220"
      className="absolute -right-6 -top-10 h-56 w-72 opacity-40 dark:opacity-60"
      aria-hidden="true"
    >
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].x} y1={nodes[a].y}
          x2={nodes[b].x} y2={nodes[b].y}
          stroke="#D6A756" strokeWidth="1" strokeOpacity="0.35"
        />
      ))}
      {nodes.map((n, i) => (
        <circle key={i} cx={n.x} cy={n.y} r={i % 2 === 0 ? 3 : 4.5} fill="#D6A756" fillOpacity="0.7" />
      ))}
    </svg>
  )
}

const codeLines = [
  { n: 1, tokens: [{ t: 'const', c: 'kw' }, { t: ' developer ', c: '' }, { t: '=', c: 'op' }, { t: ' {', c: '' }] },
  { n: 2, tokens: [{ t: '  name:', c: 'key' }, { t: " 'Selvaharshini C',", c: 'str' }] },
  { n: 3, tokens: [{ t: '  role:', c: 'key' }, { t: " 'CSE Student',", c: 'str' }] },
  { n: 4, tokens: [{ t: '  stack:', c: 'key' }, { t: ' [', c: '' }, { t: "'React'", c: 'str' }, { t: ', ', c: '' }, { t: "'Node'", c: 'str' }, { t: ', ', c: '' }, { t: "'MongoDB'", c: 'str' }, { t: '],', c: '' }] },
  { n: 5, tokens: [{ t: '  focus:', c: 'key' }, { t: ' [', c: '' }, { t: "'full-stack'", c: 'str' }, { t: ', ', c: '' }, { t: "'AI'", c: 'str' }, { t: '],', c: '' }] },
  { n: 6, tokens: [{ t: '  learning:', c: 'key' }, { t: ' true,', c: 'kw' }] },
  { n: 7, tokens: [{ t: '};', c: '' }] },
]

const tokenColor = {
  kw: 'text-brass-light',
  str: 'text-emerald-300/90',
  key: 'text-sky-300/90',
  op: 'text-ink-faint',
  '': 'text-ink/90',
}

export default function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
      className="relative mx-auto w-full max-w-md"
    >
      <NodeField />

      <div className="relative rounded-2xl border border-ink/10 bg-surface/90 shadow-soft backdrop-blur-sm overflow-hidden animate-floatSlow">
        <div className="flex justify-center border-b border-ink/10 bg-surface-raised/80 px-5 pt-5">
          <img
            src={profile.photoUrl}
            alt={`${profile.name} profile portrait`}
            className="h-44 w-44 rounded-full border-4 border-brass/60 object-cover shadow-soft"
          />
        </div>

        {/* window chrome */}
        <div className="flex items-center gap-1.5 border-b border-ink/10 bg-surface-raised/80 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#F17C67]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#F2C05B]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#68C77F]" />
          <span className="ml-3 font-mono text-xs text-ink-faint">profile.js</span>
        </div>

        <pre className="px-5 py-5 font-mono text-[13px] leading-6 overflow-x-auto">
          <code>
            {codeLines.map((line) => (
              <div key={line.n} className="flex">
                <span className="mr-4 w-4 select-none text-right text-ink-faint">{line.n}</span>
                <span>
                  {line.tokens.map((tok, i) => (
                    <span key={i} className={tokenColor[tok.c]}>{tok.t}</span>
                  ))}
                </span>
              </div>
            ))}
            <div className="flex">
              <span className="mr-4 w-4 select-none text-right text-ink-faint"> </span>
              <span className="inline-block h-4 w-2 translate-y-0.5 bg-brass animate-blink" aria-hidden="true" />
            </div>
          </code>
        </pre>
      </div>
    </motion.div>
  )
}
