---
title: Architecture: Getting Consensus on Technical Decisions
sidebar_position: 2
---

# Getting Consensus on Technical Decisions in Early Stage Startups

Reaching consensus on technical decisions is critical to ensure smooth progress and alignment among team members when you are trying to move fast. If one engineers builds their module in a single, large function, a new developer will have to spend time understanding the whole piece of code before they attempt to modify it. If the code is well organised and consistent, working with that code will require less cognative load.

### Getting Consensus on Technical Decisions in Early Stage Startups

Reaching consensus on technical decisions is critical, as it means everyone is working in a consistent way. We have handled this with clear communication, structured decision-making processes, and the use of tools and practices that promote transparency and inclusivity.

**1. Structured Decision-Making Processes:**

Implementing structured decision-making frameworks can help streamline consensus-building. One effective method is the DACI (Driver, Approver, Contributor, Informed) model. This model assigns specific roles: the Driver is responsible for moving the decision forward, the Approver makes the final decision, Contributors provide input, and those Informed are kept up-to-date. This clear delineation of roles helps avoid confusion and ensures that decisions are made efficiently. The limitation of this in an early stage start up is that the technical team is usually very small, and there is often significant differences between experience, so the driver and approver is typically a combined role taken by the engineer leader.

**2. Architectural Decision Records (ADRs):**

Architectural Decision Records (ADRs) are a useful tool for documenting and achieving consensus on technical decisions. ADRs are structured documents that capture the context, decision, and rationale behind significant technical choices. By using ADRs, teams can ensure that decisions are well-documented and accessible to all members, providing a reference that can be revisited if questions or challenges arise in the future.

ADRs typically include:
- **Title:** A succinct description of the decision.
- **Context:** Background information and the problem statement.
- **Decision:** The chosen solution.
- **Consequences:** The implications of the decision, including both positive and negative impacts.

This documentation process not only aids in achieving consensus by making the decision-making process transparent but also serves as a historical record that can guide future technical choices and onboarding new team members.

For simplicity, these documents usually live in our GitHub repo, or knowledge base (i.e. Notion, personally, I'd rather write markdown by hand than battle against Notion's UI. Actually, I'd rather kick myself in the face repeatedly for an hour than battle Notions UI, but that's my personal preference).

For more on ADRs, see [Architectural Decision Records](https://adr.github.io/), [Sustainable Architectural Design Decisions](https://www.infoq.com/articles/sustainable-architectural-design-decisions/) and [AWS Prescriptive Guidance](https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/adr-process.html#:~:text=An%20architectural%20decision%20record%20(ADR,and%20therefore%20follow%20a%20lifecycle).

**3. Collaborative Tools:**

Leveraging collaborative tools such as project management software (e.g., Jira, Trello) and communication platforms (e.g., Slack, Microsoft Teams) can also facilitate consensus.

**1. Open Communication Channels:**

Code review

Establishing open and regular communication channels is foundational. Regular meetings, whether daily stand-ups or weekly check-ins, allow team members to discuss ongoing projects, raise concerns, and propose solutions. 



Code reviews is


other



These forums provide an opportunity for everyone to voice their opinions and for the team to collectively weigh the pros and cons of different technical approaches.









 These tools help keep everyone on the same page, provide a central repository for information, and enable asynchronous discussions, which is particularly useful for distributed teams.

**4. Inclusive Culture:**
Fostering an inclusive culture where every team member feels valued and heard is essential. Encouraging participation from all team members, regardless of their seniority or specific expertise, ensures a diversity of perspectives, which can lead to more robust and innovative solutions. Leaders should actively solicit input and create an environment where dissenting opinions are respected and considered.

In summary, achieving consensus on technical decisions in early-stage startups requires a combination of open communication, structured decision-making processes, the use of ADRs, collaborative tools, and an inclusive culture. By adopting these practices, startups can navigate the complexities of technical decision-making effectively, ensuring alignment and fostering a collaborative team environment.




maintaining and modifying this in future tends



 certain way, that is not


I've found one of the most challenging aspects of software engineering is to get a consensus on how to organise code that a whole team can get behind.


Achieving this consensus involves clear communication, structured decision-making processes, and the use of tools and practices that promote transparency and inclusivity.

1. Open Communication Channels:
Establishing open and regular communication channels is foundational. Regular meetings, whether daily stand-ups or weekly check-ins, allow team members to discuss ongoing projects, raise concerns, and propose solutions. These forums provide an opportunity for everyone to voice their opinions and for the team to collectively weigh the pros and cons of different technical approaches.

2. Structured Decision-Making Processes:
Implementing structured decision-making frameworks can help streamline consensus-building. One effective method is the DACI (Driver, Approver, Contributor, Informed) model. This model assigns specific roles: the Driver is responsible for moving the decision forward, the Approver makes the final decision, Contributors provide input, and those Informed are kept up-to-date. This clear delineation of roles helps avoid confusion and ensures that decisions are made efficiently.

3. Architectural Decision Records (ADRs):
Architectural Decision Records (ADRs) are a powerful tool for documenting and achieving consensus on technical decisions. ADRs are structured documents that capture the context, decision, and rationale behind significant technical choices. By using ADRs, teams can ensure that decisions are well-documented and accessible to all members, providing a reference that can be revisited if questions or challenges arise in the future.

## ADRs typically include:

Title: A succinct description of the decision.
Context: Background information and the problem statement.
Decision: The chosen solution.
Consequences: The implications of the decision, including both positive and negative impacts.
This documentation process not only aids in achieving consensus by making the decision-making process transparent but also serves as a historical record that can guide future technical choices and onboarding new team members.

4. Collaborative Tools:
Leveraging collaborative tools such as project management software (e.g., Jira, Trello) and communication platforms (e.g., Slack, Microsoft Teams) can also facilitate consensus. These tools help keep everyone on the same page, provide a central repository for information, and enable asynchronous discussions, which is particularly useful for distributed teams.

5. Inclusive Culture:
Fostering an inclusive culture where every team member feels valued and heard is essential. Encouraging participation from all team members, regardless of their seniority or specific expertise, ensures a diversity of perspectives, which can lead to more robust and innovative solutions. Leaders should actively solicit input and create an environment where dissenting opinions are respected and considered.

In summary, achieving consensus on technical decisions in early-stage startups requires a combination of open communication, structured decision-making processes, the use of ADRs, collaborative tools, and an inclusive culture. By adopting these practices, startups can navigate the complexities of technical decision-making effectively, ensuring alignment and fostering a collaborative team environment.







