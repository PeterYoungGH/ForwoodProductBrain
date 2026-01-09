# Conduct User Research

**Category:** Research
**Strategic Theme:** N/A
**Autonomy Level:** Supervised
**Workflow Stages:** 2 (Insight Extraction)

## Purpose

Provide a framework for conducting user research including interviews, surveys, and usability studies. This skill guides the research process and helps structure findings for integration into the knowledge base.

## Inputs Required

- **Research Objective:** What question or hypothesis to investigate
- **Target Users:** Who to research (personas, segments)
- **Research Type:** Interview, survey, usability test, field study
- **Time/Resource Constraints:** Available budget and timeline

## Process Steps

### Step 1: Define Research Questions

Structure the research around clear questions:
- **Primary Question:** The main thing to learn
- **Secondary Questions:** Supporting questions
- **Hypothesis (if applicable):** What we expect to find

Format:
```
Primary: How do [users] currently [behavior]?
Secondary: What challenges do they face? What workarounds exist?
Hypothesis: We believe [assumption] because [evidence/intuition].
```

### Step 2: Select Research Method

Choose appropriate method based on objective:

| Objective | Recommended Method |
|-----------|-------------------|
| Understand needs/pain points | Interviews |
| Validate with numbers | Surveys |
| Test usability | Usability testing |
| Observe real behavior | Field studies |
| Quick validation | Guerilla testing |

### Step 3: Create Research Plan

Document the plan:
- **Participants:** Number, criteria, recruitment method
- **Script/Guide:** Questions or tasks
- **Logistics:** Scheduling, recording, consent
- **Analysis Plan:** How findings will be synthesized

### Step 4: Conduct Research

Execute the research:
- Follow the script/guide
- Capture verbatim quotes
- Note observations and body language (if applicable)
- Document surprises and unexpected findings

### Step 5: Synthesize Findings

Organize findings:
- Group by theme or question
- Identify patterns across participants
- Highlight quotes as evidence
- Note outliers and edge cases

## Output Format

```markdown
# User Research: [Topic]

**Research Type:** [Interview | Survey | Usability | Field Study]
**Date:** YYYY-MM-DD
**Participants:** [Number and description]
**Researcher:** [Name]

## Research Objective

**Primary Question:** [Question]
**Secondary Questions:**
- [Question 1]
- [Question 2]

**Hypothesis:** [If applicable]

## Methodology

**Approach:** [Description of method]
**Participant Criteria:** [Who was included]
**Recruitment:** [How participants were found]

## Key Findings

### Finding 1: [Title]
**Summary:** [1-2 sentence summary]
**Evidence:**
> "[Verbatim quote]" - Participant X

**Frequency:** [How many participants mentioned this]

### Finding 2: [Title]
[Same structure]

## Patterns Observed

| Pattern | Frequency | Confidence |
|---------|-----------|------------|
| [Pattern 1] | X of Y | High/Medium/Low |
| [Pattern 2] | X of Y | High/Medium/Low |

## Surprises / Unexpected Findings

- [Surprise 1]
- [Surprise 2]

## Implications

- **For Product:** [Implication]
- **For Design:** [Implication]
- **For Strategy:** [Implication]

## Recommended Next Steps

- [ ] [Next step 1]
- [ ] [Next step 2]

## Related Documents

- [[Link to related research]]
- [[Link to opportunity]]
```

## Confidence Scoring

- **High:** Large sample, consistent findings, clear patterns
- **Medium:** Moderate sample, some variation in findings
- **Low:** Small sample, inconsistent findings, exploratory

## Example

**Input:**
- Objective: Understand how safety managers use mobile devices in the field
- Target: Safety managers at mining sites
- Type: Interview
- Constraints: 2 weeks, remote interviews

**Output:** A structured research document with findings about mobile usage patterns, pain points, and opportunities for improvement.

## Related Skills

- [[document-research-findings]] - Structures the output document
- [[extract-key-findings]] - Extracts insights from research
- [[analyze-customer-feedback]] - Similar pattern for feedback analysis

## Used By Commands

- `agentflow.extract-insights` - Processes research output
- `agentflow.orchestrate` - Stage 2 research processing


