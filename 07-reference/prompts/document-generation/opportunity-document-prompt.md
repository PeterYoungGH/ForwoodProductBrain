# Opportunity Document Generation Prompt

## Use Case

Use this prompt when creating opportunity documents within the Opportunity Solution Tree framework.

## Context

This prompt guides the creation of structured opportunity documents that link to business and product outcomes and follow the opportunity template.

## Prompt Text

Generate an opportunity document following this structure:

### 1. Document Header

Include:
- **Title**: Clear, descriptive opportunity name
- **Date**: Date of opportunity creation (YYYY-MM-DD)
- **Status**: Active, Backlog, or Archive
- **Priority**: High, Medium, or Low (if applicable)

### 2. Opportunity Statement

Create:
- **Clear statement**: What is the opportunity?
- Format: "Customers need [need] because [reason], which creates an opportunity to [opportunity]"
- Should be specific and customer-focused

### 3. Customer Needs and Pain Points

Describe:
- **Customer needs**: What needs does this opportunity address?
- **Pain points**: What pain points does this solve?
- **Jobs to be done**: What jobs are customers trying to accomplish?
- **Evidence**: What evidence supports these needs? (research, feedback, data)

### 4. Business Outcome Links

Link to:
- **Related business outcomes**: Which business outcomes does this opportunity support?
- Use relative paths: `../../01-business-outcomes/outcome-name.md`
- Explain how this opportunity contributes to each business outcome

### 5. Product Outcome Links

Link to:
- **Related product outcomes**: Which product outcomes does this opportunity support?
- Use relative paths: `../../02-product-outcomes/outcome-name.md`
- Explain how this opportunity contributes to each product outcome

### 6. Related Opportunities

Link to:
- **Related opportunities**: Other opportunities that relate to this one
- Use relative paths: `../active/opportunity-name.md` or `../backlog/opportunity-name.md`
- Explain the relationship

### 7. Related Solutions

Link to:
- **Proposed solutions**: Solutions that address this opportunity
- **Active solutions**: Solutions currently being developed
- Use relative paths: `../../04-solutions/active/solution-name.md` or `../../04-solutions/proposed/solution-name.md`

### 8. Supporting Research

Link to:
- **Research documents**: Research that supports or informs this opportunity
- **Insights**: Insights that led to identifying this opportunity
- Use relative paths to research and insights

### 9. Success Criteria

Define:
- **How will we know this opportunity is addressed?**
- **What metrics or indicators will we track?**
- **What outcomes will we measure?**

### 10. Notes

Include:
- Additional context or observations
- Assumptions
- Questions or unknowns

## Parameters

- `opportunity_content`: The opportunity to document
- `customer_needs`: Customer needs this opportunity addresses
- `related_outcomes`: Business and product outcomes to link to
- `template_path`: Path to opportunity template (default: `07-reference/templates/opportunity-template.md`)
- `related_documents`: Related documents to link to (optional)

## Expected Output

A complete opportunity document that:
- Follows the opportunity template structure
- Has a clear opportunity statement
- Links to business and product outcomes
- Links to related opportunities and solutions
- Includes supporting research
- Uses proper markdown formatting

## Related Commands

- `identify-opportunities` - Command dedicated to opportunity identification and creation
- `generate-opportunity-document` - Command dedicated to opportunity document generation
- `process-inbox-todo` - Uses this prompt when creating opportunity documents from inbox items

## Related Methodology

- [Opportunity Solution Tree Guide](../../methodology/opportunity-solution-tree-guide.md) - OST framework
- [Opportunity Template](../../templates/opportunity-template.md) - Opportunity document template

