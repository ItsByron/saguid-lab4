## Task 1 — [Sector Selection]
**Objective: To identify a local governance challenge, determine the target users, and propose a practical web-based solution with two or three core features.**
**Exact Prompt:**
> My chosen sector is Governance.

Create a project concept for a web-based solution that addresses a local community problem in the Philippines.

Include the following sections:

Sector — Identify the selected innovation sector.

Local Challenge — Describe a problem that community residents experience related to governance.

Target Users — Identify the people who would benefit from the proposed solution.

Proposed Project — Give the project a clear and appropriate name.

Key Features — Propose two or three practical features that address the identified problem.

Project Description — Briefly explain how the proposed website would help its target users.

Keep the project realistic and suitable for a beginner-level frontend web development project. The solution should consist of one responsive webpage using HTML, CSS, and JavaScript. It must not require a backend, database, authentication, or external APIs. Use demonstration data where necessary.

Present the answer in a clear, organized format suitable for submission in a laboratory activity.
**Actual Copilot Output:**
# Project Concept: Community Governance Information Portal

**Sector:** Governance

**Local Challenge:**
Residents may have difficulty finding community announcements, information about local government services, and an organized way to communicate their concerns to local officials.

**Target Users:**
Community residents who need accessible information about local announcements, services, and community concerns.

**Proposed Project:**
Community Governance Information Portal

**Key Features:**
1. **Community Announcements** — Displays sample announcements about community meetings, programs, and activities.
2. **Local Services Directory** — Shows information about selected community services and their purposes.
3. **Community Concern Form** — Allows residents to enter a concern, select its category, and submit it for demonstration purposes.

**Expected Outcome:**
A responsive, user-friendly webpage that organizes community information and demonstrates how digital tools can improve access to local governance information.

**Project Scope:**
The prototype will use HTML, CSS, and vanilla JavaScript. It will use fictional or demonstration data and will not require a backend, database, authentication, or external APIs.
**What Worked:**
The Governance sector was selected, and a local challenge was identified: residents may have difficulty accessing community announcements, information about local government services, and an organized way to communicate their concerns. The proposed Community Governance Information Portal addresses this challenge through three core features: Community Announcements, Local Services Directory, and Community Concern Form.
**What Needs Improvement:**

The project concept needs to be translated into a working webpage. The announcements and service information must be organized clearly, and the concern form must validate required fields and display an appropriate confirmation message. The prototype must also be responsive and accessible on mobile and desktop devices.
**Next Action / Verification:**
Proceed to Task 2 — Zero-Shot Prompting. Submit a simple prompt to GitHub Copilot Chat in Visual Studio Code to generate the initial Community Governance Information Portal. Save the exact prompt and actual generated output in the outputs folder, then document the initial strengths and limitations before improving the prompt.

## Task 2 — [Zero-Shot Prompting]
**Objective:**
To observe how GitHub Copilot generates an initial webpage using a simple prompt without providing examples or detailed implementation instructions.
**Exact Prompt:**
> Create a simple webpage for a community governance information portal.
**Actual Copilot Output:**
Created a responsive Cedarfield community governance portal in index.html, with local-government links, searchable notices, upcoming meeting details, and ways to participate.

Verified the page in a browser: the image loads, search filters results, the mobile menu works, and the layout has no horizontal overflow on mobile or desktop. Open index.html directly to view it
**What Worked:**
The prompt clearly communicates the main purpose of the website and identifies three important components: community announcements, a local government services directory, and a form for residents to submit community concerns. It provides Copilot with a basic direction for generating the initial webpage without supplying example inputs or outputs.
**What Needs Improvement:**
Because the prompt provides only basic requirements, Copilot may make assumptions about the webpage's layout, visual design, content, responsiveness, accessibility, and form functionality. Additional instructions may be needed to ensure that the website uses semantic HTML, responsive CSS, and JavaScript for basic form validation. These potential limitations will be confirmed by examining the actual generated output.
**Next Action / Verification:**
Save the initial Copilot response and generated source files in the outputs folder. Run the webpage in a browser and check whether the announcements, services directory, and concern form are present and functional. Test the form's required fields and inspect the layout on desktop and mobile screen sizes. Record the actual strengths and weaknesses, then use these observations to develop a more detailed structured prompt in Task 3.

