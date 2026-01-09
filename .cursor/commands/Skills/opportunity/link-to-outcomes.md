# Link to Outcomes

**Category:** Opportunity
**Strategic Theme:** N/A
**Autonomy Level:** Full
**Workflow Stages:** 4 (Opportunity Validation)

## Purpose

Connect opportunities to business and product outcomes in the Opportunity Solution Tree hierarchy, ensuring work ladders up to strategic goals.

## Inputs Required

- **Opportunity:** The opportunity to link
- **Business Outcomes:** Available business outcomes
- **Product Outcomes:** Available product outcomes
- **Strategic Themes:** Current strategic themes

## Process Steps

### Step 1: Review Available Outcomes

Scan the outcome hierarchy:

**Business Outcomes** (`04-opportunities/01-business-outcomes/`):
- What business goals exist?
- What metrics are they targeting?
- What timeframes are relevant?

**Product Outcomes** (`04-opportunities/02-product-outcomes/`):
- What product metrics are targeted?
- Which support which business outcomes?
- What behaviors are we trying to change?

### Step 2: Identify Primary Link

Find the most direct connection:
- Which product outcome would this opportunity most directly affect?
- How would solving this opportunity move that metric?
- Is the connection causal or correlational?

### Step 3: Identify Secondary Links

Find additional connections:
- Are there other product outcomes affected?
- Are there indirect business outcome impacts?
- Are there cross-functional connections?

### Step 4: Validate Link Strength

Assess each link:

| Strength | Description | Evidence Needed |
|----------|-------------|-----------------|
| Strong | Direct causal link | Clear logic, research support |
| Moderate | Likely causal link | Reasonable logic, some support |
| Weak | Possible link | Hypothesis, needs validation |
| None | No clear connection | Don't create link |

### Step 5: Document Link Rationale

For each link, explain:
- Why this connection exists
- How the opportunity supports the outcome
- What evidence supports the link
- What assumptions are being made

### Step 6: Check Coverage

Ensure the OST is connected:
- Does this opportunity link to at least one product outcome?
- Does that product outcome link to a business outcome?
- Is the chain complete from opportunity to business goal?

## Output Format

```markdown
## Outcome Links: [Opportunity Name]

**Opportunity:** [[opportunity-link]]
**Date:** YYYY-MM-DD

### Primary Product Outcome Link

**Outcome:** [[product-outcome]]
**Metric:** [What metric this outcome targets]
**Link Strength:** [Strong | Moderate | Weak]

**Connection Logic:**
If we address [opportunity], then [product outcome metric] will improve because [reasoning].

**Evidence:**
- [Evidence supporting this connection]
- [Evidence supporting this connection]

### Secondary Product Outcome Links

| Outcome | Link Strength | Connection |
|---------|---------------|------------|
| [[outcome-1]] | [Strength] | [Brief explanation] |
| [[outcome-2]] | [Strength] | [Brief explanation] |

### Business Outcome Chain

```
[Opportunity]
    ↓ supports
[Product Outcome: X]
    ↓ contributes to
[Business Outcome: Y]
```

**Ultimate Business Impact:**
[How solving this opportunity ultimately affects business goals]

### Strategic Theme Alignment

**Primary Theme:** Theme X: [Theme Name]
**Alignment Rationale:** [How this opportunity aligns to the theme]

### Link Validation

**Completeness Check:**
- [X] Links to at least one product outcome
- [X] Product outcome links to business outcome
- [X] Chain is complete and logical

**Assumptions Made:**
- [Assumption 1]
- [Assumption 2]

**Risks to Link:**
- [What could invalidate this connection]

### Recommendations

- **Proceed:** Links are strong enough to act on
- **Validate:** Need more evidence for [specific link]
- **Reconsider:** Links are weak, may not be worth pursuing

## Related Documents

- [[Opportunity]]
- [[Product Outcome]]
- [[Business Outcome]]
```

## Confidence Scoring

- **High:** Strong direct links with clear evidence
- **Medium:** Moderate links with reasonable logic
- **Low:** Weak links requiring validation

## Example

**Input:** Opportunity: "Safety managers can't distinguish fatal risks from routine hazards"

**Output:** 
- Primary Link: Product Outcome "Improve fatal risk identification accuracy"
- Business Outcome Chain: → "Reduce SIF exposure" → "Forwood One Platform Success"
- Theme Alignment: Theme 1 (Fatal Risk Visibility)

## Related Skills

- [[frame-opportunity]] - Creates opportunities to link
- [[validate-strategic-alignment]] - Validates theme alignment
- [[align-to-strategy]] - Broader strategy alignment

## Used By Commands

- `agentflow.identify-opportunities` - Links during creation
- `agentflow.orchestrate` - Stage 4 linking


