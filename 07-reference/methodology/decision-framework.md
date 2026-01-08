# Decision Framework for Feature Idea Flow

**Last Updated:** 2025-12-17  
**Purpose:** Comprehensive decision framework mapping all decision points, criteria, and human-in-the-loop requirements throughout the feature idea lifecycle.

## Overview

This framework clarifies decision points at each stage of the feature idea flow, defines decision criteria using existing frameworks plus stage-specific rules, and establishes when agents can facilitate decisions autonomously vs when human approval is required.

The framework ensures:
- Clear decision points at each stage
- Consistent decision criteria across the flow
- Appropriate human judgment for consequential decisions
- Agent automation where safe and appropriate
- Full traceability of all decisions

## Framework Principles

1. **Risk-Based Decision Authority**: Decision authority aligns with risk levels (HIGH/MEDIUM/LOW)
2. **Evidence-Based Decisions**: All decisions should be supported by evidence, research, or frameworks
3. **Human-in-the-Loop for Consequence**: Humans make all consequential decisions affecting strategy, outcomes, or resource allocation
4. **Agent Facilitation**: Agents facilitate decisions by analyzing, scoring, and suggesting, but cannot make final decisions autonomously for HIGH/MEDIUM risk items
5. **Decision Traceability**: All decisions are logged with rationale and supporting evidence

## Stage-by-Stage Decision Framework

### Stage 1: Inbox Processing (`00-inbox/`)

**Purpose:** Classify and route incoming content to appropriate parts of the knowledge base.

#### Decision Points

1. **Content Classification**
   - **Question:** What type of content is this? (Research, Feature Request, Strategy, Customer Feedback, etc.)
   - **Decision Maker:** Agent (suggests), Human (validates)
   - **Risk Level:** LOW (classification only)

2. **Integration Mapping**
   - **Question:** Where should this content be integrated?
   - **Decision Maker:** Agent (suggests), Human (approves)
   - **Risk Level:** HIGH/MEDIUM/LOW (based on target location)

3. **Risk Assessment**
   - **Question:** What risk level does this content represent?
   - **Decision Maker:** Agent (assesses), Human (validates for HIGH/MEDIUM)
   - **Risk Level:** Based on target integration location

4. **Document Creation**
   - **Question:** Should new documents be created or existing ones updated?
   - **Decision Maker:** Agent (suggests), Human (approves)
   - **Risk Level:** HIGH/MEDIUM/LOW (based on document type)

#### Decision Criteria

- Use existing risk-based system from `00-inbox/RULES.md`
- Content analysis rules (objectives, outcomes, opportunities, solutions, etc.)
- Risk level mapping:
  - **HIGH RISK:** Strategy, Initiatives
  - **MEDIUM RISK:** Business Outcomes, Product Outcomes, Opportunities, Research/Discovery
  - **LOW RISK:** Solutions, Experiments, Communications

#### Human-in-the-Loop Requirements

- **HIGH RISK:** All strategy and initiative decisions require explicit approval
- **MEDIUM RISK:** All outcome and opportunity decisions require explicit approval
- **LOW RISK:** Can present streamlined choices, but still require selection

#### Agent Capabilities

- Analyze content and suggest integrations
- Present structured choices organized by risk level
- Execute only user-selected integrations
- Cannot create HIGH/MEDIUM risk documents without approval

#### Decision Logging

- All integration decisions must be logged
- HIGH/MEDIUM risk decisions require full decision log entry
- LOW risk decisions can use simplified logging

---

### Stage 2: Discovery & Research (`03-discovery/`)

**Purpose:** Transform research into actionable insights and identify opportunities.

#### Decision Points

1. **Research Quality Assessment**
   - **Question:** Is this research sufficient to inform decisions?
   - **Decision Maker:** Human (validates methodology and findings)
   - **Risk Level:** MEDIUM

2. **Insight Extraction**
   - **Question:** What insights can be derived from research?
   - **Decision Maker:** Agent (suggests), Human (validates)
   - **Risk Level:** LOW

