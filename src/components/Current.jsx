import { current } from '../data/projects'
import { WithNext } from './Next'
import { Accented, LinkButton, Section, Tag } from './ui'

export default function Current() {
  const p = current
  return (
    <Section
      id="now"
      number="02"
      eyebrow="Currently building"
      title={p.title}
      intro={p.tagline}
      innerClassName="mx-auto max-w-[60rem]"
    >
      <WithNext next={{ id: 'more', field: 'Also on GitHub', short: 'More projects' }}>
        <div className="card reveal relative overflow-hidden rounded-3xl border border-accent/25 bg-surface p-4 sm:p-5">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full opacity-30 blur-3xl"
            style={{ background: 'radial-gradient(closest-side, rgba(61,208,196,0.6), transparent)' }}
          />
          <div className="relative grid gap-6 lg:grid-cols-5 lg:gap-8">
            <a
              href={p.links[0].href}
              target="_blank"
              rel="noreferrer"
              className="block self-center overflow-hidden rounded-2xl border border-line bg-bg lg:col-span-3"
            >
              <img src={p.image} alt={`${p.title} diagram`} loading="lazy" className="w-full object-cover" />
            </a>

            <div className="flex flex-col lg:col-span-2">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-2.5 py-0.5 text-xs font-medium text-accent">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                  </svg>
                  {p.status}
                </span>
                <span className="text-xs text-muted">Actively developed</span>
              </div>
              <p className="mt-4 text-lg leading-snug text-ink/90">
                <Accented text={p.description} />
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                {p.highlights.map((h) => (
                  <li key={h} className="flex gap-2.5">
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>
                      <Accented text={h} />
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </div>
              <div className="mt-6 flex gap-2 lg:mt-auto lg:pt-6">
                {p.links.map((l, i) => (
                  <LinkButton key={l.href} href={l.href} primary={i === 0}>
                    {l.label}
                  </LinkButton>
                ))}
              </div>
            </div>
          </div>
        </div>
      </WithNext>
    </Section>
  )
}
