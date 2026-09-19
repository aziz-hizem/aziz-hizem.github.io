export default function BackToTop() {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="group inline-flex items-center gap-2 rounded-full border border-line-2 px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-accent/60 hover:bg-surface-2"
    >
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
        className="text-accent transition-transform duration-300 group-hover:-translate-y-0.5"
      >
        <path d="M12 19V5m0 0-6 6m6-6 6 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      Back to top
    </button>
  )
}
