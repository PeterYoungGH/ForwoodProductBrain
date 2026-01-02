# pm.orchestrate-workflow

**Orchestrator Command** - Coordinates and executes all pm.xxx commands in sequence, respecting workflow rules and human decision points.

## Command Purpose

This command acts as an orchestrator that:
1. Detects the current workflow stage by analyzing the knowledge base state and kanban boards
2. Executes pm.xxx commands sequentially in the correct order
3. Respects established rules and risk levels
4. Stops at human decision points and reports what needs user input
5. Updates kanban boards to reflect workflow progress
6. Continues as far as possible within the rules
7. Provides progress reporting and workflow state visualization

## Workflow Stages and Command Sequence

The orchestrator follows this sequence covering all 7 workflow stages:

1. **Step 1: Inbox Processing** → `pm.process-inbox-todo` (stops for human decision)
2. **Step 2: Insight Extraction** → `pm.extract-insights` (if research exists)
3. **Step 3: Research Synthesis** → `pm.synthesize-research` (optional, if multiple sources)
4. **Step 4: Opportunity Validation** → `pm.identify-opportunities` (stops for human decision)
5. **Step 5: Solution Exploration** → `pm.apply-decision-framework` (stops for human decision)
6. **Step 6: Experimentation** → Experiment design/analysis (stops for human decision)
7. **Step 7: Roadmap Inclusion** → Innovation scoring and roadmap placement (stops for human decision)

## Execution Steps

### Step 1: Detect Current Workflow Stage

The orchestrator analyzes the knowledge base and kanban boards to determine what stage items are at. Detection uses multiple sources:

#### 1.0 Read Kanban Boards for Stage Detection

**Primary Detection Method:**
- **Read:** `⬛ Ideas Kanban.md` (overall workflow kanban)
- **Read:** `00-inbox/⬛ Inbox.md` (inbox kanban)
- **Check:** Card positions in columns to determine current stage
- **Action:** Use kanban position as primary indicator of workflow stage
- **Detection:**
  - Parse kanban board markdown to identify cards in each column
  - Map kanban columns to workflow stages:
    - 📥 Inbox → Stage 1 (Inbox Processing)
    - 🔍 Discovery → Stage 2 (Insight Extraction) or Stage 3 (Research Synthesis)
    - 💡 Opportunity Validation 🔴 → Stage 4 (Opportunity Validation)
    - 🎯 Solution Exploration → Stage 5 (Solution Exploration)
    - 🧪 Experimentation → Stage 6 (Experimentation)
    - 📋 Roadmap Inclusion 🔴 → Stage 7 (Roadmap Inclusion)
    - ✅ Active → Completed items (no processing needed)

**Reconciliation:**
- Compare kanban position with document status
- Flag mismatches for user attention
- Use document status if kanban position unclear

#### 1.1 Check Inbox Stage

- **Read:** `00-inbox/⬛ Inbox.md`
- **Check:** Items in "To Do" column
- **Check:** Kanban board for items in "📥 Inbox" or "To Do" columns
- **Action:** If items found → Stage 1 (Inbox Processing)
- **Detection:** 
  - Count items in "To Do" column
  - Count items in "📥 Inbox" column in main kanban
  - Prioritize kanban-based detection

#### 1.2 Check Research Stage

- **Read:** `03-discovery/research/` directory
- **Read:** Kanban board for items in "🔍 Discovery" column
- **Check:** Research documents that don't have corresponding insights
- **Action:** If research without insights found → Stage 2 (Insight Extraction)
- **Detection:** 
  - List all research files in `03-discovery/research/`
  - Check if corresponding insight files exist in `03-discovery/insights/`
  - Check kanban for cards in "🔍 Discovery" column
  - Research files without insights need processing

#### 1.3 Check Synthesis Stage (Optional)

- **Read:** `03-discovery/research/` directory
- **Read:** Kanban board for items in "🔍 Discovery" column
- **Check:** Multiple research documents on same topic
- **Action:** If multiple related sources found → Stage 3 (Research Synthesis)
- **Detection:** 
  - Group research by topic/theme
  - Identify groups with 2+ documents
  - Check if synthesis would be valuable

#### 1.4 Check Opportunity Stage

