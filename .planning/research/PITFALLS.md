# Pitfalls Research

**Domain:** Docusaurus theme customization & landing page redesign
**Researched:** 2026-02-11
**Confidence:** HIGH

## Critical Pitfalls

### Pitfall 1: Ejecting Theme Components Instead of Wrapping

**What goes wrong:**
Developer ejects (fully swizzles) Navbar or other complex components to customize them. Now they own hundreds of lines of Docusaurus internal code that breaks on every update.

**Why it happens:**
Wrapping feels limited — you can't change everything. Ejecting feels like "full control." But the cost is enormous.

**How to avoid:**
- Use CSS custom properties to change appearance (covers 90% of needs)
- Use `--wrap` swizzle only when you need to add behavior
- Only eject as absolute last resort, and document exactly what was changed

**Warning signs:**
Files in `src/theme/` that are 100+ lines of copied Docusaurus source code

**Phase to address:**
Phase 1 (theme foundation) — establish the CSS-first approach from the start

---

### Pitfall 2: Dark Mode That Only Works on the Landing Page

**What goes wrong:**
Custom landing page components look great in dark mode, but doc pages, code blocks, sidebar, and search results still have light-mode artifacts or poor contrast.

**Why it happens:**
Developer styles custom components for dark mode but forgets that Infima components (sidebar, code blocks, tables, admonitions) also need dark mode variables set correctly.

**How to avoid:**
- Set ALL relevant `--ifm-*` variables in the `[data-theme='dark']` block, not just colors
- Test every page type in dark mode: landing, doc page, blog post, category page, 404
- Pay attention to: code blocks, admonitions/callouts, table borders, search overlay

**Warning signs:**
White flashes, low-contrast text, unreadable code blocks on any page besides the landing page

**Phase to address:**
Phase 1 (theme foundation) — get dark mode right globally before building custom components

---

### Pitfall 3: Breaking Existing URLs / Links

**What goes wrong:**
While restructuring navigation or folding blog content, existing URLs stop working. External links, bookmarks, and search engine indexes break.

**Why it happens:**
Moving docs between folders or changing sidebar configuration can change URL paths. Renaming blog to docs changes `/blog/post-name` to `/docs/post-name`.

**How to avoid:**
- This project explicitly keeps docs in place (UI-only changes) — respect this constraint
- For blog fold-in: use Docusaurus redirect plugin or keep blog plugin active with hidden nav link
- Test all existing URLs after changes

**Warning signs:**
404 errors in dev server, broken links warnings in build output

**Phase to address:**
Phase 4 (blog fold-in / cleanup) — test all URLs after any content reorganization

---

### Pitfall 4: Font Loading Flash (FOUT/FOIT)

**What goes wrong:**
Custom web fonts cause a visible flash where text renders in a fallback font, then jumps to the custom font. On dark backgrounds, this is especially jarring.

**Why it happens:**
Web fonts load asynchronously. Without `font-display` strategy, the browser either hides text (FOIT) or shows fallback then swaps (FOUT).

**How to avoid:**
- Use system font stack as primary: `-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`
- If using a custom font like Inter: load via `<link rel="preload">` in Docusaurus head config and use `font-display: swap`
- Consider whether a custom font is worth the loading cost — system fonts look excellent and load instantly

**Warning signs:**
Text pop/shift on initial page load, especially noticeable on slow connections

**Phase to address:**
Phase 1 (theme foundation) — font decision should be made early

---

### Pitfall 5: Navbar Overflow on Mobile

**What goes wrong:**
Even with grouped navigation, too many items or long labels cause the mobile hamburger menu to feel cluttered or the desktop nav to wrap to two lines.

**Why it happens:**
Desktop nav looks fine with 4-5 items, but long labels + logo + search can overflow. Mobile hamburger menu stacks all items including dropdown children.

**How to avoid:**
- Keep labels short (1-2 words max)
- Test at 768px and 1024px breakpoints specifically
- Limit to 3-4 top-level items (dropdowns count as one)
- Use `position: 'right'` for secondary items to spread the layout

