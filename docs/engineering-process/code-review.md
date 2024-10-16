---
title: "Code Review: Building an Effective PR (Pull Request) Process"
sidebar_position: 2
---

A solid PR process is crucial for maintaining high-quality code, promoting collaboration, and improving overall development efficiency. Here, we will cover key elements of a successful PR process, including how to write meaningful PRs, what makes a good code review, and guidelines for constructive feedback.


## Short, Meaningful PRs: Keep It Manageable

One of the most important aspects of a good PR is to keep it concise and focused. Short, meaningful PRs are easier to review, reducing cognitive load and making it easier to spot errors or inconsistencies. Here are a few guidelines to follow:

- **Describe the "Why"**: In your PR description, focus on explaining why the change is being made from a product or user point of view, rather than simply describing what has changed in the code. GitHub (or your version control platform) already shows the code changes; your goal is to provide context. This can include the bug you are fixing, the user story you are addressing, or the new feature being implemented.
  
  Example:  
  *"This PR adds functionality to allow users to filter products by price range, improving user experience by making it easier to find products within a budget."*

- **Keep PRs Small**: Avoid large, monolithic PRs that take hours to review. If a PR takes more than an hour to thoroughly review, it’s likely too large. Break it into smaller, focused chunks, making it easier for the reviewer to provide objective feedback. Each PR should ideally focus on one feature, bug fix, or specific task.

  Large PRs often lead to rushed reviews, making it more likely that important details will be missed, and can also make it harder to roll back changes if something goes wrong.

- **Atomic Changes**: Avoid bundling unrelated changes in one PR. Keep each pull request tightly scoped to a specific purpose. This not only makes reviews quicker but also makes it easier to isolate issues later if bugs arise.

- **Include Visuals When Applicable**: If the PR involves changes to the user interface or functionality that can be visually represented, consider including a screen capture or demo to illustrate what the changes do. This can significantly enhance understanding for reviewers and provide context for the changes made. A tool like [Kap](https://getkap.co/) can be useful for capturing and sharing these screen recordings.

- **Conduct a Final Review**: Before submitting your PR for review, give the entire code a final read-through. Check for any debugging statements, commented-out code, or unnecessary print statements that may have been left behind. This not only cleans up the code but also demonstrates professionalism and respect for your reviewers' time.

## The Review Process

The code review process is a collaborative effort that helps ensure code quality, maintainability, and alignment with the overall project goals. A thorough review involves more than just skimming the changes—here’s what a good code review should include:

#### 1. Checkout the Branch Locally
It’s essential to pull the branch and check out the code locally. This allows you to:

- Test the code yourself in the working environment.
- Update any dependencies or configurations needed to run the changes.
- Ensure that everything compiles correctly and works as expected.

#### 2. Test the Code Functionality
The primary purpose of a PR review is to ensure that the code achieves the desired functionality. As a reviewer:

- Test whether the enhancement or bug fix the PR aims to address works as expected.
- Run any tests provided in the PR (unit, integration, or end-to-end tests), or manually test the feature.
- Check if the code introduces new issues or breaks existing functionality elsewhere in the app.

#### 3. Analyze for Potential Impact on Other Areas
Code changes may have unintended side effects. Part of a good review is to think about how the changes might affect other parts of the codebase:

- Does the change interact with critical parts of the system, like authentication or database queries?
- Are there shared components or services that could be affected?

If the PR affects other parts of the system, be sure to test those areas to ensure they still function correctly.

#### 4. Verify Against the “Definition of Done”
Check that the PR meets all the acceptance criteria as defined by your team’s “Definition of Done.” This may include:

- Passing all unit and integration tests.
- Following coding standards and best practices.
- Adding appropriate documentation.
- Meeting performance benchmarks.

Always refer to your team’s documentation or checklist, such as [the definition of done](../product/definition-of-done.md), to ensure that the PR is ready for deployment.

#### 5. Collaboration on Resolving Conversations
When issues or suggestions arise during the review process, it’s important for the team to collaborate on resolving these conversations. Instead of having only the author address all comments, the team should agree on who will resolve specific discussions. This can enhance accountability and ensure that the best solutions are implemented.

- If a comment requires clarification or discussion, encourage open dialogue among team members to reach a consensus on the best approach to take.

#### 6. Stay Objective and Don’t Take Feedback Personally
Code reviews are a collaborative effort to improve the project, not a critique of the person writing the code. It’s important for both reviewers and authors to remain professional and objective:

- Reviewers should focus on the code, not the individual. Avoid phrasing feedback in a way that could be taken personally, and keep it constructive.

  Example:  
  **❌** *"This is a terrible way to handle this."*  
  **✅** *"I think this approach might be brittle; have you considered using X method instead?"*

- Authors should remember that feedback is intended to help improve the code, not to criticize them. Stay open to suggestions and recognize that PR reviews are a key part of team collaboration.

## Giving and Receiving Feedback

A healthy PR process relies on constructive feedback. Here’s how to make sure nitpicks and general feedback are helpful and well-received:

#### Use "Nit:" for Minor Suggestions

When reviewing code, if you notice minor improvements like better variable names, formatting adjustments, or small optimizations, prefix your comments with "Nit:". This indicates that the feedback is a minor suggestion rather than a mandatory change, signaling that the comment doesn’t block the PR.

Example:  
*Nit: Consider renaming `foo` to `findAvailableFlights` to make the purpose of the function clearer.*

#### Be Clear and Provide Examples

When making suggestions, always explain your reasoning and provide examples where possible. This helps the author understand your perspective and see how to implement the change.

Example:  
*I’d suggest renaming the method to better reflect its purpose. For example, instead of `calculate`, you could use `calculateShippingCost`.*

#### Don’t Block PRs for Minor Issues

If all your feedback consists of nitpicks or minor improvements, approve the PR and note the optional changes. Don’t block the process over small, non-essential issues.

Example:  
*"LGTM, just a few optional suggestions. No need to block on them!"*

---

## Avoid Overly Technical Language (When Necessary)

While the audience for a PR review is technical, it’s still important to strike a balance in your communication. Be clear and concise, and avoid jargon that might confuse or alienate junior developers or team members unfamiliar with certain concepts. If you’re explaining something complex, ensure that it’s understandable to all contributors reviewing the code.
