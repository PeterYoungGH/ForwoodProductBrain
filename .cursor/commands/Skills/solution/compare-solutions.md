# Compare Solutions

**Category:** Solution
**Strategic Theme:** N/A
**Autonomy Level:** Supervised
**Workflow Stages:** 5 (Solution Exploration)

## Purpose

Trade-off analysis between multiple solution options to inform solution selection decisions.

## Inputs Required

- **Solutions:** 2+ solutions to compare
- **Risk Assessments:** Four Risks assessments for each
- **Opportunity:** The opportunity being addressed
- **Decision Criteria:** What matters most in selection

## Process Steps

### Step 1: Define Comparison Criteria

Establish criteria for comparison:

**Standard Criteria:**
- Value Risk (will users want it?)
- Usability Risk (can users use it?)
- Feasibility Risk (can we build it?)
- Business Viability (does it work for business?)
- Time to Market (how fast?)
- Effort (how much work?)
- Strategic Alignment (how well does it align?)

**Custom Criteria (if needed):**
- [Specific to this decision]

### Step 2: Weight Criteria

Assign importance weights (total = 100%):

| Criterion | Weight | Rationale |
|-----------|--------|-----------|
| Value | 25% | Most important - must solve problem |
| Usability | 20% | High - adoption depends on it |
| Feasibility | 15% | Must be buildable |
| Viability | 15% | Must work for business |
| Time to Market | 15% | Speed matters now |
| Strategic Alignment | 10% | Nice to have |

### Step 3: Score Each Solution

Rate each solution on each criterion (1-10):

For each criterion:
- 9-10: Excellent / No concerns
- 7-8: Good / Minor concerns
- 5-6: Adequate / Some concerns
- 3-4: Poor / Significant concerns
- 1-2: Very poor / Major blockers

### Step 4: Calculate Weighted Scores

For each solution:
```
Total Score = Σ (Criterion Score × Weight)
```

### Step 5: Analyze Trade-offs

Identify key trade-offs:
- Where do solutions differ most?
- What are you gaining/losing with each?
- Are there any deal-breakers?

### Step 6: Make Recommendation

Based on analysis:
- Which solution scores highest?
- Are there close contenders?
- What conditions favor each option?
- What's the recommended path?

## Output Format

```markdown
## Solution Comparison: [Opportunity Name]

**Opportunity:** [[opportunity-link]]
**Solutions Compared:** [Count]
**Date:** YYYY-MM-DD

### Solutions Overview

| Solution | Description | Complexity | Time |
|----------|-------------|------------|------|
| A: [Name] | [Brief description] | [Level] | [Estimate] |
| B: [Name] | [Brief description] | [Level] | [Estimate] |
| C: [Name] | [Brief description] | [Level] | [Estimate] |

### Comparison Criteria

| Criterion | Weight | Rationale |
|-----------|--------|-----------|
| Value Risk | 25% | [Why this weight] |
| Usability Risk | 20% | [Why this weight] |
| Feasibility | 15% | [Why this weight] |
| Viability | 15% | [Why this weight] |
| Time to Market | 15% | [Why this weight] |
| Strategic Alignment | 10% | [Why this weight] |

### Detailed Scoring

#### Value Risk (Weight: 25%)

| Solution | Score | Rationale |
|----------|-------|-----------|
| A | X/10 | [Why this score] |
| B | X/10 | [Why this score] |
| C | X/10 | [Why this score] |

#### Usability Risk (Weight: 20%)

| Solution | Score | Rationale |
|----------|-------|-----------|
| A | X/10 | [Why this score] |
| B | X/10 | [Why this score] |
| C | X/10 | [Why this score] |

#### Feasibility (Weight: 15%)

| Solution | Score | Rationale |
|----------|-------|-----------|
| A | X/10 | [Why this score] |
| B | X/10 | [Why this score] |
| C | X/10 | [Why this score] |

#### Viability (Weight: 15%)

| Solution | Score | Rationale |
|----------|-------|-----------|
| A | X/10 | [Why this score] |
| B | X/10 | [Why this score] |
| C | X/10 | [Why this score] |

#### Time to Market (Weight: 15%)

| Solution | Score | Rationale |
|----------|-------|-----------|
| A | X/10 | [Why this score] |
| B | X/10 | [Why this score] |
| C | X/10 | [Why this score] |

#### Strategic Alignment (Weight: 10%)

| Solution | Score | Rationale |
|----------|-------|-----------|
| A | X/10 | [Why this score] |
| B | X/10 | [Why this score] |
| C | X/10 | [Why this score] |

### Weighted Score Summary

| Solution | Value | Usability | Feasibility | Viability | Speed | Strategy | **Total** |
|----------|-------|-----------|-------------|-----------|-------|----------|-----------|
| A | X × .25 | X × .20 | X × .15 | X × .15 | X × .15 | X × .10 | **X.X** |
| B | X × .25 | X × .20 | X × .15 | X × .15 | X × .15 | X × .10 | **X.X** |
| C | X × .25 | X × .20 | X × .15 | X × .15 | X × .15 | X × .10 | **X.X** |

### Key Trade-offs

#### A vs. B
- **A is better at:** [What]
- **B is better at:** [What]
- **Key trade-off:** [Description]

#### B vs. C
- **B is better at:** [What]
- **C is better at:** [What]
- **Key trade-off:** [Description]

### Deal-Breakers

| Solution | Potential Deal-Breakers |
|----------|-------------------------|
| A | [Any blockers?] |
| B | [Any blockers?] |
| C | [Any blockers?] |

### Scenario Analysis

**If speed is paramount:** Solution [X] wins because...
**If quality is paramount:** Solution [Y] wins because...
**If cost is constrained:** Solution [Z] wins because...

### Recommendation

**Recommended Solution:** [Solution Name]

**Weighted Score:** [X.X / 10]

**Rationale:**
[Why this solution is recommended]

**Conditions:**
- [When this recommendation holds]
- [What could change it]

**Runner-Up:** [Solution Name]
- Consider if: [Conditions that would favor runner-up]

### 🔴 HUMAN DECISION REQUIRED

**Decision Needed:** Which solution to pursue?

**Options:**
1. [ ] Select Solution A: [Summary]
2. [ ] Select Solution B: [Summary]
3. [ ] Select Solution C: [Summary]
4. [ ] Hybrid approach: [Description]
5. [ ] Need more information: [What's needed]

## Related Documents

- [[Solutions]]
- [[Opportunity]]
- [[Risk Assessments]]
```

## Confidence Scoring

- **High:** Clear winner, well-differentiated options
- **Medium:** Close scores, nuanced trade-offs
- **Low:** Unclear differentiation, need more data

## Example

**Input:** 3 solutions for fatal risk visibility: dashboard, alert system, report generator

**Output:** Comparison showing dashboard (7.4) wins over alerts (6.8) and reports (5.2), with trade-off analysis showing dashboard best for adoption but alerts better for immediate action.

## Related Skills

- [[assess-four-risks]] - Provides risk assessments
- [[generate-solution-options]] - Creates options to compare
- [[prioritize-opportunities]] - Similar prioritization logic

## Used By Commands

- `agentflow.assess-solutions` - Comparison for selection
- `agentflow.orchestrate` - Stage 5 solution selection


