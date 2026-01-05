# PM-DoR (Product Manager Definition of Ready) - Review Criteria & Framework

**Date Received:** 2026-01-03  
**Source:** Confluence Documentation  
**From:** Technology Space - Engineering Process  
**Status:** [INBOX]

## Source Links

### Primary Documents
1. **PM-DoR Review Criteria**
   - URL: https://forwood.atlassian.net/wiki/spaces/Technology/pages/3389489290/PM-DoR+Review+Criteria
   - Page ID: 3389489290

2. **PM Definition of Ready (PM-DoR)**
   - URL: https://forwood.atlassian.net/wiki/spaces/Technology/pages/3390406738/PM+Definition+of+Ready+PM-DoR
   - Page ID: 3390406738

### Broader Context
3. **Delivery Framework** (Engineering Process)
   - URL: https://forwood.atlassian.net/wiki/spaces/Technology/pages/3388801252/Delivery+Framework
   - Page ID: 3388801252
   - **Note:** This framework contains multiple sub-pages that provide broader context for the PM-DoR process

## Context

- **Why this matters:** The PM-DoR (Product Manager Definition of Ready) establishes criteria and review processes for ensuring product requirements are ready for engineering work. This is part of the broader Delivery Framework that governs how engineering work flows from product management to delivery.
- **Urgency:** Medium - Understanding and potentially integrating this into product workflow processes
- **Related to:** 
  - Product workflow processes
  - Engineering collaboration
  - Requirements definition
  - Delivery processes

## Initial Observations

- PM-DoR is a structured gate process ensuring Product Management completes Discovery before Engineering invests in refinement
- Two-stage DoR process: PM-DoR (first gate) → Eng-DoR (second gate)
- Aligned with Cagan's principle: PM completes Discovery before requesting Delivery investment
- Part of broader Delivery Framework with confidence levels (🔴🟡🟢) and governance gates
- Engineering owns estimates; commitments require confidence

## Areas This Might Impact

Check all that apply:
- [ ] Strategy (roadmap, focus areas)
- [ ] Initiatives
- [ ] Business outcomes
- [ ] Product outcomes
- [ ] Opportunities
- [x] Solutions - Solutions need to meet PM-DoR criteria before engineering work
- [x] Research/Discovery - Understanding engineering processes and requirements
- [ ] Communications
- [x] **Process/Workflow** - Product workflow integration with engineering

---

## Full Content from Confluence Pages

### 1. PM Definition of Ready (PM-DoR) - Main Document

**Overview:**
The PM-DoR (Product Management Definition of Ready) is the first gate in the Two-Stage Definition of Ready process. It ensures that Product Management has provided sufficient detail before Engineering invests time in refinement and estimation.

**Cagan Alignment:** PM-DoR validates that Product has completed their Discovery work before requesting Delivery investment. It answers: "Has PM done enough discovery to define what problem we're solving and what success looks like?"

**Purpose:**
PM-DoR protects Engineering investment by ensuring:
1. **Clear problem definition** — Engineers understand _why_ this work matters
2. **Sufficient acceptance criteria** — Engineers can estimate with confidence
3. **Visual clarity** — UI-impacting work has wireframes or mockups
4. **Dependencies identified** — Risks are surfaced early
5. **Success defined** — Everyone knows what "done" looks like

**PM-DoR Criteria Checklist:**

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

**Acceptance Criteria Standards:**

Minimum AC Count by Work Size:
- XS (1-2 points): 3 AC
- S (3-5 points): 5 AC
- M (8 points): 7 AC
- L (13 points): 10 AC
- XL (21+ points): 15 AC (or break down the work)

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

**Validation Process:**
- **Primary Validator:** Technical Delivery Manager (TDM)
- **Support:** Analyst (initial triage)
- Flow: FPM Created → Analyst triage → TDM PM-DoR review → Pass/Fail decision

**Metrics:**
- PM Preparation Cycle Time: <10 business days (target)
- First-Time-Right Rate: >70% (target)
- Return Rate: <30% (target)
- PM-DoR Completeness Score: >95% (target)

---

### 2. PM-DoR Review Criteria - Detailed Questions

**Overview:**
This document details the questions Product Management must answer before Engineering can begin refinement. These questions form the basis of PM-DoR and ensure Engineering has sufficient context to estimate and build correctly.

**The 9 Core Questions:**

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

**FPM Template with Questions:**
The document includes a complete template that ensures all questions are addressed.

---

### 3. Delivery Framework - Broader Context

**Overview:**
This is the heart of the Forwood Technology Division Operating Framework—the core processes and standards that define how we plan, estimate, and deliver. This framework protects estimation integrity and ensures predictable delivery.

