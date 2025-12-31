# Form Builder (FPM-753) - Comprehensive Testing Checklist

**Feature:** Form Builder  
**JIRA Issue:** [FPM-753](https://forwood.atlassian.net/browse/FPM-753)  
**Target Release:** Oculus V1 Soft Commercial Launch  
**Created:** 2025-12-05

---

## Overview

This document aggregates all acceptance criteria and testing requirements from FPM-753 (Form Builder) and all its child epics and stories. Use this checklist to ensure the feature is ready for launch.

---

## 1. Form Creation & Module-Scoped Management (EAP-384)

### 1.1 Create New Form Modal (EAP-385) ✅ Done

**Acceptance Criteria:**
- [ ] "Create New Form" modal can be launched from module configuration page via "Create New Form" button
- [ ] Modal fields include:
  - [ ] Form Title (required, max 120 characters)
  - [ ] Company Structure (required dropdown)
  - [ ] Site/Physical Location (required dropdown, filtered by selected Company Structure where applicable)
  - [ ] Job Role Category (required dropdown, filtered by selected Site where applicable)
  - [ ] Form Description (≤2,000 characters)
- [ ] Submit button is disabled until all required fields are completed
- [ ] Inline validation displayed for any invalid or missing required fields on submit
- [ ] On successful Save, new draft form is created in backend via API with entered metadata
- [ ] After successful creation, user is navigated to Form Builder canvas for new draft, with header metadata pre-populated
- [ ] Cancel closes modal and returns user to previous view without creating draft
- [ ] Form name uniqueness is enforced within module

**Additional Testing:**
- [ ] Test with various Company Structure hierarchies
- [ ] Test dropdown filtering (Site filtered by Company Structure, Job Role filtered by Site)
- [ ] Test character limits (title max 120, description max 2,000)
- [ ] Test validation error messages are clear and helpful
- [ ] Test navigation flow after form creation

### 1.2 Draft Creation and Editing (EAP-386)

**Acceptance Criteria:**
- [ ] When creating new form, it is saved with status = "Draft"
- [ ] Draft forms can be opened in Form Builder for further editing
- [ ] Changes to draft are saved explicitly (direct save method - user deliberately choosing to save)
- [ ] Drafts remain invisible to end-users until published
- [ ] Editing a draft does not affect any previously published versions
- [ ] Versioning is displayed in UI (e.g., "v1 Draft," "v1 Published")

**Additional Testing:**
- [ ] Test unsaved changes protection (prompt before leaving)
- [ ] Test draft persistence across browser sessions
- [ ] Test that drafts are not visible in end-user forms list
- [ ] Test version numbering increments correctly

### 1.3 Load Existing Forms (EAP-387) ✅ Done

**Acceptance Criteria:**
- [ ] Forms are listed in module configuration with metadata (Name, Version, Status, Last Modified)
- [ ] Selecting a form loads its structure into Form Builder canvas
- [ ] Draft forms are editable
- [ ] Published forms are view-only by default, with option to create new draft version from them
- [ ] System enforces versioning (e.g., editing published form creates "v2 Draft")
- [ ] Any unsaved changes prompt confirmation before leaving builder

**Additional Testing:**
- [ ] Test loading forms with various component types
- [ ] Test creating draft from published form preserves all data
- [ ] Test view-only mode for published forms
- [ ] Test confirmation modal appears when leaving with unsaved changes

### 1.4 Publishing Forms (EAP-388)

**Acceptance Criteria:**
- [ ] From Form Builder, admin can select Publish for a draft form
- [ ] System validates required fields/components before allowing publish
- [ ] Once published, form status changes to Published and becomes visible to end-users in that module
- [ ] Previous published versions are archived but still viewable for audit/history
- [ ] System assigns version tag (e.g., v1, v2, etc.) and displays it in form list
- [ ] Confirmation modal shown before publishing
- [ ] Cannot publish if Proforma is missing (with clear error message)

**Additional Testing:**
- [ ] Test publishing with missing required components
- [ ] Test publishing with invalid form structure
- [ ] Test version tag assignment and display
- [ ] Test that published forms are visible to end-users
- [ ] Test that previous published versions are archived correctly
- [ ] Test Proforma validation on publish

### 1.5 Forms List Management (EAP-389)

**Acceptance Criteria:**
- [ ] Forms list displays all forms for a module with metadata: Name, Version, Status (Draft/Published/Archived), Last Modified, Owner
- [ ] Admin can:
  - [ ] Duplicate an existing form (creates new draft copy)
  - [ ] Archive a published form (removes from end-user view, but retains for history)
  - [ ] Unpublish a published form (reverts status to Draft if allowed by rules)
- [ ] Archived forms are not available to end-users but remain visible to admins in list
- [ ] Clear visual indicators for status (Draft, Published, Archived)
- [ ] All actions require confirmation modal before execution
- [ ] Changes update instantly in forms list

**Additional Testing:**
- [ ] Test duplicate creates exact copy with all components
- [ ] Test archive removes from end-user view
- [ ] Test unpublish workflow
- [ ] Test visual status indicators are clear and consistent
- [ ] Test confirmation modals for destructive actions
- [ ] Test list refresh after actions

---

## 2. Form Canvas & Sections Management (EAP-390)

### 2.1 Add and Edit Sections (EAP-391)

**Acceptance Criteria:**
- [ ] Admin can click "Add Section" to insert new section on canvas
- [ ] Each section includes:
  - [ ] Editable title (inline editing)
  - [ ] Placeholder area for adding components
- [ ] Sections appear in order they are created
- [ ] Sections are saved when form is saved (direct save method)
- [ ] Admin can edit section titles at any time
- [ ] UI matches mockups (clean container boxes with labels)

**Additional Testing:**
- [ ] Test adding multiple sections
- [ ] Test inline title editing
- [ ] Test section persistence after save
- [ ] Test UI styling matches design system

### 2.2 Reorder Sections (EAP-392)

**Acceptance Criteria:**
- [ ] Admin can reorder sections using arrow controls (Up/Down/Top/Bottom)
- [ ] Move modal available for cross-section moves
- [ ] Section order updates instantly in canvas
- [ ] New order is persisted when saving form
- [ ] Visual indicator shows target location during move
- [ ] Order updates reflected in preview and published form

**Additional Testing:**
- [ ] Test arrow controls (Up/Down/Top/Bottom)
- [ ] Test move modal for complex reordering
- [ ] Test drag-and-drop (if implemented as extension)
- [ ] Test order persistence
- [ ] Test preview reflects correct order

### 2.3 Delete Sections (EAP-393)

**Acceptance Criteria:**
- [ ] Each section includes Delete option (icon or menu)
- [ ] Clicking delete prompts confirmation modal ("Are you sure? This will remove the section and its components")
- [ ] Confirming removes section and all contained components
- [ ] Section removal persisted to backend when saved
- [ ] Deleted section no longer appears in preview or published form

**Additional Testing:**
- [ ] Test deletion with components inside section
- [ ] Test confirmation modal prevents accidental deletion
- [ ] Test deletion persistence
- [ ] Test that deleted sections don't appear in preview

### 2.4 Section Autosave (EAP-394)

**Note:** Based on comments, direct save is priority, but section-level autosave may still be needed. Verify with team.

**Acceptance Criteria:**
- [ ] Any section change (add, edit title, reorder, delete) triggers autosave event (if implemented)
- [ ] Autosave occurs within a few seconds of change (if implemented)
- [ ] Visual indicator (e.g., "All changes saved" message) confirms save success
- [ ] If save fails, user sees error notification with retry option
- [ ] Autosave updates persisted to backend and reflected on reload

**Additional Testing:**
- [ ] Test autosave timing
- [ ] Test save success indicators
- [ ] Test error handling and retry
- [ ] Test persistence across reloads

### 2.5 Section Validation (EAP-395)

**Acceptance Criteria:**
- [ ] Section titles cannot be left blank (system prompts user to enter name)
- [ ] Duplicate section titles within same form trigger warning/error
- [ ] Validation runs when saving or publishing
- [ ] Errors clearly shown inline next to section
- [ ] Validation prevents publishing until resolved

**Additional Testing:**
- [ ] Test blank title validation
- [ ] Test duplicate title detection
- [ ] Test inline error display
- [ ] Test publish blocking with validation errors

---

## 3. Integration of Form Components and Checklist Library (EAP-396)

### 3.1 Component Library Access (EAP-397) ✅ Done

**Acceptance Criteria:**
- [ ] "Component Library" panel accessible from Form Canvas
- [ ] Library lists all available components
- [ ] Components grouped by type
- [ ] Each component has preview and short description
- [ ] Library UI responsive and works within form builder layout

**Additional Testing:**
- [ ] Test library panel opens/closes correctly
- [ ] Test component grouping
- [ ] Test component previews
- [ ] Test responsive layout

### 3.2 Insert Components from Library (EAP-398) ✅ Done

**Acceptance Criteria:**
- [ ] Components from library can be dragged and dropped into any section of form canvas
- [ ] Alternatively, clicking "Add" on component inserts it into currently selected section
- [ ] Inserted components appear immediately in canvas with default properties
- [ ] Once on canvas, components support same behaviors: edit, validation, delete
- [ ] Components saved/restored with form via normal Save Draft / Publish flow
- [ ] Placement of inserted components persisted to backend and restored on reload

**Additional Testing:**
- [ ] Test drag-and-drop insertion
- [ ] Test click-to-add insertion
- [ ] Test component appears with defaults
- [ ] Test component persistence
- [ ] Test component restoration on reload

### 3.3 Configure Component Properties (EAP-399)

**Acceptance Criteria:**
- [ ] Inserted components can be selected and edited directly on form canvas
- [ ] Editable properties depend on component type (label, placeholder, required/optional, default value, options for dropdowns)
- [ ] Changes immediately reflected in canvas preview
- [ ] Property changes saved when form is saved
- [ ] Validation rules ensure required properties (like labels) cannot be left blank
- [ ] Updated properties persisted to backend and restored on reload

**Additional Testing:**
- [ ] Test properties panel for each component type
- [ ] Test real-time preview updates
- [ ] Test property validation
- [ ] Test property persistence

### 3.4 Checklist Library Integration (EAP-400)

**Acceptance Criteria:**
- [ ] Checklist items available as part of component library
- [ ] Administrators can insert checklist templates into form sections
- [ ] Inserted checklist items retain their structure (questions, options, scoring if applicable)
- [ ] Checklist items can be reused across multiple forms without recreating them
- [ ] Changes to checklist in one form do not automatically update other forms using that checklist
- [ ] All checklist data persists in backend and restores on reload

**Additional Testing:**
- [ ] Test checklist insertion from library
- [ ] Test checklist structure preservation
- [ ] Test checklist isolation between forms
- [ ] Test checklist persistence

### 3.5 Component Version Control (EAP-401)

**Acceptance Criteria:**
- [ ] Each library item (component or checklist) has version number
- [ ] When new version of library item is published, administrators notified if their forms use older versions
- [ ] Administrators can choose to upgrade to latest version or keep existing one
- [ ] Version history maintained for auditing (who changed what and when)
- [ ] Updating version does not break existing forms; older versions remain functional

**Additional Testing:**
- [ ] Test version numbering
- [ ] Test upgrade notifications
- [ ] Test upgrade vs keep decision
- [ ] Test version history
- [ ] Test backward compatibility

### 3.6 Component Library Permissions (EAP-403)

**Acceptance Criteria:**
- [ ] Role-based permissions applied to component library (Admins = full access, Editors = insert/edit, Users = insert only)
- [ ] Unauthorized users cannot see options to edit or delete components
- [ ] Attempted unauthorized actions return clear error messages
- [ ] Permission model consistent across components and checklist items
- [ ] Access rules persisted in backend and enforced in UI

**Additional Testing:**
- [ ] Test admin permissions (full access)
- [ ] Test editor permissions (insert/edit)
- [ ] Test user permissions (insert only)
- [ ] Test unauthorized action error messages
- [ ] Test permission enforcement

---

## 4. Checklist Integration & Redlining (EAP-404)

### 4.1 Expand Checklist on Canvas (EAP-405) ✅ Done

**Acceptance Criteria:**
- [ ] Checklist components on canvas include expand/collapse control
- [ ] Expanding reveals full list of checklist questions in structured layout
- [ ] Collapsing hides questions but preserves checklist container
- [ ] Questions displayed reflect current saved state of checklist
- [ ] Expanding does not allow editing at this stage

**Additional Testing:**
- [ ] Test expand/collapse functionality
- [ ] Test question display accuracy
- [ ] Test state preservation

### 4.2 Redline Toggle Controls (EAP-406)

**Acceptance Criteria:**
- [ ] Each checklist question includes redline toggle (checkbox or switch)
- [ ] Toggled questions display numbered red badge for clear identification
- [ ] Redline state reflected in form preview as well as canvas
- [ ] Multiple questions can be redlined at once, with badges numbering sequentially
- [ ] Redline status persists when saved and restored when form is reloaded

**Additional Testing:**
- [ ] Test redline toggle functionality
- [ ] Test numbered badge display
- [ ] Test preview reflection
- [ ] Test multiple redlines
- [ ] Test persistence

### 4.3 Critical Question Indicators (EAP-407) ✅ Done

**Acceptance Criteria:**
- [ ] Each checklist question can be marked as "Critical" via toggle or option
- [ ] Critical questions display red warning icon next to question text
- [ ] Critical indicator visible on both canvas and preview
- [ ] Critical status saved with checklist and persists when reloaded
- [ ] Validation ensures at least one critical question is allowed but not required

**Additional Testing:**
- [ ] Test critical toggle
- [ ] Test warning icon display
- [ ] Test visibility in canvas and preview
- [ ] Test persistence

### 4.4 Edit Checklist Modal (EAP-408)

**Acceptance Criteria:**
- [ ] Each checklist component on canvas includes "Edit" option
- [ ] Selecting "Edit" opens modal displaying checklist's full set of questions
- [ ] Within modal, administrators can add, edit, delete, and reorder questions
- [ ] Critical and redline indicators can also be managed within modal
- [ ] All changes made in modal saved and reflected back on canvas and preview
- [ ] Modal includes save and cancel options

**Additional Testing:**
- [ ] Test modal opens correctly
- [ ] Test question management in modal
- [ ] Test critical/redline management
- [ ] Test save/cancel functionality
- [ ] Test canvas/preview updates

---

## 5. Form Questions, Info Blocks & File Upload (EAP-409)

### 5.1 Multiple Question Types (EAP-410) ✅ Done

**Acceptance Criteria:**
- [ ] Administrators can insert following question types from component library:
  - [ ] Dropdown (single choice from list)
  - [ ] Single-select (radio buttons)
  - [ ] Multi-select (checkboxes)
  - [ ] Short text (single-line input)
  - [ ] Long text (multi-line input)
- [ ] Each question type displays correctly in canvas and preview
- [ ] Each question type persisted in backend and reloads correctly
- [ ] Placeholder/default text appears where relevant (e.g., "Enter text here")
- [ ] All question types compatible with save workflow

**Additional Testing:**
- [ ] Test each question type insertion
- [ ] Test display in canvas
- [ ] Test display in preview
- [ ] Test persistence and reload
- [ ] Test placeholder text

### 5.2 Configure Question Properties (EAP-411)

**Acceptance Criteria:**
- [ ] Properties panel displays editable fields for each question type
- [ ] Supported properties include:
  - [ ] All question types: label, description/help text, required/optional toggle
  - [ ] Dropdown, single-select, multi-select: add, edit, delete, and reorder options
  - [ ] Short/long text: placeholder text, character limits
- [ ] Changes update in real time on canvas preview
- [ ] All property updates saved and persisted in backend
- [ ] Validation prevents saving question without label

**Additional Testing:**
- [ ] Test properties panel for each question type
- [ ] Test option management (add/edit/delete/reorder)
- [ ] Test real-time preview updates
- [ ] Test label validation
- [ ] Test property persistence

### 5.3 Info Block Component (EAP-412)

**Acceptance Criteria:**
- [ ] Administrators can insert Info Block from component library
- [ ] Properties panel includes:
  - [ ] Title (optional)
  - [ ] Rich-text editor (support for bold, italics, lists, links, etc.)
- [ ] Info Block displays correctly on canvas and in preview
- [ ] Info Blocks are non-interactive for respondents (read-only text only)
- [ ] Content saved and persists in backend

**Additional Testing:**
- [ ] Test Info Block insertion
- [ ] Test rich-text editor functionality
- [ ] Test display in canvas and preview
- [ ] Test read-only behavior for end-users
- [ ] Test content persistence

### 5.4 File Upload Component (EAP-413) ✅ Done

**Acceptance Criteria:**
- [ ] Administrators can insert File Upload component from component library
- [ ] Properties panel includes:
  - [ ] Title (required)
  - [ ] Description/help text (optional)
  - [ ] File size limit and allowed file types (basic configuration)
- [ ] On preview and published form, respondents see upload UI (button + file selector)
- [ ] Uploaded files show as list with filename and remove option
- [ ] Upload persists with form responses in backend
- [ ] Validation ensures required uploads must be attached before form submission

**Additional Testing:**
- [ ] Test File Upload component insertion
- [ ] Test properties configuration
- [ ] Test upload UI in preview
- [ ] Test file upload functionality
- [ ] Test file list display
- [ ] Test file removal
- [ ] Test required upload validation
- [ ] Test file size limits
- [ ] Test file type restrictions

---

## 6. Proforma (Module-Required Block) (EAP-414) ✅ Done

### 6.1 Auto-Insert Proforma (EAP-415) ✅ Done

**Acceptance Criteria:**
- [ ] When new form is created, system checks module context (e.g., Risk, Incident, Audit)
- [ ] Correct Proforma block for that module automatically inserted into form canvas
- [ ] Proforma placed at top of form by default
- [ ] Proforma block visually distinct from normal form components
- [ ] Proforma persisted as soon as form is created

**Additional Testing:**
- [ ] Test Proforma insertion for each module type
- [ ] Test Proforma placement (default top, but movable)
- [ ] Test visual distinction (tinted background, lock icon, "Mandatory" label)
- [ ] Test persistence

### 6.2 Lock Proforma Fields (EAP-416) ✅ Done

**Acceptance Criteria:**
- [ ] Proforma block cannot be deleted from form canvas
- [ ] Proforma fields cannot be edited in Properties panel (label, type, validation locked)
- [ ] Non-editable fields display as read-only with lock icon or equivalent indicator
- [ ] Any attempt to delete or edit shows tooltip/notification: "Proforma fields are managed and cannot be modified"
- [ ] Locked state persists consistently

**Additional Testing:**
- [ ] Test deletion prevention
- [ ] Test edit prevention
- [ ] Test read-only display
- [ ] Test lock icon/indicator
- [ ] Test error messages/tooltips
- [ ] Test Proforma can be repositioned (moved within form)

### 6.3 Proforma Publishing Validation

**Acceptance Criteria (from Epic):**
- [ ] Attempting to publish without valid Proforma is blocked with clear message
- [ ] Proforma metadata available to reporting/filters

**Additional Testing:**
- [ ] Test publish blocking without Proforma
- [ ] Test clear error message
- [ ] Test Proforma data in reporting
- [ ] Test Proforma data in filters

---

## 7. Preview Functionality

**From Epic Descriptions and Comments:**

**Acceptance Criteria:**
- [ ] Real-time preview available with desktop/mobile toggle
- [ ] Mobile preview shows iPhone 14 device frame
- [ ] Preview shows redline visibility
- [ ] Section-by-section navigation with Next/Back buttons
- [ ] Preview reflects all form components accurately
- [ ] Preview updates in real-time as form is edited
- [ ] Desktop preview works (form editor is desktop-only, but should work on iPad/tablet resolutions)

**Additional Testing:**
- [ ] Test desktop preview
- [ ] Test mobile preview toggle
- [ ] Test mobile device frame
- [ ] Test redline visibility in preview
- [ ] Test section navigation
- [ ] Test real-time updates
- [ ] Test preview accuracy for all component types
- [ ] Test preview on tablet/iPad resolutions

---

## 8. Form Builder Performance & UX

**From Epic Descriptions:**

**Acceptance Criteria:**
- [ ] Builder handles 200+ components smoothly
- [ ] Preview launches quickly
- [ ] Form Canvas loads after creating or opening form
- [ ] Unsaved changes prompt confirmation before leaving canvas
- [ ] UI styling aligns with design system and mockups
- [ ] Form editor works on desktop and tablet/iPad resolutions (mobile too small)

**Additional Testing:**
- [ ] Test performance with large forms (200+ components)
- [ ] Test preview load time
- [ ] Test canvas load time
- [ ] Test unsaved changes protection
- [ ] Test responsive design (desktop, tablet)
- [ ] Test design system compliance

---

## 8.5 General Usability & Responsive Design

**Acceptance Criteria:**
- [ ] Layout is responsive and adapts to different screen sizes (desktop, tablet/iPad)
- [ ] All UI elements resize appropriately when browser window is resized
- [ ] Form Builder canvas maintains usable layout at minimum supported resolution (tablet/iPad)
- [ ] Component Library panel resizes and remains accessible at different screen sizes
- [ ] Properties panel resizes appropriately and doesn't overflow viewport
- [ ] Modals and dialogs are properly sized and centered on all supported resolutions
- [ ] Form sections and components maintain proper spacing and alignment when resized
- [ ] Text remains readable and doesn't overflow containers at any supported resolution
- [ ] Buttons and interactive elements maintain minimum touch target sizes (44x44px) on tablet
- [ ] Navigation elements (menus, toolbars) remain accessible and functional at all resolutions
- [ ] No horizontal scrolling required at supported resolutions
- [ ] Vertical scrolling works smoothly when content exceeds viewport height
- [ ] Form preview panel resizes appropriately and maintains aspect ratio
- [ ] Desktop/mobile preview toggle maintains proper layout when switched
- [ ] Drag-and-drop operations work correctly at all supported resolutions
- [ ] Inline editing (section titles, component labels) remains functional when resized
- [ ] Dropdown menus and select lists don't get cut off at screen edges
- [ ] Tooltips and help text remain visible and properly positioned
- [ ] Loading states and progress indicators display correctly at all resolutions
- [ ] Error messages and validation feedback remain visible and readable
- [ ] Form Builder maintains consistent spacing and padding across different screen sizes
- [ ] Icons and images scale appropriately without pixelation or distortion
- [ ] Tables and data grids (if used) maintain readability when resized
- [ ] Side panels (Component Library, Properties) can be collapsed/expanded appropriately
- [ ] Form canvas zoom (if implemented) works smoothly and maintains layout integrity

**Additional Testing:**
- [ ] Test layout at common desktop resolutions (1920x1080, 1366x768, 1280x720)
- [ ] Test layout at tablet resolutions (iPad: 1024x768, 2048x1536; iPad Pro: 2732x2048)
- [ ] Test browser window resizing from maximum to minimum supported size
- [ ] Test all modals and dialogs at different resolutions
- [ ] Test Component Library panel at various widths
- [ ] Test Properties panel with long content at different widths
- [ ] Test form canvas with many sections/components at different resolutions
- [ ] Test preview panel resizing and aspect ratio maintenance
- [ ] Test drag-and-drop accuracy at different resolutions
- [ ] Test touch interactions on tablet devices
- [ ] Test keyboard navigation at all resolutions
- [ ] Test form builder with browser zoom levels (100%, 125%, 150%, 75%)
- [ ] Test layout with different browser font size settings
- [ ] Test responsive breakpoints and transitions between layouts
- [ ] Test that no content is hidden or cut off at any supported resolution
- [ ] Test that all interactive elements remain clickable/tappable at minimum sizes
- [ ] Test form builder in split-screen/multi-window scenarios
- [ ] Test layout consistency across different browsers at same resolution

---

## 9. Permissions & Security

**From Epic Descriptions:**

**Acceptance Criteria:**
- [ ] Only admins/editors can edit forms; viewers can preview
- [ ] Role-based permissions enforced
- [ ] Unauthorized actions return clear error messages

**Additional Testing:**
- [ ] Test admin permissions
- [ ] Test editor permissions
- [ ] Test viewer permissions (preview only)
- [ ] Test unauthorized action handling

---

## 10. Audit & Telemetry

**From Epic Descriptions:**

**Acceptance Criteria:**
- [ ] Create/update/delete actions logged
- [ ] Audit events captured for edits
- [ ] Telemetry tracks builder usage for UX improvements

**Additional Testing:**
- [ ] Test audit logging for form creation
- [ ] Test audit logging for form updates
- [ ] Test audit logging for form deletion
- [ ] Test audit logging for component changes
- [ ] Test telemetry data collection

---

## 11. Accessibility

**From Epic Descriptions:**

**Acceptance Criteria:**
- [ ] Accessibility baseline met
- [ ] Keyboard navigation works
- [ ] Screen reader compatibility
- [ ] ARIA labels where appropriate

**Additional Testing:**
- [ ] Test keyboard navigation
- [ ] Test screen reader compatibility
- [ ] Test ARIA labels
- [ ] Test color contrast
- [ ] Test focus indicators

---

## 12. Internationalization

**From Epic Descriptions:**

**Acceptance Criteria:**
- [ ] Labels & text support locales
- [ ] Preview can toggle locales (if implemented)

**Additional Testing:**
- [ ] Test locale support
- [ ] Test text translation
- [ ] Test preview locale toggle (if implemented)

---

## 13. Integration Testing

**Cross-Feature Testing:**

- [ ] Test form creation → editing → publishing → end-user visibility workflow
- [ ] Test form duplication → editing → publishing
- [ ] Test form archive → unpublish → republish
- [ ] Test component library → form insertion → property editing → save → publish
- [ ] Test checklist library → form insertion → redline → critical → edit modal → save → publish
- [ ] Test Proforma → form creation → reposition → save → publish
- [ ] Test all component types in single form
- [ ] Test form with multiple sections and multiple components per section
- [ ] Test form versioning (draft → publish → new draft from published)

---

## 14. Edge Cases & Error Handling

**Testing Scenarios:**

- [ ] Test form creation with network interruption
- [ ] Test save failure scenarios
- [ ] Test publish failure scenarios
- [ ] Test form loading with corrupted data
- [ ] Test form with maximum number of sections
- [ ] Test form with maximum number of components
- [ ] Test form with very long text in fields
- [ ] Test form with special characters in titles/descriptions
- [ ] Test concurrent editing (if applicable)
- [ ] Test browser back/forward navigation
- [ ] Test form deletion with active published version
- [ ] Test component library item deletion when used in forms

---

## 15. Browser & Device Compatibility

**Testing Matrix:**

- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] iPad/Tablet resolutions
- [ ] Desktop resolutions (various sizes)

