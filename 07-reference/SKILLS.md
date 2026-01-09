# PM Skills Library Reference

This document provides a complete reference of all skills available in the Product Brain skills library. Skills are modular, reusable units of PM functionality that power the `agentflow.xxx` commands.

## Skills Overview

| Category | Skills | Purpose |
|----------|--------|---------|
| Triage | 5 | Classify, assess, and route inbox items |
| Research | 7 | Conduct and analyze research |
| Synthesis | 7 | Extract findings and identify patterns |
| Opportunity | 7 | Frame and validate opportunities |
| Solution | 6 | Assess and specify solutions |
| Validation | 6 | Design and analyze experiments |
| Strategy | 6 | Roadmap and strategic alignment |
| Communication | 9 | Stakeholder communications |
| Design | 6 | UX and design specifications |
| Safety Domain | 13 | Forwood-specific safety skills |
| Migration | 6 | Customer migration support |
| Orchestration | 10 | Workflow automation and decisions |

**Total Skills: 88**

---

## Stage-Skill Mapping

For `agentflow.orchestrate` and `agentflow.autonomous`:

| Stage | Name | Primary Skills | Decision Skills |
|-------|------|----------------|-----------------|
| 1 | Inbox Processing | `classify-content-type`, `assess-risk-level`, `route-to-destination` | `batch-decisions` |
| 2 | Insight Extraction | `extract-key-findings`, `identify-patterns`, `create-insight-summary` | - |
| 3 | Research Synthesis | `cross-reference-sources`, `consolidate-themes`, `build-evidence-chain` | - |
| 4 | Opportunity Validation | `frame-opportunity`, `calculate-jtbd-score`, `prioritize-opportunities` | `calculate-decision-confidence`, `apply-decision-policy` |
| 5 | Solution Exploration | `assess-four-risks`, `compare-solutions`, `generate-solution-options` | `calculate-decision-confidence`, `apply-decision-policy` |
| 6 | Experimentation | `design-experiment`, `analyze-experiment-results`, `recommend-go-no-go` | `escalate-to-human` |
| 7 | Roadmap Inclusion | `calculate-innovation-score`, `align-to-strategy`, `create-roadmap-item` | `escalate-to-human` (always) |

---

## Skills by Category

### 1. Triage (`Skills/triage/`)

| Skill | Autonomy | Purpose |
|-------|----------|---------|
| `classify-content-type.md` | Full | Identify content type (Research, Opportunity, etc.) |
| `assess-risk-level.md` | Full | Determine HIGH/MEDIUM/LOW risk for approval |
| `route-to-destination.md` | Supervised | Suggest destination in knowledge base |
| `extract-action-items.md` | Full | Pull actionable items from content |
| `identify-duplicates.md` | Full | Find related or duplicate existing items |

### 2. Research (`Skills/research/`)

| Skill | Autonomy | Purpose |
|-------|----------|---------|
| `conduct-user-research.md` | Supervised | Framework for user interviews and synthesis |
| `analyze-market-data.md` | Full | Competitive and market analysis |
| `analyze-customer-feedback.md` | Full | Process and categorize customer feedback |
| `extract-voc-themes.md` | Full | Extract Voice of Customer themes |
| `extract-jira-insights.md` | Full | Pull insights from Jira data |
| `document-research-findings.md` | Full | Structure research into standard format |
| `identify-research-gaps.md` | Full | Find areas needing more research |

### 3. Synthesis (`Skills/synthesis/`)

| Skill | Autonomy | Purpose |
|-------|----------|---------|
| `extract-key-findings.md` | Full | Pull key findings from research |
| `identify-patterns.md` | Full | Find recurring patterns across sources |
| `cross-reference-sources.md` | Full | Validate findings across multiple sources |
| `create-insight-summary.md` | Full | Synthesize findings into insights |
| `build-evidence-chain.md` | Full | Link evidence to conclusions |
| `consolidate-themes.md` | Full | Group findings into coherent themes |
| `map-pain-to-strategic-theme.md` | Full | Connect pain points to strategic themes |

### 4. Opportunity (`Skills/opportunity/`)

