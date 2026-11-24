import { profile } from '../data/profile'
import { projectMap } from '../data/projects'
import CvButton from './CvButton'
import { Accented, GitHubIcon, LinkedInIcon, MailIcon } from './ui'

const secondary =
  'inline-flex items-center gap-2 rounded-full border border-line-2 px-4 py-2 text-sm font-medium transition-colors hover:border-accent/60 hover:bg-surface-2'

function Portrait() {
  return (
    <div className="relative w-fit shrink-0">
      {/* soft glow behind the portrait */}
      <div
        aria-hidden="true"
        className="absolute -inset-6 rounded-full opacity-60 blur-2xl"
        style={{ background: 'radial-gradient(closest-side, rgba(61,208,196,0.35), rgba(110,168,255,0.15) 65%, transparent)' }}
      />
      {/* gradient ring */}
      <div
        className="relative rounded-full p-[3px] shadow-[0_20px_60px_-20px_rgba(61,208,196,0.45)]"
        style={{ background: 'linear-gradient(135deg, #2e9c93, #537ebf, #2e9c93)' }}
      >
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
    <div className="glow-border inline-flex rounded-full">
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
    <section id="top" className="relative">
      {/* Background layers, clipped here so they never cover the content */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="dot-grid absolute inset-0" />
        <div
          className="absolute -left-40 -top-56 h-[38rem] w-[38rem] animate-float rounded-full opacity-40 blur-3xl"
          style={{ background: 'radial-gradient(closest-side, rgba(61,208,196,0.38), rgba(90,140,255,0.26) 60%, transparent 100%)' }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-5 pb-20 pt-10 sm:px-8 sm:pt-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:gap-10">
          <Portrait />
          <div>
            <h1 className="text-5xl font-extrabold leading-[1.02] sm:text-7xl">
              {profile.name}
            </h1>
            <p className="mt-1.5 font-display text-xl font-medium text-muted sm:text-2xl">
              <Accented text={profile.role} />
            </p>
            {profile.roleNote && (
              <p className="mt-1 text-sm text-dim">
                <Accented text={profile.roleNote} />
              </p>
            )}
            <div className="mt-5">
              <Availability />
            </div>
          </div>
        </div>

        <p className="mt-8 font-display text-3xl font-bold leading-tight sm:text-5xl">
          <Accented text={profile.headline} />
        </p>

        <p className="mt-2.5 max-w-3xl text-lg leading-relaxed text-muted sm:text-xl">
          <Accented text={profile.subline} />
        </p>

        {/* Project map: each field with its projects, every name jumps to its card */}
        <nav aria-label="Projects by field" className="mt-6 grid max-w-4xl grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-3">
          {projectMap.map((g) => (
            <div key={g.group} className="relative pl-4">
              <span aria-hidden="true" className="absolute bottom-0.5 left-0 top-0.5 w-[3px] rounded-full bg-accent/60" />
              <p className="inline-block rounded-full bg-accent-soft px-3 py-1 text-sm font-semibold text-accent">{g.group}</p>
              <ul className="mt-2 space-y-1">
                {g.items.map(([name, id]) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      className="group inline-flex items-center gap-1.5 text-[15px] text-ink/85 transition-colors hover:text-ink"
                    >
                      {name}
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        aria-hidden="true"
                        className="text-dim transition-all duration-300 group-hover:translate-y-0.5 group-hover:text-accent"
                      >
                        <path d="M12 5v14m0 0-6-6m6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        {/* Nothing in the hero uses "reveal": the first screen must show the moment the page loads */}
        <div className="mt-7 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-ink transition-all hover:brightness-110 hover:shadow-[0_8px_30px_-10px_rgba(61,208,196,0.7)]"
          >
            See my work
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-y-0.5"
            >
              <path d="M12 5v14m0 0-6-6m6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
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
          <CvButton className={secondary} />
        </div>
      </div>
    </section>
  )
}
