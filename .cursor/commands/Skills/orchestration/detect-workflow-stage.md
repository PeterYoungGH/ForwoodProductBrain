# Detect Workflow Stage

**Category:** Orchestration
**Strategic Theme:** N/A
**Autonomy Level:** Full
**Workflow Stages:** All

## Purpose
Determine the current workflow stage of an item by analyzing kanban position, document status, and processing history.

## Inputs Required
- Document or item to assess
- Kanban board state
- Document metadata and status
- Processing history

## Process Steps
1. **Check kanban position** - Which column is the card in?
2. **Read document status** - What does frontmatter say?
3. **Review decision history** - What decisions have been made?
4. **Validate consistency** - Do kanban and doc agree?
5. **Determine stage** - 1-7 based on evidence

## Stage Definitions
| Stage | Name | Indicators |
|-------|------|------------|
| 1 | Inbox | In raw/, no processing |
| 2 | Insights | Research exists, extracting |
| 3 | Synthesis | Multiple sources, combining |
| 4 | Opportunity | Framing/validating opportunity |
| 5 | Solution | Exploring/assessing solutions |
| 6 | Experiment | Running validation |
| 7 | Roadmap | Inclusion decision |

## Output Format
Stage detection result with confidence and next recommended action.

## Related Skills
- [[select-next-skill]] - Uses stage to choose skills
- [[reconcile-kanban-documents]] - Fixes inconsistencies

## Used By Commands
- `agentflow.orchestrate` - Stage detection
- `agentflow.autonomous` - Autonomous workflow