**Core Philosophy:** Engineering owns estimates. Commitments require confidence. Governance protects quality.

**Key Components:**

1. **Confidence Levels:**
   - 🔴 Exploratory: ±100% variance - Early discussions only
   - 🟡 Refined: ±50% variance - Planning, not commitment
   - 🟢 Committed: ±20% variance - Sprint planning, stakeholder commitment

2. **Governance Gates:**
   - Gate 1: Intake - PM-DoR complete
   - Gate 2: Estimation - Eng-DoR complete, 🟢 Committed
   - Gate 3: Negotiation - Delivery Triangle decision made
   - Gate 4: Commitment - Full readiness confirmed

3. **Decision Ownership:**
   - What to build: PM
   - How to build it: Tech Lead
   - How long it takes: Tech Lead (estimate)
   - When it's delivered: TDM (feasibility)
   - What's in the sprint: TDM
   - Is it architecturally sound: Architect

**Key Principles:**
1. Estimates Evolve With Understanding — Early estimates (🔴) are based on limited information. As refinement reveals detail, estimates become more accurate (🟡→🟢).
2. Estimates Belong to Engineering — The people doing the work determine how long it takes based on technical analysis
3. Commitments Require Confidence — Only 🟢 Committed estimates can be used for commitments
4. Tradeoffs Are Collaborative — When refined estimates differ from initial expectations, PM and Engineering work together to decide how to proceed
5. Transparency Through Visualization — All work tracked, status visible, estimates clearly labeled with confidence level

**Related Framework Sections:**
- Strategic Context (Executive Summary, Operating Principles, Work Type Classification, Executive KPIs)
- Definition of Ready (PM-DoR, Eng-DoR, Questions PM Must Answer)
- Estimation Framework (Estimation Confidence Framework, Estimation Rules, Delivery Triangle)
- Workflow & Execution (JIRA Workflow Configuration, WIP Limits)
- Governance & Standards (Governance gates, escalation, RACI)
- Role Guides (Detailed role responsibilities)
- Metrics & Dashboards (KPIs and reporting)
- Communications & Procedures (Scripts and templates)

---

## Key Insights for Product Brain Integration

1. **PM-DoR as a Gate:** Solutions in the Product Brain workflow should meet PM-DoR criteria before moving to engineering refinement. This could be a checkpoint between Solution Exploration and Roadmap Inclusion.

2. **Acceptance Criteria Standards:** The Product Brain solution documents should include acceptance criteria that meet PM-DoR standards (specific, testable, GIVEN/WHEN/THEN format).

3. **Success Metrics Alignment:** The opportunity validation process in Product Brain should align with PM-DoR's requirement for specific, measurable success metrics.

4. **Discovery Completion:** PM-DoR validates that Discovery is complete before Delivery investment. This aligns with Product Brain's opportunity → solution → experiment flow.

5. **Template Integration:** The PM-DoR template could inform how solution documents are structured in the Product Brain.

6. **Decision Points:** The governance gates in the Delivery Framework could inform decision points in the Product Brain workflow.

## Processing Notes

**Processed:** 2026-01-03

Integrated PM-DoR framework into Product Brain structure:
- Created research document documenting the framework
- Created methodology guide for PM-DoR validation
- Created reference document with PM-DoR standards
- Updated solution template to include all PM-DoR required sections
- Updated solution RULES to include PM-DoR requirements and validation checklist

All high-priority recommendations from the inbox item have been implemented.

## Processed Documents

### Created Documents

1. **Research Document: PM-DoR Framework**
   - Location: [03-discovery/research/process-research/pm-dor-framework-2026-01.md](../../03-discovery/research/process-research/pm-dor-framework-2026-01.md)
   - Purpose: Documents the PM-DoR framework from Confluence for reference

2. **Methodology Guide: PM-DoR Validation Guide**
   - Location: [07-reference/methodology/pm-dor-validation-guide.md](../../07-reference/methodology/pm-dor-validation-guide.md)
   - Purpose: Comprehensive guide for validating solutions against PM-DoR criteria

3. **Reference Document: PM-DoR Standards**
   - Location: [07-reference/technical-specs/pm-dor-standards.md](../../07-reference/technical-specs/pm-dor-standards.md)
   - Purpose: Quick reference for PM-DoR standards, criteria, and requirements

### Updated Documents

4. **Solution Template**
   - Location: [07-reference/templates/solution-template.md](../../07-reference/templates/solution-template.md)
   - Updates: Added all PM-DoR required sections (User Story, Success Metrics, Why Now?, Acceptance Criteria, Dependencies, Out of Scope, Wireframes/Mockups, User Flow, Breakdown Suggestion, MVP Definition, PM-DoR Validation Checklist)

