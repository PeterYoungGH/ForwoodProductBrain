# Acceptance Criteria: FPM-754 - Checklist & Content Management: HiPo workflow

**JIRA Issue:** https://forwood.atlassian.net/browse/FPM-754  
**Extracted Date:** 2025-12-10  
**Issue Hierarchy:**
- FPM-754: Checklist & Content Management: HiPo workflow
  - EAP-527: HiPo (High Potential Event) Analysis Framework
    - EAP-528: Implement HiPo Recording Workflow
    - EAP-530: HiPo Required Fields and Resolution Workflow
    - EAP-531: HiPo Evidence Upload and Completion
    - EAP-538: HiPo Automatic Action Creation and Linkage
    - EAP-539: HiPo Data Model and Status Derivation
  - EAP-540: HiPo Configuration and Notifications

---

## FPM-754: Checklist & Content Management: HiPo workflow

**Tester:**   
**Test Date:**   

### Acceptance Criteria

#### HiPo Recording Workflow

[ ] User can trigger HiPo recording from form question
[ ] Critical banner displays with warning text "HIGH POTENTIAL EVENT - CRITICAL"
[ ] Comment field is required with placeholder "Non-compliance description or information to be added"
[ ] Activity field is required, visible, and appears before resolution question
[ ] Resolution Yes/No question displays: "Has this been resolved/fixed immediately?"
[ ] Selecting "Yes" marks HiPo as Resolved and completes the form
[ ] Selecting "No" marks HiPo as Unresolved and displays escalation warning
[ ] Escalation warning "Please talk to your team leader before proceeding with work" remains visible when HiPo is minimized
[ ] Evidence upload is optional and functional
[ ] "Complete HiPo" button saves all data
[ ] Action item is automatically created when HiPo is recorded

#### Dashboard & Management

[ ] Card view displays HiPo cards with all key details
[ ] Table view displays full tabular data with all fields
[ ] View mode persists across sessions via localStorage and URL parameters
[ ] Five stat tiles display correct counts: Unresolved, Resolved, Last 7 Days, Last 30 Days, Total
[ ] Stat tiles are clickable and filter the dashboard when clicked
[ ] All eight filters function correctly: Search, Site, Reporter, Status, Risk, Control, Date From, Date To
[ ] Search filters across HiPo ID, risk name, control name, reporter, and site
[ ] "Clear All Filters" button resets all filters to default state
[ ] Results count updates dynamically based on active filters
[ ] Detail modal opens when clicking a HiPo row or card
[ ] Detail modal displays all HiPo information in a single scrollable view
[ ] PDF export icon button is present in detail modal
[ ] Bulk export icon button is present on dashboard

#### Home Dashboard Integration

[ ] Most Recent HiPo tile displays the latest unresolved HiPo created today
[ ] Failure description is prominently displayed on the tile
[ ] HiPo ID, HIPO ALERT badge, risk, and control are visible
[ ] Dismiss button hides current HiPo and shows next HiPo from today
[ ] Tile disappears completely when all today's HiPos are dismissed
[ ] Clicking the tile opens the HiPo detail modal
[ ] Verification link navigates to the associated verification
[ ] Total HiPos tile displays total count and time-based statistics (24h, 7d, 30d)
[ ] "View All" button on Total HiPos tile navigates to full HiPo dashboard
[ ] Home dashboard tiles only show HiPos created on the current day

#### Form Builder Configuration

[ ] Toggle switch enables/disables HiPo recording on individual questions
[ ] "Require Comment" checkbox enforces comment field completion
[ ] Notification group dropdown is populated with all available groups
[ ] Comment placeholder text is customizable
[ ] All HiPo settings save correctly and persist

#### Notifications & Escalation

[ ] New notification groups can be created via dialog
[ ] Existing notification groups can be edited
[ ] All three roles are selectable: Manager, Supervisor, Operator
[ ] Users can be added to and removed from groups
[ ] Notification groups can be activated or deactivated
[ ] Notification triggers are configured (placeholder functionality)
[ ] Escalation alerts trigger for unresolved HiPos (placeholder functionality)

