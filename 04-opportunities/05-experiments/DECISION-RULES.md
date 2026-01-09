# Experiment Decision Rules

**Last Updated:** 2025-12-17  
**Purpose:** Decision rules and criteria for experiment design validation, readiness assessment, results interpretation, and go/no-go decisions.

## Overview

This document defines the decision rules for experiments, including design validation, readiness assessment, results interpretation, and go/no-go decisions. These rules ensure experiments are well-designed, properly test assumptions, and results inform clear decisions.

## Decision Points

### 1. Experiment Design Validation

**Decision Question:** Is the experiment well-designed to test the hypothesis?

**Decision Maker:**
- **Agent:** Suggests experiment design based on assumptions
- **Human:** Validates experiment design

**Decision Criteria:**

1. **Hypothesis Clarity**
   - Hypothesis must be clear and testable
   - Hypothesis should test a specific assumption
   - Hypothesis should be falsifiable

2. **Success Criteria**
   - Success criteria must be defined
   - Criteria should be measurable
   - Criteria should align with the assumption being tested

3. **Experiment Design**
   - Design should test the hypothesis effectively
   - Design should be appropriate for the assumption type
   - Design should minimize bias and confounding factors

4. **Resource Requirements**
   - Experiment should be feasible with available resources
   - Timeline should be reasonable
   - Dependencies should be identified

**Validation Checklist:**
- [ ] Hypothesis is clear and testable
- [ ] Success criteria are defined and measurable
- [ ] Experiment design tests the hypothesis effectively
- [ ] Resource requirements are feasible
- [ ] Timeline is reasonable
- [ ] Dependencies are identified

**Decision Logging:** Should be logged when experiment design is validated

---

### 2. Experiment Readiness Assessment

**Decision Question:** Is the solution ready for experimentation?

**Decision Maker:**
- **Agent:** Assesses readiness criteria
- **Human:** Confirms readiness

**Decision Criteria:**

1. **Solution Readiness**
   - Solution is well-defined
   - Assumptions are documented
   - Solution addresses a validated opportunity

2. **Experiment Design**
   - Experiment design is validated
   - Hypothesis is clear
   - Success criteria are defined

3. **Resource Availability**
   - Resources are available to run experiment
   - Timeline is acceptable
   - Dependencies are resolved

4. **Stakeholder Alignment**
   - Key stakeholders are aligned
   - Approval obtained if required
   - Communication plan in place

**Readiness Checklist:**
- [ ] Solution is well-defined and addresses validated opportunity
- [ ] Experiment design is validated
- [ ] Hypothesis and success criteria are clear
- [ ] Resources are available
- [ ] Timeline is acceptable
- [ ] Dependencies are resolved
- [ ] Stakeholder alignment obtained

**Decision Logging:** Should be logged when readiness is assessed

---

### 3. Results Interpretation

**Decision Question:** What do the results mean?

**Decision Maker:**
- **Agent:** Analyzes results and flags patterns
- **Human:** Validates conclusions

**Decision Criteria:**

1. **Results Analysis**
   - Results must be analyzed objectively
   - Patterns and trends should be identified
   - Results should be compared to success criteria

2. **Evidence Quality**
   - Results should be based on sufficient data
   - Results should be statistically significant (if applicable)
   - Bias and confounding factors should be considered

3. **Conclusion Validity**
   - Conclusions should be supported by results
   - Conclusions should address the hypothesis
   - Limitations should be acknowledged

**Interpretation Process:**

1. **Agent Actions:**
   - Analyze experiment results
   - Compare results to success criteria
   - Flag patterns and trends
   - Identify limitations and confounding factors
   - Suggest preliminary conclusions

2. **Human Actions:**
   - Review agent analysis
   - Validate conclusions
   - Consider context and limitations
   - Make final interpretation

**Decision Logging:** Required for results interpretation

---

### 4. Go/No-Go Decision

**Decision Question:** Should we proceed, iterate, or abandon?

**Decision Maker:** **Human** (makes final decision)

**Decision Criteria:**

