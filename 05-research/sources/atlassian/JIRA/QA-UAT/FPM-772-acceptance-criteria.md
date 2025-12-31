# Acceptance Criteria: FPM-772 - Inspections Module

**JIRA Issue:** https://forwood.atlassian.net/browse/FPM-772  
**Extracted Date:** 2025-12-17  
**Issue Hierarchy:**
- FPM-772: Inspections Module
  - EAP-609: Inspections Admin & Configuration V2
    - EAP-612: Inspections Module Admin Module Configuration & Compliance Rules
    - EAP-649: Checklist Library Integration & Discoverability
    - EAP-650: Inspection Forms Management & Pro Forma / Inspector Role
  - EAP-610: Inspections User Workflow, Metrics & Response View
  - EAP-652: Generic Module Framework – Dynamic FeatureSet Routing
    - EAP-706: Access Module Landing Page via Dynamic Route
    - EAP-707: Access Module Landing Page Without Forms
    - EAP-708: View Form Response List via Dynamic Route
    - EAP-709: Fill Forms via Dynamic Module Context
    - EAP-710: Access Form Builder via Dynamic Route

---

## FPM-772: Inspections Module

**Tester:**   
**Test Date:**   

### Acceptance Criteria

#### Module Structure & Navigation

[ ] An Inspections module exists within the platform’s module suite
[ ] A primary navigation item exists to launch the Inspections module
[ ] Inspections appears in Settings → Module Configuration
[ ] Selecting Inspections from primary navigation launches a standardised module framework consistent with Critical Control Verifications
[ ] The Inspections landing screen includes a top‑level metrics panel
[ ] The Inspections landing screen includes a search and filter panel enabling users to refine visible inspection records
[ ] The Inspections landing screen includes a list/table of available inspection forms beneath the metrics
[ ] Clicking any metric in the metrics panel opens the Inspection Response View following the Critical Control Verifications interaction model
[ ] The Inspection Response View uses the standard module framework with inspection‑specific columns and compliance behaviour

#### Inspection Checklists (Checklist Library)

[ ] Users can create inspection checklists via the Checklist Library
[ ] Checklists can be added/attached to an inspection form
[ ] Checklists are linked to company structure
[ ] Checklists are linked to a physical location
[ ] Linking checklists to risks or controls is optional
[ ] Existing Checklist Builder functionality remains unchanged unless explicitly overridden for Inspections

#### Inspection Forms (Form Builder + Pro Forma)

[ ] Users can navigate to Settings → Module Configuration → Inspections
[ ] Selecting “Create New Form” auto‑loads the default inspection Pro Forma template
[ ] Users can configure inspection form metadata using the Form Builder
[ ] Users can add questions to inspection forms using the Form Builder

#### Module Configuration Settings

[ ] Administrators can define response-level compliance rules to determine whether an inspection is Compliant or Non‑Compliant
[ ] Compliance rules apply across inspection forms and are referenced in module metrics and the response view
[ ] Administrators can define response-level rules that enforce the requirement for an action to be created based on specific responses
[ ] Enforce Action rules are applied across the inspection module
[ ] Administrators can define response-level rules that enforce the requirement for a comment to be created based on specific responses
[ ] Enforce Comment rules are applied across the inspection module

#### Module Framework & Metrics

[ ] Opening the Inspections module displays the standardised module framework views used across the platform
[ ] Metrics panel includes “Number of Inspections Completed”
[ ] Metrics panel includes “Number of Inspections Compliant”
[ ] Metrics panel includes “Number of Inspections Non‑Compliant”
[ ] Metrics panel includes “Number of Inspections with Open Actions”
[ ] Clicking any metric opens the inspection Response View filtered accordingly

#### Response View Requirements (Inspections)

[ ] Response View includes columns: Form Name, User, Status, Compliance, Actions
[ ] Compliance column displays a status label: “Compliant” or “Non‑Compliant”
[ ] Compliance column displays a Score value on the line below the status label
[ ] Score displays as “Compliant items / Total items (Percentage)”
[ ] Compliance status is determined solely by the inspection’s configured compliance rules (not by Score)
[ ] Score numerator equals count of checklist items whose responses meet the inspection’s Compliant criteria
[ ] Score denominator equals total number of checklist items answered within the inspection
[ ] Score percentage equals numerator ÷ denominator and is shown to one decimal place where applicable
[ ] Example formatting is supported (e.g., “81 / 87 (93.1%)”)

