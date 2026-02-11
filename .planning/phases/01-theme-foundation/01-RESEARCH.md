# Phase 1: Theme Foundation - Research

**Researched:** 2026-02-11
**Domain:** Docusaurus 3.8 theming, CSS customization, Infima framework
**Confidence:** HIGH

## Summary

Phase 1 involves customizing a Docusaurus 3.8.1 site with a dark-by-default Linear-inspired theme. The implementation is straightforward: configure `colorMode` settings in `docusaurus.config.js`, override Infima CSS variables in `src/css/custom.css`, and configure Prism syntax highlighting themes. No plugin installation or component swizzling required for basic theming.

Docusaurus uses the Infima CSS framework with a comprehensive set of CSS variables (`--ifm-*`) that control colors, typography, spacing, and component styling. The framework provides 7 shades for each color and follows a consistent naming convention. Dark mode support is built-in and controlled via the `[data-theme='dark']` attribute selector.

Linear's design aesthetic emphasizes dark mode with desaturated blues, clean typography (Inter font family), high contrast for accessibility, minimalist layouts, and strategic use of gradients. This aligns well with Docusaurus's variable-based theming system.

**Primary recommendation:** Override Infima variables in custom.css for colors and typography, set `colorMode.defaultMode: 'dark'` in config, and configure separate light/dark Prism themes. Avoid component swizzling unless absolutely necessary.

## Standard Stack

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| @docusaurus/core | 3.8.1 | Static site generator | Project already uses this version |
| @docusaurus/preset-classic | 3.8.1 | Default theme preset | Includes Infima framework and theming support |
| Infima | (bundled) | CSS framework | Built into preset-classic, provides theming variables |
| prism-react-renderer | 2.4.1 | Code syntax highlighting | Already installed, supports custom themes |

### Supporting
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| ColorBox (tool) | N/A | Color palette generator | Generate WCAG-compliant color shades from base colors |
| Inter font | Latest | Typography | Optional web font for Linear-inspired aesthetic |

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| CSS variables | Sass/Less | CSS variables are sufficient; no preprocessor needed for this phase |
| Inter font | System font stack only | Inter provides Linear aesthetic but requires loading; system fonts are faster |
| Custom theme | Third-party theme plugin | Custom is more flexible; plugins add complexity and may not match Linear style |

**Installation:**
No new packages required. All dependencies already installed.

## Architecture Patterns

### Recommended File Structure
```
src/
├── css/
│   └── custom.css          # Override Infima variables here
├── pages/
│   └── index.js            # Landing page (already exists)
└── components/             # Custom React components
docusaurus.config.js        # Configure colorMode and prism themes
```

### Pattern 1: CSS Variable Override
**What:** Override Infima CSS variables in custom.css using `:root` and `[data-theme='dark']` selectors
**When to use:** For all color, typography, and spacing customizations
**Example:**
```css
/* Source: https://docusaurus.io/docs/styling-layout */
:root {
  --ifm-color-primary: #5b8def;
  --ifm-color-primary-dark: #4a7eed;
  --ifm-color-primary-darker: #3d75ec;
  --ifm-color-primary-darkest: #2562e0;
  --ifm-color-primary-light: #6c9cf1;
  --ifm-color-primary-lighter: #79a5f2;
  --ifm-color-primary-lightest: #9dbdf5;

  --ifm-font-family-base: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
  --ifm-code-font-size: 95%;
}

[data-theme='dark'] {
  --ifm-color-primary: #5b8def;
  --ifm-background-color: #09111a;
  --ifm-background-surface-color: #111827;
  --docusaurus-highlighted-code-line-bg: rgba(91, 141, 239, 0.15);
}
```

### Pattern 2: Color Mode Configuration
**What:** Configure default theme mode and user preferences in docusaurus.config.js
**When to use:** To set dark mode as default while allowing user toggle
**Example:**
```javascript
// Source: https://docusaurus.io/docs/api/themes/configuration
export default {
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
  },
};
```