5. **Solution RULES**
   - Location: [04-opportunities/04-solutions/RULES.md](../../04-opportunities/04-solutions/RULES.md)
   - Updates: Added PM-DoR required sections to document structure, added acceptance criteria requirements and format standards, added PM-DoR validation checklist to validation requirements, updated validation checklist to include PM-DoR criteria

## Archive Date

[To be archived after review]

---

## Recommendations for Product Brain Framework Integration

Based on analysis of the PM-DoR framework and comparison with the current Product Brain workflow, the following recommendations are provided to align the Product Brain system with engineering readiness requirements.

### 1. Workflow Integration Recommendations

#### 1.1 Add PM-DoR Gate Between Solution Validation and Roadmap Inclusion

**Current Flow:** Solution Exploration → Experimentation → Roadmap Inclusion

**Recommended Flow:** Solution Exploration → Experimentation → **PM-DoR Validation** → Roadmap Inclusion

**Rationale:**
- PM-DoR ensures Discovery is complete before Delivery investment (aligns with Cagan principle)
- Current workflow validates solutions through experiments but doesn't explicitly ensure engineering readiness
- PM-DoR gate would validate that solutions meet all criteria before moving to roadmap/initiative creation
- This prevents premature commitment to engineering work

**Implementation:**
- Add new workflow stage: "PM-DoR Validation" between Experimentation and Roadmap Inclusion
- Solutions must pass PM-DoR checklist before becoming initiatives
- TDM (or equivalent) validates PM-DoR completeness
- Failed PM-DoR returns solution for additional detail (similar to engineering process)

#### 1.2 Align Validation Process with PM-DoR Standards

**Current State:** Solutions have validation status tracking but no formal PM-DoR validation

**Recommendation:** 
- Add PM-DoR validation checklist to solution documents
- Require PM-DoR completion before solution moves to "Ready for Roadmap" status
- Track PM-DoR metrics (similar to engineering: <10 days prep time, >70% first-time-right rate)

**Benefits:**
- Ensures solutions are engineering-ready before roadmap commitment
- Reduces rework and clarification cycles
- Creates clear handoff point between Product Brain and engineering

---

### 2. Solution Document Structure Recommendations

#### 2.1 Add Missing PM-DoR Required Sections

**Current Solution Structure Includes:**
- Overview, Related Opportunity, Solution Description, How It Addresses Opportunity, Assumptions, Expected Impact, Implementation Considerations, Validation Status, Four Product Risks Assessment

**Missing PM-DoR Required Sections:**
1. **Acceptance Criteria** (Required for ALL solutions)
2. **Success Metrics** (Required for ALL solutions) - Currently "Expected Impact" exists but not in PM-DoR format
3. **User Story** (Required for ALL solutions)
4. **Why Now?** (Required for ALL solutions)
5. **Dependencies** (Required for ALL solutions) - Currently in Implementation Considerations but not explicit
6. **Out of Scope** (Required for ALL solutions)
7. **Wireframes/Mockups** (Required for UI-impacting work)
8. **User Flow** (Required for UI-impacting work)
9. **Breakdown Suggestion** (Required for large work >13 points)
10. **MVP Definition** (Required for large work >13 points)

**Recommendation:**
Add these sections to the solution template (`07-reference/templates/solution-template.md`) and solution RULES (`04-opportunities/04-solutions/RULES.md`):

```markdown
## User Story
As a [user type], I want [goal], so that [benefit].

## Success Metrics
How will we measure success? Specific, measurable targets:
- Metric 1: [specific target]
- Metric 2: [specific target]
- Metric 3: [specific target]

## Why Now?
Business context for timing and priority:
- [Business driver 1]
- [Business driver 2]
- [Timing rationale]

## Acceptance Criteria
1. GIVEN [context] WHEN [action] THEN [result]
2. GIVEN [context] WHEN [action] THEN [result]
3. GIVEN [context] WHEN [action] THEN [result]
4. GIVEN [context] WHEN [action] THEN [result]
5. GIVEN [context] WHEN [action] THEN [result]
[Additional AC as needed based on work size]

## Dependencies
- [ ] [System/team/factor 1] - [Status]
- [ ] [System/team/factor 2] - [Status]

## Out of Scope
- [Explicitly excluded item 1]
- [Explicitly excluded item 2]

## Wireframes/Mockups (if UI work)
[Attach or link to visuals]

## User Flow (if UI work)
[Describe the navigation/flow]

## Breakdown Suggestion (if large work >13 points)
[Proposed phasing or decomposition]

## MVP Definition (if large work >13 points)
**Must have:**
- [Essential feature 1]
- [Essential feature 2]

**Nice to have:**
- [Optional feature 1]
- [Optional feature 2]
```

