# OST Application Prompt

## Use Case

Use this prompt when applying the Opportunity Solution Tree framework to structure product work.

## Context

This prompt guides the application of the OST framework to map business outcomes to product outcomes, identify opportunities, structure solutions, and organize experiments.

## Prompt Text

Apply the Opportunity Solution Tree framework following this structure:

### 1. Map Business Outcomes to Product Outcomes

For each business outcome:
- **Identify supporting product outcomes**: Which product outcomes support this business outcome?
- **Create links**: Link product outcomes to business outcomes
- **Ensure measurability**: Both business and product outcomes should be measurable
- **Document relationships**: Document how product outcomes contribute to business outcomes

### 2. Identify Opportunities from Outcomes

For each product outcome:
- **Discover opportunities**: What customer needs, pain points, or desires would drive this outcome?
- **Base on research**: Use research, insights, and customer feedback to identify opportunities
- **Focus on customer needs**: Opportunities should be customer-focused, not solution-focused
- **Link to outcomes**: Link opportunities to the product outcomes they support
- **Multiple opportunities**: Multiple opportunities can support one outcome

### 3. Structure Solutions under Opportunities

For each opportunity:
- **Identify solutions**: What are potential ways to address this opportunity?
- **Link to opportunities**: Link solutions to the opportunities they address
- **Multiple solutions**: Multiple solutions can address one opportunity
- **Validate before implementation**: Solutions should be validated before full implementation

### 4. Organize Experiments under Solutions

For each solution:
- **Design experiments**: What experiments can validate or invalidate this solution?
- **Link to solutions**: Link experiments to the solutions they test
- **Hypothesis-driven**: Experiments should be hypothesis-driven
- **Multiple experiments**: Multiple experiments can test one solution
- **Results inform decisions**: Experiment results inform go/no-go decisions

### 5. Maintain Hierarchy

Ensure:
- **Clear hierarchy**: Business Outcomes → Product Outcomes → Opportunities → Solutions → Experiments
- **Proper linking**: All levels are properly linked
- **Traceability**: Can trace from experiments back to business outcomes
- **Documentation**: All levels are properly documented

## Parameters

- `business_outcomes`: List of business outcomes to map from
- `product_outcomes`: List of product outcomes to map to
- `opportunities`: List of opportunities to structure
- `solutions`: List of solutions to organize
- `experiments`: List of experiments to organize

## Expected Output

A structured OST that includes:
- Business outcomes mapped to product outcomes
- Opportunities linked to product outcomes
- Solutions linked to opportunities
- Experiments linked to solutions
- Clear hierarchy and traceability

## Related Commands

- `apply-decision-framework` - Command for applying decision frameworks
- `identify-opportunities` - Uses OST framework
- `process-inbox-todo` - May use OST when processing strategic items

## Related Methodology

- [Opportunity Solution Tree Guide](../../methodology/opportunity-solution-tree-guide.md) - OST framework guide
- [Opportunity Template](../../templates/opportunity-template.md) - Opportunity document template
- [Solution Template](../../templates/solution-template.md) - Solution document template

