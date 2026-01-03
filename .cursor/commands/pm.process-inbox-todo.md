# pm.process-inbox-todo

**Step 1** - Command to process inbox items that are in the "To Do" status according to the inbox processing rules.

## Command Purpose

This command processes inbox items from the "To Do" column of the inbox kanban board by:
1. Reading the inbox processing rules
2. Identifying items in "To Do" status
3. Analyzing each item's content
4. Generating integration suggestions
5. Presenting choices to the user for approval
6. Executing selected integrations
7. Archiving completed items

## Execution Steps

### Step 1: Read Required Files

1. **Read the Processing Rules**
   - File: `00-inbox/RULES.md`
   - Purpose: Understand the processing workflow, risk levels, and format requirements
   - Action: Read and understand all sections, especially:
     - Processing Workflow Stages
     - Content Analysis Rules
     - Risk-Based Approval Requirements
     - Integration Suggestion Framework
     - User Choice Presentation Format
     - Integration Execution Rules
     - Archive Process

2. **Read the Inbox Kanban Board**
   - File: `00-inbox/⬛ Inbox.md`
   - Purpose: Identify items in "To Do" status
   - Action: Parse the kanban board to find all items listed under `## To Do`

3. **Read Each To-Do Item**
   - For each item in "To Do" column:
     - Extract the file path from the markdown link (may include status suffix like `-[TO-DO]`)
     - Read the full inbox item file from `00-inbox/raw/` (filename format: `YYYY-MM-DD-descriptive-name-[STATUS].md`)
     - Understand the item's content, context, and status
     - **Update raw file status**: Sync the raw file's status section with the kanban board status (see Step 1.4)
     - **Note**: Filenames include status in square brackets (e.g., `-[TO-DO]`), so extract base name if needed

4. **Update Raw File Status from Kanban Board**
   - For each raw file found in the kanban board:
     - Determine which column it's in (Inbox, To Do, Processing, Actioned, Archived/No Action)
     - Read the raw file if it exists
     - **Update file title/header**: Add or update a title at the top of the file that includes the status
       - If the file doesn't have a title/header, add one at the very beginning
       - Format: `# [Original Content Title] - [Status]`
       - Example: `# Forwood CRM Vision & Executive Roadmap - Processing`
       - If the file already has a title, update it to include the current status
       - Status values: `Inbox`, `To Do`, `Processing`, `Actioned`, `Archived/No Action`
     - Add or update a "Processing Notes" section at the end of the file with:
       - **Status**: Current kanban board column name
       - **Last Status Update**: Current date (YYYY-MM-DD)
       - **Kanban Board**: Link to `[⬛ Inbox.md](../⬛ Inbox.md)`
     - Format:
       ```markdown
       # [Content Title] - [Status]
       
       [Original content follows...]
       
       ---
       
       ## Processing Notes
       
       **Status:** [To Do | Processing | Actioned | Archived/No Action]
       **Last Status Update:** YYYY-MM-DD
       **Kanban Board:** [⬛ Inbox.md](../⬛ Inbox.md)
       ```
     - If the file already has a "Processing Notes" section, update it rather than creating a new one
     - Preserve any existing processing notes, integration summaries, or processed documents sections
     - **Important**: When updating the title, extract the original content title from the first line or first heading if it exists, otherwise use a descriptive title based on the filename

### Step 2: Process Each To-Do Item

For each item found in the "To Do" column:

#### 2.1 Analyze Content

**Optional: Use Content Analysis Prompt**
- Prompt: `07-reference/prompts/inbox-processing/content-analysis-prompt.md`
- Purpose: Standardized content analysis following the prompt structure
- Action: Read the prompt and apply it to analyze the inbox item content

Following the rules in `RULES.md` → "Content Analysis Rules":

1. **Identify Content Elements**
   - Objectives and Goals
   - Key Results and Metrics
   - Timelines and Roadmaps
   - Strategic Elements
   - Outcomes (Business, Product, Customer)
   - Opportunities
   - Solutions and Features
   - Research and Discovery
   - Initiatives
   - Communications

2. **Map to Product Brain Structure**
   - Determine which sections of the Product Brain structure are relevant
   - Identify risk levels for each potential integration:
     - HIGH RISK: Strategy, Initiatives
     - MEDIUM RISK: Business Outcomes, Product Outcomes, Opportunities, Research/Discovery
     - LOW RISK: Solutions, Experiments, Communications

