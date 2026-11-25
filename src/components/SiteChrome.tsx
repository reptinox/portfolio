import { profile } from '../content/profile'
import { assetUrl } from '../lib/urls'
import { Icon } from './Icon'

export const sections = [
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
] as const

function Brand() {
  return <a className="brand" href="#/" aria-label={`${profile.name}, portfolio home`}>
    <span className="brand-symbol"><Icon name="terminal" size={21} /></span>
    <span>{profile.name}<span className="brand-period">.</span></span>
  </a>
}

export function Header({ active }: { active: string }) {
  return <header className="site-header">
    <div className="container header-inner">
      <Brand />
      <nav aria-label="Main navigation">{sections.map(({ id, label }) =>
        <a key={id} href={`#/${id}`} aria-current={active === id ? 'location' : undefined}>{label}</a>
      )}</nav>
    </div>
  </header>
}

export function ProfessionalLinks() {
  const { github, linkedin, email, resume } = profile.links
  const contacts = [
    { label: 'GitHub', href: github },
    { label: 'LinkedIn', href: linkedin },
    { label: 'Email', href: email?.trim() ? `mailto:${email.trim()}` : undefined },
    { label: 'Download résumé', href: resume?.trim() ? assetUrl(resume.trim()) : undefined, download: true },
  ].filter(link => link.href?.trim())
  if (!contacts.length) return null
  return <div className="professional-links">{contacts.map(link =>
    <a key={link.label} href={link.href} download={link.download}>{link.label}</a>
  )}</div>
}

export function Footer() {
  return <footer className="site-footer"><div className="container footer-inner">
    <Brand />
    <span className="footer-role">{profile.role}</span>
    <a className="footer-home" href="#/">Back to homepage</a>
  </div></footer>
}
