# Calculate Decision Confidence

**Category:** Orchestration
**Strategic Theme:** N/A
**Autonomy Level:** Full
**Workflow Stages:** 4, 5, 6, 7 (Decision points)

## Purpose
Score AI confidence in a decision to determine if auto-approval is appropriate.

## Inputs Required
- Decision to assess
- Evidence quality
- Risk level
- Historical patterns

## Process Steps
1. **Assess evidence strength** - How strong is supporting data?
2. **Check risk level** - HIGH risk = lower confidence threshold
3. **Consider consistency** - Does this align with patterns?
4. **Factor uncertainty** - What's unknown?
5. **Calculate score** - 0-100 confidence

## Confidence Thresholds
| Threshold | Action |
|-----------|--------|
| 90-100% | Auto-approve (if allowed by policy) |
| 70-89% | Recommend with high confidence |
| 50-69% | Recommend with caveats |
| <50% | Escalate to human |

## Output Format
Confidence score with factors and recommended action.

## Related Skills
- [[apply-decision-policy]] - Uses confidence for auto-decisions
- [[escalate-to-human]] - When confidence is low

## Used By Commands
- `agentflow.autonomous` - Auto-decision logic
