# Startup Engineer Handbook — Landing Page & Navigation Redesign

## What This Is

A redesign of the landing page and navigation experience for The Startup Engineer Handbook, a Docusaurus-based content site aimed at first-time engineering leads at startups and founders who need a reality check. The goal is to transform the current default Docusaurus template look into a polished, Linear-inspired dark-by-default experience that sells the value of the content and guides readers through a journey-based navigation flow.

## Core Value

Visitors immediately understand why this handbook exists ("stop building the wrong thing") and can navigate the content through a clear journey — not a flat list of disconnected topics.

## Requirements

### Validated

<!-- Shipped and confirmed valuable. -->

- ✓ Docusaurus 3.8.1 site with docs, blog, and custom components — existing
- ✓ Content organized into sections: intro, product, team, engineering process, AI cookbook, engineering habits — existing
- ✓ Custom DocItem wrapper for og:image social sharing meta tags — existing
- ✓ StartupSanityForm interactive component — existing
- ✓ Deployed to Netlify with custom domain (startupengineer.work) — existing

### Active

<!-- Current scope. Building toward these. -->

- [ ] Dark-by-default landing page with Linear-inspired clean/minimal aesthetic
- [ ] Hero section that leads with "stop building the wrong thing" value proposition
- [ ] Landing page that convinces visitors the content is worth their time before they dive in
- [ ] Journey-based navigation flow (understand the problem → build the team → build the product → scale)
- [ ] Reduced, grouped top-level navigation (replace 6 flat items with clear hierarchy)
- [ ] Sense of "where am I" and "what should I read next" throughout
- [ ] Blog content folded into the main handbook (not a separate section)
- [ ] Footer with content links to major sections
- [ ] Replace default Docusaurus placeholder SVGs and boilerplate
- [ ] Custom color palette and typography replacing default Infima green theme
- [ ] Remove placeholder footer links (Docusaurus community Stack Overflow, Discord, Twitter)

### Out of Scope

- Content restructuring — docs stay where they are, only the navigation UI changes
- New written content or articles
- Backend functionality or authentication
- Mobile app or PWA
- Custom domain setup (already done)

## Context

- Site is "The Startup Engineer Handbook" — a practical guide for building and scaling startup engineering teams
- Two audiences: (1) first-time engineering leads who need the playbook, (2) founders who need to stop making common mistakes
- Currently looks like a barely-modified Docusaurus starter — default green theme, dinosaur SVGs, placeholder footer links pointing to Docusaurus community
- The content itself is good; the presentation doesn't match its quality
- Current nav has 6 flat top-level items: Begin, Product, Team, Product Engineering, AI Cookbook, Engineering Habits
- Existing codebase map available at `.planning/codebase/`
- Design reference: Linear marketing site (dark, polished, sharp typography, generous whitespace)

## Constraints

- **Framework**: Must stay on Docusaurus 3.8.1 — no framework migration
- **Scope**: UI/chrome only — existing doc files and directory structure are not reorganized
- **Deployment**: Continues deploying to Netlify as static site
- **Content**: Existing content is preserved as-is; this is a visual/navigation redesign

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Dark theme by default | Matches Linear aesthetic, feels modern and polished | — Pending |
| Journey-based nav over role-based | Content flows as a progression, not a reference manual | — Pending |
| Fold blog into handbook | Everything should be part of one cohesive body of work | — Pending |
| "Stop building the wrong thing" as hero hook | Leads with the problem — most compelling entry point | — Pending |
| UI-only changes, no content restructure | Keeps scope tight, avoids breaking existing links | — Pending |

---
*Last updated: 2026-02-11 after initialization*
