import { useLayoutEffect, useRef } from 'react'

// "Next", a line with light flowing down it, a bobbing arrow, then the next stop's field and
// name on two lines. Clicking it scrolls there.
export function NextConnector({ next }) {
  return (
    <a href={`#${next.id}`} aria-label={`Next: ${next.title ?? next.short}`} className="group flex w-full flex-col items-center">
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

// Wraps a card (or a block of cards) and puts a "Next" connector in the empty space on its left:
// centered in that space and at the block's vertical middle. It measures its own distance to the
// window's left edge, so it stays centered at any width. Narrower screens show it underneath.
export function WithNext({ next, children }) {
  const ref = useRef(null)
  useLayoutEffect(() => {
    const el = ref.current
    const update = () => el && el.style.setProperty('--gutter', `${el.getBoundingClientRect().left}px`)
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  return (
    <div ref={ref} className="relative">
      {children}
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
}
