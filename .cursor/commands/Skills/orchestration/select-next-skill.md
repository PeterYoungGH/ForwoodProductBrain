# Select Next Skill

**Category:** Orchestration
**Strategic Theme:** N/A
**Autonomy Level:** Full
**Workflow Stages:** All

## Purpose
Choose the appropriate skill(s) to execute based on current context and workflow stage.

## Inputs Required
- Current workflow stage
- Item type and state
- Available skills
- Previous skills executed

## Process Steps
1. **Review stage-skill mapping** - What skills apply to this stage?
2. **Check prerequisites** - Are required inputs available?
3. **Consider item state** - What specifically needs to happen?
4. **Select primary skill** - Main skill to execute
5. **Identify supporting skills** - Any helpers needed

## Stage-Skill Mapping
| Stage | Primary Skills |
|-------|----------------|
| 1 | classify-content-type, assess-risk-level, route-to-destination |
| 2 | extract-key-findings, identify-patterns |
| 3 | cross-reference-sources, consolidate-themes |
| 4 | frame-opportunity, calculate-jtbd-score, prioritize-opportunities |
| 5 | assess-four-risks, compare-solutions |
| 6 | design-experiment, analyze-experiment-results |
| 7 | calculate-innovation-score, create-roadmap-item |

## Output Format
Skill selection with rationale and execution order.

## Related Skills
- [[detect-workflow-stage]] - Provides stage context
- [[chain-skills-for-stage]] - Executes skill sequence

## Used By Commands
- `agentflow.orchestrate` - Skill selection
- `agentflow.autonomous` - Autonomous skill chaining
