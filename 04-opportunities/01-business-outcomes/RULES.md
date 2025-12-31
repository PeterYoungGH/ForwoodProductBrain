# Business Outcomes - Format Rules

Standard format specification for Business Outcome documents based on the Opportunity Solution Tree (OST) framework.

## Purpose

Business Outcomes are high-level business goals that the organization wants to achieve. They are measurable, business-focused, strategic in nature, and typically owned by executive leadership.

## Required Document Structure

### 1. Title
```markdown
# Business Outcome: [Name]
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
Brief one-to-two sentence description of the business outcome.

**Guidelines:**
- Should be understandable to executives
- Focus on the "what" not the "how"
- Be specific and measurable

### 4. Description (Required)
Detailed description of the business outcome, including:
- Why this outcome matters
- Context and background
- Scope and boundaries

**Guidelines:**
- 2-4 paragraphs typically
- Explain business rationale
- Include relevant context

### 5. Target Metrics (Required)
Measurable, business-focused metrics that define success.

**Format:**
```markdown
- **Metric Name:** [Target value] [Unit/Description]
- **Metric Name:** [Target value] [Unit/Description]
```

**Guidelines:**
- Must be measurable and quantifiable
- Must be business-focused (revenue, customers, market share, etc.)
- Should include time-bound targets
- Include baseline/current values if available

### 6. Current State (Required)
Description of the current situation related to this outcome.

**Guidelines:**
- Describe where things stand today
- Include relevant data points
- Note any constraints or challenges

### 7. Related Product Outcomes (Required)
Links to product outcomes that support this business outcome.

**Format:**
```markdown
Link to product outcomes that support this business outcome:
- [Product Outcome Name](../02-product-outcomes/outcome-name.md)
- [Product Outcome Name](../02-product-outcomes/outcome-name.md)
```

**Guidelines:**
- Must link to at least one product outcome (or note "To be defined")
- Use relative paths
- Link text should be the outcome name

### 8. Related Opportunities (Optional but Recommended)
Links to opportunities that support this outcome.

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

### 10. Related Initiatives (Optional but Recommended)
Links to initiatives supporting this outcome.

**Format:**
```markdown
Link to initiatives supporting this outcome:
- [Initiative Name](../../02-initiatives/active/initiative-name.md)
```

### 11. Notes (Optional)
Additional context, assumptions, or considerations.

## Format Requirements

1. **Measurability**: Must have specific, measurable target metrics
2. **Business Focus**: Must be business-focused, not product-focused
3. **Strategic Nature**: Should align with strategic goals
4. **Linking**: Must link to supporting product outcomes
5. **Time-Bound**: Should have timeline or target dates

## Content Guidelines

### What Makes a Good Business Outcome

- **Specific**: Clear and unambiguous
- **Measurable**: Has quantifiable success metrics
- **Achievable**: Realistic given resources and constraints
- **Relevant**: Aligns with business strategy
- **Time-Bound**: Has target completion dates

### Common Mistakes to Avoid

- ❌ Too vague or abstract
- ❌ Not measurable
- ❌ Product-focused instead of business-focused
- ❌ Missing links to product outcomes
- ❌ No timeline or milestones

## Linking Requirements

### Required Links
- **Product Outcomes**: Must link to at least one product outcome (or note "To be defined")

### Recommended Links
- Opportunities that support this outcome
- Initiatives that support this outcome
- Related strategic focus areas

### Link Format
- Use relative paths: `../02-product-outcomes/outcome-name.md`
- Link text should be descriptive (outcome/opportunity name)
- Keep links updated as related items are created

## Decision History Requirements

### Decision Points

Business outcomes may have decisions logged for:

1. **Business Outcome Creation/Updates** (MEDIUM RISK - requires approval)
   - Decision log recommended when outcome is created or significantly updated
   - Should include rationale and strategic alignment

2. **Status Changes** (Should be logged)
   - Decision log recommended when outcome status changes
   - Should note reason for status change

### Decision Logging

See `07-reference/methodology/decision-log-format.md` for decision log format.

**Recommended for:**
- Business outcome creation
- Significant updates
- Status changes

**Decision History Section:**
Business outcome documents should include a "Decision History" section. See `07-reference/templates/decision-history-section-template.md` for format.

## Validation Checklist

Before considering a Business Outcome document complete, verify:

- [ ] Title follows format: `# Business Outcome: [Name]`
- [ ] Metadata includes Status, Created, Last Updated
- [ ] Overview is clear and concise
- [ ] Description provides sufficient context
- [ ] Target Metrics are specific, measurable, and business-focused
- [ ] Current State is documented
- [ ] Links to Product Outcomes are present (or "To be defined" noted)
- [ ] Timeline includes start date and target completion
- [ ] All links use correct relative paths
- [ ] Document is business-focused, not product-focused
- [ ] **Decision History section is present** (see template)

## Example Structure

```markdown
# Business Outcome: Increase Customer Retention

**Status:** Active
**Created:** 2024-01-15
**Last Updated:** 2024-11-27

## Overview

Increase customer retention rate from 75% to 85% within 12 months to improve recurring revenue and reduce churn costs.

## Description

Customer retention is critical to our business model. Currently, we have a 75% annual retention rate, which results in significant churn costs and lost revenue opportunities. This business outcome focuses on improving retention through better customer experience, product value delivery, and proactive engagement.

## Target Metrics

- **Annual Retention Rate:** 85% (current: 75%)
- **Churn Reduction:** Reduce monthly churn from 2.1% to 1.2%
- **Customer Lifetime Value:** Increase by 15%

## Current State

- Current annual retention rate: 75%
- Monthly churn rate: 2.1%
- Primary churn reasons: Product complexity, lack of value realization, competitive alternatives

## Related Product Outcomes

Link to product outcomes that support this business outcome:
- [Improve Time to Value](../02-product-outcomes/improve-time-to-value.md)
- [Increase Feature Adoption](../02-product-outcomes/increase-feature-adoption.md)

## Timeline

- **Start Date:** 2024-01-15
- **Target Completion:** 2025-01-15
- **Key Milestones:**
  - Q1 2024: Baseline analysis complete
  - Q2 2024: First improvements deployed
  - Q3 2024: Mid-point review (target: 80%)
  - Q4 2024: Final push to 85%

## Related Initiatives

Link to initiatives supporting this outcome:
- [Customer Success Program](../../02-initiatives/active/customer-success-program.md)

## Notes

- Focus on first 90 days post-onboarding as highest churn period
- Need to understand specific customer segments and their retention patterns
```

## Conformance Instructions

To conform an existing Business Outcome document to this format:

1. Check title format matches `# Business Outcome: [Name]`
2. Ensure all required metadata fields are present
3. Verify Overview and Description sections exist and are complete
4. Check Target Metrics are specific, measurable, and business-focused
5. Ensure Current State is documented
6. Verify links to Product Outcomes exist (or add "To be defined")
7. Check Timeline includes required elements
8. Validate all links use correct relative paths
9. Review content to ensure it's business-focused, not product-focused
10. Add any missing required sections

















