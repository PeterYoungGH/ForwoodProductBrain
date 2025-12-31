# Research Document Generation Prompt

## Use Case

Use this prompt when creating research documents from source materials (market research, customer feedback, competitive analysis, etc.).

## Context

This prompt guides the creation of structured research documents that follow the research template and maintain consistency across the knowledge base.

## Prompt Text

Generate a research document following this structure:

### 1. Document Header

Include:
- **Title**: Clear, descriptive title
- **Type**: User Research, Market Research, Data Analysis, Competitive Analysis, etc.
- **Date**: Date of research or document creation (YYYY-MM-DD)
- **Researcher(s)**: Who conducted or compiled the research
- **Status**: Planning, In Progress, or Completed

### 2. Research Question

State:
- **Primary question**: What is the main research question?
- **Secondary questions**: What additional questions does this research address?

### 3. Objectives

List:
- What are the research objectives?
- What decisions will this research inform?

### 4. Methodology

Include:
- **Research Method**: Interview, Survey, Usability Study, Analytics Analysis, Competitive Analysis, etc.
- **Participants/Data Sources**: Description of participants or data sources
- **Sample Size or Data Range**: Number of participants, data timeframe, etc.
- **Timeline**: Start and end dates

### 5. Key Findings

Present:
- **Finding 1**: Description with supporting evidence
- **Finding 2**: Description with supporting evidence
- **Finding 3**: Description with supporting evidence
- Continue as needed, each finding should be:
  - Specific and evidence-based
  - Clearly stated
  - Supported by data or quotes

### 6. Insights

Synthesize:
- What are the key insights from the findings?
- What patterns or themes emerge?
- What are the implications?

### 7. Implications

Explain:
- **Product implications**: What does this mean for product decisions?
- **Strategic implications**: What does this mean for strategy?
- **Market implications**: What does this mean for market understanding?

### 8. Related Opportunities

Link to:
- Opportunities this research informs
- Use relative paths: `../../04-opportunities/03-opportunities/active/opportunity-name.md`

### 9. Related Outcomes

Link to:
- Product outcomes this research relates to
- Business outcomes this research relates to
- Use relative paths

### 10. Recommendations

List:
- What should we do based on this research?
- Prioritize recommendations if applicable

### 11. Next Steps

List:
- What are the immediate next steps?
- What follow-up research is needed?

### 12. Artifacts

Link to:
- Source materials (interview notes, survey results, analysis documents)
- Inbox item if created from inbox processing
- Use relative paths

### 13. Notes

Include:
- Additional context or observations
- Limitations of the research
- Questions for future research

## Parameters

- `source_material`: The source material to convert into a research document
- `research_type`: Type of research (User Research, Market Research, Data Analysis, etc.)
- `template_path`: Path to research template (default: `07-reference/templates/research-template.md`)
- `related_documents`: Existing documents to link to (optional)

## Expected Output

A complete research document that:
- Follows the research template structure
- Includes all required sections
- Links to related documents
- Uses proper markdown formatting
- Includes source references and artifacts

## Related Commands

- `generate-research-document` - Command dedicated to research document generation
- `process-inbox-todo` - Uses this prompt when creating research documents from inbox items

## Related Methodology

- [Research Template](../../templates/research-template.md) - Research document template
- [Discovery Process](../../methodology/discovery-process.md) - Product discovery methodology

