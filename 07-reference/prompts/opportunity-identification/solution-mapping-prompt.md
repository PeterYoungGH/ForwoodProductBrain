# Solution Mapping Prompt

## Use Case

Use this prompt when mapping solutions to opportunities within the Opportunity Solution Tree framework.

## Context

This prompt guides the identification and mapping of potential solutions to opportunities, evaluating feasibility and structuring solution documents.

## Prompt Text

Map solutions to opportunities following this structure:

### 1. Identify Potential Solutions

For each opportunity, identify:
- **Solution ideas**: What are potential solutions to address this opportunity?
- **Solution approaches**: Different ways to solve the problem
- **Solution types**: Product features, process changes, partnerships, etc.
- **Evidence**: What evidence suggests these solutions? (research, customer feedback, competitive analysis)

### 2. Evaluate Solution Feasibility

For each potential solution, evaluate:
- **Value risk**: Will customers buy/use this solution?
- **Usability risk**: Can users figure out how to use it?
- **Feasibility risk**: Can we build this solution?
- **Business viability risk**: Does this work for our business?

### 3. Link Solutions to Opportunities

For each solution:
- **Primary opportunity**: Which opportunity does this solution primarily address?
- **Secondary opportunities**: Which other opportunities might this solution address?
- **Solution statement**: Clear statement of what the solution is

### 4. Structure Solution Documents

For each solution, create:
- **Solution statement**: What is the solution?
- **Opportunity link**: Link to the opportunity(ies) it addresses
- **Feasibility assessment**: Risk assessment results
- **Success criteria**: How will we know this solution works?
- **Related solutions**: Other solutions that relate or complement

### 5. Organize Solutions

Organize by:
- **Opportunity**: Group solutions by the opportunity they address
- **Status**: Active, Proposed, Backlog
- **Priority**: If priority is known, organize by priority
- **Feasibility**: If feasibility is a factor, organize by feasibility

## Parameters

- `opportunity`: The opportunity to map solutions to
- `solution_ideas`: Potential solution ideas (optional)
- `feasibility_framework`: Framework to use for feasibility assessment (e.g., Four Risks)

## Expected Output

A structured set of solutions that includes:
- Solution statements
- Links to opportunities
- Feasibility assessments
- Success criteria
- Links to related solutions

## Related Commands

- `identify-opportunities` - May use this prompt when identifying solutions
- `process-inbox-todo` - Uses this prompt when creating solutions from inbox items

## Related Methodology

- [Opportunity Solution Tree Guide](../../methodology/opportunity-solution-tree-guide.md) - OST framework
- [Four Product Risks Framework](../../methodology/four-product-risks-framework.md) - Risk assessment framework
- [Solution Template](../../templates/solution-template.md) - Solution document template

