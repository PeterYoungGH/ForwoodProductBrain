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
- [ ] Metadata accurate
- [ ] Movement appropriate
```

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

