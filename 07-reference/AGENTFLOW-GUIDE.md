# Agentflow Commands Guide

This guide explains how to use the `agentflow.xxx` commands in the right order and context for your Product Management workflow.

## Overview

The agentflow commands are skills-based alternatives to the `pm.xxx` commands. They process work through a 7-stage workflow, with each command handling specific stages:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         PRODUCT WORKFLOW STAGES                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  Stage 1        Stage 2-3       Stage 4         Stage 5        Stage 6-7   │
│  ┌─────────┐   ┌─────────┐    ┌──────────┐    ┌──────────┐   ┌──────────┐  │
│  │ INBOX   │──▶│ INSIGHTS│───▶│OPPORTUNITY│──▶│ SOLUTION │──▶│ VALIDATE │  │
│  │         │   │         │    │          │    │          │   │ & SHIP   │  │
│  └─────────┘   └─────────┘    └──────────┘    └──────────┘   └──────────┘  │
│       │             │              │               │              │        │
│       ▼             ▼              ▼               ▼              ▼        │
│  agentflow.    agentflow.     agentflow.      agentflow.     agentflow.   │
│  process-      extract-       identify-       assess-        orchestrate  │
│  inbox         insights       opportunities   solutions      (Stage 6-7)  │
│                                                                            │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Quick Start

### Option 1: Process Step-by-Step (Recommended for Learning)

Run each command individually as you progress through stages:

```
1. @agentflow.process-inbox              ← Start here
2. @agentflow.extract-insights           ← After processing inbox
3. @agentflow.identify-opportunities     ← After extracting insights
4. @agentflow.assess-solutions           ← After validating opportunities
5. Continue with agentflow.orchestrate   ← For experiments and roadmap
```

### Option 2: Orchestrated Workflow (Recommended for Efficiency)

Let the orchestrator handle the full flow:

```
@agentflow.orchestrate
```

### Option 3: Autonomous Mode (Recommended for Volume)

Minimal oversight with auto-decisions:

```
@agentflow.autonomous level:1
```

---

## Detailed Command Guide

### 1. `agentflow.process-inbox`

**When to Use:** You have new items in `00-inbox/raw/` that need processing.

**What It Does:**
- Classifies each item (Research, Opportunity, Feedback, etc.)
- Assesses risk level (HIGH/MEDIUM/LOW)
- Checks for duplicates
- Extracts action items
- Suggests destination and routing

**How to Run:**

```bash
# Process all inbox items
@agentflow.process-inbox

# Process a specific item
@agentflow.process-inbox 00-inbox/raw/2026-01-08-customer-feedback-[INBOX].md
```

**What You'll See:**
```
## Inbox Processing Results

### Item 1: Customer Feedback from Rossing
- **Type:** Feedback (→ Research)
- **Risk:** MEDIUM
- **Duplicates:** Related to [[rossing-meeting-notes]]
- **Actions:** 2 action items extracted
- **Route to:** 03-discovery/research/user-research/

🔶 MEDIUM RISK - Approve routing?
```

**Your Decision:**
- Approve routing (individually or batch for LOW risk)
- Modify destination
- Archive if not relevant

**Next Step:** After processing, run `agentflow.extract-insights` on any research documents created.

---

### 2. `agentflow.extract-insights`

**When to Use:** You have research documents that need insight extraction.

**What It Does:**
- Extracts key findings with evidence
- Identifies patterns across findings
- Maps pain points to strategic themes
- Extracts VoC themes if customer data
- Creates insight documents

**How to Run:**

```bash
# Extract from all unprocessed research
@agentflow.extract-insights

# Extract from specific research
@agentflow.extract-insights 03-discovery/research/user-research/2026-01-08-rossing-feedback.md

# Extract from a directory
@agentflow.extract-insights 03-discovery/research/user-research/
```

