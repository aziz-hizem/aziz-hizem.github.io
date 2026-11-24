import { more } from '../data/projects'
import { WithNext } from './Next'
import { Accented, ArrowIcon, Section, Tag } from './ui'

export default function More() {
  return (
    <Section
      id="more"
      number="03"
      eyebrow="Also on GitHub"
      title="More projects"
      intro="Other apps, tools and prototypes I have built."
      innerClassName="mx-auto max-w-[60rem]"
    >
      <WithNext next={{ id: 'skills', field: 'Toolbox', short: 'Skills' }}>
        <ul className="grid gap-4 sm:grid-cols-2">
          {more.map((p, i) => (
            <li
              key={p.id}
              className="card reveal flex flex-col rounded-2xl border border-line bg-surface p-5"
              style={{ '--reveal-delay': `${(i % 2) * 80}ms` }}
            >
              <h3 className="text-xl font-bold">{p.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">
                <Accented text={p.summary} />
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-5 pt-1 text-sm">
                {p.note && (
                  <span className="inline-flex items-center gap-1.5 text-dim">
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <rect x="5" y="11" width="14" height="10" rx="2" />
                      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
                    </svg>
                    {p.note}
                  </span>
                )}
                {p.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-1 font-medium text-ink/90 transition-colors hover:text-accent"
                  >
                    {l.label}{' '}
                    <ArrowIcon className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </WithNext>
    </Section>
  )
}
