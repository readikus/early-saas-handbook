---
title: Deciding what skills you need
sidebar_position: 1
---

# Deciding what skills you need

Before you think about hiring, you need to have a clear idea of what technology you will be using and how your engineers will spend their time. This is important to make sure you know what skills are essential, and what skills can be learnt on the job. For example, React experience would be an essential skill for our front end roles, but we get that TypeScript can be learnt quickly, especially for someone who has worked with typed langauges before.

## "But any smart engineer can learn skills! It's the techniques that matter!"

This is rhetoric I see a lot on LinkedIn, but when you're trying to get an app build, you don't have time to teach someone the basics of React. They need to be able to produce components quickly, and cleanly, and not need coaching through every line of code.

## Tasks

* Make a list of the skills you are going to use.
* Order them like the ingredients in food (i.e. most used first)
* Decide what skills engineers need experience in, and which you're willing to learn.







One of the main things to work out is if they actually understand how the code works, or are they cargo coding.



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
