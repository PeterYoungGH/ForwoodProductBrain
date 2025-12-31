# Analyze Inbox Content

Command to analyze inbox item content to identify what it contains and how it should be integrated.

## Command Purpose

This command analyzes inbox item content using the content analysis prompt to identify:
- Objectives and goals
- Key results and metrics
- Strategic elements
- Outcomes (business, product, customer)
- Opportunities
- Solutions and features
- Research and discovery
- Initiatives
- Communications

## Execution Steps

### Step 1: Read Required Files

1. **Read the Content Analysis Prompt**
   - File: `07-reference/prompts/inbox-processing/content-analysis-prompt.md`
   - Purpose: Understand how to analyze inbox content
   - Action: Read and understand the prompt structure, parameters, and expected output

2. **Read the Inbox Item**
   - File: Path to inbox item (provided by user or selected from kanban board)
   - Purpose: Content to analyze
   - Action: Read the full inbox item content

3. **Read Related Documents (Optional)**
   - If analyzing content that relates to existing documents, read those documents
   - Purpose: Understand context and identify relationships

### Step 2: Apply Content Analysis Prompt

1. **Apply the Prompt**
   - Use the content analysis prompt to analyze the inbox item
   - Identify all content elements across the 10 categories
   - For each element:
     - Note the specific content or quote
     - Identify the risk level (HIGH, MEDIUM, LOW)
     - Suggest potential integration locations
     - Note relationships to existing documents

2. **Structure the Analysis**
   - Organize findings by category
   - Include risk levels for each element
   - List suggested integration locations
   - Note relationships to existing documents

### Step 3: Present Analysis

Present the analysis to the user in a structured format:
- List of identified content elements by category
- Risk level for each element
- Suggested integration locations
- Relationships to existing documents
- Any conflicts or contradictions with existing content

## Related Prompts

- [Content Analysis Prompt](../../07-reference/prompts/inbox-processing/content-analysis-prompt.md) - Primary prompt used by this command

## Related Commands

- `process-inbox-todo` - Uses content analysis as part of inbox processing
- `suggest-integrations` - Uses content analysis results to suggest integrations

## Related Methodology

- [Inbox Processing Rules](../../00-inbox/RULES.md) - Full processing workflow
- [Content Analysis Rules](../../00-inbox/RULES.md#content-analysis-rules) - Detailed content analysis guidelines

