# Solution Risk Assessment Prompt

## Use Case

Use this prompt when assessing solutions using the Four Product Risks Framework to evaluate viability before selection and experimentation.

## Context

This prompt guides the risk assessment of solutions using the Four Product Risks Framework from `07-reference/methodology/four-product-risks-framework.md` and decision rules from `04-opportunities/04-solutions/DECISION-RULES.md`.

## Prompt Text

Assess the following solution using the Four Product Risks Framework:

### Solution Document
[Link to or paste solution document content]

### Related Opportunity
[Link to related opportunity document]

### Risk Assessment Tasks

1. **Value Risk Assessment**
   - Question: Will customers use it?
   - Assess: Does it solve a genuine, high-priority problem?
   - Evidence: [Review user research, customer feedback, data]
   - Risk Level: [High / Medium / Low]
   - Rationale: [Why this risk level]

2. **Usability Risk Assessment**
   - Question: Can users figure it out?
   - Assess: Can target users intuitively complete key tasks?
   - Evidence: [Review usability testing, prototype feedback]
   - Risk Level: [High / Medium / Low]
   - Rationale: [Why this risk level]

3. **Feasibility Risk Assessment**
   - Question: Can we build it?
   - Assess: Do we have the necessary skills, technology, and resources?
   - Evidence: [Review technical validation, engineering input]
   - Risk Level: [High / Medium / Low]
   - Rationale: [Why this risk level]

4. **Business Viability Risk Assessment**
   - Question: Does it work for our business?
   - Assess: Is it financially sustainable and aligned with strategy?
   - Evidence: [Review business case, stakeholder alignment]
   - Risk Level: [High / Medium / Low]
   - Rationale: [Why this risk level]

5. **Implementation Considerations**
   - Effort: [High / Medium / Low]
   - Complexity: [High / Medium / Low]
   - Dependencies: [List dependencies]
   - Risks: [List risks]

6. **Validation Planning**
   - Identify assumptions from solution document
   - Map assumptions to risks
   - Suggest experiments for high-risk assumptions
   - Propose experiment sequence

### Output Format

Provide risk assessment in this format:

```markdown
## Risk Assessment Results

### Four Product Risks

#### Value Risk
- Risk Level: [High / Medium / Low]
- Evidence: [List evidence available]
- Missing Evidence: [List missing evidence]
- Rationale: [Why this risk level]

#### Usability Risk
- Risk Level: [High / Medium / Low]
- Evidence: [List evidence available]
- Missing Evidence: [List missing evidence]
- Rationale: [Why this risk level]

#### Feasibility Risk
- Risk Level: [High / Medium / Low]
- Evidence: [List evidence available]
- Missing Evidence: [List missing evidence]
- Rationale: [Why this risk level]

#### Business Viability Risk
- Risk Level: [High / Medium / Low]
- Evidence: [List evidence available]
- Missing Evidence: [List missing evidence]
- Rationale: [Why this risk level]

### Overall Risk Summary
- High Risk Areas: [List high-risk areas]
- Medium Risk Areas: [List medium-risk areas]
- Low Risk Areas: [List low-risk areas]

### Implementation Considerations
- Effort: [High / Medium / Low]
- Complexity: [High / Medium / Low]
- Dependencies: [List]
- Risks: [List]

### Validation Plan
- Assumptions: [List assumptions]
- High-Risk Assumptions: [List]
- Suggested Experiments: [List experiments]
- Experiment Sequence: [Proposed order]

### Recommendations
- [List recommendations for reducing risks]
- [List recommendations for validation]
```

## Decision Authority

**Agent Can:**
- Assess all four product risks
- Flag high-risk areas
- Identify missing evidence
- Suggest validation experiments

**Human Must:**
- Validate critical risks (especially HIGH risk areas)
- Make solution selection decision
- Approve validation plan

## Related Documents

- [Solution Decision Rules](../../../04-opportunities/04-solutions/DECISION-RULES.md)
- [Four Product Risks Framework](../../../methodology/four-product-risks-framework.md)
- [Solutions Format Rules](../../../04-opportunities/04-solutions/RULES.md)
- [Decision Framework](../../../methodology/decision-framework.md)



