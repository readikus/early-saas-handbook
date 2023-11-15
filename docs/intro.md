---
title: Introduction
sidebar_position: 1
---

# Introduction

You've been working in software engineering for a while, maybe managed people for a few years, but suddenly you're in at an early stage start up, and you're thinking what to do! This is the handbook I wished I had when I started my role 6 months ago.

# The Golden Rules

*It's all about the users* - does your product solve an unmet need? If not, no one will care. "But we have better UX" is not going to persuade anyone to move platforms. People only care about a B2B SaaS if it clearly makes their life easier or richer. Focus on one core feature, find users willing to use the SaaS and give their honest insights, and keep working until the point they'll be upset if the SaaS was taken away.

*So what?* Understand your competitors and be able to give a valid reason why someone should use your app, rather than each of the competitor’s products. Examples of unconvincing reasons are “It’s just better to use”, “we have better navigation“ and “it’s faster”. If you are very lucky, you will be able to say “because no one else does anything remotely like this!”.

*Get the early adopters and listen to them.* Don’t worry about getting paid, you need people who will use your product every day to do their work, and give meaningful feedback. The blunter, the better. What you lose in subscription, you save in hiring a product owner.

*Rapid prototype* - use a low-code platform like Retool to mock up your app, rather going all in with building a custom React UI. Sure, it'll look a bit rubbish, but you can prototype a feature in a fraction of the time.

*Prioritise* - don’t spend hours making the fonts and colours consistent, if your data is pointless. Deckchairs + Titanic come to mind. What is the one thing that can be built that will wow customers, and be done relatively quickly? The RICE framework provides a good basis for evaluating features and determining the order to take them on. This feeds into the backlog.

*Backlog* = what to work on next. When an engineer completes a piece of work, they should be able to go to the backlog and pick the next piece from the top. If this concept is hard to implement, you likely have the wrong person making the decisions on priorities. Sorry.

*Descope aggressively* - a big mistake of first time founders is promising to solve all the problems for everyone in your space. The more that is taken out will make the remaining work stronger.

*We just need to focus on building this feature...* - this is the vibe I've found myself in most weeks for the last 2 years, and it's just not true. You need a clear product vision of a compelling product demo that people makes people throw cash at you.

# The Silver Rules

*Act on valid user feedback*. If a user says they would like to see a feature, which is actually in the app, then it is not being surfaced effectively. Try to find out how they would expect to achieve that functionality, and see if the interface can be reworked to make it more obvious. Similarly, learn to not jump on every single user request, and prioritise into the road map based on what works for the majority, not just that one use case. Focusing too much on a single user can be detrimental.

*Clearly define responsibilities*. Clearly define all the different tasks and decisions that are needed. Having a clear set of boundaries means that everyone knows what is expected from them, and things can’t fall through the cracks. In small teams, where people take on a cross functionality role, there is a big risk of the bystander effect/diffusion of responsibility. In early stage startups the most common issue around this is taking responsibility for the product manager role. Product is easy to blag, but very hard to do properly. When the job is not being done to the level it deserves, others (typically engineers or designers) will step up into this role. Whilst this is good, if a co founder is under the delusion they are doing product, and claim credit for it, think about how that might be received by the people who are actually doing the job.

*What do the founders bring to the table?* Are they able to answer most product questions? Are they detail orientated? Pick your start up carefully. Don’t just go with people that have some relevant experience to bring to the table. Do they really understand the job that the SaaS is helping to achieve? Do they really understand software, or will they say stuff like “can we get people to send in a signed form?” Have they genuinely validated

*Get the pacing right.* Every week can’t be a rush. Whilst finding product market fit and meeting investment goals requires a sense of urgency, if every week is a rush to get a new feature ready for a demo/client/whim, urgency soon loses its meaning. If a senior person is constantly insisting on unrealistic deadlines and unwilling to compromise, they’re not the sort of people I can work with. Be clear when there is a deadline, a chance to wow a big potential new client, but not every week. Every new feature won’t be essential for winning clients.

*Bad seeds are more impactful than you can imagine.* You add a new person to a team that has been flat out for months, and all they do is pick holes in stuff that hasn’t been done, with an attitude of “why isn’t this done?! What on earth have you been doing all this time?!” - the people who’ve worked flat out will be really annoyed. Especially if the founders have no EQ, and are like “Yes! Why hasn’t this been done?!”.

*Sales is hard* - get people who have a quantifiable track record in SaaS sales, rather than people who'd _life_ to do it. If you have long sales cycles, what that really means is that customers aren’t seeing the need. Either it is being sold poorly, you have a mismatch with your audience, or there really is no audience.

*Work out how you clearly communicate new features* - this is beneficial to the whole company, as well as external customers.

*Use frameworks if you’re not genuinely experienced.* RICE, Scrum etc. are easily critiqued, but provide a pretty good idea of how to approach a problem when you don’t have much experience in that area.

*You’re probably not a product a manager.* You may think you know the product, but given that good product managers can command 6 figure salaries suggests it’s not a job anyone can just do. Anyone can pick up a paintbrush.

