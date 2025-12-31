# Identify Opportunities

Command to identify and frame opportunities from insights, research, or customer needs within the Opportunity Solution Tree framework.

## Command Purpose

This command identifies and frames opportunities from insights or research, mapping them to business and product outcomes within the OST framework.

## Execution Steps

### Step 1: Read Required Files

1. **Read the Opportunity Framing Prompt**
   - File: `07-reference/prompts/opportunity-identification/opportunity-framing-prompt.md`
   - Purpose: Understand how to identify and frame opportunities
   - Action: Read and understand the prompt structure, parameters, and expected output

2. **Read Source Material**
   - Files: Paths to insights, research documents, or customer feedback
   - Purpose: Material to identify opportunities from
   - Action: Read and understand the source material

3. **Read Opportunity Solution Tree Guide**
   - File: `07-reference/methodology/opportunity-solution-tree-guide.md`
   - Purpose: Understand the OST framework
   - Action: Review the framework structure

4. **Read Business and Product Outcomes (Optional)**
   - Directories: `04-opportunities/01-business-outcomes/` and `04-opportunities/02-product-outcomes/`
   - Purpose: Understand existing outcomes to map opportunities to
   - Action: Review relevant outcomes

### Step 2: Apply Opportunity Framing Prompt

1. **Apply the Prompt**
   - Use the opportunity framing prompt to identify opportunities
   - Identify customer needs and pain points
   - Map to business and product outcomes
   - Define opportunity statements
   - Link to related opportunities

2. **Structure Opportunities**
   - Create clear opportunity statements
   - Map to outcomes
   - Identify relationships between opportunities

### Step 3: Generate Opportunity Documents

1. **Use Opportunity Document Generation Prompt**
   - File: `07-reference/prompts/document-generation/opportunity-document-prompt.md`
   - Purpose: Generate structured opportunity documents
   - Action: Apply the prompt to create documents

2. **Create Documents**
   - Generate opportunity documents following the template
   - Include opportunity statements, customer needs, outcome links, and supporting research
   - Link to related opportunities and solutions

### Step 4: Save Documents

1. **Determine Location**
   - Default: `04-opportunities/03-opportunities/active/` or `backlog/`
   - Use descriptive filename: `[opportunity-name].md`

2. **Save and Link**
   - Save the opportunity documents
   - Link from source insights or research (if applicable)
   - Link to business and product outcomes
   - Update any index files if needed

## Related Prompts

- [Opportunity Framing Prompt](../../07-reference/prompts/opportunity-identification/opportunity-framing-prompt.md) - Primary prompt used by this command
- [Opportunity Document Generation Prompt](../../07-reference/prompts/document-generation/opportunity-document-prompt.md) - Used to generate documents

## Related Commands

- `generate-opportunity-document` - Command dedicated to opportunity document generation
- `process-inbox-todo` - Uses opportunity identification when processing opportunity-related items
- `extract-insights` - May identify opportunities from insights

## Related Methodology

- [Opportunity Solution Tree Guide](../../07-reference/methodology/opportunity-solution-tree-guide.md) - OST framework
- [Opportunity Template](../../07-reference/templates/opportunity-template.md) - Opportunity document template

