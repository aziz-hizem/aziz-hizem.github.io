import { current } from '../data/projects'
import { LinkButton, Section, Tag } from './ui'

function List({ title, items, marker }) {
  return (
    <div>
      <h4 className="font-mono text-xs uppercase tracking-[0.18em] text-muted">{title}</h4>
      <ul className="mt-3 space-y-2 text-sm">
        {items.map((item) => (
          <li key={item} className="flex gap-2.5">
            <span className="mt-0.5 shrink-0 font-mono text-xs text-accent">{marker}</span>
            <span className="text-ink/90">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Current() {
  const p = current
  return (
    <Section id="now" eyebrow="Currently building" title={p.title} intro={p.tagline}>
      <div className="grid gap-6 rounded-2xl border border-accent/30 bg-surface p-4 sm:p-6 lg:grid-cols-5 lg:gap-8">
        <div className="lg:col-span-2">
          <a href={p.links[0].href} target="_blank" rel="noreferrer" className="block overflow-hidden rounded-xl border border-line bg-bg">
            <img src={p.image} alt={`${p.title} screenshot`} loading="lazy" className="aspect-video w-full object-cover" />
          </a>
          <div className="mt-4 flex items-center gap-2">
            <span className="rounded-md bg-accent-soft px-2 py-0.5 font-mono text-[11px] text-accent">{p.status}</span>
            <span className="text-xs text-muted">Actively developed</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted">{p.description}</p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {p.stack.map((s) => (
              <Tag key={s}>{s}</Tag>
            ))}
          </div>
          <div className="mt-5 flex gap-2">
            {p.links.map((l, i) => (
              <LinkButton key={l.href} href={l.href} primary={i === 0}>
                {l.label}
              </LinkButton>
            ))}
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:col-span-3">
          <List title="Works today" items={p.works} marker="✓" />
          <List title="Roadmap" items={p.roadmap} marker="→" />
          <div className="sm:col-span-2 rounded-xl border border-line bg-surface-2 p-4 text-sm text-muted">
            <span className="font-medium text-ink">Side exploration. </span>
            {p.exploration}
          </div>
        </div>
      </div>
    </Section>
  )
}
