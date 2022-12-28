# Development process

1. Get story assigned in [the current sprint] (link to jira)
2. Check in with product manager/owner and engineering lead to ensure that you have a clear understanding of requirements. My main job is to make sure everyone has the best possible picture of what each story they work on is hoping to achieve, so don't feel awkward asking for our time.
3. Create branch off `master` for the work based on the Jira story number (i.e. `COMPANYNAME-123`). If working on multiple repos, please try to ensure a consistent branch name across repos.
4. When ready ([this is ready](./definition-of-done.md)), open a PR and get the engineering lead to review.
5. After review, PR is merged to `master` branch, and the latest version of that branch will be deployed to `dev.*.com` for manual QA by product
6. Multiple, small PRs are better than one large one.
