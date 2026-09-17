import { skills } from '../data/profile'
import { Section } from './ui'

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Toolbox" title="Skills" intro="Everything listed here is used in at least one project above.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((group) => (
          <div key={group.group} className="rounded-xl border border-line bg-surface p-4">
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-accent">{group.group}</h3>
            <ul className="mt-3 space-y-1.5 text-sm text-ink/90">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
