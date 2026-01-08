# Acceptance Criteria: FPM-751 - Proforma Templates

**JIRA Issue:** https://forwood.atlassian.net/browse/FPM-751  
**Extracted Date:** 2025-01-27  
**Issue Hierarchy:**
- FPM-751: Proforma Templates
  - EAP-561: Pro Forma Selection and User Interaction
    - EAP-647: Display Computed Risks/Controls in ProformaRenderPanel
    - EAP-564: Pro Forma Selector in Create Form Modal
    - EAP-563: Pro Forma - View Pro Formas Modal
    - EAP-562: Mandatory Pro Forma Selection Logic
  - EAP-558: Pro Forma Templates Foundations (Data and Seeding)
    - EAP-560: Pro Forma Seeding and Validation
    - EAP-559: Pro Forma Domain Model Implementation
  - EAP-318: Proforma Templates V1 - MVP remediation/tech debt
    - EAP-319: Assisting Verifier - Required field validation

## FPM-751: Proforma Templates

**Tester:** [Leave blank]  
**Test Date:** [Leave blank]

### Acceptance Criteria

[ ] Extend the module settings to display the available proformas for each module
[ ] Specify the fields in the proforma templates for Verifications, Inspections, Incidents, Safety Conversations, Safety Meetings (That will align with Safety+ and CRM)

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

## EAP-561: Pro Forma Selection and User Interaction

**JIRA Issue:** https://forwood.atlassian.net/browse/EAP-561

**Tester:** [Leave blank]  
**Test Date:** [Leave blank]

### Acceptance Criteria

[ ] Form creation automatically selects the single Pro Forma when only one exists for a module
[ ] Form creation requires explicit selection when multiple Pro Formas exist, and form submission is prevented without a selection
[ ] Attempting to select a Pro Forma belonging to another module returns the correct validation error
[ ] The View Pro Formas modal displays either a single template directly or a template switcher dropdown for Safety Coaching
[ ] Field ordering, labels, and field type badges are displayed correctly in all preview surfaces
[ ] Helper text for Risk(s) and Control(s) displays only in Verifications and does not appear in Safety Conversations or Safety Coaching
[ ] The Create Form modal displays the preview panel only after a Pro Forma is selected and shows correct field count and list
[ ] Attempting to create a form without selecting a Pro Forma (where required) results in a visible validation error message

---

## EAP-647: Display Computed Risks/Controls in ProformaRenderPanel

**JIRA Issue:** https://forwood.atlassian.net/browse/EAP-647

**Tester:** [Leave blank]  
**Test Date:** [Leave blank]

### Acceptance Criteria

[ ] Backend includes risks/controls in FormVersionSchema
[ ] Computed fields display in ProformaRenderPanel when displayRisksAndControls=true
[ ] Real-time updates as users answer checklist questions
[ ] Empty state shows helpful placeholder message
[ ] Visual distinction (blue styling, "Computed" badge)
[ ] Works for all modules (Verifications, Safety Conversations, etc.)
[ ] Comprehensive test coverage (backend + frontend)
[ ] Documentation updated

---

## EAP-564: Pro Forma Selector in Create Form Modal

**JIRA Issue:** https://forwood.atlassian.net/browse/EAP-564

**Tester:** [Leave blank]  
**Test Date:** [Leave blank]

### Acceptance Criteria

[ ] When creating a form in modules with a single Pro Forma, the selector auto-selects it and displays the preview panel without user input
[ ] When creating a form in modules with multiple Pro Formas, the selector shows a dropdown list and does not allow submission until a selection is made
[ ] Preview panel displays correct field order, field labels, field type badges, and helper text rules based on the module
[ ] Validation error is shown if the user attempts to submit without selecting a Pro Forma when multiple are available
[ ] UI and interaction behavior confirmed through frontend tests covering:
  [ ] Auto-select single template modules
  [ ] Multi-selection flow in Safety Coaching
  [ ] Correct field count and ordering in preview
  [ ] Required-validation error messaging

---

## EAP-563: Pro Forma - View Pro Formas Modal

**JIRA Issue:** https://forwood.atlassian.net/browse/EAP-563

**Tester:** [Leave blank]  
**Test Date:** [Leave blank]

### Acceptance Criteria

