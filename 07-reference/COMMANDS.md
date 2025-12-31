# Product Brain Commands Quick Reference

**Last Updated:** 2025-12-17  
**Purpose:** Quick reference for all product management commands with the `pm.` prefix.

## Command Reference

| # | Command | When to Use | Your Involvement |
|---|---------|-------------|------------------|
| 1 | `pm.process-inbox-todo` | Process new inbox items | Approve HIGH/MEDIUM risk integrations |
| 2 | `pm.extract-insights` | Extract insights from research | Validate insights |
| 3 | `pm.synthesize-research` | Combine multiple research sources (optional) | Review synthesis |
| 4 | `pm.identify-opportunities` | Create opportunities from research | Approve opportunity creation |
| 5 | `pm.apply-decision-framework` | Assess solutions or prioritize | Review and make final decisions |

## Command Details

### 1. pm.process-inbox-todo

**Purpose:** Process inbox items and suggest integrations into the knowledge base.

**When to use:**
- You have new items in the inbox kanban board
- You want to analyze and organize incoming content
- You need to route content to appropriate sections

**Your involvement:**
- Review integration suggestions organized by risk level
- Approve HIGH/MEDIUM risk integrations (Strategy, Initiatives, Outcomes, Opportunities)
- Select which integrations to execute

**Risk levels:**
- **HIGH RISK:** Strategy, Initiatives (requires explicit approval)
- **MEDIUM RISK:** Business Outcomes, Product Outcomes, Opportunities, Research (requires explicit approval)
- **LOW RISK:** Solutions, Experiments, Communications (streamlined approval)

---

### 4. pm.identify-opportunities

**Purpose:** Create opportunities from research insights or validate existing opportunities.

**When to use:**
- You have research insights that reveal customer needs
- You want to validate opportunity format and calculate scores
- You need to prioritize opportunities (Active/Backlog/Archive)

**Your involvement:**
- Approve opportunity creation (MEDIUM RISK)
- **Make prioritization decision:** Active vs Backlog vs Archive
- Review opportunity scores and evidence

**Output:**
- Opportunity documents with JTBD scores
- Prioritization suggestions based on scores
- Validation of opportunity format and evidence

---

### 5. pm.apply-decision-framework

**Purpose:** Apply decision frameworks (risk assessment, prioritization) to solutions or other items.

**When to use:**
- You need to assess solution risks (Four Product Risks Framework)
- You want to prioritize multiple items
- You need to evaluate innovation opportunities

**Your involvement:**
- Review risk assessments
- **Make solution selection decision**
- Approve prioritization recommendations

**Frameworks used:**
- Four Product Risks (Value, Usability, Feasibility, Business Viability)
- Innovation Decision Framework (for roadmap items)
- Jobs to Be Done (for opportunity scoring)

---

### 2. pm.extract-insights

**Purpose:** Extract key insights from research documents.

**When to use:**
- You have research documents that need analysis
- You want to identify patterns and key findings
- You need to synthesize research into actionable insights

**Your involvement:**
- Validate extracted insights
- Approve insight documents
- Review evidence quality

**Output:**
- Insight documents in `03-discovery/insights/`
- Links to source research
- Opportunities suggested from insights

---

### 3. pm.synthesize-research

**Purpose:** Combine multiple research sources into synthesized findings.

**When to use:**
- You have multiple research documents on the same topic
- You want to combine findings from different sources
- You need a comprehensive view of research

**Your involvement:**
- Review synthesized findings
- Validate synthesis quality
- Approve synthesis documents

**Output:**
- Synthesis documents
- Combined insights from multiple sources
- Opportunities identified from synthesis

---

## Workflow Integration

### Typical Workflow Order

**Step 1: Inbox Processing**
```
pm.process-inbox-todo
```
→ Analyzes inbox items and suggests integrations
→ Creates opportunities, research documents, etc.

**Step 2: Insight Extraction** (if research documents created)
```
pm.extract-insights
```
→ Extracts insights from research documents
→ Identifies key findings and patterns

**Step 3: Research Synthesis** (optional - if multiple sources)
```
pm.synthesize-research
```
→ Combines multiple research sources
→ Creates comprehensive synthesis

**Step 4: Opportunity Creation**
```
pm.identify-opportunities
```
→ Creates opportunities from insights
→ Validates opportunity format and calculates scores
→ **You decide:** Active vs Backlog vs Archive

**Step 5: Solution Assessment**
```
pm.apply-decision-framework
```
→ Assesses solution risks (Four Product Risks)
→ Suggests which solutions to pursue
→ **You decide:** Which solution(s) to select

---

## Decision Points

### Commands Requiring Human Decisions

**Always require your decision:**
- **Step 4:** `pm.identify-opportunities` - Prioritization (Active/Backlog/Archive)
- **Step 5:** `pm.apply-decision-framework` - Solution selection, prioritization

**Require approval for HIGH/MEDIUM risk:**
- **Step 1:** `pm.process-inbox-todo` - Strategy, Initiatives, Outcomes, Opportunities

**Review recommended:**
- **Step 2:** `pm.extract-insights` - Validate insights
- **Step 3:** `pm.synthesize-research` - Review synthesis (if used)

---

## Related Documents

- [Decision Framework](./methodology/decision-framework.md) - Overall decision framework
- [Idea Kanban Guide](./methodology/idea-kanban-guide.md) - Kanban workflow
- [Decision Log Format](./methodology/decision-log-format.md) - Decision logging

