import { profile } from '../data/profile'
import { GitHubIcon, LinkedInIcon, MailIcon } from './ui'

export default function Hero() {
  const { links } = profile
  return (
    <section id="top" className="mx-auto w-full max-w-6xl px-5 pb-16 pt-20 sm:px-8 sm:pt-28">
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs text-muted">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
        </span>
        {profile.availability.label} · {profile.availability.detail}
      </div>

      <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">{profile.name}</h1>
      <p className="mt-3 text-lg text-muted sm:text-xl">{profile.role}</p>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/90 sm:text-xl">{profile.headline}</p>

      <ul className="mt-6 flex flex-wrap gap-2">
        {profile.interests.map((item) => (
          <li key={item} className="rounded-md bg-accent-soft px-2.5 py-1 font-mono text-xs text-accent">
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-10 flex flex-wrap items-center gap-3">
        <a
          href="#projects"
          className="inline-flex items-center rounded-lg bg-accent px-4 py-2 text-sm font-medium text-bg transition-colors hover:bg-[#f0c661]"
        >
          See my work
        </a>
        <a
          href={links.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-line px-4 py-2 text-sm font-medium transition-colors hover:border-muted hover:bg-surface-2"
        >
          <GitHubIcon size={16} /> GitHub
        </a>
        <a
          href={links.linkedin}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-line px-4 py-2 text-sm font-medium transition-colors hover:border-muted hover:bg-surface-2"
        >
          <LinkedInIcon size={16} /> LinkedIn
        </a>
        <a
          href={`mailto:${links.email}`}
          className="inline-flex items-center gap-2 rounded-lg border border-line px-4 py-2 text-sm font-medium transition-colors hover:border-muted hover:bg-surface-2"
        >
          <MailIcon size={16} /> Email
        </a>
        {links.cv && (
          <a
            href={links.cv}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-line px-4 py-2 text-sm font-medium transition-colors hover:border-muted hover:bg-surface-2"
          >
            CV (PDF)
          </a>
        )}
      </div>
    </section>
  )
}
