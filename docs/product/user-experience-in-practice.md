---
title: User Experience in practice for softare engineers
sidebar_position: 2
---

If you're getting the same question from multiple users, it's a clear sign that your UX needs improvement. In an ideal world, we'd have a dedicated product designer to think through the experience and work with users to iron out any pain points or confusion. But in an early-stage startup, when you're driving the product, you often have to take on many different roles. And this is what excites me!

Listening to our users' questions and making changes to our UX to address them is one of the most rewarding parts of the job. I don't gain much energy from a support role, so it's in my best interest to refine the user experience to the point where users don't need to reach out for help—let's be honest, no one wants that!

One part of our app automates adding links to pages, but it faces several challenges. For the MVP, if an issue arises, we displayed an error message saying we can't complete the action and provide the HTML for the link so the user can add it manually.

However, users often think there's a problem with their site and reach out for help. There are several reasons this happens, such as existing links to the page, anchor text in HTML attributes, or invalid HTML syntax.

Yesterday, we released a code change that displays the reason for the error. The npm package for HTML validation provides these reasons, but I didn't have time to display these, so I created a user story for next week to enhance this feature.

Today's inbox: "Why is this HTML invalid?" Looks like I'll be finding time for that story this morning :)
