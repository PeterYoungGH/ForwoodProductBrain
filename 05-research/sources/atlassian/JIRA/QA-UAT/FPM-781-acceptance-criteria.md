# Acceptance Criteria: FPM-781 - Lists/variables

**JIRA Issue:** https://forwood.atlassian.net/browse/FPM-781  
**Extracted Date:** 2025-12-10  
**Issue Hierarchy:**
- FPM-781: Lists/variables
  - EAP-494: Lists & Variables: Access, Navigation & Permissions Framework
    - EAP-495: Lists & Variables: Settings Entry, Routing and Feature Flag Control
    - EAP-496: Lists & Variables: Role and Attribute-Based Permissions
    - EAP-497: Lists & Variables: Soft Delete and Dependency Validation
    - EAP-493: Lists and Variables Performance, Reliability & Accessibility Compliance
  - EAP-498: Lists & Variables: Lists Management overview create edit delete
    - EAP-499: Lists & Variables: Lists Overview Table with Search and Sort
    - EAP-500: Lists & Variables: Create and Edit List Drawer with Validation and Audit History
    - EAP-501: Lists and Variables: Delete List with Confirmation and Soft Delete Tracking
  - EAP-502: Lists and Variables: Item Management search crud reorder sort
    - EAP-503: Lists and Variables: Manage Items Table and CRUD Operations
    - EAP-504: Lists and Variables search highlight reorder and permanent sort
  - EAP-577: Lists in Forms Answer Source Integration
    - EAP-578: Implement Mode Switching Logic With Full State Preservation And Cross Type Stability
    - EAP-579: Render Answer Source Selector and Implement Manual Mode
    - EAP-580: Implement List Mode with List Selector and Preview Integration
    - EAP-581: Integrate Dynamic List Updates, Data Integrity Rules, Variable Resolution, Error Handling, and Performance Requirements

---

## FPM-781: Lists/variables

**Tester:** [Leave blank]  
**Test Date:** [Leave blank]

### Acceptance Criteria

[ ] Feature contains two prototypes: List and Variable Management Settings, and Lists in Forms
[ ] List and Variable Management Settings prototype is accessible via Settings → Lists & Variables
[ ] Lists in Forms prototype enables form authors to populate dropdown and multiple choice question options using either manually entered options or pre-defined lists
[ ] Both prototypes maintain backward compatibility with existing form builder functionality
[ ] Dynamic list updates propagate to all forms using the list without requiring form re-versioning
[ ] Historical responses remain unchanged when lists are updated or deleted
[ ] Variable resolution is applied on list items when rendering forms
[ ] Error handling provides clear feedback for invalid list IDs, missing variables, and data integrity issues
[ ] System handles large numbers of lists and variables efficiently
[ ] Lists and variables are managed in Settings with secure access controls
[ ] System can handle thousands of lists and variables without performance degradation

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

---

## EAP-494: Lists & Variables: Access, Navigation & Permissions Framework

**Tester:** [Leave blank]  
**Test Date:** [Leave blank]

### Acceptance Criteria

[ ] "Lists & Variables" appears under Settings → Configuration only when feature flag is active
[ ] Feature flag OFF → feature hidden from UI and routes blocked
[ ] Tenant Admins/Form Builders can perform all CRUD and reorder operations; others have read-only access
[ ] Restricted users see modify actions hidden or disabled
[ ] Soft delete requires confirmation and triggers dependency validation stub
[ ] Deleted lists are marked inactive but remain recoverable in backend data model (future phase)
[ ] Audit log records all delete actions with timestamp, user, and action details
[ ] Navigation, breadcrumbs, and permissions behave consistently across environments
[ ] ABAC attributes and hierarchy documented and approved for Phase 2

---

## EAP-495: Lists & Variables: Settings Entry, Routing and Feature Flag Control

**Tester:** [Leave blank]  
**Test Date:** [Leave blank]

### Acceptance Criteria

