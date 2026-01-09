# Reconcile Kanban Documents

**Category:** Orchestration
**Strategic Theme:** N/A
**Autonomy Level:** Supervised
**Workflow Stages:** All

## Purpose
Fix status mismatches between kanban cards and document metadata.

## Inputs Required
- Detected mismatches from detect-workflow-state
- Kanban board state
- Document states
- Reconciliation rules

## Process Steps
1. **Identify mismatches** - Where do states disagree?
2. **Determine truth source** - Which is correct?
3. **Apply reconciliation** - Update the incorrect one
4. **Log changes** - Document what was fixed
5. **Verify result** - Confirm consistency

## Reconciliation Rules
| Scenario | Truth Source | Action |
|----------|--------------|--------|
| Card ahead of doc | Document | Move card back |
| Doc ahead of card | Document | Move card forward |
| Card missing | Document | Create card |
| Doc missing | Investigate | May need doc creation |

## Output Format
Reconciliation report with changes made and verification status.

## Related Skills
- [[detect-workflow-state]] - Identifies mismatches
- [[detect-workflow-stage]] - Individual item state

## Used By Commands
- `agentflow.orchestrate` - Data integrity
- `agentflow.autonomous` - Pre-flight check
