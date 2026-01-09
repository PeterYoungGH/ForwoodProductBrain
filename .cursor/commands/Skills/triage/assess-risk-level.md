# Assess Risk Level

**Category:** Triage
**Strategic Theme:** N/A
**Autonomy Level:** Full
**Workflow Stages:** 1 (Inbox Processing)

## Purpose

Determine the risk level (HIGH/MEDIUM/LOW) of integrating content into the knowledge base. Risk level determines approval requirements and processing workflow.

## Inputs Required

- **Content Type:** Classification from `classify-content-type` skill
- **Content Summary:** Brief summary of the content
- **Suggested Destination:** Where content would be integrated
- **Existing Documents:** Related documents that might be affected

## Process Steps

### Step 1: Identify Impact Category

Determine what areas of the knowledge base would be affected:

| Destination | Risk Category |
|-------------|---------------|
| `01-strategy/` | HIGH RISK |
| `02-initiatives/` | HIGH RISK |
| `04-opportunities/01-business-outcomes/` | MEDIUM RISK |
| `04-opportunities/02-product-outcomes/` | MEDIUM RISK |
| `04-opportunities/03-opportunities/` | MEDIUM RISK |
| `03-discovery/research/` | MEDIUM RISK |
| `04-opportunities/04-solutions/` | LOW RISK |
| `04-opportunities/05-experiments/` | LOW RISK |
| `06-communications/` | LOW RISK |

### Step 2: Assess Change Scope

Evaluate the scope of changes:
- **Create New:** Adding new document (lower risk within category)
- **Update Existing:** Modifying existing document (higher risk)
- **Replace:** Replacing existing content (highest risk)
- **Link Only:** Just adding links (lowest risk)

### Step 3: Evaluate Strategic Impact

Consider strategic implications:
- Does this change strategic direction?
- Does this affect committed roadmap items?
- Does this impact customer-facing commitments?
- Does this affect multiple stakeholders?

### Step 4: Calculate Risk Level

Apply risk calculation:

**HIGH RISK** if any of:
- Destination is Strategy or Initiatives
- Changes committed roadmap items
- Affects customer-facing commitments
- Contradicts existing strategic decisions

**MEDIUM RISK** if any of:
- Destination is Outcomes or Opportunities
- Updates existing documents
- Requires stakeholder notification
- Has cross-document dependencies

**LOW RISK** if:
- Destination is Solutions, Experiments, or Communications
- Creates new document without dependencies
- No strategic implications
- Self-contained change

## Output Format

```markdown
## Risk Assessment

**Risk Level:** [HIGH | MEDIUM | LOW]
**Approval Required:** [Yes - Explicit | Yes - Batch | No - Auto-approve]

### Risk Factors
| Factor | Assessment |
|--------|------------|
| Destination Category | [Category] |
| Change Type | [Create | Update | Replace | Link] |
| Strategic Impact | [High | Medium | Low | None] |
| Stakeholder Impact | [High | Medium | Low | None] |

### Rationale
[Explanation of risk level determination]

### Approval Guidance
[What approval is needed before proceeding]
```

## Confidence Scoring

Risk assessment confidence based on:
- **High:** Clear destination, well-understood impact
- **Medium:** Some ambiguity in scope or impact
- **Low:** Unclear destination or complex dependencies

## Example

**Input:** 
- Content Type: Strategy
- Summary: New product vision statement from executive meeting
- Destination: `01-strategy/vision/`

**Output:**
```markdown
## Risk Assessment

**Risk Level:** HIGH
**Approval Required:** Yes - Explicit

### Risk Factors
| Factor | Assessment |
|--------|------------|
| Destination Category | Strategy (HIGH) |
| Change Type | Update existing vision |
| Strategic Impact | High - affects all downstream decisions |
| Stakeholder Impact | High - all teams affected |

### Rationale
Vision changes are foundational and affect all strategic decisions downstream. This requires explicit approval from product leadership before integration.

### Approval Guidance
Present to user with full context. Do not auto-approve. Require explicit confirmation before updating vision documents.
```

## Related Skills

- [[classify-content-type]] - Provides content type input
- [[route-to-destination]] - Uses risk level to determine routing
- [[calculate-decision-confidence]] - Works with risk to determine autonomy

## Used By Commands

- `agentflow.process-inbox` - Determines approval workflow
- `agentflow.autonomous` - Uses risk level for auto-decision logic


