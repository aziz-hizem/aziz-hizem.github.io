import { profile } from '../data/profile'
import { GitHubIcon, LinkedInIcon } from './ui'

const items = [
  ['Projects', '#projects'],
  ['Now', '#now'],
  ['More', '#more'],
  ['Skills', '#skills'],
  ['Contact', '#contact'],
]

export default function Nav() {
  return (
    <nav className="sticky top-0 z-20 border-b border-line/70 bg-bg/80 backdrop-blur">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="font-mono text-sm font-medium tracking-tight">
          <span className="text-accent">~</span>/aziz-hizem
        </a>
        <div className="hidden items-center gap-6 text-sm text-muted sm:flex">
          {items.map(([label, href]) => (
            <a key={href} href={href} className="transition-colors hover:text-ink">
              {label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3 text-muted">
          <a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-ink">
            <GitHubIcon />
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-ink">
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </nav>
  )
}
