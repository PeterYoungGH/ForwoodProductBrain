# Generate Solution Options

**Category:** Solution
**Strategic Theme:** N/A
**Autonomy Level:** Full
**Workflow Stages:** 5 (Solution Exploration)

## Purpose

Brainstorm multiple solution approaches for an opportunity, ensuring diversity of options before committing to a specific solution.

## Inputs Required

- **Opportunity:** The opportunity to solve
- **Constraints:** Known constraints and limitations
- **Inspiration:** Competitor solutions, industry patterns
- **Target Segments:** Who the solutions are for

## Process Steps

### Step 1: Understand the Opportunity

Review the opportunity:
- What's the core problem?
- Who experiences it?
- What's the current workaround?
- What would success look like?

### Step 2: Apply Divergent Thinking

Use multiple brainstorming approaches:

**Approach 1: Spectrum Method**
Generate solutions across a spectrum:
- Simplest possible solution
- Medium complexity solution
- Full-featured solution
- Moonshot solution

**Approach 2: Stakeholder Lens**
Generate solutions for each stakeholder:
- Field worker solution
- Safety manager solution
- Executive solution
- IT admin solution

**Approach 3: Build/Buy/Partner**
Consider all options:
- Build: Custom development
- Buy: Third-party integration
- Partner: Collaborate with vendor
- Borrow: Adapt existing feature

**Approach 4: Technology Options**
Vary the technology approach:
- Manual/process solution
- Simple automation
- AI/ML-powered solution
- Hardware-enabled solution

### Step 3: Screen Initial Ideas

Quick filter for viability:
- Does it address the core problem?
- Is it technically possible?
- Is it within scope?
- Would customers want it?

### Step 4: Develop Top Options

For the best 3-5 ideas:
- Write a brief description
- Identify key assumptions
- Estimate complexity
- Note risks

### Step 5: Ensure Diversity

Check that options vary by:
- Implementation complexity
- Time to market
- Risk level
- Target segment emphasis

## Output Format

```markdown
## Solution Options: [Opportunity Name]

**Opportunity:** [[opportunity-link]]
**Date Generated:** YYYY-MM-DD
**Options Generated:** [Count]

### Opportunity Recap

**Statement:** [Opportunity statement]
**Core Problem:** [What needs solving]
**Success Looks Like:** [Desired outcome]

### Solution Options

#### Option 1: [Name] - Simple

**Description:**
[1-2 sentence description]

**How It Solves the Problem:**
[Explanation]

**Complexity:** Low
**Time to Market:** Fast (weeks)
**Risk Level:** Low

**Key Assumptions:**
1. [Assumption]
2. [Assumption]

**Pros:**
- [Pro 1]
- [Pro 2]

**Cons:**
- [Con 1]
- [Con 2]

#### Option 2: [Name] - Medium

**Description:**
[1-2 sentence description]

**How It Solves the Problem:**
[Explanation]

**Complexity:** Medium
**Time to Market:** Moderate (months)
**Risk Level:** Medium

**Key Assumptions:**
1. [Assumption]
2. [Assumption]

**Pros:**
- [Pro 1]
- [Pro 2]

**Cons:**
- [Con 1]
- [Con 2]

#### Option 3: [Name] - Comprehensive

**Description:**
[1-2 sentence description]

**How It Solves the Problem:**
[Explanation]

**Complexity:** High
**Time to Market:** Slow (quarters)
**Risk Level:** Higher

**Key Assumptions:**
1. [Assumption]
2. [Assumption]

**Pros:**
- [Pro 1]
- [Pro 2]

**Cons:**
- [Con 1]
- [Con 2]

#### Option 4: [Name] - Alternative Approach

**Description:**
[1-2 sentence description - different approach entirely]

**How It Solves the Problem:**
[Explanation]

**Complexity:** [Level]
**Time to Market:** [Timeframe]
**Risk Level:** [Level]

**Key Assumptions:**
1. [Assumption]

**Pros:**
- [Pro 1]

**Cons:**
- [Con 1]

### Option Comparison

| Option | Complexity | Time | Risk | Impact | Assumptions |
|--------|------------|------|------|--------|-------------|
| Option 1 | Low | Fast | Low | Medium | 2 |
| Option 2 | Medium | Moderate | Medium | High | 2 |
| Option 3 | High | Slow | Higher | High | 2 |
| Option 4 | [Level] | [Time] | [Risk] | [Impact] | 1 |

### Ideas Not Developed

**Considered but Screened Out:**
- [Idea A] - Reason: [Why screened]
- [Idea B] - Reason: [Why screened]

**Saved for Future:**
- [Idea C] - Potential: [Future consideration]

### Recommendation

**For Fast Value:** Option 1
**For Full Solution:** Option 2 or 3
**For Innovation:** Option 4

**Next Steps:**
1. [Conduct risk assessment on top options]
2. [Design experiments for key assumptions]
3. [Get stakeholder input on options]

## Related Documents

- [[Opportunity]]
- [[Related solutions]]
```

## Confidence Scoring

- **High:** Diverse options, well-developed, clear trade-offs
- **Medium:** Good options, some gaps in development
- **Low:** Limited options, need more exploration

## Example

**Input:** Opportunity: "Safety managers can't distinguish fatal risks"

**Output:** 4 options ranging from simple risk severity indicators to AI-powered predictive fatal risk detection, with clear trade-offs and assumptions for each.

## Related Skills

- [[frame-opportunity]] - Provides opportunity context
- [[assess-four-risks]] - Assesses generated options
- [[compare-solutions]] - Compares options

## Used By Commands

- `agentflow.assess-solutions` - Generates options to assess
- `agentflow.orchestrate` - Stage 5 solution generation


