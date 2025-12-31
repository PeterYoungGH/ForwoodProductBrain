# Solution Decision Rules

**Last Updated:** 2025-12-17  
**Purpose:** Decision rules and criteria for solution quality validation, selection, risk assessment, and validation planning.

## Overview

This document defines the decision rules for solutions, including quality validation, selection criteria, four product risks assessment, and validation planning. These rules ensure solutions are well-formed, properly address opportunities, and are assessed for viability before experimentation.

## Decision Points

### 1. Solution Quality Validation

**Decision Question:** Does this solution clearly address the opportunity?

**Decision Maker:**
- **Agent:** Validates format and opportunity linking
- **Human:** Validates content quality and opportunity alignment

**Decision Criteria:**

1. **Opportunity Linking**
   - Must link to exactly one opportunity
   - Link must use correct relative path
   - Solution must clearly address the linked opportunity

2. **Solution Description**
   - Must clearly describe what the solution is
   - Must explain how it addresses the opportunity
   - Should be specific and actionable

3. **Required Document Structure**
   - Overview (solution description and connection to opportunity)
   - Related Opportunity section (with link)
   - Solution Description section
   - "How It Addresses the Opportunity" section
   - Assumptions section
   - Expected Impact section

**Validation Checklist:**
- [ ] Links to exactly one opportunity
- [ ] Link uses correct relative path
- [ ] Solution description is clear and specific
- [ ] "How It Addresses the Opportunity" section explains connection
- [ ] Assumptions are documented
- [ ] Expected impact is described

**Decision Logging:** Required for solution creation/updates

---

### 2. Solution Selection

**Decision Question:** Which solution(s) should be pursued?

**Decision Maker:** **Human** (makes final decision)

**Decision Criteria:**

1. **Four Product Risks Assessment**
   - Value Risk: Will customers use it?
   - Usability Risk: Can users figure it out?
   - Feasibility Risk: Can we build it?
   - Business Viability Risk: Does it work for our business?
   - Lower risk scores indicate better solutions

2. **Opportunity Alignment**
   - Solution must clearly address the opportunity
   - Multiple solutions can address one opportunity
   - Best solution is the one that best addresses the opportunity with acceptable risks

3. **Implementation Considerations**
   - Effort: High/Medium/Low
   - Complexity: High/Medium/Low
   - Dependencies: List of dependencies
   - Risks: List of risks
   - Lower effort/complexity with fewer dependencies/risks is preferred

4. **Validation Readiness**
   - Assumptions are documented
   - Validation plan exists or can be created
   - Solution is ready for experimentation

**Selection Process:**

1. **Agent Actions:**
   - Assess four product risks for each solution
   - Calculate risk scores (if criteria defined)
   - Assess implementation considerations
   - Compare solutions and suggest best option

2. **Human Actions:**
   - Review agent risk assessments
   - Consider strategic context and resource availability
   - Make final solution selection decision
   - Log decision with rationale

**Decision Logging:** Required for all solution selection decisions

**Decision Log Format:**
- Decision: "Select Solution X" / "Select Multiple Solutions" / "Do Not Proceed"
- Rationale: Why this solution was selected
- Supporting Evidence: Risk assessment, implementation considerations, opportunity alignment

---

### 3. Risk Assessment

**Decision Question:** What are the four product risks for this solution?

**Decision Maker:**
- **Agent:** Assesses all four risks, flags high-risk areas
- **Human:** Validates critical risks

**Decision Criteria:**

Apply Four Product Risks Framework:

1. **Value Risk**
   - Question: Will customers use it?
   - Assessment: Does it solve a genuine, high-priority problem?
   - Evidence: User research, customer feedback, data
   - Risk Level: High/Medium/Low

2. **Usability Risk**
   - Question: Can users figure it out?
   - Assessment: Can target users intuitively complete key tasks?
   - Evidence: Usability testing, prototype feedback
   - Risk Level: High/Medium/Low

3. **Feasibility Risk**
   - Question: Can we build it?
   - Assessment: Do we have the necessary skills, technology, and resources?
   - Evidence: Technical validation, engineering input
   - Risk Level: High/Medium/Low

4. **Business Viability Risk**
   - Question: Does it work for our business?
   - Assessment: Is it financially sustainable and aligned with strategy?
   - Evidence: Business case, stakeholder alignment
   - Risk Level: High/Medium/Low