3. **Opportunity Identification**
   - **Question:** Does this research reveal new opportunities?
   - **Decision Maker:** Agent (suggests), Human (approves creation)
   - **Risk Level:** MEDIUM

4. **Evidence Validation**
   - **Question:** Is the evidence strong enough to support opportunities?
   - **Decision Maker:** Agent (flags weak evidence), Human (decides if sufficient)
   - **Risk Level:** MEDIUM

#### Decision Criteria

- Research must have clear methodology and findings
- Insights must be synthesized from multiple sources when possible
- Evidence must be specific and credible (per `04-opportunities/03-opportunities/RULES.md`)
- Use Jobs to Be Done framework to identify customer jobs and circumstances
- Evidence should link to research documents, data, or user feedback

#### Human-in-the-Loop Requirements

- **Research Quality Assessment:** Human review required for research methodology and findings
- **Insight Synthesis:** Agent can suggest insights, human validates
- **Opportunity Creation:** MEDIUM RISK - requires approval
- **Evidence Validation:** Agent can flag weak evidence, human decides if sufficient

#### Agent Capabilities

- Analyze research documents and extract findings
- Suggest insights based on patterns
- Flag weak or insufficient evidence
- Propose opportunities from research (requires approval)
- Link research to existing opportunities

#### Decision Logging

- Research quality assessments must be logged
- Opportunity creation decisions require full decision log
- Evidence validation decisions should be logged when evidence is weak

---

### Stage 3: Opportunity Validation (`04-opportunities/03-opportunities/`)

**Purpose:** Validate opportunities are well-formed and prioritize them appropriately.

#### Decision Points

1. **Opportunity Quality Validation**
   - **Question:** Is this a well-formed opportunity (customer-focused, evidence-based)?
   - **Decision Maker:** Agent (validates format), Human (validates content)
   - **Risk Level:** MEDIUM

2. **Outcome Linking Validation**
   - **Question:** Does this opportunity link to valid outcomes?
   - **Decision Maker:** Agent (checks links), Human (validates relevance)
   - **Risk Level:** MEDIUM

3. **Prioritization**
   - **Question:** Should this opportunity be Active, Backlog, or Archived?
   - **Decision Maker:** Human (makes final decision)
   - **Risk Level:** MEDIUM

4. **Solution Readiness Assessment**
   - **Question:** Is this opportunity ready for solution exploration?
   - **Decision Maker:** Agent (assesses), Human (confirms)
   - **Risk Level:** LOW

#### Decision Criteria

- Must be customer-focused, not solution-focused (per RULES.md)
- Must have at least one piece of evidence
- Must link to at least one product outcome
- Use Jobs to Be Done opportunity scoring: `Opportunity = Importance × (10 − Satisfaction)`
- Validate against Four Product Risks (Value Risk assessment)
- Opportunity score should inform prioritization

#### Human-in-the-Loop Requirements

- **Opportunity Creation/Updates:** MEDIUM RISK - requires approval
- **Prioritization Decisions:** Human decides Active vs Backlog
- **Solution Readiness:** Agent can assess readiness, human confirms

#### Agent Capabilities

- Validate opportunity format (customer-focused, evidence-based)
- Check for required links to outcomes
- Calculate opportunity scores using JTBD formula
- Flag opportunities missing evidence or outcome links
- Suggest prioritization based on scores (human decides)
- Assess solution readiness (human confirms)

#### Decision Logging

- All prioritization decisions must be logged with rationale
- Opportunity creation/updates require decision logs
- Solution readiness assessments should be logged

---

### Stage 4: Solution Exploration (`04-opportunities/04-solutions/`)

**Purpose:** Explore and select solutions that address validated opportunities.

#### Decision Points

1. **Solution Quality Validation**
   - **Question:** Does this solution clearly address the opportunity?
   - **Decision Maker:** Agent (validates format), Human (validates content)
   - **Risk Level:** LOW

