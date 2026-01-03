# Decision Log Format

**Last Updated:** 2025-12-17  
**Purpose:** Standardized format for decision logs to track all decisions made throughout the feature idea lifecycle.

## Overview

Decision logs provide a complete audit trail of all decisions, enabling both humans and agents to:
- Track decision evolution over time
- Understand decision rationale
- Reconcile decision changes
- Learn from past decisions

## Decision Log Structure

Each decision point should maintain a decision log entry with the following structure:

### Required Fields

1. **Decision ID**
   - Format: `DEC-YYYY-MM-DD-XXX` (e.g., `DEC-2025-12-17-001`)
   - Unique identifier for the decision
   - Sequential number for multiple decisions on same day

2. **Decision Date**
   - Format: `YYYY-MM-DD`
   - Date the decision was made

3. **Decision Type**
   - Classification of the decision
   - Examples: "Opportunity Validation", "Solution Selection", "Prioritization", "Go/No-Go", "Roadmap Inclusion"

4. **Decision Status**
   - Current status of the decision
   - Values: "Active", "Superseded", "Reversed"
   - Default: "Active"

5. **Decision Maker**
   - Who made the decision
   - Format: Human name or "Agent" + agent identifier (e.g., "Agent (AI-001)")

6. **Decision**
   - The actual decision made
   - Examples: "Move to Active", "Approve Solution", "Prioritize High", "Proceed", "Abandon"

7. **Rationale**
   - Why this decision was made
   - Should be specific and evidence-based
   - 2-4 sentences typically

8. **Supporting Evidence**
   - Links to research, data, or frameworks used
   - Can include:
     - Research documents
     - Data analysis
     - Framework scores (opportunity score, risk assessment, innovation score)
     - Customer feedback

9. **Previous Decision** (if applicable)
   - Link to decision this supersedes
   - Format: `DEC-YYYY-MM-DD-XXX`
   - Required when decision status is "Superseded" or "Reversed"

### Optional Fields

1. **Decision Context**
   - Stage, document, related items
   - Helps understand context of decision

2. **Risk Level**
   - HIGH / MEDIUM / LOW
   - Based on decision impact

3. **Confidence** (for agent decisions)
   - High / Medium / Low
   - Agent's confidence in the decision

4. **Review Date**
   - When this decision should be reviewed
   - Format: `YYYY-MM-DD`

5. **Related Decisions**
   - Links to related decisions
   - Format: `DEC-YYYY-MM-DD-XXX`

## Decision History Format

Each document should include a "Decision History" section with the following format:

```markdown
## Decision History

### Decision Log

| Date | Decision ID | Decision | Decision Maker | Status | Rationale |
|------|------------|----------|----------------|--------|-----------|
| 2025-12-17 | DEC-2025-12-17-001 | Move to Active | John Smith | Active | High opportunity score (54), strong evidence from user research |
| 2025-12-10 | DEC-2025-12-10-001 | Created | Agent (AI-001) | Superseded | Initial creation, moved to Active on 2025-12-17 |

### Decision Details

#### DEC-2025-12-17-001
- **Decision Date:** 2025-12-17
- **Decision Type:** Opportunity Prioritization
- **Decision:** Move to Active
- **Decision Maker:** John Smith
- **Status:** Active
- **Rationale:** High opportunity score (54) calculated using JTBD formula. Strong evidence from user research showing 68% of users report difficulty finding features. Opportunity directly supports product outcome "Improve Feature Adoption".
- **Supporting Evidence:**
  - Opportunity Score: 54 (Importance: 9, Satisfaction: 4)
  - [User Research: Feature Discovery Study](../../03-discovery/research/user-research/feature-discovery-study.md)
  - [Product Outcome: Improve Feature Adoption](../02-product-outcomes/improve-feature-adoption.md)
- **Previous Decision:** DEC-2025-12-10-001
```

## Decision Status Values

### Active
- Current, active decision
- Default status for new decisions
- Decision is in effect

### Superseded
- Decision was replaced by a new decision
- Previous decision is no longer active
- New decision should link to this one

### Reversed
- Decision was reversed or undone
- Decision is no longer in effect
- New decision should explain why it was reversed

## Decision Status Transitions

**Valid Transitions:**
- Active → Superseded (when new decision replaces it)
- Active → Reversed (when decision is undone)
- Superseded → (no further transitions)
- Reversed → (no further transitions)

**Invalid Transitions:**
- Cannot transition from Superseded or Reversed back to Active
- Must create new decision instead

## Decision Reconciliation Process

When a decision changes:

1. **Mark Previous Decision**
   - Set status to "Superseded" or "Reversed"
   - Add note in rationale explaining why
   - Link to new decision

2. **Create New Decision Entry**
   - Generate new Decision ID
   - Set status to "Active"
   - Link to previous decision in "Previous Decision" field
   - Document why decision changed in rationale

3. **Update Document**
   - Update document status/metadata if needed
   - Update decision history table
   - Ensure all links are correct

4. **Verify Consistency**
   - Check document status matches decision
   - Verify links are bidirectional
   - Ensure no conflicting information

## Agent Decision Logging

When agents make decisions (within their capabilities):

1. **Auto-log Required**
   - Agents must automatically create decision log entries
   - Cannot skip logging for agent decisions

2. **Tag as Agent**
   - Clearly mark decisions made by agents
   - Format: "Agent (AI-XXX)" where XXX is agent identifier

3. **Require Rationale**
   - Agents must provide rationale for their decisions
   - Rationale should explain the reasoning

4. **Flag for Review**
   - Agent decisions should be flagged for human review
   - Based on risk level (HIGH/MEDIUM always, LOW optionally)

## Human Decision Logging

When humans make decisions:

1. **Manual Logging**
   - Humans can log decisions directly
   - Should use decision log template

2. **Agent Assistance**
   - Agents can suggest decision log entries for human approval
   - Human validates and approves

3. **Required for HIGH/MEDIUM Risk**
   - All HIGH/MEDIUM risk decisions must have decision logs
   - Cannot skip logging for consequential decisions

## Decision Log Location

**Primary Location: Embedded in Documents** (Recommended)
- Each document includes a "Decision History" section
- Pros: Context preserved, easy to find, version controlled
- Cons: Requires updating documents

**Secondary Location: Centralized Index** (Optional)
- Separate decision index file for cross-document queries
- Pros: Centralized view, easier to query
- Cons: Requires linking, can get out of sync

**Hybrid Approach:**
- Primary decision log embedded in documents
- Centralized index for cross-document queries
- Agents can query both

## Decision Log Template

See `07-reference/templates/decision-log-template.md` for a template to use when creating decision log entries.

## Decision History Section Template

See `07-reference/templates/decision-history-section-template.md` for a template to use when adding decision history sections to documents.

## Related Documents

- [Decision Framework](./decision-framework.md) - Overall decision framework
- [Decision Log Template](../templates/decision-log-template.md) - Template for decision log entries
- [Decision History Section Template](../templates/decision-history-section-template.md) - Template for decision history sections