## Task 3 — Structured Prompt Anatomy
**Objective:**
To improve the initial zero-shot prompt by providing a structured set of instructions, including the developer role, project context, requirements, technical constraints, expected output, and acceptance criteria.
**Exact Prompt:**
> Act as a frontend web developer specializing in semantic HTML, responsive CSS, and accessible user interfaces.

Task: Create a responsive, single-page Community Governance Information Portal.

Context: The website is intended for community residents in the Philippines who need accessible information about local community announcements, government services, and community concerns.

Requirements:

Display at least three sample community announcements, each with a title, date, and description.

Create a local services directory containing service names and brief descriptions.

Create a community concern form with fields for the resident's name, concern category, and concern description.

Validate required form fields using JavaScript and display a confirmation message after valid submission.

Constraints:

Use semantic HTML, CSS, and vanilla JavaScript only.

Do not use external frameworks, backend services, databases, or APIs.

Clearly identify announcements and service details as demonstration content.

Do not imply that concern submissions are delivered to an actual government office.

Ensure the webpage is readable and usable on desktop and mobile screens.

Include labels for form inputs and visible keyboard-focus indicators.

Expected Output: Provide the complete code for index.html, style.css, and script.js separately, along with instructions for running the webpage locally.

Acceptance Criteria: The page displays the announcements and service directory, the form validates required fields and shows a confirmation message after valid submission, and the layout remains usable on narrow screens.
**Actual Copilot Output:**
Implemented the portal as three separate files:

index.html: Semantic page structure, three sample announcements, a sample local-services directory, and the concern form.
style.css: Responsive styling, accessible focus indicators, and narrow-screen layout.
script.js: Required-field validation and an on-page confirmation after valid submission.
The sample content is clearly identified. The form does not send or save submissions; its confirmation says so.

Run locally: Keep the three files in the same folder, then open index.html in a browser. Verified that empty form fields are rejected, valid submission shows the confirmation, and the page has no horizontal overflow at 320px width. Editor diagnostics reported no errors.
**What Worked:**
The structured prompt provided clearer instructions than the basic prompt used in Task 2. It specified the target users, the purpose of the Community Governance Information Portal, and the three main features: community announcements, a local services directory, and a community concern form. It also defined the required technologies, expected output files, and acceptance criteria. These details give GitHub Copilot clearer guidance for generating a webpage that matches the project requirements.
**What Needs Improvement:**
Although the prompt includes detailed requirements, the generated code still needs to be reviewed and tested to confirm that all features work correctly. The design may need further refinement to improve visual consistency, navigation, and readability. The form's validation, accessibility, and responsive layout must also be verified. The prompt could be improved further by providing design examples or specific instructions for the layout and appearance of each section.
**Next Action / Verification:**
Run the webpage locally. Verify the announcements and services, test the concern form with empty and valid inputs, and check the layout on desktop and mobile widths. Compare the result with Task 2 and record which improvements are observable. Use any remaining weaknesses to guide the next prompting experiment.

## Task 4A — Few-Shot Prompting
**Objective:**
To determine whether providing examples helps GitHub Copilot generate consistent announcement and local government service content for the Community Governance Information Portal.
**Exact Prompt:**
> I am developing a Community Governance Information Portal for residents in the Philippines. Generate content for the Community Announcements and Local Services Directory sections using the example formats below.
Example 1 — Community Announcement
Title: Community Clean-Up Drive
Date: October 25, 2026
Description: Residents are invited to participate in a community clean-up activity to help maintain a clean and healthy environment.
Example 2 — Local Government Service
Service Name: Barangay Certificate Request
Description: Residents may inquire at the barangay office about the requirements and process for requesting a barangay certificate.
Your Task:
Generate three additional community announcements and three additional local government services using the same format as the examples.
Use realistic but fictional demonstration content. Do not claim that the announcements represent actual government schedules or that the listed services have verified requirements.
Keep the content concise, clear, and suitable for a beginner-friendly webpage. If possible, present the results in HTML structures that can be added to my existing webpage. Do not use external frameworks, databases, or APIs
**Actual Copilot Output:**
Added three fictional announcements and three additional service entries to the existing page in index.html. Each follows the current HTML structure, and the sample-content disclaimers remain visible.