- **Read:** `03-discovery/insights/` directory
- **Read:** `04-opportunities/03-opportunities/active/` and `backlog/`
- **Read:** Kanban board for items in "💡 Opportunity Validation 🔴" column
- **Check:** Insights that haven't been converted to opportunities
- **Check:** Opportunities that need validation or prioritization
- **Action:** If insights without opportunities OR opportunities needing validation → Stage 4 (Opportunity Validation)
- **Detection:**
  - Insights without linked opportunities
  - Opportunities in active/backlog that need validation (check decision history)
  - Cards in "💡 Opportunity Validation 🔴" column
  - Opportunities missing prioritization decisions

#### 1.5 Check Solution Stage

- **Read:** `04-opportunities/04-solutions/active/` and `proposed/`
- **Read:** Kanban board for items in "🎯 Solution Exploration" column
- **Check:** Solutions that need risk assessment
- **Action:** If solutions without risk assessment found → Stage 5 (Solution Exploration)
- **Detection:**
  - Solutions without risk assessment sections
  - Solutions in proposed/active that need framework application
  - Cards in "🎯 Solution Exploration" column
  - Solutions missing selection decisions

#### 1.6 Check Experiment Stage

- **Read:** `04-opportunities/05-experiments/active/`, `planned/`, `completed/`
- **Read:** Kanban board for items in "🧪 Experimentation" column
- **Check:** Experiments needing design or results analysis
- **Action:** If experiments needing processing found → Stage 6 (Experimentation)
- **Detection:**
  - Solutions with selected status but no experiments
  - Experiments in "planned/" without design
  - Experiments in "active/" that may need results analysis
  - Experiments in "completed/" needing go/no-go decisions
  - Cards in "🧪 Experimentation" column
  - Check decision history for go/no-go decisions

#### 1.7 Check Roadmap Inclusion Stage

- **Read:** `02-initiatives/active/` and `planned/`
- **Read:** `01-strategy/roadmap/` directory
- **Read:** Kanban board for items in "📋 Roadmap Inclusion 🔴" column
- **Check:** Validated solutions ready for roadmap
- **Action:** If validated solutions ready for roadmap found → Stage 7 (Roadmap Inclusion)
- **Detection:**
  - Solutions with "Proceed" go/no-go decisions
  - Solutions validated through experiments
  - Items in "📋 Roadmap Inclusion 🔴" kanban column
  - Solutions missing innovation scores
  - Solutions missing roadmap placement
  - Check for initiative creation needs

### Step 2: Execute Commands Sequentially

The orchestrator executes commands in order, stopping at human decision points and updating kanban boards:

#### 2.1 Execute Step 1: Inbox Processing

**If Stage 1 detected (items in To Do or Inbox kanban column):**

1. **Execute:** `pm.process-inbox-todo`
   - Follow the full command execution steps from `pm.process-inbox-todo.md`
   - Process all items in "To Do" column or "📥 Inbox" kanban column
   - Present integration suggestions to user
   - **STOP and WAIT** for user to select checkboxes
   - Execute only selected integrations
   - Continue to next stage detection after completion

2. **Update Kanban Board:**
   - Move processed items from "📥 Inbox" to "🔍 Discovery" or appropriate column
   - Update card metadata with processing date
   - Link cards to created documents

3. **After completion:**
   - Re-detect workflow stage (new research/opportunities may have been created)
   - Continue to Step 2 if research was created

**If no items in To Do:**
- Skip Step 1
- Continue to Step 2

#### 2.2 Execute Step 2: Insight Extraction

**If Stage 2 detected (research without insights or in Discovery kanban column):**

1. **Execute:** `pm.extract-insights`
   - For each research document without insights:
     - Follow the full command execution steps from `pm.extract-insights.md`
     - Extract insights from research
     - Create insight documents in `03-discovery/insights/`
   - Continue to next stage detection after completion

2. **Update Kanban Board:**
   - Update cards in "🔍 Discovery" column with insight extraction status
   - Link cards to created insight documents
   - Move cards to "💡 Opportunity Validation 🔴" if opportunities created

3. **After completion:**
   - Re-detect workflow stage
   - Continue to Step 3 if multiple sources exist, or Step 4 if insights ready

**If no research without insights:**
- Skip Step 2
- Continue to Step 3 or Step 4