#### Inspection Pro Forma Template (Inspection Details)

[ ] Default Inspection Details Pro Forma exists and is used for Inspection forms
[ ] Pro Forma includes 11 metadata fields
[ ] Pro Forma includes Company Structure field (dropdown org structure)
[ ] Pro Forma includes Site/Physical Location field (dropdown from company structure)
[ ] Pro Forma includes Geo‑Location field (auto‑captured lat/long; user editable)
[ ] Pro Forma includes Start Date field (date picker)
[ ] Pro Forma includes Start Time field (time picker)
[ ] Pro Forma includes Inspector field (user select)
[ ] Pro Forma includes Assisting Inspector(s) field (multi‑select user directory)
[ ] Pro Forma includes Submitted By field (system field)
[ ] Pro Forma includes Submission Date & Time field (system field)
[ ] Pro Forma includes Device Type / Platform field (system field)
[ ] Pro Forma includes Inspection ID field (system‑generated ID)

#### Reporting

[ ] Users can access Reporting from primary navigation, then select Inspections from secondary navigation
[ ] Reporting charts and tables for Inspections are rendered via QuickSight dashboards

#### Copy, Labels, and Terminology

[ ] No UI copy/labels/titles within Inspections refer to “Verification”, “Verification Forms”, or verification‑specific behaviours
[ ] Interaction models align with established platform frameworks for modules, forms, and templates

#### Mobile Strategy (V1)

[ ] V1 Inspections experience is responsive and online-only via the web platform

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

## EAP-609: Inspections Admin & Configuration V2

**Tester:**   
**Test Date:**   

### Acceptance Criteria

[ ] Admins can access Inspections configuration and update compliance, action, and comment rules
[ ] Saved configuration is applied consistently across all inspection forms and responses
[ ] Checklists remain reusable across modules, with proper linking options and improved discoverability
[ ] Admins can create, edit, duplicate, and manage inspection forms using the default Pro Forma
[ ] Inspector job role is available in visibility settings in Form Builder
[ ] Updating module settings does not impact Verifications functionality

---

## EAP-612: Inspections Module Admin Module Configuration & Compliance Rules

**Tester:**   
**Test Date:**   

### Acceptance Criteria

[ ] Inspections appears under Module Configuration and opens an admin-only configuration page
[ ] Compliance, Enforce Action, and Enforce Comment rules can be created, edited, and saved successfully
[ ] Saved module settings apply to newly submitted inspection responses
[ ] Compliance status in inspections is determined by module rules, not score calculations
[ ] No regressions occur in Verification module behaviour
[ ] Configuration UI works on desktop and mobile responsive layouts

---

## EAP-649: Checklist Library Integration & Discoverability

**Tester:**   
**Test Date:**   

### Acceptance Criteria

[ ] Inspection forms can attach any checklist from the Checklist Library
[ ] Checklist metadata (structure, location, optional risk/control) is displayed and usable during selection
[ ] Existing Checklist Builder behaviour continues to function with no breaking changes
[ ] A discoverability method (tags or filters) allows users to easily locate checklists relevant to Inspections
[ ] Checklists remain reusable across modules and selectable in Form Builder for Inspection forms

---

## EAP-650: Inspection Forms Management & Pro Forma / Inspector Role

**Tester:**   
**Test Date:**   

### Acceptance Criteria

[ ] Admins can view, create, edit, duplicate, and archive inspection forms in the Inspections configuration page
[ ] New forms load the full Inspection Pro Forma with all metadata fields pre-populated
[ ] Form Builder supports adding questions and attaching checklists as expected
[ ] The Inspector job role category is available in all role-based visibility dropdowns
[ ] All form actions function correctly and match established module configuration patterns

---

## EAP-610: Inspections User Workflow, Metrics & Response View

**Tester:**   
**Test Date:**   

### Acceptance Criteria