**Priority:** High - These sections are required for PM-DoR validation

#### 2.2 Enhance Existing Sections to Meet PM-DoR Standards

**Current "Expected Impact" Section:**
- Exists but doesn't follow PM-DoR success metrics format
- Should be restructured to include specific, measurable targets

**Recommendation:**
- Rename "Expected Impact" to "Success Metrics" or add separate "Success Metrics" section
- Require specific, measurable targets (not just qualitative descriptions)
- Link metrics to opportunity and outcome measures

**Current "Implementation Considerations" Section:**
- Contains dependencies but not in explicit PM-DoR format
- Should separate dependencies into dedicated section

**Recommendation:**
- Extract dependencies into dedicated "Dependencies" section with status tracking
- Keep effort, complexity, and risks in Implementation Considerations
- Format dependencies as checklist with status (similar to PM-DoR template)

---

### 3. Acceptance Criteria Standards Recommendations

#### 3.1 Adopt PM-DoR Acceptance Criteria Format

**Current State:** 
- Solutions don't have explicit acceptance criteria sections
- Acceptance criteria may exist in experiments but not in solution documents
- No minimum count requirements based on work size

**PM-DoR Requirements:**
- Minimum AC count by work size:
  - XS (1-2 points): 3 AC
  - S (3-5 points): 5 AC
  - M (8 points): 7 AC
  - L (13 points): 10 AC
  - XL (21+ points): 15 AC (or break down the work)
- Format: GIVEN/WHEN/THEN structure
- Must be specific, testable, unambiguous, complete, and bounded

**Recommendation:**
1. Add "Acceptance Criteria" as required section in solution documents
2. Require GIVEN/WHEN/THEN format for all acceptance criteria
3. Establish minimum AC counts based on solution complexity (map to story point estimates)
4. Add AC quality checklist to solution validation:
   - ✅ Specific (not vague)
   - ✅ Testable (observable, measurable)
   - ✅ Unambiguous (clear interpretation)
   - ✅ Complete (covers all scenarios)
   - ✅ Bounded (has limits/constraints)

**Implementation:**
- Update solution template with AC section
- Add AC requirements to `04-opportunities/04-solutions/RULES.md`
- Add AC validation to solution quality checklist
- Provide AC examples in templates

#### 3.2 Link Acceptance Criteria to Four Product Risks

**Recommendation:**
- Map acceptance criteria to four product risks where applicable
- Ensure AC coverage addresses Value, Usability, Feasibility, and Business Viability risks
- Use AC to validate risk mitigation strategies

---

### 4. Validation Process Recommendations

#### 4.1 Add PM-DoR Validation Checklist

**Recommendation:** Create PM-DoR validation checklist for solutions:

