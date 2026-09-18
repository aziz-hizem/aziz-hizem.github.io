import { more } from '../data/projects'
import { Accented, ArrowIcon, Section, Tag } from './ui'

export default function More() {
  return (
    <Section id="more" number="03" eyebrow="Also on GitHub" title="More projects" intro="Smaller tools, games and prototypes. All public, all documented.">
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
            <div className="mt-5 flex gap-5 pt-1 text-sm">
              {p.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-1 font-medium text-ink/90 transition-colors hover:text-accent"
                >
                  {l.label} <ArrowIcon className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