**Risk Assessment Process:**

1. **Agent Actions:**
   - Assess each of the four risks
   - Flag high-risk areas
   - Identify missing evidence
   - Suggest validation experiments to reduce risks

2. **Human Actions:**
   - Review risk assessments
   - Validate critical risks (especially HIGH risk areas)
   - Decide if risks are acceptable
   - Approve validation plan to reduce risks

**Decision Logging:** Required for risk assessments, especially for high-risk areas

---

### 4. Validation Planning

**Decision Question:** What experiments are needed to validate assumptions?

**Decision Maker:**
- **Agent:** Suggests experiments based on assumptions and risks
- **Human:** Approves validation plan

**Decision Criteria:**

1. **Assumption Documentation**
   - All key assumptions must be documented
   - Assumptions should be testable
   - Assumptions should map to risks

2. **Experiment Design**
   - Each high-risk assumption should have an experiment
   - Experiments should test key assumptions
   - Success criteria must be defined

3. **Validation Priority**
   - Highest risk assumptions should be validated first
   - Value and Usability risks often need early validation
   - Feasibility can be validated through technical spikes

**Validation Planning Process:**

1. **Agent Actions:**
   - Identify assumptions from solution document
   - Map assumptions to risks
   - Suggest experiments for high-risk assumptions
   - Propose experiment sequence

2. **Human Actions:**
   - Review suggested experiments
   - Approve validation plan
   - Prioritize experiments
   - Log validation planning decision

**Decision Logging:** Should be logged when validation plan is approved

---

## Agent Capabilities

### What Agents Can Do

1. **Format Validation**
   - Check solution follows required structure
   - Validate opportunity linking
   - Check for required fields

2. **Risk Assessment**
   - Assess all four product risks
   - Flag high-risk areas
   - Identify missing evidence
   - Calculate risk scores (if criteria defined)

3. **Validation Planning**
   - Identify assumptions from solution document
   - Map assumptions to risks
   - Suggest experiments for high-risk assumptions
   - Propose experiment sequence

4. **Solution Comparison**
   - Compare multiple solutions for same opportunity
   - Assess relative risks
   - Suggest best option based on risk assessment

### What Agents Cannot Do

1. **Solution Selection**
   - Cannot make final selection decisions
   - Cannot decide which solutions to pursue
   - Can only suggest based on risk assessment

2. **Risk Validation**
   - Cannot determine if risks are acceptable
   - Can assess risks, but human validates critical risks
   - Cannot approve solutions with high risks

3. **Validation Plan Approval**
   - Cannot approve validation plans
   - Can suggest experiments, but human approves
   - Cannot make go/no-go decisions

---

## Decision Logging Requirements

### When to Log

**Always Log:**
- Solution creation
- Solution selection decisions
- Risk assessments (especially high-risk areas)
- Validation plan approvals

**Should Log:**
- Solution updates
- Risk reassessments
- Validation plan changes

### Decision Log Format

See `07-reference/methodology/decision-log-format.md` for full format specification.

**Required Fields for Solution Selection:**
- Decision ID
- Decision Date
- Decision Type: "Solution Selection"
- Decision: "Select Solution X" / "Select Multiple Solutions" / "Do Not Proceed"
- Decision Maker: Human name
- Rationale: Why this solution was selected
- Supporting Evidence: Risk assessment, implementation considerations, opportunity alignment

---

## Integration with Decision Framework

This document implements the Solution Exploration stage from:
- [Decision Framework](../../07-reference/methodology/decision-framework.md)

Related frameworks:
- [Four Product Risks Framework](../../07-reference/methodology/four-product-risks-framework.md) - For risk assessment
- [Opportunity Solution Tree Guide](../../07-reference/methodology/opportunity-solution-tree-guide.md) - For overall structure

---

## Related Documents

- [Solutions Format Rules](./RULES.md) - Document format requirements
- [Decision Framework](../../07-reference/methodology/decision-framework.md) - Overall decision framework
- [Decision Log Format](../../07-reference/methodology/decision-log-format.md) - Decision logging format
- [Four Product Risks Framework](../../07-reference/methodology/four-product-risks-framework.md) - Risk assessment framework

