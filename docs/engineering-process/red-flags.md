## Red Flags

We are all different, but if you If you find yourself

Red flags:

* Fixates on certain technology.
* Has an irrational hatred of certain technologies: typically JavaScript, NoSQL databases, SQL databases, in-memory caching, cloud computing.
* High activity on LinkedIn.
* Repeat the same mistakes.
* They've never made a mistake. I had the misfortune to work with someone insisted he had only been wrong twice in his life. He was a sociopath, and confused "admitting to being wrong" with actually being wrong.
 
Doesn't read error messages.




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



#codingredflag #bestpractices #softwareengineering





