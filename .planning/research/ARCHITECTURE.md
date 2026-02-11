# Architecture Research

**Domain:** Docusaurus theme customization & landing page redesign
**Researched:** 2026-02-11
**Confidence:** HIGH

## Standard Architecture

### System Overview

```
┌─────────────────────────────────────────────────────────────┐
│                    Configuration Layer                        │
│  docusaurus.config.js (navbar, colorMode, footer, metadata)  │
├─────────────────────────────────────────────────────────────┤
│                    Theme Override Layer                       │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐       │
│  │ ColorMode    │  │ Navbar       │  │ DocItem      │       │
│  │ (dark dflt)  │  │ (config)     │  │ (existing)   │       │
│  └──────────────┘  └──────────────┘  └──────────────┘       │
├─────────────────────────────────────────────────────────────┤
│                    Custom Pages Layer                         │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ src/pages/index.js — Landing Page                     │   │
│  │  ├── HeroSection                                      │   │
│  │  ├── ValueProposition                                 │   │
│  │  ├── JourneyOverview                                  │   │
│  │  └── CallToAction                                     │   │
│  └──────────────────────────────────────────────────────┘   │
├─────────────────────────────────────────────────────────────┤
│                    Styling Layer                              │
│  ┌──────────┐  ┌──────────────────┐  ┌──────────────────┐   │
│  │ custom   │  │ Component CSS    │  │ Landing page     │   │
│  │ .css     │  │ modules          │  │ CSS modules      │   │
│  └──────────┘  └──────────────────┘  └──────────────────┘   │
├─────────────────────────────────────────────────────────────┤
│                    Content Layer (unchanged)                  │
│  docs/    blog/    static/                                   │
└─────────────────────────────────────────────────────────────┘
```

### Component Responsibilities

| Component | Responsibility | Typical Implementation |
|-----------|----------------|------------------------|
| `docusaurus.config.js` | Navbar items, color mode, footer links, site metadata | Configuration object — no React code |
| `src/css/custom.css` | Global CSS custom properties (colors, fonts, spacing) | Override Infima `--ifm-*` variables |
| `src/pages/index.js` | Landing page layout and sections | React component composing sub-components |
| `src/components/Hero/` | Hero section with headline and CTA | New React component + CSS module |
| `src/components/ValueProp/` | Value proposition / "why this exists" sections | New React component + CSS module |
| `src/components/JourneyMap/` | Visual journey through content sections | New React component + CSS module |
| `src/theme/` | Swizzled theme components (DocItem existing) | Wrapper components using `@theme-original` |

## Recommended Project Structure

```
src/
├── components/              # Custom React components
│   ├── HomepageHero/        # Hero section (replaces HomepageHeader)
│   │   ├── index.js
│   │   └── styles.module.css
│   ├── ValueProp/           # Value proposition sections
│   │   ├── index.js
│   │   └── styles.module.css
│   ├── JourneyMap/          # Journey-based content overview
│   │   ├── index.js
│   │   └── styles.module.css
│   ├── HomepageFeatures/    # REMOVE or repurpose (currently dinosaur SVGs)
│   └── StartupSanityForm/   # Keep as-is (existing interactive component)
├── css/
│   └── custom.css           # Global theme: colors, fonts, spacing, dark mode
├── pages/
│   ├── index.js             # Landing page (compose Hero + ValueProp + JourneyMap)
│   └── index.module.css     # Landing page layout styles
├── theme/
│   └── DocItem/
│       └── index.js         # Existing og:image wrapper (keep as-is)
```

### Structure Rationale

- **components/:** One folder per component with co-located CSS module — Docusaurus convention
- **css/custom.css:** Single file for global theme variables — keeps overrides centralized
- **pages/index.js:** Landing page as composition of components — easy to reorder/modify sections
- **theme/:** Only swizzle what you must — currently just DocItem wrapper

## Architectural Patterns

### Pattern 1: CSS Custom Properties for Theming

