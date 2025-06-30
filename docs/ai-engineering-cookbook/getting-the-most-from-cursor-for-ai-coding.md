---
title: How to Set Up Cursor Rules for a Smarter Coding Workflow
sidebar_position: 3
---

If you're using [Cursor](https://www.cursor.com), you're probably already sold on its AI-first development environment. But one of its most powerful features often flies under the radar: **Cursor Rules**. These rules help guide Cursor's AI in understanding your codebase and enforcing your team's best practices.

Here's how to set up and use Cursor Rules effectively:

## 🧭 Setting Up Rules

1. **Create the Rules Directory**:
   Create a `.cursor/rules/` directory in your project root.

2. **Create Rule Files**:
   Each rule should be in its own `.mdc` file. For example:
   ```
   .cursor/rules/
   ├── 001_workspace.mdc      # Project-wide rules
   ├── 002_typescript.mdc     # TypeScript-specific rules
   └── 003_components.mdc     # Component architecture rules
   ```

3. **Rule File Structure**:
   Each `.mdc` file should follow this format:
   ```markdown
   ---
   description: Brief description of what this rule enforces
   globs: ["src/**/*.{ts,tsx}"]  # Files this rule applies to
   ---

   # Rule Title

   @context {
     "type": "implementation",
     "version": "1.0.0"
   }

   ## Guidelines

   [Your rule guidelines here]
   ```

## 💡 Example Rule

Here's a practical example for enforcing component structure:

```markdown
---
description: Guidelines for React component organization
globs: ["src/components/**/*.tsx"]
---

# React Component Structure

@rules [
  {
    "id": "component_structure",
    "severity": "error",
    "description": "Components must follow the standard layout"
  }
]

## Component Layout

1. Import statements
2. Type definitions
3. Component declaration
4. Export statement

## Implementation

Components should follow this structure:

```typescript
import { ... } from 'react'
import { ... } from './types'

type Props = {
  // Props definition
}

export function ComponentName({ props }: Props) {
  // Component implementation
}
```

## 🔍 Accessing Rules

You can access and edit rules through:
- The Command Palette (`Cmd+Shift+P` / `Ctrl+Shift+P`)
- Menu: `Cursor > Settings > Rules`

Remember: Rules are meant to be collaborative. Commit them to your repository so your entire team can benefit from consistent coding practices.