[ ] "Lists & Variables" navigation entry appears under Settings → Configuration only when feature flag is enabled
[ ] Feature flag disabled tenants cannot see or access any Lists & Variables routes
[ ] Direct route access when flag is disabled redirects to Settings root or displays an authorization message
[ ] Navigation matches other Configuration modules in structure, design, and breadcrumbs
[ ] Routing is functional across environments, with consistent URL paths and layouts
[ ] Tenant isolation confirmed; users cannot access data or routes outside their tenant scope
[ ] QA validation confirms correct feature flag and routing behavior for all tested roles

---

## EAP-496: Lists & Variables: Role and Attribute-Based Permissions

**Tester:** [Leave blank]  
**Test Date:** [Leave blank]

### Acceptance Criteria

[ ] Tenant Administrators can perform all CRUD, reorder, and sort actions successfully on all lists
[ ] Form Builders can perform all CRUD, reorder, and sort actions successfully on lists they created
[ ] Form Builders cannot modify or delete lists created by other users (API returns 403 Forbidden, UI controls hidden/disabled)
[ ] Restricted roles (Viewers) have read-only access with all modifying controls hidden or disabled
[ ] Modify permission automatically grants View access; View-only users cannot modify data
[ ] All permission checks enforced consistently at UI and API levels
[ ] Unauthorized modification attempts result in correct warning or access message (403 Forbidden for API, clear UI feedback)
[ ] Tenant data remains isolated; no cross-tenant visibility detected
[ ] ABAC attributes and permission hierarchy documented in detail for Phase 2 implementation

---

## EAP-497: Lists & Variables: Soft Delete and Dependency Validation

**Tester:** [Leave blank]  
**Test Date:** [Leave blank]

### Acceptance Criteria

[ ] Lists are soft deleted only, never permanently removed at this stage
[ ] Deletion shows a confirmation dialog and a success toast on completion
[ ] Dependency validation runs before deletion and blocks deletion when references exist, with clear messaging
[ ] Overview table, item counts, and state update immediately after deletion
[ ] All delete attempts are recorded in the audit trail with full context
[ ] Delete controls are inaccessible to users without modify permission
[ ] All actions are tenant scoped with no cross-tenant visibility

---

## EAP-493: Lists and Variables Performance, Reliability & Accessibility Compliance

**Tester:** [Leave blank]  
**Test Date:** [Leave blank]

### Acceptance Criteria

[ ] Lists up to 10 000 items perform smoothly with virtual and infinite scrolling
[ ] Search completes < 500 ms and UI remains responsive
[ ] Retry logic executes automatic retries with exponential backoff (3 attempts max: 300ms, 600ms, 1200ms delays) for transient failures
[ ] Retry logic properly distinguishes between transient failures (network timeouts, 5xx errors, 429 rate limiting) and non-transient failures (4xx client errors except 429, auth failures, validation errors)
[ ] Error messages appear via toasts only after all retry attempts are exhausted
[ ] Mock data matches specified interfaces and preserves state integrity
[ ] Keyboard navigation, focus visibility, and ARIA roles meet WCAG 2.1 AA standards
[ ] Chevron alternatives fully replicate drag-and-drop functionality
[ ] QA validates performance, reliability, and accessibility requirements across all supported devices and viewports

---

## EAP-498: Lists & Variables: Lists Management overview create edit delete

**Tester:** [Leave blank]  
**Test Date:** [Leave blank]

### Acceptance Criteria

