# PM-DoR Standards Reference

**Last Updated:** 2026-01-03  
**Purpose:** Quick reference for PM-DoR (Product Manager Definition of Ready) standards, criteria, and requirements.

## Overview

This document provides a quick reference for PM-DoR standards to ensure solutions meet engineering readiness requirements before moving to roadmap inclusion or engineering refinement.

## PM-DoR Criteria Checklist

### Required for ALL Solutions

| # | Criterion | Format/Requirements |
| --- | --- | --- |
| 1 | Business Problem | Clear statement of the problem being solved |
| 2 | Success Metrics | Specific, measurable targets (not vague) |
| 3 | Acceptance Criteria | ≥5 for standard work, GIVEN/WHEN/THEN format |
| 4 | User Story | As a [user], I want [goal], so that [benefit] |
| 5 | Why Now? | Business context for timing/priority |
| 6 | Dependencies | External systems, teams, factors with status |
| 7 | Out of Scope | Explicitly documented exclusions |

### Required for UI-Impacting Work

| # | Criterion | Format/Requirements |
| --- | --- | --- |
| 8 | Wireframes/Mockups | Visual representation of all UI states and flows |
| 9 | User Flow | How user navigates through the feature |

### Required for Large/Complex Work (>13 points)

| # | Criterion | Format/Requirements |
| --- | --- | --- |
| 10 | Breakdown Suggestion | Proposed phasing or decomposition |
| 11 | MVP Definition | Must-have vs nice-to-have clearly defined |

## Acceptance Criteria Standards

### Minimum AC Count by Work Size

| Estimated Size | Minimum AC Count |
| --- | --- |
| XS (1-2 points) | 3 |
| S (3-5 points) | 5 |
| M (8 points) | 7 |
| L (13 points) | 10 |
| XL (21+ points) | 15 (or break down the work) |

### AC Format

**Required Format:** GIVEN/WHEN/THEN

```
GIVEN [context]
WHEN [action]
THEN [result]
```

### AC Quality Checklist

Acceptance criteria must be:

- ✅ **Specific** (not vague)
  - Good: "CSV file with all visible data columns"
  - Bad: "Export data"

- ✅ **Testable** (observable, measurable)
  - Good: "Within 30 seconds"
  - Bad: "Fast"

- ✅ **Unambiguous** (clear interpretation)
  - Good: "Current filter selections applied"
  - Bad: "Relevant data"

- ✅ **Complete** (covers all scenarios)
  - Good: Lists all scenarios and edge cases
  - Bad: "User can do the thing"

- ✅ **Bounded** (has limits/constraints)
  - Good: "Does not exceed 10MB"
  - Bad: No limits stated

### Good AC Example

```
GIVEN a logged-in user on the dashboard
WHEN they click "Export Report"
THEN a CSV file downloads containing:
  - All visible data columns
  - Current filter selections applied
  - Filename format: "report-{date}-{user}.csv"
  - File size does not exceed 10MB
  - Export completes within 30 seconds for standard datasets
```

## Success Metrics Standards

### Requirements

- Must be **specific** (not vague)
- Must be **measurable** (quantifiable)
- Must have **targets** (not just direction)

### Good Examples

```
Success metrics:
- Checkout abandonment rate decreases from 35% to 25%
- 'Hidden fees' support tickets decrease by 50%
- Customer satisfaction score for checkout increases by 10 points
```

### Bad Examples

- "Customers will be happier"
- "Improve user experience"
- "Increase engagement"

## User Story Format

**Required Format:**
```
As a [user type], I want [goal], so that [benefit].
```

**Requirements:**
- User type must be specific (not "our customers")
- Goal must be clear and actionable
- Benefit must explain the value

**Good Example:**
```
As a B2B customer placing bulk orders (>$500), I want to see shipping costs upfront, so that I can make informed purchasing decisions without surprises.
```

**Bad Example:**
```
As a customer, I want shipping costs, so that I know what I'm paying.
```

## "Why Now?" Standards

### Requirements

- Must provide **business context** for timing
- Must explain **priority rationale**
- Must include **timing drivers** (not just "it's important")

### Good Example

```
Q1 customer survey identified checkout friction as top complaint. We have a board meeting in March where CEO wants to show improved retention metrics. Additionally, competitor X just launched similar feature.
```

### Bad Example

- "It's important"
- "We need this"
- "It's a priority"

## Dependencies Standards

### Requirements

- Must list **external systems, teams, or factors**
- Must include **status** for each dependency
- Cannot be "None" without justification

### Good Example

```
Dependencies:
- Shipping API from FedEx (confirmed available, rate limits TBD)
- Address validation service (Platform team, launching Sprint 3)
- Design mockups (in progress, ETA next week)
- Tax calculation service (existing, no changes needed)
```

### Bad Example

- "None"
- "Some dependencies"
- No dependencies listed

## Out of Scope Standards

### Requirements

- Must **explicitly document** what is NOT included
- Must set **clear boundaries**
- Cannot be "Everything not mentioned"

### Good Example

```
Out of scope:
- International shipping (separate initiative)
- Multiple shipping address support
- Shipping insurance options
- Integration with courier tracking (future phase)
```

### Bad Example

- "Everything not mentioned"
- "Standard exclusions apply"
- No out of scope section

## Wireframes/Mockups Standards (UI Work)

### Requirements

- Must provide **visual representation** of UI changes
- Must cover **all UI states** (empty, loading, error, success, etc.)
- Must include **all flows**
- Cannot be "Similar to competitor X"

### Good Example

```
Figma mockups attached:
- Cart page with shipping calculator (3 states: empty, loading, calculated)
- Error states for invalid addresses
- Mobile responsive versions
- User flow diagram from cart to checkout
```

### Bad Example

- "Similar to what competitor X has"
- "Standard UI patterns"
- No visuals provided

## MVP Definition Standards (Large Work)

### Requirements

- Must separate **must-have** from **nice-to-have**
- Must identify **minimum viable version**
- Cannot be "All of it is essential"

### Good Example

```
MVP (must have):
- Shipping estimate for domestic addresses only
- Single carrier (FedEx Ground)
- Standard cart page integration

Nice to have (can defer):
- Multiple carrier comparison
- Expedited shipping options
- Address autocomplete
```

### Bad Example

- "All of it is essential"
- "Everything is required"
- No MVP definition

## PM-DoR Metrics Targets

| Metric | Target |
| --- | --- |
| PM Preparation Cycle Time | <10 business days |
| First-Time-Right Rate | >70% |
| Return Rate | <30% |
| PM-DoR Completeness Score | >95% |

## Quick Validation Checklist

Use this checklist for quick validation:

- [ ] Business Problem clearly stated
- [ ] Success Metrics defined (specific, measurable)
- [ ] Acceptance Criteria present (≥5, GIVEN/WHEN/THEN)
- [ ] User Story provided (As a [user], I want [goal], so that [benefit])
- [ ] Why Now? completed (business context)
- [ ] Dependencies identified with status
- [ ] Out of Scope explicitly documented
- [ ] Wireframes/Mockups (if UI work)
- [ ] User Flow (if UI work)
- [ ] Breakdown Suggestion (if large work)
- [ ] MVP Definition (if large work)

## Related Documents

- [PM-DoR Validation Guide](../methodology/pm-dor-validation-guide.md) - Detailed validation process
- [Solution Template](../templates/solution-template.md) - Solution template with PM-DoR sections
- [Solution RULES](../../04-opportunities/04-solutions/RULES.md) - Solution format rules
- [PM-DoR Framework Research](../../03-discovery/research/process-research/pm-dor-framework-2026-01.md) - Full framework documentation



