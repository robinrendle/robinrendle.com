---
title: The Transfers App
subtitle: Improving the onboarding experience at Gusto with a brand new internal app.
extract: |
  Gusto is a payroll, benefits and HR platform used by over 65,000 companies. Late last year I was tasked with helping the Transfers team; this is the department that migrates customer data from their existing payroll service into Gusto. I designed an internal tool that could extract this information as quickly and as accurately as possible whilst improving the team’s process along the way.
role: Design lead and front-end development
results: Decreased the amount of time it took to transfer a company by more than 33%.
customCSSClass: transfers
layout: projects-detail
startDate: 10/2017
endDate: 02/2018
company: Gusto
heroImage: "/build/images/portfolio/transfer-1.jpg"
---

## Project Goals

Let’s say that you own a small business and that your company has 15 employees — today you’d like to make the switch from another payroll provider to using Gusto. Well, first you would have to contact Transfers: this is a team of twenty or so people at Gusto that would take all of your company information (such as <abbr title="Federal Employer Identification Number">FEIN</abbr>, work locations, and pay schedules) as well as all of the paystubs for every employee since the beginning of the year and transfer it into Gusto’s system.

All of that data is overwhelming just in sheer volume but there was the added difficulty in the existing suite of tools that the team had at their disposal. So I was brought onto the project to research and build a potential solution for the team that would improve their efficiency and general happiness. Rather more specifically, I had three goals:

1. Make sure that the team can transfer every company before the end of year.
2. Improve the team’s data transfers efficiency.
3. Build a tool for historical paystub entry and employee data entry.


## Investigating the Problem

My research consisted of talking to team members across the company and shadowing Transfer team members as they perfomed that data extraction work. Understanding the relationship between various groups and teams of people was vital before I could start making sense of the problem.

The first thing I noticed was that there were multiple ways to enter that data: through the company-wide “Panda” internal app, or through the customer-facing application. Neither of which were designed specifically for the Transfers team and their objectives, namely entering large amounts of data as quickly and as accurately as possible.

<div class='side-by-side'>
  <!-- Span because md doesn’t process inside block elements -->
  <div class='side-by-side__child'>
    <div class='scrollbox'>
      <h3>Transfers Research Summary</h3>
      <h4>A collection of notes about what I’ve learned during my time in interviews with the Transfers Team.</h4>


      <p class='cell-t30'>The transfers team has <span class='highlight'>a fractured process</span>. Team members use a combination of Panda and the app to input data from a payroll provider into our system. This is for a number of reasons: Panda cannot do everything that the app can do (and also they don’t know everything Panda is capable of), so they’re forced to ‘Become User’ and log into the app: Simply put: <span class='highlight'>it’s easy to get lost in the process</span>, even for experienced Panda users.</p>

      <p>When the transfer member does know where a specific bit of information is in Panda (such as where a username or password is for the payroll provider that the transfer requires) they’ll spend a great deal of time scrolling and searching around Panda for it. This appears to be a huge time sink. Typically they have to move from Gusto app, back to Panda, find the right page in a tiny drop down in the navigation, wait for the new page to load, use cmd+f to find the data that they need and then copy and paste it into the Gusto app or the payroll provider they’re switching from or spreadsheets. So <span class='highlight'>most of the information that Panda shows is entirely unnecessary for the Transfers team and navigating around it is frustrating and inefficient.</span></p>

      <p>Because so much information is fragmented, each team member has to remember what step of the flow a transfer is in and <span class='highlight'>it’s often not clear what the transfer team member has to do next</span>. They often don’t complete a transfer in one sitting because there’s so much information to input or they have to wait for information. If they have to pass off the transfer to another team member then they need to onboard that team member and tell them precisely what step of the process they stopped at (this happens frequently according to my interviews). <span class='highlight'>Being able to quickly scan a company and see precisely what stage of the migration process they’re in is vital for efficiency</span> – ideally this shouldn’t require an in-person “hand off” if a team member is ill or something.</p>

      <p><span class='highlight'>There’s a lot of info in the front-end that isn’t required for a payroll to be run</span>. One example of this is how the transfer team never adds a profile picture for an employee simply because it wastes so much time. Here’s the transfer data that’s currently in the app + Panda vs what’s required for that team to finish a transfer (i.e. run payroll).</p>
      <p>I also found that the team is constantly moving between their mouse and their keyboard to extract and input data into our app. Because of the design of our inputs the team needs to copy/paste lots of data (such as dates, SSNs, and EINs) into inputs from a report or payroll provider with ease. Sometimes this is impossible so they have to type that bit of data out which slows them down.</p>
      <p>The current UI in Panda and in the front-end makes it very difficult for them to do that (autocomplete doesn’t work, certain inputs don’t support copy/paste) – there are many small issues like that that are low hanging fruit. But the real difficulty is that they <span class='highlight'>cannot bulk upload employee information</span>. Each employee has to be added one by one, whereas the reports they’re typically viewing have multiple SSNs, surnames, all of which could be copy/pasted in bulk.</p>
      <p>Another, much larger issue: whenever they cannot complete a task, such as adding all employee SSNs because the source material skips an employee, then are slowed down. Ultimately the team needs to add draft data, review it, add anything that’s missing and perhaps even notify the admin that the transfer team requires more information. <span class='highlight'>The team is constantly blocked from adding data to a new step which slows the whole transfer process down.</span></p>
      <p><span class='highlight'>About 10% of the time an admin will sign into the front-end during a migration and cause conflicts with a transfer.</span> This is related to historical payroll too which consequently leads to all sorts of issues and confusion.</p>
    </div>
  </div>

  <div class='side-by-side__child'>
    <figure>
      <img class='whiteboard-img' src="/build/images/portfolio/employee-info.jpg" alt="A whiteboard recording all of the differences between the three employee types">
    </figure>
  </div>
