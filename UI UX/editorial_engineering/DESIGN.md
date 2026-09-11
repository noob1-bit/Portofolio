---
name: Editorial Engineering
colors:
  surface: '#121316'
  surface-dim: '#121316'
  surface-bright: '#38393c'
  surface-container-lowest: '#0d0e11'
  surface-container-low: '#1b1b1f'
  surface-container: '#1f1f23'
  surface-container-high: '#292a2d'
  surface-container-highest: '#343538'
  on-surface: '#e3e2e6'
  on-surface-variant: '#c2c6d8'
  inverse-surface: '#e3e2e6'
  inverse-on-surface: '#303034'
  outline: '#8c90a1'
  outline-variant: '#424656'
  surface-tint: '#b3c5ff'
  primary: '#b3c5ff'
  on-primary: '#002b75'
  primary-container: '#0066ff'
  on-primary-container: '#f8f7ff'
  inverse-primary: '#0054d6'
  secondary: '#c1c7cf'
  on-secondary: '#2b3137'
  secondary-container: '#41474e'
  on-secondary-container: '#afb6bd'
  tertiary: '#7bd0ff'
  on-tertiary: '#00354a'
  tertiary-container: '#007aa5'
  on-tertiary-container: '#f1f8ff'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dae1ff'
  primary-fixed-dim: '#b3c5ff'
  on-primary-fixed: '#001849'
  on-primary-fixed-variant: '#003fa4'
  secondary-fixed: '#dde3eb'
  secondary-fixed-dim: '#c1c7cf'
  on-secondary-fixed: '#161c22'
  on-secondary-fixed-variant: '#41474e'
  tertiary-fixed: '#c4e7ff'
  tertiary-fixed-dim: '#7bd0ff'
  on-tertiary-fixed: '#001e2c'
  on-tertiary-fixed-variant: '#004c69'
  background: '#121316'
  on-background: '#e3e2e6'
  surface-variant: '#343538'
typography:
  display-xl:
    fontFamily: Geist
    fontSize: 64px
    fontWeight: '600'
    lineHeight: 70px
    letterSpacing: -0.04em
  display-xl-mobile:
    fontFamily: Geist
    fontSize: 38px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Geist
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.03em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 34px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 26px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 30px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Geist
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-sm:
    fontFamily: Geist
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  mono-code:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: -0.01em
  mono-label:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.06em
  mono-metric:
    fontFamily: JetBrains Mono
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.03em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  baseline-step: 4px
  space-xs: 4px
  space-sm: 8px
  space-md: 16px
  space-lg: 24px
  space-xl: 32px
  space-2xl: 48px
  space-3xl: 64px
  space-4xl: 96px
  space-5xl: 128px
  max-width-content: 1240px
  max-width-reading: 680px
  gutter-desktop: 32px
  gutter-mobile: 16px
---

## Brand & Style

This design system defines an authoritative, editorial, and architecturally structured digital canvas for a hybrid technology leader and principal product architect. The design language discards ephemeral tech clichés—generic templates, nebulous glow effects, and hyper-saturated SaaS tropes—in favor of rigorous structure, typographic tension, and high-fidelity micro-details.

The narrative centers on "Explore my work, not just my CV": an invitation to scrutinize systems design, architectural blueprints, and production-grade software craft. 

The aesthetic is grounded in:
- **Architectural Minimalism & Monolithic Rhythm:** Clean structural boundaries, 1px technical rule dividers, intentional asymmetrical negative space, and disciplined layout alignment.
- **Editorial High-Contrast:** Typographic hierarchy derived from Swiss typographic heritage paired with contemporary digital precision.
- **Technical Pragmatism:** Data-dense monospaced accents, explicit state indicators, and understated interactive feedback reminiscent of precision industrial instruments.

## Colors

The palette operates in a default dark color mode, engineered to reduce visual fatigue while rendering high-resolution project captures and technical schemas with stark clarity.

