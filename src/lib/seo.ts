/**
 * Runtime metadata sync (Phase 10B).
 * Re-applies the canonical values from `src/data/site.ts` to the
 * live document. Static twins live in `index.html` for first paint
 * and crawlers, so this produces no visible flashing — it only
 * guarantees future data edits propagate without touching HTML.
 * No analytics, no tracking, no external requests.
 */

import { siteTitle, siteDescription, siteUrl, siteThemeColor } from '../data/site'

function upsertMeta(attr: 'name' | 'property', key: string, content: string): void {
  const selector = `meta[${attr}="${key}"]`
  let el = document.head.querySelector<HTMLMetaElement>(selector)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

export function applySiteMetadata(): void {
  document.title = siteTitle
  upsertMeta('name', 'description', siteDescription)
  upsertMeta('name', 'theme-color', siteThemeColor)
  upsertMeta('property', 'og:title', siteTitle)
  upsertMeta('property', 'og:description', siteDescription)
  upsertMeta('name', 'twitter:title', siteTitle)
  upsertMeta('name', 'twitter:description', siteDescription)

  // Canonical + og:url only when a real production domain is configured.
  const canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (siteUrl && /^https?:\/\//.test(siteUrl)) {
    const href = `${siteUrl.replace(/\/+$/, '')}/`
    if (canonical) canonical.href = href
    else {
      const link = document.createElement('link')
      link.rel = 'canonical'
      link.href = href
      document.head.appendChild(link)
    }
    upsertMeta('property', 'og:url', href)
  } else if (canonical) {
    canonical.remove()
  }
}
