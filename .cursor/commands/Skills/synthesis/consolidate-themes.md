# Consolidate Themes

**Category:** Synthesis
**Strategic Theme:** N/A
**Autonomy Level:** Full
**Workflow Stages:** 2, 3 (Insight Extraction, Research Synthesis)

## Purpose

Group related findings, patterns, and insights into coherent themes that can inform strategic direction and product decisions.

## Inputs Required

- **Findings:** Individual findings from research
- **Patterns:** Patterns identified from analysis
- **Insights:** Synthesized insights
- **Strategic Themes:** Current strategic themes (Themes 1-5)

## Process Steps

### Step 1: Inventory Items to Consolidate

List all items to group:
- Findings from research
- Patterns identified
- Insights generated
- Customer quotes and evidence

### Step 2: Apply Affinity Grouping

Group by similarity:
1. Review each item
2. Compare to existing groups
3. If similar to a group, add to it
4. If not, create new group
5. Name each group with a theme

### Step 3: Define Theme Boundaries

For each theme, clarify:
- **Core Definition:** What is this theme about?
- **Includes:** What belongs in this theme?
- **Excludes:** What doesn't belong?
- **Adjacent Themes:** Related but distinct themes

### Step 4: Map to Strategic Themes

Connect to Forwood's 5 strategic themes:

| Consolidated Theme | Strategic Theme | Alignment |
|--------------------|-----------------|-----------|
| [Theme A] | Theme 1: Fatal Risk Visibility | [How it aligns] |
| [Theme B] | Theme 2: Data to Action | [How it aligns] |
| [Theme C] | Theme 3: Credibility & Trust | [How it aligns] |
| [Theme D] | Theme 4: Controls That Work | [How it aligns] |
| [Theme E] | Theme 5: Standardization | [How it aligns] |
| [Theme F] | None (New) | [Potential new theme?] |

### Step 5: Prioritize Themes

Rank themes by:
- **Frequency:** How many items in the theme
- **Strategic Alignment:** How well it aligns to priorities
- **Evidence Strength:** Quality of supporting evidence
- **Actionability:** How easily we can act on it

### Step 6: Generate Theme Summaries

For each theme, create:
- Theme name
- Core definition
- Key findings included
- Evidence summary
- Strategic implications
- Recommended actions

## Output Format

```markdown
# Theme Consolidation: [Analysis Source]

**Source:** [[research/analysis documents]]
**Date:** YYYY-MM-DD
**Items Consolidated:** [Count]
**Themes Identified:** [Count]

## Theme Summary

| # | Theme | Items | Strategic Alignment | Priority |
|---|-------|-------|---------------------|----------|
| 1 | [Theme A] | X | Theme 1 | High |
| 2 | [Theme B] | X | Theme 2 | High |
| 3 | [Theme C] | X | Theme 3 | Medium |

## Detailed Themes

### Theme 1: [Theme Name]

**Core Definition:** [What this theme is about]

**Strategic Alignment:** Theme X: [Theme Name]

**Items Included:**
- Finding: [Finding 1]
- Finding: [Finding 2]
- Pattern: [Pattern 1]
- Insight: [Insight 1]

**Key Evidence:**
> "[Quote 1]"
> "[Quote 2]"

**Frequency:** [X items, X sources]

**Implications:**
- [Implication 1]
- [Implication 2]

**Recommended Actions:**
- [ ] [Action 1]
- [ ] [Action 2]

### Theme 2: [Theme Name]
[Same structure]

## Themes Without Strategic Alignment

### Theme X: [Theme Name]
**Note:** This theme emerged from research but doesn't align to existing strategic themes. Consider:
- Is this a gap in strategy?
- Should this become a new strategic theme?
- Is this out of scope?

## Theme Relationships

```
Theme 1 ──── enables ──→ Theme 2
         └── conflicts with ──→ Theme 3
```

## Orphan Items

Items that didn't fit any theme:
- [Item 1] - Consider: [Where might it belong?]
- [Item 2] - Consider: [Where might it belong?]

## Strategic Coverage

| Strategic Theme | Consolidated Themes | Coverage |
|-----------------|---------------------|----------|
| Theme 1: Fatal Risk Visibility | [Themes] | [Good/Gap] |
| Theme 2: Data to Action | [Themes] | [Good/Gap] |
| Theme 3: Credibility & Trust | [Themes] | [Good/Gap] |
| Theme 4: Controls That Work | [Themes] | [Good/Gap] |
| Theme 5: Standardization | [Themes] | [Good/Gap] |

## Recommendations

1. **High Priority Themes:** [Which to address first]
2. **Gaps to Investigate:** [Strategic themes with no consolidated themes]
3. **New Theme Candidates:** [Emerging themes to consider]

## Related Documents

- [[Source research]]
- [[Strategic roadmap]]
```

## Confidence Scoring

- **High:** Clear themes, strong evidence, good strategic alignment
- **Medium:** Themes clear, some overlap or gaps
- **Low:** Themes unclear, significant overlap or orphans

## Example

**Input:** 25 findings from customer research across multiple sources.

**Output:** 5 consolidated themes including "Reporting Trust Crisis" (aligned to Theme 3), "Data Overload Without Action" (aligned to Theme 2), and emerging theme "Mobile-First Expectations" (potential new theme).

## Related Skills

- [[identify-patterns]] - Provides patterns to consolidate
- [[extract-key-findings]] - Provides findings
- [[map-pain-to-strategic-theme]] - Aligns themes to strategy

## Used By Commands

- `agentflow.extract-insights` - Theme consolidation step
- `agentflow.orchestrate` - Stage 2-3 theme consolidation


