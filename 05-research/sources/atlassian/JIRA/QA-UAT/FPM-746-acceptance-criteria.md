# Acceptance Criteria: FPM-746 - Export - V1 Updates

**JIRA Issue:** https://forwood.atlassian.net/browse/FPM-746  
**Extracted Date:** 2025-01-27  
**Issue Hierarchy:**
- FPM-746: Export - V1 Updates
  - EAP-506: Bulk Export Framework: Multi-Record Filter-Based Export System
    - EAP-509: Bulk Export CSV Generation and File Output
    - EAP-507: Bulk Export: Export Entry Point and Configuration Modal

---

## FPM-746: Export - V1 Updates

**Tester:** [Leave blank]  
**Test Date:** [Leave blank]

### Acceptance Criteria

[ ] Export: Manual CSV (Transactional Data) functionality is available
[ ] Dynamic exports work with filters applied
[ ] Media files are excluded from CSV exports
[ ] A link back to the form response is included in the CSV export
[ ] Export: Individual Records functionality is available (Simple PDF or CSV format)

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
[ ] Export modal maintains proper sizing and centering across all resolutions
[ ] Export button remains accessible and properly sized at all resolutions
[ ] Date picker in export modal functions correctly at all resolutions
[ ] Export job status display is readable and functional at all resolutions

---

## EAP-506: Bulk Export Framework: Multi-Record Filter-Based Export System

**Tester:** [Leave blank]  
**Test Date:** [Leave blank]

### Export Entry Point

[ ] Export button is always-visible in the Responses list header
[ ] Export button has green primary styling with hover states supporting light/dark themes
[ ] Export button is fully keyboard navigable and screen-reader accessible
[ ] Clicking Export button opens the Export Configuration Modal

### Export Configuration Modal

[ ] Modal displays current filter summary (status, compliance, date range) with icons
[ ] Modal shows total record count based on active filters
[ ] Date range selection includes Last 7 Days, Last 30 Days (default), and Custom Range options
[ ] Custom Range option shows date picker when selected
[ ] Custom Range pre-fills using any existing filter values
[ ] Format selection shows CSV as available and Excel as coming soon (non-interactive)
[ ] Cancel and Export buttons have visual feedback for selected options
[ ] Modal has proper z-index and works in light and dark modes
[ ] Modal is accessible with focus trap, ESC to close, labelled controls, and descriptive button text

### Filter-Based Export Logic

[ ] Export uses current filter state (status, compliance, company, location, date range)
[ ] Export defaults to Last 30 Days if no date range specified
[ ] Export exports all matching records, not only visible page
[ ] Backend query matches frontend filter behavior
[ ] UI provides clear summary of what will be exported

### Export Job Creation and Tracking

[ ] API creates ExportJob record with PENDING status and metadata
[ ] Job is processed asynchronously and returns job ID to frontend
[ ] Job tracks states: PENDING → PROCESSING → COMPLETED or FAILED
[ ] Real-time progress updates are provided via polling
[ ] Job allows cancellation while processing
[ ] Download link is provided when job is complete
[ ] Helpful error messages are displayed for failed jobs

### Job Status Display

[ ] Floating component shows job progress, record count, and file size estimate
[ ] Icons and color states display for Pending, Processing, Completed, Failed, Cancelled states
[ ] Download, Cancel, and Dismiss actions are available
[ ] Component auto-updates and disappears after completion

### CSV Generation

[ ] CSV includes 15 standard columns: ID, Form Name, Status, Compliant, Verifier, Company, Location, Created Date, Updated Date, Completed Date, Total Actions, Open Actions, In Progress Actions, Completed Actions, Completion %
[ ] Proper headers and consistent ordering are present
[ ] Special characters are escaped and null/undefined values are handled safely
[ ] Dates are in ISO format and booleans are rendered as "Yes" / "No"
[ ] File naming follows pattern: verification-export-{timestamp}.csv

### Frontend Integration

[ ] ExportModal and ExportJobStatus components work in Card, Table, and Map views
[ ] Visual consistency is maintained with other action buttons