[ ] Opening the modal for a single-Pro-Forma module displays the correct Pro Forma immediately with no dropdown
[ ] Opening the modal for Safety Coaching displays a dropdown that correctly switches between the "Safety Meeting Details" and "Safety Conversation Details" Pro Formas
[ ] Field ordering, field labels, and field type badges match the seeded Pro Forma definition
[ ] Helper text is visible only for Risk(s) and Control(s) fields in the Verifications module and is absent in all other modules
[ ] UI behavior is validated through frontend tests confirming:
  [ ] Correct display in single vs. multiple template modules
  [ ] Correct field counts per module
  [ ] Correct helper text scoping
  [ ] Correct appearance in light and dark mode

---

## EAP-562: Mandatory Pro Forma Selection Logic

**JIRA Issue:** https://forwood.atlassian.net/browse/EAP-562

**Tester:** [Leave blank]  
**Test Date:** [Leave blank]

### Acceptance Criteria

[ ] Form creation automatically selects the single available Pro Forma when applicable
[ ] Form creation requires user selection when multiple Pro Formas exist and blocks submission if no selection has been made
[ ] Attempting to select or submit with a Pro Forma belonging to another module returns BadRequestException
[ ] Attempting to create a form when no Pro Formas exist returns NotFoundException
[ ] Backend service tests confirm correct selection behavior for:
  [ ] Single Pro Forma modules
  [ ] Multiple Pro Forma modules
  [ ] No Pro Forma available cases
  [ ] Cross-module validation enforcement
[ ] Create Form UI behavior aligns with validation rules (cannot submit without valid Pro Forma selection)

---

## EAP-558: Pro Forma Templates Foundations (Data and Seeding)

**JIRA Issue:** https://forwood.atlassian.net/browse/EAP-558

**Tester:** [Leave blank]  
**Test Date:** [Leave blank]

### Acceptance Criteria

[ ] Pro Forma and Pro Forma Element tables exist and reflect the required data model
[ ] All Pro Formas appear in the system with correct titles, field counts, ordering, and field types
[ ] Running seeds multiple times updates existing records without duplicates and removes any elements no longer defined
[ ] Safety Coaching correctly displays and stores two distinct Pro Formas (Meeting and Conversation)
[ ] Field labels and types match SafetyPlus specification, verified via automated validation script
[ ] Pro Formas do not expose delete or edit functionality in the platform, and attempts to delete programmatically return the defined business rule exception

---

## EAP-560: Pro Forma Seeding and Validation

**JIRA Issue:** https://forwood.atlassian.net/browse/EAP-560

**Tester:** [Leave blank]  
**Test Date:** [Leave blank]

### Acceptance Criteria

[ ] Running the seed process creates all shared InputFields and the complete set of Pro Formas with exact titles, field counts, labels, types, and ordering
[ ] Re-running the seed process performs updates without creating duplicate records and removes any orphaned elements
[ ] Safety Coaching presents two separate seeded Pro Formas (Meeting and Conversation) with distinct element identifiers
[ ] The validation script reports success for all modules when definitions match and fails with actionable output when any discrepancy exists

---

## EAP-559: Pro Forma Domain Model Implementation

**JIRA Issue:** https://forwood.atlassian.net/browse/EAP-559

**Tester:** [Leave blank]  
**Test Date:** [Leave blank]

### Acceptance Criteria

[ ] ProForma and ProFormaElement tables are created in the database schema with correct relationships
[ ] A Pro Forma can contain one or many ordered elements
[ ] A Pro Forma element correctly references either an InputField or a Question
[ ] Fetching Pro Formas by feature set returns the correct Pro Forma(s)
[ ] The schema aligns 1:1 with the PRD data model and supports later seeding without modification needed

---

## EAP-318: Proforma Templates V1 - MVP remediation/tech debt

**JIRA Issue:** https://forwood.atlassian.net/browse/EAP-318

**Tester:** [Leave blank]  
**Test Date:** [Leave blank]

### Acceptance Criteria

*No acceptance criteria specified in the epic description.*

---

## EAP-319: Assisting Verifier - Required field validation

**JIRA Issue:** https://forwood.atlassian.net/browse/EAP-319

**Tester:** [Leave blank]  
**Test Date:** [Leave blank]

### Acceptance Criteria

[ ] Only InputFields of type COMPANY, PHYSICAL_LOCATION, USER, and DATETIME are required
[ ] TEXT, NUMBER, MULTI_USER and GEO_LOCATION fields are optional
[ ] Required field validation works correctly for the specified field types
[ ] Optional field types do not trigger validation errors when left empty










