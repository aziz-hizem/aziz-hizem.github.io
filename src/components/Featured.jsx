import { current, featured } from '../data/projects'
import { WithNext } from './Next'
import { Accented, LinkButton, Section, Tag } from './ui'

function ProjectCard({ project, index }) {
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
        {project.description && (
          <p className="mt-3 text-[15px] leading-relaxed text-muted">
            <Accented text={project.description} />
          </p>
        )}

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
      innerClassName="mx-auto max-w-[60rem]"
    >
      {/* The section is narrower than the page and centered, so the heading lines up with the
          cards and there is room on the left for each card's "Next" connector. */}
      <div className="space-y-10">
        {featured.map((p, i) => {
          // the last featured card leads to the project in progress
          const next = featured[i + 1] ?? { id: 'now', title: current.title, short: current.title, field: 'Currently building' }
          return (
            <WithNext key={p.id} next={next}>
              <ProjectCard project={p} index={i} />
            </WithNext>
          )
        })}
      </div>
    </Section>
  )
}
