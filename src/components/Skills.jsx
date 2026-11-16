import { skills } from '../data/profile'
import { Section } from './ui'

function PythonLogo() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#3d7fc1" d="M11.9 2c-5 0-4.7 2.2-4.7 2.2v2.2h4.8v.7H5.3S2 6.7 2 11.9s2.8 5 2.8 5h1.7v-2.4s-.1-2.8 2.8-2.8h4.8s2.7 0 2.7-2.6V4.8S17.2 2 11.9 2Zm-2.6 1.5a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8Z" />
      <path fill="#f5c93b" d="M12.1 22c5 0 4.7-2.2 4.7-2.2v-2.2H12v-.7h6.7S22 17.3 22 12.1s-2.8-5-2.8-5h-1.7v2.4s.1 2.8-2.8 2.8H9.9s-2.7 0-2.7 2.6v4.3S6.8 22 12.1 22Zm2.6-1.5a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8Z" />
    </svg>
  )
}

export default function Skills() {
  return (
    <Section id="skills" number="04" eyebrow="Toolbox" title="Skills" intro="What I use, from internships, coursework and the projects above.">
      <div className="grid gap-4 sm:grid-cols-2">
        {skills.map((group, i) => (
          <div
            key={group.group}
            className={`card reveal rounded-2xl border border-line bg-surface p-5 ${
              skills.length % 2 === 1 && i === skills.length - 1 ? 'sm:col-span-2' : ''
            }`}
            style={{ '--reveal-delay': `${(i % 2) * 80}ms` }}
          >
            <h3 className="label text-accent">{group.group}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => {
                const { name, featured } = typeof item === 'string' ? { name: item } : item
                return featured ? (
                  // Featured skill: its own line, gradient border, glow and logo
                  <li key={name} className="mb-1 flex basis-full">
                    <span className="rounded-full bg-gradient-to-r from-accent to-accent-2 p-[1.5px] shadow-[0_0_28px_-6px_rgba(61,208,196,0.7)]">
                      <span className="flex items-center gap-2 rounded-full bg-surface-2 px-4 py-1.5">
                        {name.startsWith('Python') && <PythonLogo />}
                        <span className="text-gradient text-lg font-bold">{name}</span>
                      </span>
                    </span>
                  </li>
                ) : (
                  <li
                    key={name}
                    className="rounded-full border border-line bg-surface-2 px-3 py-1 text-sm text-ink/90 transition-colors hover:border-accent/50 hover:text-ink"
                  >
                    {name}
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
