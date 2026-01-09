# Apply Decision Policy

**Category:** Orchestration
**Strategic Theme:** N/A
**Autonomy Level:** Supervised
**Workflow Stages:** 4, 5, 6, 7 (Decision points)

## Purpose
Apply auto-approval rules based on decision type, risk level, and confidence.

## Inputs Required
- Decision type
- Risk level (from assess-risk-level)
- Confidence score (from calculate-decision-confidence)
- Decision policies

## Process Steps
1. **Identify decision type** - Prioritization, selection, go/no-go
2. **Check risk level** - HIGH risk = human required
3. **Apply confidence threshold** - Meet minimum?
4. **Check policy rules** - Any overrides?
5. **Determine action** - Auto-approve, recommend, or escalate

## Decision Policies
| Risk Level | Confidence | Action |
|------------|------------|--------|
| LOW | ≥90% | Auto-approve |
| LOW | 70-89% | Auto-approve with log |
| MEDIUM | ≥90% | Recommend, await approval |
| MEDIUM | <90% | Present for decision |
| HIGH | Any | Human required |

## Output Format
Policy application result with action and rationale.

## Related Skills
- [[calculate-decision-confidence]] - Provides confidence
- [[escalate-to-human]] - When human needed

## Used By Commands
- `agentflow.autonomous` - Policy application
