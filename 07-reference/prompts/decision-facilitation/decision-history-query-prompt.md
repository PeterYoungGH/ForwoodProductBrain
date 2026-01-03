# Decision History Query Prompt

## Use Case

Use this prompt when querying decision history to understand how ideas have evolved over time, identify decision patterns, or reconcile decision changes.

## Context

This prompt guides agents in reading and querying decision logs from documents to provide context for current decisions or analyze decision evolution.

## Prompt Text

Query decision history for the following:

### Query Parameters
- Document: [Link to document]
- Decision Type: [Optional: filter by type]
- Date Range: [Optional: filter by date]
- Decision Maker: [Optional: filter by maker]
- Status: [Optional: filter by status]

### Query Tasks

1. **Read Decision Logs**
   - Read all decision log entries from document
   - Extract decision history table if present
   - Identify all decisions made

2. **Analyze Decision Evolution**
   - Identify decision changes over time
   - Find decisions that were superseded or reversed
   - Track status changes

3. **Identify Patterns**
   - Find recurring decision types
   - Identify decision makers
   - Note decision frequency

4. **Reconcile Changes**
   - Identify conflicting decisions
   - Find decisions that need reconciliation
   - Suggest reconciliation approach

### Output Format

Provide query results in this format:

```markdown
## Decision History Query Results

### Document
[Link to document]

### Decision Summary
- Total Decisions: [Number]
- Date Range: [Earliest] to [Latest]
- Decision Makers: [List]
- Decision Types: [List]

### Decision Timeline
| Date | Decision | Decision Maker | Status | Rationale |
|------|----------|---------------|--------|------------|
[Decision log entries]

### Decision Evolution
- Initial Decision: [First decision]
- Current Decision: [Most recent decision]
- Changes: [List of changes]
- Superseded Decisions: [List]

### Patterns Identified
- Most Common Decision Type: [Type]
- Most Active Decision Maker: [Name]
- Decision Frequency: [Pattern]

### Reconciliation Needs
- Conflicting Decisions: [List]
- Superseded Decisions: [List]
- Recommendations: [How to reconcile]
```

## Decision Authority

**Agent Can:**
- Read decision logs from documents
- Query decisions by various parameters
- Identify decision patterns
- Suggest reconciliation approaches

**Human Must:**
- Validate reconciliation suggestions
- Make final reconciliation decisions
- Approve decision changes

## Related Documents

- [Decision Log Format](../../../methodology/decision-log-format.md)
- [Decision Framework](../../../methodology/decision-framework.md)
- [Decision Reconciliation Prompt](./decision-reconciliation-prompt.md)


