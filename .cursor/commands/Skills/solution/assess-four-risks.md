# Assess Four Risks

**Category:** Solution
**Strategic Theme:** N/A
**Autonomy Level:** Supervised
**Workflow Stages:** 5 (Solution Exploration)

## Purpose

Evaluate a solution against Marty Cagan's Four Product Risks framework: Value, Usability, Feasibility, and Business Viability.

## Inputs Required

- **Solution:** The solution to assess
- **Opportunity:** The opportunity this addresses
- **Technical Context:** Engineering input on feasibility
- **Business Context:** Stakeholder constraints and requirements

## Process Steps

### Step 1: Assess Value Risk

**Question:** Will customers buy this or choose to use it?

Evaluate:
- Does it solve a genuine, high-priority problem?
- Does it outperform current alternatives?
- Will customers pay (with money, time, or attention)?
- Have hypotheses been validated with data or user feedback?

**Rating:**
| Score | Level | Description |
|-------|-------|-------------|
| 1 | Critical | Major doubts about value, no validation |
| 2 | High | Significant concerns, limited validation |
| 3 | Medium | Some validation, assumptions remain |
| 4 | Low | Good validation, confident in value |
| 5 | Minimal | Strong validation, clear value proven |

### Step 2: Assess Usability Risk

**Question:** Can users figure out how to use it?

Evaluate:
- Can target users intuitively complete key tasks?
- Does the interface align with their mental models?
- Have you tested early prototypes with real users?
- Are usability issues identified and addressed?

**Rating:** Same 1-5 scale as Value Risk.

### Step 3: Assess Feasibility Risk

**Question:** Can we build it with available time, skills, and technology?

Evaluate:
- Are the technical assumptions sound?
- Do we have necessary infrastructure and expertise?
- Are dependencies and constraints known?
- Has engineering been engaged early?

**Rating:** Same 1-5 scale as Value Risk.

### Step 4: Assess Business Viability Risk

**Question:** Can the solution work for our business?

Evaluate:
- Is the idea financially sustainable?
- Does it comply with legal/privacy constraints?
- Is it aligned with brand and strategy?
- Will stakeholders support it?

**Rating:** Same 1-5 scale as Value Risk.

### Step 5: Calculate Overall Risk Profile

Combine assessments:
- **Composite Score:** Average of 4 risks (1-5)
- **Highest Risk:** Which risk is most concerning?
- **Risk Mitigation Priority:** What to address first

### Step 6: Recommend Risk Mitigation

For each high-risk area, suggest:
- What experiment could reduce this risk?
- What research would help?
- What decisions are needed?

## Output Format

```markdown
## Four Risks Assessment: [Solution Name]

**Solution:** [[solution-link]]
**Opportunity:** [[opportunity-link]]
**Assessment Date:** YYYY-MM-DD

### Risk Summary

| Risk | Score | Level | Key Concern |
|------|-------|-------|-------------|
| Value | X/5 | [Level] | [Main concern] |
| Usability | X/5 | [Level] | [Main concern] |
| Feasibility | X/5 | [Level] | [Main concern] |
| Business Viability | X/5 | [Level] | [Main concern] |

**Composite Score:** X/5
**Highest Risk:** [Risk name]
**Lowest Risk:** [Risk name]

### Value Risk Assessment

**Score:** X/5 - [Level]

**Evaluation:**
| Factor | Assessment |
|--------|------------|
| Solves real problem | [Yes/No/Partial] |
| Better than alternatives | [Yes/No/Partial] |
| Customers will engage | [Yes/No/Partial] |
| Validated with users | [Yes/No/Partial] |

**Evidence:**
> "[Quote or data supporting assessment]"

**Key Assumptions:**
1. [Assumption to validate]
2. [Assumption to validate]

**Risk Mitigation:**
- [What would reduce this risk]

### Usability Risk Assessment

**Score:** X/5 - [Level]

**Evaluation:**
| Factor | Assessment |
|--------|------------|
| Intuitive completion | [Yes/No/Partial] |
| Matches mental models | [Yes/No/Partial] |
| Tested with users | [Yes/No/Partial] |
| Issues identified | [Yes/No/Partial] |

**Evidence:**
> "[Quote or data supporting assessment]"

**Key Assumptions:**
1. [Assumption to validate]

**Risk Mitigation:**
- [What would reduce this risk]

### Feasibility Risk Assessment

**Score:** X/5 - [Level]

**Evaluation:**
| Factor | Assessment |
|--------|------------|
| Technical assumptions sound | [Yes/No/Partial] |
| Infrastructure exists | [Yes/No/Partial] |
| Skills available | [Yes/No/Partial] |
| Dependencies known | [Yes/No/Partial] |

**Engineering Input:**
[Summary of engineering assessment]

**Key Assumptions:**
1. [Technical assumption]

**Risk Mitigation:**
- [What would reduce this risk]

### Business Viability Risk Assessment

**Score:** X/5 - [Level]

**Evaluation:**
| Factor | Assessment |
|--------|------------|
| Financially sustainable | [Yes/No/Partial] |
| Compliance OK | [Yes/No/Partial] |
| Strategy aligned | [Yes/No/Partial] |
| Stakeholder support | [Yes/No/Partial] |

**Business Context:**
[Summary of business constraints]

**Key Assumptions:**
1. [Business assumption]

**Risk Mitigation:**
- [What would reduce this risk]

### Risk Mitigation Plan

**Priority Order:**
1. [Highest risk] - [Mitigation action]
2. [Second risk] - [Mitigation action]
3. [Third risk] - [Mitigation action]
4. [Lowest risk] - [Mitigation action]

**Recommended Experiments:**
- [Experiment for risk 1]
- [Experiment for risk 2]

### Recommendation

**Proceed?** [Yes | Yes with Conditions | Needs Validation | No]

**Rationale:**
[Why this recommendation]

**Conditions (if applicable):**
- [Condition 1]
- [Condition 2]

## Related Documents

- [[Solution]]
- [[Opportunity]]
- [[Experiments]]
```

## Confidence Scoring

- **High:** All risks assessed with evidence
- **Medium:** Most risks assessed, some assumptions
- **Low:** Significant unknowns, major assumptions

## Example

**Input:** Solution: "AI-powered fatal risk indicator"

**Output:** Assessment showing Value Risk: 4/5 (strong VoC support), Usability Risk: 2/5 (untested interface), Feasibility Risk: 3/5 (technical unknowns), Business Viability Risk: 4/5 (aligned to strategy). Recommendation: Proceed with usability validation as priority.

## Related Skills

- [[generate-solution-options]] - Creates solutions to assess
- [[design-experiment]] - Creates experiments for risks
- [[compare-solutions]] - Uses assessments to compare

## Used By Commands

- `agentflow.assess-solutions` - Primary risk assessment
- `agentflow.orchestrate` - Stage 5 solution assessment


