# Feature Research

**Domain:** Content site landing page & navigation redesign
**Researched:** 2026-02-11
**Confidence:** HIGH

## Feature Landscape

### Table Stakes (Users Expect These)

Features users assume exist. Missing these = product feels incomplete.

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| Clear value proposition on landing | Users decide in 3-5 seconds whether to stay | MEDIUM | Hero section with compelling headline + supporting copy |
| Consistent visual identity | Default template screams "unfinished side project" | MEDIUM | Custom colors, typography, no stock Docusaurus assets |
| Logical navigation structure | Users need to find content without thinking | MEDIUM | Grouped nav items, clear labels, journey-oriented |
| Dark mode that actually works | Modern dev/eng audience expects dark mode | LOW | Docusaurus has built-in support, just needs styling |
| Responsive layout | Visitors come from all devices | LOW | Docusaurus handles this, but custom components must too |
| Professional footer | Placeholder footer signals abandoned project | LOW | Real links, proper attribution, no Docusaurus community links |
| "Where am I" indicator | Readers need orientation in multi-section content | LOW | Active nav state, breadcrumbs (Docusaurus provides these) |
| Fast page loads | Content site that's slow to load loses readers instantly | LOW | Already handled by Docusaurus SSG |

### Differentiators (Competitive Advantage)

Features that set the product apart. Not required, but valuable.

| Feature | Value Proposition | Complexity | Notes |
|---------|-------------------|------------|-------|
| Journey-based navigation | Guides readers through a progression instead of dumping them in a reference manual | MEDIUM | Map existing sections to a narrative flow |
| "What should I read next" prompts | Keeps readers engaged, reduces bounce rate | LOW | End-of-page suggestions or sidebar progression |
| Social proof / credibility signals | Builds trust — "this person knows what they're talking about" | LOW | Author bio, experience credentials, testimonials |
| Content preview sections on landing | Gives visitors a taste before committing to read | MEDIUM | Section cards with descriptions and entry points |
| Two-audience messaging | Eng leads and founders see themselves in the landing page | MEDIUM | Subtle audience-aware copy or sections |

### Anti-Features (Commonly Requested, Often Problematic)

Features that seem good but create problems.

| Feature | Why Requested | Why Problematic | Alternative |
|---------|---------------|-----------------|-------------|
| Elaborate animations/transitions | "Looks modern" | Slows down content access, distracts from reading, increases bundle | Subtle CSS transitions only (opacity, transform) |
| Newsletter signup popup | "Build an audience" | Interrupts reading flow, annoying on content sites | Inline CTA at end of content or in footer |
| Search-first navigation | "Users want to search" | Docusaurus already has search — over-designing it wastes effort | Keep Docusaurus built-in search, focus on browse navigation |
| Complex interactive landing page | "Like a SaaS product page" | This is a handbook, not a SaaS product — interactivity distracts | Strong copy + clear CTAs to content |
| Role-based routing | "Send founders here, eng leads there" | Adds complexity, most content is relevant to both audiences | Single journey with content that speaks to both |

## Feature Dependencies

```
[Custom Color Palette]
    └──requires──> [Dark Mode Configuration]
                       └──enables──> [Landing Page Redesign]
                                         └──enables──> [Content Preview Sections]

[Navigation Restructure]
    └──requires──> [Journey Flow Definition]
                       └──enables──> ["What Next" Prompts]

[Footer Redesign] ──independent──> [Landing Page Redesign]

[Blog Fold-in] ──requires──> [Navigation Restructure]
```

### Dependency Notes

- **Landing Page requires Dark Mode Config:** Page design references the color palette — establish palette first
- **Blog Fold-in requires Navigation Restructure:** Blog becomes part of the main nav flow
- **Footer is independent:** Can be done in parallel with landing page work

## MVP Definition

### Launch With (v1)

Minimum viable redesign — what's needed for the site to look intentionally designed.

- [ ] Custom dark color palette and typography — replaces default Infima green
- [ ] Dark-by-default theme configuration
- [ ] Redesigned landing page with value proposition hero
- [ ] Journey-based navigation (grouped, fewer top-level items)
- [ ] Professional footer with real content links
- [ ] Remove all Docusaurus placeholder content (SVGs, community links)
- [ ] Blog folded into main content navigation

### Add After Validation (v1.x)

Features to add once the redesign is live and feedback is in.

- [ ] "What to read next" prompts at end of doc pages
- [ ] Content preview cards on landing page for each section
- [ ] Author/credibility section on landing page

### Future Consideration (v2+)

- [ ] Audience-specific landing sections (eng lead vs founder)
- [ ] Reading progress indicator
- [ ] Custom doc page layout with enhanced sidebar

## Feature Prioritization Matrix

| Feature | User Value | Implementation Cost | Priority |
|---------|------------|---------------------|----------|
| Custom dark color palette | HIGH | LOW | P1 |
| Landing page hero redesign | HIGH | MEDIUM | P1 |
| Navigation restructure | HIGH | MEDIUM | P1 |
| Footer redesign | MEDIUM | LOW | P1 |
| Remove placeholder content | HIGH | LOW | P1 |
| Blog fold-in | MEDIUM | LOW | P1 |
| Content preview sections | MEDIUM | MEDIUM | P2 |
| "Read next" prompts | MEDIUM | LOW | P2 |
| Social proof / author bio | LOW | LOW | P3 |

## Competitor Feature Analysis

| Feature | Shape Up (Basecamp) | Stripe Docs | Linear Marketing | Our Approach |
|---------|---------------------|-------------|------------------|--------------|
| Landing page | Book cover + TOC | Product-focused, minimal | Bold hero, dark, animated | Bold hero with problem statement, dark |
| Navigation | Book chapters (linear) | Sidebar + top nav | Minimal top nav | Journey-based grouped nav |
| Dark mode | Light only | Light with dark | Dark only | Dark default, light available |
| Typography | Serif, book-like | Clean sans-serif | Sharp, modern sans | Clean modern sans (Inter-style) |
| Content density | High (long-form) | Medium | Low (marketing) | Medium (handbook) |

## Sources

- Linear.app marketing site — design reference for dark aesthetic
- Stripe documentation — navigation pattern reference
- Shape Up (Basecamp) — handbook site reference
- Docusaurus showcase sites — what's achievable within the framework

---
*Feature research for: Content site landing page & navigation redesign*
*Researched: 2026-02-11*
