---
title: Red Flags
sidebar_position: 5
---

No one is perfect, but some people can be total horrific to work with. Here are a few red flags that I've spotted overtime:

🚩 Irrational hatred of AI for engineering. Defensive projection - avoid these people at all costs!

🚩 Describes themselves as "polyglot", or "genius". Avoid at all costs, yet to see an exception to this rule!

🚩 Fixates on certain technology (positively or negatively). Typically will have an irrational hatred of certain technologies: typically JavaScript, NoSQL databases, SQL databases, in-memory caching, cloud computing, with a weak argument against it.

🚩 They've never made a mistake. I had the misfortune to work with someone insisted he had only been wrong twice in his life. He was a sociopath, and confused "admitting to being wrong" with actually being wrong.

🚩 High activity on LinkedIn.

🚩 Repeats the same mistakes.

🚩 Doesn't read error messages during a coding interview.

🚩 Has a grudge against young developers.

🚩 Lodash instead of ES6+

🚩 🚩 🚩 Code Red Flag: Overuse of Comments 🚩 🚩 🚩

Comments explaining obvious parts of the code can indicate that the original developer might not fully understand the language, library, or framework. These are standard coding patterns that anyone familiar with React components in TypeScript would already know, so explaining them just adds unnecessary clutter. It's like watching a cooking show where every episode spends 15 minutes explaining how to use a garlic press—completely redundant.

```javascript

import React from 'react';
import classNames from 'classnames';

// Define the prop types for the component
interface Props {
  value: number;
  change: number;
  desireDirection: 'up' | 'down'; // We use string literals here
}

// TrendIndicator Component
const TrendIndicator = ({ value, change, desireDirection }: Props) => {

```

This particular example is from a ChatGPT-generated refactor I'm working on, but I've encountered it in real-world code before.

🚩 🚩 🚩 Code Red Flag: Explict Boolean Returns 🚩 🚩 🚩

Additionally, the following code snippet also indicates a misunderstanding of basic control structures:

```
if (condition) {
  var = true
} else {
  var = false
}
```

🚩 🚩 🚩 Code Red Flag: Misunderstanding Callbacks 🚩 🚩 🚩

A common red flag in interviews is when a candidate cannot clearly explain what a callback is, how it works, or when to use one. This is especially important in JavaScript and other languages that use higher-order functions.

For example, if a candidate struggles to:

- Describe what a callback function is and why it's useful.
- Demonstrate how to pass a function as an argument to another function.
- Explain the difference between invoking a function and passing a function reference.
- Recognize when a callback is needed for asynchronous operations (like in event handlers, timers, or API calls).

These gaps indicate a lack of understanding of a fundamental programming concept.