**What You'll See:**
```
## Insight Extraction: Rossing Feedback

### Key Findings
1. **Users struggle to find features** (High confidence)
   Evidence: "I spend 10 minutes looking for things every time"

2. **Mobile performance is frustrating** (High confidence)
   Evidence: "It's so slow on site I just give up"

### Patterns Identified
- Navigation confusion (3 findings)
- Performance issues (2 findings)

### Theme Alignment
- Theme 2 (Data to Action): Strong alignment
- Theme 3 (Credibility): Moderate alignment

### Insights Created
- [[03-discovery/insights/2026-01-08-rossing-ux-insights.md]]
```

**Your Decision:**
- Accept insights as extracted
- Modify or add insights
- Request deeper analysis

**Next Step:** After extracting insights, run `agentflow.identify-opportunities` to create opportunities.

---

### 3. `agentflow.identify-opportunities`

**When to Use:** You have insights that reveal customer problems worth solving.

**What It Does:**
- Frames problems as opportunity statements
- Calculates JTBD opportunity scores
- Links opportunities to product/business outcomes
- Validates strategic alignment
- Generates OST branch structure
- Prioritizes opportunities

**How to Run:**

```bash
# Create opportunities from all unlinked insights
@agentflow.identify-opportunities from-insights

# Create from a specific insight
@agentflow.identify-opportunities 03-discovery/insights/2026-01-08-rossing-ux-insights.md

# Explore a specific theme
@agentflow.identify-opportunities "mobile navigation confusion"
```

**What You'll See:**
```
## Opportunity Identification

### Opportunity Created: Mobile Navigation Clarity

**Statement:**
Safety managers struggle to find features on mobile because navigation 
is inconsistent with desktop, which results in reduced adoption and 
workarounds.

**JTBD Score:** 14/20 (High Priority)
- Importance: 8/10
- Satisfaction: 2/10

**Theme Alignment:** Theme 2 (Strong), Theme 3 (Moderate)

**Outcome Links:**
- Product: Improve mobile adoption rate
- Business: Forwood One platform success

### 🔴 PRIORITIZATION DECISION REQUIRED

| Opportunity | Score | Recommendation |
|-------------|-------|----------------|
| Mobile Navigation | 14 | → Active |
| Dashboard Performance | 12 | → Active |
| Reporting Export | 8 | → Backlog |

Approve prioritization?
```

**Your Decision:**
- Approve Active/Backlog assignments
- Adjust prioritization
- Archive low-value opportunities

**Next Step:** For Active opportunities, run `agentflow.assess-solutions` to explore solutions.

---

### 4. `agentflow.assess-solutions`

**When to Use:** You have Active opportunities that need solution exploration.

**What It Does:**
- Generates solution options (if none exist)
- Assesses each solution using Four Risks framework
- Compares solutions with trade-off analysis
- Designs validation experiments
- Optionally generates user stories and acceptance criteria

**How to Run:**

```bash
# Find opportunities needing solutions
@agentflow.assess-solutions active-opportunities

# Assess solutions for a specific opportunity
@agentflow.assess-solutions 04-opportunities/03-opportunities/active/mobile-navigation.md

# Assess a specific solution
@agentflow.assess-solutions 04-opportunities/04-solutions/proposed/redesigned-nav.md
```

**What You'll See:**
```
## Solution Assessment: Mobile Navigation

### Solution Options Generated
1. **Redesigned Navigation** - Complete nav overhaul (High complexity)
2. **Quick Access Toolbar** - Add floating toolbar (Medium complexity)  
3. **Training & Hints** - In-app guidance (Low complexity)

### Four Risks Assessment: Redesigned Navigation

| Risk | Score | Assessment |
|------|-------|------------|
| Value | 4/5 | Strong VoC support |
| Usability | 2/5 | Untested, high risk |
| Feasibility | 3/5 | Technical unknowns |
| Viability | 4/5 | Aligned to strategy |

**Highest Risk:** Usability (needs validation)

### Solution Comparison

| Solution | Value | Usability | Feasibility | Viability | Total |
|----------|-------|-----------|-------------|-----------|-------|
| Redesigned Nav | 4 | 2 | 3 | 4 | 6.8 |
| Quick Access | 3 | 4 | 4 | 4 | 7.2 |
| Training | 2 | 4 | 5 | 3 | 6.0 |

**Recommendation:** Quick Access Toolbar (lowest risk, fast to validate)

### Experiment Design
**Hypothesis:** Adding a quick access toolbar will reduce time-to-feature by 50%
**Method:** Prototype test with 10 users
**Success Criteria:** 80% find features faster

### 🔴 SOLUTION SELECTION REQUIRED

Options:
1. [ ] Pursue Quick Access Toolbar (recommended)
2. [ ] Pursue Redesigned Navigation
3. [ ] Run experiment before deciding
4. [ ] Need more information
```

