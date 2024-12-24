---
title: Daily Habits for an effective early stage tech startup
sidebar_position: 3
---

# LLMs help all your problems

One of the most powerful ways to use Large Language Models (LLMs) in software development isn’t just for writing code—it’s for brainstorming ideas and working out approaches to solving hard problems. I've had some great chats about how to share state across a next app, cost effective ways to use LLMs on Google Cloud (move off Google Cloud!), microservice messaging, "is [insert technology] the best way of doing x?".

I've also found them an extremely powerful tool for working out strategies for managing challenging situations or people. It works as both a sounding board and a filter - "how do I tell this person to just answer my question, rather than waste 30 minutes of my time with a call in a week's time, in a way that actually gets me the answer?".

A lot of the time the hardest part is knowing how to word the problem you are trying to solve. LLMs rapidly speed this up. Instead of staring at a blank page or overthinking a design decision, you can ask the model for ideas and quickly explore a bunch of possibilities. Sure, they’re not perfect, but they’re great for sparking creativity and getting you started. It's like having a brainstorming partner that’s read a million textbooks and forum threads—they may not have all the answers, but they've seen things! 

If the LLM isn't giving you any fresh ideas, then maybe there are no simple answers, and something else needs to change.


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
