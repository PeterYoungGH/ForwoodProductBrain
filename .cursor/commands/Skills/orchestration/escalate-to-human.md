# Escalate to Human

**Category:** Orchestration
**Strategic Theme:** N/A
**Autonomy Level:** Full
**Workflow Stages:** All (Decision points)

## Purpose
Determine when human intervention is needed and prepare decision context.

## Inputs Required
- Decision requiring escalation
- Escalation reason
- Context and options
- Urgency level

## Process Steps
1. **Package context** - What human needs to know
2. **Present options** - Clear choices with trade-offs
3. **Include recommendation** - AI's suggestion if applicable
4. **Set urgency** - How quickly is decision needed?
5. **Pause workflow** - Stop until decision received

## Escalation Triggers
- HIGH risk decisions
- Low confidence (<50%)
- Conflicting evidence
- Policy requires human
- Novel situation

## Output Format
Escalation package with context, options, recommendation, and urgency.

## Related Skills
- [[apply-decision-policy]] - Triggers escalation
- [[calculate-decision-confidence]] - Confidence trigger

## Used By Commands
- `agentflow.autonomous` - Human escalation
- `agentflow.orchestrate` - Decision point handling