### Functional Roles
- **Canvas Base (`#0A0B0E`):** Deep carbon-graphite absorbing visual distraction.
- **Surface Elevation 1 (`#111318`):** Base container tier for structural sections and persistent panels.
- **Surface Elevation 2 (`#181B22`):** Interactive cards, code surfaces, and modal backing.
- **Surface Elevation 3 (`#212631`):** Floating controls, active states, and hovered components.
- **Hairline Rule / Structural Border (`#2A303C`):** 1px boundary lines delineating architectural grid divisions.
- **Focus / Border Highlight (`#384152`):** Elevated edge definition on interactive triggers.
- **Text Primary (`#F3F4F6`):** High-legibility editorial white with warm attenuation to eliminate glare.
- **Text Secondary (`#9CA3AF`):** Balanced zinc for long-form narrative body and descriptive subtitles.
- **Text Muted (`#6B7280`):** De-emphasized labels, structural numbering, and inactive indexes.
- **Precision Cobalt Accent (`#0066FF`):** Single-point laser focus for active indicators, interactive links, terminal prompts, and critical CTAs. Never applied as wide decorative washes; strictly restricted to high-intent UI accents.
- **Status Dot Green (`#10B981`):** Dedicated live availability and system status signal.

## Typography

Typographic discipline provides the primary architectural scaffold. The system uses a pairing of **Geist** for direct, unadorned structural copy and headings with **JetBrains Mono** for technical markers, telemetry, metadata, and metric callouts.

### Usage Principles
- **Display & Headline:** Headings use negative letter-tracking (`-0.02em` to `-0.04em`) to impart an editorial, Swiss poster quality. They must be set in high-contrast off-white (`#F3F4F6`).
- **Body Rhythm:** Body text is calibrated at 15px/24px and 18px/30px for sustained readability across detailed engineering retrospectives and case studies.
- **Monospaced Accents:** All categorical tags, temporal timestamps, commit hashes, systems data, and section numbering are typeset in `JetBrains Mono` in uppercase with deliberate tracking (`0.06em`).

## Layout & Spacing

The layout model is governed by a 12-column architectural grid underpinned by a mathematical 4px baseline rhythm.

### Grid Anatomy
- **Desktop (≥ 1024px):** 12 columns, `1240px` maximum outer wrapper, `32px` gutters, outer horizontal page margins fluid (minimum `48px`). Case study prose is restricted to a dedicated `680px` reading spine.
- **Tablet (768px – 1023px):** 8 columns, `24px` gutters, `32px` screen margins.
- **Mobile (< 768px):** 4 columns, `16px` gutters, `16px` horizontal screen margins. Complex multi-column project grids collapse cleanly to a sequential vertical stack.

### Spatial Discipline
Whitespace operates as an active component rather than empty void. Generous vertical spacing (`space-4xl` and `space-5xl`) punctuates section transitions, punctuated by 1px horizontal baseline rules (`#2A303C`) to retain tectonic order across expansive viewports.

## Elevation & Depth

This design system rejects diffuse, unfocused shadows, heavy drop-shadow blurs, and skeuomorphic layered skews. Visual hierarchy is established via **tonal layering**, **structural line-work**, and **optical edge definition**.

### Surface Hierarchy
1. **Floor (Level 0):** `#0A0B0E` — The base background for the entire viewport.
2. **Framed Section (Level 1):** `#111318` bounded by a 1px solid rule in `#2A303C`.
3. **Elevated Card (Level 2):** `#181B22` featuring a continuous `1px solid #2A303C` border. When hovered, the border shifts to `#384152` accompanied by an ultra-subtle directional shift (0 1px 2px rgba(0,0,0,0.6)).
4. **Floating HUD / Overlays (Level 3):** `#111318` rendered at 85% opacity with `backdrop-filter: blur(12px) saturate(180%)` and an enclosing perimeter border of `1px solid rgba(255, 255, 255, 0.08)`.

### Border-Over-Shadow
Borders perform the heavy lifting of separation. Every card, tab container, and visual asset is encased in crisp 1px lines, producing an instrument-grade aesthetic.

## Shapes

The shape vocabulary emphasizes architectural precision through tight, restrained radii. 

