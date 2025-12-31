# Insight Extraction Prompt

## Use Case

Use this prompt when extracting key insights from research documents, customer feedback, market data, or other source materials.

## Context

This prompt guides the extraction of actionable insights from research materials, ensuring insights are well-structured, evidence-based, and linked to implications and action items.

## Prompt Text

Extract insights from the research material following this structure:

### 1. Identify Key Learnings

Review the source material and identify:
- **Main findings**: What are the primary discoveries or conclusions?
- **Patterns and trends**: What patterns emerge across the data?
- **Surprises or contradictions**: What was unexpected or contradicts assumptions?
- **Quantitative data**: What metrics, statistics, or measurements are significant?

### 2. Formulate Insight Statements

For each key learning, create an insight statement that:
- Is specific and actionable (not generic)
- Includes evidence from the source
- States what was learned and why it matters
- Links to product strategy or customer needs

Format: "What we learned: [insight]. Evidence: [specific evidence]. Why it matters: [implication]."

### 3. Categorize Insights

Organize insights by category:
- **Product implications**: What does this mean for product features, UX, or capabilities?
- **Strategic implications**: What does this mean for product strategy, positioning, or roadmap?
- **Market implications**: What does this mean for market understanding, competition, or opportunities?
- **Customer implications**: What does this mean for customer needs, pain points, or jobs to be done?

### 4. Identify Action Items

For each insight, identify:
- **Action items**: What should we do based on this insight?
- **Priority**: High, Medium, or Low
- **Owner**: Who should act on this (if known)
- **Timeline**: When should this be addressed (if relevant)

### 5. Link to Related Documents

Identify and link to:
- Source research document
- Related opportunities
- Related outcomes
- Related insights (if synthesizing multiple sources)

## Parameters

- `source_material`: The research document, feedback, or data to analyze
- `research_type`: Type of research (market research, customer feedback, competitive analysis, etc.)
- `related_documents`: Existing documents that relate to this research (optional)

## Expected Output

A structured insight document that includes:
- Insight statements with evidence
- Categorized implications (product, strategy, market, customer)
- Prioritized action items
- Links to source research and related documents
- Confidence level (High, Medium, Low) based on evidence quality

## Related Commands

- `extract-insights` - Command dedicated to insight extraction
- `process-inbox-todo` - Uses this prompt when processing research items

## Related Methodology

- [Research Template](../../templates/research-template.md) - Research document structure
- [Discovery Process](../../methodology/discovery-process.md) - Product discovery methodology

