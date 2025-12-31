# Product Outcomes - Format Rules

Standard format specification for Product Outcome documents based on the Opportunity Solution Tree (OST) framework.

## Purpose

Product Outcomes are product-specific outcomes that support business outcomes. They are measurable, product-focused, directly influence business outcomes, and are owned by product teams.

## Required Document Structure

### 1. Title
```markdown
# Product Outcome: [Name]
```
- Use descriptive, specific name
- Capitalize each major word
- Be concise but clear

### 2. Metadata (Required)
```markdown
**Status:** [Active/On Hold/Completed/Archived]
**Created:** [YYYY-MM-DD]
**Last Updated:** [YYYY-MM-DD]
```
- Status must be one of the specified values
- Dates must be in YYYY-MM-DD format
- Update Last Updated whenever document is modified

### 3. Overview (Required)
Brief one-to-two sentence description of the product outcome.

**Guidelines:**
- Should be understandable to product teams
- Focus on product behavior or user experience
- Be specific and measurable

### 4. Description (Required)
Detailed description of the product outcome, including:
- What product behavior or experience this outcome measures
- How it supports the related business outcome
- Context and background

**Guidelines:**
- 2-4 paragraphs typically
- Explain how this product outcome supports the business outcome
- Include relevant product context

### 5. Target Metrics (Required)
Measurable, product-focused metrics that define success.

**Format:**
```markdown
- **Metric Name:** [Target value] [Unit/Description]
- **Metric Name:** [Target value] [Unit/Description]
```

**Guidelines:**
- Must be measurable and quantifiable
- Must be product-focused (activation, adoption, engagement, etc.)
- Should include time-bound targets
- Include baseline/current values if available

### 6. Current State (Required)
Description of the current product state related to this outcome.

**Guidelines:**
- Describe current product metrics
- Include relevant data points
- Note any constraints or challenges

### 7. Supports Business Outcome (Required)
Link to the business outcome this product outcome supports.

**Format:**
```markdown
**Supports Business Outcome:** [Link to business outcome](../01-business-outcomes/business-outcome-name.md)
```

**Guidelines:**
- Must link to exactly one business outcome
- Use relative path
- Link text should be the business outcome name

### 8. Related Opportunities (Optional but Recommended)
Links to opportunities that support this product outcome.

**Format:**
```markdown
Link to opportunities that support this outcome:
- [Opportunity Name](../03-opportunities/active/opportunity-name.md)
```

### 9. Timeline (Required)
Key dates and milestones.

**Format:**
```markdown
- **Start Date:** [YYYY-MM-DD] or [To be determined]
- **Target Completion:** [YYYY-MM-DD] or [To be determined]
- **Key Milestones:**
  - [Milestone Name]: [Date]
  - [Milestone Name]: [Date]
```

**Guidelines:**
- Include start and target completion dates
- List major milestones
- Update as progress is made

### 10. Notes (Optional)
Additional context, assumptions, or considerations.

## Format Requirements

1. **Measurability**: Must have specific, measurable target metrics
2. **Product Focus**: Must be product-focused, not business-focused
3. **Business Alignment**: Must clearly support a business outcome
4. **Linking**: Must link to parent business outcome
5. **Time-Bound**: Should have timeline or target dates

## Content Guidelines

### What Makes a Good Product Outcome

- **Specific**: Clear and unambiguous
- **Measurable**: Has quantifiable success metrics
- **Product-Focused**: Measures product behavior or user experience
- **Business-Aligned**: Clearly supports a business outcome
- **Time-Bound**: Has target completion dates

### Common Mistakes to Avoid

- ❌ Too vague or abstract
- ❌ Not measurable
- ❌ Business-focused instead of product-focused
- ❌ Missing link to business outcome
- ❌ No clear connection to business outcome
- ❌ No timeline or milestones

## Linking Requirements

### Required Links
- **Business Outcome**: Must link to exactly one business outcome

### Recommended Links
- Opportunities that support this product outcome
- Related initiatives

