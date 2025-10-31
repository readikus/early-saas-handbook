---
title: The single, massive PRs
sidebar_position: 2
---

## Junior devs: why is there a phobia on small PRs?

I've worked with a lot of junior developers in the last few years, and I've endlessly pushed for small, frequent PRs, rather than large monster PRs. The reason is I want to be able to make sure everything is progressing correctly and can capture any problems early on so they don't compound.

To try and make the process easy, I will help break down big tasks into small steps on calls with them, and I'll even make all the notes, as note taking is another problem area. I'll spend ages explaining why we approach it this way, and explain the importance of working through small changes that can be shipped to production, and making sure that we build up new functionality in steps that sits alongside the existing flow, without change that until the new flow is complete.
This seems to be a real challenge for junior engineers to follow and work within this approach. I'll either get 5 smaller PRs all at the same time, a massive PR with 1000s of lines, or smaller PRs that break the existing flow as it leads to incomplete functionality.

It's odd, and frustrating. I've spent a lot of time over the years trying to communicate this approach, but really struggle to see it embraced. If I was to diagnose it, feels like the problem is the engineer isn't completely sure how the whole feature will work, so will try to understand it by building it as a whole, rather than trusting that the various pieces will all eventually fit together to form the feature.

Or is it just the lure of cutting code, rather than shipping a PR? Each PR has overhead, so it's a faff. However, this is minamal compared with making inappriopriate software design decisions, that need undoing when the PR reivew

What happens is I'll get a massive PR, where a poor decision was made about the DB schema. There will then be a huge amount of work that compounds the bad schema decision. Building around that decision will create the need for lots of additional code. Then going back to fix the original problem in the DB schema, then going on to refactor all the subsequent code around it - uffff, what a waste of time! If only the small DB schema mistake was fixed in the first place?! It's as if you knew junior developers make mistakes and wanted to guide them away from them, so they have better uses of their time?!

# Solution

Physical violence?! I'm really not too sure of how to fix this problem, as you'd hope a good explainer on why it's needed would help. I can only think the way to solve it is to not give an idea of the overall feature, and just assign small task - i.e. create DB migration file for this. That's not a great, collaborative approach, but neither is spending days on a pile of shit PR that needs to be completely rebuilt so it actually has some resemblence to the original spec.