# JIRA Acceptance Criteria Extraction Prompt

## Use Case

Use this prompt when extracting acceptance criteria from a JIRA issue and all its child issues for product and design team quality assurance testing. This is useful for creating comprehensive test plans that cover all features and sub-features in a hierarchical issue structure, with a focus on testable criteria that product and design teams can validate.

## Context

This prompt guides the extraction of acceptance criteria from JIRA issues, including recursive extraction from all child issues at any depth level. The output is formatted as a structured markdown document suitable for product/design QA testing with:
- Checkbox format for each acceptance criteria item (for tracking completion)
- Testing information fields (Tester and Test Date) positioned at the top of each section
- Focus on testable, observable criteria that product and design teams can validate
- General usability and responsive design criteria included for each feature

## Prompt Text

Extract acceptance criteria from the JIRA issue following this structure:

### 1. Fetch the JIRA Issue

- Extract the issue key from the provided JIRA URL
- Fetch the issue details using the Atlassian MCP tools
- Identify the issue type, summary, and description

### 2. Extract Acceptance Criteria from Parent Issue

- Look for acceptance criteria in the issue description
- Common formats include:
  - Sections titled "Acceptance Criteria", "AC", "Test Criteria"
  - Bullet points or numbered lists under acceptance criteria headings
  - Checkboxes or task lists
- Extract all acceptance criteria statements
- **Focus on testable criteria**: Prioritize criteria that are observable, measurable, and can be validated by product/design teams through direct interaction with the feature
- Convert all acceptance criteria to checkbox format: `[ ]` (empty checkbox) for each item
- Note any categories or groupings within the acceptance criteria

### 3. Recursively Extract from Child Issues

- Identify all child issues (subtasks, child features, etc.)
- For each child issue:
  - Fetch the issue details
  - Extract acceptance criteria using the same method
  - Recursively process any children of that child issue
- Continue until all levels of the hierarchy are processed
- Maintain the hierarchical structure in the output

### 4. Organize and Categorize

- Group acceptance criteria by:
  - Parent issue and child issue hierarchy
  - Feature categories (if specified in the issues)
  - Component or functional area
- Preserve the relationship between parent and child issues
- If an issue has multiple categories, maintain those groupings

### 5. Format Output

Create a markdown file with the following structure:

```markdown
# Acceptance Criteria: [Parent Issue Key] - [Parent Issue Summary]

**JIRA Issue:** [URL]
**Extracted Date:** [Current Date]
**Issue Hierarchy:**
- [Parent Issue Key]: [Summary]
  - [Child Issue Key]: [Summary]
    - [Grandchild Issue Key]: [Summary]
    ...

## [Parent Issue Key]: [Parent Issue Summary]

**Tester:** [Leave blank]  
**Test Date:** [Leave blank]

### Acceptance Criteria

[ ] [First acceptance criteria item]
[ ] [Second acceptance criteria item]
[ ] [Third acceptance criteria item]

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

## [Child Issue Key]: [Child Issue Summary]

**Tester:** [Leave blank]  
**Test Date:** [Leave blank]

### Acceptance Criteria

[ ] [First acceptance criteria item]
[ ] [Second acceptance criteria item]

---

[Repeat for each child issue, maintaining hierarchy]

**Note:** General Usability & Responsive Design section appears only once at the parent feature level, not for each child issue.
```

### 6. Handle Categories Within Features

If acceptance criteria are grouped into categories within a single issue:

**Note:** If this is the parent feature issue, include the General Usability & Responsive Design section. If this is a child issue, do not include it (General Usability appears only at the parent level).

```markdown
## [Parent Issue Key]: [Parent Issue Summary]

**Tester:** [Leave blank]  
**Test Date:** [Leave blank]

### [Category Name 1]

#### Acceptance Criteria

[ ] [First criteria for this category]
[ ] [Second criteria for this category]

### [Category Name 2]

#### Acceptance Criteria

[ ] [First criteria for this category]
[ ] [Second criteria for this category]

### General Usability & Responsive Design

[ ] [Usability criteria as specified above]
```