```markdown
## PM-DoR Validation Checklist

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

**Implementation:**
- Add to solution template
- Add to solution validation checklist
- Require PM-DoR validation before roadmap inclusion

#### 4.2 Align Validation Metrics with PM-DoR

**PM-DoR Metrics:**
- PM Preparation Cycle Time: <10 business days (target)
- First-Time-Right Rate: >70% (target)
- Return Rate: <30% (target)
- PM-DoR Completeness Score: >95% (target)

**Recommendation:**
- Track similar metrics in Product Brain workflow
- Measure time from solution creation to PM-DoR completion
- Track PM-DoR first-time pass rate
- Monitor return rate for incomplete PM-DoR

---

### 5. Decision Framework Alignment Recommendations

#### 5.1 Add PM-DoR Gate to Decision Framework

**Current Decision Framework Stages:**
1. Inbox Processing
2. Discovery & Research
3. Opportunity Validation
4. Solution Exploration
5. Experiment Design & Execution
6. Initiative & Roadmap Inclusion

**Recommended Addition:**
Add new stage between Experimentation and Roadmap Inclusion:

**Stage 5.5: PM-DoR Validation**
- **Purpose:** Ensure solutions meet engineering readiness criteria before roadmap commitment
- **Decision Points:**
  - PM-DoR Completeness Check
  - PM-DoR Quality Validation
  - Ready for Engineering Refinement Decision
- **Decision Maker:** TDM or PM Lead (validates), Human (approves roadmap inclusion)
- **Risk Level:** MEDIUM (prevents premature commitment)

**Implementation:**
- Update `07-reference/methodology/decision-framework.md`
- Add PM-DoR validation stage to workflow rules
- Update kanban board to include PM-DoR validation column

#### 5.2 Align Solution Selection Criteria with PM-DoR

**Current Solution Selection Criteria:**
- Four Product Risks Assessment
- Opportunity Alignment
- Implementation Considerations
- Validation Readiness

**Recommended Addition:**
- PM-DoR Readiness (all required sections complete)
- Acceptance Criteria Quality (meets PM-DoR standards)
- Success Metrics Defined (specific, measurable)

**Implementation:**
- Update `04-opportunities/04-solutions/DECISION-RULES.md`
- Add PM-DoR readiness to solution selection criteria
- Require PM-DoR validation before solution moves to "Ready for Roadmap"

---

### 6. Template and Documentation Updates

#### 6.1 Update Solution Template

**Recommendation:** Update `07-reference/templates/solution-template.md` to include all PM-DoR required sections (as outlined in section 2.1)

#### 6.2 Update Solution RULES

**Recommendation:** Update `04-opportunities/04-solutions/RULES.md` to:
- Add PM-DoR required sections to required document structure
- Add acceptance criteria requirements and format standards
- Add PM-DoR validation checklist to validation requirements
- Update validation checklist to include PM-DoR criteria

#### 6.3 Create PM-DoR Validation Guide

**Recommendation:** Create new document `07-reference/methodology/pm-dor-validation-guide.md` that:
- Explains PM-DoR purpose and alignment with Product Brain
- Provides validation checklist
- Includes examples of good vs bad PM-DoR sections
- Defines validation process and decision criteria
- Links to engineering PM-DoR documentation

---

### 7. Workflow Integration Points

#### 7.1 Solution to Initiative Handoff

**Current State:** Solutions move directly to roadmap/initiative creation after experimentation

**Recommendation:**
- Add PM-DoR validation gate before initiative creation
- Solutions must have PM-DoR complete status before becoming initiatives
- Initiative creation process should reference PM-DoR validation

#### 7.2 Alignment with Engineering Process

**Recommendation:**
- Solutions that pass PM-DoR in Product Brain should be ready for FPM creation
- FPM creation should reference Product Brain solution document
- PM-DoR validation in Product Brain should align with engineering PM-DoR requirements
- Create clear handoff process: Product Brain Solution → FPM Ticket

---

### 8. Implementation Priority

**High Priority (Implement First):**
1. Add PM-DoR required sections to solution template
2. Add acceptance criteria section with GIVEN/WHEN/THEN format
3. Add PM-DoR validation checklist to solution documents
4. Update solution RULES to include PM-DoR requirements

**Medium Priority (Implement Next):**
1. Add PM-DoR validation stage to decision framework
2. Create PM-DoR validation guide
3. Update workflow rules to include PM-DoR gate
4. Add PM-DoR metrics tracking

**Low Priority (Future Enhancement):**
1. Automated PM-DoR completeness scoring
2. PM-DoR validation dashboard/metrics
3. Integration with engineering FPM creation process

---

### 9. Benefits of Integration

**For Product Team:**
- Clearer handoff to engineering
- Reduced rework and clarification cycles
- Better alignment with engineering expectations
- Improved solution quality and completeness

**For Engineering Team:**
- Solutions arrive with sufficient detail for estimation
- Reduced refinement time
- Clearer acceptance criteria and success metrics
- Better understanding of business context

**For Overall Process:**
- Smoother transition from Product Brain to engineering
- Aligned with Cagan's Discovery before Delivery principle
- Consistent quality standards across product workflow
- Better traceability from opportunity to implementation

---

### 10. Open Questions for Consideration

1. **Who validates PM-DoR in Product Brain?**
   - Should TDM validate, or PM Lead?
   - Should validation happen before or after experimentation?

2. **How to handle solutions that don't require engineering?**
   - Some solutions may be process changes, not engineering work
   - Should PM-DoR apply to all solutions or only engineering-impacting ones?

3. **Story Point Estimation in Product Brain:**
   - PM-DoR references story points (XS, S, M, L, XL)
   - Product Brain doesn't currently estimate story points
   - Should we add rough estimation to solutions, or map to complexity/effort?

4. **Integration with Existing Validation:**
   - How does PM-DoR validation relate to Four Product Risks assessment?
   - Should PM-DoR validation happen before or after risk assessment?

5. **Template Migration:**
   - Should existing solutions be updated to include PM-DoR sections?
   - Or only apply to new solutions going forward?

---

**Next Steps:**
1. Review and prioritize recommendations
2. Decide on open questions
3. Update templates and documentation
4. Pilot PM-DoR validation with new solutions
5. Gather feedback and refine process

