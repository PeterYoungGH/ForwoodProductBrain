# Decision Reconciliation Prompt

## Use Case

Use this prompt when reconciling decision changes, identifying conflicts, or updating decisions that have been superseded.

## Context

This prompt guides the reconciliation process when decisions change, ensuring previous decisions are properly marked and new decisions are linked appropriately.

## Prompt Text

Reconcile the following decision change:

### Current Decision
- Decision ID: [ID]
- Decision Date: [Date]
- Decision: [Current decision]
- Decision Maker: [Name]

### Previous Decision
- Decision ID: [ID]
- Decision Date: [Date]
- Decision: [Previous decision]
- Status: [Current status]

### Reconciliation Tasks

1. **Mark Previous Decision**
   - Set status to "Superseded" or "Reversed"
   - Add note explaining why it was superseded
   - Link to new decision

2. **Create New Decision Entry**
   - Create new decision log entry
   - Link to previous decision
   - Document why decision changed

3. **Update Document**
   - Update document status/metadata if needed
   - Update decision history table
   - Ensure all links are correct

4. **Verify Consistency**
   - Check document status matches decision
   - Verify links are bidirectional
   - Ensure no conflicting information

### Output Format

Provide reconciliation plan in this format:

```markdown
## Decision Reconciliation Plan

### Previous Decision Update
- Decision ID: [ID]
- New Status: [Superseded / Reversed]
- Note: [Why it was superseded]
- Link to New Decision: [Link]

### New Decision Entry
- Decision ID: [New ID]
- Decision Date: [Date]
- Decision: [New decision]
- Decision Maker: [Name]
- Rationale: [Why decision changed]
- Link to Previous Decision: [Link]

### Document Updates Required
- Status Update: [If needed]
- Metadata Update: [If needed]
- Decision History Table: [Update required]

### Verification Checklist
- [ ] Previous decision marked as superseded
- [ ] New decision entry created
- [ ] Links are bidirectional
- [ ] Document status updated
- [ ] No conflicting information
- [ ] Decision history table updated
```

## Decision Authority

**Agent Can:**
- Suggest reconciliation approach
- Create decision log entries (with human approval)
- Update decision history tables
- Flag conflicts

**Human Must:**
- Approve reconciliation approach
- Validate decision changes
- Make final reconciliation decisions

## Related Documents

- [Decision Log Format](../../../methodology/decision-log-format.md)
- [Decision Framework](../../../methodology/decision-framework.md)
- [Decision History Query Prompt](./decision-history-query-prompt.md)


