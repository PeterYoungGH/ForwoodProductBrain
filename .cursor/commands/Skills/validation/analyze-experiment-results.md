# Analyze Experiment Results

**Category:** Validation
**Strategic Theme:** N/A
**Autonomy Level:** Full
**Workflow Stages:** 6 (Experimentation)

## Purpose

Interpret experiment data and compare results against success criteria to inform go/no-go decisions.

## Inputs Required

- **Experiment Design:** Original experiment with hypothesis
- **Success Criteria:** Defined thresholds
- **Raw Data:** Collected experiment data
- **Context:** Any relevant contextual factors

## Process Steps

### Step 1: Verify Data Quality

Check the data:
- Is the sample size sufficient?
- Is the data complete?
- Are there obvious errors or outliers?
- Was the experiment executed as designed?

### Step 2: Calculate Results

For each metric:
- Calculate actual value
- Compare to baseline
- Compare to target
- Calculate statistical significance (if applicable)

### Step 3: Assess Against Criteria

For each success criterion:
- Did it meet the target?
- Did it meet minimum viable?
- Were guardrails maintained?

### Step 4: Identify Insights

Beyond metrics, extract:
- Qualitative observations
- User feedback themes
- Unexpected behaviors
- Edge cases discovered

### Step 5: Determine Outcome

Based on criteria:
- **Go:** Met success criteria
- **Iterate:** Partial success, path forward visible
- **No-Go:** Failed criteria, no clear path

### Step 6: Document Learnings

Capture:
- What we learned
- What surprised us
- What we'd do differently
- Implications for next steps

## Output Format

```markdown
## Experiment Results: [Experiment Name]

**Experiment:** [[experiment-link]]
**Date Analyzed:** YYYY-MM-DD
**Analyst:** [Name]

### Experiment Summary

**Hypothesis:**
We believed that [action] would result in [outcome] for [users].

**Method:** [Experiment type]
**Duration:** [Start] to [End]
**Participants:** [Number and description]

### Data Quality Assessment

| Check | Status | Notes |
|-------|--------|-------|
| Sample Size | ✅/⚠️/❌ | [Details] |
| Data Completeness | ✅/⚠️/❌ | [Details] |
| Execution Fidelity | ✅/⚠️/❌ | [Details] |
| Outliers | ✅/⚠️/❌ | [Details] |

**Overall Data Quality:** [Good | Acceptable | Poor]

### Results Summary

| Metric | Baseline | Target | Actual | Verdict |
|--------|----------|--------|--------|---------|
| Primary: [Metric] | [X] | [Y] | **[Z]** | ✅/❌ |
| Secondary: [Metric] | [X] | [Y] | **[Z]** | ✅/❌ |
| Guardrail: [Metric] | ≥[X] | - | **[Y]** | ✅/❌ |

### Detailed Analysis

#### Primary Metric: [Metric Name]

**Result:** [Actual value]
**vs. Baseline:** [% change]
**vs. Target:** [Met/Not Met by X%]

**Statistical Significance:** [If applicable]
- Confidence Level: [X%]
- p-value: [X]

**Interpretation:**
[What this result means]

#### Secondary Metrics

**[Metric 1]:**
- Result: [Value]
- vs. Target: [Met/Not Met]
- Interpretation: [What this means]

**[Metric 2]:**
- Result: [Value]
- vs. Target: [Met/Not Met]
- Interpretation: [What this means]

#### Guardrail Metrics

**[Metric 1]:**
- Minimum: [Threshold]
- Actual: [Value]
- Status: [Maintained/Violated]

### Qualitative Insights

**Key Observations:**
1. [Observation 1]
2. [Observation 2]
3. [Observation 3]

**User Feedback Themes:**
- [Theme 1]: [Supporting quotes/data]
- [Theme 2]: [Supporting quotes/data]

**Unexpected Findings:**
- [Finding 1]
- [Finding 2]

### Outcome Assessment

**Criteria Met:**
- [X] Primary metric ≥ Target
- [ ] All secondary metrics ≥ Target
- [X] All guardrails maintained

**Verdict:** [Go | Iterate | No-Go]

**Confidence:** [High | Medium | Low]

**Rationale:**
[Why this verdict]

### Learnings

**What We Learned:**
1. [Learning 1]
2. [Learning 2]
3. [Learning 3]

**What Surprised Us:**
- [Surprise 1]

**What We'd Do Differently:**
- [Improvement 1]

### Recommendations

**If Go:**
- [Next step 1]
- [Next step 2]

**If Iterate:**
- [What to change]
- [What to test next]

**If No-Go:**
- [What to document]
- [Alternative directions]

### Decision Log

**Decision:** [Go | Iterate | No-Go]
**Date:** YYYY-MM-DD
**Decision Maker:** [Name/Pending human decision]
**Rationale:** [Brief rationale]

## Related Documents

- [[Experiment Design]]
- [[Solution]]
- [[Next Steps]]
```

## Confidence Scoring

- **High:** Strong data, clear results, unambiguous outcome
- **Medium:** Good data, some ambiguity in interpretation
- **Low:** Weak data, unclear results, judgment required

## Example

**Input:** Experiment data from prototype test of fatal risk dashboard with 10 participants.

**Output:** Analysis showing 8/10 participants (80%) prioritized top risks first (target: 80%), with insights about confusion with scoring scale and recommendation to iterate with clearer labels.

## Related Skills

- [[design-experiment]] - Creates experiment to analyze
- [[define-success-criteria]] - Sets criteria to measure against
- [[recommend-go-no-go]] - Makes formal recommendation

## Used By Commands

- `agentflow.orchestrate` - Stage 6 results analysis
- `agentflow.autonomous` - Automated analysis