---

## 16. Data Integrity & Persistence

**Testing Scenarios:**

- [ ] Test form data persistence across browser sessions
- [ ] Test form data persistence after logout/login
- [ ] Test form data backup/restore
- [ ] Test form data migration (if applicable)
- [ ] Test form response data collection
- [ ] Test form response data accuracy
- [ ] Test form response data reporting

---

## 17. Known Issues & Bugs (FPM-877)

**Epic:** PM QA - Bugs - Form Builder

- [ ] Review all bugs in FPM-877 epic
- [ ] Verify all bugs are resolved or documented
- [ ] Test bug fixes
- [ ] Test regression scenarios

**Current Known Issues:**
- [ ] EAP-611: MVP PM QA - Test to see if plug in still works (Backlog)

---

## 18. Launch Readiness Checklist

**Pre-Launch Verification:**

- [ ] All acceptance criteria met
- [ ] All critical bugs resolved
- [ ] Performance benchmarks met
- [ ] Accessibility requirements met
- [ ] Security review completed
- [ ] Documentation updated
- [ ] User training materials prepared
- [ ] Support team briefed
- [ ] Rollback plan prepared
- [ ] Monitoring/alerting configured

---

## Notes

- **Save Method:** Direct save (user deliberately choosing to save) is the priority. Section-level autosave may be implemented - verify with team.
- **Reordering:** Arrow controls (Up/Down/Top/Bottom) are priority. Drag-and-drop is nice-to-have extension.
- **Form Editor:** Desktop-only feature, but should work on iPad/tablet resolutions. Mobile resolutions too small.
- **Mobile Preview:** Should be available to show how form appears on mobile, even though editor is desktop-only.
- **Proforma:** Must be present and cannot be deleted. Can be repositioned within form.

---

## Related JIRA Issues

**Parent Feature:**
- [FPM-753](https://forwood.atlassian.net/browse/FPM-753) - Form Builder

**Child Epics:**
- [EAP-384](https://forwood.atlassian.net/browse/EAP-384) - Form Creation & Module-Scoped Management
- [EAP-390](https://forwood.atlassian.net/browse/EAP-390) - Form Canvas & Sections Management
- [EAP-396](https://forwood.atlassian.net/browse/EAP-396) - Integration of Form Components and Checklist Library
- [EAP-404](https://forwood.atlassian.net/browse/EAP-404) - Checklist Integration & Redlining
- [EAP-409](https://forwood.atlassian.net/browse/EAP-409) - Form Questions, Info Blocks & File Upload
- [EAP-414](https://forwood.atlassian.net/browse/EAP-414) - Proforma (Module-Required Block)
- [FPM-877](https://forwood.atlassian.net/browse/FPM-877) - PM QA - Bugs - Form Builder

---

**Document Status:** Ready for QA Testing  
**Last Updated:** 2025-12-05

