# Generate OST Branch

**Category:** Opportunity
**Strategic Theme:** N/A
**Autonomy Level:** Supervised
**Workflow Stages:** 4, 5 (Opportunity Validation, Solution Exploration)

## Purpose

Create an Opportunity Solution Tree branch from an opportunity, generating the hierarchical structure from outcome to opportunity to potential solutions.

## Inputs Required

- **Opportunity:** The validated opportunity
- **Outcome Link:** The product/business outcome it supports
- **Solution Ideas:** Initial solution concepts (if any)
- **Research:** Related research informing solutions

## Process Steps

### Step 1: Establish Outcome Anchor

Start with the outcome:
- Which product outcome does this opportunity support?
- What metric does that outcome target?
- How does that connect to business outcomes?

### Step 2: Position Opportunity

Place the opportunity in the tree:
- One opportunity can support one or more outcomes
- Document the connection logic
- Note the JTBD score

### Step 3: Brainstorm Solution Options

Generate multiple solutions:
- Aim for 3-5 different approaches
- Vary by implementation complexity
- Vary by target segment
- Consider both build and buy options

**Solution Generation Prompts:**
- What's the simplest solution?
- What's the most complete solution?
- What would a competitor do?
- What would a 10x solution look like?
- What's a workaround solution?

### Step 4: Structure Each Solution

For each solution, outline:
- Solution name
- Brief description
- Which aspect of opportunity it addresses
- Estimated complexity
- Key assumptions to validate

### Step 5: Identify Experiments

For each solution, suggest validation:
- What assumption is riskiest?
- How could we test it quickly?
- What's the minimum viable experiment?

### Step 6: Create Branch Visualization

Generate the OST branch structure:

```
[Business Outcome]
       ↓
[Product Outcome]
       ↓
[OPPORTUNITY] ← Current focus
    ├── [Solution A] → [Experiment A1]
    ├── [Solution B] → [Experiment B1]
    └── [Solution C] → [Experiment C1]
```

## Output Format

```markdown
# OST Branch: [Opportunity Name]

**Generated:** YYYY-MM-DD
**Opportunity:** [[opportunity-link]]

## Branch Visualization

```
[Business Outcome: X]
       ↓
[Product Outcome: Y]
       ↓
[OPPORTUNITY: Z] (Score: X/20)
    ├── Solution A: [Name]
    │       └── Experiment: [Test name]
    ├── Solution B: [Name]
    │       └── Experiment: [Test name]
    └── Solution C: [Name]
            └── Experiment: [Test name]
```

## Outcome Context

### Business Outcome
**Name:** [[business-outcome]]
**Metric:** [What we're trying to move]
**Target:** [Specific target]

### Product Outcome
**Name:** [[product-outcome]]
**Metric:** [What we're trying to move]
**Target:** [Specific target]

## Opportunity

**Statement:** [Opportunity statement]
**JTBD Score:** [X/20]
**Customer Segment:** [Segment]

## Solution Options

### Solution A: [Name]

**Description:** [1-2 sentence description]

**How It Addresses Opportunity:**
[Explanation of how this solves the problem]

**Complexity:** [Low | Medium | High]

**Key Assumptions:**
1. [Assumption 1]
2. [Assumption 2]

**Suggested Experiment:**
- **Name:** [Experiment name]
- **Tests:** [Which assumption]
- **Method:** [Brief method]
- **Success Criteria:** [What success looks like]

**Status:** [Proposed | To Explore | Selected | Rejected]

### Solution B: [Name]
[Same structure]

### Solution C: [Name]
[Same structure]

## Solution Comparison

| Solution | Complexity | Risk | Impact | Experiment Cost |
|----------|------------|------|--------|-----------------|
| A | Low | Medium | Medium | Low |
| B | High | Low | High | Medium |
| C | Medium | High | Medium | Low |

## Recommended Next Steps

1. **If pursuing Solution A:** [Next step]
2. **If pursuing Solution B:** [Next step]
3. **If pursuing Solution C:** [Next step]

## Branch Relationships

**Related Opportunities:**
- [[Related opportunity 1]] - [How related]

**Potential Synergies:**
- Solution A could also address [[other opportunity]]

## Decision Points

| Decision | When | Owner |
|----------|------|-------|
| Which solution(s) to explore | After scoring | [Role] |
| Experiment design | Before testing | [Role] |
| Go/no-go after experiment | After results | [Role] |

## Related Documents

- [[Opportunity]]
- [[Product Outcome]]
- [[Business Outcome]]
- [[Existing solutions]]
```

## Confidence Scoring

- **High:** Clear opportunity, multiple viable solutions
- **Medium:** Good opportunity, solutions need refinement
- **Low:** Opportunity needs validation, solutions speculative

## Example

**Input:** Opportunity: "Safety managers can't distinguish fatal risks from routine hazards"

**Output:** OST branch with 3 solutions:
1. AI-powered risk severity indicator (complexity: high, impact: high)
2. Fatal risk dashboard view (complexity: medium, impact: medium)
3. Risk categorization training module (complexity: low, impact: low)

Each with experiment suggestions.

## Related Skills

- [[frame-opportunity]] - Creates opportunities
- [[generate-solution-options]] - Expands solutions
- [[design-experiment]] - Creates experiments

## Used By Commands

- `agentflow.identify-opportunities` - Creates OST branches
- `agentflow.assess-solutions` - Uses branch structure


