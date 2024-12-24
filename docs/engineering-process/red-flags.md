## Red Flags

No one is perfect, but some people can be total horrific to work with. Here are a few red flags that I've spotted overtime:

🚩 Fixates on certain technology (positively or negatively). Typically will have an irrational hatred of certain technologies: typically JavaScript, NoSQL databases, SQL databases, in-memory caching, cloud computing, with a weak argument against it.
🚩 They've never made a mistake. I had the misfortune to work with someone insisted he had only been wrong twice in his life. He was a sociopath, and confused "admitting to being wrong" with actually being wrong.
🚩 Describes themselves as "polyglot", or "genius".
🚩 High activity on LinkedIn.
🚩 Repeats the same mistakes.
🚩 Doesn't read error messages.
🚩 Has a grudge against young developers.
🚩 Is strongly against using AI for writing code.

🚩 🚩 🚩 Code Red Flag of the Week: Overuse of Comments 🚩 🚩 🚩

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






Two pieces of code that should fail any dev interview:

This is a JavaScript-specific question, so you'll need to find an example if you're using a different language, but essentially anyone who can spot a simple optimisation of this line doesn't understand how callbacks, which is a pretty common pattern in JavaScript.
```
a.map((obj) => myFunc(obj))
```

```
a.map(myFunc)
````

And:


```
if (condition) {
  var = true
} else {
  var = false
}
```
