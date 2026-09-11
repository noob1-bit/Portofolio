# GitHub Setup — Initial Portfolio Release

Run these commands on a machine with Git installed, from the repository root.
Replace `<USER_GITHUB_REPOSITORY>` with the real repository URL
(e.g. `https://github.com/<username>/<repo>.git`). The username is
intentionally left as a placeholder — never invent or commit one.

## Steps

1. Create an empty repository on GitHub (no README, no `.gitignore`,
   no license — this project already has what it needs). Note its URL.

2. Initialize and publish:

```bash
git init
git branch -M main
git add .
git commit -m "Initial portfolio release"
git remote add origin <USER_GITHUB_REPOSITORY>
git push -u origin main
```

3. Verify on GitHub that the following are present:
   - `package.json`, `package-lock.json`, `vite.config.ts`, `tsconfig.json`
   - `index.html`, `src/`, `public/` (including
     `public/cv/Muhammad-Syafrudin-Hilmi-CV.pdf`)
   - `PROJECT_CONTENT_GUIDE.md`, `DEPLOYMENT_CLOUDFLARE.md`
   - `.gitignore`

4. Verify the following are absent:
   - `node_modules/`, `dist/`, `.env` files, editor caches, QA screenshots.

5. Continue with `DEPLOYMENT_CLOUDFLARE.md`.
