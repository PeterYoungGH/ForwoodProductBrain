# Document Research Findings

**Category:** Research
**Strategic Theme:** N/A
**Autonomy Level:** Full
**Workflow Stages:** 2 (Insight Extraction)

## Purpose

Structure raw research data into the standard research document format used in the Product Brain knowledge base, ensuring consistency and discoverability.

## Inputs Required

- **Raw Findings:** Unstructured research data
- **Research Type:** User, market, data analysis, etc.
- **Research Metadata:** Date, researcher, participants
- **Related Documents:** Existing related research

## Process Steps

### Step 1: Apply Research Template

Use the standard research template structure:
- Metadata header
- Research question/objective
- Methodology
- Findings
- Insights
- Implications
- Next steps

### Step 2: Structure Findings

Organize findings hierarchically:
- **Primary Findings:** Most significant discoveries
- **Secondary Findings:** Supporting discoveries
- **Tertiary Findings:** Minor or tangential discoveries

For each finding:
- Clear statement of the finding
- Evidence supporting it
- Confidence level
- Related quotes or data

### Step 3: Add Metadata

Include required metadata:
```yaml
---
title: [Research Title]
type: research
subtype: [user-research | market-research | data-analysis]
date: YYYY-MM-DD
researcher: [Name]
participants: [Count and description]
status: [draft | complete]
confidence: [high | medium | low]
related:
  - [[related-document-1]]
  - [[related-document-2]]
---
```

### Step 4: Link to Related Documents

Create bidirectional links:
- Link TO insights derived from this research
- Link TO opportunities informed by this research
- Link FROM source inbox items
- Link FROM related research

### Step 5: Determine Next Steps

Recommend follow-up actions:
- Additional research needed
- Insights to extract
- Opportunities to create
- Stakeholders to inform

## Output Format

```markdown
---
title: [Research Title]
type: research
subtype: [user-research | market-research | data-analysis]
date: YYYY-MM-DD
researcher: [Name]
status: complete
confidence: [high | medium | low]
---

# [Research Title]

**Date:** YYYY-MM-DD
**Type:** [User Research | Market Research | Data Analysis]
**Researcher:** [Name]
**Participants:** [If applicable]

## Research Objective

**Primary Question:** [What we wanted to learn]

**Secondary Questions:**
- [Question 1]
- [Question 2]

## Methodology

**Approach:** [Description]
**Sample:** [Who/what was studied]
**Limitations:** [Known limitations]

## Key Findings

### Finding 1: [Title]

**Summary:** [1-2 sentences]

**Evidence:**
> "[Quote or data point]"

**Confidence:** [High | Medium | Low]

### Finding 2: [Title]

[Same structure]

## Patterns Observed

| Pattern | Frequency | Confidence |
|---------|-----------|------------|
| [Pattern] | [How common] | [Level] |

## Insights

1. **[Insight 1]:** [Insight statement]
2. **[Insight 2]:** [Insight statement]

## Implications

- **For Product:** [Implication]
- **For Strategy:** [Implication]
- **For Design:** [Implication]

## Recommended Next Steps

- [ ] [Action 1]
- [ ] [Action 2]

## Related Documents

- **Source:** [[inbox-item]]
- **Insights:** [[insight-document]]
- **Opportunities:** [[opportunity-document]]
- **Related Research:** [[related-research]]
```

## Confidence Scoring

- **High:** Complete data, clear structure, all sections filled
- **Medium:** Most data present, minor gaps
- **Low:** Incomplete data, significant gaps

## Example

**Input:** Raw notes from 5 customer interviews about mobile app usage.

**Output:** Structured research document with findings organized by theme, evidence with verbatim quotes, and clear next steps for insight extraction.

## Related Skills

- [[conduct-user-research]] - Provides raw findings
- [[analyze-market-data]] - Provides market findings
- [[extract-key-findings]] - Uses documented research

## Used By Commands

- `agentflow.extract-insights` - Creates research documents
- `agentflow.process-inbox` - Documents research from inbox


