import { useEffect, useState } from 'react'
import { profile } from '../data/profile'
import { useActiveSection } from '../hooks/useReveal'
import { GitHubIcon, LinkedInIcon } from './ui'

const items = [
  ['Projects', 'projects'],
  ['Now', 'now'],
  ['More', 'more'],
  ['Skills', 'skills'],
  ['Contact', 'contact'],
]
const ids = items.map(([, id]) => id)

export default function Nav() {
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)
  const [progress, setProgress] = useState(0)
  useActiveSection(ids, setActive)

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className="sticky top-0 z-30 border-b border-line/70 bg-bg/75 backdrop-blur-md">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="font-display text-base font-bold tracking-tight">
          <span className="text-accent">~</span>/aziz-hizem
        </a>

        <div className="hidden items-center gap-1 sm:flex">
          {items.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className={`rounded-full px-3 py-1.5 text-sm transition-colors ${
                active === id ? 'bg-surface-2 text-ink' : 'text-muted hover:text-ink'
              }`}
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3 text-muted">
          <a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition-colors hover:text-ink">
            <GitHubIcon />
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-ink">
            <LinkedInIcon />
          </a>
          <button
            type="button"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="ml-1 rounded-md p-1 hover:text-ink sm:hidden"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-line bg-bg/95 px-5 py-3 sm:hidden">
          {items.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="block py-2 text-sm text-muted hover:text-ink">
              {label}
            </a>
          ))}
        </div>
      )}

      <div className="absolute inset-x-0 bottom-0 h-px bg-line/60">
        <div className="h-full bg-accent transition-[width] duration-150" style={{ width: `${progress * 100}%` }} />
      </div>
    </nav>
  )
}
