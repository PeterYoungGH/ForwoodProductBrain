# Extract JIRA Acceptance Criteria

Extract acceptance criteria from a JIRA issue and all its child issues (recursively) and create a structured markdown file for QA/UAT testing.

## Usage

```
/extract-jira-acceptance-criteria <JIRA_URL>
```

## Parameters

- `JIRA_URL` (required): Full URL to the JIRA issue (e.g., `https://forwood.atlassian.net/browse/FPM-642`)

## Description

This command extracts all acceptance criteria from a JIRA issue and recursively extracts acceptance criteria from all child issues at any depth level. The output is formatted as a structured markdown document suitable for product and design team quality assurance testing. Each acceptance criteria item is formatted as a checkbox `[ ]` for tracking completion. General Usability & Responsive Design criteria are included once at the parent feature level only, not repeated for each child issue.

## Execution Steps

### Step 1: Load Prompt
- Read prompt file: `07-reference/prompts/research-analysis/jira-acceptance-criteria-extraction-prompt.md`
- Understand the extraction requirements and output format

### Step 2: Parse JIRA URL
- Extract the issue key from the provided JIRA URL
- Extract the cloud ID or site URL from the JIRA URL
- Validate the URL format

### Step 3: Fetch Parent Issue
- Use Atlassian MCP tools to fetch the parent issue details
- Extract issue key, summary, description, and issue type
- Identify acceptance criteria in the description

### Step 4: Recursively Fetch Child Issues
- Identify all child issues (subtasks, child features, etc.)
- For each child issue:
  - Fetch issue details using Atlassian MCP tools
  - Extract acceptance criteria
  - Recursively process any children of that child issue
- Continue until all levels of the hierarchy are processed
- Build a hierarchical tree structure of all issues

### Step 5: Extract Acceptance Criteria
- Parse acceptance criteria from each issue's description
- Look for common formats:
  - Sections titled "Acceptance Criteria", "AC", "Test Criteria"
  - Bullet points or numbered lists under acceptance criteria headings
  - Checkboxes or task lists
- **Focus on testable criteria**: Prioritize criteria that are observable, measurable, and can be validated by product/design teams
- Convert all acceptance criteria items to checkbox format: `[ ]` (empty checkbox)
- Preserve any categories or groupings within acceptance criteria
- Handle cases where issues have no acceptance criteria

### Step 6: Organize and Structure
- Group acceptance criteria by issue hierarchy
- Preserve categories if they exist within issues
- Maintain parent-child relationships
- Position Testing Information (Tester and Test Date) at the top of each section, immediately after the heading
- Create a clear hierarchical structure
- **Note**: General Usability & Responsive Design section should only appear once at the parent feature level, not for each child issue

### Step 7: Generate Markdown File
- Create output directory: `05-research/sources/atlassian/JIRA/QA-UAT/` (create if doesn't exist)
- Generate markdown file with filename: `[Issue-Key]-acceptance-criteria.md`
- Format according to the prompt's structure:
  - Issue hierarchy tree
  - Testing information sections (Tester and Test Date fields) positioned at the top of each section (after heading)
  - Acceptance criteria for each issue formatted as checkboxes `[ ]`
  - General Usability & Responsive Design section **only once at the parent feature level** with comprehensive testable criteria (not repeated for child issues)
  - Proper markdown formatting with clear hierarchy

### Step 8: Save File
- Write the markdown file to the QA-UAT directory
- Confirm file creation and location

## Expected Output

A markdown file at `05-research/sources/atlassian/JIRA/QA-UAT/[Issue-Key]-acceptance-criteria.md` containing:
- Complete issue hierarchy (parent and all children)
- All acceptance criteria extracted from each issue, formatted as checkboxes `[ ]` for tracking completion
- Focus on testable, observable criteria that product/design teams can validate
- Categories preserved if they exist within issues
- Testing information sections (Tester and Test Date fields) positioned at the top of each section (after heading)
- General Usability & Responsive Design section **only once at the parent feature level** with comprehensive testable criteria (not repeated for child issues)
- Links back to original JIRA issues
- Proper markdown formatting

## Example

```
/extract-jira-acceptance-criteria https://forwood.atlassian.net/browse/FPM-642
```

This will:
1. Fetch FPM-642 and all its child issues
2. Extract all acceptance criteria
3. Create `05-research/sources/atlassian/JIRA/QA-UAT/FPM-642-acceptance-criteria.md`

## Related Resources

- [JIRA Acceptance Criteria Extraction Prompt](../../07-reference/prompts/research-analysis/jira-acceptance-criteria-extraction-prompt.md) - Detailed prompt instructions
- [Research Template](../../07-reference/templates/research-template.md) - Research document structure