#### 2.3 Execute Step 3: Research Synthesis (Optional)

**If Stage 3 detected (multiple related research sources):**

1. **Execute:** `pm.synthesize-research`
   - For each group of related research documents:
     - Follow the full command execution steps from `pm.synthesize-research.md`
     - Synthesize multiple sources
     - Create synthesis document
   - Continue to next stage detection after completion

2. **Update Kanban Board:**
   - Update cards in "🔍 Discovery" column with synthesis status
   - Link cards to synthesis documents

3. **After completion:**
   - Re-detect workflow stage
   - Continue to Step 4

**If no multiple related sources:**
- Skip Step 3
- Continue to Step 4

#### 2.4 Execute Step 4: Opportunity Validation

**If Stage 4 detected (insights without opportunities OR opportunities needing validation OR in Opportunity Validation kanban column):**

1. **Execute:** `pm.identify-opportunities`
   - For insights without opportunities:
     - Follow the full command execution steps from `pm.identify-opportunities.md`
     - Create opportunities from insights
     - Calculate opportunity scores
   - For opportunities needing validation:
     - Validate opportunity format
     - Calculate/update opportunity scores
     - Suggest prioritization
   
2. **STOP and REPORT:**
   - **🔴 HUMAN DECISION REQUIRED**
   - Report all opportunities that need prioritization
   - List opportunity scores and recommendations
   - **User must decide:** Active vs Backlog vs Archive for each opportunity
   - **Do NOT proceed** until user makes prioritization decisions

3. **After user decisions:**
   - Update opportunity documents with decisions
   - Move opportunities to appropriate directories (active/backlog/archive)
   - **Update Kanban Board:**
     - Move cards from "💡 Opportunity Validation 🔴" to:
       - "🎯 Solution Exploration" if moved to Active
       - "✅ Active" if moved to Active (if solutions exist)
       - Keep in validation if moved to Backlog
     - Update card metadata with decision and date
     - Link cards to opportunity documents
   - Continue to Step 5 if solutions exist

**If no insights/opportunities needing processing:**
- Skip Step 4
- Continue to Step 5

#### 2.5 Execute Step 5: Solution Exploration

**If Stage 5 detected (solutions needing risk assessment OR in Solution Exploration kanban column):**

1. **Execute:** `pm.apply-decision-framework`
   - For solutions without risk assessment:
     - Follow the full command execution steps from `pm.apply-decision-framework.md`
     - Apply Four Product Risks framework
     - Assess Value, Usability, Feasibility, Business Viability risks
     - Suggest which solutions to pursue

2. **STOP and REPORT:**
   - **🔴 HUMAN DECISION REQUIRED**
   - Report all solutions that need selection
   - List risk assessments and recommendations
   - **User must decide:** Which solution(s) to select and pursue
   - **Do NOT proceed** until user makes selection decisions

3. **After user decisions:**
   - Update solution documents with decisions
   - Move solutions to appropriate directories (active/archive)
   - **Update Kanban Board:**
     - Move cards from "🎯 Solution Exploration" to:
       - "🧪 Experimentation" if solution selected and needs validation
       - "✅ Active" if solution selected and ready for implementation
       - Archive if solution not selected
     - Update card metadata with decision and date
     - Link cards to solution documents
   - Continue to Step 6 if experiments needed, or Step 7 if ready for roadmap

**If no solutions needing assessment:**
- Skip Step 5
- Continue to Step 6 or Step 7

#### 2.6 Execute Step 6: Experimentation

**If Stage 6 detected (experiments needing design/results OR in Experimentation kanban column):**

1. **Determine Experiment Status:**
   - Check if experiments need design (solutions selected but no experiments)
   - Check if experiments need results analysis (experiments completed)
   - Check if go/no-go decisions needed

2. **For Experiments Needing Design:**
   - **Read:** Experiment design prompt: `07-reference/prompts/decision-facilitation/experiment-design-prompt.md`
   - **Read:** Solution documents to identify assumptions
   - **Execute:** Design experiments using the prompt
     - Form hypotheses for each assumption
     - Define success criteria
     - Design experiment method
     - Estimate resource requirements
   - **Create:** Experiment documents in `04-opportunities/05-experiments/planned/` or `active/`
   - **Update Kanban Board:**
     - Move cards to "🧪 Experimentation" if not already there
     - Update card metadata with experiment design status

