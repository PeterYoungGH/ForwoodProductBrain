# Research: PM-DoR (Product Manager Definition of Ready) Framework

**Type:** Process Research  
**Date:** 2026-01-03  
**Researcher(s):** Technology Division - Engineering Process  
**Status:** Completed  
**Source:** [Inbox Item: PM-DoR Definition of Ready Review Criteria](../../../00-inbox/raw/2026-01-03-pm-dor-definition-ready-review-criteria-[INBOX].md)

## Research Question

What is the PM-DoR (Product Manager Definition of Ready) framework and how does it ensure product requirements are ready for engineering work? What are the criteria, validation process, and standards for PM-DoR?

## Objectives

- Document the PM-DoR framework structure and criteria
- Understand the validation process and decision criteria
- Document acceptance criteria standards and format requirements
- Understand how PM-DoR fits into the broader Delivery Framework
- Identify integration opportunities with Product Brain workflow

## Methodology

### Research Method
Documentation Review / Process Documentation

### Participants/Data Sources
- Confluence Documentation - Technology Space
- PM-DoR Review Criteria page (Page ID: 3389489290)
- PM Definition of Ready page (Page ID: 3390406738)
- Delivery Framework page (Page ID: 3388801252)

### Timeline
- **Start:** 2026-01-03
- **End:** 2026-01-03

## Key Findings

### Finding 1: PM-DoR Purpose and Alignment

The PM-DoR (Product Management Definition of Ready) is the first gate in the Two-Stage Definition of Ready process. It ensures that Product Management has provided sufficient detail before Engineering invests time in refinement and estimation.

**Cagan Alignment:** PM-DoR validates that Product has completed their Discovery work before requesting Delivery investment. It answers: "Has PM done enough discovery to define what problem we're solving and what success looks like?"

**Purpose:**
PM-DoR protects Engineering investment by ensuring:
1. **Clear problem definition** — Engineers understand _why_ this work matters
2. **Sufficient acceptance criteria** — Engineers can estimate with confidence
3. **Visual clarity** — UI-impacting work has wireframes or mockups
4. **Dependencies identified** — Risks are surfaced early
5. **Success defined** — Everyone knows what "done" looks like

### Finding 2: PM-DoR Criteria Checklist

#### Required for ALL FPM Tickets

| # | Criterion | What PM Must Provide | Why It Matters |
| --- | --- | --- | --- |
| **1** | Business Problem | Clear statement of the problem being solved | Engineers need context to make good technical decisions |
| **2** | Success Metrics | How will we measure success? Specific, measurable targets | Enables outcome measurement, not just output |
| **3** | Acceptance Criteria | ≥5 specific, testable criteria | Defines scope boundaries, enables estimation |
| **4** | User Story | As a [user], I want [goal], so that [benefit] | Clarifies who benefits and how |
| **5** | Why Now? | Business context for timing/priority | Helps engineers understand urgency drivers |
| **6** | Dependencies | External systems, teams, or factors | Surfaces risk early, enables proper sequencing |
| **7** | Out of Scope | What is explicitly NOT included | Prevents scope creep, sets clear boundaries |

#### Required for UI-Impacting Work

| # | Criterion | What PM Must Provide | Why It Matters |
| --- | --- | --- | --- |
| **8** | Wireframes/Mockups | Visual representation of UI changes | Eliminates ambiguity, enables accurate estimation |
| **9** | User Flow | How user navigates through the feature | Ensures full flow is considered |

#### Required for Large/Complex Work (>13 story points estimated)

| # | Criterion | What PM Must Provide | Why It Matters |
| --- | --- | --- | --- |
| **10** | Breakdown Suggestion | Proposed phasing or decomposition | Supports incremental delivery |
| **11** | MVP Definition | Minimum viable version if full scope at risk | Enables Delivery Triangle negotiation |

### Finding 3: The 9 Core Questions

PM-DoR is based on 9 core questions that Product Management must answer:

1. **What Problem Are We Solving?**
   - Why: Engineers need context to make good technical decisions
   - Good: Specific problem statement with business impact
   - Bad: Generic feature request

2. **How Will We Measure Success?**
   - Why: Defines what "done" really means, enables outcome measurement
   - Good: Specific metrics with targets
   - Bad: Vague "customers will be happier"

3. **Who Is the User?**
   - Why: Different users have different needs, impacts UX/technical decisions
   - Good: Primary/secondary users identified and prioritized
   - Bad: Generic "our customers"

4. **What Specifically Must This Do? (Acceptance Criteria)**
   - Why: Defines scope boundaries, enables accurate estimation
   - Good: GIVEN/WHEN/THEN format, ≥5 for standard work
   - Bad: Vague "feature works"

5. **Why Now?**
   - Why: Helps engineers understand urgency, informs tradeoff discussions
   - Good: Business context, timing rationale, competitive pressure
   - Bad: "It's important"

6. **What Are the Dependencies?**
   - Why: Enables risk identification early, allows proper sequencing
   - Good: External systems, teams, factors with status
   - Bad: "None"

