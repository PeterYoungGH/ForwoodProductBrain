# Add Raw Data to Inbox

Command to add raw markdown content to the inbox raw folder with proper date-prefixed naming convention.

## Command Purpose

This command adds raw markdown content to the inbox for later processing by:
1. Taking markdown content (provided directly or from a file)
2. Generating a date-prefixed filename following the naming convention
3. Creating the file in `00-inbox/raw/` directory with a title/header including status
4. Adding the item to the "Inbox" column of the kanban board
5. Preserving the original content for later processing

## File Naming Convention

All files added to `00-inbox/raw/` must follow this naming convention:

**Format**: `YYYY-MM-DD-descriptive-name-[STATUS].md`

**Rules**:
- **Date prefix**: Use the current date in `YYYY-MM-DD` format (e.g., `2025-01-15`)
- **Descriptive name**: Use kebab-case (lowercase with hyphens) for the descriptive portion
- **Status suffix**: Always include status in square brackets, capitalized, at the end: `-[STATUS]`
- **Status values**: `[INBOX]`, `[TO-DO]`, `[PROCESSING]`, `[ARCHIVED-NO-ACTION]`, `[ACTIONED]`
- **File extension**: Always use `.md` extension
- **Examples**:
  - `2025-11-28-steves-pitch-deck-[INBOX].md`
  - `2025-01-27-strategy-product-one-page-fy25-26-[ARCHIVED-NO-ACTION].md`
  - `2025-11-28-client-meeting-notes-[INBOX].md`
  - `2025-01-15-ferrovial-crm-vision-executive-roadmap-speaker-notes-[ACTIONED].md`

## Execution Steps

### Step 1: Get Current Date

1. **Determine current date**
   - Use system date in `YYYY-MM-DD` format
   - This will be the prefix for the filename

### Step 2: Determine Descriptive Name

The descriptive name can come from:

1. **User-provided title**
   - If user provides a title, use it as the descriptive portion
   - Convert to kebab-case (lowercase, replace spaces with hyphens, remove special characters)
   - Examples:
     - "Steve's Pitch Deck" → `steves-pitch-deck`
     - "Strategy Product One Page FY25-26" → `strategy-product-one-page-fy25-26`
     - "Client Meeting Notes" → `client-meeting-notes`