**Warning signs:**
Navbar wrapping to two lines on tablet/small laptop screens

**Phase to address:**
Phase 2 (navigation restructure) — test responsive behavior during nav work

---

### Pitfall 6: Landing Page Disconnected from Docs Experience

**What goes wrong:**
Landing page looks polished and custom, but clicking into docs feels like a completely different (worse) site. The visual gap creates distrust.

**Why it happens:**
Developer invests heavily in custom landing page components but doesn't carry the visual identity through to doc pages.

**How to avoid:**
- Global theme variables (custom.css) affect everything — this is the primary styling method
- Ensure landing page and doc pages share the same color palette, typography, and spacing
- The landing page should feel like a "front door," not a separate site

**Warning signs:**
Noticeable visual jarring when navigating from landing page to first doc page

**Phase to address:**
Phase 1 (theme foundation) — global styles apply everywhere, preventing this by design

## Technical Debt Patterns

| Shortcut | Immediate Benefit | Long-term Cost | When Acceptable |
|----------|-------------------|----------------|-----------------|
| `!important` overrides | Quick fix for stubborn Infima styles | Specificity wars, unmaintainable CSS | Never — always find the CSS variable instead |
| Inline styles in JSX | Quick visual fix | Not affected by theme toggle, hard to maintain | Only for truly dynamic values (calc results) |
| Copy-pasting Docusaurus CSS | "Fix" a specific look | Breaks on Docusaurus upgrade, duplicated code | Never — override via custom properties |

## UX Pitfalls

| Pitfall | User Impact | Better Approach |
|---------|-------------|-----------------|
| Too many sections on landing page | Scroll fatigue, user bounces before finding entry point | 3-4 focused sections: hero → value prop → journey overview → CTA |
| Vague CTA text ("Learn more") | User doesn't know what they'll get by clicking | Specific CTAs ("Start with the product chapter", "Read the team guide") |
| Auto-playing animations | Distracting, accessibility issues, battery drain on mobile | Static content with subtle hover/scroll transitions only |
| Hiding all content behind "Get Started" | Users can't assess depth/quality without committing | Show content structure and previews on landing page |

## "Looks Done But Isn't" Checklist

- [ ] **Dark mode:** Test on EVERY page type (doc, blog, category, 404, search results)
- [ ] **Responsive:** Test landing page at 320px, 768px, 1024px, 1440px
- [ ] **Footer:** Verify all links actually work (no Docusaurus placeholders remaining)
- [ ] **Navigation:** Verify all nav items point to correct pages (not broken `/category/` paths)
- [ ] **OG/Social meta:** Verify social sharing still works after theme changes
- [ ] **Code blocks:** Verify syntax highlighting readable in dark mode
- [ ] **Accessibility:** Verify color contrast meets WCAG AA (4.5:1 for text)
- [ ] **Build:** Run `npm run build` — catches broken links and missing assets

## Pitfall-to-Phase Mapping

| Pitfall | Prevention Phase | Verification |
|---------|------------------|--------------|
| Ejecting theme components | Phase 1 | No ejected components in src/theme/ |
| Dark mode inconsistency | Phase 1 | Every page type visually tested in dark mode |
| Font loading flash | Phase 1 | No visible font swap on page load |
| Landing/docs disconnect | Phase 1 | Seamless visual transition from landing to docs |
| Breaking URLs | Phase 4 | All existing URLs return 200, build has no broken link warnings |
| Navbar overflow | Phase 2 | Nav renders correctly at all breakpoints |

## Sources

- Docusaurus GitHub issues — common theming complaints
- Docusaurus swizzling documentation — wrap vs eject guidance
- Web font loading best practices — font-display strategies
- WCAG 2.1 — contrast requirements for dark themes

---
*Pitfalls research for: Docusaurus theme customization & landing page redesign*
*Researched: 2026-02-11*
