# Testing Patterns

**Analysis Date:** 2026-02-11

## Test Framework

**Runner:**
- Not detected - No test framework configured or used

**Assertion Library:**
- Not detected - No test assertion library present

**Run Commands:**
```bash
npm run lint                # Lint all files with ESLint
npm run build               # Build documentation site (includes validation)
npm start                   # Start dev server with hot reload
```

## Test File Organization

**Location:**
- Not applicable - No test files found in project

**Naming:**
- Not applicable - No test files present

**Structure:**
- Not applicable - No test infrastructure established

## Testing Strategy

**Current State:**
- No automated tests implemented
- Testing is manual via local development server: `npm start`
- Build process via `npm run build` serves as validation that code compiles

**Recommended Approach for Future Tests:**

If testing were to be added, consider:
- **Unit tests** for utility functions and state logic using Jest or Vitest
- **Component tests** for React components using React Testing Library
- **Integration tests** for form submission flows (e.g., StartupSanityForm evaluation logic)

## Test Data & Fixtures

**Current Approach:**
- Form data hardcoded in component: `const questions = [...]` in `src/components/StartupSanityForm/index.jsx` (lines 4-86)
- Test data embedded directly in components rather than in separate fixtures

**Data Structure Example:**
```javascript
const questions = [
    {
        id: 'foundersExperience',
        label: 'Do the founders have relevant industry experience or a successful startup history?',
        options: [
            { value: 2, label: 'Yes' },
            { value: 1, label: 'Somewhat', redFlag: true, redFlagDescription: '...' },
            { value: 0, label: 'No', redFlag: true, redFlagDescription: '...' }
        ]
    },
    // ... more questions
];
```

## Coverage

**Requirements:** None enforced

**View Coverage:**
```bash
# No coverage tools configured
# Would need Jest or Vitest with coverage plugin to generate reports
```

## Test Types

**Unit Tests:**
- Not implemented
- Would target: helper functions, state calculations, scoring logic in StartupSanityForm

**Integration Tests:**
- Not implemented
- Would target: form submission flow, state updates, red flag calculation

**E2E Tests:**
- Not used

## Code Paths That Should Be Tested (Priority)

**High Priority:**
- `StartupSanityForm` scoring logic (lines 113-116 in `src/components/StartupSanityForm/index.jsx`)
  - Test: totalScore calculation across different response combinations
  - Test: percentage calculation: `(totalScore / maxScore) * 100`
  - Test: percentage thresholds (75%, 50%) for recommendations

- Red flag detection and filtering (lines 99-105)
  - Test: Filter correctly identifies red flags from responses
  - Test: Red flags with matching question IDs

**Medium Priority:**
- State updates in `handleSelectChange()` (lines 93-107)
  - Test: Responses array correctly updated at specific index
  - Test: Red flags array updated when responses change
  - Test: Callbacks fire with correct data

- Component rendering with various states
  - Test: Form renders all questions
  - Test: Result section appears only when result exists
  - Test: Red flags section appears only when red flags present

## Mocking Needs

**Not Applicable Currently:**
- No external API calls
- No database queries
- No third-party service integrations
- Docusaurus hooks can be mocked if component tests added

**Future Mocking:**
- `useDocusaurusContext()` for page components (e.g., `src/pages/index.js`)
- `useState()` for testing different form states

## Common Testing Patterns for This Codebase

**Form State Testing (Example Pattern for StartupSanityForm):**
```javascript
// Would test state updates:
const [responses, setResponses] = useState(Array(questions.length).fill(undefined));
const [result, setResult] = useState('');
const [redFlags, setRedFlags] = useState([]);

// Test: Selecting option updates responses at correct index
// Test: useEffect calculates score and sets result message
// Test: Red flags filtered from responses correctly
```

**Component Rendering (Example Pattern):**
```javascript
// Would test rendering of:
// 1. Feature component with props: <Feature key={idx} {...props} />
// 2. Conditional rendering: {redFlags.length > 0 && (...)}
// 3. Array mapping: {FeatureList.map((props, idx) => (...))}
```

## Integration with Build Process

**Current Validation:**
- ESLint runs via `npm run lint` - validates code style and Docusaurus-specific rules
- Build process (`npm run build`) validates JSX syntax and module resolution
- No test-specific build step exists

**Suggested CI/CD Integration:**
```bash
# If tests added, typical CI pipeline would be:
npm run lint        # ESLint validation
npm run test        # Unit/integration tests (if implemented)
npm run build       # Build validation
```

## Test Coverage Gaps

**Untested Functionality:**
- `src/components/StartupSanityForm/index.jsx` - Complete form logic (200 lines)
  - State management: responses, result, redFlags
  - Scoring algorithm
  - UI interactions (select changes)
  - Conditional rendering of results section
  - Conditional rendering of red flags section

- `src/components/HomepageFeatures/index.js` - Feature list rendering
  - FeatureList data mapping
  - Feature component rendering with props

- `src/pages/index.js` - Homepage layout
  - Docusaurus context usage
  - Layout component integration
  - Header and features rendering

- `src/theme/DocItem/index.js` - Theme customization
  - Meta tag injection via Head component
  - Image property extraction from frontMatter

**Risk Level:** High for form logic (most complex interactive code)

---

*Testing analysis: 2026-02-11*
