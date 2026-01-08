# pm.add-journal-entry

**Journal Entry Command** - Creates a new dated journal entry file for daily brain dumps and reflections.

## Command Purpose

This command creates a new journal entry by:
1. Getting the current date (YYYY-MM-DD format)
2. Creating a journal entry file with that date
3. Adding date and time to the file header
4. Setting up the file structure for your journal content
5. Opening the file for you to add your entry

## Execution Steps

### Step 1: Get Current Date and Time

1. **Get Current Date**
   - Format: `YYYY-MM-DD` (e.g., `2026-01-15`)
   - Use system date command or date function
   - This will be used for the filename

2. **Get Current Time**
   - Format: `HH:MM` (e.g., `14:30`)
   - Use system time or time function
   - This will be included in the file header

### Step 2: Check if Entry Already Exists

1. **Check for Existing File**
   - Path: `08-journal/YYYY-MM-DD.md`
   - If file exists, inform the user
   - Ask if they want to:
     - Append to existing entry
     - Create a new entry with timestamp suffix
     - Overwrite existing entry

2. **Handle Existing File**
   - If user wants to append: Add a new section with timestamp
   - If user wants new entry: Create `YYYY-MM-DD-HHMM.md` format
   - If user wants to overwrite: Confirm before proceeding

### Step 3: Create Journal Entry File

1. **Create File Structure**
   - Path: `08-journal/YYYY-MM-DD.md`
   - Include header with date and time
   - Add basic structure for journal content

2. **File Template**
   ```markdown
   # Journal Entry - YYYY-MM-DD

   **Date:** YYYY-MM-DD  
   **Time:** HH:MM

   ---

   ## Entry

   [Your journal content goes here]

   ---

   ## Tags

   [Optional: Add tags for later reference]

   ---

   ## Links

   [Optional: Add links to related documents, opportunities, solutions, etc.]
   ```

3. **Create the File**
   - Write the file to `08-journal/YYYY-MM-DD.md`
   - Use the template structure above
   - Ensure the file is created successfully

### Step 4: Present the File

1. **Show Created File**
   - Display the file path
   - Show the file structure
   - Indicate where the user should add their content

2. **Wait for User Content**
   - The user will add their journal entry content
   - The file is ready for them to edit

## File Format

### Standard Format

```markdown
# Journal Entry - YYYY-MM-DD

**Date:** YYYY-MM-DD  
**Time:** HH:MM

---

## Entry

[Your journal content goes here]

---

## Tags

[Optional: Add tags for later reference]

---

## Links

[Optional: Add links to related documents, opportunities, solutions, etc.]
```

### Example

```markdown
# Journal Entry - 2026-01-15

**Date:** 2026-01-15  
**Time:** 14:30

---

## Entry

Today I was thinking about the Forwood One migration strategy. Key insights from the customer interviews suggest that users are most concerned about data migration and training. Need to prioritize these in the roadmap.

Also had a conversation with the sales team about common objections. They're hearing concerns about integration complexity. This might be an opportunity to create better documentation or a migration playbook.

---

## Tags

#migration #customer-feedback #roadmap #sales

---

## Links

- [[04-opportunities/03-opportunities/active/forwood-one-migration-success.md|Forwood One Migration Success]]
- [[03-discovery/research/customer-requirements/forwood-one-migration-requirements.md|Migration Requirements]]
```

## Usage

Run the command:
```
pm.add-journal-entry
```

The command will:
1. Create a new journal entry file with today's date
2. Include date and time in the file header
3. Set up the file structure
4. Present the file for you to add your content

**When to use:**
- Daily brain dumps
- Reflection and thoughts
- Meeting notes that don't need inbox processing
- Ideas that you want to capture but not process immediately
- Reference material for later use

## Related Commands

- `pm.process-inbox-todo` - Process items that need workflow integration
- `pm.extract-insights` - Extract insights from research (journal entries can be referenced)

## Related Documents

- [Journal README](../../08-journal/README.md) - Journal folder documentation

## Error Handling

If you encounter issues:

1. **Date/Time Error**: Use system date/time as fallback
2. **File Creation Error**: Inform user and ask for alternative location
3. **Existing File**: Ask user how to handle (append, new, overwrite)
4. **Permission Error**: Inform user about file permissions

## Notes

- Journal entries are NOT automatically processed into the inbox
- Journal entries can be manually moved to inbox if needed
- Journal entries can be linked from other documents
- Journal entries can be referenced in communications and research
- One entry per day is the default (same date = same file)

