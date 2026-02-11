# Phase 2: Navigation Restructure - Research

**Researched:** 2026-02-11
**Domain:** Docusaurus navigation configuration, UX patterns, Infima CSS
**Confidence:** HIGH

## Summary

Phase 2 involves restructuring the current flat 6-item navbar into a journey-based hierarchy with 2-3 grouped dropdown categories. The current navbar shows: Begin, Product, Team, Product Engineering, AI Cookbook, and Engineering Habits. This research investigates Docusaurus 3.8.1 dropdown navigation, active state indication, responsive mobile behavior, and journey-based documentation UX patterns.

**Key Finding:** Docusaurus supports dropdown menus natively through configuration without requiring component swizzling. However, dropdown parent active states require CSS customization using the `:has()` pseudo-selector, and mobile responsiveness must be tested carefully given the 996px breakpoint.

**Critical Constraint:** This is a UI-only change with no content restructure. All existing doc URLs must remain unchanged to preserve SEO and external links. Navigation changes affect only the navbar grouping and labels, not the underlying docs structure or sidebar configuration.

**Primary recommendation:** Use Docusaurus native dropdown configuration in `docusaurus.config.js` with CSS enhancements for active state indication. Avoid component swizzling unless absolutely necessary for maintaining upgrade path.

## Standard Stack

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| Docusaurus | 3.8.1 | Static site generator | Already in use, stable, well-documented |
| Infima | (bundled) | CSS framework | Docusaurus default, BEM methodology, CSS variables |
| React | 18.3.1 | UI framework | Docusaurus dependency, required for any customization |

### Supporting
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| CSS Variables | N/A | Theme customization | Navbar styling, active states, responsive overrides |
| Media Queries | N/A | Responsive behavior | Mobile-specific navbar adjustments at 996px breakpoint |

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Config-based dropdowns | Swizzled NavbarItem | Swizzling = maintenance burden, upgrade complexity |
| CSS `:has()` selector | JavaScript active state | CSS is declarative, no JS overhead, progressive enhancement |
| Native responsive | Custom breakpoint | Changing breakpoint requires swizzling useWindowSize hook |

**Installation:**
No additional packages required. All functionality available in current stack.

## Architecture Patterns

### Recommended Project Structure
```
docusaurus.config.js          # Navbar dropdown configuration
src/css/custom.css             # Theme variables, dropdown active states
docs/                          # Content structure (UNCHANGED)
├── intro.md
├── product/_category_.json
├── team/_category_.json
└── ...
```

### Pattern 1: Dropdown Navbar Configuration
**What:** Define grouped navigation categories in `docusaurus.config.js` themeConfig
**When to use:** Always - this is the primary implementation approach
**Example:**
```javascript
// Source: https://docusaurus.io/docs/api/themes/configuration
navbar: {
  items: [
    {
      type: 'dropdown',
      label: 'Understanding the Problem',
      position: 'left',
      items: [
        { type: 'doc', docId: 'intro', label: 'Begin' },
        { type: 'doc', docId: '/category/product', label: 'Product' },
      ],
    },
    {
      type: 'dropdown',
      label: 'Building the Solution',
      position: 'left',
      items: [
        { type: 'doc', docId: '/category/building-the-team', label: 'Team' },
        { type: 'doc', docId: '/category/engineering-process', label: 'Product Engineering' },
        { type: 'doc', docId: '/category/ai-engineering-cookbook', label: 'AI Cookbook' },
        { type: 'doc', docId: '/category/engineering-habits', label: 'Engineering Habits' },
      ],
    },
  ],
}
```

### Pattern 2: Dropdown Parent Active State
**What:** Highlight dropdown parent when browsing child docs
**When to use:** Required for NAV-03 (active section visual indication)
**Example:**
```css
/* Source: https://github.com/facebook/docusaurus/issues/9214 */
/* Progressive enhancement using :has() pseudo-selector */
.dropdown:has(.dropdown__link--active) {
  border-bottom: 2px solid var(--ifm-color-primary);
}

/* Alternative: highlight the dropdown label */
.navbar__item.dropdown:has(.dropdown__link--active) .navbar__link {
  color: var(--ifm-color-primary);
  font-weight: 600;
}
```

