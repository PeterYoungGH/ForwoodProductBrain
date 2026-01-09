# Chain Skills for Stage

**Category:** Orchestration
**Strategic Theme:** N/A
**Autonomy Level:** Full
**Workflow Stages:** All

## Purpose
Compose and execute skill sequences for a given workflow stage.

## Inputs Required
- Selected skills from select-next-skill
- Item to process
- Stage context
- Previous outputs

## Process Steps
1. **Order skills** - Determine execution sequence
2. **Check dependencies** - Does skill B need output from skill A?
3. **Execute sequentially** - Run each skill in order
4. **Pass outputs** - Feed skill outputs to next skill
5. **Aggregate results** - Combine all skill outputs

## Skill Chains by Stage
| Stage | Typical Chain |
|-------|---------------|
| 1 | classify → assess-risk → route |
| 2 | extract-findings → identify-patterns → create-insight |
| 4 | frame-opportunity → calculate-score → validate-format |
| 5 | generate-options → assess-risks → compare |

## Output Format
Chained skill execution with aggregated outputs and status.

## Related Skills
- [[select-next-skill]] - Provides skills to chain
- [[detect-workflow-stage]] - Provides stage context

## Used By Commands
- `agentflow.orchestrate` - Skill chaining
- `agentflow.autonomous` - Autonomous execution