3. **For Experiments Needing Results Analysis:**
   - **Read:** Experiment documents with results
   - **Analyze:** Results against success criteria
   - **Interpret:** What results mean for solution
   - **Suggest:** Go/no-go recommendation based on results

4. **STOP and REPORT:**
   - **🔴 HUMAN DECISION REQUIRED**
   - Report all experiments needing go/no-go decisions
   - List experiment results and analysis
   - **User must decide:** Proceed, Iterate, or Abandon for each experiment
   - **Do NOT proceed** until user makes go/no-go decisions

5. **After user decisions:**
   - Update experiment documents with decisions
   - Update solution documents with validation status
   - **Update Kanban Board:**
     - Move cards from "🧪 Experimentation" to:
       - "📋 Roadmap Inclusion 🔴" if decision is "Proceed" and strategic
       - "🎯 Solution Exploration" if decision is "Iterate"
       - Archive if decision is "Abandon"
     - Update card metadata with decision and date
     - Link cards to experiment documents
   - Continue to Step 7 if decision is "Proceed" and ready for roadmap

**If no experiments needing processing:**
- Skip Step 6
- Continue to Step 7

#### 2.7 Execute Step 7: Roadmap Inclusion

**If Stage 7 detected (validated solutions ready for roadmap OR in Roadmap Inclusion kanban column):**

1. **Read Required Files:**
   - Innovation Decision Framework: `07-reference/methodology/innovation-decision-framework.md`
   - Innovation Scoring Template: `07-reference/templates/innovation-scoring-template.md`
   - Roadmap Inclusion Checklist: `07-reference/templates/roadmap-inclusion-checklist.md`
   - Roadmapping Framework: `07-reference/methodology/roadmapping-framework.md`

2. **Calculate Innovation Scores:**
   - For each validated solution:
     - Apply Innovation Decision Framework
     - Score Revenue Potential (1-5)
     - Score Reach & Impact (1-5)
     - Score Buy-In & Feasibility (1-5)
     - Score Execution Difficulty (1-5)
     - Calculate overall innovation score
     - Document evidence and rationale for each score

3. **Suggest Roadmap Placement:**
   - Assess strategic alignment with roadmap themes
   - Determine appropriate roadmap layer:
     - Strategic Roadmap (6-12 months)
     - Portfolio Roadmap (3-6 months)
     - Delivery Roadmap (weekly releases)
   - Suggest timeline and quarter placement
   - Assess portfolio balance (moonshots vs small bets)

4. **STOP and REPORT:**
   - **🔴 HUMAN DECISION REQUIRED (HIGH RISK)**
   - Report all solutions ready for roadmap inclusion
   - List innovation scores and roadmap placement suggestions
   - **User must decide:**
     - Should this become a strategic initiative? (HIGH RISK)
     - Which roadmap layer and when? (HIGH RISK)
     - Portfolio prioritization
     - Resource allocation
   - **Do NOT proceed** until user makes initiative and roadmap decisions

5. **After user decisions:**
   - **If Initiative Creation Approved:**
     - Create initiative document in `02-initiatives/active/` or `planned/`
     - Link initiative to solution and opportunity
     - Set initiative scope, success metrics, timeline, ownership
   - **If Roadmap Placement Approved:**
     - Update appropriate roadmap document:
       - `01-strategy/roadmap/01-strategic-roadmap.md`
       - `01-strategy/roadmap/02-portfolio-roadmap.md`
       - `01-strategy/roadmap/03-delivery-roadmap.md`
     - Add item to roadmap with timeline
     - Link roadmap item to initiative/solution
   - **Update Kanban Board:**
     - Move cards from "📋 Roadmap Inclusion 🔴" to "✅ Active"
     - Update card metadata with initiative/roadmap decision and date
     - Link cards to initiative and roadmap documents
   - Workflow complete for this cycle

**If no solutions ready for roadmap:**
- Skip Step 7
- Report completion

### Step 3: Report Orchestration Results

After executing as many steps as possible:

1. **Summary Report**
   - List all stages detected (with counts)
   - List all commands executed
   - List all documents created/updated
   - List all kanban board updates
   - List all human decision points reached
   - List any stages skipped (no items to process)

