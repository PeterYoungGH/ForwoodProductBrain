# Integration Suggestion Prompt

## Use Case

Use this prompt when generating suggestions for where and how to integrate inbox content into the Product Brain knowledge base.

## Context

After analyzing inbox content, this prompt guides the generation of specific integration suggestions that map content elements to appropriate locations in the Product Brain structure, respecting risk levels and requiring user approval.

## Prompt Text

Based on the content analysis, generate integration suggestions following these rules:

### Risk Level Mapping

**HIGH RISK** (Always require explicit approval):
- Strategy (`01-strategy/`)
  - Roadmap updates
  - Strategic focus areas
  - Vision statements
- Initiatives (`02-initiatives/`)
  - New initiatives
  - Initiative updates

**MEDIUM RISK** (Always require explicit approval):
- Business Outcomes (`04-opportunities/01-business-outcomes/`)
- Product Outcomes (`04-opportunities/02-product-outcomes/`)
- Opportunities (`04-opportunities/03-opportunities/`)
- Research/Discovery (`03-discovery/`)
  - Research documents
  - Insights
  - Experiments

**LOW RISK** (Present choices, can be streamlined):
- Solutions (`04-opportunities/04-solutions/`)
- Experiments (`04-opportunities/05-experiments/`)
- Communications (`05-communications/`)

### Integration Suggestion Format

For each integration suggestion, provide:

1. **Integration Type**: What type of document/update (e.g., "Create new research document", "Update existing opportunity", "Create new insight document")

2. **Location**: Full path where the integration should occur (e.g., `03-discovery/research/market-research/`)

3. **Risk Level**: HIGH, MEDIUM, or LOW

4. **Description**: Clear description of what will be created or modified

5. **Content Summary**: Brief summary of the content that will be integrated

6. **Related Documents**: Links to existing documents that relate to this integration

7. **Template Reference**: Which template should be used (if creating new document)

8. **Impact**: What existing documents or structures will be affected

### Presentation Format

Present all suggestions as numbered choices:
- Use clear, descriptive names for each option
- Group by risk level (HIGH first, then MEDIUM, then LOW)
- Include "Archive only" as the last option
- For each option, show: type, location, risk level, description

## Parameters

- `content_elements`: List of identified content elements from content analysis
- `risk_levels`: Risk level mapping from RULES.md
- `existing_documents`: List of related existing documents
- `templates`: Available templates from `07-reference/templates/`

## Expected Output

A structured list of integration suggestions, each including:
- Integration type and location
- Risk level
- Description and content summary
- Related documents and template reference
- Impact assessment

All suggestions must be presented as user choices requiring explicit approval.

## Related Commands

- `process-inbox-todo` - Uses this prompt in Step 2.2
- `suggest-integrations` - Command dedicated to integration suggestions

## Related Methodology

- [Inbox Processing Rules](../../../00-inbox/RULES.md) - Full processing workflow
- [Integration Suggestion Framework](../../../00-inbox/RULES.md#integration-suggestion-framework) - Detailed integration guidelines
- [Risk-Based Approval Requirements](../../../00-inbox/RULES.md#risk-based-approval-requirements) - Risk level definitions

