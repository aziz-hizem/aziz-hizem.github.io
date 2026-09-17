import { more } from '../data/projects'
import { ArrowIcon, Section, Tag } from './ui'

export default function More() {
  return (
    <Section id="more" eyebrow="Also on GitHub" title="More projects" intro="Smaller tools, games and prototypes. All public, all documented.">
      <ul className="grid gap-4 sm:grid-cols-2">
        {more.map((p) => (
          <li key={p.id} className="flex flex-col rounded-xl border border-line bg-surface p-4 transition-colors hover:border-muted">
            <h3 className="font-semibold">{p.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted">{p.summary}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {p.stack.map((s) => (
                <Tag key={s}>{s}</Tag>
              ))}
            </div>
            <div className="mt-4 flex gap-4 pt-1 text-sm">
              {p.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-ink/90 underline-offset-4 hover:text-accent hover:underline"
                >
                  {l.label} <ArrowIcon />
                </a>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
