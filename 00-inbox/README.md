# Inbox

Inbox for raw inputs and unprocessed items that need to be organized into the knowledge base.

## Purpose

This section provides a workflow for handling raw inputs that don't fit neatly into categories and may touch multiple areas. Use this to capture, process, and archive information before it gets organized into the structured knowledge base.

## Workflow

### 1. Raw Inputs (`raw/`)

Place unprocessed items here when they first arrive:
- Emails with mixed topics (e.g., roadmap questions + strategic questions)
- Requests that span multiple areas
- Information that needs categorization
- Any raw data that needs processing

**Naming Convention:**
- Format: `[YYYY-MM-DD]-[source]-[brief-topic].md`
- Examples:
  - `2024-11-27-email-roadmap-strategy.md`
  - `2024-11-27-meeting-forward-one-demos.md`
  - `2024-11-27-customer-feedback-safety-plus.md`

**What to Include:**
- Original content as-is
- Source information (who, when, where)
- Context and background
- Any attachments or related information

### 2. Processing (`processing/`)

Move items here while actively working on them:
- Extract relevant information
- Identify which areas of the knowledge base are impacted
- Create or update documents in appropriate sections
- Link related documents together

**Processing Steps:**
1. Review the raw input
2. Identify all relevant areas:
   - Strategy (roadmap, focus areas)
   - Initiatives
   - Business outcomes
   - Product outcomes
   - Opportunities
   - Research/discovery
3. Create or update documents in the organized structure
4. Add links from processed documents back to the archived raw input
5. Move to archive when complete

### 3. Archive (`archive/`)

Move processed items here to preserve the original raw data:
- Maintains historical record of original inputs
- Links to processed documents created from the input
- Organized by date for easy retrieval

**When to Archive:**
- All relevant information has been extracted
- Documents have been created/updated in the organized structure
- Links are in place between archived input and processed documents

## Key Principles

1. **One Input, Multiple Impacts**: A single raw input can spawn multiple documents across different sections (strategy, initiatives, opportunities, etc.)

2. **Preserve Original Context**: The archive maintains the original raw data, while the organized structure contains processed, structured information

3. **Link Everything**: Use markdown links to connect:
   - Archived inputs to processed documents
   - Processed documents back to source inputs
   - Related documents across sections

4. **Process Regularly**: Don't let items accumulate in `raw/` - process them regularly to keep the knowledge base current

## Example Workflow

**Scenario:** Email received about roadmap item and strategic question

1. **Capture**: Create `2024-11-27-email-roadmap-strategy.md` in `raw/`
   - Paste email content
   - Note sender, date, context

2. **Process**: Move to `processing/` and work on it
   - Extract roadmap question → Update `01-strategy/roadmap/current-roadmap.md`
   - Extract strategic question → Update `01-strategy/strategic-focus/focus-areas.md`
   - Identify related business outcome → Link to `04-opportunities/01-business-outcomes/`
   - Create links between all updated documents

3. **Archive**: Move to `archive/` when complete
   - Add section at bottom: "Processed Documents"
   - List all documents created/updated with links
   - Preserve original email content

## Related Documents

- [Main README](../README.md)
- [Strategy Section](../01-strategy/README.md)
- [Initiatives Section](../02-initiatives/README.md)
- [Opportunities Section](../04-opportunities/README.md)

## Best Practices

- **Process Daily**: Review and process inbox items regularly
- **Be Thorough**: One input might impact multiple areas - check all relevant sections
- **Link Back**: Always link from processed documents to the archived source
- **Keep Context**: Preserve original context in archive, even if it seems redundant
- **Use Templates**: Consider creating templates for common input types if patterns emerge




















