# Create Insight Summary

**Category:** Synthesis
**Strategic Theme:** N/A
**Autonomy Level:** Full
**Workflow Stages:** 2, 3 (Insight Extraction, Research Synthesis)

## Purpose

Synthesize findings from research into actionable insight statements that can inform product decisions, with clear evidence and implications.

## Inputs Required

- **Findings:** Key findings from research or synthesis
- **Patterns:** Identified patterns from analysis
- **Evidence:** Supporting quotes, data, observations
- **Strategic Context:** Relevant themes and priorities

## Process Steps

### Step 1: Identify Insight Candidates

Review findings for insight potential:
- Findings that reveal "why" not just "what"
- Patterns that suggest underlying causes
- Surprises that challenge assumptions
- Connections between seemingly unrelated findings

### Step 2: Formulate Insight Statements

Structure each insight as:

**Format:** "[User/Segment] [behavior/belief] because [underlying reason], which means [implication]."

**Example:** "Safety managers avoid reporting near-misses because they fear being blamed, which means our systems must actively demonstrate non-punitive intent to improve reporting rates."

### Step 3: Link to Evidence

For each insight, document:
- **Primary Evidence:** Direct support for the insight
- **Supporting Evidence:** Additional corroboration
- **Counter-Evidence:** Any contradicting data
- **Evidence Strength:** Overall quality assessment

### Step 4: Assess Insight Quality

Evaluate each insight:

| Criterion | Question | Score |
|-----------|----------|-------|
| Actionable | Can we act on this? | 1-5 |
| Novel | Is this new information? | 1-5 |
| Specific | Is this precise enough? | 1-5 |
| Supported | Is evidence strong? | 1-5 |
| Strategic | Does it align to themes? | 1-5 |

### Step 5: Derive Implications

For each insight, identify:
- **Product Implications:** How should the product change?
- **Design Implications:** How should design respond?
- **Strategy Implications:** How does this affect strategy?
- **Research Implications:** What more do we need to learn?

## Output Format

```markdown
# Insight Summary: [Topic]

**Source Research:** [[research-document(s)]]
**Date:** YYYY-MM-DD
**Insights Generated:** [Count]

## High-Value Insights

### Insight 1: [Insight Statement]

**Full Statement:**
[User/Segment] [behavior/belief] because [underlying reason], which means [implication].

**Evidence:**
> "[Primary quote/data]" - [Source]

**Supporting Evidence:**
- [Additional evidence 1]
- [Additional evidence 2]

**Evidence Strength:** [Strong | Moderate | Emerging]

**Quality Score:** [X/25]
| Actionable | Novel | Specific | Supported | Strategic |
|------------|-------|----------|-----------|-----------|
| X/5 | X/5 | X/5 | X/5 | X/5 |

**Implications:**
- **Product:** [Implication]
- **Design:** [Implication]
- **Strategy:** [Implication]

**Strategic Theme:** [Theme X: Name]

**Suggested Actions:**
- [ ] [Action 1]
- [ ] [Action 2]

### Insight 2: [Insight Statement]
[Same structure]

## Medium-Value Insights

### Insight 3: [Insight Statement]
[Same structure]

## Emerging Insights (Need Validation)

### Insight 4: [Insight Statement]
**Note:** Based on limited evidence. Recommend validation before acting.
[Same structure]

## Insight Relationships

```
Insight 1 ─── reinforces ──→ Insight 2
           └── contradicts ──→ Insight 4
```

## Summary

**Key Takeaways:**
1. [Most important insight]
2. [Second most important]
3. [Third most important]

**Opportunities Suggested:**
- [[Opportunity 1]]
- [[Opportunity 2]]

**Research Gaps Identified:**
- [What we still need to learn]

## Related Documents

- **Source Research:** [[research-documents]]
- **Related Insights:** [[other-insights]]
- **Opportunities:** [[opportunities]]
```

## Confidence Scoring

- **High:** Strong evidence, clear implications, validated
- **Medium:** Good evidence, implications need validation
- **Low:** Limited evidence, exploratory insight

## Example

**Input:** Findings from VoC research about safety professional credibility issues.

**Output:** Insight summary with 3 high-value insights including "Safety professionals are seen as police because systems focus on violations rather than improvement, which means we must redesign interfaces to position them as enabling partners."

## Related Skills

- [[extract-key-findings]] - Provides findings
- [[identify-patterns]] - Provides patterns
- [[frame-opportunity]] - Uses insights to frame opportunities

## Used By Commands

- `agentflow.extract-insights` - Creates insight documents
- `agentflow.orchestrate` - Stage 2-3 insight creation


