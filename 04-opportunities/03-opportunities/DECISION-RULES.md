# Opportunity Decision Rules

**Last Updated:** 2025-12-17  
**Purpose:** Decision rules and criteria for opportunity validation, prioritization, and solution readiness assessment.

## Overview

This document defines the decision rules for opportunities, including validation criteria, prioritization methods, and solution readiness assessment. These rules ensure opportunities are well-formed, evidence-based, and properly linked to outcomes before moving to solution exploration.

## Decision Points

### 1. Opportunity Quality Validation

**Decision Question:** Is this a well-formed opportunity (customer-focused, evidence-based)?

**Decision Maker:**
- **Agent:** Validates format (customer-focused language, required fields)
- **Human:** Validates content quality and evidence strength

**Decision Criteria:**

1. **Customer-Focused Language**
   - Must describe customer needs, not solutions
   - Avoid solution language (e.g., "need a dashboard" → "struggle to track progress")
   - Use customer perspective and language

2. **Evidence Requirements**
   - Must have at least one piece of evidence
   - Evidence must be specific and credible
   - Evidence should link to research documents, data, or user feedback

3. **Required Document Structure**
   - Overview (customer-focused)
   - Customer Problem section (not solution-focused)
   - Evidence section with links
   - Related Outcomes section (must link to at least one product outcome)

**Validation Checklist:**
- [ ] Opportunity describes customer need, not solution
- [ ] At least one piece of evidence is provided
- [ ] Evidence is specific and credible
- [ ] Links to at least one product outcome
- [ ] Problem description uses customer language

**Decision Logging:** Required for all opportunity creation/updates

---

### 2. Outcome Linking Validation

**Decision Question:** Does this opportunity link to valid outcomes?

**Decision Maker:**
- **Agent:** Checks for required links, validates link paths
- **Human:** Validates relevance and alignment

**Decision Criteria:**

1. **Required Links**
   - Must link to at least one product outcome
   - Can optionally link to business outcome (if direct connection)
   - Links must use correct relative paths

2. **Link Relevance**
   - Opportunity must clearly support the linked outcome
   - Connection should be explicit in opportunity description
   - Multiple opportunities can support one outcome

**Validation Checklist:**
- [ ] Links to at least one product outcome
- [ ] Links use correct relative paths
- [ ] Connection to outcome is clear
- [ ] Opportunity description explains impact on outcome

**Decision Logging:** Required when links are added or changed

---

### 3. Prioritization

**Decision Question:** Should this opportunity be Active, Backlog, or Archived?

**Decision Maker:** **Human** (makes final decision)

**Decision Criteria:**

1. **Opportunity Scoring** (Jobs to Be Done Framework)
   - Formula: `Opportunity = Importance × (10 − Satisfaction)`
   - Importance: 1-10 scale (how important is this outcome to customers?)
   - Satisfaction: 1-10 scale (how satisfied are customers currently?)
   - Higher scores indicate higher priority

2. **Evidence Strength**
   - Strong evidence supports Active status
   - Weak evidence may require more research (Backlog)
   - No evidence should not be Active

3. **Outcome Alignment**
   - Opportunities supporting high-priority outcomes should be prioritized
   - Strategic alignment with business outcomes
   - Portfolio balance considerations

4. **Resource Availability**
   - Active opportunities should have capacity to work on
   - Backlog for opportunities not yet ready
   - Archive for opportunities no longer relevant

**Prioritization Process:**

1. **Agent Actions:**
   - Calculate opportunity score using JTBD formula
   - Assess evidence strength
   - Check outcome alignment
   - Suggest prioritization based on scores

2. **Human Actions:**
   - Review agent suggestions
   - Consider strategic context
   - Make final prioritization decision
   - Log decision with rationale

**Decision Logging:** Required for all prioritization decisions

**Decision Log Format:**
- Decision: "Move to Active" / "Move to Backlog" / "Archive"
- Rationale: Why this prioritization was chosen
- Supporting Evidence: Opportunity score, evidence strength, outcome alignment