</div>

<!-- <figure>
  <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQFxorEobQhWRh38af1yFIsjWDMbpUrk1LsElYtOCoFC-7UqGbjXzle_fysRS5aWaRYc_gdVMPpOYeC/pubhtml?widget=true&amp;headers=false"></iframe>
  <figcaption>
    <p>I moved this data from the whiteboard to a spreadsheet so we could share it with the rest of the team and get their feedback. We discovered that we could remove a number of data inputs from the final design.</p>
  </figcaption>
</figure> -->



## Proposed Solutions
Based on this research and listening to the recommendations of a number of team members across the company I jotted down what I believed our primary objectives ought to be:

<ol class='solutions-list'>
  <li>Allow the team to batch-edit data.</li>
  <li>Prioritize speed and compliance.</li>
  <li>Create a to-do list of a transfer’s progress.</li>
  <li>Design a strong feedback loop between Sales, Transfer team, and customer.</li>
</ol>

## Early Wireframes

In Balsamiq I explored ideas for how this payroll and people data might be organized—I focused primarily on how a Transfers member would gain access to a customer account via Salesforce and how they would then go about their job.

For example, a member of the team would be assigned a company to transfer via Salesforce and the Sales team at Gusto, so I knew that we could piggyback onto this existing process. By clicking a link they would be sent to a page in Panda that contained all the information about the company, however it was extremely confusing and wouldn’t let them edit any of the data. So in my design I changed that paradigm with a much more efficient one: the same link in Salesforce would send them directly into a to-do list in the new app that would show them which bits of information had already been entered and where they had to get started.

<div class='m-wrapper--unpadded-wide'>
<figure>
  <img src="/build/images/portfolio/new-migration.jpg" alt="" />
  <figcaption>
    <p>
      The to-do list that reveals the progress of the transfer and editing employee data such as name, <abbr title='social security number'>SSN</abbr>s and home addresses.
    </p>
  </figcaption>
</figure>
</div>

I used these wireframes to test my initial thoughts with the Transfers team and discovered that the different employee types (currently employed, dismissed and contractors) all required different information for tax and payroll purposes. So I designed a section of this new application where all employees could be batch edited but ultimately where a Transfers team member could focus on one type of employee before moving onto the next (top-right image above).

With historical payroll information the team needed to create a paystub for a specific check date and then immediately start entering data such as the regular wages and cash tips that the employee received on that date. Shown below is the second iteration of that design:

<div class='m-wrapper--unpadded-wide'>
  <figure>
    <img src="/build/images/portfolio/new-paystub.jpg" alt="" />
    <figcaption>
      <p>
        Left: edit a single employee paystub or edit all paystubs of a specific date.</p>
       <p class='cell-t10'>Right: after testing these mockups we added the ability to cross-reference payroll data input with the company taxes that were generated by our system.
       </p>
    </figcaption>
  </figure>
