import { featured } from '../data/projects'
import { LinkButton, Section, Tag } from './ui'

function ProjectCard({ project, index }) {
  const flip = index % 2 === 1
  return (
    <article className="grid gap-6 rounded-2xl border border-line bg-surface p-4 sm:p-5 lg:grid-cols-5 lg:gap-8">
      <a
        href={project.links[0].href}
        target="_blank"
        rel="noreferrer"
        className={`group relative overflow-hidden rounded-xl border border-line bg-bg lg:col-span-3 ${flip ? 'lg:order-2' : ''}`}
      >
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          loading={index < 2 ? 'eager' : 'lazy'}
          className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </a>

      <div className="flex flex-col lg:col-span-2">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">{project.area}</p>
        <h3 className="mt-2 text-2xl font-semibold tracking-tight">{project.title}</h3>
        <p className="mt-2 text-ink/90">{project.tagline}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted">{project.description}</p>

        <ul className="mt-4 space-y-1.5 text-sm text-muted">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-2">
              <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-2 lg:mt-auto lg:pt-6">
          {project.links.map((l, i) => (
            <LinkButton key={l.href} href={l.href} primary={i === 0}>
              {l.label}
            </LinkButton>
          ))}
        </div>
      </div>
    </article>
  )
}

export default function Featured() {
  return (
    <Section
      id="projects"
      eyebrow="Featured work"
      title="Projects"
      intro="From delivery pipelines to computer vision on real hardware. Each one is documented and runnable from its repository."
    >
      <div className="space-y-6">
        {featured.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </Section>
  )
}