[ ] Feature appears only when tenant flag is enabled and is hidden and routes blocked when disabled
[ ] Admin can see and use create edit delete actions on all lists
[ ] Form Builders can create lists and modify only their own lists (cannot edit/delete lists created by others)
[ ] View only users can browse search and sort but cannot access modify actions and cannot trigger modify endpoints
[ ] Overview table renders with specified columns widths sticky header right aligned actions list count and row click to Manage Items
[ ] Search by title and sort by Title Created Date Item Count work with clear active sort indicator and count indicator shows total and filtered numbers
[ ] Sort direction toggles correctly when clicking same column header twice (ascending/descending)
[ ] List titles must be unique case-insensitively within tenant scope (e.g., "Equipment Types" conflicts with "equipment types")
[ ] Original casing of list titles preserved for display purposes
[ ] Duplicate list titles (case-insensitive) are rejected with clear error message indicating case-insensitive conflict
[ ] Create and Edit drawers enforce required uniqueness (case-insensitive) and character limits show inline errors and character counts and on create success navigate to Manage Items
[ ] Edit drawer shows audit log newest first with relative time hover full date user and action icons within a scrollable area limited to 200 pixels in height
[ ] Delete shows confirmation performs dependency validation blocks when referenced with clear messaging and guidance and on success performs soft delete shows toast updates table and writes audit entry
[ ] API endpoints follow RESTful JSON API patterns with OpenAPI 3.0 specification and TypeScript type generation
[ ] API endpoints validate permissions and return 403 Forbidden for unauthorized actions
[ ] All list create edit delete actions write audit entries with timestamp user action type and descriptive details
[ ] Keyboard only navigation screen reader labels focus states and description hover behavior meet accessibility requirements
[ ] Initial load fetches 50 lists with infinite scroll thereafter and search interactions respond within 500 milliseconds

---

## EAP-499: Lists & Variables: Lists Overview Table with Search and Sort

**Tester:** [Leave blank]  
**Test Date:** [Leave blank]

### Acceptance Criteria

[ ] Table displays Title, Description, Item Count, Created, and Actions columns with correct widths and sticky header
[ ] Search and sort work accurately and complete within 500 milliseconds
[ ] Sort direction toggles correctly when clicking same column header twice (ascending/descending)
[ ] Visual indicators clearly show active sort column and direction
[ ] List count indicator correctly reflects total and filtered list counts
[ ] Hover and click behaviors function correctly and navigate to Manage Items view
[ ] Empty state and loading states appear as specified
[ ] Modify controls (Edit, Delete) visible only to authorized users (Admins on all lists, Form Builders on own lists)
[ ] Feature fully hidden when tenant flag is disabled
[ ] Accessibility and keyboard navigation requirements met
[ ] QA validation passes for all search, sort, flag, and role scenarios

---

## EAP-500: Lists & Variables: Create and Edit List Drawer with Validation and Audit History

**Tester:** [Leave blank]  
**Test Date:** [Leave blank]

### Acceptance Criteria

[ ] Drawer appears and functions consistently in both Create and Edit modes
[ ] Title field required, unique case-insensitively within tenant, ≤100 characters; Description optional, ≤500 characters
[ ] Original casing of list titles preserved for display purposes
[ ] Duplicate list titles (case-insensitive) are rejected with clear error message indicating case-insensitive conflict
[ ] Inline validation, error messages, and character counters behave correctly
[ ] On successful creation, list is saved, success toast shown, and user redirected to Manage Items view
[ ] Edit drawer updates list details and refreshes audit log below action buttons
[ ] Audit log entries show correct timestamp, user, action type, and order
[ ] Drawer accessible via keyboard and screen reader compliant
[ ] Modify permissions required for Create/Edit; Form Builders can only edit own lists
[ ] View-only users see read-only mode
[ ] Feature operates only when tenant flag enabled and hidden otherwise
[ ] QA validation passes all functional, accessibility, and performance checks

---

## EAP-501: Lists and Variables: Delete List with Confirmation and Soft Delete Tracking

**Tester:** [Leave blank]  
**Test Date:** [Leave blank]

### Acceptance Criteria

[ ] Confirmation dialog appears before any delete and blocks duplicate actions
[ ] Dependency validation runs before delete and blocks when references exist while listing the blocking forms
[ ] Successful delete performs soft delete only, shows success toast, and updates the overview table and counts immediately
[ ] All delete attempts success and blocked are recorded in the audit trail with timestamp, user, action type, and details, visible in the Edit List drawer audit log view
[ ] Delete action is available only to Tenant Administrators and Form Builders and hidden or disabled for others
[ ] All actions are tenant scoped and respect the tenant feature flag for visibility and access
[ ] Dialog and notifications meet accessibility requirements and are operable with keyboard and screen readers

