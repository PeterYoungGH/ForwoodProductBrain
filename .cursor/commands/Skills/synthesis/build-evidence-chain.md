# Build Evidence Chain

**Category:** Synthesis
**Strategic Theme:** N/A
**Autonomy Level:** Full
**Workflow Stages:** 2, 3, 4 (Insight Extraction, Research Synthesis, Opportunity Validation)

## Purpose

Link evidence to conclusions through a traceable chain, strengthening the connection between raw data and strategic decisions.

## Inputs Required

- **Evidence Items:** Raw data, quotes, observations
- **Conclusions:** Insights, findings, or decisions to support
- **Sources:** Where evidence came from
- **Existing Chains:** Any previously built chains

## Process Steps

### Step 1: Inventory Evidence

Catalog all available evidence:
- Direct quotes from customers
- Quantitative data points
- Observations from research
- Patterns identified
- External references (market data, benchmarks)

### Step 2: Categorize Evidence Types

Classify each piece of evidence:

| Type | Description | Strength |
|------|-------------|----------|
| Direct Quote | Verbatim customer words | High |
| Behavioral Data | What users actually did | High |
| Survey Response | Structured feedback | Medium |
| Anecdote | Single story/example | Low |
| Expert Opinion | Professional judgment | Medium |
| Market Data | External benchmarks | Medium |
| Assumption | Untested belief | None (flag) |

### Step 3: Map Evidence to Conclusions

For each conclusion:
- List all supporting evidence
- List any contradicting evidence
- Identify gaps in evidence
- Rate overall support level

### Step 4: Build Chain Structure

Create explicit links:

```
Level 1: Raw Evidence
    ↓
Level 2: Findings (interpretations of evidence)
    ↓
Level 3: Insights (synthesis of findings)
    ↓
Level 4: Conclusions (strategic implications)
    ↓
Level 5: Decisions (actions based on conclusions)
```

### Step 5: Assess Chain Strength

Evaluate each chain:
- **Strong Chain:** Multiple independent evidence sources, consistent findings, logical progression
- **Moderate Chain:** Some evidence, mostly consistent, minor gaps
- **Weak Chain:** Limited evidence, gaps, requires assumptions
- **Broken Chain:** Missing links, contradictions, needs more research

## Output Format

```markdown
# Evidence Chain: [Conclusion/Decision]

**Target Conclusion:** [What we're trying to support]
**Date Built:** YYYY-MM-DD
**Chain Strength:** [Strong | Moderate | Weak | Broken]

## Chain Visualization

```
┌─────────────────────────────────────────────────────┐
│ DECISION: [Action to take]                          │
└─────────────────────┬───────────────────────────────┘
                      │ supported by
┌─────────────────────▼───────────────────────────────┐
│ CONCLUSION: [Strategic implication]                 │
└─────────────────────┬───────────────────────────────┘
                      │ derived from
┌─────────────────────▼───────────────────────────────┐
│ INSIGHT: [Synthesis statement]                      │
└──────────┬────────────────────────────┬─────────────┘
           │                            │
┌──────────▼──────────┐    ┌───────────▼─────────────┐
│ FINDING 1           │    │ FINDING 2               │
│ [Interpretation]    │    │ [Interpretation]        │
└──────────┬──────────┘    └───────────┬─────────────┘
           │                            │
┌──────────▼──────────┐    ┌───────────▼─────────────┐
│ EVIDENCE A, B       │    │ EVIDENCE C, D           │
│ [Raw data/quotes]   │    │ [Raw data/quotes]       │
└─────────────────────┘    └─────────────────────────┘
```

## Evidence Inventory

### Level 1: Raw Evidence

| ID | Evidence | Type | Source | Strength |
|----|----------|------|--------|----------|
| E1 | "[Quote]" | Direct Quote | [[source]] | High |
| E2 | [Data point] | Behavioral Data | [[source]] | High |
| E3 | "[Quote]" | Survey Response | [[source]] | Medium |

### Level 2: Findings

| ID | Finding | Supported By | Strength |
|----|---------|--------------|----------|
| F1 | [Finding statement] | E1, E2 | High |
| F2 | [Finding statement] | E3 | Medium |

### Level 3: Insight

**Insight:** [Insight statement]
**Supported By:** F1, F2
**Strength:** [Level]

### Level 4: Conclusion

**Conclusion:** [Strategic implication]
**Supported By:** Insight
**Strength:** [Level]

### Level 5: Decision

**Decision:** [Action to take]
**Supported By:** Conclusion
**Strength:** [Level]

## Chain Gaps

| Gap | Location | Impact | Resolution |
|-----|----------|--------|------------|
| [Missing evidence for X] | Between E and F | [Impact] | [How to fill] |

## Contradicting Evidence

| Evidence | Contradiction | Resolution |
|----------|---------------|------------|
| [Evidence] | [What it contradicts] | [How to resolve] |

## Chain Assessment

**Overall Strength:** [Strong | Moderate | Weak | Broken]

**Strengths:**
- [What makes this chain credible]

**Weaknesses:**
- [Where the chain is weak]

**Recommendations:**
- [How to strengthen the chain]

## Related Documents

- [[Source documents]]
- [[Related insights]]
- [[Decisions made]]
```

## Confidence Scoring

- **High:** Strong chain with no gaps, multiple evidence sources
- **Medium:** Moderate chain with minor gaps
- **Low:** Weak chain with significant gaps or assumptions

## Example

**Input:** Need to support decision to prioritize mobile app native development.

**Output:** Evidence chain showing customer quotes about offline needs → finding that 60% of field work is offline → insight that current PWA approach causes data loss → conclusion that native development is required → decision to prioritize native app in Q2.

## Related Skills

- [[cross-reference-sources]] - Provides validated findings
- [[assess-evidence-quality]] - Rates evidence strength
- [[validate-strategic-alignment]] - Ensures chain supports strategy

## Used By Commands

- `agentflow.identify-opportunities` - Validates opportunities
- `agentflow.assess-solutions` - Supports solution decisions


