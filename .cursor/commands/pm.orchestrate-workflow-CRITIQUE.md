# Critique of pm.orchestrate-workflow Command

**Date:** 2025-12-17  
**Purpose:** Comprehensive critique of the orchestrator command in light of all other commands and project context

## Executive Summary

The `pm.orchestrate-workflow` command is well-structured but **incomplete**. It covers only 5 of 7 workflow stages, missing critical stages (Experiments and Roadmap Inclusion) that are defined in the workflow rules and kanban board. The command also lacks kanban board integration and has several detection logic gaps.

## Critical Issues

### 1. Missing Workflow Stages

**Problem:** The orchestrator only covers Steps 1-5, but the workflow has 7 stages:

**Current Coverage:**
- ✅ Step 1: Inbox Processing
- ✅ Step 2: Insight Extraction  
- ✅ Step 3: Research Synthesis (optional)
- ✅ Step 4: Opportunity Creation/Validation
- ✅ Step 5: Solution Assessment
- ❌ **Missing:** Step 6: Experiment Design & Execution
- ❌ **Missing:** Step 7: Roadmap Inclusion

**Evidence:**
- `.cursorrules` defines 6 stages (including Experimentation and Roadmap Inclusion)
- `⬛ Ideas Kanban.md` has columns for 🧪 Experimentation and 📋 Roadmap Inclusion 🔴
- `07-reference/methodology/decision-framework.md` defines Stage 5 (Experiments) and Stage 6 (Roadmap Inclusion)
- `04-opportunities/05-experiments/DECISION-RULES.md` exists with full decision rules

**Impact:** The orchestrator cannot complete the full workflow. Users must manually handle experiments and roadmap inclusion.

**Recommendation:** Add Steps 6 and 7 to the orchestrator.

---

### 2. Missing Kanban Board Integration

**Problem:** The orchestrator doesn't check or update kanban boards, which are central to workflow tracking.

**Missing Functionality:**
- No detection of kanban board positions
- No updates to kanban boards when stages complete
- No card movement between columns
- No reconciliation between document status and kanban position

**Evidence:**
- `07-reference/methodology/idea-kanban-guide.md` describes full kanban workflow
- `.cursorrules` says to "check kanban board position" for stage detection
- `⬛ Ideas Kanban.md` exists with active workflow tracking
- `00-inbox/⬛ Inbox.md` is actively used for inbox processing

**Impact:** Orchestrator cannot detect items in kanban columns or update workflow status visually.

**Recommendation:** Add kanban board reading and updating to each stage.

---

### 3. Incomplete Detection Logic

**Problem:** Stage detection logic is incomplete and doesn't cover all workflow stages.

**Missing Detection:**

1. **Experiment Stage Detection:**
   - Doesn't check `04-opportunities/05-experiments/` directories
   - Doesn't detect experiments needing design
   - Doesn't detect experiments needing results analysis
   - Doesn't check for go/no-go decisions needed

2. **Roadmap Inclusion Detection:**
   - Doesn't check for validated solutions ready for roadmap
   - Doesn't check `02-initiatives/` for initiative creation needs
   - Doesn't check `01-strategy/roadmap/` for roadmap placement needs
   - Doesn't detect items in "Roadmap Inclusion" kanban column

3. **Kanban-Based Detection:**
   - Doesn't read kanban boards to detect stage
   - Doesn't check card positions in columns
   - Doesn't reconcile document status with kanban position

**Evidence:**
- `.cursorrules` says detection should check "kanban board position"
- `⬛ Ideas Kanban.md` has active cards in multiple columns
- Experiment and roadmap directories exist with documents

**Impact:** Orchestrator cannot detect items at later workflow stages.

**Recommendation:** Expand detection logic to cover all stages and include kanban board checks.

---

### 4. Missing Decision Points

**Problem:** The orchestrator doesn't handle all human decision points.

**Missing Decision Points:**

1. **Experiment Go/No-Go (Step 6):**
   - Doesn't stop for go/no-go decisions
   - Doesn't report experiment results needing interpretation
   - Doesn't handle Proceed/Iterate/Abandon decisions

