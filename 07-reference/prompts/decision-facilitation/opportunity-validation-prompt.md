# Opportunity Validation Prompt

## Use Case

Use this prompt when validating opportunities to ensure they are well-formed, evidence-based, and properly linked to outcomes before prioritization.

## Context

This prompt guides the validation of opportunities using the decision rules from `04-opportunities/03-opportunities/DECISION-RULES.md`. It ensures opportunities meet quality standards and are ready for prioritization.

## Prompt Text

Validate the following opportunity using the decision rules:

### Opportunity Document
[Link to or paste opportunity document content]

### Validation Tasks

1. **Format Validation**
   - Check opportunity follows required structure per `04-opportunities/03-opportunities/RULES.md`
   - Verify customer-focused language (not solution-focused)
   - Check all required sections are present

2. **Evidence Validation**
   - Verify at least one piece of evidence is provided
   - Check evidence is specific and credible
   - Validate evidence links are correct

3. **Outcome Linking Validation**
   - Verify links to at least one product outcome
   - Check relative paths are correct
   - Validate connection to outcome is clear

4. **Opportunity Scoring** (if data available)
   - Calculate opportunity score using JTBD formula: `Opportunity = Importance × (10 − Satisfaction)`
   - If importance/satisfaction not provided, flag for human input
   - Suggest prioritization based on score

5. **Solution Readiness Assessment**
   - Assess if opportunity is ready for solution exploration
   - Check all readiness criteria are met
   - Flag any missing requirements

### Output Format

Provide validation results in this format:

```markdown
## Validation Results

### Format Validation
- [ ] Pass / [ ] Fail
- Issues: [List any issues found]

### Evidence Validation
- [ ] Pass / [ ] Fail
- Evidence Count: [Number]
- Issues: [List any issues found]

### Outcome Linking
- [ ] Pass / [ ] Fail
- Linked Outcomes: [List outcomes]
- Issues: [List any issues found]

### Opportunity Score
- Score: [Number] (if calculable)
- Importance: [Number] / 10
- Satisfaction: [Number] / 10
- Note: [If score cannot be calculated, explain why]

### Prioritization Suggestion
- Suggested Status: [Active / Backlog / Archive]
- Rationale: [Why this suggestion]

### Solution Readiness
- [ ] Ready / [ ] Not Ready
- Missing Requirements: [List any missing requirements]

### Recommendations
- [List recommendations for improving opportunity quality]
```

## Decision Authority

**Agent Can:**
- Validate format and structure
- Check evidence and links
- Calculate opportunity scores (if data available)
- Suggest prioritization
- Assess solution readiness

**Human Must:**
- Make final prioritization decision
- Validate evidence is sufficient
- Approve opportunity creation/updates

## Related Documents

- [Opportunity Decision Rules](../../../04-opportunities/03-opportunities/DECISION-RULES.md)
- [Opportunities Format Rules](../../../04-opportunities/03-opportunities/RULES.md)
- [Decision Framework](../../../methodology/decision-framework.md)
- [Jobs to Be Done Framework](../../../methodology/jobs-to-be-done-framework.md)

