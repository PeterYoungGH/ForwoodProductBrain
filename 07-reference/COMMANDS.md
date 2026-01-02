# Product Brain Commands Quick Reference

**Last Updated:** 2025-12-17  
**Purpose:** Quick reference for all product management commands with the `pm.` prefix.

## Command Reference

| # | Command | When to Use | Your Involvement |
|---|---------|-------------|------------------|
| 0 | `pm.orchestrate-workflow` | **Orchestrator** - Run all commands in sequence | Make decisions at decision points |
| 1 | `pm.process-inbox-todo` | Process new inbox items | Approve HIGH/MEDIUM risk integrations |
| 2 | `pm.extract-insights` | Extract insights from research | Validate insights |
| 3 | `pm.synthesize-research` | Combine multiple research sources (optional) | Review synthesis |
| 4 | `pm.identify-opportunities` | Create opportunities from research | Approve opportunity creation |
| 5 | `pm.apply-decision-framework` | Assess solutions or prioritize | Review and make final decisions |
| 6 | `pm.create-executive-summary` | Create executive summaries for any document | Review and approve summary |

## Command Details

### 0. pm.orchestrate-workflow

**Purpose:** Orchestrator command that coordinates and executes all pm.xxx commands in sequence, respecting workflow rules and human decision points.

**When to use:**
- You want to process the entire workflow automatically
- You have items at multiple stages and want to process them all
- You want the system to detect what needs processing and execute it
- You want to run the full workflow from inbox to solution assessment

**Your involvement:**
- Make decisions at human decision points (🔴)
- Approve integrations when prompted (Step 1)
- Prioritize opportunities (Step 4)
- Select solutions (Step 5)

**How it works:**
1. Detects current workflow stage by analyzing knowledge base state
2. Executes commands sequentially in the correct order
3. Stops at human decision points and reports what needs your input
4. Continues as far as possible within the rules
5. Reports summary of what was completed and what needs decisions

**Workflow sequence:**
- **Step 1:** `pm.process-inbox-todo` (if items in To Do)
- **Step 2:** `pm.extract-insights` (if research exists)
- **Step 3:** `pm.synthesize-research` (optional, if multiple sources)
- **Step 4:** `pm.identify-opportunities` (stops for your decision)
- **Step 5:** `pm.apply-decision-framework` (stops for your decision)

**Output:**
- Summary of all stages detected
- List of commands executed
- Documents created/updated
- Human decision points reached
- Next steps guidance

**Note:** You can run this command multiple times - it will pick up where it left off after you make decisions.

---

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

### 6. pm.create-executive-summary

**Purpose:** Create executive summaries (one page or less) for ideas, opportunities, solutions, or other documents.

**When to use:**
- You need to present a document to executives
- You want a concise summary for decision-making
- You need to explain complex documents in executive-friendly language
- You want framework-based analysis for executive review

**Your involvement:**
- Review executive summary for accuracy
- Approve summary before sharing
- Validate framework application

**Output:**
- Executive summary document (one page or less)
- Framework-based analysis (Innovation Decision, Four Product Risks, Jobs to Be Done)
- Strategic alignment and business impact
- Clear recommendations and next steps

**Frameworks used:**
- Innovation Decision Framework (for innovation ideas)
- Four Product Risks (for solutions)
- Jobs to Be Done (for opportunities)
- Strategic Pillars and Mission (for all documents)

---

## Workflow Integration

### Orchestrator Command (Recommended)

**Run all commands in sequence:**
```
pm.orchestrate-workflow
```
→ Detects current workflow stage
→ Executes all applicable commands in order
→ Stops at human decision points
→ Reports results and next steps

**Use this when:** You want to process the entire workflow automatically from inbox through solution assessment.

---

### Manual Workflow Order

If you prefer to run commands individually:

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

