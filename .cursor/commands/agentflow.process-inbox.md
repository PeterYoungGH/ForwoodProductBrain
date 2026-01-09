# Process Inbox (Skills-Based)

Process inbox items using the skills library for classification, risk assessment, and routing.

## Skills Used

This command uses skills from `.cursor/commands/Skills/`:
- `triage/classify-content-type.md`
- `triage/assess-risk-level.md`
- `triage/route-to-destination.md`
- `triage/extract-action-items.md`
- `triage/identify-duplicates.md`

## Execution Flow

### Step 1: Scan Inbox
Read all items in `00-inbox/raw/` that have `[INBOX]` suffix.

### Step 2: For Each Item, Apply Skills

```
1. classify-content-type → Determine type (Research, Opportunity, etc.)
2. identify-duplicates → Check for existing related items
3. assess-risk-level → Rate HIGH/MEDIUM/LOW risk
4. extract-action-items → Pull any action items
5. route-to-destination → Suggest destination and action
```

### Step 3: Present Results

For each item processed, show:
- Classification result
- Risk level
- Recommended destination
- Action items (if any)
- Related documents found

### Step 4: Batch Low-Risk Actions

Group LOW risk items for batch approval.
Present HIGH/MEDIUM risk items individually.

## Approval Flow

- **LOW Risk Items:** Can be batch approved
- **MEDIUM Risk Items:** Present for individual approval
- **HIGH Risk Items:** Require explicit confirmation with rationale

## After Processing

1. Move processed items from `raw/` to `processing/` or destination
2. Update kanban board
3. Create any required documents
4. Log decisions made

## Comparison to pm.process-inbox-todo

| Aspect | pm.process-inbox-todo | agentflow.process-inbox |
|--------|----------------------|-------------------------|
| Approach | Prompt-based | Skills-based |
| Modularity | Monolithic | Composable skills |
| Customization | Limited | Swap/modify skills |
| Reusability | Low | High |

## Example

```
@agentflow.process-inbox
```

Processes all inbox items using skill chain, presents results for approval.