| Skill | Autonomy | Purpose |
|-------|----------|---------|
| `frame-opportunity.md` | Supervised | Structure problem as opportunity |
| `calculate-jtbd-score.md` | Full | Calculate JTBD opportunity score |
| `link-to-outcomes.md` | Full | Connect to product/business outcomes |
| `prioritize-opportunities.md` | Human-Required | Rank opportunities for Active/Backlog |
| `validate-opportunity-format.md` | Full | Ensure template compliance |
| `generate-ost-branch.md` | Supervised | Create OST structure |
| `validate-strategic-alignment.md` | Full | Check alignment to strategic themes |

### 5. Solution (`Skills/solution/`)

| Skill | Autonomy | Purpose |
|-------|----------|---------|
| `assess-four-risks.md` | Supervised | Evaluate Value, Usability, Feasibility, Viability |
| `generate-solution-options.md` | Full | Brainstorm multiple solution approaches |
| `write-prd-section.md` | Supervised | Generate PRD sections |
| `define-acceptance-criteria.md` | Full | Create testable acceptance criteria |
| `create-user-stories.md` | Full | Generate user stories |
| `compare-solutions.md` | Supervised | Trade-off analysis between options |

### 6. Validation (`Skills/validation/`)

| Skill | Autonomy | Purpose |
|-------|----------|---------|
| `design-experiment.md` | Supervised | Create validation experiment |
| `define-success-criteria.md` | Full | Establish measurable thresholds |
| `analyze-experiment-results.md` | Full | Interpret experiment data |
| `recommend-go-no-go.md` | Human-Required | Recommend proceed/iterate/abandon |
| `document-learnings.md` | Full | Capture learnings from experiments |
| `assess-evidence-quality.md` | Full | Rate evidence strength |

### 7. Strategy (`Skills/strategy/`)

| Skill | Autonomy | Purpose |
|-------|----------|---------|
| `articulate-vision.md` | Supervised | Frame product vision statements |
| `create-roadmap-item.md` | Supervised | Structure for roadmap inclusion |
| `calculate-innovation-score.md` | Full | Score innovation potential |
| `align-to-strategy.md` | Full | Map to strategic themes and pillars |
| `balance-portfolio.md` | Supervised | Assess portfolio balance and gaps |
| `sequence-initiatives.md` | Supervised | Determine initiative order |

### 8. Communication (`Skills/communication/`)

| Skill | Autonomy | Purpose |
|-------|----------|---------|
| `write-executive-summary.md` | Full | Create one-page executive summaries |
| `create-executive-risk-brief.md` | Full | Board-level risk summaries |
| `translate-metrics-for-executives.md` | Full | Make technical metrics accessible |
| `prepare-governance-report.md` | Supervised | Board oversight documentation |
| `generate-stakeholder-update.md` | Full | Regular status updates |
| `prepare-presentation-outline.md` | Full | Structure presentations |
| `create-decision-brief.md` | Supervised | Decision documents with options |
| `write-release-notes.md` | Full | User-facing release notes |
| `suggest-one-on-one-topics.md` | Full | 1:1 meeting agenda topics |

### 9. Design (`Skills/design/`)

| Skill | Autonomy | Purpose |
|-------|----------|---------|
| `map-user-journey.md` | Supervised | Create user journey maps |
| `design-information-architecture.md` | Supervised | Structure content and navigation |
| `describe-wireframe.md` | Supervised | Generate wireframe specifications |
| `recommend-ux-patterns.md` | Full | Suggest appropriate UX patterns |
| `create-interaction-spec.md` | Supervised | Document detailed interactions |
| `assess-usability.md` | Full | Evaluate against heuristics |

### 10. Safety Domain (`Skills/safety-domain/`)

