# Extract Jira Insights

**Category:** Research
**Strategic Theme:** N/A
**Autonomy Level:** Full
**Workflow Stages:** 2 (Insight Extraction)

## Purpose

Pull insights from Jira data including tickets, epics, user stories, and acceptance criteria to inform product decisions and identify patterns.

## Inputs Required

- **Jira Data:** Tickets, epics, stories, or exported data
- **Focus Area:** What aspect to analyze (bugs, features, velocity)
- **Time Period:** Date range for analysis
- **Project/Board:** Which Jira project or board

## Process Steps

### Step 1: Categorize Jira Items

Classify items by type:
- **Epic:** Large feature or initiative
- **Story:** User-facing capability
- **Bug:** Defect or issue
- **Task:** Technical or non-user-facing work
- **Spike:** Research or investigation

### Step 2: Extract Key Information

For each item, capture:
- **Summary:** Title/description
- **Status:** Current state
- **Priority:** P1-P5 or equivalent
- **Labels:** Tags and categories
- **Components:** Product areas
- **Acceptance Criteria:** Definition of done
- **Story Points:** Effort estimate
- **Dates:** Created, updated, resolved

### Step 3: Identify Patterns

Analyze for patterns:
- **Bug Clusters:** Areas with many bugs
- **Feature Themes:** Common feature requests
- **Velocity Trends:** Speed of delivery over time
- **Blockers:** Common blocking issues
- **Technical Debt:** Accumulated shortcuts

### Step 4: Extract Requirements

From user stories and epics:
- **User Need:** What user is trying to do
- **Acceptance Criteria:** How we know it's done
- **Dependencies:** What it depends on
- **Constraints:** Limitations or boundaries

### Step 5: Generate Insights

Convert data to insights:
- What does this tell us about product quality?
- What features are most requested?
- Where is technical debt accumulating?
- What patterns indicate systemic issues?

## Output Format

```markdown
# Jira Analysis: [Focus Area]

**Project:** [Jira project]
**Period:** [Date range]
**Items Analyzed:** [Count]

## Summary

[Key findings in 2-3 sentences]

## Item Breakdown

### By Type
| Type | Count | % |
|------|-------|---|
| Story | X | X% |
| Bug | X | X% |
| Task | X | X% |

### By Status
| Status | Count | Avg Age |
|--------|-------|---------|
| Open | X | X days |
| In Progress | X | X days |
| Done | X | N/A |

### By Priority
| Priority | Count | Avg Resolution |
|----------|-------|----------------|
| Critical | X | X days |
| High | X | X days |

## Patterns Identified

### Pattern 1: [Title]
**Evidence:**
- [Data point 1]
- [Data point 2]

**Implication:** [What this means]

### Pattern 2: [Title]
[Same structure]

## Bug Analysis

### Top Bug Areas
| Component | Bug Count | Severity |
|-----------|-----------|----------|
| [Area] | X | [Severity] |

### Bug Trends
[Increasing/decreasing, patterns over time]

## Requirements Extracted

### From [Epic/Story Name]
**User Need:** [What user wants]
**Acceptance Criteria:**
- [ ] [Criterion 1]
- [ ] [Criterion 2]

**Dependencies:** [List]

## Recommendations

1. **[Recommendation 1]:** [Rationale]
2. **[Recommendation 2]:** [Rationale]

## Related Documents

- [[Related opportunity]]
- [[Related solution]]
```

## Confidence Scoring

- **High:** Large dataset, clear patterns, complete data
- **Medium:** Moderate dataset, some patterns, minor gaps
- **Low:** Small dataset, unclear patterns, significant gaps

## Example

**Input:** Export of all bugs from last quarter in Forwood One project.

**Output:** Analysis showing concentration of bugs in mobile sync functionality, with pattern of offline mode issues that aligns with known opportunity for native app improvements.

## Related Skills

- [[define-acceptance-criteria]] - Uses extracted criteria
- [[identify-patterns]] - Pattern recognition
- [[extract-key-findings]] - General insight extraction

## Used By Commands

- `agentflow.extract-insights` - Jira data processing
- `agentflow.orchestrate` - Stage 2 Jira analysis


