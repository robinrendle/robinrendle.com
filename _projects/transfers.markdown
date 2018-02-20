---
title: The Transfers App
tags:
- css
subtitle: A tool to improve customer onboarding at Gusto.
role: Designer and front-end developer
results: Our team decreased the amount of time it took to transfer a company by more
  than 33%.
layout: projects-detail
startDate: 10/2017
endDate: 02/2018
company: Gusto
extract: 
heroImage: "/build/images/portfolio/team.jpg"
---

Gusto is a payroll, benefits and <abbr title="Human Resources">HR</abbr> platform for more than 65,000 companies and late last year I was tasked with the design and development of the Transfers app; this was an internal tool that was used to onboard particularly large companies that wanted to switch to Gusto.

<figure>
  <img alt="An example of the finished app." />
  <figcaption>
    <p>
     The final app
    </p>
  </figcaption>
</figure>

Let’s say that your company has 15 employees and you’d like to make the switch from another payroll provider. Well, first you would have to contact Transfers: this is a team of twenty or so people at Gusto that would take all of your company information (such as <abbr title="Federal Employer Identification Number">FEIN</abbr>, work locations, and pay schedules) as well as all of the paystubs for every employee since the beginning of the year and transfer it into Gusto’s system. This is quite frankly an overwhelming amount of information that was taking too much time and was extremely frustrating. So I was brought onto the project to research and build a potential solution for the team that would improve their efficiency and general happiness.

## Project Goals

1. Make sure that the team can transfer every company before the end of year.
2. Improve the team’s data tranfers efficiency by 30%+.
3. Build a tool for historical paystub entry and employee data entry.

The Transfers team lead recommended several improvements that would achieve these goals but thankfully I had enough time to investigate the problem first and watch the Transfers team at work.


## Investigating the Problem
My research consisted of talking to team members across the company and shadowing Transfer team members as they moved data into our system. Understanding the relationship between various groups and teams of people was vital before I could start making any sense of the problem.

<figure>
  <img src="/build/images/portfolio/team.jpg" alt="A picture of the team working on the Transfers app." />
  <figcaption>
    <p>
      Here’s the team hard at work building a prototype of the spreadsheet.
    </p>
  </figcaption>
</figure>

<p>Here are the main points that I discovered during my interviews:</p>

<ul>
  <li>The Transfer team had problems remembering the status of company, for example they would ask themselves questions such as “Have I entered the <abbr title='Social Security Number'>SSN</abbr>s of all employees?”, “Have I entered all of the paystubs for this company?” or even “What is the deadline for this transfer?” This could be particularly challenging when one of the team members that was handling transfers became sick or if there was a looming deadline for a company transfer to be completed.</li>
  <li>Historical paystub entry was extraordinarily difficult because it required that multiple forms would have to be loaded, filled in and submitted for each employee.</li>
  <li>Adding personal data about an employee was particularly painful because of several <abbr title="User interface">UI</abbr> issues, such as form elements not being focusable when you tab into them.</li>
  <li>Information would frequently get lost between the customer and our Sales, Transfers and Care teams. This led to all sorts of frustrating issues such as data being deleted or overridden which would then slow the transfer process immensely.</li>
  <li>Accessibility was a huge problem. The team used an internal tool called Panda that was used by a large number of teams across Gusto. However, because it wasn’t designed specifically for the Transfers team to onboard customers they would spend a large amount of time scrolling and clicking their way through this app in order to find or input the information they needed. The Transfers team would often login to the primary app (the customer-facing interface) in order to input data but this was not streamlined for them or their needs at all.</li>
</ul>

<figure>
  <img src="/build/images/portfolio/purple.jpg" alt="An example of the research I jotted down with the Purple.pm app">
  <figcaption>
    <p>With Purple I could record all of my research and archive it for future designers, <abbr title="Product managers">PM</abbr>s and developers. I recorded every conversation I had with the team in Denver where the Transfer team worked as well as recorded screenshots and videos of their process.</p>
  </figcaption>
</figure>

<figure>
  <img src="/build/images/portfolio/employee-info.jpg" alt="A whiteboard recording all of the differences between the three employee types">
  <figcaption>
    <p>I began collecting every bit of data that they needed to “complete” the transfer of a single employee (data such as first name, surname, home address and <abbr title="Social security numbers">SSN</abbr>s).</p>
  </figcaption>
</figure>

<figure>
  <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQFxorEobQhWRh38af1yFIsjWDMbpUrk1LsElYtOCoFC-7UqGbjXzle_fysRS5aWaRYc_gdVMPpOYeC/pubhtml?widget=true&amp;headers=false"></iframe>
  <figcaption>
    <p>I moved this data from the whiteboard to a spreadsheet so we could share it with the rest of the team and get their feedback. We discovered that we could remove a number of data inputs from the final design.</p>
  </figcaption>
</figure>

<p>The Transfer team’s job was only complete when they had entered all of the necessary data and the first payroll of a company had been run, so I made extensive lists of every bit of information that they needed to enter manually from another payroll provider (such as Paychex or Intuit).</p>
<p>The team had two methods of inputting data: through the confusing and muddled Panda internal app, or through the customer-facing application. Neither were good options because for each bit of information that was entered they were forced to enter a single paystub or a single employee at a time. For example there were also bits of info that the app required but was not required to run payroll quickly. A profile photo was required for an employee for example, but that would get in the way of the Transfers’ team goal: to get payroll setup as quickly as possible.</p>

<figure>
  <iframe src="https://docs.google.com/document/d/e/2PACX-1vS1oEaTKKn-2sYCm9-fa6c4w-VHBfMteDB1HFnx3UfrSRnIChkQAJQMtqulZwF08NLMfj6x8TNkidcw/pub?embedded=true"></iframe>