### Non-Functional Requirements

[ ] Export of ≤ 1000 records completes in < 30 seconds
[ ] Responsive performance is < 500 ms for modal interactions
[ ] Secure JWT authentication and tenant isolation are enforced
[ ] Feature works on Chrome, Firefox, Safari (light / dark modes)
[ ] WCAG 2.1 AA keyboard and focus compliance is met

---

## EAP-509: Bulk Export CSV Generation and File Output

**Tester:** [Leave blank]  
**Test Date:** [Leave blank]

### CSV Structure

[ ] CSV uses the platform export schema for verification responses with exactly fifteen columns in this order: ID, Form Name, Status, Compliant, Verifier, Company, Location, Created Date, Updated Date, Completed Date, Total Actions, Open Actions, In Progress Actions, Completed Actions, Completion %
[ ] Column labels match the schema labels exactly
[ ] Column order matches the schema order exactly

### Data Formatting

[ ] Special characters are escaped, including commas, quotes, and newlines
[ ] Dates use ISO format
[ ] Boolean values are rendered as "Yes" and "No"
[ ] Null or undefined values are handled gracefully as empty cells
[ ] Numeric columns remain numeric where applicable

### File Output

[ ] File naming follows the pattern verification-export-{timestamp}.csv with timestamp in sortable format
[ ] Download URL is returned when the job is completed
[ ] Record count and file size estimate are included in job metadata when available

### Integration with Job Flow

[ ] CSV uses the same filtered dataset as the export job
[ ] File is generated once the job enters the processing state
[ ] Job is updated to "completed" with download URL upon success
[ ] Job is set to "failed" with appropriate error message if generation fails

### Performance and Compatibility

[ ] CSV generation meets success targets for 100 and 500 record exports
[ ] Exported file opens correctly in both Excel and Google Sheets
[ ] File does not include extra header rows or trailing delimiters

### Security and Privacy

[ ] Tenant isolation and user ownership are respected for all downloads
[ ] No additional fields outside the fifteen defined columns are included in the export
[ ] Only the job owner within the tenant can download the file

---

## EAP-507: Bulk Export: Export Entry Point and Configuration Modal

**Tester:** [Leave blank]  
**Test Date:** [Leave blank]

### Export Button (UI Specs)

[ ] Export button is located in top-right of Responses list header, next to filter controls
[ ] Button label is "Export"
[ ] Button has green primary styling with hover states supporting light and dark modes
[ ] Button is keyboard navigable and screen-reader accessible
[ ] Clicking button opens the Export Configuration Modal

### Export Configuration Modal (UI Specs)

[ ] Modal layout is centered dialog, approximately 500px width
[ ] Modal header displays "Export Responses" with close button
[ ] Filter summary section shows active filters (status, compliance, date range) with icons, positioned above record count
[ ] Total records section displays prominent count of rows to be exported based on current filters
[ ] Date range selector shows three options side-by-side: Last 7 Days, Last 30 Days (default), Custom Range
[ ] Custom Range option shows date picker when selected
[ ] Custom Range pre-fills using any existing date filters if applied
[ ] Format selector shows CSV as available now and Excel as coming soon (non-interactive)
[ ] Actions section has Cancel (left) and Export (right) buttons with visual feedback for selected options
[ ] Modal has proper z-index and works in light and dark modes
[ ] Modal is accessible with focus trap, ESC to close, labelled controls, and descriptive button text

### Behavior and Data Handoff

[ ] Modal displays record count computed from current filter state
[ ] On Export, payload includes current filters, chosen date range, and format (CSV)
[ ] Export does not require row selection; exports are filter-based across all pages
[ ] Cancel closes modal without side effects
[ ] Successful Export proceeds to job creation flow

### Permissions and Security

[ ] Button respects authentication and is rendered only for authorized users per existing module access
[ ] Tenant isolation is respected in record count and filter summary

### Performance and Usability

[ ] Open/close interactions and option changes respond within 500ms
[ ] No layout shift occurs during interactions
[ ] Smooth focus transitions are present
[ ] Consistent styles are maintained across browsers

---