The browser confirms six announcements and seven directory entries total. HTML diagnostics report no errors.
**What Worked:**
The prompt provides examples of the expected format for community announcements and local government services. This gives Copilot a reference for organizing titles, dates, and descriptions consistently. After generation, check whether the additional content follows the demonstrated format and is suitable for the portal.
**What Needs Improvement:**
Review the generated content for consistency, relevance, clarity, and correct formatting. Check whether announcement dates and descriptions are included where required, whether service descriptions are understandable, and whether any content incorrectly implies that fictional information is official.
**Next Action / Verification:**
Compare the generated content with the two examples in the prompt. Verify that the additional announcements and services follow the same structure. Save the output and incorporate only suitable content into the webpage.
## Task 4B — Role Assignment
**Objective:**
To evaluate how assigning GitHub Copilot the role of a frontend accessibility reviewer influences its ability to identify potential accessibility, usability, and implementation issues in the Community Governance Information Portal.
**Exact Prompt:**
> Act as a frontend accessibility reviewer with knowledge of semantic HTML, keyboard accessibility, and responsive web design.

Examine my existing Community Governance Information Portal. Review the community announcements, local services directory, and community concern form.

Identify issues involving:
1. HTML semantics and heading structure.
2. Form labels and required-field instructions.
3. Keyboard navigation and visible focus indicators.
4. Text readability, color contrast, and mobile layout.
5. Form validation and the clarity of the confirmation message.

Provide the three most important issues you can identify from the supplied code. For each issue, explain the problem, identify the relevant code if possible, and recommend a specific correction.

Keep the current project scope and use HTML, CSS, and vanilla JavaScript only. Do not introduce external frameworks, backend services, databases, or APIs. Avoid rewriting unrelated parts of the project.

If you cannot verify an issue from the available code, identify it as something that needs testing rather than claiming it is definitely a problem.
**Actual Copilot Output:**
I’ll review the current portal’s HTML, CSS, and JavaScript against those five areas, focusing on issues I can substantiate from the code and separating any browser-only checks from confirmed findings.

Searched for regex `<h[1-6]|announcement-list|service-grid|concern-form|form-message|label for|aria-live|role=` (`**/index.html`), 80 results

Searched for regex `:focus-visible|color-scheme|--ink|--muted|--green|font-size|@media|overflow` (`**/style.css`), 195 results

Read 

The markup is generally well structured: the page has one `h1`, section `h2`s, announcement `article`s, a service `ul`, and associated labels. I’m checking the small-text colors and actual form error behavior now; those are the likeliest places to identify concrete accessibility concerns without inventing semantic problems.

Read , lines 30 to 45

Read , lines 108 to 181

Read , lines 213 to 213

Read , lines 178 to 209

The form’s labels are correctly connected, required fields are marked, and focus indicators are present. Two specific review concerns are emerging: small coral text may not meet contrast, and the required real-name/autofill field conflicts with the instruction not to enter personal information; I’m measuring the colors and checking the mobile navigation behavior before ranking the findings.

Ran Playwright code
Completed with input: await page.goto('file:///C:/Users/JhonCarlo/Downloads/saguid_lab4/index.html'); return await page.evaluate(() => { const linear = value => { const channel = parseInt(value, 16) / 255; return channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4; }; const luminance = hex => 0.2126 * linear(hex.slice(1, 3)) + 0.7152 * linear(hex.slice(3, 5)) + 0.0722 * linear(hex.slice(5, 7)); const ratio = (a, b) => { const x = luminance(a), y = luminance(b); return ((Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05)).toFixed(2); }; const coral = getComputedStyle(document.documentElement).getPropertyValue('--coral').trim(); return {coral, ratioPaper: ratio(coral, '#fafbf8'), ratioServices: ratio(coral, '#f0f4f0'), ratioConcern: ratio(coral, '#f8e9e2'), nameAutocomplete: document.querySelector('#resident-name').autocomplete, nameRequired: document.querySelector('#resident-name').required, privacyNote: document.querySelector('.privacy-note').innerText}; });

