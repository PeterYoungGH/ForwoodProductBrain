# PM-DoR Validation Guide

**Last Updated:** 2026-01-03  
**Purpose:** Guide for validating solutions against PM-DoR (Product Manager Definition of Ready) criteria before engineering refinement.

## Overview

This guide explains how to validate solutions in the Product Brain workflow against PM-DoR criteria to ensure they are ready for engineering refinement. PM-DoR ensures that Product Management has completed Discovery work before requesting Delivery investment, aligning with Cagan's principle of Discovery before Delivery.

**Alignment with Engineering Process:**
- PM-DoR in Product Brain should align with engineering PM-DoR requirements
- Solutions that pass PM-DoR in Product Brain should be ready for FPM creation
- FPM creation should reference Product Brain solution document

## Purpose of PM-DoR Validation

PM-DoR validation ensures:
1. **Clear problem definition** — Engineers understand _why_ this work matters
2. **Sufficient acceptance criteria** — Engineers can estimate with confidence
3. **Visual clarity** — UI-impacting work has wireframes or mockups
4. **Dependencies identified** — Risks are surfaced early
5. **Success defined** — Everyone knows what "done" looks like

## PM-DoR Validation Checklist

### Required for ALL Solutions

- [ ] **Business Problem** clearly stated
  - Clear statement of the problem being solved
  - Specific, not generic
  - Includes business impact

- [ ] **Success Metrics** defined (specific, measurable targets)
  - How will we measure success?
  - Specific metrics with targets
  - Not vague qualitative descriptions

- [ ] **Acceptance Criteria** present (≥5 for standard work, GIVEN/WHEN/THEN format)
  - Minimum count based on work size (see AC standards)
  - GIVEN/WHEN/THEN format
  - Specific, testable, unambiguous, complete, bounded

- [ ] **User Story** provided (As a [user], I want [goal], so that [benefit])
  - Clear user type identified
  - Goal clearly stated
  - Benefit explained

- [ ] **Why Now?** section completed (business context for timing)
  - Business context for timing/priority
  - Timing rationale
  - Not just "it's important"

- [ ] **Dependencies** identified and status known
  - External systems, teams, or factors listed
  - Status of each dependency known
  - Not just "None"

- [ ] **Out of Scope** explicitly documented
  - What is explicitly NOT included
  - Clear boundaries set
  - Not just "everything not mentioned"

### Required for UI-Impacting Work

- [ ] **Wireframes/Mockups** provided (all UI states and flows)
  - Visual representation of UI changes
  - All states covered (empty, loading, error, success, etc.)
  - All flows documented

- [ ] **User Flow** documented
  - How user navigates through the feature
  - Complete flow considered
  - Not just "similar to competitor X"

### Required for Large/Complex Work (>13 points estimated)

- [ ] **Breakdown Suggestion** provided
  - Proposed phasing or decomposition
  - Supports incremental delivery
  - Not just "all at once"

- [ ] **MVP Definition** provided (must-have vs nice-to-have)
  - Minimum viable version clearly defined
  - Must-have vs nice-to-have separated
  - Not just "all of it is essential"

## Validation Status

After completing the checklist, document validation status:

- [ ] PM-DoR Complete
- [ ] Validated by: [TDM/PM Lead]
- [ ] Validation Date: [YYYY-MM-DD]
- [ ] Ready for Engineering Refinement: [Yes/No]

## Acceptance Criteria Quality Checklist

When validating acceptance criteria, ensure they meet these quality standards:

### ✅ Specific (not vague)
- **Good:** "CSV file with all visible data columns"
- **Bad:** "Export data"

### ✅ Testable (observable, measurable)
- **Good:** "Within 30 seconds"
- **Bad:** "Fast"

### ✅ Unambiguous (clear interpretation)
- **Good:** "Current filter selections applied"
- **Bad:** "Relevant data"

### ✅ Complete (covers all scenarios)
- **Good:** Lists all scenarios and edge cases
- **Bad:** "User can do the thing"

### ✅ Bounded (has limits/constraints)
- **Good:** "Does not exceed 10MB"
- **Bad:** No limits stated

## Minimum AC Count by Work Size

| Estimated Size | Minimum AC Count |
| --- | --- |
| XS (1-2 points) | 3 |
| S (3-5 points) | 5 |
| M (8 points) | 7 |
| L (13 points) | 10 |
| XL (21+ points) | 15 (or break down the work) |

