# Suggest Workflow Acceleration

**Category:** Orchestration
**Strategic Theme:** N/A
**Autonomy Level:** Full
**Workflow Stages:** All

## Purpose
Identify stalled items and suggest actions to speed up the workflow.

## Inputs Required
- Workflow state from detect-workflow-state
- Age of items in each stage
- Blocking factors
- Available capacity

## Process Steps
1. **Identify stalled items** - What's been waiting too long?
2. **Diagnose blockers** - Why is it stuck?
3. **Suggest unblocking** - What action would help?
4. **Prioritize acceleration** - Which items matter most?
5. **Estimate impact** - How much time saved?

## Stalled Thresholds
| Stage | Days Until Stalled | Action |
|-------|-------------------|--------|
| Inbox | 3 | Process or archive |
| Opportunity | 7 | Validate or backlog |
| Solution | 14 | Assess or park |
| Experiment | 21 | Conclude or extend |

## Output Format
Acceleration suggestions with stalled items, blockers, and recommended actions.

## Related Skills
- [[detect-workflow-state]] - State input
- [[prioritize-opportunities]] - Prioritization help

## Used By Commands
- `agentflow.orchestrate` - Flow optimization
- `agentflow.autonomous` - Proactive workflow management
