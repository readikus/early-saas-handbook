# Project Research Summary

**Project:** Startup Engineer Handbook — Landing Page & Navigation Redesign
**Domain:** Docusaurus theme customization, landing page design, content site navigation
**Researched:** 2026-02-11
**Confidence:** HIGH

## Executive Summary

This is a visual redesign of an existing Docusaurus 3.8.1 content site. The good news: Docusaurus provides all the infrastructure needed for a dark-themed, polished landing page with restructured navigation. No new packages are required — the work is entirely configuration and custom CSS/components.

The recommended approach is CSS-first: override Infima CSS custom properties for the global theme (colors, typography, spacing), reconfigure navbar items in `docusaurus.config.js` for grouped navigation, and build a new landing page from composable React components. This approach respects the Docusaurus upgrade path and keeps maintenance low.

The main risk is dark mode inconsistency — where the landing page looks polished but doc pages, code blocks, or sidebar elements still show light-mode artifacts. Preventing this requires setting ALL Infima variables for dark mode upfront, not just primary colors.

## Key Findings

### Recommended Stack

No new dependencies needed. The entire redesign uses existing Docusaurus capabilities.

**Core approach:**
- **Infima CSS variables:** Override `--ifm-*` properties for colors, fonts, spacing — affects all pages globally
- **Docusaurus colorMode config:** Set `defaultMode: 'dark'` — built-in dark/light toggle
- **CSS Modules:** Component-scoped styles for landing page sections — already in use
- **Navbar dropdown config:** Group 6 flat items into 2-3 dropdown groups — native Docusaurus feature

### Expected Features

**Must have (table stakes):**
- Clear value proposition hero section ("Stop building the wrong thing")
- Consistent dark color palette and typography across all pages
- Logical, grouped navigation (not 6 flat items)
- Professional footer with real content links
- All Docusaurus placeholder content removed

**Should have (competitive):**
- Journey-based navigation that guides readers through a progression
- Content preview sections on landing page
- "What to read next" prompts

**Defer (v2+):**
- Audience-specific sections (eng lead vs founder)
- Reading progress indicator
- Custom doc page layouts

### Architecture Approach

Four-layer approach: configuration (docusaurus.config.js), global CSS (custom.css variables), custom components (landing page sections), and theme overrides (only when CSS can't do it). Build order follows dependency chain: theme foundation → navigation → landing page → cleanup.

**Major components:**
1. **Theme foundation** — CSS custom properties, dark-by-default config, typography
2. **Navigation config** — Dropdown groups, journey-based labels, responsive testing
3. **Landing page** — Hero, value prop, journey map, CTA sections
4. **Footer + cleanup** — Real footer links, blog fold-in, placeholder removal

### Critical Pitfalls

1. **Dark mode inconsistency** — Set ALL Infima variables, test every page type
2. **Ejecting theme components** — Use CSS overrides and `--wrap` swizzle, never eject
3. **Landing/docs visual disconnect** — Global theme variables ensure consistency
4. **Font loading flash** — Use system font stack or preload custom fonts properly
5. **Breaking existing URLs** — UI-only changes, don't move doc files

## Implications for Roadmap

Based on research, suggested phase structure:

### Phase 1: Theme Foundation
**Rationale:** Everything else depends on the color palette, typography, and dark mode being right
**Delivers:** Dark-by-default theme, custom color palette, typography, global CSS variables
**Addresses:** Color palette, dark mode, typography, visual consistency
**Avoids:** Dark mode inconsistency pitfall, landing/docs disconnect pitfall

### Phase 2: Navigation Restructure
**Rationale:** Navigation changes are config-only and don't depend on landing page components
**Delivers:** Grouped journey-based nav, cleaned-up navbar, responsive nav
**Addresses:** Journey-based navigation, reduced nav clutter, "where am I" orientation
**Avoids:** Navbar overflow pitfall

### Phase 3: Landing Page Redesign
**Rationale:** Builds on theme foundation — components inherit dark palette automatically
**Delivers:** Hero section, value proposition, journey overview, CTA
**Addresses:** Value proposition, content previews, professional first impression
**Uses:** Theme variables from Phase 1, navigation structure from Phase 2

### Phase 4: Footer, Blog Fold-in & Cleanup
**Rationale:** Final polish — remove all traces of default Docusaurus template
**Delivers:** Professional footer, blog integrated into main content, no placeholder content
**Addresses:** Footer redesign, blog fold-in, placeholder removal
**Avoids:** Breaking URLs pitfall (test all existing links)

### Phase Ordering Rationale

- Theme first because CSS variables cascade to everything — no rework needed later
- Navigation second because it's config-only and tests well independently
- Landing page third because it consumes the theme and references the nav structure
- Cleanup last because it's low-risk and catches anything missed

### Research Flags

Phases with standard patterns (skip deep research during planning):
- **Phase 1:** Well-documented Infima variables, straightforward CSS overrides
- **Phase 2:** Docusaurus navbar config is well-documented
- **Phase 4:** Straightforward config changes and content cleanup

Phases that may benefit from light research:
- **Phase 3:** Landing page design — may want to reference Linear's specific design patterns

## Confidence Assessment

| Area | Confidence | Notes |
|------|------------|-------|
| Stack | HIGH | No new dependencies, all existing Docusaurus capabilities |
| Features | HIGH | Well-understood domain, clear user expectations for content sites |
| Architecture | HIGH | Docusaurus theming is well-documented, patterns are established |
| Pitfalls | HIGH | Common issues are well-known in Docusaurus community |

**Overall confidence:** HIGH

### Gaps to Address

- Exact color values for Linear-inspired palette — finalize during Phase 1 implementation
- Blog fold-in strategy — decide between moving files vs. redirect plugin during Phase 4 planning

## Sources

### Primary (HIGH confidence)
- Docusaurus official documentation — theming, swizzling, navbar, colorMode
- Infima CSS framework — variable reference
- Docusaurus GitHub issues — common theming pitfalls

### Secondary (MEDIUM confidence)
- Linear.app marketing site — visual design reference
- Stripe documentation — navigation pattern reference

---
*Research completed: 2026-02-11*
*Ready for roadmap: yes*