*Praise in public, negative feedback directly in private.* Do not “sandwich” negative/positive feedback, as people can tend to focus on the positives. Wait to give feedback until you have had a chance to reflect on it. Focus on desired outcomes that you want to see, rather than venting.

*Don’t expect employees to care as much about the company as cofounders.* And that’s absolutely fine. If you need this level of commitment, give the employees meaningful equity. Replacing talented people with detailed knowledge is extremely hard and expensive. The main reason people leave jobs is down to people rather than pay.

*Have meaningful meetings* - split micro/macro details, otherwise the descend into bike shedding. If it’s a high level planning meeting, don’t bikeshed a small detail. The two don’t work together well. If meetings go off on tangents, it’s likely that you haven’t created a time and place to discuss that particular area. Make sure you have regular meetings. Define cadence of meetings, and booked them in. Meetings should never overrun. Ever! Otherwise people ramble and are unfocused.

*Most problems can be solved with process* _(unless the individual is just out of their depth)_. Someone keeps pushing to dodgy code to `main`? Where is your code review process? Someone keeps pinging `@everyone` on Slack? There probably isn't a suitable time and place to talk over the topics they're raising.

*Be sociable* - if people aren’t sharing anything about their life outside work, that implies that they don’t feel comfortable doing so. This can't be forced, but I don't want to work in a cult, but it helps.

*Understand what motivates each team member.* Strangely, I don't think this ever involves asking “is it done yet?!” each day. Trying to align ambitions and with pieces of work is hard, but when someone is really into something, productivity is great.

*Respect your team's time* - communication needs to be considerate of people and their time. 

*Be pragmatic about automated testing* - certain functionality is just quicker to build with TDD, but a lot of the time adding meaningful test coverage takes a lot of time. You don't have time and you most likely don't know if that feature is really going to be that useful, so you time doesn't allow for full coverage. This isn't FAANGS - you've only got a small budget to find product/market fit, so focus on delivery rather than perfection. Of course, if you're doing something that relies on accuracy, completely ignore this!

Assure users that you're app is going to break* - it's an alpha, you have no time, the sooner you make. 

*Don’t be a dick.*

*Prioritise!* - adding this again, as it's so important.

*Selectively ignore all of these rules, except the ones on * - what do I know?

- Does your SaaS demonstrate instant value, or does it require hours of use b? No - rethink it unit


- *Useful is better than perfect* - if you have 3 incomplete features that you've not finished, but you decide to start a 4th, you may as well have given the engineers free holiday for the time they put into the unreleased features.

- *There is never enough time.* One of the most important factors for success of an early stage startup is prioritisation. You are in a race against time to find product/market fit, so what we are working on needs to make the most use of our valuable time. This influences a lot of technical decisions and you approach work. Balancing this, with product quality, features and UX is something we should remind ourselves of every day.



- Don't excuse negative behaviour - just because someone is highly productive, don't let them get away with behaving out of line. This creates a culture.

- 
-
-
-
- let people 
 at ALL TIMES. I have learnt this the hard way, but this is one of the most important basics. Losing your temper only makes _you_ look bad, and creates bad tension in the team. If you have an under performer, deal with them in a clear, structured, professional way. Besides, if they got through the tech interview round and are under performing, explore what is happening. It's a lot easier to not say something than it is to unsay it.

- Clearly define responsibilities. If not, as an engineering leader, you'll be doing product and project management, infrastructure, testing, support, dealing with customers and sales. That's what developers do, right?! They might, but the more responsibilities you take on, the lower the quality of your output becomes.

- Make actions or notes. Don't have a conversation about work without any outcomes.

- Ask when you are not sure how something works in the app.

- Time box meetings and keep focused Don't randomly cover lots of subjects in meetings.

* Ask when you are not sure how something works in the app or howx§should work in the .

Launch now
Build something people want
Do things that don't scale
Startups can only solve one problem well at any given time
Be nice! Or at least don’t be a jerk
Get sleep and exercise - take care of yourself

- Speak up when you are not sure.

- Don't settle for an ok product manager.

- Everyone needs to understand and emphasise with the users.

As a developer, the important factors of success at an early stage start up are:

- Strikes a balance between innovation, technical excellence and delivery.

- A willingness to do the boring stuff.
- Able to capture requirements comprehensively and ensure user stories fulfill all of them.
- A [learn-it-all](https://cloudblogs.microsoft.com/industry-blog/en-gb/cross-industry/2019/10/01/introduce-learn-it-all-culture/) outlook and be open to other people's ideas.
- Engaged in what we are delivering and care about delivering quality work for our audience.
- Not needing to be reminded of the same issues every PR.
- Reduces technical debt when possible as part of developing new features.
- Closely follows your [coding standards](./engineering-process/coding-standards).
- Throughly read and pre-review your code before requesting a review. Remove any commented out code, unnecessary new lines, and check comments are added for edge cases.
- Discusses large technical changes with the team before implmenting them.
- Test-driven mindset.
- Contributes to the culture and education of the tech team.


## Artefact

* A product roadmap that's as long as your runway
* A clear backlog that goes beyond 4 weeks
* A product demo outline

## Recommended Videos

- [I'm Not The Best Programmer](https://youtu.be/dHN_tlBEt2c)
