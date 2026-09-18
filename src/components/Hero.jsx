import { profile } from '../data/profile'
import { Accented, GitHubIcon, LinkedInIcon, MailIcon } from './ui'

const secondary =
  'inline-flex items-center gap-2 rounded-full border border-line-2 px-4 py-2 text-sm font-medium transition-colors hover:border-accent/60 hover:bg-surface-2'

function Portrait() {
  return (
    <div className="reveal relative w-fit shrink-0" style={{ '--reveal-delay': '40ms' }}>
      {/* soft glow behind the portrait */}
      <div
        aria-hidden="true"
        className="absolute -inset-6 rounded-full opacity-60 blur-2xl"
        style={{ background: 'radial-gradient(closest-side, rgba(63,214,176,0.35), rgba(110,168,255,0.15) 65%, transparent)' }}
      />
      {/* gradient ring */}
      <div className="relative rounded-full bg-gradient-to-br from-accent via-accent-2 to-accent p-[3px] shadow-[0_20px_60px_-20px_rgba(63,214,176,0.45)]">
        <div className="rounded-full bg-bg p-[3px]">
          <img
            src="/profile.webp"
            alt={`Portrait of ${profile.name}`}
            width="160"
            height="160"
            className="h-32 w-32 rounded-full object-cover sm:h-40 sm:w-40"
          />
        </div>
      </div>
    </div>
  )
}

function Availability() {
  const { label, detail } = profile.availability
  return (
    <div className="reveal glow-border inline-flex rounded-full">
      <div className="inline-flex items-center gap-2.5 rounded-full bg-surface px-3.5 py-1.5 text-xs text-muted">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent" aria-hidden="true">
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18" />
        </svg>
        <span>
          <span className="font-medium text-ink">{label}</span> · <Accented text={detail} />
        </span>
      </div>
    </div>
  )
}

export default function Hero() {
  const { links } = profile
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="dot-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 -top-56 h-[38rem] w-[38rem] animate-float rounded-full opacity-40 blur-3xl"
        style={{ background: 'radial-gradient(closest-side, rgba(63,214,176,0.45), rgba(110,168,255,0.18) 60%, transparent 100%)' }}
      />

      <div className="relative mx-auto w-full max-w-6xl px-5 pb-20 pt-16 sm:px-8 sm:pt-28">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:gap-10">
          <Portrait />
          <div>
            <div className="mb-6">
              <Availability />
            </div>
            <h1 className="reveal text-5xl font-extrabold leading-[1.02] sm:text-7xl" style={{ '--reveal-delay': '60ms' }}>
              {profile.name}
            </h1>
            <p className="reveal mt-4 font-display text-xl font-medium text-muted sm:text-2xl" style={{ '--reveal-delay': '120ms' }}>
              <Accented text={profile.role} />
            </p>
            {profile.roleNote && (
              <p className="reveal mt-1.5 text-sm text-dim" style={{ '--reveal-delay': '150ms' }}>
                <Accented text={profile.roleNote} />
              </p>
            )}
          </div>
        </div>

        <p className="reveal mt-10 max-w-3xl text-xl leading-relaxed text-ink/90 sm:text-2xl" style={{ '--reveal-delay': '180ms' }}>
          <Accented text={profile.headline} />
        </p>

        <ul className="reveal mt-7 flex flex-wrap gap-2" style={{ '--reveal-delay': '360ms' }}>
          {profile.interests.map((item) => (
            <li key={item} className="rounded-full bg-accent-soft px-3 py-1 text-sm font-medium text-accent">
              {item}
            </li>
          ))}
        </ul>

        {/* No "reveal" class here on purpose: the buttons must be visible the moment the page loads */}
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-ink transition-all hover:brightness-110 hover:shadow-[0_8px_30px_-10px_rgba(63,214,176,0.7)]"
          >
            See my work
          </a>
          <a href={links.github} target="_blank" rel="noreferrer" className={secondary}>
            <GitHubIcon size={16} /> GitHub
          </a>
          <a href={links.linkedin} target="_blank" rel="noreferrer" className={secondary}>
            <LinkedInIcon size={16} /> LinkedIn
          </a>
          <a href={`mailto:${links.email}`} className={secondary}>
            <MailIcon size={16} /> Email
          </a>
          {links.cv && (
            <a href={links.cv} target="_blank" rel="noreferrer" className={secondary}>
              CV (PDF)
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