2. **Roadmap Inclusion (Step 7):**
   - Doesn't stop for initiative creation decisions (HIGH RISK)
   - Doesn't stop for roadmap placement decisions (HIGH RISK)
   - Doesn't calculate innovation scores
   - Doesn't suggest roadmap placement

**Evidence:**
- `04-opportunities/05-experiments/DECISION-RULES.md` defines go/no-go as human decision
- `07-reference/methodology/decision-framework.md` defines roadmap inclusion as HIGH RISK
- `⬛ Ideas Kanban.md` marks Roadmap Inclusion as 🔴 (human decision required)

**Impact:** Orchestrator stops at Step 5, leaving critical decisions unhandled.

**Recommendation:** Add decision point handling for Steps 6 and 7.

---

### 5. Inconsistency with Workflow Rules

**Problem:** The orchestrator's workflow sequence doesn't match `.cursorrules` and other documentation.

**Discrepancies:**

1. **Stage Numbering:**
   - Orchestrator: Steps 1-5
   - `.cursorrules`: Stages 1-6 (including Experimentation and Roadmap Inclusion)
   - Kanban: 7 columns (including Experimentation and Roadmap Inclusion)

2. **Stage Names:**
   - Orchestrator: "Solution Assessment" (Step 5)
   - `.cursorrules`: "Solution Exploration" (Stage 4)
   - Kanban: "🎯 Solution Exploration"

3. **Missing Stages:**
   - Orchestrator stops at solution assessment
   - `.cursorrules` continues to experiments and roadmap

**Evidence:**
- `.cursorrules` lines 17-130 define 6 stages
- `⬛ Ideas Kanban.md` has 7 columns
- `07-reference/COMMANDS.md` lists orchestrator as covering "inbox to solution assessment" only

**Impact:** Confusion about workflow completeness and next steps.

**Recommendation:** Align orchestrator with full workflow definition.

---

### 6. Missing Command Integration

**Problem:** The orchestrator doesn't integrate with `pm.create-executive-summary` command.

**Missing:**
- No mention of executive summary creation
- No detection of when summaries might be needed
- No integration point for summary generation

**Evidence:**
- `07-reference/COMMANDS.md` lists `pm.create-executive-summary` as command #6
- Command exists and is documented
- Could be useful at decision points (opportunities, solutions, initiatives)

**Impact:** Missing opportunity to generate executive summaries at key decision points.

**Recommendation:** Consider optional integration of executive summary generation at decision points.

---

## Moderate Issues

### 7. Incomplete Error Handling

**Problem:** Error handling section is generic and doesn't cover stage-specific errors.

**Missing Error Scenarios:**
- What if kanban board is missing or malformed?
- What if document status doesn't match kanban position?
- What if required templates are missing?
- What if decision logs are incomplete?
- What if multiple items need processing at same stage?

**Recommendation:** Add stage-specific error handling scenarios.

---

### 8. Unclear Re-execution Behavior

**Problem:** The command says "you can run it multiple times" but doesn't specify behavior.

**Unclear:**
- Does it re-process already-processed items?
- How does it handle items in "Processing" status?
- What if user made decisions between runs?
- How does it detect "where it left off"?

**Evidence:**
- Line 364: "You can run it multiple times - it will pick up where it left off"
- But detection logic doesn't explain how it determines "where it left off"

**Recommendation:** Clarify re-execution detection and behavior.

---

### 9. Missing Progress Reporting

**Problem:** The orchestrator doesn't provide detailed progress tracking.

**Missing:**
- No progress indicators (e.g., "Processing 2 of 5 items")
- No time estimates
- No summary of items at each stage
- No visualization of workflow state

**Recommendation:** Add progress reporting and workflow state visualization.

---

### 10. Incomplete Example Flows

**Problem:** Example flows don't cover all scenarios.

**Missing Examples:**
- Example with experiments (Step 6)
- Example with roadmap inclusion (Step 7)
- Example with kanban board updates
- Example with multiple items at different stages
- Example with errors and recovery

**Recommendation:** Add comprehensive examples covering all stages.

---

## Minor Issues

