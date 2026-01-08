# Post Technical Release Bugs & UAT Feedback

## What this is

A comprehensive list of bugs and UX/design improvements identified after the technical release. This document includes:
1. **Bugs from JIRA** - Documented issues with JIRA links, sorted by priority (P1-P4)
2. **UAT Feedback** - Issues and improvements identified during UAT debrief meeting (will need JIRA issues created)

**Date:** 2026-01-06  
**Sources:** 
- JIRA issues (bugs)
- UAT Debrief Meeting transcript (UX/design improvements)
**Context:** Bugs and feedback found post technical release

## Priority Classification

- **P1 (Highest):** Critical bugs that block core functionality or cause data loss
- **P2 (High):** Significant bugs that impact user experience or functionality
- **P3 (Medium):** Bugs that cause inconvenience but have workarounds
- **P4 (Low):** Minor bugs with minimal impact

---

## P1 (Highest Priority)

### EAP-922: Checklists not showing properly in form filling
**Status:** Backlog  
**Assignee:** Unassigned  
**Created:** 2026-01-05  
**JIRA Link:** [EAP-922](https://forwood.atlassian.net/browse/EAP-922)

**Summary:** Published checklist questions do not appear correctly when filling out a form. Tested in UAT demo env.

**Description:**  
A form named **Confined Spaces** has been published and includes a checklist called **Atmosphere**, which contains four questions. The form and checklist both show as published, with no pending changes.

However, when the form is opened to be filled out, the **Atmosphere** checklist appears in the expected section, but the questions displayed do not match what was configured and published. The correct four questions are not shown, indicating a mismatch between the published configuration and what is rendered during form completion.

**Impact:** Users cannot properly complete forms with checklists, affecting core form-filling functionality.

---

### EAP-917: Can not record/save an action
**Status:** Backlog  
**Assignee:** Jake Lu  
**Created:** 2026-01-05  
**JIRA Link:** [EAP-917](https://forwood.atlassian.net/browse/EAP-917)

**Summary:** When recording an action against a form and question, the sidebar pops up with the action schema. The Action Template field is blank. If you select any of the 3 templates you get no schema. If you fill the schema out without selecting a template you can not save it.

**Impact:** There is no way to record an action, blocking a core workflow.

**Acceptance Criteria:**  
- Select your chosen action template
- Chosen action template schema appears
- Fill out action and save form
- Action appears in action dashboard

---

### EAP-915: HiPo Workflow Not Displaying Metrics on Dashboard
**Status:** Done  
**Assignee:** Xi Liu  
**Created:** 2026-01-05  
**JIRA Link:** [EAP-915](https://forwood.atlassian.net/browse/EAP-915)

**Summary:** After submitting a hypo question in the workflow, the expected metrics related to the hypo are not displayed on the dashboard.

**Description:**  
This issue affects the visibility of hypo metrics, making it difficult for users to track their submissions and outcomes.

**Acceptance Criteria:**  
- The dashboard should display all submitted hypo metrics correctly
- Users should be able to see the number of opened and resolved hypos
- The display should update in real-time after a hypo submission

---

### EAP-913: Checklist Editing Bug After Copying or Creating
**Status:** Backlog  
**Assignee:** Hong Quan  
**Created:** 2026-01-05  
**JIRA Link:** [EAP-913](https://forwood.atlassian.net/browse/EAP-913)

**Summary:** When a user copies or creates a checklist in the checklist library, the checklist becomes grayed out and cannot be edited.

**Description:**  
This issue prevents users from selecting company or site information, impacting their ability to manage checklists effectively.

**Impact:** Users cannot edit checklists after creation or copying, blocking checklist management workflow.

**Acceptance Criteria:**  
- Users should be able to edit a copied checklist after duplication
- Users should be able to edit a newly created checklist
- All relevant fields (company, site, physical location) should be accessible for editing
- The issue should not occur regardless of whether the checklist is created on the root or sub-level

---

### EAP-912: Inheritance Issue in Company Structure Checklists
**Status:** In Progress  
**Assignee:** Jake Lu  
**Created:** 2026-01-05  
**JIRA Link:** [EAP-912](https://forwood.atlassian.net/browse/EAP-912)

**Summary:** There is a bug in the checklist feature where the inheritance of company structures and physical locations is not functioning correctly.

**Description:**  
When a top-level company is selected, the child companies and their respective locations do not inherit the expected settings, leading to inconsistencies in the displayed data.

**Impact:** Company structure inheritance is broken, affecting multi-company configurations.

**Acceptance Criteria:**  
- The checklist settings should correctly inherit from the selected top-level company to all child companies
- All physical locations under child companies should be displayed when the top-level company is selected
- The issue should be resolved without introducing new bugs or regressions in the checklist feature

---

## P2 (High Priority)

### EAP-921: HiPo's tile appearing on dashboard incorrectly
**Status:** Backlog  
**Assignee:** Unassigned  
**Created:** 2026-01-05  
**JIRA Link:** [EAP-921](https://forwood.atlassian.net/browse/EAP-921)

**Summary:** HiPo metrics are displayed when there are no active HiPo events.

**Description:**  
When there are no active HiPo events, the HiPo metrics are still being displayed in the UI with a value of zero. According to the requirements defined by Sean, HiPo metrics should be hidden entirely when there are no active HiPo events in any category.

**Impact:** Creates unnecessary noise in the interface and does not align with documented requirements.

**Acceptance Criteria:**  
- HiPo metrics are not rendered when there are zero active HiPo events
- HiPo metrics only appear when at least one HiPo event exists in the relevant category

---

### EAP-916: Autosave Failure in Forms
**Status:** Backlog  
**Assignee:** Unassigned  
**Created:** 2026-01-05  
**JIRA Link:** [EAP-916](https://forwood.atlassian.net/browse/EAP-916)

**Summary:** There is a bug related to the autosave feature fails when attempting to save changes in a form.

**Description:**  
This issue causes persistent notifications of 'autosave failed' and prevents users from successfully saving their progress, leading to potential data loss.

**Impact:** Users may lose work and experience frustration with persistent error messages.

**Acceptance Criteria:**  
- The autosave feature should successfully save changes without displaying an error message
- Users should not see the 'autosave failed' notification when making changes
- The form should retain all changes made by the user after closing and reopening

---

### EAP-914: Checklist Library - Questions Not Displaying After Creation
**Status:** Backlog  
**Assignee:** Unassigned  
**Created:** 2026-01-05  
**JIRA Link:** [EAP-914](https://forwood.atlassian.net/browse/EAP-914)

**Summary:** There is a bug in the checklist library where newly created questions do not appear in the checklist after being added.

**Description:**  
This issue has been observed multiple times, impacting the user's ability to see and manage their questions effectively. This appears to be a regression.

**Impact:** Users cannot see newly created questions without refreshing, creating confusion and workflow disruption.

**Acceptance Criteria:**  
- Newly created questions should appear in the checklist immediately after creation
- Users should not have to leave and return to the checklist for the questions to display
- The functionality should be consistent across multiple question creations

---

### EAP-920: 504 gateway timeout error still occurring intermittently
**Status:** In Progress  
**Assignee:** Unassigned  
**Created:** 2026-01-05  
**JIRA Link:** [EAP-920](https://forwood.atlassian.net/browse/EAP-920)

**Summary:** 504 gateway timeout error still occurring intermittently.

**Impact:** Intermittent service disruptions affecting user experience.

---

## P3 (Medium Priority)

### FPM-908: Translation messaging is displayed inline on the form canvas
**Status:** New  
**Assignee:** Unassigned  
**Created:** 2026-01-05  
**JIRA Link:** [FPM-908](https://forwood.atlassian.net/browse/FPM-908)

**Summary:** Translation messaging is displayed inline on the form canvas, disrupting layout and hierarchy.

**Description:**  
A translation-related message (referencing original text and translations) is currently being displayed directly within the form builder canvas. This message appears inline alongside core form elements, taking up significant space and interfering with the visual hierarchy of the form.

**Impact:** Creates unnecessary clutter and negatively impacts the structure and readability of the form.

**Acceptance Criteria:**  
- Translation-related messaging is not displayed as a first-class object in the form canvas
- Messaging does not interfere with the layout, hierarchy, or readability of the form
- Translation messaging is presented using an appropriate notification pattern (e.g. tooltip, popover, modal, or similar)

---

### EAP-894: Action Templates: "Manage Assignments" returns 400 error
**Status:** Done  
**Assignee:** Vikas Thakur  
**Created:** 2025-12-29  
**JIRA Link:** [EAP-894](https://forwood.atlassian.net/browse/EAP-894)

**Summary:** Clicking Manage Assignments on an action template results in a 400 error and blocks access to the assignments screen.

**Description:**  
Error 400 – Client Error: tenantId is required for ABAC endpoints. The issue was first observed on platform dev and has also been reproduced locally, so it is likely affecting all environments.

**Impact:** Users cannot manage assignments for action templates.

**Steps to Reproduce:**  
1. Navigate to Action Templates
2. Open the overflow menu on any action template
3. Click Manage Assignments

---

### EAP-873: Dashboard Key Metrics failing to load on EHS testing tenant
**Status:** Ready for QA  
**Assignee:** Jake Lu  
**Created:** 2025-12-24  
**JIRA Link:** [EAP-873](https://forwood.atlassian.net/browse/EAP-873)

**Summary:** Multiple Key Metrics widgets on the Dashboard are failing to load and displaying error states.

**Description:**  
Only the Safety Coaching metric appears to load correctly, while the remaining metrics show "Error loading …" messages.

**Impact:** Users cannot view key metrics on the dashboard, affecting visibility into important data.

**Affected Metrics:**  
- Inspection count metric
- Open actions metric
- Completed verifications metric
- Compliant percentage metric
- Non-compliant percentage metric

---

### EAP-872: Checklist Library - Newly added section or question does not appear until page refresh
**Status:** Ready for QA  
**Assignee:** Hong Quan  
**Created:** 2025-12-24  
**JIRA Link:** [EAP-872](https://forwood.atlassian.net/browse/EAP-872)

**Summary:** When creating a new checklist, adding a new section or question shows a success toast message, but the newly created item does not immediately appear in the list.

**Description:**  
The section or question only becomes visible after manually refreshing the page.

**Impact:** Users must refresh the page to see newly created items, creating workflow friction.

**Acceptance Criteria:**  
- Newly created section or question appears immediately in the list without requiring a page refresh

---

## P4 (Low Priority)

### EAP-895: Dark mode flashes white briefly on page load / refresh
**Status:** Backlog  
**Assignee:** Vikas Thakur  
**Created:** 2025-12-30  
**JIRA Link:** [EAP-895](https://forwood.atlassian.net/browse/EAP-895)

**Summary:** When using dark mode, refreshing the page or loading it for the first time causes a brief white flash before dark mode styling is applied.

**Description:**  
The dark mode class appears to be removed momentarily on initial render, resulting in a noticeable flicker. This creates a poor user experience for users who have dark mode enabled.

**Impact:** Visual flicker and degraded UX for dark mode users.

**Acceptance Criteria:**  
- Dark mode styling is applied immediately on page load
- No visible white flash or flicker occurs

---

## UAT Feedback - UX/Design Improvements

**Source:** UAT Debrief Meeting - 2026-01-06  
**Note:** These are logged as tasks/improvements rather than bugs, as they represent iterative improvements rather than development errors. These will need JIRA issues created later.

### Critical Issues (Blocking Sales/Demos)

#### 504 Gateway Timeout (Already documented as EAP-920)
**Priority:** P1 - Critical  
**Impact:** Will crash demos, has die consequences. Seen four times in a day.  
**Status:** Already documented above as EAP-920

---

### Company Structure & Site Selection Issues

#### Company/Site Selection Inconsistencies
**Priority:** P1 - Critical (blocks sales)  
**Source:** UAT Debrief - Sean Brennan-Seymour

**Issues:**
1. **Three different selection options need alignment:** Company structure, site, and physical location selections have inconsistent behavior and need to be aligned
2. **Wrong selection blocks progression:** If you select the wrong option (e.g., top-level "demo clients"), you get zero sites and cannot proceed - users get stuck down a "garden pathway"
3. **Operational flag not respected:** In taxonomy service (used by other products), companies can be marked as "operational or not" - in CRM, non-operational items like "demo clients" are non-selectable, but in Forwood One they can be selected
4. **Form scope not enforced:** When building a form, the scope you set should be the maximum scope - users shouldn't be able to select outside of that when filling the form in, but currently they can
5. **Inconsistent multi-select behavior:** When creating a checklist, you can assign it to multiple sites, but then in other places you can only select one - inconsistency in selection behavior

**Impact:**  
- Blocks sales team from proceeding with demos
- Users can get stuck and unable to proceed
- Creates confusion and loss of trust
- Not feasible for sales to switch users/tenants for different demos

**Acceptance Criteria:**
- All three selection options (company structure, site, physical location) behave consistently
- Non-operational companies (like "demo clients") should be non-selectable, matching CRM behavior
- Form scope should be enforced - users cannot select outside the configured scope when filling forms
- Multi-select behavior should be consistent across all contexts
- Any selectable option should work correctly (no dead ends)

---

### UI/UX Inconsistencies

#### Modal/Pane Inconsistency
**Priority:** P2 - High  
**Source:** UAT Debrief - Sean Brennan-Seymour

**Issue:** When creating a checklist, it opens in a side pane, but when creating a form, it opens in a pop-up overlay in the middle of the screen.

**Impact:** Poor consistency that loses trust in the process. Not blocking but creates confusion.

**Acceptance Criteria:**
- Consistent UI pattern for similar actions (either both use side panes or both use modals)

---

#### Actions Dashboard - Too Many Entry Points
**Priority:** P2 - High  
**Source:** UAT Debrief - Sean Brennan-Seymour

**Issue:** There are too many different ways to access/use the actions dashboard, which affects UAT poorly. If you're not using the "best" way, it's hard to capture good UAT. If you point users to the "best" way, you get poor UAT anyway.

**Impact:** Affects UAT quality and user experience. Need to consolidate entry points.

**Acceptance Criteria:**
- Reduce number of ways to access actions dashboard
- Standardize on the best approach
- Remove redundant entry points

---

### Form Builder Issues

#### Section Dragging/Reordering Problems
**Priority:** P1 - Critical  
**Source:** UAT Debrief - Sean Brennan-Seymour, Lori Watt

**Issues:**
1. **Dragging broken:** Dragging a section above section 1 causes it to go to section 2 and then down to the bottom
2. **Preview out of order:** Previews show sections out of order - massive problem that is very disruptive
3. **Up/down arrows problematic:** The up and down arrows are "crazy" and not aligned properly
4. **Icons not aligned:** Icons are not lined up with each other
5. **Arrows always visible:** Arrows are always visible, creating clutter - should be hidden until hovering (like prototype) or use triple dot menu
6. **Arrow placement:** Arrows should be next to the draggy icon if they're showing, not separated

**Impact:**  
- Very disruptive to UAT (noted that Aisha was confused: "what is going on? Where am I?")
- Form builder is "very clunky"
- Creates poor user experience and loss of trust

**Acceptance Criteria:**
- Dragging sections works correctly - sections go where they're dragged
- Preview shows sections in the correct order
- Up/down arrows are properly aligned and functional
- Icons are aligned consistently
- Arrows should be hidden until hovering (or use triple dot menu pattern)
- If arrows are visible, they should be positioned next to the draggy icon

---

### Icon Issues

#### Misleading Icon Usage
**Priority:** P2 - High  
**Source:** UAT Debrief - Sean Brennan-Seymour

**Issue:** There are icons that have standardized meanings being used for other things. Specifically, the green icon on forms and checklists looks like a download button, but it's not for downloading.

**Impact:** Users may misinterpret icon meanings, leading to confusion and incorrect actions.

**Acceptance Criteria:**
- Icons should use standard meanings or be clearly different from standard icons
- Icons should accurately represent their function
- Consider icon audit to ensure consistency

---

## Summary Statistics

### Bugs from JIRA
- **Total Bugs:** 14
- **P1 (Highest):** 5 bugs
- **P2 (High):** 4 bugs
- **P3 (Medium):** 4 bugs
- **P4 (Low):** 1 bug

**Status Breakdown:**
- Backlog: 7
- In Progress: 2
- Ready for QA: 2
- Done: 2
- New: 1

### UAT Feedback Items
- **Total Items:** 6 major categories
- **Critical (P1):** 3 categories (Company/Site Selection, Form Builder, 504 Timeout)
- **High (P2):** 3 categories (Modal Inconsistency, Actions Dashboard, Icon Issues)

**Note:** UAT feedback items need JIRA issues created - these are logged as tasks/improvements, not bugs.

---

## Next Steps

### Immediate Actions
1. **Review and prioritize P1 bugs** for immediate attention
2. **Assign P1 and P2 bugs** to appropriate team members
3. **Create JIRA issues** for UAT feedback items (as tasks, not bugs)
4. **Track resolution progress** for both bugs and improvements

### UAT-Specific Actions
1. **Company/Site Selection:** Critical for sales - needs immediate attention
2. **Form Builder:** Very disruptive to UAT - dragging and preview issues must be fixed
3. **504 Gateway Timeout:** Already documented (EAP-920) - critical blocker for demos
4. **UI Consistency:** Consolidate modal/pane patterns and reduce actions dashboard entry points
5. **Icon Audit:** Review and fix misleading icon usage

### Process Notes
- UAT feedback items should be logged as **tasks** (not bugs) to emphasize iterative improvement mindset
- These represent learnings and iterations, not development errors
- Need to establish process for creating JIRA issues from UAT feedback

