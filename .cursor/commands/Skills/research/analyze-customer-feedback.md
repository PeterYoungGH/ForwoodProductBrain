# Analyze Customer Feedback

**Category:** Research
**Strategic Theme:** N/A
**Autonomy Level:** Full
**Workflow Stages:** 2 (Insight Extraction)

## Purpose

Process and categorize customer feedback from various sources (support tickets, NPS surveys, customer calls, emails) to extract patterns and actionable insights.

## Inputs Required

- **Feedback Data:** Raw feedback from customers
- **Feedback Source:** Where feedback came from
- **Customer Context:** Customer segment, tier, tenure
- **Time Period:** When feedback was collected

## Process Steps

### Step 1: Classify Feedback Type

Categorize each piece of feedback:

| Type | Description | Example |
|------|-------------|---------|
| Bug Report | Something broken | "The app crashes when..." |
| Feature Request | New capability wanted | "We need the ability to..." |
| Usability Issue | Difficulty using | "I can't figure out how to..." |
| Praise | Positive feedback | "We love the new..." |
| Complaint | General dissatisfaction | "This is frustrating because..." |
| Question | Seeking information | "How do I...?" |
| Churn Risk | Signs of leaving | "We're considering alternatives..." |

### Step 2: Extract Key Information

For each feedback item, capture:
- **Customer:** Who provided feedback
- **Product Area:** Which feature/module
- **Sentiment:** Positive/Negative/Neutral
- **Urgency:** How urgent the issue feels
- **Quote:** Verbatim customer words
- **Theme:** What broader topic it relates to

### Step 3: Identify Patterns

Group feedback to find patterns:
- **By Theme:** Common topics across customers
- **By Product Area:** Issues in specific features
- **By Customer Segment:** Patterns in specific segments
- **By Frequency:** How often issues are mentioned

### Step 4: Assess Impact

For each pattern, evaluate:
- **Frequency:** How many customers mention this
- **Severity:** How serious is the impact
- **Strategic Alignment:** Does it align with themes
- **Revenue Impact:** Does it affect revenue/churn

### Step 5: Generate Insights

Convert patterns to insights:
- What does this tell us about customer needs?
- What opportunities does this reveal?
- What should we prioritize?
- What requires immediate action?

## Output Format

```markdown
# Customer Feedback Analysis: [Topic/Period]

**Period:** [Date range]
**Source(s):** [Support, NPS, Calls, etc.]
**Total Feedback Items:** [Count]

## Summary

**Overall Sentiment:** [Positive | Mixed | Negative]
**Top Themes:** [Theme 1], [Theme 2], [Theme 3]

## Feedback Breakdown

### By Type
| Type | Count | % |
|------|-------|---|
| Feature Request | X | X% |
| Bug Report | X | X% |
| Usability Issue | X | X% |
| Praise | X | X% |
| Complaint | X | X% |

### By Product Area
| Area | Count | Sentiment |
|------|-------|-----------|
| [Area 1] | X | [Sentiment] |
| [Area 2] | X | [Sentiment] |

## Key Patterns

### Pattern 1: [Title]
**Frequency:** X customers mentioned this
**Severity:** [Critical | High | Medium | Low]
**Sample Quotes:**
> "[Quote 1]" - Customer A
> "[Quote 2]" - Customer B

**Theme Alignment:** [Which strategic theme this relates to]

### Pattern 2: [Title]
[Same structure]

## Churn Risks

| Customer | Risk Signals | Recommended Action |
|----------|--------------|-------------------|
| [Customer] | [Signals] | [Action] |

## Opportunities Identified

1. **[Opportunity 1]:** [Description and evidence]
2. **[Opportunity 2]:** [Description and evidence]

## Recommended Actions

| Priority | Action | Rationale |
|----------|--------|-----------|
| Critical | [Action] | [Why] |
| High | [Action] | [Why] |

## Related Documents

- [[Related opportunity]]
- [[Related research]]
```

## Confidence Scoring

- **High:** Large sample, clear patterns, multiple sources
- **Medium:** Moderate sample, some patterns, single source
- **Low:** Small sample, unclear patterns, potentially biased

## Example

**Input:** 50 support tickets from Q4 about mobile app issues.

**Output:** Analysis showing pattern of offline sync issues affecting field workers, with 3 opportunities identified and recommended priority actions.

## Related Skills

- [[extract-key-findings]] - Extracts insights from analysis
- [[extract-voc-themes]] - VoC-specific analysis
- [[identify-patterns]] - Pattern recognition

## Used By Commands

- `agentflow.extract-insights` - Processes feedback
- `agentflow.orchestrate` - Stage 2 feedback analysis


