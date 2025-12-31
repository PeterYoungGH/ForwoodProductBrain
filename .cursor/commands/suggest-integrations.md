# Suggest Integrations

Command to generate integration suggestions for inbox content based on content analysis.

## Command Purpose

This command generates integration suggestions that map content elements to appropriate locations in the Product Brain structure, respecting risk levels and requiring user approval.

## Execution Steps

### Step 1: Read Required Files

1. **Read the Integration Suggestion Prompt**
   - File: `07-reference/prompts/inbox-processing/integration-suggestion-prompt.md`
   - Purpose: Understand how to generate integration suggestions
   - Action: Read and understand the prompt structure, parameters, and expected output

2. **Read Content Analysis Results**
   - Either from previous analysis or analyze content now
   - Purpose: Content elements to map to integration locations
   - Action: Understand identified content elements and their risk levels

3. **Read Risk Level Mapping**
   - File: `00-inbox/RULES.md` (Risk-Based Approval Requirements section)
   - Purpose: Understand risk levels and approval requirements
   - Action: Understand HIGH, MEDIUM, and LOW risk categories

4. **Read Available Templates (Optional)**
   - Directory: `07-reference/templates/`
   - Purpose: Understand available document templates
   - Action: Review templates that might be relevant

### Step 2: Generate Integration Suggestions

1. **Apply the Prompt**
   - Use the integration suggestion prompt to generate suggestions
   - For each content element:
     - Determine integration type
     - Identify location
     - Assess risk level
     - Create description and content summary
     - Identify related documents
     - Reference appropriate template

2. **Structure Suggestions**
   - Group by risk level (HIGH first, then MEDIUM, then LOW)
   - Format each suggestion with:
     - Integration type
     - Location
     - Risk level
     - Description
     - Content summary
     - Related documents
     - Template reference
     - Impact assessment

### Step 3: Present Suggestions

Present all suggestions as numbered choices:
- Use clear, descriptive names for each option
- Group by risk level (HIGH first, then MEDIUM, then LOW)
- Include "Archive only" as the last option
- For each option, show: type, location, risk level, description

## Related Prompts

- [Integration Suggestion Prompt](../../07-reference/prompts/inbox-processing/integration-suggestion-prompt.md) - Primary prompt used by this command
- [Content Analysis Prompt](../../07-reference/prompts/inbox-processing/content-analysis-prompt.md) - Used to analyze content first

## Related Commands

- `process-inbox-todo` - Uses integration suggestions as part of inbox processing
- `analyze-inbox-content` - Provides content analysis results

## Related Methodology

- [Inbox Processing Rules](../../00-inbox/RULES.md) - Full processing workflow
- [Integration Suggestion Framework](../../00-inbox/RULES.md#integration-suggestion-framework) - Detailed integration guidelines
- [Risk-Based Approval Requirements](../../00-inbox/RULES.md#risk-based-approval-requirements) - Risk level definitions