### 11. Terminology Inconsistencies

**Problem:** Some terminology doesn't match other documentation.

**Examples:**
- "Solution Assessment" vs "Solution Exploration"
- "Opportunity Creation" vs "Opportunity Validation"
- Stage numbers vs Step numbers

**Recommendation:** Standardize terminology across all documentation.

---

### 12. Missing Related Command Links

**Problem:** Related commands section doesn't link to all relevant commands.

**Missing:**
- Link to `pm.create-executive-summary`
- Links to experiment-related prompts
- Links to roadmap-related prompts

**Recommendation:** Add comprehensive related commands and prompts section.

---

## Strengths

The orchestrator command has several strengths:

1. **Clear Structure:** Well-organized with logical step-by-step execution
2. **Decision Point Handling:** Correctly identifies and stops at human decision points (Steps 1, 4, 5)
3. **Risk Awareness:** Respects risk levels and approval requirements
4. **Sequential Execution:** Properly sequences commands in workflow order
5. **Error Handling Framework:** Has error handling section (though needs expansion)
6. **Example Flows:** Provides examples (though incomplete)

---

## Recommendations Summary

### High Priority (Critical)

1. **Add Step 6: Experiment Design & Execution**
   - Detect experiments needing design or results analysis
   - Execute experiment design/analysis
   - Stop for go/no-go decisions
   - Update kanban boards

2. **Add Step 7: Roadmap Inclusion**
   - Detect validated solutions ready for roadmap
   - Calculate innovation scores
   - Suggest roadmap placement
   - Stop for initiative creation and roadmap placement decisions (HIGH RISK)
   - Update kanban boards

3. **Add Kanban Board Integration**
   - Read kanban boards for stage detection
   - Update kanban boards when stages complete
   - Move cards between columns
   - Reconcile document status with kanban position

4. **Expand Detection Logic**
   - Add experiment stage detection
   - Add roadmap inclusion detection
   - Add kanban-based detection
   - Check all workflow directories

### Medium Priority

5. **Improve Error Handling**
   - Add stage-specific error scenarios
   - Handle kanban board errors
   - Handle document status mismatches
   - Handle missing templates

6. **Clarify Re-execution Behavior**
   - Explain how it detects "where it left off"
   - Handle items in "Processing" status
   - Handle user decisions between runs

7. **Add Progress Reporting**
   - Progress indicators
   - Workflow state summary
   - Items at each stage

### Low Priority

8. **Add Executive Summary Integration**
   - Optional summary generation at decision points
   - Link to `pm.create-executive-summary`

9. **Expand Examples**
   - Add examples for all stages
   - Add error recovery examples
   - Add kanban update examples

10. **Standardize Terminology**
    - Align with `.cursorrules` and kanban board
    - Use consistent stage names

---

## Implementation Priority

**Phase 1 (Critical - Do First):**
1. Add Step 6: Experiment Design & Execution
2. Add Step 7: Roadmap Inclusion
3. Add kanban board reading for detection
4. Add kanban board updates after each stage

**Phase 2 (Important - Do Next):**
5. Expand detection logic for all stages
6. Add decision point handling for Steps 6-7
7. Improve error handling

**Phase 3 (Enhancement - Do Later):**
8. Add progress reporting
9. Clarify re-execution behavior
10. Add executive summary integration
11. Expand examples
12. Standardize terminology

---

## Conclusion

The `pm.orchestrate-workflow` command is a solid foundation but **incomplete**. It successfully orchestrates the first 5 steps of the workflow but misses the final 2 critical stages (Experiments and Roadmap Inclusion). Adding these stages, integrating kanban board updates, and expanding detection logic will make it a complete workflow orchestrator that matches the full workflow definition in `.cursorrules` and the kanban board structure.

The command should be updated to:
1. Cover all 7 workflow stages (not just 5)
2. Integrate with kanban boards for detection and updates
3. Handle all human decision points (including experiments and roadmap)
4. Provide complete workflow orchestration from inbox to roadmap

This will make it a true "orchestrator" that can guide users through the entire feature idea flow from entry to roadmap inclusion.

