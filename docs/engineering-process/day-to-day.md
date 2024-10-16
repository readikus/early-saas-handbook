---
title: Daily Habits for an effective early stage tech startup
sidebar_position: 3
---

# Short, meaningful PRs

* Describe the "why" - what is the new functionality from a product/user point of view, not the code change (GitHub shows the code change).
* Short, meaningful PRs. If a PR takes more than an hour to read, it is going to be a challenge to objectively review it in the detail it deserves.

# Documentation & Comments

* Agree a single source of documentation, that is independent of a particular git repo.
* Comments are really useful for edge cases and non-obvious functionality.
* The Facebook model
* In the following example from the `Table` component, I like to think developers are intelligent enough to be able to understand what the function does without the comment:

```javascript
/**
 * addNewRow
 *
 * Add another row below
 */
const addNewRow = () => {
  if (columns) {
    append(defaultObject);
  }
};
```

# Simple tooling to reduce faffage

In the early stages, it's more important to have a functioning demo, than it is to have it running in an elastic, fault tolerant environment. You are trying to demonstrate the benefit of the product and the time should be heavily invested into tangible functionality that an end user cares about. One of the biggest ways to derail a project is to invest time in complex tooling.
