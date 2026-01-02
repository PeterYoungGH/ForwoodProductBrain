# pm.extract-insights

**Step 2** - Command to extract key insights from research documents, customer feedback, market data, or other source materials.

## Command Purpose

This command extracts actionable insights from research materials, ensuring insights are well-structured, evidence-based, and linked to implications and action items.

## Execution Steps

### Step 1: Read Required Files

1. **Read the Insight Extraction Prompt**
   - File: `07-reference/prompts/research-analysis/insight-extraction-prompt.md`
   - Purpose: Understand how to extract insights
   - Action: Read and understand the prompt structure, parameters, and expected output

2. **Read Source Material**
   - File: Path to research document, feedback, or data source
   - Purpose: Material to extract insights from
   - Action: Read and understand the source material

3. **Read Related Documents (Optional)**
   - If extracting insights that relate to existing documents, read those documents
   - Purpose: Understand context and identify relationships

### Step 2: Apply Insight Extraction Prompt

1. **Apply the Prompt**
   - Use the insight extraction prompt to analyze the source material
   - Identify key learnings, patterns, trends, and surprises
   - Formulate insight statements with evidence
   - Categorize insights (product, strategic, market, customer)
   - Identify action items with priorities

2. **Structure Insights**
   - Create insight statements with evidence
   - Organize by category
   - Prioritize action items
   - Link to related documents

### Step 3: Generate Insight Document

1. **Use Insight Document Generation Prompt**
   - File: `07-reference/prompts/document-generation/insight-document-prompt.md`
   - Purpose: Generate structured insight document
   - Action: Apply the prompt to create the document

2. **Create Document**
   - Generate insight document following the template
   - Include insight statements, evidence, implications, and action items
   - Link to source research and related documents
   - Set confidence level based on evidence quality

### Step 4: Save Document

1. **Determine Location**
   - Default: `03-discovery/insights/`
   - Use descriptive filename: `YYYY-MM-DD-[topic]-insights.md`

2. **Save and Link**
   - Save the insight document
   - Link from source research document (if applicable)
   - Link to related opportunities or outcomes

## Related Prompts

- [Insight Extraction Prompt](../../07-reference/prompts/research-analysis/insight-extraction-prompt.md) - Primary prompt used by this command
- [Insight Document Generation Prompt](../../07-reference/prompts/document-generation/insight-document-prompt.md) - Used to generate the document

## Related Commands

- `generate-insight-document` - Command dedicated to insight document generation
- `pm.process-inbox-todo` - Uses insight extraction when processing research items
- `pm.synthesize-research` - May use insight extraction as part of synthesis

## Related Methodology

- [Research Template](../../07-reference/templates/research-template.md) - Research document structure
- [Discovery Process](../../07-reference/methodology/discovery-process.md) - Product discovery methodology