3. **Scan Existing Structure**
   - Check for existing documents that might be updated
   - Identify where new documents should be created
   - Look for related documents that should be linked
   - Review relevant index files

#### 2.2 Generate Integration Suggestions

**Optional: Use Integration Suggestion Prompt**
- Prompt: `07-reference/prompts/inbox-processing/integration-suggestion-prompt.md`
- Purpose: Standardized integration suggestions following the prompt structure
- Action: Read the prompt and apply it to generate integration suggestions

Following the rules in `RULES.md` → "Integration Suggestion Framework":

1. **Identify Integration Points**
   - Determine what new documents should be created
   - Determine what existing documents should be updated
   - Determine what links should be created
   - Determine what index files should be updated

2. **Format Each Suggestion**
   For each integration point, create a suggestion with:
   - Risk Level (HIGH/MEDIUM/LOW)
   - Action Type (Create new / Update existing / Create link / Update index)
   - Document Type (Strategy / Initiative / Business Outcome / etc.)
   - Target Location (Full path to file)
   - Description (2-3 sentences explaining what will be done)
   - Impact (What existing documents/links will be affected)
   - Template (Which template will be used, if creating new)

#### 2.3 Present Choices to User

Following the rules in `RULES.md` → "User Choice Presentation Format":

1. **Organize by Risk Level**
   - Group suggestions by risk level
   - Present HIGH RISK first, then MEDIUM, then LOW
   - Use clear section headers

2. **Format as Numbered Options**
   - Assign a unique number to each suggestion (starting from 1)
   - Include all required information:
     - Risk level indicator
     - Action type
     - Location
     - Description
     - Impact
     - Template (if applicable)
   - Each option must be numbered so the user can select by entering the number(s)

3. **Include Archive Option**
   - Always include "Archive only (no integration)" as a numbered option
   - Place at the end of all suggestions

4. **Example Format**:
   ```markdown
   ## Integration Suggestions for: [Inbox Item Title]

   Please review the options below and enter the number(s) of the options you'd like me to execute (e.g., "1, 3, 5" or "1 3 5").

   ### HIGH RISK Items

   1. **[HIGH RISK] Create new**: Strategy Document
     - **Location**: `01-strategy/roadmap/current-roadmap.md`
     - **Action**: Create new roadmap document with Q1-Q4 milestones from inbox item
     - **Impact**: Will become the active roadmap, may need to archive existing roadmap
     - **Template**: Use roadmap format from strategy section

   ### MEDIUM RISK Items

   2. **[MEDIUM RISK] Create new**: Business Outcome
     - **Location**: `04-opportunities/01-business-outcomes/oculus-platform-launch.md`
     - **Action**: Create business outcome for "Launch Oculus and win 5 new deals"
     - **Impact**: New business outcome, will need to link to product outcomes
     - **Template**: Use business outcome format from RULES.md

   ### LOW RISK Items

   3. **[LOW RISK] Create new**: Solution Document
     - **Location**: `04-opportunities/04-solutions/active/oculus-mvp.md`
     - **Action**: Document Oculus MVP solution
     - **Impact**: New solution document
     - **Template**: Solution template

   ### Archive Only

   4. **Archive only (no integration)**: Keep raw data for reference but don't integrate at this time
   ```

5. **Wait for User Selection**
   - Present the suggestions with unique numbers
   - User selects by entering the number(s) of options they want to execute (e.g., "1, 3, 5" or "1 3 5")
   - Do NOT proceed until user has explicitly provided the number(s) for selected options

#### 2.4 Execute Selected Integrations

Following the rules in `RULES.md` → "Integration Execution Rules":

**CRITICAL**: Only execute options that the user has explicitly selected (by number). Never execute unselected options.

1. **Pre-Execution Checklist**
   - Parse the user's input to identify which numbers they selected (e.g., "1, 3, 5" or "1 3 5")
   - Verify which options correspond to the selected numbers
   - Confirm all selected options are understood
   - Identify templates needed
   - Verify target locations are valid
   - Ensure risk levels have been respected

