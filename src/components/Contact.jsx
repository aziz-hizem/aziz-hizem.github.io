import { profile } from '../data/profile'
import BackToTop from './BackToTop'
import ResumeMenu from './ResumeMenu'
import { GitHubIcon, LinkedInIcon, MailIcon } from './ui'

const secondary =
  'inline-flex items-center gap-2 rounded-full border border-line-2 px-4 py-2 text-sm font-medium transition-colors hover:border-accent/60 hover:bg-surface-2'

export default function Contact() {
  const { links, availability } = profile
  return (
    <section id="contact" className="mx-auto w-full max-w-6xl px-5 pb-16 pt-8 sm:px-8">
      <div className="reveal relative rounded-3xl border border-line bg-surface p-8 sm:p-14">
        {/* Glow is clipped in its own layer so the resume menu can open past the card edge */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
          <div
            className="absolute -bottom-40 -right-20 h-[28rem] w-[28rem] rounded-full opacity-30 blur-3xl"
            style={{ background: 'radial-gradient(closest-side, rgba(110,168,255,0.5), rgba(61,208,196,0.3) 60%, transparent)' }}
          />
        </div>
        <div className="relative">
          <p className="label flex items-center gap-3 text-accent">
            <span className="text-dim">05</span> Contact
          </p>
          <h2 className="mt-3 text-4xl font-bold sm:text-6xl">
            Let's talk <span className="text-gradient">internships</span>.
          </h2>
          <p className="mt-4 max-w-xl text-lg text-muted">{availability.detail}. Hybrid or on site, anywhere.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${links.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-ink transition-all hover:brightness-110 hover:shadow-[0_8px_30px_-10px_rgba(61,208,196,0.7)]"
            >
              <MailIcon size={16} /> {links.email}
            </a>
            <ResumeMenu className={secondary} />
            <a href={links.linkedin} target="_blank" rel="noreferrer" className={secondary}>
              <LinkedInIcon size={16} /> LinkedIn
            </a>
            <a href={links.github} target="_blank" rel="noreferrer" className={secondary}>
              <GitHubIcon size={16} /> GitHub
            </a>
          </div>
        </div>
      </div>

      <footer className="mt-12 flex flex-col items-center gap-5 border-t border-line pt-8 text-sm text-muted sm:flex-row sm:justify-between">
        <span className="text-dim">© {new Date().getFullYear()} {profile.name}</span>
        <span className="font-display font-medium text-ink/80">Thank you for visiting my portfolio</span>
        <BackToTop />
      </footer>
    </section>
  )
}
