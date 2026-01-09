# Detect Workflow State

**Category:** Orchestration
**Strategic Theme:** N/A
**Autonomy Level:** Full
**Workflow Stages:** All

## Purpose
Read current state from kanban boards and documents to determine what has and hasn't been processed.

## Inputs Required
- Kanban board files
- Document directory structure
- Processing logs (if available)

## Process Steps
1. **Read kanban board** - Parse card positions
2. **Scan documents** - Check frontmatter status
3. **Compare states** - Kanban vs document agreement
4. **Identify unprocessed** - What needs work?
5. **Identify stalled** - What's been waiting?

## State Detection
| State | Kanban | Document | Action |
|-------|--------|----------|--------|
| Unprocessed | Inbox | None | Process |
| In Progress | Processing | draft | Continue |
| Complete | Done | complete | Skip |
| Stalled | Any | old date | Investigate |
| Mismatch | X | Y | Reconcile |

## Output Format
Workflow state summary with items by state and recommended actions.

## Related Skills
- [[detect-workflow-stage]] - Individual item stage
- [[reconcile-kanban-documents]] - Fix mismatches

## Used By Commands
- `agentflow.orchestrate` - State detection
- `agentflow.autonomous` - Work queue management
