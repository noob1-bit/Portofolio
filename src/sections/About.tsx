import { profile } from '@/data/profile'

function ChipIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" />
    </svg>
  )
}

function CursorIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m9 9 5 12 1.8-5.2L21 14 9 9z" />
      <path d="M7.2 2.2 8 5.1" />
      <path d="M5.1 8 2.2 7.2" />
      <path d="M14 4.1 12 6" />
      <path d="m6 12-1.9 2" />
    </svg>
  )
}

function LayersIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
}

function ChevronIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  )
}

function TerminalIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" y1="19" x2="20" y2="19" />
    </svg>
  )
}

const pillarIcons = [ChipIcon, CursorIcon, LayersIcon]
const pillarTones = ['text-primary', 'text-tertiary', 'text-secondary-fixed']

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading">
      <div className="content-wrapper py-space-3xl lg:py-space-4xl">
        {/* Identifier */}
        <div className="flex items-center justify-between gap-space-md mb-space-2xl">
          <div className="flex items-center gap-space-sm">
            <span className="font-mono-label text-tertiary uppercase tracking-widest">[SEC_01 // INTRO]</span>
            <span className="w-8 h-[1px] bg-outline-variant/60" aria-hidden="true" />
            <span className="font-mono-label text-outline uppercase">ENGINEERING PHILOSOPHY</span>
          </div>
          <span className="font-mono-label text-secondary-fixed-dim hidden sm:inline">SYS_VER [VERSION] / READY</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl lg:gap-space-2xl items-start">
          {/* Manifesto */}
          <div className="lg:col-span-7 flex flex-col gap-space-xl">
            <div className="flex flex-col gap-space-md">
              <span className="font-mono-label text-outline uppercase tracking-wider">{profile.thesisLabel}</span>
              <h2 id="about-heading" className="font-headline-lg lg:font-display-xl text-on-surface tracking-tight font-semibold">
                {profile.thesisTitle}
              </h2>
            </div>

            <blockquote className="p-space-lg bg-surface-container-low rounded relative shadow-md">
              <p className="font-headline-md text-on-surface font-normal leading-relaxed italic">
                &ldquo;{profile.thesisQuote}&rdquo;
              </p>
              <div className="mt-space-md flex items-center gap-space-sm font-mono-label text-tertiary uppercase">
                <CheckIcon />
                <span>{profile.thesisAttribution}</span>
              </div>
            </blockquote>

            <p className="font-body-lg text-on-surface-variant max-w-max-width-reading">
              {profile.aboutBio}
            </p>

            {/* Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md pt-space-md">
              {profile.pillars.map((pillar, i) => {
                const Icon = pillarIcons[i % pillarIcons.length] ?? ChipIcon
                const tone = pillarTones[i % pillarTones.length] ?? 'text-primary'
                return (
                  <div key={pillar.title} className="p-space-md bg-surface-container rounded flex flex-col gap-space-sm shadow-sm">
                    <div className={`w-8 h-8 rounded bg-surface-container-highest flex items-center justify-center ${tone}`} aria-hidden="true">
                      <Icon />
                    </div>
                    <h3 className="font-headline-sm text-on-surface font-medium">{pillar.title}</h3>
                    <p className="font-body-sm text-on-surface-variant">{pillar.text}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Dossier */}
          <div className="lg:col-span-5 flex flex-col gap-space-md">
            <div className="bg-surface-container-low rounded overflow-hidden shadow-md">
              {/* Portrait placeholder — no photo on file; never a stand-in identity */}
              <div className="relative w-full aspect-square bg-surface-container-highest overflow-hidden flex items-center justify-center border-b border-outline-variant/40">
                <span className="font-mono-label text-outline text-center px-space-lg">
                  [PORTRAIT PLACEHOLDER — NO PHOTO PROVIDED]
                </span>
                <div className="absolute bottom-space-md left-space-md right-space-md flex items-end justify-between">
                  <div>
                    <span className="font-mono-label text-primary-fixed uppercase tracking-wider">{profile.dossier.profileId}</span>
                    <p className="font-headline-sm text-on-surface font-semibold">{profile.name}</p>
                  </div>
                  <span className="px-space-sm py-1 bg-surface-container-lowest/90 rounded text-on-surface font-mono-label">
                    [STATUS]
                  </span>
                </div>
              </div>
              {/* Metadata table */}
              <div className="p-space-lg flex flex-col gap-space-md bg-surface-container-low">
                <div className="flex items-center justify-between py-space-xs bg-surface-container px-space-sm rounded">
                  <span className="font-mono-label text-outline uppercase">BASE STATION</span>
                  <span className="font-mono-code text-on-surface font-medium">{profile.dossier.baseStation}</span>
                </div>
                <div className="flex items-center justify-between py-space-xs bg-surface-container px-space-sm rounded">
                  <span className="font-mono-label text-outline uppercase">CURRENT ROLE</span>
                  <span className="font-mono-code text-primary font-medium">{profile.dossier.currentRole}</span>
                </div>
                <div className="flex flex-col gap-space-xs pt-space-xs">
                  <span className="font-mono-label text-outline uppercase">{profile.dossier.focusLabel}</span>
                  <p className="font-body-sm text-on-surface-variant">{profile.dossier.focusText}</p>
                </div>
                <div className="flex flex-col gap-space-xs pt-space-xs">
                  <span className="font-mono-label text-outline uppercase">{profile.dossier.readingLabel}</span>
                  <ul className="flex flex-col gap-1 font-mono-code text-secondary">
                    {profile.dossier.readingBench.map((book) => (
                      <li key={book} className="flex items-center gap-space-xs">
                        <span className="text-tertiary" aria-hidden="true"><ChevronIcon /></span>
                        <span>{book}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Telemetry pill */}
            <div className="p-space-md bg-surface-container rounded flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-space-sm">
                <span className="text-primary" aria-hidden="true"><TerminalIcon /></span>
                <span className="font-mono-label text-on-surface uppercase">{profile.uptimeLabel}</span>
              </div>
              <span className="font-mono-label text-tertiary">{profile.uptimeValue}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
