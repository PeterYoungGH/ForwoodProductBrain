# Assess Evidence Quality

**Category:** Validation
**Strategic Theme:** N/A
**Autonomy Level:** Full
**Workflow Stages:** 2, 4, 6 (Insight Extraction, Opportunity Validation, Experimentation)

## Purpose

Rate the strength and reliability of evidence supporting insights, opportunities, or decisions.

## Inputs Required

- **Evidence Items:** Data, quotes, observations to assess
- **Claims:** What the evidence is meant to support
- **Context:** Source and collection method
- **Decision Importance:** How critical is this evidence

## Process Steps

### Step 1: Inventory Evidence

List all evidence items:
- What is the evidence?
- Where did it come from?
- When was it collected?
- How was it collected?

### Step 2: Classify Evidence Types

Categorize by type:

| Type | Description | Typical Strength |
|------|-------------|------------------|
| Direct Quote | Verbatim customer words | High |
| Behavioral Data | What users actually did | High |
| Quantitative Survey | Structured responses | Medium-High |
| Qualitative Feedback | Open-ended responses | Medium |
| Expert Opinion | Professional judgment | Medium |
| Anecdote | Single story | Low |
| Assumption | Untested belief | None |
| Secondary Source | Reported by others | Varies |

### Step 3: Assess Quality Dimensions

Rate each evidence item on:

**Relevance (1-5):**
- How directly does this apply to the claim?

**Reliability (1-5):**
- How trustworthy is this source?
- Was collection method sound?

**Recency (1-5):**
- How current is this evidence?
- Has context changed since?

**Representativeness (1-5):**
- How typical is this of the broader population?
- Is the sample biased?

**Replicability (1-5):**
- Would we get the same result again?
- Is this consistent with other evidence?

### Step 4: Calculate Overall Quality Score

For each evidence item:
```
Quality Score = (Relevance + Reliability + Recency + Representativeness + Replicability) / 5
```

For combined evidence:
```
Combined Score = Weighted average based on relevance
```

### Step 5: Identify Evidence Gaps

Note what's missing:
- What would make this stronger?
- What contradicting evidence exists?
- What hasn't been tested?

### Step 6: Rate Overall Confidence

Based on combined assessment:
- **Strong:** Multiple high-quality items, consistent, sufficient coverage
- **Moderate:** Some high-quality items, mostly consistent
- **Weak:** Limited items, inconsistent, significant gaps
- **Insufficient:** Evidence doesn't support claim

## Output Format

```markdown
## Evidence Quality Assessment

**Claim Being Supported:** [What the evidence should prove]
**Date Assessed:** YYYY-MM-DD

### Evidence Inventory

| # | Evidence | Type | Source | Date |
|---|----------|------|--------|------|
| E1 | [Description] | [Type] | [[Source]] | [Date] |
| E2 | [Description] | [Type] | [[Source]] | [Date] |
| E3 | [Description] | [Type] | [[Source]] | [Date] |

### Quality Assessment

#### E1: [Evidence Description]

| Dimension | Score | Rationale |
|-----------|-------|-----------|
| Relevance | X/5 | [Why this score] |
| Reliability | X/5 | [Why this score] |
| Recency | X/5 | [Why this score] |
| Representativeness | X/5 | [Why this score] |
| Replicability | X/5 | [Why this score] |

**Quality Score:** X.X/5

#### E2: [Evidence Description]

[Same structure]

#### E3: [Evidence Description]

[Same structure]

### Combined Assessment

| Evidence | Quality | Relevance Weight | Weighted Score |
|----------|---------|------------------|----------------|
| E1 | X.X | X% | X.X |
| E2 | X.X | X% | X.X |
| E3 | X.X | X% | X.X |

**Combined Quality Score:** X.X/5

### Evidence Gaps

**Missing Evidence:**
- [What would strengthen the case]
- [What hasn't been tested]

**Contradicting Evidence:**
- [Any contrary data]
- [How significant is the contradiction]

**Assumptions Not Yet Validated:**
- [Assumption 1]
- [Assumption 2]

### Overall Confidence

**Confidence Level:** [Strong | Moderate | Weak | Insufficient]

**Rationale:**
[Why this confidence level]

**What Would Increase Confidence:**
1. [Additional evidence type 1]
2. [Additional evidence type 2]

### Recommendations

**For Strong Confidence:**
- Proceed with decisions

**For Moderate Confidence:**
- Proceed with awareness of gaps
- Plan to fill gaps

**For Weak/Insufficient:**
- Gather more evidence before deciding
- Prioritize: [specific evidence to gather]

## Related Documents

- [[Sources]]
- [[Research documents]]
```

## Confidence Scoring

- **High:** Clear assessment, well-documented evidence
- **Medium:** Good assessment, some evidence unclear
- **Low:** Limited evidence, assessment uncertain

## Example

**Input:** 3 customer quotes and 1 survey result supporting opportunity for fatal risk visibility.

**Output:** Assessment showing 2 high-quality direct quotes (4.5/5), 1 older quote (3.0/5), and survey with sampling issues (3.5/5), combined score 3.8/5 (Moderate confidence), recommendation to gather more quantitative data.

## Related Skills

- [[build-evidence-chain]] - Uses quality assessment
- [[cross-reference-sources]] - Validates across sources
- [[identify-research-gaps]] - Identifies missing evidence

## Used By Commands

- `agentflow.identify-opportunities` - Validates opportunity evidence
- `agentflow.assess-solutions` - Validates solution evidence
- `agentflow.orchestrate` - Evidence validation throughout