2. **Progress Report**
   - **Workflow State Visualization:**
     ```
     📥 Inbox: [X] items
     🔍 Discovery: [X] items
     💡 Opportunity Validation: [X] items
     🎯 Solution Exploration: [X] items
     🧪 Experimentation: [X] items
     📋 Roadmap Inclusion: [X] items
     ✅ Active: [X] items
     ```
   - **Items Processed This Run:**
     - Step 1: [X] items processed
     - Step 2: [X] insights extracted
     - Step 3: [X] syntheses created
     - Step 4: [X] opportunities validated
     - Step 5: [X] solutions assessed
     - Step 6: [X] experiments designed/analyzed
     - Step 7: [X] items scored for roadmap
   - **Items Waiting at Each Stage:**
     - List items at each stage with brief status

3. **Next Steps Guidance**
   - If human decisions required: Clearly state what decisions are needed
   - If workflow complete: Report completion
   - If items remain: Suggest running orchestrator again after decisions
   - **Re-execution Guidance:**
     - Explain how orchestrator will detect "where it left off"
     - State that it will skip already-processed items
     - State that it will pick up at decision points where user made decisions

4. **Status Summary**
   - Current workflow state
   - Items waiting at each stage
   - Items blocked by human decisions
   - Kanban board reconciliation status

## Decision Point Handling

### Human Decision Points (🔴)

The orchestrator **MUST STOP** at these points and wait for user input:

1. **Step 1 (Inbox Processing):**
   - User must select which integrations to execute (checkbox selection)
   - Orchestrator waits for user to check boxes before proceeding

2. **Step 4 (Opportunity Validation):**
   - User must decide: Active vs Backlog vs Archive for each opportunity
   - Orchestrator stops and reports all opportunities needing decisions
   - Does NOT proceed until user makes decisions

3. **Step 5 (Solution Selection):**
   - User must decide: Which solution(s) to select
   - Orchestrator stops and reports all solutions needing decisions
   - Does NOT proceed until user makes decisions

4. **Step 6 (Experiment Go/No-Go):**
   - User must decide: Proceed, Iterate, or Abandon for each experiment
   - Orchestrator stops and reports all experiments needing decisions
   - Does NOT proceed until user makes decisions

5. **Step 7 (Roadmap Inclusion):**
   - User must decide: Initiative creation and roadmap placement (HIGH RISK)
   - Orchestrator stops and reports all items needing decisions
   - Does NOT proceed until user makes decisions

### Agent-Only Steps (🤖)

These steps can proceed without stopping:

1. **Step 2 (Insight Extraction):**
   - Agent can extract insights automatically
   - User review recommended but not required to proceed

2. **Step 3 (Research Synthesis):**
   - Agent can synthesize research automatically
   - User review recommended but not required to proceed

## Kanban Board Integration

### Reading Kanban Boards

The orchestrator reads kanban boards to:
- Detect current workflow stage (primary method)
- Identify items needing processing
- Reconcile document status with kanban position
- Track workflow progress

### Updating Kanban Boards

After each stage completion, the orchestrator:
- Updates card metadata (last decision, date, decision maker)
- Moves cards to appropriate columns based on decisions
- Links cards to created/updated documents
- Flags cards for human review when needed

### Kanban Update Process

1. **Identify Card:**
   - Find card in kanban board by document link
   - Verify card links to correct document

2. **Update Metadata:**
   - Update "Last Decision" field
   - Update "Decision Date" field
   - Update "Decision Maker" field (if human decision)
   - Update status if changed

3. **Move Card (if appropriate):**
   - Determine if card should move to different column
   - Check if human decision required for move
   - Move card if within agent capabilities
   - Flag for human review if human decision needed

4. **Verify Update:**
   - Ensure card updated correctly
   - Verify links work
   - Confirm metadata accurate

**Reference:** Use `07-reference/prompts/decision-facilitation/kanban-update-prompt.md` for standardized kanban updates.

## Error Handling

### Stage-Specific Error Scenarios

**Inbox Processing Errors:**
- Missing or malformed kanban board: Report error, suggest manual check
- Template not found: Ask user which template to use
- Conflicting content: Present conflict to user, ask for guidance
- Invalid paths: Verify paths, ask user to confirm correct location

