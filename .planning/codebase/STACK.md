# Technology Stack

**Analysis Date:** 2026-02-11

## Languages

**Primary:**
- JavaScript (Node.js) - Runtime for build and development
- JSX - UI component markup in `src/components/` and `src/pages/`

**Secondary:**
- CSS - Styling with CSS modules at `src/css/` and component-level styles
- Markdown - Content pages in `docs/` and `blog/` directories

## Runtime

**Environment:**
- Node.js >= 18.0 (specified in `package.json` engines field)

**Package Manager:**
- npm (npm 10+ implied by lockfile v3)
- Lockfile: `package-lock.json` (lockfileVersion: 3)

## Frameworks

**Core:**
- Docusaurus 3.8.1 - Static site generator and documentation framework
  - `@docusaurus/core` 3.8.1
  - `@docusaurus/preset-classic` 3.8.1 - Provides docs, blog, and theme plugins

**UI:**
- React 18.3.1 - UI library for custom components
- React DOM 18.3.1 - React rendering for web

**Markdown/Content:**
- `@mdx-js/react` 3.1.0 - MDX support for interactive Markdown
- `remark-shiki-twoslash` 3.1.3 - Code highlighting with syntax annotations

**Styling:**
- CSS Modules - Component-scoped CSS (e.g., `src/components/HomepageFeatures/styles.module.css`)
- `prism-react-renderer` 2.4.1 - Syntax highlighting for code blocks

**Utilities:**
- `clsx` 2.1.1 - Conditional CSS class composition at `src/pages/index.js` and `src/components/`

**Dev/Build:**
- Babel 7.x - JavaScript transpilation via `babel.config.js`
  - Uses `@docusaurus/core/lib/babel/preset` for configuration
- ESLint 9.29.0 - Linting
  - `@docusaurus/eslint-plugin` 3.8.1 - Docusaurus-specific linting rules

**Module Aliases:**
- `@docusaurus/*` - Docusaurus core APIs
- `@site/*` - Absolute imports for source files (e.g., `@site/src/components`)
- `@theme/*` - Docusaurus theme components (customizable via `src/theme/`)

## Key Dependencies

**Critical:**
- `@docusaurus/core` 3.8.1 - Build system, server, and plugin orchestration
- `@docusaurus/preset-classic` 3.8.1 - Enables docs, blog, and pages
- `react` 18.3.1 - Interactive components like `StartupSanityForm` at `src/components/StartupSanityForm/index.jsx`

**Content:**
- `@mdx-js/react` 3.1.0 - Allows embedded React components in Markdown docs
- `remark-shiki-twoslash` 3.1.3 - Enhanced code block rendering with annotations

**Appearance:**
- `prism-react-renderer` 2.4.1 - Syntax highlighting (referenced in docusaurus.config.js but currently disabled)

## Configuration

**Environment:**
- No environment-specific configuration required for basic operation
- Supports `.env.local`, `.env.development.local`, `.env.test.local`, `.env.production.local` per `.gitignore`
- No env vars currently referenced in code

**Build:**
- `docusaurus.config.js` - Main Docusaurus configuration
  - Site title: "The Startup Engineer Handbook"
  - Base URL: `/`
  - Deployment URL: `https://precious-mochi-9fa3c1.netlify.app`
- `babel.config.js` - Babel preset configuration
- `eslint.config.js` - ESLint configuration extending `@docusaurus/recommended`
- `.eslintrc.js` - Docusaurus linting with untranslated text warnings

**Sidebar:**
- `sidebars.js` - Auto-generates sidebar from filesystem structure in `docs/` directory

**Browser Support:**
```json
production: [">0.5%", "not dead", "not op_mini all"]
development: ["last 1 chrome version", "last 1 firefox version", "last 1 safari version"]
```

## Platform Requirements

**Development:**
- Node.js 18.0+
- npm (includes in Node)
- POSIX shell (for bash scripts)

**Production:**
- Deployed to Netlify at `https://precious-mochi-9fa3c1.netlify.app`
- Static HTML/CSS/JS output (no backend required)
- Build command: `docusaurus build` (outputs to `build/` directory)

## Scripts

**Development:**
```bash
npm start              # Start development server (docusaurus start)
npm run build          # Build static site (docusaurus build)
npm run serve          # Serve production build locally
npm run lint           # Run ESLint on codebase
npm run clear          # Clear cache
```

**Content Management:**
```bash
npm run write-translations    # Generate translation files
npm run write-heading-ids     # Auto-generate heading anchors
npm run swizzle              # Customize Docusaurus components
npm run deploy               # Deploy to GitHub Pages (if configured)
```

---

*Stack analysis: 2026-02-11*