---

## EAP-502: Lists and Variables: Item Management search crud reorder sort

**Tester:** [Leave blank]  
**Test Date:** [Leave blank]

### Acceptance Criteria

[ ] Modify users can add edit delete reorder and sort items successfully with validation and audit tracking
[ ] Item names must be unique case-insensitively within each list (e.g., "Hard Hat" conflicts with "hard hat")
[ ] Original casing of item names preserved for display purposes
[ ] Duplicate item names (case-insensitive) are rejected with clear error message indicating case-insensitive conflict
[ ] Search highlights matching text in real time without filtering
[ ] Table uses sticky header scrollable body and displays correct columns and actions
[ ] Add edit and delete show confirmation or success toasts and update item count immediately
[ ] Reorder operations complete within 200 milliseconds with visual feedback
[ ] Reorder and sort persist the new order and record audit log entries
[ ] Retry logic executes automatic retries with exponential backoff (3 attempts max: 300ms, 600ms, 1200ms delays) for transient failures
[ ] Retry logic properly distinguishes between transient failures (network timeouts, 5xx errors, 429 rate limiting) and non-transient failures (4xx client errors except 429, auth failures, validation errors)
[ ] Error messages appear via toasts only after all retry attempts are exhausted
[ ] All operations remain performant for large lists with virtual scrolling as needed
[ ] View only users can search and browse but cannot modify
[ ] Form Builders can only modify items within lists they created
[ ] Accessibility and keyboard operation fully supported for all actions

---

## EAP-503: Lists and Variables: Manage Items Table and CRUD Operations

**Tester:** [Leave blank]  
**Test Date:** [Leave blank]

### Acceptance Criteria

[ ] Add, edit, and delete actions work correctly for authorized users with validation and audit tracking
[ ] Item names must be unique case-insensitively within each list (e.g., "Hard Hat" conflicts with "hard hat")
[ ] Original casing of item names preserved for display purposes
[ ] Duplicate item names (case-insensitive) are rejected with clear error message indicating case-insensitive conflict
[ ] Table layout stable during operations, with sticky header and scrollable body
[ ] Add and edit forms show inline validation and success toasts
[ ] Delete requires confirmation, performs soft delete, and updates count immediately
[ ] All CRUD actions recorded in audit trail with accurate timestamp, user, and details
[ ] Operations perform within 500 milliseconds even for large datasets
[ ] View-only users can browse items but cannot modify them
[ ] Accessibility and keyboard navigation requirements fully met
[ ] Tenant flag and permissions enforced consistently across all actions

---

## EAP-504: Lists and Variables search highlight reorder and permanent sort

**Tester:** [Leave blank]  
**Test Date:** [Leave blank]

### Acceptance Criteria

[ ] Search highlights matches in real time across name description and ID without filtering
[ ] Users with modify permission can reorder via chevrons and drag and drop and the new order persists
[ ] Reorder operations complete within 200 milliseconds with visual feedback
[ ] Permanent sort actions A to Z and by Created Date oldest first permanently update the item order
[ ] Toasts appear after each permanent sort and all reorder and sort actions create audit entries
[ ] View only users cannot access reorder or permanent sort controls but can use search highlight
[ ] Form Builders can only reorder/sort items in lists they created
[ ] Search interactions complete within 500 milliseconds and remain stable with virtual scrolling
[ ] Accessibility requirements are met including keyboard alternatives focus retention and screen reader labels

---

## EAP-577: Lists in Forms Answer Source Integration

**Tester:** [Leave blank]  
**Test Date:** [Leave blank]

### Acceptance Criteria