- **Structural Cards & Panels:** Constrained to `4px` (`rounded-sm`) to maintain an engineered, monolithic silhouette.
- **Media & Embedded Wireframes:** Set at `4px` with an internal 1px border stroke (`#2A303C`) to prevent bleed into the dark canvas.
- **Interactive Micro-Pills & Navigation Shells:** `9999px` (fully rounded pills) are reserved strictly for floating persistent controls (e.g., sticky top/bottom navigation, status badges, and chip filters) to distinguish tactical HUD elements from content architecture.

## Components

### 1. Sticky Navigation HUD
- **Form Factor:** Compact floating capsule pill pinned at the top center of the viewport with a `32px` vertical clearance.
- **Style:** Background `#111318` (85% opacity, `blur(12px)`), bordered by `1px solid #2A303C`. Height: `44px`.
- **Items:** Monospaced label anchors (`mono-label`) in `#9CA3AF`, transitioning to `#F3F4F6` on hover. The active tab is indicated by an interior capsule background in `#181B22` with a subtle white keyline.
- **Live Status Indicator:** A live beacon located on the right edge of the nav. Contains a 6px circular dot in `#10B981` with an ambient pulse ring, accompanied by `mono-label` text: "AVAILABLE FOR ADVISORY".

### 2. Project Archive & Exploration Cards
- **Structure:** Surface `#181B22`, border `1px solid #2A303C`, radius `4px`.
- **Top Bar Meta:** Monospaced project index (e.g., `[SYS_01]`), year, and system category set in `#6B7280`.
- **Content:** `headline-md` title paired with a concise systems problem statement in `body-md` (`#9CA3AF`).
- **Interactive State:** On cursor hover, the border illuminates to `#384152`, and a discreet micro-arrow trigger (`→`) transitions from `#6B7280` to `#0066FF` with a 2px horizontal translate.

### 3. Monospace Metadata Tags & Chips
- **Style:** Compact rectilinear tags. Padding: `2px 8px`. Radius: `2px`.
- **Colors:** Background `#111318`, border `1px solid #2A303C`, text `#9CA3AF`. Font: `mono-label`.
- **Context:** Used to tag technical stacks (e.g., `DISTRIBUTED-SYSTEMS`, `RUST`, `CANVAS-ENGINE`, `NEXT.JS`).

### 4. Interactive Architecture Timeline
- **Stem:** 1px vertical line running in `#2A303C`.
- **Nodes:** 7px square nodes pinned to the vertical stem. Active or current tenure is indicated by a `#0066FF` solid square; historical tenures use a hollow square with a `#2A303C` border and `#0A0B0E` core.
- **Content Block:** Right-aligned or offset structure displaying timestamp (`JetBrains Mono`, `#6B7280`), role title (`headline-sm`), organization (`#F3F4F6`), and quantifiable impact bullet points.

### 5. Metric Telemetry Callouts
- **Structure:** Modular grid cells bounded by 1px borders.
- **Visuals:** Huge monospaced numeric value (`mono-metric`) in `#F3F4F6`, followed by a 1px divider in `#2A303C`, and a caption in `mono-label` (`#9CA3AF`) defining the scale (e.g., `P99 LATENCY: <14MS`, `SCALE: 40M DAU`).

### 6. Buttons & Interactive Triggers
- **Primary Action:** Solid off-white `#F3F4F6` background with dark carbon `#0A0B0E` typography (`Geist`, weight 500, 14px). Radius `4px`. Hover state shifts surface to `#E2E8F0`.
- **Technical Secondary:** Surface `#111318`, border `1px solid #2A303C`, text `#F3F4F6`. Hover state shifts border to `#0066FF` and text to `#FFFFFF`.
- **Ghost/Tertiary:** No background, no border. Monospaced link with bottom 1px underline in `#2A303C`, transitioning to `#0066FF` on hover.

### 7. Modal & Case Study Drawer
- **Backdrop:** `#0A0B0E` at 80% opacity with `blur(8px)`.
- **Drawer Panel:** Slides from the right edge on desktop (width: `720px`), background `#111318`, left border `1px solid #2A303C`. Contains technical breakdown, system architecture schemas, and interactive post-mortem logs.