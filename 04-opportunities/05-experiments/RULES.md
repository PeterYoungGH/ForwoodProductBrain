# Experiments - Format Rules

Standard format specification for Experiment documents based on the Opportunity Solution Tree (OST) framework.

## Purpose

Experiments are tests designed to validate or invalidate proposed solutions. They are hypothesis-driven, linked to specific solutions, results inform go/no-go decisions, and multiple experiments can test one solution.

## Required Document Structure

### 1. Title
```markdown
# Experiment: [Name]
```
- Use descriptive name that indicates what is being tested
- Capitalize each major word
- Be specific about the experiment

### 2. Metadata (Required)
```markdown
**Status:** [Active/Planned/Completed/Archived]
**Created:** [YYYY-MM-DD]
**Last Updated:** [YYYY-MM-DD]
```
- Status must be one of: Active, Planned, Completed, Archived
- Dates must be in YYYY-MM-DD format
- Update Last Updated whenever document is modified

### 3. Overview (Required)
Brief one-to-two sentence description of the experiment and what it tests.

**Guidelines:**
- Should clearly describe what is being tested
- Explain the purpose of the experiment
- Be concise but informative

### 4. Related Solution (Required)
Link to the solution this experiment tests.

**Format:**
```markdown
Link to the solution this experiment tests:
- [Solution Name](../04-solutions/active/solution-name.md)
```

**Guidelines:**
- Must link to exactly one solution
- Use relative path
- Link text should be the solution name

### 5. Hypothesis (Required)
Clear statement of what we expect to learn from this experiment.

**Format:**
```markdown
We believe that [doing X] will result in [outcome Y]. We will know this is true when [success criteria Z].
```

**Guidelines:**
- Must be testable and falsifiable
- Should be specific and measurable
- Include expected outcome and success criteria
- Use standard hypothesis format

### 6. Methodology (Required)
Description of how the experiment will be conducted.

**Format:**
```markdown
### Experiment Type
[Type: A/B Test, Usability Test, Prototype, Survey, etc.]

### Approach
[Detailed description of how the experiment will be run]

### Participants/Data
[Description of participants or data sources]
- Sample size: [Number]
- Selection criteria: [Criteria]
```

**Guidelines:**
- Specify experiment type
- Describe approach in detail
- Include participant/data information
- Be specific about methodology

### 7. Success Criteria (Required)
Clear definition of what success looks like.

**Format:**
```markdown
### Primary Success Criteria
- [Criterion 1]: [Target/threshold]
- [Criterion 2]: [Target/threshold]

### Secondary Success Criteria
- [Criterion 1]: [Target/threshold]
```

**Guidelines:**
- Must be measurable and specific
- Include thresholds or targets
- Distinguish primary from secondary criteria
- Should align with hypothesis

### 8. Timeline (Required)
Key dates for the experiment.

**Format:**
```markdown
- **Start Date:** [YYYY-MM-DD]
- **End Date:** [YYYY-MM-DD]
- **Key Milestones:**
  - [Milestone 1]: [Date]
  - [Milestone 2]: [Date]
```

**Guidelines:**
- Include start and end dates
- List key milestones
- Update as experiment progresses

### 9. Results (Required when Completed)
Results of the experiment.

**Format:**
```markdown
### Quantitative Results
- [Metric 1]: [Result] (Target: [Target])
- [Metric 2]: [Result] (Target: [Target])

### Qualitative Results
- [Finding 1]
- [Finding 2]

### Key Findings
- [Finding 1]
- [Finding 2]
```

**Guidelines:**
- Include both quantitative and qualitative results
- Compare results to success criteria
- Highlight key findings
- Be objective and data-driven

### 10. Learnings (Required when Completed)
Key learnings from the experiment.

**Format:**
```markdown
### What We Learned
- [Learning 1]
- [Learning 2]

### Surprises
- [Unexpected finding 1]

### Implications
- [Implication 1]
```

**Guidelines:**
- Document key learnings
- Note surprises or unexpected findings
- Explain implications for the solution
- Be honest about what worked and what didn't

### 11. Decision (Required when Completed)
Decision based on experiment results.

**Format:**
```markdown
**Decision:** [Proceed/Don't Proceed/Iterate]

**Decision Date:** [YYYY-MM-DD]

**Rationale:** [Why this decision was made based on results]
```

