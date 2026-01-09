# Cross-Reference Sources

**Category:** Synthesis
**Strategic Theme:** N/A
**Autonomy Level:** Full
**Workflow Stages:** 3 (Research Synthesis)

## Purpose

Connect insights across multiple documents and sources to validate findings, identify convergence, and build stronger evidence chains.

## Inputs Required

- **Source Documents:** Multiple documents to cross-reference
- **Topic Focus:** What topic or theme to cross-reference
- **Existing Findings:** Findings to validate or expand

## Process Steps

### Step 1: Catalog Sources

List all sources being cross-referenced:
- Document name and type
- Date and author
- Source category (research, feedback, data)
- Key topics covered

### Step 2: Extract Comparable Elements

For each source, extract:
- Key findings on the topic
- Evidence and quotes
- Conclusions drawn
- Recommendations made

### Step 3: Create Comparison Matrix

Build a matrix comparing sources:

| Finding | Source 1 | Source 2 | Source 3 | Consensus |
|---------|----------|----------|----------|-----------|
| [Finding A] | ✓ | ✓ | ✗ | Partial |
| [Finding B] | ✓ | ✓ | ✓ | Strong |
| [Finding C] | ✗ | ✓ | ✓ | Partial |

### Step 4: Identify Convergence and Divergence

**Convergence (agreement across sources):**
- Strong consensus: All sources agree
- Partial consensus: Most sources agree
- Multiple evidence: Different evidence, same conclusion

**Divergence (disagreement across sources):**
- Contradiction: Sources disagree
- Gap: Some sources don't address topic
- Context-dependent: Findings vary by context

### Step 5: Assess Combined Evidence Strength

Rate the combined evidence:
- **Strong:** Multiple sources, consistent findings
- **Moderate:** Some sources, mostly consistent
- **Weak:** Few sources, or inconsistent
- **Contested:** Sources actively disagree

### Step 6: Build Evidence Chain

Create a chain linking evidence to conclusions:
```
Evidence A (Source 1) + Evidence B (Source 2) → Supports → Conclusion X
```

## Output Format

```markdown
# Cross-Reference Analysis: [Topic]

**Topic:** [What is being cross-referenced]
**Sources:** [Count]
**Date:** YYYY-MM-DD

## Sources Analyzed

| # | Source | Type | Date | Relevance |
|---|--------|------|------|-----------|
| 1 | [[Source 1]] | [Type] | [Date] | [High/Med/Low] |
| 2 | [[Source 2]] | [Type] | [Date] | [High/Med/Low] |
| 3 | [[Source 3]] | [Type] | [Date] | [High/Med/Low] |

## Finding Comparison Matrix

| Finding | S1 | S2 | S3 | Consensus | Combined Confidence |
|---------|----|----|----|-----------|--------------------|
| [Finding 1] | ✓ | ✓ | ✓ | Strong | High |
| [Finding 2] | ✓ | ✓ | - | Partial | Medium |
| [Finding 3] | ✓ | ✗ | ✓ | Contested | Low |

## Strong Consensus Findings

### Finding 1: [Statement]
**Sources:** All 3 sources agree
**Combined Evidence:**
- Source 1: "[Quote]"
- Source 2: "[Quote]"
- Source 3: "[Quote]"

**Combined Confidence:** High

### Finding 2: [Statement]
[Same structure]

## Partial Consensus Findings

### Finding 3: [Statement]
**Sources:** 2 of 3 agree
**Missing From:** Source 3
**Note:** [Why one source doesn't address this]

## Contested Findings

### Finding 4: [Statement]
**Disagreement:**
- Source 1 says: "[Position]"
- Source 2 says: "[Contrary position]"

**Resolution:** [How to reconcile or investigate further]

## Evidence Chains

### Chain 1: [Conclusion]
```
Evidence A (S1) + Evidence B (S2) + Evidence C (S3)
    ↓
Conclusion: [Strong conclusion statement]
Confidence: High
```

### Chain 2: [Conclusion]
[Same structure]

## Gaps Identified

| Gap | Sources Lacking | Impact |
|-----|-----------------|--------|
| [Topic not covered] | S2, S3 | [What we don't know] |

## Synthesis Conclusion

[Overall synthesis statement combining all cross-referenced findings]

## Recommendations

1. **Accept as validated:** [Findings with strong consensus]
2. **Investigate further:** [Contested findings]
3. **Fill gaps:** [Missing information needs]

## Related Documents

- [[Sources]]
- [[Synthesized insight]]
```

## Confidence Scoring

- **High:** Strong consensus, multiple diverse sources
- **Medium:** Partial consensus, some gaps
- **Low:** Contested or single-source findings

## Example

**Input:** 3 research documents about customer migration concerns (user research, market analysis, support tickets).

**Output:** Cross-reference showing strong consensus on data migration anxiety, partial consensus on timeline concerns, and contested finding about training needs.

## Related Skills

- [[identify-patterns]] - Finds patterns across sources
- [[build-evidence-chain]] - Creates evidence chains
- [[consolidate-themes]] - Groups cross-referenced findings

## Used By Commands

- `agentflow.extract-insights` - Validates insights
- `agentflow.orchestrate` - Stage 3 synthesis


