import { profile } from '../data/profile'
import { GitHubIcon, LinkedInIcon, MailIcon } from './ui'

const secondary =
  'inline-flex items-center gap-2 rounded-full border border-line-2 px-4 py-2 text-sm font-medium transition-colors hover:border-accent/60 hover:bg-surface-2'

export default function Hero() {
  const { links } = profile
  return (
    <section id="top" className="relative overflow-hidden">
      {/* background: dot grid + drifting color glow */}
      <div className="dot-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 -top-56 h-[38rem] w-[38rem] animate-float rounded-full opacity-40 blur-3xl"
        style={{ background: 'radial-gradient(closest-side, rgba(63,214,176,0.45), rgba(110,168,255,0.18) 60%, transparent 100%)' }}
      />

      <div className="relative mx-auto w-full max-w-6xl px-5 pb-20 pt-20 sm:px-8 sm:pt-32">
        <div className="reveal mb-8 inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/80 px-3 py-1.5 text-xs text-muted backdrop-blur">
          <span className="h-2 w-2 animate-pulse-dot rounded-full bg-accent" />
          <span>
            <span className="text-ink">{profile.availability.label}</span> · {profile.availability.detail}
          </span>
        </div>

        <h1 className="reveal text-5xl font-extrabold leading-[1.02] sm:text-7xl" style={{ '--reveal-delay': '60ms' }}>
          {profile.name}
        </h1>
        <p className="reveal mt-4 font-display text-xl font-medium text-muted sm:text-2xl" style={{ '--reveal-delay': '120ms' }}>
          {profile.role}
        </p>

        <p className="reveal mt-8 max-w-2xl text-xl leading-relaxed text-ink/90 sm:text-2xl" style={{ '--reveal-delay': '180ms' }}>
          I build <span className="text-gradient font-semibold">delivery pipelines</span>,{' '}
          <span className="text-gradient font-semibold">computer vision systems</span> and the software around them.
        </p>

        <ul className="reveal mt-7 flex flex-wrap gap-2" style={{ '--reveal-delay': '240ms' }}>
          {profile.interests.map((item) => (
            <li key={item} className="rounded-full bg-accent-soft px-3 py-1 font-mono text-xs text-accent">
              {item}
            </li>
          ))}
        </ul>

        <div className="reveal mt-10 flex flex-wrap items-center gap-3" style={{ '--reveal-delay': '300ms' }}>
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
