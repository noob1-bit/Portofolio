import { useEffect, useRef, useState, type ReactNode } from 'react'
import {
  getAdjacentProjects,
  getCaseStudy,
  type CaseStudyCodeTone,
  type CaseStudyLogTone,
  type DossierSection,
} from '@/data/projects'
import { CaseStudySandbox } from '@/components/CaseStudySandbox'

/* ── Inline icons (visual language only) ── */

function PlayIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polygon points="10 8 16 12 10 16 10 8" />
    </svg>
  )
}

function TerminalIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" y1="19" x2="20" y2="19" />
    </svg>
  )
}

function ArticleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
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

function ArrowBackIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="transition-transform group-hover:-translate-x-1">
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  )
}

function ArrowForwardIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="transition-transform group-hover:translate-x-1 text-primary">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}

const codeToneStyles: Record<CaseStudyCodeTone, string> = {
  comment: 'text-outline',
  keyword: 'text-primary font-semibold',
  type: 'text-primary-fixed-dim',
  accent: 'text-tertiary',
  plain: 'text-secondary',
}

const logToneStyles: Record<CaseStudyLogTone, string> = {
  ok: 'text-emerald-400 font-semibold',
  plain: 'text-secondary',
  muted: 'text-outline',
  accent: 'text-tertiary',
}

interface CaseStudyProps {
  projectId: string
  onNavigate: (id: string) => void
}

