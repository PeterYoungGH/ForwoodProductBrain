# Route to Destination

**Category:** Triage
**Strategic Theme:** N/A
**Autonomy Level:** Supervised
**Workflow Stages:** 1 (Inbox Processing)

## Purpose

Suggest the appropriate destination(s) in the knowledge base for classified content. This skill maps content types to specific directories and file naming conventions.

## Inputs Required

- **Content Type:** Primary and secondary classification
- **Risk Level:** From `assess-risk-level` skill
- **Content Summary:** Brief description of content
- **Content Date:** Date of the content (for filename)
- **Existing Structure:** Current knowledge base structure

## Process Steps

### Step 1: Map Content Type to Directory

Use content type to determine primary destination:

| Content Type | Primary Destination |
|--------------|---------------------|
| Research (User) | `03-discovery/research/user-research/` |
| Research (Market) | `03-discovery/research/market-research/` |
| Research (Data) | `03-discovery/research/data-analysis/` |
| Opportunity | `04-opportunities/03-opportunities/backlog/` |
| Solution | `04-opportunities/04-solutions/proposed/` |
| Strategy | `01-strategy/` (requires sub-routing) |
| Feedback | `03-discovery/research/user-research/` |
| Communication | `06-communications/` (requires sub-routing) |
| Idea | `00-inbox/processing/` (needs further processing) |

### Step 2: Determine Sub-Directory

For types requiring sub-routing:

**Strategy:**
- Vision content → `01-strategy/vision/`
- Roadmap content → `01-strategy/roadmap/`
- Focus areas → `01-strategy/strategic-focus/`

**Communication:**
- Stakeholder updates → `06-communications/stakeholder-updates/`
- Presentations → `06-communications/presentations/`
- One-on-ones → `06-communications/one-on-ones/`

### Step 3: Generate Filename

Apply naming convention:
- Format: `YYYY-MM-DD-descriptive-name.md`
- Use kebab-case for descriptive name
- Keep under 50 characters total
- Include key topic/subject

### Step 4: Check for Existing Documents

Scan destination for:
- Duplicate or similar content
- Documents that should be updated instead of new creation
- Related documents that should be linked

### Step 5: Determine Action Type

Recommend action:
- **Create New:** No similar documents exist
- **Update Existing:** Similar document exists, should be updated
- **Merge:** Content should be combined with existing
- **Link Only:** Content references existing, just add links

## Output Format

```markdown
## Routing Recommendation

### Primary Destination
**Path:** [Full path to directory]
**Filename:** [Suggested filename]
**Action:** [Create New | Update Existing | Merge | Link Only]

### Alternative Destinations
| Priority | Path | Rationale |
|----------|------|-----------|
| 2 | [Path] | [Why this is an option] |
| 3 | [Path] | [Why this is an option] |

### Related Documents
- [[document-path]] - [Relationship description]
- [[document-path]] - [Relationship description]

### Routing Rationale
[Explanation of why this destination was chosen]

### Post-Routing Actions
- [ ] Link to related documents
- [ ] Update index files
- [ ] Notify stakeholders (if HIGH RISK)
```

## Confidence Scoring

- **High:** Clear content type, obvious destination, no conflicts
- **Medium:** Multiple valid destinations, requires judgment
- **Low:** Ambiguous content, complex dependencies

## Example

**Input:**
- Content Type: Research (User)
- Risk Level: MEDIUM
- Summary: Customer interview notes from Rossing about migration concerns
- Date: 2026-01-08

**Output:**
```markdown
## Routing Recommendation

### Primary Destination
**Path:** `03-discovery/research/user-research/`
**Filename:** `2026-01-08-rossing-migration-concerns-interview.md`
**Action:** Create New

### Alternative Destinations
| Priority | Path | Rationale |
|----------|------|-----------|
| 2 | `03-discovery/research/customer-requirements/` | If focus is on requirements extraction |

### Related Documents
- [[03-discovery/research/user-research/rossing-forwood-one-platform-meeting-2025-12.md]] - Previous Rossing research
- [[03-discovery/insights/rossing-forwood-one-platform-questions-2025-12.md]] - Related insights

### Routing Rationale
Customer interview notes are user research. Rossing is an existing customer with prior research, so this extends the existing research thread. MEDIUM risk as it informs migration decisions.

### Post-Routing Actions
- [ ] Link to previous Rossing research
- [ ] Extract insights using pm.extract-insights
- [ ] Update migration research synthesis if exists
```

## Related Skills

- [[classify-content-type]] - Provides content type for routing
- [[assess-risk-level]] - Provides risk context
- [[identify-duplicates]] - Helps find existing documents

## Used By Commands

- `agentflow.process-inbox` - Routes content after classification
- `agentflow.orchestrate` - Stage 1 routing decisions