</div>

<div class='m-wrapper--unpadded-wide'>
<figure>
  <img src="/build/images/portfolio/benefits.jpg" alt="" />
  <figcaption>
    <p>
      Left + Right: adding benefits data to an employee is similar to paystub entry, but sadly this feature never shipped due to time constraints.
    </p>
  </figcaption>
</figure>
</div>

## Designing the Spreadsheet

After investigating what the People and Historical Paystub data entry would require we decided not to use a plugin or ready-out-of-the-box React component and instead we decided to build our own. This would take a lot more time to design and build but we felt that we needed custom alerts, complex keyboard/mouse input, and we needed a few specific <span class='caps'>UI</span> features in order to address that team’s problems.

After user testing we discovered that the team needed cell-specific error messages, such as data-type alerts and warnings or suggestions that might help them resolve an issue as quickly as possible. Here’s one of the mockups I made of these inline-alerts:

<figure>
  <img src="/build/images/portfolio/spreadsheet.jpg" alt="The spreadsheet with errors." />
</figure>

The spreadsheet component was designed, developed and tested in The Guide before it was moved into the Transfers app. I worked with a front-end engineer to make sure that it was as flexible as possible for other teams across the company to import into their own projects, too.

For example, we added an optional footer component for those teams and the ability to lock whole columns. Later we added the ability to add dozens of columns and rows and set a fixed width to the spreadsheet thereby “freezing” certain columns (such as the name of an employee). Consequently this gave the Transfers team the ability to add hundreds of employees at a time so that they wouldn’t have to keep scrolling back and forth.

<div class='m-wrapper--unpadded-wide'>
  <figure>
    <img src="/build/images/portfolio/spreadsheet-iterations.jpg" alt="The spreadsheet with errors." />
    <figcaption>
      <p>
        We built optional components such as a totals section at the bottom, as well as locked and frozen columns so that we could give the designers at Gusto as much flexibility as possible.
      </p>
    </figcaption>
  </figure>
</div>


<!-- > picture of [locked columns](https://www.figma.com/file/WzLLDq0393j19Rscgoaam8A4/Spreadsheet-%E2%80%93-Footer-%2B-Locked-Columns)

<figure>
  <img src="/build/images/portfolio/team.jpg" alt="A picture of the team working on the Transfers app." />
  <figcaption>
    <p>
      Here’s the team hard at work building a prototype of the spreadsheet.
    </p>
  </figcaption>
</figure> -->


## Building the App & Continuous User Testing

Whenever we implemented a new feature we could immediately turn around and test it with the Transfers team and so this was extraordinarily helpful in getting quick and honest feedback.

One of the most enjoyable experiences that I had with this project though was the close collaboration that we had with the Transfers team—especially when it came to the design of the Dashboard or the to-do list that they saw on first viewing. After launch we added a lot of data that they requested and was only obvious after-the-fact; data such as the deadline of a specific transfer or info about which Sales team member had been assigned to which company.

<div class='m-wrapper--unpadded-wide'>
  <figure>
    <img src="/build/images/portfolio/transfer-1.jpg" alt="" />
  </figure>
</div>

In another round of testing it was clear that there was a flaw in the original design: instead of showing all of the spreadsheet columns that might be applicable (for example taxes in Colorado and California) we decided to filter them based on the work location. This meant that the Transfers team wouldn’t have to keep tabbing across a spreadsheet with dozens of empty fields and they would see only what they needed to enter.

<!-- <div class='m-wrapper--unpadded-wide'>
  <figure>
    <img src="/build/images/portfolio/transfer-3.jpg" alt="" />
  </figure>
</div> -->

I think what this taught me more than anything is that not everything can be planned in the early design stages, no matter how deliberate and careful I am. User testing is the only way to reveal those sorts of issues.


## Project Review

<ul class='solutions-list'>
  <li>Our team decreased the amount of time it took to transfer a company by more than 33%.</li>
  <li>It now takes ~4 minutes to create a new employee, compared to ~12 minutes the old way.</li>
  <li>2,714 employees had been added to Gusto via the new app in the first month.</li>
</ul>
