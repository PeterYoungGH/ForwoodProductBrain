# Archive Decision Prompt

## Use Case

Use this prompt when determining if an inbox item should be archived and how to properly archive it after integration is complete.

## Context

After integrations have been executed (or user selects "Archive only"), this prompt guides the archiving process to ensure proper traceability and cleanup.

## Prompt Text

Determine the archiving approach based on the current state:

### When to Archive

Archive an inbox item when:
- All selected integrations have been completed
- User explicitly selects "Archive only" option
- Item has been fully processed and no further action is needed

### Archive Process

1. **Update Inbox Item**
   - Add "Processed Documents" section listing all created/modified documents with links
   - Update status to "Archived" or "Archived/No Action"
   - Add archive date

2. **Move File**
   - Move file from `00-inbox/raw/` to `00-inbox/archive/`
   - Preserve filename (including status suffix)
   - Ensure file is not duplicated

3. **Update Kanban Board**
   - Remove item from current column (Processing, Actioned, etc.)
   - Add item to "Archived" or "Archived/No Action" column
   - Update file reference if filename changed

4. **Create Links**
   - Ensure all processed documents link back to archived inbox item
   - Update any index files that reference the item

### Archive File Naming

- Preserve original filename format: `YYYY-MM-DD-descriptive-name-[STATUS].md`
- Update status to `[ARCHIVED]` or `[ARCHIVED-NO-ACTION]` as appropriate
- Use `mv` command to rename, never create duplicates

## Parameters

- `inbox_item_path`: Path to the inbox item file
- `processed_documents`: List of documents created/modified during integration
- `archive_reason`: Why item is being archived (completed, no action, etc.)

## Expected Output

- Updated inbox item with processed document links
- File moved to archive directory with correct status
- Kanban board updated
- All links and references maintained

## Related Commands

- `process-inbox-todo` - Uses this prompt in Step 3
- `inbox-status-update` - May use this prompt when updating statuses

## Related Methodology

- [Inbox Processing Rules](../../../00-inbox/RULES.md) - Full processing workflow
- [Archive Process](../../../00-inbox/RULES.md#stage-4-archive) - Archive stage details