---

### 4. Solution Readiness Assessment

**Decision Question:** Is this opportunity ready for solution exploration?

**Decision Maker:**
- **Agent:** Assesses readiness criteria
- **Human:** Confirms readiness

**Decision Criteria:**

1. **Opportunity Quality**
   - Well-formed (customer-focused, evidence-based)
   - Clear problem statement
   - Strong evidence

2. **Outcome Linking**
   - Links to valid product outcome
   - Connection is clear

3. **Prioritization**
   - Opportunity is Active (not Backlog)
   - Has sufficient priority to warrant solution exploration

4. **Research Completeness**
   - Sufficient research to understand the problem
   - Customer needs are well-understood
   - No major unknowns that would block solution design

**Readiness Checklist:**
- [ ] Opportunity is well-formed and customer-focused
- [ ] Strong evidence supports the opportunity
- [ ] Links to at least one product outcome
- [ ] Opportunity is Active (prioritized)
- [ ] Sufficient research to understand customer needs
- [ ] No major unknowns blocking solution design

**Decision Logging:** Should be logged when readiness is assessed

---

## Agent Capabilities

### What Agents Can Do

1. **Format Validation**
   - Check opportunity follows required structure
   - Validate customer-focused language
   - Check for required fields

2. **Evidence Checking**
   - Verify evidence links exist
   - Flag weak or missing evidence
   - Check evidence credibility

3. **Link Validation**
   - Verify outcome links exist and are valid
   - Check relative paths are correct
   - Flag missing required links

4. **Opportunity Scoring**
   - Calculate JTBD opportunity score
   - If importance/satisfaction not provided, flag for human input
   - Suggest prioritization based on scores

5. **Readiness Assessment**
   - Assess solution readiness criteria
   - Flag missing requirements
   - Suggest when opportunity is ready

### What Agents Cannot Do

1. **Prioritization Decisions**
   - Cannot move opportunities to Active/Backlog/Archive
   - Cannot make final prioritization decisions
   - Can only suggest based on scores

2. **Evidence Validation**
   - Cannot determine if evidence is sufficient
   - Can flag weak evidence, but human decides if sufficient
   - Cannot approve opportunity without evidence

3. **Content Quality Assessment**
   - Cannot validate if problem description is accurate
   - Cannot determine if customer need is real
   - Can check format, but human validates content

---

## Decision Logging Requirements

### When to Log

**Always Log:**
- Opportunity creation
- Opportunity updates (status changes, content changes)
- Prioritization decisions (Active/Backlog/Archive)
- Outcome linking decisions

**Should Log:**
- Solution readiness assessments
- Evidence validation decisions
- Format validation results (if issues found)

### Decision Log Format

See `07-reference/methodology/decision-log-format.md` for full format specification.

**Required Fields for Prioritization:**
- Decision ID
- Decision Date
- Decision Type: "Opportunity Prioritization"
- Decision: "Move to Active" / "Move to Backlog" / "Archive"
- Decision Maker: Human name
- Rationale: Why this prioritization was chosen
- Supporting Evidence: Opportunity score, evidence strength, outcome alignment

---

## Integration with Decision Framework

This document implements the Opportunity Validation stage from:
- [Decision Framework](../../07-reference/methodology/decision-framework.md)

Related frameworks:
- [Jobs to Be Done Framework](../../07-reference/methodology/jobs-to-be-done-framework.md) - For opportunity scoring
- [Four Product Risks Framework](../../07-reference/methodology/four-product-risks-framework.md) - For value risk assessment
- [Opportunity Solution Tree Guide](../../07-reference/methodology/opportunity-solution-tree-guide.md) - For overall structure

---

## Related Documents

- [Opportunities Format Rules](./RULES.md) - Document format requirements
- [Decision Framework](../../07-reference/methodology/decision-framework.md) - Overall decision framework
- [Decision Log Format](../../07-reference/methodology/decision-log-format.md) - Decision logging format



