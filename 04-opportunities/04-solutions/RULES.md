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

### 3.5. User Story (Required - PM-DoR)
User story in standard format.

**Format:**
```markdown
As a [user type], I want [goal], so that [benefit].
```

**Guidelines:**
- User type must be specific (not "our customers")
- Goal must be clear and actionable
- Benefit must explain the value
- Required for PM-DoR validation

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

### 7. Success Metrics (Required - PM-DoR)
How will we measure success? Specific, measurable targets.

**Format:**
```markdown
- Metric 1: [specific target]
- Metric 2: [specific target]
- Metric 3: [specific target]
```

**Guidelines:**
- Must be specific (not vague)
- Must be measurable (quantifiable)
- Must have targets (not just direction)
- Required for PM-DoR validation
- Replaces or supplements "Expected Impact" section

### 8. Why Now? (Required - PM-DoR)
Business context for timing and priority.

**Format:**
```markdown
- [Business driver 1]
- [Business driver 2]
- [Timing rationale]
```

**Guidelines:**
- Must provide business context for timing
- Must explain priority rationale
- Must include timing drivers (not just "it's important")
- Required for PM-DoR validation

### 9. Acceptance Criteria (Required - PM-DoR)
Specific, testable criteria for completion.

**Format:**
```markdown
1. GIVEN [context] WHEN [action] THEN [result]
2. GIVEN [context] WHEN [action] THEN [result]
3. GIVEN [context] WHEN [action] THEN [result]
4. GIVEN [context] WHEN [action] THEN [result]
5. GIVEN [context] WHEN [action] THEN [result]
```

**Guidelines:**
- Must use GIVEN/WHEN/THEN format
- Minimum count based on work size (see PM-DoR standards):
  - XS (1-2 points): 3 AC
  - S (3-5 points): 5 AC
  - M (8 points): 7 AC
  - L (13 points): 10 AC
  - XL (21+ points): 15 AC
- Must be specific, testable, unambiguous, complete, and bounded
- Required for PM-DoR validation
- See [PM-DoR Standards](../../07-reference/technical-specs/pm-dor-standards.md) for quality checklist

### 10. Dependencies (Required - PM-DoR)
External systems, teams, or factors this solution depends on.

**Format:**
```markdown
- [ ] [System/team/factor 1] - [Status]
- [ ] [System/team/factor 2] - [Status]
```

**Guidelines:**
- Must list external systems, teams, or factors
- Must include status for each dependency
- Cannot be "None" without justification
- Required for PM-DoR validation
- Previously part of Implementation Considerations, now separate section

### 11. Out of Scope (Required - PM-DoR)
What is explicitly NOT included in this work.

**Format:**
```markdown
- [Explicitly excluded item 1]
- [Explicitly excluded item 2]
```

**Guidelines:**
- Must explicitly document what is NOT included
- Must set clear boundaries
- Cannot be "Everything not mentioned"
- Required for PM-DoR validation

### 12. Wireframes/Mockups (Required for UI-Impacting Work - PM-DoR)
Visual representation of UI changes.

**Format:**
```markdown
[Attach or link to visuals]
```

**Guidelines:**
- Required for UI-impacting work only
- Must provide visual representation of UI changes
- Must cover all UI states (empty, loading, error, success, etc.)
- Must include all flows
- Required for PM-DoR validation if UI work

### 13. User Flow (Required for UI-Impacting Work - PM-DoR)
How user navigates through the feature.

**Format:**
```markdown
[Describe the navigation/flow]
```

**Guidelines:**
- Required for UI-impacting work only
- Must describe how user navigates through the feature
- Must ensure full flow is considered
- Required for PM-DoR validation if UI work

### 14. Breakdown Suggestion (Required for Large Work >13 points - PM-DoR)
Proposed phasing or decomposition.

**Format:**
```markdown
[Proposed phasing or decomposition]
```

**Guidelines:**
- Required for large/complex work (>13 points estimated) only
- Must propose phasing or decomposition
- Must support incremental delivery
- Required for PM-DoR validation if large work

### 15. MVP Definition (Required for Large Work >13 points - PM-DoR)
Minimum viable version if full scope is at risk.

**Format:**
```markdown
**Must have:**
- [Essential feature 1]
- [Essential feature 2]

**Nice to have:**
- [Optional feature 1]
- [Optional feature 2]
```

**Guidelines:**
- Required for large/complex work (>13 points estimated) only
- Must separate must-have from nice-to-have
- Must identify minimum viable version
- Required for PM-DoR validation if large work

### 16. Assumptions (Required)
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

### 17. Expected Impact (Required)
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

### 18. Implementation Considerations (Required)
Practical considerations for implementing this solution.

**Format:**
```markdown
- **Effort:** [High/Medium/Low]
- **Complexity:** [High/Medium/Low]
- **Risks:** [List risks]
```

**Guidelines:**
- Assess effort and complexity honestly
- Identify key risks
- Help with prioritization decisions
- **Note:** Dependencies are now documented in the "Dependencies" section (section 10)

