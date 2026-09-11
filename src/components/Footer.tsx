import { profile } from '@/data/profile'

const footerNavLinks = [
  { label: '/home', href: '#home' },
  { label: '/work', href: '#work' },
  { label: '/case-study', href: '#case-study' },
  { label: '/about', href: '#about' },
  { label: '/skills', href: '#skills' },
  { label: '/experience', href: '#experience' },
  { label: '/contact', href: '#contact' },
]

export function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-outline-variant/30 py-space-2xl text-on-surface-variant">
      <div className="content-wrapper">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-xl pb-space-2xl border-b border-outline-variant/20">

          {/* Column 1: System Core Status */}
          <div className="flex flex-col gap-space-sm">
            <div className="flex items-center gap-space-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="font-mono-label text-on-surface tracking-wider uppercase">
                System Core Active
              </span>
            </div>
            <p className="font-mono-code text-secondary">
              Static build — React + Vite
            </p>
            <span className="font-mono-label text-outline">
              ANALYTICS: NONE
            </span>
          </div>

          {/* Column 2: Geolocation & Time */}
          <div className="flex flex-col gap-space-sm">
            <span className="font-mono-label text-on-surface uppercase tracking-wider">
              GEOLOCATION &amp; TIME
            </span>
            <p className="font-mono-code text-secondary">
              Ciamis, Jawa Barat — ID
            </p>
            <p className="font-mono-code text-secondary">
              TIMEZONE: UTC+7 (WIB)
            </p>
            <span className="font-mono-label text-outline">
              STATUS: ACTIVE
            </span>
          </div>

          {/* Column 3: Navigation Architecture */}
          <div className="flex flex-col gap-space-sm">
            <span className="font-mono-label text-on-surface uppercase tracking-wider">
              NAV ARCHITECTURE
            </span>
            <div className="flex flex-wrap gap-x-space-md gap-y-space-xs font-mono-label">
              {footerNavLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Column 4: Contact / Connect */}
          <div className="flex flex-col gap-space-sm">
            <span className="font-mono-label text-on-surface uppercase tracking-wider">
              CONNECT
            </span>
            <div className="flex flex-col gap-space-xs font-mono-code text-secondary">
              {profile.socialLinks.map((link) => (
                <span key={link.label}>{link.label}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-space-lg flex flex-col sm:flex-row justify-between gap-space-md font-mono-code text-outline text-[11px]">
          <span>© {new Date().getFullYear()} {profile.name} — {profile.role}</span>
          <span>BUILD: STATIC</span>
        </div>
      </div>
    </footer>
  )
}