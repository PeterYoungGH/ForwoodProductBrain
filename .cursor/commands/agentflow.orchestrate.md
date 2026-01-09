# Orchestrate Workflow (Skills-Based)

Run the full 7-stage workflow using skills, with explicit stops at human decision points.

## Skills Used

This command uses skills from all categories, orchestrated by:
- `orchestration/detect-workflow-stage.md`
- `orchestration/select-next-skill.md`
- `orchestration/chain-skills-for-stage.md`
- `orchestration/escalate-to-human.md`
- `orchestration/detect-workflow-state.md`
- `orchestration/reconcile-kanban-documents.md`

## Workflow Stages

| Stage | Name | Skills Used | Human Decision |
|-------|------|-------------|----------------|
| 1 | Inbox Processing | Triage skills | MEDIUM/HIGH risk routing |
| 2 | Insight Extraction | Research + Synthesis skills | None |
| 3 | Research Synthesis | Synthesis skills | None |
| 4 | Opportunity Validation | Opportunity skills | 🔴 Prioritization |
| 5 | Solution Exploration | Solution skills | 🔴 Solution selection |
| 6 | Experimentation | Validation skills | 🔴 Go/No-Go |
| 7 | Roadmap Inclusion | Strategy skills | 🔴 Roadmap decision |

## Execution Flow

### Pre-Flight Check
```
1. detect-workflow-state → Read current state from kanban + docs
2. reconcile-kanban-documents → Fix any mismatches
```

### For Each Item to Process
```
3. detect-workflow-stage → Determine current stage
4. select-next-skill → Choose appropriate skill(s)
5. chain-skills-for-stage → Execute skill chain
6. Check for decision point → If yes, escalate-to-human
7. Update documents and kanban
8. Move to next stage or item
```

### Human Decision Points

At stages 4, 5, 6, 7:
- Present analysis and recommendations
- Wait for human decision
- Log decision in document history
- Continue workflow

## Comparison to pm.orchestrate-workflow

| Aspect | pm.orchestrate-workflow | agentflow.orchestrate |
|--------|------------------------|----------------------|
| Approach | Command sequence | Skills-based |
| Flexibility | Fixed stages | Dynamic skill selection |
| Visibility | Command names | Skill execution log |
| Customization | Limited | Swap skills per stage |

## Example

```
@agentflow.orchestrate
```

Runs orchestration across all items needing processing.

```
@agentflow.orchestrate 00-inbox/raw/2026-01-08-customer-feedback-[INBOX].md
```

Orchestrates a specific item through the workflow.