**Guidelines:**
- Must be one of: Proceed, Don't Proceed, Iterate
- Include decision date
- Explain rationale based on results
- Be clear about next steps

### 12. Next Steps (Required when Completed)
What happens next based on the decision.

**Format:**
```markdown
- [Next step 1]
- [Next step 2]
```

**Guidelines:**
- List concrete next steps
- Should align with decision
- Can include follow-up experiments if iterating

### 13. Notes (Optional)
Additional context, observations, or considerations.

## Format Requirements

1. **Solution Linking**: Must link to specific solution
2. **Hypothesis**: Must have clear, testable hypothesis
3. **Methodology**: Must describe how experiment will be conducted
4. **Success Criteria**: Must define measurable success criteria
5. **Results**: Must document results when completed
6. **Decision**: Must have decision when completed

## Content Guidelines

### What Makes a Good Experiment

- **Testable**: Has clear, falsifiable hypothesis
- **Specific**: Well-defined methodology and success criteria
- **Actionable**: Results inform clear decision
- **Focused**: Tests one thing at a time
- **Documented**: Results and learnings are captured

### Common Mistakes to Avoid

- ❌ Vague or untestable hypothesis
- ❌ Missing link to solution
- ❌ Unclear success criteria
- ❌ No methodology description
- ❌ Results not documented
- ❌ No decision or rationale
- ❌ Testing multiple things at once

### Writing Good Hypotheses

**Good Examples:**
- "We believe that redesigning navigation to match user mental models will result in 50% reduction in time to find features. We will know this is true when users can find target features in under 30 seconds in usability testing."
- "We believe that adding feature search will increase feature discovery by 30%. We will know this is true when analytics show 30% of users use search to find features within first week."

**Bad Examples:**
- "We think navigation should be better" (not testable, no success criteria)
- "Test if users like the new design" (vague, not measurable)

## Linking Requirements

### Required Links
- **Solution**: Must link to exactly one solution

### Recommended Links
- Related research that informed the experiment
- Follow-up experiments if iterating

### Link Format
- Use relative paths: `../04-solutions/active/solution-name.md`
- Link text should be descriptive (solution name)
- Keep links updated as related items are created

## Decision Validation Requirements

### Decision Points

All experiments must have decisions logged for:

1. **Experiment Design Validation** (Should be logged)
   - Decision log recommended when experiment design is validated
   - Should note any design changes

2. **Experiment Readiness Assessment** (Should be logged)
   - Decision log recommended when readiness is assessed
   - Should note any missing requirements

3. **Results Interpretation** (Required when completed)
   - Decision log required when results are interpreted
   - Must include conclusions and rationale

4. **Go/No-Go Decision** (Human decision required)
   - Decision log required for all go/no-go decisions
   - Must include results analysis, success criteria evaluation, and rationale

### Decision Logging

See `07-reference/methodology/decision-log-format.md` for decision log format.

**Required for:**
- Go/no-go decisions
- Results interpretation (when conclusions are drawn)

**Decision History Section:**
All experiment documents must include a "Decision History" section. See `07-reference/templates/decision-history-section-template.md` for format.

### Decision Validation

Before making decisions, validate using:
- [Experiment Decision Rules](./DECISION-RULES.md)
- [Experiment Design Prompt](../../07-reference/prompts/decision-facilitation/experiment-design-prompt.md)

## Validation Checklist

Before considering an Experiment document complete, verify:

- [ ] Title follows format: `# Experiment: [Name]`
- [ ] Metadata includes Status, Created, Last Updated
- [ ] Overview clearly describes what is being tested
- [ ] Link to Related Solution is present
- [ ] Hypothesis is clear, testable, and includes success criteria
- [ ] Methodology is detailed and specific
- [ ] Success Criteria are measurable and specific
- [ ] Timeline includes start and end dates
- [ ] Results are documented (if completed)
- [ ] Learnings are captured (if completed)
- [ ] Decision is made and documented (if completed)
- [ ] Next Steps are defined (if completed)
- [ ] All links use correct relative paths
- [ ] **Decision History section is present** (see template)
- [ ] **All required decisions are logged** (go/no-go, results interpretation)