**Your Decision:**
- Select solution(s) to pursue
- Approve experiment design
- Request more options

**Next Step:** For selected solutions, use `agentflow.orchestrate` to run experiments and proceed to roadmap.

---

### 5. `agentflow.orchestrate`

**When to Use:** You want the full workflow with skill-based processing and human decisions at each stage.

**What It Does:**
- Detects current workflow stage of each item
- Selects appropriate skills for the stage
- Executes skill chains
- Stops at decision points for human input
- Updates kanban and documents
- Reconciles any mismatches

**How to Run:**

```bash
# Orchestrate all items needing processing
@agentflow.orchestrate

# Orchestrate a specific item through stages
@agentflow.orchestrate 04-opportunities/03-opportunities/active/mobile-navigation.md

# Start from a specific stage
@agentflow.orchestrate stage:5
```

**What You'll See:**
```
## Workflow Orchestration

### Pre-Flight Check
✅ Kanban state read
✅ Documents scanned
⚠️ 1 mismatch found and reconciled

### Items to Process

| Item | Current Stage | Next Action |
|------|---------------|-------------|
| Mobile Navigation | Stage 5 | Design experiment |
| Dashboard Performance | Stage 4 | Prioritize |
| Inbox Item #3 | Stage 1 | Classify |

### Processing: Mobile Navigation (Stage 5)

**Skills Executing:**
1. design-experiment ✓
2. define-success-criteria ✓

**Result:**
Experiment designed: Prototype test with 10 users

### 🔴 DECISION POINT: Experiment Approval

Approve experiment design?
[ ] Yes, proceed to run
[ ] Modify experiment
[ ] Skip to next item
```

**Your Decisions:**
At each stage, you'll be asked to make decisions:
- **Stage 4:** Opportunity prioritization (Active/Backlog/Archive)
- **Stage 5:** Solution selection
- **Stage 6:** Go/No-Go after experiment
- **Stage 7:** Roadmap inclusion

---

### 6. `agentflow.autonomous`

**When to Use:** You want minimal oversight with confidence-based auto-decisions.

**What It Does:**
Everything `agentflow.orchestrate` does, plus:
- Calculates decision confidence
- Auto-approves LOW risk decisions at high confidence
- Batches routine decisions
- Only escalates when necessary

**How to Run:**

```bash
# Level 1: Supervised (default) - Auto LOW risk, escalate MEDIUM/HIGH
@agentflow.autonomous level:1

# Level 2: Trusted - Auto LOW+MEDIUM, escalate HIGH only
@agentflow.autonomous level:2

# Level 3: Full Autonomous - Auto all at confidence threshold
@agentflow.autonomous level:3

# Dry run (simulate without making changes)
@agentflow.autonomous level:2 dry-run:true

# Process only inbox
@agentflow.autonomous level:1 items:inbox
```

