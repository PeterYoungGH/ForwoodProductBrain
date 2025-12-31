# Decision Facilitation Prompts

Prompts for facilitating decisions at each stage of the feature idea flow.

## Purpose

These prompts guide agents in facilitating decisions throughout the feature idea lifecycle, ensuring consistent decision-making processes and appropriate human-in-the-loop requirements.

## Available Prompts

### Opportunity Validation Prompt
**File:** `opportunity-validation-prompt.md`  
**Use When:** Validating opportunities to ensure they are well-formed, evidence-based, and properly linked to outcomes  
**Related Commands:** Validate opportunities, assess opportunity quality

Validates opportunities using:
- Format validation (customer-focused, evidence-based)
- Evidence validation
- Outcome linking validation
- Opportunity scoring (JTBD formula)
- Solution readiness assessment

### Solution Risk Assessment Prompt
**File:** `solution-risk-assessment-prompt.md`  
**Use When:** Assessing solutions using the Four Product Risks Framework  
**Related Commands:** Assess solution risks, evaluate solution viability

Assesses solutions using:
- Four Product Risks Framework (Value, Usability, Feasibility, Business Viability)
- Implementation considerations
- Validation planning

### Experiment Design Prompt
**File:** `experiment-design-prompt.md`  
**Use When:** Designing experiments to validate solution assumptions  
**Related Commands:** Design experiments, plan validation

Designs experiments to:
- Test solution assumptions
- Form clear hypotheses
- Define success criteria
- Plan resource requirements

### Prioritization Prompt
**File:** `prioritization-prompt.md`  
**Use When:** Prioritizing opportunities or solutions  
**Related Commands:** Prioritize items, rank opportunities

Prioritizes items using:
- Opportunity scoring (JTBD)
- Innovation scoring (Innovation Decision Framework)
- Evidence strength assessment
- Strategic alignment evaluation

### Decision History Query Prompt
**File:** `decision-history-query-prompt.md`  
**Use When:** Querying decision history to understand idea evolution  
**Related Commands:** Query decisions, analyze decision patterns

Queries decision history to:
- Read decision logs from documents
- Analyze decision evolution
- Identify decision patterns
- Reconcile decision changes

### Decision Reconciliation Prompt
**File:** `decision-reconciliation-prompt.md`  
**Use When:** Reconciling decision changes or identifying conflicts  
**Related Commands:** Reconcile decisions, update decision history

Reconciles decisions by:
- Marking previous decisions as superseded
- Creating new decision entries
- Updating documents
- Verifying consistency

### Kanban Update Prompt
**File:** `kanban-update-prompt.md`  
**Use When:** Updating kanban cards based on decisions or workflow progression  
**Related Commands:** Update kanban, move cards

Updates kanban board by:
- Updating card metadata with decisions
- Moving cards between stages (within agent capabilities)
- Flagging cards for human review
- Linking cards to decision logs

## Usage Pattern

1. Identify the decision point
2. Select appropriate prompt
3. Apply prompt with relevant context
4. Present results to human for approval (if required)
5. Execute decision and log it

## Decision Authority

Each prompt specifies:
- What agents can do autonomously
- What requires human approval
- Risk levels for decisions
- Decision logging requirements

## Related Documents

- [Decision Framework](../../methodology/decision-framework.md) - Overall decision framework
- [Decision Log Format](../../methodology/decision-log-format.md) - Decision logging format
- [Idea Kanban Guide](../../methodology/idea-kanban-guide.md) - Kanban usage guide

