import { useState } from 'react'
import { experience, type ExperienceEntry, type ExperienceMetric } from '@/data/experience'

const metricToneStyles: Record<ExperienceMetric['tone'], string> = {
  default: 'text-on-surface',
  accent: 'text-tertiary',
  primary: 'text-primary',
  fixed: 'text-primary-fixed',
}

const orgToneStyles: Record<ExperienceEntry['orgTone'], string> = {
  primary: 'text-primary',
  secondary: 'text-secondary',
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="mt-0.5 shrink-0">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
}

function ChevronIcon({ expanded }: { expanded: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`shrink-0 transition-transform duration-200 ${expanded ? 'rotate-90' : ''}`}
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  )
}

function TimelineItem({
  entry,
  open,
  onToggle,
}: {
  entry: ExperienceEntry
  open: boolean
  onToggle: () => void
}) {
  const detailId = `${entry.id}-detail`

  return (
    <div className="relative group transition-transform duration-200 hover:translate-x-1">
      {/* Node marker (decorative) */}
      <div
        aria-hidden="true"
        className={`absolute -left-6 sm:-left-8 lg:-left-10 top-1.5 w-4 h-4 rounded-sm ring-4 ring-background flex items-center justify-center shadow-md ${
          entry.current ? 'bg-primary-container' : 'bg-surface-container-highest'
        }`}
      >
        <div className={`w-1.5 h-1.5 rounded-sm ${entry.current ? 'bg-on-primary' : 'bg-surface-container-lowest'}`} />
      </div>

      <div className="bg-surface-container-low rounded p-space-lg shadow-md transition-colors hover:bg-surface-container">
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={detailId}
          className="w-full text-left flex flex-col lg:flex-row lg:items-center justify-between gap-space-xs pb-space-sm cursor-pointer"
        >
          <span className="flex flex-wrap items-center gap-space-sm">
            {entry.badge && (
              <span className="font-mono-label text-tertiary px-space-xs py-0.5 bg-surface-container-highest rounded">
                {entry.badge}
              </span>
            )}
            <span className="font-headline-md text-on-surface font-semibold">{entry.role}</span>
            <span className="font-headline-md text-outline font-normal" aria-hidden="true">@</span>
            <span className={`font-headline-md font-medium ${orgToneStyles[entry.orgTone]}`}>
              {entry.organization}
            </span>
          </span>
          <span className="flex items-center gap-space-md">
            <span className="font-mono-code text-secondary">{entry.period}</span>
            <span className="font-mono-label text-outline uppercase hidden sm:inline">{entry.location}</span>
            <span className="text-outline" aria-hidden="true">
              <ChevronIcon expanded={open} />
            </span>
          </span>
        </button>

        <p className="font-body-md text-on-surface-variant max-w-max-width-reading mt-space-xs">
          {entry.summary}
        </p>

        {entry.metrics && entry.metrics.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-space-sm my-space-md py-space-sm bg-surface-container rounded px-space-md">
            {entry.metrics.map((metric) => (
              <div key={metric.label}>
                <span className={`font-mono-metric font-semibold block ${metricToneStyles[metric.tone]}`}>
                  {metric.value}
                </span>
                <span className="font-mono-label text-outline uppercase">{metric.label}</span>
              </div>
            ))}
          </div>
        )}

        {open && (
          <div className="flex flex-col gap-space-sm pt-space-xs" id={detailId}>
            <ul className="flex flex-col gap-space-xs font-body-sm text-on-surface-variant">
              {entry.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-space-sm">
                  <span className={entry.current ? 'text-primary' : 'text-outline'} aria-hidden="true">
                    <CheckIcon />
                  </span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-space-xs mt-space-sm">
              {entry.techStack.map((tech) => (
                <span key={tech} className="font-mono-label px-space-xs py-0.5 rounded bg-surface-container text-outline">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export function Experience() {
  const [openId, setOpenId] = useState<string | null>(experience[0]?.id ?? null)

  return (
    <section id="experience" aria-labelledby="experience-heading">
      <div className="content-wrapper py-space-3xl lg:py-space-4xl">
        {/* Header */}
        <div className="flex flex-col gap-space-xs mb-space-3xl">
          <div className="flex items-center gap-space-sm">
            <span className="font-mono-label text-tertiary uppercase tracking-widest">[SEC_03 // CHRONOLOGY]</span>
            <span className="w-8 h-[1px] bg-outline-variant/60" aria-hidden="true" />
            <span className="font-mono-label text-outline uppercase">OPERATIONAL RECORD</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-md">
            <h2 id="experience-heading" className="font-headline-lg text-on-surface font-semibold tracking-tight">
              Work &amp; Organizational Experience
            </h2>
            <span className="font-mono-label text-outline">
              SELECT TIMELINE NODE TO SCRUTINIZE SPECIFICS
            </span>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative pl-6 sm:pl-8 lg:pl-10 flex flex-col gap-space-3xl">
          <div className="absolute left-2.5 sm:left-3.5 lg:left-4 top-3 bottom-3 w-0.5 bg-surface-container-highest" aria-hidden="true" />
          {experience.map((entry) => (
            <TimelineItem
              key={entry.id}
              entry={entry}
              open={openId === entry.id}
              onToggle={() => setOpenId((curr) => (curr === entry.id ? null : entry.id))}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
