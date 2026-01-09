# Identify Duplicates

**Category:** Triage
**Strategic Theme:** N/A
**Autonomy Level:** Full
**Workflow Stages:** 1 (Inbox Processing)

## Purpose

Find related or duplicate existing items in the knowledge base to prevent duplication, enable linking, and inform routing decisions.

## Inputs Required

- **Content Summary:** Brief summary of the new content
- **Content Type:** Classification from `classify-content-type`
- **Key Terms:** Important keywords and concepts
- **Suggested Destination:** Where content would be routed

## Process Steps

### Step 1: Extract Search Terms

Identify key terms for matching:
- Primary topic/subject
- Customer or stakeholder names
- Product or feature names
- Date ranges (if time-sensitive)
- Technical terms or acronyms

### Step 2: Search Target Directories

Search in priority order:
1. **Suggested destination directory** - Most likely location
2. **Related directories** - Similar content types
3. **Inbox** - Unprocessed items
4. **Archive** - Previously processed items

### Step 3: Apply Matching Criteria

For each potential match, assess:

| Criteria | Weight | Description |
|----------|--------|-------------|
| Title similarity | High | Filename or heading matches |
| Topic overlap | High | Same subject matter |
| Source overlap | Medium | Same customer/stakeholder |
| Date proximity | Medium | Within similar timeframe |
| Content overlap | High | Similar text or quotes |

### Step 4: Categorize Matches

Classify each match:
- **Exact Duplicate:** Same content, should not create new
- **Update Candidate:** Related content that should be updated
- **Related Document:** Should be linked, not merged
- **False Positive:** Similar terms but different topic

### Step 5: Calculate Similarity Score

For each match:
- **90-100%:** Exact or near-exact duplicate
- **70-89%:** Strong candidate for update/merge
- **50-69%:** Related, should link
- **<50%:** Weak match, likely false positive

## Output Format

```markdown
## Duplicate Analysis

**Search Terms:** [Key terms used]
**Directories Searched:** [List of directories]
**Matches Found:** [Count]

### Exact Duplicates (Action: Do Not Create)
| Document | Similarity | Rationale |
|----------|------------|-----------|
| [[path/to/doc.md]] | 95% | [Why it's a duplicate] |

### Update Candidates (Action: Update Instead of Create)
| Document | Similarity | Suggested Action |
|----------|------------|------------------|
| [[path/to/doc.md]] | 80% | [What to update] |

### Related Documents (Action: Link)
| Document | Similarity | Relationship |
|----------|------------|--------------|
| [[path/to/doc.md]] | 60% | [How they relate] |

### Recommendation
**Action:** [Create New | Update Existing | Do Not Create | Merge]
**Rationale:** [Explanation]
**Target Document:** [If update/merge, which document]
```

## Confidence Scoring

- **High:** Clear matches found, unambiguous relationship
- **Medium:** Partial matches, judgment needed
- **Low:** No clear matches but uncertain if truly unique

## Example

**Input:**
- Content Summary: Customer feedback from Rossing about mobile app usability
- Content Type: Feedback
- Key Terms: Rossing, mobile, usability, navigation
- Destination: `03-discovery/research/user-research/`

**Output:**
```markdown
## Duplicate Analysis

**Search Terms:** Rossing, mobile, usability, navigation
**Directories Searched:** 03-discovery/research/, 03-discovery/insights/, 00-inbox/
**Matches Found:** 3

### Exact Duplicates (Action: Do Not Create)
None found.

### Update Candidates (Action: Update Instead of Create)
| Document | Similarity | Suggested Action |
|----------|------------|------------------|
| [[03-discovery/research/user-research/rossing-forwood-one-platform-meeting-2025-12.md]] | 75% | Add mobile feedback section |

### Related Documents (Action: Link)
| Document | Similarity | Relationship |
|----------|------------|--------------|
| [[03-discovery/insights/rossing-forwood-one-platform-questions-2025-12.md]] | 55% | Related customer questions |
| [[04-opportunities/03-opportunities/backlog/mobile-navigation-improvement.md]] | 50% | Related opportunity |

### Recommendation
**Action:** Create New, Link to Related
**Rationale:** Content is new feedback not covered in existing docs, but should link to existing Rossing research and related opportunity.
**Target Document:** Create `2026-01-08-rossing-mobile-usability-feedback.md`
```

## Related Skills

- [[classify-content-type]] - Provides content type for search scope
- [[route-to-destination]] - Uses duplicate info for routing decision
- [[cross-reference-sources]] - Similar pattern matching logic

## Used By Commands

- `agentflow.process-inbox` - Prevents duplicate creation
- `agentflow.orchestrate` - Ensures knowledge base integrity