### Pattern 3: Prism Theme Configuration
**What:** Configure separate syntax highlighting themes for light and dark modes
**When to use:** To ensure code blocks match overall theme aesthetic
**Example:**
```javascript
// Source: https://docusaurus.io/docs/markdown-features/code-blocks
import {themes as prismThemes} from 'prism-react-renderer';

export default {
  themeConfig: {
    prism: {
      theme: prismThemes.github,      // Light mode theme
      darkTheme: prismThemes.vsDark,  // Dark mode theme
    },
  },
};
```

### Anti-Patterns to Avoid
- **Using !important rules:** Infima's CSS variables have appropriate specificity; avoid !important unless absolutely necessary
- **Swizzling components for color changes:** Use CSS variables instead; swizzling increases maintenance burden
- **Setting variables only in :root:** Dark mode variables must be in `[data-theme='dark']` selector to take effect
- **Ignoring WCAG contrast ratios:** Use ColorBox or similar tool to verify 4.5:1 for normal text, 3:1 for large text

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Color shade generation | Manual calculation of 7 color shades | ColorBox.io or similar tool | Ensures perceptual uniformity and WCAG compliance |
| Contrast checking | Manual contrast ratio testing | Built-in ColorBox WCAG checker or WebAIM contrast checker | WCAG AA requires specific ratios (4.5:1 normal, 3:1 large text) |
| Dark mode toggle | Custom React component for theme switching | Built-in Docusaurus colorMode toggle | Already included, handles localStorage persistence and user preferences |
| Font loading optimization | Custom font-face declarations | System font stack or Google Fonts CDN | System fonts avoid layout shift; Google Fonts handles optimization |

**Key insight:** Docusaurus has thought through theming edge cases (localStorage persistence, SSR, preference detection). Leverage the framework instead of reinventing.

## Common Pitfalls

### Pitfall 1: CSS Variable Scope Blindness
**What goes wrong:** Setting CSS variables in `:root` doesn't affect dark mode appearance
**Why it happens:** Docusaurus sets dark mode variables in `[data-theme='dark']` selector which has higher specificity
**How to avoid:** Always define parallel variables for both `:root` (light mode) and `[data-theme='dark']`
**Warning signs:** Theme looks correct in light mode but wrong in dark mode, or variables "don't work"

### Pitfall 2: Infima Color System Misunderstanding
**What goes wrong:** Only setting `--ifm-color-primary` doesn't create a complete color palette
**Why it happens:** Expecting automatic shade generation like some CSS frameworks provide
**How to avoid:** Manually define all 7 shades (-darkest, -darker, -dark, primary, -light, -lighter, -lightest) or use ColorBox
**Warning signs:** Hover states, active states, or disabled states have incorrect colors

### Pitfall 3: Prism Theme Not Applied to Dark Mode
**What goes wrong:** Code blocks use light theme colors even when site is in dark mode
**Why it happens:** Only setting `prism.theme` without `prism.darkTheme` in config
**How to avoid:** Always configure both `prism.theme` and `prism.darkTheme` properties
**Warning signs:** Code blocks are unreadable in dark mode, light background on dark page

### Pitfall 4: Font Loading Layout Shift
**What goes wrong:** Page content jumps/shifts when custom font loads
**Why it happens:** Default system font and custom font have different metrics
**How to avoid:** Use system font stack or include `font-display: swap` with font fallbacks
**Warning signs:** Visible layout shift (CLS) when page loads, especially on slower connections

### Pitfall 5: CSS Ordering and Specificity Issues
**What goes wrong:** Custom CSS doesn't override Docusaurus styles
**Why it happens:** Custom CSS loaded before theme CSS in some cases; insufficient specificity
**How to avoid:** Use CSS variables instead of direct property overrides; they work regardless of load order
**Warning signs:** Styles work in dev (`yarn start`) but fail in production build