</figure>

<h4>Proposed Solutions</h4>
<p>Based on this research and listening to the recommendations of a number of folks on the team I jotted down what I believed our primary objectives ought to be:</p>

<ol>
  <li><strong>A new application</strong>: designed solely for the Transfers team, it would optimize the <abbr title='User Experience'>UX</abbr> + <abbr title='User Interface'>UI</abbr> for their needs and would also prevent any conflicts in Panda (and thereby avoid impacting teams in other parts of the company).</li>
  <li><strong>Focus on batch-editing data</strong>: adding historical paystub and employee data requires a lot of manual data entry and so anything that common properties between paystubs or employees should be assigned automatically or set quickly for everyone.</li>
  <li><strong>Create a to-do list</strong>: this would help clearly identify the status of a transfer.</li>
  <li><strong>Only provide the inputs that they need</strong>: we needed to limit the number of fields to only those that block payroll so that their time is best spent on the complex parts of the work.</li>
  <li><strong>Design a strong feedback loop</strong>: one between a company admin, the Transfers team and Sales. Potentially in app, so that they don’t have to use Slack or email to constantly contact each other.</li>
  <li><strong>Order the data correctly but allow for flexibility</strong>: some of the onboarding steps at Gusto were required to be entered before others (for example, certain taxes can be assigned to employees only after it’s clear which states that a company has offices in). Partial data entry would keep the momentum of a transfer on track.</li>
  <li><strong>The UI should prioritize speed</strong>: we needed to ensure that the entire app could be used with a keyboard so that they didn’t have to keep switching input methods.</li>
</ol>

<h4>Early Wireframes</h4>

<figure>
  <img alt="map of process goes here">
  <figcaption>
    <p>
      Map of process goes here
    </p>
  </figcaption>
</figure>


<p>I spent the first week or so in Balsamiq exploring ideas for how this new application might work — I focused primarily on how a Transfers member would gain access through Salesforce and how they would enter employee and basic company data.</p>

<figure>
  <iframe width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/G51M40OXXRIPAes26UNDoJrN/Transfers-Wireframes-1" allowfullscreen></iframe>
  <figcaption>
    <p>
      I used these wireframes to test my initial thoughts with the Transfers team and discovered that the 3 different employee types (currently employed, dismissed and contractors) all required different information for tax and payroll purposes. So I devised a page where all employees could be batch edited but ultimately where a Transfers team member could focus on one type of employee before moving onto the next one.
    </p>
  </figcaption>
</figure>

<p>
  A member of the team would be assigned a company to transfer via Salesforce and the Sales team at Gusto, so I knew that we could piggyback onto this existing process. By clicking the company link they would be sent to a page in Panda that contained all the information about the company, however it was extremely confusing and wouldn’t let them edit any of the data. So in my design I changed that paradigm with a much more efficient one: a link in Salesforce would send them directly into a to-do list that would show them which bits of information had already been entered and where they had to get started.
</p>
<p></p>

<h4>Historical Paystubs Wireframes</h4>

<figure>
  <iframe width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/YRgtnSEy1xsGEj0RKoPBIm/Historical-Payrolls-v2" allowfullscreen></iframe>
  <figcaption>
    <p>
      The second draft of Historical Paystubs entry in the new Transfers app.
    </p>
  </figcaption>
</figure>

<h4>Creating a new component</h4>
<p>As I worked on the design of the People and Historical Paystub pages it was clear that we needed a spreadsheet-like interface to help improve bulk data entry. Not only that but we would need something generic enough to be used throughout our customer-facing application, too.</p>
<p>
  This led to a lot of research into popular spreadsheets in familiar apps and comparing their functionality to the features we knew would be required of the Transfers team.
</p>

<figure>
  <video autoplay="autoplay" loop="loop" class="cell-b20">
    <source src="/uploads/spreadsheet.mp4" type="video/mp4">
  </video>
  <figcaption>
    <p>
      The spreadsheet component was designed, developed and tested in The Guide before it was moved into the Transfers app. I worked with a front-end engineer to make sure that it was as flexible as possible for other missions to import into their own work.
    </p>
  </figcaption>
</figure>

<h4>Testing the Prototype</h4>
<p>After a second draft of mockups had been completed for the employee section the engineers started work and shortly afterwards we were able to test it with the team in Denver. That testing showed us a crucial flaws in our design: instead of showing all of the spreadsheet columns that might be applicable (for example taxes in Colorado <em>and</em> California) we decided to filter them based on the work location information we have access to after the Company Details step has been completed. This meant that the Transfers team wouldn’t have to keep tabbing across a spreadsheet with empty fields and they would see only what they needed to enter.</p>

<p>Whenever we implemented a new feature we could immediately turn around and test it with the Transfers team and so this was an extraordinarily helpful method of getting honest feedback in a timely manner.</p>

<figure>
  <img alt="nasty prototype goes here">
  <figcaption>
    <p>
      Nasty prototype goes here
    </p>
  </figcaption>
</figure>

<h4>Launching the app</h4>
<p>
  Section about the finished implementation of the app – the to-do list especially.
</p>


## Project Review
<ul>
  <li>Our team decreased the amount of time it took to transfer a company by more than 33%.</li>
  <li>It takes 4.76 minutes to create a new employee through Dabba Tabba, compared to 12.4 minutes "the old way."</li>
  <li>67% (1,510) of all employees transferred since Since December 15, 2017 have been entered through Dabba Tabba. The following week 77% of all employees transferred were entered through the Transfers app.</li>
  <li>In one month 2,714 employees had been added to Gusto via Transfers app.</li>
</ul>
