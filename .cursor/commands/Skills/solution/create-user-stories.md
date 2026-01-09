# Create User Stories

**Category:** Solution
**Strategic Theme:** N/A
**Autonomy Level:** Full
**Workflow Stages:** 5 (Solution Exploration)

## Purpose

Generate user stories following INVEST criteria that capture user needs in a format suitable for development.

## Inputs Required

- **Solution:** The solution to break into stories
- **Personas:** User personas/segments
- **Requirements:** Functional requirements
- **Opportunity:** The underlying opportunity

## Process Steps

### Step 1: Identify User Segments

List the users who will interact:
- Primary users (main audience)
- Secondary users (occasional users)
- Admin users (configuration/management)
- System actors (automated processes)

### Step 2: Map User Goals

For each user segment:
- What are they trying to accomplish?
- What's the job to be done?
- What's the expected outcome?

### Step 3: Write Stories in Standard Format

Use the canonical format:

**As a** [user persona/role]
**I want to** [goal/action]
**So that** [benefit/value]

### Step 4: Apply INVEST Criteria

Validate each story:
- **Independent:** Can be developed without other stories
- **Negotiable:** Open to discussion on implementation
- **Valuable:** Delivers value to user
- **Estimable:** Team can size it
- **Small:** Fits in a sprint (if too big, split)
- **Testable:** Can write acceptance criteria

### Step 5: Add Story Details

Enrich each story with:
- Acceptance criteria (high-level)
- Dependencies
- Priority
- Estimated size (if known)
- Related stories

### Step 6: Organize Stories

Group stories by:
- Epic (large feature grouping)
- User journey phase
- Priority order
- Development sequence

## Output Format

```markdown
## User Stories: [Solution Name]

**Solution:** [[solution-link]]
**Date:** YYYY-MM-DD
**Total Stories:** [Count]

### Epic: [Epic Name]

**Epic Description:** [What this epic covers]

#### Story 1: [Story Title]

**ID:** US-001
**Priority:** [Must | Should | Could]
**Size:** [S | M | L | XL]

**Story:**
As a **[persona]**
I want to **[goal/action]**
So that **[benefit]**

**Acceptance Criteria (High-Level):**
- [ ] [Criterion 1]
- [ ] [Criterion 2]
- [ ] [Criterion 3]

**Dependencies:**
- [Dependency or "None"]

**Notes:**
- [Additional context]

---

#### Story 2: [Story Title]

**ID:** US-002
**Priority:** [Must | Should | Could]
**Size:** [S | M | L | XL]

**Story:**
As a **[persona]**
I want to **[goal/action]**
So that **[benefit]**

**Acceptance Criteria (High-Level):**
- [ ] [Criterion 1]
- [ ] [Criterion 2]

**Dependencies:**
- US-001 (depends on Story 1)

---

### Epic: [Epic Name 2]

[Additional stories...]

### Story Summary

| ID | Story | Persona | Priority | Size | Dependencies |
|----|-------|---------|----------|------|--------------|
| US-001 | [Title] | [Persona] | Must | M | None |
| US-002 | [Title] | [Persona] | Must | S | US-001 |
| US-003 | [Title] | [Persona] | Should | L | US-001 |

### Story Map

```
[User Journey Phase 1] ─→ [Phase 2] ─→ [Phase 3]
        │                    │             │
     US-001              US-003         US-005
     US-002              US-004         US-006
```

### Personas Covered

| Persona | Stories | Coverage |
|---------|---------|----------|
| Safety Manager | [Count] | [Good/Partial] |
| Field Worker | [Count] | [Good/Partial] |
| Executive | [Count] | [Good/Partial] |

### MVP Recommendation

**Minimum Viable Stories:**
- US-001: [Why essential]
- US-002: [Why essential]

**Defer to Later:**
- US-005: [Why can wait]

## Related Documents

- [[Solution]]
- [[Opportunity]]
- [[PRD]]
```

## Confidence Scoring

- **High:** Complete stories, INVEST validated, well-organized
- **Medium:** Good stories, some gaps in criteria
- **Low:** Initial stories, need refinement

## Example

**Input:** Solution: "Fatal risk visibility dashboard"

**Output:** 8 user stories across 2 epics covering safety manager viewing risks, filtering by site, drilling into details, and executive summary view.

## Related Skills

- [[define-acceptance-criteria]] - Adds detailed AC
- [[write-prd-section]] - Includes stories in PRD
- [[generate-solution-options]] - Provides solution context

## Used By Commands

- `agentflow.assess-solutions` - Creates stories for solutions
- `agentflow.orchestrate` - Stage 5 story creation


