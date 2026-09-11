import type { ReactNode } from 'react'
import type { Project, ProjectLink } from '@/data/projects'

function SpecIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18" />
    </svg>
  )
}

function DescriptionIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  )
}

function CodeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}

function StarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

function TerminalIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" y1="19" x2="20" y2="19" />
    </svg>
  )
}

function ArrowForwardIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}

const statusStyles: Record<string, string> = {
  primary: 'bg-primary-container/20 text-primary',
  tertiary: 'bg-tertiary-container/20 text-tertiary',
  neutral: 'bg-surface-container-high text-on-surface',
  surface: 'bg-surface-variant text-secondary',
}

interface ProjectCardProps {
  project: Project
  onOpenCaseStudy?: (id: string) => void
}

export function ProjectCard({ project, onOpenCaseStudy }: ProjectCardProps) {
  if (project.featured) {
    return <FeaturedProject project={project} onOpenCaseStudy={onOpenCaseStudy} />
  }

  const isCompact = !project.visual

  return (
    <article
      className={`rounded bg-surface-container-low hover:bg-surface-container transition-all duration-300 shadow-sm ${
        isCompact ? 'p-space-lg flex flex-col justify-between' : 'p-space-lg lg:p-space-xl'
      }`}
    >
      {isCompact ? (
        /* ── Compact card (2-col grid items) ── */
        <CompactProject project={project} onOpenCaseStudy={onOpenCaseStudy} />
      ) : (
        /* ── Standard card (two columns) ── */
        <StandardProject project={project} onOpenCaseStudy={onOpenCaseStudy} />
      )}
    </article>
  )
}

