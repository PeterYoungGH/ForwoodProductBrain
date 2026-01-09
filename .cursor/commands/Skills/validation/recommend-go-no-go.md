# Recommend Go/No-Go

**Category:** Validation
**Strategic Theme:** N/A
**Autonomy Level:** Human-Required
**Workflow Stages:** 6 (Experimentation)

## Purpose

Make a proceed/iterate/abandon recommendation based on experiment results and evidence quality.

## Inputs Required

- **Experiment Results:** Analyzed results
- **Success Criteria:** Original thresholds
- **Strategic Context:** Current priorities
- **Resource Constraints:** Available capacity

## Process Steps

### Step 1: Review Evidence

Summarize the evidence:
- What did the experiment show?
- How confident are we in the data?
- What were the key learnings?

### Step 2: Apply Decision Framework

Evaluate against framework:

| Criteria | Go | Iterate | No-Go |
|----------|-----|---------|-------|
| Primary Metric | ≥ Target | ≥ Minimum, < Target | < Minimum |
| Secondary Metrics | Mostly met | Some met | Few/none met |
| Guardrails | All maintained | Minor concerns | Violated |
| Learnings | Support proceed | Suggest refinements | Show fundamental issues |
| Confidence | High | Medium | Low or High (failure) |

### Step 3: Consider Context

Factor in:
- Strategic urgency (need to move fast?)
- Resource availability (capacity to iterate?)
- Competitive pressure (market timing?)
- Sunk cost (what's already invested?)

### Step 4: Assess Paths Forward

For each option:

**Go:**
- What happens next?
- What's the implementation path?
- What risks remain?

**Iterate:**
- What needs to change?
- What's the next experiment?
- How long will iteration take?

**No-Go:**
- What do we learn from this?
- Is the opportunity still valid?
- Are there alternative solutions?

### Step 5: Make Recommendation

Provide clear recommendation with:
- Verdict (Go/Iterate/No-Go)
- Confidence level
- Key rationale
- Conditions or caveats

### Step 6: Prepare for Human Decision

This decision requires human approval. Present:
- Summary of evidence
- Clear recommendation
- Alternative options
- Trade-offs

## Output Format

```markdown
## Go/No-Go Recommendation: [Experiment Name]

**Experiment:** [[experiment-link]]
**Solution:** [[solution-link]]
**Date:** YYYY-MM-DD

### Evidence Summary

**Experiment Type:** [Type]
**Participants:** [Count]
**Data Quality:** [Good | Acceptable | Poor]

**Key Results:**
| Metric | Target | Actual | Verdict |
|--------|--------|--------|---------|
| Primary | [X] | [Y] | ✅/❌ |
| Secondary | [X] | [Y] | ✅/❌ |
| Guardrail | ≥[X] | [Y] | ✅/❌ |

**Key Learnings:**
1. [Learning 1]
2. [Learning 2]

### Decision Framework Assessment

| Criteria | Assessment | Points |
|----------|------------|--------|
| Primary Metric | [Met/Partial/Not Met] | +2/+1/0 |
| Secondary Metrics | [Met/Partial/Not Met] | +1/+0.5/0 |
| Guardrails | [Maintained/Concern/Violated] | +1/0/-2 |
| Learnings Direction | [Support/Mixed/Oppose] | +1/0/-1 |
| Confidence | [High/Medium/Low] | +1/0/-1 |

**Total Score:** [X]/6

| Score | Recommendation |
|-------|----------------|
| 5-6 | Strong Go |
| 3-4 | Go with conditions |
| 1-2 | Iterate |
| ≤0 | No-Go |

### Contextual Factors

| Factor | Assessment | Impact on Decision |
|--------|------------|-------------------|
| Strategic Urgency | [High/Medium/Low] | [Pushes toward...] |
| Resource Availability | [High/Medium/Low] | [Enables/Constrains...] |
| Competitive Pressure | [High/Medium/Low] | [Affects timing...] |
| Remaining Risk | [High/Medium/Low] | [Concerns about...] |

### Path Analysis

#### If Go
**Next Steps:**
1. [Step 1]
2. [Step 2]

**Remaining Risks:**
- [Risk 1]
- [Risk 2]

**Timeline to Value:** [Estimate]

#### If Iterate
**What to Change:**
1. [Change 1]
2. [Change 2]

**Next Experiment:**
[Description of follow-up experiment]

**Iteration Timeline:** [Estimate]

#### If No-Go
**Learnings to Preserve:**
1. [Learning 1]
2. [Learning 2]

**Opportunity Still Valid?** [Yes/No/Uncertain]

**Alternative Solutions:**
- [Alternative 1]
- [Alternative 2]

### Recommendation

**Verdict:** [Go | Go with Conditions | Iterate | No-Go]

**Confidence:** [High | Medium | Low]

**Rationale:**
[2-3 sentences explaining the recommendation]

**Conditions (if applicable):**
- [Condition 1]
- [Condition 2]

### 🔴 HUMAN DECISION REQUIRED

**This recommendation requires human approval.**

**Options:**
1. [ ] **Go:** Proceed to implementation
2. [ ] **Go with Conditions:** Proceed with additional requirements
3. [ ] **Iterate:** Refine and test again
4. [ ] **No-Go:** Stop work on this solution
5. [ ] **Need More Information:** Request additional data

**Decision Deadline:** [If applicable]

**Decision Maker:** [Role/Name]

## Related Documents

- [[Experiment]]
- [[Solution]]
- [[Opportunity]]
```

## Confidence Scoring

- **High:** Clear evidence, unambiguous recommendation
- **Medium:** Good evidence, some judgment involved
- **Low:** Unclear evidence, decision requires more input

## Example

**Input:** Experiment results showing 80% of users prioritized top risks (target: 80%), but confusion about scoring scale.

**Output:** Recommendation: "Go with Conditions" - proceed to implementation but include user education about scoring, with additional usability testing during development.

## Related Skills

- [[analyze-experiment-results]] - Provides results to assess
- [[design-experiment]] - May need next experiment
- [[document-learnings]] - Captures learnings

## Used By Commands

- `agentflow.orchestrate` - Stage 6 decision (stops for human)
- `agentflow.autonomous` - Uses confidence threshold for auto-decision


