# Idea Kanban Guide

**Last Updated:** 2025-12-17  
**Purpose:** Guide for using the overall idea kanban board to track feature ideas from entry through roadmap inclusion.

## Overview

The overall idea kanban board (`⬛ Ideas Kanban.md`) provides a visual overview of where all feature ideas are in the flow, from initial entry through to roadmap inclusion. It clearly indicates which stages require human decisions vs agent automation.

## Kanban Board Location

**File:** `⬛ Ideas Kanban.md` (project root)

**Format:** Obsidian Kanban Plugin

## Column Structure

The kanban uses a hybrid approach combining flow stages with status indicators:

### 1. 📥 Inbox
**Agent:** Auto-classify, Human: Review & Approve Integration

- New ideas entered into the system
- Agent analyzes content and suggests integrations
- Human approves integration decisions
- **Risk Level:** HIGH/MEDIUM/LOW (based on target location)

**Workflow:**
1. Idea enters inbox
2. Agent analyzes and suggests integrations
3. Human reviews and approves
4. Agent executes approved integrations
5. Card moves to Discovery or appropriate stage

### 2. 🔍 Discovery
**Agent:** Extract insights, Human: Validate research quality

- Research and discovery activities
- Agent extracts insights and suggests opportunities
- Human validates research quality and approves opportunity creation
- **Risk Level:** MEDIUM (for opportunity creation)

**Workflow:**
1. Research enters discovery
2. Agent extracts insights
3. Agent suggests opportunities (requires approval)
4. Human validates research and approves opportunities
5. Card moves to Opportunity Validation

### 3. 💡 Opportunity Validation 🔴
**Human Decision Required**

- Opportunities being validated
- Agent validates format and calculates scores
- **Human decides:** Active vs Backlog vs Archive
- **Risk Level:** MEDIUM

**Workflow:**
1. Opportunity enters validation
2. Agent validates format and calculates scores
3. Agent suggests prioritization
4. **Human makes prioritization decision**
5. Card moves based on decision (Active, Backlog, or stays in validation)

### 4. 🎯 Solution Exploration
**Agent:** Assess risks, Human: Select solutions

- Solutions being explored
- Agent assesses four product risks
- **Human decides:** Which solutions to pursue
- **Risk Level:** LOW (creation), MEDIUM (selection)

**Workflow:**
1. Solution enters exploration
2. Agent assesses four product risks
3. Agent suggests best solution
4. **Human makes selection decision**
5. Card moves to Experimentation or Active

### 5. 🧪 Experimentation
**Agent:** Design & analyze, Human: Go/No-Go

- Experiments in progress
- Agent designs experiments and analyzes results
- **Human decides:** Proceed, iterate, or abandon
- **Risk Level:** MEDIUM (for go/no-go)

**Workflow:**
1. Experiment enters experimentation
2. Agent designs experiment (human validates)
3. Experiment runs
4. Agent analyzes results
5. **Human makes go/no-go decision**
6. Card moves based on decision (Active, back to Solution Exploration, or Archive)

### 6. 📋 Roadmap Inclusion 🔴
**Human Decision Required**

- Ideas ready for roadmap
- Agent calculates innovation scores and suggests placement
- **Human decides:** Initiative creation and roadmap placement
- **Risk Level:** HIGH

**Workflow:**
1. Idea enters roadmap inclusion
2. Agent calculates innovation scores
3. Agent suggests roadmap placement
4. **Human makes initiative/roadmap decision**
5. Card moves to Active

### 7. ✅ Active
**Ongoing**

- Ideas actively in development or on roadmap
- Tracked for ongoing decision tracking
- May move back to other stages if needed

## Human vs Agent Indicators

### Column Labels

- **🔴 = Human decision required at this stage**
  - Opportunity Validation
  - Roadmap Inclusion
  - Any stage where human makes final decision

- **🤖 = Agent automation (with human review)**
  - Not currently used in column headers
  - Indicated in column descriptions

- **No icon = Mixed (agent facilitates, human approves)**
  - Inbox
  - Discovery
  - Solution Exploration
  - Experimentation

### Card Content

Each card should show:
- **Title:** Idea/opportunity/solution name
- **Last Decision:** Most recent decision made (e.g., "Approved", "Needs Review", "Moved to Active")
- **Decision Date:** When last decision was made
- **Decision Maker:** Human name or "Agent"

**Card Format Example:**
```markdown
- [ ] [[opportunity-name]] - Last Decision: Move to Active (2025-12-17, John Smith)
```

## Card Metadata

