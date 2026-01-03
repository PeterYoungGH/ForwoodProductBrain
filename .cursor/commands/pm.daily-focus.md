# pm.daily-focus

**Daily Prioritization Command** - Analyzes the Ideas Kanban board and identifies the top 2-3 items that need your attention today.

## Command Purpose

This command provides a simple, digestible daily focus by:
1. Reading the Ideas Kanban board to understand current workflow state
2. Identifying items that need decisions or processing
3. Prioritizing based on decision points, workflow stages, and blocking items
4. Presenting a concise summary of the top 2-3 things to focus on

## Execution Steps

### Step 1: Read the Ideas Kanban Board

1. **Read the Main Kanban Board**
   - File: `⬛ Ideas Kanban.md`
   - Purpose: Understand current workflow state and identify items in each stage
   - Action: Parse the kanban board to count items in each column:
     - 📥 Inbox
     - 🔍 Discovery
     - 💡 Opportunity Validation 🔴
     - 🎯 Solution Exploration
     - 🧪 Experimentation
     - 📋 Roadmap Inclusion 🔴
     - ✅ Active

2. **Extract Card Information**
   - For each card, extract:
     - Card title/display text
     - File path (from markdown link)
     - Column location
     - Any metadata (dates, decisions, status notes)

### Step 2: Analyze Decision Points and Priorities

1. **Identify Decision Points (🔴 Columns)**
   - **💡 Opportunity Validation 🔴**: Count items needing prioritization decisions
   - **📋 Roadmap Inclusion 🔴**: Count items needing roadmap/initiative decisions
   - **Priority:** Items in 🔴 columns are highest priority (human decisions required)

2. **Identify Blocking Items**
   - **📥 Inbox**: Items that haven't been processed (block workflow start)
   - **🔍 Discovery**: Research items that may need insight extraction
   - **Priority:** Items in earlier stages can block downstream work

3. **Identify Items Needing Processing**
   - **🎯 Solution Exploration**: Solutions that may need risk assessment or selection
   - **🧪 Experimentation**: Experiments that may need design or results analysis
   - **Priority:** Items that have been waiting or need agent processing

4. **Check for Stale Items**
   - Look for items with old dates or that have been in a stage for a while
   - Flag items that may need attention due to age

### Step 3: Prioritize Top Items

**Prioritization Logic (in order):**

1. **🔴 Decision Columns (Highest Priority)**
   - Items in "💡 Opportunity Validation 🔴" - need prioritization decisions
   - Items in "📋 Roadmap Inclusion 🔴" - need roadmap/initiative decisions
   - These block workflow progress

2. **Blocking Items (High Priority)**
   - Items in "📥 Inbox" - need processing to start workflow
   - Items in "🔍 Discovery" - may need insight extraction to create opportunities

3. **Items Needing Processing (Medium Priority)**
   - Items in "🎯 Solution Exploration" - may need risk assessment
   - Items in "🧪 Experimentation" - may need experiment design or results analysis

4. **Stale Items (Lower Priority)**
   - Items that have been in a stage for a while without progress

**Selection Criteria:**
- Select top 2-3 items total
- Prefer items in 🔴 columns (decision points)
- If multiple items in same priority level, prefer:
  - Items that have been waiting longer
  - Items that block other work
  - Items with more context/metadata

### Step 4: Generate Simple, Digestible Response

**Response Format:**

Create a simple, focused response (not a markdown file) that includes:

1. **Quick Summary**
   - Total items across all stages
   - Number of decision points (🔴 items)

2. **Top 2-3 Focus Items**
   - For each item, provide:
     - **What:** Brief title/description
     - **Where:** Which kanban column
     - **Why:** Why it needs attention (decision needed, blocking, etc.)
     - **Action:** What you should do (make decision, run command, etc.)

3. **Optional: Quick Context**
   - Brief note about workflow state if helpful
   - Any patterns or observations (e.g., "3 items waiting for your decisions")

**Response Style:**
- Keep it brief and scannable
- Use simple language
- Focus on actionable items
- Avoid overwhelming detail
- Make it easy to digest in 30 seconds

### Step 5: Regenerate Ideas Kanban Canvas

After generating the daily focus response:

1. **Regenerate Canvas:**
   - Run the canvas generation script to update the Ideas Kanban Canvas
   - Command: Execute `.cursor/scripts/regenerate_ideas_kanban_canvas.py`
   - Purpose: Update canvas visualization to reflect current workflow state
   - This ensures the canvas always shows the latest state when viewing daily focus

2. **Canvas Update Process:**
   - Script automatically parses the Ideas Kanban board
   - Scans all referenced documents
   - Rebuilds relationship graph
   - Regenerates canvas JSON file
   - Updates `Ideas Kanban Canvas.canvas` with latest nodes and edges

3. **Error Handling:**
   - If canvas generation fails, log error but don't fail the daily focus command
   - Canvas update is non-blocking
   - User should still see daily focus results even if canvas update fails

**Note:** Canvas regeneration happens automatically at the end of daily focus generation, ensuring the visual representation stays in sync with workflow state.

### Step 6: Present Response

**Output Format:**

Present the response directly (not as a markdown file). Use a format like:

```
📊 Daily Focus - [Current Date]

Quick Stats:
• [X] items across all stages
• [Y] items need your decisions (🔴)

🎯 Top 2-3 Things to Focus On:

1. [Item Title]
   📍 [Column Name]
   ⚠️ [Why it needs attention]
   → [Action to take]

2. [Item Title]
   📍 [Column Name]
   ⚠️ [Why it needs attention]
   → [Action to take]

3. [Item Title] (if applicable)
   📍 [Column Name]
   ⚠️ [Why it needs attention]
   → [Action to take]
```

## Example Response

```
📊 Daily Focus - 2025-12-17

Quick Stats:
• 15 items across all stages
• 2 items need your decisions (🔴)

🎯 Top 2-3 Things to Focus On:

1. Enterprise Compliance-First Features
   📍 Opportunity Validation 🔴
   ⚠️ Needs prioritization decision (Active/Backlog/Archive)
   → Run: pm.identify-opportunities to review scores and decide

2. URL Schema for Forwood One
   📍 Solution Exploration
   ⚠️ Solution selected but may need experiment design
   → Review solution and consider experiment design if needed

3. Forwood One Migration Experience Framework
   📍 Inbox
   ⚠️ New item waiting to be processed
   → Run: pm.process-inbox-todo to analyze and suggest integrations
```

## Usage

Run the command:
```
pm.daily-focus
```

The command will:
1. Analyze the Ideas Kanban board
2. Identify decision points and priorities
3. Present top 2-3 items needing attention
4. Provide actionable next steps

**Run Frequency:**
- Daily (recommended)
- Multiple times per day if you're processing items quickly
- Anytime you want to refocus on priorities

## Related Commands

- `pm.orchestrate-workflow` - Process items through the full workflow
- `pm.process-inbox-todo` - Process inbox items
- `pm.identify-opportunities` - Validate and prioritize opportunities
- `pm.apply-decision-framework` - Assess solutions and make decisions

## Related Methodology

- [Idea Kanban Guide](../../07-reference/methodology/idea-kanban-guide.md) - Kanban workflow stages
- [Decision Framework](../../07-reference/methodology/decision-framework.md) - Decision points and frameworks
- [Workflow Rules](../../.cursorrules) - Overall workflow guidance