### Link Format
- Use relative paths: `../01-business-outcomes/outcome-name.md`
- Link text should be descriptive (outcome/opportunity name)
- Keep links updated as related items are created

## Decision History Requirements

### Decision Points

Product outcomes may have decisions logged for:

1. **Product Outcome Creation/Updates** (MEDIUM RISK - requires approval)
   - Decision log recommended when outcome is created or significantly updated
   - Should include rationale and business outcome alignment

2. **Status Changes** (Should be logged)
   - Decision log recommended when outcome status changes
   - Should note reason for status change

### Decision Logging

See `07-reference/methodology/decision-log-format.md` for decision log format.

**Recommended for:**
- Product outcome creation
- Significant updates
- Status changes

**Decision History Section:**
Product outcome documents should include a "Decision History" section. See `07-reference/templates/decision-history-section-template.md` for format.

## Validation Checklist

Before considering a Product Outcome document complete, verify:

- [ ] Title follows format: `# Product Outcome: [Name]`
- [ ] Metadata includes Status, Created, Last Updated
- [ ] Overview is clear and concise
- [ ] Description provides sufficient context and explains business outcome connection
- [ ] Target Metrics are specific, measurable, and product-focused
- [ ] Current State is documented
- [ ] Link to Business Outcome is present
- [ ] Timeline includes start date and target completion
- [ ] All links use correct relative paths
- [ ] Document is product-focused, not business-focused
- [ ] Clear connection to supporting business outcome is explained
- [ ] **Decision History section is present** (see template)

## Example Structure

```markdown
# Product Outcome: Improve Time to Value

**Status:** Active
**Created:** 2024-01-15
**Last Updated:** 2024-11-27

## Overview

Reduce the time it takes for new users to achieve their first value moment from 14 days to 7 days, improving activation and retention.

## Description

Time to value is a critical product metric that directly impacts customer retention. Currently, new users take an average of 14 days to reach their first value moment (completing their first key workflow). This product outcome focuses on reducing that time through improved onboarding, better feature discoverability, and streamlined workflows.

This outcome directly supports the business outcome of increasing customer retention by ensuring users experience value quickly, which is strongly correlated with long-term retention.

## Target Metrics

- **Average Time to First Value:** 7 days (current: 14 days)
- **Activation Rate (7-day):** 65% (current: 45%)
- **Onboarding Completion Rate:** 80% (current: 60%)

## Current State

- Current average time to first value: 14 days
- 45% of users reach first value within 7 days
- 60% complete onboarding flow
- Primary friction points: Complex setup, unclear next steps, feature discovery

## Supports Business Outcome

**Supports Business Outcome:** [Increase Customer Retention](../01-business-outcomes/increase-customer-retention.md)

## Related Opportunities

Link to opportunities that support this outcome:
- [Users struggle with initial setup](../03-opportunities/active/users-struggle-initial-setup.md)
- [Onboarding process is unclear](../03-opportunities/active/unclear-onboarding-process.md)

## Timeline

- **Start Date:** 2024-01-15
- **Target Completion:** 2024-07-15
- **Key Milestones:**
  - Q1 2024: Research and analysis complete
  - Q2 2024: First improvements deployed (target: 10 days)
  - Q3 2024: Final improvements (target: 7 days)

## Notes

- Focus on first-time user experience
- Need to understand different user personas and their value moments
- Consider progressive onboarding approach
```

## Conformance Instructions

To conform an existing Product Outcome document to this format:

1. Check title format matches `# Product Outcome: [Name]`
2. Ensure all required metadata fields are present
3. Verify Overview and Description sections exist and are complete
4. Check Description explains how it supports the business outcome
5. Verify Target Metrics are specific, measurable, and product-focused
6. Ensure Current State is documented
7. Verify link to Business Outcome exists and is correct
8. Check Timeline includes required elements
9. Validate all links use correct relative paths
10. Review content to ensure it's product-focused, not business-focused
11. Ensure clear connection to business outcome is explained
12. Add any missing required sections

















