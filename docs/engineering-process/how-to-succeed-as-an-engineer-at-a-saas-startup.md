# How to succeed as an engineer at a SaaS startup

This started out as a few bullet points in 2022 that I was trying to put together as part of a study plan to attach to a junior developer role that I was hiring for. In 2022, there had been a giant leap in software engineering salaries (I've always been supportive of this), yet, with a limited hiring budget, I had to think about taking on a junior developer and how we could create a path for them to become a very capable senior in a short amount of time. I envisaged a "wax on, wax off" set of lessons that would distill years of hard experience and wisdom. 

## Personal Traits

One of the most important factors for success of a seed stage startup is prioritisation. You are in a race against time to find product/market fit, so what we are working on needs to make the most use of our valuable time. This influences a lot of our technical decisions and how we approach work. Balancing this, with product quality, features and UX is something we should remind ourselves of every day.

As a developer, the important factors of success at an early stage start up are:

* Delivers working software, that solves a real user problem, within a deadlines.
* Engaged in what we are delivering and care about delivering quality work for our audience.
* Strikes a pragmatic balance between innovation, technical excellence and delivery.
* Values user experience above technology stack.
* Able to capture and refine the full requirements, ensuring that the user is able to fulfill all of them.
* Can Google "how to ....".
* Understands the underlying reason why they made mistakes, and endevours not to do them again.
* Will choose to use and extend existing tooling, rather than writing their own.  
* Uses easy-to-understand variable and function naming conventions.
* Understands the overall fundamentals of computer science, such as algorthm complexity, database design.
* A solid general knowledge of the essential topics, such as big O time, data structures, core algorithms and infrastructure.
* Always looking for opportunities to learn new things and understand how others solve these problems.
* Avoids overfactoring for edge cases that won't happen for years.




- Needed a day off for training...






UX/UI!! SPACING!!!!








# Coding Confidence

Most of these traits fall under the [learn-it-all](https://cloudblogs.microsoft.com/industry-blog/en-gb/cross-industry/2019/10/01/introduce-learn-it-all-culture/) outlook, that Microsoft have emphasised.

* Interesting in how people have solved similar problems, rather than just trying to figure it out themselves.
* Owns their mistakes, and doesn't just go quiet.
* Willing to ask when you are not sure how something works in the app.
* Not needing to be reminded of the same issues every PR.
* Reduces technical debt when possible as part of developing new features.
* Closely follows the team's [coding standards](./coding-standards).
* Throughly read and pre-review your code before requesting a review. Remove any commented out code, unnecessary new lines, and check comments are added for edge cases.
* Discusses large technical changes with the team before implmenting them.
* Test-driven mindset.
* Contributes to the culture and education of the tech team.

## Habits to Learn

* Read the user story, and deliver the ALL bullet points, not half of them.
* Takes ownership of a problem and delivers a complete solution for the problem: https://javachallengers.com/cracking-the-ownership-concept-as-a-software-engineer/
* Considerate of the impact your code has on others that use it. If you change a core library that the rest of the team uses, either make it backwardly compatible or work with the team on a migration path for breaking changes.
* The Boy Scount Principle of improving legacy code and leaving it better than when you found it.

### Basics of Professionalism in 2024

This can't be overstate enough: in order to be considered "senior" or "advanced", you need to master the fundamentals of your job. Your managers are going to establish trust by seeing how you deliver relatively simple user stories, and then gradually increase the complexity of work as you progress. If you struggle to deliver simple, bug-free functionality with a great user experience, they are unlikely to trust you with the challenging work.

Being an expert typically involves a bit of attention to detail.

Below is a list of issues I've spotted at the code review stage that are red flags about the contributor's attention to detail on the task in hand:

* **Respecting the economics**. Understanding and respecting the source of their salary is crucial for a software engineer. Their work involves translating knowledge and skills into revenue-generating software, demonstrating professionalism by recognizing the value they contribute to the company's product. In big tech firms, established market positions ensure continuous revenue flow. Conversely, early-stage startups focus on achieving product-market fit, often operating pre-revenue. The primary goal is to develop a product enticing enough for 10-20 initial users to pay for its use. Successful persuasion of this initial user base is pivotal, potentially attracting more users before funding or resources are exhausted.

In early-stage startups, there's little room for solo exploration or prolonged periods of independent work on new technologies; being adaptable and focused on the core objective is crucial. Innovative use of new technology is not ruled out, but a pragmatic approach has to be taken to 

Strong engineers naturally enjoy using new technologies, and will typically build proof-of-concept demos to show if a solution is viable. This tends to just happen during their work time, and the set the work will still get delivered.

* **Respect deadlines**. Early stage startups have very limited budgets and are in a rush to get to market with a new product before someone else. This is not the place for coasting and getting to play with some technology that interests you, this is a place where delivery matters. There will be numerous times where hitting a deadline is not only required, but it's essential to the survival of the company.

* **Switch off social notifications**. Focus and concentration are essential for anyone wanting to be a productive, high performing team member. Software engineering is one of the most financially rewarding careers in the world, and you're not getting paid to send memes to your mates.

* **Delivering all the requirements** of a user story. That's right, someone has made a list of 3 bullet points in the user story, and they actually want all 3 of them! They'd absolutely love it if you can read through that list, and make sure you've done them all, rather than having to remind you at the code review stage. If the requirements are unclear or there is some issues involved in achieving that, discuss these rather than submit code for review that ignores them.






LinkedIn needs a "Community Notes" feature similar to X/Twitter.

Given LinkedIn's role as a platform for career advice, we encounter varying degrees of quality in the advice shared here. Unfortunately, some of it is unhelpful and can even be career-limiting. An anonymous flagging system for identifying and warning against bad advice could be incredibly beneficial.



Are we here to genuinely help others, or just to get clicks?! Like & subscribe ;)







### Take Notes

I consider this a super power. Early stage start ups seldom have an dedicated product manager who will capture the nuanced details of each user story, so you either need to have a photographic memory with total recall, or you need to take notes during discussions. Most piece of work start with an initial discussion of all the requirements, and you'll just be getting used to what the app is, what it does, where it gets data from etc. You are unlikely to be following the specific requirements of the new piece of work, and there is likely to be nuanced technical detail of how to approach the work and any special requirements for design patterns to follow. You'll build something that you think is useful, you'll demo it, then get another set of "new" requirements. Except they're not new, they're everything described in the first call, you just didn't make notes. This really is one of the biggest things I wish all engineers did. If you need all details written down for you, early stage start ups are not for you.

### Experiments with new technology


# Technical

* **Run your code**. Shouldn't have to write this, yet, experience suggests this is worth noting. If you ever find yourself in this situation, you need to politely ask yourself what sequence of strange events caused this to happen. If you're making a change to a piece of functionality, and only running it via a unit test or in Storybook, this isn't a real world test. 

* **Understand edge cases**. What if a user DOESN'T puts a space in a postcode?

# Delivery

* **Understand priorities**. Competent line managers should be clearly communicating the order of priorities for tasks. You may disagree with these, and should certainly raise concerns in a professional manner (i.e. you know something is needed for a sales demo tomorrow), but ultimately, it is their call. If a piece of work is timeboxed, don't continue to work on it just because you're enjoying it.

* **Seek priority calls**. If your line manager is expecting you to be working on a particular bit of work, but someone else has asked you to do something, involve your line manager in making a priority call. As a general rule, the focus should be on functionality that has the widest reach, rather than some special cases for a certain client. They may be a big client, but with SaaS, focus on the many, not the few.

* **Manage expectations**. Your line managers are responsble for communicating clear priorities, deadlines and assigning work that fits your skill set. As part of this arrangement, they will be expecting you to feedback to them when you don't think a piece of work is likely to get completed in the sprint. They may choose split the user story up, descope some requirements, or pair program with you. An effective senior won't be used to people asking "just checking in on where we are with this?", not because they always  because they either manage expectations or they just get the work done and communicate this.

* **Demo well**. I've worked with some developers that really stand out at being able to "sell" the value of the work they have been doing. This involves being able to explain "why" they have been doing a particular piece of work, talking about the challenges they faced, and demonstrating the ultimate value that the piece of work brings to the app.


Furthermore, an engineer that gets things working is great, but if they don't communicate this




Presents well.


* **Not acting upon feedback**. A senior engineer has seen how you have approached a problem, explained a future issue (i.e. this won't scale, you haven't separated your concerns, or whatever reason. They will see this resistence, and then try to explain why it is good practice to take a certain approach. You then push back again, or say "Yeah, I know that...". This pollutes the codebase with rubbish code, and other engineers will forever be having to work around the problems you've either created, or not solved. Everyone else manages to provide their data in a consistent format, except you.

* **Follow clear technical requirements**. You're able to appreciate that if the user story asks for a field called `url`, the data your code creates has a field called `url`, and not `landing_page`, 'page_address`, `page` or any other random name used for a page, and is consistent with the naming used across the other 1000s tables in the data warehouse. 

Consistency - you don't have 100s of different field names that  multiple field name

Sometimes, you've simply done something wrong.


### Technical Excellence




* **Code Orientation** - the ability to identify and learn design patterns from an existing codebase. An important skill when working with a new codebase is being able to find an example of code that achieves a desired goal (i.e. building a serverless API end point in a NextJs app), and mimicking this approach. There is a lot of overlap with this and being familiar with design patterns.

* **Familiar with common design patterns**. Design patterns allow engineers to solve problem in a proven, consistent,
 decoupled way that other engineers will be able to quickly orientate to. A hacker will just tap away at the keyboard until they have something that gives them the result they are looking for. New engineers will struggle to follow what is going on, and the original developer
 
* **Aware and use commonly accepted platforms**. Text indexing.


"The Diva problem personality is commonly found among long-time developers who were deeply involved in the companies early success"


Design patterns are part of the core toolkit of a software architecture. Consider a NextJs app, these typically consist of pages, API end points, actions. Each language, library or framework will tend to have their prefered patterns, that help an engineer to be more productive by solving problems is a consistent way. I good engineer I worked with before said "don't find the framework", when we had a number of team member who were trying to use a (new to them) framework in a way that they'd used another framework, and it just wasn't the same thing. I remember when I moved from jQuery to Angular/React, and I was still trying to "query" DOM elements, rather than thinking more in compontent.




How do you structure Where do



Software engineers rely on design patterns as foundational templates to address recurring design challenges in software development. These patterns encapsulate best practices and proven solutions, offering a structured approach to solving common problems. By leveraging design patterns, engineers create reusability code and new engineers will be able to quickly orientate to the codebase if everything is in the right place. 


Additionally, design patterns contribute to the scalability of software systems by providing flexible and adaptable architectures that can accommodate future growth and change. 


Learning design patterns is pretty boring and can a little abstract,

 are seldom mentioned on job ads, so they're 


 is high on the list of topics that junior engineers
A common trait


They promote maintainability by establishing clear and well-defined structures, making it easier for engineers to understand, modify, and debug code. Moreover, design patterns serve as a common language among software professionals, facilitating communication and collaboration. Through the adoption of design patterns, engineers adhere to industry standards and principles of good software design, ensuring the development of robust, efficient, and maintainable software. Ultimately, design patterns are invaluable tools that empower software engineers to tackle complex design problems with confidence and efficiency, fostering the creation of high-quality software systems.




# User Experience





The modern tech stack tends to be  - in moder


 A good engineer will be be able to orienta  find an example of another thing that does that, and I will look at how that's organised and structured, and apply that to my thing"

* **"Click Here!"** - junior developers seem to love making their apps as hard to use as possible. It's almost an aspiration, and they put a lot of effort into cluttering up a screen or even adding in entire steps that add no value. UX requires an ability to abstract away to the essence of what a user is trying to do. They haven't come to you app to type text into a field, they've come there to do something, to learn something, buy something. What is that something? Have you made it as easy as possible for them to do that one thing from the point they load the app?











 **switch off your social notifications**




### Understand the "why" and deliver for the product

Before diving into coding, invest time in thoroughly comprehending the product requirements associated with your current user story. This entails not just knowing *what* needs to be done, but understanding *why* it's needed. What pain point or problem does it address for our users? What specific actions or tasks will the users perform with this new functionality? A deep understanding of these aspects will guide your development efforts in the right direction.

Recognize that the work assigned to you is prioritized for a reason. It represents a critical piece of functionality that the application is yet to offer. In the grand scheme of things, this could be the feature that defines the early success of our startup. Therefore, treat it as a top priority, even if it is boring to build.

While it's natural to be eager to build exciting features or work on those shiny, dreamy aspects of the product, it's essential to resist the temptation to rush through the foundational work. The piece you're currently tasked with is the cornerstone upon which those exciting features will be built. Rushing through it risks compromising the quality and stability of the entire application.

### Be an expert in your tech stack

Learn about the best practice for your focus area. If you're doing the react front end, keep completely on top of the latest react release notes to make sure you know what new functionality is landing soon that will speed up development. If you're building the API, make sure you know the appropriate design patterns and how to apply them to make a service that is super easy to work with. The focus is on easily maintainable code.

## Recommended Videos

- [I'm Not The Best Programmer](https://youtu.be/dHN_tlBEt2c)






Tech Stack


Aspiration

- design system
Assessment Criteria:






Product & user understanding
Attention to detail & follows detailed requirements
Delivery against deadlines
Learns & Introduces industry best practice
Quality assurance





* Delivers working software, that solves a real user problem, within a deadlines.
* Engaged in what we are delivering and care about delivering quality work for our audience.
* Strikes a balance between innovation, technical excellence and delivery.
* Values user experience above technology stack.
* Able to capture and refine the full requirements, ensuring that the user is able to fulfill all of them.
* Can Google "how to ...."
* Understands the underlying reason why they made mistakes, and endevours not to do them again.
* Uses easy-to-understand variable and function naming conventions.
