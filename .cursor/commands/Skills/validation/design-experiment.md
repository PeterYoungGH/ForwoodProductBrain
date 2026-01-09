# Design Experiment

**Category:** Validation
**Strategic Theme:** N/A
**Autonomy Level:** Supervised
**Workflow Stages:** 6 (Experimentation)

## Purpose

Create an experiment with a clear hypothesis and metrics to validate solution assumptions before full implementation.

## Inputs Required

- **Solution:** The solution being validated
- **Risk Assessment:** Four Risks assessment with key assumptions
- **Resources:** Available time, budget, participants
- **Constraints:** Limitations on experiment scope

## Process Steps

### Step 1: Identify Riskiest Assumption

From the Four Risks assessment, identify:
- Which assumption is riskiest?
- What happens if this assumption is wrong?
- Can we test this before building?

### Step 2: Form Hypothesis

Structure the hypothesis:

**Format:** "We believe that [action/change] will result in [outcome] for [users]. We will know this is true when [metric] changes by [threshold]."

**Example:** "We believe that showing a fatal risk score will result in safety managers prioritizing high-risk areas first. We will know this is true when 80% of users address top-scored risks before lower-scored risks."

### Step 3: Select Experiment Type

Choose the right experiment:

| Type | Best For | Effort | Confidence |
|------|----------|--------|------------|
| User Interview | Value validation | Low | Medium |
| Prototype Test | Usability validation | Medium | High |
| Fake Door | Demand validation | Low | Medium |
| A/B Test | Behavior validation | High | High |
| Wizard of Oz | Feasibility exploration | Medium | Medium |
| Concierge | Service validation | Medium | High |
| Pilot | Full validation | High | High |

### Step 4: Define Success Criteria

Specify what success looks like:
- **Primary Metric:** Main measure of success
- **Target:** Specific threshold to hit
- **Secondary Metrics:** Supporting measures
- **Guardrails:** Metrics that shouldn't decrease

### Step 5: Design Experiment Details

Specify the experiment:
- **Participants:** Who, how many, how recruited
- **Duration:** How long to run
- **Method:** Step-by-step process
- **Data Collection:** What to measure and how
- **Analysis Plan:** How to interpret results

### Step 6: Identify Go/No-Go Criteria

Define decision criteria:
- **Go:** [Threshold for proceeding]
- **Iterate:** [Threshold for refinement]
- **No-Go:** [Threshold for abandoning]

## Output Format

```markdown
# Experiment: [Experiment Name]

**Solution:** [[solution-link]]
**Assumption Being Tested:** [The assumption]
**Date Designed:** YYYY-MM-DD
**Status:** [Planned | Active | Complete]

## Hypothesis

We believe that **[action/change]**
will result in **[outcome]**
for **[users]**.

We will know this is true when **[metric]** changes by **[threshold]**.

## Experiment Design

### Type
[Experiment type] - [Why this type was chosen]

### Target Participants
- **Who:** [Participant description]
- **How Many:** [Number needed for significance]
- **Recruitment:** [How to find participants]

### Duration
- **Start:** YYYY-MM-DD
- **End:** YYYY-MM-DD
- **Active Period:** [X days/weeks]

### Method

**Setup:**
1. [Setup step 1]
2. [Setup step 2]

**Execution:**
1. [Execution step 1]
2. [Execution step 2]
3. [Execution step 3]

**Data Collection:**
1. [What data to collect]
2. [How to collect it]
3. [When to collect it]

## Success Criteria

### Primary Metric
**Metric:** [What we're measuring]
**Current Baseline:** [Current value, if known]
**Target:** [Success threshold]
**Measurement Method:** [How measured]

### Secondary Metrics
| Metric | Baseline | Target | Method |
|--------|----------|--------|--------|
| [Metric 1] | [Value] | [Target] | [How] |
| [Metric 2] | [Value] | [Target] | [How] |

### Guardrail Metrics
| Metric | Current | Minimum Acceptable |
|--------|---------|-------------------|
| [Metric] | [Value] | [Don't go below] |

## Go/No-Go Criteria

| Outcome | Criteria | Action |
|---------|----------|--------|
| **Go** | Primary metric ≥ [X], guardrails maintained | Proceed to implementation |
| **Iterate** | Primary metric [Y-X], insights suggest path | Refine solution, re-test |
| **No-Go** | Primary metric < [Y] or guardrails violated | Abandon solution, return to opportunity |

## Resources Required

| Resource | Amount | Notes |
|----------|--------|-------|
| Time | [Hours/Days] | [Who needs to spend time] |
| Budget | [Amount] | [What it's for] |
| Participants | [Number] | [Recruitment cost/effort] |
| Tools | [List] | [Any special tools needed] |

## Risks & Mitigations

| Risk | Mitigation |
|------|------------|
| [Risk 1] | [How to address] |
| [Risk 2] | [How to address] |

## Results (Complete After Experiment)

### Data Collected
[Summary of data]

### Results
| Metric | Target | Actual | Verdict |
|--------|--------|--------|---------|
| Primary | [X] | [Y] | ✅/❌ |
| Secondary 1 | [X] | [Y] | ✅/❌ |
| Guardrail 1 | ≥[X] | [Y] | ✅/❌ |

### Outcome
**Verdict:** [Go | Iterate | No-Go]
**Confidence:** [High | Medium | Low]

### Learnings
- [Learning 1]
- [Learning 2]

## Related Documents

- [[Solution]]
- [[Opportunity]]
- [[Risk Assessment]]
```

## Confidence Scoring

- **High:** Clear hypothesis, measurable criteria, appropriate method
- **Medium:** Good design, some measurement challenges
- **Low:** Exploratory, unclear criteria

## Example

**Input:** Solution "Fatal risk dashboard" with value risk assumption that users will prioritize high-risk areas.

**Output:** Prototype test experiment with 10 safety managers, measuring risk addressing sequence, with Go criteria of 80% prioritizing top risks.

## Related Skills

- [[assess-four-risks]] - Identifies assumptions to test
- [[define-success-criteria]] - Creates metrics
- [[analyze-experiment-results]] - Processes results

## Used By Commands

- `agentflow.orchestrate` - Stage 6 experiment design
- `agentflow.autonomous` - Creates experiments automatically


