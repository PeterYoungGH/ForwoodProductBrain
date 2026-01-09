# JIRA to Roadmap Integration Workflow

**Purpose:** Guide for using agentflow commands to analyze JIRA issues and integrate them into delivery roadmaps.

**Last Updated:** 2026-01-08

## Overview

This workflow describes how to use agentflow commands to extract insights from JIRA issues (epics, themes, features) and synthesize them into the delivery roadmap structure. This is particularly useful for:

- Analyzing large JIRA themes with many child issues (like FPM-645)
- Tracking release readiness across multiple features
- Maintaining alignment between JIRA work items and delivery roadmap
- Identifying dependencies and blockers

## Workflow Steps

### Step 1: Extract JIRA Data

**Manual Step (Current):**
1. Access JIRA issue using Atlassian MCP tools or browser
2. Identify parent issue (Theme/Epic) and all child issues
3. Note key fields: status, priority, fixVersion, assignee, labels

**Future Automation:**
- Could be automated with a custom agentflow skill that queries JIRA API
- Would extract issue hierarchy, status, priorities, and descriptions

### Step 2: Create Research Document from JIRA Data

**Option A: Use Inbox Processing**
1. Create a markdown document in `00-inbox/raw/` with JIRA issue data
2. Format: Include issue keys, summaries, statuses, priorities, descriptions
3. Run: `@agentflow.process-inbox` to classify and route

**Option B: Direct Analysis (Current Approach)**
- Analyze JIRA data directly and update roadmap
- Skip inbox processing for known JIRA sources

### Step 3: Extract Insights from JIRA Data

**Command:**
```bash
@agentflow.extract-insights
```

**What It Does:**
- Categorizes items by type (Epic, Story, Bug, Task)
- Identifies patterns (bug clusters, feature themes, blockers)
- Extracts requirements and acceptance criteria
- Maps status to release readiness

**Output:**
- Insight document in `03-discovery/insights/`
- Categorized breakdown by type, status, priority
- Pattern identification (dependencies, blockers, themes)

### Step 4: Synthesize for Roadmap Integration

**Manual Analysis (Current):**
1. Map JIRA statuses to delivery roadmap statuses:
   - `In Development` → `In Progress`
   - `Ready for Implementation` → `Ready to Release`
   - `Discovery (Problem Exploration)` → `Needs Clarification`
   - `Discovery (Solution Exploration)` → `Needs Clarification` or `In Progress`
   - `Scoping` → `Needs Clarification`
   - `New` → `Needs Clarification` or `Blocked`

2. Group by release timeline:
   - Items with fixVersion → Target release window
   - Items without fixVersion → Needs prioritization

3. Identify launch moments:
   - Items tagged with major release versions
   - Items linked to strategic initiatives

**Future Enhancement:**
- Could use `@agentflow.apply-decision-framework` to assess release readiness
- Could use `@agentflow.identify-opportunities` to surface strategic themes

### Step 5: Update Delivery Roadmap

**Manual Update (Current):**
1. Update Release Pipeline sections:
   - Ready to Release
   - In Progress
   - In QA
   - Needs Clarification
   - Blocked

2. Update Release Readiness Status table
3. Update Upcoming Releases with key items
4. Update Launch Moments with contributing releases

**Automation Opportunity:**
- Could create a skill that generates roadmap updates from JIRA analysis
- Would require structured output format from JIRA extraction

## Recommended Command Sequence

### For Initial Analysis (One-Time)

```bash
# Step 1: Extract JIRA data (manual or via MCP)
# Access JIRA issue and children

# Step 2: Create research document (optional)
# Create markdown in inbox with JIRA data

# Step 3: Extract insights
@agentflow.extract-insights [path-to-research-doc]

# Step 4: Manual synthesis and roadmap update
# Analyze insights and update delivery roadmap
```

### For Ongoing Updates (Weekly/Monthly)

```bash
# Step 1: Query JIRA for updated issues
# Use JQL: project = FPM AND fixVersion = "Forwood One V2" AND updated >= -7d

# Step 2: Extract insights from updated items
@agentflow.extract-insights

# Step 3: Review changes and update roadmap
# Focus on status changes, new blockers, completed items
```

## Status Mapping Reference

| JIRA Status | Delivery Roadmap Status | Notes |
|------------|------------------------|-------|
| In Development | In Progress | Actively being worked |
| Ready for Implementation | Ready to Release | Pending release decision |
| Discovery (Problem Exploration) | Needs Clarification | Requirements gathering |
| Discovery (Solution Exploration) | Needs Clarification / In Progress | Solution design phase |
| Discovery (Stakeholder Alignment) | Needs Clarification | Waiting on decisions |
| Scoping | Needs Clarification | Scope definition |
| New | Needs Clarification / Blocked | Not yet started |
| In QA | In QA | Quality assurance |
| Done | (Remove from roadmap) | Completed |

## Priority Mapping

| JIRA Priority | Delivery Roadmap Impact |
|---------------|------------------------|
| Critical | Immediate release consideration |
| High | Next release window |
| Medium | Upcoming releases |
| Low | Backlog / Future consideration |

## Fix Version Mapping

- **Fix Version = "Forwood One V2"** → Q1 2026 Launch Moment
- **Fix Version = "Next Release"** → Current Release Window
- **No Fix Version** → Needs prioritization decision

## Example: FPM-645 Analysis

**Parent Issue:** FPM-645 - Forwood One V2 - Safety+ Upgrade Pathway and Expanded ICP

**Analysis Results:**
- **30+ child features** across multiple categories
- **Target Release:** 2025-12-19 (Q1 2026 milestone)
- **Status Distribution:**
  - In Development: 2 items
  - Ready for Implementation: 2 items
  - Discovery phases: 16 items
  - New/To Do: 8 items

**Roadmap Integration:**
- Mapped to Q1 2026 Launch Moment
- Organized by release pipeline status
- Grouped by module/capability type
- Linked to target clients (EDP, HEDNO, Kenmare, Rossing, Barrick)

## Best Practices

1. **Regular Updates:** Sync JIRA status with roadmap weekly
2. **Status Alignment:** Keep JIRA and roadmap statuses aligned
3. **Dependency Tracking:** Note blockers and dependencies in roadmap
4. **Launch Moments:** Track which releases contribute to major launches
5. **Client Alignment:** Link items to target clients where applicable

## Future Enhancements

1. **Automated JIRA Sync:**
   - Scheduled job to query JIRA API
   - Auto-update roadmap based on status changes
   - Alert on blockers or status mismatches

2. **JIRA Integration Skill:**
   - Custom agentflow skill for JIRA analysis
   - Direct JIRA API integration
   - Automated status mapping

3. **Roadmap Generation:**
   - Auto-generate roadmap sections from JIRA data
   - Maintain release readiness table automatically
   - Track launch moment contributions

## Related Documents

- [Delivery Roadmap](../01-strategy/roadmap/03-delivery-roadmap.md)
- [Roadmapping Framework](./roadmapping-framework.md)
- [Extract JIRA Insights Skill](../../.cursor/commands/Skills/research/extract-jira-insights.md)
- [Agentflow Guide](../AGENTFLOW-GUIDE.md)


