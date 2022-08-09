# Documentation & Comments

- Comments are really useful for edge cases and non-obvious functionality.
- The Facebook model
- In the following example from the `Table` component, I like to think developers are intelligent enough to be able to understand what the function does without the comment:

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
