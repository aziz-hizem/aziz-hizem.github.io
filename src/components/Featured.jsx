import { useLayoutEffect, useRef } from 'react'
import { current, featured } from '../data/projects'
import { Accented, LinkButton, Section, Tag } from './ui'

// Left of each card, at its bottom: "Next", a line with light flowing down it, a bobbing arrow,
// then the next project's field and name on two lines. Clicking it scrolls there.
function NextConnector({ next }) {
  return (
    <a href={`#${next.id}`} aria-label={`Next: ${next.title}`} className="group flex w-full flex-col items-center">
      <span className="text-sm font-semibold text-ink/80 transition-colors group-hover:text-accent">Next</span>
      <span aria-hidden="true" className="flow-line mt-2 block h-14 w-[2px] rounded-full bg-accent/25" />
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        aria-hidden="true"
        className="scroll-bob -mt-2 text-accent"
      >
        <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="mt-1.5 w-full rounded-2xl border border-accent/40 bg-surface px-2 py-2 text-center shadow-[0_10px_30px_-14px_rgba(61,208,196,0.6)] transition-colors group-hover:border-accent">
        <span className="block text-xs font-semibold text-accent">{next.field}</span>
        <span className="mt-0.5 block text-sm font-medium leading-snug text-ink">{next.short ?? next.title}</span>
      </span>
    </a>
  )
}

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
  // Width of the empty space between the window's left edge and the cards, kept up to date so
  // each "Next" connector can sit exactly in the middle of it.
  const listRef = useRef(null)
  useLayoutEffect(() => {
    const el = listRef.current
    const update = () => el && el.style.setProperty('--gutter', `${el.getBoundingClientRect().left}px`)
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

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
          cards and there is room on the left for each card's "Next" connector: centered in that
          space and at the card's vertical middle. Narrower screens show it under the card. */}
      <div ref={listRef} className="space-y-10">
        {featured.map((p, i) => {
          // the last featured card leads to the project in progress
          const next = featured[i + 1] ?? { id: 'now', title: current.title, short: current.title, field: 'Currently building' }
          return (
            <div key={p.id} className="relative">
              <ProjectCard project={p} index={i} />
              <div
                className="absolute top-1/2 hidden w-[7.5rem] -translate-y-1/2 xl:block"
                style={{ left: 'calc(var(--gutter, 0px) / -2 - 3.75rem)' }}
              >
                <NextConnector next={next} />
              </div>
              <div className="mt-6 w-40 pl-6 xl:hidden">
                <NextConnector next={next} />
              </div>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
