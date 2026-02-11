# External Integrations

**Analysis Date:** 2026-02-11

## APIs & External Services

**Content Delivery:**
- Netlify - Static hosting and deployment
  - Deployment URL: `https://precious-mochi-9fa3c1.netlify.app`
  - No SDK integration required (build artifacts deployed directly)

**Search (Not Currently Integrated):**
- Docusaurus supports Algolia search out of the box, but no Algolia integration is configured in `docusaurus.config.js`

## Data Storage

**Databases:**
- Not applicable - Static site with no backend storage

**File Storage:**
- Static assets only via filesystem
  - Static images at `static/img/` (referenced throughout site)
  - Build output to `build/` directory (generated, not committed)
  - Docusaurus cache at `.docusaurus/` (generated, not committed)

**Caching:**
- Docusaurus internal caching via `.cache-loader` (gitignored)

## Authentication & Identity

**Auth Provider:**
- None - Static public site with no authentication required

**Access Control:**
- Not applicable

## Monitoring & Observability

**Error Tracking:**
- None configured

**Logs:**
- Development: Node.js console output
- Production: Netlify build logs and runtime errors (not actively monitored)

**Analytics:**
- Google Site Verification meta tag present at `docusaurus.config.js` line 164
  - Verification code: `z6xKQtDQOzH9EEvIoej8t1m99VU06Sz37aYjKjLaCjI`
  - No active Google Analytics tracking configured

## CI/CD & Deployment

**Hosting:**
- Netlify - Static site hosting at `https://precious-mochi-9fa3c1.netlify.app`

**CI Pipeline:**
- Not detected - No CI configuration files (.github/workflows, .gitlab-ci.yml, etc.)
- Assumed manual builds and deploys or Netlify auto-deploy from git

**Build Process:**
- Docusaurus build: `docusaurus build` → outputs to `build/`
- Post-build: Files deployed to Netlify

## Environment Configuration

**Required env vars:**
- None for basic operation

**Optional env vars:**
- `.env.local` - Local development overrides (gitignored)
- `.env.development.local` - Dev-specific settings (gitignored)
- `.env.test.local` - Test environment (gitignored)
- `.env.production.local` - Production settings (gitignored)

**Secrets location:**
- Env files (if any secrets used) - All `.env*` files in .gitignore, not committed

**Site Configuration:**
- Site URL hardcoded in `docusaurus.config.js`: `https://precious-mochi-9fa3c1.netlify.app`
- Site title: "The Startup Engineer Handbook"
- Organization: `readikus` (GitHub user/org)
- Project: `early-stage-saas-handbook` (GitHub repo name)

## Content & Metadata

**Open Graph Tags:**
```javascript
{ property: 'og:image', content: 'https://startupengineer.work/img/saas-banner.png' }
{ property: 'og:image:width', content: '1200' }
{ property: 'og:image:height', content: '630' }
{ property: 'og:type', content: 'website' }
```

**Twitter Tags:**
```javascript
{ name: 'twitter:card', content: 'summary_large_image' }
{ name: 'twitter:image', content: 'https://startupengineer.work/img/saas-banner.png' }
```

**Social Image Serving:**
- Images hosted at `https://startupengineer.work/` (external domain, separate CDN)
- Default banner: `https://startupengineer.work/img/saas-banner.png`
- Fallback in `src/theme/DocItem/index.js` for per-page OG images

## Webhooks & Callbacks

**Incoming:**
- None configured

**Outgoing:**
- None configured

## Client-Side Interactions

**User Interactions:**
- Startup Sanity Check Form at `src/components/StartupSanityForm/index.jsx`
  - Client-side evaluation form (no API calls)
  - Scoring logic: questions answered locally, result calculated in browser
  - No data persistence or transmission

**API Calls:**
- None detected - No fetch, axios, or XMLHttpRequest calls in source code

## Third-Party Scripts

**None detected:**
- No Google Analytics
- No Tag Manager
- No Hotjar or session recording
- No error reporting (Sentry, Rollbar, etc.)

---

*Integration audit: 2026-02-11*
