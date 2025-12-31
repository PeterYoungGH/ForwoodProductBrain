# Acceptance Criteria: FPM-750 - Actions V1 Updates (Actions and Action Dashboard)

**JIRA Issue:** https://forwood.atlassian.net/browse/FPM-750  
**Extracted Date:** 2025-12-10  
**Issue Hierarchy:**
- FPM-750: Actions V1 Updates (Actions and Action Dashboard)
  - EAP-421: Action Creation & Inline Management
  - EAP-431: Actions Data Model & Templates (V1)
  - EAP-439: Action Review & Approval Workflow
  - EAP-444: Admin Settings & Template Management
  - EAP-451: Actions Dashboard: Navigation, Routing & State Management
  - EAP-456: Actions Dashboard: Top Metrics Strip (KPI Cards)
  - EAP-464: Actions Dashboard: Charts Panel (Status Timeline & Company Structure Overview)
  - EAP-470: Critical & Urgent Actions Panel
  - EAP-482: Actions Dashboard: All Actions Panel
  - EAP-488: Actions Dashboard: Filters Panel

---

## FPM-750: Actions V1 Updates (Actions and Action Dashboard)

**Tester:**   
**Test Date:**   

### Acceptance Criteria

#### Action Plan Creation & Management

[ ] Users can create actions using pre-built templates
[ ] Actions inherit organizational details from parent objects
[ ] Closure requires mandatory comments
[ ] Supporting evidence (files/photos) can be uploaded
[ ] Parent-child relationship between actions and sources is traceable

#### Action Plan Settings & Administration

[ ] Admin can assign templates to modules
[ ] Admin can toggle whether review is required per template
[ ] Admin can configure organizational field requirements for standalone actions
[ ] Admin can monitor action completion and review metrics
[ ] Permissions can be set for owners and reviewers

#### My Actions Dashboard

[ ] Users see only their assigned actions
[ ] Dashboard defaults to list view, with card view optional
[ ] Actions are filterable by status, priority, module, and dates
[ ] Search functionality works across action titles and descriptions
[ ] Parent ID links navigate correctly to source
[ ] Inline editing allows real-time updates
[ ] Mobile view is fully optimized

#### Action Review Functionality

[ ] Templates can define if review is required
[ ] Responsible person marking action complete triggers review
[ ] Reviewer receives both push + email notifications
[ ] Reviewer can approve → closes action
[ ] Reviewer can reject → must provide comment
[ ] Rejected actions return to responsible person
[ ] All review decisions logged in audit trail

#### Technical & Data

[ ] Audit trail exists for all changes and reviews
[ ] File attachments are stored and retrievable
[ ] Data persists across sessions
[ ] Manual entry of organizational context is possible for standalone actions

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
[ ] Dashboard components (KPI cards, charts, tables) scale appropriately across screen sizes
[ ] Filter panels and sidebars remain accessible and functional on mobile devices
[ ] Action detail drawers and modals are properly sized and scrollable on all devices
[ ] Map view markers and interactions work correctly on touch devices
[ ] Table and card views maintain readability and functionality at all resolutions

---

## EAP-421: Action Creation & Inline Management

**Tester:**   
**Test Date:**   

### Acceptance Criteria

[ ] Users can create actions from templates or parent objects
[ ] Required fields validate dynamically before saving
[ ] Closure requires a mandatory comment (and evidence if configured)
[ ] File attachments upload and display successfully
[ ] Inline edits save and update in real time
[ ] Audit trail records all key user interactions

---

## EAP-431: Actions Data Model & Templates (V1)

**Tester:**   
**Test Date:**   

### Acceptance Criteria

[ ] Unified schema for all three action types is finalized and documented
[ ] Pre-built templates for "Action (Review)," "Action (No Review)," and "Fixed in Field" are available for assignment to modules
[ ] Required fields, auto-populated attributes, and conditional logic (e.g., Implementation Details visibility) function as intended
[ ] Template versioning supports draft and published states
[ ] Templates are retrievable and modifiable through admin configuration

---

## EAP-439: Action Review & Approval Workflow

**Tester:**   
**Test Date:**   

### Acceptance Criteria

[ ] Review workflows trigger automatically when an action is marked Complete and the associated template requires review
[ ] Reviewers receive both push and email notifications for pending reviews
[ ] Reviewers can approve or reject an action, with mandatory comments for rejections
[ ] Rejected actions return to the responsible person for resubmission
[ ] All actions, comments, and transitions are logged in the audit history

---

## EAP-444: Admin Settings & Template Management

**Tester:**   
**Test Date:**   

### Acceptance Criteria

[ ] Administrators can view and edit Action template settings per module
[ ] Templates can be assigned to one or multiple modules
[ ] Review requirement toggle functions correctly for each template
[ ] Field configuration changes persist and apply to all new actions
[ ] All admin actions are captured in audit logs for governance and traceability

---

## EAP-451: Actions Dashboard: Navigation, Routing & State Management

**Tester:**   
**Test Date:**   

### Acceptance Criteria

[ ] Dashboard accessible at /app/actions through the main navigation
[ ] User session retains filters and view preferences until logout
[ ] Deep links open specific actions in the detail drawer
[ ] KPI cards correctly apply filters and auto-scroll to "All Actions"
[ ] Visibility rules enforce user's scope and permissions
[ ] Graceful handling for invalid or unauthorized links

