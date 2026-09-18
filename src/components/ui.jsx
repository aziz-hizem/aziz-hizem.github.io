// Renders a string, turning [[anything in double brackets]] into gradient-highlighted words.
// Works in the data files too, e.g. tagline: 'Counts pills and [[flags color anomalies]].'
export function Accented({ text }) {
  const parts = String(text).split(/\[\[([^\]]+)\]\]/g)
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} className="text-gradient font-semibold">
        {part}
      </span>
    ) : (
      <span key={i}>{part}</span>
    ),
  )
}

export function Section({ id, number, eyebrow, title, intro, children }) {
  return (
    <section id={id} className="mx-auto w-full max-w-6xl px-5 py-24 sm:px-8">
      <header className="reveal mb-12 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <p className="label mb-3 flex items-center gap-3 text-accent">
            {number && <span className="text-dim">{number}</span>}
            {eyebrow}
          </p>
          <h2 className="text-4xl font-bold sm:text-5xl">
            <Accented text={title} />
          </h2>
          {intro && (
            <p className="mt-4 text-lg text-muted">
              <Accented text={intro} />
            </p>
          )}
        </div>
      </header>
      {children}
    </section>
  )
}

export function Tag({ children }) {
  return (
    <span className="rounded-full border border-line bg-surface-2 px-2.5 py-0.5 text-xs font-medium text-muted">
      {children}
    </span>
  )
}

export function LinkButton({ href, children, primary = false, external = true }) {
  const base =
    'group inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300'
  const style = primary
    ? 'bg-accent text-accent-ink hover:brightness-110 hover:shadow-[0_8px_30px_-10px_rgba(63,214,176,0.7)]'
    : 'border border-line-2 text-ink hover:border-accent/60 hover:bg-surface-2'
  return (
    <a href={href} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})} className={`${base} ${style}`}>
      {children}
      <ArrowIcon className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  )
}

export function ArrowIcon({ className = '' }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className={className}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  )
}

export function GitHubIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.7 5.39-5.26 5.68.41.36.78 1.06.78 2.13v3.16c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  )
}

export function LinkedInIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  )
}

export function MailIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  )
}
