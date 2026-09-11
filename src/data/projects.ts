import { profile } from './profile'

export interface ProjectMetric {
  label: string
  value: string
  sublabel: string
  highlight?: boolean
}

export interface ProjectLink {
  label: string
  href: string
  variant: 'primary' | 'secondary' | 'ghost'
  icon?: string
}

export interface ProjectStatus {
  label: string
  color: 'primary' | 'tertiary' | 'surface' | 'neutral'
}

export interface VisualCard {
  label: string
  type: 'diagram' | 'sparkline' | 'memory-grid' | 'telemetry'
  statusLabel?: string
  statusType?: 'live' | 'stable'
}

/** Media reference. Absent = render the existing placeholder/evidence UI. */
export interface ProjectMedia {
  src: string
  alt: string
  caption?: string
}

/**
 * Per-project Case Study content override (data only, no JSX).
 * Every field is optional: absent fields fall back to the shared
 * placeholder dossier template in `getCaseStudy()`.
 * Supported structured sections: overview, context, problem, goals,
 * approach, architecture, technicalDecisions, implementation,
 * challenges, solution, outcomes, lessons, evidence, sandbox, gallery.
 * Override them by supplying `sections`, `sidebar`, or `sandbox`
 * using the shared `DossierSection` / `SidebarSpec` / `SandboxSpec`
 * types declared below.
 */
export interface ProjectCaseStudyOverride {
  lede?: string
  role?: string
  duration?: string
  topology?: string
  benchmark?: Partial<{ label: string; value: string; note: string; caption: string }>
  sandboxAction?: string
  sourceLabel?: string
  sourceHref?: string
  specAction?: string
  sections?: DossierSection[]
  sidebar?: Partial<SidebarSpec>
  sandbox?: Partial<SandboxSpec>
}

export interface Project {
  /* ── IDENTITY (required) ── */
  id: string
  index: string
  title: string
  category: string
  categories: string[]
  year: string
  status: ProjectStatus[]
  /* ── DESCRIPTION (required) ── */
  description: string
  /* ── ROLE / TECH / METRICS / LINKS / FLAGS (required containers) ── */
  technologies: string[]
  metrics: ProjectMetric[]
  links: ProjectLink[]
  featured: boolean
  visual?: VisualCard
  /* ── 9B CANONICAL SCHEMA (all optional; absent = genuinely unknown) ── */
  slug?: string
  shortTitle?: string
  shortDescription?: string
  role?: string
  sortOrder?: number
  image?: ProjectMedia
  architectureImage?: ProjectMedia
  gallery?: ProjectMedia[]
  liveUrl?: string
  sourceUrl?: string
  caseStudy?: ProjectCaseStudyOverride
}
/**
 * Shared dossier content for reserved (not-yet-documented) slots.
 * Renders an intentional "in preparation" state through the existing
 * CaseStudy presentation — no fabricated benchmarks, results, or scale.
 * Real projects replace this with their own `caseStudy` override.
 */
const upcomingCaseStudy: ProjectCaseStudyOverride = {
  lede: 'This case study has not been written yet. The visuals on this page are interface previews, not project results.',
  duration: '—',
  topology: '—',
  benchmark: {
    label: 'STATUS',
    value: '—',
    note: 'No data published',
    caption: 'Awaiting documentation',
  },
  sandboxAction: 'OPEN INTERFACE PREVIEW',
  sections: [
    {
      index: '01',
      code: 'IN_PREPARATION',
      title: 'Case Study in Preparation',
      kind: 'overview',
      body: [
        'Full documentation — context, approach, decisions, and outcomes — will be published here once this case study is written.',
      ],
    },
  ],
  sidebar: {
    title: 'AT A GLANCE',
    fields: [
      { label: 'Status', value: 'Reserved slot' },
      { label: 'Documentation', value: 'In preparation' },
    ],
    sparkLabel: 'STATUS',
    sparkValue: '—',
    sparkCaption: 'No telemetry published',
    proofs: [],
  },
};