export function CaseStudy({ projectId, onNavigate }: CaseStudyProps) {
  const dossier = getCaseStudy(projectId)
  const { prev, next } = getAdjacentProjects(projectId)
  const [sandboxOpen, setSandboxOpen] = useState(false)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const mountedRef = useRef(false)

  /*
   * Move focus to the dossier title on project change (user-initiated).
   * Skipped on initial mount so page load never yanks focus mid-document.
   */
  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true
      return
    }
    titleRef.current?.focus({ preventScroll: true })
  }, [projectId])

  return (
    <section id="case-study" aria-labelledby="dossier-title">
      {/* ═══ Dossier header ═══ */}
      <div className="w-full bg-surface-container-lowest">
        <div className="content-wrapper py-space-3xl flex flex-col gap-space-xl">
          {/* Classification bar */}
          <div className="flex flex-wrap items-center justify-between gap-space-sm">
            <div className="flex items-center gap-space-xs font-mono-label text-secondary">
              <span className="px-space-xs py-0.5 rounded bg-surface-container-high text-primary font-semibold">
                {dossier.ref}
              </span>
              <span className="text-outline">/</span>
              <span>{dossier.categoryPath}</span>
            </div>
            <div className="flex items-center gap-space-sm">
              <span className="inline-flex items-center gap-1.5 px-space-sm py-1 rounded bg-surface-container text-on-surface font-mono-label">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                {dossier.healthLabel}
              </span>
              <span className="font-mono-label text-outline">CLASS: [CLASS]</span>
            </div>
          </div>

          {/* Title grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-end">
            <div className="lg:col-span-8 flex flex-col gap-space-md">
              <div className="inline-flex items-center gap-space-xs">
                <span className="px-2 py-0.5 bg-primary-container text-on-primary-container font-mono-label uppercase tracking-wider rounded">
                  {dossier.specChip}
                </span>
                <span className="font-mono-label text-outline">{dossier.rev}</span>
              </div>
              <h2
                id="dossier-title"
                ref={titleRef}
                tabIndex={-1}
                className="font-display-xl text-on-surface tracking-tight focus:outline-none"
              >
                {dossier.title}
              </h2>
              <p className="font-body-lg text-secondary max-w-max-width-reading">
                {dossier.lede}
              </p>
            </div>
            {/* Benchmark module */}
            <div className="lg:col-span-4 flex flex-col gap-space-xs bg-surface-container-low p-space-md rounded">
              <span className="font-mono-label text-outline uppercase tracking-wider">
                {dossier.benchmark.label}
              </span>
              <div className="flex items-baseline justify-between">
                <span className="font-mono-metric text-primary">{dossier.benchmark.value}</span>
                <span className="font-mono-label text-tertiary">{dossier.benchmark.note}</span>
              </div>
              <div className="w-full bg-surface-container-highest h-1 rounded overflow-hidden mt-1">
                <div className="bg-primary h-full w-[96%]" />
              </div>
              <span className="font-mono-code text-secondary text-right mt-1">
                {dossier.benchmark.caption}
              </span>
            </div>
          </div>

          {/* Metadata ribbon */}
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-space-md bg-surface-container rounded p-space-md text-on-surface">
            {dossier.ribbon.map((item) => (
              <div key={item.label} className="flex flex-col gap-0.5">
                <dt className="font-mono-label text-outline uppercase">{item.label}</dt>
                <dd className="font-body-md font-medium text-on-surface flex items-center gap-1">
                  {item.label === 'Runtime Topology' && <CheckIcon />}
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>

          {/* Action bar */}
          <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
            <button
              type="button"
              onClick={() => setSandboxOpen(true)}
              className="px-space-md py-2.5 rounded bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary font-mono-label font-medium transition-all flex items-center gap-space-xs"
            >
              <PlayIcon />
              {dossier.sandboxAction}
            </button>
            {dossier.sourceHref && dossier.sourceLabel && (
              <a
                href={dossier.sourceHref}
                rel="noreferrer"
                target="_blank"
                className="px-space-md py-2.5 rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-mono-label transition-colors flex items-center gap-space-xs"
              >
                <TerminalIcon />
                {dossier.sourceLabel}
              </a>
            )}
            <a
              href="#architecture"
              className="px-space-md py-2.5 rounded bg-surface-container hover:bg-surface-container-high text-secondary hover:text-on-surface font-mono-label transition-colors flex items-center gap-space-xs"
            >
              <ArticleIcon />
              {dossier.specAction}
            </a>
          </div>
        </div>
      </div>

      {/* ═══ Body split ═══ */}
      <div className="content-wrapper py-space-3xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl">
          {/* Reading spine */}
          <div className="lg:col-span-8 flex flex-col gap-space-3xl">
            {dossier.sections.map((section) => (
              <DossierArticle key={section.index} section={section} />
            ))}
          </div>

          {/* Sidebar rail */}
          <aside className="lg:col-span-4 flex flex-col gap-space-xl" aria-label="Technical specification">
            <div className="bg-surface-container p-space-lg rounded flex flex-col gap-space-md lg:sticky lg:top-24">
              <div className="flex items-center justify-between pb-space-xs">
                <span className="font-mono-label text-on-surface uppercase font-bold">
                  {dossier.sidebar.title}
                </span>
                <span className="w-2 h-2 rounded-full bg-primary" />
              </div>
              {dossier.sidebar.fields.map((field) => (
                <div key={field.label} className="flex flex-col gap-space-xs">
                  <span className="font-mono-label text-outline uppercase">{field.label}</span>
                  <span className="font-mono-code text-on-surface">{field.value}</span>
                </div>
              ))}
              <div className="flex flex-col gap-space-xs">
                <span className="font-mono-label text-outline uppercase">
                  {dossier.sidebar.modulesLabel}
                </span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {dossier.sidebar.modules.map((mod) => (
                    <span
                      key={mod}
                      className="px-2 py-0.5 rounded bg-surface-container-high font-mono-code text-[11px] text-secondary"
                    >
                      {mod}
                    </span>
                  ))}
                </div>
              </div>
              {/* Sparkline widget */}
              <div className="bg-surface-container-lowest p-space-md rounded flex flex-col gap-space-xs mt-space-sm">
                <div className="flex justify-between items-center font-mono-label">
                  <span className="text-outline">{dossier.sidebar.sparkLabel}</span>
                  <span className="text-emerald-400">{dossier.sidebar.sparkValue}</span>
                </div>
                <svg className="w-full h-12 text-primary" fill="none" viewBox="0 0 200 40" aria-hidden="true">
                  <path d="M0 25 L20 23 L40 26 L60 21 L80 22 L100 8 L120 24 L140 23 L160 22 L180 23 L200 24" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M0 25 L20 23 L40 26 L60 21 L80 22 L100 8 L120 24 L140 23 L160 22 L180 23 L200 24 L200 40 L0 40 Z" fill="currentColor" fillOpacity="0.08" />
                </svg>
                <span className="font-mono-label text-[9px] text-secondary text-right">
                  {dossier.sidebar.sparkCaption}
                </span>
              </div>
              {/* Evidence placeholders (no remote imagery) */}
              {dossier.sidebar.proofs.map((proof) => (
                <div key={proof.label} className="flex flex-col gap-space-xs mt-space-sm">
                  <span className="font-mono-label text-outline uppercase">{proof.label}</span>
                  <div className="rounded h-40 w-full border border-outline-variant/40 bg-surface-container-lowest flex items-center justify-center">
                    <span className="font-mono-label text-outline">[EVIDENCE PLACEHOLDER]</span>
                  </div>
                  <span className="font-mono-label text-[10px] text-outline">{proof.caption}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>

      {/* ═══ Bottom project navigation ═══ */}
      <div className="w-full bg-surface-container py-space-2xl">
        <div className="content-wrapper flex flex-col md:flex-row items-center justify-between gap-space-xl">
          <a
            href="#work"
            className="flex items-center gap-space-sm group text-secondary hover:text-on-surface transition-colors"
          >
            <ArrowBackIcon />
            <span className="flex flex-col">
              <span className="font-mono-label text-outline uppercase">PORTFOLIO INDEX</span>
              <span className="font-headline-sm">All Systems Archive</span>
            </span>
          </a>
          <div className="hidden md:block h-10 w-px bg-outline-variant/30" aria-hidden="true" />
          <nav aria-label="Adjacent case studies" className="flex items-center gap-space-xl">
            <a
              href="#case-study"
              onClick={() => onNavigate(prev.id)}
              className="flex items-center gap-space-sm group text-secondary hover:text-on-surface transition-colors"
            >
              <ArrowBackIcon />
              <span className="flex flex-col">
                <span className="font-mono-label text-outline uppercase">PREV CASE STUDY</span>
                <span className="font-headline-sm">{prev.title}</span>
              </span>
            </a>
            <a
              href="#case-study"
              onClick={() => onNavigate(next.id)}
              className="flex items-center gap-space-sm group text-right text-on-surface hover:text-primary transition-colors"
            >
              <span className="flex flex-col">
                <span className="font-mono-label text-outline uppercase">NEXT CASE STUDY</span>
                <span className="font-headline-sm">{next.title} →</span>
              </span>
              <ArrowForwardIcon />
            </a>
          </nav>
        </div>
      </div>

      {sandboxOpen && (
        <CaseStudySandbox spec={dossier.sandbox} onClose={() => setSandboxOpen(false)} />
      )}
    </section>
  )
}

/* ── Numbered dossier article ── */

function SectionEyebrow({ index, code }: { index: string; code: string }) {
  return (
    <div className="flex items-center gap-space-xs font-mono-label text-tertiary">
      <span>{index}</span>
      <span className="text-outline">//</span>
      <span>{code}</span>
    </div>
  )
}

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h3 className="font-headline-lg text-on-surface tracking-tight">{children}</h3>
  )
}

function DossierArticle({ section }: { section: DossierSection }) {
  return (
    <article
      className="flex flex-col gap-space-md"
      {...(section.anchorId ? { id: section.anchorId } : {})}
    >
      <SectionEyebrow index={section.index} code={section.code} />
      <SectionTitle>{section.title}</SectionTitle>

      {section.body.length > 0 && (
        <div className="font-body-lg text-on-surface-variant flex flex-col gap-space-sm max-w-max-width-reading">
          {section.body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      )}

      {section.kind === 'overview' && section.callout && (
        <div className="bg-surface-container p-space-lg rounded flex flex-col gap-space-sm my-space-xs">
          <div className="flex items-center justify-between">
            <span className="font-mono-label text-primary uppercase">{section.callout.label}</span>
            <span className="font-mono-label text-outline">{section.callout.meta}</span>
          </div>
          <p className="font-body-md text-on-surface">{section.callout.quote}</p>
        </div>
      )}

      {section.kind === 'problem-cards' && section.cards && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md my-space-xs">
          {section.cards.map((card) => (
            <div key={card.title} className="bg-surface-container p-space-md rounded flex flex-col gap-space-xs">
              <span className="w-2 h-2 rounded-full bg-primary" aria-hidden="true" />
              <span className="font-headline-sm text-on-surface">{card.title}</span>
              <p className="font-body-sm text-on-surface-variant">{card.text}</p>
            </div>
          ))}
        </div>
      )}

      {section.kind === 'spec-table' && section.tableHead && section.tableRows && (
        <div className="bg-surface-container-low rounded overflow-hidden overflow-x-auto">
          <div className="grid grid-cols-12 min-w-[560px] bg-surface-container-high p-space-sm font-mono-label text-outline uppercase">
            <div className="col-span-5">{section.tableHead[0]}</div>
            <div className="col-span-3">{section.tableHead[1]}</div>
            <div className="col-span-4 text-primary">{section.tableHead[2]}</div>
          </div>
          <div className="divide-y divide-surface-container-highest min-w-[560px]">
            {section.tableRows.map((row, i) => (
              <div
                key={row.dim}
                className={`grid grid-cols-12 p-space-md font-body-sm items-center ${i % 2 === 1 ? 'bg-surface-container/40' : ''}`}
              >
                <div className="col-span-5 font-mono-code text-on-surface">{row.dim}</div>
                <div className="col-span-3 text-secondary">{row.legacy}</div>
                <div className="col-span-4 font-mono-code text-emerald-400 font-semibold">{row.target}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {section.kind === 'role-bullets' && section.bullets && (
        <ul className="flex flex-col gap-space-xs font-body-md text-secondary pl-space-md list-disc max-w-max-width-reading">
          {section.bullets.map((bullet) => (
            <li key={bullet.head}>
              <strong className="text-on-surface">{bullet.head}:</strong> {bullet.text}
            </li>
          ))}
        </ul>
      )}

      {section.kind === 'approach-code' && section.codeLines && (
        <div className="bg-surface-container-lowest rounded p-space-md font-mono-code text-[12px] flex flex-col gap-2 overflow-x-auto text-on-surface">
          {section.codeCaption && <div className="text-outline">{section.codeCaption}</div>}
          {section.codeLines.map((line, i) => (
            <div key={i} className={codeToneStyles[line.tone]}>
              {line.text}
            </div>
          ))}
        </div>
      )}

      {section.kind === 'blueprint' && (
        <div className="w-full bg-surface-container-low rounded p-space-lg flex flex-col items-center justify-center">
          <TopologyDiagram />
          <span className="font-mono-label text-outline mt-space-sm text-center">
            FIG [N]: [TOPOLOGY CAPTION]
          </span>
        </div>
      )}

      {section.kind === 'challenge-solution' && section.solution && (
        <div className="bg-surface-container p-space-md rounded flex flex-col gap-space-xs my-space-xs max-w-max-width-reading">
          <span className="font-headline-sm text-on-surface">{section.solution.title}</span>
          <p className="font-body-md text-secondary">{section.solution.text}</p>
        </div>
      )}

      {section.kind === 'metrics-log' && (
        <>
          {section.metrics && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
              {section.metrics.map((metric) => (
                <div key={metric.label} className="bg-surface-container p-space-lg rounded flex flex-col justify-between gap-space-sm">
                  <span className="font-mono-label text-outline uppercase">{metric.label}</span>
                  <div className="flex flex-col">
                    <span className={`font-mono-metric ${metric.highlight ? 'text-tertiary' : 'text-on-surface'}`}>{metric.value}</span>
                    <span className="font-mono-code text-secondary">{metric.sublabel}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
          {section.logTitle && section.logLines && (
            <div className="bg-surface-container-lowest p-space-md rounded font-mono-code text-[11px] text-secondary flex flex-col gap-1">
              <div className="text-outline">{section.logTitle}</div>
              {section.logLines.map((line, i) => (
                <div key={i} className={logToneStyles[line.tone]}>
                  {line.text}
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </article>
  )
}

/* ── Topology blueprint (decorative; meaning carried by adjacent prose) ── */

function TopologyDiagram() {
  return (
    <svg className="w-full h-auto text-on-surface" fill="none" viewBox="0 0 760 280" aria-hidden="true">
      <rect x="20" y="30" width="180" height="90" rx="4" fill="var(--color-surface-container)" />
      <text x="35" y="58" fill="var(--color-primary)" fontFamily="var(--font-jetbrains-mono)" fontSize="12" fontWeight="700">TIER 1: [CLIENT]</text>
      <text x="35" y="78" fill="var(--color-on-surface-variant)" fontFamily="var(--font-jetbrains-mono)" fontSize="10">[CLIENT LOOP]</text>
      <text x="35" y="96" fill="var(--color-tertiary)" fontFamily="var(--font-jetbrains-mono)" fontSize="10">[CLIENT CORE]</text>
      <path d="M200 75 L280 75" stroke="var(--color-outline)" strokeDasharray="4 4" strokeWidth="2" />
      <text x="210" y="68" fill="var(--color-outline)" fontFamily="var(--font-jetbrains-mono)" fontSize="9">[PROTOCOL]</text>
      <rect x="280" y="30" width="200" height="90" rx="4" fill="var(--color-surface-container)" />
      <text x="295" y="58" fill="var(--color-primary)" fontFamily="var(--font-jetbrains-mono)" fontSize="12" fontWeight="700">TIER 2: [EDGE]</text>
      <text x="295" y="78" fill="var(--color-on-surface-variant)" fontFamily="var(--font-jetbrains-mono)" fontSize="10">[EDGE LISTENER]</text>
      <text x="295" y="96" fill="var(--color-tertiary)" fontFamily="var(--font-jetbrains-mono)" fontSize="10">[EDGE DEDUP]</text>
      <path d="M480 75 L560 75" stroke="var(--color-outline)" strokeWidth="2" />
      <text x="495" y="68" fill="var(--color-outline)" fontFamily="var(--font-jetbrains-mono)" fontSize="9">[IPC]</text>
      <rect x="560" y="30" width="180" height="90" rx="4" fill="var(--color-surface-container)" />
      <text x="575" y="58" fill="var(--color-primary)" fontFamily="var(--font-jetbrains-mono)" fontSize="12" fontWeight="700">TIER 3: [POOL]</text>
      <text x="575" y="78" fill="var(--color-on-surface-variant)" fontFamily="var(--font-jetbrains-mono)" fontSize="10">[REPLICATORS]</text>
      <text x="575" y="96" fill="var(--color-secondary)" fontFamily="var(--font-jetbrains-mono)" fontSize="10">[HEARTBEAT]</text>
      <path d="M650 120 L650 180" stroke="var(--color-outline)" strokeWidth="2" />
      <text x="660" y="155" fill="var(--color-outline)" fontFamily="var(--font-jetbrains-mono)" fontSize="9">[COMMIT]</text>
      <rect x="280" y="180" width="460" height="70" rx="4" fill="var(--color-surface-container-high)" />
      <text x="300" y="210" fill="var(--color-on-surface)" fontFamily="var(--font-jetbrains-mono)" fontSize="12" fontWeight="700">TIER 4: [DURABLE STORE]</text>
      <text x="300" y="232" fill="var(--color-secondary)" fontFamily="var(--font-jetbrains-mono)" fontSize="10">[COMPACTION] • [SLICES] • [DELTA LOGS]</text>
    </svg>
  )
}