**What:** Override Infima's `--ifm-*` CSS variables instead of writing new CSS rules
**When to use:** All color, typography, and spacing changes
**Trade-offs:** Respects Docusaurus upgrade path; limited to what Infima exposes as variables

**Example:**
```css
[data-theme='dark'] {
  --ifm-background-color: #0a0a0b;
  --ifm-color-primary: #818cf8;
  --ifm-font-family-base: 'Inter', -apple-system, sans-serif;
  --ifm-heading-font-weight: 600;
}
```

### Pattern 2: Navbar Dropdowns for Grouped Navigation

**What:** Use Docusaurus `type: 'dropdown'` navbar items to group related sections
**When to use:** When reducing top-level nav items by grouping
**Trade-offs:** Built-in, accessible, mobile-responsive; limited to 2 levels

**Example:**
```javascript
navbar: {
  items: [
    {
      type: 'dropdown',
      label: 'The Journey',
      items: [
        { type: 'doc', docId: 'intro', label: 'Start Here' },
        { type: 'doc', docId: '/category/product', label: 'Build the Right Thing' },
        { type: 'doc', docId: '/category/building-the-team', label: 'Build the Team' },
      ],
    },
  ],
}
```

### Pattern 3: Component Composition for Landing Page

**What:** Build landing page from independent section components composed in index.js
**When to use:** Complex landing pages with multiple distinct sections
**Trade-offs:** Easy to reorder and test sections independently; slightly more files

## Data Flow

### Theme Configuration Flow

```
docusaurus.config.js (colorMode.defaultMode: 'dark')
    ↓
Docusaurus sets data-theme='dark' on <html>
    ↓
custom.css [data-theme='dark'] variables activate
    ↓
All Infima components + custom components inherit dark palette
```

### Navigation Flow

```
docusaurus.config.js (navbar.items)
    ↓
Docusaurus Navbar component renders items
    ↓
User clicks dropdown → reveals grouped doc links
    ↓
Docusaurus router navigates to doc page
    ↓
Sidebar shows position within section
```

### Landing Page Flow

```
User visits /
    ↓
src/pages/index.js renders
    ↓
Layout wraps with nav + footer
    ↓
HeroSection → ValueProp → JourneyMap → CTA
    ↓
User clicks journey entry point → enters docs
```

## Anti-Patterns

### Anti-Pattern 1: Ejecting Theme Components

**What people do:** Run `npx docusaurus swizzle` with `--eject` to get full control
**Why it's wrong:** Ejected components don't receive Docusaurus updates, creating maintenance burden
**Do this instead:** Use `--wrap` strategy or override via CSS custom properties

### Anti-Pattern 2: Fighting Infima with !important

**What people do:** Use `!important` everywhere to override Infima defaults
**Why it's wrong:** Creates specificity wars, makes future changes painful, breaks dark/light toggle
**Do this instead:** Override CSS custom properties — Infima reads these at runtime

### Anti-Pattern 3: Putting All Styles in custom.css

**What people do:** Write component-specific styles in the global custom.css
**Why it's wrong:** Styles leak between components, hard to maintain, grows into a mess
**Do this instead:** Use CSS modules for component-specific styles, custom.css only for global theme variables

## Suggested Build Order

1. **Theme foundation first** — color palette, typography, dark-by-default config
2. **Navigation restructure second** — grouped nav items, removed clutter
3. **Landing page third** — hero, value prop, journey map (built on top of theme)
4. **Footer + cleanup last** — footer links, remove placeholders, blog fold-in

**Rationale:** Theme variables cascade to everything else. Getting colors/fonts right first means landing page and nav automatically look correct. Footer and cleanup are independent and can be done last.

## Sources

- Docusaurus theming documentation — swizzle, CSS variables, colorMode
- Docusaurus navbar configuration — dropdown types, item configuration
- Infima CSS framework — variable reference

---
*Architecture research for: Docusaurus theme customization & landing page redesign*
*Researched: 2026-02-11*
