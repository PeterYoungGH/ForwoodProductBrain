# Inbox Processing Prompts

Prompts for analyzing, processing, and integrating inbox items into the Product Brain knowledge base.

## Purpose

These prompts guide the analysis and processing of raw inbox items, ensuring consistent content analysis, integration suggestions, and archiving decisions.

## Available Prompts

### Content Analysis Prompt
**File**: `content-analysis-prompt.md`
**Use When**: Analyzing inbox item content to identify what it contains
**Related Commands**: `process-inbox-todo`, `analyze-inbox-content`

Analyzes inbox content to identify:
- Objectives and goals
- Key results and metrics
- Strategic elements
- Outcomes (business, product, customer)
- Opportunities
- Solutions and features
- Research and discovery
- Initiatives
- Communications

### Integration Suggestion Prompt
**File**: `integration-suggestion-prompt.md`
**Use When**: Generating suggestions for where and how to integrate inbox content
**Related Commands**: `process-inbox-todo`, `suggest-integrations`

Suggests integration locations based on:
- Content type and risk level
- Product Brain structure mapping
- Existing document relationships
- Template requirements

### Archive Decision Prompt
**File**: `archive-decision-prompt.md`
**Use When**: Determining if an item should be archived and how
**Related Commands**: `process-inbox-todo`

Guides archiving decisions including:
- When to archive
- What links to preserve
- How to update kanban board
- Archive file naming

## Usage Pattern

1. Read the inbox item content
2. Apply content analysis prompt to identify elements
3. Apply integration suggestion prompt to generate options
4. Present choices to user for approval
5. Apply archive decision prompt after integration

## Related Resources

- [Inbox Processing Rules](../../../00-inbox/RULES.md) - Full processing workflow
- [Inbox README](../../../00-inbox/README.md) - Inbox structure and purpose

