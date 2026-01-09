# Identify Research Gaps

**Category:** Research
**Strategic Theme:** N/A
**Autonomy Level:** Full
**Workflow Stages:** 2 (Insight Extraction)

## Purpose

Find areas where additional research is needed by analyzing existing research coverage against strategic priorities, opportunities, and knowledge gaps.

## Inputs Required

- **Existing Research:** Current research documents
- **Strategic Themes:** Active strategic themes (Themes 1-5)
- **Active Opportunities:** Opportunities in active/backlog
- **Open Questions:** Known unknowns and assumptions

## Process Steps

### Step 1: Map Existing Research

Catalog current research by:
- **Topic:** What subject areas are covered
- **Type:** User, market, data analysis
- **Recency:** How old is the research
- **Depth:** How thorough is the coverage
- **Confidence:** How reliable are findings

### Step 2: Compare to Strategic Themes

For each strategic theme, assess coverage:

| Theme | Research Exists? | Last Updated | Depth |
|-------|------------------|--------------|-------|
| Theme 1: Fatal Risk Visibility | Yes/No | Date | High/Medium/Low |
| Theme 2: Data to Action | Yes/No | Date | High/Medium/Low |
| Theme 3: Credibility & Trust | Yes/No | Date | High/Medium/Low |
| Theme 4: Controls That Work | Yes/No | Date | High/Medium/Low |
| Theme 5: Standardization | Yes/No | Date | High/Medium/Low |

### Step 3: Compare to Opportunities

For each active opportunity, check:
- Is there research supporting this opportunity?
- Is the evidence strong enough?
- Are there untested assumptions?

### Step 4: Identify Gap Types

Categorize gaps:
- **No Research:** Topic not covered at all
- **Outdated Research:** Research >6 months old
- **Shallow Research:** Insufficient depth
- **Single Source:** Only one data point
- **Unvalidated Assumptions:** Beliefs without evidence

### Step 5: Prioritize Gaps

Rank gaps by:
- **Strategic Importance:** How critical to strategy
- **Decision Impact:** Blocking decisions?
- **Effort to Fill:** How hard to research
- **Risk of Gap:** What happens if we don't know

## Output Format

```markdown
# Research Gap Analysis

**Date:** YYYY-MM-DD
**Scope:** [What was analyzed]
**Existing Research Items:** [Count]

## Coverage Summary

### By Strategic Theme
| Theme | Coverage | Last Updated | Gap Level |
|-------|----------|--------------|-----------|
| Theme 1 | [%] | [Date] | [Critical/High/Medium/Low] |
| Theme 2 | [%] | [Date] | [Critical/High/Medium/Low] |
| Theme 3 | [%] | [Date] | [Critical/High/Medium/Low] |
| Theme 4 | [%] | [Date] | [Critical/High/Medium/Low] |
| Theme 5 | [%] | [Date] | [Critical/High/Medium/Low] |

### By Research Type
| Type | Count | Avg Age | Quality |
|------|-------|---------|---------|
| User Research | X | X months | [Score] |
| Market Research | X | X months | [Score] |
| Data Analysis | X | X months | [Score] |

## Critical Gaps

### Gap 1: [Topic]
**Type:** [No Research | Outdated | Shallow | Single Source]
**Strategic Theme:** [Theme X]
**Impact:** [What decisions are blocked]
**Recommended Research:**
- Method: [Interview | Survey | Analysis]
- Effort: [Low | Medium | High]
- Priority: [Critical | High | Medium]

### Gap 2: [Topic]
[Same structure]

## Moderate Gaps

### Gap 3: [Topic]
[Same structure]

## Unvalidated Assumptions

| Assumption | Related To | Risk if Wrong | Research Needed |
|------------|------------|---------------|-----------------|
| [Assumption] | [Opportunity/Solution] | [Risk] | [Research type] |

## Research Recommendations

### Priority 1: [Research Topic]
- **Why:** [Rationale]
- **Method:** [How to research]
- **Effort:** [Estimate]
- **Impact:** [What it enables]

### Priority 2: [Research Topic]
[Same structure]

## Related Documents

- [[Research documents reviewed]]
- [[Opportunities with gaps]]
```

## Confidence Scoring

- **High:** Complete catalog of research, clear gaps
- **Medium:** Most research cataloged, some uncertainty
- **Low:** Incomplete catalog, gaps may exist in analysis

## Example

**Input:** Current research library and active opportunity list.

**Output:** Gap analysis showing strong user research but critical gap in market research for utilities sector expansion, with prioritized research recommendations.

## Related Skills

- [[conduct-user-research]] - Fills user research gaps
- [[analyze-market-data]] - Fills market gaps
- [[assess-evidence-quality]] - Evaluates research quality

## Used By Commands

- `agentflow.orchestrate` - Identifies research needs
- `agentflow.autonomous` - Flags gaps before decisions