[ ] Users can access the Inspections module and see the metrics, filters, and forms list
[ ] Selecting a form launches a full inspection form workflow
[ ] Clicking any metric opens the correctly filtered Response View
[ ] Response View shows Compliant/Non-Compliant status and Score exactly as described
[ ] Compliance behaviour is driven by module settings and stays consistent across metrics, list, and response view
[ ] All new Inspections behaviour is isolated from Verifications

---

## EAP-652: Generic Module Framework – Dynamic FeatureSet Routing

**Tester:**   
**Test Date:**   

### Acceptance Criteria

[ ] Visiting `/app/{featureSetKey}` correctly loads the module using featureSet configuration rather than hardcoded routes
[ ] Module landing page displays based on the loaded module config
[ ] Form response list view loads and behaves correctly under the generic route
[ ] Form builder page loads correctly using the generic routing mechanism
[ ] No duplicated code exists for Verifications vs. Inspections routes
[ ] Generic implementation is ready to support the next new module’s development (Inspections or Safety Interactions)
[ ] Existing Verifications functionality continues to work using the new route format

---

## EAP-706: Access Module Landing Page via Dynamic Route

**Tester:**   
**Test Date:**   

### Acceptance Criteria

[ ] Given a module exists with featureSet configuration and `isFormEnabled=true`, when a user navigates to `/app/inspections`, then the system displays the module landing page with metrics panel, filter panel, and forms card grid
[ ] Given a module has `isFormEnabled=true`, when the landing page loads, then the forms card grid displays all published forms for that module
[ ] Given a module has `isFormEnabled=false`, when the landing page loads, then the system displays a “coming soon” message instead of the metrics panel, filter panel, and forms card grid
[ ] Given a module has a specific route handler defined, when a user navigates to `/app/safety`, then the system uses the specific route handler instead of the generic handler
[ ] Given a module does not have a specific route handler defined, when a user navigates to `/app/{featureSetKey}`, then the system falls back to the generic route handler
[ ] Given the Verifications module exists, when a user navigates to `/app/verifications` using the new dynamic route, then the page displays identically to the previous hardcoded route implementation

---

## EAP-707: Access Module Landing Page Without Forms

**Tester:**   
**Test Date:**   

### Acceptance Criteria

[ ] Given a module exists with `isFormEnabled=false`, when a user navigates to `/app/{featureSetKey}`, then the system displays a “coming soon” message
[ ] Given a module has `isFormEnabled=false`, when the landing page loads, then the system does not display metrics panel, filter panel, or forms card grid
[ ] Given a module has `isFormEnabled=false`, when a user navigates to the module, then the “coming soon” message is clearly visible and appropriately styled

---

## EAP-708: View Form Response List via Dynamic Route

**Tester:**   
**Test Date:**   

### Acceptance Criteria

[ ] Given a module has form responses, when a user navigates to `/app/{featureSetKey}/responses`, then the system displays the form response list view with all responses for that module
[ ] Given different modules have different compliance data display requirements, when viewing responses for each module, then the compliance data is displayed according to that module's specific requirements
[ ] Given the Verifications module has existing responses, when a user navigates to `/app/verifications/responses` using the new dynamic route, then the response list displays identically to the previous hardcoded route implementation

---

## EAP-709: Fill Forms via Dynamic Module Context

**Tester:**   
**Test Date:**   

### Acceptance Criteria

[ ] Given a user is on a module's landing page, when they select a form to fill, then the form renderer displays the form with the correct module context
[ ] Given a user fills out a form within a module context, when they submit the form, then the form response is correctly associated with that module's featureSet
[ ] Given the Verifications module has forms, when a user fills out a form using the new dynamic routing, then the form submission workflow works identically to the previous implementation

---

## EAP-710: Access Form Builder via Dynamic Route

**Tester:**   
**Test Date:**   

### Acceptance Criteria

[ ] Given a module admin has access to module settings, when they navigate to `/app/settings/modules/{featureSetKey}/form-builder/{formId}`, then the form builder page loads with the correct form and module context
[ ] Given the module settings page already uses dynamic routing, when a module admin creates or edits a form, then the form builder works correctly within the dynamic routing framework

---

**Note:** General Usability & Responsive Design section appears only once at the parent feature level, not for each child issue.




