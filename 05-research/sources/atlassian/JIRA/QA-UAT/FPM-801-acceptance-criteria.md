# Acceptance Criteria: FPM-801 - Form/Checklist/Question Versioning

**JIRA Issue:** https://forwood.atlassian.net/browse/FPM-801  
**Extracted Date:** 2025-01-27  
**Issue Hierarchy:**
- FPM-801: Form/Checklist/Question Versioning
  - EAP-379: Content Version Control
    - EAP-599: Update duplicate checklist logic with versioning
    - EAP-380: Checklist Draft-to-Published Versioning

## FPM-801: Form/Checklist/Question Versioning

**Tester:** [Leave blank]  
**Test Date:** [Leave blank]

### Acceptance Criteria

*No acceptance criteria specified in the parent issue description.*

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

## EAP-379: Content Version Control

**Tester:** [Leave blank]  
**Test Date:** [Leave blank]

### Acceptance Criteria

*No acceptance criteria specified in the epic description.*

---

## EAP-599: Update duplicate checklist logic with versioning

**JIRA Issue:** https://forwood.atlassian.net/browse/EAP-599

**Tester:** [Leave blank]  
**Test Date:** [Leave blank]

### Acceptance Criteria

[ ] Checklist loads properly by using MT
[ ] Checklist synced property from root to tenant
[ ] Checklist can be published has been synced as well
[ ] Block the root synced checklist from being edited (e.g., showing banner and disable the edit button)

---

## EAP-380: Checklist Draft-to-Published Versioning

**JIRA Issue:** https://forwood.atlassian.net/browse/EAP-380

**Tester:** [Leave blank]  
**Test Date:** [Leave blank]

### Checklist Status Management

#### Acceptance Criteria

[ ] Add `checklistStatus` field to Checklist model (DRAFT, PUBLISHED, ARCHIVED)
[ ] Support draft mode editing where checklists can be modified freely
[ ] Implement publish workflow that creates immutable checklist versions
[ ] Prevent modification of published checklists (create new draft instead)

### ChecklistVersion Table Implementation

#### Acceptance Criteria

[ ] Create `ChecklistVersion` table following Form versioning pattern
[ ] Store JSON schema of checklist structure at time of publishing
[ ] Include version number, creation audit fields, and checklist reference
[ ] Implement unique constraint on `(checklistId, version)` combination

### Draft-to-Published Workflow

#### Acceptance Criteria

[ ] Allow unlimited editing of checklists in DRAFT status
[ ] Publishing creates new ChecklistVersion record with incremented version
[ ] Published checklists become read-only and available for form inclusion
[ ] Support creating new draft from published version for further editing

### Form Integration

#### Acceptance Criteria

[ ] Forms reference specific checklist versions (not live checklists)
[ ] FormResponse data remains linked to the checklist version used at submission time
[ ] Ensure data integrity when checklists are updated after form creation
[ ] Support displaying correct checklist structure for historical form responses

### Version Management

#### Acceptance Criteria

[ ] Track which checklist version is currently published/active