**What You'll See:**
```
## Autonomous Workflow Run

### Autonomy Level: 1 (Supervised)
### Confidence Threshold: 85%

### Auto-Approved Decisions (5)
| Item | Decision | Confidence | Rationale |
|------|----------|------------|-----------|
| Inbox #1 | Route to research | 92% | Clear classification, LOW risk |
| Inbox #2 | Route to feedback | 88% | Clear classification, LOW risk |
| ...

### Batch Awaiting Approval (3)
LOW risk items with 70-84% confidence:
- [ ] Approve all
- [ ] Review individually

| Item | Decision | Confidence |
|------|----------|------------|
| Inbox #3 | Route to opportunity | 78% |
| Inbox #4 | Route to research | 72% |
| Inbox #5 | Archive | 75% |

### Requiring Human Decision (2)

#### Item: Mobile Navigation Opportunity
**Risk Level:** MEDIUM
**Decision Needed:** Prioritization
**AI Recommendation:** Move to Active (Score: 14, Strong evidence)
**Confidence:** 82%

Options:
[ ] Accept recommendation
[ ] Override: Move to Backlog
[ ] Override: Archive

### Summary
- Auto-approved: 5
- Batched: 3
- Escalated: 2
- Stalled items flagged: 1
```

---

## Workflow Scenarios

### Scenario 1: Daily Inbox Triage

**Goal:** Process morning inbox quickly

```bash
# Quick triage with batch approval
@agentflow.autonomous level:1 items:inbox
```

### Scenario 2: Deep Research Analysis

**Goal:** Extract insights from multiple research documents

```bash
# Process all research, cross-reference
@agentflow.extract-insights 03-discovery/research/
```

### Scenario 3: Opportunity Review Session

**Goal:** Create and prioritize opportunities

```bash
# Create from insights, prioritize
@agentflow.identify-opportunities from-insights
```

### Scenario 4: Solution Selection Meeting

**Goal:** Evaluate solutions for active opportunity

```bash
# Full assessment with comparison
@agentflow.assess-solutions 04-opportunities/03-opportunities/active/[opportunity].md
```

### Scenario 5: End-to-End Processing

**Goal:** Process an item from inbox to roadmap

```bash
# Full orchestration with decision points
@agentflow.orchestrate 00-inbox/raw/[item].md
```

### Scenario 6: Weekly Workflow Cleanup

**Goal:** Process backlog, find stalled items

```bash
# Autonomous with acceleration suggestions
@agentflow.autonomous level:1
```

---

## Decision Points Reference

| Stage | Decision | Risk Level | Can Auto-Approve? |
|-------|----------|------------|-------------------|
| 1 | Routing | LOW | Yes (≥85% confidence) |
| 1 | Routing | MEDIUM | Level 2+ only |
| 4 | Prioritization | MEDIUM | Level 2+ at 95%+ |
| 5 | Solution Selection | MEDIUM | Level 2+ at 95%+ |
| 6 | Go/No-Go | HIGH | Never |
| 7 | Roadmap | HIGH | Never |

---

## Tips for Success

### Start Slow, Build Trust
1. Begin with `agentflow.process-inbox` on a few items
2. Move to `agentflow.orchestrate` once comfortable
3. Try `agentflow.autonomous level:1` after trust is built
4. Only use level:2+ when you've validated decisions

### Review Auto-Decisions
- Check the auto-approval log regularly
- Spot-check decisions for quality
- Adjust confidence thresholds if needed

### Use Dry Runs
```bash
@agentflow.autonomous level:2 dry-run:true
```
See what would happen without making changes.

### Combine with pm.xxx
- Use `agentflow.xxx` for routine work
- Use `pm.xxx` for edge cases or when you want full control
- Both systems work on the same documents

---

## Troubleshooting

### "No items to process"
- Check inbox has items with `[INBOX]` suffix
- Check kanban for items in processing columns
- Run `@agentflow.orchestrate` to detect workflow state

### "Kanban mismatch"
The system auto-reconciles, but if you see frequent mismatches:
- Check you're updating kanban after decisions
- Run `@agentflow.orchestrate` to reconcile

### "Low confidence on everything"
This means evidence is weak:
- Review research quality
- Add more VoC quotes
- Run additional research

---

## Related Documents

- [[SKILLS.md]] - Complete skills reference
- [[COMMANDS-COMPARISON.md]] - pm.xxx vs agentflow.xxx
- [[07-reference/methodology/decision-framework.md]] - Decision framework


