# Kanban Update Prompt

## Use Case

Use this prompt when updating kanban cards based on decisions, document status changes, or workflow progression.

## Context

This prompt guides agents in updating the overall idea kanban board (`⬛ Ideas Kanban.md`) when decisions are made, documents are updated, or ideas progress through stages.

## Prompt Text

Update the kanban board for the following:

### Update Context
- Document: [Link to opportunity/solution/experiment document]
- Decision Made: [Decision that was made]
- Decision Date: [Date]
- Decision Maker: [Name]
- Status Change: [If document status changed]

### Update Tasks

1. **Identify Card**
   - Find card in kanban board
   - Verify card links to correct document
   - Check current card position

2. **Update Card Metadata**
   - Update "Last Decision" field
   - Update "Decision Date" field
   - Update "Decision Maker" field
   - Update status if changed

3. **Move Card** (if appropriate)
   - Determine if card should move to different column
   - Check if human decision required for move
   - Move card if within agent capabilities
   - Flag for human review if human decision needed

4. **Update Card Content**
   - Ensure card title is correct
   - Use pipe syntax `[[link|display text]]` for readable card titles (REQUIRED)
   - Display text should be short, descriptive, and readable (under 50 characters)
   - Update card description if needed
   - Verify links are correct

### Output Format

Provide update plan in this format:

```markdown
## Kanban Update Plan

### Card Identification
- Card Title: [Title]
- Current Column: [Column name]
- Document Link: [Link]

### Metadata Updates
- Last Decision: [New decision]
- Decision Date: [Date]
- Decision Maker: [Name]
- Status: [New status if changed]

### Card Movement
- Should Move: [Yes / No]
- Target Column: [Column name]
- Movement Authority: [Agent / Human Required]
- Rationale: [Why move or not move]

### Update Actions
- [ ] Update card metadata
- [ ] Move card (if appropriate)
- [ ] Update card content
- [ ] Flag for human review (if needed)

### Verification
- [ ] Card updated correctly
- [ ] Links verified
- [ ] Display text readable (pipe syntax used)
- [ ] Metadata accurate
- [ ] Movement appropriate
```

## Card Naming Standard

**REQUIRED:** All kanban cards MUST use Obsidian's pipe syntax for readable display text:

```markdown
- [ ] [[full/path/to/document.md|Short Readable Title]] - Status information
```

**Display Text Guidelines:**
- Extract title from document (check `# Title` in document)
- Use shortened, descriptive name (under 50 characters)
- Remove path prefixes and file extensions
- Use title case for readability
- Examples:
  - `[[04-opportunities/04-solutions/active/accident-learning-system.md|Accident Learning System]]`
  - `[[04-opportunities/03-opportunities/active/enterprise-compliance-first-features.md|Enterprise Compliance-First Features]]`
  - `[[00-inbox/raw/2025-12-17-forwood-one-migration-experience-framework-[INBOX]|Forwood One Migration Experience Framework]]`

## Decision Authority

**Agent Can:**
- Update card metadata
- Move cards within agent capabilities (non-human-decision stages)
- Flag cards for human review

**Agent Cannot:**
- Move cards to stages requiring human decisions without approval
- Update cards for HIGH/MEDIUM risk decisions without human approval

**Human Must:**
- Approve card movements to human-decision stages
- Review agent updates for HIGH/MEDIUM risk decisions
- Make final decisions on card positioning

## Kanban Column Authority

### Agent Can Auto-Move
- Within Discovery stage (agent processing)
- Within Solution Exploration (format validation)
- Within Experimentation (design suggestions)

### Human Decision Required
- Opportunity Validation column (🔴)
- Solution Selection (human decides)
- Roadmap Inclusion column (🔴)
- Go/No-Go decisions

## Related Documents

- [Idea Kanban Guide](../../../methodology/idea-kanban-guide.md)
- [Decision Framework](../../../methodology/decision-framework.md)
- [Decision Log Format](../../../methodology/decision-log-format.md)


