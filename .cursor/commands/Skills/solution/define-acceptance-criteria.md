# Define Acceptance Criteria

**Category:** Solution
**Strategic Theme:** N/A
**Autonomy Level:** Full
**Workflow Stages:** 5 (Solution Exploration)

## Purpose

Create testable acceptance criteria for features and user stories that define when a requirement is complete.

## Inputs Required

- **User Story or Requirement:** What needs acceptance criteria
- **Context:** Related user research and constraints
- **Edge Cases:** Known edge cases to cover
- **Stakeholder Input:** What stakeholders consider "done"

## Process Steps

### Step 1: Understand the Requirement

Review the requirement:
- What's the user trying to accomplish?
- What's the happy path?
- What are the edge cases?
- What could go wrong?

### Step 2: Apply INVEST Criteria

Ensure story is ready for AC:
- **I**ndependent: Can be developed alone
- **N**egotiable: Details can be discussed
- **V**aluable: Delivers user value
- **E**stimable: Can be sized
- **S**mall: Fits in a sprint
- **T**estable: Can verify completion

### Step 3: Use Given-When-Then Format

Structure each criterion:
- **Given:** The precondition or context
- **When:** The action or trigger
- **Then:** The expected outcome

**Example:**
```
Given I am a logged-in safety manager
When I view the fatal risk dashboard
Then I see risks sorted by severity (highest first)
```

### Step 4: Cover Scenarios

Include criteria for:
- **Happy Path:** Normal successful flow
- **Edge Cases:** Boundary conditions
- **Error Cases:** What happens on failure
- **Permissions:** Access control
- **Performance:** Speed requirements
- **Accessibility:** A11y requirements

### Step 5: Make Criteria Testable

Ensure each criterion is:
- Specific (no ambiguity)
- Measurable (can verify pass/fail)
- Observable (can see the result)
- Independent (doesn't depend on other criteria)

### Step 6: Prioritize Criteria

Mark criteria priority:
- **Must Have:** Required for release
- **Should Have:** Expected but negotiable
- **Could Have:** Nice to have

## Output Format

```markdown
## Acceptance Criteria: [Story/Feature Name]

**Story:** As a [user], I want to [action] so that [benefit]
**Source:** [[requirement-source]]
**Date:** YYYY-MM-DD

### Criteria Summary

| # | Criterion | Priority | Type |
|---|-----------|----------|------|
| AC1 | [Brief description] | Must | Happy Path |
| AC2 | [Brief description] | Must | Edge Case |
| AC3 | [Brief description] | Should | Error |
| AC4 | [Brief description] | Could | Performance |

### Detailed Criteria

#### AC1: [Criterion Name]
**Priority:** Must Have
**Type:** Happy Path

**Given:** [Precondition]
**When:** [Action]
**Then:** [Expected outcome]

**Verification:**
- [ ] [How to test this]

#### AC2: [Criterion Name]
**Priority:** Must Have
**Type:** Edge Case

**Given:** [Precondition - edge case scenario]
**When:** [Action]
**Then:** [Expected outcome]

**Verification:**
- [ ] [How to test this]

#### AC3: [Criterion Name]
**Priority:** Must Have
**Type:** Error Handling

**Given:** [Error precondition]
**When:** [Error trigger]
**Then:** [Error handling behavior]

**Verification:**
- [ ] [How to test this]

#### AC4: [Criterion Name]
**Priority:** Should Have
**Type:** Performance

**Given:** [Performance context]
**When:** [Performance action]
**Then:** [Performance target] (e.g., "loads in < 2 seconds")

**Verification:**
- [ ] [How to measure this]

#### AC5: [Criterion Name]
**Priority:** Should Have
**Type:** Accessibility

**Given:** [Accessibility context]
**When:** [User action]
**Then:** [Accessibility outcome]

**Verification:**
- [ ] [How to verify accessibility]

### Out of Scope

**Explicitly NOT covered:**
- [Scenario not covered by this story]
- [Future consideration]

### Dependencies

**This story depends on:**
- [Dependency 1]

**Other stories depend on this:**
- [Dependent story]

### Notes

- [Additional context for developers]
- [Historical decisions]

## Related Documents

- [[User Story]]
- [[PRD]]
- [[Design Spec]]
```

## Confidence Scoring

- **High:** Complete coverage, clear criteria, testable
- **Medium:** Good coverage, some gaps
- **Low:** Partial coverage, ambiguous criteria

## Example

**Input:** User story: "As a safety manager, I want to see a fatal risk score so I can prioritize my attention."

**Output:** 6 acceptance criteria covering score display, score calculation accuracy, update frequency, edge cases (no data), error handling, and performance requirements.

## Related Skills

- [[create-user-stories]] - Creates stories needing AC
- [[write-prd-section]] - Includes AC in PRD
- [[extract-jira-insights]] - Uses AC from Jira

## Used By Commands

- `agentflow.assess-solutions` - Creates AC for solutions
- `agentflow.orchestrate` - Stage 5 specification


