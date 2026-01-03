# Prioritization Prompt

## Use Case

Use this prompt when prioritizing opportunities or solutions to determine what should be worked on next, considering multiple factors including scores, evidence, alignment, and resources.

## Context

This prompt guides prioritization decisions using scoring frameworks (JTBD for opportunities, Innovation Decision Framework for roadmap items) and decision rules from the relevant DECISION-RULES.md files.

## Prompt Text

Prioritize the following items:

### Items to Prioritize
[List opportunities, solutions, or roadmap items to prioritize]

### Prioritization Context
- Current Active Items: [List]
- Available Resources: [Describe]
- Strategic Priorities: [Describe]
- Timeline Constraints: [Describe]

### Prioritization Tasks

1. **Calculate Scores** (if applicable)
   - For Opportunities: Use JTBD formula `Opportunity = Importance × (10 − Satisfaction)`
   - For Innovation Items: Use Innovation Decision Framework scores
   - If data missing, flag for human input

2. **Assess Evidence Strength**
   - Review evidence for each item
   - Rate evidence strength (Strong / Medium / Weak)
   - Flag items with weak evidence

3. **Evaluate Alignment**
   - Check alignment with strategic outcomes
   - Check alignment with roadmap themes
   - Check portfolio balance

4. **Assess Resource Requirements**
   - Estimate effort for each item
   - Check resource availability
   - Identify dependencies

5. **Compare and Rank**
   - Compare items across all factors
   - Rank items by priority
   - Suggest Active / Backlog / Archive status

### Output Format

Provide prioritization results in this format:

```markdown
## Prioritization Results

### Item Rankings

#### [Item 1 Name]
- Score: [Number] (if calculable)
- Evidence Strength: [Strong / Medium / Weak]
- Strategic Alignment: [High / Medium / Low]
- Resource Requirements: [Effort estimate]
- Suggested Status: [Active / Backlog / Archive]
- Rationale: [Why this status]

#### [Item 2 Name]
[... repeat for each item]

### Prioritization Summary
- Recommended Active Items: [List]
- Recommended Backlog Items: [List]
- Recommended Archive Items: [List]

### Key Factors
- Highest Scoring Items: [List]
- Strongest Evidence: [List]
- Best Strategic Alignment: [List]
- Most Resource-Efficient: [List]

### Recommendations
- [Recommendations for prioritization]
- [Items that need more information]
- [Items that should be deprioritized]
```

## Decision Authority

**Agent Can:**
- Calculate scores (if data available)
- Assess evidence strength
- Evaluate alignment
- Suggest prioritization

**Human Must:**
- Make final prioritization decisions
- Approve Active / Backlog / Archive status
- Consider strategic context not captured in scores

## Related Documents

- [Opportunity Decision Rules](../../../04-opportunities/03-opportunities/DECISION-RULES.md)
- [Solution Decision Rules](../../../04-opportunities/04-solutions/DECISION-RULES.md)
- [Jobs to Be Done Framework](../../../methodology/jobs-to-be-done-framework.md)
- [Innovation Decision Framework](../../../methodology/innovation-decision-framework.md)
- [Decision Framework](../../../methodology/decision-framework.md)


