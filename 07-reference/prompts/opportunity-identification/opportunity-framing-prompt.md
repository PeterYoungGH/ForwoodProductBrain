# Opportunity Framing Prompt

## Use Case

Use this prompt when identifying and framing new opportunities from insights, research, or customer needs.

## Context

This prompt guides the identification and framing of opportunities within the Opportunity Solution Tree framework, linking them to business and product outcomes.

## Prompt Text

Identify and frame opportunities following this structure:

### 1. Identify Customer Needs and Pain Points

From insights or research, identify:
- **Customer needs**: What needs are customers expressing?
- **Pain points**: What problems are customers experiencing?
- **Jobs to be done**: What jobs are customers trying to accomplish?
- **Evidence**: What evidence supports these needs? (research, feedback, data)

### 2. Map to Business and Product Outcomes

For each identified need or pain point:
- **Business outcomes**: Which business outcomes would addressing this support?
  - Link to existing business outcomes in `04-opportunities/01-business-outcomes/`
  - Consider: revenue, market share, customer satisfaction, etc.
- **Product outcomes**: Which product outcomes would addressing this support?
  - Link to existing product outcomes in `04-opportunities/02-product-outcomes/`
  - Consider: user engagement, feature adoption, time to value, etc.

### 3. Define Opportunity Statements

For each opportunity, create a clear statement:
- **Format**: "Customers need [need] because [reason], which creates an opportunity to [opportunity]"
- **Be specific**: Avoid generic statements
- **Customer-focused**: Focus on customer needs, not solutions
- **Evidence-based**: Base on evidence from research or insights

### 4. Link to Related Opportunities

Identify:
- **Related opportunities**: Other opportunities that relate to this one
- **Dependencies**: Opportunities that depend on or enable this one
- **Alternatives**: Alternative ways to address the same need
- **Sequencing**: If opportunities should be addressed in a particular order

### 5. Structure Opportunities

Organize by:
- **Outcome**: Group opportunities by the outcome they support
- **Priority**: If priority is known, organize by priority
- **Theme**: If opportunities share a theme, group by theme

## Parameters

- `source_insights`: Insights or research that identify the opportunity
- `customer_needs`: Customer needs or pain points to address
- `related_outcomes`: Business and product outcomes to map to
- `existing_opportunities`: Existing opportunities to relate to (optional)

## Expected Output

A structured set of opportunities that includes:
- Clear opportunity statements
- Customer needs and pain points
- Links to business and product outcomes
- Links to related opportunities
- Evidence supporting each opportunity

## Related Commands

- `identify-opportunities` - Command dedicated to opportunity identification
- `process-inbox-todo` - Uses this prompt when creating opportunities from inbox items

## Related Methodology

- [Opportunity Solution Tree Guide](../../methodology/opportunity-solution-tree-guide.md) - OST framework
- [Opportunity Template](../../templates/opportunity-template.md) - Opportunity document template

