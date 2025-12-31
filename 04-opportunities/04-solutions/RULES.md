# Solutions - Format Rules

Standard format specification for Solution documents based on the Opportunity Solution Tree (OST) framework.

## Purpose

Solutions are potential ways to address identified opportunities. They are solution-focused, linked to specific opportunities, multiple solutions can address one opportunity, and should be validated before full implementation.

## Required Document Structure

### 1. Title
```markdown
# Solution: [Name]
```
- Use descriptive, solution-focused name
- Capitalize each major word
- Be specific about what the solution is

### 2. Metadata (Required)
```markdown
**Status:** [Active/Proposed/Archived]
**Created:** [YYYY-MM-DD]
**Last Updated:** [YYYY-MM-DD]
**Priority:** [High/Medium/Low]
```
- Status must be one of: Active, Proposed, Archived
- Priority helps with prioritization
- Dates must be in YYYY-MM-DD format
- Update Last Updated whenever document is modified

### 3. Overview (Required)
Brief one-to-two sentence description of the solution and how it addresses the opportunity.

**Guidelines:**
- Should clearly describe the solution
- Explain how it addresses the opportunity
- Be concise but informative

### 4. Related Opportunity (Required)
Link to the opportunity this solution addresses.

**Format:**
```markdown
Link to the opportunity this solution addresses:
- [Opportunity Name](../03-opportunities/active/opportunity-name.md)
```

**Guidelines:**
- Must link to exactly one opportunity
- Use relative path
- Link text should be the opportunity name

### 5. Solution Description (Required)
Detailed description of the proposed solution, including:
- What the solution is
- How it works
- Key features or components

**Guidelines:**
- 2-4 paragraphs typically
- Be specific about the solution approach
- Include technical or implementation details if relevant
- Explain the solution clearly

### 6. How It Addresses the Opportunity (Required)
Explanation of how this solution addresses the customer need, pain point, or desire identified in the opportunity.

**Guidelines:**
- Clearly connect the solution to the opportunity
- Explain the mechanism by which it addresses the customer need
- Be specific about the connection

### 7. Assumptions (Required)
Key assumptions underlying this solution.

**Format:**
```markdown
- [Assumption 1]
- [Assumption 2]
```

**Guidelines:**
- List assumptions that need to be validated
- Include assumptions about user behavior, technical feasibility, etc.
- These should be tested through experiments

### 8. Expected Impact (Required)
Expected impact on the opportunity and outcomes.

**Format:**
```markdown
### On Opportunity
- [How this solution will address the opportunity]

### On Outcomes
- **Product Outcome:** [Expected impact on product outcome]
- **Business Outcome:** [Expected impact on business outcome]
```

**Guidelines:**
- Be specific about expected impact
- Link to outcomes if possible
- Include quantitative expectations if available

### 9. Implementation Considerations (Required)
Practical considerations for implementing this solution.

**Format:**
```markdown
- **Effort:** [High/Medium/Low]
- **Complexity:** [High/Medium/Low]
- **Dependencies:** [List dependencies]
- **Risks:** [List risks]
```

**Guidelines:**
- Assess effort and complexity honestly
- List technical or organizational dependencies
- Identify key risks
- Help with prioritization decisions

### 10. Experiments (Optional but Recommended)
Links to experiments that test this solution.

**Format:**
```markdown
Link to experiments that test this solution:
- [Experiment 1](../05-experiments/active/experiment-name.md)
- [Experiment 2](../05-experiments/planned/experiment-name.md)
- [Experiment 3](../05-experiments/completed/experiment-name.md)
```

**Guidelines:**
- Link to experiments as they are created
- Include active, planned, and completed experiments
- Shows validation progress

### 11. Validation Status (Required)
Current validation status of the solution.

**Format:**
```markdown
- [ ] Hypothesis defined
- [ ] Experiment designed
- [ ] Experiment running
- [ ] Results analyzed
- [ ] Decision made (proceed/don't proceed)
```

**Guidelines:**
- Track progress through validation
- Check off items as they are completed
- Helps track where solution is in validation process

### 12. Decision (Required)
Decision status and rationale.

**Format:**
```markdown
**Status:** [In Progress/Approved/Rejected/On Hold]

**Decision Date:** [YYYY-MM-DD]

**Rationale:** [Why this decision was made]
```

**Guidelines:**
- Update as decision is made
- Include rationale for transparency
- Document decision date

### 13. Notes (Optional)
Additional context, learnings, or considerations.

## Format Requirements

1. **Opportunity Linking**: Must link to specific opportunity
2. **Solution Focus**: Must clearly describe the solution
3. **Connection**: Must explain how it addresses the opportunity
4. **Validation**: Must have validation status tracked
5. **Experiments**: Should link to experiments testing the solution

## Content Guidelines

### What Makes a Good Solution

- **Specific**: Clear and detailed about what the solution is
- **Opportunity-Linked**: Clearly addresses a specific opportunity
- **Actionable**: Can be implemented
- **Validated**: Has validation plan or status
- **Assumptions Documented**: Key assumptions are identified

### Common Mistakes to Avoid

- ❌ Too vague or abstract
- ❌ Missing link to opportunity
- ❌ Doesn't explain how it addresses the opportunity
- ❌ No validation plan or status
- ❌ Assumptions not documented
- ❌ No consideration of implementation challenges

## Linking Requirements

### Required Links
- **Opportunity**: Must link to exactly one opportunity

### Recommended Links
- Experiments testing this solution
- Related outcomes (if direct connection)

### Link Format
- Use relative paths: `../03-opportunities/active/opportunity-name.md`
- Link text should be descriptive (opportunity/experiment name)
- Keep links updated as related items are created

## Decision Validation Requirements

### Decision Points