### 19. Experiments (Optional but Recommended)
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

### 20. Validation Status (Required)
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

### 21. PM-DoR Validation Checklist (Required - PM-DoR)
PM-DoR validation checklist to ensure solution is ready for engineering refinement.

**Format:**
```markdown
### Required for ALL Solutions
- [ ] Business Problem clearly stated
- [ ] Success Metrics defined (specific, measurable targets)
- [ ] Acceptance Criteria present (≥5 for standard work, GIVEN/WHEN/THEN format)
- [ ] User Story provided (As a [user], I want [goal], so that [benefit])
- [ ] Why Now? section completed (business context for timing)
- [ ] Dependencies identified and status known
- [ ] Out of Scope explicitly documented

### Required for UI-Impacting Work
- [ ] Wireframes/Mockups provided (all UI states and flows)
- [ ] User Flow documented

### Required for Large/Complex Work (>13 points estimated)
- [ ] Breakdown Suggestion provided
- [ ] MVP Definition provided (must-have vs nice-to-have)

### Validation Status
- [ ] PM-DoR Complete
- [ ] Validated by: [TDM/PM Lead]
- [ ] Validation Date: [YYYY-MM-DD]
- [ ] Ready for Engineering Refinement: [Yes/No]
```

**Guidelines:**
- Required for all solutions
- Must be completed before solution moves to roadmap inclusion
- See [PM-DoR Validation Guide](../../07-reference/methodology/pm-dor-validation-guide.md) for detailed validation process
- See [PM-DoR Standards](../../07-reference/technical-specs/pm-dor-standards.md) for quality requirements

### 22. Decision (Required)
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

### 23. Notes (Optional)
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
- [ ] **User Story is provided** (PM-DoR requirement)
- [ ] Solution Description is detailed and clear
- [ ] "How It Addresses the Opportunity" section explains the connection
- [ ] **Success Metrics are defined** (specific, measurable targets - PM-DoR requirement)
- [ ] **Why Now? section is completed** (business context - PM-DoR requirement)
- [ ] **Acceptance Criteria are present** (≥5 for standard work, GIVEN/WHEN/THEN format - PM-DoR requirement)
- [ ] **Dependencies are identified** (with status - PM-DoR requirement)
- [ ] **Out of Scope is explicitly documented** (PM-DoR requirement)
- [ ] **Wireframes/Mockups provided** (if UI work - PM-DoR requirement)
- [ ] **User Flow documented** (if UI work - PM-DoR requirement)
- [ ] **Breakdown Suggestion provided** (if large work >13 points - PM-DoR requirement)
- [ ] **MVP Definition provided** (if large work >13 points - PM-DoR requirement)
- [ ] Assumptions are documented
- [ ] Expected Impact is described
- [ ] Implementation Considerations are assessed
- [ ] **PM-DoR Validation Checklist is completed** (PM-DoR requirement)
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

## PM-DoR Requirements

Solutions must meet PM-DoR (Product Manager Definition of Ready) criteria before moving to roadmap inclusion or engineering refinement. See:

- [PM-DoR Validation Guide](../../07-reference/methodology/pm-dor-validation-guide.md) - Detailed validation process
- [PM-DoR Standards Reference](../../07-reference/technical-specs/pm-dor-standards.md) - Quick reference for PM-DoR standards
- [PM-DoR Framework Research](../../03-discovery/research/process-research/pm-dor-framework-2026-01.md) - Full framework documentation

## Conformance Instructions

To conform an existing Solution document to this format:

1. Check title format matches `# Solution: [Name]`
2. Ensure all required metadata fields are present
3. Verify Overview describes solution and connection to opportunity
4. Ensure link to Related Opportunity exists
5. **Add User Story section** (PM-DoR requirement)
6. Check Solution Description is detailed and clear
7. Verify "How It Addresses the Opportunity" section exists and explains connection
8. **Add Success Metrics section** (PM-DoR requirement)
9. **Add Why Now? section** (PM-DoR requirement)
10. **Add Acceptance Criteria section** (PM-DoR requirement - GIVEN/WHEN/THEN format)
11. **Add Dependencies section** (PM-DoR requirement - with status)
12. **Add Out of Scope section** (PM-DoR requirement)
13. **Add Wireframes/Mockups section** (if UI work - PM-DoR requirement)
14. **Add User Flow section** (if UI work - PM-DoR requirement)
15. **Add Breakdown Suggestion section** (if large work >13 points - PM-DoR requirement)
16. **Add MVP Definition section** (if large work >13 points - PM-DoR requirement)
17. Ensure Assumptions are documented
18. Check Expected Impact section is present
19. Verify Implementation Considerations are assessed (dependencies moved to separate section)
20. **Add PM-DoR Validation Checklist** (PM-DoR requirement)
21. Ensure Validation Status is tracked with checkboxes
22. Check Decision section is present
23. Validate all links use correct relative paths
24. Add any missing required sections

















