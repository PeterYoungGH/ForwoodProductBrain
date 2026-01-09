# Prioritize Opportunities

**Category:** Opportunity
**Strategic Theme:** N/A
**Autonomy Level:** Human-Required
**Workflow Stages:** 4 (Opportunity Validation)

## Purpose

Rank opportunities based on JTBD scores, strategic alignment, and other factors to determine which should be Active vs. Backlog vs. Archive.

## Inputs Required

- **Opportunities:** List of opportunities to prioritize
- **JTBD Scores:** Calculated scores for each
- **Strategic Themes:** Current priorities
- **Capacity Constraints:** How much can be worked on
- **Dependencies:** Relationships between opportunities

## Process Steps

### Step 1: Gather Prioritization Inputs

For each opportunity, collect:
- JTBD Opportunity Score
- Strategic theme alignment
- Evidence strength
- Dependencies
- Effort estimate (if known)
- Risk level

### Step 2: Apply Scoring Framework

Use weighted scoring:

| Factor | Weight | Description |
|--------|--------|-------------|
| JTBD Score | 40% | Importance + opportunity gap |
| Strategic Alignment | 25% | How well it aligns to themes |
| Evidence Strength | 20% | Quality of supporting research |
| Feasibility | 15% | How achievable in current context |

### Step 3: Create Ranked List

Sort opportunities by composite score:

```
Rank = (JTBD × 0.4) + (Strategic × 0.25) + (Evidence × 0.2) + (Feasibility × 0.15)
```

Normalize each factor to 1-10 scale before calculating.

### Step 4: Apply Constraints

Adjust for constraints:
- **Capacity:** How many can be Active at once?
- **Dependencies:** Must one come before another?
- **Quick Wins:** Any high-value, low-effort items?
- **Strategic Bets:** Any leadership-mandated priorities?

### Step 5: Assign Status

Recommend status for each:

| Status | Criteria |
|--------|----------|
| Active | Top priorities within capacity, strong evidence |
| Backlog | Good opportunities, wait for capacity |
| Archive | Low priority, weak evidence, or out of scope |
| Investigate | Promising but needs more research |

### Step 6: Present for Human Decision

**This step requires human approval.**

Present:
- Ranked list with scores
- Recommended status for each
- Rationale for recommendations
- Trade-offs and alternatives

## Output Format

```markdown
## Opportunity Prioritization

**Date:** YYYY-MM-DD
**Opportunities Evaluated:** [Count]
**Current Active Slots Available:** [Count]

### Prioritization Summary

| Rank | Opportunity | JTBD | Strategic | Evidence | Composite | Recommendation |
|------|-------------|------|-----------|----------|-----------|----------------|
| 1 | [[Opp A]] | 15 | 9 | 8 | 12.1 | Active |
| 2 | [[Opp B]] | 12 | 8 | 9 | 10.5 | Active |
| 3 | [[Opp C]] | 14 | 6 | 7 | 9.8 | Backlog |
| 4 | [[Opp D]] | 8 | 5 | 4 | 6.1 | Archive |

### Detailed Recommendations

#### Recommended for Active (Top [X])

##### 1. [[Opportunity A]]
**Composite Score:** 12.1
**JTBD Score:** 15 (High priority)
**Strategic Alignment:** 9/10 - Directly supports Theme 1
**Evidence Strength:** 8/10 - Strong VoC support
**Feasibility:** 8/10 - Clear path to solutions

**Why Active:**
[Explanation of why this should be prioritized now]

**Trade-offs:**
- [What we're choosing over other options]

##### 2. [[Opportunity B]]
[Same structure]

#### Recommended for Backlog

##### 3. [[Opportunity C]]
**Composite Score:** 9.8
**Recommendation:** Backlog

**Why Backlog:**
[Explanation of why this should wait]

**When to Reconsider:**
[What would move this to Active]

#### Recommended for Archive

##### 4. [[Opportunity D]]
**Composite Score:** 6.1
**Recommendation:** Archive

**Why Archive:**
[Explanation of why this should be archived]

### Dependencies

```
Opportunity A ─── must come before ──→ Opportunity E
Opportunity B ─── enhances ──→ Opportunity C
```

### Capacity Analysis

**Current Active Opportunities:** [Count]
**Recommended New Active:** [Count]
**Available Slots:** [Count]

**Capacity Decision:**
- [ ] Add [X] to Active (within capacity)
- [ ] Swap [Y] out to make room for [Z]
- [ ] Keep current, add to Backlog

### Strategic Theme Coverage

| Theme | Active Opportunities | Backlog | Gap? |
|-------|---------------------|---------|------|
| Theme 1 | [Count] | [Count] | [Y/N] |
| Theme 2 | [Count] | [Count] | [Y/N] |
| Theme 3 | [Count] | [Count] | [Y/N] |
| Theme 4 | [Count] | [Count] | [Y/N] |
| Theme 5 | [Count] | [Count] | [Y/N] |

### 🔴 HUMAN DECISION REQUIRED

**Decisions Needed:**
1. Approve recommended Active opportunities?
2. Approve recommended Backlog placement?
3. Approve Archive recommendations?
4. Any adjustments to priorities?

**Options:**
- [ ] Accept all recommendations
- [ ] Accept with modifications: [specify]
- [ ] Request more information

## Related Documents

- [[Opportunities]]
- [[Strategic Roadmap]]
- [[Outcome documents]]
```

## Confidence Scoring

- **High:** Clear differentiation, strong data, obvious priorities
- **Medium:** Some close calls, reasonable confidence
- **Low:** Many tied scores, significant uncertainty

## Example

**Input:** 5 opportunities with JTBD scores ranging from 8-16.

**Output:** Ranked list recommending 2 for Active (scores 15, 14), 2 for Backlog (scores 12, 10), and 1 for Archive (score 8) with full rationale for human decision.

## Related Skills

- [[calculate-jtbd-score]] - Provides JTBD scores
- [[validate-strategic-alignment]] - Checks alignment
- [[apply-decision-policy]] - For autonomous mode

## Used By Commands

- `agentflow.identify-opportunities` - Prioritization step
- `agentflow.orchestrate` - Stage 4 prioritization (stops for human)
- `agentflow.autonomous` - Uses decision policies


