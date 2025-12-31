# Decision Log Entry Template

**Purpose:** Template for creating decision log entries in documents.

## Decision Log Entry Format

```markdown
#### DEC-YYYY-MM-DD-XXX
- **Decision Date:** YYYY-MM-DD
- **Decision Type:** [Opportunity Validation / Solution Selection / Prioritization / Go/No-Go / Roadmap Inclusion / etc.]
- **Decision:** [The actual decision made]
- **Decision Maker:** [Human name or "Agent (AI-XXX)"]
- **Status:** [Active / Superseded / Reversed]
- **Rationale:** [Why this decision was made - 2-4 sentences]
- **Supporting Evidence:**
  - [Evidence 1: Link or description]
  - [Evidence 2: Link or description]
  - [Evidence 3: Link or description]
- **Previous Decision:** [DEC-YYYY-MM-DD-XXX if applicable]
- **Decision Context:** [Optional: Stage, document, related items]
- **Risk Level:** [Optional: HIGH / MEDIUM / LOW]
- **Confidence:** [Optional: High / Medium / Low - for agent decisions]
- **Review Date:** [Optional: YYYY-MM-DD]
- **Related Decisions:** [Optional: DEC-YYYY-MM-DD-XXX]
```

## Example Decision Log Entry

```markdown
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
- **Decision Context:** Opportunity validation stage, opportunity document
- **Risk Level:** MEDIUM
```

## Decision ID Generation

**Format:** `DEC-YYYY-MM-DD-XXX`

- **DEC:** Prefix for decision
- **YYYY-MM-DD:** Date of decision
- **XXX:** Sequential number (001, 002, 003, etc.)

**Example:**
- First decision on 2025-12-17: `DEC-2025-12-17-001`
- Second decision on 2025-12-17: `DEC-2025-12-17-002`
- First decision on 2025-12-18: `DEC-2025-12-18-001`

## Usage Instructions

1. **Generate Decision ID**
   - Use format: `DEC-YYYY-MM-DD-XXX`
   - Check existing decisions on same date to determine next number

2. **Fill Required Fields**
   - Decision Date: Current date
   - Decision Type: Classify the decision
   - Decision: State the actual decision
   - Decision Maker: Your name or "Agent (AI-XXX)"
   - Status: Usually "Active" for new decisions
   - Rationale: Explain why (2-4 sentences)
   - Supporting Evidence: List evidence used

3. **Fill Optional Fields** (if applicable)
   - Previous Decision: If this supersedes another decision
   - Decision Context: Helpful context
   - Risk Level: If known
   - Confidence: For agent decisions
   - Review Date: If decision should be reviewed
   - Related Decisions: Links to related decisions

4. **Add to Decision History Section**
   - Add entry to decision history table
   - Add detailed entry below table

## Related Documents

- [Decision Log Format](../methodology/decision-log-format.md) - Full format specification
- [Decision History Section Template](./decision-history-section-template.md) - Template for decision history sections

