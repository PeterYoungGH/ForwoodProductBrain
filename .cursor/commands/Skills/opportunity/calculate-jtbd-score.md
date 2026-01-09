# Calculate JTBD Score

**Category:** Opportunity
**Strategic Theme:** N/A
**Autonomy Level:** Full
**Workflow Stages:** 4 (Opportunity Validation)

## Purpose

Calculate the Jobs-to-Be-Done (JTBD) opportunity score to prioritize opportunities based on importance and current satisfaction levels.

## Inputs Required

- **Opportunity:** The opportunity to score
- **Customer Segment:** Who experiences this
- **Research Data:** Evidence about importance and satisfaction
- **Benchmark Data:** (Optional) Industry benchmarks

## Process Steps

### Step 1: Assess Importance

Rate how important this job is to customers (1-10):

**Importance Factors:**
- Frequency: How often do they need to do this?
- Criticality: What happens if they can't do it?
- Emotional Weight: How much do they care about it?
- Business Impact: How does it affect their work outcomes?

**Scoring Guide:**
| Score | Description |
|-------|-------------|
| 9-10 | Mission-critical, daily need, severe consequences |
| 7-8 | Very important, frequent need, significant impact |
| 5-6 | Moderately important, regular need, noticeable impact |
| 3-4 | Somewhat important, occasional need, minor impact |
| 1-2 | Nice to have, rare need, minimal impact |

### Step 2: Assess Current Satisfaction

Rate how satisfied customers are with current solutions (1-10):

**Satisfaction Factors:**
- Current Solution Quality: How well do existing tools work?
- Workaround Effort: How much do they struggle?
- Pain Expression: How much do they complain?
- Switching Willingness: Would they try alternatives?

**Scoring Guide:**
| Score | Description |
|-------|-------------|
| 9-10 | Very satisfied, current solution works well |
| 7-8 | Mostly satisfied, minor frustrations |
| 5-6 | Neutral, some gaps but acceptable |
| 3-4 | Dissatisfied, significant gaps |
| 1-2 | Very dissatisfied, actively seeking alternatives |

### Step 3: Calculate Opportunity Score

Apply the JTBD opportunity formula:

**Formula:** Opportunity Score = Importance + (Importance - Satisfaction)

**Alternative Formula (Max):** Opportunity Score = Importance + max(Importance - Satisfaction, 0)

**Score Interpretation:**
| Score | Priority |
|-------|----------|
| 15+ | High priority - Significant underserved need |
| 10-14 | Medium priority - Notable opportunity |
| 5-9 | Lower priority - Moderate opportunity |
| <5 | Low priority - Well-served or low importance |

### Step 4: Document Evidence

For each rating, capture:
- Specific evidence supporting the score
- Quotes or data points
- Confidence level in the assessment

### Step 5: Compare to Portfolio

Assess relative to other opportunities:
- How does this score compare to active opportunities?
- Does this change prioritization?
- Are there related opportunities to consider together?

## Output Format

```markdown
## JTBD Opportunity Score: [Opportunity Name]

**Opportunity:** [[opportunity-link]]
**Scoring Date:** YYYY-MM-DD
**Scorer:** [Name/AI]

### Importance Assessment

**Score:** X/10
**Confidence:** [High | Medium | Low]

**Factors Considered:**
| Factor | Assessment | Evidence |
|--------|------------|----------|
| Frequency | [Rating] | [Evidence] |
| Criticality | [Rating] | [Evidence] |
| Emotional Weight | [Rating] | [Evidence] |
| Business Impact | [Rating] | [Evidence] |

**Supporting Evidence:**
> "[Quote demonstrating importance]" - [Source]

### Satisfaction Assessment

**Score:** X/10
**Confidence:** [High | Medium | Low]

**Factors Considered:**
| Factor | Assessment | Evidence |
|--------|------------|----------|
| Current Solution | [Rating] | [Evidence] |
| Workaround Effort | [Rating] | [Evidence] |
| Pain Expression | [Rating] | [Evidence] |
| Switching Willingness | [Rating] | [Evidence] |

**Supporting Evidence:**
> "[Quote demonstrating satisfaction/dissatisfaction]" - [Source]

### Opportunity Score Calculation

```
Importance: X
Satisfaction: Y
Opportunity Score: X + (X - Y) = Z
```

**Final Score:** [Z]/20

### Score Interpretation

**Priority Level:** [High | Medium | Lower | Low]
**Recommendation:** [Active | Backlog | Archive | Investigate Further]

**Rationale:**
[Explanation of what this score means and recommended action]

### Portfolio Comparison

| Opportunity | Score | Status |
|-------------|-------|--------|
| This opportunity | Z | [Proposed] |
| [Other opp 1] | A | [Active] |
| [Other opp 2] | B | [Backlog] |

**Relative Position:** [Where this ranks in the portfolio]

### Scoring Confidence

**Overall Confidence:** [High | Medium | Low]

**Confidence Factors:**
- [X] Sufficient research data
- [X] Direct customer input
- [ ] Quantitative validation
- [X] Multiple sources

**If Low Confidence:** [What additional data would improve confidence]

## Related Documents

- [[Opportunity document]]
- [[Supporting research]]
```

## Confidence Scoring

- **High:** Multiple data sources, direct customer input, consistent findings
- **Medium:** Some data, reasonable assumptions
- **Low:** Limited data, significant assumptions

## Example

**Input:** Opportunity about safety managers not seeing fatal risk signals clearly.

**Output:**
- Importance: 9/10 (mission-critical, prevents fatalities)
- Satisfaction: 3/10 (very dissatisfied, "green dashboards, red reality")
- Opportunity Score: 9 + (9 - 3) = 15 (High priority)

## Related Skills

- [[frame-opportunity]] - Creates opportunity to score
- [[prioritize-opportunities]] - Uses score for prioritization
- [[assess-evidence-quality]] - Validates evidence strength

## Used By Commands

- `agentflow.identify-opportunities` - Scores new opportunities
- `agentflow.orchestrate` - Stage 4 scoring


