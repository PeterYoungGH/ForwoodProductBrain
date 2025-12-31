# Experiment Design Prompt

## Use Case

Use this prompt when designing experiments to validate solution assumptions, ensuring experiments are well-designed to test hypotheses effectively.

## Context

This prompt guides experiment design using decision rules from `04-opportunities/05-experiments/DECISION-RULES.md`. It ensures experiments properly test assumptions and inform go/no-go decisions.

## Prompt Text

Design an experiment to validate the following solution assumptions:

### Solution Document
[Link to or paste solution document content]

### Assumptions to Test
[List assumptions from solution document, or specify which assumptions to test]

### Experiment Design Tasks

1. **Hypothesis Formation**
   - Form clear, testable hypothesis for each assumption
   - Ensure hypothesis is falsifiable
   - Link hypothesis to the assumption being tested

2. **Success Criteria Definition**
   - Define measurable success criteria
   - Ensure criteria align with assumption
   - Set thresholds for success/failure

3. **Experiment Design**
   - Design experiment that tests hypothesis effectively
   - Choose appropriate experiment type (A/B test, prototype, interview, etc.)
   - Minimize bias and confounding factors
   - Define participant selection criteria

4. **Resource Requirements**
   - Estimate resources needed (time, people, tools)
   - Identify timeline
   - List dependencies

5. **Risk Assessment**
   - Identify risks to experiment validity
   - Identify risks to execution
   - Suggest mitigation strategies

### Output Format

Provide experiment design in this format:

```markdown
## Experiment Design

### Assumption Being Tested
[State the assumption clearly]

### Hypothesis
[Clear, testable hypothesis]

### Success Criteria
- Primary Criteria: [Measurable criteria]
- Secondary Criteria: [Additional criteria if applicable]
- Threshold: [What constitutes success]

### Experiment Design
- Type: [A/B test, Prototype, Interview, Survey, etc.]
- Method: [Detailed description of experiment method]
- Participants: [Who will participate, how many]
- Duration: [How long experiment will run]
- Data Collection: [How data will be collected]

### Resource Requirements
- Time: [Estimated time]
- People: [Who is needed]
- Tools: [What tools are needed]
- Dependencies: [What needs to be in place first]

### Risks and Mitigation
- Validity Risks: [Risks to experiment validity]
- Execution Risks: [Risks to execution]
- Mitigation: [How to mitigate risks]

### Experiment Sequence
- If multiple experiments: [Proposed order and rationale]

### Recommendations
- [Recommendations for improving experiment design]
```

## Decision Authority

**Agent Can:**
- Suggest experiment designs
- Propose hypotheses and success criteria
- Identify resource requirements
- Suggest experiment sequence

**Human Must:**
- Validate experiment design
- Approve validation plan
- Make go/no-go decisions based on results

## Related Documents

- [Experiment Decision Rules](../../../04-opportunities/05-experiments/DECISION-RULES.md)
- [Decision Framework](../../../methodology/decision-framework.md)
- [Four Product Risks Framework](../../../methodology/four-product-risks-framework.md)

