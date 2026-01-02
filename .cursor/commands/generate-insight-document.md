# Generate Insight Document

Command to create insight documents from research, analysis, or synthesis of multiple sources.

## Command Purpose

This command creates structured insight documents that capture key learnings, evidence, implications, and action items.

## Execution Steps

### Step 1: Read Required Files

1. **Read the Insight Document Generation Prompt**
   - File: `07-reference/prompts/document-generation/insight-document-prompt.md`
   - Purpose: Understand how to generate insight documents
   - Action: Read and understand the prompt structure, parameters, and expected output

2. **Read Source Material**
   - File: Path to research document, analysis, or synthesis
   - Purpose: Material to extract insights from
   - Action: Read and understand the source material

3. **Read Related Documents (Optional)**
   - If creating insights that relate to existing documents, read those documents
   - Purpose: Understand context and identify relationships

### Step 2: Extract Insights (if needed)

1. **Apply Insight Extraction Prompt (if not already done)**
   - File: `07-reference/prompts/research-analysis/insight-extraction-prompt.md`
   - Purpose: Extract insights from source material
   - Action: Apply the prompt to identify insights, evidence, and implications

### Step 3: Apply Insight Document Generation Prompt

1. **Apply the Prompt**
   - Use the insight document generation prompt to create the document
   - Follow the structure:
     - Document header
     - Insight statement
     - Evidence
     - Context
     - Implications (product, strategic, market, customer)
     - Action items
     - Related documents
     - Confidence level

2. **Populate Document**
   - Create clear, evidence-based insight statement
   - Include supporting evidence with sources
   - Provide context and implications
   - List prioritized action items
   - Link to related documents

### Step 4: Save Document

1. **Determine Location**
   - Default: `03-discovery/insights/`
   - Use descriptive filename: `YYYY-MM-DD-[topic]-insights.md`

2. **Save and Link**
   - Save the insight document
   - Link from source research document (if applicable)
   - Link to related opportunities or outcomes
   - Update any index files if needed

## Related Prompts

- [Insight Document Generation Prompt](../../07-reference/prompts/document-generation/insight-document-prompt.md) - Primary prompt used by this command
- [Insight Extraction Prompt](../../07-reference/prompts/research-analysis/insight-extraction-prompt.md) - Used to extract insights if needed

## Related Commands

- `pm.extract-insights` - Command dedicated to insight extraction
- `pm.process-inbox-todo` - Uses insight document generation when creating insight documents from inbox items
- `pm.synthesize-research` - May use insight document generation as part of synthesis

## Related Methodology

- [Research Template](../../07-reference/templates/research-template.md) - Research document structure
- [Discovery Process](../../07-reference/methodology/discovery-process.md) - Product discovery methodology

