/**
 * CANONICAL SITE METADATA (Phase 10B)
 * Source: src/data/profile.ts (which traces to
 * content/source/CV_Muhammad_Syafrudin_Hilmi.pdf)
 *
 * Single source of truth for document title, meta description,
 * and social/SEO metadata. `index.html` carries matching static
 * tags for first-paint/crawler parity (no title flashing), and
 * `src/lib/seo.ts` re-syncs them from here at runtime — so a
 * future profile edit propagates without touching `index.html`.
 *
 * `siteUrl` stays `undefined` until the user supplies the real
 * production domain. While undefined, NO canonical URL, og:url,
 * or sitemap location is emitted anywhere — never a fake domain.
 */

import { profile } from './profile'

/** Document title pattern: `{name} — {role}`. */
export const siteTitle = `${profile.name} — ${profile.role}`

/**
 * Concise description built only from CV-supported facts:
 * identity, role, location, degree focus, work areas.
 */
export const siteDescription =
  'Muhammad Syafrudin Hilmi — Admin & Personal Assistant based in Ciamis, Indonesia. Economics graduate focused on administration, operations, and finance.'

/**
 * Production origin, e.g. 'https://www.example.com' (no trailing slash).
 * Leave `undefined` until the real domain exists.
 */
export const siteUrl: string | undefined = undefined

/** Document language. UI copy is English; CV-derived data is ID/EN mix. */
export const siteLocale = 'en'

/** Browser chrome color. Matches `--color-surface` in src/styles/globals.css. */
export const siteThemeColor = '#121316'

/**
 * Public social profiles safe for metadata exposure.
 * Only absolute http(s) URLs already published in profile data.
 * (GitHub omitted: no real URL on file. Email/phone omitted: anti-scrape.)
 */
export function siteSocialUrls(): string[] {
  return profile.socialLinks
    .map((l) => l.url)
    .filter((url) => /^https?:\/\//.test(url))
}
