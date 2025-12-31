# Multi-Source Synthesis Prompt

## Use Case

Use this prompt when synthesizing information from multiple research sources, insights, or documents to create a comprehensive view.

## Context

This prompt guides the synthesis of information from multiple sources, identifying common themes, resolving contradictions, and creating coherent narratives.

## Prompt Text

Synthesize information from multiple sources following this structure:

### 1. Identify Common Themes

Review all sources and identify:
- **Common themes**: What themes appear across multiple sources?
- **Patterns**: What patterns emerge when combining sources?
- **Consistent findings**: What findings are consistent across sources?
- **Reinforcing evidence**: What evidence from one source reinforces another?

### 2. Resolve Contradictions

Identify and address:
- **Contradictions**: Where do sources contradict each other?
- **Conflicts**: What conflicts exist between sources?
- **Resolution approach**: How should contradictions be resolved?
  - Consider source credibility
  - Consider recency of information
  - Consider context differences
  - Note where resolution is not possible

### 3. Create Comprehensive Understanding

Synthesize:
- **Unified view**: What is the comprehensive understanding when all sources are considered?
- **Gaps**: What gaps exist in the combined information?
- **Questions**: What questions remain unanswered?
- **Confidence**: What is the confidence level in the synthesis? (High, Medium, Low)

### 4. Generate Unified Insights

Create:
- **Synthesized insights**: Insights that emerge from the combination of sources
- **New understanding**: What new understanding is created by synthesis?
- **Implications**: What are the implications of the synthesized view?

### 5. Structure Synthesis

Organize by:
- **Themes**: Group by common themes
- **Topics**: Group by topics or subject areas
- **Chronology**: If timeline is relevant
- **Priority**: If priority is relevant

## Parameters

- `source_materials`: List of source documents to synthesize
- `synthesis_focus`: What is the focus of the synthesis? (optional)
- `related_documents`: Existing documents that relate to this synthesis (optional)

## Expected Output

A structured synthesis that includes:
- Common themes and patterns identified
- Contradictions and how they are resolved
- Comprehensive understanding
- Unified insights
- Gaps and remaining questions
- Confidence level

## Related Commands

- `synthesize-content` - Command dedicated to content synthesis
- `synthesize-research` - Uses this prompt for research synthesis
- `process-inbox-todo` - May use this prompt when processing multiple related items

## Related Methodology

- [Research Template](../../templates/research-template.md) - Research document structure
- [Discovery Process](../../methodology/discovery-process.md) - Product discovery methodology

