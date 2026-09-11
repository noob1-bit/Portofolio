# Design Implementation

## Token Source

All design tokens are sourced from `ui ux/editorial_engineering/DESIGN.md` (frontmatter) and verified against the Stitch-generated `code.html` exports in `ui ux/`. The Brand & Style prose section of DESIGN.md provides semantic context for token usage.

---

## Color Tokens

Defined in `src/styles/globals.css` via `@theme`. Values match DESIGN.md frontmatter and Stitch output.

| Token | Value | Usage |
|---|---|---|
| `surface` | `#121316` | Main page background |
| `surface-container-lowest` | `#0d0e11` | Alternate section background |
| `surface-container-low` | `#1b1b1f` | Card / elevated surface |
| `surface-container` | `#1f1f23` | Card hover / active |
| `surface-container-high` | `#292a2d` | Tag / chip background |
| `surface-container-highest` | `#343538` | Highest elevation surface |
| `on-surface` | `#e3e2e6` | Primary text (headings, high-contrast) |
| `on-surface-variant` | `#c2c6d8` | Secondary text (descriptions) |
| `outline` | `#8c90a1` | Muted labels, metadata |
| `outline-variant` | `#424656` | Borders, 1px structural rules |
| `primary` | `#b3c5ff` | Link accent, interactive text |
| `primary-container` | `#0066ff` | Precision cobalt — CTAs, active indicators |
| `secondary` | `#c1c7cf` | Body text, secondary content |
| `tertiary` | `#7bd0ff` | Data highlights, special accents |
| `emerald-400` | `#34d399` | Status dot (live indicator) |

### Semantic Aliases

Component-level classes in `@layer components` (`card-base`, `card-interactive`, `nav-pill`, `tag-base`, `btn-primary`, `btn-secondary`, `btn-ghost`) map colors semantically.

---

## Typography Tokens

Two font families loaded from Google Fonts (no local font files available in `ui ux/`):

- **Geist** (300–700 weight) — display, headline, body
- **JetBrains Mono** (400–600 weight) — code, labels, metrics

| Utility | Size/Line | Weight | Tracking | Use |
|---|---|---|---|---|
| `font-display-xl` | 64/70 | 600 | -0.04em | Hero name |
| `font-display-xl-mobile` | 38/44 | 600 | -0.03em | Hero name (mobile) |
| `font-headline-lg` | 40/48 | 600 | -0.03em | Section titles |
| `font-headline-lg-mobile` | 28/34 | 600 | -0.02em | Section titles (mobile) |
| `font-headline-md` | 24/32 | 500 | -0.02em | Card titles |
| `font-headline-sm` | 18/26 | 500 | -0.01em | Subtitles, nav |
| `font-body-lg` | 18/30 | 400 | -0.01em | Hero body, lede |
| `font-body-md` | 15/24 | 400 | 0em | Card description, long-form |
| `font-body-sm` | 13/20 | 400 | 0em | Small print |
| `font-mono-code` | 13/20 | 400 | -0.01em | Inline code, telemetry |
| `font-mono-label` | 11/14 | 500 | 0.06em | Tags, nav items, metadata |
| `font-mono-metric` | 32/36 | 600 | -0.03em | Data callouts, metrics |

---

## Spacing Tokens

4px baseline rhythm (`space-baseline-step: 4px`).

| Token | Value |
|---|---|
| `space-xs` | 4px |
| `space-sm` | 8px |
| `space-md` | 16px |
| `space-lg` | 24px |
| `space-xl` | 32px |
| `space-2xl` | 48px |
| `space-3xl` | 64px |
| `space-4xl` | 96px |
| `space-5xl` | 128px |

---

## Layout System

- **Content wrapper** (`content-wrapper`): 1240px max-width, responsive gutters (16px mobile, 32px desktop)
- **Reading spine** (`reading-spine`): 680px max-width for case study prose
- **Grid**: 12-column layout via Tailwind grid utilities (`grid-cols-12`)
- **Responsive collapse**: 12 cols → 8 cols (tablet) → 4 cols (mobile)
- **Section spacing**: `section-spacing` (96px vertical) / `section-spacing-sm` (64px vertical)

---

## Radius & Border

- **Card / Panel radius**: 4px (`rounded` / `--radius-default`)
- **Navigation pills**: Full (`--radius-full` / 9999px)
- **Metadata tags**: 2px radius
- **Borders**: 1px solid `outline-variant` (`#424656`)
- **No diffuse shadows**: Hierarchy via tonal layering and 1px borders only

---

## Responsive Rules

| Breakpoint | Columns | Gutter | Margin |
|---|---|---|---|
| < 768px (mobile) | 4 | 16px | 16px |
| 768–1023px (tablet) | 8 | 24px | 32px |
| ≥ 1024px (desktop) | 12 | 32px | 48px min |

Typography scales down at mobile via dedicated `-mobile` utilities (`font-display-xl-mobile`, `font-headline-lg-mobile`).

---

## Interaction Tokens

| Token | Value |
|---|---|
| `--ease-stitch-out` | `cubic-bezier(0, 0, 0.2, 1)` |
| `--ease-stitch-in` | `cubic-bezier(0.25, 0.1, 0.25, 1)` |
| `--ease-stitch-in-out` | `cubic-bezier(0.4, 0, 0.2, 1)` |
| `--transition-fast` | 150ms |
| `--transition-normal` | 250ms |
| `--transition-slow` | 350ms |

Hover states shift border color, surface tint, or text color — no scale/translate transforms unless specified (e.g., micro-arrow `→`).

---

## Accessibility Foundation

- **Focus-visible**: 2px solid `primary` outline + 2px offset
- **Reduced motion**: All animations/transitions set to 0.01ms
- **Selection**: `primary-container` background with `on-primary-container` text
- **Body text**: 15px/24px base for sustained readability
- **Contrast**: All text combinations meet WCAG AA minimum (`on-surface` on `surface` = ~13.5:1)

---

## Component Base Classes

Defined in `@layer components` in `globals.css`:

- `card-base` — Level-2 surface, 4px radius, 1px border
- `card-interactive` — Same + hover state transitions
- `nav-pill` — Frosted glass capsule, full radius
- `tag-base` — 2px radius metadata chip
- `btn-primary` — Solid on-surface background CTA
- `btn-secondary` — Bordered technical button
- `btn-ghost` — Underline monospaced link
- `hairline` — 1px structural divider

---

## Tailwind v4 Configuration

The project uses **Tailwind CSS v4** with CSS-first configuration:

- `@import "tailwindcss"` replaces v3 `@tailwind` directives
- All tokens defined via `@theme` block in CSS
- Custom utilities via `@utility` directive
- No `tailwind.config.js` — removed in favor of CSS-first approach
- PostCSS plugin: `@tailwindcss/postcss` (v4 native)

---

## Dependency Status

| Dependency | Version | Status |
|---|---|---|
| react | ^19.2.8 | Required |
| react-dom | ^19.2.8 | Required |
| @tailwindcss/postcss | ^4.3.3 | Required |
| tailwindcss | ^4.3.3 | Required |
| vite | ^8.2.2 | Dev |
| @vitejs/plugin-react | ^6.1.1 | Dev |
| typescript | ^7.0.2 | Dev |
| postcss | ^8.5.28 | Dev |
| autoprefixer | ^10.5.5 | Dev |
| @types/react | ^19.2.18 | Dev |
| @types/react-dom | ^19.2.7 | Dev |

**Removed**: `@tanstack/react-query` — not required for current architecture. Static data is defined locally.