### Pitfall 6: Inconsistent Styling Across Page Types
**What goes wrong:** Landing page has different colors/fonts than docs pages
**Why it happens:** Landing page uses component-scoped CSS modules; docs use global Infima variables
**How to avoid:** Use Infima variables in custom component styles; avoid hardcoded colors
**Warning signs:** Visual inconsistency when navigating between home page and docs

### Pitfall 7: Ignoring WCAG Contrast Requirements
**What goes wrong:** Text is difficult to read, especially in dark mode
**Why it happens:** Choosing colors based on aesthetics without testing contrast ratios
**How to avoid:** Use ColorBox WCAG checker; aim for 4.5:1 for normal text, 3:1 for large text (WCAG AA)
**Warning signs:** Text appears "washed out" or hard to read in certain lighting conditions

## Code Examples

Verified patterns from official sources:

### Complete Dark Theme Color Palette
```css
/* Source: Linear-inspired dark theme with WCAG AA compliance */
[data-theme='dark'] {
  /* Background colors - use dark gray instead of pure black */
  --ifm-background-color: #09111a;
  --ifm-background-surface-color: #111827;

  /* Primary color - desaturated blue (Linear-inspired) */
  --ifm-color-primary: #5b8def;
  --ifm-color-primary-dark: #4a7eed;
  --ifm-color-primary-darker: #3d75ec;
  --ifm-color-primary-darkest: #2562e0;
  --ifm-color-primary-light: #6c9cf1;
  --ifm-color-primary-lighter: #79a5f2;
  --ifm-color-primary-lightest: #9dbdf5;

  /* Text colors - soft grays for readability */
  --ifm-font-color-base: #e5e7eb;
  --ifm-font-color-secondary: #9ca3af;

  /* Code block highlighting */
  --docusaurus-highlighted-code-line-bg: rgba(91, 141, 239, 0.15);

  /* Navbar and sidebar */
  --ifm-navbar-background-color: #09111a;
  --ifm-navbar-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.3);
}
```

### Modern Typography Stack
```css
/* Source: https://modernfontstacks.com/ */
:root {
  /* Neo-Grotesque style (includes Inter) */
  --ifm-font-family-base: 'Inter', Roboto, 'Helvetica Neue', 'Arial Nova',
                          'Nimbus Sans', Arial, sans-serif;

  /* Monospace for code */
  --ifm-font-family-monospace: 'SF Mono', Monaco, 'Cascadia Code',
                               'Roboto Mono', Consolas, 'Courier New', monospace;

  /* Font sizes */
  --ifm-font-size-base: 100%;
  --ifm-code-font-size: 95%;
  --ifm-line-height-base: 1.65;

  /* Heading font weight (Linear uses bold headings) */
  --ifm-heading-font-weight: 700;
}
```

### Loading Inter Font from Google Fonts
```javascript
// Source: docusaurus.config.js
export default {
  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: 'anonymous',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
      },
    },
  ],
};
```

### Complete colorMode Configuration
```javascript
// Source: https://docusaurus.io/docs/api/themes/configuration
export default {
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',              // Dark mode by default
      disableSwitch: false,             // Keep toggle for user preference
      respectPrefersColorScheme: false, // Don't override defaultMode
    },
    prism: {
      theme: prismThemes.github,        // Light mode: GitHub theme
      darkTheme: prismThemes.vsDark,    // Dark mode: VS Dark theme
    },
  },
};
```