**Research/Insight Errors:**
- Research document missing: Report error, skip to next research item
- Insight extraction fails: Report error, preserve research document, continue with other items
- Multiple sources conflict: Flag conflict, suggest synthesis

**Opportunity/Solution Errors:**
- Missing outcome links: Flag missing links, suggest linking before proceeding
- Invalid opportunity format: Report format issues, suggest corrections
- Risk assessment incomplete: Flag incomplete assessments, suggest completion

**Experiment Errors:**
- Experiment design invalid: Report design issues, suggest improvements
- Results data missing: Report missing data, suggest data collection
- Go/no-go decision unclear: Ask user to clarify decision

**Roadmap Errors:**
- Innovation score calculation fails: Report error, suggest manual scoring
- Roadmap document missing: Report error, suggest creating roadmap
- Initiative creation conflicts: Report conflicts, ask for resolution

**Kanban Board Errors:**
- Kanban board missing or malformed: Report error, suggest manual check
- Card not found: Report error, suggest creating card
- Document status doesn't match kanban: Flag mismatch, suggest reconciliation

### General Error Handling

If errors occur during orchestration:

1. **Report Error**
   - Clearly state which step failed
   - Explain what went wrong
   - Suggest how to fix
   - Report stage-specific error details

2. **Preserve State**
   - Don't lose any work completed before error
   - Report what was successfully completed
   - Preserve all documents and kanban updates

3. **Continue if Possible**
   - If one item fails, try to process other items
   - Report partial completion
   - Skip failed items, continue with others

4. **User Guidance**
   - Suggest next steps to resolve error
   - Offer to retry after fixes
   - Provide specific error resolution steps

## Re-execution Behavior

### How Orchestrator Detects "Where It Left Off"

The orchestrator uses multiple signals to detect workflow state:

1. **Kanban Board Position:**
   - Primary method: Check card positions in kanban columns
   - Cards in decision columns (🔴) indicate waiting for decisions
   - Cards in processing columns indicate in-progress work

2. **Document Status:**
   - Check document status fields (Active, Backlog, Proposed, etc.)
   - Check decision history for completed decisions
   - Check for missing required sections

3. **Directory Location:**
   - Items in `active/` vs `backlog/` vs `proposed/` indicate status
   - Items in `completed/` vs `active/` indicate experiment status

4. **Decision History:**
   - Check for recent decision log entries
   - Identify last decision made
   - Determine next required decision

### Re-execution Rules

1. **Skip Already-Processed Items:**
   - Items with complete decision history are skipped
   - Items in "✅ Active" with no pending decisions are skipped
   - Items already processed in this session are skipped

2. **Handle "Processing" Status:**
   - Items in "Processing" status are re-evaluated
   - Check if processing was completed
   - Continue from where processing left off

3. **Handle User Decisions Between Runs:**
   - Detect new decision log entries since last run
   - Update workflow state based on new decisions
   - Continue from decision point where user made decisions

4. **Detect New Items:**
   - New items added since last run are detected
   - New items are processed in workflow order
   - Existing items maintain their position

### Re-execution Example

```
Run 1: Processes items through Step 4, stops at opportunity prioritization
User: Makes prioritization decisions
Run 2: Detects decisions made, continues from Step 5 (Solution Exploration)
       Skips Steps 1-4 (already processed)
       Processes solutions, stops at solution selection
User: Makes solution selection decisions
Run 3: Detects decisions made, continues from Step 6 (Experimentation)
       Skips Steps 1-5 (already processed)
       Designs experiments, stops at go/no-go
```

## Progress Reporting

### Progress Indicators

During execution, the orchestrator reports:
- **Current Step:** "Executing Step X of 7: [Step Name]"
- **Items Processed:** "Processed 2 of 5 items"
- **Time Estimates:** "Estimated 5 minutes remaining" (if applicable)

### Workflow State Summary

After each run, the orchestrator provides:
- **Items at Each Stage:**
  - Count of items waiting at each stage
  - Brief status for each item
  - Blocking issues (if any)

- **Completion Status:**
  - Percentage of workflow complete (if calculable)
  - Stages completed this run
  - Stages remaining

