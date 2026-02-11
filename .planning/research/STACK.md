# Stack Research

**Domain:** Docusaurus landing page & navigation redesign (dark theme, Linear-inspired)
**Researched:** 2026-02-11
**Confidence:** HIGH

## Recommended Stack

### Core Technologies

| Technology | Version | Purpose | Why Recommended |
|------------|---------|---------|-----------------|
| Docusaurus | 3.8.1 | Static site framework | Already in use, no migration needed |
| React | 18.3.1 | Component rendering | Already in use via Docusaurus |
| Infima CSS | (bundled) | Base CSS framework | Docusaurus's built-in CSS framework — override via CSS custom properties, don't replace |
| CSS Modules | (bundled) | Scoped component styles | Already in use, best pattern for Docusaurus component styling |

### Supporting Libraries

| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| `clsx` | 2.1.1 | Conditional CSS classes | Already installed — use for dark/light class toggling |
| `@docusaurus/theme-common` | 3.8.1 | Theme utilities | Already available — use `useColorMode()` hook for dark mode detection |

### Development Tools

| Tool | Purpose | Notes |
|------|---------|-------|
| Docusaurus dev server | Hot reload during styling | `npm start` — instant feedback on CSS/component changes |
| Browser DevTools | Inspect Infima CSS variables | Use computed styles tab to audit all `--ifm-*` variables |

## Installation

```bash
# No new packages needed — everything is already available through Docusaurus 3.8.1
# The key is configuring existing tools, not adding new ones
```

## Alternatives Considered

| Recommended | Alternative | When to Use Alternative |
|-------------|-------------|-------------------------|
| Infima CSS variables | Tailwind CSS | When building a custom site from scratch — too invasive to add to existing Docusaurus |
| CSS Modules | Styled Components | When you need dynamic styles based on props — CSS modules handle this project fine |
| Docusaurus color mode | Manual dark mode toggle | Never — Docusaurus has built-in dark/light toggle infrastructure |
| Custom CSS only | Full theme package (e.g. docusaurus-theme-redoc) | When you need a fundamentally different layout engine — we just need visual changes |

## What NOT to Use

| Avoid | Why | Use Instead |
|-------|-----|-------------|
| Tailwind CSS | Conflicts with Infima, adds build complexity, fights Docusaurus conventions | Infima CSS custom properties + CSS modules |
| CSS-in-JS (styled-components, emotion) | Adds runtime overhead, doesn't integrate well with Docusaurus SSG | CSS modules (already supported) |
| Heavy animation libraries (Framer Motion, GSAP) | Overkill for a content site, adds bundle size, distracts from content | Subtle CSS transitions/animations only |
| Custom webpack config | Fragile, breaks on Docusaurus updates, hard to maintain | Docusaurus plugin system for any customization |
| Ejecting Docusaurus theme | Lose ability to upgrade Docusaurus, massive maintenance burden | Swizzle specific components with `--wrap` strategy |

## Stack Patterns by Variant

**For dark-by-default theme:**
- Set `colorMode.defaultMode: 'dark'` in `docusaurus.config.js` themeConfig
- Override `[data-theme='dark']` CSS variables to be the primary palette
- Keep `[data-theme='light']` as fallback but optimize for dark first

**For custom landing page:**
- Build as a custom React page in `src/pages/index.js`
- Use CSS modules for landing-page-specific styles
- Import Docusaurus Layout for consistent nav/footer wrapping

**For navigation restructuring:**
- Configure `navbar.items` in `docusaurus.config.js` — supports dropdowns via `type: 'dropdown'`
- Use `position: 'left'` and `position: 'right'` to balance nav items
- Docusaurus supports `type: 'doc'`, `type: 'dropdown'`, `type: 'docSidebar'` for navigation

## Version Compatibility

| Package A | Compatible With | Notes |
|-----------|-----------------|-------|
| Docusaurus 3.8.1 | React 18.x | Must stay on React 18 — Docusaurus 3 doesn't support React 19 |
| Docusaurus 3.8.1 | Node 18+ | Already satisfied |
| CSS custom properties | All modern browsers | No IE11 concern for this audience (startup engineers) |

## Sources

- Docusaurus official docs — theming, swizzling, configuration
- Docusaurus colorMode configuration — dark/light theme setup
- Infima CSS framework documentation — CSS custom properties reference

---
*Stack research for: Docusaurus landing page & navigation redesign*
*Researched: 2026-02-11*