### Using Infima Variables in Component Styles
```css
/* Source: Best practice for component-scoped CSS */
/* src/pages/index.module.css */
.heroBanner {
  /* Use Infima variables instead of hardcoded colors */
  background-color: var(--ifm-background-color);
  color: var(--ifm-font-color-base);
  padding: var(--ifm-global-spacing);
}

.buttons {
  /* Buttons automatically inherit Infima primary colors */
  display: flex;
  gap: var(--ifm-global-spacing);
}
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| prism-react-renderer v1 | prism-react-renderer v2 | 2023 | Import changed from `themes` to `{themes as prismThemes}`; Docusaurus 3.8 uses v2 |
| HSL color space | OKLCH/LCH color space | 2024-2025 | ColorBox now uses perceptually uniform colors; better for dark themes |
| Hard-coded theme colors | CSS custom properties | Docusaurus 2.0+ | Variables enable easy theme switching without rebuilding |
| Inline styles in components | Infima variable references | Best practice | Ensures consistency across theme modes |

**Deprecated/outdated:**
- **Direct Prism theme imports:** Old method was `require('prism-react-renderer/themes/github')`, now use `import {themes as prismThemes} from 'prism-react-renderer'`
- **Pure black (#000000) backgrounds:** Modern dark themes use dark gray (#09111a, #111827) for better contrast and comfort
- **data-theme detection in JavaScript:** Use CSS `[data-theme='dark']` selector instead; more reliable and faster

## Open Questions

1. **Should we load Inter font or use system font stack?**
   - What we know: Inter is Linear's font; system fonts are faster (no HTTP request, no layout shift)
   - What's unclear: User's priority - authentic Linear aesthetic vs. performance
   - Recommendation: Start with system font stack that includes Inter first; if user has Inter installed, they get it; otherwise fallback is clean

2. **Should we customize 404 page immediately or defer?**
   - What we know: 404 page respects theme colors automatically; customization requires swizzling NotFound component
   - What's unclear: Requirements say "all page types" but 404 may be low priority
   - Recommendation: Verify 404 respects dark theme with CSS variables first; swizzle only if requirements explicitly demand custom layout/content

3. **What's the exact color palette for "Linear-inspired"?**
   - What we know: Linear uses desaturated blues, dark gray backgrounds, high contrast
   - What's unclear: Specific hex values not documented; Linear's actual palette is proprietary
   - Recommendation: Use ColorBox to generate palette from #5b8def (Linear-ish blue) as starting point; validate with user

## Sources

### Primary (HIGH confidence)
- [Docusaurus Styling and Layout](https://docusaurus.io/docs/styling-layout) - CSS variables, Infima customization
- [Docusaurus Theme Configuration](https://docusaurus.io/docs/api/themes/configuration) - colorMode settings
- [Docusaurus Code Blocks](https://docusaurus.io/docs/markdown-features/code-blocks) - Prism theme configuration
- [Infima CSS Variables Gist](https://gist.github.com/abhigyantrips/b828ca46b2460c6699c73e0162f6be80) - Complete variable list
- [prism-react-renderer v2.4.1](https://github.com/FormidableLabs/prism-react-renderer) - Current syntax highlighting library

### Secondary (MEDIUM confidence)
- [Linear Design Article - LogRocket](https://blog.logrocket.com/ux-design/linear-design/) - Linear aesthetic characteristics
- [How Linear Redesigned UI](https://linear.app/now/how-we-redesigned-the-linear-ui) - Linear's design philosophy
- [Modern Font Stacks](https://modernfontstacks.com/) - System font stack recommendations
- [Inter Font](https://rsms.me/inter/) - Official Inter documentation
- [ColorBox OKLCH Palette Generator](https://colorbox.io/oklch-color-palette-generator) - WCAG-compliant palette generation
- [WCAG Contrast Requirements](https://www.makethingsaccessible.com/guides/contrast-requirements-for-wcag-2-2-level-aa/) - Accessibility standards

### Tertiary (LOW confidence)
- [Docusaurus Swizzling](https://docusaurus.io/docs/swizzling) - Component customization (not needed for Phase 1)
- [Linear Style Themes](https://linear.style/) - Community Linear themes (for inspiration only)

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH - All dependencies already installed; no unknowns
- Architecture: HIGH - CSS variable approach verified in official docs; proven pattern
- Pitfalls: HIGH - Common issues documented in GitHub issues and discussions
- Linear aesthetic: MEDIUM - No official Linear design system docs; inferred from articles and visual analysis

**Research date:** 2026-02-11
**Valid until:** 2026-04-11 (60 days - stable framework, slow-moving domain)