### Pattern 3: Responsive Mobile Navbar
**What:** Ensure dropdowns work properly on mobile without overflow
**When to use:** Always - required for NAV-04 success criteria
**Example:**
```css
/* Source: https://docusaurus.io/docs/styling-layout */
/* Mobile breakpoint: 996px */
@media (max-width: 996px) {
  /* Mobile already handles dropdowns as collapsible menu items */
  /* Verify no label overflow */
  .navbar__item {
    font-size: 0.9rem;
  }
}

/* Ensure navbar container doesn't overflow */
.navbar__inner {
  max-width: 100%;
  overflow-x: auto;
}
```

### Pattern 4: Dropdown Hover and Click Behavior
**What:** Use Infima's built-in dropdown modifiers
**When to use:** Desktop hover interactions
**Example:**
```javascript
// Source: https://infima.dev/docs/components/navbar/
// Add dropdown--hoverable for hover activation
{
  type: 'dropdown',
  label: 'Category',
  position: 'left',
  className: 'dropdown--hoverable', // Infima modifier
  items: [...]
}
```

### Anti-Patterns to Avoid
- **Hard-coding docIds that change:** Use `/category/` links for category references, not specific doc IDs that may reorder
- **Deep dropdown nesting:** Docusaurus dropdowns don't support nested categories - keep it flat
- **Custom breakpoint without swizzling:** Changing 996px breakpoint requires swizzling `useWindowSize` hook
- **backdrop-filter on navbar:** Known to break mobile navigation (source: https://github.com/facebook/docusaurus/issues/6996)
- **Removing default Infima classes:** Always extend, don't replace, to maintain accessibility and responsive behavior

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Dropdown menus | Custom React dropdown component | Docusaurus `type: 'dropdown'` config | Built-in keyboard nav, ARIA attributes, mobile handling |
| Active state detection | JavaScript route matching | Docusaurus auto-applies `.navbar__link--active` | Automatic, no performance overhead, works with routing |
| Mobile responsive navbar | Custom hamburger menu | Docusaurus native mobile sidebar | Handles 996px breakpoint, accessibility, focus management |
| Dropdown open/close logic | useState and click handlers | Infima `dropdown--hoverable` modifier | CSS-only, no JS bundle size, progressive enhancement |

**Key insight:** Docusaurus navbar is highly configurable through declarative config. Component swizzling should be last resort - most customizations achievable via config + CSS.

## Common Pitfalls

### Pitfall 1: Dropdown Parent Doesn't Show Active State
**What goes wrong:** User browses a doc within a dropdown category, but the top-level dropdown item doesn't indicate they're in that section.
**Why it happens:** Docusaurus only applies `.navbar__link--active` to the specific child link, not the parent dropdown (see: https://github.com/facebook/docusaurus/issues/9214)
**How to avoid:** Use CSS `:has()` pseudo-selector to detect active children and style parent
**Warning signs:** Parent dropdown looks inactive even when browsing its child docs

### Pitfall 2: Mobile Navbar Overflow
**What goes wrong:** Navbar items wrap to second row or get cut off on screens around 1024px width
**Why it happens:** Too many navbar items or long labels exceed available horizontal space
**How to avoid:** Reduce number of top-level items (2-3 dropdowns), use shorter labels, test at 996px breakpoint
**Warning signs:** Horizontal scrollbar appears, navbar items stack vertically unexpectedly

### Pitfall 3: Broken Links After Navigation Restructure
**What goes wrong:** External links or bookmarks to specific docs return 404s
**Why it happens:** Changed docIds or sidebar references without redirects
**How to avoid:** This is UI-only - don't change doc file paths, URLs, or sidebar structure. Only modify navbar labels and grouping
**Warning signs:** Google Search Console shows increased 404s, user reports broken bookmarks

### Pitfall 4: Dropdown Items Not Using `type: 'doc'`
**What goes wrong:** Dropdown items don't get active state styling, or links become stale when docs reorganize
**Why it happens:** Using `href` instead of `type: 'doc'` with `docId`
**How to avoid:** Always use `type: 'doc'` for internal documentation links to leverage automatic active state and doc resolution
**Warning signs:** No `.navbar__link--active` class applied, broken links after doc moves

### Pitfall 5: Accessibility Regression
**What goes wrong:** Keyboard navigation breaks, screen readers can't navigate dropdowns, mobile menu inaccessible
**Why it happens:** Swizzling navbar components without preserving ARIA attributes, keyboard handlers, focus management
**How to avoid:** Use config-based dropdowns (preserve built-in accessibility), test keyboard navigation (Tab, Enter, Escape), verify ARIA labels exist
**Warning signs:** Can't open dropdown with keyboard, no focus indicators, screen reader announces incorrectly

### Pitfall 6: Dark Mode Styling Inconsistency
**What goes wrong:** Dropdown styling looks correct in light mode but broken in dark mode (or vice versa)
**Why it happens:** CSS uses hard-coded colors instead of CSS variables, missing `[data-theme='dark']` selectors
**How to avoid:** Use Infima CSS variables (`--ifm-color-primary`, `--ifm-navbar-link-color`), test both themes
**Warning signs:** White text on white background, invisible hover states, different contrast ratios

### Pitfall 7: Testing Only in Browser DevTools
**What goes wrong:** Mobile navbar appears to work in browser responsive mode but fails on actual mobile devices
**Why it happens:** DevTools doesn't perfectly simulate touch interactions, viewport quirks, mobile browser chrome
**How to avoid:** Test on real mobile devices (iOS Safari, Android Chrome), verify touch targets 44x44px minimum
**Warning signs:** Dropdowns don't open on mobile, touch targets too small, viewport overflow

## Code Examples

Verified patterns from official sources:

### Basic Dropdown Configuration
```javascript
// Source: https://docusaurus.io/docs/api/themes/configuration
{
  type: 'dropdown',
  label: 'Community',
  position: 'left',
  items: [
    {
      type: 'doc',
      docId: 'social',
      label: 'Social'
    },
    {
      label: 'Facebook',
      href: 'https://www.facebook.com',
    }
  ],
}
```

### Active State CSS Enhancement
```css
/* Source: https://github.com/facebook/docusaurus/issues/9214 */
/* Highlight dropdown parent when child is active */
.navbar__item.dropdown:has(.dropdown__link--active) .navbar__link {
  color: var(--ifm-color-primary);
  border-bottom: 2px solid var(--ifm-color-primary);
}
```

### Dark Mode Dropdown Styling
```css
/* Source: https://infima.dev/docs/components/navbar/ */
[data-theme='dark'] .dropdown__menu {
  background-color: var(--ifm-background-surface-color);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

[data-theme='dark'] .dropdown__link {
  color: var(--ifm-menu-color);
}

[data-theme='dark'] .dropdown__link:hover {
  background-color: var(--ifm-menu-color-background-hover);
  color: var(--ifm-menu-color-active);
}
```

### Mobile Responsive Verification
```css
/* Source: https://docusaurus.io/docs/styling-layout */
/* Mobile breakpoint: 996px */
@media (max-width: 996px) {
  /* Docusaurus automatically converts dropdowns to collapsible menu items */
  /* Verify labels don't overflow */
  .navbar__item .navbar__link {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
```

### Dropdown with Hover Activation
```html
<!-- Source: https://infima.dev/docs/components/navbar/ -->
<div class="navbar__item dropdown dropdown--hoverable">
  <a class="navbar__link" href="#">Version</a>
  <ul class="dropdown__menu">
    <li><a class="dropdown__link" href="#">v2.0</a></li>
    <li><a class="dropdown__link" href="#">v1.0</a></li>
  </ul>
</div>
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Flat navbar with all categories | Journey-based dropdown hierarchies | Industry trend 2024-2026 | Reduces cognitive load, tells progression story |
| JavaScript-based dropdowns | CSS `:has()` for parent active state | `:has()` browser support 2023+ | No JS overhead, declarative, progressive enhancement |
| Custom hamburger menus | Native Docusaurus mobile sidebar | Docusaurus 2.0+ (2022) | Built-in accessibility, keyboard nav, ARIA |
| Hard-coded active states | React Router auto-active classes | React Router standard | Automatic, no manual route matching |

**Deprecated/outdated:**
- **Docusaurus v1 navigation API:** v1 used different configuration format - all v2/v3 examples apply
- **Swizzling navbar for simple dropdowns:** Unnecessary since `type: 'dropdown'` became stable in v2.0
- **Custom breakpoints without hook swizzling:** Now requires swizzling `useWindowSize` (https://docusaurus.io/docs/styling-layout)

## Journey-Based Navigation UX

Based on documentation UX best practices research:

### Principles
1. **Hierarchical organization:** Primary → Secondary → Detailed content (max 2 levels for navbar dropdowns)
2. **Progressive narrative:** Navigation tells a story - "understand problem → build team → build product"
3. **Clear entry points:** Top-level categories answer "Where do I start?" and "What comes next?"
4. **Visual wayfinding:** Active states show "You are here" at both parent and child levels

### Recommended Grouping Strategy
Current flat structure maps to journey phases:

**Phase 1: Understanding the Problem** (2 items)
- Begin (intro)
- Product (understanding what to build)

**Phase 2: Building the Solution** (4 items)
- Team (hiring/culture)
- Product Engineering (process)
- AI Cookbook (tools)
- Engineering Habits (quality)

Alternative: 3 categories if separating tools/practices:
- Understanding → Begin, Product
- Building the Team → Team
- Building the Product → Engineering Process, AI Cookbook, Habits

### Why Journey-Based Over Other Structures
- **Role-based** (Founder/Engineer/Designer): Content doesn't cleanly segment by role - engineers need product knowledge
- **Alphabetical:** No narrative, no priority signal
- **Technology-based:** Not the primary mental model for early-stage handbook
- **Flat list:** Current problem - too many choices, no story

Source: https://idratherbewriting.com/files/doc-navigation-wtd/design-principles-for-doc-navigation/

## Open Questions

1. **Specific dropdown grouping**
   - What we know: 6 items → 2-3 categories, journey-based
   - What's unclear: Exact category labels, whether to group AI Cookbook with Engineering Process or separately
   - Recommendation: Start with 2 categories (Understanding/Building), test user comprehension, iterate if needed

2. **Active state visual treatment**
   - What we know: CSS `:has()` can detect active children
   - What's unclear: Underline vs color change vs both, accessibility contrast requirements
   - Recommendation: Use color + border-bottom for redundant encoding, verify WCAG-AA contrast (4.5:1)

3. **Mobile menu behavior**
   - What we know: Docusaurus converts dropdowns to collapsible items at 996px
   - What's unclear: Whether expanded-by-default when child is active
   - Recommendation: Test on real devices, may need to verify `containsActiveItems` logic

## Sources

### Primary (HIGH confidence)
- [Docusaurus Theme Configuration](https://docusaurus.io/docs/api/themes/configuration) - Navbar item types, dropdown config
- [Docusaurus Styling and Layout](https://docusaurus.io/docs/styling-layout) - Responsive breakpoints, CSS customization
- [Infima Navbar Component](https://infima.dev/docs/components/navbar/) - CSS classes, modifiers, HTML structure
- [Docusaurus Swizzling Guide](https://docusaurus.io/docs/swizzling) - Component customization safety levels

### Secondary (MEDIUM confidence)
- [GitHub Issue #9214: Dropdown active state](https://github.com/facebook/docusaurus/issues/9214) - CSS `:has()` workaround
- [GitHub Issue #8308: Missing ARIA labels](https://github.com/facebook/docusaurus/issues/8308) - Accessibility concerns
- [GitHub Issue #8132: Dropdown/sidebar styling](https://github.com/facebook/docusaurus/issues/8132) - Styling consistency
- [Infima CSS Variables Gist](https://gist.github.com/abhigyantrips/b828ca46b2460c6699c73e0162f6be80) - Complete CSS variable list
- [Building Navigation for Documentation Sites](https://idratherbewriting.com/files/doc-navigation-wtd/design-principles-for-doc-navigation/) - UX best practices
- [The Secret Migration: Navigation Changes Destroy SEO](https://sitebulb.com/resources/guides/the-secret-migration-how-site-navigation-changes-can-destroy-seo-without-you-realising/) - Migration pitfalls
- [Accessible Navigation Menus](https://www.accesify.io/blog/accessible-navigation-menus-aria-roles-keyboard-support-focus-order/) - ARIA, keyboard support

### Tertiary (LOW confidence)
- Medium articles blocked by paywall - cited in search but unverified
- Community discussions on custom navbar items - implementation-specific, may be outdated

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH - Existing dependencies, official docs verify all capabilities
- Architecture: HIGH - Official examples from Docusaurus and Infima documentation
- Pitfalls: MEDIUM - GitHub issues confirm problems, but solutions community-sourced (`:has()` workaround)
- UX patterns: MEDIUM - Industry best practices, not Docusaurus-specific

**Research date:** 2026-02-11
**Valid until:** 2026-04-11 (60 days - Docusaurus stable, slow-moving API)

**Known limitations:**
- `:has()` pseudo-selector requires modern browsers (Safari 15.4+, Chrome 105+, Firefox 121+) - 95%+ coverage as of 2025
- Accessibility testing limited to documentation review, not hands-on verification
- Mobile testing recommendations based on best practices, not project-specific device testing
