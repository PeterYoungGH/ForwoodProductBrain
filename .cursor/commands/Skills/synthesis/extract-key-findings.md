# Extract Key Findings

**Category:** Synthesis
**Strategic Theme:** N/A
**Autonomy Level:** Full
**Workflow Stages:** 2, 3 (Insight Extraction, Research Synthesis)

## Purpose

Pull key findings from research documents, reports, or other source materials, distilling them into clear, actionable statements with supporting evidence.

## Inputs Required

- **Source Document:** Research, report, or data to extract from
- **Extraction Focus:** What type of findings to prioritize
- **Strategic Context:** Relevant themes and priorities

## Process Steps

### Step 1: Scan for Finding Indicators

Look for signals of key findings:
- Explicit conclusions: "We found that...", "The data shows..."
- Repeated themes: Topics mentioned multiple times
- Strong evidence: Multiple data points supporting a claim
- Surprising results: Unexpected discoveries
- Action implications: Findings that suggest action

### Step 2: Categorize Findings

Group findings by type:

| Type | Description | Example |
|------|-------------|---------|
| Fact | Objective observation | "70% of users prefer mobile" |
| Pattern | Recurring theme | "Users consistently struggle with X" |
| Insight | Interpretation of data | "This suggests users value Y over Z" |
| Surprise | Unexpected result | "Contrary to assumptions, users don't want X" |
| Implication | Actionable conclusion | "We should prioritize X because..." |

### Step 3: Assess Finding Strength

Evaluate each finding:
- **Evidence Quality:** How strong is the supporting data?
- **Frequency:** How often was this observed?
- **Consistency:** Is this consistent across sources/participants?
- **Relevance:** How relevant to current priorities?

### Step 4: Prioritize Findings

Rank by:
1. **Strategic Relevance:** Alignment to themes
2. **Evidence Strength:** Quality of support
3. **Actionability:** Can we act on this?
4. **Uniqueness:** New information vs. known

### Step 5: Format Findings

Structure each finding with:
- Clear statement
- Supporting evidence
- Confidence level
- Strategic implication
- Suggested action

## Output Format

```markdown
# Key Findings: [Source Document]

**Source:** [[source-document]]
**Extraction Date:** YYYY-MM-DD
**Total Findings:** [Count]

## High-Priority Findings

### Finding 1: [Clear Statement]

**Type:** [Fact | Pattern | Insight | Surprise | Implication]
**Confidence:** [High | Medium | Low]

**Evidence:**
> "[Quote or data point 1]"
> "[Quote or data point 2]"

**Strategic Relevance:** [Which theme this relates to]

**Implication:** [What this means for decisions]

**Suggested Action:** [What to do with this finding]

### Finding 2: [Clear Statement]
[Same structure]

## Medium-Priority Findings

### Finding 3: [Clear Statement]
[Same structure]

## Low-Priority Findings

### Finding 4: [Clear Statement]
[Same structure]

## Patterns Across Findings

| Pattern | Frequency | Findings |
|---------|-----------|----------|
| [Pattern 1] | X findings | #1, #3, #5 |
| [Pattern 2] | X findings | #2, #4 |

## Summary

**Key Takeaways:**
1. [Takeaway 1]
2. [Takeaway 2]
3. [Takeaway 3]

**Recommended Next Steps:**
- [ ] [Action 1]
- [ ] [Action 2]

## Related Documents

- [[source-document]]
- [[related-insight]]
- [[related-opportunity]]
```

## Confidence Scoring

- **High:** Clear findings, strong evidence, consistent patterns
- **Medium:** Good findings, moderate evidence
- **Low:** Tentative findings, limited evidence

## Example

**Input:** User research document with interview findings from 10 customers.

**Output:** 5 high-priority findings including pattern of mobile usability issues, surprise finding about preference for simple over feature-rich, and implication for design system priorities.

## Related Skills

- [[document-research-findings]] - Source of findings
- [[identify-patterns]] - Pattern detection
- [[create-insight-summary]] - Synthesizes findings into insights

## Used By Commands

- `agentflow.extract-insights` - Primary extraction skill
- `agentflow.orchestrate` - Stage 2 extraction