---

## EAP-456: Actions Dashboard: Top Metrics Strip (KPI Cards)

**Tester:**   
**Test Date:**   

### Acceptance Criteria

[ ] Four KPI cards are displayed with accurate counts according to visibility scope
[ ] Clicking any KPI applies the correct filters and scrolls the user to the "All Actions" section
[ ] Totals remain constant even when other filters are active
[ ] Tooltips correctly display metric definitions on hover and focus
[ ] Keyboard navigation and ARIA labels are validated for accessibility compliance
[ ] Dark mode renders with proper color variants and contrast levels
[ ] Verified in staging with real action data reflecting consistent counts across all dashboard components

---

## EAP-464: Actions Dashboard: Charts Panel (Status Timeline & Company Structure Overview)

**Tester:**   
**Test Date:**   

### Acceptance Criteria

[ ] Two side-by-side charts displayed below the KPI section
[ ] Real-time data visualization of open actions, excluding completed/cancelled ones
[ ] Overdue actions distinctly highlighted in red (#EF4444)
[ ] Interactive tooltips and legends for breakdown clarity
[ ] Dynamic rendering from actual action data (no mock or hard-coded metrics)
[ ] Consistent visual styling with Oculus design system and dark mode compatibility

---

## EAP-470: Critical & Urgent Actions Panel

**Tester:**   
**Test Date:**   

### Acceptance Criteria

[ ] Panel correctly displays overdue and high/urgent actions without duplication
[ ] Rows and headers match the PRD design and follow platform styling conventions
[ ] Expand/collapse functionality works seamlessly within the same view (no navigation)
[ ] Clicking any action opens the Action Detail Drawer with correct data loaded
[ ] Workflow buttons appear based on user role and current action status
[ ] Sorting order (urgent > high > overdue date) is consistent across reloads
[ ] Red accent strip is correctly rendered in both light and dark modes
[ ] Keyboard and screen reader accessibility confirmed
[ ] QA verifies that completed and cancelled actions are excluded from the dataset

---

## EAP-482: Actions Dashboard: All Actions Panel

**Tester:**   
**Test Date:**   

### Acceptance Criteria

[ ] The All Actions Panel loads at /app/actions and displays the user's permitted actions
[ ] Filters function correctly and combine using AND logic within groups, OR logic between selections
[ ] "Show My Actions Only" restricts results to actions assigned to the logged-in user
[ ] Search returns matching results across all defined text fields
[ ] Table view displays defined columns with sortable "Due Date" (ascending by default)
[ ] Card and Map views display consistent data and respond to filter changes instantly
[ ] Map markers display correct color coding and open InfoWindows on click
[ ] Clicking any row, card, or map marker opens the Action Detail Drawer
[ ] The panel updates dynamically as actions are created, completed, or updated
[ ] All components support dark mode and maintain accessible color contrast and keyboard focus states
[ ] QA validates accuracy, performance, and parity of data across all three views (Table, Card, Map)

---

## EAP-488: Actions Dashboard: Filters Panel

**Tester:**   
**Test Date:**   

### Acceptance Criteria

[ ] Filters panel includes all sections and controls as per PRD design
[ ] Changing any filter updates results immediately without reload
[ ] "Clear All" resets all filters and results
[ ] Active filter counts display correctly per section
[ ] Session persistence restores last used filters within current session
[ ] Keyboard navigation, dark mode, and ARIA labels pass QA checks
[ ] All option sets are dynamically loaded from tenant vocabularies
[ ] Visibility rules respected (user sees only allowed hierarchy data)

---

## EAP-474: Actions Dashboard: Critical & Urgent Actions Data Logic & Inclusion Rules

**Tester:**   
**Test Date:**   

### Acceptance Criteria

[ ] Panel displays only overdue or high/urgent actions, never completed or cancelled
[ ] No duplicate entries appear for actions meeting both criteria
[ ] Sorting order follows urgency, then earliest due date
[ ] Count and dataset dynamically update when actions are added, edited, or completed
[ ] Top 3 items appear by default; full list shown on expansion
[ ] Visibility rules enforced — users only see permitted actions within their hierarchy
[ ] Empty state message "No critical or urgent actions found" appears when dataset empty
[ ] QA verifies data parity between backend and frontend, ensuring refresh and inclusion logic behave consistently

---

## EAP-475: Actions Dashboard: Critical & Urgent Actions Table Layout & Design

**Tester:**   
**Test Date:**   

### Acceptance Criteria

[ ] Section renders with title, red accent strip, subtitle count, and toggle control; default shows 3 rows, expanded shows all; toggle text switches correctly
[ ] Each row displays all 6 columns with the specified content and styles; titles are clickable and open the detail drawer
[ ] Priority/status badges use correct variants; Due Date shows overdue styling and labels where applicable
[ ] Company Structure & Location column shows hierarchy and location as specified
[ ] Actions column shows the correct set of role-based buttons; clicking a button does not trigger row navigation; empty state shows "—" with tooltip
[ ] Hover, focus, and dark-mode styles match dashboard design; density is compact (py-2)
[ ] Keyboard navigation and ARIA semantics pass accessibility checks
[ ] QA confirms layout matches PRD screenshots/specs across standard breakpoints

---

## EAP-477: Actions Dashboard: Critical & Urgent Actions Expand/Collapse Behavior

**Tester:**   
**Test Date:**   

### Acceptance Criteria

[ ] On initial load, panel shows exactly 3 actions and the toggle reads "View all {count} →"
[ ] Clicking the toggle expands the list inline to display all matching actions; toggle text changes to "Show less"
[ ] Clicking "Show less" restores the 3-row view without changing scroll position
[ ] No route changes occur during toggle; URL remains the same
[ ] Header subtitle count always reflects the total number of qualifying actions
[ ] Behavior is consistent in light and dark modes and on mobile
[ ] QA verifies no reflow/jump on toggle and that expanded/collapsed states persist during normal interaction on the page

---

## EAP-478: Actions Dashboard: Critical & Urgent Actions Real-Time Data Refresh and Synchronization

**Tester:**   
**Test Date:**   

### Acceptance Criteria

[ ] When an action's status or due date changes, the Critical & Urgent panel updates automatically without manual reload
[ ] Actions that no longer meet inclusion criteria (completed/cancelled) are removed immediately
[ ] Newly qualified actions appear dynamically in the correct sorted position
[ ] Count subtitle updates accurately in real time
[ ] Consistent dataset across "Critical & Urgent" and "All Actions" panels
[ ] Data updates do not cause layout shift or scroll loss
[ ] QA verifies live refresh behavior across common workflows (complete, approve, reject) and multiple user sessions

---

## EAP-479: Actions Dashboard: Critical & Urgent Actions Performance Optimization & Accessibility Polish

**Tester:**   
**Test Date:**   

### Acceptance Criteria

[ ] Panel remains smooth and responsive when displaying up to 100 actions
[ ] No frame drops or layout jumps during real-time updates or expand/collapse
[ ] Scroll position and table state persist correctly across updates
[ ] All buttons and interactive elements are accessible via keyboard and screen readers
[ ] Visual consistency and contrast validated across light and dark modes
[ ] Meets WCAG 2.1 AA accessibility compliance standards
[ ] QA verifies no visible flicker, rendering delays, or accessibility regressions

---

## EAP-480: Actions Dashboard: Critical & Urgent Actions Workflow Buttons & Role-Based Controls

**Tester:**   
**Test Date:**   

### Acceptance Criteria

[ ] Workflow buttons render only for valid user-role/status combinations
[ ] Clicking the appropriate button updates status inline without navigation
[ ] Inaccessible buttons are replaced with "—" and contextual tooltip (e.g., "You are not assigned to this action")
[ ] Buttons reflect loading and success/error feedback states correctly
[ ] Status transitions are saved and persist after page refresh
[ ] QA verifies all valid and invalid transitions for both Assignee and Reviewer roles across statuses and templates

---

## EAP-481: Actions Dashboard: Critical & Urgent Actions Header & Count Synchronization

**Tester:**   
**Test Date:**   

### Acceptance Criteria

[ ] Header subtitle count updates in real time with every qualifying action change
[ ] Count always matches the number of visible rows in the Critical & Urgent Actions panel
[ ] Zero-state displays appropriate empty message and hides "View all" toggle
[ ] Count updates seamlessly with no visual flicker or lag
[ ] Verified synchronization between dashboard sections for accuracy and timing

---

## EAP-445: Template Assignment to Modules

**Tester:**   
**Test Date:**   

### Acceptance Criteria

[ ] Admins can view all available templates and Oculus modules
[ ] Templates can be assigned or unassigned to modules via an intuitive interface (e.g., checkbox or multi-select)
[ ] Changes save successfully and reflect immediately in module configuration
[ ] Each module displays its active templates clearly in the admin view
[ ] Configuration persists and is applied consistently across environments (dev, staging, prod)
[ ] Only authorized administrators can access or modify template assignments

---

## EAP-446: Review Requirement Toggle per Template

**Tester:**   
**Test Date:**   

### Acceptance Criteria

[ ] Admins can enable or disable review requirements per Action Template
[ ] Enabling review enforces a reviewer selection and two-step workflow in the Actions process
[ ] Disabling review allows direct closure without reviewer involvement
[ ] The current review status for each template is visible in the admin configuration screen
[ ] Configuration changes persist and do not affect existing in-progress actions
[ ] Access to modify this setting is restricted to users with administrator permissions

---

## EAP-448: Template Version Control and Publishing

**Tester:**   
**Test Date:**   

### Acceptance Criteria

[ ] Each Action Template includes a visible version number and status (Draft, Published, Archived)
[ ] Admins can create new draft versions from published templates
[ ] Publishing a draft automatically archives the previous published version
[ ] Published versions are locked for editing
[ ] Historical versions remain accessible for reference but cannot be reactivated or modified
[ ] Templates maintain version linkage to existing actions (no retroactive changes)
[ ] Version metadata (created date, published date, modified by) displays correctly in admin view
[ ] Only admin users can create, publish, or archive versions

---

## EAP-449: Administrative Dashboard for Monitoring Action Templates

**Tester:**   
**Test Date:**   

### Acceptance Criteria

[ ] Admins can access a centralized dashboard listing all Action Templates and key configuration details
[ ] The dashboard allows filtering and searching by module, version, or review setting
[ ] Quick actions (View, Edit, Duplicate, Archive) function correctly and respect permission rules
[ ] Templates display accurate version and status information
[ ] Summary statistics are visible and update automatically as changes occur
[ ] The dashboard reflects the latest configuration without needing page reloads
[ ] Only admin users can access and manage the dashboard

---

## EAP-432: Define Unified Actions Schema (V1)

**Tester:**   
**Test Date:**   

### Acceptance Criteria

[ ] A single schema specification is published that lists every field with name, type, required/optional, default behavior, and visibility rules
[ ] Schema maps which fields apply to each template (Review / No Review / Fixed in Field)
[ ] Schema enumerates allowed values for all dropdowns
[ ] Schema documents conditional logic for Implementation Details and defaulting of Review Date
[ ] Template rules are defined (what constitutes a valid record for each template; when Status changes; review requirement only on "Action (Review)")
[ ] Versioning terminology and states (Draft, Published) are documented for templates
[ ] The schema is reviewed and signed off by PM and Tech Lead for use by subsequent stories

---

## EAP-433: Seed Pre-Built Action Templates

**Tester:**   
**Test Date:**   

### Acceptance Criteria

[ ] All three pre-built templates (Action Review, Action No Review, Fixed in Field) exist in the system
[ ] Each template includes correct field mappings, dropdowns, and conditional visibility
[ ] Required fields behave as specified (cannot save incomplete templates)
[ ] Templates can be assigned to a module by an administrator
[ ] Metadata (versioning and audit details) populate automatically
[ ] Templates persist correctly across reloads and environments

---

## EAP-434: Implement Template Versioning and Lifecycle Management

**Tester:**   
**Test Date:**   

### Acceptance Criteria

[ ] Templates display accurate version and status metadata in configuration screens
[ ] Only one active Published version exists per template type
[ ] Editing a published version creates a new draft automatically
[ ] Publishing a draft replaces the previous version and locks editing
[ ] Administrators receive confirmation prompts when publishing or discarding changes
[ ] Historical version metadata remains visible for auditing
[ ] Templates persist correctly across sessions, environments, and deployments

---

## EAP-436: Audit Trail for Actions (Create/Update/Review Events)

**Tester:**   
**Test Date:**   

### Acceptance Criteria

[ ] All new Actions inherit Company Structure, Site, Location, and Module from their parent record automatically
[ ] Inherited values display correctly in both detail and list views
[ ] Users cannot edit inherited values
[ ] Parent Record ID links correctly to the original object
[ ] Audit trail includes the inherited fields at creation for traceability
[ ] No inheritance errors occur across supported modules (Verifications, Inspections, Incidents, Interactions)
[ ] Manual field entry only applies to standalone creation (future scope)

---

## EAP-438: Validation & Error Messaging for Required Fields

**Tester:**   
**Test Date:**   

### Acceptance Criteria

[ ] Attempting to save or complete an Action with missing required fields triggers validation
[ ] Error messages clearly identify which fields are missing or invalid
[ ] Fields with errors are visually highlighted for accessibility
[ ] Once all fields are corrected, the save/complete action proceeds successfully
[ ] Validation and error messaging behave consistently across web and mobile

---

## EAP-457: Actions Dashboard: Total Actions (KPI Card)

**Tester:**   
**Test Date:**   

### Acceptance Criteria

[ ] Card displays correct total action count for the logged-in user based on visibility scope
[ ] Clicking the card resets filters and scrolls the page to the "All Actions" table
[ ] Card remains visible and accurate regardless of applied filters
[ ] Tooltip appears on hover/focus with correct definition text
[ ] Card supports keyboard activation and ARIA label for accessibility
[ ] Verified in dark mode and light mode for color consistency
[ ] QA confirms correct count alignment with data in "All Actions" section and backend API

---

## EAP-460: Actions Dashboard: Open Actions (KPI Card)

**Tester:**   
**Test Date:**   

### Acceptance Criteria

[ ] Card displays correct open action count (matching data in "All Actions" view)
[ ] Clicking the card applies the correct filters (open, in_progress, pending_approval) and scrolls to the "All Actions" table
[ ] Counts remain accurate regardless of other applied filters
[ ] Tooltip appears on hover/focus with correct definition text
[ ] Card supports keyboard accessibility and ARIA label for assistive technologies
[ ] Dark mode rendering is visually consistent with the PRD specifications
[ ] QA verifies filter behavior aligns with back-end data and scope permissions

---

## EAP-461: Actions Dashboard: Completed Actions (KPI Card)

**Tester:**   
**Test Date:**   

### Acceptance Criteria

[ ] Card displays the correct count of completed actions based on user visibility and permissions
[ ] Clicking the card applies the completed filter and scrolls to the "All Actions" section
[ ] Card remains accurate and visible regardless of other filter states
[ ] Tooltip appears on hover/focus with correct definition
[ ] Card supports keyboard navigation and ARIA accessibility standards
[ ] Dark mode and light mode styles match the design system
[ ] QA confirms counts align with backend API and "All Actions" results

---

## EAP-462: Actions Dashboard: Overdue Actions (KPI Card)

**Tester:**   
**Test Date:**   

### Acceptance Criteria

[ ] Card accurately displays overdue action count for the logged-in user, respecting data visibility rules
[ ] Clicking the card applies the correct overdue filter and scrolls to the "All Actions" list
[ ] Tooltip shows on hover/focus with correct definition text
[ ] Card remains static (always visible) and does not change when other filters are applied
[ ] Fully functional in both light and dark modes per design system specifications
[ ] Keyboard navigation and ARIA attributes verified for accessibility
[ ] QA confirms the overdue count matches backend-calculated data and correctly excludes completed/cancelled actions

---

## EAP-463: Actions Dashboard: KPI Click Behavior (Interactive Filtering & Scroll)

**Tester:**   
**Test Date:**   

### Acceptance Criteria

[ ] Clicking each KPI applies the correct predefined filter and scrolls to the "All Actions" list section
[ ] Filter state updates immediately and is reflected in the active filters sidebar
[ ] KPI totals remain unchanged after filtering
[ ] Cards respond visually on hover and focus, providing clear interaction feedback
[ ] Fully supports keyboard accessibility and ARIA labeling
[ ] Scroll behavior is smooth and returns focus to the action list
[ ] QA confirms each KPI's filter logic aligns with PRD definitions and backend data

---

## EAP-452: Actions Dashboard: Route & Menu Entry

**Tester:**   
**Test Date:**   

### Acceptance Criteria

[ ] "Actions" appears as a top-level menu item in the main navigation
[ ] Clicking "Actions" loads the dashboard at /app/actions inside the workspace frame
[ ] Only authenticated users can access the dashboard
[ ] Unauthorized users are redirected with a proper access message
[ ] Page title and layout match design consistency of other Oculus modules
[ ] No visual flicker or blank screen during navigation

---

## EAP-453: Actions Dashboard: Session Persistence

**Tester:**   
**Test Date:**   

### Acceptance Criteria

[ ] User-applied filters, search terms, and view preferences persist during the session
[ ] Returning to /app/actions restores dashboard exactly as last viewed
[ ] Clicking "Clear All" resets both current and stored filters
[ ] Session persistence works only for the current logged-in user
[ ] Restored filters accurately reflect both UI state and results displayed
[ ] Smooth visual transition when restoring saved state (no flicker or misalignment)

---

## EAP-454: Actions Dashboard: Deep Linking & URL Parameters

**Tester:**   
**Test Date:**   

### Acceptance Criteria

[ ] URLs with valid IDs open the dashboard and automatically display the selected action in the detail drawer
[ ] Invalid or restricted IDs show a friendly "Action not found or access denied" message
[ ] Deep links function from both internal navigation and external browser entry
[ ] Closing the drawer restores the user's previously saved dashboard state
[ ] All access and visibility rules respect user permissions and organizational scope

---

## EAP-455: Actions Dashboard: Permission & Scope Guard

**Tester:**   
**Test Date:**   

### Acceptance Criteria

[ ] Users only see actions assigned within their own hierarchy level and one level below
[ ] Unauthorized actions are excluded from all dashboard data queries and visualizations
[ ] Attempting to open restricted actions via URL or deep link displays a "No Access" message
[ ] Filter and chart data respect scope limitations, never exposing restricted tenant or module data
[ ] QA confirms consistent permission enforcement across all display modes (Table, Card, Map)
[ ] Unit tests validate permission filtering and URL access behavior for both authorized and unauthorized users

---

## EAP-489: Actions Dashboard: Filters Data Model, Vocabularies & Logic

**Tester:**   
**Test Date:**   

### Acceptance Criteria

[ ] Filter model supports all defined fields and persists state during the session
[ ] Multi-select and single-select filters update results immediately with no reload delay
[ ] Dynamic vocabularies populate filter options correctly from tenant configuration
[ ] Overdue and Review Required logic return accurate results
[ ] Permissions and visibility rules limit results to allowed scope
[ ] KPI cards remain unaffected by filter changes
[ ] QA confirms real-time response, logic accuracy, and correct AND/OR filter combinations across all groups

---

## EAP-490: Actions Dashboard: Filters Panel UI (Accordion, Controls & Global Actions)

**Tester:**   
**Test Date:**   

### Acceptance Criteria

[ ] Filters panel loads expanded by default and can collapse/expand smoothly
[ ] Accordion sections and all defined controls appear as specified
[ ] Active filter count badges display correctly per section
[ ] Multi-select and single-select dropdowns behave per design, including Select All/Clear All
[ ] DateRangePickers show correct format and allow range selection
[ ] "Show My Actions Only" and "Clear All" controls function as expected
[ ] All interactions are keyboard-accessible and pass ARIA validation
[ ] Panel styling and badges remain visually clear in both light and dark modes

---

## EAP-491: Actions Dashboard: Interaction, State Persistence & Results Integration

**Tester:**   
**Test Date:**   

### Acceptance Criteria

[ ] Results update instantly with filter changes
[ ] Filter counts, badges, and triggers reflect current selections accurately
[ ] Session persistence restores previous filter state correctly within the same session
[ ] Collapse/expand toggle functions smoothly and retains state
[ ] "Clear All" resets all filters and results to default view
[ ] Filters remain compatible with search and all view modes
[ ] No visible lag when updating filters on large datasets
[ ] QA validates logic accuracy, accessibility, and performance in light and dark themes

---

## EAP-466: Actions Dashboard: Company Structure Chart (Actions by Hierarchy Level)

**Tester:**   
**Test Date:**   

### Acceptance Criteria

[ ] Chart accurately displays open actions per company structure level with proper status segmentation
[ ] Each status (Incomplete, Under Review, Overdue) uses the correct color coding and appears in the legend
[ ] Hover tooltips show detailed breakdown per bar with correct counts
[ ] Overdue actions are not double-counted and appear in red segments only
[ ] Chart layout adapts smoothly to desktop, tablet, and mobile views
[ ] Data source reflects actual open actions; completed/cancelled are excluded
[ ] Dark mode appearance follows PRD color scheme and accessibility standards
[ ] Chart rendering performance remains stable across different tenant sizes

---

## EAP-467: Actions Dashboard: Status Timeline Chart (Open Actions Over Time)

**Tester:**   
**Test Date:**   

### Acceptance Criteria

[ ] The chart displays open actions by date, categorized into open/in_progress/pending_approval/overdue
[ ] Overdue actions appear as a distinct red line segment overlayed
[ ] Hovering over the chart reveals tooltips showing breakdown by status and total count
[ ] Completed and cancelled actions are excluded from data aggregation
[ ] Data refresh reflects the last 30 days of real-time information
[ ] Legend labels correctly map to chart colors and are accessible
[ ] Chart resizes gracefully across screen resolutions
[ ] Dark mode visuals align with PRD color scheme, maintaining readability and accessibility

---

## EAP-468: Actions Dashboard: Chart Interactivity & Legends (Tooltips, Hover States, Accessibility)

**Tester:**   
**Test Date:**   

### Acceptance Criteria

[ ] Legends render with correct labels and colors for all categories on both charts
[ ] Hovering a series/segment shows a tooltip with correct breakdown; keyboard focus produces the same info
[ ] Non-active series are visually de-emphasized during hover/focus; active target is clearly highlighted
[ ] Screen readers announce chart titles and categories; legend items/segments are navigable and described
[ ] Tooltips do not clip off-screen and adapt position based on viewport edges
[ ] Dark mode maintains readable text and compliant contrast for legends and tooltips
[ ] QA verifies identical interactivity across both charts with real dashboard data

---

## EAP-469: Actions Dashboard: Chart Data Rules & Source Logic

**Tester:**   
**Test Date:**   

### Acceptance Criteria

[ ] Charts always display using live, backend-derived data for the logged-in tenant
[ ] Metrics remain stable when user applies or clears filters in "All Actions"
[ ] No mock data or static counts are used in production builds
[ ] Overdue and status-based logic matches the PRD definitions
[ ] Company Structure chart excludes completed/cancelled items and prevents duplicate counting for overdue actions
[ ] Charts handle empty datasets gracefully with a "No data available" message
[ ] QA verifies data parity between charts and the full "All Actions" list when filters are reset

---

## EAP-483: Actions Dashboard: Filters, Search & View Controls

**Tester:**   
**Test Date:**   

### Acceptance Criteria

[ ] Filter Sidebar loads expanded by default and collapses/expands with animation
[ ] Filters apply correctly and combine using AND/OR logic as defined
[ ] "Show My Actions Only" limits results to actions assigned to the current user
[ ] "Clear All" resets all filters and refreshes the dataset instantly
[ ] Active filter counts display correctly per accordion section and update dynamically
[ ] Search filters actions in real time by ID, title, description, or people fields
[ ] Result count updates accurately with each change
[ ] View selector switches between Table, Card, and Map views seamlessly without losing applied filters or search
[ ] Filter, search, and view selections persist through session navigation
[ ] UI fully supports keyboard navigation, screen readers, and dark mode color contrasts
[ ] QA confirms that filter logic, accessibility, and responsiveness behave as specified in both light and dark themes

---

## EAP-485: Actions Dashboard: List Views (Table & Card) + Workflow Buttons

**Tester:**   
**Test Date:**   

### Acceptance Criteria

[ ] Table view displays all actions with correct columns, data formatting, and dynamic updates
[ ] Sorting defaults to Due Date ascending; verified in QA with varied datasets
[ ] Card view matches color-coding and layout rules from PRD, adapting responsively on mobile
[ ] Inline workflow buttons perform transitions as per PRD rules, show correct tooltips, and disable during API calls
[ ] Row/card clicks open the Action Detail Drawer; inline buttons never trigger unintended navigation
[ ] All updates (completion, review, rejection) reflect immediately in both views without refresh
[ ] Filters, search, and view mode persist between Table ↔ Card transitions
[ ] UI validated for light/dark mode parity, WCAG 2.1 AA color contrast, and keyboard navigation
[ ] QA confirms end-to-end role-based workflow transitions behave identically across Table and Card views

---

## EAP-486: Actions Dashboard: Map View with Marker Interactions

**Tester:**   
**Test Date:**   

### Acceptance Criteria

[ ] Switching to Map view displays markers for all currently filtered actions with valid coordinates; permissions and scope are respected
[ ] Marker colors match the priority/overdue rules and legend
[ ] Map auto-centers/zooms to include all markers; panning/zooming is user-controllable afterward
[ ] Clicking a marker opens an Info Window with the required fields and actionable workflow buttons; row/card navigation is not triggered
[ ] Performing a workflow action updates the action state and UI; the Info Window closes on success and marker color/status updates if applicable
[ ] Legend is visible and correctly explains marker color meanings
[ ] A warning panel appears when filtered results contain actions without coordinates, listing up to 3 and linking to their detail
[ ] If map configuration is unavailable, a styled fallback list appears and the app remains fully usable (no hard errors)
[ ] Map view respects dark mode styling and supports keyboard navigation and tooltips/ARIA for interactive elements
[ ] QA validates parity of results between Map, Table, and Card views under identical filters and confirms correct behavior across common scenarios (overdue changes, reassignment, approval/rejection)

---

## EAP-487: Actions Dashboard: Action Detail Drawer (View-Only Mode)

**Tester:**   
**Test Date:**   

### Acceptance Criteria

[ ] Clicking an action from Table/Card/Map opens the drawer with correct data for that action
[ ] Drawer displays all specified sections (badges, description, grids, people, org/location paths, timeline)
[ ] "Action ID" and "Copy Link" are visible; copying produces a valid, shareable URL to the action
[ ] Fields are read-only; "Edit Action" is present but does not enter edit mode
[ ] Overdue dates are visually emphasized (red) per PRD; badges match status/priority
[ ] Drawer closes via X or backdrop, and focus returns to the element that opened it
[ ] Works consistently in light and dark modes; keyboard navigation and ARIA labels are in place
[ ] QA confirms parity of displayed data with the same action in Table/Card/Map views and no unintended navigation when interacting inside the drawer

---

## EAP-440: Trigger Review Workflow Based on Template Settings

**Tester:**   
**Test Date:**   

### Acceptance Criteria

[ ] Actions with review-enabled templates automatically move to Pending Review when marked Complete
[ ] Actions with no-review templates close immediately
[ ] Reviewer assignment is validated and populated correctly
[ ] System correctly displays review state transitions
[ ] All workflow state changes are logged in the audit trail

---

## EAP-441: Reviewer Notifications (Push + Email)

**Tester:**   
**Test Date:**   

### Acceptance Criteria

[ ] Reviewer receives one push and one email notification when a review-required action is marked Complete
[ ] Deep link opens the correct action after authentication if needed
[ ] No notifications are sent when review is not required
[ ] No errors occur when reviewer is missing; workflow still progresses to Pending Review
[ ] Review workflow remains functional even if notification delivery fails

---

## EAP-442: Reviewer Decisions: Approve or Reject (Mandatory Comment on Reject)

**Tester:**   
**Test Date:**   

### Acceptance Criteria

[ ] Reviewer can successfully approve an action → status becomes Reviewed/Approved and the action is closed
[ ] Reviewer can reject an action only after entering a rejection comment → status becomes Rejected and is returned to the responsible person
[ ] Decision, user, timestamp, and any rejection comment are captured in the audit trail
[ ] UI updates immediately to reflect the new status in both list and detail views
[ ] Behavior is consistent on web and mobile

---

## EAP-443: Resubmission of Rejected Actions

**Tester:**   
**Test Date:**   

### Acceptance Criteria

[ ] Rejected actions reappear in the user's My Actions dashboard for follow-up
[ ] Users can edit all relevant fields and add attachments before resubmitting
[ ] Resubmission updates the action's status and notifies the assigned reviewer
[ ] Audit history reflects the full rejection → resubmission → approval cycle
[ ] UI and inline editing behavior remain consistent with the My Actions epic features

---

## EAP-423: Create Action from Template

**Tester:**   
**Test Date:**   

### Acceptance Criteria

[ ] User can select from a set of pre-built templates when creating an action
[ ] The action automatically inherits organizational context (Company, Site, Location, Module) from the parent object
[ ] Action details (title, description, assigned person, due date) are entered during creation
[ ] Once created, the action appears in the system immediately and is linked to its parent

---

## EAP-424: Inline Editing & Status Updates

**Tester:**   
**Test Date:**   

### Acceptance Criteria

[ ] Inline editing is available for key fields such as title, description, due date, and responsible person
[ ] The default status of a new action is In Progress
[ ] To mark an action as Complete, the user must enter closure comments
[ ] All updates are saved automatically and reflected immediately

---

## EAP-425: File Upload for Evidence

**Tester:**   
**Test Date:**   

### Acceptance Criteria

[ ] A file upload option is available for each action
[ ] Files can be previewed or removed before final save
[ ] Uploaded files stay attached to the action record and can be accessed later
[ ] Multiple files can be uploaded if needed

---

## EAP-426: Parent-Child Relationship Tracking

**Tester:**   
**Test Date:**   

### Acceptance Criteria

[ ] Each action stores and displays a reference to its parent object
[ ] Users can navigate from an action to its parent with a single click
[ ] Parent-child relationships are visible in the UI and available for reporting
[ ] The link remains consistent even if the action is edited or reassigned

---

## EAP-427: Action Filtering and Search

**Tester:**   
**Test Date:**   

### Acceptance Criteria

[ ] An Action List View is available that displays all Actions visible to the logged-in user
[ ] Users can apply filters for key fields, including: Action Status (Open, In Progress, Completed, Reviewed), Responsible Person, Due Date (including overdue filter), Parent Object (Risk, Bowtie, Control Test, etc.)
[ ] Filters can be combined (e.g., Actions assigned to me + overdue)
[ ] A keyword search bar is available that searches across Action Title and Description fields
[ ] Filter and search results are displayed in real-time, with no data loss when switching between filters
[ ] The system should remember active filters until cleared by the user

---

## EAP-428: Action Dashboard Metrics

**Tester:**   
**Test Date:**   

### Acceptance Criteria

[ ] A dashboard widget is available for "Actions Overview"
[ ] The widget includes: Total number of Actions (by state: Open, In Progress, Completed, Reviewed), Count of overdue Actions, displayed prominently in red, Completion percentage (Completed vs. total)
[ ] Data is filterable by: Company, Site, and Responsible Person
[ ] Managers can drill down from a metric into the Action List filtered by that state
[ ] Metrics refresh automatically to reflect the most recent Action data
[ ] Dashboard presentation is clear and visually distinguishes between normal and high-risk situations (e.g., overdue)

---

## EAP-429: Mandatory Closure Comment on Completion

**Tester:**   
**Test Date:**   

### Acceptance Criteria

[ ] Attempting to mark an action as Complete without a closure comment triggers a validation message
[ ] A closure comment must be successfully saved before the status can update to Complete
[ ] Closure comments appear in the audit log and are retrievable through the Action Details view
[ ] Behaviour is consistent across web and mobile
[ ] Validation integrates seamlessly with the existing inline editing workflow

---

## EAP-435: Define Action Status Model & Lifecycle States

**Tester:**   
**Test Date:**   

### Acceptance Criteria

[ ] Statuses and transitions behave exactly as defined for each template type
[ ] Required fields (Implementation Details, Closure Comments) are enforced at the right transitions
[ ] Completion Date, Review Date, Reviewer populate as per transitions
[ ] Rejected sends the action back to In Progress and requires a rejection reason
[ ] Status changes are reflected immediately in list and detail views and captured for auditing/reporting
[ ] No orphaned states or circular transitions are possible

---

## EAP-423: Create Action from Template

**Parent Epic:** EAP-421  
**Tester:**   
**Test Date:**   

### Acceptance Criteria

[ ] User can select from a set of pre-built templates when creating an action
[ ] The action automatically inherits organizational context (Company, Site, Location, Module) from the parent object
[ ] Action details (title, description, assigned person, due date) are entered during creation
[ ] Once created, the action appears in the system immediately and is linked to its parent

---

## EAP-424: Inline Editing & Status Updates

**Parent Epic:** EAP-421  
**Tester:**   
**Test Date:**   

### Acceptance Criteria

[ ] Inline editing is available for key fields such as title, description, due date, and responsible person
[ ] The default status of a new action is In Progress
[ ] To mark an action as Complete, the user must enter closure comments
[ ] All updates are saved automatically and reflected immediately

---

## EAP-425: File Upload for Evidence

**Parent Epic:** EAP-421  
**Tester:**   
**Test Date:**   

### Acceptance Criteria

[ ] A file upload option is available for each action
[ ] Files can be previewed or removed before final save
[ ] Uploaded files stay attached to the action record and can be accessed later
[ ] Multiple files can be uploaded if needed

---

## EAP-426: Parent-Child Relationship Tracking

**Parent Epic:** EAP-421  
**Tester:**   
**Test Date:**   

### Acceptance Criteria

[ ] Each action stores and displays a reference to its parent object
[ ] Users can navigate from an action to its parent with a single click
[ ] Parent-child relationships are visible in the UI and available for reporting
[ ] The link remains consistent even if the action is edited or reassigned

---

## EAP-440: Trigger Review Workflow Based on Template Settings

**Parent Epic:** EAP-439  
**Tester:**   
**Test Date:**   

### Acceptance Criteria

[ ] Actions with review-enabled templates automatically move to Pending Review when marked Complete
[ ] Actions with no-review templates close immediately
[ ] Reviewer assignment is validated and populated correctly
[ ] System correctly displays review state transitions
[ ] All workflow state changes are logged in the audit trail

---

## EAP-441: Reviewer Notifications (Push + Email)

**Parent Epic:** EAP-439  
**Tester:**   
**Test Date:**   

### Acceptance Criteria

[ ] Reviewer receives one push and one email notification when a review-required action is marked Complete
[ ] Deep link opens the correct action after authentication if needed
[ ] No notifications are sent when review is not required
[ ] No errors occur when reviewer is missing; workflow still progresses to Pending Review
[ ] Review workflow remains functional even if notification delivery fails

---

## EAP-442: Reviewer Decisions: Approve or Reject (Mandatory Comment on Reject)

**Parent Epic:** EAP-439  
**Tester:**   
**Test Date:**   

### Acceptance Criteria

[ ] Reviewer can successfully approve an action → status becomes Reviewed/Approved and the action is closed
[ ] Reviewer can reject an action only after entering a rejection comment → status becomes Rejected and is returned to the responsible person
[ ] Decision, user, timestamp, and any rejection comment are captured in the audit trail
[ ] UI updates immediately to reflect the new status in both list and detail views
[ ] Behavior is consistent on web and mobile

---

## EAP-443: Resubmission of Rejected Actions

**Parent Epic:** EAP-439  
**Tester:**   
**Test Date:**   

### Acceptance Criteria

[ ] Rejected actions reappear in the user's My Actions dashboard for follow-up
[ ] Users can edit all relevant fields and add attachments before resubmitting
[ ] Resubmission updates the action's status and notifies the assigned reviewer
[ ] Audit history reflects the full rejection → resubmission → approval cycle
[ ] UI and inline editing behavior remain consistent with the My Actions epic features

---
