# Generate Research Document

Command to create research documents from source materials (market research, customer feedback, competitive analysis, etc.).

## Command Purpose

This command creates structured research documents that follow the research template and maintain consistency across the knowledge base.

## Execution Steps

### Step 1: Read Required Files

1. **Read the Research Document Generation Prompt**
   - File: `07-reference/prompts/document-generation/research-document-prompt.md`
   - Purpose: Understand how to generate research documents
   - Action: Read and understand the prompt structure, parameters, and expected output

2. **Read the Research Template**
   - File: `07-reference/templates/research-template.md`
   - Purpose: Understand the document structure
   - Action: Review the template structure

3. **Read Source Material**
   - File: Path to source material (market research, customer feedback, competitive analysis, etc.)
   - Purpose: Material to convert into research document
   - Action: Read and understand the source material

4. **Read Related Documents (Optional)**
   - If creating research that relates to existing documents, read those documents
   - Purpose: Understand context and identify relationships

### Step 2: Apply Research Document Generation Prompt

1. **Apply the Prompt**
   - Use the research document generation prompt to create the document
   - Follow the template structure:
     - Document header
     - Research question
     - Objectives
     - Methodology
     - Key findings
     - Insights
     - Implications
     - Related opportunities
     - Related outcomes
     - Recommendations
     - Next steps
     - Artifacts
     - Notes

2. **Populate Document**
   - Fill in all sections based on source material
   - Ensure findings are specific and evidence-based
   - Link to related documents
   - Include source references

### Step 3: Save Document

1. **Determine Location**
   - Based on research type:
     - Market research: `03-discovery/research/market-research/`
     - Customer research: `03-discovery/research/user-research/`
     - Data analysis: `03-discovery/research/data-analysis/`
   - Use descriptive filename: `YYYY-MM-DD-[topic].md`

2. **Save and Link**
   - Save the research document
   - Link from source material (if applicable)
   - Link to related opportunities or outcomes
   - Update any index files if needed

## Related Prompts

- [Research Document Generation Prompt](../../07-reference/prompts/document-generation/research-document-prompt.md) - Primary prompt used by this command

## Related Commands

- `process-inbox-todo` - Uses research document generation when creating research documents from inbox items
- `synthesize-research` - Uses research document generation as part of synthesis
- `extract-insights` - May use research documents to extract insights

## Related Methodology

- [Research Template](../../07-reference/templates/research-template.md) - Research document template
- [Discovery Process](../../07-reference/methodology/discovery-process.md) - Product discovery methodology

