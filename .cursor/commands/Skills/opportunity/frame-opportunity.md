# Frame Opportunity

**Category:** Opportunity
**Strategic Theme:** N/A
**Autonomy Level:** Supervised
**Workflow Stages:** 4 (Opportunity Validation)

## Purpose

Structure a customer problem or need as a properly formatted opportunity following the Opportunity Solution Tree methodology, ensuring it's customer-focused and linked to outcomes.

## Inputs Required

- **Customer Problem:** The pain point or need to frame
- **Evidence:** Research supporting the problem
- **Target Segment:** Who experiences this problem
- **Related Outcomes:** Business/product outcomes this supports

## Process Steps

### Step 1: Validate Problem Statement

Ensure the problem is:
- **Customer-focused:** Describes what customer experiences, not solution
- **Specific:** Clear enough to act on
- **Observable:** Can see evidence of this problem
- **Significant:** Worth solving

**Bad Example:** "Users need a better dashboard" (solution-focused)
**Good Example:** "Users can't identify which critical controls need attention" (problem-focused)

### Step 2: Structure as Opportunity

Use the standard opportunity format:

**Opportunity Statement:**
"[Customer segment] struggle to [accomplish goal] because [obstacle], which results in [negative outcome]."

**Example:**
"Safety managers struggle to prioritize their limited time because they can't distinguish high-risk situations from routine ones, which results in attention spread too thin across all risks equally."

### Step 3: Link to Outcomes

Connect to the outcome hierarchy:
- Which **Business Outcome** does this support?
- Which **Product Outcome** does this support?
- How does solving this advance those outcomes?

### Step 4: Document Evidence

Capture supporting evidence:
- Customer quotes
- Research findings
- Data points
- Patterns observed

### Step 5: Apply Opportunity Template

Fill in the standard opportunity template sections:
- Opportunity statement
- Customer segment
- Evidence
- Outcome links
- JTBD context
- Potential solutions (brief, not detailed)

## Output Format

```markdown
---
title: [Opportunity Name]
type: opportunity
status: [proposed | backlog | active]
created: YYYY-MM-DD
updated: YYYY-MM-DD
segment: [Customer segment]
outcome: [[product-outcome]]
business_outcome: [[business-outcome]]
---

# [Opportunity Name]

## Opportunity Statement

[Customer segment] struggle to [accomplish goal] because [obstacle], which results in [negative outcome].

## Customer Segment

**Primary:** [Main affected segment]
**Secondary:** [Other affected segments]

## Evidence

### Research Sources
- [[Research document 1]]
- [[Research document 2]]

### Key Quotes
> "[Customer quote 1]" - [Source]
> "[Customer quote 2]" - [Source]

### Data Points
- [Data point 1]
- [Data point 2]

## Jobs to Be Done

**Main Job:** When [situation], I want to [motivation], so I can [expected outcome].

**Related Jobs:**
- [Related job 1]
- [Related job 2]

## Outcome Links

**Business Outcome:** [[business-outcome]]
**Product Outcome:** [[product-outcome]]

**How This Supports Outcomes:**
[Explanation of how solving this advances the outcomes]

## Potential Solutions

*Brief ideas only - detailed solutions go in solution documents*

- [Solution idea 1]
- [Solution idea 2]
- [Solution idea 3]

## Opportunity Score

*To be calculated using calculate-jtbd-score skill*

## Decision History

| Date | Decision | Rationale | Decision Maker |
|------|----------|-----------|----------------|
| YYYY-MM-DD | Created | [Why created] | [Name] |

## Related Documents

- [[Research sources]]
- [[Related opportunities]]
- [[Related solutions]]
```

## Confidence Scoring

- **High:** Strong evidence, clear problem, direct outcome link
- **Medium:** Good evidence, clear problem, indirect outcome link
- **Low:** Limited evidence, needs validation

## Example

**Input:** 
- Problem: Safety managers can't tell which risks are truly fatal
- Evidence: VoC quotes about "green dashboards, red reality"
- Segment: EHS Professionals
- Outcome: Improve SIF prevention visibility

**Output:** Properly framed opportunity: "Safety managers struggle to distinguish fatal risks from routine hazards because traditional metrics treat all incidents equally, which results in attention spread thin and potential SIF situations not receiving adequate focus."

## Related Skills

- [[calculate-jtbd-score]] - Scores the opportunity
- [[link-to-outcomes]] - Establishes outcome connections
- [[validate-opportunity-format]] - Validates the format

## Used By Commands

- `agentflow.identify-opportunities` - Creates opportunities
- `agentflow.orchestrate` - Stage 4 opportunity framing


