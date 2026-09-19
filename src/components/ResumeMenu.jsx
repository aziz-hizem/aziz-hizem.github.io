import { useEffect, useRef, useState } from 'react'
import { profile } from '../data/profile'

function DownloadIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
      <path d="M12 4v11m0 0-4.5-4.5M12 15l4.5-4.5M5 19h14" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Chevron({ open }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
      className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
    >
      <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// "Resume" button that opens a small menu with one download per language.
// The files and labels come from profile.resume in src/data/profile.js.
export default function ResumeMenu({ className = '' }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (!open) return
    const onPointer = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('pointerdown', onPointer)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onPointer)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  if (!profile.resume?.length) return null

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={`${className} ${open ? 'border-accent/60 bg-surface-2' : ''}`}
      >
        <DownloadIcon /> Resume <Chevron open={open} />
      </button>

      {open && (
        <div
          role="menu"
          className="menu-in absolute left-0 top-full z-30 mt-2 min-w-[12rem] rounded-2xl border border-line-2 bg-surface p-1.5 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)]"
        >
          {profile.resume.map((file) => (
            <a
              key={file.href}
              role="menuitem"
              href={file.href}
              download
              onClick={() => setOpen(false)}
              className="flex items-center justify-between gap-6 rounded-xl px-3 py-2 text-sm text-ink transition-colors hover:bg-surface-2 hover:text-accent"
            >
              <span className="font-medium">{file.label}</span>
              <span className="text-xs text-dim">PDF</span>
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