export const projects: Project[] = [
  {
    id: 'proj-01',
    index: 'SYS_01',
    title: 'Upcoming Case Study 01',
    category: 'upcoming',
    categories: ['Upcoming'],
    description:
      'This slot is reserved for a future case study. No project details have been published yet.',
    year: '—',
    status: [{ label: 'RESERVED', color: 'neutral' }],
    technologies: [],
    metrics: [{ label: 'STATUS', value: '—', sublabel: 'Awaiting documentation' }],
    links: [
      { label: 'View Case Study', href: '#case-study', variant: 'primary' },
    ],
    featured: true,
    visual: { label: 'INTERFACE PREVIEW', type: 'diagram', statusLabel: 'ILLUSTRATIVE ONLY', statusType: 'stable' },
    caseStudy: upcomingCaseStudy,
  },
  {
    id: 'proj-02',
    index: 'SYS_02',
    title: 'Upcoming Case Study 02',
    category: 'upcoming',
    categories: ['Upcoming'],
    description:
      'This slot is reserved for a future case study. No project details have been published yet.',
    year: '—',
    status: [{ label: 'RESERVED', color: 'neutral' }],
    technologies: [],
    metrics: [{ label: 'STATUS', value: '—', sublabel: 'Awaiting documentation' }],
    links: [
      { label: 'View Case Study', href: '#case-study', variant: 'secondary' },
    ],
    featured: false,
    visual: { label: 'INTERFACE PREVIEW', type: 'sparkline', statusLabel: 'ILLUSTRATIVE ONLY', statusType: 'stable' },
    caseStudy: upcomingCaseStudy,
  },
  {
    id: 'proj-03',
    index: 'SYS_03',
    title: 'Upcoming Case Study 03',
    category: 'upcoming',
    categories: ['Upcoming'],
    description:
      'This slot is reserved for a future case study. No project details have been published yet.',
    year: '—',
    status: [{ label: 'RESERVED', color: 'neutral' }],
    technologies: [],
    metrics: [{ label: 'STATUS', value: '—', sublabel: 'Awaiting documentation' }],
    links: [
      { label: 'View Case Study', href: '#case-study', variant: 'primary' },
    ],
    featured: false,
    visual: { label: 'INTERFACE PREVIEW', type: 'memory-grid', statusLabel: 'ILLUSTRATIVE ONLY', statusType: 'stable' },
    caseStudy: upcomingCaseStudy,
  },
  {
    id: 'proj-04',
    index: 'SYS_04',
    title: 'Upcoming Case Study 04',
    category: 'upcoming',
    categories: ['Upcoming'],
    description:
      'This slot is reserved for a future case study. No project details have been published yet.',
    year: '—',
    status: [{ label: 'RESERVED', color: 'neutral' }],
    technologies: [],
    metrics: [{ label: 'STATUS', value: '—', sublabel: 'Awaiting documentation' }],
    links: [
      { label: 'View Case Study', href: '#case-study', variant: 'ghost' },
    ],
    featured: false,
    caseStudy: upcomingCaseStudy,
  },
  {
    id: 'proj-05',
    index: 'SYS_05',
    title: 'Upcoming Case Study 05',
    category: 'upcoming',
    categories: ['Upcoming'],
    description:
      'This slot is reserved for a future case study. No project details have been published yet.',
    year: '—',
    status: [{ label: 'RESERVED', color: 'neutral' }],
    technologies: [],
    metrics: [{ label: 'STATUS', value: '—', sublabel: 'Awaiting documentation' }],
    links: [
      { label: 'View System Story', href: '#case-study', variant: 'ghost' },
    ],
    featured: false,
    caseStudy: upcomingCaseStudy,
  },
]

/* ═══════════════════════════════════════════════════
   9B — CANONICAL REGISTRY HELPERS (data-only layer)
   Work / Grid / Card / CaseStudy all derive from `projects`.
   Adding, removing, renaming, reordering, or featuring a
   project requires editing ONLY the registry above.
   Slug / ID rule: `id` is `proj-NN`, `slug` is kebab-case.
   Both must be unique. Navigation resolves either one.
   Ordering: explicit `sortOrder` wins; otherwise registry order.
   Featured: `featured: true` drives flagship presentation.
   ═══════════════════════════════════════════════════ */

