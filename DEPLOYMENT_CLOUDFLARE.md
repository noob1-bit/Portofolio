# Deployment Guide — Cloudflare Pages (via GitHub)

Static Vite portfolio. No backend, Functions, Workers, database, or secrets.
Do everything below manually — nothing here deploys automatically, and no
credentials belong in this repository.

## Prerequisites

- The steps in `GITHUB_SETUP.md` are done (code pushed to `main`).
- A Cloudflare account (create one yourself at dash.cloudflare.com).

## Procedure

1. Open the Cloudflare Dashboard.
2. Go to **Workers & Pages**.
3. Click **Create application**.
4. Choose the **Pages** tab.
5. Select **Import an existing Git repository**.
6. Connect the GitHub repository created in `GITHUB_SETUP.md` (authorize
   Cloudflare to read it when prompted).
7. Configure the build exactly as follows:
   - **Production branch:** `main`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Root directory:** repository root (leave default)
   - No environment variables are required.
8. Click **Save and Deploy**.
9. Wait for the build to finish. Cloudflare runs `npm install` (via
   `package-lock.json`), then `npm run build` (`tsc --noEmit && vite build`).
10. Open the assigned `*.pages.dev` URL and verify:
    - Home renders with the correct title and description.
    - Anchors work: `#home` `#work` `#case-study` `#about` `#skills`
      `#experience` `#contact`.
    - The CV button downloads `cv/Muhammad-Syafrudin-Hilmi-CV.pdf`.
    - Contact email links open a mail draft to the real address.
    - No console errors, no missing assets.
11. (Optional, later) Attach a custom domain under the Pages project's
    **Custom domains** tab.

## After the domain is known

1. Set `siteUrl` in `src/data/site.ts` to the production origin, e.g.
   `https://username.pages.dev` (no trailing slash).
2. Commit and push — Cloudflare rebuilds automatically.
3. Re-verify on the live URL:
   - `<link rel="canonical">` present and correct.
   - `og:url` present and correct.
   - `/sitemap.xml` exists and contains only the root URL.
   - `/robots.txt` serves with `Allow: /` (add the live Sitemap line
     documented inside `public/robots.txt` if desired).

## Notes

- No `wrangler.toml`, Functions, or Workers are used — intentionally.
  This project needs none of them; do not add any.
- Every push to `main` redeploys automatically (preview deployments are
  created for other branches — safe to ignore or disable).
