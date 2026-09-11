/**
 * PROJECT CREATION TEMPLATE (9B.4)
 * ─────────────────────────────────────────────────────────────
 * Copy this object into the `projects` registry in
 * `src/data/projects.ts`. It is EXAMPLE PLACEHOLDERS ONLY and
 * is intentionally NOT part of the registry.
 *
 * MINIMUM REQUIRED FIELDS: id, index, title, category,
 * categories, description, year, status, technologies,
 * metrics, links, featured.
 *
 * EVERYTHING ELSE is optional — omit it when unknown rather
 * than inventing content. Never use `href: "#"` for live/source
 * destinations; use `liveUrl` / `sourceUrl` or omit them.
 */

import type { Project } from './projects'

export const projectTemplate: Project = {
  // ── IDENTITY (required, unique) ──
  id: 'proj-NN',
  slug: 'project-name-in-kebab-case',
  index: 'SYS_NN',
  title: '[PROJECT TITLE]',
  shortTitle: '[SHORT TITLE]',
  category: '[filter-key]',
  categories: ['[Display Tag 1]', '[Display Tag 2]'],
  year: '[YEAR_RANGE]',
  status: [{ label: '[STATUS]', color: 'neutral' }],

  // ── DESCRIPTION (required) ──
  description: '[PROJECT DESCRIPTION]',
  shortDescription: '[ONE-LINE SUMMARY]',

  // ── ROLE (optional; falls back to profile.role in Case Study) ──
  role: '[YOUR ROLE]',

  // ── TECHNOLOGY (required container; use placeholders when unknown) ──
  technologies: ['[TECH_1]', '[TECH_2]'],

  // ── METRICS (required container; placeholders only, never invented) ──
  metrics: [
    { label: '[METRIC_1]', value: '[VALUE_1]', sublabel: '[SUBLABEL_1]' },
  ],

  // ── LINKS (required container) ──
  // Case-study entries use `href: '#case-study'` (handled by the UI).
  // Do NOT add live/source entries with `href: "#"`.
  links: [
    { label: 'Read Comprehensive Case Study', href: '#case-study', variant: 'primary' },
  ],

  // ── FLAGS (required) ──
  featured: false,
  sortOrder: 10,

  // ── VISUAL (optional; omit → compact card layout) ──
  visual: { label: '[TELEMETRY_LABEL]', type: 'diagram' },

  // ── MEDIA / EVIDENCE (optional; omit → placeholder UI) ──
  // image: { src: '/images/[project].png', alt: '[meaningful alt text]' },
  // architectureImage: { src: '/images/[project]-arch.png', alt: '[diagram alt text]' },
  // gallery: [{ src: '/images/[project]-1.png', alt: '[alt]', caption: '[caption]' }],

  // ── EXTERNAL DESTINATIONS (optional; omit → no active button) ──
  // liveUrl: 'https://example.com/[project]',
  // sourceUrl: 'https://github.com/[username]/[repo]',

  // ── CASE STUDY (optional; omit → shared placeholder dossier) ──
  // caseStudy: {
  //   lede: '[PROJECT OVERVIEW]',
  //   role: '[YOUR ROLE]',
  //   duration: '[DURATION]',
  //   topology: '[TOPOLOGY]',
  //   sections: [
  //     {
  //       index: '01',
  //       code: 'EXECUTIVE_OVERVIEW',
  //       title: '[OVERVIEW TITLE]',
  //       kind: 'overview',
  //       body: ['[PROJECT OVERVIEW]'],
  //     },
  //   ],
  // },
}
