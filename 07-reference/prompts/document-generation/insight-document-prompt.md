# Insight Document Generation Prompt

## Use Case

Use this prompt when creating insight documents from research, analysis, or synthesis of multiple sources.

## Context

This prompt guides the creation of structured insight documents that capture key learnings, evidence, implications, and action items.

## Prompt Text

Generate an insight document following this structure:

### 1. Document Header

Include:
- **Title**: Clear, descriptive title (e.g., "[Topic] Insights")
- **Topic**: The topic or theme of the insights
- **Date**: Date of insight document creation (YYYY-MM-DD)
- **Source Research**: Link to source research document(s) if applicable

### 2. Insight Statement

Create:
- **Primary insight**: A clear, concise statement of the main insight
- Format: "What we learned: [insight]. Evidence: [key evidence]. Why it matters: [implication]."
- Should be specific, actionable, and evidence-based

### 3. Evidence

Present:
- **Supporting evidence**: Specific data, quotes, or findings that support the insight
- **Source references**: Where the evidence comes from
- **Context**: Additional context needed to understand the evidence
- Organize by category or theme if multiple pieces of evidence

### 4. Context

Provide:
- **Background**: What background information is needed to understand this insight?
- **Related insights**: How does this relate to other insights?
- **Timeline**: When was this insight discovered or validated?

### 5. Implications

Explain:
- **Product implications**: What does this mean for product features, UX, or capabilities?
- **Strategic implications**: What does this mean for product strategy, positioning, or roadmap?
- **Market implications**: What does this mean for market understanding, competition, or opportunities?
- **Customer implications**: What does this mean for customer needs, pain points, or jobs to be done?

### 6. Action Items

List:
- **Action items**: What should we do based on this insight?
- **Priority**: High, Medium, or Low for each action item
- **Owner**: Who should act on this (if known)
- **Timeline**: When should this be addressed (if relevant)

### 7. Related Documents

Link to:
- **Source research**: Research documents that informed this insight
- **Related insights**: Other insight documents that relate
- **Related opportunities**: Opportunities this insight informs
- **Related outcomes**: Outcomes this insight relates to
- Use relative paths

### 8. Confidence Level

Indicate:
- **Confidence**: High, Medium, or Low
- **Rationale**: Why this confidence level? (quality of evidence, sample size, etc.)

## Parameters

- `insight_content`: The insight(s) to document
- `source_research`: Source research document(s) (optional)
- `related_documents`: Related documents to link to (optional)
- `confidence_level`: Confidence level (High, Medium, Low)

## Expected Output

A complete insight document that:
- Has a clear, evidence-based insight statement
- Includes supporting evidence with sources
- Provides context and implications
- Lists prioritized action items
- Links to related documents
- Uses proper markdown formatting

## Related Commands

- `generate-insight-document` - Command dedicated to insight document generation
- `extract-insights` - Uses this prompt when creating insight documents
- `process-inbox-todo` - Uses this prompt when creating insight documents from inbox items

## Related Methodology

- [Research Template](../../templates/research-template.md) - Research document structure
- [Discovery Process](../../methodology/discovery-process.md) - Product discovery methodology