#### Status & Data Management

[ ] Only two statuses exist: Resolved and Unresolved
[ ] Status is derived from the isResolved boolean field
[ ] No status badge is shown if isResolved is null
[ ] All required fields (comment, activity, isResolved) save correctly
[ ] Evidence files attach to the HiPo record
[ ] Timestamps are recorded accurately
[ ] Each HiPo links to its parent verification form

#### Navigation & Integration

[ ] HiPo dashboard is accessible via Event Management section in primary navigation
[ ] Route `/app/event-management/hipos` loads the HiPo dashboard
[ ] Authentication and feature-gating work correctly (requires event_management feature set)
[ ] Navigation breadcrumbs display correctly
[ ] All internal links and routing function as expected

### General Usability & Responsive Design

[ ] Layout is responsive and adapts to different screen sizes (desktop, tablet/iPad)
[ ] All UI elements resize appropriately when browser window is resized
[ ] Form/interface maintains usable layout at minimum supported resolution (tablet/iPad)
[ ] Modals and dialogs are properly sized and centered on all supported resolutions
[ ] Text remains readable and doesn't overflow containers at any supported resolution
[ ] Buttons and interactive elements maintain minimum touch target sizes (44x44px) on tablet
[ ] Navigation elements (menus, toolbars) remain accessible and functional at all resolutions
[ ] No horizontal scrolling required at supported resolutions
[ ] Vertical scrolling works smoothly when content exceeds viewport height
[ ] Loading states and progress indicators display correctly at all resolutions
[ ] Error messages and validation feedback remain visible and readable
[ ] Icons and images scale appropriately without pixelation or distortion
[ ] Test layout at common desktop resolutions (1920x1080, 1366x768, 1280x720)
[ ] Test layout at tablet resolutions (iPad: 1024x768, 2048x1536; iPad Pro: 2732x2048)
[ ] Test browser window resizing from maximum to minimum supported size
[ ] Test all modals and dialogs at different resolutions
[ ] Test with browser zoom levels (100%, 125%, 150%, 75%)
[ ] Test that no content is hidden or cut off at any supported resolution
[ ] Test that all interactive elements remain clickable/tappable at minimum sizes
[ ] Test layout consistency across different browsers at same resolution
[ ] HiPo recording modal is properly sized and scrollable on all devices
[ ] Dashboard views (card and table) maintain readability and functionality at all resolutions
[ ] Filter panels and stat tiles remain accessible and functional on mobile devices
[ ] Detail modal displays all information correctly without horizontal scrolling
[ ] Evidence upload interface works correctly on touch devices

---

## EAP-527: HiPo (High Potential Event) Analysis Framework

**Tester:**   
**Test Date:**   

### Acceptance Criteria

[ ] HiPo recording triggers correctly from form verification questions
[ ] Comment and Activity fields are required and validated before completion
[ ] "Has this been resolved/fixed immediately?" determines Resolved or Unresolved status
[ ] Escalation warning appears when Unresolved is selected and remains visible when minimized
[ ] Automatic action item created and linked to each HiPo record
[ ] HiPo Dashboard loads under Event Management with correct data in both card and table views
[ ] Stat tiles and filters update instantly with accurate counts and persistent view state
[ ] PDF and CSV exports function without error
[ ] Notification groups configurable and functional, sending alerts per trigger condition
[ ] Home Dashboard tiles show live unresolved HiPos from today with working dismiss and navigation behavior
[ ] Feature is compatible with light and dark themes with no visible lag or UI defects
[ ] QA validates end-to-end data flow, accessibility, and integration performance across verification, actions, and notifications

---

## EAP-528: Implement HiPo Recording Workflow

**Tester:**   
**Test Date:**   

### Acceptance Criteria