2. **Solution Selection**
   - **Question:** Which solution(s) should be pursued?
   - **Decision Maker:** Human (makes final decision)
   - **Risk Level:** MEDIUM

3. **Risk Assessment**
   - **Question:** What are the four product risks for this solution?
   - **Decision Maker:** Agent (assesses), Human (validates critical risks)
   - **Risk Level:** MEDIUM

4. **Validation Planning**
   - **Question:** What experiments are needed to validate assumptions?
   - **Decision Maker:** Agent (suggests), Human (approves)
   - **Risk Level:** LOW

#### Decision Criteria

- Must link to exactly one opportunity
- Must explain how it addresses the opportunity
- Apply Four Product Risks Framework:
  - **Value Risk:** Will customers use it?
  - **Usability Risk:** Can users figure it out?
  - **Feasibility Risk:** Can we build it?
  - **Business Viability Risk:** Does it work for our business?
- Document assumptions that need validation
- Assess implementation considerations (effort, complexity, dependencies)

#### Human-in-the-Loop Requirements

- **Solution Creation:** LOW RISK - can be streamlined but requires selection
- **Solution Selection:** Human decides which solutions to pursue
- **Risk Assessment:** Agent can assess risks, human validates critical risks
- **Validation Planning:** Agent can suggest experiments, human approves

#### Agent Capabilities

- Validate solution format and opportunity linking
- Assess four product risks (flag high-risk areas)
- Suggest validation experiments based on assumptions
- Calculate effort/complexity scores (if criteria defined)
- Cannot make go/no-go decisions autonomously

#### Decision Logging

- Solution selection decisions must be logged
- Risk assessments should be logged, especially for high-risk areas
- Validation planning decisions should be logged

---

### Stage 5: Experiment Design & Execution (`04-opportunities/05-experiments/`)

**Purpose:** Validate solutions through experiments before full implementation.

#### Decision Points

1. **Experiment Design Validation**
   - **Question:** Is the experiment well-designed to test the hypothesis?
   - **Decision Maker:** Agent (suggests design), Human (validates)
   - **Risk Level:** LOW

2. **Experiment Readiness Assessment**
   - **Question:** Is the solution ready for experimentation?
   - **Decision Maker:** Agent (assesses), Human (confirms)
   - **Risk Level:** LOW

3. **Results Interpretation**
   - **Question:** What do the results mean?
   - **Decision Maker:** Agent (analyzes), Human (validates conclusions)
   - **Risk Level:** MEDIUM

4. **Go/No-Go Decision**
   - **Question:** Should we proceed, iterate, or abandon?
   - **Decision Maker:** Human (makes final decision)
   - **Risk Level:** MEDIUM

#### Decision Criteria

- Hypothesis must be clear and testable
- Success criteria must be defined
- Experiment must test key assumptions
- Results must be analyzed objectively
- Decision must be based on evidence

#### Human-in-the-Loop Requirements

- **Experiment Design:** Agent can suggest design, human validates
- **Results Interpretation:** Agent can analyze, human validates conclusions
- **Go/No-Go Decisions:** Human makes final decision based on results

#### Agent Capabilities

- Suggest experiment designs based on assumptions
- Analyze experiment results and flag patterns
- Update validation status in solution documents
- Cannot make go/no-go decisions autonomously

#### Decision Logging

- All go/no-go decisions must be logged with rationale
- Results interpretation should be logged
- Experiment design decisions should be logged

---

### Stage 6: Initiative & Roadmap Inclusion (`02-initiatives/`, `01-strategy/roadmap/`)

**Purpose:** Translate validated solutions into strategic initiatives and roadmap items.

#### Decision Points

1. **Initiative Creation**
   - **Question:** Should this become a strategic initiative?
   - **Decision Maker:** Human (makes final decision)
   - **Risk Level:** HIGH

2. **Roadmap Placement**
   - **Question:** Which roadmap layer and when?
   - **Decision Maker:** Agent (suggests), Human (approves)
   - **Risk Level:** HIGH