Browser action failed
Completed with input: await page.setViewportSize({width: 320, height: 760}); return await page.evaluate(() => ({width: innerWidth, documentWidth: document.documentElement.scrollWidth, navWidth: document.querySelector('.nav').clientWidth, navScrollWidth: document.querySelector('.nav').scrollWidth, links: [...document.querySelectorAll('.nav-list a')].map(link => ({text: link.innerText.trim(), left: Math.round(link.getBoundingClientRect().left), right: Math.round(link.getBoundingClientRect().right)})), serviceColumns: getComputedStyle(document.querySelector('.service-grid')).gridTemplateColumns, concernColumns: getComputedStyle(document.querySelector('.concern-layout')).gridTemplateColumns}));

Searched for regex `<form class|autocomplete="name"|aria-describedby="name-hint"|Required for this demonstration|Do not enter sensitive|form-required-note|form-message` (`**/index.html`), 18 results

Searched for regex `--coral:|:focus-visible|\.eyebrow \{|\.announcement-date \{|\.service-number \{|\.form-field label|\.field-hint|\.nav \{|overflow-x: auto|\.service-grid \{|\.concern-layout \{` (`**/style.css`), 51 results

Searched for regex `firstInvalidField|setCustomValidity|reportValidity|formMessage\.textContent|novalidate` (`**/script.js`), 21 results

Ran Playwright code
Completed with input: await page.setViewportSize({width: 320, height: 760}); const mobile = await page.evaluate(() => { const nav = document.querySelector('.site-header nav'); return {viewport: innerWidth, documentWidth: document.documentElement.scrollWidth, navWidth: nav.clientWidth, navScrollWidth: nav.scrollWidth, navCanScrollHorizontally: nav.scrollWidth > nav.clientWidth, serviceColumns: getComputedStyle(document.querySelector('.service-grid')).gridTemplateColumns, concernColumns: getComputedStyle(document.querySelector('.concern-layout')).gridTemplateColumns}; }); await page.setViewportSize({width: 1440, height: 900}); await page.evaluate(() => document.querySelector('#concern-form').requestSubmit()); return {...mobile, validationFocusedElement: await page.evaluate(() => document.activeElement.id), confirmationHidden: await page.locator('#form-message').isHidden()};

**Three Findings**

1. **The concern form has no accessible name.** The form’s visible title, “Community concern,” is a `<p>`, and the `<form>` does not reference a heading with `aria-labelledby`. Screen-reader users may encounter an unnamed form landmark. Use a heading such as `<h3 id="form-title">Community concern</h3>` and add `aria-labelledby="form-title"` to the form. See `index.html:180` and `index.html:181`.

2. **Some small coral text falls below WCAG AA contrast for normal text.** The coral `#c85845` measures **4.09:1** against the page background, **3.83:1** against the services background, and **3.59:1** against the concern-section background. Small labels and dates using this color need at least 4.5:1 contrast. Use a darker coral for text, reserving the existing coral for non-text accents. See `style.css:7`, `style.css:90`, and `style.css:116`.

3. **The required name field conflicts with the privacy instruction.** The page says not to enter personal information, but asks for a required name and enables name autofill. This is a confusing instruction, although the code does state that submissions are not transmitted. For the demo, label the field “Sample name (use a fictional name)” and disable name autofill. See `index.html:177` and `index.html:184`.

**Checks**

The heading hierarchy and content structures are otherwise sound: there is one `h1`, section `h2`s, announcement articles, a service list, and labels associated with the form controls. A visible `:focus-visible` style is present in `style.css:34`. In the browser, an empty submission focused the first required field without showing success; a valid submission displayed a confirmation that clearly says it was not sent or saved. At 320px, the services and form use a single column with no document-level horizontal overflow. Manual screen-reader and zoom testing would still be useful.
**What Worked:**
The prompt directs Copilot to review the project from a specialized accessibility perspective. It identifies specific areas to examine, including semantic HTML, form labels, keyboard navigation, readability, responsive layout, and validation. Review the actual response to determine which useful and code-specific recommendations Copilot provides.
**What Needs Improvement:**
Check whether Copilot's recommendations refer to actual issues in the source code or are only general suggestions. Some potential problems may require manual testing, especially keyboard operation, mobile responsiveness, and color contrast. Recommendations must be evaluated before applying them.
**Next Action / Verification:**
Review the recommendations and select at least one relevant improvement. Apply the correction, run the webpage, and test the affected feature. Record the issue found, the change made, and the actual verification result.