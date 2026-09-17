import { profile } from '../data/profile'
import { GitHubIcon, LinkedInIcon, MailIcon } from './ui'

export default function Contact() {
  const { links, availability } = profile
  return (
    <section id="contact" className="mx-auto w-full max-w-6xl px-5 pb-24 pt-8 sm:px-8">
      <div className="rounded-2xl border border-line bg-surface p-8 sm:p-12">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Contact</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Let's talk internships.</h2>
        <p className="mt-3 max-w-xl text-muted">{availability.detail}. Remote or on site, anywhere.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={`mailto:${links.email}`}
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-bg transition-colors hover:bg-[#f0c661]"
          >
            <MailIcon size={16} /> {links.email}
          </a>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-line px-4 py-2 text-sm font-medium transition-colors hover:border-muted hover:bg-surface-2"
          >
            <LinkedInIcon size={16} /> LinkedIn
          </a>
          <a
            href={links.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-line px-4 py-2 text-sm font-medium transition-colors hover:border-muted hover:bg-surface-2"
          >
            <GitHubIcon size={16} /> GitHub
          </a>
        </div>
      </div>
      <footer className="mt-10 flex flex-col items-start justify-between gap-2 text-xs text-dim sm:flex-row">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span className="font-mono">Built with React, Vite and Tailwind CSS · deployed with GitHub Actions to GitHub Pages</span>
      </footer>
    </section>
  )
}