/** Ordered registry: explicit `sortOrder` first, registry order as tiebreak. */
export function getOrderedProjects(list: Project[] = projects): Project[] {
  return [...list].sort((a, b) => {
    const ao = a.sortOrder ?? Number.POSITIVE_INFINITY
    const bo = b.sortOrder ?? Number.POSITIVE_INFINITY
    if (ao !== bo) return ao - bo
    return list.indexOf(a) - list.indexOf(b)
  })
}

/** Stable identity lookup: matches `id` first, then `slug`. Never array indexes. */
export function resolveProject(idOrSlug: string, list: Project[] = projects): Project | undefined {
  return list.find((p) => p.id === idOrSlug) ?? list.find((p) => p.slug === idOrSlug)
}

/** Flagship project: first `featured: true` in ordered registry, else first project. */
export function getFeaturedProject(list: Project[] = projects): Project | undefined {
  const ordered = getOrderedProjects(list)
  return ordered.find((p) => p.featured) ?? ordered[0]
}

/**
 * Optional external destinations. Absent or blank = render NO active
 * Live Demo / Source Code button. Never synthesize `href="#"`.
 */
export function getProjectExternalLinks(project: Project): { liveUrl?: string; sourceUrl?: string } {
  const out: { liveUrl?: string; sourceUrl?: string } = {}
  if (project.liveUrl?.trim()) out.liveUrl = project.liveUrl.trim()
  if (project.sourceUrl?.trim()) out.sourceUrl = project.sourceUrl.trim()
  return out
}

/**
 * Lightweight content validation (zero dependencies).
 * Returns human-readable errors; empty array = valid.
 * TypeScript already enforces required fields at compile time;
 * this catches duplicates, bad slugs, and malformed URLs at dev time.
 */