1. **Results Against Success Criteria**
   - Did the experiment meet success criteria?
   - If yes, proceed
   - If no, iterate or abandon

2. **Risk Assessment**
   - Are remaining risks acceptable?
   - Have critical risks been reduced?
   - Can we proceed with confidence?

3. **Resource Considerations**
   - Do we have resources to proceed?
   - Is the investment justified?
   - Are dependencies resolved?

4. **Strategic Alignment**
   - Does proceeding align with strategy?
   - Does it support desired outcomes?
   - Is timing appropriate?

**Decision Options:**

1. **Proceed**
   - Experiment met success criteria
   - Risks are acceptable
   - Ready to move forward

2. **Iterate**
   - Experiment partially met success criteria
   - Need to refine solution or experiment
   - Worth continuing with modifications

3. **Abandon**
   - Experiment did not meet success criteria
   - Risks are too high
   - Not worth continuing

**Go/No-Go Process:**

1. **Agent Actions:**
   - Analyze results against success criteria
   - Assess remaining risks
   - Suggest decision based on results
   - Flag any concerns

2. **Human Actions:**
   - Review agent analysis and suggestions
   - Consider strategic context
   - Make final go/no-go decision
   - Log decision with rationale

**Decision Logging:** Required for all go/no-go decisions

**Decision Log Format:**
- Decision: "Proceed" / "Iterate" / "Abandon"
- Rationale: Why this decision was made
- Supporting Evidence: Results analysis, risk assessment, success criteria evaluation

---

## Agent Capabilities

### What Agents Can Do

1. **Experiment Design**
   - Suggest experiment designs based on assumptions
   - Propose hypotheses and success criteria
   - Identify resource requirements
   - Suggest experiment sequence

2. **Results Analysis**
   - Analyze experiment results
   - Compare results to success criteria
   - Flag patterns and trends
   - Identify limitations

3. **Readiness Assessment**
   - Assess experiment readiness criteria
   - Flag missing requirements
   - Suggest when experiment is ready

4. **Decision Suggestions**
   - Suggest go/no-go decision based on results
   - Flag concerns or risks
   - Provide rationale for suggestions

### What Agents Cannot Do

1. **Go/No-Go Decisions**
   - Cannot make final go/no-go decisions
   - Cannot approve proceeding without human approval
   - Can only suggest based on results

2. **Results Validation**
   - Cannot determine if results are sufficient
   - Can analyze, but human validates conclusions
   - Cannot make final interpretation

3. **Experiment Approval**
   - Cannot approve experiment designs
   - Can suggest, but human validates
   - Cannot start experiments without approval

---

## Decision Logging Requirements

### When to Log

**Always Log:**
- Go/no-go decisions
- Results interpretation (when conclusions are drawn)
- Experiment design validation (if significant changes)

**Should Log:**
- Experiment readiness assessments
- Results analysis (preliminary)
- Experiment design suggestions (if approved)

### Decision Log Format

See `07-reference/methodology/decision-log-format.md` for full format specification.

**Required Fields for Go/No-Go:**
- Decision ID
- Decision Date
- Decision Type: "Experiment Go/No-Go"
- Decision: "Proceed" / "Iterate" / "Abandon"
- Decision Maker: Human name
- Rationale: Why this decision was made
- Supporting Evidence: Results analysis, success criteria evaluation, risk assessment

---

## Integration with Decision Framework

This document implements the Experiment Design & Execution stage from:
- [Decision Framework](../../07-reference/methodology/decision-framework.md)

Related frameworks:
- [Four Product Risks Framework](../../07-reference/methodology/four-product-risks-framework.md) - For risk assessment
- [Opportunity Solution Tree Guide](../../07-reference/methodology/opportunity-solution-tree-guide.md) - For overall structure

---

## Related Documents

- [Experiments Format Rules](./RULES.md) - Document format requirements (if exists)
- [Decision Framework](../../07-reference/methodology/decision-framework.md) - Overall decision framework
- [Decision Log Format](../../07-reference/methodology/decision-log-format.md) - Decision logging format