/* ── Featured project: two-column layout with visual ── */
function FeaturedProject({ project, onOpenCaseStudy }: ProjectCardProps) {
  return (
    <article className="rounded bg-surface-container-low hover:bg-surface-container transition-all duration-300 shadow-sm p-space-lg lg:p-space-xl">
      <div className="flex flex-col lg:flex-row gap-space-xl">
        {/* Info column */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <MetaRow project={project} />
            <h2 className="font-headline-lg text-on-surface font-semibold tracking-tight mb-space-sm">
              {project.title}
            </h2>
            <p className="font-body-lg text-on-surface-variant mb-space-lg max-w-max-width-reading">
              {project.description}
            </p>
            <SpecGrid metrics={project.metrics} />
            <TechChips technologies={project.technologies} />
          </div>
          <ActionRow links={project.links} projectId={project.id} onOpenCaseStudy={onOpenCaseStudy} />
        </div>
        {/* Visual column */}
        <div className="w-full lg:w-[480px] flex flex-col gap-space-sm">
          <DiagramCard project={project} />
        </div>
      </div>
    </article>
  )
}

/* ── Standard project: two columns ── */
function StandardProject({ project, onOpenCaseStudy }: ProjectCardProps) {
  return (
    <div className="flex flex-col lg:flex-row gap-space-xl">
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <MetaRow project={project} />
          <h2 className="font-headline-lg text-on-surface font-semibold tracking-tight mb-space-sm">
            {project.title}
          </h2>
          <p className="font-body-lg text-on-surface-variant mb-space-lg max-w-max-width-reading">
            {project.description}
          </p>
          <SpecGrid metrics={project.metrics} />
          <TechChips technologies={project.technologies} />
        </div>
        <ActionRow links={project.links} projectId={project.id} onOpenCaseStudy={onOpenCaseStudy} />
      </div>
      <div className="w-full lg:w-[420px] flex flex-col gap-space-sm justify-between">
        <VisualCard project={project} />
      </div>
    </div>
  )
}

/* ── Compact project (2-col bottom deck) ── */
function CompactProject({ project, onOpenCaseStudy }: ProjectCardProps) {
  return (
    <>
      <div>
        <div className="flex items-center justify-between gap-space-xs mb-space-sm">
          <div className="flex items-center gap-space-xs">
            <span className="font-mono-label text-primary font-semibold">[{project.index}]</span>
            <span className="font-mono-label text-outline">•</span>
            <span className="font-mono-label text-on-surface-variant uppercase">{project.categories[0]}</span>
          </div>
          {project.status.slice(0, 1).map((s) => (
            <span
              key={s.label}
              className={`px-space-xs py-0.5 rounded font-mono-label ${statusStyles[s.color]}`}
            >
              {s.label}
            </span>
          ))}
        </div>
        <h3 className="font-headline-md text-on-surface font-semibold tracking-tight mb-space-xs">
          {project.title}
        </h3>
        <p className="font-body-md text-on-surface-variant mb-space-md">
          {project.description}
        </p>
        <div className="grid grid-cols-2 gap-space-sm mb-space-md">
          {project.metrics.map((m) => (
            <div key={m.label} className="p-space-sm rounded bg-surface-container-lowest">
              <span className="font-mono-label text-outline block uppercase">{m.label}</span>
              <span className={`font-mono-metric text-[22px] ${m.highlight ? 'text-tertiary' : 'text-on-surface'}`}>
                {m.value}
              </span>
              <span className="font-mono-label text-secondary block">{m.sublabel}</span>
            </div>
          ))}
        </div>
        <TechChips technologies={project.technologies} />
      </div>
      <div className="flex items-center justify-between pt-space-md">
        {project.links.map((link) => (
          <LinkButton key={link.label} link={link} compact projectId={project.id} onOpenCaseStudy={onOpenCaseStudy} />
        ))}
        {project.links.length === 0 && <span />}
      </div>
    </>
  )
}

/* ── Sub-components ── */

function MetaRow({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-space-xs mb-space-sm">
      <div className="flex items-center gap-space-xs">
        <span className="font-mono-label text-primary font-semibold">[{project.index}]</span>
        <span className="font-mono-label text-outline">•</span>
        <span className="font-mono-label text-on-surface-variant uppercase">{project.categories[0]}</span>
        <span className="font-mono-label text-outline">•</span>
        <span className="font-mono-label text-secondary">{project.year}</span>
      </div>
      <div className="flex items-center gap-space-xs">
        {project.status.map((s) => (
          <span
            key={s.label}
            className={`px-space-xs py-0.5 rounded font-mono-label ${statusStyles[s.color]}`}
          >
            {s.label}
          </span>
        ))}
      </div>
    </div>
  )
}

function SpecGrid({ metrics }: { metrics: Project['metrics'] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm mb-space-lg">
      {metrics.map((m) => (
        <div key={m.label} className="p-space-sm rounded bg-surface-container-lowest">
          <span className="font-mono-label text-outline block uppercase">{m.label}</span>
          <span
            className={`font-mono-metric ${m.highlight ? 'text-tertiary' : 'text-on-surface'}`}
          >
            {m.value}
          </span>
          <span className="font-mono-label text-secondary block">{m.sublabel}</span>
        </div>
      ))}
    </div>
  )
}

function TechChips({ technologies }: { technologies: string[] }) {
  return (
    <div className="flex flex-wrap gap-space-xs mb-space-xl">
      {technologies.map((tech) => (
        <span
          key={tech}
          className="px-space-sm py-0.5 rounded bg-surface-container font-mono-label text-secondary"
        >
          {tech}
        </span>
      ))}
    </div>
  )
}

function ActionRow({ links, projectId, onOpenCaseStudy }: { links: Project['links']; projectId: string; onOpenCaseStudy?: (id: string) => void }) {
  return (
    <div className="flex flex-wrap items-center gap-space-md pt-space-sm">
      {links.map((link) => (
        <LinkButton key={link.label} link={link} projectId={projectId} onOpenCaseStudy={onOpenCaseStudy} />
      ))}
    </div>
  )
}

function LinkButton({ link, compact, projectId, onOpenCaseStudy }: { link: ProjectLink; compact?: boolean; projectId?: string; onOpenCaseStudy?: (id: string) => void }) {
  const base = 'inline-flex items-center gap-space-xs transition-all'

  const styles: Record<string, string> = {
    primary:
      'px-space-lg py-2.5 rounded bg-on-surface text-surface font-headline-sm text-sm font-medium hover:bg-surface-bright hover:text-on-surface',
    secondary:
      'px-space-md py-2.5 rounded bg-surface-container text-on-surface font-mono-label uppercase hover:bg-surface-container-high',
    ghost: compact
      ? 'font-mono-label text-primary hover:underline uppercase'
      : 'px-space-sm py-2.5 text-on-surface-variant hover:text-on-surface font-mono-label uppercase',
  }

  const iconMap: Record<string, ReactNode> = {
    spec: <SpecIcon />,
    description: <DescriptionIcon />,
    code: <CodeIcon />,
    star: <StarIcon />,
    terminal: <TerminalIcon />,
  }

  // Unfinished destinations stay visually identical but never navigate:
  // explicit placeholder state instead of a silent jump to `#`.
  const isPlaceholder = link.href === '#'
  // Case-study links select this card's dossier before the anchor jump.
  const opensCaseStudy = link.href === '#case-study' && projectId && onOpenCaseStudy

  return (
    <a
      href={link.href}
      onClick={
        isPlaceholder
          ? (e) => e.preventDefault()
          : opensCaseStudy
            ? () => onOpenCaseStudy(projectId as string)
            : undefined
      }
      aria-disabled={isPlaceholder || undefined}
      title={isPlaceholder ? 'Placeholder link — destination not yet available' : undefined}
      className={`${base} ${styles[link.variant]}`}
      {...(link.variant === 'ghost' && !compact && !isPlaceholder ? { rel: 'noreferrer', target: '_blank' } : {})}
      {...(link.variant === 'primary' ? { 'data-path': 'case-study' } : {})}
    >
      {link.icon && iconMap[link.icon] && (
        <span className={link.variant === 'secondary' ? 'text-tertiary' : ''}>
          {iconMap[link.icon]}
        </span>
      )}
      <span>{link.label}</span>
      {link.variant === 'ghost' && !compact && (
        <ArrowForwardIcon />
      )}
    </a>
  )
}

/* ── Visual cards matching Stitch patterns ── */
function DiagramCard({ project }: { project: Project }) {
  if (!project.visual) return null
  return (
    <div className="relative w-full rounded bg-surface-container-lowest p-space-md flex flex-col justify-between overflow-hidden shadow-sm min-h-[340px]">
      <div className="flex items-center justify-between pb-space-xs mb-space-sm">
        <div className="flex items-center gap-space-xs font-mono-label text-secondary">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>{project.visual.statusLabel}</span>
        </div>
        <span className="font-mono-code text-outline text-[11px]">EPOCH #[EPOCH]</span>
      </div>
      <div className="flex-1 flex items-center justify-center py-space-sm">
        <ArchitectureDiagram type={project.visual.type} />
      </div>
    </div>
  )
}

function VisualCard({ project }: { project: Project }) {
  if (!project.visual) return null
  return (
    <div className="rounded bg-surface-container-lowest p-space-md flex flex-col justify-between shadow-sm h-full">
      <div className="flex items-center justify-between pb-space-xs mb-space-sm">
        <span className="font-mono-label text-secondary uppercase">{project.visual.label}</span>
        {project.visual.statusLabel && (
          <span className="font-mono-code text-primary text-[12px]">{project.visual.statusLabel}</span>
        )}
      </div>
      <div className="py-space-md">
        <ArchitectureDiagram type={project.visual.type} />
      </div>
    </div>
  )
}

function ArchitectureDiagram({ type }: { type: string }) {
  if (type === 'diagram') {
    return (
      <div className="w-full h-44 flex items-center justify-center">
        <svg className="w-full h-full text-on-surface-variant" fill="none" viewBox="0 0 400 180">
          <path d="M60 90 L140 40 M60 90 L140 140 M140 40 L260 40 M140 140 L260 140 M260 40 L340 90 M260 140 L340 90 M140 40 L260 140 M140 140 L260 40" stroke="currentColor" strokeDasharray="3 3" strokeOpacity="0.25" />
          <circle cx="200" cy="90" r="34" stroke="var(--color-primary-container)" strokeOpacity="0.8" strokeWidth="1.5" />
          <rect x="110" y="22" width="60" height="36" rx="3" fill="var(--color-surface-container)" />
          <text x="140" y="44" fill="var(--color-on-surface-variant)" fontFamily="var(--font-jetbrains-mono)" fontSize="9" textAnchor="middle">NODE-A</text>
          <rect x="110" y="122" width="60" height="36" rx="3" fill="var(--color-surface-container)" />
          <text x="140" y="144" fill="var(--color-on-surface-variant)" fontFamily="var(--font-jetbrains-mono)" fontSize="9" textAnchor="middle">NODE-B</text>
          <rect x="230" y="72" width="60" height="36" rx="3" fill="var(--color-surface-container)" />
          <text x="260" y="94" fill="var(--color-primary)" fontFamily="var(--font-jetbrains-mono)" fontSize="9" textAnchor="middle">EGRESS</text>
        </svg>
      </div>
    )
  }

  if (type === 'sparkline') {
    return (
      <div>
        <div className="flex items-end gap-1.5 h-24 mb-space-sm">
          {[30, 45, 60, 40, 75, 90, 100, 85, 95].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm"
              style={{
                height: `${h}%`,
                backgroundColor: i >= 6 ? 'var(--color-primary-container)' : 'var(--color-surface-variant)',
              }}
            />
          ))}
        </div>
        <div className="flex justify-between font-mono-label text-outline">
          <span>T-24H</span>
          <span>PEAK RUNTIME: [VALUE]</span>
          <span>NOW</span>
        </div>
      </div>
    )
  }

  if (type === 'memory-grid') {
    return (
      <div>
        <div className="grid grid-cols-8 gap-1.5 py-space-sm">
          {Array.from({ length: 24 }).map((_, i) => (
            <div
              key={i}
              className="h-5 rounded-sm"
              style={{
                backgroundColor: i % 3 === 0 ? 'var(--color-primary-container)' : 'var(--color-surface-variant)',
              }}
            />
          ))}
        </div>
        <div className="flex justify-between font-mono-code text-[11px] text-outline pt-space-xs">
          <span>HEAP DUMP: [SIZE]</span>
          <span className="text-tertiary">[STATUS]</span>
        </div>
      </div>
    )
  }

  return null
}