All solutions must have decisions logged for:

1. **Solution Creation/Updates** (LOW RISK - streamlined but requires selection)
   - Decision log recommended when solution is created or significantly updated
   - Should include rationale

2. **Solution Selection** (Human decision required)
   - Decision log required when solution is selected for pursuit
   - Must include risk assessment, implementation considerations, and rationale

3. **Risk Assessment** (Should be logged, especially for high-risk areas)
   - Decision log recommended when four product risks are assessed
   - Must be logged for high-risk areas

4. **Validation Planning** (Should be logged)
   - Decision log recommended when validation plan is approved
   - Should note which assumptions will be tested

### Decision Logging

See `07-reference/methodology/decision-log-format.md` for decision log format.

**Required for:**
- Solution selection decisions
- Risk assessments (especially high-risk areas)

**Decision History Section:**
All solution documents must include a "Decision History" section. See `07-reference/templates/decision-history-section-template.md` for format.

### Decision Validation

Before making decisions, validate using:
- [Solution Decision Rules](./DECISION-RULES.md)
- [Solution Risk Assessment Prompt](../../07-reference/prompts/decision-facilitation/solution-risk-assessment-prompt.md)
- [Four Product Risks Framework](../../07-reference/methodology/four-product-risks-framework.md)

## Validation Checklist

Before considering a Solution document complete, verify:

- [ ] Title follows format: `# Solution: [Name]`
- [ ] Metadata includes Status, Created, Last Updated, Priority
- [ ] Overview clearly describes solution and connection to opportunity
- [ ] Link to Related Opportunity is present
- [ ] Solution Description is detailed and clear
- [ ] "How It Addresses the Opportunity" section explains the connection
- [ ] Assumptions are documented
- [ ] Expected Impact is described
- [ ] Implementation Considerations are assessed
- [ ] Validation Status is tracked
- [ ] Decision section is present (can be "In Progress")
- [ ] All links use correct relative paths
- [ ] **Decision History section is present** (see template)
- [ ] **All required decisions are logged** (selection, risk assessment)
- [ ] **Four product risks have been assessed** (see DECISION-RULES.md)

## Example Structure

```markdown
# Solution: Redesign Navigation Structure

**Status:** Active
**Created:** 2024-01-15
**Last Updated:** 2024-11-27
**Priority:** High

## Overview

Redesign the product navigation to match user mental models and improve feature discoverability, addressing the opportunity of users struggling to find key features.

## Related Opportunity

Link to the opportunity this solution addresses:
- [Users Struggle to Find Key Features](../03-opportunities/active/users-struggle-find-features.md)

## Solution Description

Redesign the main navigation structure to organize features based on user mental models and workflows rather than technical categories. This includes:

- Reorganizing top-level navigation into user-centric categories (e.g., "My Work", "Team", "Reports" instead of "Features", "Settings", "Admin")
- Implementing a more intuitive hierarchy that matches how users think about their work
- Adding visual cues and improved labeling
- Creating a searchable navigation menu
- Progressive disclosure for advanced features

The new structure will be based on user research findings about how users mentally organize features and their primary workflows.

## How It Addresses the Opportunity

This solution directly addresses the opportunity by:
- Organizing features in a way that matches user mental models, making features easier to find
- Reducing cognitive load through clearer categorization
- Providing multiple discovery paths (navigation, search)
- Making feature locations more predictable and learnable

By aligning navigation with how users think about their work, users will be able to find features more intuitively without relying on memory or support.

## Assumptions

- Users' mental models for feature organization are consistent enough to design around
- Navigation redesign won't disrupt existing users' workflows significantly
- Improved discoverability will lead to increased feature usage
- The new structure will scale as new features are added

## Expected Impact

### On Opportunity
- Reduce time to find features by 50%
- Increase feature discovery rate
- Reduce support requests about feature location

### On Outcomes
- **Product Outcome:** [Improve Feature Adoption](../02-product-outcomes/improve-feature-adoption.md) - Expected 30% increase in feature usage
- **Business Outcome:** [Increase Customer Retention](../01-business-outcomes/increase-customer-retention.md) - Improved product confidence leading to better retention

## Implementation Considerations

- **Effort:** High
- **Complexity:** High
- **Dependencies:** 
  - User research to understand mental models
  - Design system updates
  - Migration plan for existing users
- **Risks:** 
  - Disruption to existing users
  - Need for extensive user testing
  - Potential for feature location confusion during transition

## Experiments

Link to experiments that test this solution:
- [Navigation Prototype Testing](../05-experiments/active/navigation-prototype-test.md)
- [Mental Model Research](../05-experiments/completed/mental-model-research.md)

## Validation Status

- [x] Hypothesis defined
- [x] Experiment designed
- [x] Experiment running
- [ ] Results analyzed
- [ ] Decision made (proceed/don't proceed)

## Decision

**Status:** In Progress

**Decision Date:** [To be determined]

**Rationale:** Currently running prototype testing experiments. Decision pending results analysis.

## Notes

- Need to consider different user personas and their navigation patterns
- May require phased rollout to minimize disruption
- Should include user education and onboarding updates
```

## Conformance Instructions

To conform an existing Solution document to this format:

1. Check title format matches `# Solution: [Name]`
2. Ensure all required metadata fields are present
3. Verify Overview describes solution and connection to opportunity
4. Ensure link to Related Opportunity exists
5. Check Solution Description is detailed and clear
6. Verify "How It Addresses the Opportunity" section exists and explains connection
7. Ensure Assumptions are documented
8. Check Expected Impact section is present
9. Verify Implementation Considerations are assessed
10. Ensure Validation Status is tracked with checkboxes
11. Check Decision section is present
12. Validate all links use correct relative paths
13. Add any missing required sections

















