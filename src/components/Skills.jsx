import { skills } from '../data/profile'
import { Section } from './ui'

export default function Skills() {
  return (
    <Section id="skills" number="04" eyebrow="Toolbox" title="Skills" intro="Everything listed here is used in at least one project above.">
      <div className="grid gap-4 sm:grid-cols-2">
        {skills.map((group, i) => (
          <div key={group.group} className="card reveal rounded-2xl border border-line bg-surface p-5" style={{ '--reveal-delay': `${(i % 2) * 80}ms` }}>
            <h3 className="label text-accent">{group.group}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-line bg-surface-2 px-3 py-1 text-sm text-ink/90 transition-colors hover:border-accent/50 hover:text-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