| Skill | Theme | Purpose |
|-------|-------|---------|
| `assess-fatal-risk-signal.md` | Theme 1 | Distinguish SIF signals from routine |
| `evaluate-sif-exposure.md` | Theme 1 | Assess SIF risk exposure |
| `design-governance-visibility.md` | Theme 1 | Board-level risk visibility |
| `generate-action-recommendations.md` | Theme 2 | Turn data into specific actions |
| `create-action-workflow.md` | Theme 2 | Design action follow-through |
| `assess-action-completion.md` | Theme 2 | Track action completion |
| `analyze-safety-culture-indicators.md` | Theme 3 | Measure trust and credibility |
| `design-non-blame-system.md` | Theme 3 | Enable truth-telling systems |
| `evaluate-control-effectiveness.md` | Theme 4 | Verify controls actually work |
| `assess-control-vs-audit-gap.md` | Theme 4 | Find paper vs reality gaps |
| `create-shared-framework.md` | Theme 5 | Cross-site consistency |
| `assess-standardization-gaps.md` | Theme 5 | Identify inconsistency |
| `design-consistent-language.md` | Theme 5 | Shared terminology |

### 11. Migration (`Skills/migration/`)

| Skill | Autonomy | Purpose |
|-------|----------|---------|
| `assess-migration-readiness.md` | Supervised | Evaluate customer readiness |
| `create-migration-communication.md` | Full | Customer-facing updates |
| `document-migration-playbook.md` | Supervised | Structure repeatable processes |
| `identify-migration-risks.md` | Full | Find potential blockers |
| `create-migration-timeline.md` | Supervised | Customer-specific schedules |
| `prepare-migration-training.md` | Supervised | Training materials |

### 12. Orchestration (`Skills/orchestration/`)

| Skill | Autonomy | Purpose |
|-------|----------|---------|
| `detect-workflow-stage.md` | Full | Determine current workflow stage |
| `select-next-skill.md` | Full | Choose appropriate skill for context |
| `chain-skills-for-stage.md` | Full | Execute skill sequences |
| `calculate-decision-confidence.md` | Full | Score AI confidence in decisions |
| `apply-decision-policy.md` | Supervised | Apply auto-approval rules |
| `escalate-to-human.md` | Full | Determine when human needed |
| `batch-decisions.md` | Full | Group routine decisions |
| `detect-workflow-state.md` | Full | Read state from kanban + docs |
| `reconcile-kanban-documents.md` | Supervised | Fix status mismatches |
| `suggest-workflow-acceleration.md` | Full | Speed up stalled items |

---

## Autonomy Levels

Skills have three autonomy levels that determine how much human oversight is required:

| Level | Description | Decision Behavior |
|-------|-------------|-------------------|
| **Full** | Can execute autonomously | Auto-execute if confidence ≥90% |
| **Supervised** | Executes with human awareness | Present results, await confirmation |
| **Human-Required** | Cannot proceed without human | Always stop for explicit decision |

---

## Using Skills in Cursor Rules

Add this to `.cursorrules` to help Cursor select appropriate skills:

```
When performing PM work, reference skills in .cursor/commands/Skills/:
- For inbox processing: use triage/ skills
- For research analysis: use research/ + synthesis/ skills
- For opportunity work: use opportunity/ skills
- For solution assessment: use solution/ skills
- For experiments: use validation/ skills
- For roadmap work: use strategy/ skills
- For communications: use communication/ skills
- For design input: use design/ skills
- For safety-specific work: use safety-domain/ skills
- For migration work: use migration/ skills
- For workflow automation: use orchestration/ skills

Always check the skill's Autonomy Level before auto-executing decisions.
```

---

## Commands Using Skills

| Command | Skills Used | Purpose |
|---------|-------------|---------|
| `agentflow.process-inbox` | triage/* | Skills-based inbox processing |
| `agentflow.extract-insights` | synthesis/*, research/* | Skills-based insight extraction |
| `agentflow.identify-opportunities` | opportunity/* | Skills-based opportunity creation |
| `agentflow.assess-solutions` | solution/*, validation/* | Skills-based solution assessment |
| `agentflow.orchestrate` | All categories | Skills-based workflow orchestration |
| `agentflow.autonomous` | All + orchestration/* | Minimal-oversight workflow |

---

## Related Documents

- [[COMMANDS-COMPARISON.md]] - pm.xxx vs agentflow.xxx
- [[07-reference/methodology/decision-framework.md]] - Decision framework
- [[07-reference/methodology/opportunity-solution-tree-guide.md]] - OST guide


