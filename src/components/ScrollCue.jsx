import { useEffect, useState } from 'react'

// Bottom-right hint on the first screen, inviting visitors to scroll to the projects.
// Fades out as soon as the page is scrolled, and comes back at the very top.
export default function ScrollCue() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY < 80)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      href="#projects"
      aria-label="Scroll down to see my projects"
      tabIndex={visible ? 0 : -1}
      className={`group fixed bottom-5 right-5 z-20 inline-flex items-center gap-3 rounded-full border border-accent/40 bg-surface/85 py-2 pl-2.5 pr-4 text-sm font-medium text-ink shadow-[0_12px_40px_-12px_rgba(61,208,196,0.45)] backdrop-blur-md transition-all duration-500 hover:border-accent sm:bottom-7 sm:right-8 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
      }`}
    >
      {/* A small mouse whose wheel keeps rolling down */}
      <span aria-hidden="true" className="relative flex h-8 w-5 justify-center rounded-full border-2 border-accent/70">
        <span className="scroll-wheel mt-1.5 h-1.5 w-1 rounded-full bg-accent" />
      </span>
      <span>
        Scroll to see my <span className="text-gradient font-semibold">projects</span>
      </span>
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        aria-hidden="true"
        className="scroll-bob text-accent"
      >
        <path d="M12 5v14m0 0-6-6m6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  )
}
