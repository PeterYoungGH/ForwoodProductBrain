# pm.create-executive-summary

Command to create an executive summary (one page or less) for ideas, opportunities, solutions, or other files, focused on explaining the content to an executive audience using the frameworks outlined in this project.

## Command Purpose

This command generates concise executive summaries that distill complex product documents (ideas, opportunities, solutions, research, etc.) into clear, actionable summaries suitable for executive decision-making. The summaries use project frameworks to provide structured, consistent analysis.

## Execution Steps

### Step 1: Read Required Files

1. **Read the Executive Summary Prompt**
   - File: `07-reference/prompts/document-generation/executive-summary-prompt.md`
   - Purpose: Understand how to generate executive summaries
   - Action: Read and understand the prompt structure, parameters, and expected output

2. **Read Source Document**
   - File: Path to idea, opportunity, solution, or other document
   - Purpose: Material to summarize
   - Action: Read and understand the source document structure and content

3. **Read Related Documents (Optional)**
   - If the document references related outcomes, solutions, or research, read those documents
   - Purpose: Understand full context and relationships
   - Action: Read related documents to provide comprehensive context

4. **Read Relevant Frameworks (If Needed)**
   - Innovation Decision Framework: `07-reference/methodology/innovation-decision-framework.md`
   - Four Product Risks Framework: `07-reference/methodology/four-product-risks-framework.md`
   - Jobs to Be Done Framework: `07-reference/methodology/jobs-to-be-done-framework.md`
   - Strategic Focus: `01-strategy/strategic-focus/focus-areas.md`
   - Purpose: Understand frameworks to apply in summary
   - Action: Read relevant frameworks based on document type

### Step 2: Apply Executive Summary Prompt

1. **Apply the Prompt**
   - Use the executive summary prompt to analyze the source document
   - Identify key information: problem, opportunity, solution, impact, risks, strategic alignment
   - Apply relevant frameworks (Innovation Decision Framework, Four Product Risks, Jobs to Be Done, Strategic Pillars)
   - Extract executive-relevant information: business impact, resource requirements, strategic alignment, risks
   - Structure summary for executive audience: clear, concise, decision-focused

2. **Structure Summary**
   - Create executive summary following the prompt structure
   - Ensure one page or less (approximately 500-800 words)
   - Focus on: What, Why, Impact, Risks, Recommendation
   - Use frameworks to provide structured analysis
   - Link to full document for details

### Step 3: Generate Executive Summary Document

1. **Use Executive Summary Generation Prompt**
   - File: `07-reference/prompts/document-generation/executive-summary-prompt.md`
   - Purpose: Generate structured executive summary document
   - Action: Apply the prompt to create the summary

2. **Create Document**
   - Generate executive summary following the template structure
   - Include: Overview, Strategic Alignment, Business Impact, Key Risks, Recommendation
   - Apply relevant frameworks based on document type
   - Keep to one page or less
   - Link to source document and related documents
   - Use clear, executive-friendly language

### Step 4: Save Document

1. **Determine Location**
   - Default: `06-communications/executive-summaries/`
   - Use descriptive filename: `YYYY-MM-DD-[document-name]-executive-summary.md`
   - Or save alongside source document with `-executive-summary.md` suffix

2. **Save and Link**
   - Save the executive summary document
   - Link from source document (if applicable)
   - Link to related outcomes, solutions, or research

### Step 5: Regenerate Ideas Kanban Canvas

After completing executive summary creation:

1. **Regenerate Canvas:**
   - Run the canvas generation script to update the Ideas Kanban Canvas
   - Command: Execute `.cursor/scripts/regenerate_ideas_kanban_canvas.py`
   - Purpose: Update canvas visualization to reflect all changes made during executive summary creation
   - This ensures the canvas always shows the current state of the workflow

2. **Canvas Update Process:**
   - Script automatically parses the Ideas Kanban board
   - Scans all referenced documents
   - Rebuilds relationship graph
   - Regenerates canvas JSON file
   - Updates `Ideas Kanban Canvas.canvas` with latest nodes and edges

3. **Error Handling:**
   - If canvas generation fails, log error but don't fail the executive summary command
   - Canvas update is non-blocking
   - User should still see executive summary results even if canvas update fails

**Note:** Canvas regeneration happens automatically at the end of executive summary creation, ensuring the visual representation stays in sync with workflow changes.

## Document Type-Specific Guidance

### For Opportunities
- Apply Jobs to Be Done framework (Importance, Satisfaction scores)
- Highlight strategic alignment with business outcomes
- Include opportunity score and evidence quality
- Reference related solutions and experiments

### For Solutions
- Apply Four Product Risks framework (Value, Usability, Feasibility, Business Viability)
- Include risk assessment summary
- Highlight expected impact on opportunities and outcomes
- Reference validation status and experiments

### For Ideas/Innovation Opportunities
- Apply Innovation Decision Framework (Revenue Potential, Reach & Impact, Buy-In & Feasibility, Execution Difficulty)
- Categorize as Moonshot vs Small Bet
- Highlight strategic alignment with innovation domains and pillars
- Include portfolio positioning

### For Research/Insights
- Focus on key findings and implications
- Link to opportunities or solutions created
- Highlight evidence quality and confidence
- Reference strategic relevance

### For Business/Product Outcomes
- Focus on target metrics and current state
- Highlight strategic importance
- Link to related opportunities and solutions
- Include progress indicators

## Related Prompts

- [Executive Summary Prompt](../../07-reference/prompts/document-generation/executive-summary-prompt.md) - Primary prompt used by this command

## Related Commands

- `pm.apply-decision-framework` - May use executive summaries when presenting framework assessments
- `pm.identify-opportunities` - May generate executive summaries for opportunities
- `generate-stakeholder-feedback` - May use executive summaries for stakeholder communications

## Related Methodology

- [Innovation Decision Framework](../../07-reference/methodology/innovation-decision-framework.md) - For innovation opportunities
- [Four Product Risks Framework](../../07-reference/methodology/four-product-risks-framework.md) - For solution assessments
- [Jobs to Be Done Framework](../../07-reference/methodology/jobs-to-be-done-framework.md) - For opportunity scoring
- [Decision Framework](../../07-reference/methodology/decision-framework.md) - Overall decision framework