## Good vs Bad Examples

### Good Acceptance Criteria Example

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

### Bad Acceptance Criteria Example

```
User can export data.
```

### Good Success Metrics Example

```
Success metrics:
- Checkout abandonment rate decreases from 35% to 25%
- 'Hidden fees' support tickets decrease by 50%
- Customer satisfaction score for checkout increases by 10 points
```

### Bad Success Metrics Example

```
Customers will be happier.
```

### Good "Why Now?" Example

```
Q1 customer survey identified checkout friction as top complaint. We have a board meeting in March where CEO wants to show improved retention metrics. Additionally, competitor X just launched similar feature.
```

### Bad "Why Now?" Example

```
It's important.
```

## Validation Process

### Step 1: Initial Triage (Analyst or PM)

1. Check that all required sections are present
2. Identify obvious gaps or missing information
3. Flag items that need clarification

### Step 2: PM-DoR Review (TDM or PM Lead)

1. Review each criterion in the checklist
2. Assess answer quality (specific, actionable)
3. Validate acceptance criteria format and quality
4. Check that success metrics are specific and measurable
5. Verify dependencies are identified with status
6. Confirm out of scope is explicitly documented

### Step 3: Decision

**Pass Criteria:**
- All required criteria are met
- Acceptance criteria quality is good
- Success metrics are specific and measurable
- Dependencies are identified with status

**Return Criteria:**
- Required criteria are missing
- Acceptance criteria are too vague to estimate
- Success metrics are not specific
- UI work lacks wireframes
- "Why now?" is unclear

### Step 4: Communication

**If Pass:**
- Mark solution as "PM-DoR Complete"
- Update validation status
- Solution is ready for engineering refinement

**If Return:**
- Provide specific feedback on what's missing
- Use return script template
- Request updates before re-review

## Return Script Template

When returning a solution for additional detail:

```
Subject: Solution [Name] returned for PM-DoR completion

Hi [PM Name],

Solution [Name] has been reviewed but isn't ready for engineering refinement yet.

**What's Missing:**
- [Specific criterion 1]
- [Specific criterion 2]

**What We Need:**
- [Specific request 1]
- [Specific request 2]

Once updated, please reassign to me for re-review.

Questions? Happy to discuss.

[Validator Name]
```

## Integration with Product Brain Workflow

### When to Validate

PM-DoR validation should occur:
- After solution experimentation is complete
- Before solution moves to roadmap inclusion
- Before solution becomes an initiative

### Workflow Integration

**Current Flow:** Solution Exploration → Experimentation → Roadmap Inclusion

**Recommended Flow:** Solution Exploration → Experimentation → **PM-DoR Validation** → Roadmap Inclusion

### Decision Framework Integration

PM-DoR validation is a decision point in the Product Brain workflow:
- **Decision Maker:** TDM or PM Lead (validates), Human (approves roadmap inclusion)
- **Risk Level:** MEDIUM (prevents premature commitment)
- **Decision Points:**
  - PM-DoR Completeness Check
  - PM-DoR Quality Validation
  - Ready for Engineering Refinement Decision

## Metrics

Track PM-DoR validation metrics similar to engineering:

- **PM Preparation Cycle Time:** <10 business days (target)
- **First-Time-Right Rate:** >70% (target)
- **Return Rate:** <30% (target)
- **PM-DoR Completeness Score:** >95% (target)

## Related Documents

- [PM-DoR Standards Reference](../technical-specs/pm-dor-standards.md) - Quick reference for PM-DoR standards
- [Solution Template](../templates/solution-template.md) - Solution document template with PM-DoR sections
- [Solution RULES](../../04-opportunities/04-solutions/RULES.md) - Solution format rules including PM-DoR requirements
- [Decision Framework](./decision-framework.md) - Overall decision framework
- [PM-DoR Framework Research](../../03-discovery/research/process-research/pm-dor-framework-2026-01.md) - Full framework documentation

## Source Links

- [PM-DoR Review Criteria](https://forwood.atlassian.net/wiki/spaces/Technology/pages/3389489290/PM-DoR+Review+Criteria)
- [PM Definition of Ready](https://forwood.atlassian.net/wiki/spaces/Technology/pages/3390406738/PM+Definition+of+Ready+PM-DoR)
- [Delivery Framework](https://forwood.atlassian.net/wiki/spaces/Technology/pages/3388801252/Delivery+Framework)