[ ] Answer Source control appears only for dropdown, single select, and multi select question types
[ ] Manual mode behaves exactly as existing form builder manual options including editing, reordering, and removing options
[ ] List mode displays a searchable, selectable list of available lists and updates preview immediately when a list is selected
[ ] Switching from Manual to List and List to Manual preserves options correctly according to PRD rules
[ ] Form preview reflects the correct options for both modes in real time
[ ] List updates in Settings propagate to all form renders automatically without re saving or re versioning
[ ] Historical responses remain unchanged when lists are updated or deleted
[ ] Variable resolution is applied on list items when rendering forms and uses fallback when variables cannot resolve
[ ] Error states are displayed clearly to the form author or respondent with actionable guidance
[ ] Performance requirements are met for both the list selector and form rendering with large lists
[ ] Permissions logic prevents saving forms when list access is lost
[ ] Prototype behaviours function with mock data and console logging as defined

---

## EAP-578: Implement Mode Switching Logic With Full State Preservation And Cross Type Stability

**Tester:** [Leave blank]  
**Test Date:** [Leave blank]

### Acceptance Criteria

[ ] Switching Manual to List hides manual options editor and shows list selector immediately
[ ] Switching List to Manual restores manual options without loss and displays options in editable format
[ ] Converted list items appear in manual mode with correct ordering and labels
[ ] Answer source selection persists across question type changes
[ ] Form preview updates instantly on every mode switch
[ ] No data loss occurs during any mode switch
[ ] Read only mode disables switching and preserves display state
[ ] Performance remains smooth with no visible delay

---

## EAP-579: Render Answer Source Selector and Implement Manual Mode

**Tester:** [Leave blank]  
**Test Date:** [Leave blank]

### Acceptance Criteria

[ ] Answer Source selector appears only for dropdown, single select, and multi select question types
[ ] Manual is selected by default for all new questions and all existing questions
[ ] Manual options editor displays correctly with drag and drop reordering, option editing, and option removal
[ ] All manual option changes update the form preview in real time
[ ] Manual mode remains fully functional when switching between question types that support answer options
[ ] Existing forms load with Manual mode and display their saved options without any changes
[ ] Read only mode shows options without editing controls
[ ] Invalid manual states display appropriate validation messages
[ ] Performance remains smooth when editing or previewing manual options even with large option sets

---

## EAP-580: Implement List Mode with List Selector and Preview Integration

**Tester:** [Leave blank]  
**Test Date:** [Leave blank]

### Acceptance Criteria

[ ] The List selector appears only when List mode is active
[ ] The selector shows all available lists with names and descriptions
[ ] The selector supports searching and filtering when large numbers of lists exist
[ ] Selecting a list updates the form preview immediately with the correct items
[ ] A read only preview displays all list items with correct labels
[ ] Manual option editing controls are hidden in List mode
[ ] Missing or deleted lists display an appropriate validation message
[ ] Users without permission to access a list cannot save a question using that list
[ ] Large lists render quickly and remain responsive during selection and preview
[ ] Selected list ID persists through form saves and reloads

---

## EAP-581: Integrate Dynamic List Updates, Data Integrity Rules, Variable Resolution, Error Handling, and Performance Requirements

**Tester:** [Leave blank]  
**Test Date:** [Leave blank]

### Acceptance Criteria

[ ] When a form is rendered, list based questions display the most current list items without requiring any re save or re versioning
[ ] List resolution completes within acceptable performance targets and does not introduce UI delays
[ ] Historical responses remain unchanged even when list items are modified or deleted
[ ] Variables inside list items resolve correctly and reflect the most current values
[ ] Fallback values display when variable resolution fails
[ ] Missing, deleted, inaccessible, or empty lists show clear errors or warnings with appropriate actions available
[ ] Required questions using empty lists cannot be saved and display meaningful validation messages
[ ] Form fill remains functional despite list or variable errors
[ ] All dynamic updates appear instantly in both authoring and preview modes
[ ] Logging captures variable resolution issues and data integrity errors for review
[ ] All behaviour follows prototype rules when mock lists are used
[ ] Performance and stability meet the requirements defined in the PRD
[ ] All acceptance criteria across dynamic updates, data integrity, error handling, and performance are validated by QA








