# Identify Patterns

**Category:** Synthesis
**Strategic Theme:** N/A
**Autonomy Level:** Full
**Workflow Stages:** 2, 3 (Insight Extraction, Research Synthesis)

## Purpose

Find recurring patterns across multiple sources, data points, or findings to surface higher-level themes and systemic insights.

## Inputs Required

- **Data Points:** Multiple findings, observations, or data items
- **Sources:** Where the data came from
- **Analysis Focus:** What type of patterns to look for
- **Minimum Threshold:** How many occurrences constitute a pattern

## Process Steps

### Step 1: Normalize Data

Standardize data for comparison:
- Use consistent terminology
- Group similar concepts
- Tag with common categories
- Remove duplicates

### Step 2: Apply Pattern Detection Methods

Use multiple detection approaches:

**Frequency Analysis:**
- Count occurrences of themes/concepts
- Identify most common elements
- Flag high-frequency items as patterns

**Clustering:**
- Group related items together
- Identify natural clusters
- Name cluster themes

**Correlation:**
- Look for co-occurring elements
- Identify cause-effect relationships
- Find dependencies

**Trend Analysis:**
- Look at changes over time
- Identify increasing/decreasing patterns
- Spot cyclical patterns

### Step 3: Validate Patterns

For each potential pattern:
- **Threshold Check:** Does it meet minimum occurrences?
- **Consistency Check:** Is it consistent across sources?
- **Significance Check:** Is this meaningful or coincidental?
- **Contradiction Check:** Are there counter-examples?

### Step 4: Categorize Patterns

Classify patterns by type:

| Type | Description | Example |
|------|-------------|---------|
| Behavioral | User actions | "Users always check X before Y" |
| Attitudinal | Beliefs/opinions | "Users believe X is difficult" |
| Pain Point | Problems | "Users struggle with X in Y situation" |
| Need | Requirements | "Users need X to accomplish Y" |
| Trend | Changes | "Usage of X is increasing" |
| Correlation | Relationships | "When X happens, Y follows" |

### Step 5: Assess Pattern Strength

Rate each pattern:
- **Strong:** 70%+ occurrences, consistent, no contradictions
- **Moderate:** 50-69% occurrences, mostly consistent
- **Weak:** 30-49% occurrences, some variation
- **Emerging:** <30% but notable signal

## Output Format

```markdown
# Pattern Analysis: [Topic/Sources]

**Sources Analyzed:** [Count]
**Data Points:** [Count]
**Patterns Identified:** [Count]

## Strong Patterns (70%+ occurrence)

### Pattern 1: [Pattern Statement]

**Type:** [Behavioral | Attitudinal | Pain Point | Need | Trend | Correlation]
**Occurrence:** X of Y sources (X%)
**Confidence:** High

**Evidence:**
- Source 1: "[Example]"
- Source 2: "[Example]"
- Source 3: "[Example]"

**Implications:**
- [Implication 1]
- [Implication 2]

### Pattern 2: [Pattern Statement]
[Same structure]

## Moderate Patterns (50-69% occurrence)

### Pattern 3: [Pattern Statement]
[Same structure]

## Emerging Patterns (<50% but notable)

### Pattern 4: [Pattern Statement]
**Note:** Low occurrence but potentially significant signal. Recommend further investigation.

## Pattern Relationships

```
Pattern 1 → leads to → Pattern 3
Pattern 2 → correlates with → Pattern 4
```

## Contradictions / Counter-Examples

| Pattern | Counter-Example | Explanation |
|---------|-----------------|-------------|
| [Pattern] | [Example] | [Why it differs] |

## Strategic Alignment

| Pattern | Theme | Relevance |
|---------|-------|-----------|
| Pattern 1 | Theme X | [How it relates] |
| Pattern 2 | Theme Y | [How it relates] |

## Recommended Actions

Based on patterns identified:
1. [Action for strong patterns]
2. [Action for moderate patterns]
3. [Action to investigate emerging patterns]

## Related Documents

- [[Sources analyzed]]
- [[Related insights]]
```

## Confidence Scoring

- **High:** Clear patterns, high frequency, strong consistency
- **Medium:** Visible patterns, moderate frequency
- **Low:** Weak signals, low frequency, needs validation

## Example

**Input:** 20 customer feedback items about mobile app experience.

**Output:** 3 strong patterns (offline sync issues, navigation confusion, slow load times), 2 moderate patterns (feature discoverability, notification overload), and 1 emerging pattern (preference for dark mode).

## Related Skills

- [[extract-key-findings]] - Provides findings to analyze
- [[consolidate-themes]] - Groups patterns into themes
- [[cross-reference-sources]] - Compares across sources

## Used By Commands

- `agentflow.extract-insights` - Pattern detection step
- `agentflow.orchestrate` - Stage 2-3 pattern analysis


