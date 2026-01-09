# Validate Strategic Alignment

**Category:** Opportunity
**Strategic Theme:** All Themes
**Autonomy Level:** Full
**Workflow Stages:** 4, 5, 7 (Opportunity Validation, Solution Exploration, Roadmap Inclusion)

## Purpose

Ensure opportunities, solutions, and initiatives align with Forwood's strategic themes and VoC-identified problems before committing resources.

## Inputs Required

- **Item to Validate:** Opportunity, solution, or initiative
- **Strategic Themes:** Forwood's 5 themes
- **VoC Evidence:** Voice of Customer insights
- **Strategic Roadmap:** Current roadmap priorities

## Process Steps

### Step 1: Review Strategic Themes

Reference Forwood's 5 strategic themes:

**Theme 1: Fatal Risk Visibility & Governance**
- Focus: Make fatal risk as visible as production metrics
- VoC: "Green dashboards, red reality", "Accountability without authority"

**Theme 2: From Data Collection to Action**
- Focus: Transform reporting into visible action
- VoC: "Drowning in data, starving for action", "Reports go into a black hole"

**Theme 3: Credibility & Trust Through Systems**
- Focus: Position safety professionals as partners, not police
- VoC: "Credibility erosion", "Non-blame culture enables truth"

**Theme 4: Controls That Actually Work**
- Focus: Controls that prevent harm, not just satisfy audits
- VoC: "Controls satisfy audits but don't prevent harm"

**Theme 5: Standardization Without Rigidity**
- Focus: Consistent understanding without bureaucracy
- VoC: "Non-standardisation creates real risk", "Every site is different"

### Step 2: Assess Primary Alignment

For each theme, evaluate:
- Does this directly address the theme's focus?
- Does this have supporting VoC evidence?
- Would this advance the theme's desired outcome?

**Rating Scale:**
- **Strong (3):** Direct alignment, clear VoC support
- **Moderate (2):** Indirect alignment, some VoC support
- **Weak (1):** Tangential alignment, limited VoC support
- **None (0):** No alignment

### Step 3: Calculate Alignment Score

Sum alignment across themes:
- Maximum score: 15 (strong alignment to all 5 themes)
- Typical target: 6+ (strong alignment to 2 themes)

### Step 4: Check Roadmap Consistency

Verify alignment with current roadmap:
- Does this support a Now/Next/Later item?
- Does this conflict with roadmap priorities?
- Does this fill a roadmap gap?

### Step 5: Identify VoC Evidence

Link to specific VoC quotes:
- Which customer pain points does this address?
- Which customer outcomes does this support?
- What quotes support this work?

### Step 6: Flag Misalignment

If alignment is weak:
- Is this out of scope for current strategy?
- Is this a gap in strategy coverage?
- Should strategy be updated?

## Output Format

```markdown
## Strategic Alignment Validation

**Item:** [[item-link]]
**Type:** [Opportunity | Solution | Initiative]
**Date:** YYYY-MM-DD

### Alignment Summary

**Overall Score:** [X]/15
**Alignment Level:** [Strong | Moderate | Weak | Misaligned]
**Primary Theme:** Theme X: [Name]

### Theme Alignment Detail

| Theme | Score | Alignment Rationale |
|-------|-------|---------------------|
| Theme 1: Fatal Risk Visibility | [0-3] | [Rationale] |
| Theme 2: Data to Action | [0-3] | [Rationale] |
| Theme 3: Credibility & Trust | [0-3] | [Rationale] |
| Theme 4: Controls That Work | [0-3] | [Rationale] |
| Theme 5: Standardization | [0-3] | [Rationale] |

### VoC Evidence

**Directly Addresses:**
> "[VoC quote 1]" - [Source]
> "[VoC quote 2]" - [Source]

**Indirectly Supports:**
- [VoC signal 1]
- [VoC signal 2]

### Roadmap Alignment

**Current Roadmap Status:**
- Now: [Related item or N/A]
- Next: [Related item or N/A]
- Later: [Related item or N/A]

**Alignment Assessment:**
- [ ] Supports existing roadmap item
- [ ] Fills roadmap gap
- [ ] Conflicts with roadmap priority
- [ ] New item not on roadmap

**Roadmap Impact:**
[How this affects current roadmap priorities]

### Alignment Assessment

**Strengths:**
- [What aligns well]
- [What aligns well]

**Gaps:**
- [Where alignment is weak]
- [What VoC is not addressed]

**Risks:**
- [If alignment is weak, what's the risk]

### Recommendation

**Alignment Verdict:** [Proceed | Caution | Reconsider | Block]

**Rationale:**
[Why this verdict]

**If Caution/Reconsider:**
[What needs to happen to improve alignment]

### Strategic Pillars Check

| Pillar | Addressed? |
|--------|------------|
| Ease of Use | [Yes/No/Partial] |
| SIF Prevention | [Yes/No/Partial] |
| Adoption & Engagement | [Yes/No/Partial] |
| Data Insights | [Yes/No/Partial] |

## Related Documents

- [[Strategic Roadmap]]
- [[VoC Insights]]
- [[Item being validated]]
```

## Confidence Scoring

- **High:** Clear theme alignment, strong VoC support
- **Medium:** Moderate alignment, some VoC support
- **Low:** Unclear alignment, needs more evidence

## Example

**Input:** Opportunity: "Safety managers can't see which critical controls need attention"

**Output:**
- Score: 9/15
- Primary: Theme 1 (Strong - 3)
- Secondary: Theme 2 (Strong - 3), Theme 4 (Moderate - 2), Theme 3 (Weak - 1)
- VoC: "Green dashboards, red reality" directly addressed
- Verdict: Proceed - strong alignment to core themes

## Related Skills

- [[map-pain-to-strategic-theme]] - Maps pain to themes
- [[align-to-strategy]] - Broader strategy alignment
- [[link-to-outcomes]] - Outcome connections

## Used By Commands

- `agentflow.identify-opportunities` - Validates opportunities
- `agentflow.assess-solutions` - Validates solutions
- `agentflow.orchestrate` - Stage 4, 5, 7 validation