- **Decision Points:**
  - Number of decisions pending
  - Type of decisions needed
  - Estimated time to complete (if applicable)

## Example Orchestration Flows

### Example 1: Full Workflow (All 7 Steps)

```
1. Orchestrator detects: 2 items in "To Do" column (kanban)
   → Executes: pm.process-inbox-todo
   → User selects integrations
   → Creates: 1 research document, 1 opportunity document
   → Updates kanban: Moves cards to "🔍 Discovery"

2. Orchestrator detects: 1 research document without insights
   → Executes: pm.extract-insights
   → Creates: 1 insight document
   → Updates kanban: Updates card metadata

3. Orchestrator detects: 1 insight without opportunity
   → Executes: pm.identify-opportunities
   → Creates: 1 opportunity document
   → 🔴 STOPS: Reports opportunity needs prioritization decision
   → Updates kanban: Moves card to "💡 Opportunity Validation 🔴"

4. User decides: Move opportunity to Active
   → Orchestrator updates opportunity
   → Updates kanban: Moves card to "🎯 Solution Exploration"
   → Detects: 1 solution document exists
   → Executes: pm.apply-decision-framework
   → Assesses solution risks
   → 🔴 STOPS: Reports solution needs selection decision
   → Updates kanban: Updates card metadata

5. User decides: Select solution
   → Orchestrator updates solution
   → Updates kanban: Moves card to "🧪 Experimentation"
   → Detects: Solution needs experiment validation
   → Designs experiment
   → Creates: Experiment document
   → 🔴 STOPS: Reports experiment needs go/no-go decision
   → Updates kanban: Updates card metadata

6. User decides: Proceed (experiment successful)
   → Orchestrator updates experiment
   → Updates kanban: Moves card to "📋 Roadmap Inclusion 🔴"
   → Calculates innovation scores
   → Suggests roadmap placement
   → 🔴 STOPS: Reports needs initiative/roadmap decisions (HIGH RISK)

7. User decides: Create initiative, add to strategic roadmap Q2
   → Orchestrator creates initiative document
   → Updates strategic roadmap
   → Updates kanban: Moves card to "✅ Active"
   → Workflow complete
```

### Example 2: Starting Mid-Workflow

```
1. Orchestrator detects: No items in "To Do" (kanban check)
   → Skips Step 1

2. Orchestrator detects: 3 research documents without insights (file system + kanban)
   → Executes: pm.extract-insights (for all 3)
   → Creates: 3 insight documents
   → Updates kanban: Updates cards in "🔍 Discovery"

3. Orchestrator detects: 3 insights without opportunities
   → Executes: pm.identify-opportunities
   → Creates: 3 opportunity documents
   → 🔴 STOPS: Reports 3 opportunities need prioritization decisions
   → Updates kanban: Moves cards to "💡 Opportunity Validation 🔴"

4. User decides: 2 to Active, 1 to Backlog
   → Orchestrator updates opportunities
   → Updates kanban: Moves 2 cards to "🎯 Solution Exploration", 1 stays in validation
   → Workflow complete for this cycle
```

### Example 3: Multiple Stages with Experiments

```
1. Orchestrator detects: 1 solution in "🎯 Solution Exploration" (kanban)
   → Executes: pm.apply-decision-framework
   → Assesses solution risks
   → 🔴 STOPS: Reports solution needs selection decision

2. User decides: Select solution
   → Orchestrator updates solution
   → Updates kanban: Moves card to "🧪 Experimentation"
   → Detects: Solution needs experiment
   → Designs experiment using experiment design prompt
   → Creates: Experiment document in planned/
   → Updates kanban: Updates card metadata

3. [Experiment runs - user executes experiment]

4. Orchestrator detects: Experiment in completed/ with results
   → Analyzes experiment results
   → Compares results to success criteria
   → 🔴 STOPS: Reports experiment needs go/no-go decision

5. User decides: Proceed
   → Orchestrator updates experiment and solution
   → Updates kanban: Moves card to "📋 Roadmap Inclusion 🔴"
   → Calculates innovation scores
   → 🔴 STOPS: Reports needs initiative/roadmap decisions

6. User decides: Create initiative, add to portfolio roadmap Q1
   → Orchestrator creates initiative
   → Updates portfolio roadmap
   → Updates kanban: Moves card to "✅ Active"
   → Workflow complete
```