Cards should link to their source documents and include:
- Link to opportunity/solution/experiment document
- Current status (Active, Proposed, Backlog, etc.)
- Priority (if applicable)
- Last decision log entry
- Related outcomes

## Agent Integration

### Agent Capabilities

**Auto-move cards:**
- When agent actions complete (within agent capabilities)
- Within Discovery stage (after processing)
- Within Solution Exploration (after format validation)
- Within Experimentation (after design suggestions)

**Flag cards:**
- For human review when human decision required
- When HIGH/MEDIUM risk decisions needed
- When agent cannot proceed autonomously

**Update card metadata:**
- With decision information
- With status changes
- With last decision details

**Link cards:**
- To decision logs in documents
- To related documents
- To outcomes

### Agent Limitations

**Cannot:**
- Move cards to stages requiring human decisions without approval
- Make final decisions for HIGH/MEDIUM risk items
- Update cards for HIGH/MEDIUM risk decisions without human approval

**Must:**
- Flag cards when human review needed
- Update decision tracking when moving cards
- Log decisions when making agent decisions

## Human Workflow

### When Human Decision Required

1. **Card appears in stage with 🔴 indicator**
   - Opportunity Validation
   - Roadmap Inclusion
   - Any stage requiring human decision

2. **Human reviews card and related documents**
   - Read opportunity/solution/experiment document
   - Review decision history
   - Check agent suggestions

3. **Human makes decision (using decision framework)**
   - Use appropriate decision rules
   - Consider agent suggestions
   - Apply decision criteria

4. **Human logs decision in document**
   - Create decision log entry
   - Update decision history section
   - Document rationale

5. **Human moves card to next stage (or agent moves after approval)**
   - Move card based on decision
   - Or approve agent to move card

### When Agent Automation

1. **Agent processes work within capabilities**
   - Analyzes content
   - Validates format
   - Calculates scores
   - Assesses risks

2. **Agent updates card metadata with decision info**
   - Updates last decision
   - Updates decision date
   - Updates decision maker

3. **Agent moves card to next stage (if no human decision needed)**
   - Within agent capabilities
   - After processing complete

4. **Agent flags for human review if needed**
   - When human decision required
   - When HIGH/MEDIUM risk

## Integration with Decision Tracking

### Card Updates from Decisions

- Cards automatically update when decisions are made
- Decision history visible in card metadata
- Decision changes trigger card updates
- Reconciliation process updates kanban position

### Linking Cards to Decision Logs

- Cards link to decision logs in documents
- Decision history accessible from cards
- Cards show last decision for quick status overview

## Best Practices

1. **Keep Cards Updated**
   - Update cards when decisions are made
   - Update metadata with decision information
   - Keep links current

2. **Use Decision History**
   - Check decision history before making decisions
   - Review previous decisions for context
   - Learn from past decisions

3. **Flag for Review**
   - Flag cards when human review needed
   - Don't let cards sit in human-decision stages
   - Process cards regularly

4. **Maintain Links**
   - Keep card links to documents current
   - Verify links work correctly
   - Update links when documents move

5. **Track Decisions**
   - Log all decisions in documents
   - Update cards with decision information
   - Maintain decision history

## Common Workflows

### New Idea Entry
1. Idea enters 📥 Inbox
2. Agent analyzes and suggests integrations
3. Human approves integrations
4. Card moves to 🔍 Discovery or appropriate stage

### Opportunity Validation
1. Opportunity enters 💡 Opportunity Validation 🔴
2. Agent validates format and calculates score
3. Agent suggests prioritization
4. **Human makes prioritization decision**
5. Card moves to ✅ Active, Backlog, or stays in validation

### Solution Selection
1. Solution enters 🎯 Solution Exploration
2. Agent assesses four product risks
3. Agent suggests best solution
4. **Human makes selection decision**
5. Card moves to 🧪 Experimentation or ✅ Active

### Experiment Go/No-Go
1. Experiment enters 🧪 Experimentation
2. Agent analyzes results
3. Agent suggests decision
4. **Human makes go/no-go decision**
5. Card moves to ✅ Active, back to 🎯 Solution Exploration, or Archive

### Roadmap Inclusion
1. Idea enters 📋 Roadmap Inclusion 🔴
2. Agent calculates innovation scores
3. Agent suggests roadmap placement
4. **Human makes initiative/roadmap decision**
5. Card moves to ✅ Active

## Related Documents

- [Decision Framework](./decision-framework.md) - Overall decision framework
- [Decision Log Format](./decision-log-format.md) - Decision logging format
- [Kanban Update Prompt](../prompts/decision-facilitation/kanban-update-prompt.md) - Agent prompt for updating kanban

