# Document Generation Prompts

Prompts for generating structured documents following Product Brain templates and formats.

## Purpose

These prompts guide the creation of structured documents (research, insights, opportunities, solutions) that follow established templates and maintain consistency.

## Available Prompts

### Research Document Prompt
**File**: `research-document-prompt.md`
**Use When**: Creating research documents from source materials
**Related Commands**: `generate-research-document`, `process-inbox-todo`

Generates research documents with:
- Research questions and methodology
- Findings and analysis
- Insights and implications
- Recommendations and next steps

### Insight Document Prompt
**File**: `insight-document-prompt.md`
**Use When**: Creating insight documents from research or analysis
**Related Commands**: `generate-insight-document`, `extract-insights`

Generates insight documents with:
- Insight statements
- Evidence and context
- Implications (product, strategy, market)
- Action items and recommendations

### Opportunity Document Prompt
**File**: `opportunity-document-prompt.md`
**Use When**: Creating opportunity documents within the OST framework
**Related Commands**: `identify-opportunities`, `generate-opportunity-document`

Generates opportunity documents with:
- Opportunity statement
- Customer needs and pain points
- Business and product outcome links
- Related opportunities and solutions

### Stakeholder Feedback Prompt
**File**: `stakeholder-feedback-prompt.md`
**Use When**: Generating product team viewpoints for stakeholders on specific topics
**Related Commands**: `generate-stakeholder-feedback`

Generates stakeholder feedback documents with:
- Product team's understanding of the problem (evidence-based)
- Product team's recommendations (strategically aligned)
- Supporting research and framework references
- Strategic context and alignment

### Executive Summary Prompt
**File**: `executive-summary-prompt.md`
**Use When**: Creating executive summaries for ideas, opportunities, solutions, or other documents
**Related Commands**: `pm.create-executive-summary`

Generates executive summaries (one page or less) with:
- Executive overview (What, Why, Impact)
- Strategic alignment (Mission, Pillars, Outcomes)
- Business impact and key risks
- Framework-based analysis (Innovation Decision, Four Product Risks, Jobs to Be Done)
- Clear recommendations and next steps

## Usage Pattern

1. Identify document type needed (research, insight, opportunity, solution)
2. Read relevant template from `07-reference/templates/`
3. Apply appropriate document generation prompt
4. Generate document following template structure
5. Link to related documents and update indexes

## Related Resources

- [Templates](../../templates/) - Document templates
- [Research Template](../../templates/research-template.md) - Research document structure
- [Opportunity Template](../../templates/opportunity-template.md) - Opportunity document structure

