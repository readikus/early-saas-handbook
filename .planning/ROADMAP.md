# Roadmap: Startup Engineer Handbook — Landing Page & Navigation Redesign

## Overview

Transform the default Docusaurus template into a polished, Linear-inspired dark experience across four phases: foundation (theme, colors, typography), navigation restructure (journey-based grouped nav), landing page redesign (hero, value prop, journey overview), and cleanup (footer, blog integration, placeholder removal). Every phase delivers a coherent, verifiable capability that builds toward visitors immediately understanding why the handbook exists and navigating through a clear journey.

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [x] **Phase 1: Theme Foundation** - Dark-by-default theme with custom color palette and typography
- [ ] **Phase 2: Navigation Restructure** - Journey-based grouped navigation replacing flat items
- [ ] **Phase 3: Landing Page Redesign** - Hero section with value proposition and content preview
- [ ] **Phase 4: Footer & Cleanup** - Professional footer, blog integration, placeholder removal

## Phase Details

### Phase 1: Theme Foundation
**Goal**: Site has a consistent dark-by-default Linear-inspired visual identity across all page types
**Depends on**: Nothing (first phase)
**Requirements**: THEME-01, THEME-02, THEME-03, THEME-04
**Success Criteria** (what must be TRUE):
  1. Visitor sees dark mode by default on first visit to any page
  2. Site uses custom color palette (not default Infima green) consistently across landing, docs, category, and 404 pages
  3. Typography uses modern font stack consistently across all page types
  4. Code blocks, sidebars, and navigation all respect the dark theme without light-mode artifacts
**Plans**: 1 plan

Plans:
- [x] 01-01-PLAN.md — Dark mode config, custom color palette, typography, and visual verification

### Phase 2: Navigation Restructure
**Goal**: Visitors navigate through a clear journey-based hierarchy, not a flat list of topics
**Depends on**: Phase 1
**Requirements**: NAV-01, NAV-02, NAV-03
**Success Criteria** (what must be TRUE):
  1. Top-level navbar shows 2-3 grouped categories (down from 6 flat items)
  2. Navigation labels tell a progression story (understand problem → build team → build product)
  3. Visitor can see which section they are currently in through visual indication
  4. Navigation works responsively on mobile without overflow
**Plans**: 1 plan

Plans:
- [ ] 02-01-PLAN.md — Journey-based dropdown navbar with active state CSS and responsive styling

### Phase 3: Landing Page Redesign
**Goal**: Visitors immediately understand the handbook's value proposition before diving into content
**Depends on**: Phase 2
**Requirements**: LAND-01, LAND-02, LAND-03
**Success Criteria** (what must be TRUE):
  1. Landing page hero section displays "Stop building the wrong thing" value proposition with clear CTA
  2. Landing page shows content preview sections explaining what each part of the journey covers
  3. All default Docusaurus placeholder SVGs and generic feature cards are removed from landing page
  4. Landing page inherits dark theme and typography from Phase 1 without custom overrides
**Plans**: TBD

Plans:
- [ ] 03-01: TBD during phase planning

### Phase 4: Footer & Cleanup
**Goal**: All traces of default Docusaurus template are removed and site feels complete
**Depends on**: Phase 3
**Requirements**: FOOT-01, FOOT-02, FOOT-03
**Success Criteria** (what must be TRUE):
  1. Footer contains links to major content sections with proper attribution
  2. No Docusaurus community placeholder links remain (Stack Overflow, Discord, Twitter)
  3. Blog content is accessible through main handbook navigation, not as separate section
  4. All existing doc URLs continue to work without breaking
**Plans**: TBD

Plans:
- [ ] 04-01: TBD during phase planning

## Progress

**Execution Order:**
Phases execute in numeric order: 1 → 2 → 3 → 4

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Theme Foundation | 1/1 | ✓ Complete | 2026-02-11 |
| 2. Navigation Restructure | 0/? | Not started | - |
| 3. Landing Page Redesign | 0/? | Not started | - |
| 4. Footer & Cleanup | 0/? | Not started | - |
