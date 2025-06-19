---
title: The Mindset Shift for AI Coding
sidebar_position: 2
---

Like a lot of engineers in the early 2010s, I got pretty good at solving UI problems with jQuery. It was messy, but I understood the patterns and could get things done. Then React and Angular started making noise. I picked up a side project to try them out — and I hated it. Even simple things felt hard. I remember thinking: *“Get off your high horse, stop forcing this to work like jQuery, and actually learn how it’s meant to be used.”*

That mindset shift changed everything. And it's the same shift I’ve made with AI coding — and honestly, I love it.

There's a lot of noise on LinkedIn lately: “AI doesn’t work for programming!” What most of these people mean is: they’ve never learned how to design solutions, build architecture, or iterate cleanly in the first place. There's also a strong correlation between these posts and the green “#OpenToWork” banner — but that’s enough salt for now.

You *can* build major, production-grade functionality using AI — *if* you treat it like a real engineering tool, not a party trick.

## A Model Workflow

_This assumes your tooling is set up to give AI the right context for your codebase and product — covered in other sections._

### 🧭 Step 1: Explore Solutions

Use AI (Cursor, ChatGPT, etc.) to explore *approaches*, not just snippets. Start with a clear problem or user story — avoid assuming the solution before you ask. As the saying goes: if all you've got is a hammer, everything looks like a nail. Ask smart questions:

- “What are the main concerns I need to separate?”
- “What are some clean patterns for this?”
- "What security concerns should I consider?"
- “What are common edge cases?”
- "Are there any open-source components that would help?"

You’re not trying to generate production code yet — you’re working like a staff engineer: identifying trade-offs and direction.

---

### ⚙️ Step 2: Prototype in AI Until It Works

Build your first version in collaboration with the AI. This is your iteration loop. Crucially **don’t start editing the code manually yet.**

Let AI handle the evolution of the solution — it builds up internal context that carries forward across changes. If something’s off, prompt it to fix or rethink it.

> **💡 Tip:** If you start tweaking things manually too early, you’ll break the flow. Let AI do the heavy lifting during this phase — you're pair programming, not firefighting.

Now — not everything fits neatly in this loop. Sometimes the problem is too niche or too specific. For example, I recently needed a complex component where there wasn’t a good open-source React solution. I had to dig into random public GitHub repos, stitch ideas together, and write a custom component. I broke this out into a separate workflow, got it working manually (with AI help where possible), and *then* brought it back into the original flow. I still saved time — just not through end-to-end prompting. This is where experience, tooling, and judgment matter. In short: use AI where it fits, step out when needed, then pull it all together.

Keep iteration until you have a solution that works. **🚨 When it works, commit a version! Save that working state like it’s gold.**

---

### 🧽 Step 3: Polish With AI

Once you have a working solution, use the AI tooling to refactor your code to move it towards production-quality code. This is where you will:

- Separate concerns
- Rename functions and variables for clarity
- Conform to your team’s patterns (or cult-like standards)
- Add unit/integration tests
- Improve error handling

You can still prompt for changes here — but with a higher level of precision. This is where you begin shifting back into the driver’s seat.

---

### 🙋‍♂️ Step 4: Make It Yours

This is your code now. You’re putting it in a PR. You’re responsible for every line of it. If it breaks in prod, you broke prod, not the AI. This where you will ensure all of the artifacts created in the "polish" phase are up to your team's standards.

Once you are happy that your code is ready for review, have a before sharing with the team, run [**GitHub Copilot’s PR review**](./ai-driven-code-review.md) as a first-pass safety net. Its value is in catching obvious bugs, inconsistencies, and helps spot corners you might’ve cut — especially useful for solo sprints or rapid shipping.

Copilot can be configured to run reviews automatically on every PR. Adding a `.github/copilot-instructions.md` file to your repo lets you customize its focus—security, readability, coding standards, and more. It's not perfect, but will ultimately save the team a lot of time.

---

## 🎯 Final Words

AI is not a crutch. It’s not a shortcut. It’s a force multiplier — when used with intention, clarity, and ownership. Learn to prompt. Learn to adapt. Learn to refine. Then take full responsibility for what you ship. You’re the engineer. AI is just your (slightly weird, disturbingly fast) assistant.
