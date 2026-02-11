# Architecture

**Analysis Date:** 2026-02-11

## Pattern Overview

**Overall:** Static Site Generator (SSG) with Docusaurus framework

**Key Characteristics:**
- Content-centric documentation site built on Docusaurus 3.8.1
- Markdown-driven content structure with MDX support for dynamic components
- Static HTML generation from markdown sources
- React-based component layer for interactive elements
- Theme customization through React component swizzling and CSS modules

## Layers

**Content Layer:**
- Purpose: Source of truth for all documentation and blog content
- Location: `docs/`, `blog/`
- Contains: Markdown files (.md) and MDX files (.mdx) with frontmatter metadata
- Depends on: Docusaurus to parse and transform
- Used by: Build system to generate static HTML pages

**Component Layer:**
- Purpose: Reusable React UI components for interactive features and page layouts
- Location: `src/components/`, `src/pages/`
- Contains: React functional components (.jsx, .js) with styling
- Depends on: React, Docusaurus hooks, CSS modules
- Used by: Page layouts and theme overrides

**Theme Layer:**
- Purpose: Customize and extend Docusaurus default theme behavior
- Location: `src/theme/`
- Contains: Wrapped theme components (DocItem override)
- Depends on: Docusaurus theme-original components
- Used by: Docusaurus rendering engine

**Styling Layer:**
- Purpose: Global styles and scoped component styles
- Location: `src/css/`, `src/**/*.module.css`
- Contains: Global CSS (custom.css) and CSS modules
- Depends on: Infima CSS framework (Docusaurus default)
- Used by: Components and theme

**Static Assets:**
- Purpose: Images, logos, and other binary resources
- Location: `static/`
- Contains: SVG images, PNG files, favicons
- Depends on: None
- Used by: Components and content via markdown

**Build Output:**
- Purpose: Generated static website
- Location: `build/`
- Contains: Compiled HTML, CSS, JavaScript bundles
- Depends on: All source layers
- Used by: Web server/CDN for deployment

## Data Flow

**Content Publishing Flow:**

1. Author writes markdown/MDX files in `docs/` or `blog/`
2. Author includes frontmatter metadata (title, description, image)
3. Docusaurus parser reads markdown files
4. Markdown is transformed to React components
5. Theme components wrap content
6. Components render using React
7. Static HTML generated in `build/`
8. Served as static site

**Interactive Component Flow:**

1. Interactive components defined in `src/components/` (e.g., StartupSanityForm)
2. Components initialize with React hooks (useState, useEffect)
3. User interactions trigger state changes
4. Component re-renders with updated UI
5. Results computed and displayed inline (no server call)

**Homepage Flow:**

1. User navigates to root URL
2. `src/pages/index.js` (Home component) is the entry point
3. Docusaurus context provides site configuration
4. HomepageHeader component renders with hero banner
5. HomepageFeatures component renders feature cards
6. Layout component wraps page with navigation/footer
7. CSS modules scope styles to components

**Theme Override Flow:**

1. Docusaurus renders doc pages using theme components
2. `src/theme/DocItem/index.js` intercepts rendering
3. Wrapper extracts frontmatter image metadata
4. Head component injects og:image and twitter:image meta tags
5. Original DocItem component rendered with enhanced metadata

## Key Abstractions

**Docusaurus Presets:**
- Purpose: Configures classic preset with docs, blog, and theme
- Examples: `docusaurus.config.js` preset configuration
- Pattern: Configuration-driven feature activation

**CSS Modules:**
- Purpose: Scope component styles locally to prevent class name collisions
- Examples: `src/components/HomepageFeatures/styles.module.css`, `src/pages/index.module.css`
- Pattern: Import as JavaScript objects, apply as className strings

**Path Aliases:**
- Purpose: Simplified imports using Docusaurus magic aliases
- Examples: `@site/` (project root), `@theme/` (theme components), `@docusaurus/` (core hooks)
- Pattern: Reduce relative path complexity

**Frontmatter Metadata:**
- Purpose: Page-level configuration without hardcoding in markdown
- Examples: title, description, image in markdown YAML headers
- Pattern: Declarative metadata accessible to theme components

## Entry Points

**Homepage:**
- Location: `src/pages/index.js`
- Triggers: Navigation to `/`
- Responsibilities:
  - Renders hero banner with site title and tagline
  - Displays feature cards via HomepageFeatures component
  - Provides call-to-action button to documentation

**Documentation Pages:**
- Location: All `.md` files in `docs/` directory
- Triggers: Navigation to `/docs/*` URLs
- Responsibilities:
  - Render markdown content with syntax highlighting
  - Provide sidebar navigation (auto-generated from directory structure)
  - Inject custom meta tags via DocItem wrapper

**Blog Pages:**
- Location: All `.md` files in `blog/` directory
- Triggers: Navigation to `/blog/*` URLs
- Responsibilities:
  - Render blog post content with reading time
  - Display author information from `authors.yml`
  - List blog archive and tags

**Build Command:**
- Location: `docusaurus build` (via package.json scripts)
- Triggers: Deployment pipeline
- Responsibilities:
  - Transform all markdown/MDX to HTML
  - Bundle React components
  - Generate static files to `build/`

## Error Handling

**Strategy:** Graceful degradation with static error pages

**Patterns:**
- Docusaurus generates `build/404.html` for missing pages
- Broken markdown links trigger warnings (onBrokenMarkdownLinks: "warn")
- Broken doc links throw errors (onBrokenLinks: "throw") to catch issues
- Missing images degrade gracefully in markdown

## Cross-Cutting Concerns

**Logging:** Console logs in interactive components (StartupSanityForm logs form responses)

**Validation:** Form input validation via HTML5 select dropdowns (no validation library needed)

**Authentication:** Not applicable - static public site with no backend

**SEO:**
- Docusaurus handles meta tags and structured data
- Custom DocItem wrapper adds og:image and twitter:image for social sharing
- Site configuration includes Google verification and Twitter Card setup

---

*Architecture analysis: 2026-02-11*