export function validateProjectRegistry(list: Project[] = projects): string[] {
  const errors: string[] = []
  const ids = new Set<string>()
  const slugs = new Set<string>()
  for (const p of list) {
    if (!p.id?.trim()) errors.push('[project] missing required "id"')
    else if (ids.has(p.id)) errors.push(`[project ${p.id}] duplicate id`)
    else ids.add(p.id)
    if (p.slug !== undefined) {
      if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(p.slug))
        errors.push(`[project ${p.id}] slug "${p.slug}" must be kebab-case`)
      else if (slugs.has(p.slug)) errors.push(`[project ${p.id}] duplicate slug "${p.slug}"`)
      else slugs.add(p.slug)
    }
    if (!p.title?.trim()) errors.push(`[project ${p.id}] missing required "title"`)
    if (!p.category?.trim()) errors.push(`[project ${p.id}] missing required "category"`)
    if (!p.description?.trim()) errors.push(`[project ${p.id}] missing required "description"`)
    if (p.liveUrl !== undefined && !/^https?:\/\//.test(p.liveUrl))
      errors.push(`[project ${p.id}] liveUrl must be an absolute http(s) URL`)
    if (p.sourceUrl !== undefined && !/^https?:\/\//.test(p.sourceUrl))
      errors.push(`[project ${p.id}] sourceUrl must be an absolute http(s) URL`)
  }
  return errors
}

export function getProjectCategories(list: Project[] = projects): { value: string; label: string; count: number }[] {
  const ordered = getOrderedProjects(list)
  const counts = new Map<string, number>()
  counts.set('all', ordered.length)

  for (const p of ordered) {
    const curr = counts.get(p.category) ?? 0
    counts.set(p.category, curr + 1)
  }

  return [
    { value: 'all', label: 'All Projects', count: ordered.length },
    ...Array.from(counts.entries())
      .filter(([k]) => k !== 'all')
      .map(([value, count]) => ({
        value,
        label: categoryLabel(value),
        count,
      })),
  ]
}

function categoryLabel(value: string): string {
  const map: Record<string, string> = {
    distributed: 'Distributed Systems',
    fintech: 'Fintech Infrastructure',
    tooling: 'Developer Tooling & UI',
    upcoming: 'Upcoming',
  }
  return map[value] ?? value
}

export function filterProjects(
  projectList: Project[],
  category: string,
  search: string
): Project[] {
  const term = search.toLowerCase().trim()

  return projectList.filter((p) => {
    const matchesCategory = category === 'all' || p.category === category

    if (!matchesCategory) return false
    if (!term) return true

    const searchable = [
      p.title,
      p.shortTitle ?? '',
      p.description,
      p.shortDescription ?? '',
      p.category,
      p.slug ?? '',
      p.role ?? '',
      ...p.categories,
      ...p.technologies,
    ]
      .join(' ')
      .toLowerCase()

    return searchable.includes(term)
  })
}

/* ═══════════════════════════════════════════════════
   CASE STUDY / TECHNICAL DOSSIER MODEL
   All sample content is bracketed placeholders.
   ═══════════════════════════════════════════════════ */

export interface CaseStudyBullet {
  head: string
  text: string
}

export interface CaseStudyCard {
  title: string
  text: string
}

export interface CaseStudyTableRow {
  dim: string
  legacy: string
  target: string
}

export type CaseStudyCodeTone = 'comment' | 'keyword' | 'type' | 'accent' | 'plain'

export interface CaseStudyCodeLine {
  text: string
  tone: CaseStudyCodeTone
}

export type CaseStudyLogTone = 'ok' | 'plain' | 'muted' | 'accent'

export interface CaseStudyLogLine {
  text: string
  tone: CaseStudyLogTone
}

export type DossierSectionKind =
  | 'overview'
  | 'problem-cards'
  | 'spec-table'
  | 'role-bullets'
  | 'approach-code'
  | 'blueprint'
  | 'challenge-solution'
  | 'metrics-log'
  | 'retrospective'

export interface DossierSection {
  index: string
  code: string
  title: string
  kind: DossierSectionKind
  body: string[]
  anchorId?: string
  callout?: { label: string; meta: string; quote: string }
  cards?: CaseStudyCard[]
  tableHead?: [string, string, string]
  tableRows?: CaseStudyTableRow[]
  bullets?: CaseStudyBullet[]
  codeCaption?: string
  codeLines?: CaseStudyCodeLine[]
  solution?: { title: string; text: string }
  metrics?: ProjectMetric[]
  logTitle?: string
  logLines?: CaseStudyLogLine[]
}

export interface SandboxSpec {
  title: string
  busLabel: string
  nodes: string[]
  burstLabel: string
  clearLabel: string
  seedLog: CaseStudyLogLine[]
}

export interface SidebarSpec {
  title: string
  fields: { label: string; value: string }[]
  modulesLabel: string
  modules: string[]
  sparkLabel: string
  sparkValue: string
  sparkCaption: string
  proofs: { label: string; caption: string }[]
}

export interface CaseStudy {
  projectId: string
  ref: string
  categoryPath: string
  healthLabel: string
  specChip: string
  rev: string
  title: string
  lede: string
  benchmark: { label: string; value: string; note: string; caption: string }
  ribbon: { label: string; value: string }[]
  sandboxAction: string
  sourceLabel?: string
  sourceHref?: string
  specAction: string
  sandbox: SandboxSpec
  sections: DossierSection[]
  sidebar: SidebarSpec
}

/**
 * Ordered-registry fallback: featured flagship first, else first project.
 * Never hard-codes `projects[0]` as the featured presentation.
 */
function firstProject(): Project {
  const project = getFeaturedProject() ?? getOrderedProjects()[0]
  if (!project) throw new Error('Project registry is empty')
  return project
}

export function getCaseStudy(projectId: string): CaseStudy {
  const project = resolveProject(projectId) ?? firstProject()
  const override = project.caseStudy
  const external = getProjectExternalLinks(project)
  const category = project.categories[0] ?? project.category
  const techList = project.technologies.join(', ')

  return {
    projectId: project.id,
    ref: 'REF: [REF]',
    categoryPath: category.toUpperCase(),
    healthLabel: 'STATUS: DOCUMENTATION PENDING',
    specChip: 'Case Study',
    rev: 'REV [VERSION] • [DATE]',
    title: project.title,
    lede: override?.lede ?? project.description,
    benchmark: {
      label: 'PRIMARY TARGET BENCHMARK',
      value: '[BENCHMARK]',
      note: '[BENCHMARK NOTE]',
      caption: '[BASELINE COMPARISON]',
      ...override?.benchmark,
    },
    ribbon: [
      { label: 'Principal Role', value: override?.role ?? project.role ?? profile.role },
      { label: 'Execution Cadence', value: override?.duration ?? '[DURATION]' },
      { label: 'Runtime Topology', value: override?.topology ?? '[TOPOLOGY]' },
      { label: 'Stack Infrastructure', value: techList },
    ],
    sandboxAction: override?.sandboxAction ?? 'OPEN INTERFACE PREVIEW',
    // Real source URL (data-driven) → visible action; otherwise stays hidden.
    sourceLabel: override?.sourceLabel ?? (external.sourceUrl ? 'View Source' : undefined),
    sourceHref: override?.sourceHref ?? external.sourceUrl,
    specAction: override?.specAction ?? 'SPEC [RFC] [WHITE PAPER]',
    sandbox: {
      title: '[SIMULATOR TITLE]',
      busLabel: 'SPATIAL CANVAS VECTOR BUS',
      nodes: ['N_01', 'N_02', 'N_03', 'N_04', 'N_05', 'N_06'],
      burstLabel: 'INJECT [N] CONCURRENT CONFLICTS',
      clearLabel: 'RESET [STORE]',
      seedLog: [
        { text: '> [PROTOCOL] Handshake validated.', tone: 'ok' },
        { text: '> [STATE] Snapshot anchored @ [EPOCH].', tone: 'plain' },
        { text: '> Listening on [STREAM]...', tone: 'muted' },
      ],
      ...override?.sandbox,
    },
    sections: override?.sections ?? [
      {
        index: '01',
        code: 'EXECUTIVE_OVERVIEW',
        title: '[OVERVIEW TITLE]',
        kind: 'overview',
        body: ['[PROJECT OVERVIEW]'],
        callout: {
          label: '[FINDING LABEL]',
          meta: '[FINDING META]',
          quote: '[CRITICAL SYSTEM FINDING]',
        },
      },
      {
        index: '02',
        code: 'PROBLEM_FORMULATION',
        title: '[PROBLEM TITLE]',
        kind: 'problem-cards',
        body: ['[PROBLEM]'],
        cards: [
          { title: '[BOTTLENECK 1]', text: '[BOTTLENECK DESCRIPTION 1]' },
          { title: '[BOTTLENECK 2]', text: '[BOTTLENECK DESCRIPTION 2]' },
          { title: '[BOTTLENECK 3]', text: '[BOTTLENECK DESCRIPTION 3]' },
        ],
      },
      {
        index: '03',
        code: 'SPECIFICATION_TARGETS',
        title: '[TARGETS TITLE]',
        kind: 'spec-table',
        body: [],
        tableHead: ['Metric / Dimension', 'Legacy Baseline', '[PROJECT] Target SLA'],
        tableRows: [
          { dim: '[DIMENSION 1]', legacy: '[LEGACY 1]', target: '[TARGET 1]' },
          { dim: '[DIMENSION 2]', legacy: '[LEGACY 2]', target: '[TARGET 2]' },
          { dim: '[DIMENSION 3]', legacy: '[LEGACY 3]', target: '[TARGET 3]' },
          { dim: '[DIMENSION 4]', legacy: '[LEGACY 4]', target: '[TARGET 4]' },
        ],
      },
      {
        index: '04',
        code: 'LEADERSHIP_AND_METHODOLOGY',
        title: '[ROLE TITLE]',
        kind: 'role-bullets',
        body: ['[ROLE OVERVIEW]'],
        bullets: [
          { head: '[RESPONSIBILITY 1]', text: '[RESPONSIBILITY DETAIL 1]' },
          { head: '[RESPONSIBILITY 2]', text: '[RESPONSIBILITY DETAIL 2]' },
          { head: '[RESPONSIBILITY 3]', text: '[RESPONSIBILITY DETAIL 3]' },
        ],
      },
      {
        index: '05',
        code: 'SYSTEM_APPROACH',
        title: '[APPROACH TITLE]',
        kind: 'approach-code',
        body: ['[APPROACH OVERVIEW]'],
        codeCaption: '[SCHEMA CAPTION]',
        codeLines: [
          { text: '// [SCHEMA COMMENT]', tone: 'comment' },
          { text: '[ANNOTATION]', tone: 'accent' },
          { text: '[STRUCT DEFINITION] {', tone: 'keyword' },
          { text: '  [FIELD 1],  // [FIELD COMMENT 1]', tone: 'plain' },
          { text: '  [FIELD 2],  // [FIELD COMMENT 2]', tone: 'plain' },
          { text: '}', tone: 'plain' },
        ],
      },
      {
        index: '06',
        code: 'TOPOLOGY_BLUEPRINT',
        title: '[ARCHITECTURE TITLE]',
        kind: 'blueprint',
        body: ['[ARCHITECTURE OVERVIEW]'],
        anchorId: 'architecture',
      },
      {
        index: '07',
        code: 'ENGINEERING_CHALLENGES',
        title: '[CHALLENGE TITLE]',
        kind: 'challenge-solution',
        body: ['[CHALLENGE]'],
        solution: { title: '[SOLUTION TITLE]', text: '[SOLUTION]' },
      },
      {
        index: '08',
        code: 'PRODUCTION_METRICS',
        title: '[RESULTS TITLE]',
        kind: 'metrics-log',
        body: [],
        metrics: project.metrics.map((m) => ({ ...m })),
        logTitle: '[BENCHMARK RUN TITLE]',
        logLines: [
          { text: '[BENCH_01] [BENCHMARK STEP 1]', tone: 'plain' },
          { text: '[BENCH_02] [BENCHMARK STEP 2]', tone: 'plain' },
          { text: '[BENCH_03] [BENCHMARK STEP 3]', tone: 'plain' },
          { text: '[BENCH_04] [BENCHMARK RESULT]', tone: 'ok' },
        ],
      },
      {
        index: '09',
        code: 'POST_MORTEM_RETROSPECTIVE',
        title: '[RETROSPECTIVE TITLE]',
        kind: 'retrospective',
        body: ['[LESSONS LEARNED]'],
      },
    ],
    sidebar: {
      title: '[SPEC CARD TITLE]',
      fields: [
        { label: 'Network Transport', value: '[TRANSPORT]' },
        { label: 'Serialization Format', value: '[FORMAT]' },
        { label: 'Consensus Algorithm', value: '[ALGORITHM]' },
      ],
      modulesLabel: 'Core Repository Modules',
      modules: project.technologies.slice(0, 4).map((t) => t.toLowerCase().replace(/[\s_]+/g, '-')),
      sparkLabel: '[TELEMETRY LABEL]',
      sparkValue: '[TELEMETRY VALUE]',
      sparkCaption: '[TELEMETRY CAPTION]',
      proofs: [
        { label: '[EVIDENCE LABEL 1]', caption: '[EVIDENCE CAPTION 1]' },
        { label: '[EVIDENCE LABEL 2]', caption: '[EVIDENCE CAPTION 2]' },
      ],
      ...override?.sidebar,
    },
  }
}

export function getAdjacentProjects(projectId: string): {
  prev: Project
  next: Project
} {
  const ordered = getOrderedProjects()
  const found = ordered.findIndex((p) => p.id === projectId || p.slug === projectId)
  const idx = found >= 0 ? found : 0
  const prev = ordered[(idx - 1 + ordered.length) % ordered.length]
  const next = ordered[(idx + 1) % ordered.length]
  if (!prev || !next) throw new Error('Project registry is empty')
  return { prev, next }
}