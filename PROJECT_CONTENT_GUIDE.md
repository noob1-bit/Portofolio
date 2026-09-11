# Project Content Guide (Phase 9B)

`src/data/projects.ts` is the single canonical source for portfolio project
content. UI components (`ProjectCard`, `ProjectGrid`, `Work`, `CaseStudy`,
`App`) only present data — never edit them to change content.

Template with placeholders: `src/data/project-template.ts` (not in the registry).

## 1. How to add a project

1. Copy `projectTemplate` from `src/data/project-template.ts`.
2. Append it to the `projects` array in `src/data/projects.ts`.
3. Give it a unique `id` (`proj-NN`) and unique `slug` (kebab-case).
4. Run `npm run build` (runs typecheck + production build).

The project automatically participates in category counts, filtering, search,
grid rendering, and Case Study prev/next navigation.

## 2. Required fields

`id`, `index` (display code, e.g. `SYS_01`), `title`, `category` (filter key),
`categories` (display tags), `description`, `year`, `status`, `technologies`,
`metrics`, `links`, `featured`. TypeScript fails the build if any are missing.

## 3. Optional fields

`slug`, `shortTitle`, `shortDescription`, `role`, `sortOrder`, `image`,
`architectureImage`, `gallery`, `liveUrl`, `sourceUrl`, `caseStudy`, `visual`.
Omit them when the information is genuinely unavailable.

## 4. How to add technologies

Edit `technologies: ['[TECH_1]', ...]` on the project record. Search and filter
pick them up automatically. Never invent stacks for real projects.

## 5. How to add metrics

Edit the `metrics` array (`{ label, value, sublabel, highlight? }`). Use
`[METRIC]` / `[VALUE]` placeholders when numbers are unknown — never invent
user counts, revenue, uptime, or performance figures.

## 6. How to add images

```ts
image: { src: '/images/[project].png', alt: '[meaningful alt text]' },
architectureImage: { src: '/images/[project]-arch.png', alt: '[diagram description]' },
gallery: [{ src: '/images/[project]-1.png', alt: '[alt]', caption: '[caption]' }],
```

Place files under `public/images/`. Missing media renders the existing
placeholder/evidence UI. Never hotlink random external images.

## 7. How to add a live URL

```ts
liveUrl: 'https://example.com/[project]',
```

Absolute `http(s)` URL only. When absent, no active Live Demo button renders.

## 8. How to add a GitHub / source URL

```ts
sourceUrl: 'https://github.com/[username]/[repo]',
```

Absolute `http(s)` URL only. It automatically enables the Case Study source
action. When absent, the action stays hidden. Never commit fake repo URLs.

## 9. How to add Case Study content

Add a `caseStudy` override on the project record:

```ts
caseStudy: {
  lede: '[PROJECT OVERVIEW]',
  role: '[YOUR ROLE]',
  duration: '[DURATION]',
  topology: '[TOPOLOGY]',
  sections: [ /* DossierSection[]: overview, problem-cards, spec-table,
                 role-bullets, approach-code, blueprint,
                 challenge-solution, metrics-log, retrospective */ ],
  sidebar: { /* Partial<SidebarSpec> */ },
  sandbox: { /* Partial<SandboxSpec> */ },
},
```

Omitted fields fall back to the shared placeholder dossier. Content lives in
data; `CaseStudy.tsx` only handles presentation — never put JSX in records.

## 10. How to mark placeholders

Use explicit brackets: `[PROJECT TITLE]`, `[PROJECT DESCRIPTION]`, `[YOUR ROLE]`,
`[TECH_1]`, `[METRIC]`, `[VALUE_1]`. They render visibly so missing content is
obvious and never mistaken for real data.

## 11. How to make a project featured

Set `featured: true` on exactly one project (the flagship). `ProjectGrid`
renders featured records first and `App` opens the featured dossier by default.
Never hard-code `projects[0]` — use `getFeaturedProject()`.

## 12. How to control project ordering

Set `sortOrder: 1, 2, 3, …` (lowest first). Records without `sortOrder` keep
registry order after ordered ones. `getOrderedProjects()` is the single
ordering source for filters, grid, and Case Study navigation.

## Helpers

- `resolveProject(idOrSlug)` — stable lookup by `id` or `slug` (never indexes).
- `getOrderedProjects()` — explicit ordering.
- `getFeaturedProject()` — flagship resolution.
- `getProjectCategories(list?)` / `filterProjects(list, category, search)` —
  derived from data; search covers title, descriptions, category, slug, role,
  tags, and technologies.
- `getCaseStudy(idOrSlug)` / `getAdjacentProjects(idOrSlug)` — accept id or slug.
- `validateProjectRegistry()` — returns string errors (duplicates, bad slugs,
  malformed URLs); empty means valid. No extra dependencies.
