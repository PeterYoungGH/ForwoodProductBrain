# Extract VoC Themes

**Category:** Research
**Strategic Theme:** All Themes
**Autonomy Level:** Full
**Workflow Stages:** 2 (Insight Extraction)

## Purpose

Extract themes from Voice of Customer (VoC) research to inform strategic direction. This skill specifically aligns customer feedback with Forwood's strategic themes and identifies industry-level problems and customer outcomes.

## Inputs Required

- **VoC Data:** Customer interviews, surveys, feedback
- **Strategic Themes:** Current strategic themes (Themes 1-5)
- **Personas:** Relevant customer personas
- **Market Context:** Industry trends and competitive landscape

## Process Steps

### Step 1: Identify Customer Segments

Categorize VoC by source:
- **Executives:** Board, C-suite, leadership
- **EHS Professionals:** Safety managers, risk officers
- **Operations:** Site managers, supervisors
- **Field Workers:** Front-line workers

### Step 2: Extract Pain Points

For each segment, identify:
- **Stated Pain:** What they explicitly say hurts
- **Latent Pain:** Underlying problems not directly stated
- **Emotional Pain:** Frustration, fear, anxiety sources
- **Systemic Pain:** Organizational/process issues

Use customer language exactly:
> "[Exact quote]" - [Segment], [Customer/Source]

### Step 3: Map to Strategic Themes

Connect pain points to strategic themes:

| Theme | Key VoC Signals |
|-------|-----------------|
| Theme 1: Fatal Risk Visibility | "Can't see real risk", "Green dashboards, red reality" |
| Theme 2: Data to Action | "Reports go nowhere", "Drowning in data" |
| Theme 3: Credibility & Trust | "Seen as police", "Workers don't trust" |
| Theme 4: Controls That Work | "Satisfy audits, not safety", "Controls don't work" |
| Theme 5: Standardization | "Every site is different", "Constant context-switching" |

### Step 4: Identify Industry Problems

Abstract from individual pain to industry-level problems:
- What problem affects multiple customers?
- What problem is inherent to the industry?
- What problem is the market not solving?

### Step 5: Extract Customer Outcomes

Identify what customers are trying to achieve:
- **Functional Outcomes:** Tasks they want to complete
- **Emotional Outcomes:** How they want to feel
- **Social Outcomes:** How they want to be perceived

### Step 6: Validate Theme Coverage

Check if strategic themes address all major VoC:
- Are all major pain points covered by themes?
- Are there gaps in theme coverage?
- Are there new themes emerging?

## Output Format

```markdown
# VoC Theme Analysis: [Topic/Source]

**Date:** YYYY-MM-DD
**Sources:** [Interview, Survey, etc.]
**Customers:** [Count and segments]

## Executive Summary

[2-3 sentences on key findings]

## Pain Points by Segment

### Executive Segment
| Pain Point | Quote | Frequency |
|------------|-------|-----------|
| [Pain] | "[Quote]" | X of Y |

### EHS Professional Segment
| Pain Point | Quote | Frequency |
|------------|-------|-----------|
| [Pain] | "[Quote]" | X of Y |

## Strategic Theme Mapping

### Theme 1: Fatal Risk Visibility & Governance
**VoC Evidence:**
- "[Quote 1]" - [Source]
- "[Quote 2]" - [Source]

**Pain Points Addressed:**
- [Pain point 1]
- [Pain point 2]

**Coverage Assessment:** [Strong | Moderate | Weak | Gap]

### Theme 2: From Data Collection to Action
[Same structure for each theme]

## Industry Problems Identified

### Problem 1: [Title]
**Description:** [Industry-level problem statement]
**Evidence:**
- "[Quote]" - Customer A
- "[Quote]" - Customer B

**Market Status:** [Unserved | Underserved | Competitive]

## Customer Outcomes

### Functional Outcomes
- [Outcome 1]
- [Outcome 2]

### Emotional Outcomes
- [Outcome 1] (e.g., "Feel confident in risk visibility")

### Social Outcomes
- [Outcome 1] (e.g., "Be seen as a strategic partner")

## Theme Gap Analysis

| Gap | Evidence | Recommendation |
|-----|----------|----------------|
| [Gap 1] | [Evidence] | [Action] |

## Implications for Strategy

- [Implication 1]
- [Implication 2]

## Related Documents

- [[Strategic Roadmap]]
- [[Voice of Customer Insights]]
```

## Confidence Scoring

- **High:** Multiple customers, consistent themes, clear patterns
- **Medium:** Several customers, some variation, general patterns
- **Low:** Limited customers, unclear patterns, exploratory

## Example

**Input:** Voice of Customer research document with 20 customer interviews across mining and utilities sectors.

**Output:** Theme analysis showing strong alignment to Themes 1 and 2, moderate alignment to Theme 3, and a gap in Theme 4 coverage that suggests new opportunities.

## Related Skills

- [[map-pain-to-strategic-theme]] - Connects pain to themes
- [[analyze-customer-feedback]] - Processes raw feedback
- [[consolidate-themes]] - Groups themes together

## Used By Commands

- `agentflow.extract-insights` - VoC insight extraction
- `agentflow.orchestrate` - Stage 2 VoC processing