2. **For Each Selected Option** (selected by number by user):

   **If "Create new" document:**
   - Read the appropriate template from `06-reference/templates/`
   - Read the relevant RULES.md file for format requirements
   - Extract content from inbox item's "Original Content" section
   - Transform content to match template format
   - Set metadata (Created, Last Updated, Status)
   - Create links to related documents
   - Add link back to source inbox item
   - Place document in correct location with proper naming (kebab-case)
   - Update relevant index.md file

   **If "Update existing" document:**
   - Read the existing document first
   - Understand current content and structure
   - Add new content in appropriate sections
   - Update "Last Updated" date
   - Add new links as needed
   - Preserve existing content and links
   - Add link back to source inbox item if not present

   **If "Create link":**
   - Identify source and target documents
   - Add link in appropriate section of source document
   - Use relative paths
   - Create bidirectional links where appropriate

   **If "Update index":**
   - Read the existing index.md file
   - Add entry following existing format
   - Include required metadata
   - Maintain alphabetical or chronological order if applicable

3. **Traceability**
   - Ensure all processed documents link back to source inbox item
   - Format: `[Inbox Item: Title](../00-inbox/archive/YYYY-MM-DD-source-topic-[STATUS].md)`
   - Filename includes status suffix in square brackets (e.g., `-[ARCHIVED-NO-ACTION]`)
   - Add processing date notes where appropriate

4. **Execution Confirmation**
   - List all actions taken
   - Show file paths of created/updated documents
   - Note all links created
   - Update inbox item's "Processed Documents" section with links

#### 2.5 Update Inbox Item Status

1. **Update Processing Notes**
   - Add notes about what was processed
   - Document any decisions made
   - Note any assumptions or interpretations

2. **Update Processed Documents Section**
   - List all documents created/updated
   - Include links to all processed documents
   - Format: `- [Document Name](../path/to/document.md)`

3. **Move to Processing Column** (if not already there)
   - Update the kanban board
   - Move item from "To Do" to "Processing" column
   - Update the `⬛ Inbox.md` file

4. **Update Raw File Status**
   - After updating the kanban board, immediately update the raw file's status
   - **Rename file if status changed**: If the file's current status suffix doesn't match the new status:
     - Use `mv` command to rename the file: `mv "old-filename-[OLD-STATUS].md" "old-filename-[NEW-STATUS].md"`
     - Extract the base filename (without status suffix) and add the new status suffix
     - **Critical**: Rename the existing file, do NOT create a new file
   - **Update file title/header**: Update the title at the top of the file to reflect the new status
     - Format: `# [Original Content Title] - Processing`
     - Replace the status portion of the title with the current status
   - Update the "Processing Notes" section in the raw file:
     - Set **Status** to "Processing"
     - Update **Last Status Update** to current date (YYYY-MM-DD)
     - Ensure the section reflects the current kanban board column

#### 2.6 Archive (If User Selected Archive Only or After Integration Complete)

**Optional: Use Archive Decision Prompt**
- Prompt: `07-reference/prompts/inbox-processing/archive-decision-prompt.md`
- Purpose: Standardized archiving process following the prompt structure
- Action: Read the prompt and apply it to archive the inbox item

Following the rules in `RULES.md` → "Archive Process":

1. **Update Inbox Item**
   - Add "Archive Date" with current date (YYYY-MM-DD)
   - Ensure "Processed Documents" section is complete
   - Add final processing notes
   - **Update Status**: Update the "Processing Notes" section:
     - Set **Status** to "Archived/No Action"
     - Update **Last Status Update** to current date (YYYY-MM-DD)
     - Add **Archive Date** field

2. **Move to Archive**
   - Move file from `00-inbox/raw/` or `00-inbox/processing/` to `00-inbox/archive/`
   - Preserve original filename (which includes status suffix like `-[ARCHIVED-NO-ACTION]`)
   - Maintain file structure

3. **Update Kanban Board**
   - Remove item from "Processing" column
   - Move to "Archived/No Action" column in `⬛ Inbox.md`
   - Or remove from board entirely if appropriate

