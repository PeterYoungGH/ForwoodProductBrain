# Define Success Criteria

**Category:** Validation
**Strategic Theme:** N/A
**Autonomy Level:** Full
**Workflow Stages:** 6 (Experimentation)

## Purpose

Establish measurable success thresholds for experiments, initiatives, or features that define when objectives are met.

## Inputs Required

- **Objective:** What we're trying to achieve
- **Context:** Experiment, initiative, or feature
- **Baseline Data:** Current state metrics
- **Benchmarks:** Industry or historical comparisons

## Process Steps

### Step 1: Identify What Success Means

Define success qualitatively:
- What does success look like?
- How would users describe success?
- What business outcome indicates success?

### Step 2: Select Primary Metric

Choose one primary metric:
- Most directly measures success
- Can be measured reliably
- Has clear baseline

**Good Primary Metrics:**
- User behavior (completion rate, adoption)
- Business outcome (revenue, retention)
- User satisfaction (NPS, CSAT)
- Performance (speed, accuracy)

### Step 3: Set Target Threshold

Determine the success threshold:
- **Baseline:** Current state
- **Minimum Viable:** Lowest acceptable improvement
- **Target:** Expected improvement
- **Stretch:** Aspirational improvement

Use data to inform targets:
- Historical trends
- Industry benchmarks
- Statistical significance requirements
- Business requirements

### Step 4: Define Secondary Metrics

Select supporting metrics:
- Validate the primary metric
- Catch unintended consequences
- Provide diagnostic insight

### Step 5: Set Guardrail Metrics

Identify metrics that shouldn't decrease:
- User experience metrics
- System performance
- Business health indicators

### Step 6: Specify Measurement Method

For each metric:
- How will it be measured?
- When will it be measured?
- Who will measure it?
- What tool will be used?

## Output Format

```markdown
## Success Criteria: [Objective Name]

**Context:** [Experiment | Initiative | Feature]
**Date Defined:** YYYY-MM-DD

### Success Definition

**Qualitative Success:**
[What success looks like in words]

**User Perspective:**
[How users would describe success]

### Primary Metric

**Metric:** [Metric name]
**Definition:** [Exactly what this measures]

| Level | Value | Rationale |
|-------|-------|-----------|
| Baseline | [Current] | [Source of baseline] |
| Minimum Viable | [X] | [Why this is minimum] |
| Target | [Y] | [Why this is target] |
| Stretch | [Z] | [Why this is aspirational] |

**Measurement:**
- **Method:** [How measured]
- **Frequency:** [How often]
- **Tool:** [What tool]
- **Owner:** [Who measures]

### Secondary Metrics

| Metric | Baseline | Target | Purpose |
|--------|----------|--------|---------|
| [Metric 1] | [Value] | [Target] | [Why included] |
| [Metric 2] | [Value] | [Target] | [Why included] |

### Guardrail Metrics

| Metric | Current | Minimum Acceptable | Alert Threshold |
|--------|---------|-------------------|-----------------|
| [Metric 1] | [Value] | [Floor] | [When to worry] |
| [Metric 2] | [Value] | [Floor] | [When to worry] |

### Success Scenarios

**Full Success:**
- Primary metric ≥ Target
- All secondary metrics ≥ Targets
- All guardrails maintained

**Partial Success:**
- Primary metric ≥ Minimum Viable
- Some secondary metrics hit
- Guardrails maintained

**Failure:**
- Primary metric < Minimum Viable
- OR any guardrail violated

### Timeline

**Measurement Start:** [Date]
**Measurement End:** [Date]
**Results Review:** [Date]

### Dependencies

**Requires for Measurement:**
- [Data source 1]
- [Tool access]
- [Participant availability]

### Notes

- [Additional context]
- [Known limitations]

## Related Documents

- [[Experiment]]
- [[Initiative]]
- [[Metrics Dashboard]]
```

## Confidence Scoring

- **High:** Clear metrics, baseline data, measurable targets
- **Medium:** Good metrics, some baseline uncertainty
- **Low:** Metrics unclear, targets are estimates

## Example

**Input:** Experiment testing fatal risk dashboard adoption.

**Output:** Success criteria with primary metric "% of users who check dashboard daily" (baseline: 0%, target: 60%, minimum: 40%), secondary metrics for time-to-insight and risk coverage, guardrails for existing workflow completion.

## Related Skills

- [[design-experiment]] - Uses success criteria
- [[analyze-experiment-results]] - Measures against criteria
- [[calculate-jtbd-score]] - Similar scoring approach

## Used By Commands

- `agentflow.orchestrate` - Stage 6 criteria definition
- `agentflow.autonomous` - Automated criteria setting


