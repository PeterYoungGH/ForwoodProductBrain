# Document Learnings

**Category:** Validation
**Strategic Theme:** N/A
**Autonomy Level:** Full
**Workflow Stages:** 6 (Experimentation)

## Purpose

Capture learnings from experiments and validation activities to build organizational knowledge and inform future decisions.

## Inputs Required

- **Experiment/Activity:** What was done
- **Results:** What happened
- **Outcome:** Go/Iterate/No-Go decision
- **Context:** Relevant background

## Process Steps

### Step 1: Identify Learning Types

Categorize learnings:
- **User Insights:** What we learned about users
- **Market Insights:** What we learned about the market
- **Technical Insights:** What we learned about technology
- **Process Insights:** What we learned about how we work
- **Assumption Insights:** Which assumptions proved true/false

### Step 2: Extract Specific Learnings

For each learning:
- What did we learn?
- What evidence supports it?
- How confident are we?
- What does it change?

### Step 3: Assess Impact

For each learning:
- Does this affect other opportunities?
- Does this affect our strategy?
- Should others know this?
- How should this change behavior?

### Step 4: Determine Reusability

Identify how learnings can be reused:
- Which future projects benefit?
- Which existing documents should reference this?
- Should this become a principle or guideline?

### Step 5: Format for Discovery

Structure learnings so they can be found:
- Clear titles
- Searchable tags
- Links to source materials
- Links to affected documents

### Step 6: Distribute to Stakeholders

Identify who should know:
- Immediate team
- Related project teams
- Leadership (if strategic)
- Broader organization (if widely applicable)

## Output Format

```markdown
# Learnings: [Source Activity]

**Source:** [[experiment/activity-link]]
**Date:** YYYY-MM-DD
**Outcome:** [Go | Iterate | No-Go]

## Summary

[1-2 sentence summary of key learnings]

## Learnings

### Learning 1: [Clear Statement]

**Category:** [User | Market | Technical | Process | Assumption]

**What We Learned:**
[Detailed description of the learning]

**Evidence:**
> "[Supporting quote or data]"
- [Additional evidence]

**Confidence:** [High | Medium | Low]

**Impact:**
- [What this changes or affects]

**Applies To:**
- [[Related opportunity]]
- [[Related solution]]
- [[Related project]]

### Learning 2: [Clear Statement]

**Category:** [Category]

**What We Learned:**
[Description]

**Evidence:**
- [Evidence]

**Confidence:** [Level]

**Impact:**
- [Impact]

**Applies To:**
- [[Related documents]]

### Learning 3: [Clear Statement]

[Same structure]

## Assumptions Validated

| Assumption | Status | Evidence |
|------------|--------|----------|
| [Assumption 1] | ✅ Validated | [Brief evidence] |
| [Assumption 2] | ❌ Invalidated | [Brief evidence] |
| [Assumption 3] | ⚠️ Partially | [Brief evidence] |

## Assumptions Still Untested

- [Assumption that wasn't tested]
- [Assumption that needs future validation]

## Strategic Implications

**For Current Project:**
- [Implication 1]

**For Related Projects:**
- [Implication for other work]

**For Strategy:**
- [Any strategic implications]

## Recommendations

### Immediate Actions
1. [Action to take now]
2. [Action to take now]

### Future Considerations
1. [Something to consider in future work]
2. [Something to incorporate into process]

### Principles to Adopt
- [If this learning should become a principle]

## Distribution

**Who Should Know:**
| Audience | Why | Action |
|----------|-----|--------|
| [Team/Role] | [Relevance] | [Share/Review/Discuss] |

## Tags

`#learning` `#[category]` `#[topic]` `#[project]`

## Related Documents

- [[Experiment]]
- [[Solution]]
- [[Opportunity]]
- [[Other affected documents]]
```

## Confidence Scoring

- **High:** Clear learnings, strong evidence, actionable
- **Medium:** Good learnings, some interpretation
- **Low:** Tentative learnings, need validation

## Example

**Input:** Experiment showing users confused by risk scoring scale but liked the concept.

**Output:** Learnings document with user insight "Visual scoring resonates but numeric scales confuse field workers," assumption invalidated "Users understand 1-10 scales intuitively," and recommendation to use traffic light metaphor instead.

## Related Skills

- [[analyze-experiment-results]] - Source of learnings
- [[recommend-go-no-go]] - Decision that generated learnings
- [[identify-research-gaps]] - Uses learnings to identify gaps

## Used By Commands

- `agentflow.orchestrate` - Stage 6 learning capture
- `agentflow.autonomous` - Automated learning documentation


