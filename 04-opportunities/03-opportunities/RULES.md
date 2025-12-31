# Opportunities - Format Rules

Standard format specification for Opportunity documents based on the Opportunity Solution Tree (OST) framework.

## Purpose

Opportunities are customer needs, pain points, or desires that, if addressed, will drive desired outcomes. They are customer-focused (not solution-focused), linked to specific outcomes, based on research and evidence, and multiple opportunities can support one outcome.

## Required Document Structure

### 1. Title
```markdown
# Opportunity: [Name]
```
- Use descriptive, customer-focused name
- Capitalize each major word
- Focus on the customer need, not the solution

### 2. Metadata (Required)
```markdown
**Status:** [Active/Backlog/Archived]
**Created:** [YYYY-MM-DD]
**Last Updated:** [YYYY-MM-DD]
**Priority:** [High/Medium/Low]
```
- Status must be one of: Active, Backlog, Archived
- Priority helps with prioritization
- Dates must be in YYYY-MM-DD format
- Update Last Updated whenever document is modified

### 3. Overview (Required)
Brief one-to-two sentence description of the customer need, pain point, or desire.

**Guidelines:**
- Should be customer-focused
- Describe the need, not the solution
- Be specific and clear

### 4. Customer Problem (Required)
Detailed description of the customer problem, need, or desire from the customer's perspective.

**Guidelines:**
- Must be customer-focused, not solution-focused
- Describe the problem from the customer's point of view
- Use customer language when possible
- 2-4 paragraphs typically
- Avoid solution language (e.g., "need a feature" → "struggle to accomplish X")

### 5. Evidence (Required)
What evidence supports this opportunity?

**Format:**
```markdown
What evidence supports this opportunity?
- [Research finding 1](../../03-discovery/research/...)
- [Data point 2](../../03-discovery/research/...)
- [User feedback 3](../../03-discovery/research/...)
```

**Guidelines:**
- Must have at least one piece of evidence
- Link to research, data, or user feedback
- Evidence should be specific and credible
- Can include: user research, analytics data, customer feedback, market research

### 6. Impact (Required)
How addressing this opportunity would impact outcomes.

**Format:**
```markdown
### Potential Impact on Outcomes
- **Product Outcome:** Link to `../02-product-outcomes/[outcome-name].md`
- **Business Outcome:** Link to `../01-business-outcomes/[outcome-name].md`

### Expected Impact
- [How addressing this opportunity would impact outcomes]
```

**Guidelines:**
- Must link to at least one product outcome
- Can link to business outcome if direct
- Explain expected impact clearly
- Be specific about the connection

### 7. Related Outcomes (Required)
Links to product and business outcomes this opportunity supports.

**Format:**
```markdown
- **Product Outcome:** [Link to product outcome](../02-product-outcomes/outcome-name.md)
- **Business Outcome:** [Link to business outcome](../01-business-outcomes/outcome-name.md)
```

**Guidelines:**
- Must link to at least one product outcome
- Use relative paths
- Link text should be the outcome name

### 8. Proposed Solutions (Optional but Recommended)
Links to solutions that address this opportunity.

**Format:**
```markdown
Link to solutions that address this opportunity:
- [Solution 1](../04-solutions/active/solution-name.md)
- [Solution 2](../04-solutions/proposed/solution-name.md)
```

**Guidelines:**
- Link to solutions as they are proposed
- Can include multiple solutions
- Solutions should directly address this opportunity

### 9. Research and Discovery (Optional but Recommended)
Links to related research that informed this opportunity.

**Format:**
```markdown
Link to related research:
- [Research document 1](../../03-discovery/research/...)
- [Research document 2](../../03-discovery/research/...)
```

**Guidelines:**
- Link to research that led to identifying this opportunity
- Can include user research, market research, data analysis
- Helps maintain traceability

### 10. Insights (Optional but Recommended)
Key insights that led to identifying this opportunity.

**Format:**
```markdown
Key insights that led to identifying this opportunity:
- [Insight 1]
- [Insight 2]
```

**Guidelines:**
- Synthesize learnings from research
- Explain why this opportunity matters
- Help others understand the "why"

### 11. Notes (Optional)
Additional context, assumptions, or considerations.

## Format Requirements

1. **Customer Focus**: Must be customer-focused, not solution-focused
2. **Evidence-Based**: Must have supporting evidence
3. **Outcome Linking**: Must link to at least one product outcome
4. **Problem Description**: Must describe customer needs, not solutions
5. **No Solution Language**: Problem description should avoid solution language

## Content Guidelines

### What Makes a Good Opportunity

- **Customer-Focused**: Describes customer needs, not solutions
- **Evidence-Based**: Supported by research, data, or feedback
- **Outcome-Linked**: Clearly connected to product/business outcomes
- **Specific**: Clear and unambiguous about the customer need
- **Actionable**: Can be addressed through product work

### Common Mistakes to Avoid

- ❌ Solution-focused language (e.g., "need a dashboard" instead of "struggle to track progress")
- ❌ No evidence supporting the opportunity
- ❌ Missing link to product outcome
- ❌ Too vague or abstract
- ❌ Business-focused instead of customer-focused
- ❌ Describing solutions in the problem section

### Writing Customer-Focused Opportunities

**Good Examples:**
- "Users struggle to find key features they need"
- "New users feel overwhelmed during onboarding"
- "Customers need better ways to collaborate with team members"

**Bad Examples (Solution-Focused):**
- "Users need a search feature" → Should be: "Users struggle to find content"
- "We should add a dashboard" → Should be: "Users can't track their progress"
- "Need to build an integration" → Should be: "Users waste time switching between tools"