4. **Update Raw File Status (After Archive)**
   - After moving to archive and updating kanban board, verify the raw file status is updated
   - **Rename file if status changed**: The file should already be renamed during the move to archive, but verify:
     - File should be in `00-inbox/archive/` with status suffix `-[ARCHIVED-NO-ACTION]`
     - If file still has old status suffix, rename it: `mv "old-filename-[OLD-STATUS].md" "old-filename-[ARCHIVED-NO-ACTION].md"`
     - **Critical**: Rename the existing file, do NOT create a new file
   - **Update file title/header**: Update the title at the top of the file to reflect archived status
     - Format: `# [Original Content Title] - Archived/No Action`
     - Replace the status portion of the title with "Archived/No Action"
   - The file should now be in `00-inbox/archive/` with status "Archived/No Action"
   - Update the "Processing Notes" section if needed to reflect final archived status

5. **Verify Links**
   - Ensure all processed documents link back to archived item
   - Verify archived item links to all processed documents
   - Test that links work correctly

### Step 3: Summary

After processing all items (or if user stops processing):

1. **Report Results**
   - List all items processed
   - List all documents created/updated
   - Note any items that still need attention
   - Confirm archive status

2. **Remind User**
   - If items remain in "To Do", remind user they can run the command again
   - If items are in "Processing", remind user they can continue processing later

## Critical Rules

1. **NEVER execute without user approval**: All integrations require explicit user selection (by number)
2. **Respect risk levels**: HIGH and MEDIUM risk items always require approval
3. **Present ALL options**: Don't filter or prioritize - present everything as numbered choices
4. **Use numbered options**: Each option must have a unique number that the user can enter to select
5. **Follow templates**: Use appropriate templates and RULES.md format requirements
6. **Maintain traceability**: All processed documents must link back to source
7. **Preserve original content**: Don't delete or lose original inbox item content
8. **Update kanban board**: Always update the kanban board when moving items between columns
9. **NEVER CREATE DUPLICATE FILES - ALWAYS RENAME**: When updating file status, use `mv` command to rename the existing file to the new status suffix. Do NOT create a new file. Example: `mv "file-[TO-DO].md" "file-[PROCESSING].md"`
10. **Sync raw file status**: Always update both the file title/header and the "Processing Notes" section to reflect the current kanban board status whenever:
    - Reading items from the kanban board (initial sync)
    - Moving items between columns (rename file first, then update content)
    - Archiving items (rename file during move to archive)
    - The status should match the kanban board column exactly in both the title and Processing Notes

## Error Handling

If you encounter issues:

1. **Missing files**: Inform user and ask how to proceed
2. **Template not found**: Ask user which template to use or create a basic structure
3. **Conflicting content**: Present the conflict to user and ask for guidance
4. **Invalid paths**: Verify paths and ask user to confirm correct location
5. **Unclear user selection**: If user's number selection is ambiguous, ask for clarification (e.g., "Which numbers did you want me to execute? Please enter the numbers separated by commas or spaces.")
6. **No selection**: If user hasn't provided any numbers, ask for clarification or offer to archive only
7. **User cancels**: Stop processing, preserve current state, report what was completed

## Example Workflow

1. Command executed: "Process inbox to-do items"
2. AI reads `00-inbox/RULES.md` and `00-inbox/⬛ Inbox.md`
3. AI finds 1 item in "To Do": `2025-01-27-strategy-product-one-page-fy25-26-[TO-DO].md`
4. AI reads the inbox item file
5. **AI syncs raw file status**: Updates the raw file's title to include "Status: To Do" and updates the "Processing Notes" section to show "Status: To Do" and current date
6. AI analyzes content and identifies integration points
7. AI presents structured numbered choices organized by risk level
8. User enters number(s) for options they want to execute (e.g., "1, 3, 5")
9. AI parses the numbers and executes only selected options
10. AI updates inbox item with processed document links
11. AI moves item to "Processing" column in kanban board
12. **AI renames raw file**: If file status changed, uses `mv` to rename file from `-[TO-DO]` to `-[PROCESSING]` (does NOT create new file)
13. **AI updates raw file status**: Updates the raw file's title to include "Status: Processing" and updates the "Processing Notes" section to show "Status: Processing" and current date
13. User confirms completion
14. AI archives item (moves file to archive folder and renames to `-[ARCHIVED-NO-ACTION]` using `mv` command) and updates kanban board
15. **AI updates raw file status**: Updates the archived file's title to include "Status: Archived/No Action" and updates the "Processing Notes" section to show "Status: Archived/No Action" and archive date