## Example Structure

```markdown
# Experiment: Navigation Prototype Usability Test

**Status:** Completed
**Created:** 2024-01-15
**Last Updated:** 2024-03-20

## Overview

Usability test of redesigned navigation prototype to validate that new structure improves feature discoverability and reduces time to find features.

## Related Solution

Link to the solution this experiment tests:
- [Redesign Navigation Structure](../04-solutions/active/redesign-navigation.md)

## Hypothesis

We believe that redesigning navigation to match user mental models will result in 50% reduction in time to find target features. We will know this is true when users can find target features in under 30 seconds in usability testing, compared to current average of 60 seconds.

## Methodology

### Experiment Type
Usability Test with Prototype

### Approach
- Created interactive prototype of redesigned navigation
- Recruited 12 participants matching target user personas
- Conducted moderated usability sessions
- Asked participants to find 5 specific features
- Measured time to find each feature
- Collected qualitative feedback on navigation structure

### Participants/Data
- Sample size: 12 participants
- Selection criteria: Active users, mix of new (3) and experienced (9) users
- Demographics: Matched target user personas

## Success Criteria

### Primary Success Criteria
- Average time to find features: < 30 seconds (current: 60 seconds)
- Feature discovery rate: > 90% (current: 70%)
- User satisfaction with navigation: > 4.0/5.0

### Secondary Success Criteria
- Reduced cognitive load (qualitative feedback)
- Positive feedback on navigation organization
- No significant disruption for experienced users

## Timeline

- **Start Date:** 2024-02-01
- **End Date:** 2024-03-15
- **Key Milestones:**
  - Feb 1: Prototype completed
  - Feb 5-20: Usability sessions conducted
  - Mar 1: Results analysis complete
  - Mar 15: Decision made

## Results

### Quantitative Results
- Average time to find features: 25 seconds (Target: < 30 seconds) ✅
- Feature discovery rate: 92% (Target: > 90%) ✅
- User satisfaction: 4.3/5.0 (Target: > 4.0) ✅

### Qualitative Results
- Users found navigation more intuitive
- Mental model alignment confirmed
- Some experienced users needed brief adjustment period
- Search functionality was highly valued

### Key Findings
- New navigation structure significantly improved feature discoverability
- Time to find features reduced by 58% (exceeded 50% target)
- Users appreciated the user-centric organization
- Experienced users adapted quickly with minimal disruption

## Learnings

### What We Learned
- User mental models for feature organization are consistent and can be designed around
- Reducing cognitive load through better organization has significant impact
- Search complements navigation but doesn't replace need for good structure
- Experienced users adapt quickly to improved structure

### Surprises
- Users valued the search functionality more than expected
- Some features users expected in different categories than we anticipated

### Implications
- Navigation redesign is validated and should proceed
- Should include search functionality in implementation
- May need minor adjustments based on user feedback about some categorizations

## Decision

**Decision:** Proceed

**Decision Date:** 2024-03-15

**Rationale:** Experiment results exceeded all success criteria. Average time to find features reduced by 58%, feature discovery rate improved to 92%, and user satisfaction was high. Qualitative feedback confirmed improved usability and mental model alignment. Decision to proceed with full implementation.

## Next Steps

- Finalize navigation structure based on user feedback
- Begin implementation planning
- Design search functionality to complement navigation
- Plan user education and migration strategy
- Set up metrics to track improvement in production

## Notes

- Consider A/B test in production to validate with larger sample
- Monitor experienced user adaptation during rollout
- May need iterative improvements based on production usage data
```

## Conformance Instructions

To conform an existing Experiment document to this format:

1. Check title format matches `# Experiment: [Name]`
2. Ensure all required metadata fields are present
3. Verify Overview describes what is being tested
4. Ensure link to Related Solution exists
5. Check Hypothesis is clear, testable, and includes success criteria
6. Verify Methodology is detailed and specific
7. Ensure Success Criteria are measurable and specific
8. Check Timeline includes required elements
9. If completed, verify Results section is present and detailed
10. If completed, ensure Learnings are captured
11. If completed, verify Decision is made and documented with rationale
12. If completed, check Next Steps are defined
13. Validate all links use correct relative paths
14. Add any missing required sections

















