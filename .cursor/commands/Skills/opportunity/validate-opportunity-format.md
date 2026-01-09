# Validate Opportunity Format

**Category:** Opportunity
**Strategic Theme:** N/A
**Autonomy Level:** Full
**Workflow Stages:** 4 (Opportunity Validation)

## Purpose

Ensure an opportunity document meets the template standards, has required sections, and follows proper formatting for consistency in the knowledge base.

## Inputs Required

- **Opportunity Document:** The document to validate
- **Template Reference:** Standard opportunity template
- **Validation Rules:** Required and optional sections

## Process Steps

### Step 1: Check Required Sections

Verify presence of required sections:

| Section | Required | Description |
|---------|----------|-------------|
| Frontmatter | Yes | YAML metadata |
| Opportunity Statement | Yes | Core problem statement |
| Customer Segment | Yes | Who is affected |
| Evidence | Yes | Supporting research |
| Jobs to Be Done | Yes | JTBD context |
| Outcome Links | Yes | Connection to outcomes |
| Decision History | Yes | Decision log |

### Step 2: Validate Frontmatter

Check YAML frontmatter:
```yaml
---
title: [Required - string]
type: opportunity [Required - must be "opportunity"]
status: [Required - proposed|backlog|active|archive]
created: [Required - YYYY-MM-DD]
updated: [Required - YYYY-MM-DD]
segment: [Required - string]
outcome: [Required - link to product outcome]
business_outcome: [Optional - link to business outcome]
---
```

### Step 3: Validate Opportunity Statement

Check statement quality:
- Is it problem-focused (not solution-focused)?
- Does it follow the format: "[Segment] struggle to [goal] because [obstacle], which results in [negative outcome]"?
- Is it specific enough to act on?
- Is it customer-centric (their perspective)?

### Step 4: Validate Evidence Section

Check evidence quality:
- Are there research source links?
- Are there customer quotes?
- Is evidence recent (within 12 months)?
- Is evidence from multiple sources?

### Step 5: Validate Outcome Links

Check links:
- Is there at least one product outcome link?
- Do the links resolve correctly?
- Is the connection rationale documented?

### Step 6: Check Formatting

Validate formatting:
- Proper markdown syntax
- Consistent heading levels
- Tables properly formatted
- Links use correct syntax

### Step 7: Generate Validation Report

Report all issues found:
- **Errors:** Must fix before valid
- **Warnings:** Should fix for quality
- **Suggestions:** Nice to have improvements

## Output Format

```markdown
## Opportunity Validation Report

**Document:** [[opportunity-document]]
**Validation Date:** YYYY-MM-DD
**Status:** [Valid | Invalid | Needs Attention]

### Validation Summary

| Check | Status | Details |
|-------|--------|---------|
| Frontmatter | ✅ Pass / ❌ Fail | [Details] |
| Required Sections | ✅ Pass / ❌ Fail | [Details] |
| Opportunity Statement | ✅ Pass / ⚠️ Warning | [Details] |
| Evidence | ✅ Pass / ⚠️ Warning | [Details] |
| Outcome Links | ✅ Pass / ❌ Fail | [Details] |
| Formatting | ✅ Pass / ⚠️ Warning | [Details] |

### Errors (Must Fix)

❌ **Error 1:** [Description]
- **Location:** [Where in document]
- **Expected:** [What should be there]
- **Found:** [What was found]
- **Fix:** [How to fix]

❌ **Error 2:** [Description]
[Same structure]

### Warnings (Should Fix)

⚠️ **Warning 1:** [Description]
- **Location:** [Where in document]
- **Issue:** [What's concerning]
- **Recommendation:** [How to improve]

### Suggestions (Nice to Have)

💡 **Suggestion 1:** [Description]
- [How this would improve the document]

### Opportunity Statement Quality

**Current Statement:**
> [The statement from the document]

**Quality Assessment:**
- [X] Problem-focused (not solution)
- [X] Follows standard format
- [ ] Specific enough to act on
- [X] Customer-centric

**If Issues:**
Suggested revision:
> [Improved statement]

### Evidence Quality

**Sources Found:** [Count]
**Quote Count:** [Count]
**Recency:** [Most recent date]

**Quality Score:** [X/10]

**Issues:**
- [Evidence issue 1]
- [Evidence issue 2]

### Link Validation

| Link | Status | Target Exists |
|------|--------|---------------|
| [[outcome-link]] | ✅ Valid / ❌ Broken | Yes/No |

### Actions Required

**Before Valid:**
1. [ ] [Fix error 1]
2. [ ] [Fix error 2]

**Recommended:**
1. [ ] [Address warning 1]
2. [ ] [Address warning 2]

## Related Documents

- [[Opportunity template]]
- [[RULES.md]]
```

## Confidence Scoring

- **High:** All checks pass, no errors
- **Medium:** Minor warnings, no errors
- **Low:** Errors found, requires fixes

## Example

**Input:** Opportunity document missing outcome links and with solution-focused statement.

**Output:** Validation report with 2 errors (missing outcome link, solution-focused statement) and suggested fixes to make document valid.

## Related Skills

- [[frame-opportunity]] - Creates properly formatted opportunities
- [[link-to-outcomes]] - Fixes outcome link issues
- [[validate-strategic-alignment]] - Validates alignment

## Used By Commands

- `agentflow.identify-opportunities` - Validates before saving
- `agentflow.orchestrate` - Stage 4 validation


