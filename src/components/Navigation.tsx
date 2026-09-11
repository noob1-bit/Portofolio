import { useCallback, useEffect, useRef, useState } from 'react'
import { profile } from '@/data/profile'

export interface NavItem {
  id: string
  label: string
  href: string
}

const navItems: NavItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'work', label: 'Work', href: '#work' },
  { id: 'case-study', label: 'Case Study', href: '#case-study' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'contact', label: 'Contact', href: '#contact' },
]

function LogoMark() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

const socialHref = (icon: string): string =>
  profile.socialLinks.find((l) => l.icon === icon)?.url ?? '#'

const utilityIcons = [
  { icon: GithubIcon, label: 'GitHub', href: socialHref('code'), id: 'github' },
  { icon: LinkedinIcon, label: 'LinkedIn', href: socialHref('share'), id: 'linkedin' },
  { icon: MailIcon, label: 'Email', href: socialHref('mail'), id: 'email' },
]

export function Navigation() {
  const [activeSection, setActiveSection] = useState('home')
  const [mobileOpen, setMobileOpen] = useState(false)
  const menuRef = useRef<HTMLElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  /* ── Active-section detection via IntersectionObserver ── */
  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[]

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id')
            if (id) setActiveSection(id)
          }
        }
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    )

    sections.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  /* ── Mobile menu: close on Escape ── */
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileOpen) {
        setMobileOpen(false)
        toggleRef.current?.focus()
      }
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [mobileOpen])

  /* ── Mobile menu: close on outside click ── */
  useEffect(() => {
    if (!mobileOpen) return
    const handleClick = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        toggleRef.current &&
        !toggleRef.current.contains(e.target as Node)
      ) {
        setMobileOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [mobileOpen])

  const handleNavClick = useCallback(
    (id: string) => {
      setActiveSection(id)
      setMobileOpen(false)
    },
    []
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/85 backdrop-blur-md border-b border-outline-variant/30">
      <div className="content-wrapper flex items-center justify-between h-14 lg:h-16">

        {/* ═══ Brand (Left) ═══ */}
        <div className="flex items-center gap-space-sm shrink-0">
          <span className="text-primary-container" aria-hidden="true">
            <LogoMark />
          </span>
          <div className="hidden sm:flex items-baseline gap-1.5">
            <span className="font-headline-sm text-on-surface font-medium">{profile.name}</span>
            <span className="font-mono-label text-on-surface-variant hidden lg:inline">
              {profile.role}
            </span>
          </div>
          <div className="hidden md:flex items-center gap-1 pl-1.5 ml-1.5 border-l border-outline-variant/40">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="font-mono-label text-on-surface-variant uppercase text-[10px] leading-none">
              {profile.statusBadge}
            </span>
          </div>
        </div>

        {/* ═══ Desktop Navigation (Center) ═══ */}
        <nav aria-label="Main navigation" className="hidden lg:flex items-center justify-center flex-1 mx-4">
          <div className="flex items-center gap-0.5">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => handleNavClick(item.id)}
                className={[
                  'font-mono-label px-3 py-1.5 rounded-full transition-all duration-150',
                  activeSection === item.id
                    ? 'bg-surface-container-low text-on-surface'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container/50',
                ].join(' ')}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        {/* ═══ Utility Icons (Right) + Mobile Toggle ═══ */}
        <div className="flex items-center gap-space-xs shrink-0">
          <div className="hidden sm:flex items-center gap-1">
            {/* Unprovided channels (href '#') are hidden, never dead controls. */}
            {utilityIcons
              .filter((item) => item.href !== '#')
              .map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={item.href === '#' ? (e) => e.preventDefault() : undefined}
                aria-disabled={item.href === '#' || undefined}
                title={item.href === '#' ? 'Placeholder link — destination not yet available' : undefined}
                {...(item.href === '#' ? {} : { rel: 'noreferrer', target: '_blank' })}
                aria-label={item.label}
                className="p-2 text-on-surface-variant hover:text-on-surface transition-colors rounded-lg hover:bg-surface-container/50"
              >
                <item.icon />
              </a>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            ref={toggleRef}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-menu"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="lg:hidden p-2 text-on-surface-variant hover:text-on-surface transition-colors rounded-lg hover:bg-surface-container/50"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
              {mobileOpen ? (
                <>
                  <path d="M18 6L6 18" />
                  <path d="M6 6l12 12" />
                </>
              ) : (
                <>
                  <path d="M4 6h16" />
                  <path d="M4 12h16" />
                  <path d="M4 18h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* ═══ Mobile Nav Menu ═══ */}
      {mobileOpen && (
        <nav
          id="mobile-nav-menu"
          ref={menuRef}
          aria-label="Mobile navigation"
          className="lg:hidden border-t border-outline-variant/30 bg-surface/95 backdrop-blur-md"
        >
          <div className="content-wrapper py-space-md flex flex-col gap-0.5">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => handleNavClick(item.id)}
                className={[
                  'font-mono-label px-3 py-2.5 rounded-lg transition-all duration-150',
                  activeSection === item.id
                    ? 'bg-surface-container-low text-on-surface'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container/50',
                ].join(' ')}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}