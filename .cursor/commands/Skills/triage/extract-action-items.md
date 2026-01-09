# Extract Action Items

**Category:** Triage
**Strategic Theme:** N/A
**Autonomy Level:** Full
**Workflow Stages:** 1 (Inbox Processing)

## Purpose

Pull actionable items from unstructured content, categorize them by type and urgency, and format them for tracking or integration into the knowledge base.

## Inputs Required

- **Content:** The raw text or document to extract actions from
- **Content Type:** Classification from `classify-content-type`
- **Context:** Meeting context, author, date, attendees if applicable

## Process Steps

### Step 1: Identify Action Language

Scan for action-indicating language:
- Imperative verbs: "Create", "Update", "Review", "Send", "Schedule"
- Commitment phrases: "I will", "We should", "Need to", "Must"
- Assignment phrases: "Owner:", "Assigned to:", "Responsible:"
- Deadline indicators: "By [date]", "Before", "Due", "ASAP"
- Question/decision markers: "Decision needed:", "TBD", "To discuss"

### Step 2: Extract Each Action Item

For each action found, capture:
- **Action Description:** What needs to be done
- **Owner:** Who is responsible (if specified)
- **Due Date:** When it's due (if specified)
- **Priority:** Urgency level (if indicated)
- **Context:** Why this action exists
- **Dependencies:** What it depends on

### Step 3: Categorize Actions

Group actions by type:

| Type | Description | Example |
|------|-------------|---------|
| Task | Concrete deliverable | "Create migration playbook" |
| Decision | Choice to be made | "Decide on launch date" |
| Follow-up | Check or revisit | "Follow up with customer" |
| Research | Investigation needed | "Research competitor pricing" |
| Communication | Message to send | "Send update to stakeholders" |
| Review | Approval or feedback | "Review PRD draft" |

### Step 4: Assess Priority

Assign priority based on:
- **Critical:** Blocking other work, immediate deadline
- **High:** Important for current goals, near-term deadline
- **Medium:** Should be done, flexible timing
- **Low:** Nice to have, no deadline pressure

### Step 5: Link to Knowledge Base

For each action, identify:
- Related documents in knowledge base
- Existing initiatives or projects
- Relevant opportunities or solutions

## Output Format

```markdown
## Extracted Action Items

**Source:** [Document/meeting name]
**Date:** [Date of source]
**Total Actions:** [Count]

### Critical Priority
| # | Action | Owner | Due | Type | Related |
|---|--------|-------|-----|------|---------|
| 1 | [Description] | [Name] | [Date] | [Type] | [[link]] |

### High Priority
| # | Action | Owner | Due | Type | Related |
|---|--------|-------|-----|------|---------|
| 2 | [Description] | [Name] | [Date] | [Type] | [[link]] |

### Medium Priority
| # | Action | Owner | Due | Type | Related |
|---|--------|-------|-----|------|---------|
| 3 | [Description] | [Name] | [Date] | [Type] | [[link]] |

### Low Priority
| # | Action | Owner | Due | Type | Related |
|---|--------|-------|-----|------|---------|
| 4 | [Description] | [Name] | [Date] | [Type] | [[link]] |

### Unassigned / Needs Clarification
- [Action needing owner assignment]
- [Action needing due date]

### Decisions Needed
- [ ] [Decision 1]
- [ ] [Decision 2]
```

## Confidence Scoring

- **High:** Clear action language, explicit owners and dates
- **Medium:** Implied actions, some missing details
- **Low:** Vague language, unclear responsibilities

## Example

**Input:** Meeting notes containing:
"Peter to create customer FAQ by Friday. We should schedule a follow-up call with Rossing - need to decide if we do this before or after the Jan 23 presentation. The migration timeline needs review."

**Output:**
```markdown
## Extracted Action Items

**Source:** Rossing Meeting Notes
**Date:** 2026-01-08
**Total Actions:** 4

### High Priority
| # | Action | Owner | Due | Type | Related |
|---|--------|-------|-----|------|---------|
| 1 | Create customer FAQ | Peter | Friday | Task | [[migration program]] |

### Medium Priority
| # | Action | Owner | Due | Type | Related |
|---|--------|-------|-----|------|---------|
| 2 | Schedule follow-up call with Rossing | Unassigned | TBD | Follow-up | [[rossing-research]] |
| 3 | Review migration timeline | Unassigned | TBD | Review | [[migration-timeline]] |

### Decisions Needed
- [ ] Schedule Rossing call before or after Jan 23 presentation?
```

## Related Skills

- [[classify-content-type]] - Provides content context
- [[route-to-destination]] - Routes action items appropriately
- [[assess-risk-level]] - Prioritizes critical actions

## Used By Commands

- `agentflow.process-inbox` - Extracts actions from inbox items
- `agentflow.orchestrate` - Captures actions during processing


