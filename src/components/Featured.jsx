import { current, featured, projectMap } from '../data/projects'
import { Accented, LinkButton, Section, Tag } from './ui'

// Pill on the card's bottom edge naming the field of the next project, so a visitor knows
// what comes next before deciding to stop. Clicking it scrolls there.
function NextArrow({ next }) {
  return (
    <a
      href={`#${next.id}`}
      title={`Next: ${next.title}`}
      className="next-arrow absolute -bottom-5 right-6 z-10 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-surface py-1.5 pl-4 pr-1.5 text-xs font-medium text-muted shadow-[0_10px_30px_-12px_rgba(61,208,196,0.55)] transition-colors duration-300 hover:border-accent hover:text-ink sm:right-10"
    >
      <span>
        Next <span className="text-dim">·</span> <span className="font-semibold text-accent">{next.field}</span>
      </span>
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent text-accent-ink">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" aria-hidden="true">
          <path d="M12 5v14m0 0-6-6m6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </a>
  )
}

// One row under the heading: every field at a glance, each project name jumps to its card.
function ProjectMap() {
  return (
    <nav
      aria-label="Projects by field"
      className="reveal mb-10 flex flex-wrap gap-x-8 gap-y-4 rounded-2xl border border-line bg-surface/60 p-4 sm:px-5"
    >
      {projectMap.map((g) => (
        <div key={g.group} className="flex flex-wrap items-center gap-2">
          <span className="label mr-1 text-accent">{g.group}</span>
          {g.items.map(([name, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className="rounded-full border border-line bg-surface-2 px-3 py-1 text-sm text-ink/90 transition-colors hover:border-accent/60 hover:text-ink"
            >
              {name}
            </a>
          ))}
        </div>
      ))}
    </nav>
  )
}

function ProjectCard({ project, index, next }) {
  // Project 1 has its text on the left and the image on the right, then it alternates.
  const flip = index % 2 === 0
  const num = String(index + 1).padStart(2, '0')
  const tall = project.tallImage === true
  return (
    <article
      id={project.id}
      className="card reveal grid scroll-mt-24 gap-6 rounded-3xl border border-line bg-surface p-4 sm:p-5 lg:grid-cols-5 lg:gap-8"
    >
      <a
        href={project.links[0].href}
        target="_blank"
        rel="noreferrer"
        className={`group relative block self-center overflow-hidden rounded-2xl border border-line bg-bg ${tall ? 'p-2 lg:col-span-2' : 'lg:col-span-3'} ${flip ? 'lg:order-2' : ''}`}
      >
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          loading={index < 2 ? 'eager' : 'lazy'}
          className={`transition-transform duration-700 ease-out group-hover:scale-[1.03] ${
            tall ? 'mx-auto max-h-[34rem] w-auto rounded-xl object-contain' : 'w-full object-cover'
          }`}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <span className="pointer-events-none absolute bottom-3 right-3 rounded-full bg-bg/80 px-3 py-1 text-xs font-medium text-ink opacity-0 backdrop-blur transition-all duration-500 group-hover:opacity-100">
          Open repository ↗
        </span>
      </a>

      <div className={`flex flex-col ${tall ? 'lg:col-span-3' : 'lg:col-span-2'}`}>
        <p className="label flex items-center gap-3 text-accent">
          <span className="text-dim">{num}</span>
          {project.area}
        </p>
        <h3 className="mt-3 text-3xl font-bold">{project.title}</h3>
        <p className="mt-3 text-lg leading-snug text-ink/90">
          <Accented text={project.tagline} />
        </p>
        <p className="mt-3 text-[15px] leading-relaxed text-muted">
          <Accented text={project.description} />
        </p>

        <ul className="mt-4 space-y-2 text-sm text-muted">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-2.5">
              <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>
                <Accented text={h} />
              </span>
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

      {next && <NextArrow next={next} />}
    </article>
  )
}

export default function Featured() {
  return (
    <Section
      id="projects"
      number="01"
      eyebrow="Featured work"
      title="Projects"
      intro="From AI chatbots to delivery pipelines and computer vision on real hardware. Each one is documented and runnable from its repository."
    >
      <ProjectMap />
      <div className="space-y-12">
        {featured.map((p, i) => (
          <ProjectCard
            key={p.id}
            project={p}
            index={i}
            // the last featured card points to the project in progress
            next={featured[i + 1] ?? { id: 'now', title: current.title, field: 'Currently building' }}
          />
        ))}
      </div>
    </Section>
  )
}
