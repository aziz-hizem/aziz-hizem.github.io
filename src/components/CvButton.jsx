import { profile } from '../data/profile'

function DocIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5z" strokeLinejoin="round" />
      <path d="M14 3v5h5M9 13h6M9 17h4" strokeLinecap="round" />
    </svg>
  )
}

// The CV is not published. This opens an email asking for it, with the subject filled in.
export default function CvButton({ className = '' }) {
  const href = `mailto:${profile.links.email}?subject=${encodeURIComponent('CV request from your portfolio')}`
  return (
    <a href={href} className={className}>
      <DocIcon /> Ask for my CV
    </a>
  )
}