### Example 4: Error Recovery

```
1. Orchestrator detects: 2 items in "To Do"
   → Executes: pm.process-inbox-todo
   → Error: Template not found for one item
   → Reports error, asks user which template to use
   → Continues processing other item successfully
   → User provides template
   → Retries failed item with correct template
   → Both items processed successfully
   → Updates kanban: Moves both cards to "🔍 Discovery"
   → Continues to Step 2
```

### Example 5: Re-execution After Decisions

```
Run 1:
- Processes Steps 1-4
- Stops at Step 4 (opportunity prioritization)
- User makes decisions

Run 2 (re-execution):
- Detects decisions made (checks decision history)
- Skips Steps 1-4 (already processed)
- Continues from Step 5 (Solution Exploration)
- Processes solutions
- Stops at Step 5 (solution selection)
- User makes decisions

Run 3 (re-execution):
- Detects decisions made
- Skips Steps 1-5 (already processed)
- Continues from Step 6 (Experimentation)
- Designs experiments
- Stops at Step 6 (go/no-go)
- User makes decisions

Run 4 (re-execution):
- Detects decisions made
- Skips Steps 1-6 (already processed)
- Continues from Step 7 (Roadmap Inclusion)
- Calculates innovation scores
- Stops at Step 7 (initiative/roadmap decisions)
- User makes decisions
- Workflow complete
```

## Optional: Executive Summary Integration

At key decision points, the orchestrator can optionally generate executive summaries:

- **After Step 4 (Opportunity Validation):** Generate executive summary for opportunities being prioritized
- **After Step 5 (Solution Selection):** Generate executive summary for solutions being selected
- **After Step 7 (Roadmap Inclusion):** Generate executive summary for initiatives being created

**To use:** User can request executive summaries at decision points, or orchestrator can offer to generate them.

**Command:** `pm.create-executive-summary` - See command documentation for details.

## Related Commands

- `pm.process-inbox-todo` - Step 1: Inbox processing
- `pm.extract-insights` - Step 2: Insight extraction
- `pm.synthesize-research` - Step 3: Research synthesis (optional)
- `pm.identify-opportunities` - Step 4: Opportunity validation
- `pm.apply-decision-framework` - Step 5: Solution exploration
- `pm.create-executive-summary` - Optional: Executive summary generation at decision points

## Related Methodology

- [Workflow Rules](../../.cursorrules) - Overall workflow stage detection and guidance
- [Idea Kanban Guide](../../07-reference/methodology/idea-kanban-guide.md) - Kanban workflow stages
- [Decision Framework](../../07-reference/methodology/decision-framework.md) - Decision points and frameworks
- [Innovation Decision Framework](../../07-reference/methodology/innovation-decision-framework.md) - Innovation scoring for roadmap
- [Experiment Decision Rules](../../../04-opportunities/05-experiments/DECISION-RULES.md) - Experiment decision rules
- [Commands Reference](../../07-reference/COMMANDS.md) - All pm.xxx commands

## Related Prompts

- [Experiment Design Prompt](../../../07-reference/prompts/decision-facilitation/experiment-design-prompt.md) - For Step 6 experiment design
- [Kanban Update Prompt](../../../07-reference/prompts/decision-facilitation/kanban-update-prompt.md) - For kanban board updates
- [Innovation Scoring Template](../../../07-reference/templates/innovation-scoring-template.md) - For Step 7 innovation scoring
- [Roadmap Inclusion Checklist](../../../07-reference/templates/roadmap-inclusion-checklist.md) - For Step 7 roadmap readiness

## Usage

Run the orchestrator command:
```
pm.orchestrate-workflow
```

The orchestrator will:
1. Detect current workflow stages (using kanban boards and file system)
2. Execute commands in sequence (Steps 1-7)
3. Stop at human decision points (🔴)
4. Update kanban boards after each stage
5. Report progress and workflow state
6. Report results and next steps

**Re-execution:**
You can run it multiple times - it will pick up where it left off after you make decisions. The orchestrator detects:
- Kanban board positions
- Document status and decision history
- Items already processed
- New items added since last run

It will skip already-processed items and continue from decision points where you made decisions.
