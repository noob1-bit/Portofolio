import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { getOrderedProjects, getProjectCategories, filterProjects } from '@/data/projects'
import { ProjectGrid } from '@/components/ProjectGrid'

type FilterValue = string

export function Work({ onOpenCaseStudy }: { onOpenCaseStudy?: (id: string) => void }) {
  const [activeFilter, setActiveFilter] = useState<FilterValue>('all')
  const [searchTerm, setSearchTerm] = useState('')
  const searchRef = useRef<HTMLInputElement>(null)

  /* Ordered registry: `sortOrder` wins, otherwise registry order. Data-driven. */
  const ordered = useMemo(() => getOrderedProjects(), [])
  const categories = useMemo(() => getProjectCategories(ordered), [ordered])

  const filtered = useMemo(
    () => filterProjects(ordered, activeFilter, searchTerm),
    [ordered, activeFilter, searchTerm]
  )

  /* ── ESC clears search ── */
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && document.activeElement === searchRef.current) {
        setSearchTerm('')
        searchRef.current?.blur()
      }
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [])

  const handleFilter = useCallback((value: string) => {
    setActiveFilter(value)
  }, [])

  return (
    <section id="work" aria-labelledby="work-heading">
      {/* ── Section header ── */}
      <div className="w-full bg-surface-container-lowest">
        <div className="content-wrapper pt-space-2xl pb-space-xl">
          {/* Eyebrow */}
          <div className="flex flex-wrap items-center justify-between gap-space-sm mb-space-md">
            <div className="flex items-center gap-space-sm">
              <span className="font-mono-label text-primary uppercase tracking-widest">
                ARCHITECTURAL CATALOGUE
              </span>
              <span className="font-mono-label text-outline-variant">/</span>
              <span className="font-mono-label text-on-surface-variant uppercase">
                VOL. 01 — WORK INDEX
              </span>
            </div>
            <div className="flex items-center gap-space-xs px-space-sm py-space-xs rounded bg-surface-container-low">
              <span className="w-1.5 h-1.5 rounded-full bg-tertiary" />
              <span className="font-mono-label text-secondary">
                WORK INDEX: {ordered.length} ENTRIES
              </span>
            </div>
          </div>

          {/* Heading + telemetry */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg mb-space-2xl">
            <div>
              <h2 id="work-heading" className="font-headline-lg text-on-surface font-semibold tracking-tight mb-space-sm">
                01 / Index of Systems &amp; Production Work
              </h2>
              <p className="font-body-lg text-on-surface-variant max-w-max-width-reading">
                Selected work documentation is in progress. Case studies will be published here as they are completed.
              </p>
            </div>
            <div className="flex items-center gap-space-md shrink-0">
              <div className="flex flex-col text-right">
                <span className="font-mono-metric text-on-surface">—</span>
                <span className="font-mono-label text-outline uppercase">PUBLISHED CASE STUDIES</span>
              </div>
              <div className="flex flex-col text-right pl-space-md border-l border-outline-variant/30">
                <span className="font-mono-metric text-tertiary">—</span>
                <span className="font-mono-label text-outline uppercase">LIVE DEMOS</span>
              </div>
            </div>
          </div>

          {/* Taxonomy controls */}
          <div className="p-space-xs rounded bg-surface-container-low shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
            <div className="flex flex-wrap items-center gap-space-xs" role="group" aria-label="Filter projects by category">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  type="button"
                  aria-pressed={activeFilter === cat.value}
                  onClick={() => handleFilter(cat.value)}
                  className={[
                    'px-space-md py-space-xs rounded font-mono-label uppercase tracking-wide transition-all',
                    activeFilter === cat.value
                      ? 'bg-surface-container-high text-on-surface'
                      : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container',
                  ].join(' ')}
                >
                  {cat.label} ({cat.count})
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="flex items-center gap-space-sm px-space-sm py-1 bg-surface-container-lowest rounded-lg w-full lg:w-auto">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-outline shrink-0" aria-hidden="true">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                ref={searchRef}
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Filter by tech stack or keywords..."
                className="bg-transparent font-mono-code text-on-surface placeholder:text-outline w-full lg:w-80"
                aria-label="Filter projects by tech stack or keywords"
              />
              <span className="font-mono-label text-outline hidden sm:inline px-1 py-0.5 rounded bg-surface-container">
                ESC
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Project list ── */}
      <div className="w-full py-space-3xl">
        <div className="content-wrapper flex flex-col gap-space-2xl">
          <ProjectGrid projects={filtered} onOpenCaseStudy={onOpenCaseStudy} />
        </div>
      </div>

      {/* ── Advisory strip ── */}
      <div className="w-full bg-surface-container-lowest py-space-2xl">
        <div className="content-wrapper">
          <div className="p-space-xl rounded bg-surface-container-low shadow-sm flex flex-col lg:flex-row items-start lg:items-center justify-between gap-space-xl">
            <div className="max-w-max-width-reading">
              <div className="flex items-center gap-space-xs mb-space-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="font-mono-label text-secondary uppercase">
                  CONSULTING &amp; FRACTIONAL ARCHITECTURE
                </span>
              </div>
              <h3 className="font-headline-md text-on-surface font-semibold tracking-tight mb-space-xs">
                Architectural Audits &amp; High-Throughput Advisory
              </h3>
              <p className="font-body-md text-on-surface-variant">
                New entries appear here as work is documented.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-space-md shrink-0">
              <a
                href="#contact"
                className="inline-flex items-center gap-space-xs px-space-xl py-3 rounded bg-primary-container text-on-primary-container font-headline-sm text-sm font-medium hover:bg-primary hover:text-on-primary transition-all"
              >
                <span>INITIATE ARCHITECTURAL REVIEW</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <a
                href="#experience"
                className="inline-flex items-center px-space-md py-3 rounded bg-surface-container text-on-surface font-mono-label uppercase hover:bg-surface-container-high transition-all"
              >
                REVIEW FULL CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}