## Linking Requirements

### Required Links
- **Product Outcome**: Must link to at least one product outcome

### Recommended Links
- Business outcome (if direct connection)
- Proposed solutions
- Research that informed the opportunity

### Link Format
- Use relative paths: `../02-product-outcomes/outcome-name.md`
- Link text should be descriptive (outcome/solution name)
- Keep links updated as related items are created

## Decision Validation Requirements

### Decision Points

All opportunities must have decisions logged for:

1. **Opportunity Creation/Updates** (MEDIUM RISK - requires approval)
   - Decision log required when opportunity is created or significantly updated
   - Must include rationale and supporting evidence

2. **Prioritization Decisions** (Human decision required)
   - Decision log required when opportunity status changes (Active/Backlog/Archive)
   - Must include opportunity score (if calculated), evidence strength, and rationale

3. **Solution Readiness Assessment** (Should be logged)
   - Decision log recommended when readiness is assessed
   - Should note any missing requirements

### Decision Logging

See `07-reference/methodology/decision-log-format.md` for decision log format.

**Required for:**
- Opportunity creation
- Prioritization decisions
- Significant updates

**Decision History Section:**
All opportunity documents must include a "Decision History" section. See `07-reference/templates/decision-history-section-template.md` for format.

### Decision Validation

Before making decisions, validate using:
- [Opportunity Decision Rules](./DECISION-RULES.md)
- [Opportunity Validation Prompt](../../07-reference/prompts/decision-facilitation/opportunity-validation-prompt.md)

## Validation Checklist

Before considering an Opportunity document complete, verify:

- [ ] Title follows format: `# Opportunity: [Name]`
- [ ] Metadata includes Status, Created, Last Updated, Priority
- [ ] Overview is clear and customer-focused
- [ ] Customer Problem section describes customer needs (not solutions)
- [ ] Evidence section has at least one supporting piece of evidence
- [ ] Impact section links to product outcome
- [ ] Related Outcomes section links to product outcome (required)
- [ ] Problem description uses customer-focused language
- [ ] No solution language in problem description
- [ ] All links use correct relative paths
- [ ] Document is customer-focused throughout
- [ ] **Decision History section is present** (see template)
- [ ] **All required decisions are logged** (creation, prioritization)

## Example Structure

```markdown
# Opportunity: Users Struggle to Find Key Features

**Status:** Active
**Created:** 2024-01-15
**Last Updated:** 2024-11-27
**Priority:** High

## Overview

Users frequently cannot locate features they need, leading to frustration and reduced product adoption.

## Customer Problem

Users report significant difficulty finding features they know exist in the product. This manifests in several ways:
- Users spend excessive time searching through menus
- Users rely on support or colleagues to find features
- Users abandon tasks when they can't find needed functionality
- Power users create workarounds rather than using built-in features

This problem is particularly acute for users who are new to the product but also affects experienced users when new features are added. The frustration leads to reduced confidence in the product and lower feature adoption rates.

## Evidence

What evidence supports this opportunity?
- [User Research: Feature Discovery Study](../../03-discovery/research/user-research/feature-discovery-study.md) - 68% of users report difficulty finding features
- [Analytics: Feature Usage Data](../../03-discovery/research/data-analysis/feature-usage-analysis.md) - Low usage of key features despite high value
- [Support Tickets](../../03-discovery/research/user-research/support-ticket-analysis.md) - 23% of support requests are "how do I find X feature"

## Impact

### Potential Impact on Outcomes
- **Product Outcome:** [Improve Feature Adoption](../02-product-outcomes/improve-feature-adoption.md)
- **Business Outcome:** [Increase Customer Retention](../01-business-outcomes/increase-customer-retention.md)

### Expected Impact
- Increased feature discovery and usage
- Reduced user frustration and support burden
- Improved product confidence and retention
- Better time to value for new users

## Related Outcomes

- **Product Outcome:** [Improve Feature Adoption](../02-product-outcomes/improve-feature-adoption.md)
- **Business Outcome:** [Increase Customer Retention](../01-business-outcomes/increase-customer-retention.md)

## Proposed Solutions

Link to solutions that address this opportunity:
- [Redesign Navigation Structure](../04-solutions/proposed/redesign-navigation.md)
- [Add Feature Search](../04-solutions/proposed/add-feature-search.md)
- [Improve Onboarding Feature Tour](../04-solutions/active/improve-onboarding-tour.md)

## Research and Discovery

Link to related research:
- [Feature Discovery User Research](../../03-discovery/research/user-research/feature-discovery-study.md)
- [Analytics: Feature Usage Patterns](../../03-discovery/research/data-analysis/feature-usage-analysis.md)

## Insights

Key insights that led to identifying this opportunity:
- Users expect features to be discoverable through navigation, but current structure doesn't match mental models
- Feature discovery is a major barrier to product adoption
- Improving discoverability could significantly impact feature usage without building new features

## Notes

- This opportunity affects both new and existing users
- May require user research to understand mental models for feature organization
- Consider different user personas and their feature discovery patterns
```

## Conformance Instructions

To conform an existing Opportunity document to this format:

1. Check title format matches `# Opportunity: [Name]`
2. Ensure all required metadata fields are present
3. Verify Overview is customer-focused
4. Review Customer Problem section - ensure it's customer-focused, not solution-focused
5. Check Evidence section has at least one supporting piece of evidence with links
6. Verify Impact section links to product outcome
7. Ensure Related Outcomes section links to product outcome
8. Remove any solution language from problem description
9. Validate all links use correct relative paths
10. Ensure document is customer-focused throughout
11. Add any missing required sections
12. Review for solution-focused language and rewrite if needed

















