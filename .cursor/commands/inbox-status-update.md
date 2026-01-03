# Inbox Status Update Command

Command to update filenames in the `00-inbox/raw/` folder to include their status from the kanban board.

## Command Purpose

This command synchronizes filenames in the raw inbox folder with the status of items in the kanban board by:
1. Reading the kanban board to identify which files are in which status columns
2. Scanning all markdown files in `00-inbox/raw/`
3. Renaming files to include their status suffix (where applicable)
4. Preserving files that are not in the kanban board as-is

## Execution Steps

### Step 1: Read Kanban Board

1. **Read the kanban board file**
   - File: `00-inbox/⬛ Inbox.md`
   - Parse the file to identify all columns and their items
   - Extract file references from wiki-style links: `[[filename]]`

2. **Map files to status columns**
   - Identify which files are in which columns:
     - `## Inbox` → status: `INBOX`
     - `## To Do` → status: `TO-DO`
     - `## Processing` → status: `PROCESSING`
     - `## Archived/No Action` → status: `ARCHIVED-NO-ACTION`
     - `## Actioned` → status: `ACTIONED`
   - Create a mapping: `filename → status` (status values are uppercase)

3. **Handle special cases**
   - Files referenced with regular markdown links (e.g., `[text](raw/filename.md)`) should also be mapped
   - Files not found in any column are not in the kanban board (leave as-is)

### Step 2: Scan Raw Folder

1. **List all markdown files**
   - Directory: `00-inbox/raw/`
   - Find all `.md` files (excluding `INBOX-ITEM-TEMPLATE.md` and `.gitkeep`)
   - For each file, extract the base filename (without extension)

2. **Determine current status in filename**
   - Check if filename already has a status suffix in square brackets
   - Status suffixes to look for: `-[INBOX]`, `-[TO-DO]`, `-[PROCESSING]`, `-[ARCHIVED-NO-ACTION]`, `-[ACTIONED]`
   - Also check for old format: `-inbox`, `-to-do`, `-processing`, `-archived-no-action`, `-actioned` (without brackets)
   - Extract the base name without status suffix if present

### Step 3: Update Filenames

For each file in the raw folder:

1. **Check if file is in kanban board**
   - Look up the base filename in the status mapping
   - If not found, skip (file is not in kanban board)

2. **Determine target status**
   - Get status from kanban board mapping
   - Compare with current filename status

3. **Rename if needed**
   - If filename doesn't match kanban status:
     - **Use file rename operation (mv command)**: Rename the existing file, do NOT create a new file
     - Remove any existing status suffix (both old format and new format) from the base filename
     - Add the correct status suffix from kanban board in square brackets
     - Format: `YYYY-MM-DD-descriptive-name-[STATUS].md`
     - Status must be uppercase and in square brackets
     - **Critical**: Use `mv "old-filename.md" "new-filename.md"` to rename, not create a new file
   - If filename already matches, skip

4. **Handle filename conflicts**
   - If target filename already exists (shouldn't happen if renaming correctly), this indicates a duplicate
   - Check if the existing file is the same file (same inode or content)
   - If it's the same file, skip (already renamed)
   - If it's a different file, append a number: `-1`, `-2`, etc. to the descriptive name (before status)
   - This should be rare but handle gracefully

### Step 4: Update Kanban Board References (if needed)

1. **Update wiki-style links**
   - If files were renamed, update the kanban board references
   - Replace old `[[filename]]` or `[[filename|display text]]` with new `[[new-filename|display text]]`
   - **Preserve pipe syntax:** If card uses `[[link|display text]]`, keep the display text when updating
   - **Add pipe syntax if missing:** If card uses `[[link]]` only, add readable display text using pipe syntax
   - Preserve all other kanban board structure

2. **Update regular markdown links**
   - If files were renamed, update any regular markdown links
   - Replace `raw/old-filename.md` with `raw/new-filename.md`

### Step 5: Report Results

1. **List all changes made**
   - Show old filename → new filename for each renamed file
   - Show files that were skipped (not in kanban board)
   - Show files that already had correct status

2. **Confirm completion**
   - Report total number of files processed
   - Report number of files renamed
   - Report any errors or warnings

## Status Suffix Format

Status suffixes are added to filenames in square brackets, capitalized:

- **Inbox** → `-[INBOX]`
- **To Do** → `-[TO-DO]`
- **Processing** → `-[PROCESSING]`
- **Archived/No Action** → `-[ARCHIVED-NO-ACTION]`
- **Actioned** → `-[ACTIONED]`

## Filename Examples

**Before:**
- `2025-12-01-2-year-strategy-roadmap.md` (in "Actioned" column)
- Or old format: `2025-12-01-2-year-strategy-roadmap-actioned.md`

**After:**
- `2025-12-01-2-year-strategy-roadmap-[ACTIONED].md`

**Before:**
- `2025-11-28-domain-sme-background.md` (in "Inbox" column)
- Or old format: `2025-11-28-domain-sme-background-inbox.md`

**After:**
- `2025-11-28-domain-sme-background-[INBOX].md`

## Special Cases

### Files Not in Kanban Board
- Files that are not referenced in the kanban board are left unchanged
- No status suffix is added
- These files may be new or may have been removed from the board

### Files Already Have Status Suffix
- If a file already has a status suffix (old or new format), it's removed and replaced with the current kanban status
- **CRITICAL**: Use `mv` command to **rename** the existing file, do NOT create a new file
- Example: `file-[PROCESSING].md` in "Actioned" column → **rename** to `file-[ACTIONED].md` using `mv "file-[PROCESSING].md" "file-[ACTIONED].md"`
- Example: `file-processing.md` (old format) in "Actioned" column → **rename** to `file-[ACTIONED].md` using `mv "file-processing.md" "file-[ACTIONED].md"`

### Files in Multiple Columns
- Files should only appear in one column
- If a file appears in multiple columns, use the first occurrence found (or report as error)

### Files with Special Characters
- Preserve all special characters in descriptive name portion
- Only modify the status suffix portion

### Preventing Duplicates
- **NEVER CREATE DUPLICATE FILES**: Always rename existing files using `mv` command
- If a file with the target name already exists, check if it's the same file (same inode) - if so, skip
- If it's a different file, this indicates a duplicate that should be handled separately

## Error Handling

1. **File not found**: Skip and report warning
2. **Rename permission error**: Report error and skip
3. **Target filename exists**: Append number suffix and retry
4. **Kanban board parse error**: Report error and stop
5. **Invalid status**: Report warning and skip

## Example Workflow

1. Command executed: "Update inbox status in filenames"
2. AI reads `00-inbox/⬛ Inbox.md`
3. AI finds:
   - `[[2025-12-01-2-year-strategy-roadmap-[ACTIONED]]]` in "Actioned" column
   - `[[2025-11-28-domain-sme-background-[INBOX]]]` in "Inbox" column
4. AI scans `00-inbox/raw/` folder
5. AI finds:
   - `2025-12-01-2-year-strategy-roadmap.md` → **rename** (using `mv`) to `2025-12-01-2-year-strategy-roadmap-[ACTIONED].md`
   - `2025-11-28-domain-sme-background.md` → **rename** (using `mv`) to `2025-11-28-domain-sme-background-[INBOX].md`
6. AI uses `mv` command to rename files (does NOT create new files)
7. AI updates kanban board references if needed
8. AI reports: "Renamed 2 files to include status suffixes in square brackets"

## Related Files

- Inbox Kanban: `00-inbox/⬛ Inbox.md`
- Raw Inbox Folder: `00-inbox/raw/`
- Inbox README: `00-inbox/README.md`