[ ] HiPo trigger available and functional on configured verification questions
[ ] Critical banner displays correctly upon initiating a HiPo
[ ] Comment and Activity fields are required and validated before completion
[ ] Resolution Yes/No determines the HiPo status (Resolved or Unresolved)
[ ] Escalation warning displays immediately when "No" is selected and remains visible if minimized
[ ] Optional photo/video evidence attaches successfully to the record
[ ] Clicking "Complete HiPo" saves data and automatically creates a linked action item
[ ] HiPo record correctly stores all required fields, timestamps, and associations
[ ] Notification groups configured in form builder trigger alerts appropriately
[ ] Workflow operates smoothly across devices with no visible lag or UI glitches
[ ] QA validates full data accuracy, logic, and accessibility in light and dark themes

---

## EAP-530: HiPo Required Fields and Resolution Workflow

**Tester:**   
**Test Date:**   

### Acceptance Criteria

[ ] Comment, Activity, and Resolution fields are required before HiPo completion
[ ] Placeholders display correctly for each field
[ ] Selecting "Yes" sets status to Resolved and allows the HiPo to complete
[ ] Selecting "No" sets status to Unresolved and triggers escalation warning
[ ] Escalation warning text matches: "Please talk to your team leader before proceeding with work"
[ ] Escalation warning remains visible when HiPo is minimized or reopened
[ ] Field validation prevents incomplete submissions
[ ] Order of fields matches PRD specification (Comment → Activity → Resolution)
[ ] Status derivation verified in data payload after save
[ ] QA confirms correct persistence and escalation behavior through full workflow testing

---

## EAP-531: HiPo Evidence Upload and Completion

**Tester:**   
**Test Date:**   

### Acceptance Criteria

[ ] Evidence section is visible and optional; users can attach zero or more images or videos
[ ] "Complete HiPo" is enabled only when required fields are valid
[ ] On completion, the system persists: id, comment, activity, isResolved, status, reporter, site, timestamp, riskName, controlName, verificationId, evidenceFiles
[ ] A unique HiPo ID is assigned to the saved record
[ ] The saved HiPo is accessible for dashboards, detail view, exports, and notifications via its id and verificationId
[ ] QA verifies that completing without evidence succeeds and completing with evidence saves all files correctly

---

## EAP-538: HiPo Automatic Action Creation and Linkage

**Tester:**   
**Test Date:**   

### Acceptance Criteria

[ ] Automatic Action created immediately when HiPo is completed and saved
[ ] Action inherits all required fields and metadata from the HiPo and parent verification
[ ] HiPo and Action linkage visible in both records with correct IDs and navigation links
[ ] Duplicate prevention logic verified and no duplicate Actions generated for the same question
[ ] Optional manual Action creation still permitted and does not overwrite the automatically created Action
[ ] QA confirms data consistency between HiPo and Action records and validates end-to-end linkage workflow

---

## EAP-539: HiPo Data Model and Status Derivation

**Tester:**   
**Test Date:**   

### Acceptance Criteria

[ ] All fields listed above present and validated in the HiPo schema
[ ] Status automatically derived from isResolved at save time
[ ] Records link successfully to their parent verification forms
[ ] Timestamps recorded accurately and displayed consistently
[ ] Evidence files stored and retrievable from evidenceFiles array
[ ] Schema integration tested with Dashboard and Action modules
[ ] QA verifies field accuracy, data persistence, and correct derivation logic

---

## EAP-540: HiPo Configuration and Notifications

**Tester:**   
**Test Date:**   

### Acceptance Criteria

[ ] Form Builder displays all HiPo settings in the Follow-Up Actions tab
[ ] Enable HiPo toggle, Require Comment checkbox, Comment Placeholder, and Notification Group fields function as described
[ ] Settings save correctly and persist when form is reopened or published
[ ] During verification, only questions with HiPo enabled display the "Record HiPo" button
[ ] Require Comment enforcement behaves according to configuration
[ ] Notifications sent immediately on HiPo creation to the configured group
[ ] Escalation notifications sent when a HiPo is marked as Unresolved
[ ] Notification Groups support all three roles (Manager, Supervisor, Operator) and persist assigned members
[ ] QA verifies: Group creation, editing, and activation states work correctly; Notification delivery matches configured triggers; Runtime HiPo behavior aligns with the Form Builder configuration
[ ] Integration tests confirm proper linkage between Form Builder, Verification, and Notification modules

---