2. **Inferred from content**
   - If no title provided, analyze the content to infer a descriptive name
   - Look for:
     - First heading (# Title)
     - Document title or subject
     - First few words of content
   - Convert to kebab-case

3. **Default fallback**
   - If no title can be determined, use `raw-data` as the descriptive name
   - Format: `YYYY-MM-DD-raw-data-[INBOX].md`

### Step 3: Get Content

The content can be provided in several ways:

1. **Direct markdown content**
   - User provides markdown text directly
   - Use as-is (preserve formatting)

2. **From a file**
   - User provides a file path
   - Read the file content
   - Preserve original formatting

3. **From clipboard or paste**
   - User pastes content
   - Use the pasted content directly

### Step 4: Create File

1. **Construct filename and check for existing files**
   - Format: `YYYY-MM-DD-descriptive-name-[INBOX].md`
   - New items always get `[INBOX]` status since they go to the Inbox column
   - **Check for existing files with same base name**: Before creating, check if any file exists with the same date prefix and descriptive name, regardless of status suffix
     - Search for files matching pattern: `YYYY-MM-DD-descriptive-name-*.md` (any status)
     - If a file with the same base name exists (e.g., `2025-01-15-meeting-notes-[TO-DO].md`), **rename it** to `[INBOX]` status instead of creating a duplicate
     - Use `mv` command to rename: `mv "old-filename-[STATUS].md" "YYYY-MM-DD-descriptive-name-[INBOX].md"`
     - Only create a new file if no file with the same base name exists
   - If multiple files with same base name exist (shouldn't happen, but handle gracefully), use the one with the most recent modification date
   - If truly a new item (different date or descriptive name), ensure no duplicate filenames:
     - If exact filename exists, append `-1`, `-2`, etc. to the descriptive name (before the status)
     - Example: `2025-01-15-meeting-notes-1-[INBOX].md` if `2025-01-15-meeting-notes-[INBOX].md` exists

2. **Determine file path**
   - Base path: `00-inbox/raw/`
   - Full path: `00-inbox/raw/YYYY-MM-DD-descriptive-name-[INBOX].md`

3. **Determine content title for header**
   - Extract or infer the content title:
     - If content starts with a heading (# Title), use that title
     - If user provided a title, use that
     - If content has a clear subject/topic, use that
     - Otherwise, use the descriptive name converted to title case
   - Examples:
     - "Meeting Notes" from content or user input
     - "Strategy Document" from first heading
     - "Innovation Decision Framework" from descriptive name

4. **Prepare file content with title/header**
   - Add a title/header at the very beginning of the file
   - Format: `# [Content Title] - Inbox`
   - Example: `# Meeting Notes - Inbox` or `# Innovation Decision Framework - Inbox`
   - Status is always "Inbox" for newly added items (they go to the Inbox column)
   - Follow the title with a blank line, then the original content
   - If the content already starts with a heading, preserve it but add the status title above it
   - If the content already has a title with status, update it to "Inbox" if different

5. **Write or update file**
   - **If existing file found with same base name**: 
     - Read the existing file
     - Update the file content with the new title/header and content
     - Update the file title/header to "Inbox" status
     - Preserve any existing Processing Notes section (update status to "Inbox" if present)
     - Use file write/update operation (not create new file)
   - **If new file**:
     - Create the file with the title/header followed by the markdown content
     - Preserve all original formatting of the content
     - Do not add any metadata or processing notes at this stage (raw files are just raw content with title)

6. **Verify file creation**
   - Confirm file was created successfully
   - Verify content matches what was provided (with title/header added)
   - Verify title includes status "Inbox"

### Step 5: Update Kanban Board

1. **Read the kanban board file**
   - File: `00-inbox/⬛ Inbox.md`
   - Parse the file to understand its structure
   - Locate the "## Inbox" section

2. **Determine link format**
   - Use wiki-style link format with pipe syntax for readable display: `[[filename-without-extension|Display Text]]`
   - Example: For file `2025-01-15-meeting-notes-[INBOX].md`, use `[[2025-01-15-meeting-notes-[INBOX]|Meeting Notes]]`
   - Include the status suffix in the link to match the filename
   - Extract display text from the document title or create a short, readable name
   - Display text should be under 50 characters and use title case

3. **Add item to Inbox column**
   - Add a new checkbox item to the "## Inbox" section
   - Format: `- [ ] [[YYYY-MM-DD-descriptive-name-[INBOX]|Short Readable Title]]`
   - Place the new item at the top of the Inbox list (after the "## Inbox" header)
   - Preserve all existing items in the Inbox column
   - Maintain proper markdown formatting and indentation

4. **Preserve kanban board structure**
   - Keep all existing sections (Inbox, To Do, Processing, Archived/No Action, Actioned)
   - Preserve the kanban plugin metadata at the top and bottom
   - Maintain the kanban settings block at the end
   - Don't modify any other columns or items

5. **Write updated kanban board**
   - Save the updated `00-inbox/⬛ Inbox.md` file
   - Verify the new item appears in the Inbox column
   - Ensure all existing items are preserved

### Step 6: Confirm Creation

1. **Report to user**
   - Show the filename that was created
   - Show the full path
   - Confirm content was saved
   - Confirm item was added to kanban board Inbox column

2. **Remind about processing**
   - Note that the file is now in the raw inbox
   - Note that the item appears in the Inbox column of the kanban board
   - Remind user that they can process it later using the inbox processing workflow
   - Reference: `00-inbox/RULES.md` for processing rules

## Content Format

### Raw Content with Title/Header

When adding raw data to the inbox:
- **DO** add a title/header at the top with status: `# [Content Title] - Inbox`
- **Do NOT** add metadata sections (Date Received, Source, etc.)
- **Do NOT** add processing notes
- **Do NOT** add template structure
- **Do NOT** modify the original content (only add the title/header above it)

**Format:**
```markdown
# [Content Title] - Inbox

[Original content follows here, preserved as-is...]
```

The raw file should contain:
1. A title/header at the top with status "Inbox" (since new items go to the Inbox column)
2. The original content provided by the user, preserved as-is

Metadata and processing structure will be added later when the item is processed according to the inbox processing rules.

### When to Add Structure

If the user explicitly requests a structured format (e.g., "use the inbox template"), then:
1. Read `00-inbox/raw/INBOX-ITEM-TEMPLATE.md`
2. Populate the template with the provided content
3. Fill in available metadata (Date Received = current date, etc.)
4. Save with date-prefixed filename

**Default behavior**: Save raw content only, no template structure.

## Critical Rules

1. **Always use date prefix**: Every file must start with `YYYY-MM-DD-`
2. **Use kebab-case**: Descriptive names must be lowercase with hyphens
3. **Always include status suffix**: Every filename must end with `-[STATUS].md` where STATUS is in square brackets and capitalized
4. **New items get [INBOX] status**: New items always get `-[INBOX]` suffix since they go to the Inbox column
5. **Add title with status**: Always add a title/header at the top with format `# [Content Title] - Inbox`
6. **Preserve content**: Never modify or format the user's original content (only add the title/header above it)
7. **No auto-structure**: Don't add metadata or template structure unless user requests it
8. **NEVER CREATE DUPLICATES - RENAME EXISTING FILES**: Before creating a new file, check if any file exists with the same date prefix and descriptive name (regardless of status suffix). If found, **rename that existing file** to `[INBOX]` status using `mv` command instead of creating a duplicate. Only create a new file if no file with the same base name exists.
9. **Current date only**: Always use the current date, not a date from the content
10. **Raw folder only**: Always save to `00-inbox/raw/`, never to other directories
11. **Update kanban board**: Always add new items to the "Inbox" column of the kanban board
12. **Preserve kanban structure**: Never modify other columns or existing items when updating the kanban board

## Error Handling

If you encounter issues:

1. **Invalid date format**: Use system date in `YYYY-MM-DD` format
2. **Invalid filename characters**: Remove or replace invalid characters, convert to kebab-case
3. **File already exists**: Append `-1`, `-2`, etc. to descriptive name
4. **No content provided**: Ask user for content or file path
5. **File read error**: Inform user and ask for alternative (paste content directly)
6. **Directory doesn't exist**: Create `00-inbox/raw/` directory if it doesn't exist
7. **Write permission error**: Inform user and ask for alternative location or permission fix
8. **Kanban board read error**: Inform user and continue (file is created, just not added to kanban)
9. **Kanban board write error**: Inform user that file was created but kanban board couldn't be updated (user can add manually)
10. **Kanban board format error**: If kanban board structure is unexpected, add item to "Inbox" section if it exists, or inform user

## Example Workflows

### Example 1: Direct Content with Title

**User**: "Add this to raw data in the inbox: [markdown content] Title: Meeting Notes"

**AI Action**:
1. Get current date: `2025-01-15`
2. Extract title: "Meeting Notes" → `meeting-notes`
3. Check for existing files: Search for `2025-01-15-meeting-notes-*.md` in `00-inbox/raw/`
4. **If existing file found** (e.g., `2025-01-15-meeting-notes-[TO-DO].md`):
   - Rename it: `mv "2025-01-15-meeting-notes-[TO-DO].md" "2025-01-15-meeting-notes-[INBOX].md"`
   - Update file content with new title/header and content
   - Update kanban board reference if needed
5. **If no existing file**:
   - Filename: `2025-01-15-meeting-notes-[INBOX].md`
   - Prepare content with title: `# Meeting Notes - Inbox\n\n[original content]`
   - Create file: `00-inbox/raw/2025-01-15-meeting-notes-[INBOX].md`
6. Read kanban board: `00-inbox/⬛ Inbox.md`
7. Add or update `- [ ] [[2025-01-15-meeting-notes-[INBOX]|Meeting Notes]]` in "Inbox" column (using pipe syntax for readable display)
8. Save updated kanban board
9. Confirm: "Created/updated `2025-01-15-meeting-notes-[INBOX].md` in `00-inbox/raw/` with title 'Meeting Notes - Inbox' and added to Inbox kanban column"

### Example 2: Content Without Title

**User**: "Add this to raw data: [markdown content with # Heading]"

**AI Action**:
1. Get current date: `2025-01-15`
2. Infer title from first heading: "# Strategy Document" → `strategy-document`
3. Filename: `2025-01-15-strategy-document-[INBOX].md`
4. Prepare content with title: `# Strategy Document - Inbox\n\n[original content with heading preserved]`
5. Save content to `00-inbox/raw/2025-01-15-strategy-document-[INBOX].md`
6. Read kanban board: `00-inbox/⬛ Inbox.md`
7. Add `- [ ] [[2025-01-15-strategy-document-[INBOX]|Strategy Document]]` to "Inbox" column (using pipe syntax)
8. Save updated kanban board
9. Confirm: "Created `2025-01-15-strategy-document-[INBOX].md` in `00-inbox/raw/` with title 'Strategy Document - Inbox' and added to Inbox kanban column"

### Example 3: File Path Provided

**User**: "Add `path/to/document.md` to raw inbox"

**AI Action**:
1. Read file: `path/to/document.md`
2. Get current date: `2025-01-15`
3. Extract title from filename or content: `document` or from content → "Document" (title case)
4. Filename: `2025-01-15-document-[INBOX].md`
5. Prepare content with title: `# Document - Inbox\n\n[original content]`
6. Save content to `00-inbox/raw/2025-01-15-document-[INBOX].md`
7. Read kanban board: `00-inbox/⬛ Inbox.md`
8. Add `- [ ] [[2025-01-15-document-[INBOX]|Document]]` to "Inbox" column (using pipe syntax)
9. Save updated kanban board
10. Confirm: "Created `2025-01-15-document-[INBOX].md` in `00-inbox/raw/` from `path/to/document.md` with title 'Document - Inbox' and added to Inbox kanban column"

### Example 4: Duplicate Filename

**User**: "Add meeting notes to inbox" (but `2025-01-15-meeting-notes.md` already exists)

**AI Action**:
1. Get current date: `2025-01-15`
2. Title: `meeting-notes` → "Meeting Notes" (for header)
3. Check if `2025-01-15-meeting-notes-[INBOX].md` exists → Yes
4. Use: `2025-01-15-meeting-notes-1-[INBOX].md`
5. Prepare content with title: `# Meeting Notes - Inbox\n\n[original content]`
6. Save content to `00-inbox/raw/2025-01-15-meeting-notes-1-[INBOX].md`
7. Read kanban board: `00-inbox/⬛ Inbox.md`
8. Add `- [ ] [[2025-01-15-meeting-notes-1-[INBOX]]]` to "Inbox" column
9. Save updated kanban board
10. Confirm: "Created `2025-01-15-meeting-notes-1-[INBOX].md` in `00-inbox/raw/` with title 'Meeting Notes - Inbox' (original filename already existed) and added to Inbox kanban column"

## Related Files

- Inbox Processing Rules: `00-inbox/RULES.md`
- Inbox Template: `00-inbox/raw/INBOX-ITEM-TEMPLATE.md`
- Inbox Kanban: `00-inbox/⬛ Inbox.md`
- Inbox README: `00-inbox/README.md`

## Notes

- Raw files are meant to be unprocessed content that will be worked into strategy or other parts of the codebase at a time of the user's choosing
- The date prefix helps organize files chronologically
- The descriptive name helps identify content at a glance
- The title/header with status helps identify the current processing status at a glance
- Files in the raw folder are not automatically processed - they require explicit processing via the inbox processing workflow
- When items are processed, the status in the title will be updated by the `pm.process-inbox-todo` command to reflect the current kanban board column

