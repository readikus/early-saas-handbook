# Coding Conventions

**Analysis Date:** 2026-02-11

## Naming Patterns

**Files:**
- Components in `src/components/` use `index.js` or `index.jsx` naming convention
- Pages in `src/pages/` use descriptive names like `index.js`
- CSS modules use `.module.css` suffix: `styles.module.css`, `index.module.css`
- Theme overrides organized in `src/theme/DocItem/index.js`

**Functions:**
- PascalCase for React functional components: `HomepageFeatures()`, `Feature()`, `DocItemWrapper()`
- camelCase for utility functions and callbacks: `handleSelectChange()`, `map()`, `reduce()`
- Arrow functions preferred for component definitions: `const StartupEvaluationForm = () => { ... }`
- Named function declarations also used: `function HomepageHeader() { ... }`

**Variables:**
- camelCase for all variable declarations: `responses`, `redFlags`, `totalScore`, `FeatureList`, `questions`
- UPPERCASE for constants and config data: None strictly enforced, but data arrays use camelCase
- Descriptive names preferred: `totalScore` over `score`, `redFlagDescription` over `desc`

**Types:**
- No TypeScript in use; JSDoc comments minimal
- Props destructured in function parameters: `function Feature({ Svg, title, description }) { ... }`
- State variables clearly named: `const [responses, setResponses] = useState(...)`
- Hook naming follows React conventions: `useEffect()`, `useState()`

## Code Style

**Formatting:**
- Consistent use of double quotes in some files (HomepageFeatures), single quotes in others (StartupSanityForm)
- 2-space indentation used throughout
- Multi-line JSX with proper nesting
- Arrow functions with consistent formatting: `(e) => handleSelectChange(index, parseInt(e.target.value) || 0)`

**Linting:**
- Tool: ESLint with `@docusaurus/eslint-plugin`
- Config: `.eslintrc.js` (flat config) and `.eslintrc` (legacy extends format)
- Key rules: `@docusaurus/no-untranslated-text` warning for untranslated strings
- Docusaurus-specific rules enforced: recommended ruleset via `plugin:@docusaurus/recommended`

## Import Organization

**Order:**
1. React imports: `import React from "react";` or `import React, { useEffect, useState } from 'react';`
2. Third-party library imports: `import clsx from "clsx";`
3. Framework/theme imports: `import Link from "@docusaurus/Link";`, `import Head from '@docusaurus/Head';`
4. Local component imports: `import HomepageFeatures from "@site/src/components/HomepageFeatures";`
5. Style imports: `import styles from "./styles.module.css";`

**Path Aliases:**
- `@site/` - Absolute path to site root: `@site/src/components/HomepageFeatures`
- `@theme-original/` - Original theme components: `@theme-original/DocItem`
- `@docusaurus/` - Framework utilities: `@docusaurus/Link`, `@docusaurus/useDocusaurusContext`

## Error Handling

**Patterns:**
- Minimal error handling in current codebase
- Console logging used for debugging: `console.log('updatedRedFlags', updatedRedFlags, updatedResponses);`
- Filter pattern for cleaning arrays: `.filter(flag => flag !== undefined)` removes null entries
- Nullish coalescing with fallback: `value ?? 0` for undefined/null defaults

## Logging

**Framework:** console (browser console)

**Patterns:**
- Logging used for debugging form state: `console.log('updatedRedFlags', updatedRedFlags, updatedResponses);`
- Logs include descriptive prefix and data: `console.log('responses', responses);`
- Used primarily during development, not production logging framework

## Comments

**When to Comment:**
- Minimal comments in existing code
- Component function declarations are self-documenting via JSDoc-style usage
- Inline comments rare; code structure is preferred to explain intent

**JSDoc/TSDoc:**
- Not actively used
- No formal documentation comments on functions or components

## Function Design

**Size:**
- Larger components acceptable: StartupSanityForm at 200 lines including markup and state logic
- Smaller presentational components preferred: Feature component is 12 lines
- Helper data structures (arrays) defined before components

**Parameters:**
- Destructuring in parameter list: `function Feature({ Svg, title, description })`
- Props passing with spread operator: `<Feature key={idx} {...props} />`
- Event handlers with proper typing: `(e) => handleSelectChange(index, parseInt(e.target.value) || 0)`

**Return Values:**
- JSX returns wrapped in parent div or fragment
- Conditional rendering with ternary and logical AND: `{redFlags.length > 0 && (...)}`
- Array mapping for dynamic content: `.map((props, idx) => (...))`

## Module Design

**Exports:**
- Default exports only: `export default function Home()`, `export default StartupEvaluationForm;`
- No named exports used
- Single responsibility per file (one component per file)

**Barrel Files:**
- Not used; each component in its own file with `index.js` or `index.jsx` naming

## CSS & Styling

**Approach:**
- CSS Modules for component styling: `import styles from "./styles.module.css";`
- Utility classes via Docusaurus/Tailwind: `className={clsx("col col--4", styles.featureSvg)}`
- Inline styles for form layout: `style={{ marginBottom: '20px', padding: '15px', ... }}`
- BEM-like naming not enforced but utilities descriptive: `.features`, `.featureSvg`

**Class Management:**
- `clsx` library used for conditional class application: `clsx("hero hero--primary", styles.heroBanner)`
- Responsive classes via framework: `"col col--4"` for grid layout

---

*Convention analysis: 2026-02-11*
