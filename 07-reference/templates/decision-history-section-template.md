# Decision History Section Template

**Purpose:** Template for adding decision history sections to opportunity, solution, and experiment documents.

## Decision History Section Format

Add this section to documents after the main content, before "Related Documents" or "Notes" sections:

```markdown
## Decision History

### Decision Log

| Date | Decision ID | Decision | Decision Maker | Status | Rationale |
|------|------------|----------|----------------|--------|-----------|
| YYYY-MM-DD | DEC-YYYY-MM-DD-XXX | [Decision] | [Maker] | [Status] | [Brief rationale] |
| YYYY-MM-DD | DEC-YYYY-MM-DD-XXX | [Decision] | [Maker] | [Status] | [Brief rationale] |

### Decision Details

[Decision log entries - see decision-log-template.md]
```

## Example Decision History Section

```markdown
## Decision History

### Decision Log

| Date | Decision ID | Decision | Decision Maker | Status | Rationale |
|------|------------|----------|----------------|--------|-----------|
| 2025-12-17 | DEC-2025-12-17-001 | Move to Active | John Smith | Active | High opportunity score (54), strong evidence |
| 2025-12-10 | DEC-2025-12-10-001 | Created | Agent (AI-001) | Superseded | Initial creation, moved to Active on 2025-12-17 |

### Decision Details

#### DEC-2025-12-17-001
- **Decision Date:** 2025-12-17
- **Decision Type:** Opportunity Prioritization
- **Decision:** Move to Active
- **Decision Maker:** John Smith
- **Status:** Active
- **Rationale:** High opportunity score (54) calculated using JTBD formula. Strong evidence from user research showing 68% of users report difficulty finding features. Opportunity directly supports product outcome "Improve Feature Adoption" and aligns with strategic focus on user experience.
- **Supporting Evidence:**
  - Opportunity Score: 54 (Importance: 9, Satisfaction: 4)
  - [User Research: Feature Discovery Study](../../03-discovery/research/user-research/feature-discovery-study.md)
  - [Product Outcome: Improve Feature Adoption](../02-product-outcomes/improve-feature-adoption.md)
- **Previous Decision:** DEC-2025-12-10-001
- **Decision Context:** Opportunity validation stage
- **Risk Level:** MEDIUM

#### DEC-2025-12-10-001
- **Decision Date:** 2025-12-10
- **Decision Type:** Opportunity Creation
- **Decision:** Created
- **Decision Maker:** Agent (AI-001)
- **Status:** Superseded
- **Rationale:** Initial opportunity creation from user research. Opportunity was created in Backlog status and later moved to Active on 2025-12-17.
- **Supporting Evidence:**
  - [User Research: Feature Discovery Study](../../03-discovery/research/user-research/feature-discovery-study.md)
- **Decision Context:** Opportunity creation stage
- **Risk Level:** MEDIUM
```

## Usage Instructions

1. **Add Section to Document**
   - Place after main content
   - Before "Related Documents" or "Notes" sections

2. **Create Decision Log Table**
   - Start with table showing all decisions
   - Include: Date, Decision ID, Decision, Decision Maker, Status, Rationale
   - Sort by date (most recent first)

3. **Add Decision Details**
   - Add detailed entries for each decision
   - Use format from decision-log-template.md
   - Include all relevant information

4. **Update When Decisions Are Made**
   - Add new row to table
   - Add new detailed entry
   - Update status of previous decisions if superseded

5. **Maintain Chronological Order**
   - Most recent decisions at top of table
   - Most recent detailed entries first

## Decision Log Table Guidelines

**Table Columns:**
- **Date:** YYYY-MM-DD format
- **Decision ID:** DEC-YYYY-MM-DD-XXX format
- **Decision:** Brief description (e.g., "Move to Active", "Approve Solution")
- **Decision Maker:** Human name or "Agent (AI-XXX)"
- **Status:** Active / Superseded / Reversed
- **Rationale:** Brief summary (1 sentence)

**Table Sorting:**
- Sort by date descending (most recent first)
- This makes it easy to see latest decisions

## Decision Details Guidelines

**When to Include:**
- All decisions should have detailed entries
- Especially important for:
  - HIGH/MEDIUM risk decisions
  - Prioritization decisions
  - Go/no-go decisions
  - Roadmap inclusion decisions

**Level of Detail:**
- Include all required fields
- Include optional fields if relevant
- Rationale should be 2-4 sentences
- Supporting evidence should be comprehensive

## Related Documents

- [Decision Log Format](../methodology/decision-log-format.md) - Full format specification
- [Decision Log Template](./decision-log-template.md) - Template for individual decision log entries



