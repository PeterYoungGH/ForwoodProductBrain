# Jobs to Be Done Framework

A framework for understanding the progress customers are trying to make, enabling design of solutions, messaging, and roadmaps that align to real needs.

**Last Updated:** 2025-12-01  
**Source:** [Inbox Item: Jobs to Be Done](../../00-inbox/raw/2025-11-28-jobs-to-be-done-[PROCESSING].md)

---

## Purpose

Use JTBD to understand the progress customers are trying to make, so you can design solutions, messaging, and roadmaps that align to real needs.

---

## TL;DR

- People **hire** products to make progress in a **specific circumstance**
- Capture jobs as **job stories** and **desired outcomes**; validate via interviews with **switchers** (people who changed tools)
- Prioritize by opportunity: important outcomes with high struggle

---

## Core Concepts

### Job

The progress someone seeks (independent of your product).

### Circumstance

Contexts that shape the job (time, place, constraints, triggers).

### Forces of Progress

- **Push** — Problem pain (what's frustrating about current state)
- **Pull** — Appeal of a new solution (what's attractive about alternatives)
- **Anxieties** — Fears and unknowns (what could go wrong)
- **Habits** — Inertia of current solution (why change is hard)

### Types of Jobs

- **Functional** — Do a task
- **Emotional** — Feel a certain way
- **Social** — Look a certain way to others
- **Consumption Chain** — Buying, installing, learning, maintaining

---

## Job Story Format

```
When [situation/circumstance], I want to [motivation/intent], 
so I can [expected outcome/progress].
```

### Example

> When starting a new project with multiple stakeholders, I want to align on the critical risks in under 30 minutes, so I can kick off work confidently and avoid rework.

---

## Desired Outcomes (Measurable)

Write outcomes in **solution-agnostic, measurable terms**:

- Minimize the time it takes to ______
- Reduce the variability of ______
- Increase the likelihood that ______
- Reduce the effort/risk of ______

### Good vs. Bad Examples

**❌ Bad:** "Have a better dashboard"

**✅ Good:** "Reduce time to spot overdue verifications to < 2 minutes"

---

## Research: How to Discover Jobs

### 1. Recruit Switchers

People who **recently adopted, switched, or abandoned** a solution.

### 2. Timeline Interview

Map the journey:
- First thought → Passive looking → Active looking → Deciding → Onboarding → First value

### 3. Elicit the Forces

Ask what:
- Pushed them (pain)
- Pulled them (appeal)
- They worried about (anxieties)
- Resisted change (habits)

### 4. Extract Artifacts

Job stories, outcomes, triggers, anxieties, competitor "hiring criteria".

### High-Leverage Prompts

- "What was going on in your world when this became important?"
- "What else did you try, and why wasn't that good enough?"
- "What nearly stopped you from switching?"

---

## Synthesis & Prioritization

### Cluster by Circumstance

Jobs often differ by context, not persona.

### Job Map (Optional)

Define stages and attach outcomes to each:

*Example CRM flow:* Define → Locate → Prepare → Execute → Verify → Report → Evolve

### Opportunity Scoring

Prioritize outcomes that are **high importance** and **poorly satisfied** today.

**Simple Score Formula:**
```
Opportunity = Importance × (10 − Satisfaction)
```

| Outcome | Importance | Satisfaction | Opportunity |
|---------|-----------|--------------|-------------|
| Reduce time to align stakeholders | 9 | 4 | 54 |
| Increase verification compliance | 8 | 3 | 56 |
| Reduce verification time variance | 7 | 5 | 35 |

---

## Applying JTBD in Delivery

### Roadmap

Organize epics by job/outcome, not features.

### Design

Prototype to reduce the **struggle** in the highest-opportunity outcomes.

### Messaging

Speak to the job and circumstance:
> "When you're about to start X, get Y done in Z minutes."

### Metrics

Track success with **outcome KPIs** (e.g., time-to-first-verification, variance in completion time, % successful handoffs).

---

## Anti-Patterns to Avoid

- ❌ Treating jobs as personas or industries
- ❌ Writing outcomes as features ("Add AI assistant")
- ❌ Ignoring circumstance (jobs change with context)
- ❌ Over-indexing on opinions; rely on **switcher evidence**

---

## Artifacts & Templates

### Job Card Template

```yaml
job_id: JTBD-001

name: "Align stakeholders on critical risks quickly"

circumstance: |
  Project kickoff with cross-functional team; tight deadlines

job_story: |
  When starting a new project with multiple stakeholders, I want to align on 
  the critical risks in under 30 minutes, so I can kick off confidently and 
  avoid rework.

forces:
  push:
    - Manual collating takes hours
    - Missed risks cause delays
  pull:
    - One-page alignment summary
    - Live risk map
  anxieties:
    - Will it be accurate?
    - Will others adopt it?
  habits:
    - Spreadsheet templates
    - Email threads

desired_outcomes:
  - Reduce time to compile risks to <30 minutes
  - Increase % of stakeholders aligned in first meeting to >90%
  - Reduce rework caused by risk misalignment by 50%

current_alternatives:
  - Spreadsheets
  - Email
  - Generic PM tools

importance_10pt: 9

satisfaction_10pt: 4

opportunity_score: 9 * (10 - 4) = 54

evidence:
  - 5 switcher interviews
  - Support tickets tagged 'kickoff'

notes: |
  Differs for small vs large projects; map separate circumstances.
```

---

## Integration with Prototyping Workflow

JTBD complements other frameworks by:

- **Grounding design in real progress** the user seeks (not what you think they need)
- **Validating opportunity** before investing in solutions
- **Defining outcome metrics** that align to user success, not feature adoption
- **Informing messaging and go-to-market** that resonates with actual motivations

Use JTBD alongside:
- **[Four Risks Framework](./four-product-risks-framework.md)** — to validate that solutions address real jobs
- **[Product Delight Checklist](./product-delight-checklist.md)** — to design experiences that reduce struggle in the job
- **[Discovery Process](./discovery-process.md)** — to ground job discovery in research

---

## Related Documents

- [Four Product Risks Framework](./four-product-risks-framework.md)
- [Product Delight Checklist](./product-delight-checklist.md)
- [Discovery Process](./discovery-process.md)
- [Product Experience Score Framework](./product-experience-score-framework.md)