3. **Portfolio Prioritization**
   - **Question:** How does this fit in the portfolio?
   - **Decision Maker:** Human (makes final decision)
   - **Risk Level:** HIGH

4. **Resource Allocation**
   - **Question:** What resources are needed?
   - **Decision Maker:** Human (approves resource commitments)
   - **Risk Level:** HIGH

#### Decision Criteria

- Use Innovation Decision Framework for innovation opportunities:
  - Revenue Potential (1-5)
  - Reach & Impact (1-5)
  - Buy-In & Feasibility (1-5)
  - Execution Difficulty (1-5)
- Strategic alignment with roadmap themes
- Portfolio balance (moonshots vs small bets)
- Resource availability

#### Human-in-the-Loop Requirements

- **Initiative Creation:** HIGH RISK - requires explicit approval
- **Roadmap Updates:** HIGH RISK - requires explicit approval
- **Portfolio Prioritization:** Human makes final decisions
- **Resource Allocation:** Human approves resource commitments

#### Agent Capabilities

- Calculate innovation scores using framework
- Suggest roadmap placement based on strategic themes
- Flag resource conflicts or dependencies
- Cannot create initiatives or update roadmaps without approval

#### Decision Logging

- All initiative and roadmap decisions must be logged
- Portfolio prioritization decisions require full decision logs
- Resource allocation decisions should be logged

---

## Decision Logging Requirements

### When to Log Decisions

**Always Log:**
- HIGH/MEDIUM risk decisions
- Prioritization decisions
- Go/no-go decisions
- Initiative and roadmap decisions

**Should Log:**
- LOW risk decisions (can use simplified format)
- Agent decisions (for traceability)
- Decision changes (reconciliation)

### Decision Log Format

See `07-reference/methodology/decision-log-format.md` for detailed format specification.

**Required Fields:**
- Decision ID
- Decision Date
- Decision Type
- Decision Status
- Decision Maker
- Decision
- Rationale
- Supporting Evidence

---

## Agent Decision Authority Matrix

| Stage | Decision Point | Agent Can | Human Must |
|-------|---------------|----------|------------|
| Inbox | Content Classification | Suggest | Validate |
| Inbox | Integration Mapping | Suggest | Approve (HIGH/MEDIUM) |
| Discovery | Research Quality | Flag issues | Validate |
| Discovery | Opportunity Creation | Suggest | Approve |
| Opportunity | Format Validation | Validate | Review |
| Opportunity | Prioritization | Suggest | Decide |
| Solution | Risk Assessment | Assess | Validate critical |
| Solution | Selection | Suggest | Decide |
| Experiment | Design | Suggest | Validate |
| Experiment | Go/No-Go | Analyze | Decide |
| Roadmap | Initiative Creation | Calculate scores | Decide |
| Roadmap | Roadmap Placement | Suggest | Approve |

---

## Integration with Existing Frameworks

This decision framework integrates with:

- **Four Product Risks Framework** (`four-product-risks-framework.md`) - For solution risk assessment
- **Innovation Decision Framework** (`innovation-decision-framework.md`) - For roadmap prioritization
- **Jobs to Be Done Framework** (`jobs-to-be-done-framework.md`) - For opportunity scoring
- **Opportunity Solution Tree Guide** (`opportunity-solution-tree-guide.md`) - For overall flow structure
- **Risk-Based Approval System** (`00-inbox/RULES.md`) - For inbox processing

---

## Related Documents

- [Decision Log Format](./decision-log-format.md) - Decision log structure and templates
- [Idea Kanban Guide](./idea-kanban-guide.md) - Kanban board usage and workflows
- [Four Product Risks Framework](./four-product-risks-framework.md) - Solution risk assessment
- [Innovation Decision Framework](./innovation-decision-framework.md) - Innovation prioritization
- [Jobs to Be Done Framework](./jobs-to-be-done-framework.md) - Opportunity scoring
- [Opportunity Solution Tree Guide](./opportunity-solution-tree-guide.md) - OST framework overview



