# The World's Simplest Product Development Process

1. Define top level features for MVP. Evaluate + rank using the RICE framework.
2. Create a series of user stories that describe the intended functionality of these features and what they achieve for the users. Ensure the underlying code is in place to faciliate these - for example, in a car, aircon is not just a button.
3. TO BE COMPLETED
4. Get story assigned in [the current sprint] (link to jira)
5. Check in with product manager/owner and engineering lead to ensure that you have a clear understanding of requirements. My main job is to make sure everyone has the best possible picture of what each story they work on is hoping to achieve, so don't feel awkward asking for our time.
6. Create branch off `master` for the work based on the Jira story number (i.e. `COMPANYNAME-123`). If working on multiple repos, please try to ensure a consistent branch name across repos.
7. When ready ([this is ready](./definition-of-done.md)), open a PR and get the engineering lead to review.
8. After review, PR is merged to `master` branch, and the latest version of that branch will be deployed to `dev.*.com` for manual QA by product
9. Multiple, small PRs are better than one large one.
