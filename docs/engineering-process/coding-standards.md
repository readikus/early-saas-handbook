# Coding Standards

## Documentation

- Update documentation in this repo
- [Single source of documentation](./single-source-of-docs.md).

## CSS

- order attributes alphabetically.

## JavaScript:

- Strong knowledge of the core langauge: [ES2020](https://www.freecodecamp.org/news/javascript-new-features-es2020/) (please add to this...)
- `async`/`awaits` + `try`/`catch` over `.then()` for readability.
- Use implicit return where possible.

```
const func = () => {
  return (<div>explicit return</div>);
}
```

to:

`const func = () => (<div>implicit return</div>);`

- [Template literals (Template strings)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals).
- Relinquish code formatting to Prettier.
- Readability in code vs. being clever.
- Organised imports (public npm packages, private npm packages, local files - blank line between sections).
- Leaning towards functional programming.
- Always destructure props.
- Don't hard code `true` into a conditional statement or as the initial condition of a switch statement.
- Clean down `.next` and `node_modules` regularly!
- User `yarn` instead of `npm`, as that's common across the infra.

## TypeScript:

- [TypeScript Course for Beginners 2021 - Learn TypeScript from Scratch!](https://www.youtube.com/watch?v=BwuLxPH8IDs) - I really connect with Maximilian's content and courses.
  = [Donovan's TS course notes](http://hop.ie/blog/learning-typescript/)
- Embrace it...opportunity to become an expert and educate the rest of the team on advanced aspects of the language.
- Define types in `index.d.ts`
- Avoid `any` at all costs! When prototyping, this speeds up development, but do not expect me to merge PRs like this :)

## React:

- Clear understanding of the component lifecycle
- Use state correctly
- Split down to smaller, reusable components.
- Use styled components
- Replace tailwind with styledcomponents when doing PRs on related code.
- Store literal strings in `constants` files.
- Use redux for data shared across the app (i.e. data point config)
- Minimize use of && operators - a sign a component is being overused, rather than split down into different components.
- Small line length
- Minimise props drilling
- Do not put any display text in the react component. Make use of `constants` design pattern. This is so when we need to i18n the app, we have a starter. LINK TO EXAMPLE

## Redux

- Understand and embrace the [Redux Toolkit](https://redux-toolkit.js.org/)
- `redux/slices/<slice-name>.ts` - `slice-name` maps to the attribute keys in the store. i.e. `redux/slices/sites.ts` -> `store.sites`.
- follow the [`byId` design pattern](https://redux.js.org/usage/structuring-reducers/normalizing-state-shape)

# Security

- Do not log sensitive data - generally try to minimize what is logged.
- Follow the [OWASP Top Ten](https://owasp.org/www-project-top-ten/) at all times.
- Always patching, always looking for vulnerabilities
- Investigate synk costs

# Testing

- We can never have too many tests.
- add test fixtures to `tests/fixtures` where possible.
- aiming for 100% coverage on `key-esg-api`

# API

- Aspire to 100% test coverage for back end.

# Documentation & Comments

- Comments are really useful for edge cases and non-obvious functionality.
- In the following example from a component called `EditableTableInput`, I like to think developers are intelligent enough to be able to understand what the function does without the comment:

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
