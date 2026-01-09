# Batch Decisions

**Category:** Orchestration
**Strategic Theme:** N/A
**Autonomy Level:** Full
**Workflow Stages:** 1, 4 (Triage, Prioritization)

## Purpose
Group routine decisions for efficient batch approval rather than one-by-one.

## Inputs Required
- Multiple decisions pending
- Risk levels for each
- Confidence scores for each
- Batch policies

## Process Steps
1. **Identify batchable decisions** - Same type, LOW risk
2. **Group by decision type** - Routing, prioritization, etc.
3. **Present as batch** - Single approval for group
4. **Separate exceptions** - HIGH risk or unique items
5. **Execute batch** - Apply decision to all items

## Batch Criteria
- LOW risk items only
- Same decision type
- High confidence (≥80%)
- No special circumstances

## Output Format
Batch proposal with grouped decisions and exceptions.

## Related Skills
- [[apply-decision-policy]] - Individual policies
- [[calculate-decision-confidence]] - Batch qualification

## Used By Commands
- `agentflow.autonomous` - Batch processing
