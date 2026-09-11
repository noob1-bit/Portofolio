import { profile } from '@/data/profile'

function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}

function TerminalIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" y1="19" x2="20" y2="19" />
    </svg>
  )
}

function CodeIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}

function ShareIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

export function Hero() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-container/5 via-transparent to-transparent pointer-events-none opacity-40" />
      <div className="absolute -top-32 right-12 w-96 h-96 rounded-full bg-primary-container/10 blur-[120px] pointer-events-none" />

      <section
        aria-labelledby="hero-heading"
        className="relative content-wrapper pt-space-xl lg:pt-space-3xl pb-space-3xl"
      >
        <div className="flex flex-col gap-space-xl">

          {/* ── Classification Overline ── */}
          <div className="flex flex-wrap items-center justify-between gap-space-sm">
            <div className="flex items-center gap-space-xs bg-surface-container px-space-sm py-1 rounded">
              <span className="w-1.5 h-1.5 rounded-full bg-tertiary" />
              <span className="font-mono-label text-on-surface-variant uppercase tracking-widest">
                {profile.classification}
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-space-md font-mono-label text-outline">
              <span>EPOCH: [EPOCH]</span>
              <span>COORD: [COORDINATES]</span>
              <span className="text-secondary font-medium">DISCIPLINE: PRODUCTION RIGOR</span>
            </div>
          </div>

          {/* ── Headline ── */}
          <div className="flex flex-col gap-space-md max-w-[1040px]">
            <div className="flex items-baseline flex-wrap gap-x-space-md gap-y-space-xs">
              <h1 id="hero-heading" className="font-display-xl text-on-surface tracking-tight">
                {profile.headline}
              </h1>
              <span className="font-mono-label text-primary-container bg-surface-container-high px-space-sm py-1 rounded self-center">
                {profile.version}
              </span>
            </div>
            <h2 className="font-headline-lg text-primary tracking-tight">
              {profile.role}
            </h2>
            <p className="font-body-lg text-secondary max-w-[820px] leading-relaxed">
              {profile.bio}
            </p>
          </div>

          {/* ── CTAs & Interactive Channels ── */}
          <div className="flex flex-wrap items-center gap-space-md pt-space-sm">
            {/* Primary CTA */}
            <a
              href={profile.primaryCta.href}
              className="group inline-flex items-center gap-space-sm px-space-lg py-space-sm bg-on-surface text-surface font-headline-sm rounded hover:bg-surface-bright hover:text-on-surface transition-all"
            >
              <span>{profile.primaryCta.label}</span>
              <ArrowIcon />
            </a>

            {/* Secondary CTA (placeholder destination) */}
            <a
              href={profile.secondaryCta.href}
              onClick={profile.secondaryCta.href === '#' ? (e) => e.preventDefault() : undefined}
              aria-disabled={profile.secondaryCta.href === '#' || undefined}
              title={profile.secondaryCta.href === '#' ? 'Placeholder link — destination not yet available' : undefined}
              className="inline-flex items-center gap-space-xs px-space-lg py-space-sm bg-surface-container text-on-surface font-mono-label rounded hover:bg-surface-container-high hover:text-primary transition-all"
            >
              <TerminalIcon />
              <span>{profile.secondaryCta.label}</span>
            </a>

            {/* Divider */}
            <div className="h-6 w-[1px] bg-surface-variant hidden lg:block mx-space-xs" />

            {/* Social links */}
            <div className="flex items-center gap-space-xs">
              {profile.socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  onClick={link.url === '#' ? (e) => e.preventDefault() : undefined}
                  aria-disabled={link.url === '#' || undefined}
                  title={link.url === '#' ? 'Placeholder link — destination not yet available' : undefined}
                  {...(link.url === '#' ? {} : { rel: 'noreferrer', target: '_blank' })}
                  className="inline-flex items-center gap-space-xs px-space-sm py-1.5 rounded bg-surface-container-low text-secondary hover:text-on-surface hover:bg-surface-container transition-colors"
                  aria-label={link.label}
                >
                  {link.icon === 'code' ? <CodeIcon /> : null}
                  {link.icon === 'share' ? <ShareIcon /> : null}
                  {link.icon === 'mail' ? <MailIcon /> : null}
                  <span className="font-mono-label">{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* ── Telemetry Ticker Grid ── */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-space-sm pt-space-lg">
            {profile.telemetry.map((item) => (
              <div
                key={item.label}
                className="flex flex-col gap-space-xs p-space-md bg-surface-container-low rounded shadow-sm"
              >
                {item.kernel ? (
                  <div className="flex items-center justify-between">
                    <span className="font-mono-metric text-on-surface">{item.value}</span>
                    <span className="w-2 h-2 rounded-full bg-tertiary" />
                  </div>
                ) : (
                  <span
                    className={
                      item.highlight
                        ? 'font-mono-metric text-tertiary'
                        : 'font-mono-metric text-on-surface'
                    }
                  >
                    {item.value}
                  </span>
                )}
                <div className="h-[1px] w-full bg-surface-variant/40 my-0.5" />
                <span className="font-mono-label text-secondary uppercase">{item.label}</span>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  )
}