import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { siteUrl } from './src/data/site'

/**
 * Phase 10B: emits /sitemap.xml ONLY when a real production domain is
 * configured in src/data/site.ts. Single URL (this SPA has no deep
 * routes — sections are anchors, not independent pages). While
 * `siteUrl` is undefined, nothing is emitted: no fake canonical domain.
 */
function siteArtifacts(): Plugin {
  return {
    name: 'site-artifacts',
    generateBundle() {
      if (!siteUrl || !/^https?:\/\//.test(siteUrl)) return
      const origin = siteUrl.replace(/\/+$/, '')
      const today = new Date().toISOString().slice(0, 10)
      const loc = `${origin}/`.replace(/&/g, '&amp;')
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source:
          `<?xml version="1.0" encoding="UTF-8"?>\n` +
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
          `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n` +
          `    <changefreq>monthly</changefreq>\n    <priority>1.0</priority>\n  </url>\n</urlset>\n`,
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), siteArtifacts()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})