## Raw File Status Format

All raw files should have:
1. A title/header at the top that includes the current status (e.g., `# [Content Title] - [Status]`)
2. A "Processing Notes" section at the end that reflects their current status in the kanban board

This allows you to see at a glance which files have been processed and which haven't by looking at the raw files themselves. The status in the title should always match the status in the Processing Notes section and the kanban board column.

### Status Section Format

**File Title/Header Format:**
```markdown
# [Content Title] - [Status]

[Original content follows...]
```

**Processing Notes Section Format:**
```markdown
---

## Processing Notes

**Status:** [To Do | Processing | Actioned | Archived/No Action]
**Last Status Update:** YYYY-MM-DD
**Kanban Board:** [⬛ Inbox.md](../⬛ Inbox.md)

[Additional processing notes, integration summaries, and processed documents sections can follow]
```

**Note:** The status in the file title should always match the kanban board column and the status in the Processing Notes section.

### Status Values

- **To Do**: Item is in the "To Do" column, ready to be processed
- **Processing**: Item is in the "Processing" column, currently being worked on
- **Actioned**: Item is in the "Actioned" column, has been completed
- **Archived/No Action**: Item is in the "Archived/No Action" column or has been moved to archive folder

### When Status is Updated

The status should be updated in both the file title/header and the Processing Notes section:
1. **On initial read**: When the command reads items from the kanban board, sync all raw file statuses (update both title and Processing Notes)
2. **On column move**: When an item is moved from one column to another (e.g., To Do → Processing), update both the title and Processing Notes
3. **On archive**: When an item is archived, update status to "Archived/No Action" in both the title and Processing Notes
4. **On manual changes**: If the kanban board is manually updated, the raw file status should be synced (update both title and Processing Notes)

**Important**: Always update both the file title/header and the Processing Notes section to keep them in sync with the kanban board status.

## Step 3: Regenerate Ideas Kanban Canvas

After completing inbox processing and updating kanban boards:

1. **Regenerate Canvas:**
   - Run the canvas generation script to update the Ideas Kanban Canvas
   - Command: Execute `.cursor/scripts/regenerate_ideas_kanban_canvas.py`
   - Purpose: Update canvas visualization to reflect all changes made during inbox processing
   - This ensures the canvas always shows the current state of the workflow

2. **Canvas Update Process:**
   - Script automatically parses the Ideas Kanban board
   - Scans all referenced documents
   - Rebuilds relationship graph
   - Regenerates canvas JSON file
   - Updates `Ideas Kanban Canvas.canvas` with latest nodes and edges

3. **Error Handling:**
   - If canvas generation fails, log error but don't fail the inbox processing command
   - Canvas update is non-blocking
   - User should still see inbox processing results even if canvas update fails

**Note:** Canvas regeneration happens automatically at the end of inbox processing, ensuring the visual representation stays in sync with workflow changes.

## Related Prompts

This command can optionally use prompts from the prompts library for standardized behavior:

- [Content Analysis Prompt](../../07-reference/prompts/inbox-processing/content-analysis-prompt.md) - For analyzing inbox content
- [Integration Suggestion Prompt](../../07-reference/prompts/inbox-processing/integration-suggestion-prompt.md) - For generating integration suggestions
- [Archive Decision Prompt](../../07-reference/prompts/inbox-processing/archive-decision-prompt.md) - For archiving decisions
- [Insight Extraction Prompt](../../07-reference/prompts/research-analysis/insight-extraction-prompt.md) - For extracting insights from research
- [Research Document Generation Prompt](../../07-reference/prompts/document-generation/research-document-prompt.md) - For creating research documents
- [Insight Document Generation Prompt](../../07-reference/prompts/document-generation/insight-document-prompt.md) - For creating insight documents
- [Opportunity Document Generation Prompt](../../07-reference/prompts/document-generation/opportunity-document-prompt.md) - For creating opportunity documents

## Related Files

- Processing Rules: `00-inbox/RULES.md`
- Inbox Kanban: `00-inbox/⬛ Inbox.md`
- Inbox README: `00-inbox/README.md`
- Templates: `07-reference/templates/`
- Format Rules: `04-opportunities/*/RULES.md`
- Prompts Library: `07-reference/prompts/README.md`