7. **What Is Out of Scope?**
   - Why: Sets clear boundaries, prevents scope creep
   - Good: Explicit exclusions documented
   - Bad: "Everything not mentioned"

8. **What Does It Look Like? (For UI Work)**
   - Why: Eliminates UI ambiguity, enables accurate estimation
   - Good: Figma mockups for all states and flows
   - Bad: "Similar to competitor X"

9. **What Is the MVP? (For Large Work)**
   - Why: Enables Delivery Triangle negotiation, identifies what's essential
   - Good: Must-have vs nice-to-have clearly defined
   - Bad: "All of it is essential"

### Finding 4: Acceptance Criteria Standards

**Minimum AC Count by Work Size:**
- XS (1-2 points): 3 AC
- S (3-5 points): 5 AC
- M (8 points): 7 AC
- L (13 points): 10 AC
- XL (21+ points): 15 AC (or break down the work)

**Format:** GIVEN/WHEN/THEN structure

**Quality Requirements:**
- ✅ Specific (not vague)
- ✅ Testable (observable, measurable)
- ✅ Unambiguous (clear interpretation)
- ✅ Complete (covers all scenarios)
- ✅ Bounded (has limits/constraints)

**Good AC Example:**
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

### Finding 5: Validation Process

**Primary Validator:** Technical Delivery Manager (TDM)  
**Support:** Analyst (initial triage)

**Validation Flow:**
```
FPM Created by PM
        ↓
Analyst performs initial triage
  - Basic field checks
  - Obvious gaps identified
        ↓
TDM reviews for PM-DoR
  - Criteria checklist validation
  - Quality assessment
        ↓
[Pass] → Ready for Engineering Refinement
[Fail] → Returned for Additional Detail
```

**Validation Decision Matrix:**

| All Criteria Met | AC Quality Good | Decision |
| --- | --- | --- |
| ✅ Yes | ✅ Yes | **Pass** — Ready for Refinement |
| ✅ Yes | ❌ No | **Return** — AC quality insufficient |
| ❌ No | - | **Return** — Missing required criteria |

### Finding 6: PM-DoR Metrics

**Health Metrics:**
- PM Preparation Cycle Time: <10 business days (target)
- First-Time-Right Rate: >70% (target)
- Return Rate: <30% (target)
- PM-DoR Completeness Score: >95% (target)

### Finding 7: Delivery Framework Context

PM-DoR is part of the broader Forwood Technology Division Operating Framework, which includes:

**Confidence Levels:**
- 🔴 Exploratory: ±100% variance - Early discussions only
- 🟡 Refined: ±50% variance - Planning, not commitment
- 🟢 Committed: ±20% variance - Sprint planning, stakeholder commitment

**Governance Gates:**
- Gate 1: Intake - PM-DoR complete
- Gate 2: Estimation - Eng-DoR complete, 🟢 Committed
- Gate 3: Negotiation - Delivery Triangle decision made
- Gate 4: Commitment - Full readiness confirmed

**Core Philosophy:** Engineering owns estimates. Commitments require confidence. Governance protects quality.

## Implications

### For Product Brain Workflow

1. **PM-DoR as a Gate:** Solutions in the Product Brain workflow should meet PM-DoR criteria before moving to engineering refinement. This could be a checkpoint between Solution Exploration and Roadmap Inclusion.

2. **Acceptance Criteria Standards:** The Product Brain solution documents should include acceptance criteria that meet PM-DoR standards (specific, testable, GIVEN/WHEN/THEN format).

3. **Success Metrics Alignment:** The opportunity validation process in Product Brain should align with PM-DoR's requirement for specific, measurable success metrics.

4. **Discovery Completion:** PM-DoR validates that Discovery is complete before Delivery investment. This aligns with Product Brain's opportunity → solution → experiment flow.

5. **Template Integration:** The PM-DoR template could inform how solution documents are structured in the Product Brain.

6. **Decision Points:** The governance gates in the Delivery Framework could inform decision points in the Product Brain workflow.

## Related Documents

- [PM-DoR Validation Guide](../../../07-reference/methodology/pm-dor-validation-guide.md)
- [PM-DoR Standards Reference](../../../07-reference/technical-specs/pm-dor-standards.md)
- [Solution Template](../../../07-reference/templates/solution-template.md)
- [Solution RULES](../../../04-opportunities/04-solutions/RULES.md)
- [Decision Framework](../../../07-reference/methodology/decision-framework.md)

## Source Links

1. **PM-DoR Review Criteria**
   - URL: https://forwood.atlassian.net/wiki/spaces/Technology/pages/3389489290/PM-DoR+Review+Criteria
   - Page ID: 3389489290

2. **PM Definition of Ready (PM-DoR)**
   - URL: https://forwood.atlassian.net/wiki/spaces/Technology/pages/3390406738/PM+Definition+of+Ready+PM-DoR
   - Page ID: 3390406738

3. **Delivery Framework**
   - URL: https://forwood.atlassian.net/wiki/spaces/Technology/pages/3388801252/Delivery+Framework
   - Page ID: 3388801252