### 7. Include General Usability & Responsive Design Criteria

Include a "General Usability & Responsive Design" section **only once at the parent feature level** (not for each child issue or category). Base the criteria on the feature type, but always include:

**Core Responsive Design:**
- Layout responsiveness across screen sizes (desktop, tablet/iPad)
- UI element resizing when browser window is resized
- Usable layout at minimum supported resolution
- Modal and dialog sizing and centering
- Text readability and overflow prevention
- Touch target sizes (44x44px minimum on tablet)
- Navigation accessibility at all resolutions
- No horizontal scrolling at supported resolutions
- Smooth vertical scrolling

**Visual and Interaction:**
- Loading states and progress indicators
- Error messages and validation feedback visibility
- Icon and image scaling without distortion
- Consistent spacing and padding across screen sizes
- Dropdown menus and select lists not cut off
- Tooltips and help text positioning

**Testing Scenarios:**
- Common desktop resolutions (1920x1080, 1366x768, 1280x720)
- Tablet resolutions (iPad: 1024x768, 2048x1536; iPad Pro: 2732x2048)
- Browser window resizing from maximum to minimum
- Browser zoom levels (100%, 125%, 150%, 75%)
- Content visibility (no hidden or cut-off content)
- Interactive element accessibility at minimum sizes
- Cross-browser consistency at same resolution

**Feature-Specific Adaptations:**
- For form builders: canvas layout, component library panel, properties panel, drag-and-drop operations
- For dashboards: data grid readability, chart scaling, widget resizing
- For modals/dialogs: proper sizing, centering, content overflow handling
- For navigation: menu accessibility, toolbar functionality, collapse/expand behavior

### 8. File Naming and Location

- **Directory:** `05-research/sources/atlassian/JIRA/QA-UAT/`
- **Filename:** `[Issue-Key]-acceptance-criteria.md` (e.g., `FPM-642-acceptance-criteria.md`)
- Create the QA-UAT directory if it doesn't exist

## Parameters

- `jira_url`: The full JIRA issue URL (e.g., `https://forwood.atlassian.net/browse/FPM-642`)
- `output_directory`: Optional override for output directory (defaults to `05-research/sources/atlassian/JIRA/QA-UAT/`)

## Expected Output

A markdown file containing:
- Complete issue hierarchy (parent and all children)
- All acceptance criteria extracted from each issue, formatted as checkboxes `[ ]`
- Focus on testable, observable criteria that product/design teams can validate
- Categories preserved if they exist within issues
- Testing information sections (Tester and Test Date fields) positioned at the top of each section (near the heading)
- General Usability & Responsive Design section **only once at the parent feature level** with comprehensive testable criteria (not repeated for child issues)
- Proper markdown formatting with clear hierarchy
- Links back to original JIRA issues

## Implementation Notes

- Use Atlassian MCP tools to fetch issue data
- Handle cases where issues have no acceptance criteria
- Handle cases where child issues don't exist
- Convert all acceptance criteria items to checkbox format: `[ ]` (empty checkbox)
- Focus on extracting testable criteria that can be validated through direct interaction
- Position Testing Information (Tester and Test Date) immediately after the section heading, before Acceptance Criteria
- Include General Usability & Responsive Design section **only once at the parent feature level** with relevant testable criteria (not repeated for child issues)
- Customize usability criteria based on the feature type (e.g., form builders, dashboards, modals, etc.)
- Preserve markdown formatting in acceptance criteria (if present)
- Extract issue keys and summaries accurately
- Maintain proper indentation for hierarchical structure

## Related Commands

- `extract-jira-acceptance-criteria` - Command that uses this prompt

## Related Methodology

- [Research Template](../../templates/research-template.md) - Research document structure
- [Discovery Process](../../methodology/discovery-process.md) - Product discovery methodology

